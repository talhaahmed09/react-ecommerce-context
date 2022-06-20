import { Divider, Layout, Row, Skeleton } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useEffect, useState } from "react";
import ProductTile from "../components/ProductTile";
import { getCategoryProducts } from "../services/category_service";

let products = null;

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const categoryName = 'SmartPhones';
  
  const getProducts = async () => {

    setIsLoading(true);
    const { data } = await getCategoryProducts("smartphones");
    products = data.products;
    if (products) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
    
        <div className="col-2">
          <h1>aside</h1>
        </div>
      <div className="col-10">
        <div className="container">
          <Divider />
          <h1 style={{fontSize:'20px'}}>{categoryName}</h1>
          <Divider />
      <div className="row">
      <Skeleton loading={isLoading}>
        {products &&
          products.map((item) => (
            <ProductTile item={item} key={item.id} className="col-3" />
          ))}
      </Skeleton>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CategoryPage;
