import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'  
import { graphql } from 'react-apollo'
import { Accordion, Card, Spinner, Alert, Button, Pagination, ButtonGroup, Container } from 'react-bootstrap'

const ListCountries = () => {
    const [page, setPage] = React.useState(1);      
    const [limit, setLimit] = React.useState(10);
    const [first, setFirst] = React.useState(0);   

    const query = gql`
    query {
      countries {
        full_name_locale
        id
        available_regions {
          code
          name
          
        }
      }
    }
    `;
    const { loading, error, data } = useQuery(query);
  
    if (loading) return <Spinner animation="grow"/>;
    if (error) return `Error! ${error.message}`;       
    let totalPage = data.countries.length / 10;
    return (
      <>
       <Accordion defaultActiveKey="0">
         {
           data.countries.map((ctr, index) => index < limit && (
            <Card key={index}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                 {ctr.full_name_locale}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={index}>
                <Card.Body>
                  <div className="ml-5 p-2" style={{ backgroundColor : '#f0f0f0' }}>
                  {
                    ctr.available_regions !== null && ctr.available_regions.length > 0 &&
                    ctr.available_regions.map((region, idx) =>  (idx % 2 === 0) ? (
                      <Alert key={idx} variant="primary">
                        {region.name}
                      </Alert>
                     ) :(
                      <Alert key={idx} variant="info">
                        {region.name}
                      </Alert>
                     )
                     
                    )
                  }
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
           ))
         }
         
        </Accordion>
        <Container className="justify-content-center mt-5 mb-5">
          {
            page <= totalPage &&
            <Button onClick={() => {
              setLimit(limit + 10)
            }}> Load More </Button>
          }
        </Container>   
      </>
    )
}

export default ListCountries

