import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 25px 0px;
  background-color: ${(props) =>
    props.theme === "light" ? "#e8e8e8" : "#212121"};

  @media (max-width: 575px) {
    flex-direction: column;
    padding: 15px 0px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 20px 0px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: row;
    padding: 20px 0px;
  }

  @media (min-width: 1200px) {
    padding: 25px 0px;
  }
`;

export const ThemeButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;

  @media (max-width: 575px) {
    transform: scale(0.8);
  }

  @media (min-width: 576px) and (max-width: 767px) {
    transform: scale(0.9);
  }

  @media (min-width: 1200px) {
    transform: scale(1);
  }
`;

export const SearchContainer = styled.div`
  background-color: transparent;
  border: 1.5px solid
    ${(props) => (props.theme === "light" ? "#e2e8f0" : "#909090")};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;

  @media (max-width: 575px) {
    width: 90%;
    height: 35px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 80%;
    height: 35px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 60%;
    height: 40px;
    margin-right: 5%;
  }

  @media (min-width: 1200px) {
    width: 30%;
    height: 40px;
    margin-right: 5%;
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 100px;
  outline: none;
  border: none;
  background-color: ${(props) =>
    props.theme === "light" ? "#ffffff" : "#212121"};
  font-family: "Roboto";
  font-size: 16px;
  padding: 15px;
  flex-grow: 1;
  color: ${(props) => (props.theme !== "light" ? "#7e858e" : "#181818")};
  border-radius: 5px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;

  @media (max-width: 575px) {
    font-size: 12px;
    padding: 10px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
    padding: 12px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
    padding: 14px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
    padding: 15px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 15%;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "#ffffff" : "#212121"};
  padding: 0px;
  height: 100%;
  border-left: 1px solid
    ${(props) => (props.theme === "light" ? "#e2e8f0" : "#909090")};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: 575px) {
    min-width: 10%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    min-width: 12%;
  }

  @media (min-width: 1200px) {
    min-width: 15%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 30%;

  @media (max-width: 575px) {
    flex-direction: column;
    gap: 20px;
    width: 90%;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    gap: 40px;
    width: 80%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    gap: 40px;
    width: 50%;
  }

  @media (min-width: 1200px) {
    gap: 60px;
    width: 30%;
  }
`;
export const SortContainer = styled(Container)`
  gap: 5px;
`;

export const SortPara = styled.h1`
  font-family: "Roboto";
  font-size: 16px;
  color: ${(props) => (props.theme !== "light" ? "#7e858e" : "#181818")};
  margin: 0px;
  @media (max-width: 575px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const SortSelect = styled.select`
  background-color: transparent;
  border: 1.5px solid
    ${(props) => (props.theme === "light" ? "#e2e8f0" : "#909090")};
  color: ${(props) => (props.theme !== "light" ? "#7e858e" : "#181818")};
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  outline: none;

  @media (max-width: 575px) {
    width: 50px;
    height: 25px;
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 55px;
    height: 28px;
    font-size: 13px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 60px;
    height: 30px;
    font-size: 14px;
  }

  @media (min-width: 1200px) {
    width: 65px;
    height: 35px;
    font-size: 15px;
  }
`;
