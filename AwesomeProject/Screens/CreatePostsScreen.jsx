import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();

export const CreatePostsScreen = () => {
  return (
    <View>
      <Text>CreatePostsScreen</Text>
      {/* <Tabs.Navigator>
        <Tabs.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Feather name="plus" size={24} color="#FFFFFF" />
            ),
            tabBarIconStyle: {
              backgroundColor: "#FF6C00",
              width: 70,
              height: 10,
              borderRadius: 20,
            },
            title: "Створити публікацію",
          }}
        />
      </Tabs.Navigator> */}
    </View>
  );
};
