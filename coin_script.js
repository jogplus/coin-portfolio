$(function(){
        $.get("https://api.coinmarketcap.com/v1/ticker/", function(data){
            var table = document.getElementById("myTable");
            for (coinIndex = 0; coinIndex < 20; coinIndex++){
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
            var titleRow = table.insertRow(0);
            var tableTitle = titleRow.insertCell(0);
            tableTitle.colSpan = 4;
            tableTitle.style.textAlign = "center";
            tableTitle.style.color = '#FF6B6B';
            tableTitle.style.backgroundColor = '#8EDFD9'
            tableTitle.style.fontFamily = 'Pacifico';
            tableTitle.style.fontSize = '40px';
            tableTitle.style.textShadow = "-1px -1px 0 #F7FFF7,1px -1px 0 #F7FFF7,-1px 1px 0 #F7FFF7,1px 1px 0 #F7FFF7,-2px 0 0 #F7FFF7,2px 0 0 #F7FFF7,0 2px 0 #F7FFF7,0 -2px 0 #F7FFF7";
            tableTitle.innerHTML ='Current Coin Rankings';
    })
 });