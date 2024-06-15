import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../colors";


const Home = ({ navigation: { navigate } }) => (
  <View>
    <Title>Chan Diary</Title>
    <Btn onPress={() => navigate("Write")}>
      <Ionicons name="add" color="white" size={40} />
    </Btn>
  </View>
);

const View = styled.View`
  flex: 1;
  padding: 100px 50px 0px;
  background-color: ${colors.bgColor};
`;

const Title = styled.Text`
  margin-bottom: 100px;
  color: ${colors.textColor};
  font-size: 38px;
  font-weight: 500;
`;

const Btn = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 80px;
  width: 80px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.btnColor};
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;

export default Home;