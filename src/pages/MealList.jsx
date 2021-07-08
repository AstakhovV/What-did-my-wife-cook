import React from 'react'
import MealItem from "./MealItem";
import {useHistory} from "react-router-dom";

function MealList ({meals = []}){
    const {goBack} = useHistory()
    return (
        <>
            <button className='btn' onClick={goBack}>Go Back</button>

            <div className='list'>
            {meals.map(el => (
                <MealItem key={el.idMeal} {...el}/>
            ))}
        </div>
            </>
    )
}
export default MealList