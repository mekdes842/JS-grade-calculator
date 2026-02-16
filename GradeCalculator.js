let score=Number(prompt("Enter your grade out of 100"));
let grade;
if(score<0 || score>100){
    console.log("Invalid");
}
    else if(score>=90){
    grade="A+";
}
    else if(score>=85){
    grade="A";
}
    else if(score>=80){
    grade="A-";
}
    else if(score>=75){
    grade="B+";
}
    else if(score>=70){
    grade="B";
}
    else if(score>=65){
    grade="B-";
    }
    else if(score>=60){
    grade="C+";
}
    else {
    grade="F";
}
if(grade){ 
 console.log("Your grade is", grade);
}