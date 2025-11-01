import React from 'react'
const reviews = [
{name:'Hardik Khakhi', text:'Nice retail outlet for purchasing Computer & IT Hardware in Juhapura. Owner is knowledgeable and is very kind. Offers good services at reasonable price.', link:"https://www.google.com/maps/contrib/106052450981017757043/place/ChIJ6TRPEjSFXjkR9EShdQytVOU/@22.3453017,71.0254005,8z/data=!4m4!1m3!8m2!1e1!2s106052450981017757043?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"},
{name:'Akmenli HH', text:'Excellent expert, I would say briefly. I am happy with the work done within quite short time', link:"https://www.google.com/maps/contrib/115392104380377628226/place/ChIJ6TRPEjSFXjkR9EShdQytVOU/@28.5581316,73.6800482,6z/data=!4m6!1m5!8m4!1e1!2s115392104380377628226!3m1!1e1?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D"}
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
<div className="text-green-600 mt-2">Visit my Testimony: <a className='inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200' href={r.link}>Click Me!</a></div>
</div>
))}
</div>
</div>
</section>
)
}