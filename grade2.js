
function grade(number){
    if(number>100){
        return "Please enter a number in 100"
    }
    else if(number>=80){
        return "A+"
    }
    else if(number>=70){
        return "A";
    }
    else if(number>=60){
        return "A-";
    }
    else if(number>=50){
        return "B";
    }
    else if(number>=40){
        return "C";
    }
    else if(number>=33){
        return "D";
    }
    else{
        return "F";
    }
}
function average(){
    let av= total/5;
    
    if(av>=80){
        return "average: A+"
    }
    else if(av>=70){
        return "average: A";
    }
    else if(av>=60){
        return "average: A-";
    }
    else if(av>=50){
        return "average: B";
    }
    else if(av>=40){
        return "average: C";
    }
    else if(av>=33){
        return "average: D";
    }
    else{
        return "Fail kore abar average khujte aiso !";
    }

}


let bangla=85;
console.log("bangla: " +grade(bangla))
let english=67;
console.log("english: " +grade(english))
let math=50;
console.log("math: " +grade(math))
let physics=39;
console.log("physics: " +grade(physics))
let chemistry=40;
console.log("chemistry: " +grade(chemistry))

let total= bangla+ english+ math+physics+chemistry;

console.log(average())
