import React from 'react'
import PropTypes from 'prop-types'

const GifItem = ({id, title, url}) => {
  return (
    <div className='card'> 
      <img src={ url } alt={ title } aria-placeholder={ id }/>
      <p> { title } </p>
    </div>
  )
}

export default GifItem

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}