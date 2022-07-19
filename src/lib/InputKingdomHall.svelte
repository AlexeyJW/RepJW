<script>
    let destroyed;
    let heavilyDamaged;
    let slightlyDamaged;
    
 </script>
 <style>
     .inputkingdomhall{
         /* display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
         flex-wrap: nowrap; */
         padding: 5px;
     }
     .kingdomhall{
        display: flex;
        flex-direction: row;
        justify-content:flex-end;
        padding: 2px;
             }
     input{
         /* align-self: flex-end;
         justify-self:flex-end; */
         max-width:40px;
     }
     label{
         /* justify-self: flex-start;
         */
         font-weight: 100;
         line-height: 1.1;
     }
 </style>
      <div class="inputkingdomhall">
         <div class="kingdomhall"><label for="destroyed">Разрушено:  <input type="number" name="" id="destroyed"></label></div>
         <div class="kingdomhall"><label for="heavilyDamaged">Сильно повреждено: <input type="number" name="" id="heavilyDamaged"></label></div>
         <div class="kingdomhall"><label for="slightlyDamaged">Незначительно повреждено: <input type="number" name="" id="slightlyDamaged"></label></div>
       
     </div>