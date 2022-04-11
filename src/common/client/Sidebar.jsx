import { Container, NavLink } from "react-bootstrap";
import "./style.css";
const Sidebar = ({ active }) => {
  return (
    <Container id="sidebar-client" fluid className="sidebar shadow-sm" sticky="left">
      <Container className="sidebar-header">
        <div className="main-header d-flex justify-content-stretch">
          <NavLink>Tất cả</NavLink>
          <NavLink>Nam</NavLink>
          <NavLink>Nữ</NavLink>
        </div>
        <div className="sub-header d-flex flex-column">
          <NavLink>Nửa trên</NavLink>
          <NavLink>Nửa dưới</NavLink>
        </div>
      </Container>
    </Container>
  );
};
export default Sidebar;
