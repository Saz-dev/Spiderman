import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SafeAreaView } from "react-native-safe-area-context"

const Homescreen = () => {

    const logOut = async () => {
        try{
            await AsyncStorage.setItem("userEmail", "")
            await AsyncStorage.setItem("isAuthenticated", "false")
        } catch(e) {
            console.log(e)
            }
    }
    return (
        <SafeAreaView>
            <Text style={styles.headerText}>Spider - Man</Text>
            
            <TouchableOpacity onPress={logOut}>
                <Text style={styles.headerText}>Log Out</Text>
            </TouchableOpacity> 

        </SafeAreaView> 
    )
}

export default Homescreen

const styles = StyleSheet.create ({
    headerText: {
        fontSize: 25,
        alignSelf: "center"
    }
})