import React from 'react'


const Pagination = ({dispatch, metadata, handleNextPage, handlePrevPage}) => {
  let prev = '<'
  let next = '>'

  return (
    <div className='pagination'>
      <li className='pagination-text'>
        <a href='#'
          onClick={(event) => handlePrevPage(dispatch, metadata, event)}>
          {prev}
        </a>
      </li>
      <li className='pagination-text'>
        {metadata.page}
      </li>
      <li className='pagination-text'>
        of
      </li>
      <li className='pagination-text'>
        {metadata.page_count}
      </li>
      <li className='pagination-text'>
        <a href='#'
          onClick={(event) => handleNextPage(dispatch, metadata, event)}>
          {next}
        </a>
      </li>
    </div>
  )
}

export default Pagination
