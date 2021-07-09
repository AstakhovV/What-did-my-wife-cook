import React, {useEffect, useState} from 'react'
import {useHistory} from "react-router-dom";
import {Preloader} from "../components/Preloader";
import {getRandomMeal} from "../Api";
import RandomMeal from "./RandomMeal";

function Random() {

    const [randomMeal, setRandomMeal] = useState({})
    const [isRandom, setIsRandom] = useState(false)
    const {goBack} = useHistory()

    useEffect(() => {
        getRandomMeal().then(data =>
            setRandomMeal(data.meals[0]))

    }, [isRandom])

    const handleRandomMeal = () => {
        setIsRandom(!isRandom)
    }

    return <>
        <button className='btn' onClick={goBack}>Go Back</button>
        <button className='btn right' onClick={handleRandomMeal}>Get Random</button>
        {!randomMeal.idMeal ?
            <Preloader/>
            : <RandomMeal randomMeal={randomMeal}/>
        }

    </>
}


export default Random