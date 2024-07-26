import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Inicio',
            title: 'Bem Vindo!',
            drawerIcon: () => (<Ionicons name="home-outline" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
        <Drawer.Screen
          name="contador"
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            drawerIcon: () => (<Ionicons name="add" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
        <Drawer.Screen
          name="primeiro"
          options={{
            drawerLabel: 'Primeiro componente',
            title: 'Primeiro Componente',
            drawerIcon: () => (<Ionicons name="heart-circle-outline" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
        <Drawer.Screen
          name="formulario"
          options={{
            drawerLabel: 'Formulário',
            title: 'Formulário',
            drawerIcon: () => (<Ionicons name="checkbox-outline" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
        <Drawer.Screen
          name="tabs"
          options={{
            drawerLabel: 'Tabs',
            title: 'Tabs',
            drawerIcon: () => (<Ionicons name="albums-outline" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
        <Drawer.Screen
          name="stack"
          options={{
            drawerLabel: 'Stack',
            title: 'Stack',
            drawerIcon: () => (<Ionicons name="logo-stackoverflow" size={18} color="#2A98FFS"></Ionicons>),
          }}
        />
      </Drawer>
    </GestureHandlerRootView >
  );
}