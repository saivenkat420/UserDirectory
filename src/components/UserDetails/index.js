import { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { RingLoader } from "react-spinners";
import {
  UserDetailsContainer,
  UserDetailsSubContainer,
  PersonImg,
  Container,
  PersonName,
  PersonEmail,
  NotFound,
  DetailsBtn,
  HighLightText,
} from "./styledComponents.js";
import UsersContext from "../../context/UsersContext.js";
import Header from "../Header";

const UserDetails = (props) => {
  const { theme, usersListAccordingToUserInput } = useContext(UsersContext);
  const { match } = props;
  const { params } = match;
  const { id } = params;
  const [userdetails, setuserdetails] = useState({});
  const [iter, setIter] = useState(1);

  useEffect(() => {
    setuserdetails(
      usersListAccordingToUserInput.filter((eachItem) => {
        return eachItem.id === parseInt(id);
      })
    );
    setIter(0);
  }, [usersListAccordingToUserInput, id]);

  const goToHomePage = () => {
    const { history } = props;
    setuserdetails([]);
    history.replace("/");
  };

  return (
    <>
      <Header />
      <UserDetailsContainer theme={theme}>
        <UserDetailsSubContainer>
          <PersonImg>
            <BsPersonCircle
              size={100}
              color={theme === "light" ? "#e8e8e8" : "#212121"}
            />
          </PersonImg>
          <Container>
            {iter ? (
              <RingLoader
                color="#ffffff"
                style={{
                  display: "inherit",
                  width: "100px",
                  height: "100px",
                  position: "relative",
                  alignSelf: "center",
                }}
              />
            ) : userdetails.length ? (
              <>
                <PersonName>
                  {" "}
                  <HighLightText>Name :</HighLightText> {userdetails[0].name}
                </PersonName>
                <PersonEmail>
                  {" "}
                  <HighLightText>Email :</HighLightText> {userdetails[0].email}
                </PersonEmail>
                <PersonEmail>
                  {" "}
                  <HighLightText>Phone :</HighLightText> {userdetails[0].phone}
                </PersonEmail>
                <PersonEmail>
                  <HighLightText>Company name :</HighLightText>{" "}
                  {userdetails[0].company.name}
                </PersonEmail>
                <PersonEmail>
                  {" "}
                  <HighLightText>website :</HighLightText>{" "}
                  {userdetails[0].website}
                </PersonEmail>
              </>
            ) : (
              <NotFound>User Not Found</NotFound>
            )}
            <DetailsBtn onClick={goToHomePage} id={userdetails.id}>
              Go Back
            </DetailsBtn>
          </Container>
        </UserDetailsSubContainer>
      </UserDetailsContainer>
    </>
  );
};
export default withRouter(UserDetails);
