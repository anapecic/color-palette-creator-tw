import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

export default function CopyToClipboard({ copyValue }) {
  const [active, setActive] = useState(false);

  async function copyToClip(value) {
    try {
      await navigator.clipboard.writeText(value);
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleCopying(value) {
    copyToClip(value);
    setActive(true);
    setTimeout(() => setActive(false), 3000);
  }

  return (
    <button
      onClick={() => handleCopying(copyValue)}
      className={`flex items-center px-4 py-2 rounded border ${
        active
          ? "bg-green-500 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {active ? (
        <span className="text-green-600">Successfully Copied!</span>
      ) : (
        <FontAwesomeIcon icon={faCopy} />
      )}
    </button>
  );
}
