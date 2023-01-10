import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <div>
      <button {...props} className='myBtn'>{children}</button>
    </div>
  )
}

export default Button
