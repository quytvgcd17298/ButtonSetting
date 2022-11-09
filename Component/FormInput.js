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
    {lable && <Text style = {{marginBottom:5}}>{lable}</Text>}
    <View style={[
            {
              width:'95%',
              height: 45,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
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