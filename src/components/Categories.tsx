import React from "react";
import { IconType } from "react-icons";
import { FiBook, FiCode, FiGlobe } from "react-icons/fi";
import { FaPaintBrush, FaMusic } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Arts",
    description: "Explore the world of visual arts, literature, and more.",
    icon: FaPaintBrush,
  },
  {
    id: 2,
    title: "Science",
    description: "Learn about the fascinating world of scientific discoveries.",
    icon: FiCode,
  },
  {
    id: 3,
    title: "History",
    description: "Uncover the stories and events that shaped our world.",
    icon: FiGlobe,
  },
  {
    id: 4,
    title: "Music",
    description: "Discover different genres and styles of music.",
    icon: FaMusic,
  },
  {
    id: 5,
    title: "Literature",
    description: "Dive into the realm of books and literature.",
    icon: FiBook,
  },
];

interface Category {
  id: number;
  title: string;
  description: string;
  icon: IconType;
}

const CategoryCard: React.FC<Category> = ({ id, title, description, icon: Icon }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="p-6 border rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg text-blue-200 bg-blue-100">
        <Icon className={`text-3xl ${isHovered ? "text-blue-600" : ""}`} />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CategoryList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
