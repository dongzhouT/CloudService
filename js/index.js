var dataProject = new Array();
var type = 1;
$(function() {

	showChart(218, 94);

	var datasPie = new Array();
	var item1 = new Object();
	item1.name = "在线";
	item1.y = 41;
	//	item1.color = "#ff0000";
	var item2 = new Object();
	item2.name = "离线";
	item2.y = 10;
	//	item2.color = "#00ff00";
	datasPie.push(item1);
	datasPie.push(item2);
	//	showChartSingle(datasPie, 'aaa', 200); //-50无标题  -80 有标题
});

//项目汇总
function showChart(param1, param2) {
	// Build the chart
	$('#container_pie_sum').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			backgroundColor: "#0f0f11",
			marginTop: 30
		},
		title: {
			text: param1 + param2,
			style: {
				color: '#fff',
				fontSize: '24px',
			},
			y: -40,
			verticalAlign: 'middle',
		},
		subtitle: {
			text: '项目汇总',
			style: {
				color: '#A0A0A0',
				fontSize: '14px',
			},
			verticalAlign: 'bottom',
			y: -70
		},
		tooltip: {
			enabled: false,
			pointFormat: '{series.name}: <b>{point.y}个</b>'
		},
		plotOptions: {
			pie: {
				size: 100,
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#fff',
					//					connectorColor: '#fff',
					format: '{point.y}',
					distance: -10,
					padding: 0,
					borderWidth: 0
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
			name: '项目个数',
			colorByPoint: true,
			innerSize: '60%',
			data: [{
				name: '在线',
				y: param1,
				color: '#2985F2'
			}, {
				name: '离线',
				y: param2,
				color: '#3E3E3E'
			}]
		}],
		credits: {
			enabled: false
		},
		legend: {
			itemStyle: {
				'fontSize': '11px',
				'color': '#A0A0A0'
			},
			y: -80,
			symbolRadius: 0
		}
	});

}

function showChartSingle(param, subtitle, sum, offsetY) {
	var offsetY = -90;
	if (subtitle == "") {
		offsetY = -45;
		// Build the chart
		$('#container_pie_single').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				backgroundColor: "#0f0f11",
				marginTop: 30
			},
			colors: ['#BC2D05',
				'#D16004',
				'#DB7604',
				'#F0A403',
				'#FECE02',
				'#FDDF5B'
			],
			title: {
				text: sum,
				style: {
					color: '#fff',
					fontSize: '24px',
				},
				y: -45,
				verticalAlign: 'middle',
			},
			subtitle: {
				text: subtitle,
				style: {
					color: '#A0A0A0',
					fontSize: '14px',
				},
				verticalAlign: 'bottom',
				y: -70
			},
			tooltip: {
				enabled: false,
				pointFormat: '{series.name}: <b>{point.y}个</b>'
			},
			plotOptions: {
				pie: {
					size: 100,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#fff',
						connectorColor: '#fff',
						format: '{point.y}',
						distance: -10
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
				}
			},
			series: [{
				name: '项目个数',
				colorByPoint: true,
				innerSize: '60%',
				data: param,
				dataLabels: {
					enable: true,
					style: {
						fontSize: '10px',
						textOutline: "0px 0x contrast"
					}
				}
			}],
			credits: {
				enabled: false
			},
			legend: {
				itemStyle: {
					'fontSize': '11px',
					'color': '#A0A0A0'
				},
				symbolRadius: 0,
				y: offsetY
			}
		});
	} else {
		// Build the chart
		$('#container_pie_single').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false,
				type: 'pie',
				backgroundColor: "#0f0f11",
				marginTop: 30
			},
			colors: ['#F4D012',
				'#3B3B3B',
				'#D1FE0D',
				'#3AFF0B',
				'#0CFEFF',
				'#CF15FF'
			],
			title: {
				text: sum,
				style: {
					color: '#fff',
					fontSize: '24px',
				},
				y: -40,
				verticalAlign: 'middle',
			},
			subtitle: {
				text: subtitle,
				style: {
					color: '#A0A0A0',
					fontSize: '14px',
				},
				verticalAlign: 'bottom',
				y: -70
			},
			tooltip: {
				enabled: false,
				pointFormat: '{series.name}: <b>{point.y}个</b>'
			},
			plotOptions: {
				pie: {
					size: 100,
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						color: '#fff',
						connectorColor: '#fff',
						format: '{point.y}',
						distance: -10
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
			},
			series: [{
				name: '项目个数',
				colorByPoint: true,
				innerSize: '60%',
				data: param,
				dataLabels: {
					enable: true,
					style: {
						fontSize: '10px',
						textOutline: "0px 0x contrast"
					}
				}
			}],
			credits: {
				enabled: false
			},
			legend: {
				itemStyle: {
					'fontSize': '11px',
					'color': '#A0A0A0'
				},
				symbolRadius: 0,
				y: -80
			}
		});
	}

}