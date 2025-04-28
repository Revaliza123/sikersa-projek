import React from "react"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

import FiSerachIcon from "@app/components/Icons/FiSerachIcon"

function Search() {
  return (
    <>
      <InputGroup className="cursor-pointer">
        <InputGroup.Text id="searchMain">
          <FiSerachIcon />
        </InputGroup.Text>
        <Form.Control
          className="ps-0"
          placeholder="Search..."
          aria-label="Search..."
          aria-describedby="searchMain"
        />
      </InputGroup>
    </>
  )
}

export default Search
