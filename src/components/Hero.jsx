import React from 'react'
export default function Hero(){
return (
<section className="bg-gradient-to-r from-white via-blue-50 to-white py-12">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-bold text-gray-900">Your Trusted Computer Partner in Ahmedabad</h1>
<p className="mt-4 text-gray-700">Sales • Repair • Accessories • Networking • Data Recovery — All under one roof.</p>
<div className="mt-6 flex gap-3">
<a href="#contact" className="px-5 py-3 rounded-lg bg-blue-600 text-white shadow">Book a Service</a>
<a href="#products" className="px-5 py-3 rounded-lg border border-gray-200">Shop Products</a>
</div>
</div>
<div className="flex-1">
<div className="w-100 bg-gray-100 rounded-lg flex items-center justify-center"><img src="/assets/images/website_images/brilliant_computer_entrance.jpg" alt="Brilliant Computer, Juhapura, Ahmedabad-380055" /></div>
</div>
</div>
</section>
)
}
