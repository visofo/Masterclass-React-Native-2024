import styles from '@/constants/styles';
import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import Botao from '@/components/Botao'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';

export default function TelaIncial() {
  const nav = useNavigation()
  return (

    <View style={[styles.centralizado, { gap: 10 }]}>
      <Ionicons name='logo-react' size={100}></Ionicons>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }} >Masterclass React Native</Text>
        <Text style={{ fontSize: 16 }} > Esquenta Formção.DEV!</Text>
        <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer)}>
          <Text style={{ color: '#fff' }}>Exercícios</Text>
        </Botao>
      </View>
    </View>
  );
}