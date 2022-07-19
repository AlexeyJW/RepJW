<script>
    let destroyed;
    let heavilyDamaged;
    let slightlyDamaged;
    
 </script>
 <style>
     .inputhouse{
         /* display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: flex-start;
         flex-wrap: nowrap; */
         padding: 5px;
     }
     .house{
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
      <div class="inputhouse">
         <div class="house"><label for="destroyed">Разрушено:  <input type="number" name="" id="destroyed"></label></div>
         <div class="house"><label for="heavilyDamaged">Сильно повреждено: <input type="number" name="" id="heavilyDamaged"></label></div>
         <div class="house"><label for="slightlyDamaged">Незначительно повреждено: <input type="number" name="" id="slightlyDamaged"></label></div>
       
     </div>