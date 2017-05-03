//温度设置
function showTempPieChart(param1, param2, param3, param4, param5) {
	// Build the chart
	$('#container_pie_temp').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			backgroundColor: 'rgba(0,33,0,0)',
			marginTop: 0
		},
		title: {
			text: "",
		},
		subtitle: {
			text: '温度设置',
			style: {
				color: '#A0A0A0',
				fontSize: '14px',
			},
			verticalAlign: 'bottom',
			y: -25,
			x: 40,
			floating: true
		},
		tooltip: {
			enabled: false,
			pointFormat: '{series.name}: <b>{point.y}个</b>'
		},
		plotOptions: {
			pie: {
				size: 90,
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#fff',
					//					connectorColor: '#fff',
					format: '{point.y}',
					distance: -18,
					padding: 0,
					borderWidth: 0,
					style: {
						fontSize: 10
					}
				},
				showInLegend: true,
				point: {
					events: {
						legendItemClick: function() {
							// return false 即可禁止图例点击响应
							return false;
						}
					}
				},
				borderWidth: 0
			},
			series: {
				dataLabels: {
					enable: true,
					style: {
						fontSize: '10px',
						textOutline: "0px 0x contrast"
					}
				}
			}
		},
		series: [{
			name: '',
			colorByPoint: true,
			//			innerSize: '100%',
			data: [{
				name: '7℃',
				y: param1,
				color: '#c33d05'
			}, {
				name: '8℃',
				y: param2,
				color: '#D97402'
			}, {
				name: '9℃',
				y: param3,
				color: '#EDA302'
			}, {
				name: '10℃',
				y: param4,
				color: '#FECD00'
			}, {
				name: '其他',
				y: param5,
				color: '#FCDD58'
			}]
		}],
		credits: {
			enabled: false
		},
		legend: {
			//			align: 'center',
			//			align: 'right',
			//			verticalAlign: 'middle',
			itemStyle: {
				'fontSize': '11px',
				'color': '#A0A0A0'
			},
			//			x:0,
			//			y: -5,
			symbolRadius: 0,
			align: 'right',
			verticalAlign: 'top',
			x: -30,
			y: 30,
			floating: true,
			itemWidth: 20,
			layout: 'vertical',
			itemHoverStyle: {
				color: '#A0A0A0'
			}
		}
	});

}