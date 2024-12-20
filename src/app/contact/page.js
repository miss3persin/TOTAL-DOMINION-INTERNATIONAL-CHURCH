import React from 'react'
import { PrayerReqSection } from '../sections/PrayerReqSection'
import { DonationSection } from '../sections/DonationSection'
import { LocationAltSection } from '../sections/LocationAltSection'
import { Navbar } from '../components/Navbar'


export default function ContactPage() {
  return (
    <section>
      <Navbar/>
      <PrayerReqSection/>
      <DonationSection/>
      <LocationAltSection/>
    </section>
  )
}
