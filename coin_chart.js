google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
    ['Coin', 'Money Invested'],
    ['Bitcoin',     11],
    ['Litecoin',      2],
    ['Ripple',  2],
    ['RaiBlocks', 2],
    ['Ethereum',    7]
    ]);

    var options = {
    backgroundColor: '#F7FFF7',
    fontName: 'Open Sans',
    legend: {textStyle:{color: '#1A535C',
                        fontName: 'Open Sans',
                        fontSize: 30,
                        bold: true,
                        italic: false }}
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}