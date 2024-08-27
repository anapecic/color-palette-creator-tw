import { useState } from "react";
import ThemeOption from "../ThemeOption/ThemeOption";

export default function ThemeForm({
  handleChangeTheme,
  themes,
  handleDeleteTheme,
  currentTheme,
  handleEditName,
  handleAddNewTheme,
}) {
  const [formMode, setFormMode] = useState("default");
  const [valueName, setValueName] = useState("");

  function onChangeTheme(themeId) {
    const newTheme = themes.find((theme) => theme.id === themeId);
    handleChangeTheme(newTheme);
  }

  function onDeleteTheme(event) {
    event.preventDefault();
    handleDeleteTheme();
  }

  function onEditName(event) {
    event.preventDefault();
    handleEditName(valueName);
    setFormMode("default");
  }

  function onChangeName(name) {
    setValueName(name);
  }

  function onAddNewTheme(event) {
    event.preventDefault();
    handleAddNewTheme(valueName);
    setValueName("");
    setFormMode("default");
  }

  return (
    <form className="space-y-4">
      {formMode === "default" && (
        <div>
          <select
            name="select"
            onChange={(event) => onChangeTheme(event.target.value)}
            value={currentTheme.name}
            className="border border-gray-300 rounded p-2 w-full"
          >
            {themes.map((theme) => (
              <ThemeOption themeName={theme.name} key={theme.id} />
            ))}
          </select>
        </div>
      )}
      {formMode !== "default" && (
        <div>
          <input
            type="text"
            placeholder="Theme name"
            name="newName"
            value={valueName}
            onChange={(event) => onChangeName(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>
      )}
      <div className="flex space-x-2">
        {formMode === "edit" && (
          <button
            onClick={onEditName}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
        {formMode === "add" && (
          <button
            onClick={onAddNewTheme}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        )}
        {formMode === "default" && (
          <>
            <button
              onClick={() => setFormMode("add")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add
            </button>
            <button
              onClick={() => setFormMode("edit")}
              disabled={currentTheme.name === "Default Theme"}
              className={`px-4 py-2 rounded ${
                currentTheme.name === "Default Theme"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              Edit
            </button>
            <button
              onClick={onDeleteTheme}
              disabled={currentTheme.name === "Default Theme"}
              className={`px-4 py-2 rounded ${
                currentTheme.name === "Default Theme"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </form>
  );
}
