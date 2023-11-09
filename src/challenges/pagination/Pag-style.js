import styled from "styled-components";

const StylePage = styled.div`
    color:black;
    padding: 2em;

    main{
        display: flex;
        min-height: 16em;
        flex-wrap: wrap;
        gap: 1em;
        border: 1px solid;
        padding: .7em;
    }

    section{
        width: 9em;
        height: 6em;
        background-color: white;
        border-radius: .4em;
        text-align: center;
        padding-top: .5em;
    }

    .specific-page{
        width:100%;
        display:flex;
        justify-content: center;
        gap: .5em;
        margin-bottom: .7em;
    }
    
    .specific-page button{
        padding-right: 1em;
        padding-left: 1em;
        padding-top: .5em;
        padding-bottom: .5em;
    }

    .btn-nav{
        background-color: #123;
        width: 100%;
        /* margin-top: 2em; */
        display: flex;
        justify-content: center;
        gap: 2em;
        padding: 0.7em;
    }
    .btn-nav > button{
        padding: 1em;
        width: 5em;
    }

    



`

export default StylePage