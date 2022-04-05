import React, { useEffect, useState } from "react";

import { useMessage } from "hooks/useMessage";
import styled from "styled-components";
import { FetchImages } from "api/ImagesApi";
import Loading from "components/Loading/Loading";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  z-index: 9999999999;
  background-color: ${({ theme }) => theme.colors.appBackground};
  position: absolute;
  top: -200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;
  flex-wrap: wrap;
  padding: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #0ae;

    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, rgba(255, 255, 255, 0.2)),
      color-stop(0.5, transparent),
      to(transparent)
    );
  }

  img {
    width: 45%;
    cursor: pointer;
    margin: 10px 0;
  }
`;

const Gallery = ({ setIsGalleryOpen }) => {
  const { addNewMessage } = useMessage();
  const [images, setImages] = useState([]);

  const handleSendImage = (image) => {
    addNewMessage({ img: image });
    setIsGalleryOpen(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    const { data } = await FetchImages();
    setImages(data);
  };

  return (
    <Wrapper>
      {images.length === 0 ? (
        <Loading />
      ) : (
        <>
          {images.map((image) => {
            return (
              <img
                key={image.id}
                src={image.urls.small}
                onClick={() => handleSendImage(image.urls.regular)}
                alt="to send"
              />
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default Gallery;

//  {
//    images.map((image) => {
//      return (
//        <img
//          key={image}
//          src={image}
//          onClick={() => handleSendImage(image)}
//          alt="to send"
//        />
//      );
//    });
//  }
