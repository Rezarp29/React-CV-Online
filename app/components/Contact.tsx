"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-gray-800 p-5 w-full rounded-lg shadow-lg">
      <div className="container mx-auto p-2 text-left pt-10">
        <h2 className="text-2xl text-white font-bold text-center">Contact Form</h2>
        {submitted ? (
          <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-700 p-5 my-5 text-white">
            <p><strong>Nama:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Pesan:</strong> {formData.message}</p>
            <p>Data diatas akan segera di input ke database. Terimakasih!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="border-2 border-indigo-500/75 rounded-lg bg-gray-700 p-5 my-5">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="name" className="text-white font-semibold">Nama:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-600 text-white rounded-md"
                    placeholder="Masukkan nama"
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="email" className="text-white font-semibold">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-600 text-white rounded-md"
                    placeholder="Masukkan email"
                  />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <label htmlFor="message" className="text-white font-semibold">Pesan:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 bg-gray-600 text-white rounded-md"
                    placeholder="Masukkan pesan"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                Clear
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
