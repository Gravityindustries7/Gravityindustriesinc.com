'use client';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Smith',
      company: 'BuildCorp Construction',
      role: 'Project Manager',
      content: 'Gravity Industries provided exceptional guidance on our major construction project. Their expertise saved us both time and money.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      company: 'MedTech Solutions',
      role: 'Operations Director',
      content: 'Outstanding support for our medical equipment procurement. The team understood our regulatory requirements perfectly.',
      rating: 5,
      image: '👩‍💼',
    },
    {
      id: 3,
      name: 'Michael Chen',
      company: 'Global Logistics Ltd',
      role: 'CEO',
      content: 'Their freight consulting services transformed our supply chain. Highly recommend for any logistics needs.',
      rating: 5,
      image: '👨‍💼',
    },
    {
      id: 4,
      name: 'Emily Davis',
      company: 'ElectroTech Industries',
      role: 'Director of Procurement',
      content: 'Professional, knowledgeable, and results-driven. Gravity Industries is our go-to for electronics consulting.',
      rating: 5,
      image: '👩‍💼',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{testimonial.image}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}