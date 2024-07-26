import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TabNova() {
  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Text >Tela Nova</Text>
      <Botao>
        <Link href="/stack" style={{ color: '#fff' }}>Voltar pra Stack

        </Link>
      </Botao>
    </View>
  )
}