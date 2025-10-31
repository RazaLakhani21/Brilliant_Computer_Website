import React from 'react'
export default function Header(){
return (
<header className="bg-white shadow-md">
<div className="max-w-6xl mx-auto flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<div className="text-2xl font-extrabold text-blue-600">Brilliant Computer</div>
<div className="text-sm text-gray-600"> — Ahmedabad</div>
</div>
<nav className="hidden md:flex gap-6 text-gray-700">
<a href="#services">Services</a>
<a href="#products">Products</a>
<a href="#testimonials">Testimonials</a>
<a href="#contact" className="text-blue-600 font-medium">Contact</a>
</nav>
<div  className="md:hidden">☰</div>
</div>
</header>
)
}