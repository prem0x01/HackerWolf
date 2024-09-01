import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send data to server)
        console.log('Form data submitted:', formData);
        // Clear form after submission
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-green-500">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-wider text-center">
                    Contact Us
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block text-lg md:text-xl mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-green-500 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg md:text-xl mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 text-green-500 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg md:text-xl mb-2">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full px-4 py-2 bg-gray-800 text-green-500 border border-green-500 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
