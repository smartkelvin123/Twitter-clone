import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";

const user = {
  id: "u1",
  username: "VadimNotJustDev",
  name: "Vadim",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
};

export default function NewTweet() {
  const [text, setText] = useState("");

  const router = useRouter();

  const OnTweetPress = () => {
    console.warn("posting the tweet:", text);
  };

  // const { createTweet } = useTweetsApi();

  // const queryClient = useQueryClient();

  // const { mutateAsync, isLoading, isError, error } = useMutation({
  //   mutationFn: createTweet,
  //   onSuccess: (data) => {
  // queryClient.invalidateQueries({ queryKey: ['tweets'] })
  //     queryClient.setQueriesData(['tweets'], (existingTweets) => {
  //       return [data, ...existingTweets];
  //     });
  //   },
  // });

  // const onTweetPress = async () => {
  //   try {
  //     await mutateAsync({ content: text });

  //     setText('');
  //     router.back();
  //   } catch (e) {
  //     console.log('Error:', e.message);
  //   }
  // };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Link href="../" style={{ fontSize: 18 }}>
            Cancel
          </Link>
          {/* {isLoading && <ActivityIndicator />} */}
          <Pressable onPress={OnTweetPress} style={styles.button}>
            <Text style={styles.buttonText}>Tweet</Text>
          </Pressable>
        </View>

        <View style={styles.inputContainer}>
          <Image src={user.image} style={styles.image} />
          <TextInput
            value={text}
            placeholder="What's happening?"
            onChangeText={setText}
            multiline
            numberOfLines={7}
            style={{ flex: 1 }}
          />
          <Text>New Tweet</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    backgroundColor: "#1C9BF0",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    aspectRatio: 1,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
