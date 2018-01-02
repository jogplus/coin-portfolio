var apiData;

$.get("https://api.coinmarketcap.com/v1/ticker/", function(data){
    apiData = data
    var table = document.getElementById("myTable");
    for (coinIndex = 0; coinIndex < 20; coinIndex++){
        var coinJSON = JSON.stringify(apiData[coinIndex])
        var coinInfo = JSON.parse(coinJSON);
        var row = table.insertRow(table.length);
        var coinRank = row.insertCell(0);
        var coinName = row.insertCell(1);
        var coinPrice = row.insertCell(2);
        var coinChange = row.insertCell(3);
        coinRank.innerHTML = coinInfo.rank;
        coinName.innerHTML = coinInfo.name + ' (' + coinInfo.symbol + ')';
        coinPrice.innerHTML = '$' + coinInfo.price_usd;
        if (coinInfo.percent_change_24h.substring(0,1) == '-'){
            coinChange.innerHTML = '-' + coinInfo.percent_change_24h.substring(1, coinInfo.percent_change_24h.length) + '%';
            coinChange.style.color = '#FF6B6B';
        }
        else{
            coinChange.innerHTML = '+' + coinInfo.percent_change_24h + '%';
            coinChange.style.color = '#61CA00';
        }
        coinChange.style.fontWeight = 'bolder';
    }
});