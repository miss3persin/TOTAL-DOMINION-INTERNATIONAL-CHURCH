import React from 'react'
import { FounderSection } from '../sections/FounderSection'
import { LeadPstSection } from '../sections/LeadPstSection'
import { ValuesSection } from '../sections/ValuesSection'
import { Navbar } from '../components/Navbar'

export default function AboutPage() {
  return (
    <section>
        <Navbar/>
        <FounderSection/>
        <LeadPstSection/>
        <ValuesSection/>
    </section>
  )
}
