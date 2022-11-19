import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FormInput from '../Component/FormInput'
import { Controller, useForm } from 'react-hook-form';
import ColorInput from '../Component/ColorInput';
import DropDownPicker from 'react-native-dropdown-picker';
import SeclectInput from '../Component/SelectInput';
import ButtonResult from '../Component/ButtonResult';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux'
import buttonSlice from '../Redux/buttonSlice';

const InputScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalBackgroundVisible, setModalBackgroundVisible] = useState(false);
  const [modalBorderVisible, setModalBorderVisible] = useState(false);  
  
  const [openBorderWidthSelect, setOpenBorderWidthSelect] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(null)

  const [openBorderHeightSelect, setOpenBorderHeightSelect] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(null)

  const [openBorderSeclect, setOpenBorderSelect] = useState(false)
  const [border, setBorder] = useState(null)

  const [openBorderStyleSelect, setOpenBorderStyleSelect] = useState(false)

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues:{
            text: "Iam Button",
            textColor:"white",
            backgroundColor:"red",
            buttonWidth: "Dynamic",
            buttonWidthValue: "56",
            buttonHeight: "Dynamic",
            border:"No",
            buttonHeightValue: "56",
            borderWidth: "2",
            borderStyle:"solid",
            borderRadius: "5",
            borderColor:"black",
    },
    mode: "onChange",
  });

  const text = getValues("text")
  const textColor = getValues("textColor")
  const backgroundColor = getValues("backgroundColor")
  const width = Math.floor(getValues("buttonWidthValue"))
  const height = Math.floor(getValues("buttonHeightValue"))
  const borderWidth = Math.floor(getValues("borderWidth"))
  const borderStyle = getValues("borderStyle")
  const borderRadius = Math.floor(getValues("borderRadius"))
  const borderColor = getValues("borderColor")
  
  const myListButton = useSelector(state => state.buttonSlice);
  const dispatch = useDispatch();
  const handleButton = () => {
    try {
      dispatch(
        buttonSlice.actions.createMyButton({
        id: uuid.v4(),
        text:text,
        textColor:textColor,
        backgroundColor:backgroundColor,
        border: border,
        buttonWidthValue:buttonWidth === "Dynamic" ? 100 : Math.floor(width),
        buttonWidth:buttonWidth === "Fixed" && Math.floor(width),
        buttonHeightValue:buttonHeight === "Dynamic"? 56 : Math.floor(height),
        buttonHeight:buttonHeight === "Fixed" && Math.floor(height),
        borderWidth:Math.floor(borderWidth),
        borderStyle:borderStyle,
        borderRadius: Math.floor(borderRadius),
        borderColor:borderColor
        }),
      );
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center',borderWidth:2, height:50, width:100, borderRadius:5}}
        onPress={()=>handleButton(
          navigation.navigate("Result")
        )}
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
                getValues={textColor}
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
                getValues={backgroundColor}
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
          value={buttonWidth}
          setValue={setButtonWidth}
          ></DropDownPicker>
      </View>

        {buttonWidth === "Fixed" && <View style = {{ paddingBottom:15}}>
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
          value={buttonHeight}
          setValue={setButtonHeight}
          ></DropDownPicker>
      </View>

        {buttonHeight === "Fixed" && <View style = {{ paddingBottom:15}}>
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

        <View>
        <Text>Border</Text>
        <View style = {{flexDirection:"row"}}>
        <View>
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
          open={openBorderSeclect}
          setOpen={setOpenBorderSelect}
          items={[
            { label: 'Yes', value: 'Yes' },
            { label: 'No', value: 'No' },
            ]}
          value={border}
          setValue={setBorder}
          ></DropDownPicker>
      </View>

        {border === "Yes" && <View style = {{ paddingBottom:15}}>
        <Controller
          name="borderStyle"
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
            width:200
            }} 
          listMode="SCROLLVIEW"   
          dropDownDirection="TOP"      
          open={openBorderStyleSelect}
          setOpen={setOpenBorderStyleSelect}
          items={[
            { label: 'dashed', value: 'dashed' },
            { label: 'dotted', value: 'dotted' },
            { label: 'solid', value: 'solid' },
            ]}
          value={value}
          setValue={onChange}
          onChangeValue={onChange}
          ></DropDownPicker>
          )}
        ></Controller>
        <Controller
            name="borderWidth"
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
                getValues={borderColor}
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
        <ButtonResult
        buttonWidth={buttonWidth}
        buttonHeight={buttonHeight}
        border = {border}
        borderColor = {borderColor}
        backgroundColor = {backgroundColor}
        borderWidth = {Math.floor(borderWidth)} 
        borderRadius ={Math.floor(borderRadius)}
        borderStyle = {borderStyle}
        text = {text}
        textColor = {textColor}
        width = {Math.floor(width)}
        height = {Math.floor(height)}
        
        ></ButtonResult>
        <TouchableOpacity
        onPress={()=> console.log(myListButton)}
        style={{height:20,width:20, borderWidth:1}}
        ></TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
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