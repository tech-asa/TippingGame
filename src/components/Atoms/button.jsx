import React from "react";
import styled from "styled-components";

// 名前 = styled.要素名
// style object(cssをオブジェクト型にして記載する)
const PrimaryButton = styled.button({
  backgroundColor: "blue",
  color: "white",
  border: "none",
  padding: "4px 14px",
});

const Button = (props) => {
  return (
    <PrimaryButton
      className={props.button}
      onClick={() => props.onClick(props.argument)}
    >
      {props.name}
    </PrimaryButton>
  );
};
export default Button;