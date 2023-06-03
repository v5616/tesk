import React from 'react'
import Navbar from './components/Navbar'
import InnerNavbar from './components/InnerNavbar'
import HeroSection from './components/HeroSection'
import ItcGroup from './components/ItcGroup'
import OurService from './components/OurService'
import ClientPage from './components/ClientPage'
import PartnerPage from './components/PartnerPage'
import ClientReviews from './components/ClientReviews'
import InputField from './components/InputField'
import Footer from './components/Footer'
const App = () => {
    return (
        <div>
            <Navbar />
            <InnerNavbar />
            <HeroSection />
            <ItcGroup />
            <OurService />
            <ClientPage />
            <ClientReviews />
            <PartnerPage />
            <InputField />
            <Footer />
        </div>
    )
}

export default App