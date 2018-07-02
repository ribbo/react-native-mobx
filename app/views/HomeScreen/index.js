import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';

@inject('layoutsStore')
@observer
class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Text>Home</Text>
                <Button
                    title='Go to Details'
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;
