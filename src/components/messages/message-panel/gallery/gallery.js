import React, { useEffect, useState } from "react";

import { useMessage } from "hooks/use-message";
import { FetchImages } from "api/images-api";
import Loading from "components/loading/loader";

import { Wrapper } from "./gallery.styles";

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
                alt="unsplash pictures send"
              />
            );
          })}
        </>
      )}
    </Wrapper>
  );
};

export default Gallery;
