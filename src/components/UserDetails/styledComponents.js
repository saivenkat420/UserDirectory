import styled from "styled-components";

export const UserDetailsContainer = styled.div`
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

export const UserDetailsSubContainer = styled.div`
  min-width: 70%;
  min-height: 60vh;
  background: #3405a3;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 575px) {
    padding: 15px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    padding: 18px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    padding: 20px;
  }
`;

export const PersonImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
  padding: 100px;
  background: #6b64f3;
  border-radius: 15px;
  margin: 0px 25px;

  @media (max-width: 575px) {
    width: 50px;
    height: 60px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    width: 60px;
    height: 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
`;

export const PersonName = styled.p`
  color: white;
  text-align: center;
  display: block;
  font-size: 16px;
  margin: 10px;

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
  margin: 10px;
  font-size: 16px;

  @media (max-width: 575px) {
    font-size: 12px;
  }

  @media (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
`;

export const NotFound = styled.p`
  color: white;
  text-align: center;
  margin: 10px;
  font-size: 16px;
  font-weight: 600;
  align-self: center;

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
  align-self: center;

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
