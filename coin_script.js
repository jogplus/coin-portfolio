$(function(){
    $("button").click(function(){
        $.get("https://api.coinmarketcap.com/v1/ticker/", function(data){
            var table = document.getElementById("myTable");
            for (coinIndex = 0; coinIndex < data.length; coinIndex++){
            var coinJSON = JSON.stringify(data[coinIndex])
            var coinInfo = JSON.parse(coinJSON)
            var row = table.insertRow(table.length);
            var coinRank = row.insertCell(0);
            var coinName = row.insertCell(1);
            var coinPrice = row.insertCell(2);
            var coinChange = row.insertCell(3);
            coinRank.innerHTML = coinInfo.rank;
            coinName.innerHTML = coinInfo.name;
            coinPrice.innerHTML = coinInfo.price_usd;
            coinChange.innerHTML = coinInfo.percent_change_24h;
            }
        })
    })
 });