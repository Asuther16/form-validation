function saveData() {
    var dataInput = document.getElementById("dataInput");
    var outputParagraph = document.getElementById("outputParagraph");

    if (dataInput.value === "") {
        outputParagraph.innerHTML = "No data entered.";
        outputParagraph.style.color = "red"
        outputParagraph.style.display = "block";
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
    } else {
        console.log(dataInput.value);
        outputParagraph.innerHTML = "Data saved successfully: " ;
        outputParagraph.style.color = "green";
        outputParagraph.style.display = "block";
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
        dataInput.value = ""; 
    }
}
