import { StyleSheet, TextInput, View, TouchableOpacity, Text, } from 'react-native'
import React, { useState } from 'react'
import { TriangleColorPicker } from 'react-native-color-picker'
import Modal from "react-native-modal";


const ColorInput = ({
  getValues,
  setValue,
  color,
  style,
  inputStyle,
  lable,
  visible,
  onPress,
  onColorSelected,
  ...rest
  }) => {
  return (
    <>
    {lable && <Text style = {{marginBottom:2}}>{lable}</Text>}
    <View style={[
            {
              width:'95%',
              height: 45,
              flexDirection: "row",
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

      >
      </TextInput>
      <TouchableOpacity
      style = {{height:20, width:20, borderWidth:1, backgroundColor: getValues}}
      onPress = {onPress}/>
    </View>
    <Modal
              animationType="fade"
              transparent={false}
              visible={visible}
              presentationStyle ="fullScreen"
              >
              <TriangleColorPicker
                onColorSelected = {onColorSelected}
                style={{flex: 1}}
              ></TriangleColorPicker>
    </Modal>
    </>
  )
}

export default ColorInput

const styles = StyleSheet.create({})