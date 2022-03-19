import React from 'react'
import Home1TourizmSection from '../components/Home1TourizmSection'
import Navigation from '../components/Navigation'
import NewscastShort from '../components/NewscastShort'
import Topbar from '../components/Topbar'

export default function Home1() {
  return (
    <>
      <Topbar />
      <NewscastShort />
      <Navigation />
      <Home1TourizmSection />
    </>
  )
}