import React, { useState } from 'react'
import StylePage from './Pag-style'
import Data from '../../data/data.json'
export const Pagination = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [first, setFirst] = useState(1)
    const maxByPage = 10
    const [next, setNext] = useState(maxByPage)
    // const [Items, setItems] = useState(0)


    const GoNext = () =>{

        if( next >= Data.length){
            return
        }

        console.log("Max", next);
        console.log("Min", first);

            setNext(next + maxByPage)
            setFirst(first + maxByPage)
            setCurrentPage( currentPage + 1 )
        

        
    }


    const GoPrev = () =>{
        
        
        if(first > 1){
            setNext(next - maxByPage)
            setFirst(first - maxByPage)
            setCurrentPage(currentPage - 1)

            console.log("Max", next);
            console.log("Min", first);
        }
        
    }

    const goHere = (event) =>{
        let target = event.target.innerText

        if(target !== 1){
            console.log("Inicio - ", maxByPage * (target-1) + 1);
            setFirst(maxByPage * (target-1) + 1 )
            setNext((maxByPage * (target-1) + 1) + maxByPage - 1);
            // setNext("Fim - ", (maxByPage * (target-1) + 1) + maxByPage - 1);
            setCurrentPage(parseInt( target) )
        }else{
            setFirst(1)
            setNext(maxByPage)
            setCurrentPage(target)
        }
        
        

    }

    return (
        <>
            <StylePage>
                <main>
                    {Data.map((item)=>{
                        return item.id <= next && item.id >= first? <section key={item.id}>{item.nome}<br/> {item.id}</section> : ''        
                    })}

                </main>
                <br />
                    <hr />                 
                        <div className="specific-page">
                            <button onClick={goHere}>1</button>
                            <button onClick={goHere}>2</button>
                            <button onClick={goHere}>3</button>
                            <button onClick={goHere}>4</button>
                            <button onClick={goHere}>5</button>
                        </div>
                    <div className="btn-nav">
                        <button onClick={GoPrev} >Prev</button>
                        <h1>{currentPage}/{Math.ceil(Data.length/maxByPage )}</h1>
                        <button onClick={GoNext} >Next</button>
                    </div>

            </StylePage>
        </>
    )
}
