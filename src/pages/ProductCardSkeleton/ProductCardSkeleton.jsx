import "../../styles/ProductCardSkeleton.scss";

function ProductCardSkeleton() {
  return (
    <div className="product-list">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="product-card skeleton">
          <div className="image shimmer"></div>

          <div className="product-info">
            <div className="category shimmer"></div>

            <div className="title shimmer"></div>
            <div className="title small shimmer"></div>

            <div className="rating shimmer"></div>

            <div className="price-section">
              <div className="price shimmer"></div>
              <div className="discount shimmer"></div>
            </div>

            <div className="button shimmer"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCardSkeleton;