const Spans = document.querySelector('.Spans')
const images = document.querySelectorAll('.Main>figure>img')


for(let i = 0; i<images.length; i++){
    let span = document.createElement('span')
    span.classList.add('Btn')
    Spans.appendChild(span)
}


let Btnslide = document.querySelectorAll('.Spans>span')
Btnslide.forEach((btn,Index)=>{
    Btnslide[0].classList.add('active')
    btn.addEventListener('click',()=>{
        let Isalready = btn.classList.contains('active')
        Btnslide.forEach((span)=> span.classList.remove('active'))
        if(!Isalready){
            btn.classList.add('active')
        }
    })
})