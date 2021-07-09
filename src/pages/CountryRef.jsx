import React, {useEffect, useState} from 'react'
import {getAllCountry} from "../Api";
import {Preloader} from "../components/Preloader";
import {Link, useHistory} from "react-router-dom";

function Country() {
    const {goBack} = useHistory()
    const [country, setCountry] = useState([])
    useEffect(() => {
        getAllCountry().then(data =>
            setCountry(data.meals))
    })
    return <>
        <button className='btn' onClick={goBack}>Go Back</button>

        {country ?

            <div className='listArea'>
                {country.map(el => (
                    <Link to={`/country/${el.strArea}`} key={el.strArea} className="waves-effect waves-light btn-large"><i
                        className="material-icons left">search</i>{el.strArea}</Link>
                ))}
            </div>
            : <Preloader/>

        }

    </>

}

export default Country


