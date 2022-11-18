import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buttonSlice from '../Redux/buttonSlice';
import ButtonResult from '../Component/ButtonResult';
import {Provider} from 'react-redux';
import store from '../Redux/store';
import { ScrollView } from 'react-native-gesture-handler';

const ResultScreen = props => {
  const myListButton = useSelector(state => state.buttonSlice);
  console.log(myListButton)
  return (
    myListButton.map(item => {
      return (
         <ScrollView>
          <View style = {{borderBottomWidth:1}}>
          <ButtonResult
            key={item.id}
            buttonStyle={{
              borderColor: item.borderColorTest,
              backgroundColor: item.backgroundColorTest,
            }}
            borderWidth = {Math.floor(item.buttonWidthTest)} 
            borderRadius = {Math.floor(item.borderRadiusTest)}
            borderStyle = {item.borderStyleTest}
            buttonName = {item.text}
            textColor = {item.textColorTest}
            width = {Math.floor(item.widthTest)}
            height = {Math.floor(item.heightTest)}
          ></ButtonResult>
          </View>
          </ScrollView>          
      )
    })
  )
}

export default ResultScreen