import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import addBanner from '../image/addBanner.svg';
import imageBox from '../image/imageBox.svg';
import deleteimage from '../image/deleteimage.png';
import inputbox from '../image/inputbox.svg';
import descinput from '../image/descinput.svg';
import addbutton from '../image/addbutton.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../shared/firebase';
import {
  __editDetailProduct,
  __getDetailProduct,
} from '../redux/modules/detailProductSlice';

export default function EditPosts() {
  const [imgProductList, setImgProductList] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(__getDetailProduct(Number(id)));
  }, [dispatch, id]);

  const EditProduct = () => {
    const product = {
      id: id,
      name: name,
      price: price,
      content: content,
      imgProductList: imgProductList,
    };
    console.log(product);

    dispatch(__editDetailProduct(product));
  };
  const handleAddImages = async (event) => {
    const imageLists = event.target.files;
    const uploaded_file = await uploadBytes(
      ref(storage, `images/${event.target.files[0].name}`),
      event.target.files[0]
    );
    console.log('fire base push', uploaded_file);

    const url = await getDownloadURL(uploaded_file.ref);
    setImgProductList(url);
    console.log(url);

    let imageUrlLists = [...imgProductList];
    console.log(imgProductList);
    for (let i = 0; i < imageLists.length; i++) {
      const imgUrl = url;
      imageUrlLists.push({ imgUrl });
      console.log(imageUrlLists);
    }
    //최대 이미지 저장수
    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }
    setImgProductList(imageUrlLists);
    console.log('이미지 리스트로 들어옴 ', imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setImgProductList(imgProductList.filter((_, index) => index !== id));
  };

  // const Change = useCallback((e) => {
  //   setName(e.target.value);
  // }, []);

  return (
    <AddContainer>
      <Header />
      <Appstyle>
        <label htmlFor="input-file">
          <div className="btnStart">
            <img src={addBanner} alt="btnStart" />
          </div>
          <input
            type="file"
            multiple
            id="input-file"
            accept="image/jpg, image/png, image/jpeg"
            onChange={handleAddImages}
          />
        </label>
      </Appstyle>
      <ListContainer>
        {imgProductList.map((image, id) => (
          <ListBox key={id}>
            <Delete onClick={() => handleDeleteImage(id)}>
              <Image src={image.imgUrl} alt={`${image}-${id}`} />
            </Delete>
          </ListBox>
        ))}
      </ListContainer>
      <TextBox>
        <ProductBox>
          <ProductText>물품 이름 : </ProductText>
          <ProductInput
            type="text"
            placeholder="물품을 입력하세요"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></ProductInput>
        </ProductBox>

        <ProductBox>
          <ProductText>가격 : </ProductText>
          <ProductInput
            type="text"
            placeholder="가격을 입력하세요"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></ProductInput>
        </ProductBox>

        <ProductBox2>
          <ProductText>상품 내용</ProductText>
          <ProductInput2
            type="text"
            placeholder="내용을 입력하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></ProductInput2>
        </ProductBox2>
        <ProductAddButton
          onClick={() => {
            EditProduct();
          }}
        >
          수정하기
        </ProductAddButton>
        <Footer />
      </TextBox>
    </AddContainer>
  );
}

// onClick={() => {
//   if (window.confirm('상품등록을 하시겠어요?')) {
//     postProduct();
//     // navigate('/');
//   }
// }}

const AddContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Appstyle = styled.div`
  width: 400px;
  height: 150px;
  margin: auto;
  margin-top: 10px;
  img {
    width: 400px;
    height: 150px;
    background-position: center;
    background-size: cover;
  }
  label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  }
  input[type='file'] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const ListContainer = styled.div`
  max-width: 1800px;
  height: 300px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const ListBox = styled.div`
  padding-left: 50px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 1;
  &:hover {
    opacity: 0;
  }
`;

const Delete = styled.button`
  width: 300px;
  height: 300px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: url(${deleteimage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TextBox = styled.div`
  width: 100%;
  height: 600px;
  margin: auto;
  margin-top: 50px;
`;

const ProductBox = styled.div`
  width: 500px;
  height: 120px;
  background: url(${inputbox});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  margin-top: 20px;
  padding-top: 50px;
  padding-left: 50px;
  text-align: center;
`;

const ProductBox2 = styled.div`
  width: 500px;
  height: 320px;
  background: url(${descinput});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: auto;
  margin-top: 20px;
  padding-top: 50px;
  padding-left: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const ProductText = styled.span`
  font-family: 'Bazzi';
  font-size: 30px;
  color: white;
`;

const ProductInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  background: none;
  outline: none;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 1;

  font-family: 'Bazzi';
  font-size: 30px;
  color: white;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const ProductInput2 = styled.textarea`
  width: 400px;
  height: 250px;
  border: none;
  margin: auto;
  background: none;
  outline: none;
  resize: none;
  overflow: hidden;

  font-family: 'Bazzi';
  font-size: 30px;
  color: white;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    padding-left: 110px;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

const ProductAddButton = styled.button`
  width: 500px;
  height: 100px;
  border: none;
  display: flex;
  margin: auto;
  justify-content: center;
  border-radius: 8px;
  background: #d1f246;
  margin-top: 40px;
  padding: 20px;
  padding-right: 0px;
  margin-bottom: 50px;
  cursor: pointer;
  font-family: 'HSFont';
  font-size: 45px;
  color: white;
  &:hover {
    background: url(${addbutton});
    background-position: center;
    background-size: cover;
  }
`;
