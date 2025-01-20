import { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import UsersContext from "./context/UsersContext";
import HomePage from "./components/HomePage";
import UserDetails from "./components/UserDetails";
import "./App.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const App = () => {
  const [apiResponse, setApiResponse] = useState(apiStatusConstants.initial);
  const [theme, setTheme] = useState("light");
  const [searchInput, setSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("A-Z");
  const [usersList, setUsersList] = useState([]);
  const [usersListAccordingToUserInput, setusersListAccordingToUserInput] =
    useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  const changeSortOption = (event) => {
    setSortOption(event.target.value);
    let tempUsersList = usersList;
    if (sortOption === "Z-A") {
      tempUsersList = tempUsersList.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      tempUsersList = tempUsersList.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    setusersListAccordingToUserInput(tempUsersList);
  };

  const changeSearchQuery = () => {
    let tempUsersList = usersList;
    if (searchInput !== "") {
      tempUsersList = tempUsersList.filter((eachItem) => {
        const name = eachItem.name.toLowerCase();
        const input = searchInput.toLowerCase();
        return name.includes(input);
      });
    }
    setusersListAccordingToUserInput(tempUsersList);
  };

  const changeSearchInput = (word) => {
    if (word === "") {
      changeSearchQuery();
    }
    setSearchInput(word);
  };

  const getUsersData = async () => {
    setApiResponse(apiStatusConstants.inProgress);
    const url = "https://jsonplaceholder.typicode.com/users";

    const options = {
      method: "GET",
    };
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      if (response.ok) {
        setApiResponse(apiStatusConstants.success);
        setUsersList(responseData);
        setusersListAccordingToUserInput(responseData);
      } else {
        setApiResponse(apiStatusConstants.failure);
      }
    } catch (error) {
      setApiResponse(apiStatusConstants.failure);
    }
  };

  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };

  return (
    <UsersContext.Provider
      value={{
        usersListAccordingToUserInput: usersListAccordingToUserInput,
        theme: theme,
        apiStatus: apiResponse,
        searchInput: searchInput,
        sortOption: sortOption,
        changeSortOption: changeSortOption,
        changeTheme: changeTheme,
        changeSearchInput: changeSearchInput,
        tryFetchAgain: getUsersData,
        changeSearchQuery: changeSearchQuery,
      }}
    >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user/:id" component={UserDetails} />
      </Switch>
    </UsersContext.Provider>
  );
};

export default withRouter(App);
