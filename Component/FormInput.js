import {
    View,
    Text,
    StyleSheet,
    TextInput
  } from "react-native";
  import React from "react";

const FormInput = ({
    style,
    inputStyle,
    lable,
    ...rest
}) => {
  return (
    <>
    {lable && <Text style = {{marginBottom:2}}>{lable}</Text>}
    <View style={[
            {
              width:'95%',
              flexDirection:"row",
              height: 45,
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor:"white"
            },
            style,
          ]}>
      <TextInput
            style={[inputStyle, { flex: 1 }]}
            {...rest}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            autoCorrect={false}
      ></TextInput>
    </View>
    </>
  )
}

export default FormInput

const styles = StyleSheet.create({})