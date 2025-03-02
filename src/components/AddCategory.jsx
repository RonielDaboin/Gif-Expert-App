import React, { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault();
    if ( inputValue.trim().length <= 1 ) return;

    onNewCategory(inputValue.trim());

    // setCategories( categories => [inputValue, ...categories] );
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar Gif"
        onChange={onInputChange}
      />
    </form>
  );
};


