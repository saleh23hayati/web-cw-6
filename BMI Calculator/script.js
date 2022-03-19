
window.onload = () => {
    let button = document.querySelector("#calculate");

    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  

    let height = parseInt(document
            .querySelector("#height").value);
  

    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  

    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  

    else {
  
       
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6) result.innerHTML =
            `تعاني من نقص في الوزن : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `وزنك صحي : <span>${bmi}</span>`;
  
        else if (bmi >= 25 && bmi < 30) 
        result.innerHTML =
            `تعاني من زيادة في الوزن : <span>${bmi}</span>`;

            else result.innerHTML =
            `تعاني من السمنة المفرطة : <span>${bmi}</span>`;
    }
}