import React from "react";

import { useMessage } from "hooks/useMessage";
import styled from "styled-components";

import Image1 from "assets/images/1_gallery.jpg";
import Image2 from "assets/images/2_gallery.jpg";
import Image3 from "assets/images/3_gallery.jpg";
import Image4 from "assets/images/4_gallery.jpg";
import Image5 from "assets/images/5_gallery.jpg";

const images = [Image1, Image2, Image3, Image4, Image5];

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  position: absolute;
  top: -70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 0;

  img {
    width: 19%;
    cursor: pointer;
  }
`;

const Gallery = ({ setIsGalleryOpen }) => {
  const { addNewMessage } = useMessage();

  const handleSendImage = (image) => {
    addNewMessage({ img: image });
    setIsGalleryOpen(false);
  };

  return (
    <Wrapper>
      {images.map((image) => {
        return (
          <img
            key={image}
            src={image}
            onClick={() => handleSendImage(image)}
            alt="to send"
          />
        );
      })}
    </Wrapper>
  );
};

export default Gallery;
