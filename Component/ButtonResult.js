import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonResult = ({
  props,
  borderRadius,
  buttonStyle,
  buttonName,
  borderWidth,
  borderStyle,
  width,
  height,
  textColor,
  ...rest
}) => {
  return (
    <>
    <View style = {[{alignItems:'center', justifyContent:'center'}]}>
        <Text>Result</Text>
        <TouchableOpacity
        style = {[{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius,
          borderWidth: borderWidth,
          borderStyle: borderStyle,
          width: width,
          height: height,
          marginBottom: 20
        },
          buttonStyle 
        ]}
        >
        <Text style={{color: textColor, }}>{buttonName}</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default ButtonResult