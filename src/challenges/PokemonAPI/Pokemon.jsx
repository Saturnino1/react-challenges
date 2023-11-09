import axios from "axios";

import React, { useEffect, useState } from 'react'
import { Style } from "./pokemonStyle";
import { Details } from "./details";

export const Pokemon = () => {
    const [data, setData] = useState([]);
    // let data2 = [{id:0,name:"David"},{id:1,name:"Jane"},{id:2,name:"Zeza"},{id:3,name:"Ana"},{id:4,name:"Patrick"}]
   
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=20')
        .then((res)=>{
            setData(res.data.results);
        })
    },[])  


  return (
    <Style>
        <h1> Pokemon List </h1>
        <main>
        {data.sort((x,y)=>{
          
            return x.name.localeCompare(y.name) ;  // locale.Compare-- retorna 1 caso for maior, -1 caso for menor e 0 quando igual
        }).map((da)=>{
           return(
              <>
                <span className="dados" key={da.name}>  <Details url= {da.url} pedido= "imagem" />  <hr /> <h3>{da.name}</h3>  <hr /> <Details url= {da.url} pedido= "esperencia" /> </span>
                {/* <hr /> */}
              </>

)
})}

        </main>
    </Style>
  )
}
































// import '../../App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { Details } from './details';
// import {PokeStyle} from './pokemonStyle'

// export const Pokemon = () => {
//     const [Data,setData] = useState([])
  
//     useEffect(()=>{
//       axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=8')
//       .then(item => setData(item.data.results))
//     },[])
    

//     // console.log(power);
  
//     return (
//       <PokeStyle >
//         <header>
//           <h1>Pokemon API</h1>
//           <hr/>
//         </header>
//           {/* {console.log(Data) } */}
//           <main>
//           {Data.length!==0? Data.map((item, index)=>{
               
//               return(
//                 <>
//                   <div key={item.name}>
//                      <span key={item.name}> <Details request="img" url = {item.url}  /> <strong>{item.name}</strong> <i>{ <Details request="experience" url = {item.url}/>  }</i>  </span>
//                   </div>
//                 </>
//                )
  
//               }) : ()=> { return <span>Nada</span> }   }  
//           </main>  
  
//       </PokeStyle>
//     );
// }
