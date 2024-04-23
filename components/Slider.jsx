import React, { useRef } from 'react';
import "../styles/Slider.css";
import '@styles/Fonts.css';

// Sample data for the slider cards
const cardsData = [
    { title: "Cool 1", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 2", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 3", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 4", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 5", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 6", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 7", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    { title: "Cool 8", description: "test", price: "test", pricePerMonth: "test", imageUrl: "test" },
    // Add more card objects as needed
];

const Slider = () => {
    const sliderRef = useRef(null);

    // Function to scroll the slider by a certain distance
    const scrollBy = (distance) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: distance, behavior: 'smooth' });
        }
    };

    // Handlers to go to previous or next cards
    const goToPrevious = () => {
        scrollBy(-300); // Assuming a card width of 300px
    };

    const goToNext = () => {
        scrollBy(300); // Assuming a card width of 300px
    };

    // Render the slider component
    return (

        <div className="flex-col w-screen h-auto">

            <div className="text-6xl uppercase text-center justify-center md:p-20 xs:p-7 font-viola ">
                feedback
            </div>



            <div className="slider">
                <button onClick={goToPrevious}>&lt;</button>
                <div className="slider-cards" ref={sliderRef}>
                    {cardsData.map((card, index) => (
                        <div key={index} className="card">
                            <img src={card.imageUrl} alt={card.title} />
                            <div className="card-info">
                                <div className="card-title">{card.title}</div>
                                <div className="card-description">{card.description}</div>
                                <div className="card-price">{card.price}</div>
                                <div className="card-price-per-month">{card.pricePerMonth}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={goToNext}>&gt;</button>
            </div>
        </div>


    );
};

export default Slider;
