import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components';


const GitExpertApp = () => {

    const [ categories, setCategories] = useState(['NVIDIA NEWS']);

    console.log(categories)

    const onAddCategory = (onNewCategory) =>{

      if ( categories.includes(onNewCategory)) return;
      
      setCategories([ onNewCategory, ...categories ])
    }


  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory 
      onNewCategory={ value => onAddCategory(value)}
      />

      { 
      categories.map( ( category ) => (
        <GifGrid 
        key={category}
        category={category}
        />
        )) 
      }

    </>
  )
}

export default GitExpertApp