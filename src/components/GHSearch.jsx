import React, { useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import DisplayUsers from "./DisplayUsers";

const GHSearch = () => {
  const [searchValue, setSearchValue] = useState();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchValue}`
    );
    setUsers(response.data.items);
  };

  const userList = users.map((user) => {
    return (
      <li id={user.id}>
        <DisplayUsers user={user} />
      </li>
    );
  });

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        name="search"
        placeholder="Input GH username"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button data-cy="search_btn" name="search" onClick={() => fetchUsers()}>
        Search
      </Button>
      <ul data-cy="search_results">{userList}</ul>
    </>
  );
};

export default GHSearch;
