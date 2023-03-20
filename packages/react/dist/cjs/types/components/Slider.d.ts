import React from 'react';
import './Slider.scss';
interface SliderProps {
    slides: {
        image: string;
        label: string;
        paragraph: string;
    }[];
}
export declare const Slider: React.FC<SliderProps>;
export {};
