import { useEffect, useState } from "react";
import { Container, NavLink } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import Masonry from "react-masonry-css";
import CategoryService from "../../service/CategoryService";
import ColorService from "../../service/ColorService";
import "./style.css";
const Sidebar = ({
  colorList,
  categoryList,
  setColorList,
  setCategoryList,
  gender
}) => {
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
    ColorService.getColor().then((res) => setColors(res));
  }, []);
  const handleAddCategory = (category) => {
    if (categoryList.indexOf(category) > -1) {
      const newList = categoryList.filter((item) => item !== category);
      setCategoryList(newList);
    } else setCategoryList([...categoryList, category]);
  };
  const cols = {
    default: 6,
    1420: 5,
  };
  return (
    <Container
      id="sidebar-client"
      fluid
      className="sidebar shadow-sm"
      sticky="left"
    >
      <Container className="sidebar-header">
        <div className="main-header d-flex justify-content-stretch">
          <NavLink style={{color: !gender && '#f15e2c'}} href="/products">Tất cả</NavLink>
          <NavLink style={{color: gender === 1 && '#f15e2c'}} href="/products/nam">Nam</NavLink>
          <NavLink style={{color: gender === 2 && '#f15e2c'}} href="/products/nu">Nữ</NavLink>
        </div>
        <div className="sub-header d-flex flex-column">
          {categories ? (
            categories.map((category, index) => {
              return (
                <CategoriesList
                  category={category}
                  categoryList={categoryList}
                  setCategoryList={handleAddCategory}
                  active={
                    categoryList.indexOf(category.id_category) > -1
                      ? true
                      : false
                  }
                  key={index}
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
                <ColorList
                  color={color}
                  key={index}
                  colorList={colorList}
                  setColorList={setColorList}
                  active={colorList.indexOf(color.id_color) > -1 ? true : false}
                />
              ))}
          </Masonry>
        </div>
      </Container>
    </Container>
  );
};
export default Sidebar;

const CategoriesList = ({
  category,
  categoryList,
  setCategoryList,
  active,
}) => {
  return (
    <NavLink
      onClick={() => setCategoryList(category.id_category)}
      style={{
        color: active ? "#F15E2C" : "black",
        fontWeight: active ? 700 : 500,
      }}
    >
      {category.name}
    </NavLink>
  );
};
const ColorList = ({ color, colorList, setColorList, active }) => {
  const handleAddColor = () => {
    if (colorList.indexOf(color.id_color) > -1) {
      const newColorList = colorList.filter((e) => e !== color.id_color);
      setColorList(newColorList);
    } else setColorList([...colorList, color.id_color]);
  };
  return (
    <div
      onClick={handleAddColor}
      style={{
        width: 40,
        height: 40,
        backgroundColor: color.hex,
        transition: ".125s ease",
        outline: active ? "1px #F15E2C solid" : "0",
        borderRadius: active ? "50%" : "0",
      }}
    ></div>
  );
};
