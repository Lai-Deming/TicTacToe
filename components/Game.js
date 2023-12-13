import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Board from "./Board";

const styles = StyleSheet.create({
  game: {
    // display: "flex",
    flexDirection: "row",
  },
  game_info: {
    marginLeft: 20,
  },
});

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <View style={styles.game}>
        <View>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </View>
        <View style={styles.game_info}>
          <ol>{moves}</ol>
        </View>
      </View>
    </>
  );
};
