import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS, COMPANY_NAME } from '../constants';

const ContactPage: React.FC = () => {
  const { search } = useLocation();
  const [preSelectedService, setPreSelectedService] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const service = params.get('service');
    if (service) {
      setPreSelectedService(service);
    }
  }, [search]);

  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <div className="bg-green-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Contact & Booking</h1>
          <p className="mt-2 opacity-90">Ready to book? Fill out the form below or give us a call.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Phone className="text-green-600 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Phone</p>
                            <p className="text-gray-600">{PHONE_NUMBER}</p>
                            <p className="text-xs text-gray-400">Lines open 8am - 6pm</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <Mail className="text-green-600 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Email</p>
                            <p className="text-gray-600">{EMAIL_ADDRESS}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="text-green-600 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Head Office</p>
                            <p className="text-gray-600">123 Garden Lane,<br/>Greenwich, London,<br/>SE10 9XX</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Clock className="text-green-600 mt-1" />
                        <div>
                            <p className="font-semibold text-gray-700">Business Hours</p>
                            <p className="text-gray-600 text-sm">Mon - Fri: 08:00 - 18:00</p>
                            <p className="text-gray-600 text-sm">Sat: 09:00 - 17:00</p>
                            <p className="text-gray-600 text-sm">Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-800 mb-2">Need Help?</h4>
                <p className="text-sm text-blue-700 mb-4">
                    If you are unsure about which service you need, please give us a call. We can provide free advice based on your garden's condition.
                </p>
            </div>
          </div>

          {/* Booking Form Area */}
          <div className="lg:col-span-2">
            <BookingForm preSelectedService={preSelectedService} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
