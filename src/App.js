// Filename: App.js
import './App.css';
import React from 'react';
import Hero from './Hero/Hero';
import ProductBanner from './ProductBanner/ProductBanner';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className="App">
    <Hero />
    <ProductBanner className="Product"/>
    <Footer />
    </div>
  )
}

export default App
