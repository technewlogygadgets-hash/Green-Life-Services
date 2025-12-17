import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-16">
      {/* Header Banner */}
      <div className="bg-green-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Professional Gardening Services</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Expert care for every corner of your garden, from lawn mowing to complete landscaping.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row bg-white rounded-xl shadow-md overflow-hidden ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/3 min-h-[250px] relative">
                <img 
                    src={`https://picsum.photos/600/400?random=${index + 10}`} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                   <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-green-600" /> Fully equipped gardeners
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-green-600" /> 7 days a week availability
                  </div>
                   <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-green-600" /> Fixed price or hourly rates
                  </div>
                   <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-green-600" /> Disposal options available
                  </div>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div>
                        <span className="block text-sm text-gray-500">Starting from</span>
                        <span className="text-xl font-bold text-green-700">{service.priceInfo}</span>
                    </div>
                    <Link 
                        to={`/contact?service=${service.id}`}
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition-colors"
                    >
                        Book This Service
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
