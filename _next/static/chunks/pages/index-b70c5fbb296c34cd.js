(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5728: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(5383);
        },
      ]);
    },
    8864: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          noSSR: function () {
            return o;
          },
        });
      let s = n(8754);
      n(5893), n(7294);
      let a = s._(n(6016));
      function i(e) {
        return { default: (null == e ? void 0 : e.default) || e };
      }
      function o(e, t) {
        return delete t.webpack, delete t.modules, e(t);
      }
      function l(e, t) {
        let n = a.default,
          s = {
            loading: (e) => {
              let { error: t, isLoading: n, pastDelay: s } = e;
              return null;
            },
          };
        e instanceof Promise
          ? (s.loader = () => e)
          : "function" == typeof e
          ? (s.loader = e)
          : "object" == typeof e && (s = { ...s, ...e });
        let l = (s = { ...s, ...t }).loader;
        return (s.loadableGenerated &&
          ((s = { ...s, ...s.loadableGenerated }), delete s.loadableGenerated),
        "boolean" != typeof s.ssr || s.ssr)
          ? n({
              ...s,
              loader: () =>
                null != l ? l().then(i) : Promise.resolve(i(() => null)),
            })
          : (delete s.webpack, delete s.modules, o(n, s));
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    572: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let s = n(8754)._(n(7294)).default.createContext(null);
    },
    6016: function (e, t, n) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let s = n(8754)._(n(7294)),
        a = n(572),
        i = [],
        o = [],
        l = !1;
      function r(e) {
        let t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then((e) => ((n.loading = !1), (n.loaded = e), e))
            .catch((e) => {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      class m {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: e, _opts: t } = this;
          e.loading &&
            ("number" == typeof t.delay &&
              (0 === t.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, t.delay))),
            "number" == typeof t.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, t.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((e) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(e) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...e,
          }),
            this._callbacks.forEach((e) => e());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(e) {
          return (
            this._callbacks.add(e),
            () => {
              this._callbacks.delete(e);
            }
          );
        }
        constructor(e, t) {
          (this._loadFn = e),
            (this._opts = t),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      }
      function p(e) {
        return (function (e, t) {
          let n = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              t
            ),
            i = null;
          function r() {
            if (!i) {
              let t = new m(e, n);
              i = {
                getCurrentValue: t.getCurrentValue.bind(t),
                subscribe: t.subscribe.bind(t),
                retry: t.retry.bind(t),
                promise: t.promise.bind(t),
              };
            }
            return i.promise();
          }
          if (!l) {
            let e = n.webpack ? n.webpack() : n.modules;
            e &&
              o.push((t) => {
                for (let n of e) if (t.includes(n)) return r();
              });
          }
          function p(e, t) {
            !(function () {
              r();
              let e = s.default.useContext(a.LoadableContext);
              e &&
                Array.isArray(n.modules) &&
                n.modules.forEach((t) => {
                  e(t);
                });
            })();
            let o = s.default.useSyncExternalStore(
              i.subscribe,
              i.getCurrentValue,
              i.getCurrentValue
            );
            return (
              s.default.useImperativeHandle(t, () => ({ retry: i.retry }), []),
              s.default.useMemo(() => {
                var t;
                return o.loading || o.error
                  ? s.default.createElement(n.loading, {
                      isLoading: o.loading,
                      pastDelay: o.pastDelay,
                      timedOut: o.timedOut,
                      error: o.error,
                      retry: i.retry,
                    })
                  : o.loaded
                  ? s.default.createElement(
                      (t = o.loaded) && t.default ? t.default : t,
                      e
                    )
                  : null;
              }, [e, o])
            );
          }
          return (
            (p.preload = () => r()),
            (p.displayName = "LoadableComponent"),
            s.default.forwardRef(p)
          );
        })(r, e);
      }
      function c(e, t) {
        let n = [];
        for (; e.length; ) {
          let s = e.pop();
          n.push(s(t));
        }
        return Promise.all(n).then(() => {
          if (e.length) return c(e, t);
        });
      }
      (p.preloadAll = () =>
        new Promise((e, t) => {
          c(i).then(e, t);
        })),
        (p.preloadReady = (e) => (
          void 0 === e && (e = []),
          new Promise((t) => {
            let n = () => ((l = !0), t());
            c(o, e).then(n, n);
          })
        )),
        (window.__NEXT_PRELOADREADY = p.preloadReady);
      let u = p;
    },
    5383: function (e, t, n) {
      "use strict";
      n.r(t);
      var s = n(5893),
        a = n(7294),
        i = n(3353),
        o = n(5152),
        l = n.n(o),
        r = n(9357),
        m = n(1410),
        p = n(1664),
        c = n.n(p),
        u = n(8519);
      let d = l()(() => n.e(668).then(n.bind(n, 6668)), {
          loadableGenerated: { webpack: () => [6668] },
          ssr: !1,
        }),
        f = l()(() => Promise.all([n.e(465), n.e(88)]).then(n.bind(n, 5088)), {
          loadableGenerated: { webpack: () => [5088] },
          ssr: !1,
          loading: () => (0, s.jsx)("p", { children: "Loading..." }),
        }),
        h = l()(() => n.e(786).then(n.bind(n, 8786)), {
          loadableGenerated: { webpack: () => [8786] },
          ssr: !1,
          loading: () => (0, s.jsx)("p", { children: "Loading..." }),
        }),
        g = l()(() => n.e(731).then(n.bind(n, 1731)), {
          loadableGenerated: { webpack: () => [1731] },
          ssr: !1,
          loading: () => (0, s.jsx)("p", { children: "Loading..." }),
        }),
        x = l()(() => n.e(389).then(n.bind(n, 8389)), {
          loadableGenerated: { webpack: () => [8389] },
          ssr: !1,
          loading: () => (0, s.jsx)("p", { children: "Loading..." }),
        });
      t.default = a.memo(() => {
        let [e, t] = (0, a.useState)(0),
          [n, o] = (0, a.useState)(0),
          [l, p] = (0, a.useState)(!1),
          [b, w] = (0, a.useState)(!1),
          [H, W] = (0, a.useState)(!1),
          [_, v] = (0, a.useState)(""),
          [j, y] = (0, a.useState)(!0),
          [N, S] = (0, a.useState)(0),
          [k, P] = (0, a.useState)(0),
          [O, T] = (0, a.useState)(0),
          [C, L] = (0, a.useState)({ x: 0, y: 0 }),
          [E, M] = (0, a.useState)(!1),
          [D, A] = (0, a.useState)(!1),
          [R, z] = (0, a.useState)(!1),
          [X, B] = (0, a.useState)(!0),
          [F, G] = (0, a.useState)(3),
          [I, Z] = (0, a.useState)(!1),
          U = (0, r.ZP)(),
          V = (0, a.useRef)(null),
          q = [
            U + "/images/bg (2).webp",
            U + "/images/mob - bg.webp",
            U + "/images/NanoLeaf_Light.png",
            U + "/images/Beanbag 1.webp",
            U + "/images/mob - Beanbag & Dirty.webp",
            U + "/images/PC_Screen_Off 1.webp",
            U + "/images/mob - PC_Screen.webp",
            U + "/images/PC_ScreenOn.webp",
            U + "/images/tvwrap.webp",
            U + "/images/mob - tv.webp",
            U + "/images/NanoLeaf_Light.png",
            U + "/images/SL_Bottle1 1.webp",
            U + "/images/SL_bottle2 1.webp",
            U + "/images/SL_ bottle3 1.webp",
            U + "/images/Dirty.webp",
            U + "/images/Frame.webp",
            U + "/images/Ceiling_Light_Off.webp",
            U + "/images/Ceiling_Light_On.webp",
            U + "/images/Ceiling_Light_On.webp",
            U + "/images/Plant_pot.webp",
            U + "/images/Plant.webp",
            U + "/images/Fallen_Bin 1.webp",
            U + "/images/HODL_Poster_Trippy.webp",
            U + "/images/HODL_Poster_Trippy_Extra.webp",
            U + "/images/Office_Chair 1.webp",
            U + "/images/Kitty_PiggyBank 1.webp",
            U + "/images/Kitty_PiggyBank_WavingArm.webp",
            U + "/images/SlidingToast 1.webp",
            U + "/images/Couch (1).webp",
            U + "/images/mob - Couch.webp",
            U + "/images/BeerBox_FAQ_Clicked.webp",
          ],
          K = (e) => {
            o((t) => Math.min(t + (e / (q.length + F)) * 100, 100));
          };
        (0, a.useEffect)(() => {
          let s = () => {
              t((e) => {
                if (e >= n) return e;
                let t = Math.max(0.5, (n - e) / 10);
                return Math.min(e + t, n);
              });
            },
            a = requestAnimationFrame(s);
          return (
            e < n && requestAnimationFrame(s), () => cancelAnimationFrame(a)
          );
        }, [e, n]),
          (0, a.useEffect)(() => {
            if (0 === F) {
              Z(!0);
              return;
            }
            let e = setInterval(() => {
              G((e) => e - 1), K(1);
            }, 1e3);
            return () => clearInterval(e);
          }, [F]);
        let Q = (0, a.useCallback)(() => {
            if (V.current) {
              let { scrollLeft: e, scrollWidth: t, clientWidth: n } = V.current;
              z(e >= t - n), B(0 === e);
            }
          }, []),
          Y = (0, a.useCallback)(() => {
            Q();
          }, [Q]);
        (0, a.useEffect)(() => {
          let e = navigator.platform;
          M(/iPhone|iPad|iPod/.test(e)), A(/Mac/.test(e));
        }, []),
          (0, a.useEffect)(() => {
            if (e >= 100) {
              let e = setTimeout(() => W(!0), 1e3);
              Q();
              let t = V.current;
              return t
                ? (t.addEventListener("scroll", Y),
                  () => t.removeEventListener("scroll", Y))
                : () => clearTimeout(e);
            }
          }, [e, Y]);
        let J = (0, a.useCallback)(
            (e) => {
              ("How To buy" === e && "episodes" === _) ||
              ("episodes" === e && "How To buy" === _)
                ? setTimeout(() => {
                    v(e), y(!0);
                  }, 200)
                : (v(e), y(!0));
            },
            [_]
          ),
          $ = (0, a.useCallback)(() => {
            v(""), y(!1);
          }, []);
        return (
          (0, a.useMemo)(
            () => ({
              transform: "translateX(".concat(0.3 * O - 0.1 * N, "px)"),
            }),
            [O, N]
          ),
          (0, a.useMemo)(
            () => ({
              transform: "translateX(".concat(0.3 * O - 0.1 * N, "px)"),
            }),
            [O, N]
          ),
          (0, s.jsx)(a.Fragment, {
            children: (0, s.jsxs)(m.Z, {
              navbar: !1,
              footer: !1,
              title: "Shiro Neko",
              description:
                "Dive into our world, discover our mission, and explore the Shiro Neko journey.",
              children: [
                e < 100 && (0, s.jsx)(d, { loadingPercentage: e }),
                (0, s.jsx)("div", {
                  className:
                    "fixed w-full left-0 top-1/2 -translate-y-1/2 z-[50] md:hidden",
                  children: (0, s.jsx)(i.Z, {
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center justify-between",
                      children: [
                        (0, s.jsx)("img", {
                          src: U + "/images/Thin_Arrow_Left.png",
                          className:
                            "w-[20px] transition-all duration-300 ".concat(
                              R ? "" : "opacity-0"
                            ),
                          alt: "",
                        }),
                        (0, s.jsx)("img", {
                          src: U + "/images/Thin_Arrow_Right.png",
                          className:
                            "w-[20px] transition-all duration-300 ".concat(
                              X ? "" : "opacity-0"
                            ),
                          alt: "",
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "overflow-hidden w-full",
                  children:
                    I &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "fixed z-[70] w-full left-0 top-3 pointer-events-none",
                          children: (0, s.jsxs)(i.Z, {
                            className:
                              "pointer-events-none flex items-center justify-content-between relative",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, s.jsx)("div", {
                                    className:
                                      "w-[60px] h-[60px] p-1 rounded-full bg-black flex items-center justify-center pointer-events-auto",
                                    onClick: () => p(!l),
                                    children: l
                                      ? (0, s.jsx)("img", {
                                          src: U + "/images/Sound On T.png",
                                          className: "w-full",
                                          alt: "",
                                        })
                                      : (0, s.jsx)("img", {
                                          src: U + "/images/Sound Off T.png",
                                          className: "w-full",
                                          alt: "",
                                        }),
                                  }),
                                 
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "flex items-center gap-4",
                                children: [
                                  (0, s.jsx)("img", {
                                    src: U + "/images/HEAD TRANSPARENT (1).png",
                                    className:
                                      "w-[80px] pointer-events-auto relative z-[24]",
                                    alt: "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "pointer-events-auto",
                                    children: (0, s.jsx)(u.Z, {
                                      showingBtn: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "fixed z-[55] w-full md:left-4 bottom-6 pointer-events-none",
                          children: (0, s.jsx)(i.Z, {
                            className: "pointer-events-none",
                            children: (0, s.jsxs)("div", {
                              className:
                                "flex gap-2 items-center md:justify-start justify-center pointer-events-none",
                              children: [
                                (0, s.jsx)("a", {
                                  href: "https://x.com/shironeko_eth",
                                  target: "_blank",
                                  className:
                                    "cursor-none flex-shrink-0 font-bold pointer-events-auto font-DunkelSans uppercase text-white text__16 minW1600:!text-[1.8vw]",
                                  children: (0, s.jsx)("img", {
                                    src: U + "/images/ic (2).svg",
                                    className: "w-[46px]",
                                    alt: "",
                                  }),
                                }),
                                (0, s.jsx)("a", {
                                  href: "https://t.me/shironeko_erc20",
                                  target: "_blank",
                                  className:
                                    "cursor-none flex-shrink-0 font-bold pointer-events-auto font-DunkelSans uppercase text-white text__16 minW1600:!text-[1.8vw]",
                                  children: (0, s.jsx)("img", {
                                    src: U + "/images/ic (1).svg",
                                    className: "w-[46px]",
                                    alt: "",
                                  }),
                                }),
                                (0, s.jsx)("a", {
                                  href: "https://www.dextools.io/",
                                  target: "_blank",
                                  className:
                                    "cursor-none flex-shrink-0 font-bold pointer-events-auto font-DunkelSans uppercase text-white text__16 minW1600:!text-[1.8vw]",
                                  children: (0, s.jsx)("img", {
                                    src: U + "/images/ic (3).svg",
                                    className: "w-[46px]",
                                    alt: "",
                                  }),
                                }),
                                (0, s.jsx)("a", {
                                  href: "https://dexscreener.com/ethereum/0xcomingsoon",
                                  target: "_blank",
                                  className:
                                    "cursor-none flex-shrink-0 font-bold pointer-events-auto font-DunkelSans uppercase text-white text__16 minW1600:!text-[1.8vw]",
                                  children: (0, s.jsx)("img", {
                                    src: U + "/images/icw (1).svg",
                                    className: "w-[46px]",
                                    alt: "",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "fixed w-full z-[4] left-0 top-1/2 -translate-y-1/2 pointer-events-none",
                          children: (0, s.jsx)(i.Z, {
                            children: (0, s.jsx)("div", {
                              className:
                                "h-[132px] minW1600:!h-[250px] overflow-hidden w-full",
                              children: (0, s.jsx)("h1", {
                                className:
                                  "text-center text-[60px] md:text-[80px] xl:text-[110px] minW1600:!text-[8vw] text-white uppercase font-DunkelSans font-bold transition-all duration-300 ease-in-out [willChange:transform] bordered-text " +
                                  (j ? "translate-y-0" : "translate-y-[20rem]"),
                                children: _,
                              }),
                            }),
                          }),
                        }),
                        (0, s.jsx)("div", {
                          className: "scrollContainer",
                          ref: V,
                          children: (0, s.jsxs)("div", {
                            className: "relative overflow-hidden",
                            style: { width: N },
                            children: [
                              (0, s.jsx)("div", {
                                className:
                                  "absolute left-0 top-0 z-[97] w-full h-full " +
                                  (H
                                    ? "bg-transparent pointer-events-none"
                                    : "bg-[rgba(13,13,13,0.58)]"),
                              }),
                              (0, s.jsx)(h, {
                                ShakeStatus: b,
                                AudioStatus: l,
                                isLightOn: H,
                                windowHeight: k,
                                smoothOffsetX: O,
                                windowWidth: N,
                              }),
                              (0, s.jsx)("div", {
                                style: {
                                  transform: "translateX(".concat(
                                    0.3 * O - 0.1 * N,
                                    "px)"
                                  ),
                                },
                                className:
                                  "absolute  z-[1] w-[23%] h-[22.1%] minH650:!h-[22.5%] minH800:!h-[22.6%] minH900:!h-[22.5%] minH1100:!h-[22.7%] minH1200:!h-[22.8%] minH1600:!h-[23%] left-[51.9%] top-[34%] minH650:!top-[33.2%] minH800:!top-[32.6%] minH900:!top-[32%] minH1100:!top-[31.5%] minH1200:!top-[31%] minH1600:!top-[30.5%]",
                                children: (0, s.jsx)("div", {
                                  className: "realtive w-full h-full",
                                  children: (0, s.jsx)(g, {
                                    ShakeStatus: b,
                                    AudioStatus: l,
                                    isLightOn: H,
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "absolute left-[20%] top-[30%] minWH360700:!top-[32%] minWH360750:!top-[35%] minWH360800:!top-[38%] minWH360900:!top-[41%] minWH3601000:!top-[44%] minWH375600:!top-[28%] minWH375650:!top-[31%] minWH425700:!top-[34%] minWH425800:!top-[38%] minWH425900:!top-[42%] minWH4251000:!top-[44%] minWH7681100:!top-[46%] minWH7681200:!top-[48%] minWH7681300:!top-[50%] minWH7681400:!top-[51%] minWH1024550:!top-[37%] minWH1024600:!top-[40%] minWH1024650:!top-[42%] minWH1024700:!top-[44%] minWH1024800:!top-[47%] minWH1024900:!top-[49%] minWH10241000:!top-[51%] minWH10241100:!top-[53%] minWH10241200:!top-[54%] minWH10241300:!top-[55%] minWH10241400:!top-[56%] minWH1100600:!top-[37%] minWH1100650:!top-[39%] minWH1100700:!top-[42%] minWH1100800:!top-[45%] minWH1100900:!top-[48%] minWH11001000:!top-[50%] minWH11001100:!top-[52%] minWH1200600:!top-[33%] minWH1200650:!top-[36%] minWH1200750:!top-[41%] minWH1200900:!top-[45%] minWH1200950:!top-[47%] minWH12001000:!top-[48%] minWH12001100:!top-[49%] minWH12001200:!top-[51%] minWH12001300:!top-[53%] minWH1300600:!top-[30%] minWH1300700:!top-[36%] minWH1300800:!top-[41%] minWH1300900:!top-[44%] minWH13001000:!top-[46%] minWH13001100:!top-[48%] minWH13001200:!top-[50%] minWH13001300:!top-[52%] minWH1500600:!top-[25%] minWH1500650:!top-[29%] minWH1500700:!top-[31%] minWH1500750:!top-[34%] minWH1500800:!top-[36%] minWH1500900:!top-[39%] minWH1500950:!top-[42%] minWH15001000:!top-[43%] minWH15001100:!top-[45%] minWH15001200:!top-[46%] minWH15001300:!top-[49%] minWH500:!top-[12%] minWH550:!top-[15%] minWH600:!top-[20%] minWH650:!top-[23%] minWH700:!top-[27%] minWH750:!top-[29%] minWH800:!top-[31%] minWH850:!top-[33%] minWH900:!top-[37%] minWH950:!top-[38%] minWH1050:!top-[40%] minWH1150:!top-[43%] minWH1300:!top-[46%] minWH1900600:!top-[14%] minWH1900650:!top-[18%] minWH1900700:!top-[21%] minWH1900750:!top-[25%] minWH1900800:!top-[28%] minWH1900850:!top-[30%] minWH1900900:!top-[31%] minWH1900950:!top-[34%] minWH19001200:!top-[42%] minWH19001300:!top-[44%] minWH2100600:!top-[9%] minWH2100650:!top-[13%] minWH2100700:!top-[17%] minWH2100750:!top-[21%] minWH2100800:!top-[24%] minWH2100850:!top-[26%] minWH2100900:!top-[28%] minWH2100950:!top-[30%] minWH21001050:!top-[34%] minWH21001150:!top-[37%] minWH21001200:!top-[38%] minWH2300600:!top-[2%] minWH2300650:!top-[8%] minWH2300700:!top-[12%] minWH2300750:!top-[16%] minWH2300800:!top-[19%] minWH2300850:!top-[22%] minWH2300900:!top-[24%] minWH2500600:!top-[-3%] minWH2500650:!top-[2%] minWH2500700:!top-[6%] minWH2500750:!top-[11%] minWH2500800:!top-[14%] minWH2500850:!top-[18%] minWH2500900:!top-[20%] minWH2500950:!top-[22%] minWH25001000:!top-[26%] minWH25001050:!top-[27%] minWH25001150:!top-[31%] minWH25001200:!top-[33%] minWH25001300:!top-[36%] minWH25001400:!top-[38%] w-[52%] h-[52%] object-cover z-[3] pointer-events-none",
                                style: {
                                  transform: "translateX(".concat(
                                    0.3 * O - 0.1 * N,
                                    "px)"
                                  ),
                                },
                                children: (0, s.jsx)(x, {}),
                              }),
                              (0, s.jsx)("div", {
                                className: "relative z-[2] overflow-hidden",
                                style: { width: N },
                                children: (0, s.jsx)(f, {
                                  imageObj: q,
                                  seconds: F,
                                  activeText: _,
                                  targetProgress: n,
                                  setTargetProgress: (e) => o(e),
                                  loadingProgress: e,
                                  setLoadingProgress: (e) => t(e),
                                  cacheAsBitmap: !D && !E,
                                  setShakeStatusWrap: (e) => w(e),
                                  AudioStatus: l,
                                  containerRef: V,
                                  setHeightMove: (e) => P(e),
                                  setWidthMove: (e) => S(e),
                                  setSmoothXMove: (e) => T(e),
                                  setWaveMove: (e) => L(e),
                                  isLightOn: H,
                                }),
                              }),
                              (0, s.jsx)(c(), {
                                style: {
                                  transform: "translateX(".concat(
                                    0.26 * O,
                                    "px)"
                                  ),
                                },
                                href: "/tokenomics",
                                onMouseEnter: () => J("tokenomics"),
                                onMouseLeave: $,
                                className:
                                  "cursor-none absolute w-[7%] h-[10%] top-[calc(38%_+_30px)] left-[16.8%] z-[50]",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-full h-full flex items-center justify-center",
                                  children: (0, s.jsx)("div", {
                                    className: "dot-pulse",
                                  }),
                                }),
                              }),
                              
                              (0, s.jsx)(c(), {
                                style: {
                                  transform: "translateX(".concat(
                                    0.4 * O - 0.1 * N,
                                    "px)"
                                  ),
                                },
                                href: "/how-to-buy",
                                onMouseEnter: () => J("How To buy"),
                                onMouseLeave: $,
                                className:
                                  "cursor-none absolute w-[4%] h-[7%] top-[calc(48%_+_30px)] left-[50.4%] z-[50] ",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-full h-full flex items-center justify-center",
                                  children: (0, s.jsx)("div", {
                                    className: "dot-pulse",
                                  }),
                                }),
                              }),
                              (0, s.jsx)(c(), {
                                style: {
                                  transform: "translateX(".concat(
                                    0.3 * O - 0.1 * N,
                                    "px)"
                                  ),
                                },
                                href: "/faq",
                                onMouseEnter: () => J("faq"),
                                onMouseLeave: $,
                                className:
                                  "absolute w-[8%] h-[12%] -bottom-[1%] right-[7%] z-[50] cursor-none ",
                                children: (0, s.jsx)("div", {
                                  className:
                                    "relative w-full h-full flex items-center justify-center",
                                  children: (0, s.jsx)("div", {
                                    className: "dot-pulse",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
          })
        );
      });
    },
    5152: function (e, t, n) {
      e.exports = n(8864);
    },
  },
  function (e) {
    e.O(0, [508, 410, 888, 774, 179], function () {
      return e((e.s = 5728));
    }),
      (_N_E = e.O());
  },
]);
