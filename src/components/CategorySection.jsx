import React from 'react';
import { Diamond, User, UserRound } from 'lucide-react';
import men from '../assets/men.png'
const categories = [
  {
    title: "Men's Clothing",
    icon: <User size={32} />,
    link: '/category/men-clothing',
  },
  {
    title: "Women's Clothing",
    icon: <UserRound size={32} />,
    link: '/category/women-clothing',
  },
  {
    title: "Jewellery (Women)",
    icon: <Diamond size={32} />,
    link: '/category/women-jewellery',
  },
  {
    title: "Jewellery (Men)",
    icon: <Diamond size={32} />,
    link: '/category/men-jewellery',
  },
];

const CategorySection = () => {
  return (
    <div className="bg-white py-8 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="flex flex-col items-center justify-center  "
          >
            <div className="mb-2 text-blue-600">
                <img src={men} alt="" className='h-10 w-10 rounded-full object-cover'/>
            </div>
            <p className="text-gray-700 font-medium text-center">{cat.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
