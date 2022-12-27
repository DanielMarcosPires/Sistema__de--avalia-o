const start = document.querySelector('.start')
function elementos(){
   return (
      `
      <ul class="change__list">
         <li class="change__item" value="1">
         <i class="fa-solid fa-star"></i>
         </li>
         <li class="change__item" value="2">
         <i class="fa-solid fa-star"></i>
         </li>
         <li class="change__item" value="3">
         <i class="fa-solid fa-star"></i>
         </li>
         <li class="change__item" value="4">
         <i class="fa-solid fa-star"></i>
         </li>
         <li class="change__item" value="5">
         <i class="fa-solid fa-star"></i>
         </li>
      </ul>
      `
   )
}
const lista = document.querySelectorAll('.change__item')

start.addEventListener('click',()=>{
   let change = document.querySelector('.change__list')
  
   change.innerHTML = elementos()
   
   select()
})


function select(){
   const item = document.querySelectorAll('.change__item')
   for(i = 0; i < item.length;i++){
    item[i].addEventListener('click',(e)=>{
      for(let j = 0; j < e.target.value; j++){
         item[j].classList.add("change__item--ativo") 
      }
      for(let k = e.target.value; k < item.length;k++){
         item[k].classList.remove("change__item--ativo") 
      }
   })
   }
}

const submit = document.querySelector('.submit')

submit.addEventListener('click',(e)=>{
   const item = document.querySelectorAll('.change__item--ativo')
   const verificador = document.querySelector(".finish")
   for(let k = e.target.value; k < item.length;k++){
        verificador.innerHTML = `
        <header class="confirm__header">
           <img class="confirmHeader__img" src='../assets/images/illustration-thank-you.svg'>
           <p class="confirmHeader__text">You selected <strong>${k+1} out of 5</strong></p>
        </header>    
        <section class="confirm__section">     
        <h2 class="confirmSection__title">Thank you!</h2>
        <p class="confirmSection__text">
           We appreciate you taking the time to give a rating. If you ever need more support,
           don’t hesitate to get in touch!
        </p>
        </section>
        `
   }
})