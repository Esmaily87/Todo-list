import style from './Tasker.module.css'
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './TaskList';
import { FormEvent, useState, ChangeEvent, InvalidEvent, HTMLInputTypeAttribute } from 'react';


export function Tasker(){

    const [comments, setComments ]= useState([
        ''//perguntar com solucionar isso sem gerar um novo post e sem a necessidade de usar firstchild no css.
        
    ] )
    
    const [newCommentText, setNewCommentText] = useState('')
  
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        setNewCommentText('');
       
               
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLInputElement> ) {
        event.target.setCustomValidity('');
       setNewCommentText(event.target.value);
      
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithOutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
         setComments(commentsWithOutDeletedOne);
    }

    
   
    const commentsForCount = comments.length -1
    

    const [task, setTask] = useState("")
    
    function TaskFinish (checked: Boolean){
        const setmyTask = checked;
        setTask(setmyTask.toString())
        const contarTarefas = new Array(setTask.length).fill(setmyTask)
        console.log(contarTarefas)
        console.log(setmyTask)
        return setmyTask

    }

    /*const [task, setTask] = useState(Boolean)

    function TaskFinish (checked: HTMLInputElement){
        const setmyTask = checked;
        setTask(setmyTask)
        const contarTarefas = new Array(setTask.length).fill(task)
        console.log(contarTarefas)
        console.log(setmyTask)
        return setmyTask

    }*/

    /*const [task, setTask] = useState([Boolean])
    function TaskFinish (event: HTMLInputElement){
        const setmyTask = event
        setTask(setmyTask)
       
        
        console.log(setTask)
        return setTask

    }*/
   

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
                    <div className={ style.countertasks }>{commentsForCount}</div>
                    </div>

                    <div  className={ style.tasksendeds }>
                    Concluídas
                    <div className={ style.countertasksends }>{task}</div>                
                    </div>

               

                </div>
            </div>
        

        <div className={ style.tasklist }>
        {comments.map(comment =>{
            return(
            <TaskList
            key={comment}
            content={comment}
            onDeleteComment={ deleteComment }
            isComplete={TaskFinish}
            />
            
            )
            })}

        </div>



        </div>
    
        
    )
}
