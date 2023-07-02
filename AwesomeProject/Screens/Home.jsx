import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { PostsScreen } from "../Screens/PostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();
  const onNavigateLogin = () => navigation.navigate("Login");
  const onNavigatePosts = () => navigation.navigate("Posts");

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerStyle: { height: 90 },
        headerTitleStyle: {
          marginBottom: 11,
          marginTop: 11,
          fontSize: 17,
          lineHeight: 22,
          color: "#212121",
        },
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
          paddingLeft: 39,
          paddingRight: 39,
        },
      }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarIcon: ({}) => (
            <Feather name="grid" size={24} color="#212121CC" />
          ),
          title: "Публікації",
          headerRight: () => (
            <Button onPress={onNavigateLogin}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </Button>
          ),
        }}
        screenOptions={{
          tabBarIcon: ({}) => (
            <Feather name="grid" size={24} color="#212121CC" />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarIcon: ({}) => <Feather name="plus" size={24} color="#FFFFFF" />,
          tabBarIconStyle: {
            backgroundColor: "#FF6C00",
            width: 70,
            height: 10,
            borderRadius: 20,
          },
          title: "Створити публікацію",
          headerLeft: () => (
            <ButtonBack onPress={onNavigatePosts}>
              <Feather name="arrow-left" size={24} color="#212121CC" />
            </ButtonBack>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({}) => (
            <Feather name="user" size={24} color="#212121CC" />
          ),
          title: "Профіль",
        }}
      />
    </Tabs.Navigator>
  );
};

const Button = styled.Pressable`
  margin-right: 10px;
`;

const ButtonBack = styled.Pressable`
  margin-left: 16px;
`;
