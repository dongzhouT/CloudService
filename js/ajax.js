var m_num, m_num0, m_num1, m_num2, m_num3, m_num4, m_num5;
var m_total_name, m_name0, m_name1, m_name2, m_name3, m_name4, m_name5;
var arrayName = [];
var obj;
var aver, real;
var clipStep = 0,
	clipStep2 = 0;
var transToRight = 0,
	transToBottom = 0;
var duration = 5000;
var hasGetContent = 0;
var openData;
var openArray;
var closeData;
var closeArray;
var baseUrl = 'http://218.56.32.14:9002/haierV3/login.do?identity=haier&ticket=HAIER&deviceId=';
var auto = 1;
var interval;
var mapIntervId;
// 酒店项目：圣爵菲斯     deviceId:507
//  数据中心：北京三信时代  deviceId:508
//  工厂：TTI   deviceId:414
//酒店，医院，办公，工厂，数据中心，其它
var links = ['399', '502', '422', '414', '525', '503'];

var open = [16.98, 14.57, 18.16, 17.13, 21.58, 35.59, 53.16, 66.73, 79.6, 88.93, 92.09, 93.02, 92.84, 96.56, 97.69, 95.58, 90.23, 76.27, 66.38, 47.1, 45.14, 35.73, 24.22, 20.76];
var close = [120, 130, 130, 230, 100, 734, 323, 343, 145, 113, 75, 156, 123, 45, 167, 656, 422, 245, 534, 289, 312, 23, 10, 4];
$(function() {
	//总的在线数+离线数
	showChart(jsondata.datas[0].on_line, jsondata.datas[0].off_line);
	//总数
	$("#total_ins").html(jsondata.total_ins);
	$("#total_run_time").html(jsondata.total_run_time);
	$("#total_pro_num").html(jsondata.total_pro_num);
	$("#total_cold").html(jsondata.total_cold);
	$("#total_power").html(jsondata.total_power);
	requestAjax();
	type = 1;
	changeType();
	interval = setInterval('clock()', duration);
	//				setInterval('requestAjax()', 3000);
	setInterval('requestAjaxFast()', 2000);
	setInterval('transitionAnimTwo()', 40);
	//每天开关机统计
	//	showRunTimeBar();
	//温度设置
	//	showTempPieChart(122, 34, 12, 23, 45);
	//运行负荷
	showRunLoadChart(67, 37);
	//右下角四个图表
	showChartNums("#chart-num-1", 8.35, 8.36, 8.37, 8.38, 8.40);
	showChartNums("#chart-num-2", 11.05, 11.06, 11.057, 11.07, 11.08);

	$('.data-num').on('click', function() {
		if (auto == 1) {
			clearInterval(interval);
			var index = $(this).index();
			//		alert(index);
			type = index + 1;
			changeType();
			auto = 0;
			$('.auto-run').removeClass('auto-run-active');
		} else {
			auto = 1;
			interval = setInterval('clock()', duration);
			$('.auto-run').addClass('auto-run-active');
		}

	});
	$('.selected2,.auto-run').on('click', function() {
		if (auto == 1) {
			clearInterval(interval);
			auto = 0;
			$('.auto-run').removeClass('auto-run-active');
		} else {
			auto = 1;
			interval = setInterval('clock()', duration);
			$('.auto-run').addClass('auto-run-active');
		}

	});

	//累计制冷量
	var coldArr = [95.4, 96.1, 96.5, 96.9, 100.12, 104.33, 107.66];
	//累计电量
	var powerArr = [10.4, 10.5, 10.7, 10.8, 11.1, 11.5, 11.99];
	showPowerLine(coldArr, powerArr);

});

function mapInterval(param1) {
	//	var mapIndex = 0;
	//	mapIntervId = setInterval(function() {
	//		if (mapIndex > 3) {
	//			mapIndex = 0;
	//		}
	//		$("#data-map").attr("src", param1[mapIndex]);
	//		mapIndex++;
	//
	//	}, 400);
}
var datasPie = new Array();

function clock() {
	if (type > 6) {
		type = 0;
	}
	type++;
	changeType();
}

function requestAjaxFast() {
	$.ajax({
		type: "get",
		url: "http://182.92.175.40:8080/CloudPlatformServer/haierV3/adminEnergy",
		async: true,
		crossDomain: true,
		dataType: "json",
		success: function(data) {
			//						console.log(data);
			changeData(data);
		},
		error: function(obj, msg, msg2) {
			console.log("errorMsg:" + msg);
		}
	});
}

function requestAjax() {
	$.ajax({
		type: "get",
		url: "http://182.92.175.40:8080/CloudPlatformServer/haierV3/adminEnergy",
		async: true,
		crossDomain: true,
		dataType: "json",
		success: function(data) {
			changeData(data);
			changeType();
		},
		error: function(obj, msg, msg2) {
			console.log("errorMsg:" + msg);
		}
	});
}

function changeData(param) {
	//	var obj = JSON.parse(param);
	obj = eval(param);
	aver = obj.data.averEnergyCons;
	if (aver == 0) {
		//重新加载页面
		window.location.reload()
	}
	real = obj.data.realEnergyCons;
	var content = obj.data.content;
	//	alert(aver+','+real+"aaaa");

	//	changeType();
	m_num0 = obj.data.content[0].energyCount / 10.0;
	m_num1 = obj.data.content[1].energyCount / 10.0;
	m_num2 = obj.data.content[2].energyCount / 10.0;
	m_num3 = obj.data.content[3].energyCount / 10.0;
	m_num4 = obj.data.content[4].energyCount / 10.0;
	m_num5 = obj.data.content[5].energyCount / 10.0;
	m_num = m_num0 + m_num1 + m_num2 + m_num3 + m_num4 + m_num5;
	$('#data-leiji').html(comdify(m_num));
	$('#data-jiudian').html(comdify(m_num0));
	$('#data-yiyuan').html(comdify(m_num1));
	$('#data-bangong').html(comdify(m_num2));
	$('#data-gongchang').html(comdify(m_num3));
	$('#data-shuju').html(comdify(m_num4));
	$('#data-qita').html(comdify(m_num5));
	arrayName = new Array();
	var i = 0;
	if (hasGetContent == 0) {
		hasGetContent = 1;
		for (var item in content) {
			var tempName = content[item].industryName;
			var tempArray = tempName.split(',');
			var contentPerHy = '<section>';

			tempName = '';

			for (var j = 0; j < tempArray.length; j++) {
				tempName += '<p>' + tempArray[j] + '</p>';
				var namearr = tempArray[j].split('#');
				var name = namearr[0];
				var id = namearr[1];
				if (namearr.length > 1) {
					contentPerHy += '<a href="' + baseUrl + id + '"><span title="' + name + '">' + name + '</span></a>';
				} else {
					contentPerHy += '<span title="' + namearr + '">' + namearr + '</span>';
				}

				//				if (j > 14) {
				//					break;
				//				}
			}
			contentPerHy += '</section>';
			arrayName[i] = contentPerHy;
			i++;
		}
		m_total_name = '';
		$('#hangye-content').html('');
		for (var i = 0; i < arrayName.length; i++) {
			m_total_name += arrayName[i];
		}
		$('#hangye-content').html(m_total_name);
		$('#hangye-content').children().hide();
		$('#hangye-content').children().eq(0).show();
	}

}
//每次改变行业时，调用一次
function changeType() {

	//	alert('type='+type);
	datasPie = [];
	$('.data-num .num').removeClass('selected-font');
	$('.data-num .num:eq(' + (type - 1) + ')').addClass('selected-font');
	//14.3 28.6
	$('.selected2').css('left', ((type - 1) * 14.3) + '%');

	//	$('#affiche').html('');
	$('.hangye').html('');
	//即时能效
	//	showEnergy(aver, real);
	var index = type - 2;
	var mar_names = '';
	if (type == 1) {
		mar_names = m_total_name;
	} else {
		mar_names = arrayName[index]
	}
	if (typeof(mar_names) == 'undefined') {
		mar_names = '暂时没有获取到数据，请检查网络';
	}
	var marquee = '<marquee id="affiche" align="left" behavior="scroll" direction="up" height="400" width="250" hspace="0" vspace="0" loop="-1" scrollamount="8" scrolldelay="100" onMouseOut="this.start()" onMouseOver="this.stop()">';
	marquee += mar_names + '</marquee>';

	duration = 5000;
	//add by taodzh
	//	showChartNums("#chart-num-1", 3.5, 3.2, 3, 4);
	//	showChartNums("#chart-num-2", 4.6, 4.9, 4.7, 4.8);
	//切换地图 add by taodzh
	clearInterval(mapIntervId);
	var dataIndex = type - 1;
	var powerOn = jsondata.datas[dataIndex].power_on;
	var powerOff = jsondata.datas[dataIndex].power_off;
	showBar(0, 0, powerOn, powerOff);
	//在线离线数
	var onLineNum = jsondata.datas[dataIndex].on_line;
	var offLineNum = jsondata.datas[dataIndex].off_line;
	if (type != 1) {
		var item = new Object();
		item.name = "在线";
		item.y = jsondata.datas[dataIndex].on_line;
		datasPie.push(item);

		var item2 = new Object();
		item2.name = "离线";
		item2.y = jsondata.datas[dataIndex].off_line;
		datasPie.push(item2);
		showChartSingle(datasPie, jsondata.datas[dataIndex].name, item.y + item2.y);
	}
	//温度设置
	var temp7 = jsondata.datas[dataIndex].temp_setting.temp7;
	var temp8 = jsondata.datas[dataIndex].temp_setting.temp8;
	var temp9 = jsondata.datas[dataIndex].temp_setting.temp9;
	var temp10 = jsondata.datas[dataIndex].temp_setting.temp10;
	var tempetc = jsondata.datas[dataIndex].temp_setting.temp_etc;
	showTempPieChart(temp7, temp8, temp9, temp10, tempetc);
	if (type == 1) {
		$('#map-link').attr('href', baseUrl + links[0]);
		showRunTimeBar(open, close);
		//		showTempPieChart(135, 42, 31, 24, 11);
		showRunLoadChart(56, 68);
		$('#run-num-day').html(9.43);
		$('#run-num-avg').html(11.05);
		$('#run-num-power').html(11.75);
		$('#run-num-cold').html(105.33);
	} else {
		$('#map-link').attr('href', baseUrl + links[index]);
		var openIntArray = new Array();
		var closeIntArray = new Array();
		openData = obj.data.content[index].action.open;
		openArray = openData.split(',');

		for (var i = 0; i < openArray.length; i++) {
			openIntArray.push(parseInt(openArray[i]));
		}
		closeData = obj.data.content[index].action.close;
		closeArray = closeData.split(',');
		for (var i = 0; i < openArray.length; i++) {
			closeIntArray.push(parseInt(closeArray[i]));
		}
		//每天开关机统计
		showRunTimeBar(openIntArray, closeIntArray);
		//温度设置
		var t1 = parseInt(obj.data.content[index].setTemp[1]);
		var t2 = parseInt(obj.data.content[index].setTemp[2]);
		var t3 = parseInt(obj.data.content[index].setTemp[3]);
		var t4 = parseInt(obj.data.content[index].setTemp[4]);
		var t5 = parseInt(obj.data.content[index].setTemp[5]);
		//data from web
		//		showTempPieChart(t1, t2, t3, t4, t5);
		//运行负荷
		showRunLoadChart(obj.data.content[index].bear.dayBear + parseInt(Math.random() * 6 - 3),
			obj.data.content[index].bear.aveBear);
		$('#run-num-day').html(obj.data.content[index].runTimeEnergy.dayRunTime);
		$('#run-num-avg').html(obj.data.content[index].runTimeEnergy.aveRunTime);
		$('#run-num-power').html(obj.data.content[index].runTimeEnergy.power);
		$('#run-num-cold').html(obj.data.content[index].runTimeEnergy.cool);
	}
	//切换地图显示
	$('.china-map').hide();
	$('#china-map' + type).show();
	//add end

	if (type == 1) {

		var item = new Object();
		item.name = '酒店　　';
		item.y = jsondata.datas[1].on_line;
		datasPie.push(item);

		var item2 = new Object();
		item2.name = "医院";
		item2.y = jsondata.datas[2].on_line;
		datasPie.push(item2);

		var item3 = new Object();
		item3.name = "办公　　";
		item3.y = jsondata.datas[3].on_line;
		datasPie.push(item3);

		var item4 = new Object();
		item4.name = "工厂";
		item4.y = jsondata.datas[4].on_line;
		datasPie.push(item4);
		var item5 = new Object();
		item5.name = "数据中心";
		item5.y = jsondata.datas[5].on_line;
		datasPie.push(item5);
		var item6 = new Object();
		item6.name = "其它";
		item6.y = jsondata.datas[6].on_line;
		datasPie.push(item6);

		showChartSingle(datasPie, '', jsondata.total_pro_num); //-50无标题  -80 有标题
		//开机关机数
		//		showBar(0, 0, 195, 48);
		//即时能效
		//		showEnergy(aver, '9.0');
		showEnergy('9.0', getEnergy(10.8));
		showChartNums("#chart-num-3", 4.928, 5.236, 5.4824, 5.687733333, 5.872533333, 6.057333333, 6.16);
		showChartNums("#chart-num-4", 45.36, 48.195, 50.463, 52.353, 54.054, 55.755, 56.7);
	} else
	if (type == 2) {
		//即时能效
		showEnergy(10.4, getEnergy(11.6));
		showChartNums("#chart-num-3", 1.176, 1.2495, 1.3083, 1.3573, 1.4014, 1.4455, 1.47);
		showChartNums("#chart-num-4", 12.24, 13.005, 13.617, 14.127, 14.586, 15.045, 15.3);
	} else if (type == 3) {
		//即时能效
		showEnergy(9.7, getEnergy(11.2));
		showChartNums("#chart-num-3", 0.224, 0.238, 0.2492, 0.258533333, 0.266933333, 0.275333333, 0.28);
		showChartNums("#chart-num-4", 2.16, 2.295, 2.403, 2.493, 2.574, 2.655, 2.7);
	} else if (type == 4) {
		//即时能效
		showEnergy(7.1, getEnergy(9.5));
		showChartNums("#chart-num-3", 2.504, 2.6605, 2.7857, 2.890033333, 2.983933333, 3.077833333, 3.13);
		showChartNums("#chart-num-4", 17.76, 18.87, 19.758, 20.498, 21.164, 21.83, 22.2);
	} else if (type == 5) {
		//即时能效
		showEnergy(9.2, getEnergy(10.8));
		showChartNums("#chart-num-3", 4.928, 5.236, 5.4824, 5.687733333, 5.872533333, 6.057333333, 6.16);
		showChartNums("#chart-num-4", 45.36, 48.195, 50.463, 52.353, 54.054, 55.755, 56.7);
	} else if (type == 6) {
		//即时能效
		showEnergy(13.3, getEnergy(14.3));
		showChartNums("#chart-num-3", 0.272, 0.289, 0.3026, 0.313933333, 0.324133333, 0.334333333, 0.34);
		showChartNums("#chart-num-4", 3.624, 3.8505, 4.0317, 4.1827, 4.3186, 4.4545, 4.53);
	} else if (type == 7) {
		//即时能效
		showEnergy(10.6, getEnergy(11.2));
		showChartNums("#chart-num-3", 0.296, 0.3145, 0.3293, 0.341633333, 0.352733333, 0.363833333, 0.37);
		showChartNums("#chart-num-4", 3.12, 3.315, 3.471, 3.601, 3.718, 3.835, 3.9);
	}

}

function transitionAnim() {
	//	0-75%
	if (clipStep > 74) {
		if (transToRight == 1) {
			transToRight = 0;
		} else {
			transToRight = 1;
		}

	}
	if (clipStep < 1) {
		transToRight = 0;
	}
	//	if (transToRight == 0) {
	//		clipStep++;
	//	} else {
	//		clipStep--;
	//	}
	//	

	if (clipStep2 > 43) {
		if (transToBottom == 1) {
			transToBottom = 0;
		} else {
			transToBottom = 1;
		}
	}
	if (clipStep2 < 1) {
		transToBottom = 0;
	}
	//	if (transToBottom == 0) {
	//		clipStep2++;
	//	} else {
	//		clipStep2--;
	//	}

	//top
	if (transToRight == 0 && transToBottom == 0) {
		$('.top-clip').css('display', 'block');
		$('.bottom-clip').css('display', 'none');
		$('.right-clip').css('display', 'none');
		$('.left-clip').css('display', 'none');
		//		transToRight = 1;
		clipStep2 = 1;
		clipStep++;
		$('.top-clip').css('left', clipStep + '%');
	}
	//right
	if (transToRight == 1 && transToBottom == 0) {
		$('.top-clip').css('display', 'none');
		$('.bottom-clip').css('display', 'none');
		$('.right-clip').css('display', 'block');
		$('.left-clip').css('display', 'none');
		clipStep = 1;
		//		transToBottom = 1;
		clipStep2++;
		$('.right-clip').css('top', clipStep2 + '%');
	}
	//bottom
	if (transToRight == 1 && transToBottom == 1) {
		$('.top-clip').css('display', 'none');
		$('.bottom-clip').css('display', 'block');
		$('.right-clip').css('display', 'none');
		$('.left-clip').css('display', 'none');
		//		transToBottom = 0;
		clipStep2 = 1;
		clipStep++;
		$('.bottom-clip').css('right', clipStep + '%');
	}
	//left
	if (transToRight == 0 && transToBottom == 1) {
		$('.top-clip').css('display', 'none');
		$('.bottom-clip').css('display', 'none');
		$('.right-clip').css('display', 'none');
		$('.left-clip').css('display', 'block');
		//		transToRight = 0;
		clipStep = 1;
		clipStep2++;
		$('.left-clip').css('bottom', clipStep2 + '%');
	}
}

function transitionAnimTwo() {
	//	0-75%
	if (clipStep > 70) {
		if (transToRight == 1) {
			transToRight = 0;
		} else {
			transToRight = 1;
		}

	}
	if (clipStep < 1) {
		transToRight = 0;
	}

	if (clipStep2 > 43) {
		if (transToBottom == 1) {
			transToBottom = 0;
		} else {
			transToBottom = 1;
		}
	}
	if (clipStep2 < 1) {
		transToBottom = 0;
	}

	//top
	if (transToRight == 0 && transToBottom == 0) {
		$('.top-clip').css('display', 'block');
		$('.bottom-clip').css('display', 'block');
		$('.right-clip').css('display', 'none');
		$('.left-clip').css('display', 'none');
		//		transToRight = 1;
		clipStep2 = 1;
		clipStep++;
		$('.top-clip').css('left', clipStep + '%');
		$('.bottom-clip').css('right', clipStep + '%');
	}
	//right
	if (transToRight == 1 && transToBottom == 0) {
		$('.top-clip').css('display', 'none');
		$('.bottom-clip').css('display', 'none');
		$('.right-clip').css('display', 'block');
		$('.left-clip').css('display', 'block');
		clipStep = 1;
		//		transToBottom = 1;
		clipStep2++;
		$('.left-clip').css('bottom', clipStep2 + '%');
		$('.right-clip').css('top', clipStep2 + '%');
	}
	//bottom
	if (transToRight == 1 && transToBottom == 1) {
		$('.top-clip').css('display', 'block');
		$('.bottom-clip').css('display', 'block');
		$('.right-clip').css('display', 'none');
		$('.left-clip').css('display', 'none');
		//		transToBottom = 0;
		clipStep2 = 1;
		clipStep++;
		$('.top-clip').css('left', clipStep + '%');
		$('.bottom-clip').css('right', clipStep + '%');
	}
	//left
	if (transToRight == 0 && transToBottom == 1) {
		$('.top-clip').css('display', 'none');
		$('.bottom-clip').css('display', 'none');
		$('.right-clip').css('display', 'block');
		$('.left-clip').css('display', 'block');
		//		transToRight = 0;
		clipStep = 1;
		clipStep2++;
		$('.left-clip').css('bottom', clipStep2 + '%');
		$('.right-clip').css('top', clipStep2 + '%');
	}
}

function getEnergy(param) {
	return (param + Math.random() * 0.2 - 0.1).toFixed(1);
}