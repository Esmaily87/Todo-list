import style from './Tasker.module.css'
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './TaskList';
import { FormEvent, useState, ChangeEvent, InvalidEvent, HTMLInputTypeAttribute } from 'react';



export function Tasker(){

     /*const initialData = [
        {
            id: '',
            title: '',
            isCompleted: false
        }
        
    ]*/
    interface Task {
        id: string;
        title: string;
        isCompleted: boolean;
      }

    const [tasks, setTasks ]= useState<Task[]>([])
    
    const [newTaskText, setNewTaskText] = useState('')
  
    function handleCreateNewTask(event: FormEvent){
        event.preventDefault()
        setTasks(tasks => [...tasks!, {
            id: Math.random().toString(), // usar UUID aqui depois
            isCompleted: false, // valor inicial
            title: newTaskText
        }]);
        setNewTaskText('');
       
               
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement> ) {
        event.target.setCustomValidity('');
       setNewTaskText(event.target.value);
      
    }

    function deleteTask(id: string) {
        const tasksWithOutDeletedOne = tasks.filter( task => {
            return task.id !== id;
        })
         setTasks(tasksWithOutDeletedOne);
    }

    const tasksForCount = tasks.length
    
    function TaskFinish (id: string){
    const editedCompletedTask = tasks.map(task => {
        if (task.id === id) {
            return {
                ...task,
                isCompleted: !task.isCompleted
            }
        }

        return task 
    })

    setTasks(editedCompletedTask)

    }

    const completedTasks = tasks.filter(task => task.isCompleted).length

   const lazylevel =  (tasks.length) - tasks.filter(task => task.isCompleted).length
    

    

    



    

     

   return( 
        <div className={style.corpo}>
            
            <form onSubmit={ handleCreateNewTask } className={style.tasker}>
            <input type='text'
            name="task" 
            placeholder="Adicione uma nova tarefa"
            value={newTaskText}
            onChange={handleNewTaskChange}
            required
            />
            <button className={style.button}   type="submit">
                Criar
                <PlusCircle size={16}/>
                
                
                </button>
            </form>
            <div className={style.taskmonitor}>
                <div className={ style.taskerstatus }>
                
                    <div className={ style.taskscreateds } >
                    Tarefas criadas
                    <div className={ style.countertasks }>{tasksForCount}</div>
                    </div>

                    <div  className={ style.tasksendeds }>
                    Preguiça Level  
                    <div className={ style.countertasksends }>
                        {lazylevel}/{tasksForCount}</div>        
                    </div>

                    <div  className={ style.tasksendeds }>
                    Concluídas
                    <div className={ style.countertasksends }>{completedTasks}</div>        
                    </div>

               

                </div>
            </div>
        

        <div className={ style.tasklist }>
        {tasks.map(task =>{
            return(
            <TaskList
            key={task.id}
            id={task.id}
            content={task.title}
            onDeleteTask={ deleteTask }
            isCompleted={task.isCompleted}
            handleChangeCompletion={TaskFinish}
            handleLineThrough={TaskFinish}
            />
            
            )
            })}

        </div>



        </div>
    
        
    )
}
