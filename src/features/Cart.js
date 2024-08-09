import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import { deleteItem } from "../store/cartSlice";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function removeItem(id) {
    dispatch(deleteItem(id));
  }

  const cards = productCart.map((product) => (
    <div
      className="col-md-12"
      style={{
        marginBottom: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        key={product?.id}
        style={{ width: "50%", textAlign: "center" }}
        className="h-100"
      >
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
            <Button variant="danger" onClick={() => removeItem(product?.id)}>
              Remove Item
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
