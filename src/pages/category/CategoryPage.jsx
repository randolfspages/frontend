import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import products from '../../data/products.json';
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [filteredProducts, setFilterProducts] = useState([]);
  console.log(categoryName);

  useEffect(() => {
    const filtered = products.filter(
      (product) => product.category === categoryName.toLocaleLowerCase()
    );
    setFilterProducts(filtered);
  }, [categoryName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <section
        className="container section__container shadow-sm"
        style={{ marginTop: '154px' }}
      >
        <h2 className="section__header capitalize">{categoryName}</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      {/* Products card */}
      <div className="section__container">
        <ProductCards products={filteredProducts} />
      </div>
    </>
  );
};

export default CategoryPage;
