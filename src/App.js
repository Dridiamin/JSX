import React from "react";
import { Card } from "react-bootstrap";
import product from "./Product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const App = () => {
  const firstName = "Amin"; 

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
            <Image image={product.image} />
          </Card.Text>
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "Amin"}!</p>
    </div>
  );
};

export default App;