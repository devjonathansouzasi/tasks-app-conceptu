import { MaterialIcons } from "@expo/vector-icons";

import { TextInput } from "../../components";
import { Container, SubmitButton } from "./styles";

export const NewTaskModal: React.FC = () => {
  return (
    <Container>
      <TextInput placeholder="O que você pretende fazer?" />
      <TextInput
        placeholder="Vamos detalhar melhor esta nova tarefa!"
        multiline
        numberOfLines={5}
      />
      <SubmitButton onPress={() => {}}>
        <MaterialIcons name="send" size={24} color="#FFF" />
      </SubmitButton>
    </Container>
  );
};
