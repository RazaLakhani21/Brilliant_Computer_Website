import React from 'react'
export default function Contact(){
return (
<section id="contact" className="py-12 bg-white">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h3 className="text-xl font-semibold">Contact Us</h3>
<p className="text-gray-600 mt-2">Visit our store in Ahmedabad or call us.</p>
<ul className="mt-4 text-gray-700">
<li><strong>Address:</strong> Near Maninagar, Ahmedabad (example)</li>
<li><strong>Phone:</strong> +91-98765-43210</li>
<li><strong>Email:</strong> info@brilliantcomputer.com</li>
</ul>
</div>
<div>
<form className="space-y-3">
<input placeholder="Your name" className="w-full border p-2 rounded" />
<input placeholder="Phone / Email" className="w-full border p-2 rounded" />
<textarea placeholder="Message / problem description" className="w-full border p-2 rounded"></textarea>
<div className="flex gap-2">
<button type="button" className="px-4 py-2 rounded bg-blue-600 text-white">Send Enquiry</button>
<button type="button" className="px-4 py-2 rounded border">Call Now</button>
</div>
</form>
</div>
</div>
</section>
)
}