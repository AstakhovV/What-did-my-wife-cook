import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom";
import {Preloader} from "../components/Preloader";
import {getMealById} from "../Api";
import RecipeItem from "./RecipeItem";


function Recipe() {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    const {goBack} = useHistory()

    useEffect(() => {
        getMealById(id).then((data) =>
            setRecipe(data.meals[0])
        )
    }, [id])

    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        {!recipe.idMeal ?
            <Preloader/> :
            <RecipeItem recipe={recipe} id={id}/>
        }
    </>
}


export default Recipe