google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Coin', 'Money Invested'],
    ['Bitcoin',     11],
    ['Litecoin',      2],
    ['Ripple',  2],
    ['Ethereum',    7]
    ]);

    var options = {
    backgroundColor: '#F7FFF7',
    fontName: 'Open Sans',
    legend: {textStyle: {color: '#1A535C',fontName: 'Open Sans',fontSize: 15,bold: true,italic: false},position:'bottom'},
    chartArea: {'width': '100%', 'height': '90%'},
    slices: [{color:'#4ECDC4'},{color:'#1A535C'},{color:'#FF6B6B'},{color:'#FFBA49'}]
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}