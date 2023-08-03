'use client'

import { text } from "stream/consumers";

const DropdownList: React.FC<{
    text: string;
    options: string[];
    onSelect: (value: string) => void;
  }> = ({ text, options, onSelect }) => {
    return (
      <div className="relative inline-block">
        <select
          onChange={(e) => onSelect(e.target.value)}
          className="text-0.5xs md:text-sm lg:text-base w-12 md:w-16 lg:w-24 block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
          <option value="">{text}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    );
  };
  

export default DropdownList