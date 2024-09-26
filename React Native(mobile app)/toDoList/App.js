import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,SafeAreaView , Alert, TouchableOpacity, Pressable, FlatList} from 'react-native';
import { Button } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import Items from './Items';
export default function App() {
  const [Tasks,setTasks]=useState("")
  const [list,setList]=useState([]);
  const [TotalTasks,setTotalTasks]=useState(0)
  const [TotalDone,setTotalDone]=useState(0)
  const [inValidName,setInValidName]=useState("")
  
    ////////////////////////////////////////////////////////////////////
// Function to remove a task by nameOfTask
const deleted = (taskName) => {
  setTotalTasks((e)=>e-1)
  setList((prevTasks) => prevTasks.filter((task) => task.name !== taskName));
}

const nameChange=(taskName)=>{
setTotalDone((e)=>e+1)
setList((prevTasks) =>
  prevTasks.map((task) =>
    task.name ===taskName? { ...task, name: "Finally Done"} : task
  )
)
}

//////////////////////////////////////////////////////
  const handleChange=(text)=>{
    setTasks(text)
  if(text.length<3)
    setInValidName("Invalid name try again")
  else
  setInValidName("")
  }
  ////////////////////////////////////////////////////////////////
  const handlePress=(taskName)=>{
if(Tasks.length==0)
  console.warn("Invalid Name for the task")
else{
  setTotalTasks((e)=>e+1)
  setList([
    ...list, 
{name:taskName}
  ]);

}
  }

  /////////////////////////////////////////////////////////////
  return (
    <>
    <Text style={styles.title}>TO do List</Text>
    
    <View style={styles.container}>
      <TextInput
        placeholder='Enter the task'
        value={Tasks}
        onChangeText={handleChange}
        style={styles.input}/>
        
        {/* {inValidName} */}
      <Pressable style={styles.button} onPress={()=> handlePress(Tasks) }>
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>

    </View>
    <Text style={{color:"red"}}>{inValidName}</Text>
    <Text style={styles.inlineText}>the Total number of Tasks ({TotalTasks}) and the total number of this Tasks that have Done ({TotalDone})</Text>
    
<View>
{
  
list.map((task) => (
        <Items
        key={task.name}
        taskName={task.name}
        deleted={deleted}
        AdjustName={nameChange}
        />
      ))}
</View>
    </>
    
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32, // Large font size
    fontWeight: 'bold', // Bold font weight
    color: '#fff', // White text color for contrast
    textAlign: 'center', // Center the text
    marginVertical: 20, // Space above and below
    paddingVertical: 15, // Vertical padding inside the background
    paddingHorizontal: 20, // Horizontal padding inside the background
    backgroundColor: 'pink', // Green background color
    borderRadius: 10, // Rounded corners for the background
    letterSpacing: 1, // Slight letter spacing
    overflow: 'hidden', // To ensure the background fits within rounded corners
  },
  container: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center items vertically
    justifyContent: 'center', // Center the content
    marginVertical: 10, // Space above and below the container
  },
  input: {
    backgroundColor: '#f9f9f9', // Light background
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10, // Rounded corners
    fontSize: 16, // Font size for readability
    borderColor: 'pink', // Light border color
    borderWidth: 1, // Thin border
    width: '70%', // Smaller width for the input field
    marginRight: 10, // Space between input and button
    shadowColor: 'pink', // Shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
  },
  button: {
    backgroundColor: 'pink', // Pink background
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25, // Rounded corners
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 2, // Shadow blur
    elevation: 5, // Android shadow
    alignItems: 'center',
    justifyContent: 'center', // Center text in the button
    width: '20%', // Smaller width for the button
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  inlineText: {
    fontSize: 16, // Base font size
    color: '#333', // Dark gray color
    paddingHorizontal: 10, // Add padding for spacing
    marginVertical: 10, // Vertical margin for spacing above and below
    textAlign: 'center', // Center the text horizontally
    lineHeight: 24, // Improves readability by adding space between lines
  }
  ,  
  buttonContainer: {
    backgroundColor: '#2196F3', // Button background color
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});


