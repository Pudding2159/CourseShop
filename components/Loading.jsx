import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }) => {
    const loadingRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            }
        });

        // Начальное и конечное состояния
        tl.fromTo(loadingRef.current, 
            { 
                clipPath: 'circle(150% at 50% 50%)', // Начальное состояние: круг, покрывающий весь экран
                y: '0%' 
            }, 
            { 
                clipPath: 'ellipse(50% 25% at 50% 100%)', // Конечное состояние: полукруг
                y: '-100%',
                duration: 3, // Увеличена продолжительность для более плавной анимации
                ease: "power1.inOut" // Плавное ускорение/замедление
            }
        );

    }, [onComplete]);

    return (
        <div ref={loadingRef} style={styles.loadingScreen}>
            <h1 style={styles.text}>Loading...</h1>
        </div>
    );
};

const styles = {
    loadingScreen: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'gray', // Задний фон серого цвета
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        clipPath: 'circle(150% at 50% 50%)', // Начальное состояние: круг, покрывающий весь экран
        transform: 'translateY(0%)',
    },
    text: {
        color: 'white',
        fontSize: '2rem'
    }
};

export default LoadingScreen;