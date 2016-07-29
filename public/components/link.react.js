import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
  console.log(active);
  console.log(children);

  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link