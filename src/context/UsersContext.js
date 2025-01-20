import React from "react";

const UsersContext = React.createContext({
  usersListAccordingToUserInput: [],
  theme: "",
  apiStatus: "",
  sortOption: "",
  changeTheme: () => {},
  changeSearchInput: () => {},
  tryFetchAgain: () => {},
  changeSearchQuery: () => {},
});

export default UsersContext;
