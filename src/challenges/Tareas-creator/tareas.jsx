import React, { useState } from 'react'
import TareaStyle from './tareas-style';

export const Tareas = () => {
  
  const [tarea,setTarea] = useState([
    {id:'0',texto:['estudar','brincar'] },
    {id: '1', titulo: "Doing", texto: ['Criar CV'] },
    {id: '2', titulo: "To do", texto: ['Estudar React','123'] }  
  ])
  // const [cardId, setCardId] = useState()
 
  const crearTarea = (event) => {
    let newData = tarea.map(prevT => {
          if (prevT.id === event.target.value) {
            return {
              ...prevT,
              texto: [...prevT.texto,'ADD-tarea' ]
            }
          }
          return prevT
      })
      setTarea(newData)
      // console.log(tarea)
  }
  const deleteTarea = (event) => {
    let id = parseInt( event.target.value )-1
    let newData = tarea.map(prevT => {
          if (prevT.id === event.target.value) {
            return {
              ...prevT,
              texto: prevT.texto 
            }
          }
          return prevT
      })
      setTarea(newData)
      console.log(id)
  }



  return ( 
    <TareaStyle>

      {/* ========== Card - 3 =============== */}
      <div className="linha">
              {tarea.map((item)=>{
                let count = 0;
                return(
                    <div className="card" >
                      <div className="card-head">
                        <h3>{item.titulo}</h3>
                      </div>
                      {item.texto.map(element => {
                      count++;
                        return (
                          <div id='span'>
                              <p>{element}</p>
                              <div className="operacao">
                                <button className='btn-duo' id='btn12' value ={item.id} type="button">edit</button>
                                <button className='btn-duo' value={count} onClick={deleteTarea}>del</button>
                              </div>
                          </div>
                        ) 
                      }) }
                      
                      <button id='btnAdd' value={item.id} onClick={crearTarea}>Adicionar uma nova tarefa</button>
                    </div>
                )
                count = 0;
              })}
        </div>
 
      {/* console.clear() */}
      
    </TareaStyle>

  )
}
