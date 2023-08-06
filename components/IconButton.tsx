import { View, Text } from "react-native";

import { EvilIcons } from "@expo/vector-icons";

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={16} color="gray" />
      <Text style={{ marginLeft: 12, color: "grey" }}>{text}</Text>
    </View>
  );
};
export default IconButton;
