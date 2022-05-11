import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
  const userInitial = [
    {
      _id: "624ec2d4a905c39ee02a0108",
      username: "abhi1",
      email: "abhi1234@gmail.com",
      first_name: "abhishek",
      last_name: null,
      address: null,
      isAdmin: false,
      createdAt: "2022-04-07T10:54:12.423Z",
      updatedAt: "2022-04-08T19:28:13.677Z",
      __v: 0,
    },
    {
      _id: "624ec263623d4a905c39ee02a0108",
      username: "ab3213hi1",
      email: "abhi2331234@gmail.com",
      first_name: "abhis23hek",
      last_name: null,
      address: null,
      isAdmin: false,
      createdAt: "2022-04-07T10:54:12.423Z",
      updatedAt: "2022-04-08T19:28:13.677Z",
      __v: 0,
    },
  ];

  const [user, setUser] = useState(userInitial);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
