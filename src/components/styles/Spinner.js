import PulseLoader from "react-spinners/PulseLoader";
import React from "react";
import { connect } from "react-redux";

const Spinner = ({ loading }) => {
  return (
    <PulseLoader
      size={20}
      margin-top={50}
      color={"#9b9b9b"}
      loading={loading}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Spinner);
