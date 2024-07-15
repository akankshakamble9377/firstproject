

import React from 'react'

const Home = (props) => {
  return (

    <div className='main-wrapper'>
      <div className='cart-img'>
<img src='https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA='/>
      </div>
    <div className='cart-wrapper'>

      <div className='img-wrapper item'>
        <img src="https://img.freepik.com/premium-vector/phone-with-colorful-background-colorful-design_961307-2511.jpg"/>
      </div>


      <div className='text-wrapper item'>
       <span>I-phone</span>
       <span>price :$1000</span>
      </div>

     <div className='btn-wrapper item'>
          <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
      </div>
    </div>
    </div>
  )
}

export default Home