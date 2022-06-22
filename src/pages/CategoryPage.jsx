import { Breadcrumb, Divider, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import ProductTile from "../components/ProductTile";
import Sidebar from "../components/Sidebar";
import { getCategoryProducts } from "../services/category_service";

// let products = null;
let brands = [];
let productData = [];

const CategoryPage = () => {
  let { category } = useParams();
  let newData = [];
  let min;
  let max;
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState();
  const [brandSort, setBrandSort] = useState([]);
  const [values, setValues] = useState({ min: "", max: "" });

  const categoryName = category;

  const getFilteredBrands = (brand) => {
    if (!brand.length) {
      if (min || max) {
        newData = productData;
        return onPriceFilter({ min: min, max: max });
      }
      return setProducts(productData);
    }
    productData.forEach((item) => {
      brand.forEach((element) => {
        if (item.brand == element) {
          return newData.push(item);
        }
      });
    });
    if (min || max) {
      return onPriceFilter({ min: min, max: max });
    }
    setProducts(newData);
  };

  const getProducts = async () => {
    setIsLoading(true);
    const { data } = await getCategoryProducts(categoryName);
    productData = data.products;
  
    if (productData) {
      setIsLoading(false);

      let arrayData = [];
      productData.forEach((item, i) => {
        arrayData.push({ name: item.brand, key: i.toString() });
      });
      let key = "name";
      brands = [
        ...new Map(arrayData.map((item) => [item[key], item])).values(),
      ];
    }
    return setProducts(productData);;
  };
  const onPriceFilter = (values) => {
    min = parseInt(values.min, 10);
    max = values.max ? parseInt(values.max, 10) : 20000;
    const prods = products.filter(
      (item) => item.price >= min && item.price <= max
    );
    setProducts(prods);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <Breadcrumb.Item><Link to='/'>Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item>
            <a >Category</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="col-2">
          <Sidebar
            brands={brands}
            isLoading={isLoading}
            brandSort={brandSort}
            setBrandSort={setBrandSort}
            onPriceFilter={onPriceFilter}
            getFilteredBrands={getFilteredBrands}
            values={values}
            setValues={setValues}
          />
        </div>
        <div className="col-10">
          <div className="container">
            <Divider />
            <h1 style={{ fontSize: "20px" }}>{categoryName}</h1>
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
