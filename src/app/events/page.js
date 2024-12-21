import React from 'react'
import { Navbar } from '../components/Navbar'
import { EventsPageSection } from '../sections/EventsPageSection'

export default function EventsPage() {
    return (
        <section className=''>
        <Navbar/>
        <EventsPageSection/>
        </section>
    )


}