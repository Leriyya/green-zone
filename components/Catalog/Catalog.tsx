import { PCBuild, buildToProduct, API_BASE_URL } from "@/lib/builds";
import CatalogGrid from "./CatalogGrid";
import styles from "./Catalog.module.scss";

async function getBuilds(): Promise<PCBuild[]> {
  const res = await fetch(`${API_BASE_URL}/api/builds`, {
    cache: "no-store",
  });

  if (!res.ok) return [];
  const data = await res.json();

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

  const all = [...featured, ...small];

  return (
    <section id="catalog" className={styles.catalog}>
      <div className={styles.inner}>
        <CatalogGrid featured={featured} small={small} all={all} />
      </div>
    </section>
  );
}
