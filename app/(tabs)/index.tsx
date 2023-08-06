import { StyleSheet, View, FlatList } from "react-native";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
