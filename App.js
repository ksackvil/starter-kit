/*
 * App.js
 * 
 * START HERE! This file is the starting point for the app. It is responsible for loading
 * all resources as well as setting up global constants, only rarely should you have to edit
 * this file.
 * 
 */ 

import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "unstated";
import AppCont from './containers/AppCont';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoadingComplete: false
        };

        // This line allows AppCont to be accessed throughout the app (by all screens)
        global.cont = AppCont;
    }

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Provider>
                    <View style={styles.container}>
                        {Platform.OS === "ios" && (
                            <StatusBar barStyle="default" />
                        )}
                        <AppNavigator />
                    </View>
                </Provider>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require("./assets/images/robot-dev.png"),
                require("./assets/images/robot-prod.png")
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
            })
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
