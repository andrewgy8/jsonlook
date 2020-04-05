function getContentElement() {
    return document.getElementById('jsonContent')
};
function prettyPrint() {
    var ugly = getContentElement().value;
    try{
        var obj = JSON.parse(ugly.replace(/'/g, '"'));
    } catch(e) {
        alert(e);
        return
    }
    var pretty = JSON.stringify(obj, undefined, 2);
    getContentElement().value = pretty;
};
function removeWhiteSpace() {
    var variableWithJsonWhitespace = getContentElement().value;
    var obj = JSON.stringify(JSON.parse(variableWithJsonWhitespace));
    getContentElement().value = obj;
};
function clearContent() {
     getContentElement().value = "";
};
function copyContent() {
    var content = getContentElement();
    content.select();
    content.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
};