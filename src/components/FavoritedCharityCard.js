import React from 'react'
import { Link } from 'react-router-dom';

export default class FavoritedCharityCard extends React.Component {

    render(){
        const charity = this.props.charities.find(charity => charity.id === this.props.charity_id)
        if(!charity) return <div>Loading Charities...</div>
        const charityName = charity.charity_name      
        const id = charity.id  
        return(
            <div>
                <Link to={`/${id}`} className="noUnderline">
                    <div className="favCharityCard">{charityName}</div>
                </Link>
                <div className="favCharity">

                </div>
            </div>
        )
    }
}

