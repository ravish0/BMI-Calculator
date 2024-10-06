function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let resultMessage = `Your BMI is ${bmi}. `;

        if (bmi < 18.5) {
            resultMessage += "You are underweight.";
        } else if (bmi < 24.9) {
            resultMessage += "You have a normal weight.";
        } else if (bmi < 29.9) {
            resultMessage += "You are overweight.";
        } else {
            resultMessage += "You are obese.";
        }

        const resultElement = document.getElementById("result");
        resultElement.textContent = resultMessage;
        resultElement.style.opacity = 1;
    } else {
        document.getElementById("result").textContent = "Please fill out both fields.";
    }
}
