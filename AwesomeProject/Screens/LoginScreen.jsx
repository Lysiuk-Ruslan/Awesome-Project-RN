import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";

const initialState = {
  login: "",
  password: "",
  focusedInput: null,
};

export const LoginScreen = () => {
  const [login, setLogin] = useState(initialState.login);
  const [password, setPassword] = useState(initialState.password);
  const [focusedInput, setFocusedInput] = useState();
  const [hidePassword, setHidePassword] = useState(true);

  const relativeImagesPath = "../assets/images/";

  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password}`);
    console.log({ login, password });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          <Login>
            <LoginText>Увійти</LoginText>
            <LoginBox>
              <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
              >
                <LoginInput
                  name="login"
                  onChangeText={setLogin}
                  value={login}
                  placeholder="Логін"
                  keyboardType="url"
                  style={{
                    ...LoginInput.input,
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

                <LoginInput
                  name="password"
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Пароль"
                  secureTextEntry={hidePassword}
                  keyboardType="url"
                  type="password"
                  style={{
                    ...LoginInput.input,
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
                <TouchableOpacity
                  onPress={() => setHidePassword(!hidePassword)}
                >
                  {hidePassword ? (
                    <TextShow>Показати</TextShow>
                  ) : (
                    <TextShow>Сховати</TextShow>
                  )}
                </TouchableOpacity>

                <Button title="Login" onPress={onLogin}>
                  <TextButton>Увійти</TextButton>
                </Button>
                <LoginButton>
                  <TextLogin>Немає акаунту? Зареєструватися</TextLogin>
                </LoginButton>
              </KeyboardAvoidingView>
            </LoginBox>
          </Login>
        </BackgroundImage>
      </Background>
    </TouchableWithoutFeedback>
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

const Login = styled.View`
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding-left: 16px;
  padding-right: 16px;
  width: 100%;
  height: 61%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
`;

const LoginText = styled.Text`
  width: auto;

  top: 0px;
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

const LoginBox = styled.View`
  /* flex: 1; */
  background-color: #fff;
  /* padding-bottom: -5px; */
  top: -10px;

  /* justify-content: flex-end; */
`;

const LoginInput = styled.TextInput`
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
  top: -68px;
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
  width: auto;

  color: #1b4371;
`;
