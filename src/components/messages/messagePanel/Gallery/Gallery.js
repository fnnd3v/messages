import React, { useEffect, useState } from "react";

import { useMessage } from "hooks/useMessage";
import { FetchImages } from "api/ImagesApi";
import Loading from "components/Loading/Loading";

import { Wrapper } from "./Gallery.styles";

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
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                key={image.id}
                src={image.urls.small}
                onClick={() => handleSendImage(image.urls.regular)}
                alt="unsplash image send"
              />
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default Gallery;
