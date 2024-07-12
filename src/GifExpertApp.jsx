

import { useState } from 'react'
import { AddCategory, GIFGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['bojack']);

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory  
            onNewCategory={ onAddCategory }
        />
        { 
            categories.map( category => 
                (
                    <GIFGrid key={ category} category={ category } />
                )
            )
        }
    </>
    )
}
