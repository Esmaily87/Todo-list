import style from './Tasker.module.css'
import { PlusCircle } from 'phosphor-react';
import { TaskList } from './TaskList';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';


export function Tasker(){

    const [comments, setComments ]= useState([
        ''//perguntar com solucionar isso sem gerar um novo post e sem a necessidade de usar firstchild no css.
        
    ] )
    
    const [newCommentText, setNewCommentText] = useState('')
  
    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newCommentText]);
        /*const contarTarefas = new Array(comments.length).fill(true)
        console.log(contarTarefas)*/
       
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

    /*function getCheck(checkTocheck: boolean) {
      const checkOne = comments.filter(comment => {
          return comment !== commentToDelete;
      })
       setComments(commentsWithOutDeletedOne);
  }*/

    
   
    const commentsForCount = comments.length -1

    const contarTarefas = new Array(comments.length).fill(true)
        console.log(contarTarefas)

   
    //comments.filter(task => task.isComplete).length


    function commentsFinish (){
      return true
    }

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
                    <div className={ style.countertasksends }>{}</div>                
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
            isComplete={commentsFinish}
            //isComplete={getCheck}
           
            
            />
            
            )
            })}

        </div>



        </div>
    
        
    )
}
