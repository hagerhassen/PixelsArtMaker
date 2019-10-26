const table=
{

  height: document.querySelector('#inputHeight'),

  width: document.querySelector('#inputWidth'),
 
 self: document.querySelector('#pixelCanvas')

}


const submit= document.querySelector("input[type='submit']");

const picker=document.querySelector("#colorPicker");


function makeGrid(event)
{

  event.preventDefault();

  table.self.textContent='';
  
for (let i=0,n=table.height.value;i<n;i++)
{
  
  let tr=document.createElement('tr');
 
   for (let j=0,k=table.width.value;j<k;j++)
{
   
   let td=document.createElement('td');
   
  td.addEventListener('click',()=>
{
      
  td.style.backgroundColor=picker.value;
      
})
  
    tr.appendChild(td);
   
 }
 
   table.self.appendChild(tr);
  
}

}


submit.addEventListener('click',makeGrid);