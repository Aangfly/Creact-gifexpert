import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);
    const onAddCategory = (NewValue) =>{
        const c =NewValue.toLowerCase()
        const loc = categories.map(cat=>cat.toLowerCase());
        if(loc.includes(c))return;
        // if(categories.includes(NewValue))return;
        // categories.push(NewValue);
        setCategories([NewValue, ...categories]);
    } 
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
            // setCategories = {event=>setCategories(event)}
            onNewValue={event=>onAddCategory(event)}
            />
            {/* <button onClick={onAddCategory}>Agregar</button> */}
            {categories.map(category => {
                return (
                <GifGrid key={category} category={category}/>
                )
            })
            }
        </>
    )
}
