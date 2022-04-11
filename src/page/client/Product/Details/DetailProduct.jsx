import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Container, Image } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import ClientNavbar from "../../../../common/client/Navbar";
import ColorBox from "../../../../components/ColorBox";
import ProductServices from "../../../../service/ProductServices";
import RateService from "../../../../service/RateService";
import "./style.css";
export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [rate, setRate] = useState();
  const [imgIndex, setImgIndex] = useState(0);
  const [colorProduct, setColorProduct] = useState(0);
  console.log(colorProduct);
  const handleSelectColor = (color) => {
    setColorProduct(color)
  }
  useEffect(() => {
    ProductServices.getDetailProduct(id).then((res) => setProduct(res));
    RateService.getRateProduct(id).then((res) => setRate(res));
  }, [id]);

  return (
    <>
      <ClientNavbar />
      <Container id="detail-product" className="d-flex">
        <Container className="img-product">
          <Image
            className="img-fluid"
            src={product && product.list_color[colorProduct].list_image[imgIndex]}
          />
          <div className="list_image-product gap-2 d-flex grow-4 py-2">
            {product &&
              product.list_color[colorProduct].list_image.map((image, index) => (
                <div className="img" key={index}>
                  <Image
                    className="img-fluid"
                    src={image}
                    onClick={() => setImgIndex(index)}
                  />
                </div>
              ))}
          </div>
        </Container>
        <Container fluid>
          <DetailContent product={product} rate={rate} setColor={handleSelectColor} />
        </Container>
      </Container>
    </>
  );
}

const DetailContent = ({ product, rate, setColor }) => {
  console.log(product);
 
  return (
    <Container fluid>
      <Col className="name-product">
        <h2>{product ? product.name : <Skeleton count={2} />}</h2>
      </Col>
      <Col className="py-2">
        <span>
          <FontAwesomeIcon icon={faStar} color="#f15e2c" />({rate})
        </span>
      </Col>
      <Col className="money-product py-2">
        <h4>
          {product ? (
            product.money.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          ) : (
            <Skeleton />
          )}
        </h4>
      </Col>
      <Col className="desc-product">
        {product ? product.detail : <Skeleton count={6} />}
      </Col>
      <Col className="color-product">
        {product ? (
          product.list_color.map((color, index) => (
            <span key={index} onClick={() => setColor(index)}>
              <ColorBox color={color} index={index} setColorProduct={setColor}/>
            </span>
          ))
        ) : (
          <Skeleton count={1} />
        )}
      </Col>
    </Container>
  );
};
