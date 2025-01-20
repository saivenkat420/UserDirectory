import { Link, withRouter } from "react-router-dom";
import { useContext } from "react";
import { RingLoader } from "react-spinners";
import { BsPersonCircle } from "react-icons/bs";
import {
  LoadingViewContainer,
  FailureViewContainer,
  FailureImg,
  FailureHead,
  FailurePara,
  FailureButton,
  UsersListContainer,
  UserListItem,
  PersonImg,
  PersonName,
  PersonEmail,
  PersonCity,
  DetailsBtn,
  HighLightText,
} from "./styledComponents.js";
import UsersContext from "../../context/UsersContext.js";
import Header from "../Header";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const HomePage = (props) => {
  const {
    theme,
    apiStatus,
    tryFetchAgain,
    usersListAccordingToUserInput,
    changeSearchInput,
  } = useContext(UsersContext);

  const retryFetch = () => {
    tryFetchAgain();
  };

  const renderLoadingView = () => (
    <LoadingViewContainer theme={theme}>
      <RingLoader color="#2e11f1" size={100} />
    </LoadingViewContainer>
  );

  const renderFailureView = () => (
    <FailureViewContainer theme={theme}>
      <FailureImg
        alt="failure view"
        src={
          theme === "light"
            ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        }
      />
      <FailureHead theme={theme}>Oops! Something Went Wrong</FailureHead>
      <FailurePara theme={theme}>We are having some trouble</FailurePara>
      <FailurePara theme={theme}>Please try again</FailurePara>
      <Link to="/">
        <FailureButton type="button" theme={theme} onClick={retryFetch}>
          Retry
        </FailureButton>
      </Link>
    </FailureViewContainer>
  );

  const goToUserPage = (event) => {
    const { history } = props;
    history.push(`/user/${event.target.id}`);
  };

  const changeQuery = () => {
    changeSearchInput("");
    tryFetchAgain();
  };

  const renderUsersDetailsView = () =>
    !usersListAccordingToUserInput.length ? (
      <>
        <FailureViewContainer theme={theme}>
          <FailureImg
            alt="failure view"
            src={
              theme === "light"
                ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            }
          />
          <FailureHead theme={theme}>No User Found</FailureHead>
          <Link to="/">
            <FailureButton type="button" theme={theme} onClick={changeQuery}>
              Go Back
            </FailureButton>
          </Link>
        </FailureViewContainer>
      </>
    ) : (
      <>
        <UsersListContainer theme={theme}>
          {usersListAccordingToUserInput.map((eachItem) => (
            <UserListItem key={eachItem.id}>
              <PersonImg>
                <BsPersonCircle
                  size={40}
                  color={theme === "light" ? "#e8e8e8" : "#212121"}
                />
              </PersonImg>
              <PersonName>
                {" "}
                <HighLightText>Name :</HighLightText> {eachItem.name}
              </PersonName>
              <PersonEmail>
                {" "}
                <HighLightText>Email :</HighLightText> {eachItem.email}
              </PersonEmail>
              <PersonCity>
                <HighLightText>City :</HighLightText> {eachItem.address.city}
              </PersonCity>
              <DetailsBtn onClick={goToUserPage} id={eachItem.id}>
                Get Details
              </DetailsBtn>
            </UserListItem>
          ))}
        </UsersListContainer>
      </>
    );

  const renderUsersDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderUsersDetailsView();
      case apiStatusConstants.failure:
        return renderFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };
  return (
    <>
      <Header />
      {renderUsersDetails()}
    </>
  );
};

export default withRouter(HomePage);
