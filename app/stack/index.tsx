import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function TabInicial() {
  return (
    <View style={[styles.centralizado, { gap: 10 }]}>
      <Text >Tela Inicial Stack</Text>
      <Botao>
        <Link href="/stack/nova" style={{ color: '#fff' }}>Ir para tela nova

        </Link>
      </Botao>
      <Botao>
        <Link href="/" style={{ color: '#fff' }}>Ir par Incio

        </Link>
      </Botao>
    </View >
  )
}