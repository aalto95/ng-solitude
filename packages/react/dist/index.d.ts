import React from 'react';

interface SliderProps {
    slides: {
        image: string;
        label: string;
        paragraph: string;
    }[];
}
declare const Slider: React.FC<SliderProps>;

export { Slider };
