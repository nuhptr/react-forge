import { useState } from "react";

/**
 * Komponen interaktif yang memadukan state dengan event `onClick`, `onCopy`,
 * `onMouseEnter`, dan `onMouseLeave`.
 *
 * @returns Blok demonstrasi event berbasis state.
 */
const EventPlayground = () => {
  const [clickMessage, setClickMessage] = useState("");
  const [copyMessage, setCopyMessage] = useState("Copy this text");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setClickMessage("Button Clicked!")}>
        Click me
      </button>
      <p>{clickMessage}</p>

      <div onCopy={() => setCopyMessage("Text Copied!")}>
        <p>{copyMessage}</p>
      </div>

      <div>
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ backgroundColor: isHovered ? "lightyellow" : undefined }}
        >
          Hover over this text
        </p>
      </div>
    </div>
  );
};

export default EventPlayground;
