'use client'
import Header from '../components/layout/Header/Header'
import Hero from '../components/sections/Hero/Hero'
import BookingWidget from '../components/ui/BookingWidget'
import {useState} from 'react'



export default function Home() {
const [isBookingOpen,setBookingOpen] = useState(false)



    return (
        <>
            <Header handleReservar={() => setBookingOpen(!isBookingOpen)}></Header>
            {isBookingOpen &&(<BookingWidget></BookingWidget> )}
            <main>
                <Hero></Hero>
                <p style={{marginBottom: '1000px;'}}>hola</p>
            </main>
        </>
    )
}

