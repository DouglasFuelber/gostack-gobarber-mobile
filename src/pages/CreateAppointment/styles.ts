import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Provider } from './index';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  background: #28262e;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  margin-left: 16px;
`;

export const UserAvatar = styled.Image`
  border-radius: 28px;
  height: 56px;
  margin-left: auto;
  width: 56px;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View``;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton) <ProviderContainerProps>`
  align-items: center;
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  flex-direction: row;
  margin-right: 16px;
  padding: 8px 12px;
`;

export const ProviderAvatar = styled.Image`
  border-radius: 16px;
  height: 32px;
  width: 32px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  margin-left: 8px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 0 24px 24px;
`;

export const OpenDatePickerButton = styled(RectButton)`
  align-items: center;
  background: #ff9000;
  border-radius: 10px;
  height: 46px;
  justify-content: center;
  margin: 0 24px;
`;

export const OpenDatePickerButtonText = styled.Text`
  color: #232129;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin: 0 24px 12px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton) <HourProps>`
  background: ${props => (props.selected ? '#ff9000' : '#3e3b47')};
  border-radius: 10px;
  margin-right: 8px;
  opacity: ${props => (props.available ? 1 : 0.3)};
  padding: 12px;
`;

export const HourText = styled.Text<HourTextProps>`
  color: ${props => (props.selected ? '#232129' : '#f4ede8')};
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  align-items: center;
  background: #ff9000;
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  margin: 0 24px 24px;
`;

export const CreateAppointmentButtonText = styled.Text`
  color: #232129;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
