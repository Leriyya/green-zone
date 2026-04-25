import { PCBuild, buildToProduct, API_BASE_URL } from "@/lib/builds";
import ProductCardLarge from "./ProductCardLarge";
import ProductCardSmall from "./ProductCardSmall";
import CatalogProvider from "./CatalogProvider";
import styles from "./Catalog.module.scss";

async function getBuilds(): Promise<PCBuild[]> {
  const res = await fetch(`${API_BASE_URL}/api/builds`, {
    cache: "no-store",
  });
  console.log('res',res);
  
  if (!res.ok) return [];
  const data = await res.json();
  console.log("data", data);

  return data.builds ?? [];
}

export default async function Catalog() {
  const builds = await getBuilds();

  const sortedByWeight = builds
    .filter((b) => b.featured != null)
    .sort((a, b) => (a.featured as number) - (b.featured as number));

  const featuredBuilds = sortedByWeight.slice(0, 2);
  const featuredIds = new Set(featuredBuilds.map((b) => b.id));

  const featured = featuredBuilds.map(buildToProduct);
  const small = builds
    .filter((b) => !featuredIds.has(b.id))
    .map(buildToProduct);

  return (
    <section id="catalog" className={styles.catalog}>
      <CatalogProvider>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>OUR SELECTION</p>
            <h2 className={styles.title}>READY BUILDS</h2>
          </div>

          <div className={styles.featuredGrid}>
            {featured.map((p) => (
              <ProductCardLarge key={p.id} product={p} />
            ))}
          </div>

          <div className={styles.smallGrid}>
            {small.map((p) => (
              <ProductCardSmall key={p.id} product={p} />
            ))}
          </div>
        </div>
      </CatalogProvider>
    </section>
  );
}
