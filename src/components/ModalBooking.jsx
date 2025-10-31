import React from 'react'
export default function ModalBooking({open,onClose}){
if(!open) return null
return (
<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
<div className="bg-white p-6 rounded max-w-md w-full">
<h3 className="text-lg font-semibold">Book a Service</h3>
<p className="text-sm text-gray-600 mt-2">Tell us your issue and preferred time.</p>
<div className="mt-4 flex gap-2">
<button className="px-3 py-2 bg-blue-600 text-white rounded" onClick={onClose}>Close</button>
</div>
</div>
</div>
)
}