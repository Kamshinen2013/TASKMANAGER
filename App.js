// import React from 'react' //can be used with the commentted class format below
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  //THE ADD BUTTON ON TOP FOR TOGGLING
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState ([
    {
      id : " " , 
    text: " ",
    day: "",
    reminder: " " ,
    }
   
    // {
    // id: 1,
    // text: ' Doctors Appointment',
    // day: 'June 17 at 2;30pm',
    // reminder: true,
    // },

    // {
    //     id: 2,
    //     text: 'Meeting in Church',
    //     day: 'June 18 at 6;30pm',
    //     reminder: true,
    //     },

    //     {
    //         id: 3,
    //         text: 'Watch football',
    //         day: 'June 19 at 2;00am',
    //         reminder: false,
    //         }
])

//Add Task 
const addTask = (task) => {
const id = Math.floor(Math.random()*10000) + 1
const newTask = { id, ...task }
setTasks([...tasks, newTask])
}
// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}

//Toggle reminder
const toggleReminder = (id) => {
setTasks(tasks.map((task) => task.id === id
? {...task, reminder: 
  !task.reminder } : task
  )
)
}
  return (
    <div className="Container">
      <Header onAdd ={ () => setShowAddTask(!showAddTask)}
      showAdd = {showAddTask} 
      />  
      {showAddTask && <AddTask onAdd = { addTask } />} 
      {/* The above  expression {showAddTask && ...} makes the form disapper until addtask is clicked. 
         The other expression <AddTask onAdd = { addTask } />. recall const showAddTask at the earlier part up*/}
      {tasks.length > 0 ? ( 
        <Tasks tasks = {tasks} onDelete = {deleteTask} 
        onToggle = { toggleReminder } />
      ) : (
        'No task To show'
      )}
    </div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// } 

export default App;
