import React, {useEffect, useState} from 'react'
import {useHistory, useParams} from "react-router-dom";
import MealItem from "./MealItem";
import {Preloader} from "../components/Preloader";
import {getFilteredArea} from "../Api";

function CountryMealList (){
    const {goBack} = useHistory()
    const {name} = useParams()
    const [countryMeal, setCountryMeal] = useState([])

    useEffect(() => {
        getFilteredArea(name).then((data) =>
            setCountryMeal(data.meals)
        )
    }, [name])
    return (
        <>
            <button className='btn' onClick={goBack}>Go Back</button>
            <div className='center-align'>
                <h3>{name} meals</h3>
            </div>
            {!countryMeal ? <Preloader/> :
                <div className='list'>
                    {countryMeal.map(el => (
                        <MealItem key={el.idMeal} {...el}/>
                    ))}
                </div>
            }
        </>
    )
}
export default CountryMealList