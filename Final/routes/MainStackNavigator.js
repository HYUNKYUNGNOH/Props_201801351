import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screens/Layout';
import Home from '../screens/Home';
import lotto from '../screens/Lotto';
import YoutubeViewer from '../screens/YoutubeViewer';

const Nav = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
                <Nav.Screen name = "lotto" component={lotto} options={{title: 'Lotto번호 생성하기'}}/>
                <Nav.Screen name = "Youtube" component={YoutubeViewer} options={{title: 'Youtube'}}/>

            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator;