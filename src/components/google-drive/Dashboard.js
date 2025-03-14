import React from "react"; // default export
import Navbar from "./Navbar";
import { useFolder } from "../../hooks/useFolder";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import File from "./File";
import { useParams, useLocation } from "react-router-dom"; // w/ brackets means named exports and it comes with the library or module
import FolderBreadcrumbs from "./FolderBreadcrumbs"; // no brackets if its a file in the application
import AddFileButton from "./AddFileButton";

export default function Dashboard() {
  const { folderId } = useParams();
  const location = useLocation();
  const state = location.state || {};
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <File folder={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
