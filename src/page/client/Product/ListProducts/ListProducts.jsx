import React from 'react'
import { Container } from 'react-bootstrap'
import Sidebar from '../../../../common/client/Sidebar'
import ClientNavbar from '../../../../common/client/Navbar'
import GridViewProduct from '../../../../container/Product/GridViewProduct'
import './style.css'
export default function ListProducts() {
  return (
      <>
      <ClientNavbar />
      <Container
        id="client-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)"}}
      >
        <Sidebar active="categories" />
        <Container fluid className='py-3 overflow-auto'>
          <GridViewProduct />
        </Container>
      </Container>
      </>
  )
}