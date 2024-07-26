import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import userFormUsuario from "@/hooks/useFormUsuarios";
import Cpf from "@/Utils/Cpf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

export default function TelaFormulario() {
  const { usuario, erros, setUsuario, salvar } = userFormUsuario()

  return (
    <View style={styles.centralizado}>
      <Text>Formulario</Text>
      <TextInput
        placeholder="Nome"
        style={[styles.input, erros.nome && styles.innputError]}
        value={usuario.nome ?? ''}
        onChangeText={(nome) => setUsuario({ ...usuario, nome })}
      />
      {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}
      <TextInput
        placeholder="Cpf"
        style={[styles.input, erros.cpf && styles.innputError]}
        value={Cpf.formatar(usuario.cpf ?? '')}
        maxLength={14}
        keyboardType="phone-pad"
        onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.desformatar(cpf) })}
      />
      {erros.cpf && <Text style={{ color: 'red' }}>{erros.cpf}</Text>}

      <Botao onPress={salvar}>
        <Text style={{ color: '#fff' }}>Salvar</Text>
      </Botao>
    </View>
  );
}