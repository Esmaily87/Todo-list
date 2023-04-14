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
        const contarTarefas = new Array(comments.length).fill(true)
        console.log(contarTarefas)
       
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

    const [checkTask, setCheckTask] = useState(0);
       function taskMonitor(){

            setCheckTask((checkTask) => {
            
            return checkTask = 1
        });
    }

   
    const commentsForCount = comments.length -1
    //const isNewCommentInputEmpty = newCommentText.length === 0;

   // const [isChecked, setIsChecked] = useState(false);

    /*const handleOnChange = () => {
      setIsChecked(!isChecked);
    };*/

    /*const [checkedState, setCheckedState] = useState(
        new Array(toppings.length).fill(false)
    );*/

    const [checkedState, setCheckedState] = useState(
        //new Array(comments.length).fill(false)
        
      );
    /*function countTrue(){
        setCheckedState((checkedState) => 
        {
            return checkedState = new Array(comments.length).fill(false)
        });
    }*/
    //const contarTarefas = new Array(comments.length).fill(true)
    
    
      /*const [total, setTotal] = useState(0);
    
      const handleOnChange = (position: number) => {// alterado position para number
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    
        const totalPrice = updatedCheckedState.reduce(
          (sum, currentState, index) => {
            if (currentState === true) {
              return sum + comments[index];
            }
            return sum;
          },
          0
        );
    
        setTotal(totalPrice);
        
      };*/
      
    





    




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
                    <div className={ style.countertasksends }>{checkTask}</div>                
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
            onHandleLiked={taskMonitor}
            //setIsChecked={taskChecker}
            
            />
            
            )
            })}

        </div>



       { /*<h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
    </ul> */}
        </div>
    
        
    )
}
