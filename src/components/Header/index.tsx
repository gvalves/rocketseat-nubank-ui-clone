import React from 'react';

import Icon from '@expo/vector-icons/MaterialIcons';

import {
  Container, Top, Logo, Title,
} from './styles';

import logo from '~/assets/images/Nubank_Logo.png';

const Header: React.FC = () => (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>Gustavo</Title>
    </Top>
    <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
  </Container>
);

export default Header;
