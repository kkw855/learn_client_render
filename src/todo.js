import React from "react";
import * as PropTypes from "prop-types";

Todo.propTypes = {
  title: PropTypes.string
};

export function Todo({ title }) {
  return <div>{title}</div>;
}



