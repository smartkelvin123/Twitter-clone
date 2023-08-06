import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { TweetType } from "@/types";
import { ScrollView } from "react-native-gesture-handler";
import { Entypo, EvilIcons } from "@expo/vector-icons";
import IconButton from "./IconButton";
import { Link } from "expo-router";

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <ScrollView>
      <Link href={`/feed/tweet/${tweet.id}`} asChild>
        <Pressable style={styles.container}>
          <Image source={tweet.user.image} style={styles.userImage} />
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.name}>{tweet.user.name}</Text>
              <Text style={styles.username}>{tweet.user.username} 2hr</Text>
              <Entypo
                name="dots-three-horizontal"
                size={16}
                color="gray"
                style={{ marginLeft: "auto" }}
              />
            </View>

            <Text style={styles.content}>{tweet.content}</Text>
            {tweet.image && <Image source={tweet.image} style={styles.image} />}
            <View style={styles.footer}>
              <IconButton icon="comment" text={tweet.numberOfComments} />
              <IconButton icon="retweet" text={tweet.numberOfRetweets} />
              <IconButton icon="heart" text={tweet.numberOfLikes} />
              <IconButton icon="chart" text={tweet.impressions || 0} />
              <IconButton icon="share-apple" />
            </View>
          </View>
        </Pressable>
      </Link>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "600",
  },
  username: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical: 10,
    borderRadius: 15,
  },
  footer: {
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "space-between",
  },
});

export default Tweet;
