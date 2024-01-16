import "./App.css";
import { Fragment, useState } from "react";
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

  const handleDeleteUser = (userId, user) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setSource((prevUsers) => [...prevUsers, user]);
  };

  const handleAddUser = (user) => {
    console.log("clicked");
    setUsers((prevUsers) => [...prevUsers, user]);
    setSource((prevUsers) =>
      prevUsers.filter((prevUser) => prevUser.id !== user.id)
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
        <Input onFocus={onFocus} onBlur={onBlur} />
        {focused && (
          <CardContainer users={source} handleAddUser={handleAddUser} />
        )}
      </div>
    </Fragment>
  );
}

export default App;
