let imagesEls = document.getElementsByClassName('panel');
for(let i =0; i<imagesEls.length; i++){
    imagesEls[i].addEventListener('click',toggleImage);
};
function toggleImage (){
    this.classList.toggle('open');
    this.classList.toggle('open-active');
    
};
