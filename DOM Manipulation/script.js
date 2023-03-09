// usage of query selector

// const heading=document.querySelector('h1')
// heading.innerHTML="Changes new heading"

// const para=document.querySelector('p')
// para.innerHTML="new para"

// const idd=document.querySelector('.cont')
// idd.style.border="2px solid green"

// const clss=document.querySelector('#cont1')
// clss.style.backgroundColor="blue"

// 1st div only take the styling part if we have two or more div
// const divLocation=document.querySelectorAll('div')
// divLocation.style.border="5px solid violet"

//if we want to select all div use querySelectorAll
//querySelectorAll hold the value of Array

// console.log(divLocation) //see if its return array
// divLocation.forEach((val)=>{
//     val.style.border="2px solid yellow"}
//     )

//if we want to apply style for the FIRST DIV ONLY using QUERYSELECTORALL use index
// divLocation[0].style.border="5px solid orange"


//Attribute field
// const inputt=document.querySelector('input')
//  inputt.type='text'



//adding and removing element
// const contains=document.querySelector('.box')
// //column wise
// contains.style.display='flex'
// contains.style.flexDirection='column'
// const buttonn=document.querySelector('button')




// const head1=document.createElement('h5')
// head1.innerHTML='im new heading'

//putting h1 tag into container
// contains.appendChild(head1)

// const inp=document.createElement('input')
// inp.type='email'
// contains.appendChild(inp)

// function create()
// {
//   const inputs=document.createElement('input')
//   inputs.type='text'

//   contains.appendChild(inputs)
// }

// function inputData(){
//  console.log("content changed")
// }
// const containerr=document.querySelector('.container')
// function hide(){
// containerr.classList.add('hide')
// containerr.classList.remove('show')
// }

// function show(){
// containerr.classList.add('show')
// containerr.classList.remove('hide')
// }

//toggle method --adding and removing simultaneously
const containerr=document.querySelector('.container')
function hide(){
 containerr.classList.add('hide')
}

function show(){
    containerr.classList.add('show')
}

