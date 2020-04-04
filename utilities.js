function prettyPrint() {
    var ugly = document.getElementById('jsonblob').value;
    var obj = JSON.parse(ugly.replace(/'/g, '"'));
    var pretty = JSON.stringify(obj, undefined, 2);
    document.getElementById('jsonblob').value = pretty;
};
function removeWhiteSpace() {
    var variableWithJsonWhitespace = document.getElementById('jsonblob').value;
    var obj = JSON.stringify(JSON.parse(variableWithJsonWhitespace));
    document.getElementById('jsonblob').value = obj;
};
function clearArea() {
    document.getElementById('jsonblob').value = "";
};
function copyContent() {
    var jsonValue = document.getElementById('jsonblob');
    jsonValue.select();
    jsonValue.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
};