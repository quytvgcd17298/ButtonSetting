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
  ...rest
  }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const turnModal = () => {
        setModalVisible(!modalVisible);
      };
    const offModal = (color) => {
      setModalVisible(!modalVisible)
      // setInputColor(color)
      setValue("textColor", color)
      console.log(color)
    }
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

      >
      </TextInput>
      <TouchableOpacity
      style = {{height:20, width:20, borderWidth:1, backgroundColor: getValues}}
      onPress = {turnModal}/>
    </View>
    <Modal
    style={{backgroundColor:"black"}}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      >
        <TriangleColorPicker
            onColorSelected={offModal}
            style={{flex: 1}}
        ></TriangleColorPicker>
      </Modal>
    </>
  )
}

export default ColorInput

const styles = StyleSheet.create({})