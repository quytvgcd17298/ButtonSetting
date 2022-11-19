import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonResult from '../Component/ButtonResult';

const ResultScreen = () => {
  const myListButton = useSelector(state => state.buttonSlice);
  return (
    <>
    { 
      myListButton.map(item => {
        return (
          <>
           <ScrollView>
            <View style = {{borderBottomWidth:1}}>
            <ButtonResult
              key={item.id}
              borderColor = {item.borderColor}
              backgroundColor = {item.backgroundColor}
              buttonWidth={item.buttonWidth}
              buttonHeight={item.buttonHeight}
              borderWidth = {Math.floor(item.borderWidth)} 
              borderRadius = {Math.floor(item.borderRadius)}
              borderStyle = {item.borderStyleTest}
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
  </>
  )
}

export default ResultScreen