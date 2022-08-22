import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Posts from "../components/Posts";

export default function PostsList() {
  const [productListNew, setProductList] = useState();

  const getProductList = async () => {
    try {
      const data = await axios.get("http://3.34.98.245/api/product");
      setProductList(data.data.data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  let productList = productListNew?.map((product) => {
    return <Posts key={product.id} product={product} />;
  });

  return (
    <PostsListBox>
      <PostsListTitle>중고 거래</PostsListTitle>
      {productList}
    </PostsListBox>
  );
}

const PostsListBox = styled.div`
  border-radius: 8px;
  border: 1px solid #e9ecef;
  width: 800px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #fff;
`;

const PostsListTitle = styled.p``;
