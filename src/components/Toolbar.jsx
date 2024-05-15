import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.css'

const Toolbar = ({exhibitions}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visitedExhibitions, setVisitedExhibitions] = useState([]);
    const [showComingSoon, setShowComingSoon] = useState(false);

    const handleMenuClick = () => {
      setMenuOpen(true);
    };
  
    const handleCloseClick = () => {
      setMenuOpen(false);
      setVisitedExhibitions([]);
      setShowComingSoon(false);
    };
    
    const handleVisitClick = () => {
        setVisitedExhibitions(exhibitions.map(exhibition => exhibition.name));
        setShowComingSoon(false);
    };

    const handleExploreClick = () => {
        window.location.href = 'https://wanderlog.com/list/geoCategory/99001/best-art-galleries-in-new-delhi';
        setVisitedExhibitions([]);
        setShowComingSoon(false);
        // Add logic to handle "Explore" button click
    };

    const handleGetInvolvedClick = () => {
        setShowComingSoon(true);
        setVisitedExhibitions([]);
        // Add logic to handle "Get Involved" button click
    };

    return (
      <div className="toolbar">
        <button className="menu-button fira-sans-condensed-thin" onClick={handleMenuClick}>
          Menu
        </button>
        <div className={`menu-overlay ${menuOpen ? 'menu-open' : ''}`}>
          {menuOpen && (
            <div className="menu-content">
              <button className="close-button fira-sans-condensed-thin" onClick={handleCloseClick}>
                Close
              </button>
              {/* Add additional menu items or content here */}
              <div className="additional-menu-items">
              
              <button className='exp-btn bebas-neue-regular' onClick={handleVisitClick}>VISIT</button>
              {visitedExhibitions.length > 0 && (
                                <div className="visited-exhibitions">
                                    {visitedExhibitions.map(exhibitionName => (
                                        <p className='fira-sans-condensed-thin' key={exhibitionName}>{exhibitionName}</p>
                                    ))}
                                </div>
                )}
              <button className='exp-btn bebas-neue-regular' onClick={handleExploreClick}>EXPLORE</button>
              <button className='exp-btn bebas-neue-regular' onClick={handleGetInvolvedClick}>GET INVOLVED</button>
              {showComingSoon && <p className="coming-soon fira-sans-condensed-thin">Coming soon...</p>}
            </div>
            </div>
          )}
        </div>
      </div>
    );
  };

export default Toolbar;
