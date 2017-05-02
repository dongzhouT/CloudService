//右下角四个趋势图
function showChartNums(id, param1, param2, param3, param4) {
	$(id).highcharts({
		chart: {
			type: 'spline',
			backgroundColor: 'rgba(255,255,0,0)',
			marginTop: 0
		},
		title: {
			text: ''
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			lineWidth: 0,
			gridLineWidth: 0,
			tickWidth: 0,
			labels: {
				enabled: false
			}
		},
		yAxis: {
			gridLineWidth: 0,
			tickWidth: 0,
			lineWidth: 0,
			crosshair: {
				width: 0
			},
			labels: {
				enabled: false
			},
			title: {
				text: ''
			}
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: false // 开启数据标签
				},
				enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
			}
		},
		series: [{
			name: '',
			data: [param1, param2, param3, param4],
			color: '#267EE4',
			lineWidth: 2,//线条宽度
			marker: {
				radius: 0,
				lineWidth: 0,
				symbol: 'circle'
			},
			events: {
				legendItemClick: function(e) {
					return false; // 直接 return false 即可禁用图例点击事件
				}
			}
		}],
		tooltip: {
			enabled: false
		},
		legend: {
			enabled: false,
		},

		credits: {
			enabled: false
		}
	});
}