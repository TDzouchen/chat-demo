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
function Ta(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Ev(e) {
  if (Array.isArray(e)) return e;
}
function Ov(e) {
  if (Array.isArray(e)) return Ta(e);
}
function Iv(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uo(e, r, t, n, a, i, o) {
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
        uo(i, n, a, o, s, "next", c);
      }
      function s(c) {
        uo(i, n, a, o, s, "throw", c);
      }
      o(void 0);
    });
  };
}
function Tv(e, r, t) {
  return r = Nr(r), kv(e, di() ? Reflect.construct(r, t || [], Nr(e).constructor) : r.apply(e, t));
}
function Br(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Pv(e, r, t) {
  if (di()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (e.bind.apply(e, n))();
  return t && kr(a, t.prototype), a;
}
function co(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ic(n.key), n);
  }
}
function Dr(e, r, t) {
  return r && co(e.prototype, r), t && co(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function A(e, r, t) {
  return (r = ic(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Nr(e);
}
function Rv(e, r) {
  if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), r && kr(e, r);
}
function Cv(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function di() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (di = function() {
    return !!e;
  })();
}
function xv(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _v(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, s = [], c = !0, u = !1;
    try {
      if (i = (t = t.call(e)).next, r !== 0) for (; !(c = (n = i.call(t)).done) && (s.push(n.value), s.length !== r); c = !0) ;
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
function Lv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Av() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lo(e, r) {
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
    r % 2 ? lo(Object(t), !0).forEach(function(n) {
      A(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : lo(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function jv(e, r) {
  if (e == null) return {};
  var t, n, a = Nv(e, r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) t = i[n], r.includes(t) || {}.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
function Nv(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (r.includes(n)) continue;
    t[n] = e[n];
  }
  return t;
}
function kv(e, r) {
  if (r && (typeof r == "object" || typeof r == "function")) return r;
  if (r !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Iv(e);
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
  function Xr(p) {
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
    }], p.forEach(Xr, this), this.reset(!0);
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
function kr(e, r) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, kr(e, r);
}
function ac(e, r) {
  return Ev(e) || _v(e, r) || oc(e, r) || Lv();
}
function Mv(e) {
  return Ov(e) || xv(e) || oc(e) || Av();
}
function Uv(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function ic(e) {
  var r = Uv(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function oc(e, r) {
  if (e) {
    if (typeof e == "string") return Ta(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ta(e, r) : void 0;
  }
}
function Pa(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pa = function(t) {
    if (t === null || !Cv(t)) return t;
    if (typeof t != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(t)) return r.get(t);
      r.set(t, n);
    }
    function n() {
      return Pv(t, arguments, Nr(this).constructor);
    }
    return n.prototype = Object.create(t.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), kr(n, t);
  }, Pa(e);
}
var Jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = function(e) {
  return e && e.Math === Math && e;
}, j = (
  // eslint-disable-next-line es/no-global-this -- safe
  mr(typeof globalThis == "object" && globalThis) || mr(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  mr(typeof self == "object" && self) || mr(typeof Jr == "object" && Jr) || mr(typeof Jr == "object" && Jr) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), sc = { exports: {} }, Dv = !1, vo = j, Fv = Object.defineProperty, hi = function(e, r) {
  try {
    Fv(vo, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    vo[e] = r;
  }
  return r;
}, Gv = j, Hv = hi, fo = "__core-js_shared__", ho = sc.exports = Gv[fo] || Hv(fo, {});
(ho.versions || (ho.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var pi = sc.exports, po = pi, gi = function(e, r) {
  return po[e] || (po[e] = r || {});
}, P = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, zv = P, Bt = !zv(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), uc = Bt, cc = Function.prototype, Ra = cc.call, Wv = uc && cc.bind.bind(Ra, Ra), L = uc ? Wv : function(e) {
  return function() {
    return Ra.apply(e, arguments);
  };
}, Fe = function(e) {
  return e == null;
}, Kv = Fe, qv = TypeError, fr = function(e) {
  if (Kv(e)) throw new qv("Can't call method on " + e);
  return e;
}, Vv = fr, Yv = Object, Te = function(e) {
  return Yv(Vv(e));
}, Xv = L, Jv = Te, Qv = Xv({}.hasOwnProperty), X = Object.hasOwn || function(r, t) {
  return Qv(Jv(r), t);
}, Zv = L, ef = 0, rf = Math.random(), tf = Zv(1 .toString), yi = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + tf(++ef + rf, 36);
}, nf = j, go = nf.navigator, yo = go && go.userAgent, Fr = yo ? String(yo) : "", lc = j, fn = Fr, mo = lc.process, bo = lc.Deno, wo = mo && mo.versions || bo && bo.version, $o = wo && wo.v8, le, Pt;
$o && (le = $o.split("."), Pt = le[0] > 0 && le[0] < 4 ? 1 : +(le[0] + le[1]));
!Pt && fn && (le = fn.match(/Edge\/(\d+)/), (!le || le[1] >= 74) && (le = fn.match(/Chrome\/(\d+)/), le && (Pt = +le[1])));
var Dt = Pt, So = Dt, af = P, of = j, sf = of.String, vc = !!Object.getOwnPropertySymbols && !af(function() {
  var e = Symbol("symbol detection");
  return !sf(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && So && So < 41;
}), uf = vc, fc = uf && !Symbol.sham && typeof Symbol.iterator == "symbol", cf = j, lf = gi, Eo = X, vf = yi, ff = vc, df = fc, tr = cf.Symbol, dn = lf("wks"), hf = df ? tr.for || tr : tr && tr.withoutSetter || vf, B = function(e) {
  return Eo(dn, e) || (dn[e] = ff && Eo(tr, e) ? tr[e] : hf("Symbol." + e)), dn[e];
}, pf = B, gf = pf("toStringTag"), dc = {};
dc[gf] = "z";
var mi = String(dc) === "[object z]", hn = typeof document == "object" && document.all, k = typeof hn > "u" && hn !== void 0 ? function(e) {
  return typeof e == "function" || e === hn;
} : function(e) {
  return typeof e == "function";
}, fe = {}, yf = P, G = !yf(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), mf = k, H = function(e) {
  return typeof e == "object" ? e !== null : mf(e);
}, bf = j, Oo = H, Ca = bf.document, wf = Oo(Ca) && Oo(Ca.createElement), Ft = function(e) {
  return wf ? Ca.createElement(e) : {};
}, $f = G, Sf = P, Ef = Ft, hc = !$f && !Sf(function() {
  return Object.defineProperty(Ef("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), Of = G, If = P, pc = Of && If(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), Tf = H, Pf = String, Rf = TypeError, q = function(e) {
  if (Tf(e)) return e;
  throw new Rf(Pf(e) + " is not an object");
}, Cf = Bt, Qr = Function.prototype.call, F = Cf ? Qr.bind(Qr) : function() {
  return Qr.apply(Qr, arguments);
}, pn = j, xf = k, _f = function(e) {
  return xf(e) ? e : void 0;
}, Ge = function(e, r) {
  return arguments.length < 2 ? _f(pn[e]) : pn[e] && pn[e][r];
}, Lf = L, Gt = Lf({}.isPrototypeOf), Af = Ge, jf = k, Nf = Gt, kf = fc, Mf = Object, gc = kf ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = Af("Symbol");
  return jf(r) && Nf(r.prototype, Mf(e));
}, Uf = String, Ht = function(e) {
  try {
    return Uf(e);
  } catch {
    return "Object";
  }
}, Bf = k, Df = Ht, Ff = TypeError, Pe = function(e) {
  if (Bf(e)) return e;
  throw new Ff(Df(e) + " is not a function");
}, Gf = Pe, Hf = Fe, zt = function(e, r) {
  var t = e[r];
  return Hf(t) ? void 0 : Gf(t);
}, gn = F, yn = k, mn = H, zf = TypeError, Wf = function(e, r) {
  var t, n;
  if (r === "string" && yn(t = e.toString) && !mn(n = gn(t, e)) || yn(t = e.valueOf) && !mn(n = gn(t, e)) || r !== "string" && yn(t = e.toString) && !mn(n = gn(t, e))) return n;
  throw new zf("Can't convert object to primitive value");
}, Kf = F, Io = H, To = gc, qf = zt, Vf = Wf, Yf = B, Xf = TypeError, Jf = Yf("toPrimitive"), Qf = function(e, r) {
  if (!Io(e) || To(e)) return e;
  var t = qf(e, Jf), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = Kf(t, e, r), !Io(n) || To(n)) return n;
    throw new Xf("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), Vf(e, r);
}, Zf = Qf, ed = gc, yc = function(e) {
  var r = Zf(e, "string");
  return ed(r) ? r : r + "";
}, rd = G, td = hc, nd = pc, Zr = q, Po = yc, ad = TypeError, bn = Object.defineProperty, id = Object.getOwnPropertyDescriptor, wn = "enumerable", $n = "configurable", Sn = "writable";
fe.f = rd ? nd ? function(r, t, n) {
  if (Zr(r), t = Po(t), Zr(n), typeof r == "function" && t === "prototype" && "value" in n && Sn in n && !n[Sn]) {
    var a = id(r, t);
    a && a[Sn] && (r[t] = n.value, n = {
      configurable: $n in n ? n[$n] : a[$n],
      enumerable: wn in n ? n[wn] : a[wn],
      writable: !1
    });
  }
  return bn(r, t, n);
} : bn : function(r, t, n) {
  if (Zr(r), t = Po(t), Zr(n), td) try {
    return bn(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new ad("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var mc = { exports: {} }, xa = G, od = X, bc = Function.prototype, sd = xa && Object.getOwnPropertyDescriptor, bi = od(bc, "name"), ud = bi && (function() {
}).name === "something", cd = bi && (!xa || xa && sd(bc, "name").configurable), Wt = {
  EXISTS: bi,
  PROPER: ud,
  CONFIGURABLE: cd
}, ld = L, vd = k, _a = pi, fd = ld(Function.toString);
vd(_a.inspectSource) || (_a.inspectSource = function(e) {
  return fd(e);
});
var wi = _a.inspectSource, dd = j, hd = k, Ro = dd.WeakMap, pd = hd(Ro) && /native code/.test(String(Ro)), Gr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, gd = G, yd = fe, md = Gr, dr = gd ? function(e, r, t) {
  return yd.f(e, r, md(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, bd = gi, wd = yi, Co = bd("keys"), $i = function(e) {
  return Co[e] || (Co[e] = wd(e));
}, Kt = {}, $d = pd, wc = j, Sd = H, Ed = dr, En = X, On = pi, Od = $i, Id = Kt, xo = "Object already initialized", La = wc.TypeError, Td = wc.WeakMap, Rt, Mr, Ct, Pd = function(e) {
  return Ct(e) ? Mr(e) : Rt(e, {});
}, Rd = function(e) {
  return function(r) {
    var t;
    if (!Sd(r) || (t = Mr(r)).type !== e)
      throw new La("Incompatible receiver, " + e + " required");
    return t;
  };
};
if ($d || On.state) {
  var de = On.state || (On.state = new Td());
  de.get = de.get, de.has = de.has, de.set = de.set, Rt = function(e, r) {
    if (de.has(e)) throw new La(xo);
    return r.facade = e, de.set(e, r), r;
  }, Mr = function(e) {
    return de.get(e) || {};
  }, Ct = function(e) {
    return de.has(e);
  };
} else {
  var qe = Od("state");
  Id[qe] = !0, Rt = function(e, r) {
    if (En(e, qe)) throw new La(xo);
    return r.facade = e, Ed(e, qe, r), r;
  }, Mr = function(e) {
    return En(e, qe) ? e[qe] : {};
  }, Ct = function(e) {
    return En(e, qe);
  };
}
var Re = {
  set: Rt,
  get: Mr,
  has: Ct,
  enforce: Pd,
  getterFor: Rd
}, Si = L, Cd = P, xd = k, et = X, Aa = G, _d = Wt.CONFIGURABLE, Ld = wi, $c = Re, Ad = $c.enforce, jd = $c.get, _o = String, bt = Object.defineProperty, Nd = Si("".slice), kd = Si("".replace), Md = Si([].join), Ud = Aa && !Cd(function() {
  return bt(function() {
  }, "length", { value: 8 }).length !== 8;
}), Bd = String(String).split("String"), Dd = mc.exports = function(e, r, t) {
  Nd(_o(r), 0, 7) === "Symbol(" && (r = "[" + kd(_o(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!et(e, "name") || _d && e.name !== r) && (Aa ? bt(e, "name", { value: r, configurable: !0 }) : e.name = r), Ud && t && et(t, "arity") && e.length !== t.arity && bt(e, "length", { value: t.arity });
  try {
    t && et(t, "constructor") && t.constructor ? Aa && bt(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = Ad(e);
  return et(n, "source") || (n.source = Md(Bd, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = Dd(function() {
  return xd(this) && jd(this).source || Ld(this);
}, "toString");
var Sc = mc.exports, Fd = k, Gd = fe, Hd = Sc, zd = hi, oe = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (Fd(t) && Hd(t, i, n), n.global)
    a ? e[r] = t : zd(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : Gd.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Ec = L, Wd = Ec({}.toString), Kd = Ec("".slice), Ce = function(e) {
  return Kd(Wd(e), 8, -1);
}, qd = mi, Vd = k, wt = Ce, Yd = B, Xd = Yd("toStringTag"), Jd = Object, Qd = wt(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Zd = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, Hr = qd ? wt : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Zd(r = Jd(e), Xd)) == "string" ? t : Qd ? wt(r) : (n = wt(r)) === "Object" && Vd(r.callee) ? "Arguments" : n;
}, eh = mi, rh = Hr, th = eh ? {}.toString : function() {
  return "[object " + rh(this) + "]";
}, nh = mi, ah = oe, ih = th;
nh || ah(Object.prototype, "toString", ih, { unsafe: !0 });
var Ei = {}, qt = {}, Oc = {}.propertyIsEnumerable, Ic = Object.getOwnPropertyDescriptor, oh = Ic && !Oc.call({ 1: 2 }, 1);
qt.f = oh ? function(r) {
  var t = Ic(this, r);
  return !!t && t.enumerable;
} : Oc;
var sh = L, uh = P, ch = Ce, In = Object, lh = sh("".split), Vt = uh(function() {
  return !In("z").propertyIsEnumerable(0);
}) ? function(e) {
  return ch(e) === "String" ? lh(e, "") : In(e);
} : In, vh = Vt, fh = fr, we = function(e) {
  return vh(fh(e));
}, dh = G, hh = F, ph = qt, gh = Gr, yh = we, mh = yc, bh = X, wh = hc, Lo = Object.getOwnPropertyDescriptor;
Ei.f = dh ? Lo : function(r, t) {
  if (r = yh(r), t = mh(t), wh) try {
    return Lo(r, t);
  } catch {
  }
  if (bh(r, t)) return gh(!hh(ph.f, r, t), r[t]);
};
var Yt = {}, $h = Math.ceil, Sh = Math.floor, Eh = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? Sh : $h)(t);
}, Oh = Eh, Xt = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : Oh(r);
}, Ih = Xt, Th = Math.max, Ph = Math.min, Tc = function(e, r) {
  var t = Ih(e);
  return t < 0 ? Th(t + r, 0) : Ph(t, r);
}, Rh = Xt, Ch = Math.min, Pc = function(e) {
  var r = Rh(e);
  return r > 0 ? Ch(r, 9007199254740991) : 0;
}, xh = Pc, hr = function(e) {
  return xh(e.length);
}, _h = we, Lh = Tc, Ah = hr, Ao = function(e) {
  return function(r, t, n) {
    var a = _h(r), i = Ah(a);
    if (i === 0) return !e && -1;
    var o = Lh(n, i), s;
    if (e && t !== t) {
      for (; i > o; )
        if (s = a[o++], s !== s) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, jh = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Ao(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Ao(!1)
}, Nh = L, Tn = X, kh = we, Mh = jh.indexOf, Uh = Kt, jo = Nh([].push), Rc = function(e, r) {
  var t = kh(e), n = 0, a = [], i;
  for (i in t) !Tn(Uh, i) && Tn(t, i) && jo(a, i);
  for (; r.length > n; ) Tn(t, i = r[n++]) && (~Mh(a, i) || jo(a, i));
  return a;
}, Oi = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Bh = Rc, Dh = Oi, Fh = Dh.concat("length", "prototype");
Yt.f = Object.getOwnPropertyNames || function(r) {
  return Bh(r, Fh);
};
var Ii = {};
Ii.f = Object.getOwnPropertySymbols;
var Gh = Ge, Hh = L, zh = Yt, Wh = Ii, Kh = q, qh = Hh([].concat), Vh = Gh("Reflect", "ownKeys") || function(r) {
  var t = zh.f(Kh(r)), n = Wh.f;
  return n ? qh(t, n(r)) : t;
}, No = X, Yh = Vh, Xh = Ei, Jh = fe, Qh = function(e, r, t) {
  for (var n = Yh(r), a = Jh.f, i = Xh.f, o = 0; o < n.length; o++) {
    var s = n[o];
    !No(e, s) && !(t && No(t, s)) && a(e, s, i(r, s));
  }
}, Zh = P, ep = k, rp = /#|\.prototype\./, zr = function(e, r) {
  var t = np[tp(e)];
  return t === ip ? !0 : t === ap ? !1 : ep(r) ? Zh(r) : !!r;
}, tp = zr.normalize = function(e) {
  return String(e).replace(rp, ".").toLowerCase();
}, np = zr.data = {}, ap = zr.NATIVE = "N", ip = zr.POLYFILL = "P", Ti = zr, rt = j, op = Ei.f, sp = dr, up = oe, cp = hi, lp = Qh, vp = Ti, D = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, s, c, u, v;
  if (n ? o = rt : a ? o = rt[t] || cp(t, {}) : o = rt[t] && rt[t].prototype, o) for (s in r) {
    if (u = r[s], e.dontCallGetSet ? (v = op(o, s), c = v && v.value) : c = o[s], i = vp(n ? s : t + (a ? "." : "#") + s, e.forced), !i && c !== void 0) {
      if (typeof u == typeof c) continue;
      lp(u, c);
    }
    (e.sham || c && c.sham) && sp(u, "sham", !0), up(o, s, u, e);
  }
}, br = j, fp = Fr, dp = Ce, tt = function(e) {
  return fp.slice(0, e.length) === e;
}, Cc = function() {
  return tt("Bun/") ? "BUN" : tt("Cloudflare-Workers") ? "CLOUDFLARE" : tt("Deno/") ? "DENO" : tt("Node.js/") ? "NODE" : br.Bun && typeof Bun.version == "string" ? "BUN" : br.Deno && typeof Deno.version == "object" ? "DENO" : dp(br.process) === "process" ? "NODE" : br.window && br.document ? "BROWSER" : "REST";
}(), hp = Cc, Pi = hp === "NODE", pp = L, gp = Pe, yp = function(e, r, t) {
  try {
    return pp(gp(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, mp = H, bp = function(e) {
  return mp(e) || e === null;
}, wp = bp, $p = String, Sp = TypeError, Ep = function(e) {
  if (wp(e)) return e;
  throw new Sp("Can't set " + $p(e) + " as a prototype");
}, Op = yp, Ip = H, Tp = fr, Pp = Ep, Ri = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = Op(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return Tp(a), Pp(i), Ip(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), Rp = fe.f, Cp = X, xp = B, ko = xp("toStringTag"), He = function(e, r, t) {
  e && !t && (e = e.prototype), e && !Cp(e, ko) && Rp(e, ko, { configurable: !0, value: r });
}, Mo = Sc, _p = fe, Jt = function(e, r, t) {
  return t.get && Mo(t.get, r, { getter: !0 }), t.set && Mo(t.set, r, { setter: !0 }), _p.f(e, r, t);
}, Lp = Ge, Ap = Jt, jp = B, Np = G, Uo = jp("species"), xc = function(e) {
  var r = Lp(e);
  Np && r && !r[Uo] && Ap(r, Uo, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, kp = Gt, Mp = TypeError, Wr = function(e, r) {
  if (kp(r, e)) return e;
  throw new Mp("Incorrect invocation");
}, Up = L, Bp = P, _c = k, Dp = Hr, Fp = Ge, Gp = wi, Lc = function() {
}, Ac = Fp("Reflect", "construct"), Ci = /^\s*(?:class|function)\b/, Hp = Up(Ci.exec), zp = !Ci.test(Lc), wr = function(r) {
  if (!_c(r)) return !1;
  try {
    return Ac(Lc, [], r), !0;
  } catch {
    return !1;
  }
}, jc = function(r) {
  if (!_c(r)) return !1;
  switch (Dp(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return zp || !!Hp(Ci, Gp(r));
  } catch {
    return !0;
  }
};
jc.sham = !0;
var Qt = !Ac || Bp(function() {
  var e;
  return wr(wr.call) || !wr(Object) || !wr(function() {
    e = !0;
  }) || e;
}) ? jc : wr, Wp = Qt, Kp = Ht, qp = TypeError, Vp = function(e) {
  if (Wp(e)) return e;
  throw new qp(Kp(e) + " is not a constructor");
}, Bo = q, Yp = Vp, Xp = Fe, Jp = B, Qp = Jp("species"), Zp = function(e, r) {
  var t = Bo(e).constructor, n;
  return t === void 0 || Xp(n = Bo(t)[Qp]) ? r : Yp(n);
}, eg = Bt, Nc = Function.prototype, Do = Nc.apply, Fo = Nc.call, kc = typeof Reflect == "object" && Reflect.apply || (eg ? Fo.bind(Do) : function() {
  return Fo.apply(Do, arguments);
}), rg = Ce, tg = L, ng = function(e) {
  if (rg(e) === "Function") return tg(e);
}, Go = ng, ag = Pe, ig = Bt, og = Go(Go.bind), xe = function(e, r) {
  return ag(e), r === void 0 ? e : ig ? og(e, r) : function() {
    return e.apply(r, arguments);
  };
}, sg = Ge, Mc = sg("document", "documentElement"), ug = L, Kr = ug([].slice), cg = TypeError, xi = function(e, r) {
  if (e < r) throw new cg("Not enough arguments");
  return e;
}, lg = Fr, Uc = /(?:ipad|iphone|ipod).*applewebkit/i.test(lg), Q = j, vg = kc, fg = xe, Ho = k, dg = X, Bc = P, zo = Mc, hg = Kr, Wo = Ft, pg = xi, gg = Uc, yg = Pi, ja = Q.setImmediate, Na = Q.clearImmediate, mg = Q.process, Pn = Q.Dispatch, bg = Q.Function, Ko = Q.MessageChannel, wg = Q.String, Rn = 0, Cr = {}, qo = "onreadystatechange", Ur, Ne, Cn, xn;
Bc(function() {
  Ur = Q.location;
});
var _i = function(e) {
  if (dg(Cr, e)) {
    var r = Cr[e];
    delete Cr[e], r();
  }
}, _n = function(e) {
  return function() {
    _i(e);
  };
}, Vo = function(e) {
  _i(e.data);
}, Yo = function(e) {
  Q.postMessage(wg(e), Ur.protocol + "//" + Ur.host);
};
(!ja || !Na) && (ja = function(r) {
  pg(arguments.length, 1);
  var t = Ho(r) ? r : bg(r), n = hg(arguments, 1);
  return Cr[++Rn] = function() {
    vg(t, void 0, n);
  }, Ne(Rn), Rn;
}, Na = function(r) {
  delete Cr[r];
}, yg ? Ne = function(e) {
  mg.nextTick(_n(e));
} : Pn && Pn.now ? Ne = function(e) {
  Pn.now(_n(e));
} : Ko && !gg ? (Cn = new Ko(), xn = Cn.port2, Cn.port1.onmessage = Vo, Ne = fg(xn.postMessage, xn)) : Q.addEventListener && Ho(Q.postMessage) && !Q.importScripts && Ur && Ur.protocol !== "file:" && !Bc(Yo) ? (Ne = Yo, Q.addEventListener("message", Vo, !1)) : qo in Wo("script") ? Ne = function(e) {
  zo.appendChild(Wo("script"))[qo] = function() {
    zo.removeChild(this), _i(e);
  };
} : Ne = function(e) {
  setTimeout(_n(e), 0);
});
var Dc = {
  set: ja,
  clear: Na
}, Xo = j, $g = G, Sg = Object.getOwnPropertyDescriptor, Fc = function(e) {
  if (!$g) return Xo[e];
  var r = Sg(Xo, e);
  return r && r.value;
}, Gc = function() {
  this.head = null, this.tail = null;
};
Gc.prototype = {
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
var Hc = Gc, Eg = Fr, Og = /ipad|iphone|ipod/i.test(Eg) && typeof Pebble < "u", Ig = Fr, Tg = /web0s(?!.*chrome)/i.test(Ig), ur = j, Pg = Fc, Jo = xe, Ln = Dc.set, Rg = Hc, Cg = Uc, xg = Og, _g = Tg, An = Pi, Qo = ur.MutationObserver || ur.WebKitMutationObserver, Zo = ur.document, es = ur.process, nt = ur.Promise, ka = Pg("queueMicrotask"), Ve, jn, Nn, at, rs;
if (!ka) {
  var it = new Rg(), ot = function() {
    var e, r;
    for (An && (e = es.domain) && e.exit(); r = it.get(); ) try {
      r();
    } catch (t) {
      throw it.head && Ve(), t;
    }
    e && e.enter();
  };
  !Cg && !An && !_g && Qo && Zo ? (jn = !0, Nn = Zo.createTextNode(""), new Qo(ot).observe(Nn, { characterData: !0 }), Ve = function() {
    Nn.data = jn = !jn;
  }) : !xg && nt && nt.resolve ? (at = nt.resolve(void 0), at.constructor = nt, rs = Jo(at.then, at), Ve = function() {
    rs(ot);
  }) : An ? Ve = function() {
    es.nextTick(ot);
  } : (Ln = Jo(Ln, ur), Ve = function() {
    Ln(ot);
  }), ka = function(e) {
    it.head || Ve(), it.add(e);
  };
}
var Lg = ka, Ag = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, Li = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, jg = j, Zt = jg.Promise, Ng = j, xr = Zt, kg = k, Mg = Ti, Ug = wi, Bg = B, ts = Cc, kn = Dt;
xr && xr.prototype;
var Dg = Bg("species"), Ma = !1, zc = kg(Ng.PromiseRejectionEvent), Fg = Mg("Promise", function() {
  var e = Ug(xr), r = e !== String(xr);
  if (!r && kn === 66) return !0;
  if (!kn || kn < 51 || !/native code/.test(e)) {
    var t = new xr(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[Dg] = n, Ma = t.then(function() {
    }) instanceof n, !Ma) return !0;
  }
  return !r && (ts === "BROWSER" || ts === "DENO") && !zc;
}), qr = {
  CONSTRUCTOR: Fg,
  REJECTION_EVENT: zc,
  SUBCLASSING: Ma
}, pr = {}, ns = Pe, Gg = TypeError, Hg = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new Gg("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = ns(r), this.reject = ns(t);
};
pr.f = function(e) {
  return new Hg(e);
};
var zg = D, xt = Pi, Ie = j, cr = F, as = oe, is = Ri, Wg = He, Kg = xc, qg = Pe, $t = k, Vg = H, Yg = Wr, Xg = Zp, Wc = Dc.set, Ai = Lg, Jg = Ag, Qg = Li, Zg = Hc, Kc = Re, _t = Zt, ji = qr, qc = pr, en = "Promise", Vc = ji.CONSTRUCTOR, e0 = ji.REJECTION_EVENT, r0 = ji.SUBCLASSING, Mn = Kc.getterFor(en), t0 = Kc.set, er = _t && _t.prototype, Ue = _t, st = er, Yc = Ie.TypeError, Ua = Ie.document, Ni = Ie.process, Ba = qc.f, n0 = Ba, a0 = !!(Ua && Ua.createEvent && Ie.dispatchEvent), Xc = "unhandledrejection", i0 = "rejectionhandled", os = 0, Jc = 1, o0 = 2, ki = 1, Qc = 2, ut, ss, s0, us, Zc = function(e) {
  var r;
  return Vg(e) && $t(r = e.then) ? r : !1;
}, el = function(e, r) {
  var t = r.value, n = r.state === Jc, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, s = e.domain, c, u, v;
  try {
    a ? (n || (r.rejection === Qc && c0(r), r.rejection = ki), a === !0 ? c = t : (s && s.enter(), c = a(t), s && (s.exit(), v = !0)), c === e.promise ? o(new Yc("Promise-chain cycle")) : (u = Zc(c)) ? cr(u, c, i, o) : i(c)) : o(t);
  } catch (l) {
    s && !v && s.exit(), o(l);
  }
}, rl = function(e, r) {
  e.notified || (e.notified = !0, Ai(function() {
    for (var t = e.reactions, n; n = t.get(); )
      el(n, e);
    e.notified = !1, r && !e.rejection && u0(e);
  }));
}, tl = function(e, r, t) {
  var n, a;
  a0 ? (n = Ua.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), Ie.dispatchEvent(n)) : n = { promise: r, reason: t }, !e0 && (a = Ie["on" + e]) ? a(n) : e === Xc && Jg("Unhandled promise rejection", t);
}, u0 = function(e) {
  cr(Wc, Ie, function() {
    var r = e.facade, t = e.value, n = cs(e), a;
    if (n && (a = Qg(function() {
      xt ? Ni.emit("unhandledRejection", t, r) : tl(Xc, r, t);
    }), e.rejection = xt || cs(e) ? Qc : ki, a.error))
      throw a.value;
  });
}, cs = function(e) {
  return e.rejection !== ki && !e.parent;
}, c0 = function(e) {
  cr(Wc, Ie, function() {
    var r = e.facade;
    xt ? Ni.emit("rejectionHandled", r) : tl(i0, r, e.value);
  });
}, nr = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, or = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = o0, rl(e, !0));
}, Da = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new Yc("Promise can't be resolved itself");
      var n = Zc(r);
      n ? Ai(function() {
        var a = { done: !1 };
        try {
          cr(
            n,
            r,
            nr(Da, a, e),
            nr(or, a, e)
          );
        } catch (i) {
          or(a, i, e);
        }
      }) : (e.value = r, e.state = Jc, rl(e, !1));
    } catch (a) {
      or({ done: !1 }, a, e);
    }
  }
};
if (Vc && (Ue = function(r) {
  Yg(this, st), qg(r), cr(ut, this);
  var t = Mn(this);
  try {
    r(nr(Da, t), nr(or, t));
  } catch (n) {
    or(t, n);
  }
}, st = Ue.prototype, ut = function(r) {
  t0(this, {
    type: en,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new Zg(),
    rejection: !1,
    state: os,
    value: void 0
  });
}, ut.prototype = as(st, "then", function(r, t) {
  var n = Mn(this), a = Ba(Xg(this, Ue));
  return n.parent = !0, a.ok = $t(r) ? r : !0, a.fail = $t(t) && t, a.domain = xt ? Ni.domain : void 0, n.state === os ? n.reactions.add(a) : Ai(function() {
    el(a, n);
  }), a.promise;
}), ss = function() {
  var e = new ut(), r = Mn(e);
  this.promise = e, this.resolve = nr(Da, r), this.reject = nr(or, r);
}, qc.f = Ba = function(e) {
  return e === Ue || e === s0 ? new ss(e) : n0(e);
}, $t(_t) && er !== Object.prototype)) {
  us = er.then, r0 || as(er, "then", function(r, t) {
    var n = this;
    return new Ue(function(a, i) {
      cr(us, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete er.constructor;
  } catch {
  }
  is && is(er, st);
}
zg({ global: !0, constructor: !0, wrap: !0, forced: Vc }, {
  Promise: Ue
});
Wg(Ue, en, !1);
Kg(en);
var Vr = {}, l0 = B, v0 = Vr, f0 = l0("iterator"), d0 = Array.prototype, nl = function(e) {
  return e !== void 0 && (v0.Array === e || d0[f0] === e);
}, h0 = Hr, ls = zt, p0 = Fe, g0 = Vr, y0 = B, m0 = y0("iterator"), rn = function(e) {
  if (!p0(e)) return ls(e, m0) || ls(e, "@@iterator") || g0[h0(e)];
}, b0 = F, w0 = Pe, $0 = q, S0 = Ht, E0 = rn, O0 = TypeError, Mi = function(e, r) {
  var t = arguments.length < 2 ? E0(e) : r;
  if (w0(t)) return $0(b0(t, e));
  throw new O0(S0(e) + " is not iterable");
}, I0 = F, vs = q, T0 = zt, al = function(e, r, t) {
  var n, a;
  vs(e);
  try {
    if (n = T0(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = I0(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return vs(n), t;
}, P0 = xe, R0 = F, C0 = q, x0 = Ht, _0 = nl, L0 = hr, fs = Gt, A0 = Mi, j0 = rn, ds = al, N0 = TypeError, St = function(e, r) {
  this.stopped = e, this.result = r;
}, hs = St.prototype, tn = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), s = !!(t && t.INTERRUPTED), c = P0(r, n), u, v, l, f, d, m, w, g = function($) {
    return u && ds(u, "normal", $), new St(!0, $);
  }, S = function($) {
    return a ? (C0($), s ? c($[0], $[1], g) : c($[0], $[1])) : s ? c($, g) : c($);
  };
  if (i)
    u = e.iterator;
  else if (o)
    u = e;
  else {
    if (v = j0(e), !v) throw new N0(x0(e) + " is not iterable");
    if (_0(v)) {
      for (l = 0, f = L0(e); f > l; l++)
        if (d = S(e[l]), d && fs(hs, d)) return d;
      return new St(!1);
    }
    u = A0(e, v);
  }
  for (m = i ? e.next : u.next; !(w = R0(m, u)).done; ) {
    try {
      d = S(w.value);
    } catch ($) {
      ds(u, "throw", $);
    }
    if (typeof d == "object" && d && fs(hs, d)) return d;
  }
  return new St(!1);
}, k0 = B, il = k0("iterator"), ol = !1;
try {
  var M0 = 0, ps = {
    next: function() {
      return { done: !!M0++ };
    },
    return: function() {
      ol = !0;
    }
  };
  ps[il] = function() {
    return this;
  }, Array.from(ps, function() {
    throw 2;
  });
} catch {
}
var sl = function(e, r) {
  try {
    if (!r && !ol) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[il] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, U0 = Zt, B0 = sl, D0 = qr.CONSTRUCTOR, ul = D0 || !B0(function(e) {
  U0.all(e).then(void 0, function() {
  });
}), F0 = D, G0 = F, H0 = Pe, z0 = pr, W0 = Li, K0 = tn, q0 = ul;
F0({ target: "Promise", stat: !0, forced: q0 }, {
  all: function(r) {
    var t = this, n = z0.f(t), a = n.resolve, i = n.reject, o = W0(function() {
      var s = H0(t.resolve), c = [], u = 0, v = 1;
      K0(r, function(l) {
        var f = u++, d = !1;
        v++, G0(s, t, l).then(function(m) {
          d || (d = !0, c[f] = m, --v || a(c));
        }, i);
      }), --v || a(c);
    });
    return o.error && i(o.value), n.promise;
  }
});
var V0 = D, Y0 = qr.CONSTRUCTOR, Fa = Zt, X0 = Ge, J0 = k, Q0 = oe, gs = Fa && Fa.prototype;
V0({ target: "Promise", proto: !0, forced: Y0, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (J0(Fa)) {
  var ys = X0("Promise").prototype.catch;
  gs.catch !== ys && Q0(gs, "catch", ys, { unsafe: !0 });
}
var Z0 = D, ey = F, ry = Pe, ty = pr, ny = Li, ay = tn, iy = ul;
Z0({ target: "Promise", stat: !0, forced: iy }, {
  race: function(r) {
    var t = this, n = ty.f(t), a = n.reject, i = ny(function() {
      var o = ry(t.resolve);
      ay(r, function(s) {
        ey(o, t, s).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var oy = D, sy = pr, uy = qr.CONSTRUCTOR;
oy({ target: "Promise", stat: !0, forced: uy }, {
  reject: function(r) {
    var t = sy.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var cy = q, ly = H, vy = pr, fy = function(e, r) {
  if (cy(e), ly(r) && r.constructor === e) return r;
  var t = vy.f(e), n = t.resolve;
  return n(r), t.promise;
}, dy = D, hy = Ge, py = qr.CONSTRUCTOR, gy = fy;
hy("Promise");
dy({ target: "Promise", stat: !0, forced: py }, {
  resolve: function(r) {
    return gy(this, r);
  }
});
var yy = Hr, my = String, _e = function(e) {
  if (yy(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return my(e);
}, cl = `	
\v\f\r                　\u2028\u2029\uFEFF`, by = L, wy = fr, $y = _e, Ga = cl, ms = by("".replace), Sy = RegExp("^[" + Ga + "]+"), Ey = RegExp("(^|[^" + Ga + "])[" + Ga + "]+$"), Un = function(e) {
  return function(r) {
    var t = $y(wy(r));
    return e & 1 && (t = ms(t, Sy, "")), e & 2 && (t = ms(t, Ey, "$1")), t;
  };
}, Oy = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: Un(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: Un(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: Un(3)
}, Iy = Wt.PROPER, Ty = P, bs = cl, ws = "​᠎", Py = function(e) {
  return Ty(function() {
    return !!bs[e]() || ws[e]() !== ws || Iy && bs[e].name !== e;
  });
}, Ry = D, Cy = Oy.trim, xy = Py;
Ry({ target: "String", proto: !0, forced: xy("trim") }, {
  trim: function() {
    return Cy(this);
  }
});
var ct = {
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
}, _y = q, ll = function() {
  var e = _y(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, Ui = P, Ly = j, Bi = Ly.RegExp, Di = Ui(function() {
  var e = Bi("a", "y");
  return e.lastIndex = 2, e.exec("abcd") !== null;
}), Ay = Di || Ui(function() {
  return !Bi("a", "y").sticky;
}), jy = Di || Ui(function() {
  var e = Bi("^r", "gy");
  return e.lastIndex = 2, e.exec("str") !== null;
}), Ny = {
  BROKEN_CARET: jy,
  MISSED_STICKY: Ay,
  UNSUPPORTED_Y: Di
}, vl = {}, ky = Rc, My = Oi, nn = Object.keys || function(r) {
  return ky(r, My);
}, Uy = G, By = pc, Dy = fe, Fy = q, Gy = we, Hy = nn;
vl.f = Uy && !By ? Object.defineProperties : function(r, t) {
  Fy(r);
  for (var n = Gy(t), a = Hy(t), i = a.length, o = 0, s; i > o; ) Dy.f(r, s = a[o++], n[s]);
  return r;
};
var zy = q, Wy = vl, $s = Oi, Ky = Kt, qy = Mc, Vy = Ft, Yy = $i, Ss = ">", Es = "<", Ha = "prototype", za = "script", fl = Yy("IE_PROTO"), Bn = function() {
}, dl = function(e) {
  return Es + za + Ss + e + Es + "/" + za + Ss;
}, Os = function(e) {
  e.write(dl("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, Xy = function() {
  var e = Vy("iframe"), r = "java" + za + ":", t;
  return e.style.display = "none", qy.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(dl("document.F=Object")), t.close(), t.F;
}, lt, Et = function() {
  try {
    lt = new ActiveXObject("htmlfile");
  } catch {
  }
  Et = typeof document < "u" ? document.domain && lt ? Os(lt) : Xy() : Os(lt);
  for (var e = $s.length; e--; ) delete Et[Ha][$s[e]];
  return Et();
};
Ky[fl] = !0;
var Yr = Object.create || function(r, t) {
  var n;
  return r !== null ? (Bn[Ha] = zy(r), n = new Bn(), Bn[Ha] = null, n[fl] = r) : n = Et(), t === void 0 ? n : Wy.f(n, t);
}, Jy = P, Qy = j, Zy = Qy.RegExp, em = Jy(function() {
  var e = Zy(".", "s");
  return !(e.dotAll && e.test(`
`) && e.flags === "s");
}), rm = P, tm = j, nm = tm.RegExp, am = rm(function() {
  var e = nm("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
}), ar = F, an = L, im = _e, om = ll, sm = Ny, um = gi, cm = Yr, lm = Re.get, vm = em, fm = am, dm = um("native-string-replace", String.prototype.replace), Lt = RegExp.prototype.exec, Wa = Lt, hm = an("".charAt), pm = an("".indexOf), gm = an("".replace), Dn = an("".slice), Ka = function() {
  var e = /a/, r = /b*/g;
  return ar(Lt, e, "a"), ar(Lt, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
}(), hl = sm.BROKEN_CARET, qa = /()??/.exec("")[1] !== void 0, ym = Ka || qa || hl || vm || fm;
ym && (Wa = function(r) {
  var t = this, n = lm(t), a = im(r), i = n.raw, o, s, c, u, v, l, f;
  if (i)
    return i.lastIndex = t.lastIndex, o = ar(Wa, i, a), t.lastIndex = i.lastIndex, o;
  var d = n.groups, m = hl && t.sticky, w = ar(om, t), g = t.source, S = 0, $ = a;
  if (m && (w = gm(w, "y", ""), pm(w, "g") === -1 && (w += "g"), $ = Dn(a, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && hm(a, t.lastIndex - 1) !== `
`) && (g = "(?: " + g + ")", $ = " " + $, S++), s = new RegExp("^(?:" + g + ")", w)), qa && (s = new RegExp("^" + g + "$(?!\\s)", w)), Ka && (c = t.lastIndex), u = ar(Lt, m ? s : t, $), m ? u ? (u.input = Dn(u.input, S), u[0] = Dn(u[0], S), u.index = t.lastIndex, t.lastIndex += u[0].length) : t.lastIndex = 0 : Ka && u && (t.lastIndex = t.global ? u.index + u[0].length : c), qa && u && u.length > 1 && ar(dm, u[0], s, function() {
    for (v = 1; v < arguments.length - 2; v++)
      arguments[v] === void 0 && (u[v] = void 0);
  }), u && d)
    for (u.groups = l = cm(null), v = 0; v < d.length; v++)
      f = d[v], l[f[0]] = u[f[1]];
  return u;
});
var Fi = Wa, mm = D, Is = Fi;
mm({ target: "RegExp", proto: !0, forced: /./.exec !== Is }, {
  exec: Is
});
function bm(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
var wm = P, pl = function(e, r) {
  var t = [][e];
  return !!t && wm(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, $m = D, Sm = L, Em = Vt, Om = we, Im = pl, Tm = Sm([].join), Pm = Em !== Object, Rm = Pm || !Im("join", ",");
$m({ target: "Array", proto: !0, forced: Rm }, {
  join: function(r) {
    return Tm(Om(this), r === void 0 ? "," : r);
  }
});
var Cm = Ce, Gi = Array.isArray || function(r) {
  return Cm(r) === "Array";
}, Ts = Gi, xm = Qt, _m = H, Lm = B, Am = Lm("species"), Ps = Array, jm = function(e) {
  var r;
  return Ts(e) && (r = e.constructor, xm(r) && (r === Ps || Ts(r.prototype)) ? r = void 0 : _m(r) && (r = r[Am], r === null && (r = void 0))), r === void 0 ? Ps : r;
}, Nm = jm, gl = function(e, r) {
  return new (Nm(e))(r === 0 ? 0 : r);
}, km = xe, Mm = L, Um = Vt, Bm = Te, Dm = hr, Fm = gl, Rs = Mm([].push), $e = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, s = e === 5 || i;
  return function(c, u, v, l) {
    for (var f = Bm(c), d = Um(f), m = Dm(d), w = km(u, v), g = 0, S = l || Fm, $ = r ? S(c, m) : t || o ? S(c, 0) : void 0, I, _; m > g; g++) if ((s || g in d) && (I = d[g], _ = w(I, g, f), e))
      if (r) $[g] = _;
      else if (_) switch (e) {
        case 3:
          return !0;
        case 5:
          return I;
        case 6:
          return g;
        case 2:
          Rs($, I);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          Rs($, I);
      }
    return i ? -1 : n || a ? a : $;
  };
}, yl = {
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
}, Gm = P, Hm = B, zm = Dt, Wm = Hm("species"), Hi = function(e) {
  return zm >= 51 || !Gm(function() {
    var r = [], t = r.constructor = {};
    return t[Wm] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, Km = D, qm = yl.map, Vm = Hi, Ym = Vm("map");
Km({ target: "Array", proto: !0, forced: !Ym }, {
  map: function(r) {
    return qm(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Xm = D, Jm = Te, ml = nn, Qm = P, Zm = Qm(function() {
  ml(1);
});
Xm({ target: "Object", stat: !0, forced: Zm }, {
  keys: function(r) {
    return ml(Jm(r));
  }
});
function e1(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function Cs(e) {
  var r = Mv(e).map(function(t, n) {
    return e1(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function r1(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(Cs(a), r[a]), M(M({}, n), {}, A({}, Cs(a), r[a])));
  }, {}) : {};
}
function bl(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return r1(t, r);
}
function t1(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Fn(e, r) {
  return r.querySelector("#".concat(e));
}
function n1(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Fn(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Fn(r, t);
      i && t.removeChild(i);
    };
  var a = t1(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Fn(r, t);
    i && t.removeChild(i);
  };
}
function a1(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var i1 = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Br(this, e), A(this, "_moving", !1), A(this, "_moved", !1), A(this, "_initialXY", [0, 0]), A(this, "_startXY", [0, 0]), A(this, "_boundaryValue", 5), A(this, "_rb", null), A(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return Dr(e, [{
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
      var i = this.getEventInfo(t), o = i.clientXY, s = ac(o, 2), c = s[0], u = s[1], v = c - this._startXY[0], l = u - this._startXY[1];
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
}(), wl = {
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
}, o1 = Ft, Gn = o1("span").classList, xs = Gn && Gn.constructor && Gn.constructor.prototype, $l = xs === Object.prototype ? void 0 : xs, s1 = yl.forEach, u1 = pl, c1 = u1("forEach"), l1 = c1 ? [].forEach : function(r) {
  return s1(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, _s = j, Ls = wl, v1 = $l, Hn = l1, f1 = dr, Sl = function(e) {
  if (e && e.forEach !== Hn) try {
    f1(e, "forEach", Hn);
  } catch {
    e.forEach = Hn;
  }
};
for (var zn in Ls)
  Ls[zn] && Sl(_s[zn] && _s[zn].prototype);
Sl(v1);
function d1(e, r) {
  var t = M({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
function h1(e) {
  return new Promise(function(r) {
    e <= 0 ? r(!0) : setTimeout(function() {
      return r(!0);
    }, e);
  });
}
function p1(e) {
  return Math.min(2e3 * e, 3e4);
}
function g1(e) {
  return Va.apply(this, arguments);
}
function Va() {
  return Va = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a, i, o, s, c, u, v = arguments;
    return C().wrap(function(f) {
      for (; ; ) switch (f.prev = f.next) {
        case 0:
          if (t = v.length > 1 && v[1] !== void 0 ? v[1] : {}, n = t.defaultRetry, a = n === void 0 ? 5 : n, i = t.retryDelay, o = i === void 0 ? p1 : i, s = t.onError, !(a <= 0)) {
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
                    return c += 1, g.next = 14, h1(typeof o == "function" ? o(c) : o);
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
  })), Va.apply(this, arguments);
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
}, zi = { exports: {} }, sr = typeof Reflect == "object" ? Reflect : null, As = sr && typeof sr.apply == "function" ? sr.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, Ot;
sr && typeof sr.ownKeys == "function" ? Ot = sr.ownKeys : Object.getOwnPropertySymbols ? Ot = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : Ot = function(r) {
  return Object.getOwnPropertyNames(r);
};
function y1(e) {
  console && console.warn && console.warn(e);
}
var El = Number.isNaN || function(r) {
  return r !== r;
};
function x() {
  x.init.call(this);
}
zi.exports = x;
zi.exports.once = $1;
x.EventEmitter = x;
x.prototype._events = void 0;
x.prototype._eventsCount = 0;
x.prototype._maxListeners = void 0;
var js = 10;
function on(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(x, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return js;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || El(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    js = e;
  }
});
x.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
x.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || El(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function Ol(e) {
  return e._maxListeners === void 0 ? x.defaultMaxListeners : e._maxListeners;
}
x.prototype.getMaxListeners = function() {
  return Ol(this);
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
    As(c, this, t);
  else
    for (var u = c.length, v = Cl(c, u), n = 0; n < u; ++n)
      As(v[n], this, t);
  return !0;
};
function Il(e, r, t, n) {
  var a, i, o;
  if (on(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = Ol(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var s = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = r, s.count = o.length, y1(s);
  }
  return e;
}
x.prototype.addListener = function(r, t) {
  return Il(this, r, t, !1);
};
x.prototype.on = x.prototype.addListener;
x.prototype.prependListener = function(r, t) {
  return Il(this, r, t, !0);
};
function m1() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function Tl(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = m1.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
x.prototype.once = function(r, t) {
  return on(t), this.on(r, Tl(this, r, t)), this;
};
x.prototype.prependOnceListener = function(r, t) {
  return on(t), this.prependListener(r, Tl(this, r, t)), this;
};
x.prototype.removeListener = function(r, t) {
  var n, a, i, o, s;
  if (on(t), a = this._events, a === void 0)
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
    i === 0 ? n.shift() : b1(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, s || t);
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
function Pl(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? w1(a) : Cl(a, a.length);
}
x.prototype.listeners = function(r) {
  return Pl(this, r, !0);
};
x.prototype.rawListeners = function(r) {
  return Pl(this, r, !1);
};
x.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Rl.call(e, r);
};
x.prototype.listenerCount = Rl;
function Rl(e) {
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
function Cl(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function b1(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function w1(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function $1(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    xl(e, r, i, { once: !0 }), r !== "error" && S1(e, a, { once: !0 });
  });
}
function S1(e, r, t) {
  typeof e.on == "function" && xl(e, "error", r, t);
}
function xl(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var E1 = zi.exports;
const O1 = /* @__PURE__ */ Bv(E1);
var At = function() {
  return At = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, At.apply(this, arguments);
};
function Ns(e, r, t, n) {
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
function ks(e, r) {
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
var I1 = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new O1(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
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
      return Ns(this, void 0, void 0, function() {
        var t, n;
        return ks(this, function(a) {
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
        return Ns(r, void 0, void 0, function() {
          var n, a, i, o, s;
          return ks(this, function(c) {
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
), T1 = TypeError, P1 = 9007199254740991, R1 = function(e) {
  if (e > P1) throw T1("Maximum allowed index exceeded");
  return e;
}, C1 = G, x1 = fe, _1 = Gr, Wi = function(e, r, t) {
  C1 ? x1.f(e, r, _1(0, t)) : e[r] = t;
}, L1 = D, A1 = P, j1 = Gi, N1 = H, k1 = Te, M1 = hr, Ms = R1, Us = Wi, U1 = gl, B1 = Hi, D1 = B, F1 = Dt, _l = D1("isConcatSpreadable"), G1 = F1 >= 51 || !A1(function() {
  var e = [];
  return e[_l] = !1, e.concat()[0] !== e;
}), H1 = function(e) {
  if (!N1(e)) return !1;
  var r = e[_l];
  return r !== void 0 ? !!r : j1(e);
}, z1 = !G1 || !B1("concat");
L1({ target: "Array", proto: !0, arity: 1, forced: z1 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = k1(this), n = U1(t, 0), a = 0, i, o, s, c, u;
    for (i = -1, s = arguments.length; i < s; i++)
      if (u = i === -1 ? t : arguments[i], H1(u))
        for (c = M1(u), Ms(a + c), o = 0; o < c; o++, a++) o in u && Us(n, a, u[o]);
      else
        Ms(a + 1), Us(n, a++, u);
    return n.length = a, n;
  }
});
var W1 = D, Bs = Gi, K1 = Qt, q1 = H, Ds = Tc, V1 = hr, Y1 = we, X1 = Wi, J1 = B, Q1 = Hi, Z1 = Kr, eb = Q1("slice"), rb = J1("species"), Wn = Array, tb = Math.max;
W1({ target: "Array", proto: !0, forced: !eb }, {
  slice: function(r, t) {
    var n = Y1(this), a = V1(n), i = Ds(r, a), o = Ds(t === void 0 ? a : t, a), s, c, u;
    if (Bs(n) && (s = n.constructor, K1(s) && (s === Wn || Bs(s.prototype)) ? s = void 0 : q1(s) && (s = s[rb], s === null && (s = void 0)), s === Wn || s === void 0))
      return Z1(n, i, o);
    for (c = new (s === void 0 ? Wn : s)(tb(o - i, 0)), u = 0; i < o; i++, u++) i in n && X1(c, u, n[i]);
    return c.length = u, c;
  }
});
var nb = P, ab = !nb(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), ib = X, ob = k, sb = Te, ub = $i, cb = ab, Fs = ub("IE_PROTO"), Ya = Object, lb = Ya.prototype, Ki = cb ? Ya.getPrototypeOf : function(e) {
  var r = sb(e);
  if (ib(r, Fs)) return r[Fs];
  var t = r.constructor;
  return ob(t) && r instanceof t ? t.prototype : r instanceof Ya ? lb : null;
}, Ll = G, vb = P, Al = L, fb = Ki, db = nn, hb = we, pb = qt.f, jl = Al(pb), gb = Al([].push), yb = Ll && vb(function() {
  var e = /* @__PURE__ */ Object.create(null);
  return e[2] = 2, !jl(e, 2);
}), Gs = function(e) {
  return function(r) {
    for (var t = hb(r), n = db(t), a = yb && fb(t) === null, i = n.length, o = 0, s = [], c; i > o; )
      c = n[o++], (!Ll || (a ? c in t : jl(t, c))) && gb(s, e ? [c, t[c]] : t[c]);
    return s;
  };
}, mb = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: Gs(!0),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: Gs(!1)
}, bb = D, wb = mb.entries;
bb({ target: "Object", stat: !0 }, {
  entries: function(r) {
    return wb(r);
  }
});
var Hs = F, zs = oe, $b = Fi, Ws = P, Nl = B, Sb = dr, Eb = Nl("species"), Kn = RegExp.prototype, Ob = function(e, r, t, n) {
  var a = Nl(e), i = !Ws(function() {
    var u = {};
    return u[a] = function() {
      return 7;
    }, ""[e](u) !== 7;
  }), o = i && !Ws(function() {
    var u = !1, v = /a/;
    return e === "split" && (v = {}, v.constructor = {}, v.constructor[Eb] = function() {
      return v;
    }, v.flags = "", v[a] = /./[a]), v.exec = function() {
      return u = !0, null;
    }, v[a](""), !u;
  });
  if (!i || !o || t) {
    var s = /./[a], c = r(a, ""[e], function(u, v, l, f, d) {
      var m = v.exec;
      return m === $b || m === Kn.exec ? i && !d ? { done: !0, value: Hs(s, v, l, f) } : { done: !0, value: Hs(u, l, v, f) } : { done: !1 };
    });
    zs(String.prototype, e, c[0]), zs(Kn, a, c[1]);
  }
  n && Sb(Kn[a], "sham", !0);
}, qi = L, Ib = Xt, Tb = _e, Pb = fr, Rb = qi("".charAt), Ks = qi("".charCodeAt), Cb = qi("".slice), qs = function(e) {
  return function(r, t) {
    var n = Tb(Pb(r)), a = Ib(t), i = n.length, o, s;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = Ks(n, a), o < 55296 || o > 56319 || a + 1 === i || (s = Ks(n, a + 1)) < 56320 || s > 57343 ? e ? Rb(n, a) : o : e ? Cb(n, a, a + 2) : (o - 55296 << 10) + (s - 56320) + 65536);
  };
}, Vi = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: qs(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: qs(!0)
}, xb = Vi.charAt, _b = function(e, r, t) {
  return r + (t ? xb(e, r).length : 1);
}, Yi = L, Lb = Te, Ab = Math.floor, qn = Yi("".charAt), jb = Yi("".replace), Vn = Yi("".slice), Nb = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, kb = /\$([$&'`]|\d{1,2})/g, Mb = function(e, r, t, n, a, i) {
  var o = t + e.length, s = n.length, c = kb;
  return a !== void 0 && (a = Lb(a), c = Nb), jb(i, c, function(u, v) {
    var l;
    switch (qn(v, 0)) {
      case "$":
        return "$";
      case "&":
        return e;
      case "`":
        return Vn(r, 0, t);
      case "'":
        return Vn(r, o);
      case "<":
        l = a[Vn(v, 1, -1)];
        break;
      default:
        var f = +v;
        if (f === 0) return u;
        if (f > s) {
          var d = Ab(f / 10);
          return d === 0 ? u : d <= s ? n[d - 1] === void 0 ? qn(v, 1) : n[d - 1] + qn(v, 1) : u;
        }
        l = n[f - 1];
    }
    return l === void 0 ? "" : l;
  });
}, Vs = F, Ub = q, Bb = k, Db = Ce, Fb = Fi, Gb = TypeError, Hb = function(e, r) {
  var t = e.exec;
  if (Bb(t)) {
    var n = Vs(t, e, r);
    return n !== null && Ub(n), n;
  }
  if (Db(e) === "RegExp") return Vs(Fb, e, r);
  throw new Gb("RegExp#exec called on incompatible receiver");
}, zb = kc, Ys = F, sn = L, Wb = Ob, Kb = P, qb = q, Vb = k, Yb = Fe, Xb = Xt, Jb = Pc, Ye = _e, Qb = fr, Zb = _b, ew = zt, rw = Mb, tw = Hb, nw = B, Xa = nw("replace"), aw = Math.max, iw = Math.min, ow = sn([].concat), Yn = sn([].push), Xs = sn("".indexOf), Js = sn("".slice), sw = function(e) {
  return e === void 0 ? e : String(e);
}, uw = function() {
  return "a".replace(/./, "$0") === "$0";
}(), Qs = function() {
  return /./[Xa] ? /./[Xa]("a", "$0") === "" : !1;
}(), cw = !Kb(function() {
  var e = /./;
  return e.exec = function() {
    var r = [];
    return r.groups = { a: "7" }, r;
  }, "".replace(e, "$<a>") !== "7";
});
Wb("replace", function(e, r, t) {
  var n = Qs ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function(i, o) {
      var s = Qb(this), c = Yb(i) ? void 0 : ew(i, Xa);
      return c ? Ys(c, i, s, o) : Ys(r, Ye(s), i, o);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(a, i) {
      var o = qb(this), s = Ye(a);
      if (typeof i == "string" && Xs(i, n) === -1 && Xs(i, "$<") === -1) {
        var c = t(r, o, s, i);
        if (c.done) return c.value;
      }
      var u = Vb(i);
      u || (i = Ye(i));
      var v = o.global, l;
      v && (l = o.unicode, o.lastIndex = 0);
      for (var f = [], d; d = tw(o, s), !(d === null || (Yn(f, d), !v)); ) {
        var m = Ye(d[0]);
        m === "" && (o.lastIndex = Zb(s, Jb(o.lastIndex), l));
      }
      for (var w = "", g = 0, S = 0; S < f.length; S++) {
        d = f[S];
        for (var $ = Ye(d[0]), I = aw(iw(Xb(d.index), s.length), 0), _ = [], ue, U = 1; U < d.length; U++) Yn(_, sw(d[U]));
        var O = d.groups;
        if (u) {
          var N = ow([$], _, I, s);
          O !== void 0 && Yn(N, O), ue = Ye(zb(i, void 0, N));
        } else
          ue = rw($, s, I, _, O, i);
        I >= g && (w += Js(s, g, I) + ue, g = I + $.length);
      }
      return w + Js(s, g);
    }
  ];
}, !cw || !uw || Qs);
var lw = /* @__PURE__ */ function() {
  function e() {
    Br(this, e), A(this, "appConfig", {}), A(this, "touchpoint", null), A(this, "appProps", null), A(this, "context", {}), A(this, "participantName", "");
  }
  return Dr(e, [{
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
const Ee = new lw();
var vw = A(A(A(A({}, "td-us-1", "https://api.talkdeskstg.com"), "td-eu-1", "undefined"), "td-ca-1", "undefined"), "td-usfed-1", "undefined"), fw = A(A(A(A({}, "td-us-1", ct.tdGatewayUs), "td-eu-1", ct.tdGatewayEu), "td-ca-1", ct.tdGatewayCa), "td-usfed-1", ct.tdGatewayUsFed);
function dw(e, r) {
  return r ? "//".concat(r).concat(fw[e]) : vw[e];
}
var kl = /* @__PURE__ */ function(e) {
  return e.TEXT = "TEXT", e.JSON = "JSON", e.BLOB = "BLOB", e.ARRAY_BUFFER = "ARRAY_BUFFER", e;
}(kl || {}), Ja = /* @__PURE__ */ function(e) {
  return e.GET = "GET", e.POST = "POST", e;
}(Ja || {}), hw = {
  "Content-Type": "application/json"
}, pw = /* @__PURE__ */ function(e) {
  function r(t, n) {
    var a;
    return Br(this, r), a = Tv(this, r, [t]), A(a, "code", void 0), A(a, "response", void 0), a.code = n.code, a.response = n.response, a;
  }
  return Rv(r, e), Dr(r);
}(/* @__PURE__ */ Pa(Error));
function Zs(e) {
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
function gw(e) {
  return Object.entries(e).reduce(function(r, t) {
    var n = ac(t, 2), a = n[0], i = n[1];
    return r.push("".concat(Zs(a), "=").concat(Zs(i))), r;
  }, []).join("&");
}
function yw(e) {
  return e >= 200 && e < 300;
}
function mw(e) {
  var r = Ee.getAllConfig(), t = r.appProps, n = dw(t == null ? void 0 : t.region, t == null ? void 0 : t.proxyHost);
  return e ? n + e : n;
}
function bw(e) {
  var r = e.url, t = e.params, n = mw(r);
  if (t) {
    var a = gw(t), i = n.indexOf("#");
    i !== -1 && (n = n.slice(0, i)), n += (n.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return n;
}
function ww(e) {
  var r = e.data;
  return r ? JSON.stringify(r) : void 0;
}
function $w(e) {
  var r = e.token, t = M({}, hw);
  return r && (t.Authorization = "Bearer ".concat(r)), t;
}
function Sw() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = e.responseType || "JSON", t = e.method || "GET", n = bw(e), a = ww(e), i = $w(e);
  return {
    url: n,
    method: t,
    body: a,
    headers: i,
    responseType: r
  };
}
function Ew(e) {
  return Qa.apply(this, arguments);
}
function Qa() {
  return Qa = Y(/* @__PURE__ */ C().mark(function e(r) {
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
          if (!(r.ok && yw(r.status))) {
            o.next = 23;
            break;
          }
          return o.abrupt("return", n);
        case 23:
          return o.abrupt("return", Promise.reject(new pw("Failed to http status error ".concat(r.status), {
            code: r.status,
            response: r
          })));
        case 24:
        case "end":
          return o.stop();
      }
    }, e);
  })), Qa.apply(this, arguments);
}
var Ml = /* @__PURE__ */ function() {
  function e() {
    Br(this, e);
  }
  return Dr(e, [{
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
                method: Ja.GET
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
                method: Ja.POST,
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
              return i = Sw(a), o = i.url, s = i.method, c = i.body, u = i.headers, v = i.responseType, d.next = 3, fetch(o, {
                method: s,
                body: c,
                headers: u
              });
            case 3:
              return l = d.sent, d.abrupt("return", Ew(l, v));
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
A(Ml, "http", void 0);
var un = Ml.create();
function Ow(e) {
  return Za.apply(this, arguments);
}
function Za() {
  return Za = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a;
    return C().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return t = "/pas/livechat-auth", o.next = 3, un.post(t, {
            app_id: r
          });
        case 3:
          return n = o.sent, a = n.td_access_token, o.abrupt("return", a);
        case 6:
        case "end":
          return o.stop();
      }
    }, e);
  })), Za.apply(this, arguments);
}
function Iw(e) {
  return ei.apply(this, arguments);
}
function ei() {
  return ei = Y(/* @__PURE__ */ C().mark(function e(r) {
    var t, n, a, i, o;
    return C().wrap(function(c) {
      for (; ; ) switch (c.prev = c.next) {
        case 0:
          return t = "/2019-11/pas/livechats", c.next = 3, un.post(t, M(M({}, r), {}, {
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
  })), ei.apply(this, arguments);
}
function Tw(e) {
  return ri.apply(this, arguments);
}
function ri() {
  return ri = Y(/* @__PURE__ */ C().mark(function e(r) {
    return C().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.prev = 0, n.next = 3, g1(/* @__PURE__ */ Y(/* @__PURE__ */ C().mark(function a() {
            var i;
            return C().wrap(function(s) {
              for (; ; ) switch (s.prev = s.next) {
                case 0:
                  return s.next = 2, un.get("/2019-11/pas/livechats", {
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
  })), ri.apply(this, arguments);
}
var Pw = B, Rw = Yr, Cw = fe.f, ti = Pw("unscopables"), ni = Array.prototype;
ni[ti] === void 0 && Cw(ni, ti, {
  configurable: !0,
  value: Rw(null)
});
var xw = function(e) {
  ni[ti][e] = !0;
}, _w = P, Lw = k, Aw = H, eu = Ki, jw = oe, Nw = B, ai = Nw("iterator"), Ul = !1, De, Xn, Jn;
[].keys && (Jn = [].keys(), "next" in Jn ? (Xn = eu(eu(Jn)), Xn !== Object.prototype && (De = Xn)) : Ul = !0);
var kw = !Aw(De) || _w(function() {
  var e = {};
  return De[ai].call(e) !== e;
});
kw && (De = {});
Lw(De[ai]) || jw(De, ai, function() {
  return this;
});
var Bl = {
  IteratorPrototype: De,
  BUGGY_SAFARI_ITERATORS: Ul
}, Mw = Bl.IteratorPrototype, Uw = Yr, Bw = Gr, Dw = He, Fw = Vr, Gw = function() {
  return this;
}, Dl = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = Uw(Mw, { next: Bw(+!n, t) }), Dw(e, a, !1), Fw[a] = Gw, e;
}, Hw = D, zw = F, Fl = Wt, Ww = k, Kw = Dl, ru = Ki, tu = Ri, qw = He, Vw = dr, Qn = oe, Yw = B, Xw = Vr, Gl = Bl, Jw = Fl.PROPER, Qw = Fl.CONFIGURABLE, nu = Gl.IteratorPrototype, vt = Gl.BUGGY_SAFARI_ITERATORS, $r = Yw("iterator"), au = "keys", Sr = "values", iu = "entries", Zw = function() {
  return this;
}, Xi = function(e, r, t, n, a, i, o) {
  Kw(t, r, n);
  var s = function(S) {
    if (S === a && f) return f;
    if (!vt && S && S in v) return v[S];
    switch (S) {
      case au:
        return function() {
          return new t(this, S);
        };
      case Sr:
        return function() {
          return new t(this, S);
        };
      case iu:
        return function() {
          return new t(this, S);
        };
    }
    return function() {
      return new t(this);
    };
  }, c = r + " Iterator", u = !1, v = e.prototype, l = v[$r] || v["@@iterator"] || a && v[a], f = !vt && l || s(a), d = r === "Array" && v.entries || l, m, w, g;
  if (d && (m = ru(d.call(new e())), m !== Object.prototype && m.next && (ru(m) !== nu && (tu ? tu(m, nu) : Ww(m[$r]) || Qn(m, $r, Zw)), qw(m, c, !0))), Jw && a === Sr && l && l.name !== Sr && (Qw ? Vw(v, "name", Sr) : (u = !0, f = function() {
    return zw(l, this);
  })), a)
    if (w = {
      values: s(Sr),
      keys: i ? f : s(au),
      entries: s(iu)
    }, o) for (g in w)
      (vt || u || !(g in v)) && Qn(v, g, w[g]);
    else Hw({ target: r, proto: !0, forced: vt || u }, w);
  return v[$r] !== f && Qn(v, $r, f, { name: a }), Xw[r] = f, w;
}, cn = function(e, r) {
  return { value: e, done: r };
}, e$ = we, Ji = xw, ou = Vr, Hl = Re, r$ = fe.f, t$ = Xi, ft = cn, n$ = G, zl = "Array Iterator", a$ = Hl.set, i$ = Hl.getterFor(zl), o$ = t$(Array, "Array", function(e, r) {
  a$(this, {
    type: zl,
    target: e$(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = i$(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, ft(void 0, !0);
  switch (e.kind) {
    case "keys":
      return ft(t, !1);
    case "values":
      return ft(r[t], !1);
  }
  return ft([t, r[t]], !1);
}, "values"), su = ou.Arguments = ou.Array;
Ji("keys");
Ji("values");
Ji("entries");
if (n$ && su.name !== "values") try {
  r$(su, "name", { value: "values" });
} catch {
}
var s$ = Vi.charAt, u$ = _e, Wl = Re, c$ = Xi, uu = cn, Kl = "String Iterator", l$ = Wl.set, v$ = Wl.getterFor(Kl);
c$(String, "String", function(e) {
  l$(this, {
    type: Kl,
    string: u$(e),
    index: 0
  });
}, function() {
  var r = v$(this), t = r.string, n = r.index, a;
  return n >= t.length ? uu(void 0, !0) : (a = s$(t, n), r.index += a.length, uu(a, !1));
});
var cu = j, ql = wl, f$ = $l, Tr = o$, lu = dr, d$ = He, h$ = B, Zn = h$("iterator"), ea = Tr.values, Vl = function(e, r) {
  if (e) {
    if (e[Zn] !== ea) try {
      lu(e, Zn, ea);
    } catch {
      e[Zn] = ea;
    }
    if (d$(e, r, !0), ql[r]) {
      for (var t in Tr)
        if (e[t] !== Tr[t]) try {
          lu(e, t, Tr[t]);
        } catch {
          e[t] = Tr[t];
        }
    }
  }
};
for (var ra in ql)
  Vl(cu[ra] && cu[ra].prototype, ra);
Vl(f$, "DOMTokenList");
var p$ = P, g$ = B, y$ = G, vu = Dv, m$ = g$("iterator"), Yl = !p$(function() {
  var e = new URL("b?a=1&b=2&c=3", "https://a"), r = e.searchParams, t = new URLSearchParams("a=1&a=2&b=3"), n = "";
  return e.pathname = "c%20d", r.forEach(function(a, i) {
    r.delete("b"), n += i + a;
  }), t.delete("a", 2), t.delete("b", void 0), vu && (!e.toJSON || !t.has("a", 1) || t.has("a", 2) || !t.has("a", void 0) || t.has("b")) || !r.size && (vu || !y$) || !r.sort || e.href !== "https://a/c%20d?a=1&c=3" || r.get("c") !== "3" || String(new URLSearchParams("?a=1")) !== "a=1" || !r[m$] || new URL("https://a@b").username !== "a" || new URLSearchParams(new URLSearchParams("a=b")).get("a") !== "b" || new URL("https://тест").host !== "xn--e1aybc" || new URL("https://a#б").hash !== "#%D0%B1" || n !== "a1c3" || new URL("https://x", void 0).host !== "x";
}), fu = G, b$ = L, w$ = F, $$ = P, ta = nn, S$ = Ii, E$ = qt, O$ = Te, I$ = Vt, Xe = Object.assign, du = Object.defineProperty, T$ = b$([].concat), P$ = !Xe || $$(function() {
  if (fu && Xe({ b: 1 }, Xe(du({}, "a", {
    enumerable: !0,
    get: function() {
      du(this, "b", {
        value: 3,
        enumerable: !1
      });
    }
  }), { b: 2 })).b !== 1) return !0;
  var e = {}, r = {}, t = Symbol("assign detection"), n = "abcdefghijklmnopqrst";
  return e[t] = 7, n.split("").forEach(function(a) {
    r[a] = a;
  }), Xe({}, e)[t] !== 7 || ta(Xe({}, r)).join("") !== n;
}) ? function(r, t) {
  for (var n = O$(r), a = arguments.length, i = 1, o = S$.f, s = E$.f; a > i; )
    for (var c = I$(arguments[i++]), u = o ? T$(ta(c), o(c)) : ta(c), v = u.length, l = 0, f; v > l; )
      f = u[l++], (!fu || w$(s, c, f)) && (n[f] = c[f]);
  return n;
} : Xe, R$ = q, C$ = al, x$ = function(e, r, t, n) {
  try {
    return n ? r(R$(t)[0], t[1]) : r(t);
  } catch (a) {
    C$(e, "throw", a);
  }
}, _$ = xe, L$ = F, A$ = Te, j$ = x$, N$ = nl, k$ = Qt, M$ = hr, hu = Wi, U$ = Mi, B$ = rn, pu = Array, D$ = function(r) {
  var t = A$(r), n = k$(this), a = arguments.length, i = a > 1 ? arguments[1] : void 0, o = i !== void 0;
  o && (i = _$(i, a > 2 ? arguments[2] : void 0));
  var s = B$(t), c = 0, u, v, l, f, d, m;
  if (s && !(this === pu && N$(s)))
    for (v = n ? new this() : [], f = U$(t, s), d = f.next; !(l = L$(d, f)).done; c++)
      m = o ? j$(f, i, [l.value, c], !0) : l.value, hu(v, c, m);
  else
    for (u = M$(t), v = n ? new this(u) : pu(u); u > c; c++)
      m = o ? i(t[c], c) : t[c], hu(v, c, m);
  return v.length = c, v;
}, ze = L, na = 2147483647, _r = 36, Xl = 1, ii = 26, F$ = 38, G$ = 700, H$ = 72, z$ = 128, W$ = "-", K$ = /[^\0-\u007E]/, Jl = /[.\u3002\uFF0E\uFF61]/g, gu = "Overflow: input needs wider integers to process", aa = _r - Xl, yu = RangeError, q$ = ze(Jl.exec), ir = Math.floor, ia = String.fromCharCode, mu = ze("".charCodeAt), Ql = ze([].join), Oe = ze([].push), V$ = ze("".replace), Y$ = ze("".split), X$ = ze("".toLowerCase), J$ = function(e) {
  for (var r = [], t = 0, n = e.length; t < n; ) {
    var a = mu(e, t++);
    if (a >= 55296 && a <= 56319 && t < n) {
      var i = mu(e, t++);
      (i & 64512) === 56320 ? Oe(r, ((a & 1023) << 10) + (i & 1023) + 65536) : (Oe(r, a), t--);
    } else
      Oe(r, a);
  }
  return r;
}, bu = function(e) {
  return e + 22 + 75 * (e < 26);
}, Q$ = function(e, r, t) {
  var n = 0;
  for (e = t ? ir(e / G$) : e >> 1, e += ir(e / r); e > aa * ii >> 1; )
    e = ir(e / aa), n += _r;
  return ir(n + (aa + 1) * e / (e + F$));
}, Z$ = function(e) {
  var r = [];
  e = J$(e);
  var t = e.length, n = z$, a = 0, i = H$, o, s;
  for (o = 0; o < e.length; o++)
    s = e[o], s < 128 && Oe(r, ia(s));
  var c = r.length, u = c;
  for (c && Oe(r, W$); u < t; ) {
    var v = na;
    for (o = 0; o < e.length; o++)
      s = e[o], s >= n && s < v && (v = s);
    var l = u + 1;
    if (v - n > ir((na - a) / l))
      throw new yu(gu);
    for (a += (v - n) * l, n = v, o = 0; o < e.length; o++) {
      if (s = e[o], s < n && ++a > na)
        throw new yu(gu);
      if (s === n) {
        for (var f = a, d = _r; ; ) {
          var m = d <= i ? Xl : d >= i + ii ? ii : d - i;
          if (f < m) break;
          var w = f - m, g = _r - m;
          Oe(r, ia(bu(m + w % g))), f = ir(w / g), d += _r;
        }
        Oe(r, ia(bu(f))), i = Q$(a, l, u === c), a = 0, u++;
      }
    }
    a++, n++;
  }
  return Ql(r, "");
}, eS = function(e) {
  var r = [], t = Y$(V$(X$(e), Jl, "."), "."), n, a;
  for (n = 0; n < t.length; n++)
    a = t[n], Oe(r, q$(K$, a) ? "xn--" + Z$(a) : a);
  return Ql(r, ".");
}, rS = oe, Zl = function(e, r, t) {
  for (var n in r) rS(e, n, r[n], t);
  return e;
}, wu = Kr, tS = Math.floor, oi = function(e, r) {
  var t = e.length;
  if (t < 8)
    for (var n = 1, a, i; n < t; ) {
      for (i = n, a = e[n]; i && r(e[i - 1], a) > 0; )
        e[i] = e[--i];
      i !== n++ && (e[i] = a);
    }
  else
    for (var o = tS(t / 2), s = oi(wu(e, 0, o), r), c = oi(wu(e, o), r), u = s.length, v = c.length, l = 0, f = 0; l < u || f < v; )
      e[l + f] = l < u && f < v ? r(s[l], c[f]) <= 0 ? s[l++] : c[f++] : l < u ? s[l++] : c[f++];
  return e;
}, nS = oi, si = D, ln = j, Qi = Fc, dt = F, pe = L, Lr = G, ev = Yl, rv = oe, aS = Jt, iS = Zl, oS = He, sS = Dl, Zi = Re, tv = Wr, oa = k, uS = X, cS = xe, lS = Hr, vS = q, nv = H, K = _e, fS = Yr, $u = Gr, Su = Mi, dS = rn, ht = cn, Je = xi, hS = B, pS = nS, gS = hS("iterator"), gr = "URLSearchParams", av = gr + "Iterator", iv = Zi.set, ae = Zi.getterFor(gr), yS = Zi.getterFor(av), Eu = Qi("fetch"), jt = Qi("Request"), Ar = Qi("Headers"), sa = jt && jt.prototype, Ou = Ar && Ar.prototype, mS = ln.RegExp, bS = ln.TypeError, ov = ln.decodeURIComponent, wS = ln.encodeURIComponent, $S = pe("".charAt), Iu = pe([].join), Be = pe([].push), ui = pe("".replace), SS = pe([].shift), Tu = pe([].splice), Pu = pe("".split), ES = pe("".slice), OS = /\+/g, Ru = Array(4), IS = function(e) {
  return Ru[e - 1] || (Ru[e - 1] = mS("((?:%[\\da-f]{2}){" + e + "})", "gi"));
}, TS = function(e) {
  try {
    return ov(e);
  } catch {
    return e;
  }
}, Cu = function(e) {
  var r = ui(e, OS, " "), t = 4;
  try {
    return ov(r);
  } catch {
    for (; t; )
      r = ui(r, IS(t--), TS);
    return r;
  }
}, PS = /[!'()~]|%20/g, RS = {
  "!": "%21",
  "'": "%27",
  "(": "%28",
  ")": "%29",
  "~": "%7E",
  "%20": "+"
}, CS = function(e) {
  return RS[e];
}, xu = function(e) {
  return ui(wS(e), PS, CS);
}, ua = sS(function(r, t) {
  iv(this, {
    type: av,
    target: ae(r).entries,
    index: 0,
    kind: t
  });
}, gr, function() {
  var r = yS(this), t = r.target, n = r.index++;
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
}, !0), sv = function(e) {
  this.entries = [], this.url = null, e !== void 0 && (nv(e) ? this.parseObject(e) : this.parseQuery(typeof e == "string" ? $S(e, 0) === "?" ? ES(e, 1) : e : K(e)));
};
sv.prototype = {
  type: gr,
  bindURL: function(e) {
    this.url = e, this.update();
  },
  parseObject: function(e) {
    var r = this.entries, t = dS(e), n, a, i, o, s, c, u;
    if (t)
      for (n = Su(e, t), a = n.next; !(i = dt(a, n)).done; ) {
        if (o = Su(vS(i.value)), s = o.next, (c = dt(s, o)).done || (u = dt(s, o)).done || !dt(s, o).done) throw new bS("Expected sequence with length 2");
        Be(r, { key: K(c.value), value: K(u.value) });
      }
    else for (var v in e) uS(e, v) && Be(r, { key: v, value: K(e[v]) });
  },
  parseQuery: function(e) {
    if (e)
      for (var r = this.entries, t = Pu(e, "&"), n = 0, a, i; n < t.length; )
        a = t[n++], a.length && (i = Pu(a, "="), Be(r, {
          key: Cu(SS(i)),
          value: Cu(Iu(i, "="))
        }));
  },
  serialize: function() {
    for (var e = this.entries, r = [], t = 0, n; t < e.length; )
      n = e[t++], Be(r, xu(n.key) + "=" + xu(n.value));
    return Iu(r, "&");
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query);
  },
  updateURL: function() {
    this.url && this.url.update();
  }
};
var vn = function() {
  tv(this, lr);
  var r = arguments.length > 0 ? arguments[0] : void 0, t = iv(this, new sv(r));
  Lr || (this.size = t.entries.length);
}, lr = vn.prototype;
iS(lr, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function(r, t) {
    var n = ae(this);
    Je(arguments.length, 2), Be(n.entries, { key: K(r), value: K(t) }), Lr || this.length++, n.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  delete: function(e) {
    for (var r = ae(this), t = Je(arguments.length, 1), n = r.entries, a = K(e), i = t < 2 ? void 0 : arguments[1], o = i === void 0 ? i : K(i), s = 0; s < n.length; ) {
      var c = n[s];
      if (c.key === a && (o === void 0 || c.value === o)) {
        if (Tu(n, s, 1), o !== void 0) break;
      } else s++;
    }
    Lr || (this.size = n.length), r.updateURL();
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
      u = a[c], u.key === o && (i ? Tu(a, c--, 1) : (i = !0, u.value = s));
    i || Be(a, { key: o, value: s }), Lr || (this.size = a.length), n.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function() {
    var r = ae(this);
    pS(r.entries, function(t, n) {
      return t.key > n.key ? 1 : -1;
    }), r.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function(r) {
    for (var t = ae(this).entries, n = cS(r, arguments.length > 1 ? arguments[1] : void 0), a = 0, i; a < t.length; )
      i = t[a++], n(i.value, i.key, this);
  },
  // `URLSearchParams.prototype.keys` method
  keys: function() {
    return new ua(this, "keys");
  },
  // `URLSearchParams.prototype.values` method
  values: function() {
    return new ua(this, "values");
  },
  // `URLSearchParams.prototype.entries` method
  entries: function() {
    return new ua(this, "entries");
  }
}, { enumerable: !0 });
rv(lr, gS, lr.entries, { name: "entries" });
rv(lr, "toString", function() {
  return ae(this).serialize();
}, { enumerable: !0 });
Lr && aS(lr, "size", {
  get: function() {
    return ae(this).entries.length;
  },
  configurable: !0,
  enumerable: !0
});
oS(vn, gr);
si({ global: !0, constructor: !0, forced: !ev }, {
  URLSearchParams: vn
});
if (!ev && oa(Ar)) {
  var xS = pe(Ou.has), _S = pe(Ou.set), _u = function(e) {
    if (nv(e)) {
      var r = e.body, t;
      if (lS(r) === gr)
        return t = e.headers ? new Ar(e.headers) : new Ar(), xS(t, "content-type") || _S(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), fS(e, {
          body: $u(0, K(r)),
          headers: $u(0, t)
        });
    }
    return e;
  };
  if (oa(Eu) && si({ global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 }, {
    fetch: function(r) {
      return Eu(r, arguments.length > 1 ? _u(arguments[1]) : {});
    }
  }), oa(jt)) {
    var ca = function(r) {
      return tv(this, sa), new jt(r, arguments.length > 1 ? _u(arguments[1]) : {});
    };
    sa.constructor = ca, ca.prototype = sa, si({ global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 }, {
      Request: ca
    });
  }
}
var LS = {
  URLSearchParams: vn,
  getState: ae
}, AS = D, eo = G, jS = Yl, ro = j, Lu = xe, se = L, Nt = oe, re = Jt, NS = Wr, ci = X, to = P$, Qe = D$, ce = Kr, kS = Vi.codeAt, MS = eS, me = _e, US = He, BS = xi, uv = LS, cv = Re, DS = cv.set, kt = cv.getterFor("URL"), FS = uv.URLSearchParams, GS = uv.getState, Er = ro.URL, li = ro.TypeError, Mt = ro.parseInt, HS = Math.floor, Au = Math.pow, ie = se("".charAt), ve = se(/./.exec), Pr = se([].join), zS = se(1 .toString), WS = se([].pop), rr = se([].push), la = se("".replace), KS = se([].shift), qS = se("".split), jr = se("".slice), Ut = se("".toLowerCase), VS = se([].unshift), YS = "Invalid authority", va = "Invalid scheme", ke = "Invalid host", ju = "Invalid port", lv = /[a-z]/i, XS = /[\d+-.a-z]/i, vi = /\d/, JS = /^0x/i, QS = /^[0-7]+$/, ZS = /^\d+$/, vv = /^[\da-f]+$/i, e2 = /[\0\t\n\r #%/:<>?@[\\\]^|]/, r2 = /[\0\t\n\r #/:<>?@[\\\]^|]/, t2 = /^[\u0000-\u0020]+/, n2 = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/, a2 = /[\t\n\r]/g, te, i2 = function(e) {
  var r = qS(e, "."), t, n, a, i, o, s, c;
  if (r.length && r[r.length - 1] === "" && r.length--, t = r.length, t > 4) return e;
  for (n = [], a = 0; a < t; a++) {
    if (i = r[a], i === "") return e;
    if (o = 10, i.length > 1 && ie(i, 0) === "0" && (o = ve(JS, i) ? 16 : 8, i = jr(i, o === 8 ? 1 : 2)), i === "")
      s = 0;
    else {
      if (!ve(o === 10 ? ZS : o === 8 ? QS : vv, i)) return e;
      s = Mt(i, o);
    }
    rr(n, s);
  }
  for (a = 0; a < t; a++)
    if (s = n[a], a === t - 1) {
      if (s >= Au(256, 5 - t)) return null;
    } else if (s > 255) return null;
  for (c = WS(n), a = 0; a < n.length; a++)
    c += n[a] * Au(256, 3 - a);
  return c;
}, o2 = function(e) {
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
    for (i = o = 0; o < 4 && ve(vv, f()); )
      i = i * 16 + Mt(f(), 16), a++, o++;
    if (f() === ".") {
      if (o === 0 || (a -= o, t > 6)) return;
      for (s = 0; f(); ) {
        if (c = null, s > 0)
          if (f() === "." && s < 4) a++;
          else return;
        if (!ve(vi, f())) return;
        for (; ve(vi, f()); ) {
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
}, s2 = function(e) {
  for (var r = null, t = 1, n = null, a = 0, i = 0; i < 8; i++)
    e[i] !== 0 ? (a > t && (r = n, t = a), n = null, a = 0) : (n === null && (n = i), ++a);
  return a > t ? n : r;
}, Or = function(e) {
  var r, t, n, a;
  if (typeof e == "number") {
    for (r = [], t = 0; t < 4; t++)
      VS(r, e % 256), e = HS(e / 256);
    return Pr(r, ".");
  }
  if (typeof e == "object") {
    for (r = "", n = s2(e), t = 0; t < 8; t++)
      a && e[t] === 0 || (a && (a = !1), n === t ? (r += t ? ":" : "::", a = !0) : (r += zS(e[t], 16), t < 7 && (r += ":")));
    return "[" + r + "]";
  }
  return e;
}, It = {}, fv = to({}, It, {
  " ": 1,
  '"': 1,
  "<": 1,
  ">": 1,
  "`": 1
}), dv = to({}, fv, {
  "#": 1,
  "?": 1,
  "{": 1,
  "}": 1
}), fa = to({}, dv, {
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
  var t = kS(e, 0);
  return t > 32 && t < 127 && !ci(r, e) ? e : encodeURIComponent(e);
}, pt = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Rr = function(e, r) {
  var t;
  return e.length === 2 && ve(lv, ie(e, 0)) && ((t = ie(e, 1)) === ":" || !r && t === "|");
}, Nu = function(e) {
  var r;
  return e.length > 1 && Rr(jr(e, 0, 2)) && (e.length === 2 || (r = ie(e, 2)) === "/" || r === "\\" || r === "?" || r === "#");
}, u2 = function(e) {
  return e === "." || Ut(e) === "%2e";
}, c2 = function(e) {
  return e = Ut(e), e === ".." || e === "%2e." || e === ".%2e" || e === "%2e%2e";
}, da = {}, ku = {}, ha = {}, Mu = {}, Uu = {}, pa = {}, Bu = {}, Du = {}, gt = {}, yt = {}, ga = {}, ya = {}, ma = {}, ba = {}, Fu = {}, wa = {}, Ze = {}, he = {}, Gu = {}, Me = {}, ye = {}, no = function(e, r, t) {
  var n = me(e), a, i, o;
  if (r) {
    if (i = this.parse(n), i) throw new li(i);
    this.searchParams = null;
  } else {
    if (t !== void 0 && (a = new no(t, !0)), i = this.parse(n, null, a), i) throw new li(i);
    o = GS(new FS()), o.bindURL(this), this.searchParams = o;
  }
};
no.prototype = {
  type: "URL",
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function(e, r, t) {
    var n = this, a = r || da, i = 0, o = "", s = !1, c = !1, u = !1, v, l, f, d;
    for (e = me(e), r || (n.scheme = "", n.username = "", n.password = "", n.host = null, n.port = null, n.path = [], n.query = null, n.fragment = null, n.cannotBeABaseURL = !1, e = la(e, t2, ""), e = la(e, n2, "$1")), e = la(e, a2, ""), v = Qe(e); i <= v.length; ) {
      switch (l = v[i], a) {
        case da:
          if (l && ve(lv, l))
            o += Ut(l), a = ku;
          else {
            if (r)
              return va;
            a = ha;
            continue;
          }
          break;
        case ku:
          if (l && (ve(XS, l) || l === "+" || l === "-" || l === "."))
            o += Ut(l);
          else if (l === ":") {
            if (r && (n.isSpecial() !== ci(pt, o) || o === "file" && (n.includesCredentials() || n.port !== null) || n.scheme === "file" && !n.host)) return;
            if (n.scheme = o, r) {
              n.isSpecial() && pt[n.scheme] === n.port && (n.port = null);
              return;
            }
            o = "", n.scheme === "file" ? a = ba : n.isSpecial() && t && t.scheme === n.scheme ? a = Mu : n.isSpecial() ? a = Du : v[i + 1] === "/" ? (a = Uu, i++) : (n.cannotBeABaseURL = !0, rr(n.path, ""), a = Gu);
          } else {
            if (r)
              return va;
            o = "", a = ha, i = 0;
            continue;
          }
          break;
        case ha:
          if (!t || t.cannotBeABaseURL && l !== "#") return va;
          if (t.cannotBeABaseURL && l === "#") {
            n.scheme = t.scheme, n.path = ce(t.path), n.query = t.query, n.fragment = "", n.cannotBeABaseURL = !0, a = ye;
            break;
          }
          a = t.scheme === "file" ? ba : pa;
          continue;
        case Mu:
          if (l === "/" && v[i + 1] === "/")
            a = gt, i++;
          else {
            a = pa;
            continue;
          }
          break;
        case Uu:
          if (l === "/") {
            a = yt;
            break;
          } else {
            a = he;
            continue;
          }
        case pa:
          if (n.scheme = t.scheme, l === te)
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query;
          else if (l === "/" || l === "\\" && n.isSpecial())
            a = Bu;
          else if (l === "?")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = "", a = Me;
          else if (l === "#")
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.query = t.query, n.fragment = "", a = ye;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, n.path = ce(t.path), n.path.length--, a = he;
            continue;
          }
          break;
        case Bu:
          if (n.isSpecial() && (l === "/" || l === "\\"))
            a = gt;
          else if (l === "/")
            a = yt;
          else {
            n.username = t.username, n.password = t.password, n.host = t.host, n.port = t.port, a = he;
            continue;
          }
          break;
        case Du:
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
              var g = Se(w, fa);
              u ? n.password += g : n.username += g;
            }
            o = "";
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (s && o === "") return YS;
            i -= Qe(o).length + 1, o = "", a = ga;
          } else o += l;
          break;
        case ga:
        case ya:
          if (r && n.scheme === "file") {
            a = wa;
            continue;
          } else if (l === ":" && !c) {
            if (o === "") return ke;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = ma, r === ya) return;
          } else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial()) {
            if (n.isSpecial() && o === "") return ke;
            if (r && o === "" && (n.includesCredentials() || n.port !== null)) return;
            if (d = n.parseHost(o), d) return d;
            if (o = "", a = Ze, r) return;
            continue;
          } else
            l === "[" ? c = !0 : l === "]" && (c = !1), o += l;
          break;
        case ma:
          if (ve(vi, l))
            o += l;
          else if (l === te || l === "/" || l === "?" || l === "#" || l === "\\" && n.isSpecial() || r) {
            if (o !== "") {
              var S = Mt(o, 10);
              if (S > 65535) return ju;
              n.port = n.isSpecial() && S === pt[n.scheme] ? null : S, o = "";
            }
            if (r) return;
            a = Ze;
            continue;
          } else return ju;
          break;
        case ba:
          if (n.scheme = "file", l === "/" || l === "\\") a = Fu;
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
                Nu(Pr(ce(v, i), "")) || (n.host = t.host, n.path = ce(t.path), n.shortenPath()), a = he;
                continue;
            }
          else {
            a = he;
            continue;
          }
          break;
        case Fu:
          if (l === "/" || l === "\\") {
            a = wa;
            break;
          }
          t && t.scheme === "file" && !Nu(Pr(ce(v, i), "")) && (Rr(t.path[0], !0) ? rr(n.path, t.path[0]) : n.host = t.host), a = he;
          continue;
        case wa:
          if (l === te || l === "/" || l === "\\" || l === "?" || l === "#") {
            if (!r && Rr(o))
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
            if (c2(o) ? (n.shortenPath(), l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "")) : u2(o) ? l !== "/" && !(l === "\\" && n.isSpecial()) && rr(n.path, "") : (n.scheme === "file" && !n.path.length && Rr(o) && (n.host && (n.host = ""), o = ie(o, 0) + ":"), rr(n.path, o)), o = "", n.scheme === "file" && (l === te || l === "?" || l === "#"))
              for (; n.path.length > 1 && n.path[0] === ""; )
                KS(n.path);
            l === "?" ? (n.query = "", a = Me) : l === "#" && (n.fragment = "", a = ye);
          } else
            o += Se(l, dv);
          break;
        case Gu:
          l === "?" ? (n.query = "", a = Me) : l === "#" ? (n.fragment = "", a = ye) : l !== te && (n.path[0] += Se(l, It));
          break;
        case Me:
          !r && l === "#" ? (n.fragment = "", a = ye) : l !== te && (l === "'" && n.isSpecial() ? n.query += "%27" : l === "#" ? n.query += "%23" : n.query += Se(l, It));
          break;
        case ye:
          l !== te && (n.fragment += Se(l, fv));
          break;
      }
      i++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function(e) {
    var r, t, n;
    if (ie(e, 0) === "[") {
      if (ie(e, e.length - 1) !== "]" || (r = o2(jr(e, 1, -1)), !r)) return ke;
      this.host = r;
    } else if (this.isSpecial()) {
      if (e = MS(e), ve(e2, e) || (r = i2(e), r === null)) return ke;
      this.host = r;
    } else {
      if (ve(r2, e)) return ke;
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
    return ci(pt, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function() {
    var e = this.path, r = e.length;
    r && (this.scheme !== "file" || r !== 1 || !Rr(e[0], !0)) && e.length--;
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function() {
    var e = this, r = e.scheme, t = e.username, n = e.password, a = e.host, i = e.port, o = e.path, s = e.query, c = e.fragment, u = r + ":";
    return a !== null ? (u += "//", e.includesCredentials() && (u += t + (n ? ":" + n : "") + "@"), u += Or(a), i !== null && (u += ":" + i)) : r === "file" && (u += "//"), u += e.cannotBeABaseURL ? o[0] : o.length ? "/" + Pr(o, "/") : "", s !== null && (u += "?" + s), c !== null && (u += "#" + c), u;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function(e) {
    var r = this.parse(e);
    if (r) throw new li(r);
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
    this.parse(me(e) + ":", da);
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
        this.username += Se(r[t], fa);
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
        this.password += Se(r[t], fa);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function() {
    var e = this.host, r = this.port;
    return e === null ? "" : r === null ? Or(e) : Or(e) + ":" + r;
  },
  setHost: function(e) {
    this.cannotBeABaseURL || this.parse(e, ga);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function() {
    var e = this.host;
    return e === null ? "" : Or(e);
  },
  setHostname: function(e) {
    this.cannotBeABaseURL || this.parse(e, ya);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function() {
    var e = this.port;
    return e === null ? "" : me(e);
  },
  setPort: function(e) {
    this.cannotHaveUsernamePasswordPort() || (e = me(e), e === "" ? this.port = null : this.parse(e, ma));
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function() {
    var e = this.path;
    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + Pr(e, "/") : "";
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
    e = me(e), e === "" ? this.query = null : (ie(e, 0) === "?" && (e = jr(e, 1)), this.query = "", this.parse(e, Me)), this.searchParams.update();
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
    ie(e, 0) === "#" && (e = jr(e, 1)), this.fragment = "", this.parse(e, ye);
  },
  update: function() {
    this.query = this.searchParams.serialize() || null;
  }
};
var vr = function(r) {
  var t = NS(this, W), n = BS(arguments.length, 1) > 1 ? arguments[1] : void 0, a = DS(t, new no(r, !1, n));
  eo || (t.href = a.serialize(), t.origin = a.getOrigin(), t.protocol = a.getProtocol(), t.username = a.getUsername(), t.password = a.getPassword(), t.host = a.getHost(), t.hostname = a.getHostname(), t.port = a.getPort(), t.pathname = a.getPathname(), t.search = a.getSearch(), t.searchParams = a.getSearchParams(), t.hash = a.getHash());
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
eo && (re(W, "href", ne("serialize", "setHref")), re(W, "origin", ne("getOrigin")), re(W, "protocol", ne("getProtocol", "setProtocol")), re(W, "username", ne("getUsername", "setUsername")), re(W, "password", ne("getPassword", "setPassword")), re(W, "host", ne("getHost", "setHost")), re(W, "hostname", ne("getHostname", "setHostname")), re(W, "port", ne("getPort", "setPort")), re(W, "pathname", ne("getPathname", "setPathname")), re(W, "search", ne("getSearch", "setSearch")), re(W, "searchParams", ne("getSearchParams")), re(W, "hash", ne("getHash", "setHash")));
Nt(W, "toJSON", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
Nt(W, "toString", function() {
  return kt(this).serialize();
}, { enumerable: !0 });
if (Er) {
  var Hu = Er.createObjectURL, zu = Er.revokeObjectURL;
  Hu && Nt(vr, "createObjectURL", Lu(Hu, Er)), zu && Nt(vr, "revokeObjectURL", Lu(zu, Er));
}
US(vr, "URL");
AS({ global: !0, constructor: !0, forced: !jS, sham: !eo }, {
  URL: vr
});
var l2 = D, v2 = F;
l2({ target: "URL", proto: !0, enumerable: !0 }, {
  toJSON: function() {
    return v2(URL.prototype.toString, this);
  }
});
function f2(e, r) {
  if (!e.length) return [];
  var t = URL.createObjectURL(new Blob(e)), n = document.createElement("a");
  return n.href = t, n.download = r, n.rel = "noopener", document.body.appendChild(n), n.click(), document.body.removeChild(n), URL.revokeObjectURL(t), e;
}
function d2(e) {
  return fi.apply(this, arguments);
}
function fi() {
  return fi = Y(/* @__PURE__ */ C().mark(function e(r) {
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
          return v = "/cds/interactions/".concat(n, "/messages/transcript"), d.next = 8, un.get(v, {
            params: {
              timezone: s
            },
            token: i,
            responseType: kl.BLOB
          });
        case 8:
          return l = d.sent, d.abrupt("return", f2([l], u));
        case 10:
        case "end":
          return d.stop();
      }
    }, e);
  })), fi.apply(this, arguments);
}
var $a = /* @__PURE__ */ function() {
  function e(r) {
    Br(this, e), A(this, "current", void 0), this.current = r;
  }
  return Dr(e, null, [{
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
function Sa(e, r) {
  try {
    return e == null ? void 0 : e();
  } catch (t) {
    r == null || r(t);
  }
}
const h2 = '@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}';
var p2 = function(r) {
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
  return d1(t, {
    removeEmptyString: !0
  });
}, g2 = "talkdesk-chat-widget-style";
function y2(e) {
  var r, t, n, a, i = e == null ? void 0 : e.config, o = i ? a1(i, {}) : e == null ? void 0 : e.widgetSettings, s = {};
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
function m2() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return p2(M(M({}, y2(r)), e));
}
function b2(e) {
  var r = [];
  return r.push(n1(h2, g2, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function w2(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = m2(r, t), a = Object.keys(n);
  if (a.length)
    return bl(e, n);
}
function $2(e, r) {
  var t = function() {
    bl(e, {
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
var Wu = "tdw-widget-wrapper";
function S2(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = Wu, a.setAttribute("data-".concat(Wu), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      bm(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var E2 = F, O2 = X, I2 = Gt, T2 = ll, Ku = RegExp.prototype, P2 = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in Ku) && !O2(e, "flags") && I2(Ku, e) ? E2(T2, e) : r;
}, R2 = Wt.PROPER, C2 = oe, x2 = q, qu = _e, _2 = P, L2 = P2, ao = "toString", hv = RegExp.prototype, pv = hv[ao], A2 = _2(function() {
  return pv.call({ source: "a", flags: "b" }) !== "/a/b";
}), j2 = R2 && pv.name !== ao;
(A2 || j2) && C2(hv, ao, function() {
  var r = x2(this), t = qu(r.source), n = qu(L2(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var N2 = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';
function k2() {
  var e = document.createElement("div");
  e.className = "tdw-widget-trigger-animate", e.innerHTML = N2;
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
var Vu = "talkdesk-chat-widget-trigger";
function M2(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = k2(), a = document.createElement("button");
  a.id = Vu, a.className = "tdw-widget-trigger", a.ariaLabel = "Open chat widget", t && a.setAttribute("data-preview", "");
  var i = null, o = null, s = function() {
    var g;
    (g = o) === null || g === void 0 || g.destroy(), o = null;
  }, c = function() {
    o || (o = new i1(a, {
      onClick: function() {
        r == null || r();
      }
    }));
  }, u = function() {
    document.getElementById(Vu) || (e.appendChild(a), a.appendChild(n.element), a.onclick = function() {
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
var gv = { exports: {} }, yv = {}, U2 = Ce, B2 = we, mv = Yt.f, D2 = Kr, bv = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], F2 = function(e) {
  try {
    return mv(e);
  } catch {
    return D2(bv);
  }
};
yv.f = function(r) {
  return bv && U2(r) === "Window" ? F2(r) : mv(B2(r));
};
var G2 = P, H2 = G2(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), z2 = P, W2 = H, K2 = Ce, Yu = H2, Tt = Object.isExtensible, q2 = z2(function() {
  Tt(1);
}), V2 = q2 || Yu ? function(r) {
  return !W2(r) || Yu && K2(r) === "ArrayBuffer" ? !1 : Tt ? Tt(r) : !0;
} : Tt, Y2 = P, X2 = !Y2(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), J2 = D, Q2 = L, Z2 = Kt, eE = H, io = X, rE = fe.f, Xu = Yt, tE = yv, oo = V2, nE = yi, aE = X2, wv = !1, be = nE("meta"), iE = 0, so = function(e) {
  rE(e, be, { value: {
    objectID: "O" + iE++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, oE = function(e, r) {
  if (!eE(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!io(e, be)) {
    if (!oo(e)) return "F";
    if (!r) return "E";
    so(e);
  }
  return e[be].objectID;
}, sE = function(e, r) {
  if (!io(e, be)) {
    if (!oo(e)) return !0;
    if (!r) return !1;
    so(e);
  }
  return e[be].weakData;
}, uE = function(e) {
  return aE && wv && oo(e) && !io(e, be) && so(e), e;
}, cE = function() {
  lE.enable = function() {
  }, wv = !0;
  var e = Xu.f, r = Q2([].splice), t = {};
  t[be] = 1, e(t).length && (Xu.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === be) {
        r(a, i, 1);
        break;
      }
    return a;
  }, J2({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: tE.f
  }));
}, lE = gv.exports = {
  enable: cE,
  fastKey: oE,
  getWeakData: sE,
  onFreeze: uE
};
Z2[be] = !0;
var $v = gv.exports, vE = k, fE = H, Ju = Ri, dE = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    Ju && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    vE(n = r.constructor) && n !== t && fE(a = n.prototype) && a !== t.prototype && Ju(e, a), e
  );
}, hE = D, pE = j, gE = L, Qu = Ti, yE = oe, mE = $v, bE = tn, wE = Wr, $E = k, SE = Fe, Ea = H, Oa = P, EE = sl, OE = He, IE = dE, TE = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = pE[e], s = o && o.prototype, c = o, u = {}, v = function(S) {
    var $ = gE(s[S]);
    yE(
      s,
      S,
      S === "add" ? function(_) {
        return $(this, _ === 0 ? 0 : _), this;
      } : S === "delete" ? function(I) {
        return a && !Ea(I) ? !1 : $(this, I === 0 ? 0 : I);
      } : S === "get" ? function(_) {
        return a && !Ea(_) ? void 0 : $(this, _ === 0 ? 0 : _);
      } : S === "has" ? function(_) {
        return a && !Ea(_) ? !1 : $(this, _ === 0 ? 0 : _);
      } : function(_, ue) {
        return $(this, _ === 0 ? 0 : _, ue), this;
      }
    );
  }, l = Qu(
    e,
    !$E(o) || !(a || s.forEach && !Oa(function() {
      new o().entries().next();
    }))
  );
  if (l)
    c = t.getConstructor(r, e, n, i), mE.enable();
  else if (Qu(e, !0)) {
    var f = new c(), d = f[i](a ? {} : -0, 1) !== f, m = Oa(function() {
      f.has(1);
    }), w = EE(function(S) {
      new o(S);
    }), g = !a && Oa(function() {
      for (var S = new o(), $ = 5; $--; ) S[i]($, $);
      return !S.has(-0);
    });
    w || (c = r(function(S, $) {
      wE(S, s);
      var I = IE(new o(), S, c);
      return SE($) || bE($, I[i], { that: I, AS_ENTRIES: n }), I;
    }), c.prototype = s, s.constructor = c), (m || g) && (v("delete"), v("has"), n && v("get")), (g || d) && v(i), a && s.clear && delete s.clear;
  }
  return u[e] = c, hE({ global: !0, constructor: !0, forced: c !== o }, u), OE(c, e), a || t.setStrong(c, e, n), c;
}, Zu = Yr, PE = Jt, ec = Zl, RE = xe, CE = Wr, xE = Fe, _E = tn, LE = Xi, mt = cn, AE = xc, Ir = G, rc = $v.fastKey, Sv = Re, tc = Sv.set, Ia = Sv.getterFor, jE = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(u, v) {
      CE(u, i), tc(u, {
        type: r,
        index: Zu(null),
        first: void 0,
        last: void 0,
        size: 0
      }), Ir || (u.size = 0), xE(v) || _E(v, u[n], { that: u, AS_ENTRIES: t });
    }), i = a.prototype, o = Ia(r), s = function(u, v, l) {
      var f = o(u), d = c(u, v), m, w;
      return d ? d.value = l : (f.last = d = {
        index: w = rc(v, !0),
        key: v,
        value: l,
        previous: m = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), m && (m.next = d), Ir ? f.size++ : u.size++, w !== "F" && (f.index[w] = d)), u;
    }, c = function(u, v) {
      var l = o(u), f = rc(v), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === v) return d;
    };
    return ec(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var v = this, l = o(v), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = Zu(null), Ir ? l.size = 0 : v.size = 0;
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
        for (var l = o(this), f = RE(v, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(v) {
        return !!c(this, v);
      }
    }), ec(i, t ? {
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
    }), Ir && PE(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = Ia(r), i = Ia(n);
    LE(e, r, function(o, s) {
      tc(this, {
        type: n,
        target: o,
        state: a(o),
        kind: s,
        last: void 0
      });
    }, function() {
      for (var o = i(this), s = o.kind, c = o.last; c && c.removed; ) c = c.previous;
      return !o.target || !(o.last = c = c ? c.next : o.state.first) ? (o.target = void 0, mt(void 0, !0)) : mt(s === "keys" ? c.key : s === "values" ? c.value : [c.key, c.value], !1);
    }, t ? "entries" : "values", !t, !0), AE(r);
  }
}, NE = TE, kE = jE;
NE("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, kE);
function ME(e) {
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
function UE() {
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
function BE(e) {
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
var DE = "talkdesk-chat-widget", nc = "loading-element", FE = "iframe-element", GE = function() {
  var r = Ee.getAllConfig(), t = r.appProps;
  return "./v2/widget/latest/index.html?touchpointId=".concat(t == null ? void 0 : t.touchpointId);
}, HE = function() {
  return "".concat("https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/latest/preview.html");
};
function zE(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = ME(DE), a = BE(function() {
    n.remove(nc);
  });
  n.append(nc, UE()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? HE() : GE(), n.append(FE, a), r && a.element.contentWindow && r(a.element.contentWindow));
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
var WE = ["enableResponsiveLayout", "enableUserInput", "enablePointMoveTriggerButton"];
function KE(e, r) {
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
  var a = [], i = null, o = !1, s = !1, c = null, u = null, v = null, l = $a.empty(), f = $a.empty(), d = $a.empty(), m = S2({
    root: t
  }), w = M2(m.element, function() {
    $();
  }), g = zE(m.element, function(U) {
    u = new I1({
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
      return Iw(M(M({}, O), {}, {
        app_id: n
      }));
    }), u.register(V.Methods.ConversationStart, function() {
      Sa(d.current, function(O) {
        console.error('An error occurred in "onConversationStart" callback.', O);
      });
    }), u.register(V.Methods.SetBadge, function(O) {
      w.setBadge(O);
    }), u.register(V.Methods.GetTdAccessToken, function() {
      return Ow(n);
    }), u.register(V.Methods.DownloadTranscript, /* @__PURE__ */ function() {
      var O = Y(/* @__PURE__ */ C().mark(function N(Z) {
        return C().wrap(function(ee) {
          for (; ; ) switch (ee.prev = ee.next) {
            case 0:
              return ee.next = 2, d2(Z);
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
      var N, Z, We, ee, Xr, Le, Ae, ge, p, h, y, E, b = arguments;
      return C().wrap(function(T) {
        for (; ; ) switch (T.prev = T.next) {
          case 0:
            return N = b.length > 0 && b[0] !== void 0 ? b[0] : {}, Z = N.enableResponsiveLayout, We = Z === void 0 ? !0 : Z, ee = N.enableUserInput, Xr = ee === void 0 ? !0 : ee, Le = N.enablePointMoveTriggerButton, Ae = Le === void 0 ? !1 : Le, ge = jv(N, WE), i || (i = Tw(n)), T.next = 4, i;
          case 4:
            if (p = T.sent, p != null && p.active) {
              T.next = 7;
              break;
            }
            return T.abrupt("return", !1);
          case 7:
            if (h = Ee.setAppConfig(M(M({}, ge), {}, {
              enableResponsiveLayout: We,
              enableUserInput: Xr,
              enablePointMoveTriggerButton: Ae,
              languageCode: (ge == null ? void 0 : ge.languageCode) || (r == null ? void 0 : r.languageCode)
            })), Ee.setTouchpoint(p), o) {
              T.next = 19;
              break;
            }
            return o = !0, y = w2(m.element, h == null ? void 0 : h.styles, p), v = $2(m.element), a.push(b2(m.element)), g.update({
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
    w.close(), g.open(), (O = u) === null || O === void 0 || O.trigger(V.Methods.FrameOpened), Sa(l.current, function(N) {
      console.error('An error occurred in "onOpenWebchat" callback.', N);
    });
  }, I = function() {
    g.close(), w.open(), Sa(f.current, function(O) {
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
function qE(e, r) {
  return KE(e, r);
}
export {
  qE as default
};
//# sourceMappingURL=talkdeskchatsdk.es.js.map
