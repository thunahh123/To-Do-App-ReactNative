// components/TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';



// export default function ToDoItem({ task, showDeleteConfirmation, toggleCompleted }) {
//     return (
//         <View style={styles.todoItem}>
//             <Switch
//                 value={task.completed}
//                 onValueChange={() => toggleCompleted(task.id)}
//             />

//             <Text style={[styles.todoItemText, task.completed && styles.completed]}>{task.text}</Text>


//             <TouchableOpacity
//                 style={styles.deleteButton}
//                 onPress={() => showDeleteConfirmation(task.id)}
//             >
//                 <Text style={{ color: '#fff' }}>Delete</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

const ToDoItem = (props) => {
  return (
    <View style={styles.todoItem}>
      <Switch
        value={props.task.completed}
        onValueChange={props.onToggle}
      />

      <Text style={[styles.todoItemText, props.task.completed && styles.completed]}>
        {props.task.text}
      </Text>


      <TouchableOpacity
        style={styles.deleteButton}
        onPress={props.onDelete}
      >
        <Text style={{ color: '#fff' }}>Delete</Text>
      </TouchableOpacity>
    </View>

  )
}


export default ToDoItem;


const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Align items vertically in the center
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  todoItemText: {
    flex: 1, // Allow the text to take up remaining space
    marginRight: 8,
    color: '#333',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff6347', // Tomato color
    color: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});