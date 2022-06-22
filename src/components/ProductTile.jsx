import { Card, Col, Rate } from 'antd'
import Meta from 'antd/lib/card/Meta'
import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { totalPriceCalculator } from '../utilities/priceCalculator'

const ProductTile = ({item}) => {
  // let totalValue;
  // const getTotalPrice = () =>{
  //   debugger
  //   totalValue = item.price * ( item.discountPercentage / 100)
  // }

  // useEffect(() => {
  //   getTotalPrice();
  // },[])
  return (
    <div className='col-md-6 col-lg-3 col-sm-12'  >
      <Link to={`/product/${item.id}`}>
    <Card  hoverable className='m-2'   style={{maxWidth:'300px', maxHeight:'350px'}}
    cover={<img alt="example" src={item.thumbnail} style={{height:'220px'}}/>} >
    <Meta title={item.title} style={{fontSize:'12px', wordWrap:'break-word', color:'#108ee9 !important'}}/>
    <div  style={{ marginTop:'10px', }}>
      <span style={{fontSize:'18px', color:'#f57224'}}>${item.price}</span>
      <div className='d-flex ' >
      <span style={{fontSize:'10px', textDecoration:'line-through', marginRight:'10px', color:'#9e9e9e'}}>${totalPriceCalculator(item.price, item.discountPercentage)}</span>
      <span style={{fontSize:'10px', color:'#757575'}}>-{item.discountPercentage}%</span>
      </div>
      <div className="d-flex">
      <Rate style={{fontSize:'12px'}} className="col-sm-12" allowHalf disabled defaultValue={item.rating} />
      </div>
      </div>
    </Card>
    </Link>
    </div>
  )
}

export default ProductTile