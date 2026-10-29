// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test
const form=document.querySelector('#card-form')
const inpts=document.querySelectorAll('.inpt')
const avatar=document.querySelector('#avatar')
const bioLeft=document.querySelector('#bio-left')
let original={}
for(let i of inpts){
   let carId='card-'+i.id.split('-')[0]   
   original[i.id]=document.getElementById(carId).innerHTML;
   
}
console.log(original);

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty
form.addEventListener('input',(e)=>{
    let type=e.target.id.split('-')[0]
    let item=document.getElementById('card-'+type)
    console.log(item);
    if(item==null)
        return;
    if(e.target.value.trim()!=='')
    item.innerHTML=e.target.value.trim() ;
else{
     item.innerHTML=original[e.target.id]
     
}
//2
if(type==='name'&&e.target.value.trim()!=''){
avatar.innerHTML=item.innerHTML[0].trim().toUpperCase()
}
else{
    avatar.innerHTML='?'
}
//3
if(type==="bio"){
    if(e.target.value.trim()!=''){
    let left=80-e.target.value.length
    bioLeft.innerHTML=left
    
        document.querySelector('.counter').classList.toggle('warning',left<=10)
}
    else
      bioLeft.innerHTML=80
}


// avatar.innerHTML=type==='name'&&item.innerHTML.trim()!=undefined?item.innerHTML[0].toUpperCase():'?'
})
// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)
// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)
  const selectColor=document.querySelector('#color-select')
  selectColor.addEventListener('change',(e)=>{
let color=e.target.value 
avatar.style.backgroundColor=color
document.querySelector('.card').style.border=`4px solid ${color}` 

  })
// Step 5: dark mode button
const btnMode=document.querySelector('#theme-btn')
const body=document.querySelector('body')
btnMode.addEventListener('click',changeMode)
// Step 6: reset button
function changeMode(){
    
  body.classList.toggle('dark')
if (body.classList.contains('dark')) {
   btnMode.textContent = 'Light mode';
} else {
    btnMode.textContent = 'Dark mode';
}

}
const btnReset=document.querySelector('#reset-btn')
btnReset.addEventListener('click',(e)=>{
form.reset()
if (body.classList.contains('dark')) 
    changeMode()
for(let i of inpts){
   
     let cardId='card-'+i.id.split('-')[0]   
   document.getElementById(cardId).innerHTML=original[i.id]
   
   
}
bioLeft.innerHTML='80'
avatar.innerHTML='?'
if(document.querySelector('.counter').classList.contains('warning'))
    document.querySelector('.counter').classList.remove('warning')
selectColor.value='#4f46e5'
avatar.style.backgroundColor = selectColor.value;
document.querySelector('.card').style.border=`4px solid ${selectColor.value}` 


})

//
