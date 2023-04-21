import style from './Tasker.module.css'
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './TaskList';
import { FormEvent, useState, ChangeEvent, InvalidEvent, HTMLInputTypeAttribute } from 'react';



export function Tasker(){
    const initialData = [
        {
            id: 'id-aleatorio1',
            title: 'Task 1',
            isCompleted: false // Essa não está concluída
        },
        
    ]

    const [tasks, setTasks ]= useState(initialData)
    
    const [newCommentText, setNewCommentText] = useState('')
  
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setTasks(tasks => [...tasks, {
            id: Math.random().toString(), // Gera um ID aleatório de uma forma não muito recomendada, mas vai servir por enquanto
            isCompleted: false, // Inicia o isCompleted como false
            title: newCommentText
        }]);
        setNewCommentText('');
       
               
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement> ) {
        event.target.setCustomValidity('');
       setNewCommentText(event.target.value);
      
    }

    function deleteComment(id: string) {
        const tasksWithOutDeletedOne = tasks.filter( task => {
            return task.id !== id;
        })
         setTasks(tasksWithOutDeletedOne);
    }

    
   
    const tasksForCount = tasks.length
    

    const [task, setTask] = useState("")
    
    function TaskFinish (id: string){
         // Faz um map de todas as tasks, para criar um novo array
    const editedCompletedTask = tasks.map(task => {
        // Caso o ID da task seja igual ao id clicado:
        if (task.id === id) {
            // Retorna todos os itens da task, mas invertemos o valor do isCompleted
            return {
                ...task,
                isCompleted: !task.isCompleted
            }
        }

        return task // Caso não entre no if, retorne sem fazer alterações
    })

    setTasks(editedCompletedTask)

    }

    const completedTasks = tasks.filter(task => task.isCompleted).length

     

   return( 
        <div>
            
            <form onSubmit={ handleCreateNewComment } className={style.tasker}>
            <input type='text'
            name="comment" 
            placeholder="Adicione uma nova tarefa"
            value={newCommentText}
            onChange={handleNewCommentChange}
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
            onDeleteComment={ deleteComment }
            isCompleted={task.isCompleted}
            handleChangeCompletion={TaskFinish}
            />
            
            )
            })}

        </div>



        </div>
    
        
    )
}
