(function (t) {
  function e(e) {
    for (
      var c, o, r = e[0], s = e[1], u = e[2], d = 0, p = [];
      d < r.length;
      d++
    )
      (o = r[d]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]),
        (a[o] = 0);
    for (c in s) Object.prototype.hasOwnProperty.call(s, c) && (t[c] = s[c]);
    l && l(e);
    while (p.length) p.shift()();
    return i.push.apply(i, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < i.length; e++) {
      for (var n = i[e], c = !0, r = 1; r < n.length; r++) {
        var s = n[r];
        0 !== a[s] && (c = !1);
      }
      c && (i.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var c = {},
    a = { app: 0 },
    i = [];
  function o(e) {
    if (c[e]) return c[e].exports;
    var n = (c[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = c),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var c in t)
          o.d(
            n,
            c,
            function (e) {
              return t[e];
            }.bind(null, c)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var u = 0; u < r.length; u++) e(r[u]);
  var l = s;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "08c3": function (t, e, n) {
    t.exports = "./img/image-product-1.0ac65e8d.jpg";
  },
  "0ceb": function (t, e, n) {
    t.exports = "./img/image-product-4-thumbnail.a2a7a04c.jpg";
  },
  "11ca": function (t, e, n) {
    t.exports = "./img/icon-delete.b0321cb3.svg";
  },
  "1f77": function (t, e, n) {},
  "3c76": function (t, e, n) {
    t.exports = "./img/icon-close.383d1284.svg";
  },
  "47c6": function (t, e, n) {
    "use strict";
    n("1f77");
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var c = n("7a23"),
      a = { class: "product" },
      i = { class: "container" };
    function o(t, e, n, o, r, s) {
      var u = Object(c["n"])("ModalBox"),
        l = Object(c["n"])("Header"),
        d = Object(c["n"])("Box"),
        p = Object(c["n"])("Text");
      return (
        Object(c["j"])(),
        Object(c["c"])(
          c["a"],
          null,
          [
            Object(c["g"])(u, { ref: "modal" }, null, 512),
            Object(c["g"])(l, { amount: r.amount }, null, 8, ["amount"]),
            Object(c["d"])("div", a, [
              Object(c["d"])("div", i, [
                Object(c["g"])(d, {
                  onClick:
                    e[0] ||
                    (e[0] = function (t) {
                      return s.test(t);
                    }),
                }),
                Object(c["g"])(p, {
                  onPassData:
                    e[1] ||
                    (e[1] = function (t) {
                      return s.passData(t);
                    }),
                }),
              ]),
            ]),
          ],
          64
        )
      );
    }
    var r = n("3c76"),
      s = n.n(r),
      u = n("90cb"),
      l = n.n(u),
      d = n("69c6"),
      p = n.n(d),
      b = { class: "modal" },
      f = { class: "modal-content" },
      m = { class: "close" },
      j = { class: "main" };
    function O(t, e, n, a, i, o) {
      var r = Object(c["n"])("Box");
      return (
        Object(c["j"])(),
        Object(c["c"])("div", b, [
          Object(c["d"])("div", f, [
            Object(c["d"])("div", m, [
              Object(c["d"])("img", {
                src: s.a,
                alt: "alt",
                onClick:
                  e[0] ||
                  (e[0] = function () {
                    return o.close && o.close.apply(o, arguments);
                  }),
              }),
            ]),
            Object(c["d"])("div", j, [
              Object(c["d"])("img", {
                class: "previous",
                src: l.a,
                alt: "alt",
                onClick:
                  e[1] ||
                  (e[1] = function () {
                    return o.previous && o.previous.apply(o, arguments);
                  }),
              }),
              Object(c["g"])(r, { ref: "main" }, null, 512),
              Object(c["d"])("img", {
                class: "next",
                src: p.a,
                alt: "alt",
                onClick:
                  e[2] ||
                  (e[2] = function () {
                    return o.next && o.next.apply(o, arguments);
                  }),
              }),
            ]),
          ]),
        ])
      );
    }
    var g = n("8aca"),
      v = n.n(g),
      h = n("8f55"),
      y = n.n(h),
      x = n("eef8"),
      k = n.n(x),
      w = n("0ceb"),
      C = n.n(w),
      _ = function (t) {
        return (
          Object(c["l"])("data-v-7c9af02b"), (t = t()), Object(c["k"])(), t
        );
      },
      E = { class: "box" },
      $ = { class: "main-im" },
      M = ["src"],
      P = _(function () {
        return Object(c["d"])(
          "div",
          { class: "tab-1 opacity" },
          [Object(c["d"])("img", { src: v.a, alt: "alt", data: "1" })],
          -1
        );
      }),
      S = _(function () {
        return Object(c["d"])(
          "div",
          { class: "tab-2" },
          [Object(c["d"])("img", { src: y.a, alt: "alt", data: "2" })],
          -1
        );
      }),
      D = _(function () {
        return Object(c["d"])(
          "div",
          { class: "tab-3" },
          [Object(c["d"])("img", { src: k.a, alt: "alt", data: "3" })],
          -1
        );
      }),
      B = _(function () {
        return Object(c["d"])(
          "div",
          { class: "tab-4" },
          [Object(c["d"])("img", { src: C.a, alt: "alt", data: "4" })],
          -1
        );
      }),
      T = [P, S, D, B];
    function L(t, e, a, i, o, r) {
      return (
        Object(c["j"])(),
        Object(c["c"])("div", E, [
          Object(c["d"])("div", $, [
            Object(c["d"])(
              "img",
              {
                class: "main",
                src: n("ead2")("./image-product-".concat(o.number, ".jpg")),
                alt: "alt",
              },
              null,
              8,
              M
            ),
          ]),
          Object(c["d"])(
            "div",
            {
              class: "thumbnails",
              onClick:
                e[0] ||
                (e[0] = function (t) {
                  return r.tab(t);
                }),
            },
            T
          ),
        ])
      );
    }
    n("159b"), n("a630"), n("3ca3");
    var A = {
        name: "Box",
        data: function () {
          return { number: 1 };
        },
        methods: {
          tab: function (t) {
            this.number = t.target.getAttribute("data");
            var e = t.target.parentElement.parentElement.children;
            Array.from(e).forEach(function (t) {
              t.classList.remove("opacity");
            }),
              t.target.parentElement.classList.add("opacity");
          },
        },
      },
      I = (n("94fa"), n("6b0d")),
      U = n.n(I);
    const V = U()(A, [
      ["render", L],
      ["__scopeId", "data-v-7c9af02b"],
    ]);
    var F = V,
      q = {
        name: "ModalBox",
        components: { Box: F },
        data: function () {
          return { counter: 0 };
        },
        methods: {
          close: function () {
            var t = document.querySelector(".modal");
            t.style.display = "none";
          },
          next: function () {
            var t = this.$refs.main.$el.children[1].children;
            (this.counter += 1),
              this.counter > t.length - 1 && (this.counter = 0),
              t[this.counter].children[0].click();
          },
          previous: function () {
            var t = this.$refs.main.$el.children[1].children;
            (this.counter -= 1),
              this.counter < 0 && (this.counter = t.length - 1),
              t[this.counter].children[0].click();
          },
          display: function () {
            document.querySelector(".modal").style.display = "block";
          },
        },
      };
    n("47c6");
    const H = U()(q, [
      ["render", O],
      ["__scopeId", "data-v-dc399d28"],
    ]);
    var N = H,
      J = (n("99af"), n("716d")),
      W = n.n(J),
      Y = n("e347"),
      z = n.n(Y),
      G = n("d965"),
      K = n.n(G),
      Q = n("b10a"),
      R = n.n(Q),
      X = n("11ca"),
      Z = n.n(X),
      tt = function (t) {
        return (
          Object(c["l"])("data-v-7ec7c767"), (t = t()), Object(c["k"])(), t
        );
      },
      et = { class: "container" },
      nt = { class: "navbar" },
      ct = tt(function () {
        return Object(c["d"])("img", { src: W.a, alt: "alt" }, null, -1);
      }),
      at = [ct],
      it = tt(function () {
        return Object(c["d"])(
          "div",
          { class: "logo" },
          [Object(c["d"])("img", { src: z.a, alt: "alt" })],
          -1
        );
      }),
      ot = { ref: "menu" },
      rt = tt(function () {
        return Object(c["d"])("li", null, "Collections", -1);
      }),
      st = tt(function () {
        return Object(c["d"])("li", null, "Men", -1);
      }),
      ut = tt(function () {
        return Object(c["d"])("li", null, "Women", -1);
      }),
      lt = tt(function () {
        return Object(c["d"])("li", null, "About", -1);
      }),
      dt = tt(function () {
        return Object(c["d"])("li", null, "Contact", -1);
      }),
      pt = { class: "profile" },
      bt = { class: "cart" },
      ft = { key: 0 },
      mt = { key: 1 },
      jt = tt(function () {
        return Object(c["d"])(
          "div",
          { class: "avatar" },
          [Object(c["d"])("img", { src: R.a, alt: "alt" })],
          -1
        );
      }),
      Ot = tt(function () {
        return Object(c["d"])("h2", null, "Cart", -1);
      }),
      gt = tt(function () {
        return Object(c["d"])(
          "img",
          { class: "main", src: v.a, alt: "alt" },
          null,
          -1
        );
      }),
      vt = tt(function () {
        return Object(c["d"])(
          "p",
          null,
          [
            Object(c["f"])("Fall Limited Edition Sneakers"),
            Object(c["d"])("div", { class: "total" }),
          ],
          -1
        );
      }),
      ht = { class: "equation" };
    function yt(t, e, n, a, i, o) {
      return (
        Object(c["j"])(),
        Object(c["c"])("header", null, [
          Object(c["d"])("div", et, [
            Object(c["d"])("div", nt, [
              Object(c["d"])(
                "div",
                {
                  class: "menu-icon",
                  onClick:
                    e[0] ||
                    (e[0] = function () {
                      return o.show && o.show.apply(o, arguments);
                    }),
                },
                at
              ),
              it,
              Object(c["d"])(
                "ul",
                ot,
                [
                  Object(c["d"])("img", {
                    class: "close",
                    src: s.a,
                    alt: "alt",
                    onClick:
                      e[1] ||
                      (e[1] = function () {
                        return o.close && o.close.apply(o, arguments);
                      }),
                  }),
                  rt,
                  st,
                  ut,
                  lt,
                  dt,
                ],
                512
              ),
            ]),
            Object(c["d"])("div", pt, [
              Object(c["d"])("div", bt, [
                Object(c["d"])("img", {
                  src: K.a,
                  alt: "alt",
                  onClick:
                    e[2] ||
                    (e[2] = function () {
                      return o.total && o.total.apply(o, arguments);
                    }),
                }),
                i.isEmpty
                  ? (Object(c["j"])(),
                    Object(c["c"])("span", ft, Object(c["o"])(0)))
                  : (Object(c["j"])(),
                    Object(c["c"])("span", mt, Object(c["o"])(n.amount), 1)),
              ]),
              jt,
              Object(c["d"])(
                "div",
                { class: Object(c["i"])(["basket", { hidden: !i.isVisible }]) },
                [
                  Ot,
                  Object(c["d"])(
                    "p",
                    {
                      class: Object(c["i"])(["empty", { hidden: !i.isEmpty }]),
                    },
                    "Your cart is empty",
                    2
                  ),
                  Object(c["d"])(
                    "div",
                    {
                      class: Object(c["i"])([
                        "body-card",
                        { hidden: i.isEmpty },
                      ]),
                    },
                    [
                      gt,
                      Object(c["d"])("div", null, [
                        vt,
                        Object(c["d"])("p", ht, [
                          Object(c["f"])(
                            Object(c["o"])(
                              "$".concat(i.price, ".00x").concat(n.amount)
                            ),
                            1
                          ),
                          Object(c["d"])(
                            "span",
                            null,
                            Object(c["o"])("".concat(i.totalPrice, ".00$")),
                            1
                          ),
                        ]),
                      ]),
                      Object(c["d"])("img", {
                        class: "delete",
                        src: Z.a,
                        alt: "alt",
                        onClick:
                          e[3] ||
                          (e[3] = function () {
                            return o.clear && o.clear.apply(o, arguments);
                          }),
                      }),
                    ],
                    2
                  ),
                  Object(c["d"])(
                    "button",
                    { class: Object(c["i"])({ hidden: i.isEmpty }) },
                    "Checkout",
                    2
                  ),
                ],
                2
              ),
            ]),
          ]),
        ])
      );
    }
    n("a9e3");
    var xt = {
      name: "Header",
      props: ["amount"],
      data: function () {
        return { totalPrice: 0, price: 125, isVisible: !1, isEmpty: !0 };
      },
      methods: {
        total: function () {
          (this.totalPrice = this.price * Number(this.amount)),
            this.isVisible ? (this.isVisible = !1) : (this.isVisible = !0),
            this.amount > 0 ? (this.isEmpty = !1) : (this.isEmpty = !0);
        },
        clear: function () {
          this.isEmpty = !0;
        },
        show: function () {
          this.$refs.menu.style.display = "block";
        },
        close: function () {
          this.$refs.menu.style.display = "none";
        },
      },
    };
    n("e5c2");
    const kt = U()(xt, [
      ["render", yt],
      ["__scopeId", "data-v-7ec7c767"],
    ]);
    var wt = kt,
      Ct = n("b398"),
      _t = n.n(Ct),
      Et = n("77ea"),
      $t = n.n(Et),
      Mt = function (t) {
        return (
          Object(c["l"])("data-v-636112ec"), (t = t()), Object(c["k"])(), t
        );
      },
      Pt = { class: "Text" },
      St = Object(c["e"])(
        '<p class="name" data-v-636112ec>Sneaker Company</p><h1 class="title" data-v-636112ec>Fall Limited Edition Sneakers</h1><p class="para" data-v-636112ec>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p><div class="price" data-v-636112ec><p data-v-636112ec>$125.00 <span data-v-636112ec> 50%</span></p><span class="old" data-v-636112ec>250$</span></div>',
        4
      ),
      Dt = { class: "add" },
      Bt = { class: "amount" },
      Tt = Mt(function () {
        return Object(c["d"])("img", { src: K.a, alt: "alt" }, null, -1);
      }),
      Lt = Object(c["f"])("Add to cart"),
      At = [Tt, Lt];
    function It(t, e, n, a, i, o) {
      return (
        Object(c["j"])(),
        Object(c["c"])("div", Pt, [
          St,
          Object(c["d"])("div", Dt, [
            Object(c["d"])("div", Bt, [
              Object(c["d"])("div", null, [
                Object(c["d"])("img", {
                  src: _t.a,
                  alt: "alt",
                  onClick:
                    e[0] ||
                    (e[0] = function () {
                      return o.countDown && o.countDown.apply(o, arguments);
                    }),
                }),
              ]),
              Object(c["d"])("span", null, Object(c["o"])(i.amount), 1),
              Object(c["d"])("div", null, [
                Object(c["d"])("img", {
                  src: $t.a,
                  alt: "alt",
                  onClick:
                    e[1] ||
                    (e[1] = function () {
                      return o.countUp && o.countUp.apply(o, arguments);
                    }),
                }),
              ]),
            ]),
            Object(c["d"])(
              "button",
              {
                onMousedown:
                  e[2] ||
                  (e[2] = function (t) {
                    return o.addCart(t);
                  }),
                onMouseup:
                  e[3] ||
                  (e[3] = function (t) {
                    return o.reset(t);
                  }),
              },
              At,
              32
            ),
          ]),
        ])
      );
    }
    var Ut = {
      name: "Text",
      data: function () {
        return { amount: 0 };
      },
      methods: {
        countUp: function () {
          this.amount += 1;
        },
        countDown: function () {
          0 === this.amount ? this.amount : (this.amount -= 1);
        },
        addCart: function (t) {
          (t.target.style.opacity = "0.5"), this.$emit("passData", this.amount);
        },
        reset: function (t) {
          t.target.style.opacity = "1";
        },
      },
    };
    n("c4da");
    const Vt = U()(Ut, [
      ["render", It],
      ["__scopeId", "data-v-636112ec"],
    ]);
    var Ft = Vt,
      qt = {
        name: "App",
        components: { ModalBox: N, Header: wt, Box: F, Text: Ft },
        data: function () {
          return { amount: 0 };
        },
        methods: {
          passData: function (t) {
            this.amount = t;
          },
          test: function (t) {
            "main" === t.target.classList[0] && this.$refs.modal.display();
          },
        },
      };
    n("f7a7");
    const Ht = U()(qt, [
      ["render", o],
      ["__scopeId", "data-v-067b9d96"],
    ]);
    var Nt = Ht,
      Jt = n("5502"),
      Wt = Object(Jt["a"])({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      });
    Object(c["b"])(Nt).use(Wt).mount("#app");
  },
  "69c6": function (t, e, n) {
    t.exports = "./img/icon-next.b02d406c.svg";
  },
  "716d": function (t, e, n) {
    t.exports = "./img/icon-menu.2166e08d.svg";
  },
  "77ea": function (t, e, n) {
    t.exports = "./img/icon-plus.d13f859f.svg";
  },
  "81f1": function (t, e, n) {},
  8611: function (t, e, n) {
    t.exports = "./img/image-product-3.d8f0fd25.jpg";
  },
  "8aca": function (t, e, n) {
    t.exports = "./img/image-product-1-thumbnail.29a235ed.jpg";
  },
  "8f55": function (t, e, n) {
    t.exports = "./img/image-product-2-thumbnail.5ed54768.jpg";
  },
  "90cb": function (t, e, n) {
    t.exports = "./img/icon-previous.11c68ec6.svg";
  },
  "94fa": function (t, e, n) {
    "use strict";
    n("e6dd");
  },
  b10a: function (t, e, n) {
    t.exports = "./img/image-avatar.aeacd4d1.png";
  },
  b398: function (t, e, n) {
    t.exports = "./img/icon-minus.0035f16e.svg";
  },
  c4da: function (t, e, n) {
    "use strict";
    n("81f1");
  },
  ca5b: function (t, e, n) {
    t.exports = "./img/image-product-2.dc5f56d9.jpg";
  },
  d436: function (t, e, n) {},
  d965: function (t, e, n) {
    t.exports = "./img/icon-cart.369779e8.svg";
  },
  dedb: function (t, e, n) {
    t.exports = "./img/image-product-4.5e95fcb4.jpg";
  },
  e20a: function (t, e, n) {},
  e347: function (t, e, n) {
    t.exports = "./img/logo.06305c96.svg";
  },
  e5c2: function (t, e, n) {
    "use strict";
    n("d436");
  },
  e6dd: function (t, e, n) {},
  ead2: function (t, e, n) {
    var c = {
      "./image-product-1-thumbnail.jpg": "8aca",
      "./image-product-1.jpg": "08c3",
      "./image-product-2-thumbnail.jpg": "8f55",
      "./image-product-2.jpg": "ca5b",
      "./image-product-3-thumbnail.jpg": "eef8",
      "./image-product-3.jpg": "8611",
      "./image-product-4-thumbnail.jpg": "0ceb",
      "./image-product-4.jpg": "dedb",
    };
    function a(t) {
      var e = i(t);
      return n(e);
    }
    function i(t) {
      if (!n.o(c, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return c[t];
    }
    (a.keys = function () {
      return Object.keys(c);
    }),
      (a.resolve = i),
      (t.exports = a),
      (a.id = "ead2");
  },
  eef8: function (t, e, n) {
    t.exports = "./img/image-product-3-thumbnail.c6ec7433.jpg";
  },
  f7a7: function (t, e, n) {
    "use strict";
    n("e20a");
  },
});
//# sourceMappingURL=app.cc444e70.js.map
