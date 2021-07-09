import React, {useEffect, useState} from 'react'
import {useHistory, useLocation, useParams} from 'react-router-dom'
import {getFilteredCategory} from "../Api";
import {Preloader} from "../components/Preloader";
import MealList from "./MealList";
import Search from "./Search";

function Category() {
    const [meals, setMeals] = useState([])
    const {name} = useParams()
    const [filteredMeals, setFilteredMeals] = useState([])
    const {pathname, search} = useLocation()
    const {push} = useHistory()

    const handleSearch = (str) => {
        setFilteredMeals(
            meals.filter(item => item.strMeal.toLowerCase().includes(str.toLowerCase()))
        )
        push({
            pathname,
            search: `?search=${str}`
        })
    }
    useEffect(() => {
        getFilteredCategory(name).then((data) => {
                setMeals(data.meals)
                setFilteredMeals(search ? data.meals.filter(
                    item => item.strMeal.toLowerCase().includes(
                        search.split('=')[1].toLowerCase()))
                    : data.meals
                )
            }
        )
    }, [search])

    return <>
        <Search cb={handleSearch}/>
            {!meals  ?
                    <Preloader/> :
                    <MealList meals={filteredMeals}/>
            }
        </>
}

export default Category