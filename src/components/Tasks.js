import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
    return (
        <>
            {tasks.map((task) =>  (<Task key={task.id} /*outputing the component*/
                task={task} /*passing the task as prop */ 
                onDelete = {onDelete}  
                
                />
            
            ))}
            
        </>
    )

}

export default Tasks