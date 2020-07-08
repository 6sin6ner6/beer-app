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
`;

const LogInWrapper = ({
  logInInvisible,
  showAddBeerPage,
  getAccess,
  getLogin,
  getPassword,
}) => {
  useEffect(() => {
    getAccess();
  }, []);
  return (
    <>
      <PageWrapper>
        <Input
          onChange={(e) => {
            const { name, value } = e.target;
            getLogin(name, value);
          }}
          type="text"
          placeholder="Nazwa użytkownika"
          name="login"
        />
        <Input
          onChange={(e) => {
            const { name, value } = e.target;
            getPassword(name, value);
          }}
          type="password"
          placeholder="Hasło"
          name="password"
        />
        <LogInButton onClick={showAddBeerPage}>Zaloguj</LogInButton>
        <CloseButton onClick={logInInvisible}>X</CloseButton>
      </PageWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return { logInVisible: state.logInVisible, access: state.access };
};

const mapDispatchToProps = (dispatch) => ({
  logInInvisible: () => dispatch(actions.logInInvisible()),
  showAddBeerPage: () => dispatch(actions.showAddBeerPage()),
  getLogin: (name, value) => dispatch(actions.getLogin(name, value)),
  getPassword: (name, value) => dispatch(actions.getPassword(name, value)),
  getAccess: () => dispatch(getAccess()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInWrapper);
