import React from 'react'
import { products } from '../data/products'
export default function Products(){
return (
<section id="products" className="py-12 bg-gray-50">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-2xl font-semibold">Products & Accessories</h2>
<p className="text-gray-600 mt-2">Laptops, desktops, components and essential accessories.</p>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
{products.map(p=> (
<div key={p.id} className="p-4 bg-white rounded-lg shadow-sm">
<div className="h-36 bg-gray-100 rounded mb-3 flex items-center justify-center">{p.image}</div>
<h3 className="font-medium">{p.name}</h3>
<div className="text-sm text-gray-500">{p.short}</div>
<div className="mt-3 flex items-center justify-between">
<div className="font-semibold">{p.price}</div>
<button className="px-3 py-1 rounded bg-blue-600 text-white">Enquiry</button>
</div>
</div>
))}
</div>
</div>
</section>
)
}