import React from "react";
import { List } from "semantic-ui-react";

const DisplayUsers = ({ user }) => {
  return (
    <List>
      <List.Item>{user.login}</List.Item>
    </List>
  );
};

export default DisplayUsers;
