import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 80 : 40}px;
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 100px;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin: 24px 0;
`;
export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  align-self: center;
  border-radius: 80px;
  height: 160px;
  width: 160px;
`;

export const SignOut = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  justify-content: center;
`;

export const SignOutText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-right: 16px;
`;
