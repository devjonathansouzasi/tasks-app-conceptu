import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { useTheme } from "styled-components";

import { firFirestore } from "../../config/firebase";
import { RouteNames } from "../../constants/routeNames";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Task } from "../../Models/Task";
import { Header } from "./components/Header";
import TaskItem from "./components/TaskItem";
import { Container, NewTaskButton } from "./styles";
export const Home: React.FC = () => {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const { user } = useAuthentication();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (user) {
      const tasksByUserQuery = query(
        collection(firFirestore, "tasks"),
        where("ownerId", "==", user.uid),
      );
      const unsubscriber = onSnapshot(tasksByUserQuery, snapshot => {
        const result: Task[] = [];

        snapshot.forEach(doc => {
          result.push({
            id: doc.id,
            ...doc.data(),
          } as Task);
        });

        setTasks(result);
      });
      setRefreshing(false);
      return unsubscriber;
    }
  }, [user, refreshing]);

  const handleOpenNewTaskFormModal = () => {
    navigate(RouteNames.PRIVATE.NEW_TASK_MODAL);
  };

  const handleRefresh = () => {
    setRefreshing(true);
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
        ListHeaderComponent={() => <Header />}
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
            id={item.id}
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
