import React from "react"
import { Button } from "react-bootstrap"
// import { useNavigate } from 'react-router-dom';

interface IButtonCancel {
  onClick?: any
  disabled?: any
}
export default function ButtonCancel({ onClick, disabled }: IButtonCancel) {
  // const navigate = useNavigate() //  onClick={()=>navigate(-1)}
  const handleClick = (e: any) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <Button
      className="me-2"
      type="button"
      variant="outline-primary"
      onClick={handleClick}
      disabled={disabled}>
      Batal
    </Button>
  )
}
