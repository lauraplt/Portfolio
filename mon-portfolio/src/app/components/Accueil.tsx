import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accueil() {
  return (
    <section id="accueil" className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <img src="/placeholder.svg" alt="Votre photo" className="w-32 h-32 rounded-full mb-4" />
      <h1 className="text-4xl font-bold mb-2">Votre Nom</h1>
      <h2 className="text-2xl mb-4">Développeur Web Full Stack</h2>
      <div className="flex space-x-4">
        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Contact</a>
        <a href="#apropos" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">À propos</a>
      </div>
      <ChevronDown className="mt-8 animate-bounce" />
    </section>
  )
}