import React from 'react'

export default class DonationBar extends React.Component {

    

    calcBarWidth = () => {
        const maxAmount = this.props.graphWidth
        const decimal = this.props.donation_amount/maxAmount
        const percentage = decimal*100
        return percentage.toFixed(2);
    }


    render(){
        const charity = this.props.charities.find(charity => charity.id === this.props.charity_id)
        if(!charity) return <div>Loading...</div>
        const charityName = charity.charity_name
        return(
            <div id="barContainer">
                <div className="donationBar" style={{width: `${this.calcBarWidth()}%`, backgroundColor: `${this.props.color}`}}>
                    ${this.props.donation_amount}<br/>
                    {charityName}
                </div>
            </div>
        )
    }
}

