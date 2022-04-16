import { faPersonWalkingDashedLineArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Container, NavLink } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Masonry from "react-masonry-css";
import CategoryService from "../../service/CategoryService";
import ColorService from "../../service/ColorService";
import "./style.css";
const Sidebar = () => {

  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [isColorSelect, setIsColorSelect] = useState([]);
  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
    ColorService.getColor().then((res) => setColors(res));
  }, []);

  const cols = {
    default: 6,
    1420: 5,
  };
  console.log(isColorSelect);
  console.log(colors);
  return (
    <Container
      id="sidebar-client"
      fluid
      className="sidebar shadow-sm"
      sticky="left"
    >
      <Container className="sidebar-header">
        <div className="main-header d-flex justify-content-stretch">
          <NavLink>Tất cả</NavLink>
          <NavLink>Nam</NavLink>
          <NavLink>Nữ</NavLink>
        </div>
        <div className="sub-header d-flex flex-column">
          {categories ? (
            categories.map((category, index) => {
              return (
                <CategoriesList
                  category={category}
                  key={index}
                  setColors={setIsColorSelect}
                />
              );
            })
          ) : (
            <Skeleton count={4} />
          )}
        </div>
        <div className="color-list">
          <Masonry
            breakpointCols={cols}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {colors &&
              colors.map((color, index) => (
                <ColorList color={color} key={index} active />
              ))}
          </Masonry>
        </div>
      </Container>
    </Container>
  );
};
export default Sidebar;

const CategoriesList = ({ category }) => {
  return (
    <NavLink href={`/product/id_category=${category.id_category}`}>
      {category.name}
    </NavLink>
  );
};
const ColorList = ({ color, active }) => {
  return (
    <div
      style={{
        width: 40,
        height: 40,
        backgroundColor: color.hex,
        outline: active ? "1px #F15E2C solid" : "0",
      }}
    ></div>
  );
};
