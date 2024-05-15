import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Exhibits from './components/Exhibits';
import About from './components/About';
import * as images from './assets/index.js'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Toolbar from './components/Toolbar';

const exhibitions = [
  {
    id: 1,
    name: 'Kiran Nadar Museum',
    imageUrl: images.pic20,
    price: 'INR 20',
    duration: 'Everyday expect Mon',
    description: 'Founded by art enthusiast Kiran Nadar, the Kiran Nadar Museum of Art (KNMA) opened in January 2010, showcasing Modern and contemporary Indian and subcontinental art in New Delhi. As a non-profit, KNMA aims to bridge the gap between art and the public, offering exhibitions, educational programs, and workshops. With sponsorship from the Shiv Nadar Foundation, it fills a void in art promotion, fostering a culture of art appreciation in India. Through collaborations with artists and the public, KNMA seeks to spark visual and intellectual dialogue, hosting acclaimed exhibitions and educational initiatives. Its 34,000 square feet space hosts diverse programs, including workshops, screenings, and curated walks, enhancing art accessibility and understanding.',
    i1:images.pic26,
    i2:images.pic27,
    i3:images.pic28,
    i4:images.pic29,
    i5:images.pic30,
    i6:images.pic31,
  },
  {
    id: 2,
    name: 'National Gallery of Modern Art',
    imageUrl: images.pic21,
    price: 'INR 500',
    duration: 'Everyday expect Mon',
    description: 'Discover excellence at the National Gallery of Modern Art, where quality is paramount in every aspect of their institution. Their commitment to aesthetic and educational objectives is deeply ingrained in their mission and reflected throughout their organization.Step into a world where art comes alive, as the gallery serves as a beacon of excellence in the realm of modern art. Every initiative is designed to enrich visitors understanding and appreciation of contemporary artistic expression.At the National Gallery of Modern Art, they strive to create an immersive experience that transcends traditional museum visits. Through their dedication to bridging art with daily life, visitors are invited to explore modern art as vibrant reflections of the human spirit. Plan your visit today and embark on a journey of discovery at the National Gallery of Modern Art, where excellence meets artistic enlightenment',
    i1:images.pic32,
    i2:images.pic33,
    i3:images.pic34,
    i4:images.pic35,
    i5:images.pic36,
    i6:images.pic37,
  },
  {
    id: 3,
    name: 'Museo Camera Centre',
    imageUrl: images.pic22,
    price: 'INR 300',
    duration: 'Everyday',
    description: "Museo Camera, born from Aditya Arya's passion and extensive collection, is now the largest not-for-profit photography museum in South-East Asia. Nestled in DLF Phase 4, Gurgaon, it boasts 18,000 sq ft dedicated to photography's art and history, featuring over 4000 cameras dating back to the 1850s. Arya's expertise enriches the experience, alongside exhibitions of original Partition-era photographs and vintage cameras. Beyond its museum status, Museo Camera offers gallery spaces for artists, workshops, seminar halls, and a fully equipped darkroom. Visitors can relax at Fig café amidst lush greenery. Dive into the captivating world of photography at Museo Camera-a haven for enthusiasts and artists alike.",
    i1:images.pic38,
    i2:images.pic39,
    i3:images.pic40,
    i4:images.pic42,
    i5:images.pic41,
    i6:images.pic43,
  },
  {
    id: 4,
    name: 'Exhibit 320',
    imageUrl: images.pic23,
    price: 'Free',
    duration: 'Mon to Sat',
    description: 'Exhibit320, situated in the vibrant hub of Lado Sarai, New Delhi, serves as a dynamic and creative nexus for artists and art enthusiasts alike. Specializing in contemporary art from India and the sub-continent, Exhibit320 provides a platform for innovative thoughts and ideas to flourish. The gallery prioritizes artworks that push boundaries, both conceptually and materially, fostering a space for creative exploration and meaningful visual dialogue. They aim to discover and nurture emerging talent while promoting critical discourse through seminars, lectures, and discussions that contextualize art within contemporary discourse. Join us in celebrating the diversity and evolution of contemporary art at Exhibit320.',
    i1:images.pic44,
    i2:images.pic45,
    i3:images.pic46,
    i4:images.pic47,
    i5:images.pic48,
    i6:images.pic49,
  },
  {
    id: 5,
    name: 'Gallery Esacpe',
    imageUrl: images.pic24,
    price: 'Free',
    duration: 'Everyday',
    description: "Gallery Espace, founded by Renu Modi in 1989, is a leading contemporary art space in Delhi. With three floors dedicated to showcasing the works of artists like M.F. Husain, G R Iranna, and Chitra Ganesh, it's a hub for innovative expressions of modern life. Situated in New Friends Colony, the gallery draws a diverse audience for its dynamic exhibitions. Known for its spacious layout, it provides artists ample room to explore realities in creative ways. Moreover, Gallery Espace fosters cross-cultural exchanges and partnerships with institutions, enhancing its role as a vital platform for artistic dialogue and growth.",
    i1:images.pic50,
    i2:images.pic51,
    i3:images.pic52,
    i4:images.pic53,
    i5:images.pic54,
    i6:images.pic55,
  },
  {
    id: 6,
    name: 'Lalit Kala Akademi',
    imageUrl: images.pic25,
    price: 'Free',
    duration: 'Mon to Sat',
    description: "Established on August 5th, 1954, under the Societies Registration Act, the Lalit Kala Akademi (National Academy of Art) in New Delhi is dedicated to fostering Visual Arts. Governed by its General Council, Executive Board, and Committees, it aims to preserve India's artistic heritage while promoting modern artistic endeavors, as envisioned by Maulana Abul Kalam Azad during its inauguration.The Akademi houses a distinguished permanent collection reflecting India's rich artistic traditions and contemporary expressions. With centers across India, it hosts exhibitions, workshops, lectures, and retrospectives, contributing significantly to the cultural landscape.",
    i1:images.pic56,
    i2:images.pic57,
    i3:images.pic58,
    i4:images.pic59,
    i5:images.pic60,
    i6:images.pic61,
  },
  // Add more exhibition objects here 
];

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Toolbar exhibitions={exhibitions}/>
      <div className='sm:px-16 flex justify-center items-center'>
        <div className='mt-0 xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div>
        <Hero/>
      </div>

      <div>
        <About/>
      </div>

      <div>
        <Exhibits exhibitions={exhibitions} />
      </div>

    </div>
  )
}

export default App
