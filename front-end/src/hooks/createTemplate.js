// Import html2canvas library
import html2canvas from 'html2canvas';

const CreateTemplate = (element, i) => {

    var temp = document.createElement('div');
    temp.innerHTML = element;
    var htmlObject = temp.firstChild;
    document.body.appendChild(htmlObject);
    console.log(htmlObject)
    
    // Use html2canvas to create a canvas with the HTML content
    html2canvas(htmlObject).then(canvas => {

        // Convert the canvas to an image
        const image = canvas.toDataURL('image/png');

        // Create an image element with the converted data URL
        const imgElement = document.getElementById(`UserResumeImage${i}`);
        imgElement.src = image;
    });
    document.body.removeChild(htmlObject);
}

export default CreateTemplate;
