import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RatingComponent from './RatingComponent';

const ProductCard = (props) => {
  const { product } = props;
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        <RatingComponent rating={product.rating} numReviews={product.numReviews} />
        <Button>Add to cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
