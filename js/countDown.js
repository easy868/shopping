$.extend($.fn, {
    countDown: function (d) {
        this.each(function () {
            var $this = $(this);
            var o = {
                hm: $this.find(".hm"),
                sec: $this.find(".sec"),
                mini: $this.find(".mini"),
                hour: $this.find(".hour"),
                day: $this.find(".day"),
                month: $this.find(".month"),
                year: $this.find(".year")
            };
            var f = {
                haomiao: function (n) {
                    if (n < 10) return "00" + n.toString();
                    if (n < 100) return "0" + n.toString();
                    return n.toString();
                },
                zero: function (n) {
                    var _n = parseInt(n, 10);//解析字符串,返回整数
                    if (_n > 0) {
                        if (_n <= 9) {
                            _n = "0" + _n
                        }
                        return String(_n);
                    } else {
                        return "00";
                    }
                },
                dv: function () {
                    //d = d || Date.UTC(2050, 0, 1); //如果未定义时间，则我们设定倒计时日期是2050年1月1日
                    var _d = $this.data("end") || d;
                    var now = new Date(),
                        endDate = new Date(_d);
                    //现在将来秒差值
                    //alert(future.getTimezoneOffset());
                    var dur = (endDate - now.getTime()) / 1000,
                        mss = endDate - now.getTime(),
                        pms = {
                            hm: "000",
                            sec: "00",
                            mini: "00",
                            hour: "00",
                            day: "00",
                            month: "00",
                            year: "0"
                        };
                    if (mss > 0) {
                        pms.hm = f.haomiao(mss % 1000);
                        pms.sec = f.zero(dur % 60);
                        pms.mini = Math.floor((dur / 60)) > 0 ? f.zero(Math.floor((dur / 60)) % 60) : "00";
                        pms.hour = Math.floor((dur / 3600)) > 0 ? f.zero(Math.floor((dur / 3600)) % 24) : "00";
                        pms.day = Math.floor((dur / 86400)) > 0 ? f.zero(Math.floor((dur / 86400)) % 30) : "00";
                        //月份，以实际平均每月秒数计算
                        pms.month = Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
                        //年份，按按回归年365天5时48分46秒算
                        pms.year = Math.floor((dur / 31556926)) > 0 ? Math.floor((dur / 31556926)) : "0";
                    } else {
                        pms.year = pms.month = pms.day = pms.hour = pms.mini = pms.sec = "00";
                        pms.hm = "000";
                        //alert('结束了');
                        return;
                    }
                    return pms;
                },
                ui: function () {
                    if (o.hm) {
                        o.hm.html(f.dv().hm);
                    }
                    if (o.sec) {
                        o.sec.html(f.dv().sec);
                    }
                    if (o.mini) {
                        o.mini.html(f.dv().mini);
                    }
                    if (o.hour) {
                        o.hour.html(f.dv().hour);
                    }
                    if (o.day) {
                        o.day.html(f.dv().day);
                    }
                    if (o.month) {
                        o.month.html(f.dv().month);
                    }
                    if (o.year) {
                        o.year.html(f.dv().year);
                    }
                    setTimeout(f.ui, 1);
                }
            };
            f.ui();
        });
    }
});
/*
 活动倒计时代码可以精确到毫秒已经使用jquery插件化，方便调用和同一个页面重复调用。
 html结构如：
 <div id="countDown">
 <span class="year">00</span>年
 <span class="month">00</span>月
 <span class="day">00</span>天
 <span class="hour">00</span>时
 <span class="mini">00</span>分
 <span class="sec">00</span>秒
 <span class="hm">000</span>
 </div>
 1.插件调用代码： $("#countDown").countDown("2018/07/08 18:45:13");
 2.如果一个页面同时调用多个倒计时也很简单，比如相同地方有一个相同类名：countDown 我们就可以使用这个类名调用即可$(".countDown").countDown("2018/07/08 18:45:13");
 3.在扩展一下，你想给每一个倒计时设置不同的倒计时时间，这个也可以，很简单在要显示倒计时时间的标签上写上 data-end="2018/07/08 18:45:13" 而且这个优先级是比较高的。所以你可以不传日期，直接使用data-end="2018/07/08 18:45:13" 这种方式设定日期。
 如：
 <div class="countDown" data-end="2018/07/08 18:45:13">......</div>
 这样子*/
