import React from 'react';
import BoxA from '../components/BoxA';
const Boxes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 p-5 justify-items-center bg-white">
      
      <BoxA/>


      {/* Box 2 */}
      <div className="w-[400px] h-[400px] bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h2 className="text-lg font-semibold mb-2 text-[#38b8e0]">Smart Forecast</h2>
        <p className="text-sm text-gray-600">AI-powered daily and weekly weather predictions.</p>
      </div>

      {/* Box 3 */}
      <div className="w-[400px] h-[400px] bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h2 className="text-lg font-semibold mb-2 text-[#38b8e0]">Clean UI</h2>
        <p className="text-sm text-gray-600">Minimal, smooth design for a pro experience.</p>
      </div>

      {/* box 4 */}
      <div className="col-span-2 w-[953px] h-[400px] bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h2 className="text-lg font-semibold mb-2 text-[#38b8e0]">Comprehensive Insights</h2>
        <p className="text-sm text-gray-600">Detailed analytics for your weather patterns and trends.</p>
      </div>

      {/* Box 5 */}
      <div className="w-[400px] h-[400px] bg-[#f9f9f9] rounded-xl p-6 shadow-md hover:shadow-xl transition">
        <h2 className="text-lg font-semibold mb-2 text-[#38b8e0]">Data Analysis</h2>
        <p className="text-sm text-gray-600">Visualize and analyze weather data with ease.</p>
      </div>
     
    </div>
  );
};

export default Boxes;



