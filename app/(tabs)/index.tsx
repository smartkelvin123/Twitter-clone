import { StyleSheet, View, FlatList, Pressable } from "react-native";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/Tweet";
import { Entypo } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={tweets}
        renderItem={({ item }) => <Tweet tweet={item} />}
      />

      <Link href="/new-tweet" asChild>
        <Entypo
          name="plus"
          color="black"
          style={styles.floatingButton}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,

    backgroundColor: "blue",
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 15,

    textAlign: "center",
    lineHeight: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    overflow: "hidden",
  },
});
