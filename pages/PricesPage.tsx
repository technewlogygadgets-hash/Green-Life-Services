import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_TABLE } from '../constants';
import { Info } from 'lucide-react';

const PricesPage: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-16">
       <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Transparent Gardening Prices</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Competitive UK rates. No hidden fees. Pay only for the work done.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-green-50 border-b border-green-100">
                <h2 className="text-xl font-bold text-green-900">Standard Service Rates</h2>
                <p className="text-sm text-green-800 mt-1">
                    Please note: Minimum booking charges may apply depending on your location.
                </p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                            <th className="p-4 border-b">Service</th>
                            <th className="p-4 border-b">Unit / Time</th>
                            <th className="p-4 border-b">Price</th>
                            <th className="p-4 border-b">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {PRICING_TABLE.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-gray-800">{item.service}</td>
                                <td className="p-4 text-gray-600">{item.unit}</td>
                                <td className="p-4 font-bold text-green-700 text-lg">{item.price}</td>
                                <td className="p-4 text-sm text-gray-500">{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="p-6 bg-gray-50 text-sm text-gray-600">
                <div className="flex gap-2 items-start">
                    <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="mb-2"><strong>Important Pricing Information:</strong></p>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Prices usually include the cost of fuel and basic tools.</li>
                            <li>Parking fees and congestion charges (if applicable) are added to the final bill.</li>
                            <li>For landscaping and larger projects, we recommend a site visit for a fixed quote.</li>
                            <li>Waste removal is charged separately unless stated otherwise.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-12 bg-green-600 rounded-lg p-8 text-center text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Quote?</h2>
            <p className="mb-6 opacity-90">For large garden clearances, landscaping projects, or regular commercial maintenance, get a tailored estimate.</p>
            <Link to="/contact" className="bg-white text-green-700 font-bold py-3 px-8 rounded hover:bg-gray-100 transition-colors inline-block">
                Request a Quote
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PricesPage;
