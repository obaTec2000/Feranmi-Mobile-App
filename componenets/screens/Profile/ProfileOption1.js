import React from 'react';
import { View, StatusBar, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';

const NavBar = () => {
  return (
    <NavBarView>
      <Image source={require('../../../assets/images/menu_icon.png')} style={{width: 16, height: 16}}/>
      <Text bold>ARTIST PAGE</Text>
      <View style={{width: 16, alignItems: 'center'}}>
        <Image source={require('../../../assets/images/more_icon.png')} style={{width: 3, height: 16,}}/>
      </View>
    </NavBarView>
  )
}

const Stats = ({count, item}) => {
  return (
    <View style={{marginLeft: 25, marginRight: 25}}>
      <Text size='20px'>{count}</Text>
      <Text size='10px' bold>{item}</Text>
    </View>
  )
}
const Card = () => {
  return (
    <CardView>
      <Footer>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../../assets/images/like_white_icon.png')} style={{width: 16, height: 16}}/>
          <Text size='14px' bold color='#fff' style={{marginLeft: 8}}>609</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 32}}>
            <Image source={require('../../../assets/images/comments_white_icon.png')} style={{width: 16, height: 16}}/>
            <Text size='14px' bold color='#fff' style={{marginLeft: 8}}>120</Text>
          </View>
        </View>
        <Text size='14px' bold color='#fff'>SHARE</Text>
      </Footer>
    </CardView>
  )
}

const ProfileOption1 = ({
    params,
}) => {
  return (
    <Container>
      <StatusBar hidden={true}/>
      <NavBar/>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <Image source={require('../../../assets/images/avatar.png')} style={{width: 60, height: 60}}/>
        <Text size='20px' bold style={{marginTop: 16}}>John Doe</Text>
        <Text size='10px'>San Francisco, CA</Text>
        <Text size='14px' style={{marginTop: 30}}>
          Hi! My name is John, I'm a creative geek from San Francisco, CA. Contact me at john@mail.com
        </Text>
        <StatsBox>
          <Stats count='140' item='SHOTS'/>
          <View style={{width: 2, height: 24, backgroundColor: '#BCE0FD'}}></View>
          <Stats count='140' item='PROJECTS'/>
          <View style={{width: 2, height: 24, backgroundColor: '#BCE0FD'}}></View>
          <Stats count='24K' item='FOLLOWERS'/>
        </StatsBox>
        <Card/>
        <Card/>
        <Card/>
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;
const NavBarView = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;
const Text = styled.Text`
  color: ${(props)=>(props.color ? props.color: '#2699fb')};
  font-size: ${(props)=>(props.size ? props.size: '14px')};
  line-height: ${(props)=>(props.height ? props.height: '24px')};
  font-weight: ${(props)=>(props.bold ? 'bold': 'normal')};
  text-align: center;
`;
const ProfileView = styled.View`
  margin: 16px 25px;
  align-items: center;
`;
const StatsBox = styled.View`
  margin: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;
const CardView = styled.View`
  width: 326px;
  height: 232px;
  background-color: #BCE0FD;
  margin-bottom: 20px;
`;
const Footer = styled.View`
  position: relative;
  top: 192px;
  margin: 0px 24px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export default ProfileOption1;