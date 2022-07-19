<script>
    import {logIn,getDocPublisher} from '../db'
    import {createEventDispatcher} from 'svelte'

    const dispatch=createEventDispatcher()
    const auth=(access)=>{
        dispatch('login',{text:access})
    }

   async function Login (){
        await logIn()
        auth('true')

    }

</script>
<style>
    .login{
        width: 300px;
        height: 200px;
        background-color: lightgrey;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .button{
        border: 1px solid lightgreen;
        align-self: center;
        text-align: center;
    
        width: 100px;
        height: 60px;
        background-color:white;
    }
    .text{
        margin: 20%;
    }
</style>
<div class="login">
    <div on:click={Login} class="button">
        <div class="text">
            GOOGLE
        </div>
    
    </div>
</div>