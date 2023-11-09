import { styled } from "styled-components";



export const HeaderStyle = styled.header`
    width: 100%;
    padding: 10px;
    background-color: #333;
    display: flex;
    flex-direction: column;

    nav{
        display: flex;
        justify-content: space-between;

    }
    ul{
        display: flex;
        list-style: none;
        gap: 10px;
        margin-top: 5px;
    }

    nav > ul > li > a{
        color: #fff;
        text-decoration: none;
        padding: 8px;
        /* font-weight: bold; */
    }

    nav > ul > li > a:hover{
        
        background-color: #555;
    }

`