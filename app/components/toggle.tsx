const Toggle: React.FC<{
  isChecked: boolean
  handleToggle: () => void
  text: string
}> = ({ isChecked, handleToggle, text }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text text-gray-800 text-sm md:text-base lg:text-lg">
          {text}
        </span>
        <input
          type="checkbox"
          className="toggle ml-2"
          checked={isChecked}
          onChange={handleToggle}
        />
      </label>
    </div>
  )
}

export default Toggle
