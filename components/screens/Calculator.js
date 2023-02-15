import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionButton from "../ui/ActionButton";
import ZeroButton from "../ui/ZeroButton";
import { FontAwesome5 } from "@expo/vector-icons";

function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [accAction, setAccAction] = useState("");
  const [previousNumber, setPreviousNumber] = useState("0");
  let count = 0;
  function numberhandler(number) {
    if (accAction === "ADD" || accAction==='MINUS') {
      setCurrentNumber("");
      setAccAction("");
      setPreviousNumber(currentNumber);
    }
    setCurrentNumber((prevNumber) => {
      if (prevNumber !== undefined) {
        if (
          prevNumber.length == 1 &&
          prevNumber.includes("0") &&
          !number.includes(".")
        ) {
          return number;
        } else if (!prevNumber.includes(".") && number.includes(".")) {
          return prevNumber + "" + number;
        } else if (!number.includes(".")) {
          return prevNumber + "" + number;
        } else {
          return prevNumber;
        }
      }
    });
  }

  function actionHandler(action) {
    
    let pNumber = previousNumber.includes(".")
      ? parseFloat(previousNumber)
      : parseInt(previousNumber);
    let cNumber = currentNumber.includes(".")
      ? parseFloat(currentNumber)
      : parseInt(currentNumber);
    if(action === 'ADD'){
      setAccAction(action);
    setCurrentNumber((pNumber + cNumber).toString());
    } else if(action === 'MINUS') {
      setAccAction(action);
      setCurrentNumber((pNumber - cNumber).toString());
    }
   
  }
  function equalshandler() {}
  function resetHandler() {
    setCurrentNumber("0");
    setPreviousNumber("0");
    setAccAction("");
  }
  return (
    <View style={styles.rootContainer}>
      <View style={styles.calContainer}>
        <Text style={styles.textContainer}>{currentNumber}</Text>
      </View>
      <View style={styles.numRootContainer}>
        <View style={styles.numContainer}>
          <ActionButton style={styles.formulas} onPress={resetHandler}>
            AC
          </ActionButton>
          <ActionButton style={styles.formulas}>+/-</ActionButton>
          <ActionButton style={styles.formulas}>%</ActionButton>
          <ActionButton style={styles.gold}>
            <FontAwesome5 name="divide" size={24} color="white" />
          </ActionButton>
        </View>
        <View style={styles.numContainer}>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "7")}
          >
            7
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "8")}
          >
            8
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "9")}
          >
            9
          </ActionButton>
          <ActionButton style={styles.gold}>x</ActionButton>
        </View>
        <View style={styles.numContainer}>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "4")}
          >
            4
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "5")}
          >
            5
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "6")}
          >
            6
          </ActionButton>
          <ActionButton style={styles.gold} onPress={actionHandler.bind(this,'MINUS')}>-</ActionButton>
        </View>
        <View style={styles.numContainer}>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "1")}
          >
            1
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "2")}
          >
            2
          </ActionButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "3")}
          >
            3
          </ActionButton>
          <ActionButton
            onPress={actionHandler.bind(this, "ADD")}
            style={styles.gold}
          >
            +
          </ActionButton>
        </View>
        <View style={styles.numContainer}>
          <ZeroButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, "0")}
          >
            0
          </ZeroButton>
          <ActionButton
            style={styles.numbers}
            onPress={numberhandler.bind(this, ".")}
          >
            .
          </ActionButton>
          <ActionButton style={styles.gold} onPress={equalshandler}>
            =
          </ActionButton>
        </View>
      </View>
    </View>
  );
}

export default Calculator;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  calContainer: {
    flex: 2,
    justifyContent: "flex-end",
  },
  numRootContainer: {
    flex: 4,
    justifyContent: "space-evenly",
  },
  numContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  textContainer: {
    textAlign: "right",
    paddingRight: 35,
    fontSize: 65,
    color: "white",
  },
  gold: {
    backgroundColor: "#ff9900",
  },
  numbers: {
    backgroundColor: "#333333",
  },
  formulas: {
    backgroundColor: "#737373",
    color: "black",
  },
});
