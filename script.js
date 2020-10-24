function bmiCalculator (weight, height) {
    var bmi = weight.value/(height.value*height.value);
    var interpretation;
    if(bmi<18.5){
        interpretation = "Your BMI is "+bmi.toFixed(2)+", so you are underweight.";
        document.getElementById("result").className="alert alert-danger";
    }
    else if(bmi>24.9){
        interpretation = "Your BMI is "+bmi.toFixed(2)+", so you are overweight.";
        document.getElementById("result").className="alert alert-danger";
    }
    else{
        interpretation = "Your BMI is "+ bmi.toFixed(2) +", so you have a normal weight.";
        document.getElementById("result").className="alert alert-success";
    }
    document.getElementById("result").innerHTML = interpretation;

}
