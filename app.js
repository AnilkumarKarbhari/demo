const myinput=document.querySelector('input');
const btn=document.querySelector('#mybutton');
// myinput.addEventListener('keyup',(e)=>{
//     console.log(e.target.value);
// })
btn.addEventListener('click',()=>{
    alert(myinput.value);
    const spn=document.createElement('span');
    spn.textContent=myinput.value;
    const div=document.querySelector('#result');
    div.appendChild(spn);



});

const actors=[

    {
        name:"vijay"
    },
    {
        name:"anil"
    },{
        name:"rajanikanth"
    }
];
const ulel=document.createElement('ul');


const div=document.querySelector('#result');
function renderList(list){
    div.innerHTML='';
    list.forEach(user=>{
    var li=document.createElement('li');
    li.textContent=user.name;
    ulel.appendChild(li);

});

div.appendChild(ulel);
 
}
btn.addEventListener('click',()=>{
    var newlist = actors.filter(u => u.name.includes('h'))
renderList(newlist);
});


