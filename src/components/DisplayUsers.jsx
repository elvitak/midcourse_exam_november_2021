import React from "react";
import { List, Image } from "semantic-ui-react";

const DisplayUsers = ({ user }) => {
  return (
    <List>
      <List.Item>
        <Image avatar src={user.avatar_url} />
        <List.Content>
          <List.Header>{user.login}</List.Header>
          <List.Description data-cy="link_to_profile">
            <a href={user.html_url}>Link to profile</a>
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default DisplayUsers;
