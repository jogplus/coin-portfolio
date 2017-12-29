$(function(){
    $("button").click(function(){
        $.get("https://api.coinmarketcap.com/v1/ticker/", function(data){
            var coinInfo = data[0]
            var bitcoin = JSON.stringify(coinInfo)
            var bitcoin = JSON.parse(bitcoin)
            document.getElementById("prices").innerHTML = bitcoin.name
        })
    })
 });