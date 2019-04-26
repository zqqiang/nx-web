import React, { PropTypes } from 'react'

const Link = ({ comment, onClick }) => {
  console.log(comment);

  if (comment) {
    return <span>{comment}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
    </a>
  )
}

Link.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Link