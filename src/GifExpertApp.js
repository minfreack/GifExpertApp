import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);


    return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />

        <ol>
            {
                categories.map( c => {
                    return <GifGrid key={c}
                    category={c}/>
                })
            }
        </ol>
    </>
    );
}

export default GifExpertApp;