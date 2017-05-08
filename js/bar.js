function showBar(param1, param2, param3, param4) {
	//'#E6C41D', '#F68A37', '#13CB33', '#BDAEC8'
	var colors = ['#F7D625', '#F29B58', '#13CC33', '#C7B7D2'];
	Highcharts.getOptions().colors = Highcharts.map(colors, function(color) {
		return {
			linearGradient: {
				x1: 0,
				x2: 0,
				y1: 0,
				y2: 1.3 //结束Y轴，基准是1，即100%高度
			},
			stops: [
				[0, color],
				[1, Highcharts.Color(color).brighten(-20).get('rgb')] // darken 
			]
		};
	});
	$('#container_bar').highcharts({
		chart: {
			type: 'column',
			backgroundColor: "#0f0f11"
		},
		title: {
			text: null
		},
		credits: {
			enabled: false
		},
		subtitle: {
			text: null
		},
		legend: {
			enabled: false
		},
		xAxis: {
			categories: [
				'预警',
				'故障',
				'开',
				'关'
			],
			gridLineWidth: 0,
			tickWidth: 0,
			lineWidth: 0,
			crosshair: {
				width: 0
			},
			labels: {
				style: {
					color: '#A0A0A0',
					fontSize: 14
				}
			},
			showEmpty: true
		},
		yAxis: {
			min: 0,
			title: {
				text: null,
				enabled: false
			},
			gridLineWidth: 0,
			enabled: false,
			lineWidth: 0,
			labels: {
				style: {
					color: '#fff',
					fontSize: 14
				}
			},
			visible: false
		},
		tooltip: {
			headerFormat: '<span style="font-size:10px">{point.key}</span>',
			pointFormat: ':{point.y}',
			footerFormat: '',
			shared: false,
			useHTML: true,
			enabled: false
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
				pointWidth: 50
			},
			series: {
				colorByPoint: true,
				dataLabels: {
					enabled: true,
					format: '<span style="font-size:18px;font-weight:normal;color:#e0e0e0">{y}</span>',
					style: {
						textOutline: "0px 0x contrast"
					}
				}
			}
		},
		series: [{
				data: [param1, param2, param3, param4]
			}]
			//		series: [{
			//				name: 'haha',
			//				data: [4, 4, 4, 4]
			//			}]
			//		series: [{
			//			data: [{
			//				color: "#E6C41D",
			//				y: param1
			//			}, {
			//				color: "#F68A37",
			//				y: param2
			//			}, {
			//				color: "#13CB33",
			//				y: param3
			//			}, {
			//				color: "#BDAEC8",
			//				y: param4
			//			}]
			//		}]
	});
}