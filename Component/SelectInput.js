import {
    View,
    Text,
    StyleSheet,
    TextInput
  } from "react-native";
  import React from "react";

const SeclectInput = ({
    style,
    inputStyle,
    ...rest
}) => {
  return (
    <>
    <View style={[
            {
              flexDirection:"row",
              height: 50,
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

export default SeclectInput

const styles = StyleSheet.create({})