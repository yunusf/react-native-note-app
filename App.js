import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'

const CurrentPageWidget = ({
  currentPage, noteList, setCurrentPage,
  addNote, deleteNote, editId, iD, editData
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          editId={editId}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote
        setCurrentPage={setCurrentPage}
        iD={iD}
        editData={editData} 
        noteList={noteList}
      />
    default:
      return <Home />
  }
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
  ])
    
  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1
    
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc,
      },
    ])
  }

  const deleteNote = (noteId) => {
    const newNote = noteList.filter((note) => note.id !== noteId)

    setNoteList(newNote)
  }

  const [iD, setID] = useState(null)

  const editId = (id) => setID(id)
  const editData = (id, title, desc) => {
    const updateNotes = noteList.map((note) => {
      if (note.id === id) {
        return {...note, title, desc}
      }
      return note
    })

    setNoteList(updateNotes)
    setCurrentPage('home')
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editId={editId}
      iD={iD}
      editData={editData}
    />
  )
}

export default App