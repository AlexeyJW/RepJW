<script>
  import MdSend from 'svelte-icons/md/MdSend.svelte'  
  import {createEventDispatcher} from 'svelte'
  export let label
 
  const dispatch=createEventDispatcher()
  function clickButton(){
    dispatch('message',{text:'www'})

  }
</script>
<style>
    
    .button{
        border:1px solid lightgreen;
        color:#7ff88b;
        background-color: rgb(244, 242, 226);
        width:70px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-self: center;
        padding: 5px;
        margin: 5px;
    }
    .text:nth-of-type(1){
        flex:1 35px;
        align-self:center;
    }
    .icon:nth-of-type(2){
        flex:2 32px;
        align-self: center;
        /* width:32px;
        height: 32px; */
    }
</style>
<div class="button" on:click="{clickButton}"> 
    <div class="text">
        {label}
    </div>
    <div class="icon">
        <MdSend/>
    </div> 

</div>