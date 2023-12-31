import React from 'react';
import { Pagination, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './styles.css'
const Paginate = ({ pages, page, isAdmin = false, keyword =''}) => {
  return (
    pages > 1 && (
      <div className='paginate'>
        
          <Pagination>
            {[...Array(pages).keys()].map((x) => (
              <LinkContainer className='mx-1 '
                to={!isAdmin ? keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}` : `/admin/productsList/${x + 1}`}
                key={x + 1}
              >
                <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
              </LinkContainer>
            ))}
          </Pagination>
        
      </div>
    )
  );
};

export default Paginate;
