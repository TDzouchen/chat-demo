/*!
* Talkdesk Confidential
*
* Copyright (C) Talkdesk Inc. 2024
*
* The source code for this program is not published or otherwise divested
* of its trade secrets, irrespective of what has been deposited with the
* U.S. Copyright Office. Unauthorized copying of this file, via any medium
* is strictly prohibited.
*/
function Ra(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Ov(e) {
  if (Array.isArray(e)) return e;
}
function Iv(e) {
  if (Array.isArray(e)) return Ra(e);
}
function Tv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function vo(e, r, t, n, a, i, o) {
  try {
    var s = e[i](o), c = s.value;
  } catch (u) {
    return void t(u);
  }
  s.done ? r(c) : Promise.resolve(c).then(n, a);
}
function Y(e) {
  return function() {
    var r = this, t = arguments;
    return new Promise(function(n, a) {
      var i = e.apply(r, t);
      function o(c) {
        vo(i, n, a, o, s, "next", c);
      }
      function s(c) {
        vo(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
function Pv(e, r, t) {
  return r = kr(r), Mv(e, pi() ? Reflect.construct(r, t || [], kr(e).constructor) : r.apply(e, t));
}
function Dr(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Rv(e, r, t) {
  if (pi()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (e.bind.apply(e, n))();
  return t && Mr(a, t.prototype), a;
}
function fo(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, sc(n.key), n);
  }
}
function Fr(e, r, t) {
  return r && fo(e.prototype, r), t && fo(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function A(e, r, t) {
  return (r = sc(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function kr(e) {
  return kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, kr(e);
}
function Cv(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), r && Mr(e, r);
}
function xv(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function pi() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pi = function() {
    return !!e;
  })();
}
function _v(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Lv(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        c = !1;
      } else for (; !(c = (n = i.call(t)).done) && (s.push(n.value), s.length !== r); c = !0) ;
    } catch (v) {
      u = !0, a = v;
    } finally {
      try {
        if (!c && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function Av() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ho(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function M(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ho(Object(t), !0).forEach(function(n) {
      A(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ho(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function Nv(e, r) {
  if (e == null) return {};
  var t, n, a = kv(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.includes(t) || {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function kv(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function Mv(e, r) {
  if (r && (typeof r == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Tv(e);
}
function C() {
  C = function() {
    return r;
  };
  var e, r = {}, t = Object.prototype, n = t.hasOwnProperty, a = Object.defineProperty || function(p, h, y) {
    p[h] = y.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", s = i.asyncIterator || "@@asyncIterator", c = i.toStringTag || "@@toStringTag";
  function u(p, h, y) {
    return Object.defineProperty(p, h, {
      value: y,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), p[h];
  }
  try {
    u({}, "");
  } catch {
    u = function(h, y, E) {
      return h[y] = E;
    };
  }
  function v(p, h, y, E) {
    var b = h && h.prototype instanceof S ? h : S, R = Object.create(b.prototype), T = new Ae(E || []);
    return a(R, "_invoke", {
      value: We(p, y, T)
    }), R;
  }
  function l(p, h, y) {
    try {
      return {
        type: "normal",
        arg: p.call(h, y)
      };
    } catch (E) {
      return {
        type: "throw",
        arg: E
      };
    }
  }
  r.wrap = v;
  var f = "suspendedStart", d = "suspendedYield", m = "executing", w = "completed", g = {};
  function S() {
  }
  function $() {
  }
  function I() {
  }
  var _ = {};
  u(_, o, function() {
    return this;
  });
  var ue = Object.getPrototypeOf, U = ue && ue(ue(ge([])));
  U && U !== t && n.call(U, o) && (_ = U);
  var O = I.prototype = S.prototype = Object.create(_);
  function N(p) {
    ["next", "throw", "return"].forEach(function(h) {
      u(p, h, function(y) {
        return this._invoke(h, y);
      });
    });
  }
  function Z(p, h) {
    function y(b, R, T, z) {
      var J = l(p[b], p, R);
      if (J.type !== "throw") {
        var Ke = J.arg, yr = Ke.value;
        return yr && typeof yr == "object" && n.call(yr, "__await") ? h.resolve(yr.__await).then(function(je) {
          y("next", je, T, z);
        }, function(je) {
          y("throw", je, T, z);
        }) : h.resolve(yr).then(function(je) {
          Ke.value = je, T(Ke);
        }, function(je) {
          return y("throw", je, T, z);
        });
      }
      z(J.arg);
    }
    var E;
    a(this, "_invoke", {
      value: function(b, R) {
        function T() {
          return new h(function(z, J) {
            y(b, R, z, J);
          });
        }
        return E = E ? E.then(T, T) : T();
      }
    });
  }
  function We(p, h, y) {
    var E = f;
    return function(b, R) {
      if (E === m) throw Error("Generator is already running");
      if (E === w) {
        if (b === "throw") throw R;
        return {
          value: e,
          done: !0
        };
      }
      for (y.method = b, y.arg = R; ; ) {
        var T = y.delegate;
        if (T) {
          var z = ee(T, y);
          if (z) {
            if (z === g) continue;
            return z;
          }
        }
        if (y.method === "next") y.sent = y._sent = y.arg;
        else if (y.method === "throw") {
          if (E === f) throw E = w, y.arg;
          y.dispatchException(y.arg);
        } else y.method === "return" && y.abrupt("return", y.arg);
        E = m;
        var J = l(p, h, y);
        if (J.type === "normal") {
          if (E = y.done ? w : d, J.arg === g) continue;
          return {
            value: J.arg,
            done: y.done
          };
        }
        J.type === "throw" && (E = w, y.method = "throw", y.arg = J.arg);
      }
    };
  }
  function ee(p, h) {
    var y = h.method, E = p.iterator[y];
    if (E === e) return h.delegate = null, y === "throw" && p.iterator.return && (h.method = "return", h.arg = e, ee(p, h), h.method === "throw") || y !== "return" && (h.method = "throw", h.arg = new TypeError("The iterator does not provide a '" + y + "' method")), g;
    var b = l(E, p.iterator, h.arg);
    if (b.type === "throw") return h.method = "throw", h.arg = b.arg, h.delegate = null, g;
    var R = b.arg;
    return R ? R.done ? (h[p.resultName] = R.value, h.next = p.nextLoc, h.method !== "return" && (h.method = "next", h.arg = e), h.delegate = null, g) : R : (h.method = "throw", h.arg = new TypeError("iterator result is not an object"), h.delegate = null, g);
  }
  function Jr(p) {
    var h = {
      tryLoc: p[0]
    };
    1 in p && (h.catchLoc = p[1]), 2 in p && (h.finallyLoc = p[2], h.afterLoc = p[3]), this.tryEntries.push(h);
  }
  function Le(p) {
    var h = p.completion || {};
    h.type = "normal", delete h.arg, p.completion = h;
  }
  function Ae(p) {
    this.tryEntries = [{
      tryLoc: "root"
    }], p.forEach(Jr, this), this.reset(!0);
  }
  function ge(p) {
    if (p || p === "") {
      var h = p[o];
      if (h) return h.call(p);
      if (typeof p.next == "function") return p;
      if (!isNaN(p.length)) {
        var y = -1, E = function b() {
          for (; ++y < p.length; ) if (n.call(p, y)) return b.value = p[y], b.done = !1, b;
          return b.value = e, b.done = !0, b;
        };
        return E.next = E;
      }
    }
    throw new TypeError(typeof p + " is not iterable");
  }
  return $.prototype = I, a(O, "constructor", {
    value: I,
    configurable: !0
  }), a(I, "constructor", {
    value: $,
    configurable: !0
  }), $.displayName = u(I, c, "GeneratorFunction"), r.isGeneratorFunction = function(p) {
    var h = typeof p == "function" && p.constructor;
    return !!h && (h === $ || (h.displayName || h.name) === "GeneratorFunction");
  }, r.mark = function(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, I) : (p.__proto__ = I, u(p, c, "GeneratorFunction")), p.prototype = Object.create(O), p;
  }, r.awrap = function(p) {
    return {
      __await: p
    };
  }, N(Z.prototype), u(Z.prototype, s, function() {
    return this;
  }), r.AsyncIterator = Z, r.async = function(p, h, y, E, b) {
    b === void 0 && (b = Promise);
    var R = new Z(v(p, h, y, E), b);
    return r.isGeneratorFunction(h) ? R : R.next().then(function(T) {
      return T.done ? T.value : R.next();
    });
  }, N(O), u(O, c, "Generator"), u(O, o, function() {
    return this;
  }), u(O, "toString", function() {
    return "[object Generator]";
  }), r.keys = function(p) {
    var h = Object(p), y = [];
    for (var E in h) y.push(E);
    return y.reverse(), function b() {
      for (; y.length; ) {
        var R = y.pop();
        if (R in h) return b.value = R, b.done = !1, b;
      }
      return b.done = !0, b;
    };
  }, r.values = ge, Ae.prototype = {
    constructor: Ae,
    reset: function(p) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(Le), !p) for (var h in this) h.charAt(0) === "t" && n.call(this, h) && !isNaN(+h.slice(1)) && (this[h] = e);
    },
    stop: function() {
      this.done = !0;
      var p = this.tryEntries[0].completion;
      if (p.type === "throw") throw p.arg;
      return this.rval;
    },
    dispatchException: function(p) {
      if (this.done) throw p;
      var h = this;
      function y(J, Ke) {
        return R.type = "throw", R.arg = p, h.next = J, Ke && (h.method = "next", h.arg = e), !!Ke;
      }
      for (var E = this.tryEntries.length - 1; E >= 0; --E) {
        var b = this.tryEntries[E], R = b.completion;
        if (b.tryLoc === "root") return y("end");
        if (b.tryLoc <= this.prev) {
          var T = n.call(b, "catchLoc"), z = n.call(b, "finallyLoc");
          if (T && z) {
            if (this.prev < b.catchLoc) return y(b.catchLoc, !0);
            if (this.prev < b.finallyLoc) return y(b.finallyLoc);
          } else if (T) {
            if (this.prev < b.catchLoc) return y(b.catchLoc, !0);
          } else {
            if (!z) throw Error("try statement without catch or finally");
            if (this.prev < b.finallyLoc) return y(b.finallyLoc);
          }
        }
      }
    },
    abrupt: function(p, h) {
      for (var y = this.tryEntries.length - 1; y >= 0; --y) {
        var E = this.tryEntries[y];
        if (E.tryLoc <= this.prev && n.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
          var b = E;
          break;
        }
      }
      b && (p === "break" || p === "continue") && b.tryLoc <= h && h <= b.finallyLoc && (b = null);
      var R = b ? b.completion : {};
      return R.type = p, R.arg = h, b ? (this.method = "next", this.next = b.finallyLoc, g) : this.complete(R);
    },
    complete: function(p, h) {
      if (p.type === "throw") throw p.arg;
      return p.type === "break" || p.type === "continue" ? this.next = p.arg : p.type === "return" ? (this.rval = this.arg = p.arg, this.method = "return", this.next = "end") : p.type === "normal" && h && (this.next = h), g;
    },
    finish: function(p) {
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var y = this.tryEntries[h];
        if (y.finallyLoc === p) return this.complete(y.completion, y.afterLoc), Le(y), g;
      }
    },
    catch: function(p) {
      for (var h = this.tryEntries.length - 1; h >= 0; --h) {
        var y = this.tryEntries[h];
        if (y.tryLoc === p) {
          var E = y.completion;
          if (E.type === "throw") {
            var b = E.arg;
            Le(y);
          }
          return b;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function(p, h, y) {
      return this.delegate = {
        iterator: ge(p),
        resultName: h,
        nextLoc: y
      }, this.method === "next" && (this.arg = e), g;
    }
  }, r;
}
function Mr(e, r) {
  return Mr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, Mr(e, r);
}
function gi(e, r) {
  return Ov(e) || Lv(e, r) || uc(e, r) || Av();
}
function Uv(e) {
  return Iv(e) || _v(e) || uc(e) || jv();
}
function Bv(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function sc(e) {
  var r = Bv(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function uc(e, r) {
  if (e) {
    if (typeof e == "string") return Ra(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ra(e, r) : void 0;
  }
}
function Ca(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ca = function(t) {
    if (t === null || !xv(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t)) return r.get(t);
      r.set(t, n);
    }
    function n() {
      return Rv(t, arguments, kr(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Mr(n, t);
  }, Ca(e);
}
var Qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Dv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = function(e) {
  return e && e.Math === Math && e;
}, j = (
  // eslint-disable-next-line es/no-global-this -- safe
  mr(typeof globalThis == "object" && globalThis) || mr(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  mr(typeof self == "object" && self) || mr(typeof Qr == "object" && Qr) || mr(typeof Qr == "object" && Qr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), cc = { exports: {} }, Fv = !1, po = j, Gv = Object.defineProperty, yi = function(e, r) {
  try {
    Gv(po, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    po[e] = r;
  }
  return r;
}, Hv = j, zv = yi, go = "__core-js_shared__", yo = cc.exports = Hv[go] || zv(go, {});
(yo.versions || (yo.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var mi = cc.exports, mo = mi, bi = function(e, r) {
  return mo[e] || (mo[e] = r || {});
}, P = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, Wv = P, Bt = !Wv(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), lc = Bt, vc = Function.prototype, xa = vc.call, Kv = lc && vc.bind.bind(xa, xa), L = lc ? Kv : function(e) {
  return function() {
    return xa.apply(e, arguments);
  };
}, Fe = function(e) {
  return e == null;
}, qv = Fe, Vv = TypeError, fr = function(e) {
  if (qv(e)) throw new Vv("Can't call method on " + e);
  return e;
}, Yv = fr, Xv = Object, Te = function(e) {
  return Xv(Yv(e));
}, Jv = L, Qv = Te, Zv = Jv({}.hasOwnProperty), X = Object.hasOwn || function(r, t) {
  return Zv(Qv(r), t);
}, ef = L, rf = 0, tf = Math.random(), nf = ef(1 .toString), wi = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + nf(++rf + tf, 36);
}, af = j, bo = af.navigator, wo = bo && bo.userAgent, Gr = wo ? String(wo) : "", fc = j, dn = Gr, $o = fc.process, So = fc.Deno, Eo = $o && $o.versions || So && So.version, Oo = Eo && Eo.v8, le, Pt;
Oo && (le = Oo.split("."), Pt = le[0] > 0 && le[0] < 4 ? 1 : +(le[0] + le[1]));
!Pt && dn && (le = dn.match(/Edge\/(\d+)/), (!le || le[1] >= 74) && (le = dn.match(/Chrome\/(\d+)/), le && (Pt = +le[1])));
var Dt = Pt, Io = Dt, of = P, sf = j, uf = sf.String, dc = !!Object.getOwnPropertySymbols && !of(function() {
  var e = Symbol("symbol detection");
  return !uf(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Io && Io < 41;
}), cf = dc, hc = cf && !Symbol.sham && typeof Symbol.iterator == "symbol", lf = j, vf = bi, To = X, ff = wi, df = dc, hf = hc, tr = lf.Symbol, hn = vf("wks"), pf = hf ? tr.for || tr : tr && tr.withoutSetter || ff, B = function(e) {
  return To(hn, e) || (hn[e] = df && To(tr, e) ? tr[e] : pf("Symbol." + e)), hn[e];
}, gf = B, yf = gf("toStringTag"), pc = {};
pc[yf] = "z";
var $i = String(pc) === "[object z]", pn = typeof document == "object" && document.all, k = typeof pn > "u" && pn !== void 0 ? function(e) {
  return typeof e == "function" || e === pn;
} : function(e) {
  return typeof e == "function";
}, fe = {}, mf = P, G = !mf(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), bf = k, H = function(e) {
  return typeof e == "object" ? e !== null : bf(e);
}, wf = j, Po = H, _a = wf.document, $f = Po(_a) && Po(_a.createElement), Ft = function(e) {
  return $f ? _a.createElement(e) : {};
}, Sf = G, Ef = P, Of = Ft, gc = !Sf && !Ef(function() {
  return Object.defineProperty(Of("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), If = G, Tf = P, yc = If && Tf(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Pf = H, Rf = String, Cf = TypeError, q = function(e) {
  if (Pf(e)) return e;
  throw new Cf(Rf(e) + " is not an object");
}, xf = Bt, Zr = Function.prototype.call, F = xf ? Zr.bind(Zr) : function() {
  return Zr.apply(Zr, arguments);
}, gn = j, _f = k, Lf = function(e) {
  return _f(e) ? e : void 0;
}, Ge = function(e, r) {
  return arguments.length < 2 ? Lf(gn[e]) : gn[e] && gn[e][r];
}, Af = L, Gt = Af({}.isPrototypeOf), jf = Ge, Nf = k, kf = Gt, Mf = hc, Uf = Object, mc = Mf ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = jf("Symbol");
  return Nf(r) && kf(r.prototype, Uf(e));
}, Bf = String, Ht = function(e) {
  try {
    return Bf(e);
  } catch {
    return "Object";
  }
}, Df = k, Ff = Ht, Gf = TypeError, Pe = function(e) {
  if (Df(e)) return e;
  throw new Gf(Ff(e) + " is not a function");
}, Hf = Pe, zf = Fe, zt = function(e, r) {
  var t = e[r];
  return zf(t) ? void 0 : Hf(t);
}, yn = F, mn = k, bn = H, Wf = TypeError, Kf = function(e, r) {
  var t, n;
  if (r === "string" && mn(t = e.toString) && !bn(n = yn(t, e)) || mn(t = e.valueOf) && !bn(n = yn(t, e)) || r !== "string" && mn(t = e.toString) && !bn(n = yn(t, e))) return n;
  throw new Wf("Can't convert object to primitive value");
}, qf = F, Ro = H, Co = mc, Vf = zt, Yf = Kf, Xf = B, Jf = TypeError, Qf = Xf("toPrimitive"), Zf = function(e, r) {
  if (!Ro(e) || Co(e)) return e;
  var t = Vf(e, Qf), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = qf(t, e, r), !Ro(n) || Co(n)) return n;
    throw new Jf("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), Yf(e, r);
}, ed = Zf, rd = mc, bc = function(e) {
  var r = ed(e, "string");
  return rd(r) ? r : r + "";
}, td = G, nd = gc, ad = yc, et = q, xo = bc, id = TypeError, wn = Object.defineProperty, od = Object.getOwnPropertyDescriptor, $n = "enumerable", Sn = "configurable", En = "writable";
fe.f = td ? ad ? function(r, t, n) {
  if (et(r), t = xo(t), et(n), typeof r == "function" && t === "prototype" && "value" in n && En in n && !n[En]) {
    var a = od(r, t);
    a && a[En] && (r[t] = n.value, n = {
      configurable: Sn in n ? n[Sn] : a[Sn],
      enumerable: $n in n ? n[$n] : a[$n],
      writable: !1
    });
  }
  return wn(r, t, n);
} : wn : function(r, t, n) {
  if (et(r), t = xo(t), et(n), nd) try {
    return wn(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new id("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var wc = { exports: {} }, La = G, sd = X, $c = Function.prototype, ud = La && Object.getOwnPropertyDescriptor, Si = sd($c, "name"), cd = Si && (function() {
}).name === "something", ld = Si && (!La || La && ud($c, "name").configurable), Wt = {
  EXISTS: Si,
  PROPER: cd,
  CONFIGURABLE: ld
}, vd = L, fd = k, Aa = mi, dd = vd(Function.toString);
fd(Aa.inspectSource) || (Aa.inspectSource = function(e) {
  return dd(e);
});
var Ei = Aa.inspectSource, hd = j, pd = k, _o = hd.WeakMap, gd = pd(_o) && /native code/.test(String(_o)), Hr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, yd = G, md = fe, bd = Hr, dr = yd ? function(e, r, t) {
  return md.f(e, r, bd(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, wd = bi, $d = wi, Lo = wd("keys"), Oi = function(e) {
  return Lo[e] || (Lo[e] = $d(e));
}, Kt = {}, Sd = gd, Sc = j, Ed = H, Od = dr, On = X, In = mi, Id = Oi, Td = Kt, Ao = "Object already initialized", ja = Sc.TypeError, Pd = Sc.WeakMap, Rt, Ur, Ct, Rd = function(e) {
  return Ct(e) ? Ur(e) : Rt(e, {});
}, Cd = function(e) {
  return function(r) {
    var t;
    if (!Ed(r) || (t = Ur(r)).type !== e)
      throw new ja("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (Sd || In.state) {
  var de = In.state || (In.state = new Pd());
  de.get = de.get, de.has = de.has, de.set = de.set, Rt = function(e, r) {
    if (de.has(e)) throw new ja(Ao);
    return r.facade = e, de.set(e, r), r;
  }, Ur = function(e) {
    return de.get(e) || {};
  }, Ct = function(e) {
    return de.has(e);
  };
} else {
  var qe = Id("state");
  Td[qe] = !0, Rt = function(e, r) {
    if (On(e, qe)) throw new ja(Ao);
    return r.facade = e, Od(e, qe, r), r;
  }, Ur = function(e) {
    return On(e, qe) ? e[qe] : {};
  }, Ct = function(e) {
    return On(e, qe);
  };
}
var Re = {
  set: Rt,
  get: Ur,
  has: Ct,
  enforce: Rd,
  getterFor: Cd
}, Ii = L, xd = P, _d = k, rt = X, Na = G, Ld = Wt.CONFIGURABLE, Ad = Ei, Ec = Re, jd = Ec.enforce, Nd = Ec.get, jo = String, bt = Object.defineProperty, kd = Ii("".slice), Md = Ii("".replace), Ud = Ii([].join), Bd = Na && !xd(function() {
  return bt(function() {
  }, "length", { value: 8 }).length !== 8;
}), Dd = String(String).split("String"), Fd = wc.exports = function(e, r, t) {
  kd(jo(r), 0, 7) === "Symbol(" && (r = "[" + Md(jo(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!rt(e, "name") || Ld && e.name !== r) && (Na ? bt(e, "name", { value: r, configurable: !0 }) : e.name = r), Bd && t && rt(t, "arity") && e.length !== t.arity && bt(e, "length", { value: t.arity });
  try {
    t && rt(t, "constructor") && t.constructor ? Na && bt(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = jd(e);
  return rt(n, "source") || (n.source = Ud(Dd, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = Fd(function() {
  return _d(this) && Nd(this).source || Ad(this);
}, "toString");
var Oc = wc.exports, Gd = k, Hd = fe, zd = Oc, Wd = yi, oe = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (Gd(t) && zd(t, i, n), n.global)
    a ? e[r] = t : Wd(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : Hd.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Ic = L, Kd = Ic({}.toString), qd = Ic("".slice), Ce = function(e) {
  return qd(Kd(e), 8, -1);
}, Vd = $i, Yd = k, wt = Ce, Xd = B, Jd = Xd("toStringTag"), Qd = Object, Zd = wt(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", eh = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, zr = Vd ? wt : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = eh(r = Qd(e), Jd)) == "string" ? t : Zd ? wt(r) : (n = wt(r)) === "Object" && Yd(r.callee) ? "Arguments" : n;
}, rh = $i, th = zr, nh = rh ? {}.toString : function() {
  return "[object " + th(this) + "]";
}, ah = $i, ih = oe, oh = nh;
ah || ih(Object.prototype, "toString", oh, { unsafe: !0 });
var Ti = {}, qt = {}, Tc = {}.propertyIsEnumerable, Pc = Object.getOwnPropertyDescriptor, sh = Pc && !Tc.call({ 1: 2 }, 1);
qt.f = sh ? function(r) {
  var t = Pc(this, r);
  return !!t && t.enumerable;
} : Tc;
var uh = L, ch = P, lh = Ce, Tn = Object, vh = uh("".split), Vt = ch(function() {
  return !Tn("z").propertyIsEnumerable(0);
}) ? function(e) {
  return lh(e) === "String" ? vh(e, "") : Tn(e);
} : Tn, fh = Vt, dh = fr, we = function(e) {
  return fh(dh(e));
}, hh = G, ph = F, gh = qt, yh = Hr, mh = we, bh = bc, wh = X, $h = gc, No = Object.getOwnPropertyDescriptor;
Ti.f = hh ? No : function(r, t) {
  if (r = mh(r), t = bh(t), $h) try {
    return No(r, t);
  } catch {
  }
  if (wh(r, t)) return yh(!ph(gh.f, r, t), r[t]);
};
var Yt = {}, Sh = Math.ceil, Eh = Math.floor, Oh = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? Eh : Sh)(t);
}, Ih = Oh, Xt = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : Ih(r);
}, Th = Xt, Ph = Math.max, Rh = Math.min, Rc = function(e, r) {
  var t = Th(e);
  return t < 0 ? Ph(t + r, 0) : Rh(t, r);
}, Ch = Xt, xh = Math.min, Cc = function(e) {
  var r = Ch(e);
  return r > 0 ? xh(r, 9007199254740991) : 0;
}, _h = Cc, hr = function(e) {
  return _h(e.length);
}, Lh = we, Ah = Rc, jh = hr, ko = function(e) {
  return function(r, t, n) {
    var a = Lh(r), i = jh(a);
    if (i === 0) return !e && -1;
    var o = Ah(n, i), s;
    if (e && t !== t) {
      for (; i > o; )
        if (s = a[o++], s !== s) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, Nh = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: ko(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: ko(!1)
}, kh = L, Pn = X, Mh = we, Uh = Nh.indexOf, Bh = Kt, Mo = kh([].push), xc = function(e, r) {
  var t = Mh(e), n = 0, a = [], i;
  for (i in t) !Pn(Bh, i) && Pn(t, i) && Mo(a, i);
  for (; r.length > n; ) Pn(t, i = r[n++]) && (~Uh(a, i) || Mo(a, i));
  return a;
}, Pi = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Dh = xc, Fh = Pi, Gh = Fh.concat("length", "prototype");
Yt.f = Object.getOwnPropertyNames || function(r) {
  return Dh(r, Gh);
};
var Ri = {};
Ri.f = Object.getOwnPropertySymbols;
var Hh = Ge, zh = L, Wh = Yt, Kh = Ri, qh = q, Vh = zh([].concat), Yh = Hh("Reflect", "ownKeys") || function(r) {
  var t = Wh.f(qh(r)), n = Kh.f;
  return n ? Vh(t, n(r)) : t;
}, Uo = X, Xh = Yh, Jh = Ti, Qh = fe, Zh = function(e, r, t) {
  for (var n = Xh(r), a = Qh.f, i = Jh.f, o = 0; o < n.length; o++) {
    var s = n[o];
    !Uo(e, s) && !(t && Uo(t, s)) && a(e, s, i(r, s));
  }
}, ep = P, rp = k, tp = /#|\.prototype\./, Wr = function(e, r) {
  var t = ap[np(e)];
  return t === op ? !0 : t === ip ? !1 : rp(r) ? ep(r) : !!r;
}, np = Wr.normalize = function(e) {
  return String(e).replace(tp, ".").toLowerCase();
}, ap = Wr.data = {}, ip = Wr.NATIVE = "N", op = Wr.POLYFILL = "P", Ci = Wr, tt = j, sp = Ti.f, up = dr, cp = oe, lp = yi, vp = Zh, fp = Ci, D = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, s, c, u, v;
  if (n ? o = tt : a ? o = tt[t] || lp(t, {}) : o = tt[t] && tt[t].prototype, o) for (s in r) {
    if (u = r[s], e.dontCallGetSet ? (v = sp(o, s), c = v && v.value) : c = o[s], i = fp(n ? s : t + (a ? "." : "#") + s, e.forced), !i && c !== void 0) {
      if (typeof u == typeof c) continue;
      vp(u, c);
    }
    (e.sham || c && c.sham) && up(u, "sham", !0), cp(o, s, u, e);
  }
}, br = j, dp = Gr, hp = Ce, nt = function(e) {
  return dp.slice(0, e.length) === e;
}, _c = function() {
  return nt("Bun/") ? "BUN" : nt("Cloudflare-Workers") ? "CLOUDFLARE" : nt("Deno/") ? "DENO" : nt("Node.js/") ? "NODE" : br.Bun && typeof Bun.version == "string" ? "BUN" : br.Deno && typeof Deno.version == "object" ? "DENO" : hp(br.process) === "process" ? "NODE" : br.window && br.document ? "BROWSER" : "REST";
}(), pp = _c, xi = pp === "NODE", gp = L, yp = Pe, mp = function(e, r, t) {
  try {
    return gp(yp(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, bp = H, wp = function(e) {
  return bp(e) || e === null;
}, $p = wp, Sp = String, Ep = TypeError, Op = function(e) {
  if ($p(e)) return e;
  throw new Ep("Can't set " + Sp(e) + " as a prototype");
}, Ip = mp, Tp = H, Pp = fr, Rp = Op, _i = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = Ip(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return Pp(a), Rp(i), Tp(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), Cp = fe.f, xp = X, _p = B, Bo = _p("toStringTag"), He = function(e, r, t) {
  e && !t && (e = e.prototype), e && !xp(e, Bo) && Cp(e, Bo, { configurable: !0, value: r });
}, Do = Oc, Lp = fe, Jt = function(e, r, t) {
  return t.get && Do(t.get, r, { getter: !0 }), t.set && Do(t.set, r, { setter: !0 }), Lp.f(e, r, t);
}, Ap = Ge, jp = Jt, Np = B, kp = G, Fo = Np("species"), Lc = function(e) {
  var r = Ap(e);
  kp && r && !r[Fo] && jp(r, Fo, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, Mp = Gt, Up = TypeError, Kr = function(e, r) {
  if (Mp(r, e)) return e;
  throw new Up("Incorrect invocation");
}, Bp = L, Dp = P, Ac = k, Fp = zr, Gp = Ge, Hp = Ei, jc = function() {
}, Nc = Gp("Reflect", "construct"), Li = /^\s*(?:class|function)\b/, zp = Bp(Li.exec), Wp = !Li.test(jc), wr = function(r) {
  if (!Ac(r)) return !1;
  try {
    return Nc(jc, [], r), !0;
  } catch {
    return !1;
  }
}, kc = function(r) {
  if (!Ac(r)) return !1;
  switch (Fp(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Wp || !!zp(Li, Hp(r));
  } catch {
    return !0;
  }
};
kc.sham = !0;
var Qt = !Nc || Dp(function() {
  var e;
  return wr(wr.call) || !wr(Object) || !wr(function() {
    e = !0;
  }) || e;
}) ? kc : wr, Kp = Qt, qp = Ht, Vp = TypeError, Yp = function(e) {
  if (Kp(e)) return e;
  throw new Vp(qp(e) + " is not a constructor");
}, Go = q, Xp = Yp, Jp = Fe, Qp = B, Zp = Qp("species"), eg = function(e, r) {
  var t = Go(e).constructor, n;
  return t === void 0 || Jp(n = Go(t)[Zp]) ? r : Xp(n);
}, rg = Bt, Mc = Function.prototype, Ho = Mc.apply, zo = Mc.call, Uc = typeof Reflect == "object" && Reflect.apply || (rg ? zo.bind(Ho) : function() {
  return zo.apply(Ho, arguments);
}), tg = Ce, ng = L, ag = function(e) {
  if (tg(e) === "Function") return ng(e);
}, Wo = ag, ig = Pe, og = Bt, sg = Wo(Wo.bind), xe = function(e, r) {
  return ig(e), r === void 0 ? e : og ? sg(e, r) : function() {
    return e.apply(r, arguments);
  };
}, ug = Ge, Bc = ug("document", "documentElement"), cg = L, qr = cg([].slice), lg = TypeError, Ai = function(e, r) {
  if (e < r) throw new lg("Not enough arguments");
  return e;
}, vg = Gr, Dc = /(?:ipad|iphone|ipod).*applewebkit/i.test(vg), Q = j, fg = Uc, dg = xe, Ko = k, hg = X, Fc = P, qo = Bc, pg = qr, Vo = Ft, gg = Ai, yg = Dc, mg = xi, ka = Q.setImmediate, Ma = Q.clearImmediate, bg = Q.process, Rn = Q.Dispatch, wg = Q.Function, Yo = Q.MessageChannel, $g = Q.String, Cn = 0, xr = {}, Xo = "onreadystatechange", Br, Ne, xn, _n;
Fc(function() {
  Br = Q.location;
});
var ji = function(e) {
  if (hg(xr, e)) {
    var r = xr[e];
    delete xr[e], r();
  }
}, Ln = function(e) {
  return function() {
    ji(e);
  };
}, Jo = function(e) {
  ji(e.data);
}, Qo = function(e) {
  Q.postMessage($g(e), Br.protocol + "//" + Br.host);
};
(!ka || !Ma) && (ka = function(r) {
  gg(arguments.length, 1);
  var t = Ko(r) ? r : wg(r), n = pg(arguments, 1);
  return xr[++Cn] = function() {
    fg(t, void 0, n);
  }, Ne(Cn), Cn;
}, Ma = function(r) {
  delete xr[r];
}, mg ? Ne = function(e) {
  bg.nextTick(Ln(e));
} : Rn && Rn.now ? Ne = function(e) {
  Rn.now(Ln(e));
} : Yo && !yg ? (xn = new Yo(), _n = xn.port2, xn.port1.onmessage = Jo, Ne = dg(_n.postMessage, _n)) : Q.addEventListener && Ko(Q.postMessage) && !Q.importScripts && Br && Br.protocol !== "file:" && !Fc(Qo) ? (Ne = Qo, Q.addEventListener("message", Jo, !1)) : Xo in Vo("script") ? Ne = function(e) {
  qo.appendChild(Vo("script"))[Xo] = function() {
    qo.removeChild(this), ji(e);
  };
} : Ne = function(e) {
  setTimeout(Ln(e), 0);
});
var Gc = {
  set: ka,
  clear: Ma
}, Zo = j, Sg = G, Eg = Object.getOwnPropertyDescriptor, Hc = function(e) {
  if (!Sg) return Zo[e];
  var r = Eg(Zo, e);
  return r && r.value;
}, zc = function() {
  this.head = null, this.tail = null;
};
zc.prototype = {
  add: function(e) {
    var r = { item: e, next: null }, t = this.tail;
    t ? t.next = r : this.head = r, this.tail = r;
  },
  get: function() {
    var e = this.head;
    if (e) {
      var r = this.head = e.next;
      return r === null && (this.tail = null), e.item;
    }
  }
};
var Wc = zc, Og = Gr, Ig = /ipad|iphone|ipod/i.test(Og) && typeof Pebble < "u", Tg = Gr, Pg = /web0s(?!.*chrome)/i.test(Tg), ur = j, Rg = Hc, es = xe, An = Gc.set, Cg = Wc, xg = Dc, _g = Ig, Lg = Pg, jn = xi, rs = ur.MutationObserver || ur.WebKitMutationObserver, ts = ur.document, ns = ur.process, at = ur.Promise, Ua = Rg("queueMicrotask"), Ve, Nn, kn, it, as;
if (!Ua) {
  var ot = new Cg(), st = function() {
    var e, r;
    for (jn && (e = ns.domain) && e.exit(); r = ot.get(); ) try {
      r();
    } catch (t) {
      throw ot.head && Ve(), t;
    }
    e && e.enter();
  };
  !xg && !jn && !Lg && rs && ts ? (Nn = !0, kn = ts.createTextNode(""), new rs(st).observe(kn, { characterData: !0 }), Ve = function() {
    kn.data = Nn = !Nn;
  }) : !_g && at && at.resolve ? (it = at.resolve(void 0), it.constructor = at, as = es(it.then, it), Ve = function() {
    as(st);
  }) : jn ? Ve = function() {
    ns.nextTick(st);
  } : (An = es(An, ur), Ve = function() {
    An(st);
  }), Ua = function(e) {
    ot.head || Ve(), ot.add(e);
  };
}
var Ag = Ua, jg = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, Ni = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, Ng = j, Zt = Ng.Promise, kg = j, _r = Zt, Mg = k, Ug = Ci, Bg = Ei, Dg = B, is = _c, Mn = Dt;
_r && _r.prototype;
var Fg = Dg("species"), Ba = !1, Kc = Mg(kg.PromiseRejectionEvent), Gg = Ug("Promise", function() {
  var e = Bg(_r), r = e !== String(_r);
  if (!r && Mn === 66) return !0;
  if (!Mn || Mn < 51 || !/native code/.test(e)) {
    var t = new _r(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[Fg] = n, Ba = t.then(function() {
    }) instanceof n, !Ba) return !0;
  }
  return !r && (is === "BROWSER" || is === "DENO") && !Kc;
}), Vr = {
  CONSTRUCTOR: Gg,
  REJECTION_EVENT: Kc,
  SUBCLASSING: Ba
}, pr = {}, os = Pe, Hg = TypeError, zg = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new Hg("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = os(r), this.reject = os(t);
};
pr.f = function(e) {
  return new zg(e);
};
var Wg = D, xt = xi, Ie = j, cr = F, ss = oe, us = _i, Kg = He, qg = Lc, Vg = Pe, $t = k, Yg = H, Xg = Kr, Jg = eg, qc = Gc.set, ki = Ag, Qg = jg, Zg = Ni, e0 = Wc, Vc = Re, _t = Zt, Mi = Vr, Yc = pr, en = "Promise", Xc = Mi.CONSTRUCTOR, r0 = Mi.REJECTION_EVENT, t0 = Mi.SUBCLASSING, Un = Vc.getterFor(en), n0 = Vc.set, er = _t && _t.prototype, Ue = _t, ut = er, Jc = Ie.TypeError, Da = Ie.document, Ui = Ie.process, Fa = Yc.f, a0 = Fa, i0 = !!(Da && Da.createEvent && Ie.dispatchEvent), Qc = "unhandledrejection", o0 = "rejectionhandled", cs = 0, Zc = 1, s0 = 2, Bi = 1, el = 2, ct, ls, u0, vs, rl = function(e) {
  var r;
  return Yg(e) && $t(r = e.then) ? r : !1;
}, tl = function(e, r) {
  var t = r.value, n = r.state === Zc, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, s = e.domain, c, u, v;
  try {
    a ? (n || (r.rejection === el && l0(r), r.rejection = Bi), a === !0 ? c = t : (s && s.enter(), c = a(t), s && (s.exit(), v = !0)), c === e.promise ? o(new Jc("Promise-chain cycle")) : (u = rl(c)) ? cr(u, c, i, o) : i(c)) : o(t);
  } catch (l) {
    s && !v && s.exit(), o(l);
  }
}, nl = function(e, r) {
  e.notified || (e.notified = !0, ki(function() {
    for (var t = e.reactions, n; n = t.get(); )
      tl(n, e);
    e.notified = !1, r && !e.rejection && c0(e);
  }));
}, al = function(e, r, t) {
  var n, a;
  i0 ? (n = Da.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), Ie.dispatchEvent(n)) : n = { promise: r, reason: t }, !r0 && (a = Ie["on" + e]) ? a(n) : e === Qc && Qg("Unhandled promise rejection", t);
}, c0 = function(e) {
  cr(qc, Ie, function() {
    var r = e.facade, t = e.value, n = fs(e), a;
    if (n && (a = Zg(function() {
      xt ? Ui.emit("unhandledRejection", t, r) : al(Qc, r, t);
    }), e.rejection = xt || fs(e) ? el : Bi, a.error))
      throw a.value;
  });
}, fs = function(e) {
  return e.rejection !== Bi && !e.parent;
}, l0 = function(e) {
  cr(qc, Ie, function() {
    var r = e.facade;
    xt ? Ui.emit("rejectionHandled", r) : al(o0, r, e.value);
  });
}, nr = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, or = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = s0, nl(e, !0));
}, Ga = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new Jc("Promise can't be resolved itself");
      var n = rl(r);
      n ? ki(function() {
        var a = { done: !1 };
        try {
          cr(
            n,
            r,
            nr(Ga, a, e),
            nr(or, a, e)
          );
        } catch (i) {
          or(a, i, e);
        }
      }) : (e.value = r, e.state = Zc, nl(e, !1));
    } catch (a) {
      or({ done: !1 }, a, e);
    }
  }
};
if (Xc && (Ue = function(r) {
  Xg(this, ut), Vg(r), cr(ct, this);
  var t = Un(this);
  try {
    r(nr(Ga, t), nr(or, t));
  } catch (n) {
    or(t, n);
  }
}, ut = Ue.prototype, ct = function(r) {
  n0(this, {
    type: en,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new e0(),
    rejection: !1,
    state: cs,
    value: void 0
  });
}, ct.prototype = ss(ut, "then", function(r, t) {
  var n = Un(this), a = Fa(Jg(this, Ue));
  return n.parent = !0, a.ok = $t(r) ? r : !0, a.fail = $t(t) && t, a.domain = xt ? Ui.domain : void 0, n.state === cs ? n.reactions.add(a) : ki(function() {
    tl(a, n);
  }), a.promise;
}), ls = function() {
  var e = new ct(), r = Un(e);
  this.promise = e, this.resolve = nr(Ga, r), this.reject = nr(or, r);
}, Yc.f = Fa = function(e) {
  return e === Ue || e === u0 ? new ls(e) : a0(e);
}, $t(_t) && er !== Object.prototype)) {
  vs = er.then, t0 || ss(er, "then", function(r, t) {
    var n = this;
    return new Ue(function(a, i) {
      cr(vs, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete er.constructor;
  } catch {
  }
  us && us(er, ut);
}
Wg({ global: !0, constructor: !0, wrap: !0, forced: Xc }, {
  Promise: Ue
});
Kg(Ue, en, !1);
qg(en);
var Yr = {}, v0 = B, f0 = Yr, d0 = v0("iterator"), h0 = Array.prototype, il = function(e) {
  return e !== void 0 && (f0.Array === e || h0[d0] === e);
}, p0 = zr, ds = zt, g0 = Fe, y0 = Yr, m0 = B, b0 = m0("iterator"), rn = function(e) {
  if (!g0(e)) return ds(e, b0) || ds(e, "@@iterator") || y0[p0(e)];
}, w0 = F, $0 = Pe, S0 = q, E0 = Ht, O0 = rn, I0 = TypeError, Di = function(e, r) {
  var t = arguments.length < 2 ? O0(e) : r;
  if ($0(t)) return S0(w0(t, e));
  throw new I0(E0(e) + " is not iterable");
}, T0 = F, hs = q, P0 = zt, ol = function(e, r, t) {
  var n, a;
  hs(e);
  try {
    if (n = P0(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = T0(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return hs(n), t;
}, R0 = xe, C0 = F, x0 = q, _0 = Ht, L0 = il, A0 = hr, ps = Gt, j0 = Di, N0 = rn, gs = ol, k0 = TypeError, St = function(e, r) {
  this.stopped = e, this.result = r;
}, ys = St.prototype, tn = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), c = R0(r, n), u, v, l, f, d, m, w, g = function($) {
    return u && gs(u, "normal", $), new St(!0, $);
  }, S = function($) {
    return a ? (x0($), s ? c($[0], $[1], g) : c($[0], $[1])) : s ? c($, g) : c($);
  };
  if (i)
    u = e.iterator;
  else if (o)
    u = e;
  else {
    if (v = N0(e), !v) throw new k0(_0(e) + " is not iterable");
    if (L0(v)) {
      for (l = 0, f = A0(e); f > l; l++)
        if (d = S(e[l]), d && ps(ys, d)) return d;
      return new St(!1);
    }
    u = j0(e, v);
  }
  for (m = i ? e.next : u.next; !(w = C0(m, u)).done; ) {
    try {
      d = S(w.value);
    } catch ($) {
      gs(u, "throw", $);
    }
    if (typeof d == "object" && d && ps(ys, d)) return d;
  }
  return new St(!1);
}, M0 = B, sl = M0("iterator"), ul = !1;
try {
  var U0 = 0, ms = {
    next: function() {
      return { done: !!U0++ };
    },
    return: function() {
      ul = !0;
    }
  };
  ms[sl] = function() {
    return this;
  }, Array.from(ms, function() {
    throw 2;
  });
} catch {
}
var cl = function(e, r) {
  try {
    if (!r && !ul) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[sl] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, B0 = Zt, D0 = cl, F0 = Vr.CONSTRUCTOR, ll = F0 || !D0(function(e) {
  B0.all(e).then(void 0, function() {
  });
}), G0 = D, H0 = F, z0 = Pe, W0 = pr, K0 = Ni, q0 = tn, V0 = ll;
G0({ target: "Promise", stat: !0, forced: V0 }, {
  all: function(r) {
    var t = this, n = W0.f(t), a = n.resolve, i = n.reject, o = K0(function() {
      var s = z0(t.resolve), c = [], u = 0, v = 1;
      q0(r, function(l) {
        var f = u++, d = !1;
        v++, H0(s, t, l).then(function(m) {
          d || (d = !0, c[f] = m, --v || a(c));
        }, i);
      }), --v || a(c);
    });
    return o.error && i(o.value), n.promise;
  }
});
var Y0 = D, X0 = Vr.CONSTRUCTOR, Ha = Zt, J0 = Ge, Q0 = k, Z0 = oe, bs = Ha && Ha.prototype;
Y0({ target: "Promise", proto: !0, forced: X0, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (Q0(Ha)) {
  var ws = J0("Promise").prototype.catch;
  bs.catch !== ws && Z0(bs, "catch", ws, { unsafe: !0 });
}
var ey = D, ry = F, ty = Pe, ny = pr, ay = Ni, iy = tn, oy = ll;
ey({ target: "Promise", stat: !0, forced: oy }, {
  race: function(r) {
    var t = this, n = ny.f(t), a = n.reject, i = ay(function() {
      var o = ty(t.resolve);
      iy(r, function(s) {
        ry(o, t, s).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var sy = D, uy = pr, cy = Vr.CONSTRUCTOR;
sy({ target: "Promise", stat: !0, forced: cy }, {
  reject: function(r) {
    var t = uy.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var ly = q, vy = H, fy = pr, dy = function(e, r) {
  if (ly(e), vy(r) && r.constructor === e) return r;
  var t = fy.f(e), n = t.resolve;
  return n(r), t.promise;
}, hy = D, py = Ge, gy = Vr.CONSTRUCTOR, yy = dy;
py("Promise");
hy({ target: "Promise", stat: !0, forced: gy }, {
  resolve: function(r) {
    return yy(this, r);
  }
});
var my = zr, by = String, _e = function(e) {
  if (my(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return by(e);
}, vl = `	
\v\f\r                　\u2028\u2029\uFEFF`, wy = L, $y = fr, Sy = _e, za = vl, $s = wy("".replace), Ey = RegExp("^[" + za + "]+"), Oy = RegExp("(^|[^" + za + "])[" + za + "]+$"), Bn = function(e) {
  return function(r) {
    var t = Sy($y(r));
    return e & 1 && (t = $s(t, Ey, "")), e & 2 && (t = $s(t, Oy, "$1")), t;
  };
}, Iy = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Bn(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Bn(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Bn(3)
}, Ty = Wt.PROPER, Py = P, Ss = vl, Es = "​᠎", Ry = function(e) {
  return Py(function() {
    return !!Ss[e]() || Es[e]() !== Es || Ty && Ss[e].name !== e;
  });
}, Cy = D, xy = Iy.trim, _y = Ry;
Cy({ target: "String", proto: !0, forced: _y("trim") }, {
  trim: function() {
    return xy(this);
  }
});
var Tr = {
  tdGatewayUs: "/tdgateway/us",
  tdGatewayEu: "/tdgateway/eu",
  tdGatewayCa: "/tdgateway/ca",
  tdGatewayUsFed: "/tdgateway/usfed",
  tdChatSdk: "/tdchatsdk",
  tdReporter: "/tdreporter",
  twilioUs1: "/tdsocketprovider/us1/v3/wsconnect",
  twilioIe1: "/tdsocketprovider/ie1/v3/wsconnect",
  twilioMcsUs1: "/tdmcsprovider/us1",
  twilioMcsIe1: "/tdmcsprovider/ie1",
  twilioMediaUs1: "/tdmediaprovider/us1",
  twilioMediaIe1: "/tdmediaprovider/ie1"
}, Ly = q, fl = function() {
  var e = Ly(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, Fi = P, Ay = j, Gi = Ay.RegExp, Hi = Fi(function() {
  var e = Gi("a", "y");
  return e.lastIndex = 2, e.exec("abcd") !== null;
}), jy = Hi || Fi(function() {
  return !Gi("a", "y").sticky;
}), Ny = Hi || Fi(function() {
  var e = Gi("^r", "gy");
  return e.lastIndex = 2, e.exec("str") !== null;
}), ky = {
  BROKEN_CARET: Ny,
  MISSED_STICKY: jy,
  UNSUPPORTED_Y: Hi
}, dl = {}, My = xc, Uy = Pi, nn = Object.keys || function(r) {
  return My(r, Uy);
}, By = G, Dy = yc, Fy = fe, Gy = q, Hy = we, zy = nn;
dl.f = By && !Dy ? Object.defineProperties : function(r, t) {
  Gy(r);
  for (var n = Hy(t), a = zy(t), i = a.length, o = 0, s; i > o; ) Fy.f(r, s = a[o++], n[s]);
  return r;
};
var Wy = q, Ky = dl, Os = Pi, qy = Kt, Vy = Bc, Yy = Ft, Xy = Oi, Is = ">", Ts = "<", Wa = "prototype", Ka = "script", hl = Xy("IE_PROTO"), Dn = function() {
}, pl = function(e) {
  return Ts + Ka + Is + e + Ts + "/" + Ka + Is;
}, Ps = function(e) {
  e.write(pl("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, Jy = function() {
  var e = Yy("iframe"), r = "java" + Ka + ":", t;
  return e.style.display = "none", Vy.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(pl("document.F=Object")), t.close(), t.F;
}, lt, Et = function() {
  try {
    lt = new ActiveXObject("htmlfile");
  } catch {
  }
  Et = typeof document < "u" ? document.domain && lt ? Ps(lt) : Jy() : Ps(lt);
  for (var e = Os.length; e--; ) delete Et[Wa][Os[e]];
  return Et();
};
qy[hl] = !0;
var Xr = Object.create || function(r, t) {
  var n;
  return r !== null ? (Dn[Wa] = Wy(r), n = new Dn(), Dn[Wa] = null, n[hl] = r) : n = Et(), t === void 0 ? n : Ky.f(n, t);
}, Qy = P, Zy = j, em = Zy.RegExp, rm = Qy(function() {
  var e = em(".", "s");
  return !(e.dotAll && e.test(`
`) && e.flags === "s");
}), tm = P, nm = j, am = nm.RegExp, im = tm(function() {
  var e = am("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
}), ar = F, an = L, om = _e, sm = fl, um = ky, cm = bi, lm = Xr, vm = Re.get, fm = rm, dm = im, hm = cm("native-string-replace", String.prototype.replace), Lt = RegExp.prototype.exec, qa = Lt, pm = an("".charAt), gm = an("".indexOf), ym = an("".replace), Fn = an("".slice), Va = function() {
  var e = /a/, r = /b*/g;
  return ar(Lt, e, "a"), ar(Lt, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
}(), gl = um.BROKEN_CARET, Ya = /()??/.exec("")[1] !== void 0, mm = Va || Ya || gl || fm || dm;
mm && (qa = function(r) {
  var t = this, n = vm(t), a = om(r), i = n.raw, o, s, c, u, v, l, f;
  if (i)
    return i.lastIndex = t.lastIndex, o = ar(qa, i, a), t.lastIndex = i.lastIndex, o;
  var d = n.groups, m = gl && t.sticky, w = ar(sm, t), g = t.source, S = 0, $ = a;
  if (m && (w = ym(w, "y", ""), gm(w, "g") === -1 && (w += "g"), $ = Fn(a, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && pm(a, t.lastIndex - 1) !== `
`) && (g = "(?: " + g + ")", $ = " " + $, S++), s = new RegExp("^(?:" + g + ")", w)), Ya && (s = new RegExp("^" + g + "$(?!\\s)", w)), Va && (c = t.lastIndex), u = ar(Lt, m ? s : t, $), m ? u ? (u.input = Fn(u.input, S), u[0] = Fn(u[0], S), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : Va && u && (t.lastIndex = t.global ? u.index + u[0].length : c), Ya && u && u.length > 1 && ar(hm, u[0], s, function() {
    for (v = 1; v < arguments.length - 2; v++)
      arguments[v] === void 0 && (u[v] = void 0);
  }), u && d)
    for (u.groups = l = lm(null), v = 0; v < d.length; v++)
      f = d[v], l[f[0]] = u[f[1]];
  return u;
});
var zi = qa, bm = D, Rs = zi;
bm({ target: "RegExp", proto: !0, forced: /./.exec !== Rs }, {
  exec: Rs
});
function wm(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
var $m = P, yl = function(e, r) {
  var t = [][e];
  return !!t && $m(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, Sm = D, Em = L, Om = Vt, Im = we, Tm = yl, Pm = Em([].join), Rm = Om !== Object, Cm = Rm || !Tm("join", ",");
Sm({ target: "Array", proto: !0, forced: Cm }, {
  join: function(r) {
    return Pm(Im(this), r === void 0 ? "," : r);
  }
});
var xm = Ce, Wi = Array.isArray || function(r) {
  return xm(r) === "Array";
}, Cs = Wi, _m = Qt, Lm = H, Am = B, jm = Am("species"), xs = Array, Nm = function(e) {
  var r;
  return Cs(e) && (r = e.constructor, _m(r) && (r === xs || Cs(r.prototype)) ? r = void 0 : Lm(r) && (r = r[jm], r === null && (r = void 0))), r === void 0 ? xs : r;
}, km = Nm, ml = function(e, r) {
  return new (km(e))(r === 0 ? 0 : r);
}, Mm = xe, Um = L, Bm = Vt, Dm = Te, Fm = hr, Gm = ml, _s = Um([].push), $e = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, s = e === 5 || i;
  return function(c, u, v, l) {
    for (var f = Dm(c), d = Bm(f), m = Fm(d), w = Mm(u, v), g = 0, S = l || Gm, $ = r ? S(c, m) : t || o ? S(c, 0) : void 0, I, _; m > g; g++) if ((s || g in d) && (I = d[g], _ = w(I, g, f), e))
      if (r) $[g] = _;
      else if (_) switch (e) {
        case 3:
          return !0;
        case 5:
          return I;
        case 6:
          return g;
        case 2:
          _s($, I);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          _s($, I);
      }
    return i ? -1 : n || a ? a : $;
  };
}, Ki = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: $e(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: $e(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: $e(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: $e(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: $e(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: $e(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: $e(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: $e(7)
}, Hm = P, zm = B, Wm = Dt, Km = zm("species"), on = function(e) {
  return Wm >= 51 || !Hm(function() {
    var r = [], t = r.constructor = {};
    return t[Km] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, qm = D, Vm = Ki.map, Ym = on, Xm = Ym("map");
qm({ target: "Array", proto: !0, forced: !Xm }, {
  map: function(r) {
    return Vm(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Jm = D, Qm = Te, bl = nn, Zm = P, e1 = Zm(function() {
  bl(1);
});
Jm({ target: "Object", stat: !0, forced: e1 }, {
  keys: function(r) {
    return bl(Qm(r));
  }
});
function r1(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function Ls(e) {
  var r = Uv(e).map(function(t, n) {
    return r1(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function t1(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(Ls(a), r[a]), M(M({}, n), {}, A({}, Ls(a), r[a])));
  }, {}) : {};
}
function wl(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return t1(t, r);
}
function n1(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Gn(e, r) {
  return r.querySelector("#".concat(e));
}
function a1(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Gn(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Gn(r, t);
      i && t.removeChild(i);
    };
  var a = n1(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Gn(r, t);
    i && t.removeChild(i);
  };
}
function i1(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var o1 = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Dr(this, e), A(this, "_moving", !1), A(this, "_moved", !1), A(this, "_initialXY", [0, 0]), A(this, "_startXY", [0, 0]), A(this, "_boundaryValue", 5), A(this, "_rb", null), A(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return Fr(e, [{
    key: "getEventInfo",
    value: function(t) {
      return t.touches ? (this._isPC = !1, {
        clientXY: [t.touches[0].clientX, t.touches[0].clientY]
      }) : (this._isPC = !0, {
        clientXY: [t.clientX, t.clientY]
      });
    }
  }, {
    key: "onMoveStart",
    value: function(t) {
      t.stopPropagation(), t.preventDefault(), this._initialXY = [this.current.offsetLeft, this.current.offsetTop], this._startXY = this.getEventInfo(t).clientXY, this._moved = !1, this.addDocumentListeners();
    }
  }, {
    key: "onMoving",
    value: function(t) {
      var n, a;
      t.stopPropagation(), t.preventDefault();
      var i = this.getEventInfo(t), o = i.clientXY, s = gi(o, 2), c = s[0], u = s[1], v = c - this._startXY[0], l = u - this._startXY[1];
      Math.abs(v) < this._boundaryValue && Math.abs(l) < this._boundaryValue || (this._moved || (this._moved = !0), this._moving = !0, this.current.style.left = Math.min(Math.max(0, this._initialXY[0] + v), window.innerWidth - this.current.offsetWidth) + "px", this.current.style.top = Math.min(Math.max(0, this._initialXY[1] + l), window.innerHeight - this.current.offsetHeight) + "px", (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moving"));
    }
  }, {
    key: "onMoveEnd",
    value: function(t) {
      if (t.stopPropagation(), t.preventDefault(), this._moving) {
        var n, a;
        (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moveEnded");
      }
      if (!this._moved) {
        var i, o;
        (i = this.options) === null || i === void 0 || (o = i.onClick) === null || o === void 0 || o.call(i);
      }
      this._moved = !1, this.removeDocumentListeners();
    }
  }, {
    key: "addDocumentListeners",
    value: function() {
      document.addEventListener("mousemove", this.onMoving, {
        passive: !1
      }), document.addEventListener("mouseup", this.onMoveEnd, {
        passive: !1
      }), this.current.addEventListener("touchmove", this.onMoving, {
        passive: !1
      }), this.current.addEventListener("touchend", this.onMoveEnd, {
        passive: !1
      });
    }
  }, {
    key: "removeDocumentListeners",
    value: function() {
      document.removeEventListener("mousemove", this.onMoving), document.removeEventListener("mouseup", this.onMoveEnd), this.current.removeEventListener("touchmove", this.onMoveEnd), this.current.removeEventListener("touchend", this.onMoveEnd);
    }
  }, {
    key: "reset",
    value: function() {
      this._isPC && (this.current.style.top = "", this.current.style.left = "");
    }
  }, {
    key: "destroy",
    value: function() {
      var t;
      this.current.removeEventListener("mousedown", this.onMoveStart), this.current.removeEventListener("touchstart", this.onMoveStart), this.removeDocumentListeners(), (t = this._rb) === null || t === void 0 || t.disconnect(), this._rb = null;
    }
  }]);
}(), $l = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, s1 = Ft, Hn = s1("span").classList, As = Hn && Hn.constructor && Hn.constructor.prototype, Sl = As === Object.prototype ? void 0 : As, u1 = Ki.forEach, c1 = yl, l1 = c1("forEach"), v1 = l1 ? [].forEach : function(r) {
  return u1(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, js = j, Ns = $l, f1 = Sl, zn = v1, d1 = dr, El = function(e) {
  if (e && e.forEach !== zn) try {
    d1(e, "forEach", zn);
  } catch {
    e.forEach = zn;
  }
};
for (var Wn in Ns)
  Ns[Wn] && El(js[Wn] && js[Wn].prototype);
El(f1);
function h1(e, r) {
  var t = M({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
function p1(e) {
  return new Promise(function(r) {
    e <= 0 ? r(!0) : setTimeout(function() {
      return r(!0);
    }, e);
  });
}
function g1(e) {
  return Math.min(2e3 * e, 3e4);
}
function y1(e) {
  return Xa.apply(this, arguments);
}
function Xa() {
  return Xa = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a, i, o, s, c, u, v = arguments;
    return C().wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          if (t = v.length > 1 && v[1] !== void 0 ? v[1] : {}, n = t.defaultRetry, a = n === void 0 ? 5 : n, i = t.retryDelay, o = i === void 0 ? g1 : i, s = t.onError, !(a <= 0)) {
            f.next = 6;
            break;
          }
          return f.next = 5, r();
        case 5:
          return f.abrupt("return", f.sent);
        case 6:
          return c = 0, u = /* @__PURE__ */ function() {
            var d = Y(/* @__PURE__ */ C().mark(function m() {
              return C().wrap(function(g) {
                for (; ; ) switch (g.prev = g.next) {
                  case 0:
                    return g.prev = 0, g.next = 3, r();
                  case 3:
                    return g.abrupt("return", g.sent);
                  case 6:
                    if (g.prev = 6, g.t0 = g.catch(0), s == null || s(g.t0, c), c !== a) {
                      g.next = 11;
                      break;
                    }
                    throw g.t0;
                  case 11:
                    return c += 1, g.next = 14, p1(typeof o == "function" ? o(c) : o);
                  case 14:
                    return g.next = 16, u();
                  case 16:
                    return g.abrupt("return", g.sent);
                  case 17:
                  case "end":
                    return g.stop();
                }
              }, m, null, [[0, 6]]);
            }));
            return function() {
              return d.apply(this, arguments);
            };
          }(), f.abrupt("return", u());
        case 9:
        case "end":
          return f.stop();
      }
    }, e);
  })), Xa.apply(this, arguments);
}
var V = {
  Topic: "WidgetCommunication",
  Methods: {
    Maximize: "Maximize",
    Minimize: "Minimize",
    GetAllConfig: "GetAllConfig",
    GetCredentials: "GetCredentials",
    GetTdAccessToken: "GetTdAccessToken",
    SetBadge: "SetBadge",
    FrameOpened: "FrameOpened",
    DownloadTranscript: "DownloadTranscript",
    UpdatePreviewConfig: "UpdatePreviewConfig",
    PreviewReady: "PreviewReady",
    ConversationStart: "ConversationStart",
    FrameReady: "FrameReady",
    FrameResize: "FrameResize",
    UpdateAppConfigs: "UpdateAppConfigs",
    UpdateContext: "UpdateContext"
  }
}, qi = { exports: {} }, sr = typeof Reflect == "object" ? Reflect : null, ks = sr && typeof sr.apply == "function" ? sr.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, Ot;
sr && typeof sr.ownKeys == "function" ? Ot = sr.ownKeys : Object.getOwnPropertySymbols ? Ot = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : Ot = function(r) {
  return Object.getOwnPropertyNames(r);
};
function m1(e) {
  console && console.warn && console.warn(e);
}
var Ol = Number.isNaN || function(r) {
  return r !== r;
};
function x() {
  x.init.call(this);
}
qi.exports = x;
qi.exports.once = S1;
x.EventEmitter = x;
x.prototype._events = void 0;
x.prototype._eventsCount = 0;
x.prototype._maxListeners = void 0;
var Ms = 10;
function sn(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(x, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ms;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Ol(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ms = e;
  }
});
x.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
x.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || Ol(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function Il(e) {
  return e._maxListeners === void 0 ? x.defaultMaxListeners : e._maxListeners;
}
x.prototype.getMaxListeners = function() {
  return Il(this);
};
x.prototype.emit = function(r) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var a = r === "error", i = this._events;
  if (i !== void 0)
    a = a && i.error === void 0;
  else if (!a)
    return !1;
  if (a) {
    var o;
    if (t.length > 0 && (o = t[0]), o instanceof Error)
      throw o;
    var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw s.context = o, s;
  }
  var c = i[r];
  if (c === void 0)
    return !1;
  if (typeof c == "function")
    ks(c, this, t);
  else
    for (var u = c.length, v = xl(c, u), n = 0; n < u; ++n)
      ks(v[n], this, t);
  return !0;
};
function Tl(e, r, t, n) {
  var a, i, o;
  if (sn(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = Il(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = r, s.count = o.length, m1(s);
  }
  return e;
}
x.prototype.addListener = function(r, t) {
  return Tl(this, r, t, !1);
};
x.prototype.on = x.prototype.addListener;
x.prototype.prependListener = function(r, t) {
  return Tl(this, r, t, !0);
};
function b1() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Pl(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = b1.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
x.prototype.once = function(r, t) {
  return sn(t), this.on(r, Pl(this, r, t)), this;
};
x.prototype.prependOnceListener = function(r, t) {
  return sn(t), this.prependListener(r, Pl(this, r, t)), this;
};
x.prototype.removeListener = function(r, t) {
  var n, a, i, o, s;
  if (sn(t), a = this._events, a === void 0)
    return this;
  if (n = a[r], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[r], a.removeListener && this.emit("removeListener", r, n.listener || t));
  else if (typeof n != "function") {
    for (i = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === t || n[o].listener === t) {
        s = n[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : w1(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, s || t);
  }
  return this;
};
x.prototype.off = x.prototype.removeListener;
x.prototype.removeAllListeners = function(r) {
  var t, n, a;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[r] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[r]), this;
  if (arguments.length === 0) {
    var i = Object.keys(n), o;
    for (a = 0; a < i.length; ++a)
      o = i[a], o !== "removeListener" && this.removeAllListeners(o);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (t = n[r], typeof t == "function")
    this.removeListener(r, t);
  else if (t !== void 0)
    for (a = t.length - 1; a >= 0; a--)
      this.removeListener(r, t[a]);
  return this;
};
function Rl(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? $1(a) : xl(a, a.length);
}
x.prototype.listeners = function(r) {
  return Rl(this, r, !0);
};
x.prototype.rawListeners = function(r) {
  return Rl(this, r, !1);
};
x.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Cl.call(e, r);
};
x.prototype.listenerCount = Cl;
function Cl(e) {
  var r = this._events;
  if (r !== void 0) {
    var t = r[e];
    if (typeof t == "function")
      return 1;
    if (t !== void 0)
      return t.length;
  }
  return 0;
}
x.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ot(this._events) : [];
};
function xl(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function w1(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function $1(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function S1(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    _l(e, r, i, { once: !0 }), r !== "error" && E1(e, a, { once: !0 });
  });
}
function E1(e, r, t) {
  typeof e.on == "function" && _l(e, "error", r, t);
}
function _l(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var O1 = qi.exports;
const I1 = /* @__PURE__ */ Dv(O1);
var At = function() {
  return At = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, At.apply(this, arguments);
};
function Us(e, r, t, n) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function s(v) {
      try {
        u(n.next(v));
      } catch (l) {
        o(l);
      }
    }
    function c(v) {
      try {
        u(n.throw(v));
      } catch (l) {
        o(l);
      }
    }
    function u(v) {
      v.done ? i(v.value) : a(v.value).then(s, c);
    }
    u((n = n.apply(e, [])).next());
  });
}
function Bs(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(u) {
    return function(v) {
      return c([u, v]);
    };
  }
  function c(u) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (t = 0)), t; ) try {
      if (n = 1, a && (i = u[0] & 2 ? a.return : u[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, u[1])).done) return i;
      switch (a = 0, i && (u = [u[0] & 2, i.value]), u[0]) {
        case 0:
        case 1:
          i = u;
          break;
        case 4:
          return t.label++, { value: u[1], done: !1 };
        case 5:
          t.label++, a = u[1], u = [0];
          continue;
        case 7:
          u = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (u[0] === 6 || u[0] === 2)) {
            t = 0;
            continue;
          }
          if (u[0] === 3 && (!i || u[1] > i[0] && u[1] < i[3])) {
            t.label = u[1];
            break;
          }
          if (u[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = u;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(u);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      u = r.call(e, t);
    } catch (v) {
      u = [6, v], a = 0;
    } finally {
      n = i = 0;
    }
    if (u[0] & 5) throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var T1 = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new I1(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
    }
    return e.jsonParseData = function(r, t) {
      try {
        return JSON.parse(r);
      } catch {
        return t;
      }
    }, e.jsonStringifyData = function(r) {
      try {
        return JSON.stringify(r);
      } catch {
        return "";
      }
    }, e.runHandler = function(r) {
      return Us(this, void 0, void 0, function() {
        var t, n;
        return Bs(this, function(a) {
          switch (a.label) {
            case 0:
              return a.trys.push([0, 2, , 3]), [4, r()];
            case 1:
              return t = a.sent(), [2, { data: t, error: null }];
            case 2:
              return n = a.sent(), [2, { error: typeof n == "string" ? n : n.message }];
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.destroy = function() {
      this._emitter.removeAllListeners(), this._methods.clear(), this.getListener().removeEventListener("message", this._handlerOnMessageByBound, !1);
    }, e.prototype.register = function(r, t) {
      this._methods.set(r, t), this.log("Register ".concat(r), this._methods);
    }, e.prototype.unregister = function(r) {
      this._methods.delete(r), this.log("Unregister ".concat(r), this._methods);
    }, e.prototype.trigger = function(r) {
      for (var t = this, n = [], a = 1; a < arguments.length; a++)
        n[a - 1] = arguments[a];
      return new Promise(function(i) {
        var o = t.createId();
        t.sendMessage({ id: o, method: r, payload: n, type: "request" }), t.log("Trigger ".concat(r, " | ").concat(o), n), t._emitter.once("response_".concat(o), function(s) {
          i(s.payload), t.log("Receive ".concat(r, " | ").concat(o), e.jsonStringifyData(s));
        });
      });
    }, e.prototype.createId = function() {
      return "".concat(this.options.name, "_").concat(this._traceId++);
    }, e.prototype.createService = function() {
      var r = this;
      this._emitter.on(this.options.topic, function(t) {
        return Us(r, void 0, void 0, function() {
          var n, a, i, o, s;
          return Bs(this, function(c) {
            switch (c.label) {
              case 0:
                return n = t.id, a = t.payload, i = t.method, o = this._methods.get(i), o ? [4, e.runHandler(function() {
                  return o.apply(void 0, a);
                })] : [3, 2];
              case 1:
                return s = c.sent(), this.sendMessage({ id: n, method: i, payload: s, type: "response" }), [3, 3];
              case 2:
                this.sendMessage({
                  id: n,
                  method: i,
                  payload: { error: "No found method in service" },
                  type: "response"
                }), c.label = 3;
              case 3:
                return [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    }, e.prototype.sendMessage = function(r) {
      var t = this.options, n = t.sender, a = t.origin, i = t.topic, o = e.jsonStringifyData(At(At({}, r), { topic: i }));
      if (!n.postMessage)
        throw new Error("The sender no found postMessage method please check the sender option");
      o && n.postMessage(o, a || "*");
    }, e.prototype.handlerOnMessage = function(r) {
      var t = r.data;
      if (t) {
        var n = e.jsonParseData(t, null);
        if (!(!n || n.topic !== this.options.topic)) {
          var a = n.id, i = n.type;
          i === "request" && this._emitter.emit(this.options.topic, n), i === "response" && this._emitter.emit("response_".concat(a), n);
        }
      }
    }, e.prototype.getListener = function() {
      return this.options.listener || window;
    }, e.prototype.log = function(r) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var a = this.options, i = a.debug, o = a.name;
      if (i) {
        var s = (/* @__PURE__ */ new Date()).toISOString(), c = "[RPC] [".concat(s, "] [").concat(o, "] ").concat(r);
        console.groupCollapsed(c), t != null && t.length && console.info.apply(console, t), console.groupEnd();
      }
    }, Object.defineProperty(e.prototype, "methods", {
      get: function() {
        return this._methods;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "emitter", {
      get: function() {
        return this._emitter;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
), P1 = TypeError, R1 = 9007199254740991, C1 = function(e) {
  if (e > R1) throw P1("Maximum allowed index exceeded");
  return e;
}, x1 = G, _1 = fe, L1 = Hr, Vi = function(e, r, t) {
  x1 ? _1.f(e, r, L1(0, t)) : e[r] = t;
}, A1 = D, j1 = P, N1 = Wi, k1 = H, M1 = Te, U1 = hr, Ds = C1, Fs = Vi, B1 = ml, D1 = on, F1 = B, G1 = Dt, Ll = F1("isConcatSpreadable"), H1 = G1 >= 51 || !j1(function() {
  var e = [];
  return e[Ll] = !1, e.concat()[0] !== e;
}), z1 = function(e) {
  if (!k1(e)) return !1;
  var r = e[Ll];
  return r !== void 0 ? !!r : N1(e);
}, W1 = !H1 || !D1("concat");
A1({ target: "Array", proto: !0, arity: 1, forced: W1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = M1(this), n = B1(t, 0), a = 0, i, o, s, c, u;
    for (i = -1, s = arguments.length; i < s; i++)
      if (u = i === -1 ? t : arguments[i], z1(u))
        for (c = U1(u), Ds(a + c), o = 0; o < c; o++, a++) o in u && Fs(n, a, u[o]);
      else
        Ds(a + 1), Fs(n, a++, u);
    return n.length = a, n;
  }
});
var K1 = D, Gs = Wi, q1 = Qt, V1 = H, Hs = Rc, Y1 = hr, X1 = we, J1 = Vi, Q1 = B, Z1 = on, eb = qr, rb = Z1("slice"), tb = Q1("species"), Kn = Array, nb = Math.max;
K1({ target: "Array", proto: !0, forced: !rb }, {
  slice: function(r, t) {
    var n = X1(this), a = Y1(n), i = Hs(r, a), o = Hs(t === void 0 ? a : t, a), s, c, u;
    if (Gs(n) && (s = n.constructor, q1(s) && (s === Kn || Gs(s.prototype)) ? s = void 0 : V1(s) && (s = s[tb], s === null && (s = void 0)), s === Kn || s === void 0))
      return eb(n, i, o);
    for (c = new (s === void 0 ? Kn : s)(nb(o - i, 0)), u = 0; i < o; i++, u++) i in n && J1(c, u, n[i]);
    return c.length = u, c;
  }
});
var ab = P, ib = !ab(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), ob = X, sb = k, ub = Te, cb = Oi, lb = ib, zs = cb("IE_PROTO"), Ja = Object, vb = Ja.prototype, Yi = lb ? Ja.getPrototypeOf : function(e) {
  var r = ub(e);
  if (ob(r, zs)) return r[zs];
  var t = r.constructor;
  return sb(t) && r instanceof t ? t.prototype : r instanceof Ja ? vb : null;
}, Al = G, fb = P, jl = L, db = Yi, hb = nn, pb = we, gb = qt.f, Nl = jl(gb), yb = jl([].push), mb = Al && fb(function() {
  var e = /* @__PURE__ */ Object.create(null);
  return e[2] = 2, !Nl(e, 2);
}), Ws = function(e) {
  return function(r) {
    for (var t = pb(r), n = hb(t), a = mb && db(t) === null, i = n.length, o = 0, s = [], c; i > o; )
      c = n[o++], (!Al || (a ? c in t : Nl(t, c))) && yb(s, e ? [c, t[c]] : t[c]);
    return s;
  };
}, bb = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: Ws(!0),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: Ws(!1)
}, wb = D, $b = bb.entries;
wb({ target: "Object", stat: !0 }, {
  entries: function(r) {
    return $b(r);
  }
});
var Ks = F, qs = oe, Sb = zi, Vs = P, kl = B, Eb = dr, Ob = kl("species"), qn = RegExp.prototype, Ib = function(e, r, t, n) {
  var a = kl(e), i = !Vs(function() {
    var u = {};
    return u[a] = function() {
      return 7;
    }, ""[e](u) !== 7;
  }), o = i && !Vs(function() {
    var u = !1, v = /a/;
    return e === "split" && (v = {}, v.constructor = {}, v.constructor[Ob] = function() {
      return v;
    }, v.flags = "", v[a] = /./[a]), v.exec = function() {
      return u = !0, null;
    }, v[a](""), !u;
  });
  if (!i || !o || t) {
    var s = /./[a], c = r(a, ""[e], function(u, v, l, f, d) {
      var m = v.exec;
      return m === Sb || m === qn.exec ? i && !d ? { done: !0, value: Ks(s, v, l, f) } : { done: !0, value: Ks(u, l, v, f) } : { done: !1 };
    });
    qs(String.prototype, e, c[0]), qs(qn, a, c[1]);
  }
  n && Eb(qn[a], "sham", !0);
}, Xi = L, Tb = Xt, Pb = _e, Rb = fr, Cb = Xi("".charAt), Ys = Xi("".charCodeAt), xb = Xi("".slice), Xs = function(e) {
  return function(r, t) {
    var n = Pb(Rb(r)), a = Tb(t), i = n.length, o, s;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = Ys(n, a), o < 55296 || o > 56319 || a + 1 === i || (s = Ys(n, a + 1)) < 56320 || s > 57343 ? e ? Cb(n, a) : o : e ? xb(n, a, a + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, Ji = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: Xs(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: Xs(!0)
}, _b = Ji.charAt, Lb = function(e, r, t) {
  return r + (t ? _b(e, r).length : 1);
}, Qi = L, Ab = Te, jb = Math.floor, Vn = Qi("".charAt), Nb = Qi("".replace), Yn = Qi("".slice), kb = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, Mb = /\$([$&'`]|\d{1,2})/g, Ub = function(e, r, t, n, a, i) {
  var o = t + e.length, s = n.length, c = Mb;
  return a !== void 0 && (a = Ab(a), c = kb), Nb(i, c, function(u, v) {
    var l;
    switch (Vn(v, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return Yn(r, 0, t);
      case "'":
        return Yn(r, o);
      case "<":
        l = a[Yn(v, 1, -1)];
        break;
      default:
        var f = +v;
        if (f === 0) return u;
        if (f > s) {
          var d = jb(f / 10);
          return d === 0 ? u : d <= s ? n[d - 1] === void 0 ? Vn(v, 1) : n[d - 1] + Vn(v, 1) : u;
        }
        l = n[f - 1];
    }
    return l === void 0 ? "" : l;
  });
}, Js = F, Bb = q, Db = k, Fb = Ce, Gb = zi, Hb = TypeError, zb = function(e, r) {
  var t = e.exec;
  if (Db(t)) {
    var n = Js(t, e, r);
    return n !== null && Bb(n), n;
  }
  if (Fb(e) === "RegExp") return Js(Gb, e, r);
  throw new Hb("RegExp#exec called on incompatible receiver");
}, Wb = Uc, Qs = F, un = L, Kb = Ib, qb = P, Vb = q, Yb = k, Xb = Fe, Jb = Xt, Qb = Cc, Ye = _e, Zb = fr, ew = Lb, rw = zt, tw = Ub, nw = zb, aw = B, Qa = aw("replace"), iw = Math.max, ow = Math.min, sw = un([].concat), Xn = un([].push), Zs = un("".indexOf), eu = un("".slice), uw = function(e) {
  return e === void 0 ? e : String(e);
}, cw = function() {
  return "a".replace(/./, "$0") === "$0";
}(), ru = function() {
  return /./[Qa] ? /./[Qa]("a", "$0") === "" : !1;
}(), lw = !qb(function() {
  var e = /./;
  return e.exec = function() {
    var r = [];
    return r.groups = { a: "7" }, r;
  }, "".replace(e, "$<a>") !== "7";
});
Kb("replace", function(e, r, t) {
  var n = ru ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(i, o) {
      var s = Zb(this), c = Xb(i) ? void 0 : rw(i, Qa);
      return c ? Qs(c, i, s, o) : Qs(r, Ye(s), i, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(a, i) {
      var o = Vb(this), s = Ye(a);
      if (typeof i == "string" && Zs(i, n) === -1 && Zs(i, "$<") === -1) {
        var c = t(r, o, s, i);
        if (c.done) return c.value;
      }
      var u = Yb(i);
      u || (i = Ye(i));
      var v = o.global, l;
      v && (l = o.unicode, o.lastIndex = 0);
      for (var f = [], d; d = nw(o, s), !(d === null || (Xn(f, d), !v)); ) {
        var m = Ye(d[0]);
        m === "" && (o.lastIndex = ew(s, Qb(o.lastIndex), l));
      }
      for (var w = "", g = 0, S = 0; S < f.length; S++) {
        d = f[S];
        for (var $ = Ye(d[0]), I = iw(ow(Jb(d.index), s.length), 0), _ = [], ue, U = 1; U < d.length; U++) Xn(_, uw(d[U]));
        var O = d.groups;
        if (u) {
          var N = sw([$], _, I, s);
          O !== void 0 && Xn(N, O), ue = Ye(Wb(i, void 0, N));
        } else
          ue = tw($, s, I, _, O, i);
        I >= g && (w += eu(s, g, I) + ue, g = I + $.length);
      }
      return w + eu(s, g);
    }
  ];
}, !lw || !cw || ru);
var vw = /* @__PURE__ */ function() {
  function e() {
    Dr(this, e), A(this, "appConfig", {}), A(this, "touchpoint", null), A(this, "appProps", null), A(this, "context", {}), A(this, "participantName", "");
  }
  return Fr(e, [{
    key: "setAppConfig",
    value: function(t) {
      var n, a = (t == null ? void 0 : t.styles) || {};
      return this.appConfig = M(M(M({}, this.appConfig), t), {}, {
        styles: Object.keys(a).length ? M(M({}, (n = this.appConfig) === null || n === void 0 ? void 0 : n.styles), a) : {}
      }), this.appConfig;
    }
  }, {
    key: "setTouchpoint",
    value: function(t) {
      this.touchpoint = t;
    }
  }, {
    key: "setParticipantName",
    value: function(t) {
      this.participantName = t;
    }
  }, {
    key: "setAppProps",
    value: function(t) {
      this.appProps = t;
    }
  }, {
    key: "getAllConfig",
    value: function() {
      return {
        appConfig: this.appConfig,
        touchpoint: this.touchpoint,
        context: this.context,
        appProps: this.appProps,
        participantName: this.participantName,
        injectorWindowHref: window.location.href,
        injectorWindowHostname: window.location.hostname
      };
    }
  }, {
    key: "setContextParam",
    value: function(t) {
      this.context = t;
    }
  }, {
    key: "clearAll",
    value: function() {
      this.appConfig = {}, this.touchpoint = null, this.context = {}, this.participantName = "";
    }
  }]);
}();
const Ee = new vw();
var fw = A(A(A(A({}, "td-us-1", "https://api.talkdeskstg.com"), "td-eu-1", "undefined"), "td-ca-1", "undefined"), "td-usfed-1", "undefined"), dw = A(A(A(A({}, "td-us-1", Tr.tdGatewayUs), "td-eu-1", Tr.tdGatewayEu), "td-ca-1", Tr.tdGatewayCa), "td-usfed-1", Tr.tdGatewayUsFed);
function hw(e, r) {
  return r ? "//".concat(r).concat(dw[e]) : fw[e];
}
var Ml = /* @__PURE__ */ function(e) {
  return e.TEXT = "TEXT", e.JSON = "JSON", e.BLOB = "BLOB", e.ARRAY_BUFFER = "ARRAY_BUFFER", e;
}(Ml || {}), Za = /* @__PURE__ */ function(e) {
  return e.GET = "GET", e.POST = "POST", e;
}(Za || {}), pw = {
  "Content-Type": "application/json"
}, gw = /* @__PURE__ */ function(e) {
  function r(t, n) {
    var a;
    return Dr(this, r), a = Pv(this, r, [t]), A(a, "code", void 0), A(a, "response", void 0), a.code = n.code, a.response = n.response, a;
  }
  return Cv(r, e), Fr(r);
}(/* @__PURE__ */ Ca(Error));
function tu(e) {
  var r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(t) {
    return r[t];
  });
}
function yw(e) {
  return Object.entries(e).reduce(function(r, t) {
    var n = gi(t, 2), a = n[0], i = n[1];
    return r.push("".concat(tu(a), "=").concat(tu(i))), r;
  }, []).join("&");
}
function mw(e) {
  return e >= 200 && e < 300;
}
function bw(e) {
  var r = Ee.getAllConfig(), t = r.appProps, n = hw(t == null ? void 0 : t.region, t == null ? void 0 : t.proxyHost);
  return e ? n + e : n;
}
function ww(e) {
  var r = e.url, t = e.params, n = bw(r);
  if (t) {
    var a = yw(t), i = n.indexOf("#");
    i !== -1 && (n = n.slice(0, i)), n += (n.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return n;
}
function $w(e) {
  var r = e.data;
  return r ? JSON.stringify(r) : void 0;
}
function Sw(e) {
  var r = e.token, t = M({}, pw);
  return r && (t.Authorization = "Bearer ".concat(r)), t;
}
function Ew() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.responseType || "JSON", t = e.method || "GET", n = ww(e), a = $w(e), i = Sw(e);
  return {
    url: n,
    method: t,
    body: a,
    headers: i,
    responseType: r
  };
}
function Ow(e) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a = arguments;
    return C().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          t = a.length > 1 && a[1] !== void 0 ? a[1] : "JSON", o.t0 = t, o.next = o.t0 === "TEXT" ? 4 : o.t0 === "JSON" ? 8 : o.t0 === "BLOB" ? 12 : o.t0 === "ARRAY_BUFFER" ? 16 : 20;
          break;
        case 4:
          return o.next = 6, r.text();
        case 6:
          return n = o.sent, o.abrupt("break", 21);
        case 8:
          return o.next = 10, r.json();
        case 10:
          return n = o.sent, o.abrupt("break", 21);
        case 12:
          return o.next = 14, r.blob();
        case 14:
          return n = o.sent, o.abrupt("break", 21);
        case 16:
          return o.next = 18, r.arrayBuffer();
        case 18:
          return n = o.sent, o.abrupt("break", 21);
        case 20:
          return o.abrupt("break", 21);
        case 21:
          if (!(r.ok && mw(r.status))) {
            o.next = 23;
            break;
          }
          return o.abrupt("return", n);
        case 23:
          return o.abrupt("return", Promise.reject(new gw("Failed to http status error ".concat(r.status), {
            code: r.status,
            response: r
          })));
        case 24:
        case "end":
          return o.stop();
      }
    }, e);
  })), ei.apply(this, arguments);
}
var Ul = /* @__PURE__ */ function() {
  function e() {
    Dr(this, e);
  }
  return Fr(e, [{
    key: "request",
    value: function() {
      var r = Y(/* @__PURE__ */ C().mark(function n(a) {
        var i, o = arguments;
        return C().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return i = o.length > 1 && o[1] !== void 0 ? o[1] : {}, typeof a == "string" ? i.url = a : i = a, c.abrupt("return", e._request(i));
            case 3:
            case "end":
              return c.stop();
          }
        }, n);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "get",
    value: function() {
      var r = Y(/* @__PURE__ */ C().mark(function n(a) {
        var i, o = arguments;
        return C().wrap(function(c) {
          for (; ; ) switch (c.prev = c.next) {
            case 0:
              return i = o.length > 1 && o[1] !== void 0 ? o[1] : {}, c.next = 3, this.request(a, M(M({}, i), {}, {
                method: Za.GET
              }));
            case 3:
              return c.abrupt("return", c.sent);
            case 4:
            case "end":
              return c.stop();
          }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "post",
    value: function() {
      var r = Y(/* @__PURE__ */ C().mark(function n(a, i) {
        var o, s = arguments;
        return C().wrap(function(u) {
          for (; ; ) switch (u.prev = u.next) {
            case 0:
              return o = s.length > 2 && s[2] !== void 0 ? s[2] : {}, u.next = 3, this.request(a, M(M({}, o), {}, {
                method: Za.POST,
                data: i
              }));
            case 3:
              return u.abrupt("return", u.sent);
            case 4:
            case "end":
              return u.stop();
          }
        }, n, this);
      }));
      function t(n, a) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }], [{
    key: "create",
    value: function() {
      return e.http ? e.http : new e();
    }
  }, {
    key: "_request",
    value: function() {
      var r = Y(/* @__PURE__ */ C().mark(function n(a) {
        var i, o, s, c, u, v, l;
        return C().wrap(function(d) {
          for (; ; ) switch (d.prev = d.next) {
            case 0:
              return i = Ew(a), o = i.url, s = i.method, c = i.body, u = i.headers, v = i.responseType, d.next = 3, fetch(o, {
                method: s,
                body: c,
                headers: u
              });
            case 3:
              return l = d.sent, d.abrupt("return", Ow(l, v));
            case 5:
            case "end":
              return d.stop();
          }
        }, n);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }]);
}();
A(Ul, "http", void 0);
var cn = Ul.create();
function Iw(e) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a;
    return C().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return t = "/pas/livechat-auth", o.next = 3, cn.post(t, {
            app_id: r
          });
        case 3:
          return n = o.sent, a = n.td_access_token, o.abrupt("return", a);
        case 6:
        case "end":
          return o.stop();
      }
    }, e);
  })), ri.apply(this, arguments);
}
function Tw(e) {
  return ti.apply(this, arguments);
}
function ti() {
  return ti = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a, i, o;
    return C().wrap(function(c) {
      for (; ; ) switch (c.prev = c.next) {
        case 0:
          return t = "/2019-11/pas/livechats", c.next = 3, cn.post(t, M(M({}, r), {}, {
            page_url: window.location.href
          }));
        case 3:
          return n = c.sent, a = n.access_token, i = n.conversation_sid, o = n.region, c.abrupt("return", {
            accessToken: a,
            roomId: i,
            region: o
          });
        case 8:
        case "end":
          return c.stop();
      }
    }, e);
  })), ti.apply(this, arguments);
}
function Pw(e) {
  return ni.apply(this, arguments);
}
function ni() {
  return ni = Y(/* @__PURE__ */ C().mark(function e(r) {
    return C().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.prev = 0, n.next = 3, y1(/* @__PURE__ */ Y(/* @__PURE__ */ C().mark(function a() {
            var i;
            return C().wrap(function(s) {
              for (; ; ) switch (s.prev = s.next) {
                case 0:
                  return s.next = 2, cn.get("/2019-11/pas/livechats", {
                    params: {
                      touchpoint_value: r
                    }
                  });
                case 2:
                  return i = s.sent, s.abrupt("return", {
                    active: i.active,
                    config: i.config,
                    account_id: i.account_id,
                    release_version: i.release_version,
                    enable_split_twilio_bootstrap: !!(i != null && i.enable_split_twilio_bootstrap),
                    feedback_flow_id: (i == null ? void 0 : i.feedback_flow_id) || ""
                  });
                case 4:
                case "end":
                  return s.stop();
              }
            }, a);
          })), {
            defaultRetry: 2
          });
        case 3:
          return n.abrupt("return", n.sent);
        case 6:
          return n.prev = 6, n.t0 = n.catch(0), console.error("Failed to fetch td chat touchpoint", n.t0), n.abrupt("return", null);
        case 10:
        case "end":
          return n.stop();
      }
    }, e, null, [[0, 6]]);
  })), ni.apply(this, arguments);
}
var Rw = B, Cw = Xr, xw = fe.f, ai = Rw("unscopables"), ii = Array.prototype;
ii[ai] === void 0 && xw(ii, ai, {
  configurable: !0,
  value: Cw(null)
});
var _w = function(e) {
  ii[ai][e] = !0;
}, Lw = P, Aw = k, jw = H, nu = Yi, Nw = oe, kw = B, oi = kw("iterator"), Bl = !1, De, Jn, Qn;
[].keys && (Qn = [].keys(), "next" in Qn ? (Jn = nu(nu(Qn)), Jn !== Object.prototype && (De = Jn)) : Bl = !0);
var Mw = !jw(De) || Lw(function() {
  var e = {};
  return De[oi].call(e) !== e;
});
Mw && (De = {});
Aw(De[oi]) || Nw(De, oi, function() {
  return this;
});
var Dl = {
  IteratorPrototype: De,
  BUGGY_SAFARI_ITERATORS: Bl
}, Uw = Dl.IteratorPrototype, Bw = Xr, Dw = Hr, Fw = He, Gw = Yr, Hw = function() {
  return this;
}, Fl = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = Bw(Uw, { next: Dw(+!n, t) }), Fw(e, a, !1), Gw[a] = Hw, e;
}, zw = D, Ww = F, Gl = Wt, Kw = k, qw = Fl, au = Yi, iu = _i, Vw = He, Yw = dr, Zn = oe, Xw = B, Jw = Yr, Hl = Dl, Qw = Gl.PROPER, Zw = Gl.CONFIGURABLE, ou = Hl.IteratorPrototype, vt = Hl.BUGGY_SAFARI_ITERATORS, $r = Xw("iterator"), su = "keys", Sr = "values", uu = "entries", e$ = function() {
  return this;
}, Zi = function(e, r, t, n, a, i, o) {
  qw(t, r, n);
  var s = function(S) {
    if (S === a && f) return f;
    if (!vt && S && S in v) return v[S];
    switch (S) {
      case su:
        return function() {
          return new t(this, S);
        };
      case Sr:
        return function() {
          return new t(this, S);
        };
      case uu:
        return function() {
          return new t(this, S);
        };
    }
    return function() {
      return new t(this);
    };
  }, c = r + " Iterator", u = !1, v = e.prototype, l = v[$r] || v["@@iterator"] || a && v[a], f = !vt && l || s(a), d = r === "Array" && v.entries || l, m, w, g;
  if (d && (m = au(d.call(new e())), m !== Object.prototype && m.next && (au(m) !== ou && (iu ? iu(m, ou) : Kw(m[$r]) || Zn(m, $r, e$)), Vw(m, c, !0))), Qw && a === Sr && l && l.name !== Sr && (Zw ? Yw(v, "name", Sr) : (u = !0, f = function() {
    return Ww(l, this);
  })), a)
    if (w = {
      values: s(Sr),
      keys: i ? f : s(su),
      entries: s(uu)
    }, o) for (g in w)
      (vt || u || !(g in v)) && Zn(v, g, w[g]);
    else zw({ target: r, proto: !0, forced: vt || u }, w);
  return v[$r] !== f && Zn(v, $r, f, { name: a }), Jw[r] = f, w;
}, ln = function(e, r) {
  return { value: e, done: r };
}, r$ = we, eo = _w, cu = Yr, zl = Re, t$ = fe.f, n$ = Zi, ft = ln, a$ = G, Wl = "Array Iterator", i$ = zl.set, o$ = zl.getterFor(Wl), s$ = n$(Array, "Array", function(e, r) {
  i$(this, {
    type: Wl,
    target: r$(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = o$(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, ft(void 0, !0);
  switch (e.kind) {
    case "keys":
      return ft(t, !1);
    case "values":
      return ft(r[t], !1);
  }
  return ft([t, r[t]], !1);
}, "values"), lu = cu.Arguments = cu.Array;
eo("keys");
eo("values");
eo("entries");
if (a$ && lu.name !== "values") try {
  t$(lu, "name", { value: "values" });
} catch {
}
var u$ = Ji.charAt, c$ = _e, Kl = Re, l$ = Zi, vu = ln, ql = "String Iterator", v$ = Kl.set, f$ = Kl.getterFor(ql);
l$(String, "String", function(e) {
  v$(this, {
    type: ql,
    string: c$(e),
    index: 0
  });
}, function() {
  var r = f$(this), t = r.string, n = r.index, a;
  return n >= t.length ? vu(void 0, !0) : (a = u$(t, n), r.index += a.length, vu(a, !1));
});
var fu = j, Vl = $l, d$ = Sl, Pr = s$, du = dr, h$ = He, p$ = B, ea = p$("iterator"), ra = Pr.values, Yl = function(e, r) {
  if (e) {
    if (e[ea] !== ra) try {
      du(e, ea, ra);
    } catch {
      e[ea] = ra;
    }
    if (h$(e, r, !0), Vl[r]) {
      for (var t in Pr)
        if (e[t] !== Pr[t]) try {
          du(e, t, Pr[t]);
        } catch {
          e[t] = Pr[t];
        }
    }
  }
};
for (var ta in Vl)
  Yl(fu[ta] && fu[ta].prototype, ta);
Yl(d$, "DOMTokenList");
var g$ = P, y$ = B, m$ = G, hu = Fv, b$ = y$("iterator"), Xl = !g$(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"), r = e.searchParams, t = new URLSearchParams("a=1&a=2&b=3"), n = "";
  return e.pathname = "c%20d", r.forEach(function(a, i) {
    r.delete("b"), n += i + a;
  }), t.delete("a", 2), t.delete("b", void 0), hu && (!e.toJSON || !t.has("a", 1) || t.has("a", 2) || !t.has("a", void 0) || t.has("b")) || !r.size && (hu || !m$) || !r.sort || e.href !== "https://a/c%20d?a=1&c=3" || r.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !r[b$] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("https://x", void 0).host !== "x";
}), pu = G, w$ = L, $$ = F, S$ = P, na = nn, E$ = Ri, O$ = qt, I$ = Te, T$ = Vt, Xe = Object.assign, gu = Object.defineProperty, P$ = w$([].concat), R$ = !Xe || S$(function() {
  if (pu && Xe({ b: 1 }, Xe(gu({}, "a", {
    enumerable: !0,
    get: function() {
      gu(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1) return !0;
  var e = {}, r = {}, t = Symbol("assign detection"), n = "abcdefghijklmnopqrst";
  return e[t] = 7, n.split("").forEach(function(a) {
    r[a] = a;
  }), Xe({}, e)[t] !== 7 || na(Xe({}, r)).join("") !== n;
}) ? function(r, t) {
  for (var n = I$(r), a = arguments.length, i = 1, o = E$.f, s = O$.f; a > i; )
    for (var c = T$(arguments[i++]), u = o ? P$(na(c), o(c)) : na(c), v = u.length, l = 0, f; v > l; )
      f = u[l++], (!pu || $$(s, c, f)) && (n[f] = c[f]);
  return n;
} : Xe, C$ = q, x$ = ol, _$ = function(e, r, t, n) {
  try {
    return n ? r(C$(t)[0], t[1]) : r(t);
  } catch (a) {
    x$(e, "throw", a);
  }
}, L$ = xe, A$ = F, j$ = Te, N$ = _$, k$ = il, M$ = Qt, U$ = hr, yu = Vi, B$ = Di, D$ = rn, mu = Array, F$ = function(r) {
  var t = j$(r), n = M$(this), a = arguments.length, i = a > 1 ? arguments[1] : void 0, o = i !== void 0;
  o && (i = L$(i, a > 2 ? arguments[2] : void 0));
  var s = D$(t), c = 0, u, v, l, f, d, m;
  if (s && !(this === mu && k$(s)))
    for (v = n ? new this() : [], f = B$(t, s), d = f.next; !(l = A$(d, f)).done; c++)
      m = o ? N$(f, i, [l.value, c], !0) : l.value, yu(v, c, m);
  else
    for (u = U$(t), v = n ? new this(u) : mu(u); u > c; c++)
      m = o ? i(t[c], c) : t[c], yu(v, c, m);
  return v.length = c, v;
}, ze = L, aa = 2147483647, Lr = 36, Jl = 1, si = 26, G$ = 38, H$ = 700, z$ = 72, W$ = 128, K$ = "-", q$ = /[^\0-\u007E]/, Ql = /[.\u3002\uFF0E\uFF61]/g, bu = "Overflow: input needs wider integers to process", ia = Lr - Jl, wu = RangeError, V$ = ze(Ql.exec), ir = Math.floor, oa = String.fromCharCode, $u = ze("".charCodeAt), Zl = ze([].join), Oe = ze([].push), Y$ = ze("".replace), X$ = ze("".split), J$ = ze("".toLowerCase), Q$ = function(e) {
  for (var r = [], t = 0, n = e.length; t < n; ) {
    var a = $u(e, t++);
    if (a >= 55296 && a <= 56319 && t < n) {
      var i = $u(e, t++);
      (i & 64512) === 56320 ? Oe(r, ((a & 1023) << 10) + (i & 1023) + 65536) : (Oe(r, a), t--);
    } else
      Oe(r, a);
  }
  return r;
}, Su = function(e) {
  return e + 22 + 75 * (e < 26);
}, Z$ = function(e, r, t) {
  var n = 0;
  for (e = t ? ir(e / H$) : e >> 1, e += ir(e / r); e > ia * si >> 1; )
    e = ir(e / ia), n += Lr;
  return ir(n + (ia + 1) * e / (e + G$));
}, eS = function(e) {
  var r = [];
  e = Q$(e);
  var t = e.length, n = W$, a = 0, i = z$, o, s;
  for (o = 0; o < e.length; o++)
    s = e[o], s < 128 && Oe(r, oa(s));
  var c = r.length, u = c;
  for (c && Oe(r, K$); u < t; ) {
    var v = aa;
    for (o = 0; o < e.length; o++)
      s = e[o], s >= n && s < v && (v = s);
    var l = u + 1;
    if (v - n > ir((aa - a) / l))
      throw new wu(bu);
    for (a += (v - n) * l, n = v, o = 0; o < e.length; o++) {
      if (s = e[o], s < n && ++a > aa)
        throw new wu(bu);
      if (s === n) {
        for (var f = a, d = Lr; ; ) {
          var m = d <= i ? Jl : d >= i + si ? si : d - i;
          if (f < m) break;
          var w = f - m, g = Lr - m;
          Oe(r, oa(Su(m + w % g))), f = ir(w / g), d += Lr;
        }
        Oe(r, oa(Su(f))), i = Z$(a, l, u === c), a = 0, u++;
      }
    }
    a++, n++;
  }
  return Zl(r, "");
}, rS = function(e) {
  var r = [], t = X$(Y$(J$(e), Ql, "."), "."), n, a;
  for (n = 0; n < t.length; n++)
    a = t[n], Oe(r, V$(q$, a) ? "xn--" + eS(a) : a);
  return Zl(r, ".");
}, tS = oe, ev = function(e, r, t) {
  for (var n in r) tS(e, n, r[n], t);
  return e;
}, Eu = qr, nS = Math.floor, ui = function(e, r) {
  var t = e.length;
  if (t < 8)
    for (var n = 1, a, i; n < t; ) {
      for (i = n, a = e[n]; i && r(e[i - 1], a) > 0; )
        e[i] = e[--i];
      i !== n++ && (e[i] = a);
    }
  else
    for (var o = nS(t / 2), s = ui(Eu(e, 0, o), r), c = ui(Eu(e, o), r), u = s.length, v = c.length, l = 0, f = 0; l < u || f < v; )
      e[l + f] = l < u && f < v ? r(s[l], c[f]) <= 0 ? s[l++] : c[f++] : l < u ? s[l++] : c[f++];
  return e;
}, aS = ui, ci = D, vn = j, ro = Hc, dt = F, pe = L, Ar = G, rv = Xl, tv = oe, iS = Jt, oS = ev, sS = He, uS = Fl, to = Re, nv = Kr, sa = k, cS = X, lS = xe, vS = zr, fS = q, av = H, K = _e, dS = Xr, Ou = Hr, Iu = Di, hS = rn, ht = ln, Je = Ai, pS = B, gS = aS, yS = pS("iterator"), gr = "URLSearchParams", iv = gr + "Iterator", ov = to.set, ae = to.getterFor(gr), mS = to.getterFor(iv), Tu = ro("fetch"), jt = ro("Request"), jr = ro("Headers"), ua = jt && jt.prototype, Pu = jr && jr.prototype, bS = vn.RegExp, wS = vn.TypeError, sv = vn.decodeURIComponent, $S = vn.encodeURIComponent, SS = pe("".charAt), Ru = pe([].join), Be = pe([].push), li = pe("".replace), ES = pe([].shift), Cu = pe([].splice), xu = pe("".split), OS = pe("".slice), IS = /\+/g, _u = Array(4), TS = function(e) {
  return _u[e - 1] || (_u[e - 1] = bS("((?:%[\\da-f]{2}){" + e + "})", "gi"));
}, PS = function(e) {
  try {
    return sv(e);
  } catch {
    return e;
  }
}, Lu = function(e) {
  var r = li(e, IS, " "), t = 4;
  try {
    return sv(r);
  } catch {
    for (; t; )
      r = li(r, TS(t--), PS);
    return r;
  }
}, RS = /[!'()~]|%20/g, CS = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
}, xS = function(e) {
  return CS[e];
}, Au = function(e) {
  return li($S(e), RS, xS);
}, ca = uS(function(r, t) {
  ov(this, {
    type: iv,
    target: ae(r).entries,
    index: 0,
    kind: t
  });
}, gr, function() {
  var r = mS(this), t = r.target, n = r.index++;
  if (!t || n >= t.length)
    return r.target = void 0, ht(void 0, !0);
  var a = t[n];
  switch (r.kind) {
    case "keys":
      return ht(a.key, !1);
    case "values":
      return ht(a.value, !1);
  }
  return ht([a.key, a.value], !1);
}, !0), uv = function(e) {
  this.entries = [], this.url = null, e !== void 0 && (av(e) ? this.parseObject(e) : this.parseQuery(typeof e == "string" ? SS(e, 0) === "?" ? OS(e, 1) : e : K(e)));
};
uv.prototype = {
  type: gr,
  bindURL: function(e) {
    this.url = e, this.update();
  },
  parseObject: function(e) {
    var r = this.entries, t = hS(e), n, a, i, o, s, c, u;
    if (t)
      for (n = Iu(e, t), a = n.next; !(i = dt(a, n)).done; ) {
        if (o = Iu(fS(i.value)), s = o.next, (c = dt(s, o)).done || (u = dt(s, o)).done || !dt(s, o).done) throw new wS("Expected sequence with length 2");
        Be(r, { key: K(c.value), value: K(u.value) });
      }
    else for (var v in e) cS(e, v) && Be(r, { key: v, value: K(e[v]) });
  },
  parseQuery: function(e) {
    if (e)
      for (var r = this.entries, t = xu(e, "&"), n = 0, a, i; n < t.length; )
        a = t[n++], a.length && (i = xu(a, "="), Be(r, {
          key: Lu(ES(i)),
          value: Lu(Ru(i, "="))
        }));
  },
  serialize: function() {
    for (var e = this.entries, r = [], t = 0, n; t < e.length; )
      n = e[t++], Be(r, Au(n.key) + "=" + Au(n.value));
    return Ru(r, "&");
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query);
  },
  updateURL: function() {
    this.url && this.url.update();
  }
};
var fn = function() {
  nv(this, lr);
  var r = arguments.length > 0 ? arguments[0] : void 0, t = ov(this, new uv(r));
  Ar || (this.size = t.entries.length);
}, lr = fn.prototype;
oS(lr, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function(r, t) {
    var n = ae(this);
    Je(arguments.length, 2), Be(n.entries, { key: K(r), value: K(t) }), Ar || this.length++, n.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  delete: function(e) {
    for (var r = ae(this), t = Je(arguments.length, 1), n = r.entries, a = K(e), i = t < 2 ? void 0 : arguments[1], o = i === void 0 ? i : K(i), s = 0; s < n.length; ) {
      var c = n[s];
      if (c.key === a && (o === void 0 || c.value === o)) {
        if (Cu(n, s, 1), o !== void 0) break;
      } else s++;
    }
    Ar || (this.size = n.length), r.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function(r) {
    var t = ae(this).entries;
    Je(arguments.length, 1);
    for (var n = K(r), a = 0; a < t.length; a++)
      if (t[a].key === n) return t[a].value;
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function(r) {
    var t = ae(this).entries;
    Je(arguments.length, 1);
    for (var n = K(r), a = [], i = 0; i < t.length; i++)
      t[i].key === n && Be(a, t[i].value);
    return a;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function(r) {
    for (var t = ae(this).entries, n = Je(arguments.length, 1), a = K(r), i = n < 2 ? void 0 : arguments[1], o = i === void 0 ? i : K(i), s = 0; s < t.length; ) {
      var c = t[s++];
      if (c.key === a && (o === void 0 || c.value === o)) return !0;
    }
    return !1;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function(r, t) {
    var n = ae(this);
    Je(arguments.length, 1);
    for (var a = n.entries, i = !1, o = K(r), s = K(t), c = 0, u; c < a.length; c++)
      u = a[c], u.key === o && (i ? Cu(a, c--, 1) : (i = !0, u.value = s));
    i || Be(a, { key: o, value: s }), Ar || (this.size = a.length), n.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function() {
    var r = ae(this);
    gS(r.entries, function(t, n) {
      return t.key > n.key ? 1 : -1;
    }), r.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function(r) {
    for (var t = ae(this).entries, n = lS(r, arguments.length > 1 ? arguments[1] : void 0), a = 0, i; a < t.length; )
      i = t[a++], n(i.value, i.key, this);
  },
  // `URLSearchParams.prototype.keys` method
  keys: function() {
    return new ca(this, "keys");
  },
  // `URLSearchParams.prototype.values` method
  values: function() {
    return new ca(this, "values");
  },
  // `URLSearchParams.prototype.entries` method
  entries: function() {
    return new ca(this, "entries");
  }
}, { enumerable: !0 });
tv(lr, yS, lr.entries, { name: "entries" });
tv(lr, "toString", function() {
  return ae(this).serialize();
}, { enumerable: !0 });
Ar && iS(lr, "size", {
  get: function() {
    return ae(this).entries.length;
  },
  configurable: !0,
  enumerable: !0
});
sS(fn, gr);
ci({ global: !0, constructor: !0, forced: !rv }, {
  URLSearchParams: fn
});
if (!rv && sa(jr)) {
  var _S = pe(Pu.has), LS = pe(Pu.set), ju = function(e) {
    if (av(e)) {
      var r = e.body, t;
      if (vS(r) === gr)
        return t = e.headers ? new jr(e.headers) : new jr(), _S(t, "content-type") || LS(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), dS(e, {
          body: Ou(0, K(r)),
          headers: Ou(0, t)
        });
    }
    return e;
  };
  if (sa(Tu) && ci({ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 }, {
    fetch: function(r) {
      return Tu(r, arguments.length > 1 ? ju(arguments[1]) : {});
    }
  }), sa(jt)) {
    var la = function(r) {
      return nv(this, ua), new jt(r, arguments.length > 1 ? ju(arguments[1]) : {});
    };
    ua.constructor = la, la.prototype = ua, ci({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, {
      Request: la
    });
  }
}
var AS = {
  URLSearchParams: fn,
  getState: ae
}, jS = D, no = G, NS = Xl, ao = j, Nu = xe, se = L, Nt = oe, re = Jt, kS = Kr, vi = X, io = R$, Qe = F$, ce = qr, MS = Ji.codeAt, US = rS, me = _e, BS = He, DS = Ai, cv = AS, lv = Re, FS = lv.set, kt = lv.getterFor("URL"), GS = cv.URLSearchParams, HS = cv.getState, Er = ao.URL, fi = ao.TypeError, Mt = ao.parseInt, zS = Math.floor, ku = Math.pow, ie = se("".charAt), ve = se(/./.exec), Rr = se([].join), WS = se(1 .toString), KS = se([].pop), rr = se([].push), va = se("".replace), qS = se([].shift), VS = se("".split), Nr = se("".slice), Ut = se("".toLowerCase), YS = se([].unshift), XS = "Invalid authority", fa = "Invalid scheme", ke = "Invalid host", Mu = "Invalid port", vv = /[a-z]/i, JS = /[\d+-.a-z]/i, di = /\d/, QS = /^0x/i, ZS = /^[0-7]+$/, e2 = /^\d+$/, fv = /^[\da-f]+$/i, r2 = /[\0\t\n\r #%/:<>?@[\\\]^|]/, t2 = /[\0\t\n\r #/:<>?@[\\\]^|]/, n2 = /^[\u0000-\u0020]+/, a2 = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, i2 = /[\t\n\r]/g, te, o2 = function(e) {
  var r = VS(e, "."), t, n, a, i, o, s, c;
  if (r.length && r[r.length - 1] === "" && r.length--, t = r.length, t > 4) return e;
  for (n = [], a = 0; a < t; a++) {
    if (i = r[a], i === "") return e;
    if (o = 10, i.length > 1 && ie(i, 0) === "0" && (o = ve(QS, i) ? 16 : 8, i = Nr(i, o === 8 ? 1 : 2)), i === "")
      s = 0;
    else {
      if (!ve(o === 10 ? e2 : o === 8 ? ZS : fv, i)) return e;
      s = Mt(i, o);
    }
    rr(n, s);
  }
  for (a = 0; a < t; a++)
    if (s = n[a], a === t - 1) {
      if (s >= ku(256, 5 - t)) return null;
    } else if (s > 255) return null;
  for (c = KS(n), a = 0; a < n.length; a++)
    c += n[a] * ku(256, 3 - a);
  return c;
}, s2 = function(e) {
  var r = [0, 0, 0, 0, 0, 0, 0, 0], t = 0, n = null, a = 0, i, o, s, c, u, v, l, f = function() {
    return ie(e, a);
  };
  if (f() === ":") {
    if (ie(e, 1) !== ":") return;
    a += 2, t++, n = t;
  }
  for (; f(); ) {
    if (t === 8) return;
    if (f() === ":") {
      if (n !== null) return;
      a++, t++, n = t;
      continue;
    }
    for (i = o = 0; o < 4 && ve(fv, f()); )
      i = i * 16 + Mt(f(), 16), a++, o++;
    if (f() === ".") {
      if (o === 0 || (a -= o, t > 6)) return;
      for (s = 0; f(); ) {
        if (c = null, s > 0)
          if (f() === "." && s < 4) a++;
          else return;
        if (!ve(di, f())) return;
        for (; ve(di, f()); ) {
          if (u = Mt(f(), 10), c === null) c = u;
          else {
            if (c === 0) return;
            c = c * 10 + u;
          }
          if (c > 255) return;
          a++;
        }
        r[t] = r[t] * 256 + c, s++, (s === 2 || s === 4) && t++;
      }
      if (s !== 4) return;
      break;
    } else if (f() === ":") {
      if (a++, !f()) return;
    } else if (f()) return;
    r[t++] = i;
  }
  if (n !== null)
    for (v = t - n, t = 7; t !== 0 && v > 0; )
      l = r[t], r[t--] = r[n + v - 1], r[n + --v] = l;
  else if (t !== 8) return;
  return r;
}, u2 = function(e) {
  for (var r = null, t = 1, n = null, a = 0, i = 0; i < 8; i++)
    e[i] !== 0 ? (a > t && (r = n, t = a), n = null, a = 0) : (n === null && (n = i), ++a);
  return a > t ? n : r;
}, Or = function(e) {
  var r, t, n, a;
  if (typeof e == "number") {
    for (r = [], t = 0; t < 4; t++)
      YS(r, e % 256), e = zS(e / 256);
    return Rr(r, ".");
  }
  if (typeof e == "object") {
    for (r = "", n = u2(e), t = 0; t < 8; t++)
      a && e[t] === 0 || (a && (a = !1), n === t ? (r += t ? ":" : "::", a = !0) : (r += WS(e[t], 16), t < 7 && (r += ":")));
    return "[" + r + "]";
  }
  return e;
}, It = {}, dv = io({}, It, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1
}), hv = io({}, dv, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
}), da = io({}, hv, {
  "/": 1,
  ":": 1,
  ";": 1,
  "=": 1,
  "@": 1,
  "[": 1,
  "\\": 1,
  "]": 1,
  "^": 1,
  "|": 1
}), Se = function(e, r) {
  var t = MS(e, 0);
  return t > 32 && t < 127 && !vi(r, e) ? e : encodeURIComponent(e);
}, pt = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Cr = function(e, r) {
  var t;
  return e.length === 2 && ve(vv, ie(e, 0)) && ((t = ie(e, 1)) === ":" || !r && t === "|");
}, Uu = function(e) {
  var r;
  return e.length > 1 && Cr(Nr(e, 0, 2)) && (e.length === 2 || (r = ie(e, 2)) === "/" || r === "\\" || r === "?" || r === "#");
}, c2 = function(e) {
  return e === "." || Ut(e) === "%2e";
}, l2 = function(e) {
  return e = Ut(e), e === ".." || e === "%2e." || e === ".%2e" || e === "%2e%2e";
}, ha = {}, Bu = {}, pa = {}, Du = {}, Fu = {}, ga = {}, Gu = {}, Hu = {}, gt = {}, yt = {}, ya = {}, ma = {}, ba = {}, wa = {}, zu = {}, $a = {}, Ze = {}, he = {}, Wu = {}, Me = {}, ye = {}, oo = function(e, r, t) {
  var n = me(e), a, i, o;
  if (r) {
    if (i = this.parse(n), i) throw new fi(i);
    this.searchParams = null;
  } else {
    if (t !== void 0 && (a = new oo(t, !0)), i = this.parse(n, null, a), i) throw new fi(i);
    o = HS(new GS()), o.bindURL(this), this.searchParams = o;
  }
};
oo.prototype = {
  type: "URL",
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function(e, r, t) {
    var n = this, a = r || ha, i = 0, o = "", s = !1, c = !1, u = !1, v, l, f, d;
    for (e = me(e), r || (n.scheme = "", n.username = "", n.password = "", n.host = null, n.port = null, n.path = [], n.query = null, n.fragment = null, n.cannotBeABaseURL = !1, e = va(e, n2, ""), e = va(e, a2, "$1")), e = va(e, i2, ""), v = Qe(e); i <= v.length; ) {
      switch (l = v[i], a) {
        case ha:
          if (l && ve(vv, l))
            o += Ut(l), a = Bu;
          else {
            if (r)
              return fa;
            a = pa;
            continue;
          }
          break;
        case Bu:
          if (l && (ve(JS, l) || l === "+" || l === "-" || l === "."))
            o += Ut(l);
          else if (l === ":") {
            if (r && (n.isSpecial() !== vi(pt, o) || o === "file" && (n.includesCredentials() || n.port !== null) || n.scheme === "file" && !n.host)) return;
            if (n.scheme = o, r) {
              n.isSpecial() && pt[n.scheme] === n.port && (n.port = null);
              return;
            }
            o = "", n.scheme === "file" ? a = wa : n.isSpecial() && t && t.scheme === n.scheme ? a = Du : n.isSpecial() ? a = Hu : v[i + 1] === "/" ? (a = Fu, i++) : (n.cannotBeABaseURL = !0, rr(n.path, ""), a = Wu);
          } else {
            if (r)
              return fa;
            o = "", a = pa, i = 0;
            continue;
          }
          break;
        case pa:
          if (!t || t.cannotBeABaseURL && l !== "#") return fa;
          if (t.cannotBeABaseURL && l === "#") {
            n.scheme = t.scheme, n.path = ce(t.path), n.query = t.query, n.fragment = "", n.cannotBeABaseURL = !0, a = ye;
            break;
          }
          a = t.scheme === "file" ? wa : ga;
          continue;
        case Du:
          if (l === "/" && v[i + 1] === "/")
            a = gt, i++;
          else {
            a = ga;
            continue;
          }
          break;
        case Fu:
          if (l === "/") {
            a = yt;
            break;
          } else {
            a = he;
            continue;
          }
        case ga:
          if (n.scheme = t.scheme, l === te)
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query;
          else if (l === "/" || l === "\\" && n.isSpecial())
            a = Gu;
          else if (l === "?")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = "", a = Me;
          else if (l === "#")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query, n.fragment = "", a = ye;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.path.length--, a = he;
            continue;
          }
          break;
        case Gu:
          if (n.isSpecial() && (l === "/" || l === "\\"))
            a = gt;
          else if (l === "/")
            a = yt;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, a = he;
            continue;
          }
          break;
        case Hu:
          if (a = gt, l !== "/" || ie(o, i + 1) !== "/") continue;
          i++;
          break;
        case gt:
          if (l !== "/" && l !== "\\") {
            a = yt;
            continue;
          }
          break;
        case yt:
          if (l === "@") {
            s && (o = "%40" + o), s = !0, f = Qe(o);
            for (var m = 0; m < f.length; m++) {
              var w = f[m];
              if (w === ":" && !u) {
                u = !0;
                continue;
              }
              var g = Se(w, da);
              u ? n.password += g : n.username += g;
            }
            o = "";
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (s && o === "") return XS;
            i -= Qe(o).length + 1, o = "", a = ya;
          } else o += l;
          break;
        case ya:
        case ma:
          if (r && n.scheme === "file") {
            a = $a;
            continue;
          } else if (l === ":" && !c) {
            if (o === "") return ke;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = ba, r === ma) return;
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (n.isSpecial() && o === "") return ke;
            if (r && o === "" && (n.includesCredentials() || n.port !== null)) return;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = Ze, r) return;
            continue;
          } else
            l === "[" ? c = !0 : l === "]" && (c = !1), o += l;
          break;
        case ba:
          if (ve(di, l))
            o += l;
          else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial() || r) {
            if (o !== "") {
              var S = Mt(o, 10);
              if (S > 65535) return Mu;
              n.port = n.isSpecial() && S === pt[n.scheme] ? null : S, o = "";
            }
            if (r) return;
            a = Ze;
            continue;
          } else return Mu;
          break;
        case wa:
          if (n.scheme = "file", l === "/" || l === "\\") a = zu;
          else if (t && t.scheme === "file")
            switch (l) {
              case te:
                n.host = t.host, n.path = ce(t.path), n.query = t.query;
                break;
              case "?":
                n.host = t.host, n.path = ce(t.path), n.query = "", a = Me;
                break;
              case "#":
                n.host = t.host, n.path = ce(t.path), n.query = t.query, n.fragment = "", a = ye;
                break;
              default:
                Uu(Rr(ce(v, i), "")) || (n.host = t.host, n.path = ce(t.path), n.shortenPath()), a = he;
                continue;
            }
          else {
            a = he;
            continue;
          }
          break;
        case zu:
          if (l === "/" || l === "\\") {
            a = $a;
            break;
          }
          t && t.scheme === "file" && !Uu(Rr(ce(v, i), "")) && (Cr(t.path[0], !0) ? rr(n.path, t.path[0]) : n.host = t.host), a = he;
          continue;
        case $a:
          if (l === te || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!r && Cr(o))
              a = he;
            else if (o === "") {
              if (n.host = "", r) return;
              a = Ze;
            } else {
              if (d = n.parseHost(o), d) return d;
              if (n.host === "localhost" && (n.host = ""), r) return;
              o = "", a = Ze;
            }
            continue;
          } else o += l;
          break;
        case Ze:
          if (n.isSpecial()) {
            if (a = he, l !== "/" && l !== "\\") continue;
          } else if (!r && l === "?")
            n.query = "", a = Me;
          else if (!r && l === "#")
            n.fragment = "", a = ye;
          else if (l !== te && (a = he, l !== "/"))
            continue;
          break;
        case he:
          if (l === te || l === "/" || l === "\\" && n.isSpecial() || !r && (l === "?" || l === "#")) {
            if (l2(o) ? (n.shortenPath(), l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "")) : c2(o) ? l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "") : (n.scheme === "file" && !n.path.length && Cr(o) && (n.host && (n.host = ""), o = ie(o, 0) + ":"), rr(n.path, o)), o = "", n.scheme === "file" && (l === te || l === "?" || l === "#"))
              for (; n.path.length > 1 && n.path[0] === ""; )
                qS(n.path);
            l === "?" ? (n.query = "", a = Me) : l === "#" && (n.fragment = "", a = ye);
          } else
            o += Se(l, hv);
          break;
        case Wu:
          l === "?" ? (n.query = "", a = Me) : l === "#" ? (n.fragment = "", a = ye) : l !== te && (n.path[0] += Se(l, It));
          break;
        case Me:
          !r && l === "#" ? (n.fragment = "", a = ye) : l !== te && (l === "'" && n.isSpecial() ? n.query += "%27" : l === "#" ? n.query += "%23" : n.query += Se(l, It));
          break;
        case ye:
          l !== te && (n.fragment += Se(l, dv));
          break;
      }
      i++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function(e) {
    var r, t, n;
    if (ie(e, 0) === "[") {
      if (ie(e, e.length - 1) !== "]" || (r = s2(Nr(e, 1, -1)), !r)) return ke;
      this.host = r;
    } else if (this.isSpecial()) {
      if (e = US(e), ve(r2, e) || (r = o2(e), r === null)) return ke;
      this.host = r;
    } else {
      if (ve(t2, e)) return ke;
      for (r = "", t = Qe(e), n = 0; n < t.length; n++)
        r += Se(t[n], It);
      this.host = r;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || this.scheme === "file";
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function() {
    return this.username !== "" || this.password !== "";
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function() {
    return vi(pt, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function() {
    var e = this.path, r = e.length;
    r && (this.scheme !== "file" || r !== 1 || !Cr(e[0], !0)) && e.length--;
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function() {
    var e = this, r = e.scheme, t = e.username, n = e.password, a = e.host, i = e.port, o = e.path, s = e.query, c = e.fragment, u = r + ":";
    return a !== null ? (u += "//", e.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += Or(a), i !== null && (u += ":" + i)) : r === "file" && (u += "//"), u += e.cannotBeABaseURL ? o[0] : o.length ? "/" + Rr(o, "/") : "", s !== null && (u += "?" + s), c !== null && (u += "#" + c), u;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function(e) {
    var r = this.parse(e);
    if (r) throw new fi(r);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function() {
    var e = this.scheme, r = this.port;
    if (e === "blob") try {
      return new vr(e.path[0]).origin;
    } catch {
      return "null";
    }
    return e === "file" || !this.isSpecial() ? "null" : e + "://" + Or(this.host) + (r !== null ? ":" + r : "");
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function() {
    return this.scheme + ":";
  },
  setProtocol: function(e) {
    this.parse(me(e) + ":", ha);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function() {
    return this.username;
  },
  setUsername: function(e) {
    var r = Qe(me(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var t = 0; t < r.length; t++)
        this.username += Se(r[t], da);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function() {
    return this.password;
  },
  setPassword: function(e) {
    var r = Qe(me(e));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var t = 0; t < r.length; t++)
        this.password += Se(r[t], da);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function() {
    var e = this.host, r = this.port;
    return e === null ? "" : r === null ? Or(e) : Or(e) + ":" + r;
  },
  setHost: function(e) {
    this.cannotBeABaseURL || this.parse(e, ya);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function() {
    var e = this.host;
    return e === null ? "" : Or(e);
  },
  setHostname: function(e) {
    this.cannotBeABaseURL || this.parse(e, ma);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function() {
    var e = this.port;
    return e === null ? "" : me(e);
  },
  setPort: function(e) {
    this.cannotHaveUsernamePasswordPort() || (e = me(e), e === "" ? this.port = null : this.parse(e, ba));
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + Rr(e, "/") : "";
  },
  setPathname: function(e) {
    this.cannotBeABaseURL || (this.path = [], this.parse(e, Ze));
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function() {
    var e = this.query;
    return e ? "?" + e : "";
  },
  setSearch: function(e) {
    e = me(e), e === "" ? this.query = null : (ie(e, 0) === "?" && (e = Nr(e, 1)), this.query = "", this.parse(e, Me)), this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function() {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function() {
    var e = this.fragment;
    return e ? "#" + e : "";
  },
  setHash: function(e) {
    if (e = me(e), e === "") {
      this.fragment = null;
      return;
    }
    ie(e, 0) === "#" && (e = Nr(e, 1)), this.fragment = "", this.parse(e, ye);
  },
  update: function() {
    this.query = this.searchParams.serialize() || null;
  }
};
var vr = function(r) {
  var t = kS(this, W), n = DS(arguments.length, 1) > 1 ? arguments[1] : void 0, a = FS(t, new oo(r, !1, n));
  no || (t.href = a.serialize(), t.origin = a.getOrigin(), t.protocol = a.getProtocol(), t.username = a.getUsername(), t.password = a.getPassword(), t.host = a.getHost(), t.hostname = a.getHostname(), t.port = a.getPort(), t.pathname = a.getPathname(), t.search = a.getSearch(), t.searchParams = a.getSearchParams(), t.hash = a.getHash());
}, W = vr.prototype, ne = function(e, r) {
  return {
    get: function() {
      return kt(this)[e]();
    },
    set: r && function(t) {
      return kt(this)[r](t);
    },
    configurable: !0,
    enumerable: !0
  };
};
no && (re(W, "href", ne("serialize", "setHref")), re(W, "origin", ne("getOrigin")), re(W, "protocol", ne("getProtocol", "setProtocol")), re(W, "username", ne("getUsername", "setUsername")), re(W, "password", ne("getPassword", "setPassword")), re(W, "host", ne("getHost", "setHost")), re(W, "hostname", ne("getHostname", "setHostname")), re(W, "port", ne("getPort", "setPort")), re(W, "pathname", ne("getPathname", "setPathname")), re(W, "search", ne("getSearch", "setSearch")), re(W, "searchParams", ne("getSearchParams")), re(W, "hash", ne("getHash", "setHash")));
Nt(W, "toJSON", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
Nt(W, "toString", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
if (Er) {
  var Ku = Er.createObjectURL, qu = Er.revokeObjectURL;
  Ku && Nt(vr, "createObjectURL", Nu(Ku, Er)), qu && Nt(vr, "revokeObjectURL", Nu(qu, Er));
}
BS(vr, "URL");
jS({ global: !0, constructor: !0, forced: !NS, sham: !no }, {
  URL: vr
});
var v2 = D, f2 = F;
v2({ target: "URL", proto: !0, enumerable: !0 }, {
  toJSON: function() {
    return f2(URL.prototype.toString, this);
  }
});
function d2(e, r) {
  if (!e.length) return [];
  var t = URL.createObjectURL(new Blob(e)), n = document.createElement("a");
  return n.href = t, n.download = r, n.rel = "noopener", document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(t), e;
}
function h2(e) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a, i, o, s, c, u, v, l;
    return C().wrap(function(d) {
      for (; ; ) switch (d.prev = d.next) {
        case 0:
          if (t = r.interactionId, n = t === void 0 ? "" : t, a = r.token, i = a === void 0 ? "" : a, o = r.timezone, s = o === void 0 ? "" : o, c = r.fileName, u = c === void 0 ? "unknown.txt" : c, n) {
            d.next = 3;
            break;
          }
          throw new Error("Interaction ID is required");
        case 3:
          if (i) {
            d.next = 5;
            break;
          }
          throw new Error("Token is required");
        case 5:
          return v = "/cds/interactions/".concat(n, "/messages/transcript"), d.next = 8, cn.get(v, {
            params: {
              timezone: s
            },
            token: i,
            responseType: Ml.BLOB
          });
        case 8:
          return l = d.sent, d.abrupt("return", d2([l], u));
        case 10:
        case "end":
          return d.stop();
      }
    }, e);
  })), hi.apply(this, arguments);
}
var Sa = /* @__PURE__ */ function() {
  function e(r) {
    Dr(this, e), A(this, "current", void 0), this.current = r;
  }
  return Fr(e, null, [{
    key: "create",
    value: function(t) {
      return new e(t);
    }
  }, {
    key: "empty",
    value: function() {
      return new e(null);
    }
  }]);
}();
function Ea(e, r) {
  try {
    return e == null ? void 0 : e();
  } catch (t) {
    r == null || r(t);
  }
}
const p2 = '@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}';
var g2 = function(r) {
  var t = {
    chatIcon: r.chatIcon ? "url(".concat(r.chatIcon, ")") : void 0,
    chatThemeColor: r.chatThemeColor,
    chatHoverThemeColor: r.chatHoverThemeColor,
    triggerButtonWidth: r.triggerButtonWidth,
    triggerButtonHeight: r.triggerButtonHeight,
    triggerButtonPositionBottom: r.triggerButtonPositionBottom,
    triggerButtonPositionRight: r.triggerButtonPositionRight,
    chatPositionBottom: r.chatPositionBottom,
    chatContainerHeight: r.chatContainerHeight,
    chatContainerWidth: r.chatContainerWidth,
    chatLauncherColor: r.chatLauncherColor,
    chatHoverLauncherColor: r.chatHoverLauncherColor,
    chatLauncherShadow: r.chatLauncherShadow
  };
  return h1(t, {
    removeEmptyString: !0
  });
}, y2 = "talkdesk-chat-widget-style";
function m2(e) {
  var r, t, n, a, i = e == null ? void 0 : e.config, o = i ? i1(i, {}) : e == null ? void 0 : e.widgetSettings, s = {};
  if (o != null && (r = o.appearance) !== null && r !== void 0 && (r = r.theme) !== null && r !== void 0 && r.brandColor) {
    var c, u;
    s.chatThemeColor = o == null || (c = o.appearance) === null || c === void 0 ? void 0 : c.theme.brandColor, s.chatHoverThemeColor = o == null || (u = o.appearance) === null || u === void 0 ? void 0 : u.theme.brandColor;
  }
  if (o != null && (t = o.appearance) !== null && t !== void 0 && (t = t.launcher) !== null && t !== void 0 && t.color) {
    var v, l;
    s.chatLauncherColor = o == null || (v = o.appearance) === null || v === void 0 || (v = v.launcher) === null || v === void 0 ? void 0 : v.color, s.chatHoverLauncherColor = o == null || (l = o.appearance) === null || l === void 0 || (l = l.launcher) === null || l === void 0 ? void 0 : l.color;
  }
  if (o != null && (n = o.appearance) !== null && n !== void 0 && (n = n.launcher) !== null && n !== void 0 && n.iconUrl) {
    var f;
    s.chatIcon = o == null || (f = o.appearance) === null || f === void 0 || (f = f.launcher) === null || f === void 0 ? void 0 : f.iconUrl;
  }
  return o != null && (a = o.appearance) !== null && a !== void 0 && (a = a.launcher) !== null && a !== void 0 && a.shadow && (s.chatLauncherShadow = o.appearance.launcher.shadow), s;
}
function b2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return g2(M(M({}, m2(r)), e));
}
function w2(e) {
  var r = [];
  return r.push(a1(p2, y2, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function $2(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = b2(r, t), a = Object.keys(n);
  if (a.length)
    return wl(e, n);
}
function S2(e, r) {
  var t = function() {
    wl(e, {
      chatScreenWidth: window.innerWidth + "px",
      chatScreenHeight: window.innerHeight + "px"
    });
  }, n = function() {
    t();
  };
  return t(), window.addEventListener("resize", n), function() {
    window.removeEventListener("resize", n);
  };
}
var Vu = "tdw-widget-wrapper";
function E2(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = Vu, a.setAttribute("data-".concat(Vu), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      wm(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var O2 = F, I2 = X, T2 = Gt, P2 = fl, Yu = RegExp.prototype, R2 = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in Yu) && !I2(e, "flags") && T2(Yu, e) ? O2(P2, e) : r;
}, C2 = Wt.PROPER, x2 = oe, _2 = q, Xu = _e, L2 = P, A2 = R2, so = "toString", pv = RegExp.prototype, gv = pv[so], j2 = L2(function() {
  return gv.call({ source: "a", flags: "b" }) !== "/a/b";
}), N2 = C2 && gv.name !== so;
(j2 || N2) && x2(pv, so, function() {
  var r = _2(this), t = Xu(r.source), n = Xu(A2(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var k2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';
function M2() {
  var e = document.createElement("div");
  e.className = "tdw-widget-trigger-animate", e.innerHTML = k2;
  var r = function() {
    e.remove();
  };
  return {
    destroy: r,
    get element() {
      return e;
    }
  };
}
var Ju = "talkdesk-chat-widget-trigger";
function U2(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = M2(), a = document.createElement("button");
  a.id = Ju, a.className = "tdw-widget-trigger", a.ariaLabel = "Open chat widget", t && a.setAttribute("data-preview", "");
  var i = null, o = null, s = function() {
    var g;
    (g = o) === null || g === void 0 || g.destroy(), o = null;
  }, c = function() {
    o || (o = new o1(a, {
      onClick: function() {
        r == null || r();
      }
    }));
  }, u = function() {
    document.getElementById(Ju) || (e.appendChild(a), a.appendChild(n.element), a.onclick = function() {
      o || r == null || r();
    });
  }, v = function() {
    u(), a.style.display = "";
  }, l = function() {
    a.style.display = "none";
  }, f = function(g) {
    var S = g.enablePointMoveTriggerButton, $ = g.themes, I = $ === void 0 ? {} : $;
    S && c(), a.setAttribute("data-has-chat-icon", I != null && I["--chat-icon"] ? "yes" : "no");
  }, d = function() {
    s(), a.removeChild(n.element), n.destroy(), a.remove();
  }, m = function(g) {
    g > 0 ? (i || (i = document.createElement("span"), i.className = "tdw-widget-trigger-badge ".concat(g > 9 ? "tdw-widget-trigger-badge-more" : ""), i.ariaLabel = "new message indicator", a.appendChild(i)), i.textContent = g > 99 ? "99+" : g.toString()) : i && (i.remove(), i = null);
  };
  return {
    open: v,
    close: l,
    update: f,
    destroy: d,
    setBadge: m
  };
}
var B2 = D, D2 = Ki.filter, F2 = on, G2 = F2("filter");
B2({ target: "Array", proto: !0, forced: !G2 }, {
  filter: function(r) {
    return D2(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
function Oa(e) {
  try {
    return !isNaN(+e);
  } catch {
    return !1;
  }
}
function H2(e) {
  if (!e) return !1;
  try {
    var r = e.toString().split(".").map(function(o) {
      return o.trim();
    }).filter(Boolean);
    if (r.length !== 3) return !1;
    var t = gi(r, 3), n = t[0], a = t[1], i = t[2];
    return Oa(n) && Oa(a) && Oa(i);
  } catch {
    return !1;
  }
}
var yv = { exports: {} }, mv = {}, z2 = Ce, W2 = we, bv = Yt.f, K2 = qr, wv = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], q2 = function(e) {
  try {
    return bv(e);
  } catch {
    return K2(wv);
  }
};
mv.f = function(r) {
  return wv && z2(r) === "Window" ? q2(r) : bv(W2(r));
};
var V2 = P, Y2 = V2(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), X2 = P, J2 = H, Q2 = Ce, Qu = Y2, Tt = Object.isExtensible, Z2 = X2(function() {
  Tt(1);
}), eE = Z2 || Qu ? function(r) {
  return !J2(r) || Qu && Q2(r) === "ArrayBuffer" ? !1 : Tt ? Tt(r) : !0;
} : Tt, rE = P, tE = !rE(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), nE = D, aE = L, iE = Kt, oE = H, uo = X, sE = fe.f, Zu = Yt, uE = mv, co = eE, cE = wi, lE = tE, $v = !1, be = cE("meta"), vE = 0, lo = function(e) {
  sE(e, be, { value: {
    objectID: "O" + vE++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, fE = function(e, r) {
  if (!oE(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!uo(e, be)) {
    if (!co(e)) return "F";
    if (!r) return "E";
    lo(e);
  }
  return e[be].objectID;
}, dE = function(e, r) {
  if (!uo(e, be)) {
    if (!co(e)) return !0;
    if (!r) return !1;
    lo(e);
  }
  return e[be].weakData;
}, hE = function(e) {
  return lE && $v && co(e) && !uo(e, be) && lo(e), e;
}, pE = function() {
  gE.enable = function() {
  }, $v = !0;
  var e = Zu.f, r = aE([].splice), t = {};
  t[be] = 1, e(t).length && (Zu.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === be) {
        r(a, i, 1);
        break;
      }
    return a;
  }, nE({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: uE.f
  }));
}, gE = yv.exports = {
  enable: pE,
  fastKey: fE,
  getWeakData: dE,
  onFreeze: hE
};
iE[be] = !0;
var Sv = yv.exports, yE = k, mE = H, ec = _i, bE = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    ec && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    yE(n = r.constructor) && n !== t && mE(a = n.prototype) && a !== t.prototype && ec(e, a), e
  );
}, wE = D, $E = j, SE = L, rc = Ci, EE = oe, OE = Sv, IE = tn, TE = Kr, PE = k, RE = Fe, Ia = H, Ta = P, CE = cl, xE = He, _E = bE, LE = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = $E[e], s = o && o.prototype, c = o, u = {}, v = function(S) {
    var $ = SE(s[S]);
    EE(
      s,
      S,
      S === "add" ? function(_) {
        return $(this, _ === 0 ? 0 : _), this;
      } : S === "delete" ? function(I) {
        return a && !Ia(I) ? !1 : $(this, I === 0 ? 0 : I);
      } : S === "get" ? function(_) {
        return a && !Ia(_) ? void 0 : $(this, _ === 0 ? 0 : _);
      } : S === "has" ? function(_) {
        return a && !Ia(_) ? !1 : $(this, _ === 0 ? 0 : _);
      } : function(_, ue) {
        return $(this, _ === 0 ? 0 : _, ue), this;
      }
    );
  }, l = rc(
    e,
    !PE(o) || !(a || s.forEach && !Ta(function() {
      new o().entries().next();
    }))
  );
  if (l)
    c = t.getConstructor(r, e, n, i), OE.enable();
  else if (rc(e, !0)) {
    var f = new c(), d = f[i](a ? {} : -0, 1) !== f, m = Ta(function() {
      f.has(1);
    }), w = CE(function(S) {
      new o(S);
    }), g = !a && Ta(function() {
      for (var S = new o(), $ = 5; $--; ) S[i]($, $);
      return !S.has(-0);
    });
    w || (c = r(function(S, $) {
      TE(S, s);
      var I = _E(new o(), S, c);
      return RE($) || IE($, I[i], { that: I, AS_ENTRIES: n }), I;
    }), c.prototype = s, s.constructor = c), (m || g) && (v("delete"), v("has"), n && v("get")), (g || d) && v(i), a && s.clear && delete s.clear;
  }
  return u[e] = c, wE({ global: !0, constructor: !0, forced: c !== o }, u), xE(c, e), a || t.setStrong(c, e, n), c;
}, tc = Xr, AE = Jt, nc = ev, jE = xe, NE = Kr, kE = Fe, ME = tn, UE = Zi, mt = ln, BE = Lc, Ir = G, ac = Sv.fastKey, Ev = Re, ic = Ev.set, Pa = Ev.getterFor, DE = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(u, v) {
      NE(u, i), ic(u, {
        type: r,
        index: tc(null),
        first: void 0,
        last: void 0,
        size: 0
      }), Ir || (u.size = 0), kE(v) || ME(v, u[n], { that: u, AS_ENTRIES: t });
    }), i = a.prototype, o = Pa(r), s = function(u, v, l) {
      var f = o(u), d = c(u, v), m, w;
      return d ? d.value = l : (f.last = d = {
        index: w = ac(v, !0),
        key: v,
        value: l,
        previous: m = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), m && (m.next = d), Ir ? f.size++ : u.size++, w !== "F" && (f.index[w] = d)), u;
    }, c = function(u, v) {
      var l = o(u), f = ac(v), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === v) return d;
    };
    return nc(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var v = this, l = o(v), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = tc(null), Ir ? l.size = 0 : v.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(u) {
        var v = this, l = o(v), f = c(v, u);
        if (f) {
          var d = f.next, m = f.previous;
          delete l.index[f.index], f.removed = !0, m && (m.next = d), d && (d.previous = m), l.first === f && (l.first = d), l.last === f && (l.last = m), Ir ? l.size-- : v.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(v) {
        for (var l = o(this), f = jE(v, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(v) {
        return !!c(this, v);
      }
    }), nc(i, t ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(v) {
        var l = c(this, v);
        return l && l.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(v, l) {
        return s(this, v === 0 ? 0 : v, l);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(v) {
        return s(this, v = v === 0 ? 0 : v, v);
      }
    }), Ir && AE(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = Pa(r), i = Pa(n);
    UE(e, r, function(o, s) {
      ic(this, {
        type: n,
        target: o,
        state: a(o),
        kind: s,
        last: void 0
      });
    }, function() {
      for (var o = i(this), s = o.kind, c = o.last; c && c.removed; ) c = c.previous;
      return !o.target || !(o.last = c = c ? c.next : o.state.first) ? (o.target = void 0, mt(void 0, !0)) : mt(s === "keys" ? c.key : s === "values" ? c.value : [c.key, c.value], !1);
    }, t ? "entries" : "values", !t, !0), BE(r);
  }
}, FE = LE, GE = DE;
FE("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, GE);
function HE(e) {
  var r = document.createElement("div");
  r.id = e, r.className = "tdw-widget";
  var t = /* @__PURE__ */ new Map(), n = function() {
    r.remove(), t.forEach(function(v) {
      return v.destroy();
    }), t.clear();
  }, a = function(v, l) {
    t.set(v, l), r.appendChild(l.element);
  }, i = function(v) {
    var l = t.get(v);
    l && (l.destroy(), t.delete(v));
  }, o = function() {
    r.setAttribute("aria-hidden", "false");
  }, s = function() {
    r.setAttribute("aria-hidden", "true");
  }, c = function() {
    return !!document.getElementById(e);
  };
  return {
    element: r,
    append: a,
    remove: i,
    show: o,
    hide: s,
    isMounted: c,
    destroy: n
  };
}
function zE() {
  var e = document.createElement("div");
  e.className = "tdw-widget-loading", e.id = "tdw-widget-loading", e.ariaLabel = "Loading", e.innerHTML = ['<div class="tdw-widget-content">', '<span class="tdw-loader"></span>', "</div>"].join("");
  var r = function() {
    e.remove();
  };
  return {
    element: e,
    destroy: r
  };
}
function WE(e) {
  var r = document.createElement("iframe");
  r.title = "Chat Widget", r.allowFullscreen = !0, r.style.display = "none";
  var t = function() {
    r.style.display = "block", e();
  };
  r.addEventListener("load", t);
  var n = function() {
    r.removeEventListener("load", t), r.remove();
  };
  return {
    element: r,
    destroy: n
  };
}
var KE = "talkdesk-chat-widget", oc = "loading-element", qE = "iframe-element", VE = function() {
  var r = Ee.getAllConfig(), t = r.touchpoint, n = r.appProps, a = n != null && n.proxyHost ? "//".concat(n.proxyHost).concat(Tr.tdChatSdk) : "", i = (t == null ? void 0 : t.release_version) || "", o = H2(i);
  return "".concat(a || "https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/").concat(o ? i : "latest", "/index.html?touchpointId=").concat(n == null ? void 0 : n.touchpointId);
}, YE = function() {
  return "".concat("https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/latest/preview.html");
};
function XE(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = HE(KE), a = WE(function() {
    n.remove(oc);
  });
  n.append(oc, zE()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? YE() : VE(), n.append(qE, a), r && a.element.contentWindow && r(a.element.contentWindow));
  }, o = function() {
    i();
  }, s = function(d) {
    var m = d.height;
    m && (n.element.style.height = typeof m == "string" ? m : "".concat(m, "px"));
  }, c = function() {
    i(), n.show();
  }, u = function() {
    n.hide();
  }, v = function() {
    n.destroy();
  }, l = function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = d.enableResponsiveLayout, w = m === void 0 ? !1 : m;
    w ? n.element.setAttribute("data-responsive-layout", "true") : n.element.removeAttribute("data-responsive-layout");
  };
  return {
    initInBackground: o,
    resize: s,
    open: c,
    close: u,
    destroy: v,
    update: l
  };
}
var JE = ["enableResponsiveLayout", "enableUserInput", "enablePointMoveTriggerButton"];
function QE(e, r) {
  var t = document.getElementById(e);
  if (!t)
    throw new Error('The element not exist, element id = "#'.concat(e, '"'));
  var n = r.touchpointId || r.flowId;
  if (!n.trim())
    throw new Error("The td chat jssdk touchpointId or flowId no exist");
  if (!r.region)
    throw new Error("The td chat jssdk region not exist");
  Ee.setAppProps(M(M({}, r), {}, {
    touchpointId: n
  }));
  var a = [], i = null, o = !1, s = !1, c = null, u = null, v = null, l = Sa.empty(), f = Sa.empty(), d = Sa.empty(), m = E2({
    root: t
  }), w = U2(m.element, function() {
    $();
  }), g = XE(m.element, function(U) {
    u = new T1({
      name: "SDK",
      sender: U,
      topic: V.Topic,
      debug: !1
    }), u.register(V.Methods.FrameReady, function() {
      if (!s) {
        var O;
        s = !0, (O = c) === null || O === void 0 || O(!0), w.open();
      }
    }), u.register(V.Methods.FrameResize, function(O) {
      g.resize(O);
    }), u.register(V.Methods.Maximize, function() {
      $();
    }), u.register(V.Methods.Minimize, function() {
      I();
    }), u.register(V.Methods.GetAllConfig, function() {
      return Ee.getAllConfig();
    }), u.register(V.Methods.GetCredentials, function(O) {
      return Tw(M(M({}, O), {}, {
        app_id: n
      }));
    }), u.register(V.Methods.ConversationStart, function() {
      Ea(d.current, function(O) {
        console.error('An error occurred in "onConversationStart" callback.', O);
      });
    }), u.register(V.Methods.SetBadge, function(O) {
      w.setBadge(O);
    }), u.register(V.Methods.GetTdAccessToken, function() {
      return Iw(n);
    }), u.register(V.Methods.DownloadTranscript, /* @__PURE__ */ function() {
      var O = Y(/* @__PURE__ */ C().mark(function N(Z) {
        return C().wrap(function(ee) {
          for (; ; ) switch (ee.prev = ee.next) {
            case 0:
              return ee.next = 2, h2(Z);
            case 2:
              return ee.abrupt("return", !0);
            case 3:
            case "end":
              return ee.stop();
          }
        }, N);
      }));
      return function(N) {
        return O.apply(this, arguments);
      };
    }());
  }), S = /* @__PURE__ */ function() {
    var U = Y(/* @__PURE__ */ C().mark(function O() {
      var N, Z, We, ee, Jr, Le, Ae, ge, p, h, y, E, b = arguments;
      return C().wrap(function(T) {
        for (; ; ) switch (T.prev = T.next) {
          case 0:
            return N = b.length > 0 && b[0] !== void 0 ? b[0] : {}, Z = N.enableResponsiveLayout, We = Z === void 0 ? !0 : Z, ee = N.enableUserInput, Jr = ee === void 0 ? !0 : ee, Le = N.enablePointMoveTriggerButton, Ae = Le === void 0 ? !1 : Le, ge = Nv(N, JE), i || (i = Pw(n)), T.next = 4, i;
          case 4:
            if (p = T.sent, p != null && p.active) {
              T.next = 7;
              break;
            }
            return T.abrupt("return", !1);
          case 7:
            if (h = Ee.setAppConfig(M(M({}, ge), {}, {
              enableResponsiveLayout: We,
              enableUserInput: Jr,
              enablePointMoveTriggerButton: Ae,
              languageCode: (ge == null ? void 0 : ge.languageCode) || (r == null ? void 0 : r.languageCode)
            })), Ee.setTouchpoint(p), o) {
              T.next = 19;
              break;
            }
            return o = !0, y = $2(m.element, h == null ? void 0 : h.styles, p), v = S2(m.element), a.push(w2(m.element)), g.update({
              enableResponsiveLayout: We
            }), w.update({
              enablePointMoveTriggerButton: Ae,
              themes: y
            }), T.abrupt("return", new Promise(function(z) {
              c = z, g.initInBackground();
            }));
          case 19:
            return T.next = 21, (E = u) === null || E === void 0 ? void 0 : E.trigger(V.Methods.UpdateAppConfigs, {
              appConfig: h
            });
          case 21:
            return T.abrupt("return", !0);
          case 22:
          case "end":
            return T.stop();
        }
      }, O);
    }));
    return function() {
      return U.apply(this, arguments);
    };
  }(), $ = function() {
    var O;
    w.close(), g.open(), (O = u) === null || O === void 0 || O.trigger(V.Methods.FrameOpened), Ea(l.current, function(N) {
      console.error('An error occurred in "onOpenWebchat" callback.', N);
    });
  }, I = function() {
    g.close(), w.open(), Ea(f.current, function(O) {
      console.error('An error occurred in "onCloseWebchat" callback.', O);
    });
  }, _ = function() {
    var O, N;
    w.destroy(), g.destroy(), m.destroy(), a.forEach(function(Z) {
      return Z();
    }), a.length = 0, (O = u) === null || O === void 0 || O.destroy(), u = null, f.current = null, l.current = null, d.current = null, Ee.clearAll(), i = null, o = !1, s = !1, c = null, (N = v) === null || N === void 0 || N(), v = null;
  }, ue = function(O) {
    var N;
    Ee.setContextParam(O), (N = u) === null || N === void 0 || N.trigger(V.Methods.UpdateContext, O);
  };
  return {
    open: $,
    close: I,
    init: S,
    destroy: _,
    setContextParam: ue,
    set onOpenWebchat(U) {
      l.current = U;
    },
    set onCloseWebchat(U) {
      f.current = U;
    },
    set onConversationStart(U) {
      d.current = U;
    }
  };
}
function ZE(e, r) {
  return QE(e, r);
}
export {
  ZE as default
};
//# sourceMappingURL=talkdeskchatsdk.es.js.map
