import React from "react";
import "../../assets/ProductDetailSkeleton.scss";

function ProductDetailsSkeleton() {
  return (
    <>
      <div className="back-button skeleton-back">
        <div className="shimmer back-line"></div>
      </div>

      <section className="product-detail skeleton-detail">
        <div className="product-image">
          <div className="shimmer image"></div>
        </div>

        <div className="product-content">
          <div className="category shimmer"></div>

          <div className="title shimmer"></div>
          <div className="title short shimmer"></div>

          <div className="description shimmer"></div>
          <div className="description shimmer"></div>
          <div className="description short shimmer"></div>

          <div className="price-rating">
            <div className="price shimmer"></div>

            <div className="rating shimmer"></div>
          </div>

          <div className="offer shimmer"></div>

          <div className="info-grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="info-card">
                <div className="label shimmer"></div>
                <div className="value shimmer"></div>
              </div>
            ))}
          </div>

          <div className="cart-btn shimmer"></div>
        </div>
      </section>
    </>
  );
}

export default ProductDetailsSkeleton;