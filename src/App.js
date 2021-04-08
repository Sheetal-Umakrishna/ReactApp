import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => { 

  const [tasks, setTasks] = useState(
    [
    {
        id : 1,
        text : 'Seminar Meeting',
        day : 'Feb 5th at 2:30 pm',
        reminder : false,

    },
    {
        id : 2,
        text : 'Presentation Day',
        day : 'Feb 6th at 1:30 pm',
        reminder : true,

    },
    {
        id : 3,
        text : 'Grocery Shopping',
        day : 'Feb 10th at 2:30 pm',
        reminder : false,

    }
    ]
)
//Add Task

const addTask = (task) => {

  const id = Math.floor(Math.random () * 1000) + 1
  const newTask = {id, ...task } 
  setTasks([...tasks, newTask]) 
} 

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))

}

return ( 
    <div className='container'> 
              
      <Header />       
      <AddTask onAdd = {addTask} />      
      {      
        tasks.length > 0? ( <Tasks tasks ={tasks} onDelete = {deleteTask} /> ) : 
        ('No Tasks To Show') 
      }

    </div>
 
  );
}
export default App;

