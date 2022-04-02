function loadHTML(file, callback)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState == 4 && rawFile.status == 200)
        {
						callback(rawFile.responseText);
        }
    }
    rawFile.open("GET", file, false);
    rawFile.send(null);
}
