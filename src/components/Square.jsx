import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border: 5px solid lightblue;
  min-width: 100px;
  min-height: 100px;
  font-size: 64px;
  text-align: center;
  color: #1cdbf5;
  font-weight: bolder;
  padding: 30px;
  
`;
function Square(props) {
  return (
    <div>
      <Box onClick={props.onClick}>{props.state}</Box>
    </div>
  );
}
export { Square };
