import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientNavbar from "../../../../common/client/Navbar";
import DetailContent from "../../../../components/client/Product/DetailProduct";
import { infoUser } from "../../../../config/authConfig";
import CommentServices from "../../../../service/CommentServices";
import ProductServices from "../../../../service/ProductServices";
import RateService from "../../../../service/RateService";
import "./style.css";
export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [rate, setRate] = useState();
  const [imgIndex, setImgIndex] = useState(0);
  const [colorProduct, setColorProduct] = useState(0);
  const [sizeProduct, setSizeProduct] = useState(0);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const handleSelectColor = (color) => {
    setSizeProduct(0);
    setColorProduct(color);
  };
  useEffect(() => {
    ProductServices.getDetailProduct(id).then((res) => setProduct(res));
    RateService.getRateProduct(id).then((res) => setRate(res));
  }, [id]);

  useEffect(() => {
    quantityProduct < 1
      ? setQuantityProduct(1)
      : product &&
        quantityProduct >
          product.list_color[colorProduct].list_size[sizeProduct].SizeQuantity
            .quantitfy
      ? setQuantityProduct(
          product.list_color[colorProduct].list_size[sizeProduct].SizeQuantity
            .quantity
        )
      : setQuantityProduct(quantityProduct);
  }, [product, colorProduct, sizeProduct, quantityProduct]);

  const [cart, setCart] = useState([]);
  const handleDuplicateProduct = (carts, diktat, number) => {
    const newArr = carts.map((cart) => {
      if (
        diktat.id_size_quantity === cart.id_size_quantity &&
        diktat.id_product_detail === cart.id_product_detail &&
        diktat.id_product === cart.id_product
      ) {
        return { ...cart, quantily: parseInt(cart.quantily + number) };
      } else return { ...cart };
    });
    setCart(newArr);
  };
  const handleAddCart = () => {
    let obj = {};
    obj.id_size_quantity =
      product.list_color[colorProduct].list_size[
        sizeProduct
      ].SizeQuantity.id_size_quantity;
    obj.id_product_detail = product.list_color[colorProduct].id_product_detail;
    obj.current_price = product.discount;
    obj.id_product = product.id_product;
    obj.quantily = parseInt(quantityProduct);
    obj.img = product.list_color[colorProduct].list_image[0];
    obj.name = product.name;
    obj.size =
      product.list_color[colorProduct].list_size[sizeProduct].size_number;
    let diktat = cart.find(
      (e) =>
        e.id_product_detail === obj.id_product_detail &&
        e.id_size_quantity === obj.id_size_quantity &&
        e.id_product === obj.id_product
    );
    diktat
      ? handleDuplicateProduct(cart, diktat, quantityProduct)
      : setCart([...cart, obj]);

    setQuantityProduct(0);
  };
  return (
    <>
      <ClientNavbar />
      <Container id="detail-product" className="d-flex">
        <Container className="img-product">
          <Image
            className="img-fluid"
            src={
              product && product.list_color[colorProduct].list_image[imgIndex]
            }
          />
          <div className="list_image-product gap-2 d-flex grow-4 py-2">
            <Swiper
              navigation
              spaceBetween={5}
              slidesPerView={4}
              modules={[Navigation]}
            >
              {product &&
                product.list_color[colorProduct].list_image.map(
                  (image, index) => (
                    <SwiperSlide key={index}>
                      <div className="img">
                        <Image
                          className="img-fluid"
                          src={image}
                          onClick={() => setImgIndex(index)}
                        />
                      </div>
                    </SwiperSlide>
                  )
                )}
            </Swiper>
          </div>
        </Container>
        <Container fluid>
          <DetailContent
            product={product}
            rate={rate}
            isColor={colorProduct}
            setColor={handleSelectColor}
            isSize={sizeProduct}
            setSize={setSizeProduct}
            isQuantity={quantityProduct}
            setQuantity={setQuantityProduct}
          />
          <Container fluid className="d-flex flex-column gap-2">
            <Button
              variant="btn"
              className="cart-button"
              onClick={handleAddCart}
            >
              THÊM VÀO GIỎ HÀNG
            </Button>
            <Button variant="btn btn-outline-success" onClick={handleAddCart}>
              MUA NGAY
            </Button>
          </Container>
        </Container>
      </Container>
      <CommentContainer />
    </>
  );
}
const CommentContainer = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    CommentServices.getCommentProduct(id).then((res) => setComments(res));
  }, [id]);
  console.log(comments);
  return (
    <Container className="p-4 shadow-lg">
      <h3>Đánh giá sản phẩm</h3>
      <Row className="my-3">
        <Col md={2} lg={2}>
          <div className="d-flex flex-column justify-content-center-align-items-center">
            <h3 className="text-center" style={{color: '#F15E2C'}}>{5}</h3>
            <div className="d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </Col>
        <Col>
          {comments.find((e) => e.Comments.id_user === infoUser.id_user) ? (
            <></>
          ) : (
            <Form>
              <Form.Control as="textarea" placeholder="Thêm bình luận"/>
            </Form>
          )}
        </Col>
      </Row>
      <Row>
        {comments &&
          comments.map((comment, index) => (
            <Container
              className="p-3 my-1"
              style={{ border: "1px orange solid", borderRadius: 4 }}
              key={index}
            >
              <div className="d-flex flex-column">
                <span className="username">
                  {comment.Info.full_name}{" "}
                  <FontAwesomeIcon icon={faStar} color="orange" /> x
                  {comment.Rate.number_star}
                </span>
                <span className="text-muted">{comment.Comments.Date}</span>
                <span className="mt-2">{comment.Comments.Content}</span>
              </div>
            </Container>
          ))}
      </Row>
    </Container>
  );
};
