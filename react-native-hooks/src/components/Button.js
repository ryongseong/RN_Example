import React from "react";
import styled from "styled-components/native";

const Containter = styled.TouchableOpacity`
  background-color: #3498db;
  border-radius: 15px;
  padding: 15px 30px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
`;

const Button = ({ title, onPress }) => {
  return (
    <Containter onPress={onPress}>
      <Title>{title}</Title>
    </Containter>
  );
};

export default Button;
