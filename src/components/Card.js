import React from 'react'
import CardItem from './CardItem'
import './Card.css'

export default function Card() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adventure"
                        path="/services"
                        />
                         <CardItem 
                        src="images/img-1.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Adorable"
                        path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                    <CardItem 
                        src="images/img-5.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Amazing"
                        path="/services"
                        />
                         <CardItem 
                        src="images/img-6.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Wonderful"
                        path="/product"
                        />
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Explore the hidden waterfall deep inside the Amazon jungle"
                        label="Fantastic"
                        path="/sign-up"
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}
