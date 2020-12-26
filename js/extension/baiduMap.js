window.TILE_VERSION = {
    "ditu": {
        "normal": {
            "version": "088",
            "updateDate": "20191119"
        },
        "satellite": {
            "version": "009",
            "updateDate": "20191119"
        },
        "normalTraffic": {
            "version": "081",
            "updateDate": "20191119"
        },
        "satelliteTraffic": {
            "version": "083",
            "updateDate": "20191119"
        },
        "mapJS": {
            "version": "104",
            "updateDate": "20191119"
        },
        "satelliteStreet": {
            "version": "083",
            "updateDate": "20191119"
        },
        "earthVector": {
            "version": "001",
            "updateDate": "20191119"
        }
    },
    "webapp": {
        "high_normal": {
            "version": "001",
            "updateDate": "20191119"
        },
        "lower_normal": {
            "version": "002",
            "updateDate": "20191119"
        }
    },
    "api_for_mobile": {
        "vector": {
            "version": "002",
            "updateDate": "20191119"
        },
        "vectorIcon": {
            "version": "002",
            "updateDate": "20191119"
        }
    }
};
window.BMAP_AUTHENTIC_KEY = "xfhhaTThl11qYVrqLZii6w8qE5ggnhrY";
(function () {
    function ba(a) {
        throw a;
    }
    var j = void 0,
        o = !0,
        p = null,
        q = !1;

    function s() {
            return function () {}
        }
    function ca(a) {
            return function (b) {
                this[a] = b
            }
        }
    function u(a) {
            return function () {
                return this[a]
            }
        }
    function da(a) {
            return function () {
                return a
            }
        }
    var ea, fa = [];

    function ga(a) {
            return function () {
                return fa[a].apply(this, arguments)
            }
        }
    function ha(a, b) {
            return fa[a] = b
        }
    var ia, x = ia = x || {
            version: "1.3.4"
        };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        };
    x.K = x.K || {};
    x.K.$ = function (a) {
            return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
        };
    x.$ = x.Dc = x.K.$;
    x.K.U = function (a) {
            a = x.K.$(a);
            if (a === p) return a;
            a.style.display = "none";
            return a
        };
    x.U = x.K.U;
    x.lang = x.lang || {};
    x.lang.sg = function (a) {
            return "[object String]" == Object.prototype.toString.call(a)
        };
    x.sg = x.lang.sg;
    x.K.Pj = function (a) {
            return x.lang.sg(a) ? document.getElementById(a) : a
        };
    x.Pj = x.K.Pj;
    x.K.getElementsByClassName = function (a, b) {
            var c;
            if (a.getElementsByClassName) c = a.getElementsByClassName(b);
            else {
                var d = a;
                d == p && (d = document);
                c = [];
                var d = d.getElementsByTagName("*"),
                    e = d.length,
                    f = RegExp("(^|\\s)" + b + "(\\s|$)"),
                    g, i;
                for (i = g = 0; g < e; g++) f.test(d[g].className) && (c[i] = d[g], i++)
            }
            return c
        };
    x.getElementsByClassName = x.K.getElementsByClassName;
    x.K.contains = function (a, b) {
            var c = x.K.Pj,
                a = c(a),
                b = c(b);
            return a.contains ? a != b && a.contains(b) : !! (a.compareDocumentPosition(b) & 16)
        };
    x.da = x.da || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.la = x.la = document.documentMode || +RegExp.$1);
    var ja = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            rowspan: "rowSpan",
            valign: "vAlign",
            usemap: "useMap",
            frameborder: "frameBorder"
        };
    8 > x.da.la ? (ja["for"] = "htmlFor", ja["class"] = "className") : (ja.htmlFor = "for", ja.className = "class");
    x.K.EG = ja;
    x.K.qF = function (a, b, c) {
            a = x.K.$(a);
            if (a === p) return a;
            if ("style" == b) a.style.cssText = c;
            else {
                b = x.K.EG[b] || b;
                a.setAttribute(b, c)
            }
            return a
        };
    x.qF = x.K.qF;
    x.K.rF = function (a, b) {
            a = x.K.$(a);
            if (a === p) return a;
            for (var c in b) x.K.qF(a, c, b[c]);
            return a
        };
    x.rF = x.K.rF;
    x.Tk = x.Tk || {};
        (function () {
            var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            x.Tk.trim = function (b) {
                return ("" + b).replace(a, "")
            }
        })();
    x.trim = x.Tk.trim;
    x.Tk.Uo = function (a, b) {
            var a = "" + a,
                c = Array.prototype.slice.call(arguments, 1),
                d = Object.prototype.toString;
            if (c.length) {
                    c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
                    return a.replace(/#\{(.+?)\}/g, function (a, b) {
                        var g = c[b];
                        "[object Function]" == d.call(g) && (g = g(b));
                        return "undefined" == typeof g ? "" : g
                    })
                }
            return a
        };
    x.Uo = x.Tk.Uo;
    x.K.Tb = function (a, b) {
            a = x.K.$(a);
            if (a === p) return a;
            for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
                g = 0;
                for (e = c.length; g < e; ++g) if (c[g] == d[i]) {
                    c.splice(g, 1);
                    break
                }
            }
            a.className = c.join(" ");
            return a
        };
    x.Tb = x.K.Tb;
    x.K.Nx = function (a, b, c) {
            a = x.K.$(a);
            if (a === p) return a;
            var d;
            if (a.insertAdjacentHTML) a.insertAdjacentHTML(b, c);
            else {
                d = a.ownerDocument.createRange();
                b = b.toUpperCase();
                if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                    d.selectNodeContents(a);
                    d.collapse(b == "AFTERBEGIN")
                } else {
                    b = b == "BEFOREBEGIN";
                    d[b ? "setStartBefore" : "setEndAfter"](a);
                    d.collapse(b)
                }
                d.insertNode(d.createContextualFragment(c))
            }
            return a
        };
    x.Nx = x.K.Nx;
    x.K.show = function (a) {
            a = x.K.$(a);
            if (a === p) return a;
            a.style.display = "";
            return a
        };
    x.show = x.K.show;
    x.K.JD = function (a) {
            a = x.K.$(a);
            return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
        };
    x.K.Ua = function (a, b) {
            a = x.K.$(a);
            if (a === p) return a;
            for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++) e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
            a.className = d;
            return a
        };
    x.Ua = x.K.Ua;
    x.K.GB = x.K.GB || {};
    x.K.Ol = x.K.Ol || [];
    x.K.Ol.filter = function (a, b, c) {
            for (var d = 0, e = x.K.Ol, f; f = e[d]; d++) if (f = f[c]) b = f(a, b);
            return b
        };
    x.Tk.wO = function (a) {
            return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function (a) {
                return a.charAt(1).toUpperCase()
            })
        };
    x.K.J_ = function (a) {
            x.K.ft(a, "expand") ? x.K.Tb(a, "expand") : x.K.Ua(a, "expand")
        };
    x.K.ft = function (a) {
            if (arguments.length <= 0 || typeof a === "function") return this;
            if (this.size() <= 0) return q;
            var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
                b = a.split(" "),
                c;
            x.forEach(this, function (a) {
                    for (var a = a.className, e = 0; e < b.length; e++) if (!~ (" " + a + " ").indexOf(" " + b[e] + " ")) {
                        c = q;
                        return
                    }
                    c !== q && (c = o)
                });
            return c
        };
    x.K.sj = function (a, b) {
            var c = x.K,
                a = c.$(a);
            if (a === p) return a;
            var b = x.Tk.wO(b),
                d = a.style[b];
            if (!d) var e = c.GB[b],
                d = a.currentStyle || (x.da.la ? a.style : getComputedStyle(a, p)),
                d = e && e.get ? e.get(a, d) : d[e || b];
            if (e = c.Ol) d = e.filter(b, d, "get");
            return d
        };
    x.sj = x.K.sj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
    x.da.pM = /webkit/i.test(navigator.userAgent);
    x.da.qY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.da.uE = "CSS1Compat" == document.compatMode;
    x.K.ha = function (a) {
            a = x.K.$(a);
            if (a === p) return a;
            var b = x.K.JD(a),
                c = x.da,
                d = x.K.sj;
            c.qY > 0 && b.getBoxObjectFor && d(a, "position");
            var e = {
                    left: 0,
                    top: 0
                },
                f;
            if (a == (c.la && !c.uE ? b.body : b.documentElement)) return e;
            if (a.getBoundingClientRect) {
                    a = a.getBoundingClientRect();
                    e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
                    e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
                    e.left = e.left - b.documentElement.clientLeft;
                    e.top = e.top - b.documentElement.clientTop;
                    a = b.body;
                    b = parseInt(d(a, "borderLeftWidth"));
                    d = parseInt(d(a, "borderTopWidth"));
                    if (c.la && !c.uE) {
                        e.left = e.left - (isNaN(b) ? 2 : b);
                        e.top = e.top - (isNaN(d) ? 2 : d)
                    }
                } else {
                    f = a;
                    do {
                        e.left = e.left + f.offsetLeft;
                        e.top = e.top + f.offsetTop;
                        if (c.pM > 0 && d(f, "position") == "fixed") {
                            e.left = e.left + b.body.scrollLeft;
                            e.top = e.top + b.body.scrollTop;
                            break
                        }
                        f = f.offsetParent
                    } while (f && f != a);
                    if (c.opera > 0 || c.pM > 0 && d(a, "position") == "absolute") e.top = e.top - b.body.offsetTop;
                    for (f = a.offsetParent; f && f != b.body;) {
                        e.left = e.left - f.scrollLeft;
                        if (!c.opera || f.tagName != "TR") e.top = e.top - f.scrollTop;
                        f = f.offsetParent
                    }
                }
            return e
        };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Se = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.da.A1 = o);
    var ka = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(ka) && !/chrome/i.test(ka) && (x.da.kF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.Iw = +RegExp.$1);
    x.kc = x.kc || {};
    x.kc.Gb = function (a, b) {
            var c, d, e = a.length;
            if ("function" == typeof b) for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === q) break
            }
            return a
        };
    x.Gb = x.kc.Gb;
    x.lang.ba = function () {
            return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
        };
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.ut = function (a) {
            return "[object Function]" == Object.prototype.toString.call(a)
        };
    x.lang.Ca = function (a) {
            this.ba = a || x.lang.ba();
            window[x.ba]._instances[this.ba] = this
        };
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Ca.prototype.gi = ga(0);
    x.lang.Ca.prototype.toString = function () {
            return "[object " + (this.BQ || "Object") + "]"
        };
    x.lang.bz = function (a, b) {
            this.type = a;
            this.returnValue = o;
            this.target = b || p;
            this.currentTarget = p
        };
    x.lang.Ca.prototype.addEventListener = function (a, b, c) {
            if (x.lang.ut(b)) {
                !b.el && (b.el = {});
                !this.Gi && (this.Gi = {});
                var d = this.Gi,
                    e;
                if (typeof c == "string" && c) {
                        /[^\w\-]/.test(c) && ba("nonstandard key:" + c);
                        e = b.Fx = c
                    }
                a.indexOf("on") != 0 && (a = "on" + a);
                typeof d[a] != "object" && (d[a] = {});
                typeof b.el[a] != "object" && (b.el[a] = {});
                e = e || x.lang.ba();
                b.el[a].Fx = e;
                d[a][e] = b
            }
        };
    x.lang.Ca.prototype.removeEventListener = function (a, b) {
            a.indexOf("on") != 0 && (a = "on" + a);
            if (x.lang.ut(b)) {
                if (!b.el || !b.el[a]) return;
                b = b.el[a].Fx
            } else if (!x.lang.sg(b)) return;
            !this.Gi && (this.Gi = {});
            var c = this.Gi;
            c[a] && c[a][b] && delete c[a][b]
        };
    x.lang.Ca.prototype.dispatchEvent = function (a, b) {
            x.lang.sg(a) && (a = new x.lang.bz(a));
            !this.Gi && (this.Gi = {});
            var b = b || {},
                c;
            for (c in b) a[c] = b[c];
            var d = this.Gi,
                e = a.type;
            a.target = a.target || this;
            a.currentTarget = this;
            e.indexOf("on") != 0 && (e = "on" + e);
            x.lang.ut(this[e]) && this[e].apply(this, arguments);
            if (typeof d[e] == "object") for (c in d[e]) d[e][c].apply(this, arguments);
            return a.returnValue
        };
    x.lang.ua = function (a, b, c) {
            var d, e, f = a.prototype;
            e = new Function;
            e.prototype = b.prototype;
            e = a.prototype = new e;
            for (d in f) e[d] = f[d];
            a.prototype.constructor = a;
            a.A_ = b.prototype;
            if ("string" == typeof c) e.BQ = c
        };
    x.ua = x.lang.ua;
    x.lang.Kc = function (a) {
            return window[x.ba]._instances[a] || p
        };
    x.platform = x.platform || {};
    x.platform.iM = /macintosh/i.test(navigator.userAgent);
    x.platform.n3 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.qM = /windows/i.test(navigator.userAgent);
    x.platform.yY = /x11/i.test(navigator.userAgent);
    x.platform.Km = /android/i.test(navigator.userAgent);
    /android (\d+(\.\d)?)/i.test(navigator.userAgent) && (x.platform.SJ = x.SJ = RegExp.$1);
    x.platform.sY = /ipad/i.test(navigator.userAgent);
    x.platform.qE = /iphone/i.test(navigator.userAgent);

    function la(a, b) {
            a.domEvent = b = window.event || b;
            a.clientX = b.clientX || b.pageX;
            a.clientY = b.clientY || b.pageY;
            a.offsetX = b.offsetX || b.layerX;
            a.offsetY = b.offsetY || b.layerY;
            a.screenX = b.screenX;
            a.screenY = b.screenY;
            a.ctrlKey = b.ctrlKey || b.metaKey;
            a.shiftKey = b.shiftKey;
            a.altKey = b.altKey;
            if (b.touches) {
                a.touches = [];
                for (var c = 0; c < b.touches.length; c++) a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
            }
            if (b.changedTouches) {
                a.changedTouches = [];
                for (c = 0; c < b.changedTouches.length; c++) a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
            }
            if (b.targetTouches) {
                a.targetTouches = [];
                for (c = 0; c < b.targetTouches.length; c++) a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
            }
            a.rotation = b.rotation;
            a.scale = b.scale;
            return a
        }
    x.lang.Xw = function (a) {
            var b = window[x.ba];
            b.MS && delete b.MS[a]
        };
    x.event = {};
    x.M = x.event.M = function (a, b, c) {
            if (!(a = x.$(a))) return a;
            b = b.replace(/^on/, "");
            a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
            return a
        };
    x.bd = x.event.bd = function (a, b, c) {
            if (!(a = x.$(a))) return a;
            b = b.replace(/^on/, "");
            a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
            return a
        };
    x.K.ft = function (a, b) {
            if (!a || !a.className || typeof a.className != "string") return q;
            var c = -1;
            try {
                c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
            } catch (d) {
                return q
            }
            return c > -1
        };
    x.XK = function () {
            function a(a) {
                document.addEventListener && (this.element = a, this.$K = this.zk ? "touchstart" : "mousedown", this.qD = this.zk ? "touchmove" : "mousemove", this.pD = this.zk ? "touchend" : "mouseup", this.oh = q, this.ju = this.iu = 0, this.element.addEventListener(this.$K, this, q), ia.M(this.element, "mousedown", s()), this.handleEvent(p))
            }
            a.prototype = {
                zk: "ontouchstart" in window || "createTouch" in document,
                start: function (a) {
                    ma(a);
                    this.oh = q;
                    this.iu = this.zk ? a.touches[0].clientX : a.clientX;
                    this.ju = this.zk ? a.touches[0].clientY : a.clientY;
                    this.element.addEventListener(this.qD, this, q);
                    this.element.addEventListener(this.pD, this, q)
                },
                move: function (a) {
                    na(a);
                    var c = this.zk ? a.touches[0].clientY : a.clientY;
                    if (10 < Math.abs((this.zk ? a.touches[0].clientX : a.clientX) - this.iu) || 10 < Math.abs(c - this.ju)) this.oh = o
                },
                end: function (a) {
                    na(a);
                    this.oh || (a = document.createEvent("Event"), a.initEvent("tap", q, o), this.element.dispatchEvent(a));
                    this.element.removeEventListener(this.qD, this, q);
                    this.element.removeEventListener(this.pD, this, q)
                },
                handleEvent: function (a) {
                    if (a) switch (a.type) {
                    case this.$K:
                        this.start(a);
                        break;
                    case this.qD:
                        this.move(a);
                        break;
                    case this.pD:
                        this.end(a)
                    }
                }
            };
            return function (b) {
                return new a(b)
            }
        }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.LU = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Gr = [];
    z.We = function (a) {
            this.Gr.push(a)
        };
    z.wr = [];
    z.Vm = function (a) {
            this.wr.push(a)
        };
    z.ZU = z.apiLoad ||
    function () {
            z.version && z.version >= 1.5 && oa(z.qc + "?qt=verify&ak=" + pa, function (a) {
                if (a && a.error !== 0) {
                    if (typeof map !== "undefined") {
                        map.La().innerHTML = "";
                        map.Gi = {}
                    }
                    z = p;
                    var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                    switch (a.error) {
                    case 101:
                        b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                        break;
                    case 102:
                        b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                    }
                    alert(b)
                }
            })
        };
    var pa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var qa = window.BMap_loadScriptTime,
        ra = (new Date).getTime(),
        sa = p,
        ta = o,
        ua = 5042,
        va = 5002,
        wa = 5003,
        xa = "load_mapclick",
        ya = 5038,
        za = 5041,
        Ba = 5047,
        Ca = 5036,
        Da = 5039,
        Ea = 5037,
        Fa = 5040,
        Ga = 5011,
        Ha = 7E3;
    var Ia = 0;

    function Ka(a, b) {
            if (a = x.$(a)) {
                var c = this;
                x.lang.Ca.call(c);
                b = b || {};
                c.C = {
                    rk: b.fixedZoomCenter || q,
                    lC: 200,
                    Hb: o,
                    fx: q,
                    iD: o,
                    Ro: o,
                    So: b.enableWheelZoom || q,
                    VK: o,
                    kD: o,
                    pm: o,
                    Ks: o,
                    qm: o,
                    Po: b.enable3DBuilding || q,
                    Gc: 25,
                    s0: 240,
                    NU: 450,
                    Yb: F.Yb,
                    Fd: F.Fd,
                    Qx: !! b.Qx,
                    gc: Math.round(b.minZoom) || 1,
                    $b: Math.round(b.maxZoom) || 19,
                    Jb: b.mapType || La,
                    e4: q,
                    QK: b.drawer || Ia,
                    dx: o,
                    ax: 500,
                    zW: b.enableHighResolution !== q,
                    lj: b.enableMapClick !== q,
                    devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                    VF: 99,
                    xe: b.mapStyle || p,
                    GY: b.logoControl === q ? q : o,
                    fV: [],
                    Bw: b.beforeClickIcon || p,
                    eD: b.enableBizAuthLogo === q ? q : o
                };
                c.C.xe && (this.hY(c.C.xe.controls), this.cM(c.C.xe.geotableId));
                c.C.xe && c.C.xe.styleId && c.X2(c.C.xe.styleId);
                c.C.hm = {
                    dark: {
                        backColor: "#2D2D2D",
                        textColor: "#bfbfbf",
                        iconUrl: "dicons"
                    },
                    normal: {
                        backColor: "#F3F1EC",
                        textColor: "#c61b1b",
                        iconUrl: "icons"
                    },
                    light: {
                        backColor: "#EBF8FC",
                        textColor: "#017fb4",
                        iconUrl: "licons"
                    }
                };
                b.enableAutoResize && (c.C.Ks = b.enableAutoResize);
                b.enableStreetEntrance === q && (c.C.qm = b.enableStreetEntrance);
                b.enableDeepZoom === q && (c.C.VK = b.enableDeepZoom);
                var d = c.C.fV;
                if (G()) for (var e = 0, f = d.length; e < f; e++) if (x.da[d[e]]) {
                    c.C.devicePixelRatio = 1;
                    break
                }
                d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
                e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
                if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e) c.C.VF = 99;
                c.Va = a;
                c.zB(a);
                a.unselectable = "on";
                a.innerHTML = "";
                a.appendChild(c.va());
                b.size && this.Ae(b.size);
                d = c.Bb();
                c.width = d.width;
                c.height = d.height;
                c.offsetX = 0;
                c.offsetY = 0;
                c.platform = a.firstChild;
                c.ye = c.platform.firstChild;
                c.ye.style.width = c.width + "px";
                c.ye.style.height = c.height + "px";
                c.Wd = {};
                c.Oe = new H(0, 0);
                c.mc = new H(0, 0);
                c.Oa = 3;
                c.Lc = 0;
                c.DC = p;
                c.CC = p;
                c.Xb = "";
                c.Jw = "";
                c.Oh = {};
                c.Oh.custom = {};
                c.Ta = 0;
                b.useWebGL === q && Ma(q);
                c.P = new Na(a, {
                    Of: "api",
                    RS: o
                });
                c.P.U();
                c.P.vF(c);
                b = b || {};
                d = c.Jb = c.C.Jb;
                c.ie = d.ep();
                d === Pa && Qa(va);
                d === Sa && Qa(wa);
                d = c.C;
                d.OO = Math.round(b.minZoom);
                d.NO = Math.round(b.maxZoom);
                c.Xu();
                c.R = {
                    Hc: q,
                    lc: 0,
                    up: 0,
                    uM: 0,
                    r3: 0,
                    dC: q,
                    cF: -1,
                    Qe: []
                };
                c.platform.style.cursor = c.C.Yb;
                for (e = 0; e < z.Gr.length; e++) z.Gr[e](c);
                c.R.cF = e;
                c.ca();
                I.load("map", function () {
                    c.yb()
                });
                c.C.lj && (setTimeout(function () {
                    Qa(xa)
                }, 1E3), I.load("mapclick", function () {
                    window.MPC_Mgr = window.MPC_Mgr || {};
                    window.MPC_Mgr[c.ba] = new Ta(c)
                }, o));
                Ua() && I.load("oppc", function () {
                    c.vz()
                });
                G() && I.load("opmb", function () {
                    c.vz()
                });
                a = p;
                c.NB = []
            }
        }
    x.lang.ua(Ka, x.lang.Ca, "Map");
    x.extend(Ka.prototype, {
            va: function () {
                var a = K("div"),
                    b = a.style;
                b.overflow = "visible";
                b.position = "absolute";
                b.zIndex = "0";
                b.top = b.left = "0px";
                var b = K("div", {
                        "class": "BMap_mask"
                    }),
                    c = b.style;
                c.position = "absolute";
                c.top = c.left = "0px";
                c.zIndex = "9";
                c.overflow = "hidden";
                c.WebkitUserSelect = "none";
                a.appendChild(b);
                return a
            },
            zB: function (a) {
                var b = a.style;
                b.overflow = "hidden";
                "absolute" !== Va(a).position && (b.position = "relative", b.zIndex = 0);
                b.backgroundColor = "#F3F1EC";
                b.color = "#000";
                b.textAlign = "left"
            },
            ca: function () {
                var a = this;
                a.uo = function () {
                    var b = a.Bb();
                    if (a.width !== b.width || a.height !== b.height) {
                        var c = new L(a.width, a.height),
                            d = new M("onbeforeresize");
                        d.size = c;
                        a.dispatchEvent(d);
                        a.hk((b.width - a.width) / 2, (b.height - a.height) / 2);
                        a.ye.style.width = (a.width = b.width) + "px";
                        a.ye.style.height = (a.height = b.height) + "px";
                        c = new M("onresize");
                        c.size = b;
                        a.dispatchEvent(c)
                    }
                };
                a.C.Ks && (a.R.$l = setInterval(a.uo, 80))
            },
            hk: function (a, b, c, d) {
                var e = this.oa().yc(this.fa()),
                    f = this.ie,
                    g = o;
                c && H.hM(c) && (this.Oe = new H(c.lng, c.lat), g = q);
                if (c = c && d ? f.Ck(c, this.Xb) : this.mc) if (this.mc = new H(c.lng + a * e, c.lat - b * e), (a = f.nh(this.mc, this.Xb)) && g) this.Oe = a
            },
            Cg: function (a, b) {
                if (Wa(a) && (this.Xu(), this.dispatchEvent(new M("onzoomstart")), a = this.Xn(a).zoom, a !== this.Oa)) {
                    this.Lc = this.Oa;
                    this.Oa = a;
                    var c;
                    b ? c = b : this.gh() && (c = this.gh().ha());
                    c && (c = this.bc(c, this.Lc), this.hk(this.width / 2 - c.x, this.height / 2 - c.y, this.wb(c, this.Lc), o));
                    this.dispatchEvent(new M("onzoomstartcode"))
                }
            },
            Nc: function (a) {
                this.Cg(a)
            },
            ZF: function (a) {
                this.Cg(this.Oa + 1, a)
            },
            $F: function (a) {
                this.Cg(this.Oa - 1, a)
            },
            ui: function (a) {
                a instanceof H && (this.mc = this.ie.Ck(a, this.Xb), this.Oe = H.hM(a) ? new H(a.lng, a.lat) : this.ie.nh(this.mc, this.Xb))
            },
            wg: function (a, b) {
                a = Math.round(a) || 0;
                b = Math.round(b) || 0;
                this.hk(-a, -b)
            },
            as: function (a) {
                a && Xa(a.Ge) && (a.Ge(this), this.dispatchEvent(new M("onaddcontrol", a)))
            },
            EN: function (a) {
                a && Xa(a.remove) && (a.remove(), this.dispatchEvent(new M("onremovecontrol", a)))
            },
            xo: function (a) {
                a && Xa(a.ra) && (a.ra(this), this.dispatchEvent(new M("onaddcontextmenu", a)))
            },
            Fp: function (a) {
                a && Xa(a.remove) && (this.dispatchEvent(new M("onremovecontextmenu", a)), a.remove())
            },
            Ka: function (a) {
                a && Xa(a.Ge) && (a.Ge(this), this.dispatchEvent(new M("onaddoverlay", a)))
            },
            Ub: function (a) {
                a && Xa(a.remove) && (a.remove(), this.dispatchEvent(new M("onremoveoverlay", a)))
            },
            lK: function () {
                this.dispatchEvent(new M("onclearoverlays"))
            },
            Vg: function (a) {
                a && this.dispatchEvent(new M("onaddtilelayer", a))
            },
            wh: function (a) {
                a && this.dispatchEvent(new M("onremovetilelayer", a))
            },
            zg: function (a) {
                if (this.Jb !== a) {
                    var b = new M("onsetmaptype");
                    b.V3 = this.Jb;
                    this.Jb = this.C.Jb = a;
                    this.ie = this.Jb.ep();
                    this.hk(0, 0, this.Ha(), o);
                    this.Xu();
                    var c = this.Xn(this.fa()).zoom;
                    this.Cg(c);
                    this.dispatchEvent(b);
                    b = new M("onmaptypechange");
                    b.Oa = c;
                    b.Jb = a;
                    this.dispatchEvent(b);
                    (a === Ya || a === Sa) && Qa(wa)
                }
            },
            Vf: function (a) {
                var b = this;
                if (a instanceof H) b.ui(a, {
                    noAnimation: o
                });
                else if (Za(a)) if (b.Jb === Pa) {
                    var c = F.hC[a];
                    c && (pt = c.m, b.Vf(pt))
                } else {
                    var d = this.LH();
                    d.yF(function (c) {
                        0 === d.Am() && 2 === d.Fa.result.type && (b.Vf(c.xk(0).point), Pa.tk(a) && b.sF(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
            },
            Dd: function (a, b) {
                "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
                z.En("cus.fire", "time", {
                    z_loadscripttime: ra - qa
                });
                var c = this;
                if (Za(a)) if (c.Jb === Pa) {
                    var d = F.hC[a];
                    d && (pt = d.m, c.Dd(pt, b))
                } else {
                    var e = c.LH();
                    e.yF(function (d) {
                        if (0 === e.Am() && (2 === e.Fa.result.type || 11 === e.Fa.result.type)) {
                            var d = d.xk(0).point,
                                f = b || O.ix(e.Fa.content.level, c);
                            c.Dd(d, f);
                            Pa.tk(a) && c.sF(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                } else if (a instanceof H && b) {
                    b = c.Xn(b).zoom;
                    c.Lc = c.Oa || b;
                    c.Oa = b;
                    d = c.Oe;
                    c.Oe = new H(a.lng, a.lat);
                    c.mc = c.ie.Ck(c.Oe, c.Xb);
                    c.DC = c.DC || c.Oa;
                    c.CC = c.CC || c.Oe;
                    var f = new M("onload"),
                        g = new M("onloadcode");
                    f.point = new H(a.lng, a.lat);
                    f.pixel = c.bc(c.Oe, c.Oa);
                    f.zoom = b;
                    c.loaded || (c.loaded = o, c.dispatchEvent(f), sa || (sa = $a()));
                    c.dispatchEvent(g);
                    f = new M("onmoveend");
                    f.nH = "centerAndZoom";
                    d.nb(c.Oe) || c.dispatchEvent(f);
                    c.dispatchEvent(new M("onmoveend"));
                    c.Lc !== c.Oa && (d = new M("onzoomend"), d.nH = "centerAndZoom", c.dispatchEvent(d));
                    c.C.Po && c.Po()
                }
            },
            LH: function () {
                this.R.EM || (this.R.EM = new ab(1));
                return this.R.EM
            },
            reset: function () {
                this.Dd(this.CC, this.DC, o)
            },
            enableDragging: function () {
                this.C.Hb = o
            },
            disableDragging: function () {
                this.C.Hb = q
            },
            enableInertialDragging: function () {
                this.C.dx = o
            },
            disableInertialDragging: function () {
                this.C.dx = q
            },
            enableScrollWheelZoom: function () {
                this.C.So = o
            },
            disableScrollWheelZoom: function () {
                this.C.So = q
            },
            enableContinuousZoom: function () {
                this.C.Ro = o
            },
            disableContinuousZoom: function () {
                this.C.Ro = q
            },
            enableDoubleClickZoom: function () {
                this.C.iD = o
            },
            disableDoubleClickZoom: function () {
                this.C.iD = q
            },
            enableKeyboard: function () {
                this.C.fx = o
            },
            disableKeyboard: function () {
                this.C.fx = q
            },
            enablePinchToZoom: function () {
                this.C.pm = o
            },
            disablePinchToZoom: function () {
                this.C.pm = q
            },
            enableAutoResize: function () {
                this.C.Ks = o;
                this.uo();
                this.R.$l || (this.R.$l = setInterval(this.uo, 80))
            },
            disableAutoResize: function () {
                this.C.Ks = q;
                this.R.$l && (clearInterval(this.R.$l), this.R.$l = p)
            },
            enableBizAuthLogo: function () {
                this.C.eD = o;
                this.Cw && this.Cw.show()
            },
            disableBizAuthLogo: function () {
                this.C.eD = q;
                this.Cw && this.Cw.U()
            },
            Po: function () {
                this.C.Po = o;
                this.Mn || (this.Mn = new bb({
                    dL: o
                }), this.Vg(this.Mn))
            },
            jW: function () {
                this.C.Po = q;
                this.Mn && (this.wh(this.Mn), this.Mn = p, delete this.Mn)
            },
            Bb: function () {
                return this.vs && this.vs instanceof L ? new L(this.vs.width, this.vs.height) : new L(this.Va.clientWidth, this.Va.clientHeight)
            },
            Ae: function (a) {
                a && a instanceof L ? (this.vs = a, this.Va.style.width = a.width + "px", this.Va.style.height = a.height + "px") : this.vs = p
            },
            Ha: u("Oe"),
            fa: u("Oa"),
            AV: function () {
                this.uo()
            },
            Xn: function (a) {
                var b = this.C.gc,
                    c = this.C.$b,
                    d = q,
                    a = Math.round(a);
                a < b && (d = o, a = b);
                a > c && (d = o, a = c);
                return {
                        zoom: a,
                        rD: d
                    }
            },
            La: u("Va"),
            bc: function (a, b) {
                b = b || this.fa();
                return this.ie.bc(a, b, this.mc, this.Bb(), this.Xb)
            },
            wb: function (a, b) {
                b = b || this.fa();
                return this.ie.wb(a, b, this.mc, this.Bb(), this.Xb)
            },
            Ve: function (a, b) {
                if (a) {
                    var c = this.bc(new H(a.lng, a.lat), b);
                    c.x -= this.offsetX;
                    c.y -= this.offsetY;
                    return c
                }
            },
            sN: function (a, b) {
                if (a) {
                    var c = new R(a.x, a.y);
                    c.x += this.offsetX;
                    c.y += this.offsetY;
                    return this.wb(c, b)
                }
            },
            pointToPixelFor3D: function (a, b) {
                var c = map.Xb;
                this.Jb === Pa && c && cb.rK(a, this, b)
            },
            P3: function (a, b) {
                var c = map.Xb;
                this.Jb === Pa && c && cb.qK(a, this, b)
            },
            Q3: function (a, b) {
                var c = this,
                    d = map.Xb;
                c.Jb === Pa && d && cb.rK(a, c, function (a) {
                        a.x -= c.offsetX;
                        a.y -= c.offsetY;
                        b && b(a)
                    })
            },
            N3: function (a, b) {
                var c = map.Xb;
                this.Jb === Pa && c && (a.x += this.offsetX, a.y += this.offsetY, cb.qK(a, this, b))
            },
            Hd: function (a) {
                if (!this.Px()) return new db;
                var b = a || {},
                    a = b.margins || [0, 0, 0, 0],
                    c = b.zoom || p,
                    b = this.wb({
                        x: a[3],
                        y: this.height - a[2]
                    }, c),
                    a = this.wb({
                        x: this.width - a[1],
                        y: a[0]
                    }, c);
                return new db(b, a)
            },
            Px: function () {
                return !!this.loaded
            },
            TR: function (a, b) {
                for (var c = this.oa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.$o(), i = c = c.wm(); i >= g; i--) {
                    var k = this.oa().yc(i);
                    if (a.NF().lng / k < this.width - f && a.NF().lat / k < this.height - d) break
                }
                i += e;
                i < g && (i = g);
                i > c && (i = c);
                return i
            },
            dt: function (a, b) {
                var c = {
                    center: this.Ha(),
                    zoom: this.fa()
                };
                if (!a || !a instanceof db && 0 === a.length || a instanceof db && a.xj()) return c;
                var d = [];
                a instanceof db ? (d.push(a.nf()), d.push(a.ve())) : d = a.slice(0);
                for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++) e.push(this.ie.Ck(d[f], this.Xb));
                d = new db;
                for (f = e.length - 1; 0 <= f; f--) d.extend(e[f]);
                if (d.xj()) return c;
                c = d.Ha();
                e = this.TR(d, b);
                b.margins && (d = b.margins, f = (d[1] - d[3]) / 2, d = (d[0] - d[2]) / 2, g = this.oa().yc(e), b.offset && (f = b.offset.width, d = b.offset.height), c.lng += g * f, c.lat += g * d);
                c = this.ie.nh(c, this.Xb);
                return {
                    center: c,
                    zoom: e
                }
            },
            zh: function (a, b) {
                var c;
                c = a && a.center ? a : this.dt(a, b);
                var b = b || {},
                    d = b.delay || 200;
                if (c.zoom === this.Oa && b.enableAnimation !== q) {
                        var e = this;
                        setTimeout(function () {
                            e.ui(c.center, {
                                duration: 210
                            })
                        }, d)
                    } else this.Dd(c.center, c.zoom)
            },
            Qf: u("Wd"),
            gh: function () {
                return this.R.ob && this.R.ob.Wa() ? this.R.ob : p
            },
            getDistance: function (a, b) {
                if (a && b) {
                    if (a.nb(b)) return 0;
                    var c = 0,
                        c = S.Yo(a, b);
                    if (c === p || c === j) c = 0;
                    return c
                }
            },
            yx: function () {
                var a = [],
                    b = this.wa,
                    c = this.De;
                if (b) for (var d in b) b[d] instanceof eb && a.push(b[d]);
                if (c) {
                        d = 0;
                        for (b = c.length; d < b; d++) a.push(c[d])
                    }
                return a
            },
            oa: u("Jb"),
            vz: function () {
                for (var a = this.R.cF; a < z.Gr.length; a++) z.Gr[a](this);
                this.R.cF = a
            },
            sF: function (a) {
                this.Xb = Pa.tk(a);
                this.Jw = Pa.pL(this.Xb);
                this.Jb === Pa && this.ie instanceof fb && (this.ie.ej = this.Xb)
            },
            setDefaultCursor: function (a) {
                this.C.Yb = a;
                this.platform && (this.platform.style.cursor = this.C.Yb)
            },
            getDefaultCursor: function () {
                return this.C.Yb
            },
            setDraggingCursor: function (a) {
                this.C.Fd = a
            },
            getDraggingCursor: function () {
                return this.C.Fd
            },
            Kx: function () {
                return this.C.zW && 1.5 <= this.C.devicePixelRatio
            },
            tw: function (a, b) {
                b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
                a.tag = b;
                a instanceof gb && (this.Oh[b][a.ba] = a, a.ra(this));
                var c = this;
                I.load("hotspot", function () {
                    c.vz()
                }, o)
            },
            sZ: function (a, b) {
                b || (b = "custom");
                this.Oh[b][a.ba] && delete this.Oh[b][a.ba]
            },
            fm: function (a) {
                a || (a = "custom");
                this.Oh[a] = {}
            },
            Xu: function () {
                var a = this.Jb.$o(),
                    b = this.Jb.wm(),
                    c = this.C;
                c.gc = c.OO || a;
                c.$b = c.NO || b;
                c.gc < a && (c.gc = a);
                c.$b > b && (c.$b = b)
            },
            setMinZoom: function (a) {
                a = Math.round(a);
                a > this.C.$b && (a = this.C.$b);
                this.C.OO = a;
                this.uJ()
            },
            setMaxZoom: function (a) {
                a = Math.round(a);
                a < this.C.gc && (a = this.C.gc);
                this.C.NO = a;
                this.uJ()
            },
            uJ: function () {
                this.Xu();
                var a = this.C;
                this.Oa < a.gc ? this.Nc(a.gc) : this.Oa > a.$b && this.Nc(a.$b);
                var b = new M("onzoomspanchange");
                b.gc = a.gc;
                b.$b = a.$b;
                this.dispatchEvent(b)
            },
            Z2: u("NB"),
            getKey: function () {
                return pa
            },
            Vt: function (a) {
                var b = this;
                window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
                b.C.lj = q;
                z.En("cus.fire", "count", "z_setmapstylecount");
                if (a) {
                    b = this;
                    a.styleJson && (a.styleStr = b.x_(a.styleJson));
                    G() && x.da.kF ? setTimeout(function () {
                        b.C.xe = a;
                        b.dispatchEvent(new M("onsetcustomstyles", a))
                    }, 50) : (this.C.xe = a, this.dispatchEvent(new M("onsetcustomstyles", a)), this.cM(b.C.xe.geotableId));
                    var c = {
                        style: a.style
                    };
                    a.features && 0 < a.features.length && (c.features = o);
                    a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                    Qa(5050, c);
                    a.style && (c = b.C.hm[a.style] ? b.C.hm[a.style].backColor : b.C.hm.normal.backColor) && (this.La().style.backgroundColor = c)
                }
            },
            hY: function (a) {
                this.controls || (this.controls = {
                    navigationControl: new hb,
                    scaleControl: new ib,
                    overviewMapControl: new jb,
                    mapTypeControl: new kb
                });
                var b = this,
                    c;
                for (c in this.controls) b.EN(b.controls[c]);
                a = a || [];
                x.kc.Gb(a, function (a) {
                        b.as(b.controls[a])
                    })
            },
            cM: function (a) {
                a ? this.rs && this.rs.zf === a || (this.wh(this.rs), this.rs = new lb({
                    geotableId: a
                }), this.Vg(this.rs)) : this.wh(this.rs)
            },
            Wb: function () {
                var a = this.fa() >= this.C.VF && this.oa() === La && 18 >= this.fa(),
                    b = q;
                try {
                        document.createElement("canvas").getContext("2d"),
                        b = o
                    } catch (c) {
                        b = q
                    }
                return a && b
            },
            getCurrentCity: function () {
                return {
                    name: this.Xg,
                    code: this.ds
                }
            },
            xm: function () {
                this.P.bo();
                return this.P
            },
            setPanorama: function (a) {
                this.P = a;
                this.P.vF(this)
            },
            x_: function (a) {
                for (var b = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    zoom: "z",
                    hue: "h"
                }, c = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "lables.text": "l.t",
                    "labels.icon": "l.i"
                }, d = [], e = 0, f; f = a[e]; e++) {
                    var g = f.stylers;
                    delete f.stylers;
                    x.extend(f, g);
                    var g = [],
                        i;
                    for (i in b) if (f[i]) if ("elementType" === i) g.push(b[i] + ":" + c[f[i]]);
                    else {
                            switch (f[i]) {
                            case "poilabel":
                                f[i] = "poi";
                                break;
                            case "districtlabel":
                                f[i] = "label"
                            }
                            g.push(b[i] + ":" + f[i])
                        }
                    2 < g.length && d.push(g.join("|"))
                }
                return d.join(",")
            },
            SZ: function (a) {
                this.C.UK = a
            }
        });

    function Qa(a, b) {
            if (a) {
                var b = b || {},
                    c = "",
                    d;
                for (d in b) c = c + "&" + d + "=" + encodeURIComponent(b[d]);
                var e = function (a) {
                        a && (mb = o, setTimeout(function () {
                            nb.src = z.qc + "images/blank.gif?" + a.src
                        }, 50))
                    },
                    f = function () {
                        var a = ob.shift();
                        a && e(a)
                    };
                d = (1E8 * Math.random()).toFixed(0);
                mb ? ob.push({
                        src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
                    }) : e({
                        src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
                    });
                pb || (x.M(nb, "load", function () {
                        mb = q;
                        f()
                    }), x.M(nb, "error", function () {
                        mb = q;
                        f()
                    }), pb = o)
            }
        }
    var mb, pb, ob = [],
        nb = new Image;
    Qa(5E3, {
            device_pixel_ratio: window.devicePixelRatio,
            platform: navigator.platform
        });
    z.XL = {
            TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
            TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
            TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
            geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
            TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
            traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
            iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
            message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
            baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
            wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
            pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
            main_domain_nocdn: {
                baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
                other: "api.map.baidu.com"
            },
            main_domain_cdn: {
                baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
                other: ["api.map.baidu.com"],
                webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
            },
            map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
            vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
        };
    z.bY = {
            TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
            TILE_ONLINE_URLS: ["maponline0.bdimg.com", "maponline1.bdimg.com", "maponline2.bdimg.com", "maponline3.bdimg.com"],
            TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
            geolocControl: "loc.map.baidu.com",
            TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
            traffic: "its.map.baidu.com:8002",
            iw_pano: "pcsv0.map.bdimg.com",
            message: "j.map.baidu.com",
            baidumap: "map.baidu.com",
            wuxian: "wuxian.baidu.com",
            pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
            main_domain_nocdn: {
                baidu: "api.map.baidu.com"
            },
            main_domain_cdn: {
                baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
                webmap: ["webmap0.map.bdimg.com"]
            },
            map_click: "mapclick.map.baidu.com",
            vector_traffic: "or.map.bdimg.com"
        };
    z.$_ = {
            "0": {
                proto: "http://",
                domain: z.bY
            },
            1: {
                proto: "https://",
                domain: z.XL
            },
            2: {
                proto: "https://",
                domain: z.XL
            }
        };
    z.Sy = window.HOST_TYPE || "0";
    z.url = z.$_[z.Sy];
    z.xp = z.url.proto + z.url.domain.baidumap + "/";
    z.qc = z.url.proto + ("2" == z.Sy ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.ma = z.url.proto + ("2" == z.Sy ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
	z.ma = '';
    z.cj = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
    z.rg = function (a, b) {
            var c, d, b = b || "";
            switch (a) {
            case "main_domain_nocdn":
                c = z.qc + b;
                break;
            case "main_domain_cdn":
                c = z.ma + b;
                break;
            default:
                d = z.url.domain[a],
                "[object Array]" == Object.prototype.toString.call(d) ? (c = [], x.kc.Gb(d, function (a, d) {
                    c[d] = z.url.proto + a + "/" + b
                })) : c = z.url.proto + z.url.domain[a] + "/" + b
            }
            return c
        };

    function qb(a) {
            var b = {
                duration: 1E3,
                Gc: 30,
                Lo: 0,
                jc: rb.CM,
                Gt: s()
            };
            this.Yf = [];
            if (a) for (var c in a) b[c] = a[c];
            this.k = b;
            if (Wa(b.Lo)) {
                var d = this;
                setTimeout(function () {
                    d.start()
                }, b.Lo)
            } else b.Lo != sb && this.start()
        }
    var sb = "INFINITE";
    qb.prototype.start = function () {
            this.Ou = $a();
            this.Zz = this.Ou + this.k.duration;
            tb(this)
        };
    qb.prototype.add = function (a) {
            this.Yf.push(a)
        };

    function tb(a) {
            var b = $a();
            b >= a.Zz ? (Xa(a.k.va) && a.k.va(a.k.jc(1)), Xa(a.k.finish) && a.k.finish(), 0 < a.Yf.length && (b = a.Yf[0], b.Yf = [].concat(a.Yf.slice(1)), b.start())) : (a.zy = a.k.jc((b - a.Ou) / a.k.duration), Xa(a.k.va) && a.k.va(a.zy), a.HF || (a.Xr = setTimeout(function () {
                tb(a)
            }, 1E3 / a.k.Gc)))
        }
    qb.prototype.stop = function (a) {
            this.HF = o;
            for (var b = 0; b < this.Yf.length; b++) this.Yf[b].stop(),
            this.Yf[b] = p;
            this.Yf.length = 0;
            this.Xr && (clearTimeout(this.Xr), this.Xr = p);
            this.k.Gt(this.zy);
            a && (this.Zz = this.Ou, tb(this))
        };
    qb.prototype.cancel = ga(1);
    var rb = {
            CM: function (a) {
                return a
            },
            reverse: function (a) {
                return 1 - a
            },
            cD: function (a) {
                return a * a
            },
            bD: function (a) {
                return Math.pow(a, 3)
            },
            Is: function (a) {
                return -(a * (a - 2))
            },
            SK: function (a) {
                return Math.pow(a - 1, 3) + 1
            },
            RK: function (a) {
                return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
            },
            b2: function (a) {
                return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
            },
            c2: function (a) {
                return (1 - Math.cos(Math.PI * a)) / 2
            }
        };
    rb["ease-in"] = rb.cD;
    rb["ease-out"] = rb.Is;
    var F = {
            cG: 34,
            dG: 21,
            eG: new L(21, 32),
            eP: new L(10, 32),
            dP: new L(24, 36),
            cP: new L(12, 36),
            aG: new L(13, 1),
            qa: z.ma + "images/",
            i3: "http://api0.map.bdimg.com/images/",
            bG: z.ma + "images/markers_new.png",
            aP: 24,
            bP: 73,
            hC: {
                "\u5317\u4eac": {
                    oy: "bj",
                    m: new H(116.403874, 39.914889)
                },
                "\u4e0a\u6d77": {
                    oy: "sh",
                    m: new H(121.487899, 31.249162)
                },
                "\u6df1\u5733": {
                    oy: "sz",
                    m: new H(114.025974, 22.546054)
                },
                "\u5e7f\u5dde": {
                    oy: "gz",
                    m: new H(113.30765, 23.120049)
                }
            },
            fontFamily: "arial,sans-serif"
        };
    x.da.Se ? (x.extend(F, {
            GK: "url(" + F.qa + "ruler.cur),crosshair",
            Yb: "-moz-grab",
            Fd: "-moz-grabbing"
        }), x.platform.qM && (F.fontFamily = "arial,simsun,sans-serif")) : x.da.Iw || x.da.kF ? x.extend(F, {
            GK: "url(" + F.qa + "ruler.cur) 2 6,crosshair",
            Yb: "url(" + F.qa + "openhand.cur) 8 8,default",
            Fd: "url(" + F.qa + "closedhand.cur) 8 8,move"
        }) : x.extend(F, {
            GK: "url(" + F.qa + "ruler.cur),crosshair",
            Yb: "url(" + F.qa + "openhand.cur),default",
            Fd: "url(" + F.qa + "closedhand.cur),move"
        });

    function ub(a, b) {
            var c = a.style;
            c.left = b[0] + "px";
            c.top = b[1] + "px"
        }
    function vb(a) {
            0 < x.da.la ? a.unselectable = "on" : a.style.MozUserSelect = "none"
        }
    function wb(a) {
            return a && a.parentNode && 11 !== a.parentNode.nodeType
        }
    function xb(a, b) {
            x.K.Nx(a, "beforeEnd", b);
            return a.lastChild
        }
    function yb(a) {
            for (var b = {
                left: 0,
                top: 0
            }; a && a.offsetParent;) b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
            return b
        }
    function ma(a) {
            a = window.event || a;
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
        }
    function zb(a) {
            a = window.event || a;
            a.preventDefault ? a.preventDefault() : a.returnValue = q;
            return q
        }
    function na(a) {
            ma(a);
            return zb(a)
        }
    function Ab() {
            var a = document.documentElement,
                b = document.body;
            return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
        }
    function Bb(a, b) {
            if (a && b) return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
        }
    function Cb(a, b) {
            var c = [],
                b = b ||
            function (a) {
                    return a
                },
                d;
            for (d in a) c.push(d + "=" + b(a[d]));
            return c.join("&")
        }
    function K(a, b, c) {
            var d = document.createElement(a);
            c && (d = document.createElementNS(c, a));
            return x.K.rF(d, b || {})
        }
    function Va(a) {
            if (a.currentStyle) return a.currentStyle;
            if (a.ownerDocument && a.ownerDocument.defaultView) return a.ownerDocument.defaultView.getComputedStyle(a, p)
        }
    function Xa(a) {
            return "function" === typeof a
        }
    function Wa(a) {
            return "number" === typeof a
        }
    function Za(a) {
            return "string" == typeof a
        }
    function Db(a) {
            return "undefined" != typeof a
        }
    function Eb(a) {
            return "object" == typeof a
        }
    var Gb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Hb(a) {
            var b = "",
                c, d, e = "",
                f, g = "",
                i = 0;
            f = /[^A-Za-z0-9\+\/\=]/g;
            if (!a || f.exec(a)) return a;
            a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do c = Gb.indexOf(a.charAt(i++)),
            d = Gb.indexOf(a.charAt(i++)),
            f = Gb.indexOf(a.charAt(i++)),
            g = Gb.indexOf(a.charAt(i++)),
            c = c << 2 | d >> 4,
            d = (d & 15) << 4 | f >> 2,
            e = (f & 3) << 6 | g,
            b += String.fromCharCode(c),
            64 != f && (b += String.fromCharCode(d)),
            64 != g && (b += String.fromCharCode(e));
            while (i < a.length);
            return b
        }
    var M = x.lang.bz;

    function G() {
            return !(!x.platform.qE && !x.platform.sY && !x.platform.Km)
        }
    function Ua() {
            return !(!x.platform.qM && !x.platform.iM && !x.platform.yY)
        }
    function $a() {
            return (new Date).getTime()
        }
    function Ib() {
            var a = document.body.appendChild(K("div"));
            a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
            var b = a.firstChild;
            if (!b.style) return q;
            b.style.behavior = "url(#default#VML)";
            b = b ? "object" === typeof b.adj : o;
            a.parentNode.removeChild(a);
            return b
        }
    function Jb() {
            return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
        }
    function Kb() {
            return !!K("canvas").getContext
        }
    function Nb(a) {
            return a * Math.PI / 180
        }
    z.FY = function () {
            var a = o,
                b = o,
                c = o,
                d = o,
                e = 0,
                f = 0,
                g = 0,
                i = 0;
            return {
                    MQ: function () {
                        e += 1;
                        a && (a = q, setTimeout(function () {
                            Qa(5054, {
                                pic: e
                            });
                            a = o;
                            e = 0
                        }, 1E4))
                    },
                    M0: function () {
                        f += 1;
                        b && (b = q, setTimeout(function () {
                            Qa(5055, {
                                move: f
                            });
                            b = o;
                            f = 0
                        }, 1E4))
                    },
                    O0: function () {
                        g += 1;
                        c && (c = q, setTimeout(function () {
                            Qa(5056, {
                                zoom: g
                            });
                            c = o;
                            g = 0
                        }, 1E4))
                    },
                    N0: function (a) {
                        i += a;
                        d && (d = q, setTimeout(function () {
                            Qa(5057, {
                                tile: i
                            });
                            d = o;
                            i = 0
                        }, 5E3))
                    }
                }
        }();
    z.jq = {
            qG: "#83a1ff",
            lq: "#808080"
        };

    function Ob(a, b, c) {
            b.Pm || (b.Pm = [], b.handle = {});
            b.Pm.push({
                filter: c,
                rm: a
            });
            b.addEventListener || (b.addEventListener = function (a, c) {
                b.attachEvent("on" + a, c)
            });
            b.handle.click || (b.addEventListener("click", function (a) {
                for (var c = a.target || a.srcElement; c != b;) {
                    Pb(b.Pm, function (b, g) {
                        RegExp(g.filter).test(c.getAttribute("filter")) && g.rm.call(c, a, c.getAttribute("filter"))
                    });
                    c = c.parentNode
                }
            }, q), b.handle.click = o)
        }
    function Pb(a, b) {
            for (var c = 0, d = a.length; c < d; c++) b(c, a[c])
        }
    void
    function (a, b, c) {
            void
            function (a, b, c) {
                function g(a) {
                    if (!a.Ko) {
                        for (var c = o, d = [], f = a.wZ, i = 0; f && i < f.length; i++) {
                            var k = f[i],
                                l = Z[k] = Z[k] || {};
                            if (l.Ko || l == a) d.push(l.Kc);
                            else {
                                    c = q;
                                    if (!l.cW && (k = (Ja.get("alias") || {})[k] || k + ".js", !J[k])) {
                                        J[k] = o;
                                        var m = b.createElement("script"),
                                            n = b.getElementsByTagName("script")[0];
                                        m.async = o;
                                        m.src = k;
                                        n.parentNode.insertBefore(m, n)
                                    }
                                    l.Ty = l.Ty || {};
                                    l.Ty[a.name] = a
                                }
                        }
                        if (c) {
                            a.Ko = o;
                            a.yK && (a.Kc = a.yK.apply(a, d));
                            for (var t in a.Ty) g(a.Ty[t])
                        }
                    }
                }
                function i(a) {
                    return (a || new Date) - E
                }
                function k(a, b, c) {
                    if (a) {
                        "string" == typeof a && (c = b, b = a, a = P);
                        try {
                            a == P ? (N[b] = N[b] || [], N[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
                        } catch (d) {}
                    }
                }
                function l(a, b, c) {
                    if (a) {
                        "string" == typeof a && (c = b, b = a, a = P);
                        try {
                            if (a == P) {
                                var d = N[b];
                                if (d) for (var e = d.length; e--;) d[e] === c && d.splice(e, 1)
                            } else a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
                        } catch (f) {}
                    }
                }
                function m(a) {
                    var b = N[a],
                        c = 0;
                    if (b) {
                            for (var d = [], e = arguments, f = 1; f < e.length; f++) d.push(e[f]);
                            for (f = b.length; f--;) b[f].apply(this, d) && c++;
                            return c
                        }
                }
                function n(a, b) {
                    if (a && b) {
                        var c = new Image(1, 1),
                            d = [],
                            e = "img_" + +new Date,
                            f;
                        for (f in b) b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
                        P[e] = c;
                        c.onload = c.onerror = function () {
                                P[e] = c = c.onload = c.onerror = p;
                                delete P[e]
                            };
                        c.src = a + "?" + d.join("&")
                    }
                }
                function t() {
                    var a = arguments,
                        b = a[0];
                    if (this.xK || /^(on|un|set|get|create)$/.test(b)) {
                            for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++) c.push(a[d]);
                            "function" == typeof b && b.apply(this, c)
                        } else this.XJ.push(a)
                }
                function v(a, b) {
                    var c = {},
                        d;
                    for (d in a) a.hasOwnProperty(d) && (c[d] = a[d]);
                    for (d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
                    return c
                }
                function w(a) {
                    this.name = a;
                    this.Ns = {
                        protocolParameter: {
                            postUrl: p,
                            protocolParameter: p
                        }
                    };
                    this.XJ = [];
                    this.alog = P
                }
                function y(a) {
                    a = a || "default";
                    if ("*" == a) {
                        var a = [],
                            b;
                        for (b in Q) a.push(Q[b]);
                        return a
                    }(b = Q[a]) || (b = Q[a] = new w(a));
                    return b
                }
                var B = c.alog;
                if (!B || !B.Ko) {
                    var A = b.all && a.attachEvent,
                        E = B && B.zE || +new Date,
                        C = a.u3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                        D = 0,
                        J = {},
                        P = function (a) {
                            var b = arguments,
                                c, d, e, f;
                            if ("define" == a || "require" == a) {
                                    for (d = 1; d < b.length; d++) switch (typeof b[d]) {
                                    case "string":
                                        c = b[d];
                                        break;
                                    case "object":
                                        e = b[d];
                                        break;
                                    case "function":
                                        f = b[d]
                                    }
                                    "require" == a && (c && !e && (e = [c]), c = p);
                                    c = !c ? "#" + D++ : c;
                                    d = Z[c] = Z[c] || {};
                                    d.Ko || (d.name = c, d.wZ = e, d.yK = f, "define" == a && (d.cW = o), g(d))
                                } else "function" == typeof a ? a(P) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function (a, c, d) {
                                    b[0] = d;
                                    t.apply(P.QF(c), b)
                                })
                        },
                        N = {},
                        Q = {},
                        Z = {
                            v1: {
                                name: "alog",
                                Ko: o,
                                Kc: P
                            }
                        };
                    w.prototype.start = w.prototype.create = function (a) {
                            if (!this.xK) {
                                "object" == typeof a && this.set(a);
                                this.xK = new Date;
                                for (this.Os("create", this); a = this.XJ.shift();) t.apply(this, a)
                            }
                        };
                    w.prototype.send = function (a, b) {
                            var c = v({
                                ts: i().toString(36),
                                t: a,
                                sid: C
                            }, this.Ns);
                            if ("object" == typeof b) c = v(c, b);
                            else {
                                var d = arguments;
                                switch (a) {
                                case "pageview":
                                    d[1] && (c.page = d[1]);
                                    d[2] && (c.title = d[2]);
                                    break;
                                case "event":
                                    d[1] && (c.eventCategory = d[1]);
                                    d[2] && (c.eventAction = d[2]);
                                    d[3] && (c.eventLabel = d[3]);
                                    d[4] && (c.eventValue = d[4]);
                                    break;
                                case "timing":
                                    d[1] && (c.timingCategory = d[1]);
                                    d[2] && (c.timingVar = d[2]);
                                    d[3] && (c.timingValue = d[3]);
                                    d[4] && (c.timingLabel = d[4]);
                                    break;
                                case "exception":
                                    d[1] && (c.exDescription = d[1]);
                                    d[2] && (c.exFatal = d[2]);
                                    break;
                                default:
                                    return
                                }
                            }
                            this.Os("send", c);
                            var e;
                            if (d = this.Ns.protocolParameter) {
                                var f = {};
                                for (e in c) d[e] !== p && (f[d[e] || e] = c[e]);
                                e = f
                            } else e = c;
                            n(this.Ns.postUrl, e)
                        };
                    w.prototype.set = function (a, b) {
                            if ("string" == typeof a)"protocolParameter" == a && (b = v({
                                postUrl: p,
                                protocolParameter: p
                            }, b)),
                            this.Ns[a] = b;
                            else if ("object" == typeof a) for (var c in a) this.set(c, a[c])
                        };
                    w.prototype.get = function (a, b) {
                            var c = this.Ns[a];
                            "function" == typeof b && b(c);
                            return c
                        };
                    w.prototype.Os = function (a, b) {
                            return P.Os(this.name + "." + a, b)
                        };
                    w.prototype.M = function (a, b) {
                            P.M(this.name + "." + a, b)
                        };
                    w.prototype.bd = function (a, b) {
                            P.bd(this.name + "." + a, b)
                        };
                    P.name = "alog";
                    P.gO = C;
                    P.Ko = o;
                    P.timestamp = i;
                    P.bd = l;
                    P.M = k;
                    P.Os = m;
                    P.QF = y;
                    P("init");
                    var aa = w.prototype;
                    T(aa, {
                            start: aa.start,
                            create: aa.create,
                            send: aa.send,
                            set: aa.set,
                            get: aa.get,
                            on: aa.M,
                            un: aa.bd,
                            fire: aa.Os
                        });
                    var Ja = y();
                    Ja.set("protocolParameter", {
                            u1: p
                        });
                    if (B) {
                            aa = [].concat(B.ub || [], B.Zm || []);
                            B.ub = B.Zm = p;
                            for (var Oa in P) P.hasOwnProperty(Oa) && (B[Oa] = P[Oa]);
                            P.ub = P.Zm = {
                                push: function (a) {
                                    P.apply(P, a)
                                }
                            };
                            for (B = 0; B < aa.length; B++) P.apply(P, aa[B])
                        }
                    c.alog = P;
                    A && k(b, "mouseup", function (a) {
                            a = a.target || a.srcElement;
                            1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                        });
                    var Ra = q;
                    a.onerror = function (a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (Ra ? g = q : Ra = o);
                            g && c.alog("exception.send", "exception", {
                                Dt: a,
                                yE: b,
                                zt: d,
                                fs: e
                            });
                            return q
                        };
                    c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Dt: a.Dt,
                                yE: a.path,
                                zt: a.zt,
                                method: a.method,
                                fL: "catch"
                            })
                        })
                }
            }(a, b, c);
            void
            function (a, b, c) {
                var g = "18_1";
                G() && (g = "18_2");
                var i = "http://static.tieba.baidu.com";
                "https:" === a.location.protocol && (i = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
                var k = Math.random,
                    i = i + "/tb/pms/img/st.gif",
                    l = {
                        xh: "0.1"
                    },
                    m = {
                        xh: "0.1"
                    },
                    n = {
                        xh: "0.1"
                    },
                    t = {
                        xh: "0"
                    };
                if (l && l.xh && k() < l.xh) {
                        var v = c.alog.QF("monkey"),
                            w, l = a.screen,
                            y = b.referrer;
                        v.set("ver", 5);
                        v.set("pid", 241);
                        l && v.set("px", l.width + "*" + l.height);
                        v.set("ref", y);
                        c.alog("monkey.on", "create", function () {
                                w = c.alog.timestamp;
                                v.set("protocolParameter", {
                                    reports: p
                                })
                            });
                        c.alog("monkey.on", "send", function (a) {
                                "pageview" == a.t && (a.cmd = "open");
                                a.now && (a.ts = w(a.now).toString(36), a.now = "")
                            });
                        c.alog("monkey.create", {
                                page: g,
                                pid: "241",
                                p: "18",
                                dv: 6,
                                postUrl: i,
                                reports: {
                                    refer: 1
                                }
                            });
                        c.alog("monkey.send", "pageview", {
                                now: +new Date
                            })
                    }
                if (m && m.xh && k() < m.xh) {
                        var B = q;
                        a.onerror = function (a, b, d, e) {
                            var g = o;
                            !b && /^script error/i.test(a) && (B ? g = q : B = o);
                            g && c.alog("exception.send", "exception", {
                                Dt: a,
                                yE: b,
                                zt: d,
                                fs: e
                            });
                            return q
                        };
                        c.alog("exception.on", "catch", function (a) {
                            c.alog("exception.send", "exception", {
                                Dt: a.Dt,
                                yE: a.path,
                                zt: a.zt,
                                method: a.method,
                                fL: "catch"
                            })
                        });
                        c.alog("exception.create", {
                            postUrl: i,
                            dv: 7,
                            page: g,
                            pid: "170",
                            p: "18"
                        })
                    }
                n && (n.xh && k() < n.xh) && (c.alog("cus.on", "time", function (a) {
                        var b = {},
                            d = q,
                            e;
                        if ("[object Object]" === a.toString()) {
                                for (var g in a)"page" == g ? b.page = a[g] : (e = parseInt(a[g]), 0 < e && /^z_/.test(g) && (d = o, b[g] = e));
                                d && c.alog("cus.send", "time", b)
                            }
                    }), c.alog("cus.on", "count", function (a) {
                        var b = {},
                            d = q;
                        "string" === typeof a && (a = [a]);
                        if (a instanceof Array) for (var e = 0; e < a.length; e++) / ^ z_ / .test(a[e]) ? (d = o, b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
                        d && c.alog("cus.send", "count", b)
                    }), c.alog("cus.create", {
                        dv: 3,
                        postUrl: i,
                        page: g,
                        p: "18"
                    }));
                if (t && t.xh && k() < t.xh) {
                        var A = ["Moz", "O", "ms", "Webkit"],
                            E = ["-webkit-", "-moz-", "-o-", "-ms-"],
                            C = function () {
                                return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                            },
                            D = C("dpFeatureTest").style,
                            J = function (a) {
                                return P(a, j, j)
                            },
                            P = function (a, b, c) {
                                var d = a.charAt(0).toUpperCase() + a.slice(1),
                                    e = (a + " " + A.join(d + " ") + d).split(" ");
                                if (typeof b === "string" || typeof b === "undefined") return N(e, b);
                                e = (a + " " + A.join(d + " ") + d).split(" ");
                                a: {
                                        var a = e,
                                            f;
                                        for (f in a) if (a[f] in b) {
                                                if (c === q) {
                                                    b = a[f];
                                                    break a
                                                }
                                                f = b[a[f]];
                                                b = typeof f === "function" ? fnBind(f, c || b) : f;
                                                break a
                                            }
                                        b = q
                                    }
                                return b
                            },
                            N = function (a, b) {
                                var c, d, e;
                                d = a.length;
                                for (c = 0; c < d; c++) {
                                    e = a[c];~ ("" + e).indexOf("-") && (e = Q(e));
                                    if (D[e] !== j) return b == "pfx" ? e : o
                                }
                                return q
                            },
                            Q = function (a) {
                                return a.replace(/([a-z])-([a-z])/g, function (a, b, c) {
                                    return b + c.toUpperCase()
                                }).replace(/^-/, "")
                            },
                            Z = function (a, b, c) {
                                if (a.indexOf("@") === 0) return atRule(a);
                                a.indexOf("-") != -1 && (a = Q(a));
                                return !b ? P(a, "pfx") : P(a, b, c)
                            },
                            aa = function () {
                                var a = C("canvas");
                                return !(!a.getContext || !a.getContext("2d"))
                            },
                            Ja = function () {
                                var a = C("div");
                                return "draggable" in a || "ondragstart" in a && "ondrop" in a
                            },
                            Oa = function () {
                                try {
                                    localStorage.setItem("localStorage", "localStorage");
                                    localStorage.removeItem("localStorage");
                                    return o
                                } catch (a) {
                                    return q
                                }
                            },
                            Ra = function () {
                                return "content" in b.createElement("template")
                            },
                            Aa = function () {
                                return "createShadowRoot" in b.createElement("a")
                            },
                            mc = function () {
                                return "registerElement" in b
                            },
                            qe = function () {
                                return "import" in b.createElement("link")
                            },
                            mf = function () {
                                return "getItems" in b
                            },
                            fd = function () {
                                return "EventSource" in window
                            },
                            Lb = function (a, b) {
                                var c = new Image;
                                c.onload = function () {
                                    b(a, c.width > 0 && c.height > 0)
                                };
                                c.onerror = function () {
                                    b(a, q)
                                };
                                c.src = "data:image/webp;base64," + {
                                    x3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                                    w3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                                    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                                    jk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                                }[a]
                            },
                            nc = function (a, b) {
                                return Mb.ii["WebP-" + a] = b
                            },
                            re = function () {
                                return "openDatabase" in a
                            },
                            se = function () {
                                return "performance" in a && "timing" in a.performance
                            },
                            Nc = function () {
                                return "performance" in a && "mark" in a.performance
                            },
                            gd = function () {
                                return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                            },
                            te = function () {
                                return "Promise" in a && "cast" in a.mq && "resolve" in a.mq && "reject" in a.mq && "all" in a.mq && "race" in a.mq &&
                                function () {
                                    var b;
                                    new a.mq(function (a) {
                                        b = a
                                    });
                                    return typeof b === "function"
                                }()
                            },
                            hd = function () {
                                var b = !! a.z0,
                                    c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                                return !!a.C0 && b && c
                            },
                            nf = function () {
                                return "geolocation" in navigator
                            },
                            ue = function () {
                                var b = C("canvas"),
                                    c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                                return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                            },
                            ii = function () {
                                return !!b.createElementNS && !! b.createElementNS("http://www.w3.org/2000/svg", "svg").N1
                            },
                            ji = function () {
                                return !!a.J0
                            },
                            ki = function () {
                                return "WebSocket" in a && a.G0.w0 === 2
                            },
                            li = function () {
                                return !!b.createElement("video").canPlayType
                            },
                            mi = function () {
                                return !!b.createElement("audio").canPlayType
                            },
                            ni = function () {
                                return !!(a.history && "pushState" in a.history)
                            },
                            oi = function () {
                                return !(!a.x0 || !a.y0)
                            },
                            pi = function () {
                                return "postMessage" in window
                            },
                            qi = function () {
                                return !!a.webkitNotifications || "Notification" in a && "permission" in a.xP && "requestPermission" in a.xP
                            },
                            ri = function () {
                                for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, e = 0; e < b.length && !c; ++e) c = a[b[e] + "RequestAnimationFrame"];
                                return !!c
                            },
                            si = function () {
                                return "JSON" in a && "parse" in JSON && "stringify" in JSON
                            },
                            ti = function () {
                                return !(!Z("exitFullscreen", b, q) && !Z("cancelFullScreen", b, q))
                            },
                            ui = function () {
                                return !!Z("Intl", a)
                            },
                            vi = function () {
                                return J("flexBasis")
                            },
                            wi = function () {
                                return !!J("perspective")
                            },
                            xi = function () {
                                return J("shapeOutside")
                            },
                            yi = function () {
                                var a = C("div");
                                a.style.cssText = E.join("filter:blur(2px); ");
                                return !!a.style.length && (b.documentMode === j || b.documentMode > 9)
                            },
                            zi = function () {
                                return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                            },
                            Ai = function () {
                                return C("progress").max !== j
                            },
                            Bi = function () {
                                return C("meter").max !== j
                            },
                            Ci = function () {
                                return "sendBeacon" in navigator
                            },
                            Di = function () {
                                return J("borderRadius")
                            },
                            Ei = function () {
                                return J("boxShadow")
                            },
                            Fi = function () {
                                var a = C("div").style;
                                a.cssText = E.join("opacity:.55;");
                                return /^0.55$/.test(a.opacity)
                            },
                            Gi = function () {
                                return N(["textShadow"], j)
                            },
                            Hi = function () {
                                return J("animationName")
                            },
                            Ii = function () {
                                return J("transition")
                            },
                            Ji = function () {
                                return navigator.userAgent.indexOf("Android 2.") === -1 && J("transform")
                            },
                            Mb = {
                                ii: {},
                                pa: function (a, b, c) {
                                    this.ii[a] = b.apply(this, [].slice.call(arguments, 2))
                                },
                                Cd: function (a, b) {
                                    a.apply(this, [].slice.call(arguments, 1))
                                },
                                DZ: function () {
                                    this.pa("bdrs", Di);
                                    this.pa("bxsd", Ei);
                                    this.pa("opat", Fi);
                                    this.pa("txsd", Gi);
                                    this.pa("anim", Hi);
                                    this.pa("trsi", Ii);
                                    this.pa("trfm", Ji);
                                    this.pa("flex", vi);
                                    this.pa("3dtr", wi);
                                    this.pa("shpe", xi);
                                    this.pa("fltr", yi);
                                    this.pa("cavs", aa);
                                    this.pa("dgdp", Ja);
                                    this.pa("locs", Oa);
                                    this.pa("wctem", Ra);
                                    this.pa("wcsdd", Aa);
                                    this.pa("wccse", mc);
                                    this.pa("wchti", qe);
                                    this.Cd(Lb, "lossy", nc);
                                    this.Cd(Lb, "lossless", nc);
                                    this.Cd(Lb, "alpha", nc);
                                    this.Cd(Lb, "animation", nc);
                                    this.pa("wsql", re);
                                    this.pa("natm", se);
                                    this.pa("ustm", Nc);
                                    this.pa("arra", gd);
                                    this.pa("prms", te);
                                    this.pa("xhr2", hd);
                                    this.pa("wbgl", ue);
                                    this.pa("geol", nf);
                                    this.pa("svg", ii);
                                    this.pa("work", ji);
                                    this.pa("wbsk", ki);
                                    this.pa("vido", li);
                                    this.pa("audo", mi);
                                    this.pa("hsty", ni);
                                    this.pa("file", oi);
                                    this.pa("psmg", pi);
                                    this.pa("wknf", qi);
                                    this.pa("rqaf", ri);
                                    this.pa("json", si);
                                    this.pa("flsc", ti);
                                    this.pa("i18n", ui);
                                    this.pa("cors", zi);
                                    this.pa("prog", Ai);
                                    this.pa("metr", Bi);
                                    this.pa("becn", Ci);
                                    this.pa("mcrd", mf);
                                    this.pa("esrc", fd)
                                }
                            },
                            v = c.alog.QF("feature");
                        v.M("commit", function () {
                                Mb.DZ();
                                var a = setInterval(function () {
                                    if ("WebP-lossy" in Mb.ii && "WebP-lossless" in Mb.ii && "WebP-alpha" in Mb.ii && "WebP-animation" in Mb.ii) {
                                        for (var b in Mb.ii) Mb.ii[b] = Mb.ii[b] ? "y" : "n";
                                        v.send("feature", Mb.ii);
                                        clearInterval(a)
                                    }
                                }, 500)
                            });
                        c.alog("feature.create", {
                                Y1: 4,
                                R3: i,
                                page: g,
                                ub: "18"
                            });
                        c.alog("feature.fire", "commit")
                    }
            }(a, b, c)
        }(window, document, z);
    z.En = z.alog || s();
    z.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && z.alog("cus.fire", "count", "z_httpscount");

    function Qb(a) {
            var b = window.TILE_VERSION,
                c = "20170927";
            b && b.ditu && (b = b.ditu, b[a] && b[a].updateDate && (c = b[a].updateDate));
            return c
        };

    function oa(a, b) {
			if (/^http/.test(a)) return;  // 如果是调用外部资源就退出去
            if (b) {
                var c = (1E5 * Math.random()).toFixed(0);
                z._rd["_cbk" + c] = function (a) {
                    b && b(a);
                    delete z._rd["_cbk" + c]
                };
                a += "&callback=BMap._rd._cbk" + c
            }
            var d = K("script", {
                type: "text/javascript"
            });
            d.charset = "utf-8";
            d.src = a;
            d.addEventListener ? d.addEventListener("load", function (a) {
                a = a.target;
                a.parentNode.removeChild(a)
            }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function () {
                var a = window.event.srcElement;
                a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
            });
            setTimeout(function () {
                document.getElementsByTagName("head")[0].appendChild(d);
                d = p
            }, 1)
        };
    var Rb = {
            map: "w1hy0b",
            common: "2dd0c5",
            style: "hfbhis",
            tile: "ehg05s",
            vectordrawlib: "mnesck",
            newvectordrawlib: "qmni4u",
            groundoverlay: "mtm2mo",
            pointcollection: "oy3r1m",
            marker: "sezw30",
            symbol: "hqzn5e",
            canvablepath: "5134ed",
            vmlcontext: "jlv5m2",
            markeranimation: "s4qbzt",
            poly: "h2t0up",
            draw: "2aqbez",
            drawbysvg: "ez2dcu",
            drawbyvml: "gkphcd",
            drawbycanvas: "reoumc",
            infowindow: "am44kn",
            oppc: "desrwu",
            opmb: "daly10",
            menu: "gubrzf",
            control: "ydgkiq",
            navictrl: "s1owfk",
            geoctrl: "2xbqzv",
            copyrightctrl: "0rewj0",
            citylistcontrol: "t35bss",
            scommon: "41feyh",
            local: "qsktdv",
            route: "rhtvek",
            othersearch: "qkttv3",
            mapclick: "2gzfaj",
            buslinesearch: "sg3fx1",
            hotspot: "4f3lpk",
            autocomplete: "3xgzrz",
            coordtrans: "oasxwb",
            coordtransutils: "pjifop",
            convertor: "nxjmuu",
            clayer: "bfrr5z",
            pservice: "2rj3mp",
            pcommon: "jfffi1",
            panorama: "k1nngf",
            panoramaflash: "cghjjy",
            vector: "js1avf"
        };
    x.Ny = function () {
            function a(a) {
                return d && !! c[b + a + "_" + Rb[a]]
            }
            var b = "BMap_",
                c = window.localStorage,
                d = "localStorage" in window && c !== p && c !== j;
            return {
                    uY: d,
                    set: function (a, f) {
                        if (d) {
                            for (var g = b + a + "_", i = c.length, k; i--;) k = c.key(i),
                            -1 < k.indexOf(g) && c.removeItem(k);
                            try {
                                c.setItem(b + a + "_" + Rb[a], f)
                            } catch (l) {
                                c.clear()
                            }
                        }
                    },
                    get: function (e) {
                        return d && a(e) ? c.getItem(b + e + "_" + Rb[e]) : q
                    },
                    hK: a
                }
        }();

    function I() {}
    x.object.extend(I, {
            Fj: {
                rG: -1,
                LP: 0,
                dq: 1
            },
            tL: function () {
                var a = "canvablepath",
                    b = z.LU ? "newvectordrawlib" : "vectordrawlib";
                if (!G() || !Kb()) Jb() || (Ib() ? a = "vmlcontext" : Kb());
                return {
                        tile: [b, "style"],
                        control: [],
                        marker: ["symbol"],
                        symbol: ["canvablepath", "common"],
                        canvablepath: "canvablepath" === a ? [] : [a],
                        vmlcontext: [],
                        style: [],
                        poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                        drawbysvg: ["draw"],
                        drawbyvml: ["draw"],
                        drawbycanvas: ["draw"],
                        infowindow: ["common", "marker"],
                        menu: [],
                        oppc: [],
                        opmb: [],
                        scommon: [],
                        local: ["scommon"],
                        route: ["scommon"],
                        othersearch: ["scommon"],
                        autocomplete: ["scommon"],
                        citylistcontrol: ["autocomplete"],
                        mapclick: ["scommon"],
                        buslinesearch: ["route"],
                        hotspot: [],
                        coordtransutils: ["coordtrans"],
                        convertor: [],
                        clayer: ["tile"],
                        pservice: [],
                        pcommon: ["style", "pservice"],
                        panorama: ["pcommon"],
                        panoramaflash: ["pcommon"]
                    }
            },
            U3: {},
            kG: {
                bQ: z.ma + "getmodules?v=2.0&t=20140707",
                CU: 5E3
            },
            EC: q,
            Pd: {
                vl: {},
                Gn: [],
                Vv: []
            },
            load: function (a, b, c) {
                var d = this.ib(a);
                if (d.Bd == this.Fj.dq) c && b();
                else {
                    if (d.Bd == this.Fj.rG) {
                        this.nK(a);
                        this.BN(a);
                        var e = this;
                        e.EC == q && (e.EC = o, setTimeout(function () {
                            for (var a = [], b = 0, c = e.Pd.Gn.length; b < c; b++) {
                                var d = e.Pd.Gn[b],
                                    l = "";
                                ia.Ny.hK(d) ? l = ia.Ny.get(d) : (l = "", a.push(d + "_" + Rb[d]));
                                e.Pd.Vv.push({
                                        VM: d,
                                        ME: l
                                    })
                            }
                            e.EC = q;
                            e.Pd.Gn.length = 0;
                            // 0 == a.length ? e.ZK() : oa(e.kG.bQ + "&mod=" + a.join(","))
							0 == a.length ? e.WK() : oa("/static/js/extension/getModules.js");
							console.log(a); // 打印需要加载的模块！
                        }, 1));
                        d.Bd = this.Fj.LP
                    }
                    d.Tu.push(b)
                }
            },
            nK: function (a) {
                if (a && this.tL()[a]) for (var a = this.tL()[a], b = 0; b < a.length; b++) this.nK(a[b]),
                this.Pd.vl[a[b]] || this.BN(a[b])
            },
            BN: function (a) {
                for (var b = 0; b < this.Pd.Gn.length; b++) if (this.Pd.Gn[b] == a) return;
                this.Pd.Gn.push(a)
            },
            CZ: function (a, b) {
                var c = this.ib(a);
                try {
                    eval(b)
                } catch (d) {
                    return
                }
                c.Bd = this.Fj.dq;
                for (var e = 0, f = c.Tu.length; e < f; e++) c.Tu[e]();
                c.Tu.length = 0
            },
            hK: function (a, b) {
                var c = this;
                c.timeout = setTimeout(function () {
                    c.Pd.vl[a].Bd != c.Fj.dq ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
                }, c.kG.CU)
            },
            ib: function (a) {
                this.Pd.vl[a] || (this.Pd.vl[a] = {}, this.Pd.vl[a].Bd = this.Fj.rG, this.Pd.vl[a].Tu = []);
                return this.Pd.vl[a]
            },
            remove: function (a) {
                delete this.ib(a)
            },
            xV: function (a, b) {
                for (var c = this.Pd.Vv, d = o, e = 0, f = c.length; e < f; e++)"" == c[e].ME && (c[e].VM == a ? c[e].ME = b : d = q);
                d && this.ZK()
            },
            ZK: function () {
                for (var a = this.Pd.Vv, b = 0, c = a.length; b < c; b++) this.CZ(a[b].VM, a[b].ME);
                this.Pd.Vv.length = 0
            }
        });

    function R(a, b) {
            this.x = a || 0;
            this.y = b || 0;
            this.x = this.x;
            this.y = this.y
        }
    R.prototype.nb = function (a) {
            return a && a.x == this.x && a.y == this.y
        };

    function L(a, b) {
            this.width = a || 0;
            this.height = b || 0
        }
    L.prototype.nb = function (a) {
            return a && this.width == a.width && this.height == a.height
        };

    function gb(a, b) {
            a && (this.Mb = a, this.ba = "spot" + gb.ba++, b = b || {}, this.Sg = b.text || "", this.Bv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5], this.wJ = b.userData || p, this.Qh = b.minZoom || p, this.Ef = b.maxZoom || p)
        }
    gb.ba = 0;
    x.extend(gb.prototype, {
            ra: function (a) {
                this.Qh == p && (this.Qh = a.C.gc);
                this.Ef == p && (this.Ef = a.C.$b)
            },
            ta: function (a) {
                a instanceof H && (this.Mb = a)
            },
            ha: u("Mb"),
            Zt: ca("Sg"),
            YD: u("Sg"),
            setUserData: ca("wJ"),
            getUserData: u("wJ")
        });

    function Sb() {
            this.D = p;
            this.Nb = "control";
            this.Qa = this.aK = o
        }
    x.lang.ua(Sb, x.lang.Ca, "Control");
    x.extend(Sb.prototype, {
            initialize: function (a) {
                this.D = a;
                if (this.B) return a.Va.appendChild(this.B),
                this.B
            },
            Ge: function (a) {
                !this.B && (this.initialize && Xa(this.initialize)) && (this.B = this.initialize(a));
                this.k = this.k || {
                    yg: q
                };
                this.zB();
                this.Or();
                this.B && (this.B.nr = this)
            },
            zB: function () {
                var a = this.B;
                if (a) {
                    var b = a.style;
                    b.position = "absolute";
                    b.zIndex = this.Qu || "10";
                    b.MozUserSelect = "none";
                    b.WebkitTextSizeAdjust = "none";
                    this.k.yg || x.K.Ua(a, "BMap_noprint");
                    G() || x.M(a, "contextmenu", na)
                }
            },
            remove: function () {
                this.D = p;
                this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B), this.B = this.B.nr = p)
            },
            Aa: function () {
                this.B = xb(this.D.Va, "<div unselectable='on'></div>");
                this.Qa == q && x.K.U(this.B);
                return this.B
            },
            Or: function () {
                this.rc(this.k.anchor)
            },
            rc: function (a) {
                if (this.w1 || !Wa(a) || isNaN(a) || a < Tb || 3 < a) a = this.defaultAnchor;
                this.k = this.k || {
                    yg: q
                };
                this.k.za = this.k.za || this.defaultOffset;
                var b = this.k.anchor;
                this.k.anchor = a;
                if (this.B) {
                    var c = this.B,
                        d = this.k.za.width,
                        e = this.k.za.height;
                    c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                    switch (a) {
                        case Tb:
                            c.style.top = e + "px";
                            c.style.left = d + "px";
                            break;
                        case Ub:
                            c.style.top = e + "px";
                            c.style.right = d + "px";
                            break;
                        case Vb:
                            c.style.bottom = e + "px";
                            c.style.left = d + "px";
                            break;
                        case 3:
                            c.style.bottom = e + "px",
                            c.style.right = d + "px"
                        }
                    c = ["TL", "TR", "BL", "BR"];
                    x.K.Tb(this.B, "anchor" + c[b]);
                    x.K.Ua(this.B, "anchor" + c[a])
                }
            },
            AD: function () {
                return this.k.anchor
            },
            getContainer: u("B"),
            Xe: function (a) {
                a instanceof L && (this.k = this.k || {
                    yg: q
                }, this.k.za = new L(a.width, a.height), this.B && this.rc(this.k.anchor))
            },
            Pf: function () {
                return this.k.za
            },
            Id: u("B"),
            show: function () {
                this.Qa != o && (this.Qa = o, this.B && x.K.show(this.B))
            },
            U: function () {
                this.Qa != q && (this.Qa = q, this.B && x.K.U(this.B))
            },
            isPrintable: function () {
                return !!this.k.yg
            },
            jh: function () {
                return !this.B && !this.D ? q : !! this.Qa
            }
        });
    var Tb = 0,
        Ub = 1,
        Vb = 2;

    function hb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                yg: q,
                DF: a.showZoomInfo || o,
                anchor: a.anchor,
                za: a.offset,
                type: a.type,
                yW: a.enableGeolocation || q
            };
            this.defaultAnchor = G() ? 3 : Tb;
            this.defaultOffset = new L(10, 10);
            this.rc(a.anchor);
            this.kn(a.type);
            this.Ce()
        }
    x.lang.ua(hb, Sb, "NavigationControl");
    x.extend(hb.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            kn: function (a) {
                this.k.type = Wa(a) && 0 <= a && 3 >= a ? a : 0
            },
            ip: function () {
                return this.k.type
            },
            Ce: function () {
                var a = this;
                I.load("navictrl", function () {
                    a.wf()
                })
            }
        });

    function Wb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                anchor: a.anchor || Vb,
                za: a.offset || new L(10, 30),
                n_: a.showAddressBar !== q,
                e2: a.enableAutoLocation || q,
                JM: a.locationIcon || p
            };
            var b = this;
            this.Qu = 1200;
            b.b0 = [];
            this.oe = [];
            I.load("geoctrl", function () {
                (function d() {
                    if (0 !== b.oe.length) {
                        var a = b.oe.shift();
                        b[a.method].apply(b, a.arguments);
                        d()
                    }
                })();
                b.aQ()
            });
            Qa(Ha)
        }
    x.lang.ua(Wb, Sb, "GeolocationControl");
    x.extend(Wb.prototype, {
            location: function () {
                this.oe.push({
                    method: "location",
                    arguments: arguments
                })
            },
            getAddressComponent: da(p)
        });

    function Xb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                yg: q,
                anchor: a.anchor,
                za: a.offset
            };
            this.dc = [];
            this.defaultAnchor = Vb;
            this.defaultOffset = new L(5, 2);
            this.rc(a.anchor);
            this.aK = q;
            this.Ce()
        }
    x.lang.ua(Xb, Sb, "CopyrightControl");
    x.object.extend(Xb.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            sw: function (a) {
                if (a && Wa(a.id) && !isNaN(a.id)) {
                    var b = {
                        bounds: p,
                        content: ""
                    },
                        c;
                    for (c in a) b[c] = a[c];
                    if (a = this.tm(a.id)) for (var d in b) a[d] = b[d];
                    else this.dc.push(b)
                }
            },
            tm: function (a) {
                for (var b = 0, c = this.dc.length; b < c; b++) if (this.dc[b].id == a) return this.dc[b]
            },
            HD: u("dc"),
            dF: function (a) {
                for (var b = 0, c = this.dc.length; b < c; b++) this.dc[b].id == a && (r = this.dc.splice(b, 1), b--, c = this.dc.length)
            },
            Ce: function () {
                var a = this;
                I.load("copyrightctrl", function () {
                    a.wf()
                })
            }
        });

    function jb(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                yg: q,
                size: a.size || new L(150, 150),
                padding: 5,
                Wa: a.isOpen === o ? o : q,
                q0: 4,
                za: a.offset,
                anchor: a.anchor
            };
            this.defaultAnchor = 3;
            this.defaultOffset = new L(0, 0);
            this.Cq = this.Dq = 13;
            this.rc(a.anchor);
            this.Ae(this.k.size);
            this.Ce()
        }
    x.lang.ua(jb, Sb, "OverviewMapControl");
    x.extend(jb.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            rc: function (a) {
                Sb.prototype.rc.call(this, a)
            },
            qe: function () {
                this.qe.lo = o;
                this.k.Wa = !this.k.Wa;
                this.B || (this.qe.lo = q)
            },
            Ae: function (a) {
                a instanceof L || (a = new L(150, 150));
                a.width = 0 < a.width ? a.width : 150;
                a.height = 0 < a.height ? a.height : 150;
                this.k.size = a
            },
            Bb: function () {
                return this.k.size
            },
            Wa: function () {
                return this.k.Wa
            },
            Ce: function () {
                var a = this;
                I.load("control", function () {
                    a.wf()
                })
            }
        });

    function Yb(a) {
            Sb.call(this);
            a = a || {};
            this.defaultAnchor = Tb;
            this.uV = a.canCheckSize === q ? q : o;
            this.ej = "";
            this.defaultOffset = new L(10, 10);
            this.onChangeBefore = [];
            this.onChangeAfter = [];
            this.onChangeSuccess = [];
            this.k = {
                yg: q,
                za: a.offset || this.defaultOffset,
                anchor: a.anchor || this.defaultAnchor,
                expand: !! a.expand
            };
            a.onChangeBefore && Xa(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
            a.onChangeAfter && Xa(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
            a.onChangeSuccess && Xa(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
            this.rc(a.anchor);
            this.Ce()
        }
    x.lang.ua(Yb, Sb, "CityListControl");
    x.object.extend(Yb.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            Ce: function () {
                var a = this;
                I.load("citylistcontrol", function () {
                    a.wf()
                }, o)
            }
        });

    function ib(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                yg: q,
                color: "black",
                cd: "metric",
                za: a.offset
            };
            this.defaultAnchor = Vb;
            this.defaultOffset = new L(81, 18);
            this.rc(a.anchor);
            this.Zh = {
                metric: {
                    name: "metric",
                    pK: 1,
                    bM: 1E3,
                    HO: "\u7c73",
                    IO: "\u516c\u91cc"
                },
                us: {
                    name: "us",
                    pK: 3.2808,
                    bM: 5280,
                    HO: "\u82f1\u5c3a",
                    IO: "\u82f1\u91cc"
                }
            };
            this.Zh[this.k.cd] || (this.k.cd = "metric");
            this.VI = p;
            this.uI = {};
            this.Ce()
        }
    x.lang.ua(ib, Sb, "ScaleControl");
    x.object.extend(ib.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            Lk: function (a) {
                this.k.color = a + ""
            },
            v2: function () {
                return this.k.color
            },
            AF: function (a) {
                this.k.cd = this.Zh[a] && this.Zh[a].name || this.k.cd
            },
            RX: function () {
                return this.k.cd
            },
            Ce: function () {
                var a = this;
                I.load("control", function () {
                    a.wf()
                })
            }
        });
    var Zb = 0;

    function kb(a) {
            Sb.call(this);
            a = a || {};
            this.defaultAnchor = Ub;
            this.defaultOffset = new L(10, 10);
            this.k = {
                yg: q,
                mh: [La, Ya, Sa, Pa],
                bW: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
                type: a.type || Zb,
                za: a.offset || this.defaultOffset,
                DW: o
            };
            this.rc(a.anchor);
            "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.mh = a.mapTypes.slice(0));
            this.Ce()
        }
    x.lang.ua(kb, Sb, "MapTypeControl");
    x.object.extend(kb.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            Oy: function (a) {
                this.D.$n = a
            },
            Ce: function () {
                var a = this;
                I.load("control", function () {
                    a.wf()
                }, o)
            }
        });

    function $b(a) {
            Sb.call(this);
            a = a || {};
            this.k = {
                yg: q,
                za: a.offset,
                anchor: a.anchor
            };
            this.Qi = q;
            this.Zv = p;
            this.DI = new ac({
                Of: "api"
            });
            this.EI = new bc(p, {
                Of: "api"
            });
            this.defaultAnchor = Ub;
            this.defaultOffset = new L(10, 10);
            this.rc(a.anchor);
            this.Ce();
            Qa(ua)
        }
    x.lang.ua($b, Sb, "PanoramaControl");
    x.extend($b.prototype, {
            initialize: function (a) {
                this.D = a;
                return this.B
            },
            Ce: function () {
                var a = this;
                I.load("control", function () {
                    a.wf()
                })
            }
        });

    function cc(a) {
            x.lang.Ca.call(this);
            this.k = {
                Va: p,
                cursor: "default"
            };
            this.k = x.extend(this.k, a);
            this.Nb = "contextmenu";
            this.D = p;
            this.ya = [];
            this.Hf = [];
            this.Ee = [];
            this.Vw = this.ns = p;
            this.Ph = q;
            var b = this;
            I.load("menu", function () {
                b.yb()
            })
        }
    x.lang.ua(cc, x.lang.Ca, "ContextMenu");
    x.object.extend(cc.prototype, {
            ra: function (a, b) {
                this.D = a;
                this.Al = b || p
            },
            remove: function () {
                this.D = this.Al = p
            },
            uw: function (a) {
                if (a && !("menuitem" != a.Nb || "" == a.Sg || 0 >= a.Zi)) {
                    for (var b = 0, c = this.ya.length; b < c; b++) if (this.ya[b] === a) return;
                    this.ya.push(a);
                    this.Hf.push(a)
                }
            },
            removeItem: function (a) {
                if (a && "menuitem" == a.Nb) {
                    for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] === a && (this.ya[b].remove(), this.ya.splice(b, 1), c--);
                    b = 0;
                    for (c = this.Hf.length; b < c; b++) this.Hf[b] === a && (this.Hf[b].remove(), this.Hf.splice(b, 1), c--)
                }
            },
            TB: function () {
                this.ya.push({
                    Nb: "divider",
                    Nj: this.Ee.length
                });
                this.Ee.push({
                    K: p
                })
            },
            fF: function (a) {
                if (this.Ee[a]) {
                    for (var b = 0, c = this.ya.length; b < c; b++) this.ya[b] && ("divider" == this.ya[b].Nb && this.ya[b].Nj == a) && (this.ya.splice(b, 1), c--),
                    this.ya[b] && ("divider" == this.ya[b].Nb && this.ya[b].Nj > a) && this.ya[b].Nj--;
                    this.Ee.splice(a, 1)
                }
            },
            Id: u("B"),
            show: function () {
                this.Ph != o && (this.Ph = o)
            },
            U: function () {
                this.Ph != q && (this.Ph = q)
            },
            TZ: function (a) {
                a && (this.k.cursor = a)
            },
            getItem: function (a) {
                return this.Hf[a]
            }
        });
    var dc = F.qa + "menu_zoom_in.png",
        ec = F.qa + "menu_zoom_out.png";

    function fc(a, b, c) {
            if (a && Xa(b)) {
                x.lang.Ca.call(this);
                this.k = {
                    width: 100,
                    id: "",
                    Hm: ""
                };
                c = c || {};
                this.k.width = 1 * c.width ? c.width : 100;
                this.k.id = c.id ? c.id : "";
                this.k.Hm = c.iconUrl ? c.iconUrl : "";
                this.Sg = a + "";
                this.Bz = b;
                this.D = p;
                this.Nb = "menuitem";
                this.Vr = this.qv = this.B = this.Hh = p;
                this.Lh = o;
                var d = this;
                I.load("menu", function () {
                    d.yb()
                })
            }
        }
    x.lang.ua(fc, x.lang.Ca, "MenuItem");
    x.object.extend(fc.prototype, {
            ra: function (a, b) {
                this.D = a;
                this.Hh = b
            },
            remove: function () {
                this.D = this.Hh = p
            },
            Zt: function (a) {
                a && (this.Sg = a + "")
            },
            Vb: function (a) {
                a && (this.k.Hm = a)
            },
            Id: u("B"),
            enable: function () {
                this.Lh = o
            },
            disable: function () {
                this.Lh = q
            }
        });

    function db(a, b) {
            a && !b && (b = a);
            this.He = this.Vd = this.Le = this.Xd = this.Pl = this.yl = p;
            a && (this.Pl = new H(a.lng, a.lat), this.yl = new H(b.lng, b.lat), this.Le = a.lng, this.Xd = a.lat, this.He = b.lng, this.Vd = b.lat)
        }
    x.object.extend(db.prototype, {
            xj: function () {
                return !this.Pl || !this.yl
            },
            nb: function (a) {
                return !(a instanceof db) || this.xj() ? q : this.ve().nb(a.ve()) && this.nf().nb(a.nf())
            },
            ve: u("Pl"),
            nf: u("yl"),
            LV: function (a) {
                return !(a instanceof db) || this.xj() || a.xj() ? q : a.Le > this.Le && a.He < this.He && a.Xd > this.Xd && a.Vd < this.Vd
            },
            Ha: function () {
                return this.xj() ? p : new H((this.Le + this.He) / 2, (this.Xd + this.Vd) / 2)
            },
            mt: function (a) {
                if (!(a instanceof db) || Math.max(a.Le, a.He) < Math.min(this.Le, this.He) || Math.min(a.Le, a.He) > Math.max(this.Le, this.He) || Math.max(a.Xd, a.Vd) < Math.min(this.Xd, this.Vd) || Math.min(a.Xd, a.Vd) > Math.max(this.Xd, this.Vd)) return p;
                var b = Math.max(this.Le, a.Le),
                    c = Math.min(this.He, a.He),
                    d = Math.max(this.Xd, a.Xd),
                    a = Math.min(this.Vd, a.Vd);
                return new db(new H(b, d), new H(c, a))
            },
            hs: function (a) {
                return !(a instanceof H) || this.xj() ? q : a.lng >= this.Le && a.lng <= this.He && a.lat >= this.Xd && a.lat <= this.Vd
            },
            extend: function (a) {
                if (a instanceof H) {
                    var b = a.lng,
                        a = a.lat;
                    this.Pl || (this.Pl = new H(0, 0));
                    this.yl || (this.yl = new H(0, 0));
                    if (!this.Le || this.Le > b) this.Pl.lng = this.Le = b;
                    if (!this.He || this.He < b) this.yl.lng = this.He = b;
                    if (!this.Xd || this.Xd > a) this.Pl.lat = this.Xd = a;
                    if (!this.Vd || this.Vd < a) this.yl.lat = this.Vd = a
                }
            },
            NF: function () {
                return this.xj() ? new H(0, 0) : new H(Math.abs(this.He - this.Le), Math.abs(this.Vd - this.Xd))
            }
        });

    function H(a, b) {
            isNaN(a) && (a = Hb(a), a = isNaN(a) ? 0 : a);
            Za(a) && (a = parseFloat(a));
            isNaN(b) && (b = Hb(b), b = isNaN(b) ? 0 : b);
            Za(b) && (b = parseFloat(b));
            this.lng = a;
            this.lat = b
        }
    H.hM = function (a) {
            return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
        };
    H.prototype.nb = function (a) {
            return a && this.lat == a.lat && this.lng == a.lng
        };

    function gc() {}
    gc.prototype.kh = function () {
            ba("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
        };
    gc.prototype.zj = function () {
            ba("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
        };

    function hc() {};
    var cb = {
            rK: function (a, b, c) {
                I.load("coordtransutils", function () {
                    cb.dV(a, b, c)
                }, o)
            },
            qK: function (a, b, c) {
                I.load("coordtransutils", function () {
                    cb.cV(a, b, c)
                }, o)
            }
        };

    function ic() {
            this.Pa = [];
            var a = this;
            I.load("convertor", function () {
                a.ZP()
            })
        }
    x.ua(ic, x.lang.Ca, "Convertor");
    x.extend(ic.prototype, {
            translate: function (a, b, c, d) {
                this.Pa.push({
                    method: "translate",
                    arguments: [a, b, c, d]
                })
            }
        });
    T(ic.prototype, {
            translate: ic.prototype.translate
        });

    function S() {}
    S.prototype = new gc;
    x.extend(S, {
            oP: 6370996.81,
            vG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
            Fu: [75, 60, 45, 30, 15, 0],
            uP: [
                [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
                [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
                [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
                [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
                [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
                [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
            ],
            sG: [
                [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
                [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
                [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
                [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
                [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
                [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
            ],
            A2: function (a, b) {
                if (!a || !b) return 0;
                var c, d, a = this.Ab(a);
                if (!a) return 0;
                c = this.Uk(a.lng);
                d = this.Uk(a.lat);
                b = this.Ab(b);
                return !b ? 0 : this.Te(c, this.Uk(b.lng), d, this.Uk(b.lat))
            },
            Yo: function (a, b) {
                if (!a || !b) return 0;
                a.lng = this.QD(a.lng, -180, 180);
                a.lat = this.UD(a.lat, -74, 74);
                b.lng = this.QD(b.lng, -180, 180);
                b.lat = this.UD(b.lat, -74, 74);
                return this.Te(this.Uk(a.lng), this.Uk(b.lng), this.Uk(a.lat), this.Uk(b.lat))
            },
            Ab: function (a) {
                if (a === p || a === j) return new H(0, 0);
                var b, c;
                b = new H(Math.abs(a.lng), Math.abs(a.lat));
                for (var d = 0; d < this.vG.length; d++) if (b.lat >= this.vG[d]) {
                    c = this.uP[d];
                    break
                }
                a = this.sK(a, c);
                return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
            },
            zb: function (a) {
                if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat) return new H(0, 0);
                var b, c;
                a.lng = this.QD(a.lng, -180, 180);
                a.lat = this.UD(a.lat, -74, 74);
                b = new H(a.lng, a.lat);
                for (var d = 0; d < this.Fu.length; d++) if (b.lat >= this.Fu[d]) {
                    c = this.sG[d];
                    break
                }
                if (!c) for (d = 0; d < this.Fu.length; d++) if (b.lat <= -this.Fu[d]) {
                    c = this.sG[d];
                    break
                }
                a = this.sK(a, c);
                return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
            },
            sK: function (a, b) {
                if (a && b) {
                    var c = b[0] + b[1] * Math.abs(a.lng),
                        d = Math.abs(a.lat) / b[9],
                        d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                        c = c * (0 > a.lng ? -1 : 1),
                        d = d * (0 > a.lat ? -1 : 1);
                    return new H(c, d)
                }
            },
            Te: function (a, b, c, d) {
                return this.oP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
            },
            Uk: function (a) {
                return Math.PI * a / 180
            },
            z4: function (a) {
                return 180 * a / Math.PI
            },
            UD: function (a, b, c) {
                b != p && (a = Math.max(a, b));
                c != p && (a = Math.min(a, c));
                return a
            },
            QD: function (a, b, c) {
                for (; a > c;) a -= c - b;
                for (; a < b;) a += c - b;
                return a
            }
        });
    x.extend(S.prototype, {
            Ck: function (a) {
                return S.zb(a)
            },
            kh: function (a) {
                a = S.zb(a);
                return new R(a.lng, a.lat)
            },
            nh: function (a) {
                return S.Ab(a)
            },
            zj: function (a) {
                a = new H(a.x, a.y);
                return S.Ab(a)
            },
            bc: function (a, b, c, d, e) {
                if (a) return a = this.Ck(a, e),
                b = this.yc(b),
                new R(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
            },
            wb: function (a, b, c, d, e) {
                if (a) return b = this.yc(b),
                this.nh(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
            },
            yc: function (a) {
                return Math.pow(2, 18 - a)
            }
        });

    function fb() {
            this.ej = "bj"
        }
    fb.prototype = new S;
    x.extend(fb.prototype, {
            Ck: function (a, b) {
                return this.JQ(b, S.zb(a))
            },
            nh: function (a, b) {
                return S.Ab(this.KQ(b, a))
            },
            lngLatToPointFor3D: function (a, b) {
                var c = this,
                    d = S.zb(a);
                I.load("coordtrans", function () {
                        var a = hc.SD(c.ej || "bj", d),
                            a = new R(a.x, a.y);
                        b && b(a)
                    }, o)
            },
            pointToLngLatFor3D: function (a, b) {
                var c = this,
                    d = new H(a.x, a.y);
                I.load("coordtrans", function () {
                        var a = hc.RD(c.ej || "bj", d),
                            a = new H(a.lng, a.lat),
                            a = S.Ab(a);
                        b && b(a)
                    }, o)
            },
            JQ: function (a, b) {
                if (I.ib("coordtrans").Bd == I.Fj.dq) {
                    var c = hc.SD(a || "bj", b);
                    return new H(c.x, c.y)
                }
                I.load("coordtrans", s());
                return new H(0, 0)
            },
            KQ: function (a, b) {
                if (I.ib("coordtrans").Bd == I.Fj.dq) {
                    var c = hc.RD(a || "bj", b);
                    return new H(c.lng, c.lat)
                }
                I.load("coordtrans", s());
                return new H(0, 0)
            },
            yc: function (a) {
                return Math.pow(2, 20 - a)
            }
        });

    function jc() {
            this.Nb = "overlay"
        }
    x.lang.ua(jc, x.lang.Ca, "Overlay");
    jc.Em = function (a) {
            a *= 1;
            return !a ? 0 : -1E5 * a << 1
        };
    x.extend(jc.prototype, {
            Ge: function (a) {
                if (!this.V && Xa(this.initialize) && (this.V = this.initialize(a))) this.V.style.WebkitUserSelect = "none";
                this.draw()
            },
            initialize: function () {
                ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            draw: function () {
                ba("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            remove: function () {
                this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
                this.V = p;
                this.dispatchEvent(new M("onremove"))
            },
            U: function () {
                this.V && x.K.U(this.V)
            },
            show: function () {
                this.V && x.K.show(this.V)
            },
            jh: function () {
                return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
            }
        });
    z.We(function (a) {
            function b(a, b) {
                var c = K("div"),
                    g = c.style;
                g.position = "absolute";
                g.top = g.left = g.width = g.height = "0";
                g.zIndex = b;
                a.appendChild(c);
                return c
            }
            var c = a.R;
            c.od = a.od = b(a.platform, 200);
            a.Wd.uD = b(c.od, 800);
            a.Wd.IE = b(c.od, 700);
            a.Wd.gL = b(c.od, 600);
            a.Wd.AE = b(c.od, 500);
            a.Wd.NM = b(c.od, 400);
            a.Wd.OM = b(c.od, 300);
            a.Wd.UO = b(c.od, 201);
            a.Wd.At = b(c.od, 200)
        });

    function eb() {
            x.lang.Ca.call(this);
            jc.call(this);
            this.map = p;
            this.Qa = o;
            this.Cb = p;
            this.iH = 0
        }
    x.lang.ua(eb, jc, "OverlayInternal");
    x.extend(eb.prototype, {
            initialize: function (a) {
                this.map = a;
                x.lang.Ca.call(this, this.ba);
                return p
            },
            tx: u("map"),
            draw: s(),
            Hj: s(),
            remove: function () {
                this.map = p;
                x.lang.Xw(this.ba);
                jc.prototype.remove.call(this)
            },
            U: function () {
                this.Qa !== q && (this.Qa = q)
            },
            show: function () {
                this.Qa !== o && (this.Qa = o)
            },
            jh: function () {
                return !this.V ? q : !! this.Qa
            },
            La: u("V"),
            TN: function (a) {
                var a = a || {},
                    b;
                for (b in a) this.z[b] = a[b]
            },
            $t: ca("zIndex"),
            mj: function () {
                this.z.mj = o
            },
            lW: function () {
                this.z.mj = q
            },
            xo: ca("gg"),
            Fp: function () {
                this.gg = p
            }
        });

    function kc() {
            this.map = p;
            this.wa = {};
            this.De = []
        }
    z.We(function (a) {
            var b = new kc;
            b.map = a;
            a.wa = b.wa;
            a.De = b.De;
            a.addEventListener("load", function (a) {
                b.draw(a)
            });
            a.addEventListener("moveend", function (a) {
                b.draw(a)
            });
            x.da.la && 8 > x.da.la || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function (a) {
                setTimeout(function () {
                    b.draw(a)
                }, 20)
            }) : a.addEventListener("zoomend", function (a) {
                b.draw(a)
            });
            a.addEventListener("maptypechange", function (a) {
                b.draw(a)
            });
            a.addEventListener("addoverlay", function (a) {
                a = a.target;
                if (a instanceof eb) b.wa[a.ba] || (b.wa[a.ba] = a);
                else {
                    for (var d = q, e = 0, f = b.De.length; e < f; e++) if (b.De[e] === a) {
                        d = o;
                        break
                    }
                    d || b.De.push(a)
                }
            });
            a.addEventListener("removeoverlay", function (a) {
                a = a.target;
                if (a instanceof eb) delete b.wa[a.ba];
                else for (var d = 0, e = b.De.length; d < e; d++) if (b.De[d] === a) {
                    b.De.splice(d, 1);
                    break
                }
            });
            a.addEventListener("clearoverlays", function () {
                this.Wc();
                for (var a in b.wa) b.wa[a].z.mj && (b.wa[a].remove(), delete b.wa[a]);
                a = 0;
                for (var d = b.De.length; a < d; a++) b.De[a].enableMassClear !== q && (b.De[a].remove(), b.De[a] = p, b.De.splice(a, 1), a--, d--)
            });
            a.addEventListener("infowindowopen", function () {
                var a = this.Cb;
                a && (x.K.U(a.zc), x.K.U(a.cc))
            });
            a.addEventListener("movestart", function () {
                this.gh() && this.gh().aJ()
            });
            a.addEventListener("moveend", function () {
                this.gh() && this.gh().RI()
            })
        });
    kc.prototype.draw = function (a) {
            if (z.iq) {
                var b = z.iq.Us(this.map);
                "canvas" === b.Nb && b.canvas && b.EQ(b.canvas.getContext("2d"))
            }
            for (var c in this.wa) this.wa[c].draw(a);
            x.kc.Gb(this.De, function (a) {
                a.draw()
            });
            this.map.R.ob && this.map.R.ob.ta();
            z.iq && b.xF()
        };

    function lc(a) {
            eb.call(this);
            a = a || {};
            this.z = {
                strokeColor: a.strokeColor || "#3a6bdb",
                nc: a.strokeWeight || 5,
                rd: a.strokeOpacity || 0.65,
                strokeStyle: a.strokeStyle || "solid",
                mj: a.enableMassClear === q ? q : o,
                wk: p,
                ym: p,
                lf: a.enableEditing === o ? o : q,
                WM: 5,
                a0: q,
                hf: a.enableClicking === q ? q : o,
                ni: a.icons && 0 < a.icons.length ? a.icons : p
            };
            0 >= this.z.nc && (this.z.nc = 5);
            if (0 > this.z.rd || 1 < this.z.rd) this.z.rd = 0.65;
            if (0 > this.z.pg || 1 < this.z.pg) this.z.pg = 0.65;
            "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
            this.V = p;
            this.Pu = new db(0, 0);
            this.ff = [];
            this.oc = [];
            this.Ra = {}
        }
    x.lang.ua(lc, eb, "Graph");
    lc.nx = function (a) {
            var b = [];
            if (!a) return b;
            Za(a) && x.kc.Gb(a.split(";"), function (a) {
                a = a.split(",");
                b.push(new H(a[0], a[1]))
            });
            "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
            return b
        };
    lc.SE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(lc.prototype, {
            initialize: function (a) {
                this.map = a;
                return p
            },
            draw: s(),
            Nr: function (a) {
                this.ff.length = 0;
                this.ia = lc.nx(a).slice(0);
                this.Eh()
            },
            ke: function (a) {
                this.Nr(a)
            },
            Eh: function () {
                if (this.ia) {
                    var a = this;
                    a.Pu = new db;
                    x.kc.Gb(this.ia, function (b) {
                        a.Pu.extend(b)
                    })
                }
            },
            te: u("ia"),
            jn: function (a, b) {
                b && this.ia[a] && (this.ff.length = 0, this.ia[a] = new H(b.lng, b.lat), this.Eh())
            },
            setStrokeColor: function (a) {
                this.z.strokeColor = a
            },
            IX: function () {
                return this.z.strokeColor
            },
            Up: function (a) {
                0 < a && (this.z.nc = a)
            },
            HL: function () {
                return this.z.nc
            },
            Sp: function (a) {
                a == j || (1 < a || 0 > a) || (this.z.rd = a)
            },
            JX: function () {
                return this.z.rd
            },
            Tt: function (a) {
                1 < a || 0 > a || (this.z.pg = a)
            },
            fX: function () {
                return this.z.pg
            },
            Tp: function (a) {
                "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
            },
            GL: function () {
                return this.z.strokeStyle
            },
            setFillColor: function (a) {
                this.z.fillColor = a || ""
            },
            eX: function () {
                return this.z.fillColor
            },
            Hd: u("Pu"),
            remove: function () {
                this.map && this.map.removeEventListener("onmousemove", this.nv);
                eb.prototype.remove.call(this);
                this.ff.length = 0
            },
            lf: function () {
                if (!(2 > this.ia.length)) {
                    this.z.lf = o;
                    var a = this;
                    I.load("poly", function () {
                        a.Vl()
                    }, o)
                }
            },
            kW: function () {
                this.z.lf = q;
                var a = this;
                I.load("poly", function () {
                    a.mk()
                }, o)
            },
            bX: function () {
                return this.z.lf
            }
        });

    function oc(a) {
            eb.call(this);
            this.V = this.map = p;
            this.z = {
                width: 0,
                height: 0,
                za: new L(0, 0),
                opacity: 1,
                background: "transparent",
                Vx: 1,
                AM: "#000",
                DY: "solid",
                point: p
            };
            this.TN(a);
            this.point = this.z.point
        }
    x.lang.ua(oc, eb, "Division");
    x.extend(oc.prototype, {
            Hj: function () {
                var a = this.z,
                    b = this.content,
                    c = ['<div class="BMap_Division" style="position:absolute;'];
                c.push("width:" + a.width + "px;display:block;");
                c.push("overflow:hidden;");
                "none" != a.borderColor && c.push("border:" + a.Vx + "px " + a.DY + " " + a.AM + ";");
                c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
                c.push("background:" + a.background + ";");
                c.push('z-index:60;">');
                c.push(b);
                c.push("</div>");
                this.V = xb(this.map.Qf().IE, c.join(""))
            },
            initialize: function (a) {
                this.map = a;
                this.Hj();
                this.V && x.M(this.V, G() ? "touchstart" : "mousedown", function (a) {
                    ma(a)
                });
                return this.V
            },
            draw: function () {
                var a = this.map.Ve(this.z.point);
                this.z.za = new L(-Math.round(this.z.width / 2) - Math.round(this.z.Vx), -Math.round(this.z.height / 2) - Math.round(this.z.Vx));
                this.V.style.left = a.x + this.z.za.width + "px";
                this.V.style.top = a.y + this.z.za.height + "px"
            },
            ha: function () {
                return this.z.point
            },
            $0: function () {
                return this.map.bc(this.ha())
            },
            ta: function (a) {
                this.z.point = a;
                this.draw()
            },
            UZ: function (a, b) {
                this.z.width = Math.round(a);
                this.z.height = Math.round(b);
                this.V && (this.V.style.width = this.z.width + "px", this.V.style.height = this.z.height + "px", this.draw())
            }
        });

    function pc(a, b, c) {
            a && b && (this.imageUrl = a, this.size = b, a = new L(Math.floor(b.width / 2), Math.floor(b.height / 2)), c = c || {}, a = c.anchor || a, b = c.imageOffset || new L(0, 0), this.imageSize = c.imageSize, this.anchor = a, this.imageOffset = b, this.infoWindowAnchor = c.infoWindowAnchor || this.anchor, this.printImageUrl = c.printImageUrl || "")
        }
    x.extend(pc.prototype, {
            UN: function (a) {
                a && (this.imageUrl = a)
            },
            j_: function (a) {
                a && (this.printImageUrl = a)
            },
            Ae: function (a) {
                a && (this.size = new L(a.width, a.height))
            },
            rc: function (a) {
                a && (this.anchor = new L(a.width, a.height))
            },
            Ut: function (a) {
                a && (this.imageOffset = new L(a.width, a.height))
            },
            $Z: function (a) {
                a && (this.infoWindowAnchor = new L(a.width, a.height))
            },
            XZ: function (a) {
                a && (this.imageSize = new L(a.width, a.height))
            },
            toString: da("Icon")
        });

    function qc(a, b) {
            if (a) {
                b = b || {};
                this.style = {
                    anchor: b.anchor || new L(0, 0),
                    fillColor: b.fillColor || "#000",
                    pg: b.fillOpacity || 0,
                    scale: b.scale || 1,
                    rotation: b.rotation || 0,
                    strokeColor: b.strokeColor || "#000",
                    rd: b.strokeOpacity || 1,
                    nc: b.strokeWeight
                };
                this.Nb = "number" === typeof a ? a : "UserDefined";
                this.Hi = this.style.anchor;
                this.tr = new L(0, 0);
                this.anchor = p;
                this.mB = a;
                var c = this;
                I.load("symbol", function () {
                    c.Ln()
                }, o)
            }
        }
    x.extend(qc.prototype, {
            setPath: ca("mB"),
            setAnchor: function (a) {
                this.Hi = this.style.anchor = a
            },
            setRotation: function (a) {
                this.style.rotation = a
            },
            setScale: function (a) {
                this.style.scale = a
            },
            setStrokeWeight: function (a) {
                this.style.nc = a
            },
            setStrokeColor: function (a) {
                a = x.gs.sC(a, this.style.rd);
                this.style.strokeColor = a
            },
            setStrokeOpacity: function (a) {
                this.style.rd = a
            },
            setFillOpacity: function (a) {
                this.style.pg = a
            },
            setFillColor: function (a) {
                this.style.fillColor = a
            }
        });

    function rc(a, b, c, d) {
            a && (this.Gv = {}, this.eL = d ? !! d : q, this.Uc = [], this.B_ = a instanceof qc ? a : p, this.JI = b === j ? o : !! (b.indexOf("%") + 1), this.Zj = isNaN(parseFloat(b)) ? 1 : this.JI ? parseFloat(b) / 100 : parseFloat(b), this.KI = !! (c.indexOf("%") + 1), this.repeat = c != j ? this.KI ? parseFloat(c) / 100 : parseFloat(c) : 0)
        };

    function sc(a, b) {
            x.lang.Ca.call(this);
            this.content = a;
            this.map = p;
            b = b || {};
            this.z = {
                width: b.width || 0,
                height: b.height || 0,
                maxWidth: b.maxWidth || 730,
                za: b.offset || new L(0, 0),
                title: b.title || "",
                JE: b.maxContent || "",
                $g: b.enableMaximize || q,
                Js: b.enableAutoPan === q ? q : o,
                gD: b.enableCloseOnClick === q ? q : o,
                margin: b.margin || [10, 10, 40, 10],
                nC: b.collisions || [
                    [10, 10],
                    [10, 10],
                    [10, 10],
                    [10, 10]
                ],
                cY: q,
                YY: b.onClosing || da(o),
                WK: q,
                lD: b.enableParano === o ? o : q,
                message: b.message,
                nD: b.enableSearchTool === o ? o : q,
                Gx: b.headerContent || "",
                hD: b.enableContentScroll || q
            };
            if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220), 730 < this.z.width)) this.z.width = 730;
            if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60), 650 < this.z.height)) this.z.height = 650;
            if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220), 730 < this.z.maxWidth)) this.z.maxWidth = 730;
            this.de = q;
            this.Di = F.qa;
            this.bb = p;
            var c = this;
            I.load("infowindow", function () {
                c.yb()
            })
        }
    x.lang.ua(sc, x.lang.Ca, "InfoWindow");
    x.extend(sc.prototype, {
            setWidth: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.width = a)
            },
            setHeight: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60), 650 < a && (a = 650)), this.z.height = a)
            },
            XN: function (a) {
                !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220), 730 < a && (a = 730)), this.z.maxWidth = a)
            },
            Cc: function (a) {
                this.z.title = a
            },
            getTitle: function () {
                return this.z.title
            },
            ad: ca("content"),
            uk: u("content"),
            Wt: function (a) {
                this.z.JE = a + ""
            },
            je: s(),
            Js: function () {
                this.z.Js = o
            },
            disableAutoPan: function () {
                this.z.Js = q
            },
            enableCloseOnClick: function () {
                this.z.gD = o
            },
            disableCloseOnClick: function () {
                this.z.gD = q
            },
            $g: function () {
                this.z.$g = o
            },
            $w: function () {
                this.z.$g = q
            },
            show: function () {
                this.Qa = o
            },
            U: function () {
                this.Qa = q
            },
            close: function () {
                this.U()
            },
            Zx: function () {
                this.de = o
            },
            restore: function () {
                this.de = q
            },
            jh: function () {
                return this.Wa()
            },
            Wa: da(q),
            ha: function () {
                if (this.bb && this.bb.ha) return this.bb.ha()
            },
            Pf: function () {
                return this.z.za
            }
        });
    Ka.prototype.Ob = function (a, b) {
            if (a instanceof sc && b instanceof H) {
                var c = this.R;
                c.Om ? c.Om.ta(b) : (c.Om = new U(b, {
                    icon: new pc(F.qa + "blank.gif", {
                        width: 1,
                        height: 1
                    }),
                    offset: new L(0, 0),
                    clickable: q
                }), c.Om.HR = 1);
                this.Ka(c.Om);
                c.Om.Ob(a)
            }
        };
    Ka.prototype.Wc = function () {
            var a = this.R.ob || this.R.pl;
            a && a.bb && a.bb.Wc()
        };
    eb.prototype.Ob = function (a) {
            this.map && (this.map.Wc(), a.Qa = o, this.map.R.pl = a, a.bb = this, x.lang.Ca.call(a, a.ba))
        };
    eb.prototype.Wc = function () {
            this.map && this.map.R.pl && (this.map.R.pl.Qa = q, x.lang.Xw(this.map.R.pl.ba), this.map.R.pl = p)
        };

    function tc(a, b) {
            eb.call(this);
            this.content = a;
            this.V = this.map = p;
            b = b || {};
            this.z = {
                width: 0,
                za: b.offset || new L(0, 0),
                Xp: {
                    backgroundColor: "#fff",
                    border: "1px solid #f00",
                    padding: "1px",
                    whiteSpace: "nowrap",
                    font: "12px " + F.fontFamily,
                    zIndex: "80",
                    MozUserSelect: "none"
                },
                position: b.position || p,
                mj: b.enableMassClear === q ? q : o,
                hf: o
            };
            0 > this.z.width && (this.z.width = 0);
            Db(b.enableClicking) && (this.z.hf = b.enableClicking);
            this.point = this.z.position;
            var c = this;
            I.load("marker", function () {
                c.yb()
            })
        }
    x.lang.ua(tc, eb, "Label");
    x.extend(tc.prototype, {
            ha: function () {
                return this.vv ? this.vv.ha() : this.point
            },
            ta: function (a) {
                a instanceof H && !this.ux() && (this.point = this.z.position = new H(a.lng, a.lat))
            },
            ad: ca("content"),
            wF: function (a) {
                0 <= a && 1 >= a && (this.z.opacity = a)
            },
            Xe: function (a) {
                a instanceof L && (this.z.za = new L(a.width, a.height))
            },
            Pf: function () {
                return this.z.za
            },
            Ld: function (a) {
                a = a || {};
                this.z.Xp = x.extend(this.z.Xp, a)
            },
            xi: function (a) {
                return this.Ld(a)
            },
            Cc: function (a) {
                this.z.title = a || ""
            },
            getTitle: function () {
                return this.z.title
            },
            WN: function (a) {
                this.point = (this.vv = a) ? this.z.position = a.ha() : this.z.position = p
            },
            ux: function () {
                return this.vv || p
            },
            uk: u("content")
        });

    function uc(a, b) {
            if (0 !== arguments.length) {
                eb.apply(this, arguments);
                b = b || {};
                this.z = {
                    $a: a,
                    opacity: b.opacity || 1,
                    np: b.imageURL || "",
                    zs: b.displayOnMinLevel || 1,
                    mj: b.enableMassClear === q ? q : o,
                    ys: b.displayOnMaxLevel || 19,
                    v_: b.stretch || q
                };
                0 === b.opacity && (this.z.opacity = 0);
                var c = this;
                I.load("groundoverlay", function () {
                    c.yb()
                })
            }
        }
    x.lang.ua(uc, eb, "GroundOverlay");
    x.extend(uc.prototype, {
            setBounds: function (a) {
                this.z.$a = a
            },
            getBounds: function () {
                return this.z.$a
            },
            setOpacity: function (a) {
                this.z.opacity = a
            },
            getOpacity: function () {
                return this.z.opacity
            },
            setImageURL: function (a) {
                this.z.np = a
            },
            getImageURL: function () {
                return this.z.np
            },
            setDisplayOnMinLevel: function (a) {
                this.z.zs = a
            },
            getDisplayOnMinLevel: function () {
                return this.z.zs
            },
            setDisplayOnMaxLevel: function (a) {
                this.z.ys = a
            },
            getDisplayOnMaxLevel: function () {
                return this.z.ys
            }
        });
    var vc = 3,
        wc = 4;

    function xc() {
            var a = document.createElement("canvas");
            return !(!a.getContext || !a.getContext("2d"))
        }
    function yc(a, b) {
            var c = this;
            xc() && (a === j && ba(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")), "[object Array]" !== Object.prototype.toString.call(a) && ba(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")), b = b || {}, eb.apply(c, arguments), c.ea = {
                ia: a
            }, c.z = {
                shape: b.shape || vc,
                size: b.size || wc,
                color: b.color || "#fa937e",
                mj: o
            }, this.jB = [], this.oe = [], I.load("pointcollection", function () {
                for (var a = 0, b; b = c.jB[a]; a++) c[b.method].apply(c, b.arguments);
                for (a = 0; b = c.oe[a]; a++) c[b.method].apply(c, b.arguments)
            }))
        }
    x.lang.ua(yc, eb, "PointCollection");
    x.extend(yc.prototype, {
            initialize: function (a) {
                this.jB && this.jB.push({
                    method: "initialize",
                    arguments: arguments
                })
            },
            setPoints: function (a) {
                this.oe && this.oe.push({
                    method: "setPoints",
                    arguments: arguments
                })
            },
            setStyles: function (a) {
                this.oe && this.oe.push({
                    method: "setStyles",
                    arguments: arguments
                })
            },
            clear: function () {
                this.oe && this.oe.push({
                    method: "clear",
                    arguments: arguments
                })
            },
            remove: function () {
                this.oe && this.oe.push({
                    method: "remove",
                    arguments: arguments
                })
            }
        });
    var zc = new pc(F.qa + "marker_red_sprite.png", new L(19, 25), {
            anchor: new L(10, 25),
            infoWindowAnchor: new L(10, 0)
        }),
        Ac = new pc(F.qa + "marker_red_sprite.png", new L(20, 11), {
            anchor: new L(6, 11),
            imageOffset: new L(-19, -13)
        });

    function U(a, b) {
            eb.call(this);
            b = b || {};
            this.point = a;
            this.yq = this.map = p;
            this.z = {
                za: b.offset || new L(0, 0),
                uj: b.icon || zc,
                Ok: Ac,
                title: b.title || "",
                label: p,
                $J: b.baseZIndex || 0,
                hf: o,
                T4: q,
                vE: q,
                mj: b.enableMassClear === q ? q : o,
                Hb: q,
                DN: b.raiseOnDrag === o ? o : q,
                KN: q,
                Fd: b.draggingCursor || F.Fd,
                rotation: b.rotation || 0
            };
            b.icon && !b.shadow && (this.z.Ok = p);
            b.enableDragging && (this.z.Hb = b.enableDragging);
            Db(b.enableClicking) && (this.z.hf = b.enableClicking);
            var c = this;
            I.load("marker", function () {
                c.yb()
            })
        }
    U.Ku = jc.Em(-90) + 1E6;
    U.oG = U.Ku + 1E6;
    x.lang.ua(U, eb, "Marker");
    x.extend(U.prototype, {
            Vb: function (a) {
                if (a instanceof pc || a instanceof qc) this.z.uj = a
            },
            Zo: function () {
                return this.z.uj
            },
            Ey: function (a) {
                a instanceof pc && (this.z.Ok = a)
            },
            getShadow: function () {
                return this.z.Ok
            },
            gn: function (a) {
                this.z.label = a || p
            },
            OD: function () {
                return this.z.label
            },
            Hb: function () {
                this.z.Hb = o
            },
            LC: function () {
                this.z.Hb = q
            },
            ha: u("point"),
            ta: function (a) {
                a instanceof H && (this.point = new H(a.lng, a.lat))
            },
            yi: function (a, b) {
                this.z.vE = !! a;
                a && (this.KG = b || 0)
            },
            Cc: function (a) {
                this.z.title = a + ""
            },
            getTitle: function () {
                return this.z.title
            },
            Xe: function (a) {
                a instanceof L && (this.z.za = a)
            },
            Pf: function () {
                return this.z.za
            },
            fn: ca("yq"),
            Rp: function (a) {
                this.z.rotation = a
            },
            EL: function () {
                return this.z.rotation
            }
        });

    function Bc(a, b) {
            lc.call(this, b);
            b = b || {};
            this.z.pg = b.fillOpacity ? b.fillOpacity : 0.65;
            this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
            this.ke(a);
            var c = this;
            I.load("poly", function () {
                c.yb()
            })
        }
    x.lang.ua(Bc, lc, "Polygon");
    x.extend(Bc.prototype, {
            ke: function (a, b) {
                this.to = lc.nx(a).slice(0);
                var c = lc.nx(a).slice(0);
                1 < c.length && c.push(new H(c[0].lng, c[0].lat));
                lc.prototype.ke.call(this, c, b)
            },
            jn: function (a, b) {
                this.to[a] && (this.to[a] = new H(b.lng, b.lat), this.ia[a] = new H(b.lng, b.lat), 0 == a && !this.ia[0].nb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new H(b.lng, b.lat)), this.Eh())
            },
            te: function () {
                var a = this.to;
                0 == a.length && (a = this.ia);
                return a
            }
        });

    function Cc(a, b) {
            lc.call(this, b);
            this.Nr(a);
            var c = this;
            I.load("poly", function () {
                c.yb()
            })
        }
    x.lang.ua(Cc, lc, "Polyline");

    function Dc(a, b, c) {
            this.point = a;
            this.xa = Math.abs(b);
            Bc.call(this, [], c)
        }
    Dc.SE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ua(Dc, Bc, "Circle");
    x.extend(Dc.prototype, {
            initialize: function (a) {
                this.map = a;
                this.ia = this.jv(this.point, this.xa);
                this.Eh();
                return p
            },
            Ha: u("point"),
            Vf: function (a) {
                a && (this.point = a)
            },
            CL: u("xa"),
            uf: function (a) {
                this.xa = Math.abs(a)
            },
            jv: function (a, b) {
                if (!a || !b || !this.map) return [];
                for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                    var i = Math.PI / 180 * g,
                        k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)),
                        i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                    c.push(i)
                }
                d = c[0];
                c.push(new H(d.lng, d.lat));
                return c
            }
        });
    var Ec = {};

    function Fc(a) {
            this.map = a;
            this.Nm = [];
            this.Wf = [];
            this.Bg = [];
            this.qV = 300;
            this.bF = 0;
            this.ug = {};
            this.dj = {};
            this.ph = 0;
            this.pE = o;
            this.AK = {};
            this.co = this.On(1);
            this.ld = this.On(2);
            this.zl = this.On(3);
            a.platform.appendChild(this.co);
            a.platform.appendChild(this.ld);
            a.platform.appendChild(this.zl);
            var b = 256 * Math.pow(2, 15),
                c = 3 * b,
                a = S.zb(new H(180, 0)).lng,
                c = c - a,
                b = -3 * b,
                d = S.zb(new H(-180, 0)).lng;
            this.mI = a;
            this.nI = d;
            this.QA = c + (d - b);
            this.oI = a - d
        }
    z.We(function (a) {
            var b = new Fc(a);
            b.ra();
            a.eb = b
        });
    x.extend(Fc.prototype, {
            ra: function () {
                var a = this,
                    b = a.map;
                b.addEventListener("loadcode", function () {
                        a.Wx()
                    });
                b.addEventListener("addtilelayer", function (b) {
                        a.Vg(b)
                    });
                b.addEventListener("removetilelayer", function (b) {
                        a.wh(b)
                    });
                b.addEventListener("setmaptype", function (b) {
                        a.zg(b)
                    });
                b.addEventListener("zoomstartcode", function (b) {
                        a.Jc(b)
                    });
                b.addEventListener("setcustomstyles", function (b) {
                        a.Vt(b.target);
                        a.Tf(o)
                    })
            },
            Wx: function () {
                var a = this;
                if (x.da.la) try {
                    document.execCommand("BackgroundImageCache", q, o)
                } catch (b) {}
                this.loaded || a.Mx();
                a.Tf();
                this.loaded || (this.loaded = o, I.load("tile", function () {
                    a.$P()
                }))
            },
            Mx: function () {
                for (var a = this.map.oa().or, b = 0; b < a.length; b++) {
                    var c = new Gc;
                    x.extend(c, a[b]);
                    this.Nm.push(c);
                    c.ra(this.map, this.co)
                }
                this.Vt()
            },
            On: function (a) {
                var b = K("div");
                b.style.position = "absolute";
                b.style.overflow = "visible";
                b.style.left = b.style.top = "0";
                b.style.zIndex = a;
                return b
            },
            xf: function () {
                this.ph--;
                var a = this;
                this.pE && (this.map.dispatchEvent(new M("onfirsttileloaded")), this.pE = q);
                0 == this.ph && (this.Li && (clearTimeout(this.Li), this.Li = p), this.Li = setTimeout(function () {
                    if (a.ph == 0) {
                        a.map.dispatchEvent(new M("ontilesloaded"));
                        a.pE = o
                    }
                    a.Li = p
                }, 80))
            },
            ZD: function (a, b) {
                return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
            },
            Jx: function (a) {
                var b = a.Ib;
                b && wb(b) && b.parentNode.removeChild(b);
                delete this.ug[a.name];
                a.loaded || (Hc(a), a.Ib = p, a.Qm = p)
            },
            Dm: function (a, b, c) {
                var d = this.map,
                    e = d.oa(),
                    f = d.Oa,
                    g = d.mc,
                    i = e.yc(f),
                    k = this.rL(),
                    l = k[0],
                    m = k[1],
                    n = k[2],
                    t = k[3],
                    v = k[4],
                    c = "undefined" != typeof c ? c : 0,
                    e = e.k.Qb,
                    k = d.ba.replace(/^TANGRAM_/, "");
                for (this.Qc ? this.Qc.length = 0 : this.Qc = []; l < n; l++) for (var w = m; w < t; w++) {
                        var y = l,
                            B = w;
                        this.Qc.push([y, B]);
                        y = k + "_" + b + "_" + y + "_" + B + "_" + f;
                        this.AK[y] = y
                    }
                this.Qc.sort(function (a) {
                        return function (b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([v[0] - 1, v[1] - 1]));
                g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
                l = -d.offsetY + d.height / 2;
                a.style.left = -d.offsetX + d.width / 2 + "px";
                a.style.top = l + "px";
                this.Me ? this.Me.length = 0 : this.Me = [];
                l = 0;
                for (d = a.childNodes.length; l < d; l++) w = a.childNodes[l],
                w.kr = q,
                this.Me.push(w);
                if (l = this.Tm) for (var A in l) delete l[A];
                else this.Tm = {};
                this.Ne ? this.Ne.length = 0 : this.Ne = [];
                l = 0;
                for (d = this.Qc.length; l < d; l++) {
                        A = this.Qc[l][0];
                        i = this.Qc[l][1];
                        w = 0;
                        for (m = this.Me.length; w < m; w++) if (n = this.Me[w], n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                            n.kr = o;
                            this.Tm[n.id] = n;
                            break
                        }
                    }
                l = 0;
                for (d = this.Me.length; l < d; l++) n = this.Me[l],
                n.kr || this.Ne.push(n);
                this.qn = [];
                w = (e + c) * this.map.C.devicePixelRatio;
                l = 0;
                for (d = this.Qc.length; l < d; l++) A = this.Qc[l][0],
                i = this.Qc[l][1],
                t = A * e + g[0] - c / 2,
                v = (-1 - i) * e + g[1] - c / 2,
                y = k + "_" + b + "_" + A + "_" + i + "_" + f,
                m = this.Tm[y],
                n = p,
                m ? (n = m.style, n.left = t + "px", n.top = v + "px", m.$e || this.qn.push([A, i, m])) : (0 < this.Ne.length ? (m = this.Ne.shift(), m.getContext("2d").clearRect(-c / 2, -c / 2, w, w), n = m.style) : (m = document.createElement("canvas"), n = m.style, n.position = "absolute", n.width = e + c + "px", n.height = e + c + "px", this.Rx() && (n.WebkitTransform = "scale(1.001)"), m.setAttribute("width", w), m.setAttribute("height", w), a.appendChild(m)), m.id = y, n.left = t + "px", n.top = v + "px", -1 < y.indexOf("bg") && (t = "#F3F1EC", this.map.C.Co && (t = this.map.C.Co), n.background = t ? t : ""), this.qn.push([A, i, m])),
                m.style.visibility = "";
                l = 0;
                for (d = this.Ne.length; l < d; l++) this.Ne[l].style.visibility = "hidden";
                return this.qn
            },
            Rx: function () {
                return /M040/i.test(navigator.userAgent)
            },
            rL: function () {
                var a = this.map,
                    b = a.oa(),
                    c = b.dE(a.Oa),
                    d = a.mc,
                    e = Math.ceil(d.lng / c),
                    f = Math.ceil(d.lat / c),
                    b = b.k.Qb,
                    c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
                return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
            },
            q_: function (a, b, c, d) {
                var e = this;
                e.H1 = b;
                var f = this.map.oa(),
                    g = e.ZD(a, c),
                    i = f.k.Qb,
                    b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]],
                    k = this.ug[g];
                if (this.map.oa() !== Ya && this.map.oa() !== Sa) {
                        var l = this.Dw(a[0], a[2]).offsetX;
                        b[0] += l;
                        b.d1 = l
                    }
                k && k.Ib ? (ub(k.Ib, b), d && (d = new R(a[0], a[1]), f = this.map.C.xe ? this.map.C.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ic(k, d)), k.loaded ? this.xf() : Jc(k, function () {
                        e.xf()
                    })) : (k = this.dj[g]) && k.Ib ? (c.Rb.insertBefore(k.Ib, c.Rb.lastChild), this.ug[g] = k, ub(k.Ib, b), d && (d = new R(a[0], a[1]), f = this.map.C.xe ? this.map.C.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k.loaded = q, Ic(k, d)), k.loaded ? this.xf() : Jc(k, function () {
                        e.xf()
                    })) : (k = i * Math.pow(2, f.wm() - a[2]), new H(a[0] * k, a[1] * k), d = new R(a[0], a[1]), f = this.map.C.xe ? this.map.C.xe.style : "normal", d = c.getTilesUrl(d, a[2], f), k = new Kc(this, d, b, a, c), Jc(k, function () {
                        e.xf()
                    }), k.bo(), this.ug[g] = k)
            },
            xf: function () {
                this.ph--;
                var a = this;
                0 == this.ph && (this.Li && (clearTimeout(this.Li), this.Li = p), this.Li = setTimeout(function () {
                    if (a.ph == 0) {
                        a.map.dispatchEvent(new M("ontilesloaded"));
                        if (ta) {
                            if (qa && ra && sa) {
                                var b = $a(),
                                    c = a.map.Bb();
                                setTimeout(function () {
                                        Qa(5030, {
                                            load_script_time: ra - qa,
                                            load_tiles_time: b - sa,
                                            map_width: c.width,
                                            map_height: c.height,
                                            map_size: c.width * c.height
                                        })
                                    }, 1E4);
                                z.En("cus.fire", "time", {
                                        z_imgfirstloaded: b - sa
                                    })
                            }
                            ta = q
                        }
                    }
                    a.Li = p
                }, 80))
            },
            ZD: function (a, b) {
                return this.map.oa() === Pa ? "TILE-" + b.ba + "-" + this.map.Jw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
            },
            Jx: function (a) {
                var b = a.Ib;
                b && (Lc(b), wb(b) && b.parentNode.removeChild(b));
                delete this.ug[a.name];
                a.loaded || (Lc(b), Hc(a), a.Ib = p, a.Qm = p)
            },
            Dw: function (a, b) {
                for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e;) a -= d,
                c -= this.QA;
                for (; a < f;) a += d,
                c += this.QA;
                c = Math.round(c / Math.pow(2, 18 - b));
                return {
                    offsetX: c,
                    fs: a
                }
            },
            sV: function (a) {
                for (var b = a.lng; b > this.mI;) b -= this.oI;
                for (; b < this.nI;) b += this.oI;
                a.lng = b;
                return a
            },
            tV: function (a, b) {
                for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.mI / c), e = Math.floor(this.nI / c), c = Math.floor(this.QA / c), f = [], g = 0; g < a.length; g++) {
                    var i = a[g],
                        k = i[0],
                        i = i[1];
                    if (k >= d) {
                            var k = k + c,
                                l = "id_" + k + "_" + i + "_" + b;
                            a[l] || (a[l] = o, f.push([k, i]))
                        } else k <= e && (k -= c, l = "id_" + k + "_" + i + "_" + b, a[l] || (a[l] = o, f.push([k, i])))
                }
                for (g = 0; g < f.length; g++) a.push(f[g]);
                return a
            },
            Tf: function (a) {
                var b = this;
                if (b.map.oa() == Pa) I.load("coordtrans", function () {
                    b.map.Xb || (b.map.Xb = Pa.tk(b.map.Xg), b.map.Jw = Pa.pL(b.map.Xb));
                    b.qI()
                }, o);
                else {
                    if (a && a) for (var c in this.dj) delete this.dj[c];
                    b.qI(a)
                }
            },
            qI: function (a) {
                var b = this.Nm.concat(this.Wf),
                    c = b.length,
                    d = this.map,
                    e = d.oa(),
                    f = d.mc;
                this.map.oa() !== Ya && this.map.oa() !== Sa && (f = this.sV(f));
                for (var g = 0; g < c; g++) {
                        var i = b[g];
                        if (i.gc && d.Oa < i.gc) break;
                        if (i.Aw) {
                            var k = this.Rb = i.Rb;
                            if (a) {
                                var l = k;
                                if (l && l.childNodes) for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--) m = l.childNodes[n],
                                l.removeChild(m),
                                m = p
                            }
                            if (this.map.Wb()) {
                                this.ld.style.display = "block";
                                k.style.display = "none";
                                this.map.dispatchEvent(new M("vectorchanged"), {
                                    isvector: o
                                });
                                continue
                            } else k.style.display = "block",
                            this.ld.style.display = "none",
                            this.map.dispatchEvent(new M("vectorchanged"), {
                                isvector: q
                            })
                        }
                        if (!i.dI && !(i.rp && !this.map.Wb() || i.oM && this.map.Wb())) {
                            d = this.map;
                            e = d.oa();
                            k = e.ep();
                            m = d.Oa;
                            f = d.mc;
                            e == Pa && f.nb(new H(0, 0)) && (f = d.mc = k.Ck(d.Oe, d.Xb));
                            var t = e.yc(m),
                                k = e.dE(m),
                                l = Math.ceil(f.lng / k),
                                v = Math.ceil(f.lat / k),
                                w = e.k.Qb,
                                k = [l, v, (f.lng - l * k) / k * w, (f.lat - v * k) / k * w],
                                n = k[0] - Math.ceil((d.width / 2 - k[2]) / w),
                                l = k[1] - Math.ceil((d.height / 2 - k[3]) / w),
                                v = k[0] + Math.ceil((d.width / 2 + k[2]) / w),
                                y = 0;
                            e === Pa && 15 == d.fa() && (y = 1);
                            e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
                            this.VJ = new H(f.lng, f.lat);
                            var B = this.ug,
                                w = -this.VJ.lng / t,
                                y = this.VJ.lat / t,
                                t = [Math.ceil(w), Math.ceil(y)],
                                f = d.fa(),
                                A;
                            for (A in B) {
                                    var E = B[A],
                                        C = E.info;
                                        (C[2] != f || C[2] == f && (n > C[0] || v <= C[0] || l > C[1] || e <= C[1])) && this.Jx(E)
                                }
                            B = -d.offsetX + d.width / 2;
                            E = -d.offsetY + d.height / 2;
                            i.Rb && (i.Rb.style.left = Math.ceil(w + B) - t[0] + "px", i.Rb.style.top = Math.ceil(y + E) - t[1] + "px", i.Rb.style.WebkitTransform = "translate3d(0,0,0)");
                            w = [];
                            for (d.NB = []; n < v; n++) for (y = l; y < e; y++) w.push([n, y]),
                            d.NB.push({
                                    x: n,
                                    y: y
                                });
                            this.map.oa() !== Ya && this.map.oa() !== Sa && (w = this.tV(w, m));
                            w.sort(function (a) {
                                    return function (b, c) {
                                        return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                                    }
                                }([k[0] - 1, k[1] - 1]));
                            m = w.length;
                            this.ph += m;
                            for (n = 0; n < m; n++) this.q_([w[n][0], w[n][1], f], t, i, a)
                        }
                    }
            },
            Vg: function (a) {
                var b = this,
                    c = a.target,
                    a = b.map.Wb();
                if (c instanceof bb) a && !c.Jm && (c.ra(this.map, this.ld), c.Jm = o);
                else if (c.Ch && this.map.Vg(c.Ch), c.rp) {
                        for (a = 0; a < b.Bg.length; a++) if (b.Bg[a] == c) return;
                        I.load("vector", function () {
                            c.ra(b.map, b.ld);
                            b.Bg.push(c)
                        }, o)
                    } else {
                        for (a = 0; a < b.Wf.length; a++) if (b.Wf[a] == c) return;
                        c.ra(this.map, this.zl);
                        b.Wf.push(c)
                    }
            },
            wh: function (a) {
                var a = a.target,
                    b = this.map.Wb();
                if (a instanceof bb) b && a.Jm && (a.remove(), a.Jm = q);
                else {
                        a.Ch && this.map.wh(a.Ch);
                        if (a.rp) for (var b = 0, c = this.Bg.length; b < c; b++) a == this.Bg[b] && this.Bg.splice(b, 1);
                        else {
                            b = 0;
                            for (c = this.Wf.length; b < c; b++) a == this.Wf[b] && this.Wf.splice(b, 1)
                        }
                        a.remove()
                    }
            },
            zg: function () {
                for (var a = this.Nm, b = 0, c = a.length; b < c; b++) a[b].remove();
                delete this.Rb;
                this.Nm = [];
                this.dj = this.ug = {};
                this.Mx();
                this.Tf()
            },
            Jc: function () {
                var a = this;
                a.td && x.K.U(a.td);
                setTimeout(function () {
                    a.Tf();
                    a.map.dispatchEvent(new M("onzoomend"))
                }, 10)
            },
            J4: s(),
            Vt: function (a) {
                var b = this.map.oa();
                if (!this.map.Wb() && (a ? this.map.C.y_ = a : a = this.map.C.y_, a)) for (var c = p, c = "2" == z.Sy ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Nm[d]; d++) if (e.l_ == o) {
                    b.k.$b = 18;
                    e.getTilesUrl = function (b, d) {
                        var e = b.x,
                            e = this.map.eb.Dw(e, d).fs,
                            k = b.y,
                            l = Qb("normal"),
                            m = 1;
                        this.map.Kx() && (m = 2);
                        l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=" + l + "&scale=" + m + "&ak=" + pa;
                        l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                        return c[Math.abs(e + k) % c.length] + l
                    };
                    break
                }
            }
        });

    function Kc(a, b, c, d, e) {
            this.Qm = a;
            this.position = c;
            this.Vu = [];
            this.name = a.ZD(d, e);
            this.info = d;
            this.tJ = e.xt();
            d = K("img");
            vb(d);
            d.iL = q;
            var f = d.style,
                a = a.map.oa();
            f.position = "absolute";
            f.border = "none";
            f.width = a.k.Qb + "px";
            f.height = a.k.Qb + "px";
            f.left = c[0] + "px";
            f.top = c[1] + "px";
            f.maxWidth = "none";
            this.Ib = d;
            this.src = b;
            Mc && (this.Ib.style.opacity = 0);
            var g = this;
            this.Ib.onload = function () {
                    z.FY.MQ();
                    g.loaded = o;
                    if (g.Qm) {
                        var a = g.Qm,
                            b = a.dj;
                        if (!b[g.name]) {
                                a.bF++;
                                b[g.name] = g
                            }
                        if (g.Ib && !wb(g.Ib) && e.Rb) {
                                e.Rb.appendChild(g.Ib);
                                if (x.da.la <= 6 && x.da.la > 0 && g.tJ) g.Ib.style.cssText = g.Ib.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                            }
                        var c = a.bF - a.qV,
                            d;
                        for (d in b) {
                                if (c <= 0) break;
                                if (!a.ug[d]) {
                                    b[d].Qm = p;
                                    var f = b[d].Ib;
                                    if (f && f.parentNode) {
                                        f.parentNode.removeChild(f);
                                        Lc(f)
                                    }
                                    f = p;
                                    b[d].Ib = p;
                                    delete b[d];
                                    a.bF--;
                                    c--
                                }
                            }
                        Mc && new qb({
                                Gc: 20,
                                duration: 200,
                                va: function (a) {
                                    if (g.Ib && g.Ib.style) g.Ib.style.opacity = a * 1
                                },
                                finish: function () {
                                    g.Ib && g.Ib.style && delete g.Ib.style.opacity
                                }
                            });
                        Hc(g)
                    }
                };
            this.Ib.onerror = function () {
                    Hc(g);
                    if (g.Qm) {
                        var a = g.Qm.map.oa();
                        if (a.k.oD) {
                            g.error = o;
                            g.Ib.src = a.k.oD;
                            g.Ib && !wb(g.Ib) && e.Rb.appendChild(g.Ib)
                        }
                    }
                };
            d = p
        }
    function Jc(a, b) {
            a.Vu.push(b)
        }
    Kc.prototype.bo = function () {
            this.Ib.src = 0 < x.da.la && 6 >= x.da.la && this.tJ ? F.qa + "blank.gif" : "" !== this.src && this.Ib.src == this.src ? this.src + "&t = " + Date.now() : this.src
        };

    function Hc(a) {
            for (var b = 0; b < a.Vu.length; b++) a.Vu[b]();
            a.Vu.length = 0
        }
    function Lc(a) {
            if (a) {
                a.onload = a.onerror = p;
                var b = a.attributes,
                    c, d, e;
                if (b) {
                        d = b.length;
                        for (c = 0; c < d; c += 1) e = b[c].name,
                        "unknown" !== typeof a[e] && Xa(a[e]) && (a[e] = p)
                    }
                if (b = a.children) {
                        d = b.length;
                        for (c = 0; c < d; c += 1) Lc(a.children[c])
                    }
            }
        }
    function Ic(a, b) {
            a.src = b;
            a.bo()
        }
    var Mc = !x.da.la || 8 < x.da.la;

    function Gc(a) {
            this.qh = a || {};
            this.NV = this.qh.copyright || p;
            this.X_ = this.qh.transparentPng || q;
            this.Aw = this.qh.baseLayer || q;
            this.zIndex = this.qh.zIndex || 0;
            this.ba = Gc.AS++
        }
    Gc.AS = 0;
    x.lang.ua(Gc, x.lang.Ca, "TileLayer");
    x.extend(Gc.prototype, {
            ra: function (a, b) {
                this.Aw && (this.zIndex = -100);
                this.map = a;
                if (!this.Rb) {
                    var c = K("div"),
                        d = c.style;
                    d.position = "absolute";
                    d.overflow = "visible";
                    d.zIndex = this.zIndex;
                    d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                    d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                    b.appendChild(c);
                    this.Rb = c
                }
            },
            remove: function () {
                this.Rb && this.Rb.parentNode && (this.Rb.innerHTML = "", this.Rb.parentNode.removeChild(this.Rb));
                delete this.Rb
            },
            xt: u("X_"),
            getTilesUrl: function (a, b) {
                if (this.map.oa() !== Ya && this.map.oa() !== Sa) var c = this.map.eb.Dw(a.x, b).fs;
                var d = "";
                this.qh.tileUrlTemplate && (d = this.qh.tileUrlTemplate.replace(/\{X\}/, c), d = d.replace(/\{Y\}/, a.y), d = d.replace(/\{Z\}/, b));
                return d
            },
            tm: u("NV"),
            oa: function () {
                return this.Jb || La
            }
        });

    function Oc(a, b) {
            Eb(a) ? b = a || {} : (b = b || {}, b.databoxId = a);
            this.k = {
                BK: b.databoxId,
                bh: b.geotableId,
                Zm: b.q || "",
                lu: b.tags || "",
                filter: b.filter || "",
                Ly: b.sortby || "",
                w_: b.styleId || "",
                Wl: b.ak || pa,
                xw: b.age || 36E5,
                zIndex: 11,
                BY: "VectorCloudLayer",
                Bk: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
                YU: "LBS\u4e91\u9ebb\u70b9\u5c42"
            };
            this.rp = o;
            Gc.call(this, this.k);
            this.fW = z.qc + "geosearch/detail/";
            this.gW = z.qc + "geosearch/v2/detail/";
            this.lp = {}
        }
    x.ua(Oc, Gc, "VectorCloudLayer");

    function Pc(a) {
            a = a || {};
            this.k = x.extend(a, {
                zIndex: 1,
                BY: "VectorTrafficLayer",
                YU: "\u77e2\u91cf\u8def\u51b5\u5c42"
            });
            this.rp = o;
            Gc.call(this, this.k);
            this.T_ = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
            this.Fb = {
                "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
                1: [2, 1354709503, 3, 2, 0, [], 0, 0],
                10: [2, -231722753, 2, 2, 0, [], 0, 0],
                11: [2, -231722753, 3, 2, 0, [], 0, 0],
                12: [2, -231722753, 4, 2, 0, [], 0, 0],
                13: [2, -231722753, 5, 2, 0, [], 0, 0],
                14: [2, -231722753, 6, 2, 0, [], 0, 0],
                15: [2, -1, 4, 0, 0, [], 0, 0],
                16: [2, -1, 5.5, 0, 0, [], 0, 0],
                17: [2, -1, 7, 0, 0, [], 0, 0],
                18: [2, -1, 8.5, 0, 0, [], 0, 0],
                19: [2, -1, 10, 0, 0, [], 0, 0],
                2: [2, 1354709503, 4, 2, 0, [], 0, 0],
                3: [2, 1354709503, 5, 2, 0, [], 0, 0],
                4: [2, 1354709503, 6, 2, 0, [], 0, 0],
                5: [2, -6350337, 2, 2, 0, [], 0, 0],
                6: [2, -6350337, 3, 2, 0, [], 0, 0],
                7: [2, -6350337, 4, 2, 0, [], 0, 0],
                8: [2, -6350337, 5, 2, 0, [], 0, 0],
                9: [2, -6350337, 6, 2, 0, [], 0, 0]
            }
        }
    x.ua(Pc, Gc, "VectorTrafficLayer");

    function bb(a) {
            this.rV = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?"];
            this.k = {
                dL: q
            };
            for (var b in a) this.k[b] = a[b];
            this.Yh = this.Ih = this.Xa = this.B = this.D = p;
            this.tM = 0;
            var c = this;
            I.load("vector", function () {
                c.Ce()
            })
        }
    x.extend(bb.prototype, {
            ra: function (a, b) {
                this.D = a;
                this.B = b
            },
            remove: function () {
                this.B = this.D = p
            }
        });

    function Qc(a) {
            Gc.call(this, a);
            this.k = a || {};
            this.oM = o;
            if (this.k.predictDate) {
                if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday) this.k.predictDate = 1;
                if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour) this.k.predictDate.hour = 0
            }
            this.BU = z.url.proto + z.url.domain.traffic + "/traffic/"
        }
    Qc.prototype = new Gc;
    Qc.prototype.ra = function (a, b) {
            Gc.prototype.ra.call(this, a, b);
            this.D = a
        };
    Qc.prototype.xt = da(o);
    Qc.prototype.getTilesUrl = function (a, b) {
            var c = "";
            this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&", c += "label=web2D&v=016&");
            var c = this.BU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
                d = 1;
            this.D.Kx() && (d = 2);
            return (c + "&scaler=" + d).replace(/-(\d+)/gi, "M$1")
        };
    var Rc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Sc = z.url.proto + z.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Tc = 100;

    function lb(a, b) {
            Gc.call(this);
            var c = this;
            this.oM = o;
            var d = q;
            try {
                document.createElement("canvas").getContext("2d"),
                d = o
            } catch (e) {
                d = q
            }
            d && (this.Ch = new Oc(a, b), this.Ch.KF = this);
            Eb(a) ? b = a || {} : (c.Rn = a, b = b || {});
            b.geotableId && (c.zf = b.geotableId);
            b.databoxId && (c.Rn = b.databoxId);
            d = z.qc + "geosearch";
            c.pc = {
                yN: b.pointDensity || Tc,
                $X: d + "/detail/",
                aY: d + "/v2/detail/",
                xw: b.age || 36E5,
                Zm: b.q || "",
                G_: "png",
                g3: [5, 5, 5, 5],
                AY: {
                    backgroundColor: "#FFFFD5",
                    borderColor: "#808080"
                },
                Wl: b.ak || pa,
                lu: b.tags || "",
                filter: b.filter || "",
                Ly: b.sortby || "",
                Bk: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
                TF: o
            };
            I.load("clayer", function () {
                c.Qd()
            })
        }
    lb.prototype = new Gc;
    lb.prototype.ra = function (a, b) {
            Gc.prototype.ra.call(this, a, b);
            this.D = a
        };
    lb.prototype.getTilesUrl = function (a, b) {
            var c = a.x,
                d = a.y,
                e = this.pc,
                c = Rc[Math.abs(c + d) % Rc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Zm + "&tags=" + e.lu + "&filter=" + e.filter + "&sortby=" + e.Ly + "&ak=" + this.pc.Wl + "&age=" + e.xw + "&page_size=" + e.yN + "&format=" + e.G_;
            e.TF || (e = (1E5 * Math.random()).toFixed(0), c += "&timeStamp=" + e);
            this.zf ? c += "&geotable_id=" + this.zf : this.Rn && (c += "&databox_id=" + this.Rn);
            return c
        };
    lb.prototype.enableUseCache = function () {
            this.pc.TF = o
        };
    lb.prototype.disableUseCache = function () {
            this.pc.TF = q
        };
    lb.ZT = /^point\(|\)$/ig;
    lb.$T = /\s+/;
    lb.bU = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function Uc(a, b, c) {
            this.ef = a;
            this.or = b instanceof Gc ? [b] : b.slice(0);
            c = c || {};
            this.k = {
                H_: c.tips || "",
                BE: "",
                gc: c.minZoom || 4,
                $b: c.maxZoom || 18,
                f3: c.minZoom || 4,
                e3: c.maxZoom || 18,
                Qb: 256,
                IF: c.textColor || "black",
                oD: c.errorImageUrl || "",
                $a: new db(new H(-21364736, -16023552), new H(23855104, 19431424)),
                ie: c.projection || new S
            };
            1 <= this.or.length && (this.or[0].Aw = o);
            x.extend(this.k, c)
        }
    x.extend(Uc.prototype, {
            getName: u("ef"),
            ct: function () {
                return this.k.H_
            },
            K2: function () {
                return this.k.BE
            },
            NX: function () {
                return this.or[0]
            },
            Y2: u("or"),
            OX: function () {
                return this.k.Qb
            },
            $o: function () {
                return this.k.gc
            },
            wm: function () {
                return this.k.$b
            },
            setMaxZoom: function (a) {
                this.k.$b = a
            },
            Cm: function () {
                return this.k.IF
            },
            ep: function () {
                return this.k.ie
            },
            B2: function () {
                return this.k.oD
            },
            OX: function () {
                return this.k.Qb
            },
            yc: function (a) {
                return Math.pow(2, 18 - a)
            },
            dE: function (a) {
                return this.yc(a) * this.k.Qb
            }
        });
    var Vc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Wc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/"],
        Xc = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Yc = new Gc;
    Yc.l_ = o;
    Yc.getTilesUrl = function (a, b, c) {
            var d = a.x,
                a = a.y,
                e = Qb("normal"),
                f = 1,
                c = Xc[c];
            this.map.Kx() && (f = 2);
            d = this.map.eb.Dw(d, b).fs;
            return (Wc[Math.abs(d + a) % Wc.length] + "?qt=vtile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + f + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
        };
    var La = new Uc("\u5730\u56fe", Yc, {
            tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
            maxZoom: 19
        }),
        Zc = new Gc;
    Zc.tO = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    Zc.getTilesUrl = function (a, b) {
            var c = a.x,
                d = a.y,
                e = 256 * Math.pow(2, 20 - b),
                d = Math.round((9998336 - e * d) / e) - 1;
            return url = this.tO[Math.abs(c + d) % this.tO.length] + this.map.Xb + "/" + this.map.Jw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
        };
    var Pa = new Uc("\u4e09\u7ef4", Zc, {
            tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
            minZoom: 15,
            maxZoom: 20,
            textColor: "white",
            projection: new fb
        });
    Pa.yc = function (a) {
            return Math.pow(2, 20 - a)
        };
    Pa.tk = function (a) {
            if (!a) return "";
            var b = F.hC,
                c;
            for (c in b) if (-1 < a.search(c)) return b[c].oy;
            return ""
        };
    Pa.pL = function (a) {
            return {
                bj: 2,
                gz: 1,
                sz: 14,
                sh: 4
            }[a]
        };
    var $c = new Gc({
            Aw: o
        });
    $c.getTilesUrl = function (a, b) {
            var c = a.x,
                d = a.y;
            return (Vc[Math.abs(c + d) % Vc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Qb("satellite")).replace(/-(\d+)/gi, "M$1")
        };
    var Ya = new Uc("\u536b\u661f", $c, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 4,
            maxZoom: 19,
            textColor: "white"
        }),
        ad = new Gc({
            transparentPng: o
        });
    ad.getTilesUrl = function (a, b) {
            var c = a.x,
                d = a.y,
                e = Qb("satelliteStreet");
            return (Wc[Math.abs(c + d) % Wc.length] + "?qt=vtile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
        };
    var Sa = new Uc("\u6df7\u5408", [$c, ad], {
            tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
            labelText: "\u8def\u7f51",
            minZoom: 4,
            maxZoom: 19,
            textColor: "white"
        });
    var bd = 1,
        V = {};
    window.t0 = V;

    function W(a, b) {
            x.lang.Ca.call(this);
            this.yd = {};
            this.hn(a);
            b = b || {};
            b.ka = b.renderOptions || {};
            this.k = {
                ka: {
                    Ia: b.ka.panel || p,
                    map: b.ka.map || p,
                    Wg: b.ka.autoViewport || o,
                    Qt: b.ka.selectFirstResult,
                    ht: b.ka.highlightMode,
                    Hb: b.ka.enableDragging || q
                },
                hy: b.onSearchComplete || s(),
                kN: b.onMarkersSet || s(),
                jN: b.onInfoHtmlSet || s(),
                mN: b.onResultsHtmlSet || s(),
                iN: b.onGetBusListComplete || s(),
                hN: b.onGetBusLineComplete || s(),
                fN: b.onBusListHtmlSet || s(),
                eN: b.onBusLineHtmlSet || s(),
                PE: b.onPolylinesSet || s(),
                Gp: b.reqFrom || ""
            };
            this.k.ka.Wg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
            this.k.ka.Ia = x.Dc(this.k.ka.Ia)
        }
    x.ua(W, x.lang.Ca);
    x.extend(W.prototype, {
            getResults: function () {
                return this.Fc ? this.Ii : this.ja
            },
            enableAutoViewport: function () {
                this.k.ka.Wg = o
            },
            disableAutoViewport: function () {
                this.k.ka.Wg = q
            },
            hn: function (a) {
                a && (this.yd.src = a)
            },
            yF: function (a) {
                this.k.hy = a || s()
            },
            setMarkersSetCallback: function (a) {
                this.k.kN = a || s()
            },
            setPolylinesSetCallback: function (a) {
                this.k.PE = a || s()
            },
            setInfoHtmlSetCallback: function (a) {
                this.k.jN = a || s()
            },
            setResultsHtmlSetCallback: function (a) {
                this.k.mN = a || s()
            },
            Am: u("Bd")
        });
    var cd = {
            xG: z.qc,
            cb: function (a, b, c, d, e) {
                this.pZ(b);
                var f = (1E5 * Math.random()).toFixed(0);
                z._rd["_cbk" + f] = function (b) {
                    b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {}, a && a(b, c), delete z._rd["_cbk" + f])
                };
                d = d || "";
                b = c && c.LO ? Cb(b, encodeURI) : Cb(b, encodeURIComponent);
                this.xG = c && c.Ls ? c.JN ? c.JN : z.xp : z.qc;
                d = this.xG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
                e || (d += "&res=api");
                d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + pa);
                oa(d)
            },
            pZ: function (a) {
                if (a.qt) {
                    var b = "";
                    switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag";
                        break;
                    case "s":
                        b = "z_qt|s";
                        break;
                    case "ext":
                        b = "z_qt|ext";
                        break;
                    case "gc":
                        b = "z_qt|gc";
                        break;
                    case "rgc":
                        b = "z_qt|rgc";
                        break;
                    case "bl":
                        b = "z_qt|bl";
                        break;
                    case "bsl":
                        b = "z_qt|bsl";
                        break;
                    case "con":
                        b = "z_qt|con";
                        break;
                    case "bd":
                        b = "z_qt|bd";
                        break;
                    case "nb":
                        b = "z_qt|nb";
                        break;
                    case "bda":
                        b = "z_qt|bda";
                        break;
                    case "sa":
                        b = "z_qt|sa";
                        break;
                    case "nba":
                        b = "z_qt|nba";
                        break;
                    case "dec":
                        b = "z_qt|dec"
                    }
                    "" !== b && z.alog("cus.fire", "count", b)
                }
            }
        };
    window.F0 = cd;
    z._rd = {};
    var O = {};
    window.E0 = O;
    O.FN = function (a) {
            a = a.replace(/<\/?[^>]*>/g, "");
            return a = a.replace(/[ | ]* /g, " ")
        };
    O.fZ = function (a) {
            return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
        };
    O.gZ = function (a, b) {
            return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
        };
    var dd = 2,
        ed = 3,
        id = 0,
        jd = "bt",
        kd = "nav",
        ld = "walk",
        md = "bl",
        nd = "bsl",
        od = 14,
        pd = 15,
        qd = 18,
        rd = 20,
        sd = 31;
    z.I = window.Instance = x.lang.Kc;

    function td(a, b, c) {
            x.lang.Ca.call(this);
            if (a) {
                this.Va = "object" == typeof a ? a : x.Dc(a);
                this.page = 1;
                this.Jd = 100;
                this.WJ = "pg";
                this.Uf = 4;
                this.dK = b;
                this.update = o;
                a = {
                    page: 1,
                    Ye: 100,
                    Jd: 100,
                    Uf: 4,
                    WJ: "pg",
                    update: o
                };
                c || (c = a);
                for (var d in c)"undefined" != typeof c[d] && (this[d] = c[d]);
                this.va()
            }
        }
    x.extend(td.prototype, {
            va: function () {
                this.ra()
            },
            ra: function () {
                this.zV();
                this.Va.innerHTML = this.VV()
            },
            zV: function () {
                isNaN(parseInt(this.page)) && (this.page = 1);
                isNaN(parseInt(this.Jd)) && (this.Jd = 1);
                1 > this.page && (this.page = 1);
                1 > this.Jd && (this.Jd = 1);
                this.page > this.Jd && (this.page = this.Jd);
                this.page = parseInt(this.page);
                this.Jd = parseInt(this.Jd)
            },
            P2: function () {
                location.search.match(RegExp("[?&]?" + this.WJ + "=([^&]*)[&$]?", "gi"));
                this.page = RegExp.$1
            },
            VV: function () {
                var a = [],
                    b = this.page - 1,
                    c = this.page + 1;
                a.push('<p style="margin:0;padding:0;white-space:nowrap">');
                if (!(1 > b)) {
                        if (this.page >= this.Uf) {
                            var d;
                            a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
                        }
                        a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
                    }
                if (this.page < this.Uf) d = 0 == this.page % this.Uf ? this.page - this.Uf - 1 : this.page - this.page % this.Uf + 1,
                b = d + this.Uf - 1;
                else {
                        d = Math.floor(this.Uf / 2);
                        var e = this.Uf % 2 - 1,
                            b = this.Jd > this.page + d ? this.page + d : this.Jd;
                        d = this.page - d - e
                    }
                this.page > this.Jd - this.Uf && this.page >= this.Uf && (d = this.Jd - this.Uf + 1, b = this.Jd);
                for (e = d; e <= b; e++) 0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Jd && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>", a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
                c > this.Jd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
                a.push("</p>");
                return a.join("")
            },
            toPage: function (a) {
                a = a ? a : 1;
                "function" == typeof this.dK && (this.dK(a), this.page = a);
                this.update && this.va()
            }
        });

    function ab(a, b) {
            W.call(this, a, b);
            b = b || {};
            b.renderOptions = b.renderOptions || {};
            this.Qp(b.pageCapacity);
            "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.MC() : this.jD();
            this.wa = [];
            this.vf = [];
            this.kb = -1;
            this.Pa = [];
            var c = this;
            I.load("local", function () {
                c.Ez()
            }, o)
        }
    x.ua(ab, W, "LocalSearch");
    ab.gq = 10;
    ab.B0 = 1;
    ab.Dn = 100;
    ab.nG = 2E3;
    ab.uG = 1E5;
    x.extend(ab.prototype, {
            search: function (a, b) {
                this.Pa.push({
                    method: "search",
                    arguments: [a, b]
                })
            },
            dn: function (a, b, c) {
                this.Pa.push({
                    method: "searchInBounds",
                    arguments: [a, b, c]
                })
            },
            Mp: function (a, b, c, d) {
                this.Pa.push({
                    method: "searchNearby",
                    arguments: [a, b, c, d]
                })
            },
            Pe: function () {
                delete this.Fa;
                delete this.Bd;
                delete this.ja;
                delete this.ga;
                this.kb = -1;
                this.sb();
                this.k.ka.Ia && (this.k.ka.Ia.innerHTML = "")
            },
            Fm: s(),
            jD: function () {
                this.k.ka.Qt = o
            },
            MC: function () {
                this.k.ka.Qt = q
            },
            Qp: function (a) {
                this.k.Gk = "number" == typeof a && !isNaN(a) ? 1 > a ? ab.gq : a > ab.Dn ? ab.gq : a : ab.gq
            },
            of: function () {
                return this.k.Gk
            },
            toString: da("LocalSearch")
        });
    var ud = ab.prototype;
    T(ud, {
            clearResults: ud.Pe,
            setPageCapacity: ud.Qp,
            getPageCapacity: ud.of,
            gotoPage: ud.Fm,
            searchNearby: ud.Mp,
            searchInBounds: ud.dn,
            search: ud.search,
            enableFirstResultSelection: ud.jD,
            disableFirstResultSelection: ud.MC
        });

    function vd(a, b) {
            W.call(this, a, b)
        }
    x.ua(vd, W, "BaseRoute");
    x.extend(vd.prototype, {
            Pe: s()
        });

    function wd(a, b) {
            W.call(this, a, b);
            b = b || {};
            this.Yt(b.policy);
            this.Qp(b.pageCapacity);
            this.ud = jd;
            this.Gu = od;
            this.Hu = bd;
            this.wa = [];
            this.kb = -1;
            this.k.ed = b.enableTraffic || q;
            this.Pa = [];
            var c = this;
            I.load("route", function () {
                c.Qd()
            })
        }
    wd.Dn = 100;
    wd.qP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ua(wd, vd, "TransitRoute");
    x.extend(wd.prototype, {
            Yt: function (a) {
                this.k.$c = 0 <= a && 4 >= a ? a : 0
            },
            EA: function (a, b) {
                this.Pa.push({
                    method: "_internalSearch",
                    arguments: [a, b]
                })
            },
            search: function (a, b) {
                this.Pa.push({
                    method: "search",
                    arguments: [a, b]
                })
            },
            Qp: function (a) {
                if ("string" === typeof a && (a = parseInt(a, 10), isNaN(a))) {
                    this.k.Gk = wd.Dn;
                    return
                }
                this.k.Gk = "number" !== typeof a ? wd.Dn : 1 <= a && a <= wd.Dn ? Math.round(a) : wd.Dn
            },
            toString: da("TransitRoute"),
            nU: function (a) {
                return a.replace(/\(.*\)/, "")
            }
        });
    var xd = wd.prototype;
    T(xd, {
            _internalSearch: xd.EA
        });

    function yd(a, b) {
            W.call(this, a, b);
            this.wa = [];
            this.kb = -1;
            this.Pa = [];
            var c = this,
                d = this.k.ka;
            1 !== d.ht && 2 !== d.ht && (d.ht = 1);
            this.Yz = this.k.ka.Hb ? o : q;
            I.load("route", function () {
                    c.Qd()
                });
            this.mE && this.mE()
        }
    yd.EP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.ua(yd, vd, "DWRoute");
    x.extend(yd.prototype, {
            search: function (a, b, c) {
                this.Pa.push({
                    method: "search",
                    arguments: [a, b, c]
                })
            }
        });

    function zd(a, b) {
            yd.call(this, a, b);
            b = b || {};
            this.k.ed = b.enableTraffic || q;
            this.Yt(b.policy);
            this.ud = kd;
            this.Gu = rd;
            this.Hu = ed
        }
    x.ua(zd, yd, "DrivingRoute");
    zd.prototype.Yt = function (a) {
            this.k.$c = 0 <= a && 2 >= a ? a : 0
        };

    function Ad(a, b) {
            yd.call(this, a, b);
            this.ud = ld;
            this.Gu = sd;
            this.Hu = dd;
            this.Yz = q
        }
    x.ua(Ad, yd, "WalkingRoute");

    function Bd(a, b) {
            x.lang.Ca.call(this);
            this.Sf = [];
            this.Wm = [];
            this.k = b;
            this.fc = a;
            this.map = this.k.ka.map || p;
            this.yy = this.k.yy;
            this.Cb = p;
            this.fj = 0;
            this.My = "";
            this.ce = 1;
            this.gx = "";
            this.Hp = [0, 0, 0, 0, 0, 0, 0];
            this.EE = [];
            this.ls = [1, 1, 1, 1, 1, 1, 1];
            this.BO = [1, 1, 1, 1, 1, 1, 1];
            this.Ot = [0, 0, 0, 0, 0, 0, 0];
            this.Ip = [0, 0, 0, 0, 0, 0, 0];
            this.Na = [{
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            },
            {
                o: "",
                Cd: 0,
                vn: 0,
                x: 0,
                y: 0,
                pa: -1
            }];
            this.fi = -1;
            this.nu = [];
            this.ou = [];
            I.load("route", s())
        }
    x.lang.ua(Bd, x.lang.Ca, "RouteAddr");
    var Cd = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Cd);
    var Dd = /android/i.test(Cd);

    function Ed(a) {
            this.qh = a || {}
        }
    x.extend(Ed.prototype, {
            PN: function (a, b, c) {
                var d = this;
                I.load("route", function () {
                    d.Qd(a, b, c)
                })
            }
        });

    function Fd(a) {
            this.k = {};
            x.extend(this.k, a);
            this.Pa = [];
            var b = this;
            I.load("othersearch", function () {
                b.Qd()
            })
        }
    x.ua(Fd, x.lang.Ca, "Geocoder");
    x.extend(Fd.prototype, {
            zm: function (a, b, c) {
                this.Pa.push({
                    method: "getPoint",
                    arguments: [a, b, c]
                })
            },
            vm: function (a, b, c) {
                this.Pa.push({
                    method: "getLocation",
                    arguments: [a, b, c]
                })
            },
            toString: da("Geocoder")
        });
    var Gd = Fd.prototype;
    T(Gd, {
            getPoint: Gd.zm,
            getLocation: Gd.vm
        });

    function Geolocation(a) {
            a = a || {};
            this.C = {
                timeout: a.timeout || 1E4,
                maximumAge: a.maximumAge || 6E5,
                cl: q
            };
            this.oe = [];
            var b = this;
            I.load("othersearch", function () {
                for (var a = 0, d; d = b.oe[a]; a++) b[d.method].apply(b, d.arguments)
            })
        }
    x.extend(Geolocation.prototype, {
            getCurrentPosition: function (a, b) {
                this.oe.push({
                    method: "getCurrentPosition",
                    arguments: arguments
                })
            },
            getStatus: da(2),
            enableSDKLocation: function () {
                G() && (this.C.cl = o)
            },
            disableSDKLocation: function () {
                this.C.cl = q
            }
        });

    function Hd(a) {
            a = a || {};
            a.ka = a.renderOptions || {};
            this.k = {
                ka: {
                    map: a.ka.map || p
                }
            };
            this.Pa = [];
            var b = this;
            I.load("othersearch", function () {
                b.Qd()
            })
        }
    x.ua(Hd, x.lang.Ca, "LocalCity");
    x.extend(Hd.prototype, {
            get: function (a) {
                this.Pa.push({
                    method: "get",
                    arguments: [a]
                })
            },
            toString: da("LocalCity")
        });

    function Id() {
            this.Pa = [];
            var a = this;
            I.load("othersearch", function () {
                a.Qd()
            })
        }
    x.ua(Id, x.lang.Ca, "Boundary");
    x.extend(Id.prototype, {
            get: function (a, b) {
                this.Pa.push({
                    method: "get",
                    arguments: [a, b]
                })
            },
            toString: da("Boundary")
        });

    function Jd(a, b) {
            W.call(this, a, b);
            this.BP = md;
            this.DP = pd;
            this.AP = nd;
            this.CP = qd;
            this.Pa = [];
            var c = this;
            I.load("buslinesearch", function () {
                c.Qd()
            })
        }
    Jd.rv = F.qa + "iw_plus.gif";
    Jd.GS = F.qa + "iw_minus.gif";
    Jd.xU = F.qa + "stop_icon.png";
    x.ua(Jd, W);
    x.extend(Jd.prototype, {
            getBusList: function (a) {
                this.Pa.push({
                    method: "getBusList",
                    arguments: [a]
                })
            },
            getBusLine: function (a) {
                this.Pa.push({
                    method: "getBusLine",
                    arguments: [a]
                })
            },
            setGetBusListCompleteCallback: function (a) {
                this.k.iN = a || s()
            },
            setGetBusLineCompleteCallback: function (a) {
                this.k.hN = a || s()
            },
            setBusListHtmlSetCallback: function (a) {
                this.k.fN = a || s()
            },
            setBusLineHtmlSetCallback: function (a) {
                this.k.eN = a || s()
            },
            setPolylinesSetCallback: function (a) {
                this.k.PE = a || s()
            }
        });

    function Kd(a) {
            W.call(this, a);
            a = a || {};
            this.pc = {
                input: a.input || p,
                YB: a.baseDom || p,
                types: a.types || [],
                hy: a.onSearchComplete || s()
            };
            this.yd.src = a.location || "\u5168\u56fd";
            this.$i = "";
            this.lg = p;
            this.$H = "";
            this.Pi();
            Qa(Ga);
            var b = this;
            I.load("autocomplete", function () {
                b.Qd()
            })
        }
    x.ua(Kd, W, "Autocomplete");
    x.extend(Kd.prototype, {
            Pi: s(),
            show: s(),
            U: s(),
            zF: function (a) {
                this.pc.types = a
            },
            hn: function (a) {
                this.yd.src = a
            },
            search: ca("$i"),
            By: ca("$H")
        });
    var Ta;

    function Na(a, b) {
            function c() {
                e.k.visible ? ("inter" === e.Je && e.k.haveBreakId && e.k.indoorExitControl === o ? x.K.show(e.xA) : x.K.U(e.xA), this.k.closeControl && this.yf && this.D && this.D.La() === this.B ? x.K.show(e.yf) : x.K.U(e.yf), this.k.forceCloseControl && x.K.show(e.yf)) : (x.K.U(e.yf), x.K.U(e.xA))
            }
            this.B = "string" == typeof a ? x.$(a) : a;
            this.ba = Ld++;
            this.k = {
                enableScrollWheelZoom: o,
                panoramaRenderer: "flash",
                swfSrc: z.rg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
                visible: o,
                indoorExitControl: o,
                indoorFloorControl: q,
                linksControl: o,
                clickOnRoad: o,
                navigationControl: o,
                closeControl: o,
                indoorSceneSwitchControl: o,
                albumsControl: q,
                albumsControlOptions: {},
                copyrightControlOptions: {},
                forceCloseControl: q,
                haveBreakId: q
            };
            var b = b || {},
                d;
            for (d in b) this.k[d] = b[d];
            b.closeControl === o && (this.k.forceCloseControl = o);
            b.useWebGL === q && Ma(q);
            this.Da = {
                    heading: 0,
                    pitch: 0
                };
            this.ao = [];
            this.Mb = this.Ya = p;
            this.ck = this.er();
            this.wa = [];
            this.Jc = 1;
            this.Je = this.dT = this.hl = "";
            this.Ie = {};
            this.Lf = p;
            this.Og = [];
            this.zr = [];
            "cvsRender" == this.ck || Ma() ? (this.Vj = 90, this.Xj = -90) : "cssRender" == this.ck && (this.Vj = 45, this.Xj = -45);
            this.Dr = q;
            var e = this;
            this.bo = function () {
                    this.ck === "flashRender" ? I.load("panoramaflash", function () {
                        e.Pi()
                    }, o) : I.load("panorama", function () {
                        e.yb()
                    }, o);
                    b.Of == "api" ? Qa(Ca) : Qa(Da);
                    this.bo = s()
                };
            this.k.RS !== o && (this.bo(), z.En("cus.fire", "count", "z_loadpanoramacount"));
            this.HT(this.B);
            this.addEventListener("id_changed", function () {
                    Qa(Ba, {
                        from: b.Of
                    })
                });
            this.VP();
            this.addEventListener("indoorexit_options_changed", c);
            this.addEventListener("scene_type_changed", c);
            this.addEventListener("onclose_options_changed", c);
            this.addEventListener("onvisible_changed", c)
        }
    var Md = 4,
        Nd = 1,
        Ld = 0;
    x.lang.ua(Na, x.lang.Ca, "Panorama");
    x.extend(Na.prototype, {
            VP: function () {
                var a = this,
                    b = this.yf = K("div");
                b.className = "pano_close";
                b.style.cssText = "z-index: 1201;display: none";
                b.title = "\u9000\u51fa\u5168\u666f";
                b.onclick = function () {
                        a.U()
                    };
                this.B.appendChild(b);
                var c = this.xA = K("a");
                c.className = "pano_pc_indoor_exit";
                c.style.cssText = "z-index: 1201;display: none";
                c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
                c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
                c.onclick = function () {
                        a.To()
                    };
                this.B.appendChild(c);
                window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)", c.style.backgroundColor = "rgb(37,37,37)")
            },
            To: s(),
            HT: function (a) {
                var b, c;
                b = a.style;
                c = Va(a).position;
                "absolute" != c && "relative" != c && (b.position = "relative", b.zIndex = 0);
                if ("absolute" === c || "relative" === c) if (a = Va(a).zIndex, !a || "auto" === a) b.zIndex = 0
            },
            nX: u("ao"),
            Zb: u("Ya"),
            PX: u("$v"),
            dO: u("$v"),
            ha: u("Mb"),
            Ea: u("Da"),
            fa: u("Jc"),
            eh: u("hl"),
            R2: function () {
                return this.i1 || []
            },
            M2: u("dT"),
            bt: u("Je"),
            Dy: function (a) {
                a !== this.Je && (this.Je = a, this.dispatchEvent(new M("onscene_type_changed")))
            },
            tc: function (a, b, c) {
                "object" === typeof b && (c = b, b = j);
                a != this.Ya && (this.sl = this.Ya, this.tl = this.Mb, this.Ya = a, this.Je = b || "street", this.Mb = p, c && c.pov && this.Mc(c.pov))
            },
            ta: function (a) {
                a.nb(this.Mb) || (this.sl = this.Ya, this.tl = this.Mb, this.Mb = a, this.Ya = p)
            },
            Mc: function (a) {
                a && (this.Da = a, a = this.Da.pitch, a > this.Vj ? a = this.Vj : a < this.Xj && (a = this.Xj), this.Dr = o, this.Da.pitch = a)
            },
            g_: function (a, b) {
                this.Xj = 0 <= a ? 0 : a;
                this.Vj = 0 >= b ? 0 : b
            },
            Nc: function (a) {
                a != this.Jc && (a > Md && (a = Md), a < Nd && (a = Nd), a != this.Jc && (this.Jc = a), "cssRender" === this.ck && this.Mc(this.Da))
            },
            xB: function () {
                if (this.D) for (var a = this.D.yx(), b = 0; b < a.length; b++)(a[b] instanceof U || a[b] instanceof tc) && a[b].point && this.wa.push(a[b])
            },
            vF: ca("D"),
            Xt: function (a) {
                this.Lf = a || "none"
            },
            Mk: function (a) {
                for (var b in a) {
                    if ("object" == typeof a[b]) for (var c in a[b]) this.k[b][c] = a[b][c];
                    else this.k[b] = a[b];
                    a.closeControl === o && (this.k.forceCloseControl = o);
                    a.closeControl === q && (this.k.forceCloseControl = q);
                    switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new M("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new M("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new M("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new M("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new M("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new M("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new M("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new M("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new M("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new M("onindoorfloor_options_changed"))
                    }
                }
            },
            Ak: function () {
                this.Bl.style.visibility = "hidden"
            },
            Hy: function () {
                this.Bl.style.visibility = "visible"
            },
            BW: function () {
                this.k.enableScrollWheelZoom = o
            },
            mW: function () {
                this.k.enableScrollWheelZoom = q
            },
            show: function () {
                this.k.visible = o
            },
            U: function () {
                this.k.visible = q
            },
            er: function () {
                return Ua() && !G() && "javascript" !== this.k.panoramaRenderer ? "flashRender" : !G() && Kb() ? "cvsRender" : "cssRender"
            },
            Ka: function (a) {
                this.Ie[a.hd] = a
            },
            Ub: function (a) {
                delete this.Ie[a]
            },
            bE: function () {
                return this.k.visible
            },
            dh: function () {
                return new L(this.B.clientWidth, this.B.clientHeight)
            },
            La: u("B"),
            lL: function () {
                var a = z.rg("baidumap", "?"),
                    b = this.Zb();
                if (b) {
                        var b = {
                            panotype: this.bt(),
                            heading: this.Ea().heading,
                            pitch: this.Ea().pitch,
                            pid: b,
                            panoid: b,
                            from: "api"
                        },
                            c;
                        for (c in b) a += c + "=" + b[c] + "&"
                    }
                return a.slice(0, -1)
            },
            Hx: function () {
                this.Mk({
                    copyrightControlOptions: {
                        logoVisible: q
                    }
                })
            },
            CF: function () {
                this.Mk({
                    copyrightControlOptions: {
                        logoVisible: o
                    }
                })
            },
            SB: function (a) {
                function b(a, b) {
                    return function () {
                        a.zr.push({
                            SM: b,
                            RM: arguments
                        })
                    }
                }
                for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++) d = c[e],
                this[d] = b(this, d);
                this.Og.push(a)
            },
            eF: function (a) {
                for (var b = this.Og.length; b--;) this.Og[b] === a && this.Og.splice(b, 1)
            },
            uF: s()
        });
    var Od = Na.prototype;
    T(Od, {
            setId: Od.tc,
            setPosition: Od.ta,
            setPov: Od.Mc,
            setZoom: Od.Nc,
            setOptions: Od.Mk,
            getId: Od.Zb,
            getPosition: Od.ha,
            getPov: Od.Ea,
            getZoom: Od.fa,
            getLinks: Od.nX,
            getBaiduMapUrl: Od.lL,
            hideMapLogo: Od.Hx,
            showMapLogo: Od.CF,
            enableDoubleClickZoom: Od.g2,
            disableDoubleClickZoom: Od.U1,
            enableScrollWheelZoom: Od.BW,
            disableScrollWheelZoom: Od.mW,
            show: Od.show,
            hide: Od.U,
            addPlugin: Od.SB,
            removePlugin: Od.eF,
            getVisible: Od.bE,
            addOverlay: Od.Ka,
            removeOverlay: Od.Ub,
            getSceneType: Od.bt,
            setPanoramaPOIType: Od.Xt,
            exitInter: Od.To,
            setInteractiveState: Od.uF
        });
    T(window, {
            BMAP_PANORAMA_POI_HOTEL: "hotel",
            BMAP_PANORAMA_POI_CATERING: "catering",
            BMAP_PANORAMA_POI_MOVIE: "movie",
            BMAP_PANORAMA_POI_TRANSIT: "transit",
            BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
            BMAP_PANORAMA_POI_NONE: "none",
            BMAP_PANORAMA_INDOOR_SCENE: "inter",
            BMAP_PANORAMA_STREET_SCENE: "street"
        });

    function Pd() {
            x.lang.Ca.call(this);
            this.hd = "PanoramaOverlay_" + this.ba;
            this.P = p;
            this.Qa = o
        }
    x.lang.ua(Pd, x.lang.Ca, "PanoramaOverlayBase");
    x.extend(Pd.prototype, {
            N2: u("hd"),
            ra: function () {
                ba("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            remove: function () {
                ba("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            Kf: function () {
                ba("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
            }
        });

    function Qd(a, b) {
            Pd.call(this);
            var c = {
                position: p,
                altitude: 2,
                displayDistance: o
            },
                b = b || {},
                d;
            for (d in b) c[d] = b[d];
            this.Mb = c.position;
            this.Lj = a;
            this.xq = c.altitude;
            this.gR = c.displayDistance;
            this.IF = c.color;
            this.VL = c.hoverColor;
            this.backgroundColor = c.backgroundColor;
            this.YJ = c.backgroundHoverColor;
            this.borderColor = c.borderColor;
            this.bK = c.borderHoverColor;
            this.fontSize = c.fontSize;
            this.padding = c.padding;
            this.hE = c.imageUrl;
            this.size = c.size;
            this.we = c.image;
            this.width = c.width;
            this.height = c.height;
            this.dY = c.imageData;
            this.borderWidth = c.borderWidth
        }
    x.lang.ua(Qd, Pd, "PanoramaLabel");
    x.extend(Qd.prototype, {
            s2: u("borderWidth"),
            getImageData: u("dY"),
            Cm: u("IF"),
            G2: u("VL"),
            o2: u("backgroundColor"),
            p2: u("YJ"),
            q2: u("borderColor"),
            r2: u("bK"),
            D2: u("fontSize"),
            O2: u("padding"),
            H2: u("hE"),
            Bb: u("size"),
            ox: u("we"),
            ta: function (a) {
                this.Mb = a;
                this.Kf("position", a)
            },
            ha: u("Mb"),
            ad: function (a) {
                this.Lj = a;
                this.Kf("content", a)
            },
            uk: u("Lj"),
            pF: function (a) {
                this.xq = a;
                this.Kf("altitude", a)
            },
            Wo: u("xq"),
            Ea: function () {
                var a = this.ha(),
                    b = p,
                    c = p;
                this.P && (c = this.P.ha());
                if (a && c) if (a.nb(c)) b = this.P.Ea();
                else {
                        b = {};
                        b.heading = Rd(a.lng - c.lng, a.lat - c.lat) || 0;
                        var a = b,
                            c = this.Wo(),
                            d = this.Wn();
                        a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                    }
                return b
            },
            Wn: function () {
                var a = 0,
                    b, c;
                this.P && (b = this.P.ha(), (c = this.ha()) && !c.nb(b) && (a = S.Yo(b, c)));
                return a
            },
            U: function () {
                ba("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            show: function () {
                ba("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
            },
            Kf: s()
        });
    var Sd = Qd.prototype;
    T(Sd, {
            setPosition: Sd.ta,
            getPosition: Sd.ha,
            setContent: Sd.ad,
            getContent: Sd.uk,
            setAltitude: Sd.pF,
            getAltitude: Sd.Wo,
            getPov: Sd.Ea,
            show: Sd.show,
            hide: Sd.U
        });

    function Td(a, b) {
            Pd.call(this);
            var c = {
                icon: "",
                title: "",
                panoInfo: p,
                altitude: 2
            },
                b = b || {},
                d;
            for (d in b) c[d] = b[d];
            this.Mb = a;
            this.VH = c.icon;
            this.rJ = c.title;
            this.xq = c.altitude;
            this.uT = c.panoInfo;
            this.Da = {
                    heading: 0,
                    pitch: 0
                }
        }
    x.lang.ua(Td, Pd, "PanoramaMarker");
    x.extend(Td.prototype, {
            ta: function (a) {
                this.Mb = a;
                this.Kf("position", a)
            },
            ha: u("Mb"),
            Cc: function (a) {
                this.rJ = a;
                this.Kf("title", a)
            },
            gp: u("rJ"),
            Vb: function (a) {
                this.VH = icon;
                this.Kf("icon", a)
            },
            Zo: u("VH"),
            pF: function (a) {
                this.xq = a;
                this.Kf("altitude", a)
            },
            Wo: u("xq"),
            TD: u("uT"),
            Ea: function () {
                var a = p;
                if (this.P) {
                    var a = this.P.ha(),
                        b = this.ha(),
                        a = Rd(b.lng - a.lng, b.lat - a.lat);
                    isNaN(a) && (a = 0);
                    a = {
                            heading: a,
                            pitch: 0
                        }
                } else a = this.Da;
                return a
            },
            Kf: s()
        });
    var Ud = Td.prototype;
    T(Ud, {
            setPosition: Ud.ta,
            getPosition: Ud.ha,
            setTitle: Ud.Cc,
            getTitle: Ud.gp,
            setAltitude: Ud.pF,
            getAltitude: Ud.Wo,
            getPanoInfo: Ud.TD,
            getIcon: Ud.Zo,
            setIcon: Ud.Vb,
            getPov: Ud.Ea
        });

    function Rd(a, b) {
            var c = 0;
            if (0 !== a && 0 !== b) {
                var c = 180 * (Math.atan(a / b) / Math.PI),
                    d = 0;
                0 < a && 0 > b && (d = 90);
                0 > a && 0 > b && (d = 180);
                0 > a && 0 < b && (d = 270);
                c = (c + 90) % 90 + d
            } else 0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
            return Math.round(c)
        }
    function Ma(a) {
            if ("boolean" === typeof Vd) return Vd;
            if (a === q || !window.WebGLRenderingContext) return Vd = q;
            if (x.platform.Km) {
                a = 0;
                try {
                    a = navigator.userAgent.split("Android ")[1].charAt(0)
                } catch (b) {}
                if (5 > a) return Vd = q
            }
            var a = document.createElement("canvas"),
                c = p;
            try {
                    c = a.getContext("webgl")
                } catch (d) {
                    Vd = q
                }
            return Vd = c === p ? q : o
        }
    var Vd;

    function Wd() {
            if ("boolean" === typeof Xd) return Xd;
            Xd = o;
            if (x.platform.qE) return o;
            var a = navigator.userAgent;
            return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : Xd = q
        }
    var Xd;

    function bc(a, b) {
            this.P = a || p;
            var c = this;
            c.P && c.ca();
            I.load("pservice", function () {
                c.zQ()
            });
            "api" == (b || {}).Of ? Qa(Ea) : Qa(Fa);
            this.vd = {
                getPanoramaById: [],
                getPanoramaByLocation: [],
                getVisiblePOIs: [],
                getRecommendPanosById: [],
                getPanoramaVersions: [],
                checkPanoSupportByCityCode: [],
                getPanoramaByPOIId: [],
                getCopyrightProviders: []
            }
        }
    z.Vm(function (a) {
            "flashRender" !== a.er() && new bc(a, {
                Of: "api"
            })
        });
    x.extend(bc.prototype, {
            ca: function () {
                function a(a) {
                    if (a) {
                        if (a.id != b.$v) {
                            b.dO(a.id);
                            b.ea = a;
                            Wd() || b.dispatchEvent(new M("onthumbnail_complete"));
                            b.Ya != p && (b.tl = b._position);
                            for (var c in a) if (a.hasOwnProperty(c)) switch (b["_" + c] = a[c], c) {
                            case "position":
                                b.Mb = a[c];
                                break;
                            case "id":
                                b.Ya = a[c];
                                break;
                            case "links":
                                b.ao = a[c];
                                break;
                            case "zoom":
                                b.Jc = a[c]
                            }
                            if (b.tl) {
                                var f = b.tl,
                                    g = b._position;
                                c = f.lat;
                                var i = g.lat,
                                    k = Nb(i - c),
                                    f = Nb(g.lng - f.lng);
                                c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Nb(c)) * Math.cos(Nb(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                                b.jH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                            }
                            c = new M("ondataload");
                            c.data = a;
                            b.dispatchEvent(c);
                            b.dispatchEvent(new M("onposition_changed"));
                            b.dispatchEvent(new M("onlinks_changed"));
                            b.dispatchEvent(new M("oncopyright_changed"), {
                                copyright: a.copyright
                            });
                            a.dm && b.k.closeControl ? x.K.show(b.CR) : x.K.U(b.CR)
                        }
                    } else b.Ya = b.sl,
                    b.Mb = b.tl,
                    b.dispatchEvent(new M("onnoresult"))
                }
                var b = this.P,
                    c = this;
                b.addEventListener("id_changed", function () {
                        c.cp(b.Zb(), a)
                    });
                b.addEventListener("iid_changed", function () {
                        c.Pg(bc.dl + "qt=idata&iid=" + b.tA + "&fn=", function (b) {
                            if (b && b.result && 0 == b.result.error) {
                                var b = b.content[0].interinfo,
                                    e = {};
                                e.dm = b.BreakID;
                                for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++) if (b.Floors[i].Floor == f) {
                                        g = b.Floors[i];
                                        break
                                    }
                                e.id = g.StartID || g.Points[0].PID;
                                c.cp(e.id, a, e)
                            }
                        })
                    });
                b.addEventListener("position_changed_inner", function () {
                        c.pj(b.ha(), a)
                    })
            },
            cp: function (a, b) {
                this.vd.getPanoramaById.push(arguments)
            },
            pj: function (a, b, c) {
                this.vd.getPanoramaByLocation.push(arguments)
            },
            cE: function (a, b, c, d) {
                this.vd.getVisiblePOIs.push(arguments)
            },
            Bx: function (a, b) {
                this.vd.getRecommendPanosById.push(arguments)
            },
            Ax: function (a) {
                this.vd.getPanoramaVersions.push(arguments)
            },
            fC: function (a, b) {
                this.vd.checkPanoSupportByCityCode.push(arguments)
            },
            zx: function (a, b) {
                this.vd.getPanoramaByPOIId.push(arguments)
            },
            qL: function (a) {
                this.vd.getCopyrightProviders.push(arguments)
            }
        });
    var Yd = bc.prototype;
    T(Yd, {
            getPanoramaById: Yd.cp,
            getPanoramaByLocation: Yd.pj,
            getPanoramaByPOIId: Yd.zx
        });

    function ac(a) {
            Gc.call(this);
            "api" == (a || {}).Of ? Qa(ya) : Qa(za)
        }
    ac.BG = z.rg("pano", "tile/");
    ac.prototype = new Gc;
    ac.prototype.getTilesUrl = function (a, b) {
            var c = ac.BG[(a.x + a.y) % ac.BG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
            x.da.la && 6 >= x.da.la && (c += "&color_dep=32");
            return c
        };
    ac.prototype.xt = da(o);
    Zd.Ud = new S;

    function Zd() {}
    x.extend(Zd, {
            nW: function (a, b, c) {
                c = x.lang.Kc(c);
                b = {
                    data: b
                };
                "position_changed" == a && (b.data = Zd.Ud.zj(new R(b.data.mercatorX, b.data.mercatorY)));
                c.dispatchEvent(new M("on" + a), b)
            }
        });
    var $d = Zd;
    T($d, {
            dispatchFlashEvent: $d.nW
        });
    var ae = {
            sP: 50
        };
    ae.Iu = z.rg("pano")[0];
    ae.Eu = {
            width: 220,
            height: 60
        };
    x.extend(ae, {
            op: function (a, b, c, d) {
                if (!b || !c || !c.lngLat || !c.panoInstance) d();
                else {
                    this.io === j && (this.io = new bc(p, {
                        Of: "api"
                    }));
                    var e = this;
                    this.io.fC(b, function (b) {
                        b ? e.io.pj(c.lngLat, ae.sP, function (b) {
                            if (b && b.id) {
                                var f = b.id,
                                    k = b.rh,
                                    b = b.th,
                                    l = bc.Ud.kh(c.lngLat),
                                    m = e.hS(l, {
                                        x: k,
                                        y: b
                                    }),
                                    k = e.AL(f, m, 0, ae.Eu.width, ae.Eu.height);
                                a.content = e.iS(a.content, k, c.titleTip, c.beforeDomId);
                                a.addEventListener("open", function () {
                                        ia.M(x.Dc("infoWndPano"), "click", function () {
                                            c.panoInstance.tc(f);
                                            c.panoInstance.show();
                                            c.panoInstance.Mc({
                                                heading: m,
                                                pitch: 0
                                            })
                                        })
                                    })
                            }
                            d()
                        }) : d()
                    })
                }
            },
            iS: function (a, b, c, d) {
                var c = c || "",
                    e;
                !d || !a.split(d)[0] ? (d = a, a = "") : (d = a.split(d)[0], e = d.lastIndexOf("<"), d = a.substring(0, e), a = a.substring(e));
                e = [];
                var f = ae.Eu.width,
                    g = ae.Eu.height;
                e.push(d);
                e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
                e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
                e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
                e.push("</div>");
                e.push(a);
                return e.join("")
            },
            hS: function (a, b) {
                var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
                0 > c && (c += 360);
                return c
            },
            AL: function (a, b, c, d, e) {
                var f = {
                    panoId: a,
                    panoHeading: b || 0,
                    panoPitch: c || 0,
                    width: d,
                    height: e
                };
                return (ae.Iu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function (a, b) {
                    return f[b]
                })
            }
        });
    var be = document,
        ce = Math,
        de = be.createElement("div").style,
        ee;
    a: {
            for (var fe = ["t", "webkitT", "MozT", "msT", "OT"], ge, he = 0, ie = fe.length; he < ie; he++) if (ge = fe[he] + "ransform", ge in de) {
                ee = fe[he].substr(0, fe[he].length - 1);
                break a
            }
            ee = q
        }
    var je = ee ? "-" + ee.toLowerCase() + "-" : "",
        le = ke("transform"),
        ne = ke("transitionProperty"),
        oe = ke("transitionDuration"),
        pe = ke("transformOrigin"),
        ve = ke("transitionTimingFunction"),
        we = ke("transitionDelay"),
        Dd = /android/gi.test(navigator.appVersion),
        xe = /iphone|ipad/gi.test(navigator.appVersion),
        ye = /hp-tablet/gi.test(navigator.appVersion),
        ze = ke("perspective") in de,
        Ae = "ontouchstart" in window && !ye,
        Be = ee !== q,
        Ce = ke("transition") in de,
        De = "onorientationchange" in window ? "orientationchange" : "resize",
        Ee = Ae ? "touchstart" : "mousedown",
        Fe = Ae ? "touchmove" : "mousemove",
        Ge = Ae ? "touchend" : "mouseup",
        He = Ae ? "touchcancel" : "mouseup",
        Ie = ee === q ? q : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        }[ee],
        Je = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function (a) {
            return setTimeout(a, 1)
        },
        Ke = window.cancelRequestAnimationFrame || window.Q4 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        Le = ze ? " translateZ(0)" : "";

    function Me(a, b) {
            var c = this,
                d;
            c.yn = "object" == typeof a ? a : be.getElementById(a);
            c.yn.style.overflow = "hidden";
            c.Pb = c.yn.children[0];
            c.options = {
                    kp: o,
                    wn: o,
                    x: 0,
                    y: 0,
                    Eo: o,
                    nV: q,
                    $x: o,
                    FE: o,
                    Vk: o,
                    Ai: q,
                    K_: 0,
                    Hw: q,
                    Ex: o,
                    mi: o,
                    Bi: o,
                    tD: Dd,
                    Ix: xe,
                    IW: xe && ze,
                    mF: "",
                    zoom: q,
                    Xk: 1,
                    bq: 4,
                    pW: 2,
                    YO: "scroll",
                    fu: q,
                    Ky: 1,
                    lN: p,
                    dN: function (a) {
                        a.preventDefault()
                    },
                    oN: p,
                    cN: p,
                    nN: p,
                    bN: p,
                    gy: p,
                    pN: p,
                    gN: p,
                    Bp: p,
                    qN: p,
                    Ap: p
                };
            for (d in b) c.options[d] = b[d];
            c.x = c.options.x;
            c.y = c.options.y;
            c.options.Vk = Be && c.options.Vk;
            c.options.mi = c.options.kp && c.options.mi;
            c.options.Bi = c.options.wn && c.options.Bi;
            c.options.zoom = c.options.Vk && c.options.zoom;
            c.options.Ai = Ce && c.options.Ai;
            c.options.zoom && Dd && (Le = "");
            c.Pb.style[ne] = c.options.Vk ? je + "transform" : "top left";
            c.Pb.style[oe] = "0";
            c.Pb.style[pe] = "0 0";
            c.options.Ai && (c.Pb.style[ve] = "cubic-bezier(0.33,0.66,0.66,1)");
            c.options.Vk ? c.Pb.style[le] = "translate(" + c.x + "px," + c.y + "px)" + Le : c.Pb.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
            c.options.Ai && (c.options.tD = o);
            c.refresh();
            c.ca(De, window);
            c.ca(Ee);
            !Ae && "none" != c.options.YO && (c.ca("DOMMouseScroll"), c.ca("mousewheel"));
            c.options.Hw && (c.yV = setInterval(function () {
                    c.wQ()
                }, 500));
            this.options.Ex && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function (a, b, c) {
                    var d = Node.prototype.removeEventListener;
                    a === "click" ? d.call(document.body, a, b.TL || b, c) : d.call(document.body, a, b, c)
                }, document.body.addEventListener = function (a, b, c) {
                    var d = Node.prototype.addEventListener;
                    a === "click" ? d.call(document.body, a, b.TL || (b.TL = function (a) {
                        a.oZ || b(a)
                    }), c) : d.call(document.body, a, b, c)
                }), c.ca("click", document.body, o))
        }
    Me.prototype = {
            enabled: o,
            x: 0,
            y: 0,
            Aj: [],
            scale: 1,
            zC: 0,
            AC: 0,
            Ue: [],
            sf: [],
            XB: p,
            Uy: 0,
            handleEvent: function (a) {
                switch (a.type) {
                case Ee:
                    if (!Ae && 0 !== a.button) break;
                    this.Tv(a);
                    break;
                case Fe:
                    this.fT(a);
                    break;
                case Ge:
                case He:
                    this.fv(a);
                    break;
                case De:
                    this.qB();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.JU(a);
                    break;
                case Ie:
                    this.FU(a);
                    break;
                case "click":
                    this.HQ(a)
                }
            },
            wQ: function () {
                !this.oh && (!this.Yk && !(this.Zl || this.Ay == this.Pb.offsetWidth * this.scale && this.Lp == this.Pb.offsetHeight * this.scale)) && this.refresh()
            },
            Kv: function (a) {
                var b;
                this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = be.createElement("div"), this.options.mF ? b.className = this.options.mF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Bi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.mi ? "7" : "2") + "px;top:2px;right:1px"), b.style.cssText += ";pointer-events:none;" + je + "transition-property:opacity;" + je + "transition-duration:" + (this.options.IW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Ix ? "0" : "1"), this.yn.appendChild(b), this[a + "ScrollbarWrapper"] = b, b = be.createElement("div"), this.options.mF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + je + "background-clip:padding-box;" + je + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + je + "border-radius:3px;border-radius:3px"), b.style.cssText += ";pointer-events:none;" + je + "transition-property:" + je + "transform;" + je + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + je + "transition-duration:0;" + je + "transform: translate(0,0)" + Le, this.options.Ai && (b.style.cssText += ";" + je + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"), this[a + "ScrollbarWrapper"].appendChild(b), this[a + "ScrollbarIndicator"] = b), "h" == a ? (this.QL = this.RL.clientWidth, this.XX = ce.max(ce.round(this.QL * this.QL / this.Ay), 8), this.WX.style.width = this.XX + "px") : (this.PO = this.QO.clientHeight, this.e0 = ce.max(ce.round(this.PO * this.PO / this.Lp), 8), this.d0.style.height = this.e0 + "px"), this.rB(a, o)) : this[a + "ScrollbarWrapper"] && (Be && (this[a + "ScrollbarIndicator"].style[le] = ""), this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]), this[a + "ScrollbarWrapper"] = p, this[a + "ScrollbarIndicator"] = p)
            },
            qB: function () {
                var a = this;
                setTimeout(function () {
                    a.refresh()
                }, Dd ? 200 : 0)
            },
            Cr: function (a, b) {
                this.Yk || (a = this.kp ? a : 0, b = this.wn ? b : 0, this.options.Vk ? this.Pb.style[le] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Le : (a = ce.round(a), b = ce.round(b), this.Pb.style.left = a + "px", this.Pb.style.top = b + "px"), this.x = a, this.y = b, this.rB("h"), this.rB("v"))
            },
            rB: function (a, b) {
                var c = "h" == a ? this.x : this.y;
                this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"], 0 > c ? (this.options.tD || (c = this[a + "ScrollbarIndicatorSize"] + ce.round(3 * c), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"), c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.tD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - ce.round(3 * (c - this[a + "ScrollbarMaxScroll"])), 8 > c && (c = 8), this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px", c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))), this[a + "ScrollbarWrapper"].style[we] = "0", this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Ix ? "0" : "1", this[a + "ScrollbarIndicator"].style[le] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Le)
            },
            HQ: function (a) {
                if (a.DR === o) return this.PB = a.target,
                this.hx = Date.now(),
                o;
                if (this.PB && this.hx) {
                    if (600 < Date.now() - this.hx) return this.hx = this.PB = p,
                    o
                } else {
                    for (var b = a.target; b != this.Pb && b != document.body;) b = b.parentNode;
                    if (b == document.body) return o
                }
                for (b = a.target; 1 != b.nodeType;) b = b.parentNode;
                b = b.tagName.toLowerCase();
                if ("select" != b && "input" != b && "textarea" != b) return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.oZ = o,
                a.stopPropagation(),
                a.preventDefault(),
                this.hx = this.PB = p,
                q
            },
            Tv: function (a) {
                var b = Ae ? a.touches[0] : a,
                    c, d;
                if (this.enabled) {
                        this.options.dN && this.options.dN.call(this, a);
                        (this.options.Ai || this.options.zoom) && this.sJ(0);
                        this.Yk = this.Zl = this.oh = q;
                        this.JC = this.IC = this.mw = this.lw = this.PC = this.OC = 0;
                        this.options.zoom && (Ae && 1 < a.touches.length) && (d = ce.abs(a.touches[0].pageX - a.touches[1].pageX), c = ce.abs(a.touches[0].pageY - a.touches[1].pageY), this.M_ = ce.sqrt(d * d + c * c), this.iy = ce.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.XF) / 2 - this.x, this.jy = ce.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.YF) / 2 - this.y, this.options.Bp && this.options.Bp.call(this, a));
                        if (this.options.$x && (this.options.Vk ? (c = getComputedStyle(this.Pb, p)[le].replace(/[^0-9\-.,]/g, "").split(","), d = +(c[12] || c[4]), c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Pb, p).left.replace(/[^0-9-]/g, ""), c = +getComputedStyle(this.Pb, p).top.replace(/[^0-9-]/g, "")), d != this.x || c != this.y)) this.options.Ai ? this.Yd(Ie) : Ke(this.XB),
                        this.Aj = [],
                        this.Cr(d, c),
                        this.options.gy && this.options.gy.call(this);
                        this.nw = this.x;
                        this.ow = this.y;
                        this.iu = this.x;
                        this.ju = this.y;
                        this.rh = b.pageX;
                        this.th = b.pageY;
                        this.startTime = a.timeStamp || Date.now();
                        this.options.oN && this.options.oN.call(this, a);
                        this.ca(Fe, window);
                        this.ca(Ge, window);
                        this.ca(He, window)
                    }
            },
            fT: function (a) {
                var b = Ae ? a.touches[0] : a,
                    c = b.pageX - this.rh,
                    d = b.pageY - this.th,
                    e = this.x + c,
                    f = this.y + d,
                    g = a.timeStamp || Date.now();
                this.options.cN && this.options.cN.call(this, a);
                if (this.options.zoom && Ae && 1 < a.touches.length) e = ce.abs(a.touches[0].pageX - a.touches[1].pageX),
                f = ce.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.L_ = ce.sqrt(e * e + f * f),
                this.Yk = o,
                b = 1 / this.M_ * this.L_ * this.scale,
                b < this.options.Xk ? b = 0.5 * this.options.Xk * Math.pow(2, b / this.options.Xk) : b > this.options.bq && (b = 2 * this.options.bq * Math.pow(0.5, this.options.bq / b)),
                this.vp = b / this.scale,
                e = this.iy - this.iy * this.vp + this.x,
                f = this.jy - this.jy * this.vp + this.y,
                this.Pb.style[le] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + Le,
                this.options.qN && this.options.qN.call(this, a);
                else {
                        this.rh = b.pageX;
                        this.th = b.pageY;
                        if (0 < e || e < this.he) e = this.options.Eo ? this.x + c / 2 : 0 <= e || 0 <= this.he ? 0 : this.he;
                        if (f > this.qf || f < this.nd) f = this.options.Eo ? this.y + d / 2 : f >= this.qf || 0 <= this.nd ? this.qf : this.nd;
                        this.OC += c;
                        this.PC += d;
                        this.lw = ce.abs(this.OC);
                        this.mw = ce.abs(this.PC);
                        6 > this.lw && 6 > this.mw || (this.options.FE && (this.lw > this.mw + 5 ? (f = this.y, d = 0) : this.mw > this.lw + 5 && (e = this.x, c = 0)), this.oh = o, this.Cr(e, f), this.IC = 0 < c ? -1 : 0 > c ? 1 : 0, this.JC = 0 < d ? -1 : 0 > d ? 1 : 0, 300 < g - this.startTime && (this.startTime = g, this.iu = this.x, this.ju = this.y), this.options.nN && this.options.nN.call(this, a))
                    }
            },
            fv: function (a) {
                if (!(Ae && 0 !== a.touches.length)) {
                    var b = this,
                        c = Ae ? a.changedTouches[0] : a,
                        d, e, f = {
                            Ba: 0,
                            time: 0
                        },
                        g = {
                            Ba: 0,
                            time: 0
                        },
                        i = (a.timeStamp || Date.now()) - b.startTime;
                    d = b.x;
                    e = b.y;
                    b.Yd(Fe, window);
                    b.Yd(Ge, window);
                    b.Yd(He, window);
                    b.options.bN && b.options.bN.call(b, a);
                    if (b.Yk) d = b.scale * b.vp,
                    d = Math.max(b.options.Xk, d),
                    d = Math.min(b.options.bq, d),
                    b.vp = d / b.scale,
                    b.scale = d,
                    b.x = b.iy - b.iy * b.vp + b.x,
                    b.y = b.jy - b.jy * b.vp + b.y,
                    b.Pb.style[oe] = "200ms",
                    b.Pb.style[le] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Le,
                    b.Yk = q,
                    b.refresh(),
                    b.options.Ap && b.options.Ap.call(b, a);
                    else {
                            if (b.oh) {
                                if (300 > i && b.options.$x) {
                                    f = d ? b.pI(d - b.iu, i, -b.x, b.Ay - b.xu + b.x, b.options.Eo ? b.xu : 0) : f;
                                    g = e ? b.pI(e - b.ju, i, -b.y, 0 > b.nd ? b.Lp - b.zn + b.y - b.qf : 0, b.options.Eo ? b.zn : 0) : g;
                                    d = b.x + f.Ba;
                                    e = b.y + g.Ba;
                                    if (0 < b.x && 0 < d || b.x < b.he && d < b.he) f = {
                                        Ba: 0,
                                        time: 0
                                    };
                                    if (b.y > b.qf && e > b.qf || b.y < b.nd && e < b.nd) g = {
                                        Ba: 0,
                                        time: 0
                                    }
                                }
                                f.Ba || g.Ba ? (c = ce.max(ce.max(f.time, g.time), 10), b.options.fu && (f = d - b.nw, g = e - b.ow, ce.abs(f) < b.options.Ky && ce.abs(g) < b.options.Ky ? b.scrollTo(b.nw, b.ow, 200) : (f = b.jJ(d, e), d = f.x, e = f.y, c = ce.max(f.time, c))), b.scrollTo(ce.round(d), ce.round(e), c)) : b.options.fu ? (f = d - b.nw, g = e - b.ow, ce.abs(f) < b.options.Ky && ce.abs(g) < b.options.Ky ? b.scrollTo(b.nw, b.ow, 200) : (f = b.jJ(b.x, b.y), (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.ko(200)
                            } else {
                                if (Ae) if (b.IK && b.options.zoom) clearTimeout(b.IK),
                                b.IK = p,
                                b.options.Bp && b.options.Bp.call(b, a),
                                b.zoom(b.rh, b.th, 1 == b.scale ? b.options.pW : 1),
                                b.options.Ap && setTimeout(function () {
                                    b.options.Ap.call(b, a)
                                }, 200);
                                else if (this.options.Ex) {
                                    for (d = c.target; 1 != d.nodeType;) d = d.parentNode;
                                    e = d.tagName.toLowerCase();
                                    "select" != e && "input" != e && "textarea" != e ? (e = be.createEvent("MouseEvents"), e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p), e.DR = o, d.dispatchEvent(e)) : d.focus()
                                }
                                b.ko(400)
                            }
                            b.options.pN && b.options.pN.call(b, a)
                        }
                }
            },
            ko: function (a) {
                var b = 0 <= this.x ? 0 : this.x < this.he ? this.he : this.x,
                    c = this.y >= this.qf || 0 < this.nd ? this.qf : this.y < this.nd ? this.nd : this.y;
                if (b == this.x && c == this.y) {
                        if (this.oh && (this.oh = q, this.options.gy && this.options.gy.call(this)), this.mi && this.options.Ix && ("webkit" == ee && (this.RL.style[we] = "300ms"), this.RL.style.opacity = "0"), this.Bi && this.options.Ix)"webkit" == ee && (this.QO.style[we] = "300ms"),
                        this.QO.style.opacity = "0"
                    } else this.scrollTo(b, c, a || 0)
            },
            JU: function (a) {
                var b = this,
                    c, d;
                if ("wheelDeltaX" in a) c = a.wheelDeltaX / 12,
                d = a.wheelDeltaY / 12;
                else if ("wheelDelta" in a) c = d = a.wheelDelta / 12;
                else if ("detail" in a) c = d = 3 * -a.detail;
                else return;
                if ("zoom" == b.options.YO) {
                        if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)), d < b.options.Xk && (d = b.options.Xk), d > b.options.bq && (d = b.options.bq), d != b.scale)!b.Uy && b.options.Bp && b.options.Bp.call(b, a),
                        b.Uy++,
                        b.zoom(a.pageX, a.pageY, d, 400),
                        setTimeout(function () {
                            b.Uy--;
                            !b.Uy && b.options.Ap && b.options.Ap.call(b, a)
                        }, 400)
                    } else c = b.x + c,
                d = b.y + d,
                0 < c ? c = 0 : c < b.he && (c = b.he),
                d > b.qf ? d = b.qf : d < b.nd && (d = b.nd),
                0 > b.nd && b.scrollTo(c, d, 0)
            },
            FU: function (a) {
                a.target == this.Pb && (this.Yd(Ie), this.DB())
            },
            DB: function () {
                var a = this,
                    b = a.x,
                    c = a.y,
                    d = Date.now(),
                    e, f, g;
                a.Zl || (a.Aj.length ? (e = a.Aj.shift(), e.x == b && e.y == c && (e.time = 0), a.Zl = o, a.oh = o, a.options.Ai) ? (a.sJ(e.time), a.Cr(e.x, e.y), a.Zl = q, e.time ? a.ca(Ie) : a.ko(0)) : (g = function () {
                        var i = Date.now(),
                            k;
                        if (i >= d + e.time) {
                                a.Cr(e.x, e.y);
                                a.Zl = q;
                                a.options.XY && a.options.XY.call(a);
                                a.DB()
                            } else {
                                i = (i - d) / e.time - 1;
                                f = ce.sqrt(1 - i * i);
                                i = (e.x - b) * f + b;
                                k = (e.y - c) * f + c;
                                a.Cr(i, k);
                                if (a.Zl) a.XB = Je(g)
                            }
                    }, g()) : a.ko(400))
            },
            sJ: function (a) {
                a += "ms";
                this.Pb.style[oe] = a;
                this.mi && (this.WX.style[oe] = a);
                this.Bi && (this.d0.style[oe] = a)
            },
            pI: function (a, b, c, d, e) {
                var b = ce.abs(a) / b,
                    f = b * b / 0.0012;
                0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))), b = b * c / f, f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))), b = b * d / f, f = d);
                return {
                        Ba: f * (0 > a ? -1 : 1),
                        time: ce.round(b / 6.0E-4)
                    }
            },
            Zj: function (a) {
                for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;) b -= a.offsetLeft,
                c -= a.offsetTop;
                a != this.yn && (b *= this.scale, c *= this.scale);
                return {
                    left: b,
                    top: c
                }
            },
            jJ: function (a, b) {
                var c, d, e;
                e = this.Ue.length - 1;
                c = 0;
                for (d = this.Ue.length; c < d; c++) if (a >= this.Ue[c]) {
                    e = c;
                    break
                }
                e == this.zC && (0 < e && 0 > this.IC) && e--;
                a = this.Ue[e];
                d = (d = ce.abs(a - this.Ue[this.zC])) ? 500 * (ce.abs(this.x - a) / d) : 0;
                this.zC = e;
                e = this.sf.length - 1;
                for (c = 0; c < e; c++) if (b >= this.sf[c]) {
                    e = c;
                    break
                }
                e == this.AC && (0 < e && 0 > this.JC) && e--;
                b = this.sf[e];
                c = (c = ce.abs(b - this.sf[this.AC])) ? 500 * (ce.abs(this.y - b) / c) : 0;
                this.AC = e;
                e = ce.round(ce.max(d, c)) || 200;
                return {
                    x: a,
                    y: b,
                    time: e
                }
            },
            ca: function (a, b, c) {
                (b || this.Pb).addEventListener(a, this, !! c)
            },
            Yd: function (a, b, c) {
                (b || this.Pb).removeEventListener(a, this, !! c)
            },
            FC: ga(2),
            refresh: function () {
                var a, b, c, d = 0;
                b = 0;
                this.scale < this.options.Xk && (this.scale = this.options.Xk);
                this.xu = this.yn.clientWidth || 1;
                this.zn = this.yn.clientHeight || 1;
                this.qf = -this.options.K_ || 0;
                this.Ay = ce.round(this.Pb.offsetWidth * this.scale);
                this.Lp = ce.round((this.Pb.offsetHeight + this.qf) * this.scale);
                this.he = this.xu - this.Ay;
                this.nd = this.zn - this.Lp + this.qf;
                this.JC = this.IC = 0;
                this.options.lN && this.options.lN.call(this);
                this.kp = this.options.kp && 0 > this.he;
                this.wn = this.options.wn && (!this.options.nV && !this.kp || this.Lp > this.zn);
                this.mi = this.kp && this.options.mi;
                this.Bi = this.wn && this.options.Bi && this.Lp > this.zn;
                a = this.Zj(this.yn);
                this.XF = -a.left;
                this.YF = -a.top;
                if ("string" == typeof this.options.fu) {
                    this.Ue = [];
                    this.sf = [];
                    c = this.Pb.querySelectorAll(this.options.fu);
                    a = 0;
                    for (b = c.length; a < b; a++) d = this.Zj(c[a]),
                    d.left += this.XF,
                    d.top += this.YF,
                    this.Ue[a] = d.left < this.he ? this.he : d.left * this.scale,
                    this.sf[a] = d.top < this.nd ? this.nd : d.top * this.scale
                } else if (this.options.fu) {
                    for (this.Ue = []; d >= this.he;) this.Ue[b] = d,
                    d -= this.xu,
                    b++;
                    this.he % this.xu && (this.Ue[this.Ue.length] = this.he - this.Ue[this.Ue.length - 1] + this.Ue[this.Ue.length - 1]);
                    b = d = 0;
                    for (this.sf = []; d >= this.nd;) this.sf[b] = d,
                    d -= this.zn,
                    b++;
                    this.nd % this.zn && (this.sf[this.sf.length] = this.nd - this.sf[this.sf.length - 1] + this.sf[this.sf.length - 1])
                }
                this.Kv("h");
                this.Kv("v");
                this.Yk || (this.Pb.style[oe] = "0", this.ko(400))
            },
            scrollTo: function (a, b, c, d) {
                var e = a;
                this.stop();
                e.length || (e = [{
                    x: a,
                    y: b,
                    time: c,
                    qZ: d
                }]);
                a = 0;
                for (b = e.length; a < b; a++) e[a].qZ && (e[a].x = this.x - e[a].x, e[a].y = this.y - e[a].y),
                this.Aj.push({
                    x: e[a].x,
                    y: e[a].y,
                    time: e[a].time || 0
                });
                this.DB()
            },
            disable: function () {
                this.stop();
                this.ko(0);
                this.enabled = q;
                this.Yd(Fe, window);
                this.Yd(Ge, window);
                this.Yd(He, window)
            },
            enable: function () {
                this.enabled = o
            },
            stop: function () {
                this.options.Ai ? this.Yd(Ie) : Ke(this.XB);
                this.Aj = [];
                this.Zl = this.oh = q
            },
            zoom: function (a, b, c, d) {
                var e = c / this.scale;
                this.options.Vk && (this.Yk = o, d = d === j ? 200 : d, a = a - this.XF - this.x, b = b - this.YF - this.y, this.x = a - a * e + this.x, this.y = b - b * e + this.y, this.scale = c, this.refresh(), this.x = 0 < this.x ? 0 : this.x < this.he ? this.he : this.x, this.y = this.y > this.qf ? this.qf : this.y < this.nd ? this.nd : this.y, this.Pb.style[oe] = d + "ms", this.Pb.style[le] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Le, this.Yk = q)
            }
        };

    function ke(a) {
            if ("" === ee) return a;
            a = a.charAt(0).toUpperCase() + a.substr(1);
            return ee + a
        }
    de = p;

    function Ne(a) {
            this.k = {
                anchor: Vb,
                offset: new L(0, 0),
                maxWidth: "100%",
                imageHeight: 80
            };
            var a = a || {},
                b;
            for (b in a) this.k[b] = a[b];
            this.Ll = new bc(p, {
                    Of: "api"
                });
            this.$j = [];
            this.P = p;
            this.dg = {
                    height: this.k.imageHeight,
                    width: this.k.imageHeight * Oe
                };
            this.Oc = this.sB = this.dm = this.Xc = p
        }
    var Pe = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        Qe = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    z.Vm(function (a) {
            var b = p;
            a.addEventListener("position_changed", function () {
                a.k.visible && a.k.albumsControl === o && (b ? b.uy(a.Zb()) : (b = new Ne(a.k.albumsControlOptions), b.ra(a)))
            });
            a.addEventListener("albums_visible_changed", function () {
                a.k.albumsControl === o ? (b ? b.uy(a.Zb()) : (b = new Ne(a.k.albumsControlOptions), b.ra(a)), b.show()) : b.U()
            });
            a.addEventListener("albums_options_changed", function () {
                b && b.Mk(a.k.albumsControlOptions)
            });
            a.addEventListener("visible_changed", function () {
                b && (a.bE() ? a.k.albumsControl === o && (b.B.style.visibility = "visible") : b.B.style.visibility = "hidden")
            })
        });
    var Oe = 1.8;
    G() && (Oe = 1);
    x.extend(Ne.prototype, {
            Mk: function (a) {
                for (var b in a) this.k[b] = a[b];
                a = this.k.imageHeight + "px";
                this.rc(this.k.anchor);
                this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
                this.B.style.height = a;
                this.fk.style.height = a;
                this.Wh.style.height = a;
                this.dg = {
                    height: this.k.imageHeight,
                    width: this.k.imageHeight * Oe
                };
                this.ek.style.height = this.dg.height - 6 + "px";
                this.ek.style.width = this.dg.width - 6 + "px";
                this.uy(this.P.Zb(), o)
            },
            ra: function (a) {
                this.P = a;
                this.js();
                this.fQ();
                this.kY();
                this.uy(a.Zb())
            },
            js: function () {
                var a = this.k.imageHeight + "px";
                this.B = K("div");
                var b = this.B.style;
                b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
                b.position = "absolute";
                b.zIndex = "2000";
                b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
                b.padding = "8px 0";
                b.visibility = "hidden";
                b.height = a;
                this.fk = K("div");
                b = this.fk.style;
                b.position = "absolute";
                b.overflow = "hidden";
                b.width = "100%";
                b.height = a;
                this.Wh = K("div");
                b = this.Wh.style;
                b.height = a;
                this.fk.appendChild(this.Wh);
                this.B.appendChild(this.fk);
                this.P.B.appendChild(this.B);
                this.ek = K("div", {
                    "class": "pano_photo_item_seleted"
                });
                this.ek.style.height = this.dg.height - 6 + "px";
                this.ek.style.width = this.dg.width - 6 + "px";
                this.rc(this.k.anchor)
            },
            GH: function (a) {
                for (var b = this.$j, c = b.length - 1; 0 <= c; c--) if (b[c].panoId == a) return c;
                return -1
            },
            uy: function (a, b) {
                if (b || !this.$j[this.Xc] || !(this.$j[this.Xc].panoId == a && 3 !== this.$j[this.Xc].recoType)) {
                    var c = this,
                        d = this.GH(a);
                    !b && -1 !== d && this.$j[d] && 3 !== this.$j[d].recoType ? this.Pp(d) : this.CX(function (a) {
                            for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++) d = a[m].catlog,
                            i = a[m].floor,
                            j !== d && ("" === d && j !== i ? (k = o, b[i] || (b[i] = []), b[i].push(a[m])) : (b[Pe[d]] || (b[Pe[d]] = []), b[Pe[d]].push(a[m])));
                            for (var t in b) k ? l.push({
                                data: t + "F",
                                index: t
                            }) : l.push({
                                data: Qe[t],
                                index: t
                            });
                            c.XG = b;
                            c.Ni = l;
                            c.Hl(a);
                            0 == a.length ? c.U() : c.show()
                        })
                }
            },
            WV: function () {
                if (!this.Ki) {
                    var a = this.qX(this.Ni),
                        b = K("div");
                    b.style.cssText = ["width:" + 134 * this.Ni.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                    b.innerHTML = a;
                    a = K("div");
                    a.appendChild(b);
                    a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                    new Me(a, {
                            Eo: q,
                            $x: o,
                            mi: q,
                            Bi: q,
                            wn: q,
                            FE: o,
                            Hw: o,
                            Ex: o
                        });
                    this.B.appendChild(a);
                    for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++) b = d[e],
                    x.M(b, "click", function () {
                            if (this.getAttribute("dataindex")) {
                                c.Hl(c.XG[this.getAttribute("dataindex")]);
                                for (var a = 0, b = d.length; a < b; a++) d[a].style.color = "#FFFFFF";
                                this.style.color = "#3383FF"
                            }
                        });
                    this.Ki = a
                }
            },
            TV: function () {
                if (this.Ki) a = this.oL(this.Ni),
                this.vQ.innerHTML = a;
                else {
                    var a = this.oL(this.Ni),
                        b = K("ul"),
                        c = this;
                    b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                    b.innerHTML = a;
                    x.M(b, "click", function (a) {
                            if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                                c.Hl(c.XG[a]);
                                for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++) d[e].childNodes[0].getAttribute("dataindex") === a ? x.K.Ua(d[e], "pano_catlogLiActive") : x.K.Tb(d[e], "pano_catlogLiActive")
                            }
                        });
                    var a = K("div"),
                        d = K("a"),
                        e = K("span"),
                        f = K("a"),
                        g = K("span"),
                        i = ["background:url(" + F.qa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                    e.style.cssText = i + "background-position:-18px 0;";
                    d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                    g.style.cssText = i + "background-position:0 0;";
                    f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                    f.style.top = this.k.imageHeight - 7 + "px";
                    a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                    d.appendChild(e);
                    f.appendChild(g);
                    x.M(d, "mouseover", function () {
                            var a = parseInt(b.style.top, 10);
                            7 !== a && (e.style.backgroundPosition = "-27px 0");
                            new qb({
                                Gc: 60,
                                jc: rb.Is,
                                duration: 300,
                                va: function (c) {
                                    b.style.top = a + (7 - a) * c + "px"
                                }
                            })
                        });
                    x.M(d, "mouseout", function () {
                            e.style.backgroundPosition = "-18px 0"
                        });
                    x.M(f, "mouseover", function () {
                            var a = parseInt(b.style.top, 10),
                                d = c.k.imageHeight - 14;
                            if (!(parseInt(b.offsetHeight, 10) < d)) {
                                    var e = d - parseInt(b.offsetHeight, 10) + 7;
                                    e !== a && (g.style.backgroundPosition = "-9px 0");
                                    new qb({
                                        Gc: 60,
                                        jc: rb.Is,
                                        duration: 300,
                                        va: function (c) {
                                            b.style.top = a + (e - a) * c + "px"
                                        }
                                    })
                                }
                        });
                    x.M(f, "mouseout", function () {
                            g.style.backgroundPosition = "0 0"
                        });
                    a.appendChild(d);
                    a.appendChild(f);
                    d = K("div");
                    d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                    d.appendChild(b);
                    d.appendChild(a);
                    this.Ki = d;
                    this.vQ = b;
                    this.B.appendChild(d)
                }
            },
            UV: function () {
                if (this.Ni && !(0 >= this.Ni.length)) {
                    var a = K("div");
                    a.innerHTML = this.$z;
                    a.style.cssText = "position:absolute;background:#252525";
                    this.B.appendChild(a);
                    this.Ms = a;
                    this.Oc.eg.style.left = this.dg.width + 8 + "px";
                    this.Ki && (this.Ki.style.left = parseInt(this.Ki.style.left, 10) + this.dg.width + 8 + "px");
                    var b = this;
                    x.M(a, "click", function () {
                        b.P.tc(b.FW)
                    })
                }
            },
            Hl: function (a) {
                this.$j = a;
                this.k.showCatalog && (0 < this.Ni.length ? (Ua() ? this.TV() : this.WV(), this.Oc.offsetLeft = 60) : (this.Ms && (this.B.removeChild(this.Ms), this.Ms = p, this.Oc.eg.style.left = "0px"), this.Ki && (this.B.removeChild(this.Ki), this.Ki = p), this.Oc.offsetLeft = 0));
                var b = this.kX(a);
                Ua() && (this.Ni && 0 < this.Ni.length && this.k.showExit && this.$z) && (this.Oc.offsetLeft += this.dg.width + 8, this.Ms ? this.Ms.innerHTML = this.$z : this.UV());
                this.Wh.innerHTML = b;
                this.Wh.style.width = (this.dg.width + 8) * a.length + 8 + "px";
                a = this.B.offsetWidth;
                b = this.Wh.offsetWidth;
                this.Oc.Ts && (b += this.Oc.Ts());
                b < a - 2 * this.Oc.Ei - this.Oc.offsetLeft ? this.B.style.width = b + this.Oc.offsetLeft + "px" : (this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px", b < this.B.offsetWidth - 2 * this.Oc.Ei - this.Oc.offsetLeft && (this.B.style.width = b + this.Oc.offsetLeft + "px"));
                this.Oc.refresh();
                this.sB = this.Wh.children;
                this.Wh.appendChild(this.ek);
                this.ek.style.left = "-100000px";
                a = this.GH(this.P.Zb(), this.m1); - 1 !== a && this.Pp(a)
            },
            qX: function (a) {
                for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>",
                b += c;
                return b
            },
            oL: function (a) {
                for (var b = "", c, d = 0, e = a.length; d < e; d++) c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>",
                b += c;
                return b
            },
            kX: function (a) {
                for (var b, c, d, e, f = [], g = this.dg.height, i = this.dg.width, k = 0; k < a.length; k++) b = a[k],
                recoType = b.recoType,
                d = b.panoId,
                e = b.name,
                c = b.heading,
                b = b.pitch,
                c = ae.AL(d, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>",
                3 === recoType ? Ua() ? (this.$z = b, this.FW = d, a.splice(k, 1), k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + F.qa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>', f.push(b)) : f.push(b);
                return f.join("")
            },
            CX: function (a) {
                var b = this,
                    c = this.P.Zb();
                c && this.Ll.Bx(c, function (d) {
                        b.P.Zb() === c && a(d)
                    })
            },
            rc: function (a) {
                if (!Wa(a) || isNaN(a) || a < Tb || 3 < a) a = this.defaultAnchor;
                var b = this.B,
                    c = this.k.offset.width,
                    d = this.k.offset.height;
                b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
                switch (a) {
                    case Tb:
                        b.style.top = d + "px";
                        b.style.left = c + "px";
                        break;
                    case Ub:
                        b.style.top = d + "px";
                        b.style.right = c + "px";
                        break;
                    case Vb:
                        b.style.bottom = d + "px";
                        b.style.left = c + "px";
                        break;
                    case 3:
                        b.style.bottom = d + "px",
                        b.style.right = c + "px"
                    }
            },
            fQ: function () {
                this.dQ()
            },
            dQ: function () {
                var a = this;
                x.M(this.B, "touchstart", function (a) {
                    a.stopPropagation()
                });
                x.M(this.fk, "click", function (b) {
                    if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Xc) a.Pp(b),
                    a.P.tc(a.$j[b].panoId)
                });
                x.M(this.Wh, "mouseover", function (b) {
                    b = (b.srcElement || b.target).getAttribute("data-index");
                    b !== p && a.oK(b, o)
                });
                this.P.addEventListener("size_changed", function () {
                    isNaN(Number(a.k.maxWidth)) && a.Mk({
                        maxWidth: a.k.maxWidth
                    })
                })
            },
            Pp: function (a) {
                this.ek.style.left = this.sB[a].offsetLeft + 8 + "px";
                this.ek.setAttribute("data-index", this.sB[a].getAttribute("data-index"));
                this.Xc = a;
                this.oK(a)
            },
            oK: function (a, b) {
                var c = this.dg.width + 8,
                    d = 0;
                this.Oc.Ts && (d = this.Oc.Ts() / 2);
                var e = this.fk.offsetWidth - 2 * d,
                    f = this.Wh.offsetLeft || this.Oc.x,
                    f = f - d,
                    g = -a * c;
                g > f && this.Oc.scrollTo(g + d);
                c = g - c;
                f -= e;
                c < f && (!b || b && 8 < g - f) && this.Oc.scrollTo(c + e + d)
            },
            kY: function () {
                this.Oc = G() ? new Me(this.fk, {
                    Eo: q,
                    $x: o,
                    mi: q,
                    Bi: q,
                    wn: q,
                    FE: o,
                    Hw: o,
                    Ex: o
                }) : new Re(this.fk)
            },
            U: function () {
                this.B.style.visibility = "hidden"
            },
            show: function () {
                this.B.style.visibility = "visible"
            }
        });

    function Re(a) {
            this.B = a;
            this.Rg = a.children[0];
            this.Qr = p;
            this.Ei = 20;
            this.offsetLeft = 0;
            this.ra()
        }
    Re.prototype = {
            ra: function () {
                this.Rg.style.position = "relative";
                this.refresh();
                this.js();
                this.bm()
            },
            refresh: function () {
                this.fo = this.B.offsetWidth - this.Ts();
                this.SA = -(this.Rg.offsetWidth - this.fo - this.Ei);
                this.wv = this.Ei + this.offsetLeft;
                this.Rg.style.left = this.wv + "px";
                this.Rg.children[0] && (this.Qr = this.Rg.children[0].offsetWidth);
                this.eg && (this.eg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.eg.offsetHeight / 2 - this.eg.children[0].offsetHeight / 2 + "px")
            },
            Ts: function () {
                return 2 * this.Ei
            },
            js: function () {
                this.Lv = K("div");
                this.Lv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
                this.eg = this.Lv.children[0];
                this.Ir = this.Lv.children[1];
                this.B.appendChild(this.Lv);
                this.eg.children[0].style.marginTop = this.Ir.children[0].style.marginTop = this.eg.offsetHeight / 2 - this.eg.children[0].offsetHeight / 2 + "px"
            },
            bm: function () {
                var a = this;
                x.M(this.eg, "click", function () {
                    a.scrollTo(a.Rg.offsetLeft + a.fo)
                });
                x.M(this.Ir, "click", function () {
                    a.scrollTo(a.Rg.offsetLeft - a.fo)
                })
            },
            GU: function () {
                x.K.Tb(this.eg, "pano_arrow_disable");
                x.K.Tb(this.Ir, "pano_arrow_disable");
                var a = this.Rg.offsetLeft;
                a >= this.wv && x.K.Ua(this.eg, "pano_arrow_disable");
                a - this.fo <= this.SA && x.K.Ua(this.Ir, "pano_arrow_disable")
            },
            scrollTo: function (a) {
                a = a < this.Rg.offsetLeft ? Math.ceil((a - this.Ei - this.fo) / this.Qr) * this.Qr + this.fo + this.Ei - 8 : Math.ceil((a - this.Ei) / this.Qr) * this.Qr + this.Ei;
                a < this.SA ? a = this.SA : a > this.wv && (a = this.wv);
                var b = this.Rg.offsetLeft,
                    c = this;
                new qb({
                        Gc: 60,
                        jc: rb.Is,
                        duration: 300,
                        va: function (d) {
                            c.Rg.style.left = b + (a - b) * d + "px"
                        },
                        finish: function () {
                            c.GU()
                        }
                    })
            }
        };
    z.Map = Ka;
    z.Hotspot = gb;
    z.MapType = Uc;
    z.Point = H;
    z.Pixel = R;
    z.Size = L;
    z.Bounds = db;
    z.TileLayer = Gc;
    z.Projection = gc;
    z.MercatorProjection = S;
    z.PerspectiveProjection = fb;
    z.Copyright = function (a, b, c) {
            this.id = a;
            this.$a = b;
            this.content = c
        };
    z.Overlay = jc;
    z.Label = tc;
    z.GroundOverlay = uc;
    z.PointCollection = yc;
    z.Marker = U;
    z.Icon = pc;
    z.IconSequence = rc;
    z.Symbol = qc;
    z.Polyline = Cc;
    z.Polygon = Bc;
    z.InfoWindow = sc;
    z.Circle = Dc;
    z.Control = Sb;
    z.NavigationControl = hb;
    z.GeolocationControl = Wb;
    z.OverviewMapControl = jb;
    z.CopyrightControl = Xb;
    z.ScaleControl = ib;
    z.MapTypeControl = kb;
    z.CityListControl = Yb;
    z.PanoramaControl = $b;
    z.TrafficLayer = Qc;
    z.CustomLayer = lb;
    z.ContextMenu = cc;
    z.MenuItem = fc;
    z.LocalSearch = ab;
    z.TransitRoute = wd;
    z.DrivingRoute = zd;
    z.WalkingRoute = Ad;
    z.Autocomplete = Kd;
    z.RouteSearch = Ed;
    z.Geocoder = Fd;
    z.LocalCity = Hd;
    z.Geolocation = Geolocation;
    z.Convertor = ic;
    z.BusLineSearch = Jd;
    z.Boundary = Id;
    z.VectorCloudLayer = Oc;
    z.VectorTrafficLayer = Pc;
    z.Panorama = Na;
    z.PanoramaLabel = Qd;
    z.PanoramaService = bc;
    z.PanoramaCoverageLayer = ac;
    z.PanoramaFlashInterface = Zd;

    function T(a, b) {
            for (var c in b) a[c] = b[c]
        }
    T(window, {
            BMap: z,
            _jsload2: function (a, b) {
                ia.Ny.uY && ia.Ny.set(a, b);
                I.xV(a, b)
            },
            BMAP_API_VERSION: "2.0"
        });
    var Se = Ka.prototype;
    T(Se, {
            getBounds: Se.Hd,
            getCenter: Se.Ha,
            getMapType: Se.oa,
            getSize: Se.Bb,
            setSize: Se.Ae,
            getViewport: Se.dt,
            getZoom: Se.fa,
            centerAndZoom: Se.Dd,
            panTo: Se.ui,
            panBy: Se.wg,
            setCenter: Se.Vf,
            setCurrentCity: Se.sF,
            setMapType: Se.zg,
            setViewport: Se.zh,
            setZoom: Se.Nc,
            highResolutionEnabled: Se.Kx,
            zoomTo: Se.Cg,
            zoomIn: Se.ZF,
            zoomOut: Se.$F,
            addHotspot: Se.tw,
            removeHotspot: Se.sZ,
            clearHotspots: Se.fm,
            checkResize: Se.AV,
            addControl: Se.as,
            removeControl: Se.EN,
            getContainer: Se.La,
            addContextMenu: Se.xo,
            removeContextMenu: Se.Fp,
            addOverlay: Se.Ka,
            removeOverlay: Se.Ub,
            clearOverlays: Se.lK,
            openInfoWindow: Se.Ob,
            closeInfoWindow: Se.Wc,
            pointToOverlayPixel: Se.Ve,
            overlayPixelToPoint: Se.sN,
            getInfoWindow: Se.gh,
            getOverlays: Se.yx,
            getPanes: function () {
                return {
                    floatPane: this.Wd.uD,
                    markerMouseTarget: this.Wd.IE,
                    floatShadow: this.Wd.gL,
                    labelPane: this.Wd.AE,
                    markerPane: this.Wd.NM,
                    markerShadow: this.Wd.OM,
                    mapPane: this.Wd.At,
                    vertexPane: this.Wd.UO
                }
            },
            addTileLayer: Se.Vg,
            removeTileLayer: Se.wh,
            pixelToPoint: Se.wb,
            pointToPixel: Se.bc,
            setFeatureStyle: Se.Op,
            selectBaseElement: Se.i4,
            setMapStyle: Se.Vt,
            enable3DBuilding: Se.Po,
            disable3DBuilding: Se.jW,
            getPanorama: Se.xm,
            setBrowserContextmenu: Se.SZ
        });
    var Te = Uc.prototype;
    T(Te, {
            getTileLayer: Te.NX,
            getMinZoom: Te.$o,
            getMaxZoom: Te.wm,
            getProjection: Te.ep,
            getTextColor: Te.Cm,
            getTips: Te.ct
        });
    T(window, {
            BMAP_NORMAL_MAP: La,
            BMAP_PERSPECTIVE_MAP: Pa,
            BMAP_SATELLITE_MAP: Ya,
            BMAP_HYBRID_MAP: Sa
        });
    var Ue = S.prototype;
    T(Ue, {
            lngLatToPoint: Ue.kh,
            pointToLngLat: Ue.zj
        });
    var Ve = fb.prototype;
    T(Ve, {
            lngLatToPoint: Ve.kh,
            pointToLngLat: Ve.zj
        });
    var We = db.prototype;
    T(We, {
            equals: We.nb,
            containsPoint: We.hs,
            containsBounds: We.LV,
            intersects: We.mt,
            extend: We.extend,
            getCenter: We.Ha,
            isEmpty: We.xj,
            getSouthWest: We.ve,
            getNorthEast: We.nf,
            toSpan: We.NF
        });
    var Xe = jc.prototype;
    T(Xe, {
            isVisible: Xe.jh,
            show: Xe.show,
            hide: Xe.U
        });
    jc.getZIndex = jc.Em;
    var Ye = eb.prototype;
    T(Ye, {
            openInfoWindow: Ye.Ob,
            closeInfoWindow: Ye.Wc,
            enableMassClear: Ye.mj,
            disableMassClear: Ye.lW,
            show: Ye.show,
            hide: Ye.U,
            getMap: Ye.tx,
            addContextMenu: Ye.xo,
            removeContextMenu: Ye.Fp
        });
    var Ze = U.prototype;
    T(Ze, {
            setIcon: Ze.Vb,
            getIcon: Ze.Zo,
            setPosition: Ze.ta,
            getPosition: Ze.ha,
            setOffset: Ze.Xe,
            getOffset: Ze.Pf,
            getLabel: Ze.OD,
            setLabel: Ze.gn,
            setTitle: Ze.Cc,
            setTop: Ze.yi,
            enableDragging: Ze.Hb,
            disableDragging: Ze.LC,
            setZIndex: Ze.$t,
            getMap: Ze.tx,
            setAnimation: Ze.fn,
            setShadow: Ze.Ey,
            hide: Ze.U,
            setRotation: Ze.Rp,
            getRotation: Ze.EL
        });
    T(window, {
            BMAP_ANIMATION_DROP: 1,
            BMAP_ANIMATION_BOUNCE: 2
        });
    var $e = tc.prototype;
    T($e, {
            setStyle: $e.Ld,
            setStyles: $e.xi,
            setContent: $e.ad,
            setPosition: $e.ta,
            getPosition: $e.ha,
            setOffset: $e.Xe,
            getOffset: $e.Pf,
            setTitle: $e.Cc,
            setZIndex: $e.$t,
            getMap: $e.tx,
            getContent: $e.uk
        });
    var af = pc.prototype;
    T(af, {
            setImageUrl: af.UN,
            setSize: af.Ae,
            setAnchor: af.rc,
            setImageOffset: af.Ut,
            setImageSize: af.XZ,
            setInfoWindowAnchor: af.$Z,
            setPrintImageUrl: af.j_
        });
    var bf = sc.prototype;
    T(bf, {
            redraw: bf.je,
            setTitle: bf.Cc,
            setContent: bf.ad,
            getContent: bf.uk,
            getPosition: bf.ha,
            enableMaximize: bf.$g,
            disableMaximize: bf.$w,
            isOpen: bf.Wa,
            setMaxContent: bf.Wt,
            maximize: bf.Zx,
            enableAutoPan: bf.Js
        });
    var cf = lc.prototype;
    T(cf, {
            getPath: cf.te,
            setPath: cf.ke,
            setPositionAt: cf.jn,
            getStrokeColor: cf.IX,
            setStrokeWeight: cf.Up,
            getStrokeWeight: cf.HL,
            setStrokeOpacity: cf.Sp,
            getStrokeOpacity: cf.JX,
            setFillOpacity: cf.Tt,
            getFillOpacity: cf.fX,
            setStrokeStyle: cf.Tp,
            getStrokeStyle: cf.GL,
            getFillColor: cf.eX,
            getBounds: cf.Hd,
            enableEditing: cf.lf,
            disableEditing: cf.kW,
            getEditing: cf.bX
        });
    var df = Dc.prototype;
    T(df, {
            setCenter: df.Vf,
            getCenter: df.Ha,
            getRadius: df.CL,
            setRadius: df.uf
        });
    var ef = Bc.prototype;
    T(ef, {
            getPath: ef.te,
            setPath: ef.ke,
            setPositionAt: ef.jn
        });
    var ff = gb.prototype;
    T(ff, {
            getPosition: ff.ha,
            setPosition: ff.ta,
            getText: ff.YD,
            setText: ff.Zt
        });
    H.prototype.equals = H.prototype.nb;
    R.prototype.equals = R.prototype.nb;
    L.prototype.equals = L.prototype.nb;
    T(window, {
            BMAP_ANCHOR_TOP_LEFT: Tb,
            BMAP_ANCHOR_TOP_RIGHT: Ub,
            BMAP_ANCHOR_BOTTOM_LEFT: Vb,
            BMAP_ANCHOR_BOTTOM_RIGHT: 3
        });
    var gf = Sb.prototype;
    T(gf, {
            setAnchor: gf.rc,
            getAnchor: gf.AD,
            setOffset: gf.Xe,
            getOffset: gf.Pf,
            show: gf.show,
            hide: gf.U,
            isVisible: gf.jh,
            toString: gf.toString
        });
    var hf = hb.prototype;
    T(hf, {
            getType: hf.ip,
            setType: hf.kn
        });
    T(window, {
            BMAP_NAVIGATION_CONTROL_LARGE: 0,
            BMAP_NAVIGATION_CONTROL_SMALL: 1,
            BMAP_NAVIGATION_CONTROL_PAN: 2,
            BMAP_NAVIGATION_CONTROL_ZOOM: 3
        });
    var jf = jb.prototype;
    T(jf, {
            changeView: jf.qe,
            setSize: jf.Ae,
            getSize: jf.Bb
        });
    var kf = ib.prototype;
    T(kf, {
            getUnit: kf.RX,
            setUnit: kf.AF
        });
    T(window, {
            BMAP_UNIT_METRIC: "metric",
            BMAP_UNIT_IMPERIAL: "us"
        });
    var lf = Xb.prototype;
    T(lf, {
            addCopyright: lf.sw,
            removeCopyright: lf.dF,
            getCopyright: lf.tm,
            getCopyrightCollection: lf.HD
        });
    T(window, {
            BMAP_MAPTYPE_CONTROL_HORIZONTAL: Zb,
            BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
            BMAP_MAPTYPE_CONTROL_MAP: 2
        });
    var of = Gc.prototype;
    T(of, {
            getMapType: of.oa,
            getCopyright: of.tm,
            isTransparentPng: of.xt
        });
    var pf = cc.prototype;
    T(pf, {
            addItem: pf.uw,
            addSeparator: pf.TB,
            removeSeparator: pf.fF
        });
    var qf = fc.prototype;
    T(qf, {
            setText: qf.Zt
        });
    var rf = W.prototype;
    T(rf, {
            getStatus: rf.Am,
            setSearchCompleteCallback: rf.yF,
            getPageCapacity: rf.of,
            setPageCapacity: rf.Qp,
            setLocation: rf.hn,
            disableFirstResultSelection: rf.MC,
            enableFirstResultSelection: rf.jD,
            gotoPage: rf.Fm,
            searchNearby: rf.Mp,
            searchInBounds: rf.dn,
            search: rf.search
        });
    T(window, {
            BMAP_STATUS_SUCCESS: 0,
            BMAP_STATUS_CITY_LIST: 1,
            BMAP_STATUS_UNKNOWN_LOCATION: 2,
            BMAP_STATUS_UNKNOWN_ROUTE: 3,
            BMAP_STATUS_INVALID_KEY: 4,
            BMAP_STATUS_INVALID_REQUEST: 5,
            BMAP_STATUS_PERMISSION_DENIED: 6,
            BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
            BMAP_STATUS_TIMEOUT: 8
        });
    T(window, {
            BMAP_POI_TYPE_NORMAL: 0,
            BMAP_POI_TYPE_BUSSTOP: 1,
            BMAP_POI_TYPE_BUSLINE: 2,
            BMAP_POI_TYPE_SUBSTOP: 3,
            BMAP_POI_TYPE_SUBLINE: 4
        });
    T(window, {
            BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
            BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
            BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
            BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
            BMAP_LINE_TYPE_BUS: 0,
            BMAP_LINE_TYPE_SUBWAY: 1,
            BMAP_LINE_TYPE_FERRY: 2
        });
    var sf = vd.prototype;
    T(sf, {
            clearResults: sf.Pe
        });
    xd = wd.prototype;
    T(xd, {
            setPolicy: xd.Yt,
            toString: xd.toString,
            setPageCapacity: xd.Qp
        });
    T(window, {
            BMAP_DRIVING_POLICY_LEAST_TIME: 0,
            BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
            BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
        });
    T(window, {
            BMAP_MODE_DRIVING: "driving",
            BMAP_MODE_TRANSIT: "transit",
            BMAP_MODE_WALKING: "walking",
            BMAP_MODE_NAVIGATION: "navigation"
        });
    var tf = Ed.prototype;
    T(tf, {
            routeCall: tf.PN
        });
    T(window, {
            BMAP_HIGHLIGHT_STEP: 1,
            BMAP_HIGHLIGHT_ROUTE: 2
        });
    T(window, {
            BMAP_ROUTE_TYPE_DRIVING: ed,
            BMAP_ROUTE_TYPE_WALKING: dd
        });
    T(window, {
            BMAP_ROUTE_STATUS_NORMAL: id,
            BMAP_ROUTE_STATUS_EMPTY: 1,
            BMAP_ROUTE_STATUS_ADDRESS: 2
        });
    var uf = zd.prototype;
    T(uf, {
            setPolicy: uf.Yt
        });
    var vf = Kd.prototype;
    T(vf, {
            show: vf.show,
            hide: vf.U,
            setTypes: vf.zF,
            setLocation: vf.hn,
            search: vf.search,
            setInputValue: vf.By
        });
    T(lb.prototype, {});
    var wf = Id.prototype;
    T(wf, {
            get: wf.get
        });
    T(ac.prototype, {});
    T(bb.prototype, {});
    T(window, {
            BMAP_POINT_DENSITY_HIGH: 200,
            BMAP_POINT_DENSITY_MEDIUM: Tc,
            BMAP_POINT_DENSITY_LOW: 50
        });
    T(window, {
            BMAP_POINT_SHAPE_STAR: 1,
            BMAP_POINT_SHAPE_WATERDROP: 2,
            BMAP_POINT_SHAPE_CIRCLE: vc,
            BMAP_POINT_SHAPE_SQUARE: 4,
            BMAP_POINT_SHAPE_RHOMBUS: 5
        });
    T(window, {
            BMAP_POINT_SIZE_TINY: 1,
            BMAP_POINT_SIZE_SMALLER: 2,
            BMAP_POINT_SIZE_SMALL: 3,
            BMAP_POINT_SIZE_NORMAL: wc,
            BMAP_POINT_SIZE_BIG: 5,
            BMAP_POINT_SIZE_BIGGER: 6,
            BMAP_POINT_SIZE_HUGE: 7
        });
    T(window, {
            BMap_Symbol_SHAPE_CAMERA: 11,
            BMap_Symbol_SHAPE_WARNING: 12,
            BMap_Symbol_SHAPE_SMILE: 13,
            BMap_Symbol_SHAPE_CLOCK: 14,
            BMap_Symbol_SHAPE_POINT: 9,
            BMap_Symbol_SHAPE_PLANE: 10,
            BMap_Symbol_SHAPE_CIRCLE: 1,
            BMap_Symbol_SHAPE_RECTANGLE: 2,
            BMap_Symbol_SHAPE_RHOMBUS: 3,
            BMap_Symbol_SHAPE_STAR: 4,
            BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
            BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
            BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
            BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
        });
    T(window, {
            BMAP_CONTEXT_MENU_ICON_ZOOMIN: dc,
            BMAP_CONTEXT_MENU_ICON_ZOOMOUT: ec
        });
    T(window, {
            BMAP_SYS_DRAWER: Ia,
            BMAP_SVG_DRAWER: 1,
            BMAP_VML_DRAWER: 2,
            BMAP_CANVAS_DRAWER: 3,
            BMAP_SVG_DRAWER_FIRST: 4
        });
    z.ZU();
})()