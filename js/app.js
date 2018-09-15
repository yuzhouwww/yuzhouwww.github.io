var app = new Vue({
    el: '#daily_transactions',
    data: {
        message: 'Hello Vue!'
    }
});

$(document).ready(function () {
    // 实时交易量
    var txCount = (0.5 + Math.random() * 0.5) * 1000000;
    updateTransactionCount(txCount);
    window.setInterval(function () {
        txCount += (0.5 + Math.random() * 0.5) * 10;
        updateTransactionCount(txCount);
    }, 1000);

    // 主网用户数量
    var myChart = echarts.init(document.getElementById('account_echarts'));
    var option = {
        // legend: {
        //     data:['MainNet Account']
        // },
        grid: { x: '0%', y: '0%', width: '100%', height: '100%', containLabel: true },
        xAxis: {
            data: ["08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04"],
            axisTick: {
                show: false
            }
        },
        yAxis: {
            // axisLine: {
            // },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: {
            name: 'MainNet Account',
            type: 'line',
            data: [39478, 48987, 62393, 78387, 95767, 128098, 155267, 197893, 251100, 322987],
            symbol: 'circle',
            lineStyle: {
                color: '#FFDD0D',
                width: 3
            },
            itemStyle: {
                color: '#FFDD0D'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FFDD0D' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'black' // 100% 处的颜色
                    }]
                }
            }
        }
    };
    myChart.setOption(option);

    // 智能合约数量
    var myChart2 = echarts.init(document.getElementById('contract_echarts'));
    var option2 = {
        grid: { x: '0%', y: '0%', width: '100%', height: '100%', containLabel: true },
        xAxis: {
            data: ["08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04"],
            axisTick: {
                show: false
            }
        },
        yAxis: {
            // axisLine: {
            // },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: {
            type: 'line',
            data: [39478, 48987, 42393, 58387, 55767, 68098, 105267, 77893, 71100, 82987],
            symbol: 'circle',
            lineStyle: {
                color: '#FFDD0D',
                width: 3
            },
            itemStyle: {
                color: '#FFDD0D'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FFDD0D' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'black' // 100% 处的颜色
                    }]
                }
            }
        }
    };
    myChart2.setOption(option2);

    // 地图闪烁标识
    window.setInterval(function () {
        let pin = $("<div class='pin'></div>");
        pin.css({
            "top": Math.random() * 438 + 50,
            "left": Math.random() * 647 + 50
        });
        pin.append($("<div class='outer_border'></div><div class='inner_border'></div>"));
        $("#earth_map_img").append(pin);
        window.setTimeout(function () {
            pin.remove();
        }, 1000);
    }, 600);

    // 初始区块动画
    window.setTimeout(function () {
        // var blocks = new Array();
        for (let index = 0; index < 62; index++) {
            var txBlock = $("<div></div>");
            txBlock.css({
                "margin-top": 92,
                "height": 92
            });
            $("#realtime_blocks").append(txBlock);
            var percent = Math.random() * 0.30 + 0.70;
            txBlock.css({
                // "margin-top": (1 - percent) * 92,
                "height": 92,
                "-webkit-transform": "translate(0, -" + percent * 92 + "px)",
                "transform": "translate(0, -" + percent * 92 + "px)"
            });
        }
    }, 100);

    // 实时区块
    window.setInterval(function () {
        $("#realtime_blocks div:first").animate({
            "margin-left": "-12px"
        }, 1000, function () {
            $(this).remove();
            var txBlock = $("<div></div>");
            txBlock.css({
                "margin-top": 92,
                "height": 92
            });
            $("#realtime_blocks").append(txBlock);
            var percent = Math.random() * 0.30 + 0.70;
            txBlock.css({
                "height": 92,
                "-webkit-transform": "translate(0, -" + percent * 92 + "px)",
                "transform": "translate(0, -" + percent * 92 + "px)"
            });
        });
    }, 15000);

    updateTime();
    window.setInterval(updateTime, 1000);

    // nas price
    var myChart3 = echarts.init(document.getElementById('price_echarts'));
    var option3 = {
        grid: { x: '0%', y: '0%', width: '100%', height: '100%', containLabel: true },
        xAxis: {
            data: ["08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04"],
            show: false,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            boundaryGap: false
        },
        yAxis: {
            min: 39478,
            show: false,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: {
            type: 'line',
            data: [39478, 48987, 42393, 58387, 55767, 68098, 70267, 77893, 71100, 82987],
            symbol: 'circle',
            lineStyle: {
                color: '#FFDD0D',
                width: 0
            },
            itemStyle: {
                color: '#00000000'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#29ED3280' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'black' // 100% 处的颜色
                    }]
                }
            }
        }
    };
    myChart3.setOption(option3);

    // 新老用户饼状图
    $("#new_user_pie").css({
        "-webkit-transform": "rotate(-120deg)",
        "transform": "rotate(-120deg)"
    });

    // special transaction
    for (let i = 0; i < 10; i++) {
        var tx = $("<div class=\"special_transaction\">\
                        <div class=\"tx_item\">\
                            <div class=\"tx_title\">Txhash</div>\
                            <div class=\"tx_count tx_hash\">0xa1bd97ce36d3f94af73</div>\
                        </div>\
                        <div class=\"tx_item\">\
                            <div class=\"tx_title\">Value</div>\
                            <div class=\"tx_count tx_value\">7,816,560.85</div>\
                        </div>\
                    </div>");
        if (i < 5) {
            tx.css({
                "margin-left": "431",
                "animation": "tx_move_in 1s ease " + i * 0.1 + "s 1 normal forwards running" 
            });
        }
        $("#special_transaction_block").append(tx);
    }
});

function updateTransactionCount(count) {
    $("#daily_transaction_block").html(count.toLocaleString('en'));

    // $("#daily_transaction_block").html("");
    // var countText = count.toLocaleString('en').replace(",", "c").replace(".", "p");
    // var htmlText = "";
    // for(var index = 0; index < countText.length; index++) {  
    //     htmlText = htmlText + "<div class=\"number number_" + countText.charAt(index) + "\"></div>";
    // } 
    // htmlText = htmlText + "<div class=\"clear\"></div>";
    // $("#daily_transaction_block").html(htmlText);
}

function updateTime() {
    var now = new Date();
    $("#time").text(now.toUTCString());
}

