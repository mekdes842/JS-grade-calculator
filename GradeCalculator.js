let score=75;
let grade;
if(score>=90 && score<=100){
    grade="A+";
}
    else if(score>=85 && score<90){
    grade="A";
}
    else if(score>=80 && score<85){
    grade="A-";
}
    else if(score>=75 && score<80){
    grade="B+";
}
    else if(score>=70 && score<75){
    grade="B";
}
    else if(score>=65 && score<70){
    grade="B-";
    }
    else if(score>=60 && score<65){
    grade="C+";
}
    else if(score<60){
    grade="F";
} 
else{
    console.log("Invalid");
}
 console.log("Your grade is", grade);