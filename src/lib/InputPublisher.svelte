<script>
import Button from "./Button.svelte";
import {publisher} from '../store/publisher'

   let publisherValue
   publisher.subscribe(value=>{
     publisherValue=value
     console.log('publisherValue',publisherValue)
   })

   function innerButton(event){
    console.log('On connect')
   }
</script>
<style>
    .inputPublisher{
        display: flex;
        flex-direction: column;
        padding: 5px;
    }
    .publisher{
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        padding: 2px;
        
    }
    input{
        width:40px;
    }
    label{
        font-weight: 100;
        line-height: 1.1;
    
    }
  .buttonCard{
        
        align-self: flex-end;
    }
</style>
     <div class="inputPublisher">
        <div class="publisher"><label for="noConnection">Не вышли на связь: <input type="number" name="" id="noConnection" bind:value="{publisherValue.noConnect}"></label></div>
        <div class="publisher"><label for="leave">Выехали из тер.собрания за весь период: <input type="number" name="" id="leave" bind:value={publisherValue.leave}></label></div>
        <div class="publisher"><label for="leaveStateBorder">Из них за границу: <input type="number" name="" id="leaveStateBorder" bind:value={publisherValue.leaveStateBorder}></label></div>
        <div class="publisher"><label for="returnCongr">Вернулись на тер. своего собрания: <input type="number" name="" id="returnCongr" bind:value={publisherValue.returnCong}></label></div>
        <div class="publisher"><label for="returnStateBorder">Из них из-за границы: <input type="number" name="" id="returnStateBorder" bind:value={publisherValue.returnStateBorder}></label></div>
        <div class="publisher"><label for="movedCongregation">Перешли в другие собрания: <input type="number" name="" id="movedCongregation" bind:value={publisherValue.movedCongregation}></label></div>
        <div class="publisher"><label for="wounded">Ранены: <input type="number" name="" id="wounded" bind:value={publisherValue.wounded}></label></div>
        <div class="publisher"><label for="perished">Погибли: <input type="number" name="" id="perished" bind:value={publisherValue.perished}></label></div>
      <div class="buttonCard">
        <Button on:message={innerButton} label='Send'/>
      </div>
        
    </div>