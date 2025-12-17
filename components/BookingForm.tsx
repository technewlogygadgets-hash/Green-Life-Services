import React, { useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { BookingFormData } from '../types';
import { Loader2, CheckCircle } from 'lucide-react';

interface Props {
  preSelectedService?: string;
  className?: string;
}

const BookingForm: React.FC<Props> = ({ preSelectedService, className }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    mobile: '',
    postcode: '',
    serviceId: preSelectedService || '',
    propertyType: '',
    date: '',
    time: '',
    frequency: '',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedService }));
    }
  }, [preSelectedService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email is required";
    if (!formData.mobile.match(/^((\+44)|(0)) ?\d{4} ?\d{6}$/)) newErrors.mobile = "Valid UK mobile number required";
    if (!formData.postcode.trim()) newErrors.postcode = "Postcode is required";
    if (!formData.serviceId) newErrors.serviceId = "Please select a service";
    if (!formData.date) newErrors.date = "Preferred date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className={`bg-white p-8 rounded-lg shadow-lg text-center ${className}`}>
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Request Received!</h3>
        <p className="text-gray-600 mb-6">
          Thank you, {formData.fullName}. We have received your request for {SERVICES.find(s => s.id === formData.serviceId)?.title}.
          One of our team members will contact you shortly on {formData.mobile} to confirm the appointment.
        </p>
        <button 
          onClick={() => {
            setSuccess(false);
            setFormData({
              fullName: '',
              email: '',
              mobile: '',
              postcode: '',
              serviceId: '',
              propertyType: '',
              date: '',
              time: '',
              frequency: '',
              notes: ''
            });
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded transition-colors"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white p-6 md:p-8 rounded-lg shadow-xl border-t-4 border-green-600 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Book Your Gardener</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Personal Details */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            type="text" 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.fullName}
            onChange={e => setFormData({...formData, fullName: e.target.value})}
            placeholder="John Smith"
          />
          {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input 
            type="email" 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input 
            type="tel" 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.mobile}
            onChange={e => setFormData({...formData, mobile: e.target.value})}
            placeholder="07700 900000"
          />
          {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postcode *</label>
          <input 
            type="text" 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.postcode ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.postcode}
            onChange={e => setFormData({...formData, postcode: e.target.value.toUpperCase()})}
            placeholder="SW1A 1AA"
          />
          {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={formData.propertyType}
            onChange={e => setFormData({...formData, propertyType: e.target.value as any})}
          >
            <option value="">Select Type</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Commercial">Commercial</option>
          </select>
        </div>

        {/* Service Details */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Service *</label>
          <select 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.serviceId ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.serviceId}
            onChange={e => setFormData({...formData, serviceId: e.target.value})}
          >
            <option value="">-- Choose a Service --</option>
            {SERVICES.map(service => (
              <option key={service.id} value={service.id}>{service.title}</option>
            ))}
          </select>
          {errors.serviceId && <p className="text-red-500 text-xs mt-1">{errors.serviceId}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
          <input 
            type="date" 
            className={`w-full p-2 border rounded focus:ring-2 focus:ring-green-500 focus:outline-none ${errors.date ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.date}
            min={new Date().toISOString().split('T')[0]}
            onChange={e => setFormData({...formData, date: e.target.value})}
          />
           {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
          <select 
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={formData.time}
            onChange={e => setFormData({...formData, time: e.target.value as any})}
          >
            <option value="">Any Time</option>
            <option value="Morning">Morning (8am - 12pm)</option>
            <option value="Afternoon">Afternoon (12pm - 5pm)</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
          <div className="flex flex-wrap gap-4">
            {['One-off', 'Weekly', 'Fortnightly', 'Monthly'].map(freq => (
              <label key={freq} className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="radio" 
                  name="frequency"
                  value={freq}
                  checked={formData.frequency === freq}
                  onChange={e => setFormData({...formData, frequency: e.target.value as any})}
                  className="text-green-600 focus:ring-green-500 h-4 w-4"
                />
                <span className="text-gray-700 text-sm">{freq}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
          <textarea 
            rows={3}
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={formData.notes}
            onChange={e => setFormData({...formData, notes: e.target.value})}
            placeholder="Details about parking, side entrance, specific tasks..."
          />
        </div>
      </div>

      <div className="mt-6">
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded shadow-md transition-colors flex justify-center items-center"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : null}
          {loading ? 'Submitting...' : 'Book Now'}
        </button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          By booking you agree to our Terms & Conditions. No payment required now.
        </p>
      </div>
    </form>
  );
};

export default BookingForm;
