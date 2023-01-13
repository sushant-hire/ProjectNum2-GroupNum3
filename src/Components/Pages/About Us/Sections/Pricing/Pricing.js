import React from 'react'
import "./Pricing.css";

const Pricing = () => {

    return (

        <section style={{ backgroundColor: 'darkred' }} id='pricing' className="PricingContainer">
            <div style={{ backgroundColor: 'white', borderRadius: '10px' }} className='DayPassContent'>
                <br />
                <br />
                <h3 style={{ display: 'flex', justifyContent: 'center' }} >Day Pass</h3>
                <br />
                <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '80px', color: '#4CAF50' }}>$20</h1>
                <p style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontStyle: 'italic' }}>/month</p>
                <br />
                <br />
                <ul style={{ marginLeft: '30px', fontSize: '20px' }} >
                    <li>1 Day Pass</li>
                    <br />
                    <li>Free Gym Access</li>
                    <br />
                    <li>Free Consultations</li>
                    <br />
                    <li>24 Hour Access</li>
                    <br />
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <button className="DayPassButton" onClick={() => alert("You just clicked a button!")}>GET STARTED</button>
                </div>
            </div>
            <div style={{ backgroundColor: 'white', borderRadius: '10px' }} className='MonthToMonthContent'>
                <br />
                <br />
                <h3 style={{ display: 'flex', justifyContent: 'center' }}>Month To Month</h3>
                <br />
                <h1 style={{ display: 'flex', justifyContent: 'center', fontSize: '80px', color: '#4CAF50' }}>$90</h1>
                <p style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontStyle: 'italic' }}>/month</p>
                <br />
                <br />
                <ul style={{ marginLeft: '30px', fontSize: '20px' }} >
                    <li>$99 Joining Fee</li>
                    <br />
                    <li>Free Gym Access</li>
                    <br />
                    <li>1 Group Class Included</li>
                    <br />
                    <li>24 Hour Access</li>
                    <br />
                </ul>
                <div style={{ textAlign: 'center' }}>
                    <button className="MonthToMonthButton" onClick={() => alert("You just clicked a button!")}>GET STARTED</button>
                </div>
            </div>
            <div className='PricingContent'>
                <h2 className='PricingHeading' style={{ color: 'red', fontWeight: 'bold' }}>Membership</h2>
                <br />
                <br />
                <h2 style={{ color: 'white' }}>From Punch Pass to Monthly or Annual</h2>
                <br />
                <p style={{ color: 'white' }}>At Gym,base,we offer a wide range of Membership with options to suit every budget Everything one dy Pass,Pungh Pass to monthly or annual prepaid membership Whats more ,we wont tie you in to a long term contract ,giving you greater flexbility.</p>
                <br />
                <h3 style={{ color: 'white' }}>Each Plan Included</h3>
                <br />
                <ul>
                    <li style={{ color: 'white' }}>The best equipment global brands</li>
                    <br />
                    <li style={{ color: 'white' }}>The gym is open 24 hours a day, 7 days a week</li>
                    <br />
                    <li style={{ color: 'white' }}>Two safe payment methods</li>
                    <br />
                    <li style={{ color: 'white' }}>Group fittness classes in the price of the subscription</li>
                    <br />
                    <li style={{ color: 'white' }}>No long-term contract, period</li>
                </ul>
            </div>
            <br />
        </section>
    );
}

export default Pricing