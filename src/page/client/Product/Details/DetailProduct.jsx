import React, { useEffect, useState } from "react";
import { Button, Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientNavbar from "../../../../common/client/Navbar";
import DetailContent from "../../../../components/client/Product/DetailProduct";
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
  console.log(colorProduct);
  const handleSelectColor = (color) => {
    setSizeProduct(0);
    setColorProduct(color);
  };
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
          />
          <Container fluid>
            <Button variant="btn" className="cart-button">THÊM VÀO GIỎ HÀNG</Button>
          </Container>
        </Container>
      </Container>
    </>
  );
}
