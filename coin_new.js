google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function addCoin() {
    if (example == true) {
        tableData = [['Coin', 'Money Invested']];
        example = false;
    };
    $.get("https://api.coinmarketcap.com/v1/ticker/", function(data){
        var table = document.getElementById("myTable");
        for (coinIndex = 0; coinIndex < 100; coinIndex++){
            var coinJSON = JSON.stringify(data[coinIndex]);
            var coinInfo = JSON.parse(coinJSON);
            if (coinInfo.symbol == document.getElementById("coinAbb").value){
                tableData.push([coinInfo.name, document.getElementById("amount").value*coinInfo.price_usd])

                var data = google.visualization.arrayToDataTable(
                    tableData
                );
                
                var options = {
                backgroundColor: '#F7FFF7',
                fontName: 'Open Sans',
                legend: {textStyle: {color: '#1A535C',fontName: 'Open Sans',fontSize: 15,bold: true,italic: false},position:'bottom'},
                chartArea: {'width': '100%', 'height': '90%'},
                slices: [{color:'#4ECDC4'},{color:'#1A535C'},{color:'#FF6B6B'},{color:'#FFBA49'}]
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);
                document.getElementById('chartTitle').innerHTML= "Your Portfolio"
                var totalPrice = 0;
                for(priceIndex = 1; priceIndex < tableData.length; priceIndex++) {
                    totalPrice += tableData[priceIndex][1];
                };
                document.getElementById('totalMoney').innerHTML= "Total: $"+totalPrice.toFixed(2);
                break
            };
        };
    })
    
}