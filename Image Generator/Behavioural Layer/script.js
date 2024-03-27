const generateForm =  document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
    e.preventDefault();

    //Get user input and image quantity values from the form
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    // Creating HTML markup for image cards with loading state
    const imgCardMarkup = Array.from({length: userImgQuantity}, () =>
        `<div class="img-card loading">
            <img src="../Resources/images/loader.svg" alt="image">
            <a href="#" class="download-btn">
                <img src="../Resources/images/download.svg" alt="download icon">
            </a>
        </div>`
    ).join("");

    console.log(imgCardMarkup);
}

generateForm.addEventListener("submit", handleFormSubmission);