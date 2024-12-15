import React from 'react'

const Button = ({
    btn_text="",
    className="",
    onClick,
    type="button",
    disabled
}) => {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>{btn_text}</button>
  )
}

export default Button