import { useState } from "react"


export const AddCategory = ({onNewValue}) =>{

    const [inputValue, seTinputValue] = useState("")
    const InputChange = ({target}) =>{
        seTinputValue(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1)return;
        
        // setCategories(categories=>[inputValue, ...categories])
        onNewValue(inputValue.trim());

        seTinputValue("");
    }

    return(
        <form action="" onSubmit={(event)=> onSubmit(event)}>
            <input type="text" 
            placeholder="Buscar gifs" 
            value={inputValue} 
            onChange={(InputChange)}/>
        </form>

    )
}