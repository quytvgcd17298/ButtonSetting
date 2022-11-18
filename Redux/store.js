import { View, Text } from 'react-native'
import React from 'react'
import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './buttonSlice';


const store = configureStore ({
    reducer:{
        buttonSlice: buttonSlice.reducer
    },
});

export default store