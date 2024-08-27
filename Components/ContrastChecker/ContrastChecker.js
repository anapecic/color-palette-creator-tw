import { useEffect, useState } from "react";

export default function ContrastChecker({ checkHex, checkContrast }) {
  const [score, setScore] = useState(null);

  useEffect(() => {
    async function postFetch() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            body: JSON.stringify({ colors: [checkHex, checkContrast] }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const fetchedScore = await response.json();
        if (fetchedScore && fetchedScore.overall) {
          setScore(fetchedScore.overall);
        } else {
          setScore("Currently unavailable, try later.");
        }
      } catch (error) {
        console.error("Error fetching the contrast score:", error);
      }
    }

    postFetch();
  }, [checkHex, checkContrast]);

  function getContrastClass() {
    switch (score) {
      case "Nope":
        return "bg-red-500 text-black";
      case "Yup":
        return "bg-green-500 text-white";
      case "Kinda":
        return "bg-orange-500 text-black";
      default:
        return "hidden";
    }
  }

  return (
    <p className={`px-3 py-1 rounded font-bold ${getContrastClass()}`}>
      Contrast score:{" "}
      {score
        ? (score === "Yup" && "Good") ||
          (score === "Nope" && "Bad") ||
          (score === "Kinda" && "Okay")
        : "Checking..."}
    </p>
  );
}
