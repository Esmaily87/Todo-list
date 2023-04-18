import style from './TaskList.module.css'
import { Check, ListChecks, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';



interface TaskProps {
    key: string;
    content: string;
    onDeleteComment: (comment: string) => void;
    isComplete: (comment: Boolean) => void;
  
}

export function TaskList({content, onDeleteComment, isComplete}:TaskProps){
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    
    
    const [isChecked, setIsChecked] = useState(Boolean);
    
    

    function handleOnChange(){
       
       setIsChecked(!isChecked);

       isComplete(isChecked)
       
       console.log(isChecked)

       
       
      
       
    }

    
    

    
    
    return (
      
        <span>
            
            <div className={ style.todo }>

           

                ​​<label className={style.container}>
                
                <input 
                type="checkbox" 
                className={style.checkmark}
                checked={isChecked}
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