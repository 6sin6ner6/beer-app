import PulseLoader from "react-spinners/PulseLoader";
import React from "react";
import { css } from "@emotion/core";
import { connect } from "react-redux";

const override = css`
  display: block;
  margin: 30px 0;
`;

const Spinner = ({ loading }) => {
  return (
    <PulseLoader css={override} size={20} color={"#9b9b9b"} loading={loading} />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Spinner);
