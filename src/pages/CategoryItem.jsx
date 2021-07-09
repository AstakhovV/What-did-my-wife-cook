import React from 'react'
import {Link} from "react-router-dom";

function CategoryItem (props){
    const { strCategory, strCategoryThumb, strCategoryDescription} = props
    return (
        <div className="card hoverable">
            <div className="card-image">
                <img className='card-item' src={strCategoryThumb} alt={strCategory}/>
            </div>
            <div className="card-content">
                <span className="card-title ">{strCategory}</span>
                <p className='truncate'>{strCategoryDescription}</p>
            </div>
            <div className='card-action'>
                <Link to={`/category/${strCategory}`} className='btn'>
                    Watch category
                </Link>
            </div>
        </div>


)
}

export default CategoryItem