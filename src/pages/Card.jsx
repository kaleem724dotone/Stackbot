import React from 'react'
import ViewCard from '../components/ViewCard/ViewCard'
import Products from '../components/Products'


const Card = () => {
  return (
    <div>
        <ViewCard/>
        <Products heading="You may like" description="You may also like these products." filter={{ featured: true, category: "Electronics", rating: 4, priceMax: 100 }} columns={4}/>
    </div>
  )
}

export default Card