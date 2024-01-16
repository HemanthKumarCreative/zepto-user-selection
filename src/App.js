import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Input from "./components/Input/Input";
import CardContainer from "./components/CardContainer/CardContainer";
import userList from "./assets/userList.json";
import Chip from "./components/Chip/Chip";

function App() {
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const [users, setUsers] = useState([]);
  const [source, setSource] = useState(userList);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userList);

  useEffect(() => {
    setFilteredUsers((prevFilteredUsers) =>
      source.filter((user) => user?.name.includes(inputValue))
    );
  }, [inputValue, source]);

  const handleDeleteUser = (userId, user) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setFilteredUsers((prevFilteredUsers) => [...prevFilteredUsers, user]);
  };

  const handleAddUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((prevUser) => prevUser.id !== user.id)
    );
  };

  return (
    <Fragment>
      <h1 className="App">Pick Users</h1>
      {users?.length > 0 && (
        <div className="chips-container">
          {users.length &&
            users?.map((user) => (
              <Chip key={user.id} user={user} onDelete={handleDeleteUser} />
            ))}
        </div>
      )}
      <div className="organiser">
        <Input
          onFocus={onFocus}
          onBlur={onBlur}
          inputValue={inputValue}
          setInputValue={setInputValue}
          users={users}
          setUsers={setUsers}
          setFilteredUsers={setFilteredUsers}
        />
        {focused && (
          <CardContainer users={filteredUsers} handleAddUser={handleAddUser} />
        )}
      </div>
    </Fragment>
  );
}

export default App;
