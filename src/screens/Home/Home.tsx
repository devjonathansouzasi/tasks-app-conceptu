import { useState } from "react";
import { FlatList, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";
import { useTheme } from "styled-components";

import { RouteNames } from "../../constants/routeNames";
import TaskItem from "./components/TaskItem";
import { Task } from "./components/TaskItem/types";
import { Container, Header, TitleText, NewTaskButton } from "./styles";

const MOCKED_TASKS: Task[] = [
  {
    id: "0",
    title: "Concluir o app",
    description:
      "Preciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da ConceptuPreciso concluir o app de review da Conceptu",
    status: "PENDENT",
  },
  {
    id: "1",
    title: "Concluir o app",
    description: "Preciso concluir o app de review da Conceptu",
    status: "DONE",
  },
  {
    id: "91",
    title: "Concluir o app",
    description: "Preciso concluir o app de review da Conceptu",
    status: "PENDENT",
  },
  {
    id: "15",
    title: "Concluir o app",
    description: "Preciso concluir o app de review da Conceptu",
    status: "EXPIRED",
  },
  {
    id: "42",
    title: "Concluir o app",
    description: "Preciso concluir o app de review da Conceptu",
    status: "EXPIRED",
  },
];

export const Home: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [tasks, setTasks] = useState<Task[]>(MOCKED_TASKS);
  const [refreshing, setRefreshing] = useState(false);

  const handleOpenNewTaskFormModal = () => {
    navigate(RouteNames.PRIVATE.NEW_TASK_MODAL);
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setTasks(oldTasks => oldTasks.sort(() => Math.random() - 0.5));
    setRefreshing(false);
  };

  return (
    <Container>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24 }}
        decelerationRate={0.25}
        stickyHeaderIndices={[0]}
        onRefresh={handleRefresh}
        refreshing={refreshing}
        data={tasks}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View style={{ padding: 5 }} />}
        ListHeaderComponent={() => (
          <Header>
            <TitleText>Minhas Tarefas</TitleText>
          </Header>
        )}
        ListEmptyComponent={() => (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingTop: "50%" }}
          >
            <Text style={{ color: colors.gray.dark, fontSize: 18, textAlign: "center" }}>
              {`Ops!\nVocê ainda não criou nenhuma tarefa`}
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TaskItem
            key={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
          />
        )}
      />

      <NewTaskButton onPress={handleOpenNewTaskFormModal}>
        <MaterialIcons name="playlist-add" size={32} color="#FFF" />
      </NewTaskButton>
    </Container>
  );
};
