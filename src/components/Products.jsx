import { Skeleton } from 'antd';
import React, { useEffect, useState } from 'react'
import { getPopularProducts } from '../services/product_service';
import Product from './Product';

let products;

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);

      
    
        const getData = async () => {
            setIsLoading(true)
            const {data} = await getPopularProducts(8,50);
            products = data.products;
            if(products){
                setIsLoading(false);
            }
          
          };
    
        useEffect(() => {
            let abortController;
            abortController = new AbortController();
            getData();
           
            return () => {
                return () => abortController.abort();
            };
        },[])
    
        return ( 
            <div className = "d-flex flex-wrap p-2 justify-content-center ">
                <Skeleton loading={isLoading}>
                    {console.log(products)}
                {products && products.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
                </Skeleton>
            </div>
        )
}

export default Products