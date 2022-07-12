// import React from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "../../components/Card/Card";

const GET_ALL_DATA = gql` 
  query {
  category {
    products {
      id
      name
      brand
      inStock
      description
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      attributes{
        id
        name
        type
        items{
          displayValue
          value
          id
        }
      }
    }
  
  }
}

`;

export default function CardWithDataComponent() {
  const { error, data, loading } = useQuery(GET_ALL_DATA);

  console.log({ error, data, loading });

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <h1>Oopses errr!</h1>
      </div>
    );
  return (
    <>
      <section className="category">

        {data.category.products.map((products, i) => {
          return (
            <section
              style={{ display: 'flex', margin: '1rem', width: '20%', border: 'none', }}
              key={i}
            >
              <Card
                id={products.id}
                gallery={products.gallery}
                name={products.name}
              />
            </section>);
        })}
      </section>
    </>
  );
}
