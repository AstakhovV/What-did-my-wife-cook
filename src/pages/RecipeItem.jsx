import React from 'react'

function RecipeItem (props){
    const { strMeal, strCategory, strArea,
        strInstructions, strMealThumb, strYoutube} = props.recipe


    return (
        <div className="card">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title "><b>{strMeal}</b></span>
                <p>Category: {strCategory}</p>
                {
                    strArea ? <p >Area: {strArea}</p> : null
                }
                <p>{strInstructions}</p>
                <table className='striped centered'>
                    <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        Object.keys(props.recipe).map(key => {
                            if (key.includes('Ingredient') && props.recipe[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{props.recipe[key]}</td>
                                        <td>{
                                            props.recipe[`strMeasure${key.slice(13)}`]
                                        }</td>
                                    </tr>
                                )
                            }
                            return null
                        })
                    }
                    </tbody>
                </table>

                {
                    strYoutube ?
                        (<div className="row">
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

export default RecipeItem