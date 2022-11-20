import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createSlice} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { string } from 'yup';

export default createSlice({
    name:"myInitialButton",
    initialState:[
        {   
            id: "1",
            text: "Iam Button",
            textColor:"white",
            backgroundColor:"red",
            buttonWidth: "Dynamic",
            buttonWidthValue: "100",
            buttonHeight: "Dynamic",
            border:"No",
            buttonHeightValue: "56",
            borderWidth: "2",
            borderStyle:"solid",
            borderRadius: "5",
            borderColor:"black",
          },
    ],
    reducers:{
        createMyButton: (state, action) => {
              state.push(action.payload)
        },
    }
    }
);

