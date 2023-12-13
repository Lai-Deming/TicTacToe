import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const styles = StyleSheet.create({
  square: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#999",
    height: 50,
    width: 50,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
  },
  squareText: {
    lineHeight: 50,
    textAlign: "center",
    alignItems: "center",
    fontSize: 36,
    fontWeight: "bold",
  },
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
  const { value, onSquareClick } = props;

  return (
    <button style={styles.square} onClick={onSquareClick}>
      <Text style={styles.squareText}>{value}</Text>
    </button>
  );
};
