import React from 'react'


const ShopFiltering = ({filters, filterState, setFilterState, clearFilters}) => {
  return (
    <div className='space-y-5 flex-shrink-0'>
      <h3>Filters</h3>

{/* Categories */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Category</h4>
        <hr />
        {
          filters.categories.map((category) => (
            <label htmlFor="" key={category} className='capitalize cursor-pointer'>
              <input type="radio" name='category' id='category' value={category} 
              checked={filterState.category === category} 
              onChange={(e) => setFilterState({...filterState, category:e.target.value})}/>
              
              <span className='ml-1'>{category}</span>
            </label>
          ))
        }
      </div>

{/* Colors */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Color</h4>
        <hr />
        {
          filters.colors.map((color) => (
            <label htmlFor="" key={color} className='capitalize cursor-pointer'>
              <input type="radio" name='color' id='color' value={color} 
              checked={filterState.color === color} 
              onChange={(e) => setFilterState({...filterState, color:e.target.value})}/>
              
              <span className='ml-1'>{color}</span>
            </label>
          ))
        }
      </div>


{/* Pricing */}
      <div className='flex flex-col space-y-2'>
        <h4 className='font-medium text-lg'>Price Range</h4>
        <hr />
        {
          filters.priceRanges.map((range) => (
            <label htmlFor="" key={range.label} className='capitalize cursor-pointer'>
              <input type="radio" name='priceRange' id='priceRange' value={`${range.min}-${range.max}`} 
              checked={filterState.priceRange === `${range.min}-${range.max}`} 
              onChange={(e) => setFilterState({...filterState, priceRange:e.target.value})}/>
              
              <span className='ml-1'>{range.label}</span>
            </label>
          ))
        }
      </div>

{/* Clear Filters */}

        <button onClick={clearFilters} className='bg-red-700 py-1 px-4 text-white rounded'>
            Clear All Filter
        </button>


    </div>
  )
}

export default ShopFiltering