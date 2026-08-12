import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, productCategories, ProductCategory } from '../data/products';
import { clientConfig } from '../config/clientConfig';
import styles from './Products.module.css';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') as ProductCategory | 'All' || 'All';

  const filteredProducts = useMemo(() => {
    if (currentCategory === 'All') return products;
    return products.filter((p) => p.category === currentCategory);
  }, [currentCategory]);

  return (
    <div className={styles.productsPage}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Collections</span>
          <h1>Premium {currentCategory === 'All' ? 'Bath Fittings' : currentCategory}</h1>
          <p>Explore {clientConfig.businessName}'s curated selection of high-end bathroom solutions.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${styles.mainContent} section-pad`}>
        <div className="container">
          <div className={styles.layout}>
            {/* Sidebar / Filters */}
            <aside className={styles.sidebar}>
              <h3 className={styles.filterTitle}>Categories</h3>
              <ul className={styles.categoryList}>
                <li>
                  <button
                    className={`${styles.categoryBtn} ${currentCategory === 'All' ? styles.active : ''}`}
                    onClick={() => setSearchParams({})}
                  >
                    All Products
                  </button>
                </li>
                {productCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`${styles.categoryBtn} ${currentCategory === cat ? styles.active : ''}`}
                      onClick={() => setSearchParams({ category: cat })}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Product Grid */}
            <div className={styles.productGrid}>
              {filteredProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.imageWrapper}>
                    {product.badge && <span className={styles.badge}>{product.badge}</span>}
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                  <div className={styles.productInfo}>
                    <span className={styles.productCat}>{product.category}</span>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDesc}>{product.description}</p>
                    <button className={styles.viewBtn}>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
