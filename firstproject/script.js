document.getElementById('mode-btn').addEventListener('click' , () => {
document.body.classList.toggle('dark')
});





const form=document.querySelector('.yasHesaplama');
const username=document.querySelector('#username');






 const button=document.querySelector('button');
 const mainPopup=document.querySelector('.main-popup');
 const close=document.querySelector('.popup-close');


 button.addEventListener('click' ,()=>{
    mainPopup.style.display='block';

 })

 close.addEventListener('click' ,()=>{
    mainPopup.style.display='none';

 })


 