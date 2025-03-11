import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";

export default function AddFileButton({ currentFolder }) {
  function handleUpload(e) {}

  return (
    <label className="btn btn-outline-success btn-sm m-0 me-2">
      <FontAwesomeIcon icon={faFileUpload} />
      <input
        type="file"
        onChange={handleUpload}
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}
      />
    </label>
  );
}
