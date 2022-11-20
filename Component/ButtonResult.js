import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const ButtonResult = props => {
  return (
    <>
    <View style = {{alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity
        style = {[{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColor,
          borderColor:props.borderColor,
          borderRadius: props.borderRadius,
          borderWidth: props.border === "No"? 2: props.borderWidth,
          borderStyle: props.borderStyle,
          width: props.buttonWidth === "Dynamic" ? 100 : props.width,
          height:props.buttonHeight === "Dynamic" ? 56 : props.height,
          marginBottom: 20
        }, 
        ]}
        >
        <Text style={{color: props.textColor, }}>{props.text}</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default ButtonResult