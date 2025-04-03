import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import doc1 from '../assets/doc1.jpg';
import doc2 from '../assets/doc2.png';
import doc3 from '../assets/doc3.jpg';
import doc4 from '../assets/doc4.jpg';
import doc5 from '../assets/doc5.jpg';
import doc6 from '../assets/doc6.png';
import doc7 from '../assets/doc7.jpg';
import doc8 from '../assets/doc8.jpg';

export const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const doctors = [
    { id: 1, name: 'Dr. Ryan Hayes', speciality: 'General physician', image: doc1 },
    { id: 2, name: 'Dr. Emily Davis', speciality: 'Neurologist', image: doc2 },
    { id: 3, name: 'Dr. Lucas Reed', speciality: 'Gastroenterologist', image: doc3 },
    { id: 4, name: 'Dr. Lily Adams', speciality: 'Pediatrician', image: doc4 },
    { id: 5, name: 'Dr. Adam Clarke', speciality: 'Gastroenterologist', image: doc5 },
    { id: 6, name: 'Dr. Olivia Smith', speciality: 'Gynecologist', image: doc6 },
    { id: 7, name: 'Dr. James Carter', speciality: 'Dermatologist', image: doc7 },
    { id: 8, name: 'Dr. Grace Foster', speciality: 'General physician', image: doc8 },
  ];

  useEffect(() => {
    setFilteredDoctors(
      speciality ? doctors.filter((doc) => doc.speciality === speciality) : doctors
    );
  }, [speciality]);

  return (
    <div className="p-5">
      <p className="text-gray-600 text-lg mb-4">Browse specialist doctors.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5">
        {/* Filters */}
        <div className="flex flex-col gap-3 text-sm text-gray-600 w-full sm:w-auto">
          {['General physician', 'Gynecologist', 'Dermatologist', 'Pediatrician', 'Neurologist', 'Gastroenterologist'].map((role) => (
            <p
              key={role}
              onClick={() => navigate(speciality === role ? '/doctors' : `/doctors/${role}`)}
              className={`p-2 border rounded-lg cursor-pointer transition-all ${speciality === role ? 'bg-[#C1694F] text-white' : 'hover:bg-gray-200'}`}
            >
              {role}
            </p>
          ))}
        </div>
        {/* Doctors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredDoctors.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/appointment/${item.id}`)}
              className="border rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg "
            >
              <img className="w-full h-48 object-cover bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-green-500 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium mt-1">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;