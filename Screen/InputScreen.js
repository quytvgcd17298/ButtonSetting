import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../Component/FormInput'
import { Controller, useForm } from 'react-hook-form';
import ColorInput from '../Component/ColorInput';
import { TriangleColorPicker } from 'react-native-color-picker'
import Modal from "react-native-modal";
import DropDownPicker from 'react-native-dropdown-picker';
import SeclectInput from '../Component/SelectInput';

const InputScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBackgroundVisible, setModalBackgroundVisible] = useState(false);
  const [modalBorderVisible, setModalBorderVisible] = useState(false);  
  const [openBorderWidthSelect, setOpenBorderWidthSelect] = useState(false);
  const [openBorderHeightSelect, setOpenBorderHeightSelect] = useState(false);
  const [openWidthInput,setOpenWidthInput] = useState(false);
  const [openHeightInput,setOpenHeightInput] = useState(false)



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
      backgroundColor:"",
    },
    mode: "onChange",
  });

  const text = getValues("text")
  const textColorTest = getValues("textColor")
  const backgroundColorTest = getValues("backgroundColor")
  const widthTest = getValues("buttonWidthValue")
  const heightTest = getValues("buttonHeightValue")
  const borderRadiusTest = getValues("borderRadius")
  const borderColorTest = getValues("borderColor")

    
  return (
    <ScrollView>
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
        style = {{alignItems:'center',borderWidth:2, height:30, width:70,}}
        onPress={({data})=> console.log(getValues(data))}
        >
        <Text>Create</Text>
        </TouchableOpacity>

      <View style = {{paddingTop:20, paddingBottom:10}}>
        <Controller
            name="text"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth:1,
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

        <View style = {styles.containerChild}>
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
                value={value}
                onPress={() => setModalBackgroundVisible(!modalBackgroundVisible)}
                onChangeText={onChange}
                getValues={textColorTest}
                visible={modalBackgroundVisible}
                onColorSelected = {(color) => {
                  setValue("textColor", color),
                  setModalBackgroundVisible(!modalBackgroundVisible),
                  console.log(getValues("textColor"))}}
                > 
                </ColorInput>
                  </View>
            )}
          />
        </View>

        <View style = {styles.containerChild}>
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
                onPress={() => setModalVisible(!modalVisible)}
                onChangeText={onChange}
                getValues={backgroundColorTest}
                visible={modalVisible}
                onColorSelected={(color)=>{
                  setValue("backgroundColor", color),
                  setModalVisible(!modalVisible),
                  console.log(getValues("backgroundColor"))
                }}
                > 
                </ColorInput>
                </View>
            )}
          />
        </View>

        <View>
        <Text>Button Width</Text>
        <View style = {{flexDirection:"row"}}>
        <View>
          <Controller
          name="borderWidth"
          control={control}
          render={({ field: { onChange, value } }) => (
          <DropDownPicker
          style={{
            borderColor: "#A5A5A5",
            marginVertical: 10,
            marginRight:5,
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 12,
            height:45,
            width:150
            }} 
          listMode="SCROLLVIEW"   
          dropDownDirection="TOP"      
          open={openBorderWidthSelect}
          setOpen={setOpenBorderWidthSelect}
          items={[
            { label: 'Dynamic', value: 'Dynamic' },
            { label: 'Fixed', value: 'Fixed' },
            ]}
          value={value}
          setValue={onChange}
          onChangeValue={(e) => {onChange
            if(e === 'Fixed') {
              setOpenWidthInput(true)
            } else {
              setOpenWidthInput(false)
            }
          }}
          ></DropDownPicker>
          )}
        ></Controller>
      </View>

        {openWidthInput === true && <View style = {{ paddingBottom:15}}>
        <Controller
            name="buttonWidthValue"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SeclectInput
                style={{
                  paddingHorizontal:10,
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  width:200,
                  borderColor: "#A5A5A5",
                }}
                placeholder="px"
                value={value}
                onChangeText={onChange}
                />
            )}
          />
        </View>}
        </View>
        </View>  

        <View>
        <Text>Button Height</Text>
        <View style = {{flexDirection:"row"}}>
        <View>
          <Controller
          name="borderHeight"
          control={control}
          render={({ field: { onChange, value } }) => (
          <DropDownPicker
          style={{
            borderColor: "#A5A5A5",
            marginVertical: 10,
            marginRight:5,
            borderRadius: 4,
            borderWidth: 1,
            paddingHorizontal: 12,
            height:45,
            width:150
            }} 
          listMode="SCROLLVIEW"   
          dropDownDirection="TOP"      
          open={openBorderHeightSelect}
          setOpen={setOpenBorderHeightSelect}
          items={[
            { label: 'Dynamic', value: 'Dynamic' },
            { label: 'Fixed', value: 'Fixed' },
            ]}
          value={value}
          setValue={onChange}
          onChangeValue={(e) => {onChange
            if(e === 'Fixed') {
              setOpenHeightInput(true)
            } else {
              setOpenHeightInput(false)
            }
          }}
          ></DropDownPicker>
          )}
        ></Controller>
      </View>

        {openHeightInput === true && <View style = {{ paddingBottom:15}}>
        <Controller
            name="buttonHeightValue"
            control={control}
            render={({ field: { onChange, value } }) => (
              <SeclectInput
                style={{
                  paddingHorizontal:10,
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth: 1,
                  width:200,
                  borderColor: "#A5A5A5",
                }}
                placeholder="px"
                value={value}
                onChangeText={onChange}
                />
            )}
          />
        </View>}
        </View>
        </View>  

        <View style = {styles.containerChild}>
        <Controller
            name="borderRadius"
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormInput
                style={{
                  marginVertical: 10,
                  borderRadius: 4,
                  borderWidth:1,
                  paddingHorizontal: 12,
                  borderColor: "#A5A5A5",
                }}
                lable = "Border Radius"
                placeholder="Border Radius"
                value={value}
                onChangeText={onChange}
                />
            )}
          />
        </View>

        <View style = {styles.containerChild}>
        <Controller
            name="borderColor"
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
                lable = "Border Color"
                placeholder="Border color"
                value={value}
                onPress={() => setModalBorderVisible(!modalBorderVisible)}
                onChangeText={onChange}
                getValues={borderColorTest}
                visible={modalBorderVisible}
                onColorSelected={(color)=>{
                  setValue("borderColor", color),
                  setModalBorderVisible(!modalBorderVisible),
                  console.log(getValues("borderColor"))
                }}
                > 
                </ColorInput>
                </View>
            )}
          />
        </View>
        </View>
        </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
  },
  containerChild:{
    marginTop:10,
    marginBottom:5
  }
})

export default InputScreen