import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useState } from "react";

export default function App() {
  const [keys, setKeys] = useState([]);
  const [result, setResult] = useState("");

  let combination = "";
  function getResult() {
    for (let i = 0; i < keys.length; i++) {
      combination = combination + keys[i];
    }
    setResult(eval(combination));
  }

  return (
    <View style={styles.container}>
      <View style={styles.valuebox}>
        <View style={styles.titlebox}>
          <Ionicons name="calculator-outline" size={30} color="#f9f9f9" />
          <Text style={styles.title}> Candra Wahyu F</Text>
        </View>
        <Text style={styles.Result_Text}>{result}</Text>
        <Text style={styles.Calculation_Text}>{keys}</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.btnBox}>
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setResult([]) & setKeys([])}
          >
            <Text style={styles.symbolic_Text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, "%"])}
          >
            <Text style={styles.symbolic_Text}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys(keys.slice(0, -1))}
          >
            <Ionicons name="backspace-outline" size={35} color="#ff4c29" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOperation}
            onPress={() => setKeys([...keys, "/"])}
          >
            <Text style={styles.symbolic_Text}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 7])}
          >
            <Text style={styles.rowNumber}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 8])}
          >
            <Text style={styles.rowNumber}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 9])}
          >
            <Text style={styles.rowNumber}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOperation}
            onPress={() => setKeys([...keys, "*"])}
          >
            <Text style={styles.symbolic_Text}>X</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 4])}
          >
            <Text style={styles.rowNumber}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 5])}
          >
            <Text style={styles.rowNumber}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 6])}
          >
            <Text style={styles.rowNumber}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOperation}
            onPress={() => setKeys([...keys, "-"])}
          >
            <Text style={styles.symbolic_Text}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 1])}
          >
            <Text style={styles.rowNumber}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 2])}
          >
            <Text style={styles.rowNumber}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 3])}
          >
            <Text style={styles.rowNumber}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnOperation}
            onPress={() => setKeys([...keys, "+"])}
          >
            <Text style={styles.symbolic_Text}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnRow}>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, ","])}
          >
            <Text style={styles.rowNumber}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnNumber}
            onPress={() => setKeys([...keys, 0])}
          >
            <Text style={styles.rowNumber}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnEqual} onPress={() => getResult()}>
            <Text style={styles.rowNumber}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#082032",
  },

  valuebox: {
    flex: 0.8,
    padding: 10,
  },

  title: {
    color: "#f9f9f9",
    fontSize: 20,
  },

  titlebox: {
    width: wp(40),
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
  },

  Calculation_Text: {
    alignSelf: "flex-end",
    fontSize: 40,
    color: "#f9f9f9",
    marginTop: 20,
  },

  Result_Text: {
    alignSelf: "flex-end",
    fontSize: 75,
    color: "#009d00",
    marginTop: hp(8),
  },

  btnBox: {
    flex: 1.2,
    padding: 10,
  },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },

  btnNumber: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 25,
    borderColor: "white",
    borderWidth: 1,
  },

  btnOperation: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 25,
    borderColor: "white",
    borderWidth: 1,
    // backgroundColor: "#ff4c29 ",
  },

  rowNumber: {
    fontSize: 25,
    color: "#f9f9f9",
  },

  symbolic_Text: {
    fontSize: 25,
    color: "#ff4c29",
  },

  btnEqual: {
    width: 150,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 25,
    backgroundColor: "#ff4c29",
  },
});
