import React from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
export default function Contact() {
    return (
        <>
        <SEO title="Contact us"/>
        <Navbar/>
        <ContactForm/>
        <Footer/>
        </>
    )
}