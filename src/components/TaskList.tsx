import style from './TaskList.module.css'
import { Check, ListChecks, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';



interface TaskProps {
    key: string;
    id: string;
    content: string;
    onDeleteComment: (comment: string) => void;
    isCompleted: boolean;
    handleChangeCompletion: (id: string) => void;
  
}

export function TaskList({id, content, onDeleteComment, isCompleted, handleChangeCompletion}:TaskProps){
    
    function handleDeleteComment(){
        onDeleteComment(id);
    }

    
    
    //const [isChecked, setIsChecked] = useState(Boolean);
    
    

    function handleOnChange(){
       
       handleChangeCompletion(id)
      
       
    }

    
    

    
    
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

               
                <p>{ content }</p>
                <div className={style.trash}>
                 <button onClick={handleDeleteComment} title="Deletar comentário" >
                        <Trash size={24} />
                    </button>
                </div>
                
            </div>

            


        </span>
       
       
    )
}