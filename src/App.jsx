import React, {useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ModalBooking from './components/ModalBooking'


export default function App(){
const [open, setOpen] = useState(false)
return (
<div className="min-h-screen flex flex-col">
<Header />
<main className="flex-1">
<Hero />
<Services />
<Products />
<Testimonials />
<Contact />
</main>
<Footer />
<ModalBooking open={open} onClose={()=>setOpen(false)} />
{/* small floating CTA */}
<button onClick={()=>setOpen(true)} className="fixed right-6 bottom-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg">Book</button>
</div>
)
}