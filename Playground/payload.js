var params = new URLSearchParams(window.location.search);
var x = parseInt(params.get("x"), 10);

if(x >= 10)
{
    alert("X is higher than equals 10")
}
else
{
    alert("X is lower than 10")
}