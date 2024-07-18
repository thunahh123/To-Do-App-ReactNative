// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function App() {

  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);


  const addTask = () => {
    if (task.trim()) {
      setListTask([...listTask, task.trim()]);
      setTask(""); // Clear the input field after adding the task
    }
  };

  const deleteTask = (index) => {
    Alert.alert("Delete", "Are you sure want to remove this task?", [
      { text: "Yes", onPress: () => console.log('Pressed Yes '+index) },
      { text: "No", onPress: () => console.log('Pressed No '+index) }
    ])
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <TextInput
        placeholder="Enter a task"
        style={styles.textInput}
        value={task}
        onChangeText={task => setTask(task)} />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={listTask}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{index + 1}  {item}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "green"
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  taskContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    display: 'flex',
    flexDirection: 'row'
  },
  task: {
    fontSize: 18,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
