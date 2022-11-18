import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import buttonSlice from '../Redux/buttonSlice';
import ButtonResult from '../Component/ButtonResult';
import {Provider} from 'react-redux';
import store from '../Redux/store';
import { ScrollView } from 'react-native-gesture-handler';

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
              buttonStyle={{
                borderColor: item.borderColorTest,
                backgroundColor: item.backgroundColorTest,
              }}
              buttonWidth={item.buttonWidth}
              buttonHeight={item.buttonHeight}
              borderWidth = {Math.floor(item.buttonWidthTest)} 
              borderRadius = {Math.floor(item.borderRadiusTest)}
              borderStyle = {item.borderStyleTest}
              buttonName = {item.text}
              textColor = {item.textColorTest}
              width = {Math.floor(item.widthTest)}
              height = {Math.floor(item.heightTest)}
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