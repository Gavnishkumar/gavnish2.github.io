showNotes();

let addbtn=document.getElementById("addbtn");
addbtn.addEventListener("click",function(e){
       let addtxt=document.getElementById("addtxt");
        let notes=localStorage.getItem("notes");
        if(notes==null){
            notesObj=[];
        } else{
            notesObj=JSON.parse(notes);
        }
        notesObj.push(addtxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        console.log(notesObj);
        addtxt.value=" ";
        showNotes();
    })
function showNotes(){

    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let HTML="";
    notesObj.forEach((element, index)=>{
        HTML+=`<div class="boxelement" autofocus> 
        <div class="card">
        <h2>Note ${index+1}</h2>
        <hr>
        <br>
        <p class="para-note">${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="deletbtn">Delete Note</button>
    </div>
 </div>`;
    });
   let notElm=document.getElementById("notes");
  if(notesObj.length!=0)[
    notElm.innerHTML=HTML
  ]
  else{
    notElm.innerHTML=`<p><bold>There is no any note present in your notebook</bold></p>`
  }
}

function deleteNote(index){
console.log(`delete fuction for index `, index);
      let notes=localStorage.getItem("notes");
      if(notes==null){
        notesObj=[];
      }
      else{
        notesObj=JSON.parse(notes);
      }
      notesObj.splice(index,1);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      showNotes();
}
let search=document.getElementById("searchtxt")
search.addEventListener("input",function(){
    let inputval=search.value;
    let notecard=document.getElementsByClassName("boxelement");
    Array.from(notecard).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
console.log(cardTxt);
if(cardTxt.includes(inputval)){
   element.style.display="block";
}
else{
    element.style.display="none";
}
    })
    console.log("you are searching for ",inputval);
})