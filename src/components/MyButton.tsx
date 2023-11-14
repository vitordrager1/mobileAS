import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    alignItems:"center"
    
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
  },
});

type ButtonProps ={
    title : string
    disable: boolean
    onPressButton: ()=>void
    containerStyle:{
      width: number;
      height: number;
      backgroundColor: string;
      borderRadius: number;
      margin: number;

    }
}
const MyButton = ({title, disable, onPressButton, containerStyle}:ButtonProps) => {
  console.log({title})
    return (
      
      <TouchableOpacity onPress={onPressButton} disabled={disable}>
      <View style={{...styles.buttonContainer, width:containerStyle.width,
         height:containerStyle.height, backgroundColor:disable?"red":containerStyle.backgroundColor, borderRadius:containerStyle.borderRadius, margin:containerStyle.margin}}>
          
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
    );
}

export default MyButton;