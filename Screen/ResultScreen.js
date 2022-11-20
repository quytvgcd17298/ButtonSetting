import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, {useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ButtonResult from '../Component/ButtonResult';

const ResultScreen = () => {
  const myListButton = useSelector(state => state.buttonSlice);

  return (
    <View>
      <Text
      style = {{
        paddingTop:20,
        alignContent:"center",
        justifyContent: "center",
        fontSize:24,
        textTransform:'uppercase',
        textAlign:"center",
      }}
      >Button List</Text>
    { 
      myListButton.map(item => {
        return (
          <>
           <ScrollView style = {{marginTop:20}}>
            <View style = {{borderBottomWidth:1,}}>
            <ButtonResult
              key={item.id}
              borderColor = {item.borderColor}
              backgroundColor = {item.backgroundColor}
              buttonWidth={item.buttonWidth}
              buttonHeight={item.buttonHeight}
              borderWidth = {Math.floor(item.borderWidth)} 
              borderRadius = {Math.floor(item.borderRadius)}
              borderStyle = {item.borderStyle}
              text = {item.text}
              textColor = {item.textColor}
              width = {Math.floor(item.buttonWidthValue)}
              height = {Math.floor(item.buttonHeightValue)}
              border = {item.border}
            ></ButtonResult>
            </View>
            </ScrollView>          
        </>
        )
      })
    }
  </View>
  )
}

export default ResultScreen