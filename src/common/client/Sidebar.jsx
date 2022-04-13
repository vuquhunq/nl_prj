import { useEffect, useState } from "react";
import { Container, NavLink } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import CategoryService from "../../service/CategoryService";
import "./style.css";
const Sidebar = ({ active }) => {
  const [categories, setCategories] = useState();
  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
  }, []);
  console.log(categories);
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
                <NavLink
                  href={`/product/id_category=${category.id_category}`}
                  key={index}
                >
                  {category.name}
                </NavLink>
              );
            })
          ) : (
            <Skeleton count={4} />
          )}
        </div>
      </Container>
    </Container>
  );
};
export default Sidebar;
