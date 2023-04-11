import React, { useState, useEffect } from 'react';
import { View, StatusBar, Image, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const NavBar = ({  }) => {
  const navigation = useNavigation()
  return (
    <NavBarView>
      <TouchableOpacity onPress={() => navigation.navigate('Artist')}>
      <Image source={require('../../../assets/images/backward_arrow.png')} style={{ width: 16, height: 16 }} />
    </TouchableOpacity>
      <Text size='20px' bold style={{marginTop: 15}}>ARTIST PAGE</Text>
      <View style={{ width: 16, alignItems: 'center' }}>
        <Image source={require('../../../assets/images/more_icon.png')} style={{ width: 3, height: 16, }} />
      </View>
    </NavBarView>
  )
}

const Stats = ({ count, item }) => {
  return (
    <View style={{ marginLeft: 25, marginRight: 25 }}>
      <Text size='20px'>{count}</Text>
      <Text size='10px' bold>{item}</Text>
    </View>
  )
}

const Title = ({ count, item }) => {
  return (
    <View style={{ marginLeft: 25 }}>


    </View>
  )
}

const Card = () => {
  return (
   
    <CardView>
      <ProfileView>
      <Image source={require('../../../assets/images/person.png')} style={{ marginTop: '-25%', width: '50%', height:'50%'}} />
      <Text size='20px' bold color='#000000'>Rian Hotton</Text>
      <Text size='15px'  color='#000000' >Painter, Draftsman | Jersey</Text>
      <Image source={require('../../../assets/images/painting1.png')} style={{ width: '60%', height: '55%' }} />
      </ProfileView>
      <Footer style={{marginTop: '-65%', alignItems: 'center'}}>
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Image source={require('../../../assets/images/person02.png')} style={{ width: 18, height: 18 }} />
          <Image source={require('../../../assets/images/person03.png')} style={{ width: 18, height: 18 }} />
          <Image source={require('../../../assets/images/person01.png')} style={{ width: 18, height: 18 }} />
          <Text size='14px' bold color='#000000' style={{ marginLeft: 8 }}>1k</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 32 }}>
            <Image source={require('../../../assets/images/like_icon.png')} style={{ width: 18, height: 18 }} />
            <Text size='14px' bold color='#000000' style={{ marginLeft: 8 }}>1k</Text>
          </View>
        </View>
        <Text size='14px' bold color='#000000'>SHARE</Text>
      </Footer>
    </CardView>
  )
}

const ProfileOption1 = ({
  params,
}) => {
  return (
    <Container>
      <StatusBar hidden={true} />
      <NavBar />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Image source={require('../../../assets/images/person.png')} style={{ width: 100, height: 60 }} />
        <Text size='20px' bold style={{ marginTop: 16 }}>Feranmi John</Text>
        <Text size='15px'>Contemporary Artists</Text>
        <Text size='12px' style={{ marginTop: 20, margin: 10 }}>
        One of the key themes in Rian Hotton's art is his choice of palette, with which he happily takes risks. 
        While he paints, Hotton listens to audiobooks on a wide range of topics, which influences the subjects of his pieces, 
        almost as if they are a visual diary. He describes his painting style as 'boldly unorthodox', using both oils and acrylics.
        </Text>
        <StatsBox>
          <Stats count='140' item='SHOTS' />
          <View style={{ width: 2, height: 24, backgroundColor: '#000000' }}></View>
          <Stats count='140' item='PROJECTS' />
          <View style={{ width: 2, height: 24, backgroundColor: '#000000' }}></View>
          <Stats count='24K' item='FOLLOWERS' />
        </StatsBox>
        <Text size='20px' bold style={{ marginTop: 20, marginBottom: 50 }}>TOP 5 BEST CATEGORIES ARTIST</Text>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
       
      </ScrollView>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color:#DCDCDC;
`;
const NavBarView = styled.View`
  height: 76px;
  margin: 0px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;
const Text = styled.Text`
  color: ${(props) => (props.color ? props.color : '#000000')};
  font-size: ${(props) => (props.size ? props.size : '14px')};
  line-height: ${(props) => (props.height ? props.height : '24px')};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  text-align: center;
`;
const ProfileView = styled.View`
  margin: 16px ;
  align-items: center;
`;
const StatsBox = styled.View`
  margin: 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center
`;
const CardView = styled.View`
  width: 326px;
  height: 300px;
  background-color: #fff;
  margin-bottom: 60px;
  borderRadius: 10;
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