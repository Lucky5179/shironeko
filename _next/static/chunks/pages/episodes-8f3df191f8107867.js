(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [257],
  {
    8739: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/episodes",
        function () {
          return t(6260);
        },
      ]);
    },
    1209: function (e, s, t) {
      "use strict";
      t.d(s, {
        v2: function () {
          return l;
        },
      });
      var n = t(5893),
        i = t(7294);
      let l = (e) => {
        let { classData: s, color: t = "#DC9285" } = e;
        return (0, n.jsx)(i.Fragment, {
          children: (0, n.jsx)("svg", {
            className: s,
            viewBox: "0 0 63 112",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("path", {
              d: "M52.2322 103.667L5.82422 57.2585L55.3922 7.68917",
              stroke: t,
              strokeWidth: 10.6667,
              strokeMiterlimit: 10,
              strokeLinecap: "square",
              strokeLinejoin: "round",
            }),
          }),
        });
      };
    },
    6260: function (e, s, t) {
      "use strict";
      t.r(s);
      var n = t(5893),
        i = t(7294),
        l = t(7177),
        r = t(3353),
        a = t(2261),
        o = t(2074),
        c = t(1410),
        d = t(9357);
      t(889), t(6455);
      var p = t(1209),
        u = t(8519),
        m = t(1664),
        x = t.n(m);
      s.default = () => {
        let e = (0, d.ZP)(),
          s = (0, i.useRef)(null),
          t = (0, i.useRef)(null),
          m = (0, i.useRef)(null),
          h = (0, i.useRef)(null),
          w = (0, i.useRef)([]),
          [f, v] = (0, i.useState)(!1),
          [g, b] = (0, i.useState)(0);
        (0, i.useEffect)(() => {
          w.current.forEach((e, s) => {
            f ? (e.muted = !1) : (e.muted = !0);
          });
        }, [f]);
        let j = (e) => {
          (null == s ? void 0 : s.current) && s.current.swiper.slideTo(e);
        };
        (0, i.useEffect)(() => {
          t.current &&
            m.current &&
            h.current &&
            ((t.current.controller.control = [m.current, h.current]),
            (m.current.controller.control = t.current),
            (h.current.controller.control = t.current));
        }, [t.current, m.current, h.current]);
        let N = [
            {
              id: 1,
              image: e + "/images/eps (2).webp",
              title:
                "Into The <br /> <span class='text-[#dc9285]'>Vortex</span>",
              desc: "What is it with cats and knocking things over… when will they ever learn. Maybe getting sucked into a portal will teach Shiro to behave. ",
              season: "S1",
              espisode: "Episode 01",
              eps: "EP 1",
              video: e + "/videos/Shiro_Neko_EP1_Into-the-Vortex (1).mp4",
              bgThumbnail: e + "/images/SCREEN 1.webp",
              locked: !1,
            },
            {
              id: 2,
              image: e + "/images/eps (3).webp",
              title:
                "A Legend <br /> <span class='text-[#dc9285]'>Appears</span>",
              desc: "Finally, someone who can show our Shiro the way. What will Shiba teach him next?",
              season: "S1",
              espisode: "Episode 02",
              eps: "EP 2",
              video: e + "/videos/Shiro_Neko_EP2_A-Legend-Appears (1).mp4",
              bgThumbnail: e + "/images/SCREEN 2.webp",
              locked: !1,
            },
            {
              id: 3,
              image: e + "/images/eps (4).webp",
              title: "Genesis <br /> <span class='text-[#dc9285]'>Block</span>",
              desc: "Oh Shiro, always up to no good. I wonder how he’s going to get out of this one…",
              season: "S1",
              espisode: "Episode 03",
              eps: "EP 3",
              video:
                e +
                "/videos/Shiro_Neko_EP3_FINALv5_13-08-24_with-audio (1).mp4",
              bgThumbnail: e + "/images/SCREEN 3.webp",
              locked: !1,
            },
            {
              id: 4,
              image: e + "/images/eps (5).webp",
              title: "Pizza <br /> <span class='text-[#dc9285]'>Party</span>",
              desc: "10,000 BTC, must be nice. Is Shiro going to make it out?",
              season: "S1",
              espisode: "Episode 04",
              eps: "EP 4",
              video: e + "/videos/Shiro_Neko_EP4_Pizza-Party (1).mp4",
              bgThumbnail: e + "/images/SCREEN 4.webp",
              locked: !1,
            },
            {
              id: 5,
              image: e + "/images/eps (1).webp",
              title:
                "Party & <br /> <span class='text-[#dc9285]'>Prejudice</span>",
              desc: "It’s time for Shiro to do it better.\xa0$SHIRO\xa0is\xa0here.",
              season: "S1",
              espisode: "Episode 05",
              eps: "EP 5",
              video:
                e + "/videos/Shiro_Neko_EP_5_Party&amp;Prejudice_CLEAN.mp4",
              bgThumbnail: e + "/images/SCREEN 5.webp",
              locked: !1,
            },
          ],
          [k, _] = (0, i.useState)(!0);
        (0, i.useEffect)(() => {
          let e = () => {
            window.scrollY > 50 ? _(!1) : _(!0);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, []);
        let [E, S] = (0, i.useState)(!1),
          [P, y] = (0, i.useState)(null),
          W = (0, i.useRef)(null),
          C = (e) => {
            y(e), S(!0);
          },
          R = () => {
            W.current && W.current.pause(), S(!1);
          };
        return (0, n.jsx)(i.Fragment, {
          children: (0, n.jsxs)(c.Z, {
            navbar: !1,
            footer: !0,
            title: "Episodes",
            description:
              "Explore our episodes detailing the journey and story\xa0behind\xa0Shiro",
            children: [
              (0, n.jsx)(l.Z, {
                size: "xl",
                centered: !0,
                show: E,
                onHide: R,
                className: "wrapModalWidth",
                children: (0, n.jsxs)(l.Z.Body, {
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center gap-3 justify-between pb-3",
                      children: [
                        (0, n.jsx)("h4", {
                          className:
                            "text__40 minW1600:!text-[3.5vw] text-MBase-black uppercase font-bold font-DunkelSans",
                          children:
                            null == P
                              ? void 0
                              : P.title.replace(/<\/?[^>]+(>|$)/g, ""),
                        }),
                        (0, n.jsx)("img", {
                          src: e + "/images/asdas.svg",
                          onClick: R,
                          className: "cursor-pointer w-[30px] minW1400:w-[2vw]",
                          alt: "",
                        }),
                      ],
                    }),
                    P &&
                      (0, n.jsx)("video", {
                        className: "w-full h-[73vh] object-cover",
                        ref: W,
                        src: P.video,
                        controls: !0,
                        autoPlay: !0,
                        loop: !0,
                      }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "fixed left-0 top-0 w-full h-full object-cover pointer-events-none overflow-hidden",
                children: (0, n.jsx)(a.tq, {
                  modules: [o.Qr, o.xW],
                  onSwiper: (e) => (h.current = e),
                  slidesPerView: "1",
                  effect: "fade",
                  fadeEffect: { crossFade: !0 },
                  className: "w-full h-full",
                  children:
                    null == N
                      ? void 0
                      : N.map((e, s) =>
                          (0, n.jsx)(
                            a.o5,
                            {
                              children: (0, n.jsx)("div", {
                                className:
                                  "relative w-full h-full overflow-hidden ",
                                children: (0, n.jsx)("img", {
                                  src: e.bgThumbnail,
                                  className:
                                    "absolute left-0 top-0 w-full h-full object-cover",
                                  alt: "",
                                }),
                              }),
                            },
                            s
                          )
                        ),
                }),
              }),
              (0, n.jsx)("div", {
                className:
                  "fixed left-0 top-0 w-full h-full object-cover pointer-events-none bg-[#00000080]",
              }),
              (0, n.jsx)("div", {
                className:
                  "fixed z-[70] w-full left-0 top-[1rem] pointer-events-none",
                children: (0, n.jsxs)(r.Z, {
                  className:
                    "pointer-events-none flex items-center justify-content-between",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "gap-0 ss:gap-2 md:!gap-3 flex items-center justify-center transition-all duration-300 " +
                        (k ? "" : "opacity-0 pointer-events-none"),
                      children: [
                        (0, n.jsx)("a", {
                          href: "https://www.dextools.io/",
                          target: "_blank",
                          className: "pointer-events-auto",
                          children: (0, n.jsx)("img", {
                            src: e + "/images/ss (2).webp",
                            className: "w-[46px] minW1600:!w-[5em]",
                            alt: "",
                          }),
                        }),
                        (0, n.jsx)("a", {
                          href: "https://dexscreener.com/ethereum/0xcomingsoon",
                          target: "_blank",
                          className: "pointer-events-auto",
                          children: (0, n.jsx)("img", {
                            src: e + "/images/icw (1).svg",
                            className: "w-[46px] minW1600:!w-[5em]",
                            alt: "",
                          }),
                        }),
                        (0, n.jsx)("a", {
                          href: "https://t.me/shironeko_erc20",
                          target: "_blank",
                          className: "pointer-events-auto",
                          children: (0, n.jsx)("img", {
                            src: e + "/images/ss (1).webp",
                            className: "w-[46px] minW1600:!w-[5em]",
                            alt: "",
                          }),
                        }),
                        (0, n.jsx)("a", {
                          href: "https://x.com/shironeko_eth",
                          target: "_blank",
                          className: "pointer-events-auto",
                          children: (0, n.jsx)("img", {
                            src: e + "/images/asdsad.png",
                            className: "w-[46px] minW1600:!w-[5em]",
                            alt: "",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "pointer-events-auto flex items-center gap-2 md:!gap-3",
                      children: [
                        (0, n.jsx)(x(), {
                          href: "/",
                          className: "cursor-pointer pointer-events-auto",
                          children: (0, n.jsx)("img", {
                            src: e + "/images/Back Button.png",
                            className:
                              "w-[40px] pointer-events-auto relative z-[24]",
                            alt: "",
                          }),
                        }),
                        (0, n.jsx)(x(), {
                          href: "/",
                          className:
                            "cursor-pointer pointer-events-auto transition-all duration-300 " +
                            (k
                              ? ""
                              : "opacity-0 w-[0] hidden overflow-hidden pointer-events-none"),
                          children: (0, n.jsx)("img", {
                            src: e + "/images/HEAD TRANSPARENT (1).png",
                            className:
                              "w-[80px] pointer-events-auto relative z-[24] ",
                            alt: "",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "transition-all duration-300 " +
                            (k
                              ? "pointer-events-auto"
                              : "opacity-0 w-[0] hidden overflow-hidden pointer-events-none"),
                          children: (0, n.jsx)(u.Z, {
                            showingBtn: !0,
                            Clickable: !0,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("section", {
                className:
                  "min-h-screen pt-[80px] lg:pt-[40px] pb-[40px] relative z-[1]",
                children: (0, n.jsxs)(r.Z, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "mt-[2rem] lg:mt-[4rem] minW1600:!mt-[6rem] mb-4",
                      children: (0, n.jsx)(a.tq, {
                        ref: s,
                        onSlideChange: () => {
                          if (null == s ? void 0 : s.current) {
                            var e;
                            b(
                              null == s
                                ? void 0
                                : null === (e = s.current) || void 0 === e
                                ? void 0
                                : e.swiper.realIndex
                            ),
                              w.current.forEach((e, t) => {
                                if (e) {
                                  var n;
                                  t ===
                                  (null == s
                                    ? void 0
                                    : null === (n = s.current) || void 0 === n
                                    ? void 0
                                    : n.swiper.realIndex)
                                    ? (console.log("play"), e.play())
                                    : (console.log("pasue"), e.pause());
                                }
                              });
                          }
                        },
                        modules: [o.Qr, o.xW],
                        onSwiper: (e) => (t.current = e),
                        slidesPerView: "1",
                        spaceBetween: 16,
                        effect: "fade",
                        fadeEffect: { crossFade: !0 },
                        children:
                          null == N
                            ? void 0
                            : N.map((e, s) =>
                                (0, n.jsx)(
                                  a.o5,
                                  {
                                    children: (0, n.jsxs)("div", {
                                      children: [
                                        (0, n.jsx)("p", {
                                          className:
                                            "text__28 minW1600:!text-[5vh] font-DunkelSans font-bold",
                                          children: e.espisode,
                                        }),
                                        (0, n.jsx)("h2", {
                                          className:
                                            "text-[50px] md:text-[60px] xl:text-[72px] minW1600:!text-[9vh] text-white uppercase font-DunkelSans font-bold",
                                          dangerouslySetInnerHTML: {
                                            __html: e.title,
                                          },
                                        }),
                                        (0, n.jsx)("div", {
                                          className:
                                            "mt-2 p-4 bg-white rounded-[14px] inline-block max-w-[400px] lg:max-w-[550px] minW1600:!max-w-[45vw]",
                                          children: (0, n.jsx)("p", {
                                            className:
                                              "text__16 minW1600:!text-[3vh] leading-relaxed font-Pragmatica text-MBase-black inline-block",
                                            children: e.desc,
                                          }),
                                        }),
                                      ],
                                    }),
                                  },
                                  s
                                )
                              ),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      className: "relative",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute z-[8] -left-[24px] top-1/2 -translate-y-1/2",
                          onClick: () => {
                            if (null == s ? void 0 : s.current) {
                              var e;
                              null == s ||
                                null === (e = s.current) ||
                                void 0 === e ||
                                e.swiper.slidePrev();
                            }
                          },
                          children: (0, n.jsx)("div", {
                            className:
                              "flex items-center justify-center bg-white w-[46px] lg:w-[56px] h-[46px] lg:h-[56px] rounded-full cursor-pointer",
                            children: (0, n.jsx)(p.v2, {
                              classData:
                                "w-[28px] lg:w-[38px] h-[28px] lg:h-[38px] cursor-pointer pointer-events-auto",
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className:
                            "absolute z-[8] -right-[24px] top-1/2 -translate-y-1/2",
                          onClick: () => {
                            if (s.current) {
                              var e;
                              null == s ||
                                null === (e = s.current) ||
                                void 0 === e ||
                                e.swiper.slideNext();
                            }
                          },
                          children: (0, n.jsx)("div", {
                            className:
                              "flex items-center justify-center bg-white w-[46px] lg:w-[56px] h-[46px] lg:h-[56px] rounded-full cursor-pointer",
                            children: (0, n.jsx)(p.v2, {
                              classData:
                                "w-[28px] lg:w-[38px] h-[28px] lg:h-[38px] cursor-pointer pointer-events-auto rotate-180",
                            }),
                          }),
                        }),
                        (0, n.jsx)(a.tq, {
                          slidesPerView: "4",
                          spaceBetween: 16,
                          modules: [o.Qr],
                          onSwiper: (e) => (m.current = e),
                          grabCursor: !0,
                          breakpoints: {
                            300: { slidesPerView: 1 },
                            480: { slidesPerView: 2 },
                            576: { slidesPerView: 2 },
                            770: { slidesPerView: 3 },
                            1025: { slidesPerView: 4 },
                          },
                          children:
                            null == N
                              ? void 0
                              : N.map((s, t) =>
                                  (0, n.jsx)(
                                    a.o5,
                                    {
                                      children: (0, n.jsxs)("div", {
                                        onClick: () => j(t),
                                        className:
                                          "w-full h-[250px] xs:h-[300px] lg:h-[300px] minW1600:!h-[17vw] relative overflow-hidden rounded-[46px] " +
                                          (g == t
                                            ? "border-[3px] !border-[#ffffff80]"
                                            : ""),
                                        children: [
                                          s.locked
                                            ? (0, n.jsx)(i.Fragment, {
                                                children: (0, n.jsx)("div", {
                                                  className:
                                                    "w-full h-full bg-[#dc9285] flex items-center justify-center",
                                                  children: (0, n.jsx)("img", {
                                                    src:
                                                      e + "/images/Padlock.png",
                                                    className:
                                                      "max-w-[260px] minW1600:!max-w-[30vh]",
                                                    alt: "",
                                                  }),
                                                }),
                                              })
                                            : (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                  (0, n.jsx)("svg", {
                                                    className:
                                                      "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] cursor-pointer",
                                                    onClick: () => C(s),
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                    viewBox: "0 0 24 24",
                                                    children: (0, n.jsx)(
                                                      "path",
                                                      {
                                                        fillRule: "evenodd",
                                                        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z",
                                                        clipRule: "evenodd",
                                                        fill: "#dc9285",
                                                      }
                                                    ),
                                                  }),
                                                  (0, n.jsx)("img", {
                                                    src: s.image,
                                                    alt: "",
                                                    onClick: () => C(s),
                                                    className:
                                                      "w-full h-full imageWrap object-cover cursor-pointer",
                                                  }),
                                                ],
                                              }),
                                          (0, n.jsxs)("div", {
                                            className:
                                              "absolute w-[85%] left-1/2 -translate-x-1/2 top-6 flex items-center justify-between z-[1] pointer-events-none",
                                            children: [
                                              (0, n.jsx)("h3", {
                                                className:
                                                  "text__28 minW1600:!text-[2.4vw] font-DunkelSans font-bold",
                                                children: s.season,
                                              }),
                                              (0, n.jsxs)("p", {
                                                className:
                                                  "text__28 minW1600:!text-[2.4vw] font-DunkelSans font-bold",
                                                children: ["EP ", t + 1],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    t
                                  )
                                ),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "mt-4 flex items-center justify-center gap-2",
                      children: N.map((e, s) =>
                        (0, n.jsx)("div", {
                          onClick: () => j(s),
                          className:
                            "w-[10px] h-[10px] rounded-full border !border-white cursor-pointer " +
                            (g == s ? "bg-white" : ""),
                        })
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
  },
  function (e) {
    e.O(0, [508, 843, 410, 888, 774, 179], function () {
      return e((e.s = 8739));
    }),
      (_N_E = e.O());
  },
]);
