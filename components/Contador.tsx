import styles from '@/constants/styles'
import { useState } from 'react'
import { View, Text } from 'react-native'
import Botao from './Botao'
import { Ionicons } from '@expo/vector-icons'

export interface ContadorProps {
  valorInicial?: number
}

export default function Contador(props: ContadorProps) {
  const [numero, setNumer] = useState(props.valorInicial ?? 0)
  return (
    <View style={styles.centralizado}>
      <Text style={{ fontSize: 50 }}>{numero}</Text>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Botao onPress={() => setNumer(numero + 1)}>
          <Ionicons name='add' size={24} color="white"></Ionicons>
        </Botao>
        <Botao onPress={() => setNumer(numero - 1)}>
          <Ionicons name='remove' size={24} color="white"></Ionicons>
        </Botao>
      </View>
    </View>
  )
}