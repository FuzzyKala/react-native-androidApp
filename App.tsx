import {
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
  Pressable,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";
// import Receipt from "./components/stackScreen/screens/receipt/receiptPage";
// import Login from "./components/stackScreen/screens/login/loginPage";
import E5 from "./components/stackScreen/E5";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Receipt /> */}
      {/* <Login /> */}
      <E5 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
