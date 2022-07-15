import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setinputValue] = useState('')
  
    const onInputChange = ({target}) => {
        setinputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim();
        if(inputValueTrim.length<=1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValueTrim);
        setinputValue('');
    }

        return (
           <form onSubmit={onSubmit}> 
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
           </form> 
        )
}
