<script>
    import Button from '../lib/Button.svelte'
    import {family} from '../store/family'

    let familyValue
    family.subscribe(value=>{
        familyValue=value
    })
    function innerButton(event){
    console.log('On connect')
   }
 </script>
 <style>
     .inputFamily{
        display: flex;
        flex-direction: column;
        padding: 5px;

     }
     .family{
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        padding: 2px;
             }
     input{
         max-width:40px;
     }
     label{
         /* justify-self: flex-start;
         */
         font-weight: 100;
         line-height: 1.1;
     }
     .buttonCard{
        margin-top: 40px;
        justify-self: flex-end;
        align-self: flex-end;
    
     }
 </style>
      <div class="inputFamily">
         <div class="family"><label for="leave">Выехали из тер. собрания за весь период: <input type="number" name="" id="leave" bind:value={familyValue.leave}></label></div>
         <div class="family"><label for="leaveStateBorder">Из них за границу: <input type="number" name="" id="leaveStateBorder" bind:value={familyValue.leaveStateBorder}></label></div>
         <div class="family"><label for="returnCongr">Вернулись на тер. своего собрания: <input type="number" name="" id="returnCongr" bind:value={familyValue.returnCong}></label></div>
         <div class="family"><label for="returnStateBorder">Из них из-за границы: <input type="number" name="" id="returnStateBorder" bind:value={familyValue.returnStateBorder}></label></div>
         <div class="family"><label for="wounded">Ранены: <input type="number" name="" id="wounded" bind:value={familyValue.wounded}></label></div>
         <div class="family"><label for="perished">Погибли: <input type="number" name="" id="perished" bind:value={familyValue.perished}></label></div>
     
     <div class="buttonCard">
        <Button on:message={innerButton} label='Send'/>
      </div>
    </div>