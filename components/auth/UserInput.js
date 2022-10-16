import React from "react";
import {StyleSheet, View, TextInput} from 'react-native';
import Text from "@kaloraat/react-native-text";


const UserInput = ({name, value, setValue, autoCapitalize="none", keyboardTYpe="default", secureTextEntry=false}) => {
    return(
            <View style={{marginHorizontal:24}}>
                <Text semi>{name}</Text>
                <TextInput style = {style_user.style_input} value={value} onChangeText = {(text) => setValue(text)} autoCapitalize={autoCapitalize} autoCorrect={false} keyboardType={keyboardTYpe} secureTextEntry={secureTextEntry}/>
            </View>
    );
}


const style_user = StyleSheet.create({
    style_input:{
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#004b54',
        marginBottom: 30,
    }
})


export default UserInput;