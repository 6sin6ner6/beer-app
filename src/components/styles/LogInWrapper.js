import styled from "styled-components";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "../../duck/actions";
import { getAccess } from "../../duck/operations";
import Input from "./Input";
import LogInButton from "./LogInButton";
import CloseButton from "./CloseButton";

const PageWrapper = styled.form`
  height: 45vh;
  width: 35%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(30, 30, 30);
  @media (max-width: 575.98px) {
    min-height: 250px;
    min-width: 85%;
    justify-content: flex-end;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    width: 60%;
    height: 250px;
  }
`;

const LoginInput = styled(Input)`
  @media (max-width: 575.98px) {
    height: 15%;
    width: 80%;
    margin: 30px 0 -10px 0;
  }
  @media (max-width: 767.98px) and (orientation: landscape) {
    height: 20%;
  }
`;

const Warning = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 10px;
  display: ${(props) => (props.logInFail ? "flex" : "none")};
  @media (max-width: 767.98px) and (orientation: landscape) {
    margin-bottom: -10px;
  }
`;

const LogInWrapper = ({
  showAddBeerPage,
  getAccess,
  getLogin,
  getPassword,
  logInFail,
  logInInvisible,
}) => {
  useEffect(() => {
    getAccess();
  }, []);
  return (
    <>
      <PageWrapper>
        <LoginInput
          onChange={(e) => {
            const { name, value } = e.target;
            getLogin(name, value);
          }}
          type="text"
          placeholder="Nazwa użytkownika"
          name="login"
        />
        <LoginInput
          onChange={(e) => {
            const { name, value } = e.target;
            getPassword(name, value);
          }}
          type="password"
          placeholder="Hasło"
          name="password"
        />
        <Warning logInFail={logInFail}>
          Podany login lub hasło jest niepoprawne
        </Warning>
        <LogInButton
          onClick={(e) => {
            e.preventDefault();
            showAddBeerPage();
          }}
        >
          Zaloguj
        </LogInButton>

        <CloseButton
          onClick={() => (e, { logInInvisible }) => {
            e.preventDefault();
            logInInvisible();
          }}
        >
          X
        </CloseButton>
      </PageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logInVisible: state.logInVisible,
    access: state.access,
    logInFail: state.logInFail,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logInInvisible: () => dispatch(actions.logInInvisible()),
  showAddBeerPage: () => dispatch(actions.showAddBeerPage()),
  getLogin: (name, value) => dispatch(actions.getLogin(name, value)),
  getPassword: (name, value) => dispatch(actions.getPassword(name, value)),
  getAccess: () => dispatch(getAccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInWrapper);
