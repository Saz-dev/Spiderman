import React from "react"
import { StyleSheet, View } from "react-native"
import { Text } from "react-native-gesture-handler"

const DrawerScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Drawer NAV</Text>
        </View>
    )
}

export default DrawerScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#000",
        opacity: 0.5
    }
})