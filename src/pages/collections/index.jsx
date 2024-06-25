import React, { useState, useEffect } from "react";
import ProductCarousel from "../../componentes/productCarrousel";
import { products } from "../../api/api";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import "./style.css";

export default function Collection() {
  const [searchName, setSearchName] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [noItemsMessage, setNoItemsMessage] = useState("");

  useEffect(() => {
    const filterProducts = () => {
      let filtered = products.filter((product) => {
        const nameMatch = product.name
          .toLowerCase()
          .includes(searchName.toLowerCase());
        const priceMatch =
          !maxPrice || product.price <= parseFloat(maxPrice);
        return nameMatch && priceMatch;
      });

      setFilteredProducts(filtered);

      if (filtered.length === 0) {
        setNoItemsMessage(
          "Não há itens disponíveis com os filtros selecionados."
        );
      } else {
        setNoItemsMessage("");
      }
    };

    filterProducts();
  }, [searchName, maxPrice]);

  const handleNameChange = (e) => {
    setSearchName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={3} className="filters">
          <h3>Filtros</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Pesquisar por Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome do Produto"
                value={searchName}
                onChange={handleNameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMaxPrice">
              <Form.Label>Preço Máximo</Form.Label>
              <Form.Control
                type="number"
                placeholder="Preço Máximo"
                value={maxPrice}
                onChange={handlePriceChange}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={9}>
          {noItemsMessage && <Alert variant="warning">{noItemsMessage}</Alert>}
          <ProductCarousel products={filteredProducts} />
        </Col>
      </Row>
    </Container>
  );
}
