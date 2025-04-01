import React, { useState } from "react";
import PropTypes from "prop-types";


export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return;

    onNewCategory( inputValue.trim() );

    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar Gif"
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.PropTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

