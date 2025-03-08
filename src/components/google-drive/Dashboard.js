import React from 'react'
import Navbar from './Navbar'
import { useFolder } from '../../hooks/useFolder'
import { Container } from 'react-bootstrap'
import AddFolderButton from './AddFolderButton'

export default function Dashboard() {
  const { folder } = useFolder()

  return (
    <>
      <Navbar />
      <Container fluid>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </>
  )
}
  
