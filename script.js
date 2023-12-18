function typeWriter() {
    const words = ["Policyholders", "Contractors", "Carriers", "Employees", "Even your Mom!"];

    let wordCount = 0;
    let letterCount = 0;

    let currentText = "";
    let currentWord = "";

    let timeOut = 400;

    let isDeleting = false;

    function type() {
        if(wordCount === words.length) {
            wordCount = 0;
        }

        currentWord = words[wordCount];

        if(isDeleting) {
            currentText = currentWord.slice(0, --letterCount); //---find out why doing letterCount-- breaks the code
        } else {
            currentText = currentWord.slice(0, ++letterCount); //---find out why doing letterCount++ breaks the code 
        }

        document.querySelector(".dynamic-output").textContent = currentText;

        timeOut = isDeleting ? 50 : 100;

        if(!isDeleting && currentText.length === currentWord.length) {
            timeOut = 1500;
            isDeleting = true;
        } else if(isDeleting && currentText.length === 0) {
            timeOut = 600;
            isDeleting = false;
            wordCount++;
        }

        setTimeout(type, timeOut);
    }

    type();
}

typeWriter();

