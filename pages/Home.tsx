import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Star, Check, Calendar, UserCheck, PoundSterling, Clock, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';

// Helper to render icons dynamically (basic mapping)
const getIcon = (iconName: string) => {
  // In a real app, map string to component properly. 
  // Using emoji/simple placeholder for brevity in this example if Lucide dynamic import isn't set up.
  // But we have lucide-react, so let's stick to a generic icon if not mapped specifically in a large switch.
  return <Star className="w-8 h-8 text-green-600 mb-4" />;
};

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1')" }}
        ></div>
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Professional Garden Maintenance Services in the UK
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              Trusted local gardeners for regular and one-off services. We bring life back to your garden.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('home-booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Book Online
              </button>
              <Link 
                to="/prices"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-green-900 text-white font-bold py-3 px-8 rounded-full transition-all text-center"
              >
                Check Prices & Availability
              </Link>
            </div>
          </div>

          <div id="home-booking" className="hidden lg:block">
            <BookingForm className="max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Mobile Booking Form (Visible only on small screens) */}
      <section className="lg:hidden container mx-auto px-4 -mt-10 relative z-30">
        <BookingForm />
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gardening Services</h2>
          <p className="text-gray-600">Comprehensive garden care solutions tailored to your property's needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="mb-4 bg-green-50 w-16 h-16 rounded-full flex items-center justify-center">
                 {/* Placeholder for specific icon mapping */}
                 <Star className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <p className="text-green-700 font-medium text-sm mb-3">{service.priceInfo}</p>
                <Link to={`/contact?service=${service.id}`} className="text-green-600 font-bold hover:text-green-800 flex items-center text-sm">
                  Book Now <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
            <Link to="/services" className="inline-block border-b-2 border-green-600 text-green-700 font-semibold hover:text-green-900 pb-1">
                View all services
            </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="relative p-6">
                    <div className="w-16 h-16 bg-green-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">1</div>
                    <h3 className="text-xl font-bold mb-3">Choose a Service</h3>
                    <p className="text-gray-600">Select the gardening service you need from our extensive list.</p>
                </div>
                <div className="relative p-6">
                    <div className="w-16 h-16 bg-green-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">2</div>
                    <h3 className="text-xl font-bold mb-3">Select Date & Time</h3>
                    <p className="text-gray-600">Pick a convenient slot. We are available 7 days a week, even in bad weather.</p>
                </div>
                <div className="relative p-6">
                    <div className="w-16 h-16 bg-green-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">3</div>
                    <h3 className="text-xl font-bold mb-3">Book in Minutes</h3>
                    <p className="text-gray-600">Fill in your details and confirmation is instant. Relax while we work.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                 <img src="https://picsum.photos/800/600?random=2" alt="Gardeners working" className="rounded-lg shadow-xl" />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Green Life Maintenance?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="bg-green-100 p-3 rounded-full h-fit"><UserCheck className="text-green-600"/></div>
                        <div>
                            <h4 className="text-xl font-bold">Fully Insured & Vetted</h4>
                            <p className="text-gray-600">Every gardener is strictly vetted and carries public liability insurance.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-green-100 p-3 rounded-full h-fit"><Calendar className="text-green-600"/></div>
                        <div>
                            <h4 className="text-xl font-bold">Flexible Appointments</h4>
                            <p className="text-gray-600">Regular maintenance or one-off visits. We work around your schedule.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-green-100 p-3 rounded-full h-fit"><PoundSterling className="text-green-600"/></div>
                        <div>
                            <h4 className="text-xl font-bold">Competitive UK Pricing</h4>
                            <p className="text-gray-600">Transparent hourly rates or fixed quotes. No hidden fees.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                        <div className="bg-green-100 p-3 rounded-full h-fit"><Clock className="text-green-600"/></div>
                        <div>
                            <h4 className="text-xl font-bold">Reliable & Punctual</h4>
                            <p className="text-gray-600">We turn up on time, fully equipped, and ready to work efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((review) => (
                    <div key={review.id} className="bg-white p-6 rounded-lg shadow border border-gray-100">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} />
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-4">"{review.text}"</p>
                        <div className="font-bold text-gray-800">{review.name}</div>
                        <div className="text-sm text-gray-500">{review.location}</div>
                    </div>
                ))}
            </div>
          </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your garden?</h2>
          <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition-transform hover:-translate-y-1">
              Book Your Service Now
          </Link>
      </section>

    </div>
  );
};

export default Home;
