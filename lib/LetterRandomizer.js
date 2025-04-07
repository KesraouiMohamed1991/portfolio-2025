'use client';  // Make sure this runs client-side in Next.js

import { useEffect, useRef } from 'react';

const LetterRandomizer = ({ children }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let interval = null;

        const handleMouseOver = (event) => {
            let iteration = 0;
            const target = event.target;

            // Store the original text in data-value attribute
            target.dataset.value = target.innerText;

            clearInterval(interval);

            interval = setInterval(() => {
                target.innerText = target.innerText
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return target.dataset.value[index];
                        }

                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("");

                if (iteration >= target.dataset.value.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        const textElement = textRef.current;
        textElement.addEventListener("mouseover", handleMouseOver);

        return () => {
            textElement.removeEventListener("mouseover", handleMouseOver);
            clearInterval(interval);
        };
    }, []);

    return (
        <h1 ref={textRef}>
            {children}
        </h1>
    );
};

export default LetterRandomizer;
