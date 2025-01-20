import { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import UsersContext from "../../context/UsersContext";
import {
  HeaderContainer,
  Container,
  ThemeButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  SortPara,
  SortSelect,
  SortContainer,
} from "./styledComponents";

const Header = () => {
  const {
    theme,
    changeTheme,
    searchInput,
    changeSearchInput,
    sortOption,
    changeSortOption,
    changeSearchQuery,
  } = useContext(UsersContext);

  const changeThemeClicked = () => {
    changeTheme();
  };

  const changeSearchInputValue = (event) => {
    if (!window.location.pathname.includes("/user")) {
      if (event.target.value === "") {
        changeSearchInput(event.target.value);
        changeSearchQuery();
      }
      changeSearchInput(event.target.value);
    }
  };

  return (
    <HeaderContainer theme={theme}>
      <SearchContainer theme={theme}>
        <SearchInput
          placeholder="Search"
          type="search"
          onChange={changeSearchInputValue}
          value={searchInput}
          theme={theme}
        />
        <SearchButton theme={theme} type="button" onClick={changeSearchQuery}>
          <GoSearch
            size={15}
            color={theme === "light" ? "#7e858e" : "#909090"}
          />
        </SearchButton>
      </SearchContainer>
      <Container>
        <SortContainer>
          <SortPara theme={theme}>Sort By:</SortPara>
          <SortSelect
            value={sortOption}
            onChange={changeSortOption}
            theme={theme}
          >
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </SortSelect>
        </SortContainer>
        <ThemeButton onClick={changeThemeClicked} type="button">
          {theme === "light" ? (
            <FaMoon size={20} cursor="pointer" />
          ) : (
            <FiSun color="#ffffff" size={20} cursor="pointer" />
          )}
        </ThemeButton>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
