import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const initialState = {
  login: "",
  email: "",
  password: "",
  focusedInput: null,
};

export const RegistrationScreen = () => {
  const [login, setLogin] = useState(initialState.login);
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);
  const [focusedInput, setFocusedInput] = useState();

  const relativeImagesPath = "../assets/images/";

  return (
    <Background>
      <StatusBar style="auto" />
      <BackgroundImage
        source={require(`${relativeImagesPath}bg-img.webp`)}
        resizeMode="cover"
        style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <Registration>
          <RegistrationPhoto>
            <AddPhoto></AddPhoto>
            <AddIcon>
              <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
            </AddIcon>
          </RegistrationPhoto>
          <RegistrationText>Реєстрація</RegistrationText>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <RegistrationBox>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <RegistrationInput
                  name="login"
                  onChangeText={setLogin}
                  value={login}
                  placeholder="Логін"
                  keyboardType="url"
                  style={{
                    ...RegistrationInput.input,
                    borderColor:
                      focusedInput === "login" ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => {
                    setFocusedInput("login");
                  }}
                  onBlur={() => {
                    setFocusedInput(null);
                  }}
                />
                <RegistrationInput
                  name="email"
                  onChangeText={setEmail}
                  value={email}
                  placeholder="Адреса електронної пошти"
                  keyboardType="url"
                  style={{
                    ...RegistrationInput.input,
                    borderColor:
                      focusedInput === "email" ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => {
                    setFocusedInput("email");
                  }}
                  onBlur={() => {
                    setFocusedInput(null);
                  }}
                />
                <RegistrationInput
                  name="password"
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Пароль"
                  secureTextEntry={true}
                  keyboardType="url"
                  type="password"
                  style={{
                    ...RegistrationInput.input,
                    borderColor:
                      focusedInput === "password" ? "#FF6C00" : "#E8E8E8",
                  }}
                  onFocus={() => {
                    setFocusedInput("password");
                  }}
                  onBlur={() => {
                    setFocusedInput(null);
                  }}
                />
                <TextShow>Показати</TextShow>
                <Button>
                  <TextButton>Зареєструватися</TextButton>
                </Button>
                <LoginButton>
                  <TextLogin>Вже є акаунт? Увійти</TextLogin>
                </LoginButton>
              </KeyboardAvoidingView>
            </RegistrationBox>
          </TouchableWithoutFeedback>
        </Registration>
      </BackgroundImage>
    </Background>
  );
};

const Background = styled.View`
  flex: 1;
`;

const BackgroundImage = styled.ImageBackground`
  /* width: 100%;
  height: 100%; */
  flex: 1;
  /* height: "Dimensions.get(" window ") .height"; */
`;

const Registration = styled.View`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 78%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
`;

const RegistrationPhoto = styled.View`
  width: 132px;
  height: 120px;
  margin-left: auto;
  margin-right: auto;
  top: -60px;
`;

const AddPhoto = styled.ImageBackground`
  width: 120px;
  height: 120px;
  left: 0px;
  top: 0px;

  background: #f6f6f6;
  border-radius: 16px;
`;

const AddIcon = styled.View`
  width: 28px;
  height: 28px;
  left: 107px;
  top: -39px;
`;

const RegistrationText = styled.Text`
  width: auto;

  top: -60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  margin-bottom: 33px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  text-align: center;

  color: #212121;
`;

const RegistrationBox = styled.View`
  /* flex: 1; */
  background-color: #fff;
  /* padding-bottom: -5px; */
  top: -59px;

  justify-content: flex-end;
`;

const RegistrationInput = styled.TextInput`
  height: 50px;
  padding: 16px;

  margin-bottom: 16px;
  border-width: 1px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  color: #212121;
`;

const TextShow = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  width: 72px;
  height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  margin-left: auto;
  margin-right: 16px;
  padding-top: 16px;

  top: -65px;
  right: 0px;
  height: 50px;

  color: #1b4371;
`;
const Button = styled.Pressable`
  margin-top: 43px;
  margin-bottom: 16px;

  height: 50px;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  top: -66px;

  background-color: #ff6c00;
`;

const TextButton = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  align-items: center;

  color: #ffffff;
`;

const LoginButton = styled.Pressable`
  top: -69px;
  align-items: center;
  justify-content: center;
`;

const TextLogin = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  width: 159px;

  color: #1b4371;
`;
