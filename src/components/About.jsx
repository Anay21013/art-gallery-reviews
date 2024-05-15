import React,{useEffect} from 'react';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div className='container-div'>
      <div data-aos="flip-up" data-aos-duration="1000">
        <h2 className='h-t bebas-neue-regular'>EXPLORE WITH US</h2>
      </div>
      <div>
        <div data-aos="fade-right" data-aos-duration="1000">
        <p className='fira-sans-condensed-thin '>Delhi, the vibrant heart of India, pulsates with a rich tapestry of art and culture that spans centuries. From classical masterpieces to avant-garde expressions of modernity, the city is a treasure trove of artistic diversity. Our website is dedicated to celebrating and showcasing this remarkable heritage through a curated list of art galleries and museums that capture the essence of Delhi's artistic journey.</p>
        </div>
      
        <div data-aos="fade-left" data-aos-duration="1000">
        <p className='fira-sans-condensed-thin '>Delhi's history as a cultural crossroads has shaped its artistic landscape, offering a unique blend of influences from across the subcontinent and beyond. This convergence of traditions can be witnessed in the myriad artworks, sculptures, and artifacts housed within these institutions. Whether you're drawn to the timeless elegance of classical Indian art or the bold experimentation of contemporary movements, Delhi's galleries and museums offer a captivating journey through time and space.</p>
        </div>
      
        <div data-aos="fade-right" data-aos-duration="1000">
        <p className='fira-sans-condensed-thin '>Explore the majestic halls of the National Gallery of Modern Art, where iconic works by renowned Indian artists stand alongside cutting-edge installations. Immerse yourself in the serene ambiance of the National Museum, home to a vast collection of artifacts that span millennia of Indian history and culture. Discover hidden gems in the intimate galleries of lesser-known institutions, where emerging artists push the boundaries of creativity.</p>
        </div>
      
        <div data-aos="fade-left" data-aos-duration="1000">
        <p className='fira-sans-condensed-thin '>Our website is your gateway to this vibrant artistic landscape, offering curated insights and recommendations to help you navigate Delhi's thriving art scene. Whether you're a seasoned art enthusiast or a curious explorer, join us as we unravel the layers of creativity that define Delhi's cultural identity. Embark on a journey of discovery, where every artwork tells a story and every gallery echoes with the spirit of artistic innovation. Welcome to Delhi's artistic legacy - let the adventure begin!</p>
        </div>
      </div>
      
    </div>
  )
}

export default About