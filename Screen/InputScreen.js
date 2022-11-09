import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../Component/FormInput'
import { Controller, useForm } from 'react-hook-form';
import ColorInput from '../Component/ColorInput';

const InputScreen = ({navigation}) => {

const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues:{
      text:"",
      textColor:"",
    },
    mode: "onChange",
  });
  const test = getValues("textColor")
    
  return (
    <ScrollView style={{flex:1, }}>
    <SafeAreaView>
        <TouchableOpacity
        style = {{paddingLeft:100}}
        onPress={({data})=> console.log(getValues(data))}
        >
            <Text>Create</Text>
        </TouchableOpacity>

      <View style = {{paddingTop:30, paddingBottom:15}}>
        <Controller
            name="text"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Button Text"
                placeholder="Button text"
                value={value}
                onChangeText={onChange}
                />
            )}
          />
        </View>

        <View style = {{paddingTop:15, paddingBottom:15}}>
        <Controller
            name="textColor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <View>
              <ColorInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Button Text Color"
                placeholder="Button text color"
                value={test}
                onChangeText={onChange}
                setValue={setValue}
                getValues={test}
                >
                </ColorInput>
                </View>
            )}
          />
        </View>

        <View style = {{paddingTop:15, paddingBottom:15}}>
        <Controller
            name="backgroundColor"
            control={control}
            render={({ field: { onChange, value } }) => (
              <View>
              <ColorInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Background Color"
                placeholder="Background color"
                value={value}
                onChangeText={onChange}
                >
                </ColorInput>
                </View>
            )}
          />
        </View>
        </SafeAreaView>
    </ScrollView>
  )
}

export default InputScreen