import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import CalendarPicker from "react-native-calendar-picker";

interface AppState {
    selectedStartDate: Date | null;
}

export default class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date: Date) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : "";
        return (
            <View style={styles.container}>
                <CalendarPicker onDateChange={this.onDateChange} />
                <View>
                    <Text>Data selecionada: {startDate}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 100,
    },
});
