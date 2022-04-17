import React, { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientNavbar from "../../../../common/client/Navbar";
import DetailContent from "../../../../components/client/Product/DetailProduct";
import CartService from "../../../../service/CartService";
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
    obj.size = product.list_color[colorProduct].list_size[sizeProduct].size_number;
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
  useEffect(() => {
    CartService.addCart(cart);
  }, [cart]);
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
          <Container fluid>
            <Button
              variant="btn"
              className="cart-button"
              onClick={handleAddCart}
            >
              THÊM VÀO GIỎ HÀNG
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
  return (
    <Container className="px-4">
      <Container>
        {comments &&
          comments.map((comment, index) => (
            <p key={index}>{JSON.stringify(comment,null,2)}</p>
          ))}
      </Container>
    </Container>
  );
};
