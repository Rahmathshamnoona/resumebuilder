//alert("loading");
function addNewWEField() {

    // console. Log( "Adding new field") ;
       
       let newNode = document.createElement("textarea"); 
       newNode.classList.add("form-control"); 
       newNode.classList.add("weField");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 4);
       newNode.setAttribute("placeholder",'Enter here');
       
       let weOb = document.getElementById("we");
       let weAddButtonOb= document.getElementById("weAddButton"); 
   
       weOb.insertBefore(newNode,weAddButtonOb);
   }
   
   function addNeWAQfield() 
   {
       let newNode = document.createElement("textarea"); 
       newNode.classList.add("form-control"); 
       newNode.classList.add("aqfield");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 4);
       newNode.setAttribute("placeholder",'Enter here');
       
       let aqOb = document.getElementById("aq");
       let aqAddButtonOb= document.getElementById("aqAddButton"); 
   
       aqOb.insertBefore(newNode,aqAddButtonOb);
   
   }
   
    
   function addNeWSKfield() 
   {
       let newNode = document.createElement("textarea"); 
       newNode.classList.add("form-control"); 
       newNode.classList.add("skfield");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 1);
       newNode.setAttribute("placeholder",'Enter here');
       
       let skOb = document.getElementById("sk");
       let skAddButtonOb= document.getElementById("skAddButton"); 
   
       skOb.insertBefore(newNode,skAddButtonOb);
   
   }
   
   
   function addNeWINfield() 
   {
       let newNode = document.createElement("textarea"); 
       newNode.classList.add("form-control"); 
       newNode.classList.add("infield");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 1);
       newNode.setAttribute("placeholder",'Enter here');
       
       let inOb = document.getElementById("in");
       let inAddButtonOb= document.getElementById("inAddButton"); 
   
       inOb.insertBefore(newNode,inAddButtonOb);
   
   }
   
   
   function addNeWACfield() 
   {
       let newNode = document.createElement("textarea"); 
       newNode.classList.add("form-control"); 
       newNode.classList.add("infield");
       newNode.classList.add("mt-2");
       newNode.setAttribute("rows", 1);
       newNode.setAttribute("placeholder",'Enter here');
       
       let acOb = document.getElementById("ac");
       let acAddButtonOb= document.getElementById("acAddButton"); 
   
       acOb.insertBefore(newNode,acAddButtonOb);
   
   }
   
    function  generateCV()
    {
        // console.log("generatingcv")

    
    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");
    nameT1.innerHTML = namefield;
   
    document.getElementById('nameT2').innerHTML= namefield;

    let Contactfield= document.getElementById("Contactfield").value;
    let contactT = document.getElementById("contactT");
    contactT.innerHTML=Contactfield;

    document.getElementById('contactT').innerHTML= Contactfield;
   
    let emailfield= document.getElementById("emailfield").value;
    let emailT = document.getElementById("emailT");
    emailT.innerHTML=emailfield;

    document.getElementById('emailT').innerHTML= emailfield;

    let addressfield= document.getElementById("addressfield").value;
    let addressT = document.getElementById("addressT");
    addressT.innerHTML=addressfield;

    document.getElementById('addressT').innerHTML= addressfield;

    let dobfield= document.getElementById("dobfield").value;
    let dobT = document.getElementById("dobT");
    dobT.innerHTML=dobfield;

    document.getElementById('dobT').innerHTML= dobfield;
 
    let nationfield= document.getElementById("nationfield").value;
    let nationlityT = document.getElementById("nationlityT");
    nationlityT.innerHTML=nationfield;

    document.getElementById('nationlityT').innerHTML= nationfield;

    let Githubfield= document.getElementById("Githubfield").value;
    let githubT = document.getElementById("githubT");
    githubT.innerHTML=Githubfield;

    document.getElementById('githubT').innerHTML= Githubfield;

    let LinkedInfield= document.getElementById("LinkedInfield").value;
    let linkedinT = document.getElementById("linkedinT");
    linkedinT.innerHTML=LinkedInfield;

    document.getElementById('linkedinT').innerHTML= LinkedInfield;

    let fbfield= document.getElementById("fbfield").value;
    let fbT = document.getElementById("fbT");
    fbT.innerHTML=fbfield;

    document.getElementById('fbT').innerHTML= fbfield;


    document.getElementById('objectiveT').innerHTML=document.getElementById('Objective').value;

    // WORK EXPRIENCE
    
    let wes = document.getElementsByClassName('weField');
     
    let str = "";
    for (let e of wes) {
        
       str=str+`<li> ${e.value} </li>`;
        
        }
 
    document.getElementById("weT").innerHTML = str;

    
//aq
{let aqs = document.getElementsByClassName ("aqfield");
let str1= "";
for (let e of aqs) {
   str1 = str1+`<li> ${e.value} </li>`;
}
document.getElementById("aqT").innerHTML = str1;
}

//skills
{
    let sks = document.getElementsByClassName ("skfield");
    let str2= "";
    for (let e of sks) {
      str2 = str2+`<li> ${e.value} </li>`;
}
document.getElementById("skillsT").innerHTML = str2;
}

//achievements
{
    let ach = document.getElementsByClassName ("achfield");
    let str3= "";
    for (let e of ach) {
      str3 = str3+`<li> ${e.value} </li>`;
}
document.getElementById("acT").innerHTML = str3;

}

//interests
{
    let int = document.getElementsByClassName ("infield");
    let str4= "";
    for (let e of int) {
      str4 = str4+`<li> ${e.value} </li>`;
}
document.getElementById("interestsT").innerHTML = str4;

}

 
    

    

 


  // code for image  
  {let file=document.getElementById('imgField').files[0];

    console.log(file);

    let reader=new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    // set the image to template

     reader.onloadend=function()
     {
       document.getElementById("imgTemplate").src=reader.result;

     }} 

    
   

     document.getElementById('objectiveT').innerHTML=document.getElementById('Objective').value


   






    }
    
    let areaCV = document.getElementById('cv-template')

    let opt = {
        margin:       1,
        filename:     'resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { format: 'a3', orientation: 'landscape' }
      }
    function printCV(){
        //const element = document.getElementById("cv-template");
         html2pdf (areaCV,opt)
         //.from (element)
         //.save();
     }