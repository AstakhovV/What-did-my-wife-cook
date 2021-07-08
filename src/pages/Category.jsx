import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getFilteredCategory} from "../Api";
import {Preloader} from "../components/Preloader";
import MealList from "./MealList";

function Category() {
    const [meals, setMeals] = useState([])
    const {name} = useParams()

    useEffect(() => {
        getFilteredCategory(name).then((data) =>
            setMeals(data.meals)
        )
    }, [name])

    return <>
            {!meals  ?
                    <Preloader/> :
                    <MealList meals={meals}/>
            }
        </>
}

export default Category