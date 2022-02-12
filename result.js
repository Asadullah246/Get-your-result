
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

// how to find duplicate numbers in a array 

// function removedDuplicate(allNumbers){
//    let singleNames=[];
//    let dupNames=[];
//    let pureDuplicate=[];
//    for(const element of allNumbers){
//       if(singleNames.indexOf(element)==-1){
//          singleNames.push(element)
//       }
//       else{
         
//          dupNames.push(element)
//       }
//    }

//    for(const allElement of dupNames){
//       if(pureDuplicate.indexOf(allElement)==-1){
//          pureDuplicate.push(allElement)
//       }
//    }

//    // return newArr;
//    return pureDuplicate;
   
   
// }



let inputNumbers=[23, 45, 49, 23, 67, 45, 78, 34 , 45, 78, 67, 78];
let numbers= removedDuplicate(inputNumbers);
console.log(numbers);
