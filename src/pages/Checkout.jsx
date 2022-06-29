import { Card, Divider, Image } from "antd";
import React from "react";
import "../css/Checkout.css";

const Checkout = () => {
  return (
    <div className="container p-4">
      <div className="flex-container">
        <div className="flex-item">
          <div className="col">
            <div className="container">
              <div className="head-order p-2 container d-flex justify-content-between border rounded w-100">
                <div className="">
                  <h4>
                    Order Number:{" "}
                    {Math.floor(100000000 + Math.random() * 900000000)}
                  </h4>
                  <p>January 11, 2022</p>
                </div>
                <div>
                  <p className="py-2"></p>

                  <p className="print">
                    <u>PRINT</u>
                  </p>
                </div>
              </div>
            </div>
            <div className="container p-2">
              <div className="d-flex justify-content-between flex-wrap mb-2">
                <div className="col">
                  <h4>Contact Inforrmation</h4>
                  <p>abc@gmail.com</p>

                  <h4>Shipping Address</h4>
                  <p>abc@gmail.com</p>
                </div>
                <div className="col">
                  <h4>Payment</h4>
                  <p>abc@gmail.com</p>
                  <h4>Billing Address</h4>
                  <p>abc@gmail.com</p>
                </div>
                <div className="col">
                  <h4>Delivery</h4>
                  <p>abc@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="container">
              <Card className="p-2">
                <div className="d-flex justify-content-between flex-wrap mb-2 ">
                  <Image
                    src="https://images.pexels.com/photos/249597/pexels-photo-249597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    width={150}
                  />
                  <div>
                    <h5>Sony DSLR Cam</h5>
                    <p>#SV-229</p>
                  </div>
                  <Divider />
                  <h5>Shipped - 01/22/22</h5>
                  <p>Tracking #: 2888844882</p>
                  <Divider />
                  <div>
                    <h6>$13.49</h6>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex-item">
          <div className="container">
            <h4 className="my-3">Order Summary</h4>
            <div className="row">
              <div className="col">
                <p>Subtotal</p>
                <p>Discount</p>
                <p>Shipping</p>
                <p>Estimated Tax</p>
              </div>
              <div className="col">
                <p>$14.99</p>
                <p>-$1.50</p>
                <p>FREE</p>
                <p>$0.00</p>
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="col">
                <p>Total</p>
              </div>
              <div className="col">$13.49</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
