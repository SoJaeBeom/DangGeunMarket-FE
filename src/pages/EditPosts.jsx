import React, { useState } from 'react';
import styled from 'styled-components';
import imageBox from '../image/imageBox.jpg';
import deleteimage from '../image/deleteimage.png';
import addBanner from '../image/addBanner.svg';

const EditPosts = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    //최대 이미지 저장수
    if (imageUrlLists.length > 5) {
      imageUrlLists = imageUrlLists.slice(0, 5);
    }

    setShowImages(imageUrlLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };
  return (
    <>
      <Appstyle>
        <label htmlFor="input-file" onChange={handleAddImages}>
          <div className="btnStart">
            <img src={addBanner} alt="btnStart" />
          </div>
          <input
            type="file"
            multiple
            id="input-file"
            accept="image/jpg, image/png, image/jpeg"
          />
        </label>
      </Appstyle>
      <ListContainer>
        {showImages.map((image, id) => (
          <ListBox key={id}>
            <Delete onClick={() => handleDeleteImage(id)}>
              <Image src={image} alt={`${image}-${id}`} />
            </Delete>
          </ListBox>
        ))}
      </ListContainer>
      ;
    </>
  );
};

export default EditPosts;

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
  background-size: cover;
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
