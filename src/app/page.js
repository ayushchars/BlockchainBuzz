"use client"
import React from 'react'
import Home from './components/Home'
import Questions from './components/QA'
import Testimonials from './components/Testimonials'
import Membership from './components/Membership'
import Footer from './components/Footer'
import RecentEpisodes from './components/RecentEP'
import SponsorPage from './components/SponsorPage'
import ArticlesNews from './components/ArticlesNews'
function Page() {
  return (
    <>
    <Home/>
    <Questions/>
    <Testimonials/>
    <Membership/>
    <RecentEpisodes/>
    <SponsorPage/>
    <ArticlesNews/>
    <Footer/>
    </>
  )
}

export default Page