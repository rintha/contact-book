import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import ContactList from "./components/Contacts/ContactList/ContactList";
import AddContact from "./components/Contacts/AddContact/AddContact";
import ViewContact from "./components/Contacts/ViewContact/ViewContact";
import EditContact from "./components/Contacts/EditContact/EditContact";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view:contactId"} element={<ViewContact/>} />
        <Route path={"/contacts/edit:contactId"} element={<EditContact />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
