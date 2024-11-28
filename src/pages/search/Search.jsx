import React, { useState } from 'react';
import productsData from '../../data/products.json';
import ProductCards from '../shop/ProductCards';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterProducts, setFilterProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLocaleLowerCase();
    console.log('Button Clicked');

    const filtered = productsData.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(query) ||
        product.description.toLocaleLowerCase().includes(query)
    );

    setFilterProducts(filtered);
  };

  return (
    <>
      <section
        className="container section__container shadow-sm"
        style={{ marginTop: '154px' }}
      >
        <h2 className="section__header capitalize">Search Products</h2>
        <p className="section__subheader">
          Browse a diverse range of categories, from chic dresses to versatile
          accessories. Elevate your style today!
        </p>
      </section>

      <section className="container section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar w-full max-w-4xl p-2 border rounded"
          />
          <button
            className="search-button w-full md:w-auto py-2 px-8 rounded text-stone-200 bg-red-700"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Showing the Products */}
        <ProductCards products={filterProducts} />
      </section>
    </>
  );
};

export default Search;
