import React, { useState,useEffect } from 'react';
import './Exhibits.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Exhibits = ({ exhibitions }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedExhibition, setSelectedExhibition] = useState(null);

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const handleReadMore = (exhibition) => {
    setSelectedExhibition(exhibition);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedExhibition(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='main-div w-3/4 m-auto'>
      <div data-aos='flip-left' data-aos-duration="1500" className='h-text'>
        <p className='bebas-neue-regular'>WHAT'S ON <br></br>DISPLAY?</p>
      </div>
      <div className='container relative flex mt-5'>
        <MdChevronLeft className='btn' onClick={slideLeft} size={40} />
        <div id='slider' className='slider w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth '>
          {exhibitions.map((exhibition) => (
            <div className='card-div w-1/2 bg-white h-[450px] textt-black rounded-xl'>
              <div>
                <img src={exhibition.imageUrl}></img>
              </div>
              <div>
                <p className='bebas-neue-small'>{exhibition.name}</p>
                <p className='des'>{exhibition.price} | {exhibition.duration}</p>
                <button className="read-btn" onClick={() => handleReadMore(exhibition)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight className='btn' onClick={slideRight} size={40} />
      </div>
      <div className={`modal-overlay ${showModal ? 'open' : ''}`}>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button fira-sans-condensed-thin" onClick={handleCloseModal}>Back</button>
              {selectedExhibition && (
                <div>
                  <h2 className='h2-text bebas-neue-regular '>{selectedExhibition.name}</h2>
                  <p className='p-text fira-sans-condensed-thin'>{selectedExhibition.description}</p>
                  <div className='gallery'>
                    <div className='pics'>
                      <img className='i1' src={selectedExhibition.i1} style={{ width: '200px', height: '200px' }} />
                      <img className='i2' src={selectedExhibition.i2} style={{  width: '200px', height: '200px' }} />
                      <img className='i3' src={selectedExhibition.i3} style={{  width: '200px', height: '200px' }} />
                      <img className='i4' src={selectedExhibition.i4} style={{  width: '200px', height: '200px' }} />
                      <img className='i5' src={selectedExhibition.i5} style={{  width: '200px', height: '200px' }} />
                      <img className='i6' src={selectedExhibition.i6} style={{  width: '200px', height: '200px' }} />
                    </div>
                  </div>
                  {/* Add more details here */}
                </div>
              )}
            </div>
          </div>
      )}
      </div>
      
    </div>
  )
}

export default Exhibits;
