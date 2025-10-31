import React from 'react'
const reviews = [
{name:'Kunal', text:'Great repair service — quick and honest!'},
{name:'Meera', text:'Bought a laptop, excellent price & support.'}
]
export default function Testimonials(){
return (
<section id="testimonials" className="py-12">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-2xl font-semibold">What our customers say</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
{reviews.map((r,i)=> (
<div key={i} className="p-4 bg-white rounded-lg shadow-sm">
<div className="font-medium">{r.name}</div>
<div className="text-gray-600 mt-2">{r.text}</div>
</div>
))}
</div>
</div>
</section>
)
}