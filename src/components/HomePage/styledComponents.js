import styled from "styled-components";
export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 29px 0px;
  min-height: 80vh;
  max-height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "#e8e8e8" : "#212121"};
  @media (max-width: 575px) {
    padding: 20px 0px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 25px 0px;
  }
`;

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 29px 0px;
  min-height: 80vh;
  max-height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "light" ? "#e8e8e8" : "#212121"};
  @media (max-width: 575px) {
    padding: 20px 0px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 25px 0px;
  }
`;

export const FailureImg = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 250px;
    height: 250px;
  }
`;

export const FailureHead = styled.h1`
  color: ${(props) => (props.theme === "light" ? "#212121" : "#ebebeb")};
  font-family: "Roboto";
  font-size: 26px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 22px;
  }
`;

export const FailurePara = styled.p`
  color: ${(props) => (props.theme === "light" ? "#212121" : "#ebebeb")};
  font-family: "Roboto";
  font-size: 18px;
  font-weight: normal;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 14px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const FailureButton = styled.button`
  color: #ffffff;
  font-family: "Roboto";
  font-size: 14px;
  font-weight: 500;
  background-color: #3b82f6;
  border: none;
  border-radius: 4px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;
  outline: none;
  cursor: pointer;

  @media (max-width: 575px) {
    font-size: 12px;
    padding: 10px 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 13px;
    padding: 11px 25px;
  }
`;

export const UsersListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 80vh;
  padding: 29px 0px;
  height: 100%;
  margin: 0px;
  background-color: ${(props) =>
    props.theme === "light" ? "#e8e8e8" : "#212121"};
  list-style-type: none;
  gap: 25px;

  @media (max-width: 575px) {
    padding: 15px;
    gap: 15px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 20px;
    gap: 20px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 25px;
    max-width: 100%;
  }
`;

export const UserListItem = styled.li`
  min-width: 17%;
  height: 100%;
  background: #3405a3;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
  padding: 20px;

  @media (max-width: 575px) {
    width: 90%;
    padding: 15px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 80%;
    padding: 18px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 45%;
    padding: 20px;
  }
`;

export const PersonImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 80px;
  background: #6b64f3;
  border-radius: 15px;
  margin: auto;
  margin-top: 25px;

  @media (max-width: 575px) {
    width: 50px;
    height: 60px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 60px;
    height: 70px;
  }
`;

export const PersonName = styled.p`
  color: white;
  text-align: center;
  display: block;
  padding-top: 10px;
  font-size: 16px;

  @media (max-width: 575px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const PersonEmail = styled.p`
  color: white;
  text-align: center;
  padding-top: 10px;
  font-size: 16px;

  @media (max-width: 575px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const PersonCity = styled(PersonEmail)`
  @media (max-width: 575px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const DetailsBtn = styled.button`
  :hover {
    background: #534bf3;
  }
  padding: 8px 25px;
  display: block;
  margin: auto;
  border-radius: 8px;
  border: none;
  margin-top: 30px;
  background: #6b64f3;
  color: white;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 575px) {
    font-size: 12px;
    padding: 6px 20px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
    padding: 7px 22px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 15px;
    padding: 8px 25px;
  }
`;

export const HighLightText = styled.span`
  font-weight: 600;
`;
