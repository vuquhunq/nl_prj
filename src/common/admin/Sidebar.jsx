import { Card, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
const dataLink = [
  { url: "/adminstrator", name: "Trang chủ", active: "dashboard" },
  {
    url: "/adminstrator/products",
    name: "Quản lý sản phẩm",
    active: "products",
  },
  {
    url: "/adminstrator/services",
    name: "Quản lý dịch vụ",
    active: "services",
  },
  {
    url: "/adminstrator/categories",
    name: "Quản lý loại sản phẩm",
    active: "categories",
  },
];

const Sidebar = ({ active }) => {
  return (
    <Container fluid className="sidebar shadow-sm" sticky="left">
      <Card>
        <Card.Img
          className="img-fluid m-auto rounded-circle w-50 h-50"
          src="https://picsum.photos/200"
        />
        <Card.Body className="d-flex justify-content-center">
          <h4>User Name</h4>
        </Card.Body>
      </Card>
      <Nav>
        {dataLink.map((link, index) => (
          <Link
            key={index}
            to={link.url}
            className={active === link.active ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
      </Nav>
    </Container>
  );
};
export default Sidebar;
