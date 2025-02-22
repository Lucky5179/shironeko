(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [746],
  {
    2711: function (e) {
      var t;
      (t = function () {
        return (function (e) {
          function t(o) {
            if (n[o]) return n[o].exports;
            var a = (n[o] = { exports: {}, id: o, loaded: !1 });
            return (
              e[o].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
            );
          }
          var n = {};
          return (t.m = e), (t.c = n), (t.p = "dist/"), t(0);
        })([
          function (e, t, n) {
            "use strict";
            function o(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var a =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (e[o] = n[o]);
                  }
                  return e;
                },
              i = (o(n(1)), n(6)),
              r = o(i),
              s = o(n(7)),
              c = o(n(8)),
              l = o(n(9)),
              u = o(n(10)),
              d = o(n(11)),
              f = o(n(14)),
              m = [],
              p = !1,
              b = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              v = function () {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                if ((e && (p = !0), p))
                  return (
                    (m = (0, d.default)(m, b)), (0, u.default)(m, b.once), m
                  );
              },
              h = function () {
                (m = (0, f.default)()), v();
              },
              g = function () {
                m.forEach(function (e, t) {
                  e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay");
                });
              };
            e.exports = {
              init: function (e) {
                (b = a(b, e)), (m = (0, f.default)());
                var t,
                  n = document.all && !window.atob;
                return !0 === (t = b.disable) ||
                  ("mobile" === t && l.default.mobile()) ||
                  ("phone" === t && l.default.phone()) ||
                  ("tablet" === t && l.default.tablet()) ||
                  ("function" == typeof t && !0 === t()) ||
                  n
                  ? g()
                  : (b.disableMutationObserver ||
                      c.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (b.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", b.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", b.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", b.delay),
                    "DOMContentLoaded" === b.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? v(!0)
                      : "load" === b.startEvent
                      ? window.addEventListener(b.startEvent, function () {
                          v(!0);
                        })
                      : document.addEventListener(b.startEvent, function () {
                          v(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, s.default)(v, b.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, s.default)(v, b.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, r.default)(function () {
                        (0, u.default)(m, b.once);
                      }, b.throttleDelay)
                    ),
                    b.disableMutationObserver ||
                      c.default.ready("[data-aos]", h),
                    m);
              },
              refresh: v,
              refreshHard: h,
            };
          },
          function (e, t) {},
          ,
          ,
          ,
          ,
          function (e, t) {
            (function (t) {
              "use strict";
              function n(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t);
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : a(t)) ||
                  (t &&
                    "object" == (void 0 === t ? "undefined" : a(t)) &&
                    v.call(t) == s)
                )
                  return r;
                if (n(e)) {
                  var t,
                    o = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = n(o) ? o + "" : o;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var i = u.test((e = e.replace(c, "")));
                return i || d.test(e)
                  ? f(e.slice(2), i ? 2 : 8)
                  : l.test(e)
                  ? r
                  : +e;
              }
              var a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                i = "Expected a function",
                r = NaN,
                s = "[object Symbol]",
                c = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                u = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                f = parseInt,
                m =
                  "object" == (void 0 === t ? "undefined" : a(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                p =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : a(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                b = m || p || Function("return this")(),
                v = Object.prototype.toString,
                h = Math.max,
                g = Math.min,
                w = function () {
                  return b.Date.now();
                };
              e.exports = function (e, t, a) {
                var r = !0,
                  s = !0;
                if ("function" != typeof e) throw TypeError(i);
                return (
                  n(a) &&
                    ((r = "leading" in a ? !!a.leading : r),
                    (s = "trailing" in a ? !!a.trailing : s)),
                  (function (e, t, a) {
                    function r(t) {
                      var n = d,
                        o = f;
                      return (d = f = void 0), (y = t), (p = e.apply(o, n));
                    }
                    function s(e) {
                      var n = e - v,
                        o = e - y;
                      return void 0 === v || n >= t || n < 0 || (k && o >= m);
                    }
                    function c() {
                      var e,
                        n,
                        o,
                        a = w();
                      return s(a)
                        ? l(a)
                        : void (b = setTimeout(
                            c,
                            ((e = a - v),
                            (n = a - y),
                            (o = t - e),
                            k ? g(o, m - n) : o)
                          ));
                    }
                    function l(e) {
                      return (
                        (b = void 0), j && d ? r(e) : ((d = f = void 0), p)
                      );
                    }
                    function u() {
                      var e,
                        n = w(),
                        o = s(n);
                      if (((d = arguments), (f = this), (v = n), o)) {
                        if (void 0 === b)
                          return (
                            (y = e = v), (b = setTimeout(c, t)), x ? r(e) : p
                          );
                        if (k) return (b = setTimeout(c, t)), r(v);
                      }
                      return void 0 === b && (b = setTimeout(c, t)), p;
                    }
                    var d,
                      f,
                      m,
                      p,
                      b,
                      v,
                      y = 0,
                      x = !1,
                      k = !1,
                      j = !0;
                    if ("function" != typeof e) throw TypeError(i);
                    return (
                      (t = o(t) || 0),
                      n(a) &&
                        ((x = !!a.leading),
                        (m = (k = "maxWait" in a)
                          ? h(o(a.maxWait) || 0, t)
                          : m),
                        (j = "trailing" in a ? !!a.trailing : j)),
                      (u.cancel = function () {
                        void 0 !== b && clearTimeout(b),
                          (y = 0),
                          (d = v = f = b = void 0);
                      }),
                      (u.flush = function () {
                        return void 0 === b ? p : l(w());
                      }),
                      u
                    );
                  })(e, t, { leading: r, maxWait: t, trailing: s })
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            (function (t) {
              "use strict";
              function n(e) {
                var t = void 0 === e ? "undefined" : a(e);
                return !!e && ("object" == t || "function" == t);
              }
              function o(e) {
                if ("number" == typeof e) return e;
                if (
                  "symbol" == (void 0 === (t = e) ? "undefined" : a(t)) ||
                  (t &&
                    "object" == (void 0 === t ? "undefined" : a(t)) &&
                    b.call(t) == r)
                )
                  return i;
                if (n(e)) {
                  var t,
                    o = "function" == typeof e.valueOf ? e.valueOf() : e;
                  e = n(o) ? o + "" : o;
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                var f = l.test((e = e.replace(s, "")));
                return f || u.test(e)
                  ? d(e.slice(2), f ? 2 : 8)
                  : c.test(e)
                  ? i
                  : +e;
              }
              var a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      },
                i = NaN,
                r = "[object Symbol]",
                s = /^\s+|\s+$/g,
                c = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                d = parseInt,
                f =
                  "object" == (void 0 === t ? "undefined" : a(t)) &&
                  t &&
                  t.Object === Object &&
                  t,
                m =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : a(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                p = f || m || Function("return this")(),
                b = Object.prototype.toString,
                v = Math.max,
                h = Math.min,
                g = function () {
                  return p.Date.now();
                };
              e.exports = function (e, t, a) {
                function i(t) {
                  var n = u,
                    o = d;
                  return (u = d = void 0), (w = t), (m = e.apply(o, n));
                }
                function r(e) {
                  var n = e - b,
                    o = e - w;
                  return void 0 === b || n >= t || n < 0 || (x && o >= f);
                }
                function s() {
                  var e,
                    n,
                    o,
                    a = g();
                  return r(a)
                    ? c(a)
                    : void (p = setTimeout(
                        s,
                        ((e = a - b),
                        (n = a - w),
                        (o = t - e),
                        x ? h(o, f - n) : o)
                      ));
                }
                function c(e) {
                  return (p = void 0), k && u ? i(e) : ((u = d = void 0), m);
                }
                function l() {
                  var e,
                    n = g(),
                    o = r(n);
                  if (((u = arguments), (d = this), (b = n), o)) {
                    if (void 0 === p)
                      return (w = e = b), (p = setTimeout(s, t)), y ? i(e) : m;
                    if (x) return (p = setTimeout(s, t)), i(b);
                  }
                  return void 0 === p && (p = setTimeout(s, t)), m;
                }
                var u,
                  d,
                  f,
                  m,
                  p,
                  b,
                  w = 0,
                  y = !1,
                  x = !1,
                  k = !0;
                if ("function" != typeof e)
                  throw TypeError("Expected a function");
                return (
                  (t = o(t) || 0),
                  n(a) &&
                    ((y = !!a.leading),
                    (f = (x = "maxWait" in a) ? v(o(a.maxWait) || 0, t) : f),
                    (k = "trailing" in a ? !!a.trailing : k)),
                  (l.cancel = function () {
                    void 0 !== p && clearTimeout(p),
                      (w = 0),
                      (u = b = d = p = void 0);
                  }),
                  (l.flush = function () {
                    return void 0 === p ? m : c(g());
                  }),
                  l
                );
              };
            }).call(
              t,
              (function () {
                return this;
              })()
            );
          },
          function (e, t) {
            "use strict";
            function n() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function o(e) {
              e &&
                e.forEach(function (e) {
                  var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes);
                  if (
                    (function e(t) {
                      var n = void 0,
                        o = void 0;
                      for (n = 0; n < t.length; n += 1)
                        if (
                          ((o = t[n]).dataset && o.dataset.aos) ||
                          (o.children && e(o.children))
                        )
                          return !0;
                      return !1;
                    })(t.concat(n))
                  )
                    return a();
                });
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var a = function () {};
            t.default = {
              isSupported: function () {
                return !!n();
              },
              ready: function (e, t) {
                var i = window.document,
                  r = new (n())(o);
                (a = t),
                  r.observe(i.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0,
                  });
              },
            };
          },
          function (e, t) {
            "use strict";
            function n() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                      (o.configurable = !0),
                      "value" in o && (o.writable = !0),
                      Object.defineProperty(e, o.key, o);
                  }
                }
                return function (t, n, o) {
                  return n && e(t.prototype, n), o && e(t, o), t;
                };
              })(),
              a =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              i =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              r =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              s =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              c = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e);
                }
                return (
                  o(e, [
                    {
                      key: "phone",
                      value: function () {
                        var e = n();
                        return !(!a.test(e) && !i.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var e = n();
                        return !(!r.test(e) && !s.test(e.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  e
                );
              })();
            t.default = new c();
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e, t, n) {
              var o = e.node.getAttribute("data-aos-once");
              t > e.position
                ? e.node.classList.add("aos-animate")
                : void 0 === o ||
                  ("false" !== o && (n || "true" === o)) ||
                  e.node.classList.remove("aos-animate");
            };
            t.default = function (e, t) {
              var o = window.pageYOffset,
                a = window.innerHeight;
              e.forEach(function (e, i) {
                n(e, a + o, t);
              });
            };
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
              a = (o = n(12)) && o.__esModule ? o : { default: o };
            t.default = function (e, t) {
              return (
                e.forEach(function (e, n) {
                  e.node.classList.add("aos-init"),
                    (e.position = (0, a.default)(e.node, t.offset));
                }),
                e
              );
            };
          },
          function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
              a = (o = n(13)) && o.__esModule ? o : { default: o };
            t.default = function (e, t) {
              var n = 0,
                o = 0,
                i = window.innerHeight,
                r = {
                  offset: e.getAttribute("data-aos-offset"),
                  anchor: e.getAttribute("data-aos-anchor"),
                  anchorPlacement: e.getAttribute("data-aos-anchor-placement"),
                };
              switch (
                (r.offset && !isNaN(r.offset) && (o = parseInt(r.offset)),
                r.anchor &&
                  document.querySelectorAll(r.anchor) &&
                  (e = document.querySelectorAll(r.anchor)[0]),
                (n = (0, a.default)(e).top),
                r.anchorPlacement)
              ) {
                case "top-bottom":
                  break;
                case "center-bottom":
                  n += e.offsetHeight / 2;
                  break;
                case "bottom-bottom":
                  n += e.offsetHeight;
                  break;
                case "top-center":
                  n += i / 2;
                  break;
                case "bottom-center":
                  n += i / 2 + e.offsetHeight;
                  break;
                case "center-center":
                  n += i / 2 + e.offsetHeight / 2;
                  break;
                case "top-top":
                  n += i;
                  break;
                case "bottom-top":
                  n += e.offsetHeight + i;
                  break;
                case "center-top":
                  n += e.offsetHeight / 2 + i;
              }
              return (
                r.anchorPlacement || r.offset || isNaN(t) || (o = t), n + o
              );
            };
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                for (
                  var t = 0, n = 0;
                  e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

                )
                  (t +=
                    e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)),
                    (n +=
                      e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)),
                    (e = e.offsetParent);
                return { top: n, left: t };
              });
          },
          function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                return (
                  (e = e || document.querySelectorAll("[data-aos]")),
                  Array.prototype.map.call(e, function (e) {
                    return { node: e };
                  })
                );
              });
          },
        ]);
      }),
        (e.exports = t());
    },
    8192: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/faq",
        function () {
          return n(7501);
        },
      ]);
    },
    8083: function (e, t, n) {
      "use strict";
      var o = n(3967),
        a = n.n(o),
        i = n(7294),
        r = n(4728),
        s = n(5893);
      let c = i.forwardRef((e, t) => {
        let [{ className: n, ...o }, { as: i = "div", bsPrefix: c, spans: l }] =
          (function (e) {
            let { as: t, bsPrefix: n, className: o, ...i } = e;
            n = (0, r.vE)(n, "col");
            let s = (0, r.pi)(),
              c = (0, r.zG)(),
              l = [],
              u = [];
            return (
              s.forEach((e) => {
                let t, o, a;
                let r = i[e];
                delete i[e],
                  "object" == typeof r && null != r
                    ? ({ span: t, offset: o, order: a } = r)
                    : (t = r);
                let s = e !== c ? "-".concat(e) : "";
                t &&
                  l.push(
                    !0 === t
                      ? "".concat(n).concat(s)
                      : "".concat(n).concat(s, "-").concat(t)
                  ),
                  null != a && u.push("order".concat(s, "-").concat(a)),
                  null != o && u.push("offset".concat(s, "-").concat(o));
              }),
              [
                { ...i, className: a()(o, ...l, ...u) },
                { as: t, bsPrefix: n, spans: l },
              ]
            );
          })(e);
        return (0, s.jsx)(i, {
          ...o,
          ref: t,
          className: a()(n, !l.length && c),
        });
      });
      (c.displayName = "Col"), (t.Z = c);
    },
    8888: function (e, t, n) {
      "use strict";
      var o = n(3967),
        a = n.n(o),
        i = n(7294),
        r = n(4728),
        s = n(5893);
      let c = i.forwardRef((e, t) => {
        let { bsPrefix: n, className: o, as: i = "div", ...c } = e,
          l = (0, r.vE)(n, "row"),
          u = (0, r.pi)(),
          d = (0, r.zG)(),
          f = "".concat(l, "-cols"),
          m = [];
        return (
          u.forEach((e) => {
            let t;
            let n = c[e];
            delete c[e],
              null != n && "object" == typeof n ? ({ cols: t } = n) : (t = n),
              null != t &&
                m.push(
                  ""
                    .concat(f)
                    .concat(e !== d ? "-".concat(e) : "", "-")
                    .concat(t)
                );
          }),
          (0, s.jsx)(i, { ref: t, ...c, className: a()(o, l, ...m) })
        );
      });
      (c.displayName = "Row"), (t.Z = c);
    },
    7501: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return v;
          },
        });
      var o = n(5893),
        a = n(1410),
        i = n(9357),
        r = n(7294),
        s = n(3353),
        c = n(8888),
        l = n(8083),
        u = n(2711),
        d = n.n(u);
      n(3969);
      var f = n(8519),
        m = (e) => {
          let { idx: t, obj: n } = e,
            a = (0, i.ZP)(),
            [s, c] = (0, r.useState)(!1);
          return (0, o.jsx)(r.Fragment, {
            children: (0, o.jsxs)("div", {
              "data-aos-delay": 100 * t,
              "data-aos": "fade-up",
              className:
                "w-full border-[3px] !border-[#DC9285] px-8 md:px-12 py-2 transition-all duration-300 rounded-[48px]",
              children: [
                (0, o.jsxs)("div", {
                  className:
                    "flex items-center justify-between gap-2 cursor-pointer",
                  onClick: () => c(!s),
                  children: [
                    (0, o.jsx)("h4", {
                      className:
                        "text__40 minW1600:!text-[3.5vw] uppercase font-bold font-DunkelSans",
                      dangerouslySetInnerHTML: { __html: n.title },
                    }),
                    (0, o.jsx)("img", {
                      src: a + "/images/star1.svg",
                      className:
                        "w-[40px] md:w-[60px] transition-all duration-300 " +
                        (s ? "-rotate-180" : ""),
                      alt: "",
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className:
                    "transition-all duration-300 overflow-hidden block " +
                    (s ? "max-h-[100rem]" : "max-h-0"),
                  children: (0, o.jsx)("div", {
                    className:
                      "py-2 text__16 minW1600:!text-[1.8vw] leading-relaxed font-Pragmatica",
                    dangerouslySetInnerHTML: { __html: n.desc },
                  }),
                }),
              ],
            }),
          });
        },
        p = n(1664),
        b = n.n(p),
        v = () => {
          let e = (0, i.ZP)();
          (0, r.useEffect)(() => {
            d().init({
              duration: 500,
              easing: "ease-in-out",
              once: !0,
              mirror: !1,
            });
            let e = () => {
              d().refresh();
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []);
          let [t, n] = (0, r.useState)(!0);
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                window.scrollY > 50 ? n(!1) : n(!0);
              };
              return (
                window.addEventListener("scroll", e),
                () => {
                  window.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, o.jsx)(r.Fragment, {
              children: (0, o.jsxs)(a.Z, {
                navbar: !1,
                footer: !0,
                title: "FAQ",
                description:
                  "Find answers to common questions about our project, token, and mission.",
                children: [
                  (0, o.jsx)("div", {
                    className:
                      "fixed z-[70] w-full left-0 top-[1rem] pointer-events-none",
                    children: (0, o.jsxs)(s.Z, {
                      className:
                        "pointer-events-none flex items-center justify-content-between",
                      children: [
                        (0, o.jsxs)("div", {
                          className:
                            "gap-0 ss:gap-2 md:!gap-3 flex items-center justify-center transition-all duration-300 " +
                            (t ? "" : "opacity-0 pointer-events-none"),
                          children: [
                            (0, o.jsx)("a", {
                              href: "https://www.dextools.io/",
                              target: "_blank",
                              className: "pointer-events-auto",
                              children: (0, o.jsx)("img", {
                                src: e + "/images/ss (2).webp",
                                className: "w-[46px] minW1600:!w-[5em]",
                                alt: "",
                              }),
                            }),
                            (0, o.jsx)("a", {
                              href: "https://dexscreener.com/ethereum/0xcomingsoon",
                              target: "_blank",
                              className: "pointer-events-auto",
                              children: (0, o.jsx)("img", {
                                src: e + "/images/icw (1).svg",
                                className: "w-[46px] minW1600:!w-[5em]",
                                alt: "",
                              }),
                            }),
                            (0, o.jsx)("a", {
                              href: "https://t.me/shironecko_eth_Community",
                              target: "_blank",
                              className: "pointer-events-auto",
                              children: (0, o.jsx)("img", {
                                src: e + "/images/ss (1).webp",
                                className: "w-[46px] minW1600:!w-[5em]",
                                alt: "",
                              }),
                            }),
                            (0, o.jsx)("a", {
                              href: "https://x.com/shironecko_eth",
                              target: "_blank",
                              className: "pointer-events-auto",
                              children: (0, o.jsx)("img", {
                                src: e + "/images/asdsad.png",
                                className: "w-[46px] minW1600:!w-[5em]",
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                        (0, o.jsxs)("div", {
                          className: "flex items-center gap-2 md:!gap-3",
                          children: [
                            (0, o.jsx)(b(), {
                              href: "/",
                              className: "cursor-pointer pointer-events-auto",
                              children: (0, o.jsx)("img", {
                                src: e + "/images/Back Button.png",
                                className:
                                  "w-[40px] pointer-events-auto relative z-[24]",
                                alt: "",
                              }),
                            }),
                            (0, o.jsx)(b(), {
                              href: "/",
                              className:
                                "cursor-pointer pointer-events-auto transition-all duration-300 " +
                                (t
                                  ? ""
                                  : "opacity-0 w-[0] hidden overflow-hidden pointer-events-none"),
                              children: (0, o.jsx)("img", {
                                src: e + "/images/HEAD TRANSPARENT (1).png",
                                className:
                                  "w-[80px] pointer-events-auto relative z-[24] ",
                                alt: "",
                              }),
                            }),
                            (0, o.jsx)("div", {
                              className:
                                "transition-all duration-300 " +
                                (t
                                  ? "pointer-events-auto"
                                  : "opacity-0 w-[0] hidden overflow-hidden pointer-events-none"),
                              children: (0, o.jsx)(f.Z, {
                                showingBtn: !0,
                                Clickable: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)("section", {
                    className: "min-h-screen  pt-[40px] minW1600:py-[80px]",
                    children: (0, o.jsx)(s.Z, {
                      children: (0, o.jsxs)("div", {
                        className:
                          "mt-[2rem] lg:mt-[4rem] minW1600:!mt-[6rem] mb-4",
                        children: [
                          (0, o.jsx)("div", {
                            className: "relative text-center mb-[2rem]",
                            "data-aos": "fade-down",
                            children: (0, o.jsx)("h1", {
                              className:
                                "text-center text-[40px] md:text-[64px] lg:text-[72px] xl:text-[110px] minW1600:!text-[8vw] text-white uppercase font-DunkelSans font-bold",
                              children: "faq",
                            }),
                          }),
                          (0, o.jsx)(c.Z, {
                            className: "justify-center",
                            children: (0, o.jsx)(l.Z, {
                              md: 10,
                              xl: 7,
                              xxl: 10,
                              children: (0, o.jsx)("div", {
                                className: "grid grid-cols-1 gap-y-6",
                                children: [
                                  {
                                    title:
                                      "who is <span class='text-[#DC9285]'>shiro neko</span>?",
                                    desc: "Shiro Neko, “White Cat” in Japanese, is embarking on a journey to prove himself in the crypto sphere. Under the mentorship of the legendary Shiba Inu, Shiro learns the ways of blockchain, striving to build his own legacy with $SHIRO.",
                                  },
                                  {
                                    title:
                                      "what chain is <span class='text-[#DC9285]'>shiro neko</span> on?",
                                    desc: "Shiro Neko ($SHIRO) will be launched on the Ethereum blockchain.",
                                  },
                                  {
                                    title:
                                      "Where can I buy <span class='text-[#DC9285]'>shiro neko</span>?",
                                    desc: "CA: 0xcomingsoon <br /> You can purchase $SHIRO on a DEX (Decentralised Exchange) or a CEX (Centralised Exchange) such as Uniswap\xa0and\xa0MEXC.",
                                  },
                                  {
                                    title:
                                      "WHAT EXCHANGES IS <span class='text-[#DC9285]'>$SHIRO</span>\xa0ON?",
                                    desc: "You can purchase $SHIRO on the following exchanges: <br />\n\nUniswap with many more major exchanges being\xa0onboarded\xa0soon.",
                                  },
                                ].map((e, t) =>
                                  (0, o.jsx)(m, { idx: t, obj: e })
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
    3969: function () {},
  },
  function (e) {
    e.O(0, [508, 936, 410, 888, 774, 179], function () {
      return e((e.s = 8192));
    }),
      (_N_E = e.O());
  },
]);
