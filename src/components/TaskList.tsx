import style from './TaskList.module.css'
import { Trash} from 'phosphor-react';




interface TaskProps {
    key: string;
    id: string;
    content: string;
    onDeleteTask: (comment: string) => void;
    isCompleted: boolean;
    handleChangeCompletion: (id: string) => void;
   
    
    
  
}

export function TaskList({id, content, onDeleteTask, isCompleted, handleChangeCompletion}:TaskProps){
    
    function handleDeleteComment(){
        onDeleteTask(id);
    }

    function handleOnChange(){
       
       handleChangeCompletion(id);

      
       
       
    }

    const lineClass = `${isCompleted ? style.checked  : ''}`


    return (
      
        <span>
            
            <div className={ style.todo }>

                ​​<label className={style.container}>
                
                <input 
                type="checkbox" 
                className={style.checkmark}
                checked={isCompleted}
                onChange={handleOnChange}
                
                
                />
                <span className={style.checkmark}></span>
                </label>

                             
                <p className={lineClass}>{ content }</p>
                <div className={style.trash}>
                 <button onClick={handleDeleteComment} title="Deletar comentário" >
                        <Trash size={24} />
                    </button>
                </div>
                
            </div>

            


        </span>
       
       
    )
}