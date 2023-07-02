import 'react-native-gesture-handler';
import React from 'react'
import { CommentsScreen } from "../Screens/CommentsScreen";
import { CreatePostsScreen } from "../Screens/CreatePostsScreen";
import { Home } from "../Screens/Home";
import { LoginScreen } from "../Screens/LoginScreen";
import { MapScreen } from "../Screens/MapScreen";
import { PostsScreen } from "../Screens/PostsScreen";
import { ProfileScreen } from "../Screens/ProfileScreen";
import { RegistrationScreen } from "../Screens/RegistrationScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export const MainNavigate = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
                <MainStack.Screen name="Login" component={LoginScreen} options={{ title: "" }} />
                <MainStack.Screen name="Registration" component={RegistrationScreen} options={{ title: "" }} />
                <MainStack.Screen name="Home" component={Home} options={{ title: "" }} />
                <MainStack.Screen name="Comments" component={CommentsScreen} />
                {/* <MainStack.Screen name="CreatePosts" component={CreatePostsScreen} /> */}
                <MainStack.Screen name="Map" component={MapScreen} />
                {/* <MainStack.Screen name="Posts" component={PostsScreen} /> */}
                {/* <MainStack.Screen name="Profile" component={ProfileScreen} /> */}
            </MainStack.Navigator>
        </NavigationContainer>
    );
};
