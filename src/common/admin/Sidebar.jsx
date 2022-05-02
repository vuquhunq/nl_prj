import { Card, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { infoAdmin } from "../../config/authConfig";
import { dataLink } from "../../constant/DirectAdmin";
import "./style.css";
const Sidebar = ({ active }) => {
  console.log(infoAdmin);
  return (
    <Container fluid className="sidebar shadow-sm" sticky="left">
      <Card>
        <Card.Img
          className="img-fluid m-auto rounded-circle w-50 h-50"
          src="https://picsum.photos/200"
        />
        <Card.Body className="d-flex justify-content-center">
          <h4>{infoAdmin.account}</h4>
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
