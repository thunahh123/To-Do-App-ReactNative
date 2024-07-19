// components/TodoList.js
import { SafeAreaView, StyleSheet, Text, TextInput, Alert, Button,  } from 'react-native';
import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

export default function ToDoList() {

    //State Hooks
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([{ id: 1, text: 'Study', completed: false }]);


    //Function to Add New Task
    const addTask = () => {
        if (task.trim()) {
            const newTask = { id: Date.now(), text: task.trim(), completed: false }
            setListTask([...listTask, newTask]);
            setTask("");
        }
    };
    //Function to Delete A Task
    const deleteTask = (id) => {
        const updatedList = listTask.filter(task => task.id != id);
        setListTask(updatedList);
    }

    //Function to Toggle Task Completion
    const toggleCompleted = (id) => {
        const updateList = listTask.map(task => (task.id === id ? { ...task, completed: !task.completed } : task));
        setListTask(updateList);
    }

    //Function to confirm delete
    const showDeleteConfirmation = (id) => {
        Alert.alert(
            "Confirm Delete",
            "Are you sure want to remove this task?",
            [
                { text: "Yes", onPress: () => deleteTask(id) },
                { text: "No", onPress: () => console.log('Pressed No ') }
            ]
        );

    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>To Do List</Text>
            <TextInput
                placeholder="Enter a task"
                style={styles.textInput}
                value={task}
                onChangeText={setTask} />

            <Button title='Add To Do' onPress={addTask} />
            {listTask.length>0?
            
                listTask.map(task => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        // deleteTask={showDeleteConfirmation}
                        // toggleCompleted={toggleCompleted}
                        onToggle={() => toggleCompleted(task.id)}
                        onDelete={() => showDeleteConfirmation(task.id)}
                    />
                ))
            : <Text>No Task Now</Text>}
            

        </SafeAreaView>)
}

//styles

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
