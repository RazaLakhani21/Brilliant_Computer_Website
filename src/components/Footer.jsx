import React from 'react'
export default function Footer(){
return (
<footer className="bg-gray-900 text-gray-200 py-6">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
<div>© {new Date().getFullYear()} Brilliant Computer — Ahmedabad</div>
<div className="text-sm">Mon–Sat: 10:00–8:00 | Sun: Closed</div>
</div>
</footer>
)
}