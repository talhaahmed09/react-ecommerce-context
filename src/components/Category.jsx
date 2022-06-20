import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { categories } from "../data/data";
import { mobile } from "../responsive/responsive";
import CategoryItem from "./CategoryItem";
import { getCategories } from "../services/category_service";
import { titleCase } from "../utilities/titleCase";
import { Skeleton } from "antd";

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column" })}
`;

let categoriesList = null;

const Category = () => {
  const [isLoading, setIsLoading] = useState(false)
 
  const getData = async () => {
    setIsLoading(true)
    categoriesList = await getCategories();
    if(categoriesList){
        setIsLoading(false)
        categories.forEach((element, i) => {
            element.title = titleCase(categoriesList[i] );
          });
    }
   
  };

  useEffect(() => {
    let abortController;
    abortController = new AbortController();
    
    getData()

    return () => {
      return () => abortController.abort();
    };
  }, []);

  return (
    <Container>
        <Skeleton loading={isLoading}>
      {categories && categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
      </Skeleton>
    </Container>
  );
};

export default Category;
