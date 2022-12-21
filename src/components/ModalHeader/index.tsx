import { useNavigation } from "@react-navigation/native";

import { Container, Left, CloseButton, CloseButtonText, Content, TitleText, Right } from "./styles";
import { ModalHeaderProps } from "./types";

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title = "",
  closeTitle = "Fechar",
  onClose = () => {},
}) => {
  const { goBack } = useNavigation();
  const handleClose = () => {
    goBack();
    onClose();
  };

  return (
    <Container>
      <Left>
        <CloseButton onPress={handleClose}>
          <CloseButtonText>{closeTitle}</CloseButtonText>
        </CloseButton>
      </Left>
      <Content>
        <TitleText>{title}</TitleText>
      </Content>
      <Right />
    </Container>
  );
};

export default ModalHeader;
