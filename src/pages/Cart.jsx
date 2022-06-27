import { Button, Divider } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/cart/CartContext";
import { totalPriceCalculator } from "../utilities/priceCalculator";

const Cart = () => {
  const { cartItems, totalValues } = useCart();

  return cartItems.length === 0 ? (
    <div className="contaier">
      <div
        className="text-center"
        style={{ margin: "auto 0" }}
      >
        <div className="m-2 h2" style={{ fontSize: "1.25rem " }}>
          Your cart is currently empty{" "}
        </div>
        <div className="m-2">
          <Link to="/login"> Sign in</Link> to see items you might have added
          previously. If you have questions or require assistance please visit
          our Help Center or Contact Us.
        </div>

        <Link to="/">
          {" "}
          <Button className="m-2"> Continue Shopping </Button>{" "}
        </Link>
      </div>
    </div>
  ) : (
    <div className="container ">
      <div className="row  ">
        <div className="col-md-8 col-xs-12">
          {cartItems.map((item) => (
            <CartItem id={item.id} quantity={item.quantity} key={item.id} />
          ))}
        </div>

        <div className="mx-2  col-md-3 col-xs-12">
          <div className=" container-fluid my-5">
            <h6  style={{ fontSize: "26px" }}>
              Cart Summary
            </h6>
            <div className="row my-2">
              <div className="col">
                <p>Subtotal</p>
                <p> Shipping:</p>
              </div>

              <div className="col">
                ${totalValues()}
                <p
                  className="text-right"
                  style={{ fontSize: "1.15rem", fontWeight: "600" }}
                >
                  FREE
                </p>
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="col">
                <div style={{ fontWeight: "700 !important" }}>Total:</div>
              </div>
              <div className="col">
                <div style={{ fontWeight: "700 !important" }}>
                  ${totalValues()}
                </div>
              </div>
            </div>
           <Link to="/checkout"> <Button className="my-4">Checkout</Button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
