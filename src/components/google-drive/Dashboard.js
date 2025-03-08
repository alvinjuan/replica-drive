import React from 'react'
import Navbar from './Navbar'
import { useFolder } from '../../hooks/useFolder'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'
import Folder from './Folder'

export default function Dashboard() {
  const { folder, childFolders } = useFolder("abag3eELkMcYCs76Jh52")
  console.log(childFolders)

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
        {childFolders.map(childFolder => (
          <div key={childFolder.id} style={{ maxWidth: '250px' }}
          className='p-2'>
            <Folder folder={folder} />
          </div>
        ))}
      </Container>
    </>
  )
}
  
