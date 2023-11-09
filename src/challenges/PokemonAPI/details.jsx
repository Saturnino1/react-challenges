import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import './estilo-det.css'


export const Details = (reques) => {
    const [data, setData] = useState([]);
    // let ur = reques.url

    useEffect(()=>{
        axios.get(reques.url)
        .then(res=>{
            setData(res.data)
            // console.log(res.data.sprites.front_default );
        })
    },[reques.url])
    // let link = data.sprites.front_default ;
    if(data.length === 0){
        return <p>.....</p>
    }
    if (reques.pedido === "imagem") {
        // console.log(data);
        return(
            // <Style>
                // <p>444</p>
                // <p>{ data.sprites.front_default }</p>
                <img className='pakePerfil' src={ data.sprites.front_default }  alt='foto do Pokemon' />
            //  </Style>
        )
    }if(reques.pedido === "esperencia"){
        return <p>{data.base_experience}</p>
    }
   

}



































// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// export const Details = (props) => {
//     const [detail,setDetail] = useState([])

//     useEffect(()=>{
//         // const Push = async () =>{
//             // let data = await 
//             axios.get(props.url)
//             // .then(response => response.data )
//             .then(response => setDetail(response.data) )
//             // setDetail(data)
//         // }
//         // Push()
//         // console.log(detail.);
//     },[detail])

//     if(props.request === "experience") {
//         if(detail.length === 0){
//             return <p>......</p>
//         }
//         return (
//         <div>{detail.base_experience }</div>
//         )
//     }if(props.request === "img"){
//         if(detail.length === 0){
//             return <p>......</p>
//         }
//         return(
//             <div><img src={detail.sprites.front_default} alt="Pokemon_img" /></div>
//         )
//     }
// //   return <p>{props}</p> 
// }
