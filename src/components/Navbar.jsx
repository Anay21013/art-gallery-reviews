import React from 'react'
import { useState } from 'react';
import { navLinks } from '../constants';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-between navbar'>
        <p className='bebas-neue-regular mb-0'>Artistic Tapestry of Delhi</p>
    </nav>
  )
}

export default Navbar