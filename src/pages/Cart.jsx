import { Divider } from "antd";
import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/cart/CartContext";
import { totalPriceCalculator } from "../utilities/priceCalculator";

const Cart = () => {
  const { cartItems,totalValues } = useCart();
  const [total,setTotal] = useState([]);


  return (
    <div className="container ">
      <div className="d-flex flex-wrap align-items-center ">
      <div>
        {cartItems.map((item) => (
          <CartItem id={item.id} total={total} setTotal={setTotal} quantity={item.quantity} key={item.id} />
        ))}
      </div>

      <div className="mx-2">
        <h6 className="" style={{ fontSize: "26px" }}>
          Cart Summary
        </h6>
        <div className="row">
          <div className="col">
            <p>Subtotal</p>
            <p> Shipping:</p>
          </div>

          <div className="col">
            {/* <p> ${totalPriceCalculator(
                      product.price,
                      product.discountPercentage
                    )}</p> */}
            <p>FREE</p>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col">
            <div style={{fontWeight: '700 !important'}}>Total:</div>
          </div>
          <div className="col">
                  <div style={{fontWeight: '700 !important'}}>${totalValues}</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
