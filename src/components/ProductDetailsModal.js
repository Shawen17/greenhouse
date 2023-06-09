import React, { useState } from "react";
import styled from "styled-components";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import { useNavigate } from "react-router-dom";

const Icon = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
  height: 20px;
`;

const Circle = styled.div`
  background-color: rgba(128, 128, 128, 0.1);
  height: 100px;
  width: 100%;
  position: relative;
  border-radius: 4px;
`;
const ProductImg = styled.img`
  height: 100px;
  width: 70%;
  position: absolute;
  bottom: 0;
`;

const ProductContainer = styled.div`
  height: 240px;
  width: 150px;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 15px;
`;

const Details = styled.div`
  height: 120px;
  width: 100%;
`;

const Circ = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 0.5px solid grey;
`;

const SmallCircle = styled(Circ)`
  width: 20px;
  height: 20px;
  z-index: 20;
  top: ${(prop) => prop.testPosition?.top}px;
  left: ${(prop) => prop.testPosition?.left}px;
  display: ${(prop) => prop.testPosition?.display};
`;

const ProductDetailsModal = (props) => {
  const product = props.product;
  const [testPosition, setTestPosition] = useState({
    top: 0,
    left: 0,
    display: "none",
  });
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const handleGrow = (event) => {
    const x = event.clientX;
    const y = event.pageY;
    // const x = event.clientX;
    // const y = event.clientY+200;
    setTestPosition({ ...testPosition, top: y, left: x, display: "block" });
    setTimeout(
      () => setTestPosition({ ...testPosition, display: "none" }),
      1000
    );
  };

  const HandleClick = () => {
    window.addEventListener("click", (event) => {
      handleGrow(event);
    });
    setTimeout(
      () => navigate("/product-details", { state: { product } }),
      1100
    );
    return () => window.removeEventListener("click", handleGrow);
  };

  const liked = () => {
    setLike(!like);
  };

  return (
    <div>
      <ProductContainer>
        <div style={{ textAlign: "right" }}>
          <Icon>
            <FavoriteBorderTwoToneIcon
              className={like ? "likeStyle" : ""}
              onClick={liked}
            />
          </Icon>
        </div>
        <div onClick={HandleClick}>
          <Circle>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ProductImg src={product.picture[0].image} alt="product" />
            </div>
          </Circle>

          <SmallCircle testPosition={testPosition} className="grow" />

          <Details>
            <div className="desc">
              <p>Shirt</p>
              <div>Essential Men's Short- Sleeve Crewneck T-Shirt</div>
              <div className="amt">
                <StarOutlinedIcon style={{ color: "yellow", fontSize: 13 }} />{" "}
                <span id="rate">4.9 | 2356</span>
                <div style={{ color: "teal", fontSize: 15 }}>
                  ${product.amount}
                </div>
              </div>
            </div>
          </Details>
        </div>
      </ProductContainer>
    </div>
  );
};

export default ProductDetailsModal;
