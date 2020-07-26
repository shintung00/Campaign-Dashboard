import React from 'react'

const Pagination = ({ campaignsPerPage, totalCampaigns, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCampaigns / campaignsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
      {pageNumbers.map(number => {
          if (number !== currentPage) {
            return (<li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='page-link'>
                {number}
              </a>
            </li>
            )} else {
            return (<li key={number} className='page-item'>
              <a onClick={() => paginate(number)} className='current-page page-link'>
                {number}
              </a>
            </li>
            )} 
        })}
      </ul>


    </nav>
  );
};

export default Pagination
