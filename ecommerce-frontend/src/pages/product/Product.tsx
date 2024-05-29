// src/pages/Product.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
};

export default Product;
