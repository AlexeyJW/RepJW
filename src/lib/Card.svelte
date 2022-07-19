<script>
    
    // import {createEventDispatcher} from 'svelte'
    // const dispatch=createEventDispatcher()
    export let title;
    // function innerButton(event){
    //     console.log('button click '+event.detail.text)
    //     console.log($$slots)
    //     dispatch('clickCard',{text:'v'})

    // }

</script>
<style>
    .card{
        border: 1px solid black;
        width:380px;
        height: 310px;
        margin: 10px;
        padding: 5px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* justify-content: center; */
    }
    /* .button:nth-of-type(2){
        flex:2;
        align-self: flex-end;
        justify-self: flex-end;

    } */
    .title{
        
        width: 100%;
        height: 50px;
        background-color: #7ff88b;
        align-self:flex-start;
        justify-self: flex-start;
    }
    .content{
        width:100%;
        height:200px;
        padding: 5px;
    
    }
    /* .button{
        position: relative;
        top:5px;
        left: 290px;
    } */
</style>
<div class="card"> 
    <div class="title">
        {title}
    </div>
    <div class="content">
        <slot></slot>
    </div>
    
</div>