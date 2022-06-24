import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import "../css/ProductDisplay.css"

const ProductImages = ({ images, tab, myRef }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (images) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="thumb" ref={myRef}>
      <Skeleton loading={loading}>
        {images &&
          images.map((img, index) => (
            <img src={img} alt="" key={index} onClick={() => tab(index)} />
          ))}
      </Skeleton>
    </div>
  );
};

export default ProductImages;
