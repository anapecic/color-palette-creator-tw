import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  callback,
  role,
  valueHex,
  valueContrast,
  onContrastInput,
  onHexInput,
  onRoleInput,
  buttonChild,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    callback();
    event.target.elements.role.focus();
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="roleInput" className="block font-semibold">
          Role
        </label>
        <input
          type="text"
          id="roleInput"
          name="role"
          value={role}
          onChange={(event) => onRoleInput(event.target.value)}
          required
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      <ColorInput
        forLabel="hexInput"
        value={valueHex}
        onColorInput={onHexInput}
      >
        Hex
      </ColorInput>
      <ColorInput
        forLabel="contrastText"
        value={valueContrast}
        onColorInput={onContrastInput}
      >
        Contrast Text
      </ColorInput>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {buttonChild}
      </button>
    </form>
  );
}
