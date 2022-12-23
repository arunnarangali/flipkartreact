import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Products() {
    const fliparray=[
       
        {productname:"pixel 6a",price1:1500,photo1:"https://www.etoren.com/upload/images/0.01312600_1658460882_google-pixel-6a-5g-gb17l-128gb-chalk-6gb-ram.jpg"},
        {productname:"iphone se",price1:2500,photo1:"https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg"},
        {productname:"Nothing",price1:3500,photo1:"https://rukminim1.flixcart.com/image/416/416/l5h2xe80/mobile/5/x/r/-original-imagg4xza5rehdqv.jpeg?q=70"},
        {productname:"one pluse 8T",price1:2500,photo1:"https://www.digitaltrends.com/wp-content/uploads/2019/12/oneplus-8-lite-render.jpg?p=1"},
        {productname:"sammsung s22 ultra",price1:5500,photo1:"https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg"} ,
        {productname:"pixel 5a",price1:3500,photo1:"https://cdn1.smartprix.com/rx-iKnDmaKTL-w420-h420/google-pixel-5a.jpg"},
        {productname:"Red Magic 7",price1:5500,photo1:"https://rukminim1.flixcart.com/image/416/416/kzvlua80/screen-guard/front-and-back-screen-guard/r/x/z/zte-nubia-red-magic-7-fb-tombik-original-imagbsrhqzzcexze.jpeg?q=70"},
        {productname:"Rog 5s",price1:5500,photo1:"https://rukminim1.flixcart.com/image/416/416/kyq62kw0/screen-guard/front-and-back-screen-guard/i/w/y/asus-rog-phone-5-ultimate-lightwings-original-imagawayhhqzz3qx.jpeg?q=70"},
        {productname:"one pluse 10R",price1:5500,photo1:"https://htcms-prod-images.s3.ap-south-1.amazonaws.com/htmobile4/P38208/images/Design/152816-v1-oneplus-10r-prime-blue-edition-mobile-phone-large-4.jpg"},
        {productname:"pixel 4a",price1:5500,photo1:"https://m.media-amazon.com/images/I/51+zLzIdUsL._SL1000_.jpg"},
        {productname:"i phone 12",price1:5500,photo1:"https://images-eu.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_UL600_SR600,600_.jpg"},
        {productname:"Nokia 3310 ",price1:1500,photo1:"https://m.media-amazon.com/images/I/61IHiIQzzBL._SX522_.jpg"}

      ]
    
  return (
    
      <div   style={{display: 'flex' , flexWrap:'wrap'}} >
        
  {fliparray.map((p1)=>
     
      
        <Card style={{ width: '18rem' ,padding:'10px 20px', margin:'10px 30px' }}>
    <Card.Img variant="top" src={p1.photo1} />
    <Card.Body>
      <Card.Title>{p1.productname} </Card.Title>
      <Card.Text>
       
      price ${p1.price1}
       {/* {`prices $  ${p1.price1}`} */}
      </Card.Text>
      <Button variant="primary">buy</Button>
    </Card.Body>
  </Card>
  
  )}
  </div>
  )
}

export default Products