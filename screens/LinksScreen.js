import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Subscribe } from "unstated";
import LinksCont from "../containers/LinksCont";

class LinksScreenRender extends React.Component {
    constructor(props) {
        super(props);

        this.cont = this.props.cont;
        this.globalCont = this.props.globalCont;
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center", marginTop: "50%" }}>
                    {this.cont.state.name}
                </Text>
                <Text style={{ textAlign: "center", marginTop: "50%" }}>
                    {this.globalCont.state.user}
                </Text>
            </View>
        );
    }
}

// HACK: allows the usage of Cont outside of childs render
export default class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;
    }

    // Exports to stack navigation
    static navigationOptions = ({ navigation }) => {
        return {
            header: null
        };
    };

    render() {
        // pass global cont down
        const AppCont = global.cont;

        return (
            <Subscribe to={[LinksCont, AppCont]}>
                {(LinksCont, AppCont) => (
                    <LinksScreenRender
                        cont={LinksCont}
                        globalCont={AppCont}
                        navigation={this.navigation}
                    />
                )}
            </Subscribe>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});
