import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../../hooks/useFolder";
import { Link } from "react-router-dom";

export default function FolderBreadcrumbs({ currentFolder }) {
  // holds the path of the current folder
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    // Check if currentFolder.path's first element is ROOT_FOLDER; if so, remove it.
    const folderPath =
      currentFolder.path.length > 0 &&
      currentFolder.path[0].id === ROOT_FOLDER.id
        ? currentFolder.path.slice(1)
        : currentFolder.path;
    path = [...path, ...folderPath];
  }

  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white ps-0 mx-0" }}
    >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          linkProps={{
            to: {
              pathname: folder.id ? `/folder/${folder.id}` : "/",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          className="text-truncate d-inline-block"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
