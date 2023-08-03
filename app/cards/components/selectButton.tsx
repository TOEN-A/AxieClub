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
          className={`text-xs md:text-sm lg:text-base w-12 md:w-16 lg:w-24 px-0 py-2 rounded-lg focus:outline-none ${
            selectedOptions.includes(option) ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-300 text-black hover:bg-blue-400'
          }`}
          onClick={() => handleClick(option ,handleSelectButton)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default SelectButton;
