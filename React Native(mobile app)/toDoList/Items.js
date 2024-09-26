import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
const Items = ({ taskName ,deleted,AdjustName}) => {
  const [isDone, setIsDone] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const handleDelete=()=>{
    setIsDeleted(!isDeleted)
    if (!isDeleted) {
    deleted(taskName); // Call the delete function passed from the parent
     
    }
  }
  const handleDone=()=>{
    setIsDone(!isDone)
    if (!isDone) {
     // deleted(taskName); // Call the delete function passed from the parent
     AdjustName(taskName)
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{taskName}</Text>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Done</Text>
        <Checkbox
          status={isDone ? 'checked' : 'unchecked'}
          onPress={handleDone}
          color="#4caf50"  // Green when checked
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Delete</Text>
        <Checkbox
          status={isDeleted ? 'checked' : 'unchecked'}
          onPress={handleDelete}
          color="#f44336"  // Red when checked
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Spreads items horizontally
    padding: 15, // Adds space inside the container
    backgroundColor: '#f5f5f5', // Light background
    borderRadius: 10, // Rounded corners for the task card
    marginBottom: 10, // Adds space between tasks
    shadowColor: '#000', // Adds shadow for depth
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3, // Shadow effect for Android
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Darker color for the task name
    flex: 1, // Allows the task name to take up more space
    marginRight: 20, // Spacing between the task name and checkboxes
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginRight: 5, // Adds space between text and checkbox
    color: '#555', // Medium color for labels
  },
});

export default Items;
