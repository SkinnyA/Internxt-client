import React, {useState} from 'react';
import BooksList from './components/BooksList';
import ModalBook from './components/ModalBook';
import EditBook from './components/EditBook';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  // States for BooksList
  const [open, setOpen] = useState(false);
  const [activeItemName, setActiveItemName] = useState('');
  const [activeItemDesc, setActiveItemDesc] = useState('');
  const [activeItemId, setActiveItemId] = useState('');

  // State for ModalBook
  const [openModalEdit, setOpenModalEdit] = useState(false);

  // Functions for BooksList and EditBook
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function for ModalBook and EditBook
  const handleOpenModalEdit = () => setOpenModalEdit(true);
  const handleCloseModalEdit = () => setOpenModalEdit(false);

  // Function for BooksList and EditBook
  const openModalWithItem = (item) => {
    handleOpen();
    setActiveItemName(item.title);
    setActiveItemDesc(item.description);
    setActiveItemId(item._id);
  }

  // Function for ModalBook
  const editModal = (item) => {
    handleOpenModalEdit();
    setActiveItemName(item.title);
    setActiveItemDesc(item.description);
    setActiveItemId(item._id);
  }

  return (
    <div className="background">
      <BooksList 
        openModalWithItem={openModalWithItem}
        editModal={editModal}
      />
      <ModalBook 
        openModalEdit={openModalEdit}
        activeItemName={activeItemName}
        activeItemDesc={activeItemDesc}
        activeItemId={activeItemId}
        handleCloseModalEdit={handleCloseModalEdit}
        editModal={editModal}
      />
      <EditBook 
        openModalWithItem={openModalWithItem}
        open={open}
        activeItemName={activeItemName}
        activeItemDesc={activeItemDesc}
        handleClose={handleClose}
      />
    </div>
  );
}

export default App;
