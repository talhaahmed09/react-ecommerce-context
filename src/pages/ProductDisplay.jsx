import { Breadcrumb, Button, Image, Input, Skeleton } from "antd";
import Item from "antd/lib/list/Item";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import { getProductById } from "../services/product_service";
import { totalPriceCalculator } from "../utilities/priceCalculator";
import { crumbTitle, titleCase } from "../utilities/titleCase";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { validateNumber } from "../utilities/validateInput";
import { useCart } from "../context/cart/CartContext";
// import { useShoppingCart } from "../context/cart/CartContext";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 100px auto;
  box-shadow: 0 0 5px #ccc;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
`;

const BigImg = styled.div`
  max-width: 500px;
  min-width: 290px;
  overflow: hidden;
  margin: 25px;
`;

const Box = styled.div`
  max-width: 500px;
  min-width: 290px;
  margin: 25px;
`;

const ProductDisplay = () => {
  const [itemValue, setItemValue] = useState(1);
  let { id } = useParams();
  const [prodId, setProdId] = useState(id);
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [indexPos, setIndexPos] = useState(0);
  const myRef = useRef(null);

  const { addToCart, getItemQuantity, decreaseCartQuantity } = useCart();

  const quantity = getItemQuantity(Number(id));

  const getProduct = async () => {
    setIsLoading(true);
    const { data } = await getProductById(id);
    if (data) {
      quantity && setItemValue(quantity);
      setIsLoading(false);
    }
    return setProduct(data);
  };

  useEffect(() => {
    let abortController;
    abortController = new AbortController();
    getProduct();

    return () => abortController.abort();
  }, [id]);

  const handleTab = (index) => {
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
    setIndexPos(index);
  };

  const updateItemValue = (value) => {
    if (value < 1) {
      return setItemValue(1);
    } else if (value > product.stock) {
      return setItemValue(product.stock);
    } else {
      setItemValue(value);
    }
  };

  const handleChange = (e) => {
    updateItemValue(validateNumber(e));
  };

  const handleClick = () => {
    if (quantity && quantity > itemValue) {
      return decreaseCartQuantity(Number(id), quantity - itemValue);
    }
    return addToCart(
      Number(id),
      itemValue - quantity,
      product?.price,
      product?.discountPercentage
    );
  };

  return (
    <div className="container">
      <Skeleton loading={isLoading} rows={1}>
        <Breadcrumb className="mx-3 pt-2" separator=">">
          <Breadcrumb.Item>
            <a href="">Home</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{titleCase(product.category)}</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">{crumbTitle(product.title)}</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Skeleton>

      <Container>
        <Skeleton loading={isLoading}>
          <Details>
            <BigImg>
              <Image
                className="w-100 h-100"
                style={{
                  maxHeight: " 400px",
                  display: "block",
                  objectFit: "cover",
                }}
                src={product && product.images && product.images[indexPos]}
                alt=""
                fallback="data:image/png;base64,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"
              />
            </BigImg>

            <Box>
              <div className="d-flex justify-content-between mb-3">
                <h2 className="text-uppercase">{product.title}</h2>
              </div>
              <h4 style={{ fontSize: "22px", color: "#f57224" }}>
                $
                {totalPriceCalculator(
                  product.price,
                  product.discountPercentage
                )}
              </h4>
              <div className="d-flex  mb-3 ">
                <span
                  style={{
                    fontSize: "18px",
                    textDecoration: "line-through",
                    marginRight: "10px",
                    color: "#9e9e9e",
                  }}
                >
                  ${product.price}
                </span>
                <span style={{ fontSize: "16px", fontWeight: "400px" }}>
                  -{product.discountPercentage}%
                </span>
              </div>
              <p>{product.description}</p>

              <ProductImages
                images={product.images}
                tab={handleTab}
                myRef={myRef}
              />
              <div className="row justify-content-center">
                <div className="p-2 d-flex ">
                  <Button
                    icon={<MinusOutlined />}
                    className="p-2"
                    onClick={() => updateItemValue(itemValue - 1)}
                  />
                  <Input
                    type={"number"}
                    size="small"
                    placeholder="1"
                    style={{ width: "10%" }}
                    className="text-center"
                    bordered={false}
                    value={itemValue}
                    onChange={handleChange}
                  />
                  <Button
                    icon={<PlusOutlined />}
                    className="p-2"
                    onClick={() => updateItemValue(itemValue + 1)}
                  />
                </div>
                <Button className="mt-2" type="primary" onClick={handleClick}>
                  Add to cart
                </Button>
              </div>
            </Box>
          </Details>
        </Skeleton>
      </Container>
    </div>
  );
};

export default ProductDisplay;
