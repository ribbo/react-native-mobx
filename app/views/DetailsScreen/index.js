import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { inject, observer } from 'mobx-react/native';

@inject('layoutsStore', 'windowsStore')
@observer
class DetailsScreen extends Component {

    render() {
        return (
            <View>
                <Text>Details</Text>
                <Button
                    title='Go Home'
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default DetailsScreen;
