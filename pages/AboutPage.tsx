import React from 'react';
import { Shield, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pb-16">
      {/* Hero */}
      <div className="relative h-64 md:h-80 bg-gray-900 flex items-center justify-center">
        <img 
            src="https://picsum.photos/1920/600?random=about" 
            alt="Garden Tools" 
            className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-2">About Green Life</h1>
            <p className="text-xl">Your Local Gardening Experts</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose lg:prose-xl mx-auto text-gray-600 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="mb-4">
                Green Life Maintenance & Services LTD was founded with a simple mission: to provide reliable, high-quality gardening services to homeowners and businesses across the UK. 
            </p>
            <p className="mb-4">
                We understand that in today's busy world, finding the time to maintain a garden can be difficult. That's where we come in. We treat every garden as if it were our own, ensuring meticulous attention to detail whether we're simply mowing a lawn or executing a complex landscape design.
            </p>
            <p>
                Inspired by the best in the industry, we strive to offer a seamless booking experience, transparent pricing, and exceptional customer service.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Insured</h3>
                <p className="text-sm">Peace of mind guaranteed. We carry comprehensive public liability insurance for all our projects.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-sm">Our gardeners are vetted, trained, and passionate about horticulture and outdoor design.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Customer First</h3>
                <p className="text-sm">We pride ourselves on punctuality, politeness, and leaving your property clean and tidy.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
