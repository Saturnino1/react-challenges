import styled from 'styled-components' 

const TareaStyle = styled.div`
   background-color: #aaaf;
   height: 100%vh;
   width: 100%;
   padding: 2em;

   .linha{
      display: flex;
      align-items: flex-start;
      gap: 10px;
      flex-wrap: wrap;
   }

   .card{
    background-color: #eee;
    color: #000;
    width: 290px;
    min-height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
   /* justify-content: stretch; */
    gap: 8px;
    padding-top: 8px;
    padding-bottom: 3em;
    position: relative;
    border-radius: 1em;
   }

   #btnAdd{
      border: none;
      position: absolute;
      bottom: 8px;
      font-size: 12pt;
      cursor: pointer;
   }
   .card > #btnAdd:hover{
      color: rgba(0,0,0,.5);
      text-decoration: underline;
   }

   .card .card-head{
      /* background-color: blue; */
      width: 90%;
      display: flex;
      justify-content: center;
   }

   .card .card-head{
      font-family: arial;
   }

   .card > #span {
      background-color: #333;
      width: 90%;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      border-radius: 0.5em;
   }
   .card > #span > p{
      width: 70%;
   /* background-color: blue; */
      color: white;
   }
   .card > #span > .operacao{
      /* background-color: red; */
      /* width: 30px; */
      display: flex;
      align-items: center;

      gap: 5px;
   }
   .card > #span > .operacao > .btn-duo{
      height: 30px;
      width: 35px;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      text-align: center;
   }

   /* #btnAdd{
      position: absolute;
      bottom: 10px;
      border:none;
   } */
`

export default TareaStyle

