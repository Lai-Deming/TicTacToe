import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Square from "./Square";
import calculateWinner from "../func/calculateWinner";

const styles = StyleSheet.create({
  status: {
    marginBottom: 10,
  },
  board_row: {
    flexDirection: "row",
  },
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (props) => {
  const xIsNext = props.xIsNext;
  const squares = props.squares;
  const onPlay = props.onPlay;

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  status = winner
    ? "Winner : " + winner
    : "Next player : " + (xIsNext ? "X" : "O");

  return (
    <>
      <View style={styles.status}>{status}</View>
      <View style={styles.board_row}>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </View>
      <View style={styles.board_row}>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </View>
      <View style={styles.board_row}>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </View>
    </>
  );
};
