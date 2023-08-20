import React, { useState } from "react";
import copy from "clipboard-copy";

function CopyToClipboardButton({ text }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset the copied state after 2 seconds
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}

export default CopyToClipboardButton;
