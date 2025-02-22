"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [410],
  {
    1410: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return h;
        },
      });
      var a = s(5893),
        r = s(7294),
        n = s(9008),
        l = s.n(n),
        i = s(1163),
        o = s(8519),
        c = s(9357),
        x = s(1664),
        p = s.n(x),
        m = s(3353),
        d = () =>
          (0, a.jsx)(r.Fragment, {
            children: (0, a.jsx)("section", {
              className: "!py-0 relative z-[2]",
              children: (0, a.jsx)(m.Z, {
                className: "border-t !border-[#ffffff33] py-[30px]",
                children: (0, a.jsx)("div", {
                  className:
                    "flex items-center justify-center xs:justify-end w-full",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-3 minW1600:!gap-[2vw]",
                    children: [
                      (0, a.jsx)("a", {
                        href: "mailto:Contact@shironekoeth.live",
                        className: "text__18 minW1600:!text-[3vh] text-white",
                        children: "Contact@shironekoeth.live",
                      }),
                      (0, a.jsx)(p(), {
                        href: "/disclaimer",
                        className: "text__18 minW1600:!text-[3vh] text-white",
                        children: "Disclaimer",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          }),
        h = (e) => {
          let {
              children: t,
              title: s = "Homepage",
              description: n = "Homepage Desc",
              url: x = "https://www.shironeko.gg/",
              image: p = "/images/Shironekologo.jpg",
              navbar: m = !0,
              footer: h = !1,
            } = e,
            { pathname: f } = (0, i.useRouter)(),
            u = (0, c.ZP)();
          return (0, a.jsxs)(r.Fragment, {
            children: [
              (0, a.jsxs)(l(), {
                children: [
                  (0, a.jsx)("title", { children: s }),
                  (0, a.jsx)("meta", { name: "title", content: s }),
                  (0, a.jsx)("meta", { name: "description", content: n }),
                  (0, a.jsx)("meta", { name: "author", content: "Shiro Neko" }),
                  (0, a.jsx)("meta", {
                    name: "keywords",
                    content:
                      "Shiro Neko token, crypto distribution platform, crypto token project, Shiro Neko crypto, Shiro Neko blockchain solutions, token distribution Shiro Neko, crypto project launch, blockchain token distribution, Shiro Neko crypto services, Shiro Neko crypto project",
                  }),
                  (0, a.jsx)("meta", {
                    name: "robots",
                    content: "index, follow",
                  }),
                  (0, a.jsx)("meta", { property: "og:title", content: s }),
                  (0, a.jsx)("meta", { property: "og:site_name", content: s }),
                  (0, a.jsx)("meta", { property: "og:url", content: x }),
                  (0, a.jsx)("meta", {
                    property: "og:description",
                    content: n,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:type",
                    content: "article",
                  }),
                  (0, a.jsx)("meta", { property: "og:image", content: u + p }),
                  (0, a.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, a.jsx)("meta", { property: "twitter:url", content: x }),
                  (0, a.jsx)("meta", { property: "twitter:title", content: s }),
                  (0, a.jsx)("meta", {
                    property: "twitter:description",
                    content: n,
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:image",
                    content: u + p,
                  }),
                  (0, a.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                  }),
                  (0, a.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossorigin: !0,
                  }),
                  (0, a.jsx)("link", {
                    href: "https://fonts.cdnfonts.com/css/pragmatica",
                    rel: "stylesheet",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full overflow-hidden bg-black " +
                  ("/" == f ? "h-dvh" : "min-h-screen"),
                children: [
                  m ? (0, a.jsx)(o.Z, {}) : "",
                  t,
                  h ? (0, a.jsx)(d, {}) : "",
                ],
              }),
              (0, a.jsx)("script", {
                src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js",
                crossorigin: !0,
              }),
              (0, a.jsx)("script", {
                src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
                crossorigin: !0,
              }),
              (0, a.jsx)("script", {
                src: "https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js",
                crossorigin: !0,
              }),
            ],
          });
        };
    },
    8519: function (e, t, s) {
      var a = s(5893),
        r = s(7294),
        n = s(9357),
        l = s(3353),
        i = s(1664),
        o = s.n(i);
      t.Z = (e) => {
        let { showingBtn: t = !1, Clickable: s = !1 } = e,
          i = (0, n.ZP)(),
          [c, x] = (0, r.useState)(!1);
        return (0, a.jsxs)(r.Fragment, {
          children: [
            t
              ? (0, a.jsxs)("div", {
                  className:
                    "w-[40px] lg:w-[46px] h-[40px] lg:h-[46px] flex-wrap relative flex items-center justify-center transition-all duration-300 barIcon z-[80] "
                      .concat(c ? "active" : "", " ")
                      .concat(s ? "cursor-pointer" : "", " "),
                  onClick: () => x(!c),
                  children: [
                    (0, a.jsx)("span", {
                      className:
                        "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out transform ".concat(
                          c ? "rotate-45 translate-y-[10px]" : "translate-y-0"
                        ),
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out my-1 ".concat(
                          c ? "opacity-0" : "opacity-100"
                        ),
                    }),
                    (0, a.jsx)("span", {
                      className:
                        "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out transform ".concat(
                          c ? "-rotate-45 -translate-y-[10px]" : "translate-y-0"
                        ),
                    }),
                  ],
                })
              : (0, a.jsx)("div", {
                  className:
                    "fixed w-full left-0 top-[3rem] z-[80] pointer-events-none",
                  children: (0, a.jsx)(l.Z, {
                    children: (0, a.jsxs)("div", {
                      className:
                        "w-[40px] lg:w-[46px] h-[40px] lg:h-[46px] flex-wrap relative flex items-center justify-center cursor-pointer pointer-events-auto transition-all duration-300 barIcon ml-auto ".concat(
                          c ? "active" : ""
                        ),
                      onClick: () => x(!c),
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out transform ".concat(
                              c
                                ? "rotate-45 translate-y-[10px]"
                                : "translate-y-0"
                            ),
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out my-1 ".concat(
                              c ? "opacity-0" : "opacity-100"
                            ),
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "block w-full h-[5px] bg-white rounded-full transition-all duration-300 ease-in-out transform ".concat(
                              c
                                ? "-rotate-45 -translate-y-[10px]"
                                : "translate-y-0"
                            ),
                        }),
                      ],
                    }),
                  }),
                }),
            (0, a.jsx)("div", {
              className:
                "fixed w-[300px] xs:w-[320px] lg:w-[375px] xl:w-[450px] minW1600:!w-[500px] h-[102%] z-[60] top-1/2 -translate-y-1/2 bg-[#1E1E1E] rounded-tr-[32px] rounded-br-[24px] border-[4px] !border-[#DC9285] transition-all duration-300 " +
                (c ? "-left-[5px]" : "-left-[100%]"),
              children: (0, a.jsxs)("div", {
                className: "relative w-full h-full pt-8",
                children: [
                  (0, a.jsx)("img", {
                    src: i + "/images/sadsad.webp",
                    className:
                      "absolute z-[1] top-1/2 -translate-y-1/2 -right-[4rem] xs:-right-[5rem] w-[80px] xs:w-[100px]",
                    alt: "",
                  }),
                  (0, a.jsx)("div", {
                    className: "w-full h-full overflow-auto",
                    children: (0, a.jsxs)("div", {
                      className: "flex flex-wrap h-full gap-y-3",
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "self-start grid grid-cols-1 gap-y-3 minW1600:gap-y-[3vh] w-full pl-[2.5rem] lg:pl-[3.5rem] xl:pl-[3rem] minW1600:!pl-[4.5vw] pr-3 ",
                          children: [
                            (0, a.jsx)(o(), {
                              href: "/",
                              className:
                                "text-white transition-all duration-300 hover:!text-[#DC9285] font-bold font-DunkelSans text-[32px] xl:text-[46px] inline-block w-full uppercase " +
                                (s ? "" : "cursor-none"),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: i + "/images/start2.svg",
                                    className: "w-[28px] lg:w-[32px]",
                                    alt: "",
                                  }),
                                  (0, a.jsx)("p", { children: "Home" }),
                                ],
                              }),
                            }),
                            
                            (0, a.jsx)(o(), {
                              href: "/how-to-buy",
                              className:
                                "text-white transition-all duration-300 hover:!text-[#DC9285] font-bold font-DunkelSans text-[32px] xl:text-[46px] inline-block w-full uppercase " +
                                (s ? "" : "cursor-none"),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: i + "/images/start2.svg",
                                    className: "w-[28px] lg:w-[32px]",
                                    alt: "",
                                  }),
                                  (0, a.jsx)("p", { children: "how to buy" }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(o(), {
                              href: "/tokenomics",
                              className:
                                "text-white transition-all duration-300 hover:!text-[#DC9285] font-bold font-DunkelSans text-[32px] xl:text-[46px] inline-block w-full uppercase " +
                                (s ? "" : "cursor-none"),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: i + "/images/start2.svg",
                                    className: "w-[28px] lg:w-[32px]",
                                    alt: "",
                                  }),
                                  (0, a.jsx)("p", { children: "tokenomics" }),
                                ],
                              }),
                            }),
                            (0, a.jsx)(o(), {
                              href: "/faq",
                              className:
                                "text-white transition-all duration-300 hover:!text-[#DC9285] font-bold font-DunkelSans text-[32px] xl:text-[46px] inline-block w-full uppercase " +
                                (s ? "" : "cursor-none"),
                              children: (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  (0, a.jsx)("img", {
                                    src: i + "/images/start2.svg",
                                    className: "w-[28px] lg:w-[32px]",
                                    alt: "",
                                  }),
                                  (0, a.jsx)("p", { children: "faq" }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "flex items-center justify-center gap-3 self-end w-full pb-4 lg:pb-3 minW1600:!pb-[4vh]",
                          children: [
                            (0, a.jsx)("a", {
                              href: "https://www.dextools.io/",
                              target: "_blank",
                              children: (0, a.jsx)("img", {
                                src: i + "/images/Dextools Icon.webp",
                                className: "w-[36px] lg:w-[46px]",
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://dexscreener.com/ethereum/0xcomingsoon",
                              target: "_blank",
                              children: (0, a.jsx)("img", {
                                src: i + "/images/Frame 11.png",
                                className: "w-[36px] lg:w-[46px]",
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://t.me/shironeko_erc20",
                              target: "_blank",
                              children: (0, a.jsx)("img", {
                                src: i + "/images/Telegram Icon.webp",
                                className: "w-[36px] lg:w-[46px]",
                                alt: "",
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "https://x.com/shironeko_eth",
                              target: "_blank",
                              children: (0, a.jsx)("img", {
                                src: i + "/images/dfdfdsfsd.png",
                                className: "w-[36px] lg:w-[46px]",
                                alt: "",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              onClick: () => x(!c),
              className:
                " fixed z-[30] w-full h-full top-0 bg-black opacity-50 " +
                (c ? "left-0" : "-left-[100%]"),
            }),
          ],
        });
      };
    },
  },
]);
