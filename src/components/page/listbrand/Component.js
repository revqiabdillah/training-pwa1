import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { ListGroup, Spinner } from 'react-bootstrap'

const ListBrand = () => {
    const query = gql`
    query {
        getBrandList {
            name
            attribute_id
            logo
            sort_order
        }
    }
    `;
    const { loading, error, data } = useQuery(query);
    console.log(data)
  
    if (loading) return <Spinner animation="grow"/>;
    if (error) return `Error! ${error.message}`;
    return (
      <>
        <div className="m-1 p-2">
          <h4>List Brand Lotte</h4>
          <ListGroup variant="flush">
            {data.getBrandList.map(item => (<ListGroup.Item key={item.attribute_id}>{item.name}</ListGroup.Item>) )}            
          </ListGroup>   
        </div>        
      </>
    )
}

export default ListBrand;
