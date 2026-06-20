import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CompanyList from '../components/CompanyList'
import Doctors from '../components/Doctors'
import MedicalFeatures from '../components/MedicalFeatures'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <CompanyList></CompanyList>
        <Doctors></Doctors>
        <MedicalFeatures></MedicalFeatures>
        <CTA></CTA>
        <Footer></Footer>
    </div>
  )
}
