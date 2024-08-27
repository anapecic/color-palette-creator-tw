import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

export default function Color({ color, onDeleteColor, onSubmitEdit }) {
  const [clickDelete, setClickDelete] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editContrast, setEditContrast] = useState(color.contrastText);
  const [editRole, setEditRole] = useState(color.role);
  const [editHex, setEditHex] = useState(color.hex);

  const updatedColorObject = {
    role: editRole,
    hex: editHex,
    contrastText: editContrast,
    id: color.id,
  };

  function handleToggleEdit() {
    setEdit(!edit);
  }

  function handleToggleDelete() {
    setClickDelete(!clickDelete);
  }

  function handleEditContrast(editedContrast) {
    setEditContrast(editedContrast);
  }

  function handleEditRole(editedRole) {
    setEditRole(editedRole);
  }

  function handleEditHex(editedHex) {
    setEditHex(editedHex);
  }

  function callback() {
    onSubmitEdit(updatedColorObject);
    handleToggleEdit();
  }

  return (
    <div
      className="p-4 rounded shadow-md text-white mb-4"
      style={{
        backgroundColor: color.hex,
        color: color.contrastText,
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{color.hex}</h3>
        <CopyToClipboard copyValue={color.hex} />
      </div>
      <h4 className="text-lg font-medium">{color.role}</h4>
      <p className="text-sm mb-2">Contrast: {color.contrastText}</p>
      <ContrastChecker
        checkHex={color.hex}
        checkContrast={color.contrastText}
      />
      <div className="mt-4 flex space-x-2">
        {!clickDelete && !edit && (
          <>
            <button
              onClick={handleToggleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={handleToggleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
          </>
        )}
        {edit && (
          <div className="flex flex-col space-y-4 justify-start items-start">
            <ColorForm
              role={editRole}
              valueHex={editHex}
              valueContrast={editContrast}
              onContrastInput={handleEditContrast}
              onHexInput={handleEditHex}
              onRoleInput={handleEditRole}
              callback={callback}
              buttonChild={"Update Color"}
            />
            <button
              onClick={handleToggleEdit}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        )}
        {clickDelete && (
          <>
            <p className="text-red-500 mb-2">Really delete?</p>
            <button
              onClick={handleToggleDelete}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={() => onDeleteColor(color.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
