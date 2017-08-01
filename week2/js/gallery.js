/*Name this external file gallery.js*/

/**
 * In this function you should
 *  1) change the url for the background image of the div with the id = "image"
 *     to the source file of the preview image
 *  2) Change the text  of the div with the id = "image"
 *     to the alt text of the preview image
 */
function upDate(previewPic) {
    var element = document.getElementById('image');
    element.style.backgroundImage = 'url(' + previewPic.src + ')';
    element.innerHTML = previewPic.alt;

}

/**
 * In this function you should
 *  1) Update the url for the background image of the div with the id = "image" back
 *     to the original-image. You can use the css code to see what that original URL was
 *  2) Change the text  of the div with the id = "image" back to the original text.
 *     You can use the html code to see what that original text was
 */
function unDo() {
    var element = document.getElementById('image');
    element.innerHTML = 'Hover over an image below to display here.';
    element.style.backgroundImage = 'none';
}
