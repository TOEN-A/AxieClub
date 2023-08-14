'use client'

import React from "react"
import { colors } from "./source/colors"

const SelectButton: React.FC<{
  options: string[];
  handleSelectButton: (buttonValue: string) => void;
  selectedOptions: string[]
  handleClick: (option: string, handleSelectButton: (buttonValue: string) => void) => void
  
}> = ({ options, handleSelectButton, selectedOptions, handleClick }) => {
  
  return (
    <>
      {options.map((option) => (
        <button
          key={option}
          className={"mr-0.5 mt-0.5 text-[0.64rem] md:text-sm lg:text-base w-[3.4rem] md:w-16 lg:w-24 px-0 py-2 rounded-full focus:outline-none hover:opacity-75 shadow-md"}
          style={{
            background: selectedOptions.includes(option) ? colors[option] : 'rgba(128, 128, 128, 0.7)',
            color: selectedOptions.includes(option) ? 'white' : 'black',
            border: '1px solid #ccc',
            transition: 'color 0.2s', // ホバー時の色変化をスムーズにするためのトランジション
          }}
          onClick={() => handleClick(option, handleSelectButton)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default SelectButton;
