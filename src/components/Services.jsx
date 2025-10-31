import React from 'react'
const services = [
'Computer & Laptop Repair',
'Software Installation & Troubleshooting',
'Networking (Home & Office)',
'Custom PC Builds',
'Data Recovery',
'Annual Maintenance Contracts (AMC)'
]
export default function Services(){
return (
<section id="services" className="py-12">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold">Our Services</h2>
<p className="text-gray-600 mt-2">Comprehensive solutions for home and business users.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
{services.map((s,i)=> (
<div key={i} className="p-4 bg-white rounded-lg shadow-sm">
<h3 className="font-medium">{s}</h3>
<p className="text-sm text-gray-500 mt-2">Professional & prompt service with genuine parts.</p>
</div>
))}
</div>
</div>
</section>
)
}