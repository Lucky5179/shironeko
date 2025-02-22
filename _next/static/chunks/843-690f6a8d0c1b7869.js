(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [843],
  {
    7177: function (e, t, i) {
      "use strict";
      let r, s;
      i.d(t, {
        Z: function () {
          return eI;
        },
      });
      var n,
        l = i(3967),
        a = i.n(l),
        o = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        d = !1,
        c = !1;
      try {
        var u = {
          get passive() {
            return (d = !0);
          },
          get once() {
            return (c = d = !0);
          },
        };
        o &&
          (window.addEventListener("test", u, u),
          window.removeEventListener("test", u, !0));
      } catch (e) {}
      var p = function (e, t, i, r) {
        if (r && "boolean" != typeof r && !c) {
          var s = r.once,
            n = r.capture,
            l = i;
          !c &&
            s &&
            ((l =
              i.__once ||
              function e(r) {
                this.removeEventListener(t, e, n), i.call(this, r);
              }),
            (i.__once = l)),
            e.addEventListener(t, l, d ? r : n);
        }
        e.addEventListener(t, i, r);
      };
      function h(e) {
        return (e && e.ownerDocument) || document;
      }
      var f = function (e, t, i, r) {
        var s = r && "boolean" != typeof r ? r.capture : r;
        e.removeEventListener(t, i, s),
          i.__once && e.removeEventListener(t, i.__once, s);
      };
      function m(e) {
        if (((!n && 0 !== n) || e) && o) {
          var t = document.createElement("div");
          (t.style.position = "absolute"),
            (t.style.top = "-9999px"),
            (t.style.width = "50px"),
            (t.style.height = "50px"),
            (t.style.overflow = "scroll"),
            document.body.appendChild(t),
            (n = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return n;
      }
      var v = i(7294),
        g = function (e) {
          let t = (0, v.useRef)(e);
          return (
            (0, v.useEffect)(() => {
              t.current = e;
            }, [e]),
            t
          );
        };
      function w(e) {
        let t = g(e);
        return (0, v.useCallback)(
          function (...e) {
            return t.current && t.current(...e);
          },
          [t]
        );
      }
      let b = (e) =>
        e && "function" != typeof e
          ? (t) => {
              e.current = t;
            }
          : e;
      var E = function (e, t) {
        return (0, v.useMemo)(
          () =>
            (function (e, t) {
              let i = b(e),
                r = b(t);
              return (e) => {
                i && i(e), r && r(e);
              };
            })(e, t),
          [e, t]
        );
      };
      function S(e) {
        let t = (function (e) {
          let t = (0, v.useRef)(e);
          return (t.current = e), t;
        })(e);
        (0, v.useEffect)(() => () => t.current(), []);
      }
      var y = /([A-Z])/g,
        T = /^ms-/;
      function x(e) {
        return e.replace(y, "-$1").toLowerCase().replace(T, "-ms-");
      }
      var C =
          /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
        M = function (e, t) {
          var i,
            r = "",
            s = "";
          if ("string" == typeof t)
            return (
              e.style.getPropertyValue(x(t)) ||
              (((i = h(e)) && i.defaultView) || window)
                .getComputedStyle(e, void 0)
                .getPropertyValue(x(t))
            );
          Object.keys(t).forEach(function (i) {
            var n = t[i];
            n || 0 === n
              ? i && C.test(i)
                ? (s += i + "(" + n + ") ")
                : (r += x(i) + ": " + n + ";")
              : e.style.removeProperty(x(i));
          }),
            s && (r += "transform: " + s + ";"),
            (e.style.cssText += ";" + r);
        },
        O = function (e, t, i, r) {
          return (
            p(e, t, i, r),
            function () {
              f(e, t, i, r);
            }
          );
        };
      function P(e, t, i, r) {
        null == i &&
          ((n =
            -1 === (s = M(e, "transitionDuration") || "").indexOf("ms")
              ? 1e3
              : 1),
          (i = parseFloat(s) * n || 0));
        var s,
          n,
          l,
          a,
          o,
          d,
          c,
          u =
            ((l = i),
            void 0 === (a = r) && (a = 5),
            (o = !1),
            (d = setTimeout(function () {
              o ||
                (function (e, t, i, r) {
                  if ((void 0 === i && (i = !1), void 0 === r && (r = !0), e)) {
                    var s = document.createEvent("HTMLEvents");
                    s.initEvent(t, i, r), e.dispatchEvent(s);
                  }
                })(e, "transitionend", !0);
            }, l + a)),
            (c = O(
              e,
              "transitionend",
              function () {
                o = !0;
              },
              { once: !0 }
            )),
            function () {
              clearTimeout(d), c();
            }),
          p = O(e, "transitionend", t);
        return function () {
          u(), p();
        };
      }
      function k(e) {
        void 0 === e && (e = h());
        try {
          var t = e.activeElement;
          if (!t || !t.nodeName) return null;
          return t;
        } catch (t) {
          return e.body;
        }
      }
      function L(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var _ = i(3935);
      let N = "data-rr-ui-modal-open";
      class I {
        constructor({
          ownerDocument: e,
          handleContainerOverflow: t = !0,
          isRTL: i = !1,
        } = {}) {
          (this.handleContainerOverflow = t),
            (this.isRTL = i),
            (this.modals = []),
            (this.ownerDocument = e);
        }
        getScrollbarWidth() {
          return (function (e = document) {
            return Math.abs(
              e.defaultView.innerWidth - e.documentElement.clientWidth
            );
          })(this.ownerDocument);
        }
        getElement() {
          return (this.ownerDocument || document).body;
        }
        setModalAttributes(e) {}
        removeModalAttributes(e) {}
        setContainerStyle(e) {
          let t = { overflow: "hidden" },
            i = this.isRTL ? "paddingLeft" : "paddingRight",
            r = this.getElement();
          (e.style = { overflow: r.style.overflow, [i]: r.style[i] }),
            e.scrollBarWidth &&
              (t[i] = `${parseInt(M(r, i) || "0", 10) + e.scrollBarWidth}px`),
            r.setAttribute(N, ""),
            M(r, t);
        }
        reset() {
          [...this.modals].forEach((e) => this.remove(e));
        }
        removeContainerStyle(e) {
          let t = this.getElement();
          t.removeAttribute(N), Object.assign(t.style, e.style);
        }
        add(e) {
          let t = this.modals.indexOf(e);
          return (
            -1 !== t ||
              ((t = this.modals.length),
              this.modals.push(e),
              this.setModalAttributes(e),
              0 !== t ||
                ((this.state = {
                  scrollBarWidth: this.getScrollbarWidth(),
                  style: {},
                }),
                this.handleContainerOverflow &&
                  this.setContainerStyle(this.state))),
            t
          );
        }
        remove(e) {
          let t = this.modals.indexOf(e);
          -1 !== t &&
            (this.modals.splice(t, 1),
            !this.modals.length &&
              this.handleContainerOverflow &&
              this.removeContainerStyle(this.state),
            this.removeModalAttributes(e));
        }
        isTopModal(e) {
          return (
            !!this.modals.length && this.modals[this.modals.length - 1] === e
          );
        }
      }
      var A = I;
      let R = (0, v.createContext)(o ? window : void 0);
      function D() {
        return (0, v.useContext)(R);
      }
      R.Provider;
      let z = (e, t) =>
          o
            ? null == e
              ? (t || h()).body
              : ("function" == typeof e && (e = e()),
                e && "current" in e && (e = e.current),
                e && ("nodeType" in e || e.getBoundingClientRect))
              ? e
              : null
            : null,
        j =
          void 0 !== i.g &&
          i.g.navigator &&
          "ReactNative" === i.g.navigator.product;
      var G =
          "undefined" != typeof document || j ? v.useLayoutEffect : v.useEffect,
        B = function ({
          children: e,
          in: t,
          onExited: i,
          mountOnEnter: r,
          unmountOnExit: s,
        }) {
          let n = (0, v.useRef)(null),
            l = (0, v.useRef)(t),
            a = w(i);
          (0, v.useEffect)(() => {
            t ? (l.current = !0) : a(n.current);
          }, [t, a]);
          let o = E(n, e.ref),
            d = (0, v.cloneElement)(e, { ref: o });
          return t ? d : s || (!l.current && r) ? null : d;
        };
      let F = [
        "onEnter",
        "onEntering",
        "onEntered",
        "onExit",
        "onExiting",
        "onExited",
        "addEndListener",
        "children",
      ];
      var V = i(5893);
      let $ = ["component"],
        H = v.forwardRef((e, t) => {
          let { component: i } = e,
            r = (function (e) {
              let {
                  onEnter: t,
                  onEntering: i,
                  onEntered: r,
                  onExit: s,
                  onExiting: n,
                  onExited: l,
                  addEndListener: a,
                  children: o,
                } = e,
                d = (function (e, t) {
                  if (null == e) return {};
                  var i,
                    r,
                    s = {},
                    n = Object.keys(e);
                  for (r = 0; r < n.length; r++)
                    (i = n[r]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                  return s;
                })(e, F),
                c = (0, v.useRef)(null),
                u = E(c, "function" == typeof o ? null : o.ref),
                p = (e) => (t) => {
                  e && c.current && e(c.current, t);
                },
                h = (0, v.useCallback)(p(t), [t]),
                f = (0, v.useCallback)(p(i), [i]),
                m = (0, v.useCallback)(p(r), [r]),
                g = (0, v.useCallback)(p(s), [s]),
                w = (0, v.useCallback)(p(n), [n]),
                b = (0, v.useCallback)(p(l), [l]),
                S = (0, v.useCallback)(p(a), [a]);
              return Object.assign(
                {},
                d,
                { nodeRef: c },
                t && { onEnter: h },
                i && { onEntering: f },
                r && { onEntered: m },
                s && { onExit: g },
                n && { onExiting: w },
                l && { onExited: b },
                a && { addEndListener: S },
                {
                  children:
                    "function" == typeof o
                      ? (e, t) => o(e, Object.assign({}, t, { ref: u }))
                      : (0, v.cloneElement)(o, { ref: u }),
                }
              );
            })(
              (function (e, t) {
                if (null == e) return {};
                var i,
                  r,
                  s = {},
                  n = Object.keys(e);
                for (r = 0; r < n.length; r++)
                  (i = n[r]), t.indexOf(i) >= 0 || (s[i] = e[i]);
                return s;
              })(e, $)
            );
          return (0, V.jsx)(i, Object.assign({ ref: t }, r));
        });
      function W({
        children: e,
        in: t,
        onExited: i,
        onEntered: r,
        transition: s,
      }) {
        let [n, l] = (0, v.useState)(!t);
        t && n && l(!1);
        let a = E(
          (function ({ in: e, onTransition: t }) {
            let i = (0, v.useRef)(null),
              r = (0, v.useRef)(!0),
              s = w(t);
            return (
              G(() => {
                if (!i.current) return;
                let t = !1;
                return (
                  s({
                    in: e,
                    element: i.current,
                    initial: r.current,
                    isStale: () => t,
                  }),
                  () => {
                    t = !0;
                  }
                );
              }, [e, s]),
              G(
                () => (
                  (r.current = !1),
                  () => {
                    r.current = !0;
                  }
                ),
                []
              ),
              i
            );
          })({
            in: !!t,
            onTransition: (e) => {
              Promise.resolve(s(e)).then(
                () => {
                  e.isStale() ||
                    (e.in
                      ? null == r || r(e.element, e.initial)
                      : (l(!0), null == i || i(e.element)));
                },
                (t) => {
                  throw (e.in || l(!0), t);
                }
              );
            },
          }),
          e.ref
        );
        return n && !t ? null : (0, v.cloneElement)(e, { ref: a });
      }
      function q(e, t, i) {
        return e
          ? (0, V.jsx)(H, Object.assign({}, i, { component: e }))
          : t
          ? (0, V.jsx)(W, Object.assign({}, i, { transition: t }))
          : (0, V.jsx)(B, Object.assign({}, i));
      }
      let Y = [
          "show",
          "role",
          "className",
          "style",
          "children",
          "backdrop",
          "keyboard",
          "onBackdropClick",
          "onEscapeKeyDown",
          "transition",
          "runTransition",
          "backdropTransition",
          "runBackdropTransition",
          "autoFocus",
          "enforceFocus",
          "restoreFocus",
          "restoreFocusOptions",
          "renderDialog",
          "renderBackdrop",
          "manager",
          "container",
          "onShow",
          "onHide",
          "onExit",
          "onExited",
          "onExiting",
          "onEnter",
          "onEntering",
          "onEntered",
        ],
        X = (0, v.forwardRef)((e, t) => {
          let {
              show: i = !1,
              role: s = "dialog",
              className: n,
              style: l,
              children: a,
              backdrop: d = !0,
              keyboard: c = !0,
              onBackdropClick: u,
              onEscapeKeyDown: p,
              transition: h,
              runTransition: f,
              backdropTransition: m,
              runBackdropTransition: g,
              autoFocus: b = !0,
              enforceFocus: E = !0,
              restoreFocus: y = !0,
              restoreFocusOptions: T,
              renderDialog: x,
              renderBackdrop: C = (e) =>
                (0, V.jsx)("div", Object.assign({}, e)),
              manager: M,
              container: P,
              onShow: N,
              onHide: I = () => {},
              onExit: R,
              onExited: j,
              onExiting: G,
              onEnter: B,
              onEntering: F,
              onEntered: $,
            } = e,
            H = (function (e, t) {
              if (null == e) return {};
              var i,
                r,
                s = {},
                n = Object.keys(e);
              for (r = 0; r < n.length; r++)
                (i = n[r]), t.indexOf(i) >= 0 || (s[i] = e[i]);
              return s;
            })(e, Y),
            W = D(),
            X = (function (e, t) {
              let i = D(),
                [r, s] = (0, v.useState)(() =>
                  z(e, null == i ? void 0 : i.document)
                );
              if (!r) {
                let t = z(e);
                t && s(t);
              }
              return (
                (0, v.useEffect)(() => {}, [void 0, r]),
                (0, v.useEffect)(() => {
                  let t = z(e);
                  t !== r && s(t);
                }, [e, r]),
                r
              );
            })(P),
            U = (function (e) {
              let t = D(),
                i =
                  e ||
                  (r ||
                    (r = new A({
                      ownerDocument: null == t ? void 0 : t.document,
                    })),
                  r),
                s = (0, v.useRef)({ dialog: null, backdrop: null });
              return Object.assign(s.current, {
                add: () => i.add(s.current),
                remove: () => i.remove(s.current),
                isTopModal: () => i.isTopModal(s.current),
                setDialogRef: (0, v.useCallback)((e) => {
                  s.current.dialog = e;
                }, []),
                setBackdropRef: (0, v.useCallback)((e) => {
                  s.current.backdrop = e;
                }, []),
              });
            })(M),
            K = (function () {
              let e = (0, v.useRef)(!0),
                t = (0, v.useRef)(() => e.current);
              return (
                (0, v.useEffect)(
                  () => (
                    (e.current = !0),
                    () => {
                      e.current = !1;
                    }
                  ),
                  []
                ),
                t.current
              );
            })(),
            Z = (function (e) {
              let t = (0, v.useRef)(null);
              return (
                (0, v.useEffect)(() => {
                  t.current = e;
                }),
                t.current
              );
            })(i),
            [Q, J] = (0, v.useState)(!i),
            ee = (0, v.useRef)(null);
          (0, v.useImperativeHandle)(t, () => U, [U]),
            o && !Z && i && (ee.current = k(null == W ? void 0 : W.document)),
            i && Q && J(!1);
          let et = w(() => {
              if (
                (U.add(),
                (ea.current = O(document, "keydown", en)),
                (el.current = O(document, "focus", () => setTimeout(er), !0)),
                N && N(),
                b)
              ) {
                var e, t;
                let i = k(
                  null !=
                    (e = null == (t = U.dialog) ? void 0 : t.ownerDocument)
                    ? e
                    : null == W
                    ? void 0
                    : W.document
                );
                U.dialog &&
                  i &&
                  !L(U.dialog, i) &&
                  ((ee.current = i), U.dialog.focus());
              }
            }),
            ei = w(() => {
              if (
                (U.remove(),
                null == ea.current || ea.current(),
                null == el.current || el.current(),
                y)
              ) {
                var e;
                null == (e = ee.current) || null == e.focus || e.focus(T),
                  (ee.current = null);
              }
            });
          (0, v.useEffect)(() => {
            i && X && et();
          }, [i, X, et]),
            (0, v.useEffect)(() => {
              Q && ei();
            }, [Q, ei]),
            S(() => {
              ei();
            });
          let er = w(() => {
              if (!E || !K() || !U.isTopModal()) return;
              let e = k(null == W ? void 0 : W.document);
              U.dialog && e && !L(U.dialog, e) && U.dialog.focus();
            }),
            es = w((e) => {
              e.target === e.currentTarget &&
                (null == u || u(e), !0 === d && I());
            }),
            en = w((e) => {
              c &&
                ("Escape" === e.code || 27 === e.keyCode) &&
                U.isTopModal() &&
                (null == p || p(e), e.defaultPrevented || I());
            }),
            el = (0, v.useRef)(),
            ea = (0, v.useRef)();
          if (!X) return null;
          let eo = Object.assign(
              {
                role: s,
                ref: U.setDialogRef,
                "aria-modal": "dialog" === s || void 0,
              },
              H,
              { style: l, className: n, tabIndex: -1 }
            ),
            ed = x
              ? x(eo)
              : (0, V.jsx)(
                  "div",
                  Object.assign({}, eo, {
                    children: v.cloneElement(a, { role: "document" }),
                  })
                );
          ed = q(h, f, {
            unmountOnExit: !0,
            mountOnEnter: !0,
            appear: !0,
            in: !!i,
            onExit: R,
            onExiting: G,
            onExited: (...e) => {
              J(!0), null == j || j(...e);
            },
            onEnter: B,
            onEntering: F,
            onEntered: $,
            children: ed,
          });
          let ec = null;
          return (
            d &&
              (ec = q(m, g, {
                in: !!i,
                appear: !0,
                mountOnEnter: !0,
                unmountOnExit: !0,
                children: (ec = C({ ref: U.setBackdropRef, onClick: es })),
              })),
            (0, V.jsx)(V.Fragment, {
              children: _.createPortal(
                (0, V.jsxs)(V.Fragment, { children: [ec, ed] }),
                X
              ),
            })
          );
        });
      X.displayName = "Modal";
      var U = Object.assign(X, { Manager: A }),
        K = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function Z(e, t) {
        return K(e.querySelectorAll(t));
      }
      function Q(e, t) {
        return e
          .replace(RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      let J = {
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler",
      };
      class ee extends A {
        adjustAndStore(e, t, i) {
          let r = t.style[e];
          (t.dataset[e] = r),
            M(t, { [e]: "".concat(parseFloat(M(t, e)) + i, "px") });
        }
        restore(e, t) {
          let i = t.dataset[e];
          void 0 !== i && (delete t.dataset[e], M(t, { [e]: i }));
        }
        setContainerStyle(e) {
          var t, i;
          super.setContainerStyle(e);
          let r = this.getElement();
          if (
            ((i = "modal-open"),
            (t = r).classList
              ? t.classList.add(i)
              : (t.classList
                  ? i && t.classList.contains(i)
                  : -1 !==
                    (" " + (t.className.baseVal || t.className) + " ").indexOf(
                      " " + i + " "
                    )) ||
                ("string" == typeof t.className
                  ? (t.className = t.className + " " + i)
                  : t.setAttribute(
                      "class",
                      ((t.className && t.className.baseVal) || "") + " " + i
                    )),
            !e.scrollBarWidth)
          )
            return;
          let s = this.isRTL ? "paddingLeft" : "paddingRight",
            n = this.isRTL ? "marginLeft" : "marginRight";
          Z(r, J.FIXED_CONTENT).forEach((t) =>
            this.adjustAndStore(s, t, e.scrollBarWidth)
          ),
            Z(r, J.STICKY_CONTENT).forEach((t) =>
              this.adjustAndStore(n, t, -e.scrollBarWidth)
            ),
            Z(r, J.NAVBAR_TOGGLER).forEach((t) =>
              this.adjustAndStore(n, t, e.scrollBarWidth)
            );
        }
        removeContainerStyle(e) {
          var t;
          super.removeContainerStyle(e);
          let i = this.getElement();
          (t = "modal-open"),
            i.classList
              ? i.classList.remove(t)
              : "string" == typeof i.className
              ? (i.className = Q(i.className, t))
              : i.setAttribute(
                  "class",
                  Q((i.className && i.className.baseVal) || "", t)
                );
          let r = this.isRTL ? "paddingLeft" : "paddingRight",
            s = this.isRTL ? "marginLeft" : "marginRight";
          Z(i, J.FIXED_CONTENT).forEach((e) => this.restore(r, e)),
            Z(i, J.STICKY_CONTENT).forEach((e) => this.restore(s, e)),
            Z(i, J.NAVBAR_TOGGLER).forEach((e) => this.restore(s, e));
        }
      }
      var et = i(3366),
        ei = i(5068),
        er = { disabled: !1 },
        es = v.createContext(null),
        en = "unmounted",
        el = "exited",
        ea = "entering",
        eo = "entered",
        ed = "exiting",
        ec = (function (e) {
          function t(t, i) {
            r = e.call(this, t, i) || this;
            var r,
              s,
              n = i && !i.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? n
                  ? ((s = el), (r.appearStatus = ea))
                  : (s = eo)
                : (s = t.unmountOnExit || t.mountOnEnter ? en : el),
              (r.state = { status: s }),
              (r.nextCallback = null),
              r
            );
          }
          (0, ei.Z)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === en ? { status: el } : null;
            });
          var i = t.prototype;
          return (
            (i.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (i.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var i = this.state.status;
                this.props.in
                  ? i !== ea && i !== eo && (t = ea)
                  : (i === ea || i === eo) && (t = ed);
              }
              this.updateStatus(!1, t);
            }),
            (i.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (i.getTimeouts = function () {
              var e,
                t,
                i,
                r = this.props.timeout;
              return (
                (e = t = i = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (i = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: i }
              );
            }),
            (i.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t)) {
                if ((this.cancelNextCallback(), t === ea)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var i = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : _.findDOMNode(this);
                    i && i.scrollTop;
                  }
                  this.performEnter(e);
                } else this.performExit();
              } else
                this.props.unmountOnExit &&
                  this.state.status === el &&
                  this.setState({ status: en });
            }),
            (i.performEnter = function (e) {
              var t = this,
                i = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                s = this.props.nodeRef ? [r] : [_.findDOMNode(this), r],
                n = s[0],
                l = s[1],
                a = this.getTimeouts(),
                o = r ? a.appear : a.enter;
              if ((!e && !i) || er.disabled) {
                this.safeSetState({ status: eo }, function () {
                  t.props.onEntered(n);
                });
                return;
              }
              this.props.onEnter(n, l),
                this.safeSetState({ status: ea }, function () {
                  t.props.onEntering(n, l),
                    t.onTransitionEnd(o, function () {
                      t.safeSetState({ status: eo }, function () {
                        t.props.onEntered(n, l);
                      });
                    });
                });
            }),
            (i.performExit = function () {
              var e = this,
                t = this.props.exit,
                i = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : _.findDOMNode(this);
              if (!t || er.disabled) {
                this.safeSetState({ status: el }, function () {
                  e.props.onExited(r);
                });
                return;
              }
              this.props.onExit(r),
                this.safeSetState({ status: ed }, function () {
                  e.props.onExiting(r),
                    e.onTransitionEnd(i.exit, function () {
                      e.safeSetState({ status: el }, function () {
                        e.props.onExited(r);
                      });
                    });
                });
            }),
            (i.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (i.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (i.setNextCallback = function (e) {
              var t = this,
                i = !0;
              return (
                (this.nextCallback = function (r) {
                  i && ((i = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  i = !1;
                }),
                this.nextCallback
              );
            }),
            (i.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var i = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : _.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (!i || r) {
                setTimeout(this.nextCallback, 0);
                return;
              }
              if (this.props.addEndListener) {
                var s = this.props.nodeRef
                    ? [this.nextCallback]
                    : [i, this.nextCallback],
                  n = s[0],
                  l = s[1];
                this.props.addEndListener(n, l);
              }
              null != e && setTimeout(this.nextCallback, e);
            }),
            (i.render = function () {
              var e = this.state.status;
              if (e === en) return null;
              var t = this.props,
                i = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (0, et.Z)(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return v.createElement(
                es.Provider,
                { value: null },
                "function" == typeof i
                  ? i(e, r)
                  : v.cloneElement(v.Children.only(i), r)
              );
            }),
            t
          );
        })(v.Component);
      function eu() {}
      function ep(e, t) {
        let i = M(e, t) || "",
          r = -1 === i.indexOf("ms") ? 1e3 : 1;
        return parseFloat(i) * r;
      }
      function eh(e, t) {
        let i = ep(e, "transitionDuration"),
          r = ep(e, "transitionDelay"),
          s = P(
            e,
            (i) => {
              i.target === e && (s(), t(i));
            },
            i + r
          );
      }
      (ec.contextType = es),
        (ec.propTypes = {}),
        (ec.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: eu,
          onEntering: eu,
          onEntered: eu,
          onExit: eu,
          onExiting: eu,
          onExited: eu,
        }),
        (ec.UNMOUNTED = en),
        (ec.EXITED = el),
        (ec.ENTERING = ea),
        (ec.ENTERED = eo),
        (ec.EXITING = ed);
      let ef = v.forwardRef((e, t) => {
          let {
              onEnter: i,
              onEntering: r,
              onEntered: s,
              onExit: n,
              onExiting: l,
              onExited: a,
              addEndListener: o,
              children: d,
              childRef: c,
              ...u
            } = e,
            p = (0, v.useRef)(null),
            h = E(p, c),
            f = (e) => {
              h(e && "setState" in e ? _.findDOMNode(e) : null != e ? e : null);
            },
            m = (e) => (t) => {
              e && p.current && e(p.current, t);
            },
            g = (0, v.useCallback)(m(i), [i]),
            w = (0, v.useCallback)(m(r), [r]),
            b = (0, v.useCallback)(m(s), [s]),
            S = (0, v.useCallback)(m(n), [n]),
            y = (0, v.useCallback)(m(l), [l]),
            T = (0, v.useCallback)(m(a), [a]),
            x = (0, v.useCallback)(m(o), [o]);
          return (0, V.jsx)(ec, {
            ref: t,
            ...u,
            onEnter: g,
            onEntered: b,
            onEntering: w,
            onExit: S,
            onExited: T,
            onExiting: y,
            addEndListener: x,
            nodeRef: p,
            children:
              "function" == typeof d
                ? (e, t) => d(e, { ...t, ref: f })
                : v.cloneElement(d, { ref: f }),
          });
        }),
        em = { [ea]: "show", [eo]: "show" },
        ev = v.forwardRef((e, t) => {
          let {
              className: i,
              children: r,
              transitionClasses: s = {},
              onEnter: n,
              ...l
            } = e,
            o = {
              in: !1,
              timeout: 300,
              mountOnEnter: !1,
              unmountOnExit: !1,
              appear: !1,
              ...l,
            },
            d = (0, v.useCallback)(
              (e, t) => {
                e.offsetHeight, null == n || n(e, t);
              },
              [n]
            );
          return (0, V.jsx)(ef, {
            ref: t,
            addEndListener: eh,
            ...o,
            onEnter: d,
            childRef: r.ref,
            children: (e, t) =>
              v.cloneElement(r, {
                ...t,
                className: a()("fade", i, r.props.className, em[e], s[e]),
              }),
          });
        });
      ev.displayName = "Fade";
      var eg = i(4728);
      let ew = v.forwardRef((e, t) => {
        let { className: i, bsPrefix: r, as: s = "div", ...n } = e;
        return (
          (r = (0, eg.vE)(r, "modal-body")),
          (0, V.jsx)(s, { ref: t, className: a()(i, r), ...n })
        );
      });
      ew.displayName = "ModalBody";
      let eb = v.createContext({ onHide() {} }),
        eE = v.forwardRef((e, t) => {
          let {
            bsPrefix: i,
            className: r,
            contentClassName: s,
            centered: n,
            size: l,
            fullscreen: o,
            children: d,
            scrollable: c,
            ...u
          } = e;
          i = (0, eg.vE)(i, "modal");
          let p = "".concat(i, "-dialog"),
            h =
              "string" == typeof o
                ? "".concat(i, "-fullscreen-").concat(o)
                : "".concat(i, "-fullscreen");
          return (0, V.jsx)("div", {
            ...u,
            ref: t,
            className: a()(
              p,
              r,
              l && "".concat(i, "-").concat(l),
              n && "".concat(p, "-centered"),
              c && "".concat(p, "-scrollable"),
              o && h
            ),
            children: (0, V.jsx)("div", {
              className: a()("".concat(i, "-content"), s),
              children: d,
            }),
          });
        });
      eE.displayName = "ModalDialog";
      let eS = v.forwardRef((e, t) => {
        let { className: i, bsPrefix: r, as: s = "div", ...n } = e;
        return (
          (r = (0, eg.vE)(r, "modal-footer")),
          (0, V.jsx)(s, { ref: t, className: a()(i, r), ...n })
        );
      });
      eS.displayName = "ModalFooter";
      var ey = i(5697),
        eT = i.n(ey);
      let ex = {
          "aria-label": eT().string,
          onClick: eT().func,
          variant: eT().oneOf(["white"]),
        },
        eC = v.forwardRef((e, t) => {
          let { className: i, variant: r, "aria-label": s = "Close", ...n } = e;
          return (0, V.jsx)("button", {
            ref: t,
            type: "button",
            className: a()("btn-close", r && "btn-close-".concat(r), i),
            "aria-label": s,
            ...n,
          });
        });
      (eC.displayName = "CloseButton"), (eC.propTypes = ex);
      let eM = v.forwardRef((e, t) => {
          let {
              closeLabel: i = "Close",
              closeVariant: r,
              closeButton: s = !1,
              onHide: n,
              children: l,
              ...a
            } = e,
            o = (0, v.useContext)(eb),
            d = w(() => {
              null == o || o.onHide(), null == n || n();
            });
          return (0, V.jsxs)("div", {
            ref: t,
            ...a,
            children: [
              l,
              s && (0, V.jsx)(eC, { "aria-label": i, variant: r, onClick: d }),
            ],
          });
        }),
        eO = v.forwardRef((e, t) => {
          let {
            bsPrefix: i,
            className: r,
            closeLabel: s = "Close",
            closeButton: n = !1,
            ...l
          } = e;
          return (
            (i = (0, eg.vE)(i, "modal-header")),
            (0, V.jsx)(eM, {
              ref: t,
              ...l,
              className: a()(r, i),
              closeLabel: s,
              closeButton: n,
            })
          );
        });
      eO.displayName = "ModalHeader";
      let eP = v.forwardRef((e, t) =>
          (0, V.jsx)("div", { ...e, ref: t, className: a()(e.className, "h4") })
        ),
        ek = v.forwardRef((e, t) => {
          let { className: i, bsPrefix: r, as: s = eP, ...n } = e;
          return (
            (r = (0, eg.vE)(r, "modal-title")),
            (0, V.jsx)(s, { ref: t, className: a()(i, r), ...n })
          );
        });
      function eL(e) {
        return (0, V.jsx)(ev, { ...e, timeout: null });
      }
      function e_(e) {
        return (0, V.jsx)(ev, { ...e, timeout: null });
      }
      ek.displayName = "ModalTitle";
      let eN = v.forwardRef((e, t) => {
        let {
            bsPrefix: i,
            className: r,
            style: n,
            dialogClassName: l,
            contentClassName: d,
            children: c,
            dialogAs: u = eE,
            "data-bs-theme": g,
            "aria-labelledby": b,
            "aria-describedby": y,
            "aria-label": T,
            show: x = !1,
            animation: C = !0,
            backdrop: M = !0,
            keyboard: O = !0,
            onEscapeKeyDown: k,
            onShow: L,
            onHide: _,
            container: N,
            autoFocus: I = !0,
            enforceFocus: A = !0,
            restoreFocus: R = !0,
            restoreFocusOptions: D,
            onEntered: z,
            onExit: j,
            onExiting: G,
            onEnter: B,
            onEntering: F,
            onExited: $,
            backdropClassName: H,
            manager: W,
            ...q
          } = e,
          [Y, X] = (0, v.useState)({}),
          [K, Z] = (0, v.useState)(!1),
          Q = (0, v.useRef)(!1),
          J = (0, v.useRef)(!1),
          et = (0, v.useRef)(null),
          [ei, er] = (0, v.useState)(null),
          es = E(t, er),
          en = w(_),
          el = (0, eg.SC)();
        i = (0, eg.vE)(i, "modal");
        let ea = (0, v.useMemo)(() => ({ onHide: en }), [en]);
        function eo() {
          var e;
          return W || ((e = { isRTL: el }), s || (s = new ee(e)), s);
        }
        function ed(e) {
          if (!o) return;
          let t = eo().getScrollbarWidth() > 0,
            i = e.scrollHeight > h(e).documentElement.clientHeight;
          X({
            paddingRight: t && !i ? m() : void 0,
            paddingLeft: !t && i ? m() : void 0,
          });
        }
        let ec = w(() => {
          ei && ed(ei.dialog);
        });
        S(() => {
          f(window, "resize", ec), null == et.current || et.current();
        });
        let eu = () => {
            Q.current = !0;
          },
          ep = (e) => {
            Q.current && ei && e.target === ei.dialog && (J.current = !0),
              (Q.current = !1);
          },
          eh = () => {
            Z(!0),
              (et.current = P(ei.dialog, () => {
                Z(!1);
              }));
          },
          ef = (e) => {
            e.target === e.currentTarget && eh();
          },
          em = (e) => {
            if ("static" === M) {
              ef(e);
              return;
            }
            if (J.current || e.target !== e.currentTarget) {
              J.current = !1;
              return;
            }
            null == _ || _();
          },
          ev = (0, v.useCallback)(
            (e) =>
              (0, V.jsx)("div", {
                ...e,
                className: a()("".concat(i, "-backdrop"), H, !C && "show"),
              }),
            [C, H, i]
          ),
          ew = { ...n, ...Y };
        return (
          (ew.display = "block"),
          (0, V.jsx)(eb.Provider, {
            value: ea,
            children: (0, V.jsx)(U, {
              show: x,
              ref: es,
              backdrop: M,
              container: N,
              keyboard: !0,
              autoFocus: I,
              enforceFocus: A,
              restoreFocus: R,
              restoreFocusOptions: D,
              onEscapeKeyDown: (e) => {
                O
                  ? null == k || k(e)
                  : (e.preventDefault(), "static" === M && eh());
              },
              onShow: L,
              onHide: _,
              onEnter: (e, t) => {
                e && ed(e), null == B || B(e, t);
              },
              onEntering: (e, t) => {
                null == F || F(e, t), p(window, "resize", ec);
              },
              onEntered: z,
              onExit: (e) => {
                null == et.current || et.current(), null == j || j(e);
              },
              onExiting: G,
              onExited: (e) => {
                e && (e.style.display = ""),
                  null == $ || $(e),
                  f(window, "resize", ec);
              },
              manager: eo(),
              transition: C ? eL : void 0,
              backdropTransition: C ? e_ : void 0,
              renderBackdrop: ev,
              renderDialog: (e) =>
                (0, V.jsx)("div", {
                  role: "dialog",
                  ...e,
                  style: ew,
                  className: a()(
                    r,
                    i,
                    K && "".concat(i, "-static"),
                    !C && "show"
                  ),
                  onClick: M ? em : void 0,
                  onMouseUp: ep,
                  "data-bs-theme": g,
                  "aria-label": T,
                  "aria-labelledby": b,
                  "aria-describedby": y,
                  children: (0, V.jsx)(u, {
                    ...q,
                    onMouseDown: eu,
                    className: l,
                    contentClassName: d,
                    children: c,
                  }),
                }),
            }),
          })
        );
      });
      eN.displayName = "Modal";
      var eI = Object.assign(eN, {
        Body: ew,
        Header: eO,
        Title: ek,
        Footer: eS,
        Dialog: eE,
        TRANSITION_DURATION: 300,
        BACKDROP_TRANSITION_DURATION: 150,
      });
    },
    6455: function () {},
    889: function () {},
    2703: function (e, t, i) {
      "use strict";
      var r = i(414);
      function s() {}
      function n() {}
      (n.resetWarningCache = s),
        (e.exports = function () {
          function e(e, t, i, s, n, l) {
            if (l !== r) {
              var a = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((a.name = "Invariant Violation"), a);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var i = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: n,
            resetWarningCache: s,
          };
          return (i.PropTypes = i), i;
        });
    },
    5697: function (e, t, i) {
      e.exports = i(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    5068: function (e, t, i) {
      "use strict";
      function r(e, t) {
        return (r = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function s(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      i.d(t, {
        Z: function () {
          return s;
        },
      });
    },
    3366: function (e, t, i) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var i,
          r,
          s = {},
          n = Object.keys(e);
        for (r = 0; r < n.length; r++)
          (i = n[r]), t.indexOf(i) >= 0 || (s[i] = e[i]);
        return s;
      }
      i.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    2074: function (e, t, i) {
      "use strict";
      i.d(t, {
        Qr: function () {
          return s;
        },
        xW: function () {
          return n;
        },
      }),
        i(3433);
      var r = i(7185);
      function s(e) {
        let { swiper: t, extendParams: i, on: s } = e;
        function n(e, t) {
          let i, r, s, n, l;
          let a = (e, t) => {
            for (n = -1, s = e.length; s - n > 1; )
              e[(l = (s + n) >> 1)] <= t ? (n = l) : (s = l);
            return s;
          };
          return (
            (this.x = e),
            (this.y = t),
            (this.lastIndex = e.length - 1),
            (this.interpolate = function (e) {
              return e
                ? ((i = (r = a(this.x, e)) - 1),
                  ((e - this.x[i]) * (this.y[r] - this.y[i])) /
                    (this.x[r] - this.x[i]) +
                    this.y[i])
                : 0;
            }),
            this
          );
        }
        function l() {
          t.controller.control &&
            t.controller.spline &&
            ((t.controller.spline = void 0), delete t.controller.spline);
        }
        i({ controller: { control: void 0, inverse: !1, by: "slide" } }),
          (t.controller = { control: void 0 }),
          s("beforeInit", () => {
            if (
              "undefined" != typeof window &&
              ("string" == typeof t.params.controller.control ||
                t.params.controller.control instanceof HTMLElement)
            ) {
              ("string" == typeof t.params.controller.control
                ? [...document.querySelectorAll(t.params.controller.control)]
                : [t.params.controller.control]
              ).forEach((e) => {
                if (
                  (t.controller.control || (t.controller.control = []),
                  e && e.swiper)
                )
                  t.controller.control.push(e.swiper);
                else if (e) {
                  let i = `${t.params.eventsPrefix}init`,
                    r = (s) => {
                      t.controller.control.push(s.detail[0]),
                        t.update(),
                        e.removeEventListener(i, r);
                    };
                  e.addEventListener(i, r);
                }
              });
              return;
            }
            t.controller.control = t.params.controller.control;
          }),
          s("update", () => {
            l();
          }),
          s("resize", () => {
            l();
          }),
          s("observerUpdate", () => {
            l();
          }),
          s("setTranslate", (e, i, r) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTranslate(i, r);
          }),
          s("setTransition", (e, i, r) => {
            t.controller.control &&
              !t.controller.control.destroyed &&
              t.controller.setTransition(i, r);
          }),
          Object.assign(t.controller, {
            setTranslate: function (e, i) {
              let r, s;
              let l = t.controller.control,
                a = t.constructor;
              function o(e) {
                if (e.destroyed) return;
                let i = t.rtlTranslate ? -t.translate : t.translate;
                "slide" === t.params.controller.by &&
                  ((t.controller.spline = t.params.loop
                    ? new n(t.slidesGrid, e.slidesGrid)
                    : new n(t.snapGrid, e.snapGrid)),
                  (s = -t.controller.spline.interpolate(-i))),
                  (s && "container" !== t.params.controller.by) ||
                    ((Number.isNaN(
                      (r =
                        (e.maxTranslate() - e.minTranslate()) /
                        (t.maxTranslate() - t.minTranslate()))
                    ) ||
                      !Number.isFinite(r)) &&
                      (r = 1),
                    (s = (i - t.minTranslate()) * r + e.minTranslate())),
                  t.params.controller.inverse && (s = e.maxTranslate() - s),
                  e.updateProgress(s),
                  e.setTranslate(s, t),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses();
              }
              if (Array.isArray(l))
                for (let e = 0; e < l.length; e += 1)
                  l[e] !== i && l[e] instanceof a && o(l[e]);
              else l instanceof a && i !== l && o(l);
            },
            setTransition: function (e, i) {
              let s;
              let n = t.constructor,
                l = t.controller.control;
              function a(i) {
                i.destroyed ||
                  (i.setTransition(e, t),
                  0 !== e &&
                    (i.transitionStart(),
                    i.params.autoHeight &&
                      (0, r.n)(() => {
                        i.updateAutoHeight();
                      }),
                    (0, r.k)(i.wrapperEl, () => {
                      l && i.transitionEnd();
                    })));
              }
              if (Array.isArray(l))
                for (s = 0; s < l.length; s += 1)
                  l[s] !== i && l[s] instanceof n && a(l[s]);
              else l instanceof n && i !== l && a(l);
            },
          });
      }
      function n(e) {
        let { swiper: t, extendParams: i, on: s } = e;
        i({ fadeEffect: { crossFade: !1 } }),
          (function (e) {
            let t;
            let {
              effect: i,
              swiper: r,
              on: s,
              setTranslate: n,
              setTransition: l,
              overwriteParams: a,
              perspective: o,
              recreateShadows: d,
              getEffectParams: c,
            } = e;
            s("beforeInit", () => {
              if (r.params.effect !== i) return;
              r.classNames.push(`${r.params.containerModifierClass}${i}`),
                o &&
                  o() &&
                  r.classNames.push(`${r.params.containerModifierClass}3d`);
              let e = a ? a() : {};
              Object.assign(r.params, e), Object.assign(r.originalParams, e);
            }),
              s("setTranslate", () => {
                r.params.effect === i && n();
              }),
              s("setTransition", (e, t) => {
                r.params.effect === i && l(t);
              }),
              s("transitionEnd", () => {
                r.params.effect === i &&
                  d &&
                  c &&
                  c().slideShadows &&
                  (r.slides.forEach((e) => {
                    e.querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    ).forEach((e) => e.remove());
                  }),
                  d());
              }),
              s("virtualUpdate", () => {
                r.params.effect === i &&
                  (r.slides.length || (t = !0),
                  requestAnimationFrame(() => {
                    t && r.slides && r.slides.length && (n(), (t = !1));
                  }));
              });
          })({
            effect: "fade",
            swiper: t,
            on: s,
            setTranslate: () => {
              let { slides: e } = t;
              t.params.fadeEffect;
              for (let i = 0; i < e.length; i += 1) {
                let e = t.slides[i],
                  s = -e.swiperSlideOffset;
                t.params.virtualTranslate || (s -= t.translate);
                let n = 0;
                t.isHorizontal() || ((n = s), (s = 0));
                let l = t.params.fadeEffect.crossFade
                    ? Math.max(1 - Math.abs(e.progress), 0)
                    : 1 + Math.min(Math.max(e.progress, -1), 0),
                  a = (function (e, t) {
                    let i = (0, r.g)(t);
                    return (
                      i !== t &&
                        ((i.style.backfaceVisibility = "hidden"),
                        (i.style["-webkit-backface-visibility"] = "hidden")),
                      i
                    );
                  })(0, e);
                (a.style.opacity = l),
                  (a.style.transform = `translate3d(${s}px, ${n}px, 0px)`);
              }
            },
            setTransition: (e) => {
              let i = t.slides.map((e) => (0, r.g)(e));
              i.forEach((t) => {
                t.style.transitionDuration = `${e}ms`;
              }),
                (function (e) {
                  let {
                      swiper: t,
                      duration: i,
                      transformElements: s,
                      allSlides: n,
                    } = e,
                    { activeIndex: l } = t,
                    a = (e) =>
                      e.parentElement
                        ? e.parentElement
                        : t.slides.filter(
                            (t) => t.shadowRoot && t.shadowRoot === e.parentNode
                          )[0];
                  if (t.params.virtualTranslate && 0 !== i) {
                    let e = !1;
                    (n
                      ? s
                      : s.filter((e) => {
                          let i = e.classList.contains("swiper-slide-transform")
                            ? a(e)
                            : e;
                          return t.getSlideIndex(i) === l;
                        })
                    ).forEach((i) => {
                      (0, r.k)(i, () => {
                        if (e || !t || t.destroyed) return;
                        (e = !0), (t.animating = !1);
                        let i = new window.CustomEvent("transitionend", {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        t.wrapperEl.dispatchEvent(i);
                      });
                    });
                  }
                })({
                  swiper: t,
                  duration: e,
                  transformElements: i,
                  allSlides: !0,
                });
            },
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
      }
    },
    3433: function (e, t, i) {
      "use strict";
      function r(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function s(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : r(t[i]) &&
                r(e[i]) &&
                Object.keys(t[i]).length > 0 &&
                s(e[i], t[i]);
          });
      }
      i.d(t, {
        a: function () {
          return o;
        },
        g: function () {
          return l;
        },
      });
      let n = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function l() {
        let e = "undefined" != typeof document ? document : {};
        return s(e, n), e;
      }
      let a = {
        document: n,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        let e = "undefined" != typeof window ? window : {};
        return s(e, a), e;
      }
    },
    7185: function (e, t, i) {
      "use strict";
      i.d(t, {
        a: function () {
          return E;
        },
        c: function () {
          return m;
        },
        d: function () {
          return l;
        },
        e: function () {
          return p;
        },
        f: function () {
          return y;
        },
        g: function () {
          return u;
        },
        h: function () {
          return b;
        },
        j: function () {
          return a;
        },
        k: function () {
          return S;
        },
        n: function () {
          return n;
        },
        p: function () {
          return w;
        },
        q: function () {
          return g;
        },
        r: function () {
          return v;
        },
        s: function () {
          return d;
        },
        t: function () {
          return c;
        },
        u: function () {
          return f;
        },
        v: function () {
          return h;
        },
        w: function () {
          return function e() {
            let t = Object(arguments.length <= 0 ? void 0 : arguments[0]),
              i = ["__proto__", "constructor", "prototype"];
            for (let r = 1; r < arguments.length; r += 1) {
              let s = r < 0 || arguments.length <= r ? void 0 : arguments[r];
              if (
                null != s &&
                ("undefined" != typeof window && void 0 !== window.HTMLElement
                  ? !(s instanceof HTMLElement)
                  : !s || (1 !== s.nodeType && 11 !== s.nodeType))
              ) {
                let r = Object.keys(Object(s)).filter((e) => 0 > i.indexOf(e));
                for (let i = 0, n = r.length; i < n; i += 1) {
                  let n = r[i],
                    l = Object.getOwnPropertyDescriptor(s, n);
                  void 0 !== l &&
                    l.enumerable &&
                    (o(t[n]) && o(s[n])
                      ? s[n].__swiper__
                        ? (t[n] = s[n])
                        : e(t[n], s[n])
                      : !o(t[n]) && o(s[n])
                      ? ((t[n] = {}),
                        s[n].__swiper__ ? (t[n] = s[n]) : e(t[n], s[n]))
                      : (t[n] = s[n]));
                }
              }
            }
            return t;
          };
        },
        x: function () {
          return s;
        },
      });
      var r = i(3433);
      function s(e) {
        Object.keys(e).forEach((t) => {
          try {
            e[t] = null;
          } catch (e) {}
          try {
            delete e[t];
          } catch (e) {}
        });
      }
      function n(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function l() {
        return Date.now();
      }
      function a(e, t) {
        let i, s, n;
        void 0 === t && (t = "x");
        let l = (0, r.a)(),
          a = (function (e) {
            let t;
            let i = (0, r.a)();
            return (
              i.getComputedStyle && (t = i.getComputedStyle(e, null)),
              !t && e.currentStyle && (t = e.currentStyle),
              t || (t = e.style),
              t
            );
          })(e);
        return (
          l.WebKitCSSMatrix
            ? ((s = a.transform || a.webkitTransform).split(",").length > 6 &&
                (s = s
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (n = new l.WebKitCSSMatrix("none" === s ? "" : s)))
            : (i = (n =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (s = l.WebKitCSSMatrix
              ? n.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (s = l.WebKitCSSMatrix
              ? n.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          s || 0
        );
      }
      function o(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function d(e, t, i) {
        e.style.setProperty(t, i);
      }
      function c(e) {
        let t,
          { swiper: i, targetPosition: s, side: n } = e,
          l = (0, r.a)(),
          a = -i.translate,
          o = null,
          d = i.params.speed;
        (i.wrapperEl.style.scrollSnapType = "none"),
          l.cancelAnimationFrame(i.cssModeFrameID);
        let c = s > a ? "next" : "prev",
          u = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          p = () => {
            (t = new Date().getTime()), null === o && (o = t);
            let e =
              a +
              (0.5 -
                Math.cos(Math.max(Math.min((t - o) / d, 1), 0) * Math.PI) / 2) *
                (s - a);
            if (
              (u(e, s) && (e = s), i.wrapperEl.scrollTo({ [n]: e }), u(e, s))
            ) {
              (i.wrapperEl.style.overflow = "hidden"),
                (i.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (i.wrapperEl.style.overflow = ""),
                    i.wrapperEl.scrollTo({ [n]: e });
                }),
                l.cancelAnimationFrame(i.cssModeFrameID);
              return;
            }
            i.cssModeFrameID = l.requestAnimationFrame(p);
          };
        p();
      }
      function u(e) {
        return (
          e.querySelector(".swiper-slide-transform") ||
          (e.shadowRoot &&
            e.shadowRoot.querySelector(".swiper-slide-transform")) ||
          e
        );
      }
      function p(e, t) {
        void 0 === t && (t = "");
        let i = [...e.children];
        return (e instanceof HTMLSlotElement && i.push(...e.assignedElements()),
        t)
          ? i.filter((e) => e.matches(t))
          : i;
      }
      function h(e, t) {
        let i = t.contains(e);
        return !i && t instanceof HTMLSlotElement
          ? [...t.assignedElements()].includes(e)
          : i;
      }
      function f(e) {
        try {
          console.warn(e);
          return;
        } catch (e) {}
      }
      function m(e, t) {
        var i;
        void 0 === t && (t = []);
        let r = document.createElement(e);
        return (
          r.classList.add(
            ...(Array.isArray(t)
              ? t
              : (void 0 === (i = t) && (i = ""),
                i
                  .trim()
                  .split(" ")
                  .filter((e) => !!e.trim())))
          ),
          r
        );
      }
      function v(e, t) {
        let i = [];
        for (; e.previousElementSibling; ) {
          let r = e.previousElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function g(e, t) {
        let i = [];
        for (; e.nextElementSibling; ) {
          let r = e.nextElementSibling;
          t ? r.matches(t) && i.push(r) : i.push(r), (e = r);
        }
        return i;
      }
      function w(e, t) {
        return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t);
      }
      function b(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); )
            1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function E(e, t) {
        let i = [],
          r = e.parentElement;
        for (; r; )
          t ? r.matches(t) && i.push(r) : i.push(r), (r = r.parentElement);
        return i;
      }
      function S(e, t) {
        t &&
          e.addEventListener("transitionend", function i(r) {
            r.target === e &&
              (t.call(e, r), e.removeEventListener("transitionend", i));
          });
      }
      function y(e, t, i) {
        let s = (0, r.a)();
        return i
          ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-right" : "margin-top"
                  )
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue(
                    "width" === t ? "margin-left" : "margin-bottom"
                  )
              )
          : e.offsetWidth;
      }
    },
    2261: function (e, t, i) {
      "use strict";
      let r, s, n;
      i.d(t, {
        tq: function () {
          return W;
        },
        o5: function () {
          return q;
        },
      });
      var l = i(7294),
        a = i(3433),
        o = i(7185);
      function d() {
        return (
          r ||
            (r = (function () {
              let e = (0, a.a)(),
                t = (0, a.g)();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
              };
            })()),
          r
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          s ||
            (s = (function (e) {
              let { userAgent: t } = void 0 === e ? {} : e,
                i = d(),
                r = (0, a.a)(),
                s = r.navigator.platform,
                n = t || r.navigator.userAgent,
                l = { ios: !1, android: !1 },
                o = r.screen.width,
                c = r.screen.height,
                u = n.match(/(Android);?[\s\/]+([\d.]+)?/),
                p = n.match(/(iPad).*OS\s([\d_]+)/),
                h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                f = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                m = "MacIntel" === s;
              return (
                !p &&
                  m &&
                  i.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${o}x${c}`) >= 0 &&
                  ((p = n.match(/(Version)\/([\d.]+)/)) ||
                    (p = [0, 1, "13_0_0"]),
                  (m = !1)),
                u && "Win32" !== s && ((l.os = "android"), (l.android = !0)),
                (p || f || h) && ((l.os = "ios"), (l.ios = !0)),
                l
              );
            })(e)),
          s
        );
      }
      let u = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        p = (e, t, i) => {
          t && !e.classList.contains(i)
            ? e.classList.add(i)
            : !t && e.classList.contains(i) && e.classList.remove(i);
        },
        h = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          let i = t.closest(
            e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
          );
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(
                    `.${e.params.lazyPreloaderClass}`
                  ))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      (t = i.shadowRoot.querySelector(
                        `.${e.params.lazyPreloaderClass}`
                      )) &&
                      t.remove();
                  })),
              t && t.remove();
          }
        },
        f = (e, t) => {
          if (!e.slides[t]) return;
          let i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute("loading");
        },
        m = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext,
            i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          let r =
              "auto" === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            s = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            let i = [s - t];
            i.push(...Array.from({ length: t }).map((e, t) => s + r + t)),
              e.slides.forEach((t, r) => {
                i.includes(t.column) && f(e, r);
              });
            return;
          }
          let n = s + r - 1;
          if (e.params.rewind || e.params.loop)
            for (let r = s - t; r <= n + t; r += 1) {
              let t = ((r % i) + i) % i;
              (t < s || t > n) && f(e, t);
            }
          else
            for (
              let r = Math.max(s - t, 0);
              r <= Math.min(n + t, i - 1);
              r += 1
            )
              r !== s && (r > n || r < s) && f(e, r);
        };
      function v(e) {
        let { swiper: t, runCallbacks: i, direction: r, step: s } = e,
          { activeIndex: n, previousIndex: l } = t,
          a = r;
        if (
          (a || (a = n > l ? "next" : n < l ? "prev" : "reset"),
          t.emit(`transition${s}`),
          i && n !== l)
        ) {
          if ("reset" === a) {
            t.emit(`slideResetTransition${s}`);
            return;
          }
          t.emit(`slideChangeTransition${s}`),
            "next" === a
              ? t.emit(`slideNextTransition${s}`)
              : t.emit(`slidePrevTransition${s}`);
        }
      }
      function g(e, t, i) {
        let r = (0, a.a)(),
          { params: s } = e,
          n = s.edgeSwipeDetection,
          l = s.edgeSwipeThreshold;
        return (
          !n ||
          (!(i <= l) && !(i >= r.innerWidth - l)) ||
          ("prevent" === n && (t.preventDefault(), !0))
        );
      }
      function w(e) {
        let t = (0, a.g)(),
          i = e;
        i.originalEvent && (i = i.originalEvent);
        let r = this.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== r.pointerId && r.pointerId !== i.pointerId) return;
          r.pointerId = i.pointerId;
        } else
          "touchstart" === i.type &&
            1 === i.targetTouches.length &&
            (r.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) {
          g(this, i, i.targetTouches[0].pageX);
          return;
        }
        let { params: s, touches: n, enabled: l } = this;
        if (
          !l ||
          (!s.simulateTouch && "mouse" === i.pointerType) ||
          (this.animating && s.preventInteractionOnTransition)
        )
          return;
        !this.animating && s.cssMode && s.loop && this.loopFix();
        let d = i.target;
        if (
          ("wrapper" === s.touchEventsTarget && !(0, o.v)(d, this.wrapperEl)) ||
          ("which" in i && 3 === i.which) ||
          ("button" in i && i.button > 0) ||
          (r.isTouched && r.isMoved)
        )
          return;
        let c = !!s.noSwipingClass && "" !== s.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        c && i.target && i.target.shadowRoot && u && (d = u[0]);
        let p = s.noSwipingSelector
            ? s.noSwipingSelector
            : `.${s.noSwipingClass}`,
          h = !!(i.target && i.target.shadowRoot);
        if (
          s.noSwiping &&
          (h
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === (0, a.g)() || i === (0, a.a)()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let r = i.closest(e);
                    return r || i.getRootNode
                      ? r || t(i.getRootNode().host)
                      : null;
                  })(t)
                );
              })(p, d)
            : d.closest(p))
        ) {
          this.allowClick = !0;
          return;
        }
        if (s.swipeHandler && !d.closest(s.swipeHandler)) return;
        (n.currentX = i.pageX), (n.currentY = i.pageY);
        let f = n.currentX,
          m = n.currentY;
        if (!g(this, i, f)) return;
        Object.assign(r, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = m),
          (r.touchStartTime = (0, o.d)()),
          (this.allowClick = !0),
          this.updateSize(),
          (this.swipeDirection = void 0),
          s.threshold > 0 && (r.allowThresholdMove = !1);
        let v = !0;
        d.matches(r.focusableElements) &&
          ((v = !1), "SELECT" === d.nodeName && (r.isTouched = !1)),
          t.activeElement &&
            t.activeElement.matches(r.focusableElements) &&
            t.activeElement !== d &&
            t.activeElement.blur();
        let w = v && this.allowTouchMove && s.touchStartPreventDefault;
        (s.touchStartForcePreventDefault || w) &&
          !d.isContentEditable &&
          i.preventDefault(),
          s.freeMode &&
            s.freeMode.enabled &&
            this.freeMode &&
            this.animating &&
            !s.cssMode &&
            this.freeMode.onTouchStart(),
          this.emit("touchStart", i);
      }
      function b(e) {
        let t, i;
        let r = (0, a.g)(),
          s = this.touchEventsData,
          { params: n, touches: l, rtlTranslate: d, enabled: c } = this;
        if (!c || (!n.simulateTouch && "mouse" === e.pointerType)) return;
        let u = e;
        if (
          (u.originalEvent && (u = u.originalEvent),
          "pointermove" === u.type &&
            (null !== s.touchId || u.pointerId !== s.pointerId))
        )
          return;
        if ("touchmove" === u.type) {
          if (
            !(t = [...u.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else t = u;
        if (!s.isTouched) {
          s.startMoving && s.isScrolling && this.emit("touchMoveOpposite", u);
          return;
        }
        let p = t.pageX,
          h = t.pageY;
        if (u.preventedByNestedSwiper) {
          (l.startX = p), (l.startY = h);
          return;
        }
        if (!this.allowTouchMove) {
          u.target.matches(s.focusableElements) || (this.allowClick = !1),
            s.isTouched &&
              (Object.assign(l, {
                startX: p,
                startY: h,
                currentX: p,
                currentY: h,
              }),
              (s.touchStartTime = (0, o.d)()));
          return;
        }
        if (n.touchReleaseOnEdges && !n.loop) {
          if (this.isVertical()) {
            if (
              (h < l.startY && this.translate <= this.maxTranslate()) ||
              (h > l.startY && this.translate >= this.minTranslate())
            ) {
              (s.isTouched = !1), (s.isMoved = !1);
              return;
            }
          } else if (
            (p < l.startX && this.translate <= this.maxTranslate()) ||
            (p > l.startX && this.translate >= this.minTranslate())
          )
            return;
        }
        if (
          r.activeElement &&
          u.target === r.activeElement &&
          u.target.matches(s.focusableElements)
        ) {
          (s.isMoved = !0), (this.allowClick = !1);
          return;
        }
        s.allowTouchCallbacks && this.emit("touchMove", u),
          (l.previousX = l.currentX),
          (l.previousY = l.currentY),
          (l.currentX = p),
          (l.currentY = h);
        let f = l.currentX - l.startX,
          m = l.currentY - l.startY;
        if (
          this.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < this.params.threshold
        )
          return;
        if (void 0 === s.isScrolling) {
          let e;
          (this.isHorizontal() && l.currentY === l.startY) ||
          (this.isVertical() && l.currentX === l.startX)
            ? (s.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (s.isScrolling = this.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (s.isScrolling && this.emit("touchMoveOpposite", u),
          void 0 === s.startMoving &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (s.startMoving = !0),
          s.isScrolling ||
            ("touchmove" === u.type && s.preventTouchMoveFromPointerMove))
        ) {
          s.isTouched = !1;
          return;
        }
        if (!s.startMoving) return;
        (this.allowClick = !1),
          !n.cssMode && u.cancelable && u.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && u.stopPropagation();
        let v = this.isHorizontal() ? f : m,
          g = this.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY;
        n.oneWayMovement &&
          ((v = Math.abs(v) * (d ? 1 : -1)), (g = Math.abs(g) * (d ? 1 : -1))),
          (l.diff = v),
          (v *= n.touchRatio),
          d && ((v = -v), (g = -g));
        let w = this.touchesDirection;
        (this.swipeDirection = v > 0 ? "prev" : "next"),
          (this.touchesDirection = g > 0 ? "prev" : "next");
        let b = this.params.loop && !n.cssMode,
          E =
            ("next" === this.touchesDirection && this.allowSlideNext) ||
            ("prev" === this.touchesDirection && this.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (b && E && this.loopFix({ direction: this.swipeDirection }),
            (s.startTranslate = this.getTranslate()),
            this.setTransition(0),
            this.animating)
          ) {
            let e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
              detail: { bySwiperTouchMove: !0 },
            });
            this.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            n.grabCursor &&
              (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) &&
              this.setGrabCursor(!0),
            this.emit("sliderFirstMove", u);
        }
        if (
          (new Date().getTime(),
          s.isMoved &&
            s.allowThresholdMove &&
            w !== this.touchesDirection &&
            b &&
            E &&
            Math.abs(v) >= 1)
        ) {
          Object.assign(l, {
            startX: p,
            startY: h,
            currentX: p,
            currentY: h,
            startTranslate: s.currentTranslate,
          }),
            (s.loopSwapReset = !0),
            (s.startTranslate = s.currentTranslate);
          return;
        }
        this.emit("sliderMove", u),
          (s.isMoved = !0),
          (s.currentTranslate = v + s.startTranslate);
        let S = !0,
          y = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (y = 0),
          v > 0
            ? (b &&
                E &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate >
                  (n.centeredSlides
                    ? this.minTranslate() -
                      this.slidesSizesGrid[this.activeIndex + 1] -
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[this.activeIndex + 1] +
                          this.params.spaceBetween
                        : 0) -
                      this.params.spaceBetween
                    : this.minTranslate()) &&
                this.loopFix({
                  direction: "prev",
                  setTranslate: !0,
                  activeSlideIndex: 0,
                }),
              s.currentTranslate > this.minTranslate() &&
                ((S = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.minTranslate() -
                    1 +
                    (-this.minTranslate() + s.startTranslate + v) ** y)))
            : v < 0 &&
              (b &&
                E &&
                !i &&
                s.allowThresholdMove &&
                s.currentTranslate <
                  (n.centeredSlides
                    ? this.maxTranslate() +
                      this.slidesSizesGrid[this.slidesSizesGrid.length - 1] +
                      this.params.spaceBetween +
                      ("auto" !== n.slidesPerView &&
                      this.slides.length - n.slidesPerView >= 2
                        ? this.slidesSizesGrid[
                            this.slidesSizesGrid.length - 1
                          ] + this.params.spaceBetween
                        : 0)
                    : this.maxTranslate()) &&
                this.loopFix({
                  direction: "next",
                  setTranslate: !0,
                  activeSlideIndex:
                    this.slides.length -
                    ("auto" === n.slidesPerView
                      ? this.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(n.slidesPerView, 10))),
                }),
              s.currentTranslate < this.maxTranslate() &&
                ((S = !1),
                n.resistance &&
                  (s.currentTranslate =
                    this.maxTranslate() +
                    1 -
                    (this.maxTranslate() - s.startTranslate - v) ** y))),
          S && (u.preventedByNestedSwiper = !0),
          !this.allowSlideNext &&
            "next" === this.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !this.allowSlidePrev &&
            "prev" === this.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          this.allowSlidePrev ||
            this.allowSlideNext ||
            (s.currentTranslate = s.startTranslate),
          n.threshold > 0)
        ) {
          if (Math.abs(v) > n.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
              (s.allowThresholdMove = !0),
                (l.startX = l.currentX),
                (l.startY = l.currentY),
                (s.currentTranslate = s.startTranslate),
                (l.diff = this.isHorizontal()
                  ? l.currentX - l.startX
                  : l.currentY - l.startY);
              return;
            }
          } else {
            s.currentTranslate = s.startTranslate;
            return;
          }
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && this.freeMode) ||
            n.watchSlidesProgress) &&
            (this.updateActiveIndex(), this.updateSlidesClasses()),
          n.freeMode &&
            n.freeMode.enabled &&
            this.freeMode &&
            this.freeMode.onTouchMove(),
          this.updateProgress(s.currentTranslate),
          this.setTranslate(s.currentTranslate));
      }
      function E(e) {
        let t, i;
        let r = this,
          s = r.touchEventsData,
          n = e;
        if (
          (n.originalEvent && (n = n.originalEvent),
          "touchend" === n.type || "touchcancel" === n.type)
        ) {
          if (
            !(t = [...n.changedTouches].filter(
              (e) => e.identifier === s.touchId
            )[0]) ||
            t.identifier !== s.touchId
          )
            return;
        } else {
          if (null !== s.touchId || n.pointerId !== s.pointerId) return;
          t = n;
        }
        if (
          [
            "pointercancel",
            "pointerout",
            "pointerleave",
            "contextmenu",
          ].includes(n.type) &&
          !(
            ["pointercancel", "contextmenu"].includes(n.type) &&
            (r.browser.isSafari || r.browser.isWebView)
          )
        )
          return;
        (s.pointerId = null), (s.touchId = null);
        let {
          params: l,
          touches: a,
          rtlTranslate: d,
          slidesGrid: c,
          enabled: u,
        } = r;
        if (!u || (!l.simulateTouch && "mouse" === n.pointerType)) return;
        if (
          (s.allowTouchCallbacks && r.emit("touchEnd", n),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        ) {
          s.isMoved && l.grabCursor && r.setGrabCursor(!1),
            (s.isMoved = !1),
            (s.startMoving = !1);
          return;
        }
        l.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === r.allowSlideNext || !0 === r.allowSlidePrev) &&
          r.setGrabCursor(!1);
        let p = (0, o.d)(),
          h = p - s.touchStartTime;
        if (r.allowClick) {
          let e = n.path || (n.composedPath && n.composedPath());
          r.updateClickedSlide((e && e[0]) || n.target, e),
            r.emit("tap click", n),
            h < 300 &&
              p - s.lastClickTime < 300 &&
              r.emit("doubleTap doubleClick", n);
        }
        if (
          ((s.lastClickTime = (0, o.d)()),
          (0, o.n)(() => {
            r.destroyed || (r.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !r.swipeDirection ||
            (0 === a.diff && !s.loopSwapReset) ||
            (s.currentTranslate === s.startTranslate && !s.loopSwapReset))
        ) {
          (s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1);
          return;
        }
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (i = l.followFinger
            ? d
              ? r.translate
              : -r.translate
            : -s.currentTranslate),
          l.cssMode)
        )
          return;
        if (l.freeMode && l.freeMode.enabled) {
          r.freeMode.onTouchEnd({ currentPos: i });
          return;
        }
        let f = i >= -r.maxTranslate() && !r.params.loop,
          m = 0,
          v = r.slidesSizesGrid[0];
        for (
          let e = 0;
          e < c.length;
          e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup
        ) {
          let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
          void 0 !== c[e + t]
            ? (f || (i >= c[e] && i < c[e + t])) &&
              ((m = e), (v = c[e + t] - c[e]))
            : (f || i >= c[e]) &&
              ((m = e), (v = c[c.length - 1] - c[c.length - 2]));
        }
        let g = null,
          w = null;
        l.rewind &&
          (r.isBeginning
            ? (w =
                l.virtual && l.virtual.enabled && r.virtual
                  ? r.virtual.slides.length - 1
                  : r.slides.length - 1)
            : r.isEnd && (g = 0));
        let b = (i - c[m]) / v,
          E = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (h > l.longSwipesMs) {
          if (!l.longSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          "next" === r.swipeDirection &&
            (b >= l.longSwipesRatio
              ? r.slideTo(l.rewind && r.isEnd ? g : m + E)
              : r.slideTo(m)),
            "prev" === r.swipeDirection &&
              (b > 1 - l.longSwipesRatio
                ? r.slideTo(m + E)
                : null !== w && b < 0 && Math.abs(b) > l.longSwipesRatio
                ? r.slideTo(w)
                : r.slideTo(m));
        } else {
          if (!l.shortSwipes) {
            r.slideTo(r.activeIndex);
            return;
          }
          r.navigation &&
          (n.target === r.navigation.nextEl || n.target === r.navigation.prevEl)
            ? n.target === r.navigation.nextEl
              ? r.slideTo(m + E)
              : r.slideTo(m)
            : ("next" === r.swipeDirection && r.slideTo(null !== g ? g : m + E),
              "prev" === r.swipeDirection && r.slideTo(null !== w ? w : m));
        }
      }
      function S() {
        let e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let { allowSlideNext: r, allowSlidePrev: s, snapGrid: n } = e,
          l = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        let a = l && t.loop;
        ("auto" !== t.slidesPerView && !(t.slidesPerView > 1)) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        a
          ? e.params.loop && !l
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay &&
                e.autoplay.running &&
                e.autoplay.paused &&
                e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = r),
          e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
      }
      function y(e) {
        this.enabled &&
          !this.allowClick &&
          (this.params.preventClicks && e.preventDefault(),
          this.params.preventClicksPropagation &&
            this.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation()));
      }
      function T() {
        let { wrapperEl: e, rtlTranslate: t, enabled: i } = this;
        if (!i) return;
        (this.previousTranslate = this.translate),
          this.isHorizontal()
            ? (this.translate = -e.scrollLeft)
            : (this.translate = -e.scrollTop),
          0 === this.translate && (this.translate = 0),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
        let r = this.maxTranslate() - this.minTranslate();
        (0 === r ? 0 : (this.translate - this.minTranslate()) / r) !==
          this.progress &&
          this.updateProgress(t ? -this.translate : this.translate),
          this.emit("setTranslate", this.translate, !1);
      }
      function x(e) {
        h(this, e.target),
          !this.params.cssMode &&
            ("auto" === this.params.slidesPerView || this.params.autoHeight) &&
            this.update();
      }
      function C() {
        !this.documentTouchHandlerProceeded &&
          ((this.documentTouchHandlerProceeded = !0),
          this.params.touchReleaseOnEdges &&
            (this.el.style.touchAction = "auto"));
      }
      let M = (e, t) => {
          let i = (0, a.g)(),
            { params: r, el: s, wrapperEl: n, device: l } = e,
            o = !!r.nested,
            d = "on" === t ? "addEventListener" : "removeEventListener";
          s &&
            "string" != typeof s &&
            (i[d]("touchstart", e.onDocumentTouchStart, {
              passive: !1,
              capture: o,
            }),
            s[d]("touchstart", e.onTouchStart, { passive: !1 }),
            s[d]("pointerdown", e.onTouchStart, { passive: !1 }),
            i[d]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
            i[d]("touchend", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerup", e.onTouchEnd, { passive: !0 }),
            i[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
            i[d]("touchcancel", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerout", e.onTouchEnd, { passive: !0 }),
            i[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
            i[d]("contextmenu", e.onTouchEnd, { passive: !0 }),
            (r.preventClicks || r.preventClicksPropagation) &&
              s[d]("click", e.onClick, !0),
            r.cssMode && n[d]("scroll", e.onScroll),
            r.updateOnWindowResize
              ? e[t](
                  l.ios || l.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  S,
                  !0
                )
              : e[t]("observerUpdate", S, !0),
            s[d]("load", e.onLoad, { capture: !0 }));
        },
        O = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var P = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      let k = {
          eventsEmitter: {
            on(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              let s = i ? "unshift" : "push";
              return (
                e.split(" ").forEach((e) => {
                  r.eventsListeners[e] || (r.eventsListeners[e] = []),
                    r.eventsListeners[e][s](t);
                }),
                r
              );
            },
            once(e, t, i) {
              let r = this;
              if (!r.eventsListeners || r.destroyed || "function" != typeof t)
                return r;
              function s() {
                r.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                for (var i = arguments.length, n = Array(i), l = 0; l < i; l++)
                  n[l] = arguments[l];
                t.apply(r, n);
              }
              return (s.__emitterProxy = t), r.on(e, s, i);
            },
            onAny(e, t) {
              return (
                !this.eventsListeners ||
                  this.destroyed ||
                  "function" != typeof e ||
                  (0 > this.eventsAnyListeners.indexOf(e) &&
                    this.eventsAnyListeners[t ? "unshift" : "push"](e)),
                this
              );
            },
            offAny(e) {
              if (
                !this.eventsListeners ||
                this.destroyed ||
                !this.eventsAnyListeners
              )
                return this;
              let t = this.eventsAnyListeners.indexOf(e);
              return t >= 0 && this.eventsAnyListeners.splice(t, 1), this;
            },
            off(e, t) {
              let i = this;
              return (
                i.eventsListeners &&
                  !i.destroyed &&
                  i.eventsListeners &&
                  e.split(" ").forEach((e) => {
                    void 0 === t
                      ? (i.eventsListeners[e] = [])
                      : i.eventsListeners[e] &&
                        i.eventsListeners[e].forEach((r, s) => {
                          (r === t ||
                            (r.__emitterProxy && r.__emitterProxy === t)) &&
                            i.eventsListeners[e].splice(s, 1);
                        });
                  }),
                i
              );
            },
            emit() {
              let e, t, i;
              let r = this;
              if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                return r;
              for (var s = arguments.length, n = Array(s), l = 0; l < s; l++)
                n[l] = arguments[l];
              return (
                "string" == typeof n[0] || Array.isArray(n[0])
                  ? ((e = n[0]), (t = n.slice(1, n.length)), (i = r))
                  : ((e = n[0].events),
                    (t = n[0].data),
                    (i = n[0].context || r)),
                t.unshift(i),
                (Array.isArray(e) ? e : e.split(" ")).forEach((e) => {
                  r.eventsAnyListeners &&
                    r.eventsAnyListeners.length &&
                    r.eventsAnyListeners.forEach((r) => {
                      r.apply(i, [e, ...t]);
                    }),
                    r.eventsListeners &&
                      r.eventsListeners[e] &&
                      r.eventsListeners[e].forEach((e) => {
                        e.apply(i, t);
                      });
                }),
                r
              );
            },
          },
          update: {
            updateSize: function () {
              let e, t;
              let i = this.el;
              (e =
                void 0 !== this.params.width && null !== this.params.width
                  ? this.params.width
                  : i.clientWidth),
                (t =
                  void 0 !== this.params.height && null !== this.params.height
                    ? this.params.height
                    : i.clientHeight),
                (0 === e && this.isHorizontal()) ||
                  (0 === t && this.isVertical()) ||
                  ((e =
                    e -
                    parseInt((0, o.p)(i, "padding-left") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-right") || 0, 10)),
                  (t =
                    t -
                    parseInt((0, o.p)(i, "padding-top") || 0, 10) -
                    parseInt((0, o.p)(i, "padding-bottom") || 0, 10)),
                  Number.isNaN(e) && (e = 0),
                  Number.isNaN(t) && (t = 0),
                  Object.assign(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t,
                  }));
            },
            updateSlides: function () {
              let e;
              let t = this;
              function i(e, i) {
                return parseFloat(
                  e.getPropertyValue(t.getDirectionLabel(i)) || 0
                );
              }
              let r = t.params,
                {
                  wrapperEl: s,
                  slidesEl: n,
                  size: l,
                  rtlTranslate: a,
                  wrongRTL: d,
                } = t,
                c = t.virtual && r.virtual.enabled,
                u = c ? t.virtual.slides.length : t.slides.length,
                p = (0, o.e)(n, `.${t.params.slideClass}, swiper-slide`),
                h = c ? t.virtual.slides.length : p.length,
                f = [],
                m = [],
                v = [],
                g = r.slidesOffsetBefore;
              "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
              let w = r.slidesOffsetAfter;
              "function" == typeof w && (w = r.slidesOffsetAfter.call(t));
              let b = t.snapGrid.length,
                E = t.slidesGrid.length,
                S = r.spaceBetween,
                y = -g,
                T = 0,
                x = 0;
              if (void 0 === l) return;
              "string" == typeof S && S.indexOf("%") >= 0
                ? (S = (parseFloat(S.replace("%", "")) / 100) * l)
                : "string" == typeof S && (S = parseFloat(S)),
                (t.virtualSize = -S),
                p.forEach((e) => {
                  a ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
                    (e.style.marginBottom = ""),
                    (e.style.marginTop = "");
                }),
                r.centeredSlides &&
                  r.cssMode &&
                  ((0, o.s)(s, "--swiper-centered-offset-before", ""),
                  (0, o.s)(s, "--swiper-centered-offset-after", ""));
              let C = r.grid && r.grid.rows > 1 && t.grid;
              C ? t.grid.initSlides(p) : t.grid && t.grid.unsetSlides();
              let M =
                "auto" === r.slidesPerView &&
                r.breakpoints &&
                Object.keys(r.breakpoints).filter(
                  (e) => void 0 !== r.breakpoints[e].slidesPerView
                ).length > 0;
              for (let s = 0; s < h; s += 1) {
                let n;
                if (
                  ((e = 0),
                  p[s] && (n = p[s]),
                  C && t.grid.updateSlide(s, n, p),
                  !p[s] || "none" !== (0, o.p)(n, "display"))
                ) {
                  if ("auto" === r.slidesPerView) {
                    M && (p[s].style[t.getDirectionLabel("width")] = "");
                    let l = getComputedStyle(n),
                      a = n.style.transform,
                      d = n.style.webkitTransform;
                    if (
                      (a && (n.style.transform = "none"),
                      d && (n.style.webkitTransform = "none"),
                      r.roundLengths)
                    )
                      e = t.isHorizontal()
                        ? (0, o.f)(n, "width", !0)
                        : (0, o.f)(n, "height", !0);
                    else {
                      let t = i(l, "width"),
                        r = i(l, "padding-left"),
                        s = i(l, "padding-right"),
                        a = i(l, "margin-left"),
                        o = i(l, "margin-right"),
                        d = l.getPropertyValue("box-sizing");
                      if (d && "border-box" === d) e = t + a + o;
                      else {
                        let { clientWidth: i, offsetWidth: l } = n;
                        e = t + r + s + a + o + (l - i);
                      }
                    }
                    a && (n.style.transform = a),
                      d && (n.style.webkitTransform = d),
                      r.roundLengths && (e = Math.floor(e));
                  } else
                    (e = (l - (r.slidesPerView - 1) * S) / r.slidesPerView),
                      r.roundLengths && (e = Math.floor(e)),
                      p[s] &&
                        (p[s].style[t.getDirectionLabel("width")] = `${e}px`);
                  p[s] && (p[s].swiperSlideSize = e),
                    v.push(e),
                    r.centeredSlides
                      ? ((y = y + e / 2 + T / 2 + S),
                        0 === T && 0 !== s && (y = y - l / 2 - S),
                        0 === s && (y = y - l / 2 - S),
                        0.001 > Math.abs(y) && (y = 0),
                        r.roundLengths && (y = Math.floor(y)),
                        x % r.slidesPerGroup == 0 && f.push(y),
                        m.push(y))
                      : (r.roundLengths && (y = Math.floor(y)),
                        (x - Math.min(t.params.slidesPerGroupSkip, x)) %
                          t.params.slidesPerGroup ==
                          0 && f.push(y),
                        m.push(y),
                        (y = y + e + S)),
                    (t.virtualSize += e + S),
                    (T = e),
                    (x += 1);
                }
              }
              if (
                ((t.virtualSize = Math.max(t.virtualSize, l) + w),
                a &&
                  d &&
                  ("slide" === r.effect || "coverflow" === r.effect) &&
                  (s.style.width = `${t.virtualSize + S}px`),
                r.setWrapperSize &&
                  (s.style[t.getDirectionLabel("width")] = `${
                    t.virtualSize + S
                  }px`),
                C && t.grid.updateWrapperSize(e, f),
                !r.centeredSlides)
              ) {
                let e = [];
                for (let i = 0; i < f.length; i += 1) {
                  let s = f[i];
                  r.roundLengths && (s = Math.floor(s)),
                    f[i] <= t.virtualSize - l && e.push(s);
                }
                (f = e),
                  Math.floor(t.virtualSize - l) - Math.floor(f[f.length - 1]) >
                    1 && f.push(t.virtualSize - l);
              }
              if (c && r.loop) {
                let e = v[0] + S;
                if (r.slidesPerGroup > 1) {
                  let i = Math.ceil(
                      (t.virtual.slidesBefore + t.virtual.slidesAfter) /
                        r.slidesPerGroup
                    ),
                    s = e * r.slidesPerGroup;
                  for (let e = 0; e < i; e += 1) f.push(f[f.length - 1] + s);
                }
                for (
                  let i = 0;
                  i < t.virtual.slidesBefore + t.virtual.slidesAfter;
                  i += 1
                )
                  1 === r.slidesPerGroup && f.push(f[f.length - 1] + e),
                    m.push(m[m.length - 1] + e),
                    (t.virtualSize += e);
              }
              if ((0 === f.length && (f = [0]), 0 !== S)) {
                let e =
                  t.isHorizontal() && a
                    ? "marginLeft"
                    : t.getDirectionLabel("marginRight");
                p.filter(
                  (e, t) => !r.cssMode || !!r.loop || t !== p.length - 1
                ).forEach((t) => {
                  t.style[e] = `${S}px`;
                });
              }
              if (r.centeredSlides && r.centeredSlidesBounds) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (S || 0);
                });
                let t = (e -= S) - l;
                f = f.map((e) => (e <= 0 ? -g : e > t ? t + w : e));
              }
              if (r.centerInsufficientSlides) {
                let e = 0;
                v.forEach((t) => {
                  e += t + (S || 0);
                }),
                  (e -= S);
                let t =
                  (r.slidesOffsetBefore || 0) + (r.slidesOffsetAfter || 0);
                if (e + t < l) {
                  let i = (l - e - t) / 2;
                  f.forEach((e, t) => {
                    f[t] = e - i;
                  }),
                    m.forEach((e, t) => {
                      m[t] = e + i;
                    });
                }
              }
              if (
                (Object.assign(t, {
                  slides: p,
                  snapGrid: f,
                  slidesGrid: m,
                  slidesSizesGrid: v,
                }),
                r.centeredSlides && r.cssMode && !r.centeredSlidesBounds)
              ) {
                (0, o.s)(s, "--swiper-centered-offset-before", `${-f[0]}px`),
                  (0, o.s)(
                    s,
                    "--swiper-centered-offset-after",
                    `${t.size / 2 - v[v.length - 1] / 2}px`
                  );
                let e = -t.snapGrid[0],
                  i = -t.slidesGrid[0];
                (t.snapGrid = t.snapGrid.map((t) => t + e)),
                  (t.slidesGrid = t.slidesGrid.map((e) => e + i));
              }
              if (
                (h !== u && t.emit("slidesLengthChange"),
                f.length !== b &&
                  (t.params.watchOverflow && t.checkOverflow(),
                  t.emit("snapGridLengthChange")),
                m.length !== E && t.emit("slidesGridLengthChange"),
                r.watchSlidesProgress && t.updateSlidesOffset(),
                t.emit("slidesUpdated"),
                !c &&
                  !r.cssMode &&
                  ("slide" === r.effect || "fade" === r.effect))
              ) {
                let e = `${r.containerModifierClass}backface-hidden`,
                  i = t.el.classList.contains(e);
                h <= r.maxBackfaceHiddenSlides
                  ? i || t.el.classList.add(e)
                  : i && t.el.classList.remove(e);
              }
            },
            updateAutoHeight: function (e) {
              let t;
              let i = this,
                r = [],
                s = i.virtual && i.params.virtual.enabled,
                n = 0;
              "number" == typeof e
                ? i.setTransition(e)
                : !0 === e && i.setTransition(i.params.speed);
              let l = (e) =>
                s ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
              if (
                "auto" !== i.params.slidesPerView &&
                i.params.slidesPerView > 1
              ) {
                if (i.params.centeredSlides)
                  (i.visibleSlides || []).forEach((e) => {
                    r.push(e);
                  });
                else
                  for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                    let e = i.activeIndex + t;
                    if (e > i.slides.length && !s) break;
                    r.push(l(e));
                  }
              } else r.push(l(i.activeIndex));
              for (t = 0; t < r.length; t += 1)
                if (void 0 !== r[t]) {
                  let e = r[t].offsetHeight;
                  n = e > n ? e : n;
                }
              (n || 0 === n) && (i.wrapperEl.style.height = `${n}px`);
            },
            updateSlidesOffset: function () {
              let e = this.slides,
                t = this.isElement
                  ? this.isHorizontal()
                    ? this.wrapperEl.offsetLeft
                    : this.wrapperEl.offsetTop
                  : 0;
              for (let i = 0; i < e.length; i += 1)
                e[i].swiperSlideOffset =
                  (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) -
                  t -
                  this.cssOverflowAdjustment();
            },
            updateSlidesProgress: function (e) {
              void 0 === e && (e = (this && this.translate) || 0);
              let t = this.params,
                { slides: i, rtlTranslate: r, snapGrid: s } = this;
              if (0 === i.length) return;
              void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
              let n = -e;
              r && (n = e),
                (this.visibleSlidesIndexes = []),
                (this.visibleSlides = []);
              let l = t.spaceBetween;
              "string" == typeof l && l.indexOf("%") >= 0
                ? (l = (parseFloat(l.replace("%", "")) / 100) * this.size)
                : "string" == typeof l && (l = parseFloat(l));
              for (let e = 0; e < i.length; e += 1) {
                let a = i[e],
                  o = a.swiperSlideOffset;
                t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                let d =
                    (n + (t.centeredSlides ? this.minTranslate() : 0) - o) /
                    (a.swiperSlideSize + l),
                  c =
                    (n -
                      s[0] +
                      (t.centeredSlides ? this.minTranslate() : 0) -
                      o) /
                    (a.swiperSlideSize + l),
                  p = -(n - o),
                  h = p + this.slidesSizesGrid[e],
                  f = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                  m =
                    (p >= 0 && p < this.size - 1) ||
                    (h > 1 && h <= this.size) ||
                    (p <= 0 && h >= this.size);
                m &&
                  (this.visibleSlides.push(a),
                  this.visibleSlidesIndexes.push(e)),
                  u(a, m, t.slideVisibleClass),
                  u(a, f, t.slideFullyVisibleClass),
                  (a.progress = r ? -d : d),
                  (a.originalProgress = r ? -c : c);
              }
            },
            updateProgress: function (e) {
              if (void 0 === e) {
                let t = this.rtlTranslate ? -1 : 1;
                e = (this && this.translate && this.translate * t) || 0;
              }
              let t = this.params,
                i = this.maxTranslate() - this.minTranslate(),
                {
                  progress: r,
                  isBeginning: s,
                  isEnd: n,
                  progressLoop: l,
                } = this,
                a = s,
                o = n;
              if (0 === i) (r = 0), (s = !0), (n = !0);
              else {
                r = (e - this.minTranslate()) / i;
                let t = 1 > Math.abs(e - this.minTranslate()),
                  l = 1 > Math.abs(e - this.maxTranslate());
                (s = t || r <= 0),
                  (n = l || r >= 1),
                  t && (r = 0),
                  l && (r = 1);
              }
              if (t.loop) {
                let t = this.getSlideIndexByData(0),
                  i = this.getSlideIndexByData(this.slides.length - 1),
                  r = this.slidesGrid[t],
                  s = this.slidesGrid[i],
                  n = this.slidesGrid[this.slidesGrid.length - 1],
                  a = Math.abs(e);
                (l = a >= r ? (a - r) / n : (a + n - s) / n) > 1 && (l -= 1);
              }
              Object.assign(this, {
                progress: r,
                progressLoop: l,
                isBeginning: s,
                isEnd: n,
              }),
                (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
                  this.updateSlidesProgress(e),
                s && !a && this.emit("reachBeginning toEdge"),
                n && !o && this.emit("reachEnd toEdge"),
                ((a && !s) || (o && !n)) && this.emit("fromEdge"),
                this.emit("progress", r);
            },
            updateSlidesClasses: function () {
              let e, t, i;
              let { slides: r, params: s, slidesEl: n, activeIndex: l } = this,
                a = this.virtual && s.virtual.enabled,
                d = this.grid && s.grid && s.grid.rows > 1,
                c = (e) =>
                  (0, o.e)(n, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
              if (a) {
                if (s.loop) {
                  let t = l - this.virtual.slidesBefore;
                  t < 0 && (t = this.virtual.slides.length + t),
                    t >= this.virtual.slides.length &&
                      (t -= this.virtual.slides.length),
                    (e = c(`[data-swiper-slide-index="${t}"]`));
                } else e = c(`[data-swiper-slide-index="${l}"]`);
              } else
                d
                  ? ((e = r.filter((e) => e.column === l)[0]),
                    (i = r.filter((e) => e.column === l + 1)[0]),
                    (t = r.filter((e) => e.column === l - 1)[0]))
                  : (e = r[l]);
              e &&
                !d &&
                ((i = (0, o.q)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop && !i && (i = r[0]),
                (t = (0, o.r)(e, `.${s.slideClass}, swiper-slide`)[0]),
                s.loop),
                r.forEach((r) => {
                  p(r, r === e, s.slideActiveClass),
                    p(r, r === i, s.slideNextClass),
                    p(r, r === t, s.slidePrevClass);
                }),
                this.emitSlidesClasses();
            },
            updateActiveIndex: function (e) {
              let t, i;
              let r = this,
                s = r.rtlTranslate ? r.translate : -r.translate,
                {
                  snapGrid: n,
                  params: l,
                  activeIndex: a,
                  realIndex: o,
                  snapIndex: d,
                } = r,
                c = e,
                u = (e) => {
                  let t = e - r.virtual.slidesBefore;
                  return (
                    t < 0 && (t = r.virtual.slides.length + t),
                    t >= r.virtual.slides.length &&
                      (t -= r.virtual.slides.length),
                    t
                  );
                };
              if (
                (void 0 === c &&
                  (c = (function (e) {
                    let t;
                    let { slidesGrid: i, params: r } = e,
                      s = e.rtlTranslate ? e.translate : -e.translate;
                    for (let e = 0; e < i.length; e += 1)
                      void 0 !== i[e + 1]
                        ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                          ? (t = e)
                          : s >= i[e] && s < i[e + 1] && (t = e + 1)
                        : s >= i[e] && (t = e);
                    return (
                      r.normalizeSlideIndex &&
                        (t < 0 || void 0 === t) &&
                        (t = 0),
                      t
                    );
                  })(r)),
                n.indexOf(s) >= 0)
              )
                t = n.indexOf(s);
              else {
                let e = Math.min(l.slidesPerGroupSkip, c);
                t = e + Math.floor((c - e) / l.slidesPerGroup);
              }
              if (
                (t >= n.length && (t = n.length - 1), c === a && !r.params.loop)
              ) {
                t !== d && ((r.snapIndex = t), r.emit("snapIndexChange"));
                return;
              }
              if (
                c === a &&
                r.params.loop &&
                r.virtual &&
                r.params.virtual.enabled
              ) {
                r.realIndex = u(c);
                return;
              }
              let p = r.grid && l.grid && l.grid.rows > 1;
              if (r.virtual && l.virtual.enabled && l.loop) i = u(c);
              else if (p) {
                let e = r.slides.filter((e) => e.column === c)[0],
                  t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                Number.isNaN(t) && (t = Math.max(r.slides.indexOf(e), 0)),
                  (i = Math.floor(t / l.grid.rows));
              } else if (r.slides[c]) {
                let e = r.slides[c].getAttribute("data-swiper-slide-index");
                i = e ? parseInt(e, 10) : c;
              } else i = c;
              Object.assign(r, {
                previousSnapIndex: d,
                snapIndex: t,
                previousRealIndex: o,
                realIndex: i,
                previousIndex: a,
                activeIndex: c,
              }),
                r.initialized && m(r),
                r.emit("activeIndexChange"),
                r.emit("snapIndexChange"),
                (r.initialized || r.params.runCallbacksOnInit) &&
                  (o !== i && r.emit("realIndexChange"), r.emit("slideChange"));
            },
            updateClickedSlide: function (e, t) {
              let i;
              let r = this.params,
                s = e.closest(`.${r.slideClass}, swiper-slide`);
              !s &&
                this.isElement &&
                t &&
                t.length > 1 &&
                t.includes(e) &&
                [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                  !s &&
                    e.matches &&
                    e.matches(`.${r.slideClass}, swiper-slide`) &&
                    (s = e);
                });
              let n = !1;
              if (s) {
                for (let e = 0; e < this.slides.length; e += 1)
                  if (this.slides[e] === s) {
                    (n = !0), (i = e);
                    break;
                  }
              }
              if (s && n)
                (this.clickedSlide = s),
                  this.virtual && this.params.virtual.enabled
                    ? (this.clickedIndex = parseInt(
                        s.getAttribute("data-swiper-slide-index"),
                        10
                      ))
                    : (this.clickedIndex = i);
              else {
                (this.clickedSlide = void 0), (this.clickedIndex = void 0);
                return;
              }
              r.slideToClickedSlide &&
                void 0 !== this.clickedIndex &&
                this.clickedIndex !== this.activeIndex &&
                this.slideToClickedSlide();
            },
          },
          translate: {
            getTranslate: function (e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              let {
                params: t,
                rtlTranslate: i,
                translate: r,
                wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return i ? -r : r;
              if (t.cssMode) return r;
              let n = (0, o.j)(s, e);
              return (n += this.cssOverflowAdjustment()), i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
              let {
                  rtlTranslate: i,
                  params: r,
                  wrapperEl: s,
                  progress: n,
                } = this,
                l = 0,
                a = 0;
              this.isHorizontal() ? (l = i ? -e : e) : (a = e),
                r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
                (this.previousTranslate = this.translate),
                (this.translate = this.isHorizontal() ? l : a),
                r.cssMode
                  ? (s[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      this.isHorizontal() ? -l : -a)
                  : r.virtualTranslate ||
                    (this.isHorizontal()
                      ? (l -= this.cssOverflowAdjustment())
                      : (a -= this.cssOverflowAdjustment()),
                    (s.style.transform = `translate3d(${l}px, ${a}px, 0px)`));
              let o = this.maxTranslate() - this.minTranslate();
              (0 === o ? 0 : (e - this.minTranslate()) / o) !== n &&
                this.updateProgress(e),
                this.emit("setTranslate", this.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === t && (t = this.params.speed),
                void 0 === i && (i = !0),
                void 0 === r && (r = !0);
              let l = this,
                { params: a, wrapperEl: d } = l;
              if (l.animating && a.preventInteractionOnTransition) return !1;
              let c = l.minTranslate(),
                u = l.maxTranslate();
              if (
                ((n = r && e > c ? c : r && e < u ? u : e),
                l.updateProgress(n),
                a.cssMode)
              ) {
                let e = l.isHorizontal();
                if (0 === t) d[e ? "scrollLeft" : "scrollTop"] = -n;
                else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: l,
                        targetPosition: -n,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  d.scrollTo({ [e ? "left" : "top"]: -n, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (l.setTransition(0),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, s),
                      l.emit("transitionEnd")))
                  : (l.setTransition(t),
                    l.setTranslate(n),
                    i &&
                      (l.emit("beforeTransitionStart", t, s),
                      l.emit("transitionStart")),
                    l.animating ||
                      ((l.animating = !0),
                      l.onTranslateToWrapperTransitionEnd ||
                        (l.onTranslateToWrapperTransitionEnd = function (e) {
                          l &&
                            !l.destroyed &&
                            e.target === this &&
                            (l.wrapperEl.removeEventListener(
                              "transitionend",
                              l.onTranslateToWrapperTransitionEnd
                            ),
                            (l.onTranslateToWrapperTransitionEnd = null),
                            delete l.onTranslateToWrapperTransitionEnd,
                            (l.animating = !1),
                            i && l.emit("transitionEnd"));
                        }),
                      l.wrapperEl.addEventListener(
                        "transitionend",
                        l.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              this.params.cssMode ||
                ((this.wrapperEl.style.transitionDuration = `${e}ms`),
                (this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : "")),
                this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              i.cssMode ||
                (i.autoHeight && this.updateAutoHeight(),
                v({
                  swiper: this,
                  runCallbacks: e,
                  direction: t,
                  step: "Start",
                }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              let { params: i } = this;
              (this.animating = !1),
                i.cssMode ||
                  (this.setTransition(0),
                  v({
                    swiper: this,
                    runCallbacks: e,
                    direction: t,
                    step: "End",
                  }));
            },
          },
          slide: {
            slideTo: function (e, t, i, r, s) {
              let n;
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let l = this,
                a = e;
              a < 0 && (a = 0);
              let {
                params: d,
                snapGrid: c,
                slidesGrid: u,
                previousIndex: p,
                activeIndex: h,
                rtlTranslate: f,
                wrapperEl: m,
                enabled: v,
              } = l;
              if (
                (!v && !r && !s) ||
                l.destroyed ||
                (l.animating && d.preventInteractionOnTransition)
              )
                return !1;
              void 0 === t && (t = l.params.speed);
              let g = Math.min(l.params.slidesPerGroupSkip, a),
                w = g + Math.floor((a - g) / l.params.slidesPerGroup);
              w >= c.length && (w = c.length - 1);
              let b = -c[w];
              if (d.normalizeSlideIndex)
                for (let e = 0; e < u.length; e += 1) {
                  let t = -Math.floor(100 * b),
                    i = Math.floor(100 * u[e]),
                    r = Math.floor(100 * u[e + 1]);
                  void 0 !== u[e + 1]
                    ? t >= i && t < r - (r - i) / 2
                      ? (a = e)
                      : t >= i && t < r && (a = e + 1)
                    : t >= i && (a = e);
                }
              if (
                l.initialized &&
                a !== h &&
                ((!l.allowSlideNext &&
                  (f
                    ? b > l.translate && b > l.minTranslate()
                    : b < l.translate && b < l.minTranslate())) ||
                  (!l.allowSlidePrev &&
                    b > l.translate &&
                    b > l.maxTranslate() &&
                    (h || 0) !== a))
              )
                return !1;
              if (
                (a !== (p || 0) && i && l.emit("beforeSlideChangeStart"),
                l.updateProgress(b),
                (n = a > h ? "next" : a < h ? "prev" : "reset"),
                (f && -b === l.translate) || (!f && b === l.translate))
              )
                return (
                  l.updateActiveIndex(a),
                  d.autoHeight && l.updateAutoHeight(),
                  l.updateSlidesClasses(),
                  "slide" !== d.effect && l.setTranslate(b),
                  "reset" !== n &&
                    (l.transitionStart(i, n), l.transitionEnd(i, n)),
                  !1
                );
              if (d.cssMode) {
                let e = l.isHorizontal(),
                  i = f ? b : -b;
                if (0 === t) {
                  let t = l.virtual && l.params.virtual.enabled;
                  t &&
                    ((l.wrapperEl.style.scrollSnapType = "none"),
                    (l._immediateVirtual = !0)),
                    t &&
                    !l._cssModeVirtualInitialSet &&
                    l.params.initialSlide > 0
                      ? ((l._cssModeVirtualInitialSet = !0),
                        requestAnimationFrame(() => {
                          m[e ? "scrollLeft" : "scrollTop"] = i;
                        }))
                      : (m[e ? "scrollLeft" : "scrollTop"] = i),
                    t &&
                      requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""),
                          (l._immediateVirtual = !1);
                      });
                } else {
                  if (!l.support.smoothScroll)
                    return (
                      (0, o.t)({
                        swiper: l,
                        targetPosition: i,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  m.scrollTo({ [e ? "left" : "top"]: i, behavior: "smooth" });
                }
                return !0;
              }
              return (
                l.setTransition(t),
                l.setTranslate(b),
                l.updateActiveIndex(a),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", t, r),
                l.transitionStart(i, n),
                0 === t
                  ? l.transitionEnd(i, n)
                  : l.animating ||
                    ((l.animating = !0),
                    l.onSlideToWrapperTransitionEnd ||
                      (l.onSlideToWrapperTransitionEnd = function (e) {
                        l &&
                          !l.destroyed &&
                          e.target === this &&
                          (l.wrapperEl.removeEventListener(
                            "transitionend",
                            l.onSlideToWrapperTransitionEnd
                          ),
                          (l.onSlideToWrapperTransitionEnd = null),
                          delete l.onSlideToWrapperTransitionEnd,
                          l.transitionEnd(i, n));
                      }),
                    l.wrapperEl.addEventListener(
                      "transitionend",
                      l.onSlideToWrapperTransitionEnd
                    )),
                !0
              );
            },
            slideToLoop: function (e, t, i, r) {
              void 0 === e && (e = 0),
                void 0 === i && (i = !0),
                "string" == typeof e && (e = parseInt(e, 10));
              let s = this;
              if (s.destroyed) return;
              void 0 === t && (t = s.params.speed);
              let n = s.grid && s.params.grid && s.params.grid.rows > 1,
                l = e;
              if (s.params.loop) {
                if (s.virtual && s.params.virtual.enabled)
                  l += s.virtual.slidesBefore;
                else {
                  let e;
                  if (n) {
                    let t = l * s.params.grid.rows;
                    e = s.slides.filter(
                      (e) => 1 * e.getAttribute("data-swiper-slide-index") === t
                    )[0].column;
                  } else e = s.getSlideIndexByData(l);
                  let t = n
                      ? Math.ceil(s.slides.length / s.params.grid.rows)
                      : s.slides.length,
                    { centeredSlides: i } = s.params,
                    a = s.params.slidesPerView;
                  "auto" === a
                    ? (a = s.slidesPerViewDynamic())
                    : ((a = Math.ceil(parseFloat(s.params.slidesPerView, 10))),
                      i && a % 2 == 0 && (a += 1));
                  let o = t - e < a;
                  if (
                    (i && (o = o || e < Math.ceil(a / 2)),
                    r &&
                      i &&
                      "auto" !== s.params.slidesPerView &&
                      !n &&
                      (o = !1),
                    o)
                  ) {
                    let r = i
                      ? e < s.activeIndex
                        ? "prev"
                        : "next"
                      : e - s.activeIndex - 1 < s.params.slidesPerView
                      ? "next"
                      : "prev";
                    s.loopFix({
                      direction: r,
                      slideTo: !0,
                      activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                      slideRealIndex: "next" === r ? s.realIndex : void 0,
                    });
                  }
                  if (n) {
                    let e = l * s.params.grid.rows;
                    l = s.slides.filter(
                      (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
                    )[0].column;
                  } else l = s.getSlideIndexByData(l);
                }
              }
              return (
                requestAnimationFrame(() => {
                  s.slideTo(l, t, i, r);
                }),
                s
              );
            },
            slideNext: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                { enabled: s, params: n, animating: l } = r;
              if (!s || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let a = n.slidesPerGroup;
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
              let o = r.activeIndex < n.slidesPerGroupSkip ? 1 : a,
                d = r.virtual && n.virtual.enabled;
              if (n.loop) {
                if (l && !d && n.loopPreventsSliding) return !1;
                if (
                  (r.loopFix({ direction: "next" }),
                  (r._clientLeft = r.wrapperEl.clientLeft),
                  r.activeIndex === r.slides.length - 1 && n.cssMode)
                )
                  return (
                    requestAnimationFrame(() => {
                      r.slideTo(r.activeIndex + o, e, t, i);
                    }),
                    !0
                  );
              }
              return n.rewind && r.isEnd
                ? r.slideTo(0, e, t, i)
                : r.slideTo(r.activeIndex + o, e, t, i);
            },
            slidePrev: function (e, t, i) {
              void 0 === t && (t = !0);
              let r = this,
                {
                  params: s,
                  snapGrid: n,
                  slidesGrid: l,
                  rtlTranslate: a,
                  enabled: o,
                  animating: d,
                } = r;
              if (!o || r.destroyed) return r;
              void 0 === e && (e = r.params.speed);
              let c = r.virtual && s.virtual.enabled;
              if (s.loop) {
                if (d && !c && s.loopPreventsSliding) return !1;
                r.loopFix({ direction: "prev" }),
                  (r._clientLeft = r.wrapperEl.clientLeft);
              }
              function u(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
              }
              let p = u(a ? r.translate : -r.translate),
                h = n.map((e) => u(e)),
                f = n[h.indexOf(p) - 1];
              if (void 0 === f && s.cssMode) {
                let e;
                n.forEach((t, i) => {
                  p >= t && (e = i);
                }),
                  void 0 !== e && (f = n[e > 0 ? e - 1 : e]);
              }
              let m = 0;
              if (
                (void 0 !== f &&
                  ((m = l.indexOf(f)) < 0 && (m = r.activeIndex - 1),
                  "auto" === s.slidesPerView &&
                    1 === s.slidesPerGroup &&
                    s.slidesPerGroupAuto &&
                    (m = Math.max(
                      (m = m - r.slidesPerViewDynamic("previous", !0) + 1),
                      0
                    ))),
                s.rewind && r.isBeginning)
              ) {
                let s =
                  r.params.virtual && r.params.virtual.enabled && r.virtual
                    ? r.virtual.slides.length - 1
                    : r.slides.length - 1;
                return r.slideTo(s, e, t, i);
              }
              return s.loop && 0 === r.activeIndex && s.cssMode
                ? (requestAnimationFrame(() => {
                    r.slideTo(m, e, t, i);
                  }),
                  !0)
                : r.slideTo(m, e, t, i);
            },
            slideReset: function (e, t, i) {
              if ((void 0 === t && (t = !0), !this.destroyed))
                return (
                  void 0 === e && (e = this.params.speed),
                  this.slideTo(this.activeIndex, e, t, i)
                );
            },
            slideToClosest: function (e, t, i, r) {
              if (
                (void 0 === t && (t = !0),
                void 0 === r && (r = 0.5),
                this.destroyed)
              )
                return;
              void 0 === e && (e = this.params.speed);
              let s = this.activeIndex,
                n = Math.min(this.params.slidesPerGroupSkip, s),
                l = n + Math.floor((s - n) / this.params.slidesPerGroup),
                a = this.rtlTranslate ? this.translate : -this.translate;
              if (a >= this.snapGrid[l]) {
                let e = this.snapGrid[l];
                a - e > (this.snapGrid[l + 1] - e) * r &&
                  (s += this.params.slidesPerGroup);
              } else {
                let e = this.snapGrid[l - 1];
                a - e <= (this.snapGrid[l] - e) * r &&
                  (s -= this.params.slidesPerGroup);
              }
              return (
                (s = Math.min(
                  (s = Math.max(s, 0)),
                  this.slidesGrid.length - 1
                )),
                this.slideTo(s, e, t, i)
              );
            },
            slideToClickedSlide: function () {
              let e;
              let t = this;
              if (t.destroyed) return;
              let { params: i, slidesEl: r } = t,
                s =
                  "auto" === i.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : i.slidesPerView,
                n = t.clickedIndex,
                l = t.isElement ? "swiper-slide" : `.${i.slideClass}`;
              if (i.loop) {
                if (t.animating) return;
                (e = parseInt(
                  t.clickedSlide.getAttribute("data-swiper-slide-index"),
                  10
                )),
                  i.centeredSlides
                    ? n < t.loopedSlides - s / 2 ||
                      n > t.slides.length - t.loopedSlides + s / 2
                      ? (t.loopFix(),
                        (n = t.getSlideIndex(
                          (0, o.e)(r, `${l}[data-swiper-slide-index="${e}"]`)[0]
                        )),
                        (0, o.n)(() => {
                          t.slideTo(n);
                        }))
                      : t.slideTo(n)
                    : n > t.slides.length - s
                    ? (t.loopFix(),
                      (n = t.getSlideIndex(
                        (0, o.e)(r, `${l}[data-swiper-slide-index="${e}"]`)[0]
                      )),
                      (0, o.n)(() => {
                        t.slideTo(n);
                      }))
                    : t.slideTo(n);
              } else t.slideTo(n);
            },
          },
          loop: {
            loopCreate: function (e) {
              let t = this,
                { params: i, slidesEl: r } = t;
              if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
              let s = t.grid && i.grid && i.grid.rows > 1,
                n = i.slidesPerGroup * (s ? i.grid.rows : 1),
                l = t.slides.length % n != 0,
                a = s && t.slides.length % i.grid.rows != 0,
                d = (e) => {
                  for (let r = 0; r < e; r += 1) {
                    let e = t.isElement
                      ? (0, o.c)("swiper-slide", [i.slideBlankClass])
                      : (0, o.c)("div", [i.slideClass, i.slideBlankClass]);
                    t.slidesEl.append(e);
                  }
                };
              l
                ? i.loopAddBlankSlides
                  ? (d(n - (t.slides.length % n)),
                    t.recalcSlides(),
                    t.updateSlides())
                  : (0, o.u)(
                      "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                    )
                : a &&
                  (i.loopAddBlankSlides
                    ? (d(i.grid.rows - (t.slides.length % i.grid.rows)),
                      t.recalcSlides(),
                      t.updateSlides())
                    : (0, o.u)(
                        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                      )),
                (0, o.e)(r, `.${i.slideClass}, swiper-slide`).forEach(
                  (e, t) => {
                    e.setAttribute("data-swiper-slide-index", t);
                  }
                ),
                t.loopFix({
                  slideRealIndex: e,
                  direction: i.centeredSlides ? void 0 : "next",
                });
            },
            loopFix: function (e) {
              let {
                  slideRealIndex: t,
                  slideTo: i = !0,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: l,
                  byMousewheel: a,
                } = void 0 === e ? {} : e,
                d = this;
              if (!d.params.loop) return;
              d.emit("beforeLoopFix");
              let {
                  slides: c,
                  allowSlidePrev: u,
                  allowSlideNext: p,
                  slidesEl: h,
                  params: f,
                } = d,
                { centeredSlides: m } = f;
              if (
                ((d.allowSlidePrev = !0),
                (d.allowSlideNext = !0),
                d.virtual && f.virtual.enabled)
              ) {
                i &&
                  (f.centeredSlides || 0 !== d.snapIndex
                    ? f.centeredSlides && d.snapIndex < f.slidesPerView
                      ? d.slideTo(
                          d.virtual.slides.length + d.snapIndex,
                          0,
                          !1,
                          !0
                        )
                      : d.snapIndex === d.snapGrid.length - 1 &&
                        d.slideTo(d.virtual.slidesBefore, 0, !1, !0)
                    : d.slideTo(d.virtual.slides.length, 0, !1, !0)),
                  (d.allowSlidePrev = u),
                  (d.allowSlideNext = p),
                  d.emit("loopFix");
                return;
              }
              let v = f.slidesPerView;
              "auto" === v
                ? (v = d.slidesPerViewDynamic())
                : ((v = Math.ceil(parseFloat(f.slidesPerView, 10))),
                  m && v % 2 == 0 && (v += 1));
              let g = f.slidesPerGroupAuto ? v : f.slidesPerGroup,
                w = g;
              w % g != 0 && (w += g - (w % g)),
                (w += f.loopAdditionalSlides),
                (d.loopedSlides = w);
              let b = d.grid && f.grid && f.grid.rows > 1;
              c.length < v + w
                ? (0, o.u)(
                    "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
                  )
                : b &&
                  "row" === f.grid.fill &&
                  (0, o.u)(
                    "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
                  );
              let E = [],
                S = [],
                y = d.activeIndex;
              void 0 === n
                ? (n = d.getSlideIndex(
                    c.filter((e) => e.classList.contains(f.slideActiveClass))[0]
                  ))
                : (y = n);
              let T = "next" === r || !r,
                x = "prev" === r || !r,
                C = 0,
                M = 0,
                O = b ? Math.ceil(c.length / f.grid.rows) : c.length,
                P =
                  (b ? c[n].column : n) +
                  (m && void 0 === s ? -v / 2 + 0.5 : 0);
              if (P < w) {
                C = Math.max(w - P, g);
                for (let e = 0; e < w - P; e += 1) {
                  let t = e - Math.floor(e / O) * O;
                  if (b) {
                    let e = O - t - 1;
                    for (let t = c.length - 1; t >= 0; t -= 1)
                      c[t].column === e && E.push(t);
                  } else E.push(O - t - 1);
                }
              } else if (P + v > O - w) {
                M = Math.max(P - (O - 2 * w), g);
                for (let e = 0; e < M; e += 1) {
                  let t = e - Math.floor(e / O) * O;
                  b
                    ? c.forEach((e, i) => {
                        e.column === t && S.push(i);
                      })
                    : S.push(t);
                }
              }
              if (
                ((d.__preventObserver__ = !0),
                requestAnimationFrame(() => {
                  d.__preventObserver__ = !1;
                }),
                x &&
                  E.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.prepend(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                T &&
                  S.forEach((e) => {
                    (c[e].swiperLoopMoveDOM = !0),
                      h.append(c[e]),
                      (c[e].swiperLoopMoveDOM = !1);
                  }),
                d.recalcSlides(),
                "auto" === f.slidesPerView
                  ? d.updateSlides()
                  : b &&
                    ((E.length > 0 && x) || (S.length > 0 && T)) &&
                    d.slides.forEach((e, t) => {
                      d.grid.updateSlide(t, e, d.slides);
                    }),
                f.watchSlidesProgress && d.updateSlidesOffset(),
                i)
              ) {
                if (E.length > 0 && x) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[y],
                      t = d.slidesGrid[y + C] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(y + Math.ceil(C), 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else if (s) {
                    let e = b ? E.length / f.grid.rows : E.length;
                    d.slideTo(d.activeIndex + e, 0, !1, !0),
                      (d.touchEventsData.currentTranslate = d.translate);
                  }
                } else if (S.length > 0 && T) {
                  if (void 0 === t) {
                    let e = d.slidesGrid[y],
                      t = d.slidesGrid[y - M] - e;
                    a
                      ? d.setTranslate(d.translate - t)
                      : (d.slideTo(y - M, 0, !1, !0),
                        s &&
                          ((d.touchEventsData.startTranslate =
                            d.touchEventsData.startTranslate - t),
                          (d.touchEventsData.currentTranslate =
                            d.touchEventsData.currentTranslate - t)));
                  } else {
                    let e = b ? S.length / f.grid.rows : S.length;
                    d.slideTo(d.activeIndex - e, 0, !1, !0);
                  }
                }
              }
              if (
                ((d.allowSlidePrev = u),
                (d.allowSlideNext = p),
                d.controller && d.controller.control && !l)
              ) {
                let e = {
                  slideRealIndex: t,
                  direction: r,
                  setTranslate: s,
                  activeSlideIndex: n,
                  byController: !0,
                };
                Array.isArray(d.controller.control)
                  ? d.controller.control.forEach((t) => {
                      !t.destroyed &&
                        t.params.loop &&
                        t.loopFix({
                          ...e,
                          slideTo:
                            t.params.slidesPerView === f.slidesPerView && i,
                        });
                    })
                  : d.controller.control instanceof d.constructor &&
                    d.controller.control.params.loop &&
                    d.controller.control.loopFix({
                      ...e,
                      slideTo:
                        d.controller.control.params.slidesPerView ===
                          f.slidesPerView && i,
                    });
              }
              d.emit("loopFix");
            },
            loopDestroy: function () {
              let { params: e, slidesEl: t } = this;
              if (!e.loop || (this.virtual && this.params.virtual.enabled))
                return;
              this.recalcSlides();
              let i = [];
              this.slides.forEach((e) => {
                i[
                  void 0 === e.swiperSlideIndex
                    ? 1 * e.getAttribute("data-swiper-slide-index")
                    : e.swiperSlideIndex
                ] = e;
              }),
                this.slides.forEach((e) => {
                  e.removeAttribute("data-swiper-slide-index");
                }),
                i.forEach((e) => {
                  t.append(e);
                }),
                this.recalcSlides(),
                this.slideTo(this.realIndex, 0);
            },
          },
          grabCursor: {
            setGrabCursor: function (e) {
              let t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              let i =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = "move"),
                (i.style.cursor = e ? "grabbing" : "grab"),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              let e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = ""),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              let { params: e } = this;
              (this.onTouchStart = w.bind(this)),
                (this.onTouchMove = b.bind(this)),
                (this.onTouchEnd = E.bind(this)),
                (this.onDocumentTouchStart = C.bind(this)),
                e.cssMode && (this.onScroll = T.bind(this)),
                (this.onClick = y.bind(this)),
                (this.onLoad = x.bind(this)),
                M(this, "on");
            },
            detachEvents: function () {
              M(this, "off");
            },
          },
          breakpoints: {
            setBreakpoint: function () {
              let e = this,
                { realIndex: t, initialized: i, params: r, el: s } = e,
                n = r.breakpoints;
              if (!n || (n && 0 === Object.keys(n).length)) return;
              let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
              if (!l || e.currentBreakpoint === l) return;
              let a = (l in n ? n[l] : void 0) || e.originalParams,
                d = O(e, r),
                c = O(e, a),
                u = e.params.grabCursor,
                p = a.grabCursor,
                h = r.enabled;
              d && !c
                ? (s.classList.remove(
                    `${r.containerModifierClass}grid`,
                    `${r.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !d &&
                  c &&
                  (s.classList.add(`${r.containerModifierClass}grid`),
                  ((a.grid.fill && "column" === a.grid.fill) ||
                    (!a.grid.fill && "column" === r.grid.fill)) &&
                    s.classList.add(`${r.containerModifierClass}grid-column`),
                  e.emitContainerClasses()),
                u && !p ? e.unsetGrabCursor() : !u && p && e.setGrabCursor(),
                ["navigation", "pagination", "scrollbar"].forEach((t) => {
                  if (void 0 === a[t]) return;
                  let i = r[t] && r[t].enabled,
                    s = a[t] && a[t].enabled;
                  i && !s && e[t].disable(), !i && s && e[t].enable();
                });
              let f = a.direction && a.direction !== r.direction,
                m = r.loop && (a.slidesPerView !== r.slidesPerView || f),
                v = r.loop;
              f && i && e.changeDirection(), (0, o.w)(e.params, a);
              let g = e.params.enabled,
                w = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                h && !g ? e.disable() : !h && g && e.enable(),
                (e.currentBreakpoint = l),
                e.emit("_beforeBreakpoint", a),
                i &&
                  (m
                    ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                    : !v && w
                    ? (e.loopCreate(t), e.updateSlides())
                    : v && !w && e.loopDestroy()),
                e.emit("breakpoint", a);
            },
            getBreakpoint: function (e, t, i) {
              if (
                (void 0 === t && (t = "window"),
                !e || ("container" === t && !i))
              )
                return;
              let r = !1,
                s = (0, a.a)(),
                n = "window" === t ? s.innerHeight : i.clientHeight,
                l = Object.keys(e).map((e) =>
                  "string" == typeof e && 0 === e.indexOf("@")
                    ? { value: n * parseFloat(e.substr(1)), point: e }
                    : { value: e, point: e }
                );
              l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < l.length; e += 1) {
                let { point: n, value: a } = l[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${a}px)`).matches && (r = n)
                  : a <= i.clientWidth && (r = n);
              }
              return r || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              let { isLocked: e, params: t } = this,
                { slidesOffsetBefore: i } = t;
              if (i) {
                let e = this.slides.length - 1,
                  t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                this.isLocked = this.size > t;
              } else this.isLocked = 1 === this.snapGrid.length;
              !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked),
                !0 === t.allowSlidePrev &&
                  (this.allowSlidePrev = !this.isLocked),
                e && e !== this.isLocked && (this.isEnd = !1),
                e !== this.isLocked &&
                  this.emit(this.isLocked ? "lock" : "unlock");
            },
          },
          classes: {
            addClasses: function () {
              let { classNames: e, params: t, rtl: i, el: r, device: s } = this,
                n = (function (e, t) {
                  let i = [];
                  return (
                    e.forEach((e) => {
                      "object" == typeof e
                        ? Object.keys(e).forEach((r) => {
                            e[r] && i.push(t + r);
                          })
                        : "string" == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    "initialized",
                    t.direction,
                    { "free-mode": this.params.freeMode && t.freeMode.enabled },
                    { autoheight: t.autoHeight },
                    { rtl: i },
                    { grid: t.grid && t.grid.rows > 1 },
                    {
                      "grid-column":
                        t.grid && t.grid.rows > 1 && "column" === t.grid.fill,
                    },
                    { android: s.android },
                    { ios: s.ios },
                    { "css-mode": t.cssMode },
                    { centered: t.cssMode && t.centeredSlides },
                    { "watch-progress": t.watchSlidesProgress },
                  ],
                  t.containerModifierClass
                );
              e.push(...n), r.classList.add(...e), this.emitContainerClasses();
            },
            removeClasses: function () {
              let { el: e, classNames: t } = this;
              e &&
                "string" != typeof e &&
                (e.classList.remove(...t), this.emitContainerClasses());
            },
          },
        },
        L = {};
      class _ {
        constructor() {
          let e, t;
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          1 === r.length &&
          r[0].constructor &&
          "Object" === Object.prototype.toString.call(r[0]).slice(8, -1)
            ? (t = r[0])
            : ([e, t] = r),
            t || (t = {}),
            (t = (0, o.w)({}, t)),
            e && !t.el && (t.el = e);
          let l = (0, a.g)();
          if (
            t.el &&
            "string" == typeof t.el &&
            l.querySelectorAll(t.el).length > 1
          ) {
            let e = [];
            return (
              l.querySelectorAll(t.el).forEach((i) => {
                let r = (0, o.w)({}, t, { el: i });
                e.push(new _(r));
              }),
              e
            );
          }
          let u = this;
          (u.__swiper__ = !0),
            (u.support = d()),
            (u.device = c({ userAgent: t.userAgent })),
            (u.browser =
              (n ||
                (n = (function () {
                  let e = (0, a.a)(),
                    t = c(),
                    i = !1;
                  function r() {
                    let t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf("safari") >= 0 &&
                      0 > t.indexOf("chrome") &&
                      0 > t.indexOf("android")
                    );
                  }
                  if (r()) {
                    let t = String(e.navigator.userAgent);
                    if (t.includes("Version/")) {
                      let [e, r] = t
                        .split("Version/")[1]
                        .split(" ")[0]
                        .split(".")
                        .map((e) => Number(e));
                      i = e < 16 || (16 === e && r < 2);
                    }
                  }
                  let s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent
                    ),
                    n = r(),
                    l = n || (s && t.ios);
                  return {
                    isSafari: i || n,
                    needPerspectiveFix: i,
                    need3dFix: l,
                    isWebView: s,
                  };
                })()),
              n)),
            (u.eventsListeners = {}),
            (u.eventsAnyListeners = []),
            (u.modules = [...u.__modules__]),
            t.modules &&
              Array.isArray(t.modules) &&
              u.modules.push(...t.modules);
          let p = {};
          u.modules.forEach((e) => {
            var i;
            e({
              params: t,
              swiper: u,
              extendParams:
                ((i = t),
                function (e) {
                  void 0 === e && (e = {});
                  let t = Object.keys(e)[0],
                    r = e[t];
                  if (
                    "object" != typeof r ||
                    null === r ||
                    (!0 === i[t] && (i[t] = { enabled: !0 }),
                    "navigation" === t &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].prevEl &&
                      !i[t].nextEl &&
                      (i[t].auto = !0),
                    ["pagination", "scrollbar"].indexOf(t) >= 0 &&
                      i[t] &&
                      i[t].enabled &&
                      !i[t].el &&
                      (i[t].auto = !0),
                    !(t in i && "enabled" in r))
                  ) {
                    (0, o.w)(p, e);
                    return;
                  }
                  "object" != typeof i[t] ||
                    "enabled" in i[t] ||
                    (i[t].enabled = !0),
                    i[t] || (i[t] = { enabled: !1 }),
                    (0, o.w)(p, e);
                }),
              on: u.on.bind(u),
              once: u.once.bind(u),
              off: u.off.bind(u),
              emit: u.emit.bind(u),
            });
          });
          let h = (0, o.w)({}, P, p);
          return (
            (u.params = (0, o.w)({}, h, L, t)),
            (u.originalParams = (0, o.w)({}, u.params)),
            (u.passedParams = (0, o.w)({}, t)),
            u.params &&
              u.params.on &&
              Object.keys(u.params.on).forEach((e) => {
                u.on(e, u.params.on[e]);
              }),
            u.params && u.params.onAny && u.onAny(u.params.onAny),
            Object.assign(u, {
              enabled: u.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === u.params.direction,
              isVertical: () => "vertical" === u.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return 8388608 * Math.trunc(this.translate / 8388608);
              },
              allowSlideNext: u.params.allowSlideNext,
              allowSlidePrev: u.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: u.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null,
              },
              allowClick: !0,
              allowTouchMove: u.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            u.emit("_swiper"),
            u.params.init && u.init(),
            u
          );
        }
        getDirectionLabel(e) {
          return this.isHorizontal()
            ? e
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[e];
        }
        getSlideIndex(e) {
          let { slidesEl: t, params: i } = this,
            r = (0, o.e)(t, `.${i.slideClass}, swiper-slide`),
            s = (0, o.h)(r[0]);
          return (0, o.h)(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter(
              (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
            )[0]
          );
        }
        recalcSlides() {
          let { slidesEl: e, params: t } = this;
          this.slides = (0, o.e)(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          this.enabled ||
            ((this.enabled = !0),
            this.params.grabCursor && this.setGrabCursor(),
            this.emit("enable"));
        }
        disable() {
          this.enabled &&
            ((this.enabled = !1),
            this.params.grabCursor && this.unsetGrabCursor(),
            this.emit("disable"));
        }
        setProgress(e, t) {
          e = Math.min(Math.max(e, 0), 1);
          let i = this.minTranslate(),
            r = (this.maxTranslate() - i) * e + i;
          this.translateTo(r, void 0 === t ? 0 : t),
            this.updateActiveIndex(),
            this.updateSlidesClasses();
        }
        emitContainerClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          let t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          let e = this;
          if (!e.params._emitClasses || !e.el) return;
          let t = [];
          e.slides.forEach((i) => {
            let r = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: r }), e.emit("_slideClass", i, r);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          let {
              params: i,
              slides: r,
              slidesGrid: s,
              slidesSizesGrid: n,
              size: l,
              activeIndex: a,
            } = this,
            o = 1;
          if ("number" == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = r[a] ? Math.ceil(r[a].swiperSlideSize) : 0;
            for (let i = a + 1; i < r.length; i += 1)
              r[i] &&
                !e &&
                ((t += Math.ceil(r[i].swiperSlideSize)),
                (o += 1),
                t > l && (e = !0));
            for (let i = a - 1; i >= 0; i -= 1)
              r[i] &&
                !e &&
                ((t += r[i].swiperSlideSize), (o += 1), t > l && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < r.length; e += 1)
              (t ? s[e] + n[e] - s[a] < l : s[e] - s[a] < l) && (o += 1);
          else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < l && (o += 1);
          return o;
        }
        update() {
          let e;
          let t = this;
          if (!t || t.destroyed) return;
          let { snapGrid: i, params: r } = t;
          function s() {
            let e = Math.min(
              Math.max(
                t.rtlTranslate ? -1 * t.translate : t.translate,
                t.maxTranslate()
              ),
              t.minTranslate()
            );
            t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          if (
            (r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
              e.complete && h(t, e);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            r.freeMode && r.freeMode.enabled && !r.cssMode)
          )
            s(), r.autoHeight && t.updateAutoHeight();
          else {
            if (
              ("auto" === r.slidesPerView || r.slidesPerView > 1) &&
              t.isEnd &&
              !r.centeredSlides
            ) {
              let i =
                t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
              e = t.slideTo(i.length - 1, 0, !1, !0);
            } else e = t.slideTo(t.activeIndex, 0, !1, !0);
            e || s();
          }
          r.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update");
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          let i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (this.el.classList.remove(
                `${this.params.containerModifierClass}${i}`
              ),
              this.el.classList.add(
                `${this.params.containerModifierClass}${e}`
              ),
              this.emitContainerClasses(),
              (this.params.direction = e),
              this.slides.forEach((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              this.emit("changeDirection"),
              t && this.update()),
            this
          );
        }
        changeLanguageDirection(e) {
          (!this.rtl || "rtl" !== e) &&
            (this.rtl || "ltr" !== e) &&
            ((this.rtl = "rtl" === e),
            (this.rtlTranslate =
              "horizontal" === this.params.direction && this.rtl),
            this.rtl
              ? (this.el.classList.add(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "rtl"))
              : (this.el.classList.remove(
                  `${this.params.containerModifierClass}rtl`
                ),
                (this.el.dir = "ltr")),
            this.update());
        }
        mount(e) {
          let t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (("string" == typeof i && (i = document.querySelector(i)), !i))
            return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              i.parentNode.host.nodeName ===
                t.params.swiperElementNodeName.toUpperCase() &&
              (t.isElement = !0);
          let r = () =>
              `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`,
            s =
              i && i.shadowRoot && i.shadowRoot.querySelector
                ? i.shadowRoot.querySelector(r())
                : (0, o.e)(i, r())[0];
          return (
            !s &&
              t.params.createElements &&
              ((s = (0, o.c)("div", t.params.wrapperClass)),
              i.append(s),
              (0, o.e)(i, `.${t.params.slideClass}`).forEach((e) => {
                s.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: s,
              slidesEl:
                t.isElement && !i.parentNode.host.slideSlots
                  ? i.parentNode.host
                  : s,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl:
                "rtl" === i.dir.toLowerCase() ||
                "rtl" === (0, o.p)(i, "direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === i.dir.toLowerCase() ||
                  "rtl" === (0, o.p)(i, "direction")),
              wrongRTL: "-webkit-box" === (0, o.p)(s, "display"),
            }),
            !0
          );
        }
        init(e) {
          let t = this;
          if (t.initialized || !1 === t.mount(e)) return t;
          t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          let i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement &&
              i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? h(t, e)
                : e.addEventListener("load", (e) => {
                    h(t, e.target);
                  });
            }),
            m(t),
            (t.initialized = !0),
            m(t),
            t.emit("init"),
            t.emit("afterInit"),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          let i = this,
            { params: r, el: s, wrapperEl: n, slides: l } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              r.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                s && "string" != typeof s && s.removeAttribute("style"),
                n && n.removeAttribute("style"),
                l &&
                  l.length &&
                  l.forEach((e) => {
                    e.classList.remove(
                      r.slideVisibleClass,
                      r.slideFullyVisibleClass,
                      r.slideActiveClass,
                      r.slideNextClass,
                      r.slidePrevClass
                    ),
                      e.removeAttribute("style"),
                      e.removeAttribute("data-swiper-slide-index");
                  })),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                (i.el && "string" != typeof i.el && (i.el.swiper = null),
                (0, o.x)(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          (0, o.w)(L, e);
        }
        static get extendedDefaults() {
          return L;
        }
        static get defaults() {
          return P;
        }
        static installModule(e) {
          _.prototype.__modules__ || (_.prototype.__modules__ = []);
          let t = _.prototype.__modules__;
          "function" == typeof e && 0 > t.indexOf(e) && t.push(e);
        }
        static use(e) {
          return (
            Array.isArray(e)
              ? e.forEach((e) => _.installModule(e))
              : _.installModule(e),
            _
          );
        }
      }
      Object.keys(k).forEach((e) => {
        Object.keys(k[e]).forEach((t) => {
          _.prototype[t] = k[e][t];
        });
      }),
        _.use([
          function (e) {
            let { swiper: t, on: i, emit: r } = e,
              s = (0, a.a)(),
              n = null,
              l = null,
              o = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (r("beforeResize"), r("resize"));
              },
              d = () => {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (n = new ResizeObserver((e) => {
                    l = s.requestAnimationFrame(() => {
                      let { width: i, height: r } = t,
                        s = i,
                        n = r;
                      e.forEach((e) => {
                        let {
                          contentBoxSize: i,
                          contentRect: r,
                          target: l,
                        } = e;
                        (l && l !== t.el) ||
                          ((s = r ? r.width : (i[0] || i).inlineSize),
                          (n = r ? r.height : (i[0] || i).blockSize));
                      }),
                        (s !== i || n !== r) && o();
                    });
                  })).observe(t.el);
              },
              c = () => {
                l && s.cancelAnimationFrame(l),
                  n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
              },
              u = () => {
                t && !t.destroyed && t.initialized && r("orientationchange");
              };
            i("init", () => {
              if (t.params.resizeObserver && void 0 !== s.ResizeObserver) {
                d();
                return;
              }
              s.addEventListener("resize", o),
                s.addEventListener("orientationchange", u);
            }),
              i("destroy", () => {
                c(),
                  s.removeEventListener("resize", o),
                  s.removeEventListener("orientationchange", u);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: r, emit: s } = e,
              n = [],
              l = (0, a.a)(),
              d = function (e, i) {
                void 0 === i && (i = {});
                let r = new (l.MutationObserver || l.WebkitMutationObserver)(
                  (e) => {
                    if (t.__preventObserver__) return;
                    if (1 === e.length) {
                      s("observerUpdate", e[0]);
                      return;
                    }
                    let i = function () {
                      s("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame
                      ? l.requestAnimationFrame(i)
                      : l.setTimeout(i, 0);
                  }
                );
                r.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList:
                    t.isElement || (void 0 === i.childList || i).childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  n.push(r);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              r("init", () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    let e = (0, o.a)(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) d(e[t]);
                  }
                  d(t.hostEl, { childList: t.params.observeSlideChildren }),
                    d(t.wrapperEl, { attributes: !1 });
                }
              }),
              r("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      let N = [
        "eventsPrefix",
        "injectStyles",
        "injectStylesUrls",
        "modules",
        "init",
        "_direction",
        "oneWayMovement",
        "swiperElementNodeName",
        "touchEventsTarget",
        "initialSlide",
        "_speed",
        "cssMode",
        "updateOnWindowResize",
        "resizeObserver",
        "nested",
        "focusableElements",
        "_enabled",
        "_width",
        "_height",
        "preventInteractionOnTransition",
        "userAgent",
        "url",
        "_edgeSwipeDetection",
        "_edgeSwipeThreshold",
        "_freeMode",
        "_autoHeight",
        "setWrapperSize",
        "virtualTranslate",
        "_effect",
        "breakpoints",
        "breakpointsBase",
        "_spaceBetween",
        "_slidesPerView",
        "maxBackfaceHiddenSlides",
        "_grid",
        "_slidesPerGroup",
        "_slidesPerGroupSkip",
        "_slidesPerGroupAuto",
        "_centeredSlides",
        "_centeredSlidesBounds",
        "_slidesOffsetBefore",
        "_slidesOffsetAfter",
        "normalizeSlideIndex",
        "_centerInsufficientSlides",
        "_watchOverflow",
        "roundLengths",
        "touchRatio",
        "touchAngle",
        "simulateTouch",
        "_shortSwipes",
        "_longSwipes",
        "longSwipesRatio",
        "longSwipesMs",
        "_followFinger",
        "allowTouchMove",
        "_threshold",
        "touchMoveStopPropagation",
        "touchStartPreventDefault",
        "touchStartForcePreventDefault",
        "touchReleaseOnEdges",
        "uniqueNavElements",
        "_resistance",
        "_resistanceRatio",
        "_watchSlidesProgress",
        "_grabCursor",
        "preventClicks",
        "preventClicksPropagation",
        "_slideToClickedSlide",
        "_loop",
        "loopAdditionalSlides",
        "loopAddBlankSlides",
        "loopPreventsSliding",
        "_rewind",
        "_allowSlidePrev",
        "_allowSlideNext",
        "_swipeHandler",
        "_noSwiping",
        "noSwipingClass",
        "noSwipingSelector",
        "passiveListeners",
        "containerModifierClass",
        "slideClass",
        "slideActiveClass",
        "slideVisibleClass",
        "slideFullyVisibleClass",
        "slideNextClass",
        "slidePrevClass",
        "slideBlankClass",
        "wrapperClass",
        "lazyPreloaderClass",
        "lazyPreloadPrevNext",
        "runCallbacksOnInit",
        "observer",
        "observeParents",
        "observeSlideChildren",
        "a11y",
        "_autoplay",
        "_controller",
        "coverflowEffect",
        "cubeEffect",
        "fadeEffect",
        "flipEffect",
        "creativeEffect",
        "cardsEffect",
        "hashNavigation",
        "history",
        "keyboard",
        "mousewheel",
        "_navigation",
        "_pagination",
        "parallax",
        "_scrollbar",
        "_thumbs",
        "virtual",
        "zoom",
        "control",
      ];
      function I(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1) &&
          !e.__swiper__
        );
      }
      function A(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter((e) => 0 > i.indexOf(e))
          .forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : I(t[i]) && I(e[i]) && Object.keys(t[i]).length > 0
              ? t[i].__swiper__
                ? (e[i] = t[i])
                : A(e[i], t[i])
              : (e[i] = t[i]);
          });
      }
      function R(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            void 0 === e.navigation.nextEl &&
            void 0 === e.navigation.prevEl
        );
      }
      function D(e) {
        return (
          void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
        );
      }
      function z(e) {
        return (
          void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
        );
      }
      function j(e) {
        void 0 === e && (e = "");
        let t = e
            .split(" ")
            .map((e) => e.trim())
            .filter((e) => !!e),
          i = [];
        return (
          t.forEach((e) => {
            0 > i.indexOf(e) && i.push(e);
          }),
          i.join(" ")
        );
      }
      let G = (e) => {
        e &&
          !e.destroyed &&
          e.params.virtual &&
          (!e.params.virtual || e.params.virtual.enabled) &&
          (e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate());
      };
      function B() {
        return (B = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var r in i)
                  Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      function F(e) {
        return (
          e.type &&
          e.type.displayName &&
          e.type.displayName.includes("SwiperSlide")
        );
      }
      function V(e, t) {
        return "undefined" == typeof window
          ? (0, l.useEffect)(e, t)
          : (0, l.useLayoutEffect)(e, t);
      }
      let $ = (0, l.createContext)(null),
        H = (0, l.createContext)(null),
        W = (0, l.forwardRef)(function (e, t) {
          var i;
          let {
              className: r,
              tag: s = "div",
              wrapperTag: n = "div",
              children: a,
              onSwiper: o,
              ...d
            } = void 0 === e ? {} : e,
            c = !1,
            [u, p] = (0, l.useState)("swiper"),
            [h, f] = (0, l.useState)(null),
            [m, v] = (0, l.useState)(!1),
            g = (0, l.useRef)(!1),
            w = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            S = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            T = (0, l.useRef)(null),
            x = (0, l.useRef)(null),
            C = (0, l.useRef)(null),
            {
              params: M,
              passedParams: O,
              rest: k,
              events: L,
            } = (function (e, t) {
              void 0 === e && (e = {}), void 0 === t && (t = !0);
              let i = { on: {} },
                r = {},
                s = {};
              A(i, P), (i._emitClasses = !0), (i.init = !1);
              let n = {},
                l = N.map((e) => e.replace(/_/, ""));
              return (
                Object.keys(Object.assign({}, e)).forEach((a) => {
                  void 0 !== e[a] &&
                    (l.indexOf(a) >= 0
                      ? I(e[a])
                        ? ((i[a] = {}),
                          (s[a] = {}),
                          A(i[a], e[a]),
                          A(s[a], e[a]))
                        : ((i[a] = e[a]), (s[a] = e[a]))
                      : 0 === a.search(/on[A-Z]/) && "function" == typeof e[a]
                      ? t
                        ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                      : (n[a] = e[a]));
                }),
                ["navigation", "pagination", "scrollbar"].forEach((e) => {
                  !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e];
                }),
                { params: i, passedParams: s, rest: n, events: r }
              );
            })(d),
            { slides: $, slots: W } = (function (e) {
              let t = [],
                i = {
                  "container-start": [],
                  "container-end": [],
                  "wrapper-start": [],
                  "wrapper-end": [],
                };
              return (
                l.Children.toArray(e).forEach((e) => {
                  if (F(e)) t.push(e);
                  else if (e.props && e.props.slot && i[e.props.slot])
                    i[e.props.slot].push(e);
                  else if (e.props && e.props.children) {
                    let r = (function e(t) {
                      let i = [];
                      return (
                        l.Children.toArray(t).forEach((t) => {
                          F(t)
                            ? i.push(t)
                            : t.props &&
                              t.props.children &&
                              e(t.props.children).forEach((e) => i.push(e));
                        }),
                        i
                      );
                    })(e.props.children);
                    r.length > 0
                      ? r.forEach((e) => t.push(e))
                      : i["container-end"].push(e);
                  } else i["container-end"].push(e);
                }),
                { slides: t, slots: i }
              );
            })(a),
            q = () => {
              v(!m);
            };
          Object.assign(M.on, {
            _containerClasses(e, t) {
              p(t);
            },
          });
          let Y = () => {
            Object.assign(M.on, L), (c = !0);
            let e = { ...M };
            if (
              (delete e.wrapperClass,
              (b.current = new _(e)),
              b.current.virtual && b.current.params.virtual.enabled)
            ) {
              b.current.virtual.slides = $;
              let e = {
                cache: !1,
                slides: $,
                renderExternal: f,
                renderExternalUpdate: !1,
              };
              A(b.current.params.virtual, e),
                A(b.current.originalParams.virtual, e);
            }
          };
          w.current || Y(), b.current && b.current.on("_beforeBreakpoint", q);
          let X = () => {
              !c &&
                L &&
                b.current &&
                Object.keys(L).forEach((e) => {
                  b.current.on(e, L[e]);
                });
            },
            U = () => {
              L &&
                b.current &&
                Object.keys(L).forEach((e) => {
                  b.current.off(e, L[e]);
                });
            };
          return (
            (0, l.useEffect)(() => () => {
              b.current && b.current.off("_beforeBreakpoint", q);
            }),
            (0, l.useEffect)(() => {
              !g.current &&
                b.current &&
                (b.current.emitSlidesClasses(), (g.current = !0));
            }),
            V(() => {
              if ((t && (t.current = w.current), w.current))
                return (
                  b.current.destroyed && Y(),
                  (function (e, t) {
                    let {
                      el: i,
                      nextEl: r,
                      prevEl: s,
                      paginationEl: n,
                      scrollbarEl: l,
                      swiper: a,
                    } = e;
                    R(t) &&
                      r &&
                      s &&
                      ((a.params.navigation.nextEl = r),
                      (a.originalParams.navigation.nextEl = r),
                      (a.params.navigation.prevEl = s),
                      (a.originalParams.navigation.prevEl = s)),
                      D(t) &&
                        n &&
                        ((a.params.pagination.el = n),
                        (a.originalParams.pagination.el = n)),
                      z(t) &&
                        l &&
                        ((a.params.scrollbar.el = l),
                        (a.originalParams.scrollbar.el = l)),
                      a.init(i);
                  })(
                    {
                      el: w.current,
                      nextEl: y.current,
                      prevEl: T.current,
                      paginationEl: x.current,
                      scrollbarEl: C.current,
                      swiper: b.current,
                    },
                    M
                  ),
                  o && !b.current.destroyed && o(b.current),
                  () => {
                    b.current &&
                      !b.current.destroyed &&
                      b.current.destroy(!0, !1);
                  }
                );
            }, []),
            V(() => {
              X();
              let e = (function (e, t, i, r, s) {
                let n = [];
                if (!t) return n;
                let l = (e) => {
                  0 > n.indexOf(e) && n.push(e);
                };
                if (i && r) {
                  let e = r.map(s),
                    t = i.map(s);
                  e.join("") !== t.join("") && l("children"),
                    r.length !== i.length && l("children");
                }
                return (
                  N.filter((e) => "_" === e[0])
                    .map((e) => e.replace(/_/, ""))
                    .forEach((i) => {
                      if (i in e && i in t) {
                        if (I(e[i]) && I(t[i])) {
                          let r = Object.keys(e[i]),
                            s = Object.keys(t[i]);
                          r.length !== s.length
                            ? l(i)
                            : (r.forEach((r) => {
                                e[i][r] !== t[i][r] && l(i);
                              }),
                              s.forEach((r) => {
                                e[i][r] !== t[i][r] && l(i);
                              }));
                        } else e[i] !== t[i] && l(i);
                      }
                    }),
                  n
                );
              })(O, E.current, $, S.current, (e) => e.key);
              return (
                (E.current = O),
                (S.current = $),
                e.length &&
                  b.current &&
                  !b.current.destroyed &&
                  (function (e) {
                    let t,
                      i,
                      r,
                      s,
                      n,
                      l,
                      a,
                      o,
                      {
                        swiper: d,
                        slides: c,
                        passedParams: u,
                        changedParams: p,
                        nextEl: h,
                        prevEl: f,
                        scrollbarEl: m,
                        paginationEl: v,
                      } = e,
                      g = p.filter(
                        (e) =>
                          "children" !== e &&
                          "direction" !== e &&
                          "wrapperClass" !== e
                      ),
                      {
                        params: w,
                        pagination: b,
                        navigation: E,
                        scrollbar: S,
                        virtual: y,
                        thumbs: T,
                      } = d;
                    p.includes("thumbs") &&
                      u.thumbs &&
                      u.thumbs.swiper &&
                      w.thumbs &&
                      !w.thumbs.swiper &&
                      (t = !0),
                      p.includes("controller") &&
                        u.controller &&
                        u.controller.control &&
                        w.controller &&
                        !w.controller.control &&
                        (i = !0),
                      p.includes("pagination") &&
                        u.pagination &&
                        (u.pagination.el || v) &&
                        (w.pagination || !1 === w.pagination) &&
                        b &&
                        !b.el &&
                        (r = !0),
                      p.includes("scrollbar") &&
                        u.scrollbar &&
                        (u.scrollbar.el || m) &&
                        (w.scrollbar || !1 === w.scrollbar) &&
                        S &&
                        !S.el &&
                        (s = !0),
                      p.includes("navigation") &&
                        u.navigation &&
                        (u.navigation.prevEl || f) &&
                        (u.navigation.nextEl || h) &&
                        (w.navigation || !1 === w.navigation) &&
                        E &&
                        !E.prevEl &&
                        !E.nextEl &&
                        (n = !0);
                    let x = (e) => {
                      d[e] &&
                        (d[e].destroy(),
                        "navigation" === e
                          ? (d.isElement &&
                              (d[e].prevEl.remove(), d[e].nextEl.remove()),
                            (w[e].prevEl = void 0),
                            (w[e].nextEl = void 0),
                            (d[e].prevEl = void 0),
                            (d[e].nextEl = void 0))
                          : (d.isElement && d[e].el.remove(),
                            (w[e].el = void 0),
                            (d[e].el = void 0)));
                    };
                    p.includes("loop") &&
                      d.isElement &&
                      (w.loop && !u.loop
                        ? (l = !0)
                        : !w.loop && u.loop
                        ? (a = !0)
                        : (o = !0)),
                      g.forEach((e) => {
                        if (I(w[e]) && I(u[e]))
                          Object.assign(w[e], u[e]),
                            ("navigation" === e ||
                              "pagination" === e ||
                              "scrollbar" === e) &&
                              "enabled" in u[e] &&
                              !u[e].enabled &&
                              x(e);
                        else {
                          let t = u[e];
                          (!0 === t || !1 === t) &&
                          ("navigation" === e ||
                            "pagination" === e ||
                            "scrollbar" === e)
                            ? !1 === t && x(e)
                            : (w[e] = u[e]);
                        }
                      }),
                      g.includes("controller") &&
                        !i &&
                        d.controller &&
                        d.controller.control &&
                        w.controller &&
                        w.controller.control &&
                        (d.controller.control = w.controller.control),
                      p.includes("children") && c && y && w.virtual.enabled
                        ? ((y.slides = c), y.update(!0))
                        : p.includes("virtual") &&
                          y &&
                          w.virtual.enabled &&
                          (c && (y.slides = c), y.update(!0)),
                      p.includes("children") && c && w.loop && (o = !0),
                      t && T.init() && T.update(!0),
                      i && (d.controller.control = w.controller.control),
                      r &&
                        (d.isElement &&
                          (!v || "string" == typeof v) &&
                          ((v = document.createElement("div")).classList.add(
                            "swiper-pagination"
                          ),
                          v.part.add("pagination"),
                          d.el.appendChild(v)),
                        v && (w.pagination.el = v),
                        b.init(),
                        b.render(),
                        b.update()),
                      s &&
                        (d.isElement &&
                          (!m || "string" == typeof m) &&
                          ((m = document.createElement("div")).classList.add(
                            "swiper-scrollbar"
                          ),
                          m.part.add("scrollbar"),
                          d.el.appendChild(m)),
                        m && (w.scrollbar.el = m),
                        S.init(),
                        S.updateSize(),
                        S.setTranslate()),
                      n &&
                        (d.isElement &&
                          ((h && "string" != typeof h) ||
                            ((h = document.createElement("div")).classList.add(
                              "swiper-button-next"
                            ),
                            (h.innerHTML = d.hostEl.constructor.nextButtonSvg),
                            h.part.add("button-next"),
                            d.el.appendChild(h)),
                          (f && "string" != typeof f) ||
                            ((f = document.createElement("div")).classList.add(
                              "swiper-button-prev"
                            ),
                            (f.innerHTML = d.hostEl.constructor.prevButtonSvg),
                            f.part.add("button-prev"),
                            d.el.appendChild(f))),
                        h && (w.navigation.nextEl = h),
                        f && (w.navigation.prevEl = f),
                        E.init(),
                        E.update()),
                      p.includes("allowSlideNext") &&
                        (d.allowSlideNext = u.allowSlideNext),
                      p.includes("allowSlidePrev") &&
                        (d.allowSlidePrev = u.allowSlidePrev),
                      p.includes("direction") &&
                        d.changeDirection(u.direction, !1),
                      (l || o) && d.loopDestroy(),
                      (a || o) && d.loopCreate(),
                      d.update();
                  })({
                    swiper: b.current,
                    slides: $,
                    passedParams: O,
                    changedParams: e,
                    nextEl: y.current,
                    prevEl: T.current,
                    scrollbarEl: C.current,
                    paginationEl: x.current,
                  }),
                () => {
                  U();
                }
              );
            }),
            V(() => {
              G(b.current);
            }, [h]),
            l.createElement(
              s,
              B({ ref: w, className: j(`${u}${r ? ` ${r}` : ""}`) }, k),
              l.createElement(
                H.Provider,
                { value: b.current },
                W["container-start"],
                l.createElement(
                  n,
                  {
                    className: (void 0 === (i = M.wrapperClass) && (i = ""), i)
                      ? i.includes("swiper-wrapper")
                        ? i
                        : `swiper-wrapper ${i}`
                      : "swiper-wrapper",
                  },
                  W["wrapper-start"],
                  M.virtual
                    ? (function (e, t, i) {
                        if (!i) return null;
                        let r = (e) => {
                            let i = e;
                            return (
                              e < 0
                                ? (i = t.length + e)
                                : i >= t.length && (i -= t.length),
                              i
                            );
                          },
                          s = e.isHorizontal()
                            ? {
                                [e.rtlTranslate
                                  ? "right"
                                  : "left"]: `${i.offset}px`,
                              }
                            : { top: `${i.offset}px` },
                          { from: n, to: a } = i,
                          o = e.params.loop ? -t.length : 0,
                          d = e.params.loop ? 2 * t.length : t.length,
                          c = [];
                        for (let e = o; e < d; e += 1)
                          e >= n && e <= a && c.push(t[r(e)]);
                        return c.map((t, i) =>
                          l.cloneElement(t, {
                            swiper: e,
                            style: s,
                            key: t.props.virtualIndex || t.key || `slide-${i}`,
                          })
                        );
                      })(b.current, $, h)
                    : $.map((e, t) =>
                        l.cloneElement(e, {
                          swiper: b.current,
                          swiperSlideIndex: t,
                        })
                      ),
                  W["wrapper-end"]
                ),
                R(M) &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", {
                      ref: T,
                      className: "swiper-button-prev",
                    }),
                    l.createElement("div", {
                      ref: y,
                      className: "swiper-button-next",
                    })
                  ),
                z(M) &&
                  l.createElement("div", {
                    ref: C,
                    className: "swiper-scrollbar",
                  }),
                D(M) &&
                  l.createElement("div", {
                    ref: x,
                    className: "swiper-pagination",
                  }),
                W["container-end"]
              )
            )
          );
        });
      W.displayName = "Swiper";
      let q = (0, l.forwardRef)(function (e, t) {
        let {
            tag: i = "div",
            children: r,
            className: s = "",
            swiper: n,
            zoom: a,
            lazy: o,
            virtualIndex: d,
            swiperSlideIndex: c,
            ...u
          } = void 0 === e ? {} : e,
          p = (0, l.useRef)(null),
          [h, f] = (0, l.useState)("swiper-slide"),
          [m, v] = (0, l.useState)(!1);
        function g(e, t, i) {
          t === p.current && f(i);
        }
        V(() => {
          if (
            (void 0 !== c && (p.current.swiperSlideIndex = c),
            t && (t.current = p.current),
            p.current && n)
          ) {
            if (n.destroyed) {
              "swiper-slide" !== h && f("swiper-slide");
              return;
            }
            return (
              n.on("_slideClass", g),
              () => {
                n && n.off("_slideClass", g);
              }
            );
          }
        }),
          V(() => {
            n && p.current && !n.destroyed && f(n.getSlideClasses(p.current));
          }, [n]);
        let w = {
            isActive: h.indexOf("swiper-slide-active") >= 0,
            isVisible: h.indexOf("swiper-slide-visible") >= 0,
            isPrev: h.indexOf("swiper-slide-prev") >= 0,
            isNext: h.indexOf("swiper-slide-next") >= 0,
          },
          b = () => ("function" == typeof r ? r(w) : r);
        return l.createElement(
          i,
          B(
            {
              ref: p,
              className: j(`${h}${s ? ` ${s}` : ""}`),
              "data-swiper-slide-index": d,
              onLoad: () => {
                v(!0);
              },
            },
            u
          ),
          a &&
            l.createElement(
              $.Provider,
              { value: w },
              l.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" == typeof a ? a : void 0,
                },
                b(),
                o &&
                  !m &&
                  l.createElement("div", { className: "swiper-lazy-preloader" })
              )
            ),
          !a &&
            l.createElement(
              $.Provider,
              { value: w },
              b(),
              o &&
                !m &&
                l.createElement("div", { className: "swiper-lazy-preloader" })
            )
        );
      });
      q.displayName = "SwiperSlide";
    },
  },
]);
