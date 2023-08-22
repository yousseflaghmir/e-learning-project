import React from 'react'
import './properties.css'
import Categories from '../../compenants/categories/categories'
/*import useProperties from '../../compenants/hooks/useProperties'*/
const properties = () => {
 /* const {data, isError, isLeading} = useProperties()*/
  return (
    <div className="flexCenter paddings innerWidth properties-container">
                <div className="search-bar">
                    <input type="text" />
                    <button className="butto">Search</button>
                </div>

                <div>
                <Categories/>
                </div>    
    </div>
    
  )
}

export default properties