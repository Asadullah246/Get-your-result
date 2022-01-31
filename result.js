
let text=document.getElementById("demo")


function getInputValue(){

    let inp=document.getElementById("asad").value;

   if(inp=="" || inp>100){
       
        text.innerHTML="Please enter a number between 0 to 100";
    }
    
    else if(inp<=100 && inp>=0){
       if(inp>=80){
        text.innerHTML="You got A+";
       }
       else if(inp>=70){
        text.innerHTML="You got A";
       }
       else if(inp<70 || inp>=0){
        text.innerHTML="You are loser";
       }
      
    }
   
   
   else{
    text.innerHTML="please enter a valid number";

   }

}