const Toggle: React.FC<{
  isChecked: boolean
  handleToggle: () => void
  text: string
}> = ({ isChecked, handleToggle, text }) => {
  return (
    <div className="absolute top-[72px] right-0 m-4">
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text text-sm md:text-base lg:text-lg">{text}</span>
          <input
            type="checkbox"
            className="toggle ml-2"
            checked={isChecked}
            onChange={handleToggle}
          />
        </label>
      </div>
    </div>
  )
}

export default Toggle
