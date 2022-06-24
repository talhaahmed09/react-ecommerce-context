import { Button, Divider, Image, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useCart } from "../context/cart/CartContext";
import { getProductById } from "../services/product_service";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import "../css/CartItem.css";
import { totalPriceCalculator } from "../utilities/priceCalculator";

const CartItem = ({ id, quantity, total, setTotal }) => {
  const [loading, setLoading] = useState(false);
  const [itemValue, setItemValue] = useState(quantity);
  const { cartItems, removeFromCart, addToCart, decreaseCartQuantity } =
    useCart();
  const [product, setProduct] = useState({});

  const getData = async () => {
    setLoading(true);
    const { data } = await getProductById(id);
    if (data) {
      setProduct(data);
      setLoading(false);
      updatePrice(data.price, data.discountPercentage, itemValue);
      return
    }
  };

  const updateItemValue = (value) => {
    if (value < 1) {
        addToCart(1)
      return setItemValue(1);
    } else if (value > product.stock) {
      return setItemValue(product.stock);
    } else {
      return setItemValue(value);
    }
  };

  const handleClick = () => {
    if (quantity && quantity > itemValue) {
      return decreaseCartQuantity(Number(id), quantity - itemValue);
    }
    return addToCart(Number(id), itemValue - quantity);
  };

  const updatePrice = (price, discount) => {
    let totalPrice = 0

        totalPrice = totalPriceCalculator(
            price * quantity,
            discount
          );
           setTotal(item => {
            if (item.find(item => item.id === id) == null) {
                return [...item, { id, price: totalPrice}]
              } else {
                return item.map(item => {
                  if (item.id === id) {
                    return { ...item, price: totalPrice }
                  } else {
                    return item
                  }
                })
              }
          });
  };

  useEffect(() => {
    let abortController;

    abortController = new AbortController();

    getData();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    handleClick();
   
      updatePrice(product?.price, product?.discountPercentage);
    
  }, [itemValue]);

  const removeProduct = () => {
    removeFromCart(product.id);
    return setItemValue(0);
  };
  return (
    <div className="container my-5">
      <div className="d-flex flex-wrap justify-content-center mb-1">
        <Skeleton loading={loading}>
          <div className="border rounded d-flex flex-wrap justify-content-center ">
            <Image src={product?.thumbnail} className="cart-img" />
            <div className="box">
              <div className="d-flex justify-content-between mb-3">
                <h2>{product?.title}</h2>
                <div className="d-flex align-items-center">
                  <h4
                    className="mx-2"
                    style={{ fontSize: "22px", color: "#f57224" }}
                  >
                    $
                    {totalPriceCalculator(
                      product?.price * quantity,
                      product.discountPercentage
                    )}
                  </h4>
                  <h4
                    style={{
                      fontSize: "12px",
                      textDecoration: "line-through",
                      marginRight: "10px",
                      color: "#9e9e9e",
                    }}
                  >
                    ${product?.price * quantity}
                  </h4>
                </div>
              </div>
              <p>{product?.description}</p>
              <div className="row justify-content-center">
                <div className="p-2 d-flex justify-content-between ">
                  <div className="border rounded p-2">
                    <Button
                      icon={<MinusOutlined />}
                      className="p-2"
                      disabled={itemValue == 1 ? true : false}
                      onClick={() => updateItemValue(itemValue - 1)}
                    />
                    <span style={{ margin: "5px 10px" }}>{itemValue}</span>
                    <Button
                      icon={<PlusOutlined />}
                      className="p-2"
                      onClick={() => updateItemValue(itemValue + 1)}
                    />
                  </div>
                  <Button
                    icon={<DeleteOutlined />}
                    type="text"
                    onClick={removeProduct}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    </div>
  );
};

export default CartItem;
