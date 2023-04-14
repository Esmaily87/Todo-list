import style from './TaskList.module.css'
import { Check, ListChecks, Trash, TrashSimple } from 'phosphor-react';
import { useState } from 'react';



interface TaskProps {
    content: string;
    onDeleteComment: (comment: string) => void;
    onHandleLiked: (LikeCount: number) => 0;
    setIsChecked: (insChecked: boolean)=>false
    
  
    
}

export function TaskList({content, onDeleteComment, onHandleLiked, setIsChecked}:TaskProps){
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    
    
    const [isChecked, IsChecked] = useState(false);
    
     

    const [likeCount] = useState(0); 

    function handleLikeCount(){
       onHandleLiked(likeCount)
       IsChecked(!isChecked);
      
           
    }

    /*function handleChangeCheck(){//Não está em uso
        IsChecked(!isChecked);
    }*/

   


    

  
    
    
   
    return (
      
        <span>
            
             

            {/*<div className={ style.todolist }>
            <ListChecks size={56} />
                <div id='todoempty' className={ style.todoempty }>Você ainda não tem tarefas cadastradas </div>
                <div id='todoempty'className={ style.todoempty_2 }>Crie tarefas e organize itens a fazer</div>
            </div> */}
            
            <div className={ style.todo }>

           

                ​​<label className={style.container}>
                
                <input 
                type="checkbox" 
                className={style.checkmark}
                checked={isChecked}
                onChange={handleLikeCount}
                value={1}
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