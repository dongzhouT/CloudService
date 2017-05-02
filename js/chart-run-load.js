//运行负荷，平均运行负荷
function showRunLoadChart(param1, param2) {
	// Build the chart
	$('#container_run_load').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			backgroundColor: 'rgba(255,255,0,0)',
			marginTop: 0
		},
		title: {
			text: (param1 + '%'),
			style: {
				color: '#fff',
				fontSize: '18px',
			},
			y: 00,
			verticalAlign: 'middle',
		},
		subtitle: {
			text: '运行负荷',
			style: {
				color: '#A0A0A0',
				fontSize: '14px',
			},
			verticalAlign: 'bottom',
			y: 0
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
					enabled: false,
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
					enable: false,
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
				name: '',
				y: param1,
				color: '#2985F2'
			}, {
				name: '',
				y: 100 - param1,
				color: '#3E3E3E'
			}]
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false,
		}
	});
	$('#container_run_load_avg').highcharts({
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			backgroundColor: 'rgba(0,0,0,0)',
			marginTop: 0
		},
		title: {
			text: (param2 + '%'),
			style: {
				color: '#fff',
				fontSize: '18px',
			},
			y: 00,
			verticalAlign: 'middle',
		},
		subtitle: {
			text: '平均运行负荷',
			style: {
				color: '#A0A0A0',
				fontSize: '14px',
			},
			verticalAlign: 'bottom',
			y: 0
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
					enabled: false,
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
					enable: false,
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
				name: '',
				y: param2,
				color: '#2985F2'
			}, {
				name: '',
				y: 100 - param2,
				color: '#3E3E3E'
			}]
		}],
		credits: {
			enabled: false
		},
		legend: {
			enabled: false,
		}
	});
}