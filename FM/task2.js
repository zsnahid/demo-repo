let weight = 59;
let height = 1.70; /*meter*/

function calcBmi(wt,ht){
    let bmi = wt / (ht * ht);
    if(bmi < 18.5){
        console.log("Underweight");
    }
    else if(bmi >=18.5 && bmi <= 24.9){
        console.log("Normal");
    }
    else if(bmi >= 25 && bmi <= 29.9){
        console.log("Overweight");
    }
    else{
        console.log("Obese");
    }
}
calcBmi(weight,height);