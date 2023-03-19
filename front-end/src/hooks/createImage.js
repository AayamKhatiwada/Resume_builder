const CreateImage = (text) => {
    // create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 300; // set canvas width
    canvas.height = 360; // set canvas height

    // get the 2D context of the canvas
    const ctx = canvas.getContext('2d');

    // set font style and color
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // calculate the center point of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // draw the text on the canvas
    ctx.fillText(text, centerX, centerY);

    // get the image data URL
    const dataUrl = canvas.toDataURL();

    return dataUrl
}

export default CreateImage;