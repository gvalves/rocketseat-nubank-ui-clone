import React from 'react';
import { Animated } from 'react-native';

import Icon from '@expo/vector-icons/MaterialIcons';

import {
  Container, TabsWrapper, TabItem, TabText,
} from './styles';

type Props = {
  translateY: Animated.Value
};

const Tabs: React.FC<Props> = ({ translateY }) => (
  <Container
    style={{
      transform: [{
        translateY: translateY.interpolate({
          inputRange: [0, 380],
          outputRange: [0, 30],
          extrapolate: 'clamp',
        }),
      }],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}
  >
    <TabsWrapper>
      <TabItem>
        <Icon name="person-add" size={24} color="#FFF" />
        <TabText>Indicar amigos</TabText>
      </TabItem>
      <TabItem>
        <Icon name="chat-bubble-outline" size={24} color="#FFF" />
        <TabText>Cobrar</TabText>
      </TabItem>
      <TabItem>
        <Icon name="arrow-downward" size={24} color="#FFF" />
        <TabText>Depositar</TabText>
      </TabItem>
      <TabItem>
        <Icon name="arrow-upward" size={24} color="#FFF" />
        <TabText>Transferir</TabText>
      </TabItem>
      <TabItem>
        <Icon name="lock" size={24} color="#FFF" />
        <TabText>Bloquear cartão</TabText>
      </TabItem>
    </TabsWrapper>
  </Container>
);

export default Tabs;
