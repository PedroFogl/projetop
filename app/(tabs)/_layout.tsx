import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {
  return (
  <Tabs
    screenOptions = {{
        tabBarActiveTintColor: 'black',
        headerStyle:{
            backgroundColor: '#13293D'
        },
        headerShadowVisible: false,
        headerTintColor: 'black',
        tabBarStyle: {
        backgroundColor:'#13293D',
        },
    }}
    >
    <Tabs.Screen
    name= "index"
    options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
        <AntDesign name ={focused ? 'appstore1' : 'appstore-o'} color={color}  size={24} />
        ),
    }}
    />
    <Tabs.Screen
    name= "about"
    options={{
        title: 'Sobre',
        tabBarIcon: ({ color, focused }) => (
        <AntDesign name ={focused ? 'aliwangwang' : 'aliwangwang-o1'} color={color}  size={24}  />
        ),
    }}
    />
    </Tabs>
  );
}