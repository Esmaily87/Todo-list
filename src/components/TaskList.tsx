import style from './TaskList.module.css'
import { Check, ListChecks, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';
import { useEffect } from 'react';



interface TaskProps {
    key: string;
    id: string;
    content: string;
    onDeleteTask: (comment: string) => void;
    isCompleted: boolean;
    handleChangeCompletion: (id: string) => void;
    handleLineThrough: (id: string) => void;
    
    
  
}

export function TaskList({id, content, onDeleteTask, isCompleted, handleChangeCompletion, handleLineThrough}:TaskProps){
    
    function handleDeleteComment(){
        onDeleteTask(id);
    }

    function handleOnChange(){
       
       handleChangeCompletion(id);

       handleLineThrough(id)
       
       if(isCompleted == false){
        document.documentElement.style.setProperty('--taxado', 'line-through');
         }else if(isCompleted ==true){
        document.documentElement.style.setProperty('--taxado', 'none');
         }

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

                             
                <p className={style.cortar}>{ content }</p>
                <div className={style.trash}>
                 <button onClick={handleDeleteComment} title="Deletar comentário" >
                        <Trash size={24} />
                    </button>
                </div>
                
            </div>

            


        </span>
       
       
    )
}