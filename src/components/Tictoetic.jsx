import React, { useEffect } from "react";
import styled from "styled-components";
import { Square } from "./Square";

const intial = ["", "", "", "", "", "", "", "", ""];

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  text-align: center;
  background-color: #131a28;
  color: white;
  justify-content: center;
  align-items: center;
  font-family: cursive;
`;
const Heading = styled.span`
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 50px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Button = styled.button`
  width: fit-content;
  margin: 20px auto auto auto;
`;

function Tictoetic() {
  const [game, setGame] = React.useState(intial);
  const [chance, setChance] = React.useState(false);
  const SquareClicked = (index) => {
    // console.log(index);
    let arr = Array.from(game);
    arr[index] = chance ? "X" : "0";
    setGame(arr);
    setChance(!chance);
  };

  useEffect(() => {
    const winner = CheckWinner();

    if (winner) {
      alert(` 🍷 Hoorah! ${winner} won the game! `);
      setGame(intial);
    }
  }, [game]);

  const CheckWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (game[a] && game[a] === game[b] && game[a] === game[c]) {
        return game[a];
      }
    }
    return null;
  };
  return (
    <Container>
      <Heading>Tic Toe Tic</Heading>
      <Row>
        <Square state={game[0]} onClick={() => SquareClicked(0)} />
        <Square state={game[1]} onClick={() => SquareClicked(1)} />
        <Square state={game[2]} onClick={() => SquareClicked(2)} />
      </Row>
      <Row>
        <Square state={game[3]} onClick={() => SquareClicked(3)} />
        <Square state={game[4]} onClick={() => SquareClicked(4)} />
        <Square state={game[5]} onClick={() => SquareClicked(5)} />
      </Row>
      <Row>
        <Square state={game[6]} onClick={() => SquareClicked(6)} />
        <Square state={game[7]} onClick={() => SquareClicked(7)} />
        <Square state={game[8]} onClick={() => SquareClicked(8)} />
      </Row>

      <Button onClick={() => setGame(intial)}>Clear Game</Button>
    </Container>
  );
}
export { Tictoetic };
