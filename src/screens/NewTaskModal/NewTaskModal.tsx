import { useState, useCallback } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";

import { TextInput } from "../../components";
import ModalHeader from "../../components/ModalHeader";
import { firFirestore } from "../../config/firebase";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Container, Content, SubmitButton, SubmitButtonText } from "./styles";

export const NewTaskModal: React.FC = () => {
  const { goBack } = useNavigation();
  const { user } = useAuthentication();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = useCallback(async () => {
    if (!user) {
      return;
    }
    if (!title.length || !description.length) {
      return;
    }
    try {
      const newTask = {
        title,
        description,
        status: "PENDENT",
        ownerId: user.uid,
      };

      const tasksCollection = collection(firFirestore, "tasks");
      await addDoc(tasksCollection, newTask);
      goBack();
    } catch (error) {}
  }, [user, title, description]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <ModalHeader title="Nova tarefa" />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <Content>
            <View>
              <TextInput
                placeholder="O que você pretende fazer?"
                value={title}
                onChangeText={text => setTitle(text)}
                marginBottom={8}
              />
              <TextInput
                placeholder="Vamos detalhar melhor esta nova tarefa!"
                multiline
                numberOfLines={5}
                value={description}
                onChangeText={text => setDescription(text)}
              />
            </View>
            <SubmitButton onPress={handleAddTask}>
              <SubmitButtonText>Adicionar tarefa</SubmitButtonText>
            </SubmitButton>
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
};
