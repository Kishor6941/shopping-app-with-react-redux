import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
export const Product = () => {
  const dispatch = useDispatch();
  const { data: product } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function addToCart(product) {
    dispatch(add(product));
  }

  const cards = product?.map((product) => (
    <div
      className="col-md-3"
      style={{ marginBottom: "10px" }}
      key={product?.id}
    >
      <Card key={product?.id} style={{ width: "18rem" }} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product?.image}
            style={{ width: "100px", height: "130px" }}
            className="pt-2"
          />
        </div>
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <div className="text-center">
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add To Cart
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">
        <h1 className="text-center">Product Dashboard</h1>
        {cards}
      </div>
    </>
  );
};
