import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

export default createSlice({
    name:"myInitialButton",
    initialState:[
        {   
            text:"",
            textColor:"",
            backgroundColor:"",
            buttonWidth:"",
            buttonWidthValue:"",
            buttonHeight:"",
            buttonHeightValue:"",
            buttonWidth:"" ,
            borderStyle:"solid",
            borderRadius:"",
            borderColor:""
          },
    ],
    reducers:{
        createMyButton: (state, action) => {
              state.push(action.payload)
        },
    }
    }
);

