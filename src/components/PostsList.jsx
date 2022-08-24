import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Posts from '../components/Posts';
import Grid from '../styles/Grid';
import Footer from './Footer';
import Header from './Header';

export default function PostsList() {
  const [productListNew, setProductList] = useState();

  const getProductList = async () => {
    try {
      const data = await axios.get('http://54.180.2.97/api/product');
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
    <PostsContainer>
      <Header />
      <PostsListTitle>중고거래 인기매물</PostsListTitle>
      <PostsListBox>
        <Grid padding="25px" width="1200px" margin="0 auto;">
          {productList}
        </Grid>
      </PostsListBox>
      <Footer />
    </PostsContainer>
  );
}
const PostsContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const PostsListTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  font-family: 'a15';
  font-size: 32px;
  font-weight: 600;
`;

const PostsListBox = styled.div`
  margin: auto;
  margin-bottom: 20px;
  background-color: #fff;
`;
