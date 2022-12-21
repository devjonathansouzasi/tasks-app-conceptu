import React, { useMemo, useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { Entypo, MaterialIcons } from "@expo/vector-icons";

import { deleteDoc, doc } from "firebase/firestore";
import { useTheme } from "styled-components";

import { firFirestore } from "../../../../config/firebase";
import { TaskStatus } from "../../../../Models/Task";
import {
  Container,
  Left,
  Content,
  TitleText,
  DescriptionText,
  Right,
  ShowOptionsButton,
} from "./styles";
import { TaskItemProps } from "./types";

const TaskItem: React.FC<TaskItemProps> = ({ id, title, description, status }) => {
  const { colors } = useTheme();
  const swipeableRef = useRef<Swipeable | null>(null);

  const statusIcon = {
    [TaskStatus.PENDENT]: {
      name: "emoji-happy",
      color: colors.info,
    },
    [TaskStatus.DONE]: {
      name: "emoji-flirt",
      color: colors.success,
    },
    [TaskStatus.EXPIRED]: {
      name: "emoji-sad",
      color: colors.warning,
    },
  } as const;

  const formattedDescription = useMemo(() => {
    return description.substring(0, 70).concat("...");
  }, [description]);

  const handleOpenSwipe = () => {
    swipeableRef.current?.openRight();
  };

  const handleDeleteItem = () => {
    const taskRef = doc(firFirestore, "tasks", id);
    deleteDoc(taskRef);
  };

  return (
    <Swipeable
      ref={swipeableRef}
      renderRightActions={() => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "90%",
            marginLeft: -20,
            paddingLeft: 10,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: colors.gray.lighter,
          }}
        >
          <TouchableOpacity
            onPress={handleDeleteItem}
            activeOpacity={0.7}
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.error,
            }}
          >
            <MaterialIcons name="delete-outline" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.success,
            }}
          >
            <MaterialIcons name="check-circle-outline" size={24} color="#FFF" />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: colors.info,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 8,
            }}
          >
            <MaterialIcons name="info-outline" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>
      )}
    >
      <Container>
        <Left>
          <Entypo name={statusIcon[status].name} size={24} color={statusIcon[status].color} />
        </Left>
        <Content>
          <TitleText>{title}</TitleText>
          <DescriptionText>{formattedDescription}</DescriptionText>
        </Content>
        <Right>
          <ShowOptionsButton onPress={handleOpenSwipe}>
            <MaterialIcons name="menu" size={24} color="#FFF" />
          </ShowOptionsButton>
        </Right>
      </Container>
    </Swipeable>
  );
};

export default TaskItem;
