import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

const styles = StyleSheet.create({
  centralizado: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: '80%'
  },
  innputError: {
    borderColor: 'red'
  }
})

export default styles