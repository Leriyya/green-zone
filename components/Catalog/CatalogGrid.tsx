"use client";

import { useEffect, useState } from "react";
import { Product } from "@/lib/products";
import { useLanguage } from "@/context/LanguageContext";
import ProductCardLarge from "./ProductCardLarge";
import ProductCardSmall from "./ProductCardSmall";
import ProductCardList from "./ProductCardList";
import CatalogProvider from "./CatalogProvider";
import styles from "./Catalog.module.scss";

type ViewMode = "grid" | "list";
type ConditionFilter = "all" | "new" | "refurbished";

interface CatalogGridProps {
  featured: Product[];
  small: Product[];
  all: Product[];
}

export default function CatalogGrid({
  featured,
  small,
  all,
}: CatalogGridProps) {
  const [view, setView] = useState<ViewMode>("grid");
  const [condition, setCondition] = useState<ConditionFilter>("all");
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) setView("grid");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filterByCondition = (products: Product[]) => {
    if (condition === "all") return products;
    if (condition === "new")
      return products.filter((p) => p.refurbished === false);
    return products.filter((p) => p.refurbished === true);
  };

  const filteredFeatured = filterByCondition(featured);
  const filteredSmall = filterByCondition(small);
  const filteredAll = filterByCondition(all);

  const conditionLabels: Record<ConditionFilter, string> = {
    all: t.catalog.filterAll,
    new: t.product.new,
    refurbished: t.product.used,
  };

  return (
    <CatalogProvider>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{t.catalog.eyebrow}</p>
          <h2 className={styles.title}>{t.catalog.title}</h2>
        </div>
        <div className={styles.controls}>
          <div className={styles.conditionFilter}>
            {(["all", "new", "refurbished"] as ConditionFilter[]).map((c) => (
              <button
                key={c}
                className={`${styles.filterBtn} ${condition === c ? styles.filterBtnActive : ""}`}
                onClick={() => setCondition(c)}
              >
                {conditionLabels[c]}
              </button>
            ))}
          </div>
          {!isMobile && <div className={styles.viewToggle}>
            <button
              className={`${styles.toggleBtn} ${view === "grid" ? styles.toggleBtnActive : ""}`}
              onClick={() => setView("grid")}
              aria-label="Grid view"
            >
              <span className="material-symbols-outlined">grid_view</span>
            </button>
            <button
              className={`${styles.toggleBtn} ${view === "list" ? styles.toggleBtnActive : ""}`}
              onClick={() => setView("list")}
              aria-label="List view"
            >
              <span className="material-symbols-outlined">list</span>
            </button>
          </div>}
        </div>
      </div>

      {view === "grid" ? (
        <>
          <div className={styles.featuredGrid}>
            {filteredFeatured.map((p) => (
              <ProductCardLarge key={p.id} product={p} />
            ))}
          </div>
          <div className={styles.smallGrid}>
            {filteredSmall.map((p) => (
              <ProductCardSmall key={p.id} product={p} />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.listGrid}>
          {filteredAll.map((p) => (
            <ProductCardList key={p.id} product={p} />
          ))}
        </div>
      )}
    </CatalogProvider>
  );
}
