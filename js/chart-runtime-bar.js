//每天开关机次数统计
function showRunTimeBar(param1, param2) {
	//'#E6C41D', '#F68A37', '#13CB33', '#BDAEC8'
	var colors = ['#247bdd'];
	Highcharts.getOptions().colors = colors;
	var Xdate=['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17',
				'18', '19', '20', '21', '22', '23', '24'];
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
	$('#container_run_time').highcharts({
		chart: {
			type: 'column',
			backgroundColor: 'rgba(0,0,0,0)',
			marginTop: 30,
			spacingRight: 30 //右内边距为30，为X轴右侧title留出空间
		},
		title: {
			text: '每天逐时负荷率',
			style: {
				color: '#A0A0A0',
				fontSize: 9
			},
			verticalAlign: 'bottom',
			align:'center',
			y:-15,
			x:30
		},
		credits: {
			enabled: false
		},
		subtitle: {
			text: null
		},
		xAxis: {
			categories:Xdate ,
			gridLineWidth: 0,
			tickWidth: 0,
			lineWidth: 0,
			crosshair: {
				width: 0
			},
			labels: {
				x: 0,
				style: {
					color: '#A0A0A0',
					fontSize: 9
				}
			},
			title:{
				text: '时刻',
//				enabled:false,
				align:'high',
				y:-26,
				x: 25,
				style: {
					color: '#A0A0A0',
					fontSize: 9
				}
			},
			showEmpty: true
		},
		yAxis: {
			min: 0,
			max: 100,
			tickInterval: 20,
			title: {
				text: '平均负荷率',
				enabled: true,
				align: 'high',
				rotation: 0,
				y: -15,
				offset: 0,
				x: 18,
				style: {
					color: '#A0A0A0',
					fontSize: 9
				}
			},
			//			gridLineWidth: 0,
			//			enabled: false,
			gridLineWidth: 0,
			lineWidth: 0,
			labels: {
				format: '{value} %',
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
				//				pointWidth: 10
			},
			series: {
				//				colorByPoint: true,
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
			x: 20,
			y: -50,
			itemStyle: {
				'fontSize': '11px',
				'color': '#A0A0A0'
			},
			squareSymbol: false,
			symbolRadius: 0,
			itemHoverStyle: {
				color: '#A0A0A0'
			},
			enabled: false
		},
		series: [{
			name: '开机',
			//				data: [param1, param2, param3, param4]
			//			data: [120, 230, 330, 430, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],

			data: param1
		}, {
			name: '关机',
			type: 'line',
			data: param1,
			//			data: [12, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
			//				dashStyle: 'dash',
			color: '#efce21',
			marker: {
				radius: 0,
				lineWidth: 0,
				symbol: 'circle'
			}
		}]
	});
}