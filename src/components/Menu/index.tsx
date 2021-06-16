import React from 'react';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import Icon from '@expo/vector-icons/MaterialIcons';

import Colors from '~/constants/Colors';

import {
  Container, QRCodeWrapper, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './styles';

type Props = {
  translateY: Animated.Value
};

const Menu: React.FC<Props> = ({ translateY }) => (
  <Container
    style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
  >
    <QRCodeWrapper>
      <QRCode
        value="http://aluno05.bioinfo.unifesp.br:8080"
        size={80}
        backgroundColor="#FFF"
        color={Colors.primary}
      />
    </QRCodeWrapper>

    <Nav>
      <NavItem>
        <Icon name="help-outline" size={20} color="#FFF" />
        <NavText>Me ajuda</NavText>
      </NavItem>
      <NavItem>
        <Icon name="person-outline" size={20} color="#FFF" />
        <NavText>Perfil</NavText>
      </NavItem>
      <NavItem>
        <Icon name="credit-card" size={20} color="#FFF" />
        <NavText>Configurar cartão</NavText>
      </NavItem>
      <NavItem>
        <Icon name="smartphone" size={20} color="#FFF" />
        <NavText>Configurações do app</NavText>
      </NavItem>
    </Nav>

    <SignOutButton onPress={() => {}}>
      <SignOutButtonText>SAIR DO APP</SignOutButtonText>
    </SignOutButton>
  </Container>
);

export default Menu;
