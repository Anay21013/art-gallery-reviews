import React from 'react'
import { useState } from 'react';
import {pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10} from '../assets';
import './Hero.css';
import * as images from '../assets/index.js'

const Hero = () => {
    // Fisher-Yates shuffle algorithm to shuffle the array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    // Function to generate a random size for each image
    const getRandomSize = () => {
      const sizes = ['small', 'medium', 'large'];
      return sizes[Math.floor(Math.random() * sizes.length)];
    };
  
    // Array of image objects containing both the image and alt text
    const imageArray = [
      { src: images.pic1, alt: 'Image 1' },
      { src: images.pic2, alt: 'Image 2' },
      { src: images.pic3, alt: 'Image 3' },
      { src: images.pic4, alt: 'Image 4' },
      { src: images.pic5, alt: 'Image 5' },
      { src: images.pic6, alt: 'Image 6' },
      { src: images.pic7, alt: 'Image 7' },
      { src: images.pic8, alt: 'Image 8' },
      { src: images.pic9, alt: 'Image 9' },
      { src: images.pic10, alt: 'Image 10' },
      { src: images.pic11, alt: 'Image 11' },
      { src: images.pic12, alt: 'Image 12' },
      { src: images.pic13, alt: 'Image 13' },
      { src: images.pic14, alt: 'Image 14' },
      { src: images.pic15, alt: 'Image 15' },
      {src: images.pic16, alt: 'Image 16' },
      {src: images.pic17, alt: 'Image 17' },
      {src: images.pic18, alt: 'Image 18' },
      { src: images.pic19, alt: 'Image 19' },
    ];
  
    // Shuffle the image array
    const shuffledArray = shuffleArray(imageArray);
  
    return (
      <div className="hero-container">
        {shuffledArray.map((image, index) => (
          <div key={index} className={`image-container ${getRandomSize()}`}>
            <img src={image.src} alt={image.alt} className="hero-image" />
          </div>
        ))}
      </div>
    );
  }
export default Hero