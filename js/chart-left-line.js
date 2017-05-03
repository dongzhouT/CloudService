//累计制冷量，累计电量
function showPowerLine(param1, param2) {
	//'#E6C41D', '#F68A37', '#13CB33', '#BDAEC8'
	var colors = ['#247bdd'];
	Highcharts.getOptions().colors = colors;
	//	Highcharts.getOptions().colors = Highcharts.map(colors, function(color) {
	//		return {
	//			linearGradient: {
	//				x1: 0,
	//				x2: 0,
	//				y1: 0,
	//				y2: 1.3 //结束Y轴，基准是1，即100%高度
	//			},
	//			stops: [
	//				[0, color],
	//				[1, Highcharts.Color(color).brighten(-20).get('rgb')] // darken 
	//			]
	//		};
	//	});

	var Xdate = ['10', '11', '12', '01', '02', '03', '04'];
	$('#container_pie_sum5').highcharts({
		chart: {
			type: 'area',
			backgroundColor: 'rgba(0,0,0,0)',
			marginTop: 30,
			spacingRight: 30 //右内边距为30，为X轴右侧title留出空间
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
		xAxis: {
			//			categories: XData,
			gridLineWidth: 0,
			tickInterval: 1,
			tickWidth: 0,
			lineWidth: 0,
			crosshair: {
				width: 0
			},
			title: {
				text: '(月)',
				align: 'high',
				x: 26,
				y: -28,
				style: {
					color: '#A0A0A0'
				}
			},
			labels: {
				x: -5,
				style: {
					color: '#A0A0A0',
					fontSize: '10px'
				},
				formatter: function() {
					return Xdate[this.value]; //X轴起始点在原点				
				}
			},
			showEmpty: true
		},
		yAxis: {
			min: 0,
			tickInterval: 25,
			title: {
				text: '百万KWH',
				enabled: true,
				align: 'high',
				rotation: 0,
				y: -15,
				offset: 0,
				x: 16,
				style: {
					color: '#A0A0A0',
					fontSize: 9
				}
			},
			gridLineWidth: 0,
			lineWidth: 0,
			labels: {
				style: {
					color: '#A0A0A0',
					fontSize: 9
				}
			},
			visible: true
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
			},
			series: {
				dataLabels: {
					enabled: false,
					format: '<span style="font-size:18px;color:#ffffff">{y}</span>',
					style: {
						textOutline: "0px 0x contrast"
					}
				},
				events: {
					legendItemClick: function(e) {
						return false; // 直接 return false 即可禁用图例点击事件
					}
				}
			}

		},
		legend: {
			align: 'center',
			verticalAlign: 'middle',
			x: 0,
			y: -70,
			itemStyle: {
				'fontSize': '11px',
				'color': '#A0A0A0'
			},
			squareSymbol: false,
			symbolRadius: 0,
			itemHoverStyle: {
				color: '#A0A0A0'
			}
		},
		series: [{
			name: '累计制冷量',
			//				data: [param1, param2, param3, param4]
			//			data: [120, 230, 330, 430, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],

			data: param1,
			type: 'area',
			color: '#FFCB15',
			marker: {
				radius: 0,
				lineWidth: 0,
				symbol: 'circle'
			},
			fillColor: {
				linearGradient: [0, 0, 0, 130],
				stops: [
					[0, '#FFCB15'],
					[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
				]
			}
		}, {
			name: '累计电量',
			type: 'area',
			data: param2,
			//			data: [12, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			//				dashStyle: 'dash',
			color: '#66BCDC',
			marker: {
				radius: 0,
				lineWidth: 0,
				symbol: 'circle'
			},
			fillColor: {
				linearGradient: [0, 0, 0, 100],
				stops: [
					[0, '#66BCDC'],
					[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
				]
			}
		}]
	});
}