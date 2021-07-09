import React from 'react'

function RandomMeal (props){
    const { strMeal, strCategory, strArea,
        strInstructions, strMealThumb, strYoutube} = props.randomMeal


    return (
        <div className="card ">
            <h2 className="header center-align">{strMeal}</h2>
            <div className="card-image center-content">
                <img className="card-meal-item" src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-stacked ">
                <div className="card-content">
                    <p>Category: {strCategory}</p>
                    {
                        strArea ? <p >Area: {strArea}</p> : null
                    }
                    <p>{strInstructions}</p>
                </div>
                <div>
                    <table className='highlight responsive-table centered'>
                        <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            Object.keys(props.randomMeal).map(key => {
                                if (key.includes('Ingredient') && props.randomMeal[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{props.randomMeal[key]}</td>
                                            <td>{
                                                props.randomMeal[`strMeasure${key.slice(13)}`]
                                            }</td>
                                        </tr>
                                    )
                                }
                                return null
                            })
                        }
                        </tbody>
                    </table>
                </div>
                {
                    strYoutube ?
                        (<div className="row center-align">
                            <h5 style={{margin: '2rem 0 1.5rem'}}>Video Recipe</h5>
                            <iframe title={props.id}
                                    allowFullScreen
                                    src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                                    frameBorder="0"/>
                        </div>)
                        : null
                }
            </div>
        </div>
    )
}

export default RandomMeal