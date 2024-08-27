export default function ColorInput({
  forLabel,
  children,
  value,
  onColorInput,
}) {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={forLabel} className="font-semibold">
        {children}
      </label>
      <div className="flex space-x-2 items-center">
        <input
          type="text"
          id={forLabel}
          value={value}
          onChange={(event) => onColorInput(event.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        />
        <input
          type="color"
          value={value}
          onChange={(event) => onColorInput(event.target.value)}
          className="w-12 h-12 p-0 border-none"
        />
      </div>
    </div>
  );
}
