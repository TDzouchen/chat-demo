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
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ve = function(e) {
  return e && e.Math === Math && e;
}, w = (
  // eslint-disable-next-line es/no-global-this -- safe
  ve(typeof globalThis == "object" && globalThis) || ve(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  ve(typeof self == "object" && self) || ve(typeof je == "object" && je) || ve(typeof je == "object" && je) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), Ti = { exports: {} }, In = w, Ts = Object.defineProperty, Ft = function(e, r) {
  try {
    Ts(In, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    In[e] = r;
  }
  return r;
}, Ps = w, Cs = Ft, Tn = "__core-js_shared__", Pn = Ti.exports = Ps[Tn] || Cs(Tn, {});
(Pn.versions || (Pn.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Bt = Ti.exports, Cn = Bt, Ut = function(e, r) {
  return Cn[e] || (Cn[e] = r || {});
}, $ = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, xs = $, ur = !xs(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), Pi = ur, Ci = Function.prototype, ht = Ci.call, Rs = Pi && Ci.bind.bind(ht, ht), O = Pi ? Rs : function(e) {
  return function() {
    return ht.apply(e, arguments);
  };
}, se = function(e) {
  return e == null;
}, _s = se, js = TypeError, Se = function(e) {
  if (_s(e)) throw new js("Can't call method on " + e);
  return e;
}, As = Se, Ls = Object, Ee = function(e) {
  return Ls(As(e));
}, Ns = O, Ms = Ee, Ds = Ns({}.hasOwnProperty), j = Object.hasOwn || function(r, t) {
  return Ds(Ms(r), t);
}, ks = O, Fs = 0, Bs = Math.random(), Us = ks(1 .toString), Gt = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + Us(++Fs + Bs, 36);
}, Gs = w, xn = Gs.navigator, Rn = xn && xn.userAgent, Oe = Rn ? String(Rn) : "", xi = w, Ir = Oe, _n = xi.process, jn = xi.Deno, An = _n && _n.versions || jn && jn.version, Ln = An && An.v8, L, rr;
Ln && (L = Ln.split("."), rr = L[0] > 0 && L[0] < 4 ? 1 : +(L[0] + L[1]));
!rr && Ir && (L = Ir.match(/Edge\/(\d+)/), (!L || L[1] >= 74) && (L = Ir.match(/Chrome\/(\d+)/), L && (rr = +L[1])));
var cr = rr, Nn = cr, Ks = $, zs = w, Ws = zs.String, Ri = !!Object.getOwnPropertySymbols && !Ks(function() {
  var e = Symbol("symbol detection");
  return !Ws(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Nn && Nn < 41;
}), Vs = Ri, _i = Vs && !Symbol.sham && typeof Symbol.iterator == "symbol", Hs = w, Ys = Ut, Mn = j, Xs = Gt, Js = Ri, qs = _i, ee = Hs.Symbol, Tr = Ys("wks"), Qs = qs ? ee.for || ee : ee && ee.withoutSetter || Xs, T = function(e) {
  return Mn(Tr, e) || (Tr[e] = Js && Mn(ee, e) ? ee[e] : Qs("Symbol." + e)), Tr[e];
}, Zs = T, eu = Zs("toStringTag"), ji = {};
ji[eu] = "z";
var Kt = String(ji) === "[object z]", Pr = typeof document == "object" && document.all, E = typeof Pr > "u" && Pr !== void 0 ? function(e) {
  return typeof e == "function" || e === Pr;
} : function(e) {
  return typeof e == "function";
}, N = {}, ru = $, _ = !ru(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), tu = E, P = function(e) {
  return typeof e == "object" ? e !== null : tu(e);
}, nu = w, Dn = P, pt = nu.document, au = Dn(pt) && Dn(pt.createElement), vr = function(e) {
  return au ? pt.createElement(e) : {};
}, iu = _, ou = $, su = vr, Ai = !iu && !ou(function() {
  return Object.defineProperty(su("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), uu = _, cu = $, Li = uu && cu(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), vu = P, lu = String, fu = TypeError, M = function(e) {
  if (vu(e)) return e;
  throw new fu(lu(e) + " is not an object");
}, du = ur, Ae = Function.prototype.call, A = du ? Ae.bind(Ae) : function() {
  return Ae.apply(Ae, arguments);
}, Cr = w, hu = E, pu = function(e) {
  return hu(e) ? e : void 0;
}, Y = function(e, r) {
  return arguments.length < 2 ? pu(Cr[e]) : Cr[e] && Cr[e][r];
}, gu = O, lr = gu({}.isPrototypeOf), yu = Y, mu = E, bu = lr, $u = _i, wu = Object, Ni = $u ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = yu("Symbol");
  return mu(r) && bu(r.prototype, wu(e));
}, Su = String, fr = function(e) {
  try {
    return Su(e);
  } catch {
    return "Object";
  }
}, Eu = E, Ou = fr, Iu = TypeError, K = function(e) {
  if (Eu(e)) return e;
  throw new Iu(Ou(e) + " is not a function");
}, Tu = K, Pu = se, zt = function(e, r) {
  var t = e[r];
  return Pu(t) ? void 0 : Tu(t);
}, xr = A, Rr = E, _r = P, Cu = TypeError, xu = function(e, r) {
  var t, n;
  if (r === "string" && Rr(t = e.toString) && !_r(n = xr(t, e)) || Rr(t = e.valueOf) && !_r(n = xr(t, e)) || r !== "string" && Rr(t = e.toString) && !_r(n = xr(t, e))) return n;
  throw new Cu("Can't convert object to primitive value");
}, Ru = A, kn = P, Fn = Ni, _u = zt, ju = xu, Au = T, Lu = TypeError, Nu = Au("toPrimitive"), Mu = function(e, r) {
  if (!kn(e) || Fn(e)) return e;
  var t = _u(e, Nu), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = Ru(t, e, r), !kn(n) || Fn(n)) return n;
    throw new Lu("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), ju(e, r);
}, Du = Mu, ku = Ni, Mi = function(e) {
  var r = Du(e, "string");
  return ku(r) ? r : r + "";
}, Fu = _, Bu = Ai, Uu = Li, Le = M, Bn = Mi, Gu = TypeError, jr = Object.defineProperty, Ku = Object.getOwnPropertyDescriptor, Ar = "enumerable", Lr = "configurable", Nr = "writable";
N.f = Fu ? Uu ? function(r, t, n) {
  if (Le(r), t = Bn(t), Le(n), typeof r == "function" && t === "prototype" && "value" in n && Nr in n && !n[Nr]) {
    var a = Ku(r, t);
    a && a[Nr] && (r[t] = n.value, n = {
      configurable: Lr in n ? n[Lr] : a[Lr],
      enumerable: Ar in n ? n[Ar] : a[Ar],
      writable: !1
    });
  }
  return jr(r, t, n);
} : jr : function(r, t, n) {
  if (Le(r), t = Bn(t), Le(n), Bu) try {
    return jr(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new Gu("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var Di = { exports: {} }, gt = _, zu = j, ki = Function.prototype, Wu = gt && Object.getOwnPropertyDescriptor, Wt = zu(ki, "name"), Vu = Wt && (function() {
}).name === "something", Hu = Wt && (!gt || gt && Wu(ki, "name").configurable), dr = {
  EXISTS: Wt,
  PROPER: Vu,
  CONFIGURABLE: Hu
}, Yu = O, Xu = E, yt = Bt, Ju = Yu(Function.toString);
Xu(yt.inspectSource) || (yt.inspectSource = function(e) {
  return Ju(e);
});
var Vt = yt.inspectSource, qu = w, Qu = E, Un = qu.WeakMap, Zu = Qu(Un) && /native code/.test(String(Un)), hr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, ec = _, rc = N, tc = hr, Ie = ec ? function(e, r, t) {
  return rc.f(e, r, tc(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, nc = Ut, ac = Gt, Gn = nc("keys"), Ht = function(e) {
  return Gn[e] || (Gn[e] = ac(e));
}, pr = {}, ic = Zu, Fi = w, oc = P, sc = Ie, Mr = j, Dr = Bt, uc = Ht, cc = pr, Kn = "Object already initialized", mt = Fi.TypeError, vc = Fi.WeakMap, tr, $e, nr, lc = function(e) {
  return nr(e) ? $e(e) : tr(e, {});
}, fc = function(e) {
  return function(r) {
    var t;
    if (!oc(r) || (t = $e(r)).type !== e)
      throw new mt("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (ic || Dr.state) {
  var D = Dr.state || (Dr.state = new vc());
  D.get = D.get, D.has = D.has, D.set = D.set, tr = function(e, r) {
    if (D.has(e)) throw new mt(Kn);
    return r.facade = e, D.set(e, r), r;
  }, $e = function(e) {
    return D.get(e) || {};
  }, nr = function(e) {
    return D.has(e);
  };
} else {
  var q = uc("state");
  cc[q] = !0, tr = function(e, r) {
    if (Mr(e, q)) throw new mt(Kn);
    return r.facade = e, sc(e, q, r), r;
  }, $e = function(e) {
    return Mr(e, q) ? e[q] : {};
  }, nr = function(e) {
    return Mr(e, q);
  };
}
var ue = {
  set: tr,
  get: $e,
  has: nr,
  enforce: lc,
  getterFor: fc
}, Yt = O, dc = $, hc = E, Ne = j, bt = _, pc = dr.CONFIGURABLE, gc = Vt, Bi = ue, yc = Bi.enforce, mc = Bi.get, zn = String, Ye = Object.defineProperty, bc = Yt("".slice), $c = Yt("".replace), wc = Yt([].join), Sc = bt && !dc(function() {
  return Ye(function() {
  }, "length", { value: 8 }).length !== 8;
}), Ec = String(String).split("String"), Oc = Di.exports = function(e, r, t) {
  bc(zn(r), 0, 7) === "Symbol(" && (r = "[" + $c(zn(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Ne(e, "name") || pc && e.name !== r) && (bt ? Ye(e, "name", { value: r, configurable: !0 }) : e.name = r), Sc && t && Ne(t, "arity") && e.length !== t.arity && Ye(e, "length", { value: t.arity });
  try {
    t && Ne(t, "constructor") && t.constructor ? bt && Ye(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = yc(e);
  return Ne(n, "source") || (n.source = wc(Ec, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = Oc(function() {
  return hc(this) && mc(this).source || gc(this);
}, "toString");
var Ui = Di.exports, Ic = E, Tc = N, Pc = Ui, Cc = Ft, B = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (Ic(t) && Pc(t, i, n), n.global)
    a ? e[r] = t : Cc(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : Tc.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Gi = O, xc = Gi({}.toString), Rc = Gi("".slice), X = function(e) {
  return Rc(xc(e), 8, -1);
}, _c = Kt, jc = E, Xe = X, Ac = T, Lc = Ac("toStringTag"), Nc = Object, Mc = Xe(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", Dc = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, gr = _c ? Xe : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = Dc(r = Nc(e), Lc)) == "string" ? t : Mc ? Xe(r) : (n = Xe(r)) === "Object" && jc(r.callee) ? "Arguments" : n;
}, kc = Kt, Fc = gr, Bc = kc ? {}.toString : function() {
  return "[object " + Fc(this) + "]";
}, Uc = Kt, Gc = B, Kc = Bc;
Uc || Gc(Object.prototype, "toString", Kc, { unsafe: !0 });
var zc = {
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
}, Xt = {}, Ki = {}, zi = {}.propertyIsEnumerable, Wi = Object.getOwnPropertyDescriptor, Wc = Wi && !zi.call({ 1: 2 }, 1);
Ki.f = Wc ? function(r) {
  var t = Wi(this, r);
  return !!t && t.enumerable;
} : zi;
var Vc = O, Hc = $, Yc = X, kr = Object, Xc = Vc("".split), Jt = Hc(function() {
  return !kr("z").propertyIsEnumerable(0);
}) ? function(e) {
  return Yc(e) === "String" ? Xc(e, "") : kr(e);
} : kr, Jc = Jt, qc = Se, J = function(e) {
  return Jc(qc(e));
}, Qc = _, Zc = A, ev = Ki, rv = hr, tv = J, nv = Mi, av = j, iv = Ai, Wn = Object.getOwnPropertyDescriptor;
Xt.f = Qc ? Wn : function(r, t) {
  if (r = tv(r), t = nv(t), iv) try {
    return Wn(r, t);
  } catch {
  }
  if (av(r, t)) return rv(!Zc(ev.f, r, t), r[t]);
};
var yr = {}, ov = Math.ceil, sv = Math.floor, uv = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? sv : ov)(t);
}, cv = uv, qt = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : cv(r);
}, vv = qt, lv = Math.max, fv = Math.min, dv = function(e, r) {
  var t = vv(e);
  return t < 0 ? lv(t + r, 0) : fv(t, r);
}, hv = qt, pv = Math.min, gv = function(e) {
  var r = hv(e);
  return r > 0 ? pv(r, 9007199254740991) : 0;
}, yv = gv, mr = function(e) {
  return yv(e.length);
}, mv = J, bv = dv, $v = mr, Vn = function(e) {
  return function(r, t, n) {
    var a = mv(r), i = $v(a);
    if (i === 0) return !e && -1;
    var o = bv(n, i), u;
    if (e && t !== t) {
      for (; i > o; )
        if (u = a[o++], u !== u) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, wv = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Vn(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Vn(!1)
}, Sv = O, Fr = j, Ev = J, Ov = wv.indexOf, Iv = pr, Hn = Sv([].push), Vi = function(e, r) {
  var t = Ev(e), n = 0, a = [], i;
  for (i in t) !Fr(Iv, i) && Fr(t, i) && Hn(a, i);
  for (; r.length > n; ) Fr(t, i = r[n++]) && (~Ov(a, i) || Hn(a, i));
  return a;
}, Qt = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], Tv = Vi, Pv = Qt, Cv = Pv.concat("length", "prototype");
yr.f = Object.getOwnPropertyNames || function(r) {
  return Tv(r, Cv);
};
var Hi = {};
Hi.f = Object.getOwnPropertySymbols;
var xv = Y, Rv = O, _v = yr, jv = Hi, Av = M, Lv = Rv([].concat), Nv = xv("Reflect", "ownKeys") || function(r) {
  var t = _v.f(Av(r)), n = jv.f;
  return n ? Lv(t, n(r)) : t;
}, Yn = j, Mv = Nv, Dv = Xt, kv = N, Fv = function(e, r, t) {
  for (var n = Mv(r), a = kv.f, i = Dv.f, o = 0; o < n.length; o++) {
    var u = n[o];
    !Yn(e, u) && !(t && Yn(t, u)) && a(e, u, i(r, u));
  }
}, Bv = $, Uv = E, Gv = /#|\.prototype\./, Te = function(e, r) {
  var t = zv[Kv(e)];
  return t === Vv ? !0 : t === Wv ? !1 : Uv(r) ? Bv(r) : !!r;
}, Kv = Te.normalize = function(e) {
  return String(e).replace(Gv, ".").toLowerCase();
}, zv = Te.data = {}, Wv = Te.NATIVE = "N", Vv = Te.POLYFILL = "P", Zt = Te, Me = w, Hv = Xt.f, Yv = Ie, Xv = B, Jv = Ft, qv = Fv, Qv = Zt, C = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, u, v, s, c;
  if (n ? o = Me : a ? o = Me[t] || Jv(t, {}) : o = Me[t] && Me[t].prototype, o) for (u in r) {
    if (s = r[u], e.dontCallGetSet ? (c = Hv(o, u), v = c && c.value) : v = o[u], i = Qv(n ? u : t + (a ? "." : "#") + u, e.forced), !i && v !== void 0) {
      if (typeof s == typeof v) continue;
      qv(s, v);
    }
    (e.sham || v && v.sham) && Yv(s, "sham", !0), Xv(o, u, s, e);
  }
}, Zv = gr, el = String, Pe = function(e) {
  if (Zv(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return el(e);
}, rl = M, Yi = function() {
  var e = rl(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, en = $, tl = w, rn = tl.RegExp, tn = en(function() {
  var e = rn("a", "y");
  return e.lastIndex = 2, e.exec("abcd") !== null;
}), nl = tn || en(function() {
  return !rn("a", "y").sticky;
}), al = tn || en(function() {
  var e = rn("^r", "gy");
  return e.lastIndex = 2, e.exec("str") !== null;
}), il = {
  BROKEN_CARET: al,
  MISSED_STICKY: nl,
  UNSUPPORTED_Y: tn
}, Xi = {}, ol = Vi, sl = Qt, Ji = Object.keys || function(r) {
  return ol(r, sl);
}, ul = _, cl = Li, vl = N, ll = M, fl = J, dl = Ji;
Xi.f = ul && !cl ? Object.defineProperties : function(r, t) {
  ll(r);
  for (var n = fl(t), a = dl(t), i = a.length, o = 0, u; i > o; ) vl.f(r, u = a[o++], n[u]);
  return r;
};
var hl = Y, qi = hl("document", "documentElement"), pl = M, gl = Xi, Xn = Qt, yl = pr, ml = qi, bl = vr, $l = Ht, Jn = ">", qn = "<", $t = "prototype", wt = "script", Qi = $l("IE_PROTO"), Br = function() {
}, Zi = function(e) {
  return qn + wt + Jn + e + qn + "/" + wt + Jn;
}, Qn = function(e) {
  e.write(Zi("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, wl = function() {
  var e = bl("iframe"), r = "java" + wt + ":", t;
  return e.style.display = "none", ml.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(Zi("document.F=Object")), t.close(), t.F;
}, De, Je = function() {
  try {
    De = new ActiveXObject("htmlfile");
  } catch {
  }
  Je = typeof document < "u" ? document.domain && De ? Qn(De) : wl() : Qn(De);
  for (var e = Xn.length; e--; ) delete Je[$t][Xn[e]];
  return Je();
};
yl[Qi] = !0;
var br = Object.create || function(r, t) {
  var n;
  return r !== null ? (Br[$t] = pl(r), n = new Br(), Br[$t] = null, n[Qi] = r) : n = Je(), t === void 0 ? n : gl.f(n, t);
}, Sl = $, El = w, Ol = El.RegExp, Il = Sl(function() {
  var e = Ol(".", "s");
  return !(e.dotAll && e.test(`
`) && e.flags === "s");
}), Tl = $, Pl = w, Cl = Pl.RegExp, xl = Tl(function() {
  var e = Cl("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
}), re = A, $r = O, Rl = Pe, _l = Yi, jl = il, Al = Ut, Ll = br, Nl = ue.get, Ml = Il, Dl = xl, kl = Al("native-string-replace", String.prototype.replace), ar = RegExp.prototype.exec, St = ar, Fl = $r("".charAt), Bl = $r("".indexOf), Ul = $r("".replace), Ur = $r("".slice), Et = function() {
  var e = /a/, r = /b*/g;
  return re(ar, e, "a"), re(ar, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
}(), eo = jl.BROKEN_CARET, Ot = /()??/.exec("")[1] !== void 0, Gl = Et || Ot || eo || Ml || Dl;
Gl && (St = function(r) {
  var t = this, n = Nl(t), a = Rl(r), i = n.raw, o, u, v, s, c, l, f;
  if (i)
    return i.lastIndex = t.lastIndex, o = re(St, i, a), t.lastIndex = i.lastIndex, o;
  var d = n.groups, h = eo && t.sticky, p = re(_l, t), m = t.source, y = 0, g = a;
  if (h && (p = Ul(p, "y", ""), Bl(p, "g") === -1 && (p += "g"), g = Ur(a, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Fl(a, t.lastIndex - 1) !== `
`) && (m = "(?: " + m + ")", g = " " + g, y++), u = new RegExp("^(?:" + m + ")", p)), Ot && (u = new RegExp("^" + m + "$(?!\\s)", p)), Et && (v = t.lastIndex), s = re(ar, h ? u : t, g), h ? s ? (s.input = Ur(s.input, y), s[0] = Ur(s[0], y), s.index = t.lastIndex, t.lastIndex += s[0].length) : t.lastIndex = 0 : Et && s && (t.lastIndex = t.global ? s.index + s[0].length : v), Ot && s && s.length > 1 && re(kl, s[0], u, function() {
    for (c = 1; c < arguments.length - 2; c++)
      arguments[c] === void 0 && (s[c] = void 0);
  }), s && d)
    for (s.groups = l = Ll(null), c = 0; c < d.length; c++)
      f = d[c], l[f[0]] = s[f[1]];
  return s;
});
var Kl = St, zl = C, Zn = Kl;
zl({ target: "RegExp", proto: !0, forced: /./.exec !== Zn }, {
  exec: Zn
});
function Wl(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
function It(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Vl(e) {
  if (Array.isArray(e)) return e;
}
function Hl(e) {
  if (Array.isArray(e)) return It(e);
}
function ro(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function Yl(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ao(n.key), n);
  }
}
function to(e, r, t) {
  return r && Yl(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function x(e, r, t) {
  return (r = ao(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Xl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Jl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, u = [], v = !0, s = !1;
    try {
      if (i = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        v = !1;
      } else for (; !(v = (n = i.call(t)).done) && (u.push(n.value), u.length !== r); v = !0) ;
    } catch (c) {
      s = !0, a = c;
    } finally {
      try {
        if (!v && t.return != null && (o = t.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw a;
      }
    }
    return u;
  }
}
function ql() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ql() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ea(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function k(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ea(Object(t), !0).forEach(function(n) {
      x(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ea(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function no(e, r) {
  return Vl(e) || Jl(e, r) || io(e, r) || ql();
}
function Zl(e) {
  return Hl(e) || Xl(e) || io(e) || Ql();
}
function ef(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ao(e) {
  var r = ef(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function io(e, r) {
  if (e) {
    if (typeof e == "string") return It(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? It(e, r) : void 0;
  }
}
var rf = $, oo = function(e, r) {
  var t = [][e];
  return !!t && rf(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, tf = C, nf = O, af = Jt, of = J, sf = oo, uf = nf([].join), cf = af !== Object, vf = cf || !sf("join", ",");
tf({ target: "Array", proto: !0, forced: vf }, {
  join: function(r) {
    return uf(of(this), r === void 0 ? "," : r);
  }
});
var lf = X, ff = O, df = function(e) {
  if (lf(e) === "Function") return ff(e);
}, ra = df, hf = K, pf = ur, gf = ra(ra.bind), Ce = function(e, r) {
  return hf(e), r === void 0 ? e : pf ? gf(e, r) : function() {
    return e.apply(r, arguments);
  };
}, yf = X, so = Array.isArray || function(r) {
  return yf(r) === "Array";
}, mf = O, bf = $, uo = E, $f = gr, wf = Y, Sf = Vt, co = function() {
}, vo = wf("Reflect", "construct"), nn = /^\s*(?:class|function)\b/, Ef = mf(nn.exec), Of = !nn.test(co), le = function(r) {
  if (!uo(r)) return !1;
  try {
    return vo(co, [], r), !0;
  } catch {
    return !1;
  }
}, lo = function(r) {
  if (!uo(r)) return !1;
  switch ($f(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return Of || !!Ef(nn, Sf(r));
  } catch {
    return !0;
  }
};
lo.sham = !0;
var fo = !vo || bf(function() {
  var e;
  return le(le.call) || !le(Object) || !le(function() {
    e = !0;
  }) || e;
}) ? lo : le, ta = so, If = fo, Tf = P, Pf = T, Cf = Pf("species"), na = Array, xf = function(e) {
  var r;
  return ta(e) && (r = e.constructor, If(r) && (r === na || ta(r.prototype)) ? r = void 0 : Tf(r) && (r = r[Cf], r === null && (r = void 0))), r === void 0 ? na : r;
}, Rf = xf, ho = function(e, r) {
  return new (Rf(e))(r === 0 ? 0 : r);
}, _f = Ce, jf = O, Af = Jt, Lf = Ee, Nf = mr, Mf = ho, aa = jf([].push), U = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, u = e === 5 || i;
  return function(v, s, c, l) {
    for (var f = Lf(v), d = Af(f), h = Nf(d), p = _f(s, c), m = 0, y = l || Mf, g = r ? y(v, h) : t || o ? y(v, 0) : void 0, S, I; h > m; m++) if ((u || m in d) && (S = d[m], I = p(S, m, f), e))
      if (r) g[m] = I;
      else if (I) switch (e) {
        case 3:
          return !0;
        case 5:
          return S;
        case 6:
          return m;
        case 2:
          aa(g, S);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          aa(g, S);
      }
    return i ? -1 : n || a ? a : g;
  };
}, an = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: U(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: U(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: U(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: U(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: U(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: U(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: U(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: U(7)
}, Df = $, kf = T, Ff = cr, Bf = kf("species"), on = function(e) {
  return Ff >= 51 || !Df(function() {
    var r = [], t = r.constructor = {};
    return t[Bf] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, Uf = C, Gf = an.map, Kf = on, zf = Kf("map");
Uf({ target: "Array", proto: !0, forced: !zf }, {
  map: function(r) {
    return Gf(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Wf = C, Vf = Ee, po = Ji, Hf = $, Yf = Hf(function() {
  po(1);
});
Wf({ target: "Object", stat: !0, forced: Yf }, {
  keys: function(r) {
    return po(Vf(r));
  }
});
function Xf(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function ia(e) {
  var r = Zl(e).map(function(t, n) {
    return Xf(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function Jf(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(ia(a), r[a]), k(k({}, n), {}, x({}, ia(a), r[a])));
  }, {}) : {};
}
function go(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return Jf(t, r);
}
function qf(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Gr(e, r) {
  return r.querySelector("#".concat(e));
}
function Qf(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Gr(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Gr(r, t);
      i && t.removeChild(i);
    };
  var a = qf(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Gr(r, t);
    i && t.removeChild(i);
  };
}
function Zf(e, r) {
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function ed(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var rd = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ro(this, e), x(this, "_moving", !1), x(this, "_moved", !1), x(this, "_initialXY", [0, 0]), x(this, "_startXY", [0, 0]), x(this, "_boundaryValue", 5), x(this, "_rb", null), x(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return to(e, [{
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
      var i = this.getEventInfo(t), o = i.clientXY, u = no(o, 2), v = u[0], s = u[1], c = v - this._startXY[0], l = s - this._startXY[1];
      Math.abs(c) < this._boundaryValue && Math.abs(l) < this._boundaryValue || (this._moved || (this._moved = !0), this._moving = !0, this.current.style.left = Math.min(Math.max(0, this._initialXY[0] + c), window.innerWidth - this.current.offsetWidth) + "px", this.current.style.top = Math.min(Math.max(0, this._initialXY[1] + l), window.innerHeight - this.current.offsetHeight) + "px", (n = this.options) === null || n === void 0 || (a = n.onChange) === null || a === void 0 || a.call(n, "moving"));
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
}(), yo = {
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
}, td = vr, Kr = td("span").classList, oa = Kr && Kr.constructor && Kr.constructor.prototype, mo = oa === Object.prototype ? void 0 : oa, nd = an.forEach, ad = oo, id = ad("forEach"), od = id ? [].forEach : function(r) {
  return nd(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, sa = w, ua = yo, sd = mo, zr = od, ud = Ie, bo = function(e) {
  if (e && e.forEach !== zr) try {
    ud(e, "forEach", zr);
  } catch {
    e.forEach = zr;
  }
};
for (var Wr in ua)
  ua[Wr] && bo(sa[Wr] && sa[Wr].prototype);
bo(sd);
function cd(e, r) {
  var t = k({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
var fe = w, vd = Oe, ld = X, ke = function(e) {
  return vd.slice(0, e.length) === e;
}, $o = function() {
  return ke("Bun/") ? "BUN" : ke("Cloudflare-Workers") ? "CLOUDFLARE" : ke("Deno/") ? "DENO" : ke("Node.js/") ? "NODE" : fe.Bun && typeof Bun.version == "string" ? "BUN" : fe.Deno && typeof Deno.version == "object" ? "DENO" : ld(fe.process) === "process" ? "NODE" : fe.window && fe.document ? "BROWSER" : "REST";
}(), fd = $o, sn = fd === "NODE", dd = O, hd = K, pd = function(e, r, t) {
  try {
    return dd(hd(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, gd = P, yd = function(e) {
  return gd(e) || e === null;
}, md = yd, bd = String, $d = TypeError, wd = function(e) {
  if (md(e)) return e;
  throw new $d("Can't set " + bd(e) + " as a prototype");
}, Sd = pd, Ed = P, Od = Se, Id = wd, un = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = Sd(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return Od(a), Id(i), Ed(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), Td = N.f, Pd = j, Cd = T, ca = Cd("toStringTag"), xe = function(e, r, t) {
  e && !t && (e = e.prototype), e && !Pd(e, ca) && Td(e, ca, { configurable: !0, value: r });
}, va = Ui, xd = N, wo = function(e, r, t) {
  return t.get && va(t.get, r, { getter: !0 }), t.set && va(t.set, r, { setter: !0 }), xd.f(e, r, t);
}, Rd = Y, _d = wo, jd = T, Ad = _, la = jd("species"), So = function(e) {
  var r = Rd(e);
  Ad && r && !r[la] && _d(r, la, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, Ld = lr, Nd = TypeError, cn = function(e, r) {
  if (Ld(r, e)) return e;
  throw new Nd("Incorrect invocation");
}, Md = fo, Dd = fr, kd = TypeError, Fd = function(e) {
  if (Md(e)) return e;
  throw new kd(Dd(e) + " is not a constructor");
}, fa = M, Bd = Fd, Ud = se, Gd = T, Kd = Gd("species"), zd = function(e, r) {
  var t = fa(e).constructor, n;
  return t === void 0 || Ud(n = fa(t)[Kd]) ? r : Bd(n);
}, Wd = ur, Eo = Function.prototype, da = Eo.apply, ha = Eo.call, Vd = typeof Reflect == "object" && Reflect.apply || (Wd ? ha.bind(da) : function() {
  return ha.apply(da, arguments);
}), Hd = O, Oo = Hd([].slice), Yd = TypeError, Xd = function(e, r) {
  if (e < r) throw new Yd("Not enough arguments");
  return e;
}, Jd = Oe, Io = /(?:ipad|iphone|ipod).*applewebkit/i.test(Jd), R = w, qd = Vd, Qd = Ce, pa = E, Zd = j, To = $, ga = qi, eh = Oo, ya = vr, rh = Xd, th = Io, nh = sn, Tt = R.setImmediate, Pt = R.clearImmediate, ah = R.process, Vr = R.Dispatch, ih = R.Function, ma = R.MessageChannel, oh = R.String, Hr = 0, me = {}, ba = "onreadystatechange", we, z, Yr, Xr;
To(function() {
  we = R.location;
});
var vn = function(e) {
  if (Zd(me, e)) {
    var r = me[e];
    delete me[e], r();
  }
}, Jr = function(e) {
  return function() {
    vn(e);
  };
}, $a = function(e) {
  vn(e.data);
}, wa = function(e) {
  R.postMessage(oh(e), we.protocol + "//" + we.host);
};
(!Tt || !Pt) && (Tt = function(r) {
  rh(arguments.length, 1);
  var t = pa(r) ? r : ih(r), n = eh(arguments, 1);
  return me[++Hr] = function() {
    qd(t, void 0, n);
  }, z(Hr), Hr;
}, Pt = function(r) {
  delete me[r];
}, nh ? z = function(e) {
  ah.nextTick(Jr(e));
} : Vr && Vr.now ? z = function(e) {
  Vr.now(Jr(e));
} : ma && !th ? (Yr = new ma(), Xr = Yr.port2, Yr.port1.onmessage = $a, z = Qd(Xr.postMessage, Xr)) : R.addEventListener && pa(R.postMessage) && !R.importScripts && we && we.protocol !== "file:" && !To(wa) ? (z = wa, R.addEventListener("message", $a, !1)) : ba in ya("script") ? z = function(e) {
  ga.appendChild(ya("script"))[ba] = function() {
    ga.removeChild(this), vn(e);
  };
} : z = function(e) {
  setTimeout(Jr(e), 0);
});
var Po = {
  set: Tt,
  clear: Pt
}, Sa = w, sh = _, uh = Object.getOwnPropertyDescriptor, ch = function(e) {
  if (!sh) return Sa[e];
  var r = uh(Sa, e);
  return r && r.value;
}, Co = function() {
  this.head = null, this.tail = null;
};
Co.prototype = {
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
var xo = Co, vh = Oe, lh = /ipad|iphone|ipod/i.test(vh) && typeof Pebble < "u", fh = Oe, dh = /web0s(?!.*chrome)/i.test(fh), ie = w, hh = ch, Ea = Ce, qr = Po.set, ph = xo, gh = Io, yh = lh, mh = dh, Qr = sn, Oa = ie.MutationObserver || ie.WebKitMutationObserver, Ia = ie.document, Ta = ie.process, Fe = ie.Promise, Ct = hh("queueMicrotask"), Q, Zr, et, Be, Pa;
if (!Ct) {
  var Ue = new ph(), Ge = function() {
    var e, r;
    for (Qr && (e = Ta.domain) && e.exit(); r = Ue.get(); ) try {
      r();
    } catch (t) {
      throw Ue.head && Q(), t;
    }
    e && e.enter();
  };
  !gh && !Qr && !mh && Oa && Ia ? (Zr = !0, et = Ia.createTextNode(""), new Oa(Ge).observe(et, { characterData: !0 }), Q = function() {
    et.data = Zr = !Zr;
  }) : !yh && Fe && Fe.resolve ? (Be = Fe.resolve(void 0), Be.constructor = Fe, Pa = Ea(Be.then, Be), Q = function() {
    Pa(Ge);
  }) : Qr ? Q = function() {
    Ta.nextTick(Ge);
  } : (qr = Ea(qr, ie), Q = function() {
    qr(Ge);
  }), Ct = function(e) {
    Ue.head || Q(), Ue.add(e);
  };
}
var bh = Ct, $h = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, ln = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, wh = w, wr = wh.Promise, Sh = w, be = wr, Eh = E, Oh = Zt, Ih = Vt, Th = T, Ca = $o, rt = cr;
be && be.prototype;
var Ph = Th("species"), xt = !1, Ro = Eh(Sh.PromiseRejectionEvent), Ch = Oh("Promise", function() {
  var e = Ih(be), r = e !== String(be);
  if (!r && rt === 66) return !0;
  if (!rt || rt < 51 || !/native code/.test(e)) {
    var t = new be(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[Ph] = n, xt = t.then(function() {
    }) instanceof n, !xt) return !0;
  }
  return !r && (Ca === "BROWSER" || Ca === "DENO") && !Ro;
}), Re = {
  CONSTRUCTOR: Ch,
  REJECTION_EVENT: Ro,
  SUBCLASSING: xt
}, ce = {}, xa = K, xh = TypeError, Rh = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new xh("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = xa(r), this.reject = xa(t);
};
ce.f = function(e) {
  return new Rh(e);
};
var _h = C, ir = sn, G = w, oe = A, Ra = B, _a = un, jh = xe, Ah = So, Lh = K, qe = E, Nh = P, Mh = cn, Dh = zd, _o = Po.set, fn = bh, kh = $h, Fh = ln, Bh = xo, jo = ue, or = wr, dn = Re, Ao = ce, Sr = "Promise", Lo = dn.CONSTRUCTOR, Uh = dn.REJECTION_EVENT, Gh = dn.SUBCLASSING, tt = jo.getterFor(Sr), Kh = jo.set, Z = or && or.prototype, V = or, Ke = Z, No = G.TypeError, Rt = G.document, hn = G.process, _t = Ao.f, zh = _t, Wh = !!(Rt && Rt.createEvent && G.dispatchEvent), Mo = "unhandledrejection", Vh = "rejectionhandled", ja = 0, Do = 1, Hh = 2, pn = 1, ko = 2, ze, Aa, Yh, La, Fo = function(e) {
  var r;
  return Nh(e) && qe(r = e.then) ? r : !1;
}, Bo = function(e, r) {
  var t = r.value, n = r.state === Do, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, u = e.domain, v, s, c;
  try {
    a ? (n || (r.rejection === ko && Jh(r), r.rejection = pn), a === !0 ? v = t : (u && u.enter(), v = a(t), u && (u.exit(), c = !0)), v === e.promise ? o(new No("Promise-chain cycle")) : (s = Fo(v)) ? oe(s, v, i, o) : i(v)) : o(t);
  } catch (l) {
    u && !c && u.exit(), o(l);
  }
}, Uo = function(e, r) {
  e.notified || (e.notified = !0, fn(function() {
    for (var t = e.reactions, n; n = t.get(); )
      Bo(n, e);
    e.notified = !1, r && !e.rejection && Xh(e);
  }));
}, Go = function(e, r, t) {
  var n, a;
  Wh ? (n = Rt.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), G.dispatchEvent(n)) : n = { promise: r, reason: t }, !Uh && (a = G["on" + e]) ? a(n) : e === Mo && kh("Unhandled promise rejection", t);
}, Xh = function(e) {
  oe(_o, G, function() {
    var r = e.facade, t = e.value, n = Na(e), a;
    if (n && (a = Fh(function() {
      ir ? hn.emit("unhandledRejection", t, r) : Go(Mo, r, t);
    }), e.rejection = ir || Na(e) ? ko : pn, a.error))
      throw a.value;
  });
}, Na = function(e) {
  return e.rejection !== pn && !e.parent;
}, Jh = function(e) {
  oe(_o, G, function() {
    var r = e.facade;
    ir ? hn.emit("rejectionHandled", r) : Go(Vh, r, e.value);
  });
}, te = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, ne = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = Hh, Uo(e, !0));
}, jt = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new No("Promise can't be resolved itself");
      var n = Fo(r);
      n ? fn(function() {
        var a = { done: !1 };
        try {
          oe(
            n,
            r,
            te(jt, a, e),
            te(ne, a, e)
          );
        } catch (i) {
          ne(a, i, e);
        }
      }) : (e.value = r, e.state = Do, Uo(e, !1));
    } catch (a) {
      ne({ done: !1 }, a, e);
    }
  }
};
if (Lo && (V = function(r) {
  Mh(this, Ke), Lh(r), oe(ze, this);
  var t = tt(this);
  try {
    r(te(jt, t), te(ne, t));
  } catch (n) {
    ne(t, n);
  }
}, Ke = V.prototype, ze = function(r) {
  Kh(this, {
    type: Sr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new Bh(),
    rejection: !1,
    state: ja,
    value: void 0
  });
}, ze.prototype = Ra(Ke, "then", function(r, t) {
  var n = tt(this), a = _t(Dh(this, V));
  return n.parent = !0, a.ok = qe(r) ? r : !0, a.fail = qe(t) && t, a.domain = ir ? hn.domain : void 0, n.state === ja ? n.reactions.add(a) : fn(function() {
    Bo(a, n);
  }), a.promise;
}), Aa = function() {
  var e = new ze(), r = tt(e);
  this.promise = e, this.resolve = te(jt, r), this.reject = te(ne, r);
}, Ao.f = _t = function(e) {
  return e === V || e === Yh ? new Aa(e) : zh(e);
}, qe(or) && Z !== Object.prototype)) {
  La = Z.then, Gh || Ra(Z, "then", function(r, t) {
    var n = this;
    return new V(function(a, i) {
      oe(La, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete Z.constructor;
  } catch {
  }
  _a && _a(Z, Ke);
}
_h({ global: !0, constructor: !0, wrap: !0, forced: Lo }, {
  Promise: V
});
jh(V, Sr, !1);
Ah(Sr);
var _e = {}, qh = T, Qh = _e, Zh = qh("iterator"), ep = Array.prototype, rp = function(e) {
  return e !== void 0 && (Qh.Array === e || ep[Zh] === e);
}, tp = gr, Ma = zt, np = se, ap = _e, ip = T, op = ip("iterator"), Ko = function(e) {
  if (!np(e)) return Ma(e, op) || Ma(e, "@@iterator") || ap[tp(e)];
}, sp = A, up = K, cp = M, vp = fr, lp = Ko, fp = TypeError, dp = function(e, r) {
  var t = arguments.length < 2 ? lp(e) : r;
  if (up(t)) return cp(sp(t, e));
  throw new fp(vp(e) + " is not iterable");
}, hp = A, Da = M, pp = zt, gp = function(e, r, t) {
  var n, a;
  Da(e);
  try {
    if (n = pp(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = hp(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return Da(n), t;
}, yp = Ce, mp = A, bp = M, $p = fr, wp = rp, Sp = mr, ka = lr, Ep = dp, Op = Ko, Fa = gp, Ip = TypeError, Qe = function(e, r) {
  this.stopped = e, this.result = r;
}, Ba = Qe.prototype, Er = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), u = !!(t && t.INTERRUPTED), v = yp(r, n), s, c, l, f, d, h, p, m = function(g) {
    return s && Fa(s, "normal", g), new Qe(!0, g);
  }, y = function(g) {
    return a ? (bp(g), u ? v(g[0], g[1], m) : v(g[0], g[1])) : u ? v(g, m) : v(g);
  };
  if (i)
    s = e.iterator;
  else if (o)
    s = e;
  else {
    if (c = Op(e), !c) throw new Ip($p(e) + " is not iterable");
    if (wp(c)) {
      for (l = 0, f = Sp(e); f > l; l++)
        if (d = y(e[l]), d && ka(Ba, d)) return d;
      return new Qe(!1);
    }
    s = Ep(e, c);
  }
  for (h = i ? e.next : s.next; !(p = mp(h, s)).done; ) {
    try {
      d = y(p.value);
    } catch (g) {
      Fa(s, "throw", g);
    }
    if (typeof d == "object" && d && ka(Ba, d)) return d;
  }
  return new Qe(!1);
}, Tp = T, zo = Tp("iterator"), Wo = !1;
try {
  var Pp = 0, Ua = {
    next: function() {
      return { done: !!Pp++ };
    },
    return: function() {
      Wo = !0;
    }
  };
  Ua[zo] = function() {
    return this;
  }, Array.from(Ua, function() {
    throw 2;
  });
} catch {
}
var Vo = function(e, r) {
  try {
    if (!r && !Wo) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[zo] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, Cp = wr, xp = Vo, Rp = Re.CONSTRUCTOR, Ho = Rp || !xp(function(e) {
  Cp.all(e).then(void 0, function() {
  });
}), _p = C, jp = A, Ap = K, Lp = ce, Np = ln, Mp = Er, Dp = Ho;
_p({ target: "Promise", stat: !0, forced: Dp }, {
  all: function(r) {
    var t = this, n = Lp.f(t), a = n.resolve, i = n.reject, o = Np(function() {
      var u = Ap(t.resolve), v = [], s = 0, c = 1;
      Mp(r, function(l) {
        var f = s++, d = !1;
        c++, jp(u, t, l).then(function(h) {
          d || (d = !0, v[f] = h, --c || a(v));
        }, i);
      }), --c || a(v);
    });
    return o.error && i(o.value), n.promise;
  }
});
var kp = C, Fp = Re.CONSTRUCTOR, At = wr, Bp = Y, Up = E, Gp = B, Ga = At && At.prototype;
kp({ target: "Promise", proto: !0, forced: Fp, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (Up(At)) {
  var Ka = Bp("Promise").prototype.catch;
  Ga.catch !== Ka && Gp(Ga, "catch", Ka, { unsafe: !0 });
}
var Kp = C, zp = A, Wp = K, Vp = ce, Hp = ln, Yp = Er, Xp = Ho;
Kp({ target: "Promise", stat: !0, forced: Xp }, {
  race: function(r) {
    var t = this, n = Vp.f(t), a = n.reject, i = Hp(function() {
      var o = Wp(t.resolve);
      Yp(r, function(u) {
        zp(o, t, u).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var Jp = C, qp = ce, Qp = Re.CONSTRUCTOR;
Jp({ target: "Promise", stat: !0, forced: Qp }, {
  reject: function(r) {
    var t = qp.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var Zp = M, eg = P, rg = ce, tg = function(e, r) {
  if (Zp(e), eg(r) && r.constructor === e) return r;
  var t = rg.f(e), n = t.resolve;
  return n(r), t.promise;
}, ng = C, ag = Y, ig = Re.CONSTRUCTOR, og = tg;
ag("Promise");
ng({ target: "Promise", stat: !0, forced: ig }, {
  resolve: function(r) {
    return og(this, r);
  }
});
var de = {
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
}, gn = { exports: {} }, ae = typeof Reflect == "object" ? Reflect : null, za = ae && typeof ae.apply == "function" ? ae.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, Ze;
ae && typeof ae.ownKeys == "function" ? Ze = ae.ownKeys : Object.getOwnPropertySymbols ? Ze = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : Ze = function(r) {
  return Object.getOwnPropertyNames(r);
};
function sg(e) {
  console && console.warn && console.warn(e);
}
var Yo = Number.isNaN || function(r) {
  return r !== r;
};
function b() {
  b.init.call(this);
}
gn.exports = b;
gn.exports.once = lg;
b.EventEmitter = b;
b.prototype._events = void 0;
b.prototype._eventsCount = 0;
b.prototype._maxListeners = void 0;
var Wa = 10;
function Or(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(b, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Wa;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Yo(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Wa = e;
  }
});
b.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
b.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || Yo(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function Xo(e) {
  return e._maxListeners === void 0 ? b.defaultMaxListeners : e._maxListeners;
}
b.prototype.getMaxListeners = function() {
  return Xo(this);
};
b.prototype.emit = function(r) {
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
    var u = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
    throw u.context = o, u;
  }
  var v = i[r];
  if (v === void 0)
    return !1;
  if (typeof v == "function")
    za(v, this, t);
  else
    for (var s = v.length, c = es(v, s), n = 0; n < s; ++n)
      za(c[n], this, t);
  return !0;
};
function Jo(e, r, t, n) {
  var a, i, o;
  if (Or(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = Xo(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = r, u.count = o.length, sg(u);
  }
  return e;
}
b.prototype.addListener = function(r, t) {
  return Jo(this, r, t, !1);
};
b.prototype.on = b.prototype.addListener;
b.prototype.prependListener = function(r, t) {
  return Jo(this, r, t, !0);
};
function ug() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function qo(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = ug.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
b.prototype.once = function(r, t) {
  return Or(t), this.on(r, qo(this, r, t)), this;
};
b.prototype.prependOnceListener = function(r, t) {
  return Or(t), this.prependListener(r, qo(this, r, t)), this;
};
b.prototype.removeListener = function(r, t) {
  var n, a, i, o, u;
  if (Or(t), a = this._events, a === void 0)
    return this;
  if (n = a[r], n === void 0)
    return this;
  if (n === t || n.listener === t)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete a[r], a.removeListener && this.emit("removeListener", r, n.listener || t));
  else if (typeof n != "function") {
    for (i = -1, o = n.length - 1; o >= 0; o--)
      if (n[o] === t || n[o].listener === t) {
        u = n[o].listener, i = o;
        break;
      }
    if (i < 0)
      return this;
    i === 0 ? n.shift() : cg(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, u || t);
  }
  return this;
};
b.prototype.off = b.prototype.removeListener;
b.prototype.removeAllListeners = function(r) {
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
function Qo(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? vg(a) : es(a, a.length);
}
b.prototype.listeners = function(r) {
  return Qo(this, r, !0);
};
b.prototype.rawListeners = function(r) {
  return Qo(this, r, !1);
};
b.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Zo.call(e, r);
};
b.prototype.listenerCount = Zo;
function Zo(e) {
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
b.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Ze(this._events) : [];
};
function es(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function cg(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function vg(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function lg(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    rs(e, r, i, { once: !0 }), r !== "error" && fg(e, a, { once: !0 });
  });
}
function fg(e, r, t) {
  typeof e.on == "function" && rs(e, "error", r, t);
}
function rs(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var dg = gn.exports;
const hg = /* @__PURE__ */ Is(dg);
var sr = function() {
  return sr = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, sr.apply(this, arguments);
};
function Va(e, r, t, n) {
  function a(i) {
    return i instanceof t ? i : new t(function(o) {
      o(i);
    });
  }
  return new (t || (t = Promise))(function(i, o) {
    function u(c) {
      try {
        s(n.next(c));
      } catch (l) {
        o(l);
      }
    }
    function v(c) {
      try {
        s(n.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function s(c) {
      c.done ? i(c.value) : a(c.value).then(u, v);
    }
    s((n = n.apply(e, [])).next());
  });
}
function Ha(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, a, i, o;
  return o = { next: u(0), throw: u(1), return: u(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function u(s) {
    return function(c) {
      return v([s, c]);
    };
  }
  function v(s) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, s[0] && (t = 0)), t; ) try {
      if (n = 1, a && (i = s[0] & 2 ? a.return : s[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, s[1])).done) return i;
      switch (a = 0, i && (s = [s[0] & 2, i.value]), s[0]) {
        case 0:
        case 1:
          i = s;
          break;
        case 4:
          return t.label++, { value: s[1], done: !1 };
        case 5:
          t.label++, a = s[1], s = [0];
          continue;
        case 7:
          s = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            t = 0;
            continue;
          }
          if (s[0] === 3 && (!i || s[1] > i[0] && s[1] < i[3])) {
            t.label = s[1];
            break;
          }
          if (s[0] === 6 && t.label < i[1]) {
            t.label = i[1], i = s;
            break;
          }
          if (i && t.label < i[2]) {
            t.label = i[2], t.ops.push(s);
            break;
          }
          i[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      s = r.call(e, t);
    } catch (c) {
      s = [6, c], a = 0;
    } finally {
      n = i = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}
var pg = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new hg(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
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
      return Va(this, void 0, void 0, function() {
        var t, n;
        return Ha(this, function(a) {
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
        t.sendMessage({ id: o, method: r, payload: n, type: "request" }), t.log("Trigger ".concat(r, " | ").concat(o), n), t._emitter.once("response_".concat(o), function(u) {
          i(u.payload), t.log("Receive ".concat(r, " | ").concat(o), e.jsonStringifyData(u));
        });
      });
    }, e.prototype.createId = function() {
      return "".concat(this.options.name, "_").concat(this._traceId++);
    }, e.prototype.createService = function() {
      var r = this;
      this._emitter.on(this.options.topic, function(t) {
        return Va(r, void 0, void 0, function() {
          var n, a, i, o, u;
          return Ha(this, function(v) {
            switch (v.label) {
              case 0:
                return n = t.id, a = t.payload, i = t.method, o = this._methods.get(i), o ? [4, e.runHandler(function() {
                  return o.apply(void 0, a);
                })] : [3, 2];
              case 1:
                return u = v.sent(), this.sendMessage({ id: n, method: i, payload: u, type: "response" }), [3, 3];
              case 2:
                this.sendMessage({
                  id: n,
                  method: i,
                  payload: { error: "No found method in service" },
                  type: "response"
                }), v.label = 3;
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
      var t = this.options, n = t.sender, a = t.origin, i = t.topic, o = e.jsonStringifyData(sr(sr({}, r), { topic: i }));
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
        var u = (/* @__PURE__ */ new Date()).toISOString(), v = "[RPC] [".concat(u, "] [").concat(o, "] ").concat(r);
        console.groupCollapsed(v), t != null && t.length && console.info.apply(console, t), console.groupEnd();
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
), gg = /* @__PURE__ */ function() {
  function e() {
    ro(this, e), x(this, "appConfig", {}), x(this, "touchpoint", null), x(this, "appProps", null), x(this, "context", {}), x(this, "participantName", "");
  }
  return to(e, [{
    key: "setAppConfig",
    value: function(t) {
      var n, a = (t == null ? void 0 : t.styles) || {};
      return this.appConfig = k(k(k({}, this.appConfig), t), {}, {
        styles: Object.keys(a).length ? k(k({}, (n = this.appConfig) === null || n === void 0 ? void 0 : n.styles), a) : {}
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
const W = new gg(), yg = '@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}';
var mg = function(r) {
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
  return cd(t, {
    removeEmptyString: !0
  });
}, bg = "talkdesk-chat-widget-style";
function $g(e) {
  var r, t, n, a, i = e == null ? void 0 : e.config, o = i ? ed(i, {}) : e == null ? void 0 : e.widgetSettings, u = {};
  if (o != null && (r = o.appearance) !== null && r !== void 0 && (r = r.theme) !== null && r !== void 0 && r.brandColor) {
    var v, s;
    u.chatThemeColor = o == null || (v = o.appearance) === null || v === void 0 ? void 0 : v.theme.brandColor, u.chatHoverThemeColor = o == null || (s = o.appearance) === null || s === void 0 ? void 0 : s.theme.brandColor;
  }
  if (o != null && (t = o.appearance) !== null && t !== void 0 && (t = t.launcher) !== null && t !== void 0 && t.color) {
    var c, l;
    u.chatLauncherColor = o == null || (c = o.appearance) === null || c === void 0 || (c = c.launcher) === null || c === void 0 ? void 0 : c.color, u.chatHoverLauncherColor = o == null || (l = o.appearance) === null || l === void 0 || (l = l.launcher) === null || l === void 0 ? void 0 : l.color;
  }
  if (o != null && (n = o.appearance) !== null && n !== void 0 && (n = n.launcher) !== null && n !== void 0 && n.iconUrl) {
    var f;
    u.chatIcon = o == null || (f = o.appearance) === null || f === void 0 || (f = f.launcher) === null || f === void 0 ? void 0 : f.iconUrl;
  }
  return o != null && (a = o.appearance) !== null && a !== void 0 && (a = a.launcher) !== null && a !== void 0 && a.shadow && (u.chatLauncherShadow = o.appearance.launcher.shadow), u;
}
function wg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return mg(k(k({}, $g(r)), e));
}
function Sg(e) {
  var r = [];
  return r.push(Qf(yg, bg, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function Eg(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = wg(r, t), a = Object.keys(n);
  if (a.length)
    return go(e, n);
}
function Og(e, r) {
  var t = function() {
    go(e, {
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
var Ya = "tdw-widget-wrapper";
function Ig(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = Ya, a.setAttribute("data-".concat(Ya), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      Wl(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var Tg = A, Pg = j, Cg = lr, xg = Yi, Xa = RegExp.prototype, Rg = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in Xa) && !Pg(e, "flags") && Cg(Xa, e) ? Tg(xg, e) : r;
}, _g = dr.PROPER, jg = B, Ag = M, Ja = Pe, Lg = $, Ng = Rg, yn = "toString", ts = RegExp.prototype, ns = ts[yn], Mg = Lg(function() {
  return ns.call({ source: "a", flags: "b" }) !== "/a/b";
}), Dg = _g && ns.name !== yn;
(Mg || Dg) && jg(ts, yn, function() {
  var r = Ag(this), t = Ja(r.source), n = Ja(Ng(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var kg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';
function Fg() {
  var e = document.createElement("div");
  e.className = "tdw-widget-trigger-animate", e.innerHTML = kg;
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
var qa = "talkdesk-chat-widget-trigger";
function Bg(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = Fg(), a = document.createElement("button");
  a.id = qa, a.className = "tdw-widget-trigger", a.ariaLabel = "Open chat widget", t && a.setAttribute("data-preview", "");
  var i = null, o = null, u = function() {
    var m;
    (m = o) === null || m === void 0 || m.destroy(), o = null;
  }, v = function() {
    o || (o = new rd(a, {
      onClick: function() {
      }
    }));
  }, s = function() {
    document.getElementById(qa) || (e.appendChild(a), a.appendChild(n.element), a.onclick = function() {
    });
  }, c = function() {
    s(), a.style.display = "";
  }, l = function() {
    a.style.display = "none";
  }, f = function(m) {
    var y = m.enablePointMoveTriggerButton, g = m.themes, S = g === void 0 ? {} : g;
    y && v(), a.setAttribute("data-has-chat-icon", S != null && S["--chat-icon"] ? "yes" : "no");
  }, d = function() {
    u(), a.removeChild(n.element), n.destroy(), a.remove();
  }, h = function(m) {
    m > 0 ? (i || (i = document.createElement("span"), i.className = "tdw-widget-trigger-badge ".concat(m > 9 ? "tdw-widget-trigger-badge-more" : ""), i.ariaLabel = "new message indicator", a.appendChild(i)), i.textContent = m > 99 ? "99+" : m.toString()) : i && (i.remove(), i = null);
  };
  return {
    open: c,
    close: l,
    update: f,
    destroy: d,
    setBadge: h
  };
}
var Ug = TypeError, Gg = 9007199254740991, Kg = function(e) {
  if (e > Gg) throw Ug("Maximum allowed index exceeded");
  return e;
}, zg = _, Wg = N, Vg = hr, Hg = function(e, r, t) {
  zg ? Wg.f(e, r, Vg(0, t)) : e[r] = t;
}, Yg = C, Xg = $, Jg = so, qg = P, Qg = Ee, Zg = mr, Qa = Kg, Za = Hg, e0 = ho, r0 = on, t0 = T, n0 = cr, as = t0("isConcatSpreadable"), a0 = n0 >= 51 || !Xg(function() {
  var e = [];
  return e[as] = !1, e.concat()[0] !== e;
}), i0 = function(e) {
  if (!qg(e)) return !1;
  var r = e[as];
  return r !== void 0 ? !!r : Jg(e);
}, o0 = !a0 || !r0("concat");
Yg({ target: "Array", proto: !0, arity: 1, forced: o0 }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = Qg(this), n = e0(t, 0), a = 0, i, o, u, v, s;
    for (i = -1, u = arguments.length; i < u; i++)
      if (s = i === -1 ? t : arguments[i], i0(s))
        for (v = Zg(s), Qa(a + v), o = 0; o < v; o++, a++) o in s && Za(n, a, s[o]);
      else
        Qa(a + 1), Za(n, a++, s);
    return n.length = a, n;
  }
});
var s0 = C, u0 = an.filter, c0 = on, v0 = c0("filter");
s0({ target: "Array", proto: !0, forced: !v0 }, {
  filter: function(r) {
    return u0(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var is = `	
\v\f\r                　\u2028\u2029\uFEFF`, l0 = O, f0 = Se, d0 = Pe, Lt = is, ei = l0("".replace), h0 = RegExp("^[" + Lt + "]+"), p0 = RegExp("(^|[^" + Lt + "])[" + Lt + "]+$"), nt = function(e) {
  return function(r) {
    var t = d0(f0(r));
    return e & 1 && (t = ei(t, h0, "")), e & 2 && (t = ei(t, p0, "$1")), t;
  };
}, g0 = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: nt(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: nt(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: nt(3)
}, y0 = dr.PROPER, m0 = $, ri = is, ti = "​᠎", b0 = function(e) {
  return m0(function() {
    return !!ri[e]() || ti[e]() !== ti || y0 && ri[e].name !== e;
  });
}, $0 = C, w0 = g0.trim, S0 = b0;
$0({ target: "String", proto: !0, forced: S0("trim") }, {
  trim: function() {
    return w0(this);
  }
});
function at(e) {
  try {
    return !isNaN(+e);
  } catch {
    return !1;
  }
}
function E0(e) {
  if (!e) return !1;
  try {
    var r = e.toString().split(".").map(function(o) {
      return o.trim();
    }).filter(Boolean);
    if (r.length !== 3) return !1;
    var t = no(r, 3), n = t[0], a = t[1], i = t[2];
    return at(n) && at(a) && at(i);
  } catch {
    return !1;
  }
}
var O0 = T, I0 = br, T0 = N.f, Nt = O0("unscopables"), Mt = Array.prototype;
Mt[Nt] === void 0 && T0(Mt, Nt, {
  configurable: !0,
  value: I0(null)
});
var P0 = function(e) {
  Mt[Nt][e] = !0;
}, C0 = $, x0 = !C0(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), R0 = j, _0 = E, j0 = Ee, A0 = Ht, L0 = x0, ni = A0("IE_PROTO"), Dt = Object, N0 = Dt.prototype, os = L0 ? Dt.getPrototypeOf : function(e) {
  var r = j0(e);
  if (R0(r, ni)) return r[ni];
  var t = r.constructor;
  return _0(t) && r instanceof t ? t.prototype : r instanceof Dt ? N0 : null;
}, M0 = $, D0 = E, k0 = P, ai = os, F0 = B, B0 = T, kt = B0("iterator"), ss = !1, H, it, ot;
[].keys && (ot = [].keys(), "next" in ot ? (it = ai(ai(ot)), it !== Object.prototype && (H = it)) : ss = !0);
var U0 = !k0(H) || M0(function() {
  var e = {};
  return H[kt].call(e) !== e;
});
U0 && (H = {});
D0(H[kt]) || F0(H, kt, function() {
  return this;
});
var us = {
  IteratorPrototype: H,
  BUGGY_SAFARI_ITERATORS: ss
}, G0 = us.IteratorPrototype, K0 = br, z0 = hr, W0 = xe, V0 = _e, H0 = function() {
  return this;
}, Y0 = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = K0(G0, { next: z0(+!n, t) }), W0(e, a, !1), V0[a] = H0, e;
}, X0 = C, J0 = A, cs = dr, q0 = E, Q0 = Y0, ii = os, oi = un, Z0 = xe, ey = Ie, st = B, ry = T, ty = _e, vs = us, ny = cs.PROPER, ay = cs.CONFIGURABLE, si = vs.IteratorPrototype, We = vs.BUGGY_SAFARI_ITERATORS, he = ry("iterator"), ui = "keys", pe = "values", ci = "entries", iy = function() {
  return this;
}, mn = function(e, r, t, n, a, i, o) {
  Q0(t, r, n);
  var u = function(y) {
    if (y === a && f) return f;
    if (!We && y && y in c) return c[y];
    switch (y) {
      case ui:
        return function() {
          return new t(this, y);
        };
      case pe:
        return function() {
          return new t(this, y);
        };
      case ci:
        return function() {
          return new t(this, y);
        };
    }
    return function() {
      return new t(this);
    };
  }, v = r + " Iterator", s = !1, c = e.prototype, l = c[he] || c["@@iterator"] || a && c[a], f = !We && l || u(a), d = r === "Array" && c.entries || l, h, p, m;
  if (d && (h = ii(d.call(new e())), h !== Object.prototype && h.next && (ii(h) !== si && (oi ? oi(h, si) : q0(h[he]) || st(h, he, iy)), Z0(h, v, !0))), ny && a === pe && l && l.name !== pe && (ay ? ey(c, "name", pe) : (s = !0, f = function() {
    return J0(l, this);
  })), a)
    if (p = {
      values: u(pe),
      keys: i ? f : u(ui),
      entries: u(ci)
    }, o) for (m in p)
      (We || s || !(m in c)) && st(c, m, p[m]);
    else X0({ target: r, proto: !0, forced: We || s }, p);
  return c[he] !== f && st(c, he, f, { name: a }), ty[r] = f, p;
}, bn = function(e, r) {
  return { value: e, done: r };
}, oy = J, $n = P0, vi = _e, ls = ue, sy = N.f, uy = mn, Ve = bn, cy = _, fs = "Array Iterator", vy = ls.set, ly = ls.getterFor(fs), fy = uy(Array, "Array", function(e, r) {
  vy(this, {
    type: fs,
    target: oy(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = ly(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, Ve(void 0, !0);
  switch (e.kind) {
    case "keys":
      return Ve(t, !1);
    case "values":
      return Ve(r[t], !1);
  }
  return Ve([t, r[t]], !1);
}, "values"), li = vi.Arguments = vi.Array;
$n("keys");
$n("values");
$n("entries");
if (cy && li.name !== "values") try {
  sy(li, "name", { value: "values" });
} catch {
}
var ds = { exports: {} }, hs = {}, dy = X, hy = J, ps = yr.f, py = Oo, gs = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], gy = function(e) {
  try {
    return ps(e);
  } catch {
    return py(gs);
  }
};
hs.f = function(r) {
  return gs && dy(r) === "Window" ? gy(r) : ps(hy(r));
};
var yy = $, my = yy(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), by = $, $y = P, wy = X, fi = my, er = Object.isExtensible, Sy = by(function() {
  er(1);
}), Ey = Sy || fi ? function(r) {
  return !$y(r) || fi && wy(r) === "ArrayBuffer" ? !1 : er ? er(r) : !0;
} : er, Oy = $, Iy = !Oy(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), Ty = C, Py = O, Cy = pr, xy = P, wn = j, Ry = N.f, di = yr, _y = hs, Sn = Ey, jy = Gt, Ay = Iy, ys = !1, F = jy("meta"), Ly = 0, En = function(e) {
  Ry(e, F, { value: {
    objectID: "O" + Ly++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, Ny = function(e, r) {
  if (!xy(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!wn(e, F)) {
    if (!Sn(e)) return "F";
    if (!r) return "E";
    En(e);
  }
  return e[F].objectID;
}, My = function(e, r) {
  if (!wn(e, F)) {
    if (!Sn(e)) return !0;
    if (!r) return !1;
    En(e);
  }
  return e[F].weakData;
}, Dy = function(e) {
  return Ay && ys && Sn(e) && !wn(e, F) && En(e), e;
}, ky = function() {
  Fy.enable = function() {
  }, ys = !0;
  var e = di.f, r = Py([].splice), t = {};
  t[F] = 1, e(t).length && (di.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === F) {
        r(a, i, 1);
        break;
      }
    return a;
  }, Ty({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: _y.f
  }));
}, Fy = ds.exports = {
  enable: ky,
  fastKey: Ny,
  getWeakData: My,
  onFreeze: Dy
};
Cy[F] = !0;
var ms = ds.exports, By = E, Uy = P, hi = un, Gy = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    hi && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    By(n = r.constructor) && n !== t && Uy(a = n.prototype) && a !== t.prototype && hi(e, a), e
  );
}, Ky = C, zy = w, Wy = O, pi = Zt, Vy = B, Hy = ms, Yy = Er, Xy = cn, Jy = E, qy = se, ut = P, ct = $, Qy = Vo, Zy = xe, em = Gy, rm = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = zy[e], u = o && o.prototype, v = o, s = {}, c = function(y) {
    var g = Wy(u[y]);
    Vy(
      u,
      y,
      y === "add" ? function(I) {
        return g(this, I === 0 ? 0 : I), this;
      } : y === "delete" ? function(S) {
        return a && !ut(S) ? !1 : g(this, S === 0 ? 0 : S);
      } : y === "get" ? function(I) {
        return a && !ut(I) ? void 0 : g(this, I === 0 ? 0 : I);
      } : y === "has" ? function(I) {
        return a && !ut(I) ? !1 : g(this, I === 0 ? 0 : I);
      } : function(I, Os) {
        return g(this, I === 0 ? 0 : I, Os), this;
      }
    );
  }, l = pi(
    e,
    !Jy(o) || !(a || u.forEach && !ct(function() {
      new o().entries().next();
    }))
  );
  if (l)
    v = t.getConstructor(r, e, n, i), Hy.enable();
  else if (pi(e, !0)) {
    var f = new v(), d = f[i](a ? {} : -0, 1) !== f, h = ct(function() {
      f.has(1);
    }), p = Qy(function(y) {
      new o(y);
    }), m = !a && ct(function() {
      for (var y = new o(), g = 5; g--; ) y[i](g, g);
      return !y.has(-0);
    });
    p || (v = r(function(y, g) {
      Xy(y, u);
      var S = em(new o(), y, v);
      return qy(g) || Yy(g, S[i], { that: S, AS_ENTRIES: n }), S;
    }), v.prototype = u, u.constructor = v), (h || m) && (c("delete"), c("has"), n && c("get")), (m || d) && c(i), a && u.clear && delete u.clear;
  }
  return s[e] = v, Ky({ global: !0, constructor: !0, forced: v !== o }, s), Zy(v, e), a || t.setStrong(v, e, n), v;
}, tm = B, nm = function(e, r, t) {
  for (var n in r) tm(e, n, r[n], t);
  return e;
}, gi = br, am = wo, yi = nm, im = Ce, om = cn, sm = se, um = Er, cm = mn, He = bn, vm = So, ge = _, mi = ms.fastKey, bs = ue, bi = bs.set, vt = bs.getterFor, lm = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(s, c) {
      om(s, i), bi(s, {
        type: r,
        index: gi(null),
        first: void 0,
        last: void 0,
        size: 0
      }), ge || (s.size = 0), sm(c) || um(c, s[n], { that: s, AS_ENTRIES: t });
    }), i = a.prototype, o = vt(r), u = function(s, c, l) {
      var f = o(s), d = v(s, c), h, p;
      return d ? d.value = l : (f.last = d = {
        index: p = mi(c, !0),
        key: c,
        value: l,
        previous: h = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), h && (h.next = d), ge ? f.size++ : s.size++, p !== "F" && (f.index[p] = d)), s;
    }, v = function(s, c) {
      var l = o(s), f = mi(c), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === c) return d;
    };
    return yi(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var c = this, l = o(c), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = gi(null), ge ? l.size = 0 : c.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      delete: function(s) {
        var c = this, l = o(c), f = v(c, s);
        if (f) {
          var d = f.next, h = f.previous;
          delete l.index[f.index], f.removed = !0, h && (h.next = d), d && (d.previous = h), l.first === f && (l.first = d), l.last === f && (l.last = h), ge ? l.size-- : c.size--;
        }
        return !!f;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function(c) {
        for (var l = o(this), f = im(c, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(c) {
        return !!v(this, c);
      }
    }), yi(i, t ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function(c) {
        var l = v(this, c);
        return l && l.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function(c, l) {
        return u(this, c === 0 ? 0 : c, l);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function(c) {
        return u(this, c = c === 0 ? 0 : c, c);
      }
    }), ge && am(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = vt(r), i = vt(n);
    cm(e, r, function(o, u) {
      bi(this, {
        type: n,
        target: o,
        state: a(o),
        kind: u,
        last: void 0
      });
    }, function() {
      for (var o = i(this), u = o.kind, v = o.last; v && v.removed; ) v = v.previous;
      return !o.target || !(o.last = v = v ? v.next : o.state.first) ? (o.target = void 0, He(void 0, !0)) : He(u === "keys" ? v.key : u === "values" ? v.value : [v.key, v.value], !1);
    }, t ? "entries" : "values", !t, !0), vm(r);
  }
}, fm = rm, dm = lm;
fm("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, dm);
var On = O, hm = qt, pm = Pe, gm = Se, ym = On("".charAt), $i = On("".charCodeAt), mm = On("".slice), wi = function(e) {
  return function(r, t) {
    var n = pm(gm(r)), a = hm(t), i = n.length, o, u;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = $i(n, a), o < 55296 || o > 56319 || a + 1 === i || (u = $i(n, a + 1)) < 56320 || u > 57343 ? e ? ym(n, a) : o : e ? mm(n, a, a + 2) : (o - 55296 << 10) + (u - 56320) + 65536);
  };
}, bm = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: wi(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: wi(!0)
}, $m = bm.charAt, wm = Pe, $s = ue, Sm = mn, Si = bn, ws = "String Iterator", Em = $s.set, Om = $s.getterFor(ws);
Sm(String, "String", function(e) {
  Em(this, {
    type: ws,
    string: wm(e),
    index: 0
  });
}, function() {
  var r = Om(this), t = r.string, n = r.index, a;
  return n >= t.length ? Si(void 0, !0) : (a = $m(t, n), r.index += a.length, Si(a, !1));
});
var Ei = w, Ss = yo, Im = mo, ye = fy, Oi = Ie, Tm = xe, Pm = T, lt = Pm("iterator"), ft = ye.values, Es = function(e, r) {
  if (e) {
    if (e[lt] !== ft) try {
      Oi(e, lt, ft);
    } catch {
      e[lt] = ft;
    }
    if (Tm(e, r, !0), Ss[r]) {
      for (var t in ye)
        if (e[t] !== ye[t]) try {
          Oi(e, t, ye[t]);
        } catch {
          e[t] = ye[t];
        }
    }
  }
};
for (var dt in Ss)
  Es(Ei[dt] && Ei[dt].prototype, dt);
Es(Im, "DOMTokenList");
function Cm(e) {
  var r = document.createElement("div");
  r.id = e, r.className = "tdw-widget";
  var t = /* @__PURE__ */ new Map(), n = function() {
    r.remove(), t.forEach(function(c) {
      return c.destroy();
    }), t.clear();
  }, a = function(c, l) {
    t.set(c, l), r.appendChild(l.element);
  }, i = function(c) {
    var l = t.get(c);
    l && (l.destroy(), t.delete(c));
  }, o = function() {
    r.setAttribute("aria-hidden", "false");
  }, u = function() {
    r.setAttribute("aria-hidden", "true");
  }, v = function() {
    return !!document.getElementById(e);
  };
  return {
    element: r,
    append: a,
    remove: i,
    show: o,
    hide: u,
    isMounted: v,
    destroy: n
  };
}
function xm() {
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
function Rm(e) {
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
var _m = "talkdesk-chat-widget", Ii = "loading-element", jm = "iframe-element", Am = function() {
  var r = W.getAllConfig(), t = r.touchpoint, n = r.appProps, a = n != null && n.proxyHost ? "//".concat(n.proxyHost).concat(zc.tdChatSdk) : "", i = (t == null ? void 0 : t.release_version) || "", o = E0(i);
  return "".concat(a || "https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/").concat(o ? i : "latest", "/index.html?touchpointId=").concat(n == null ? void 0 : n.touchpointId);
}, Lm = function() {
  return "".concat("https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/latest/preview.html");
};
function Nm(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = Cm(_m), a = Rm(function() {
    n.remove(Ii);
  });
  n.append(Ii, xm()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? Lm() : Am(), n.append(jm, a), r && a.element.contentWindow && r(a.element.contentWindow));
  }, o = function() {
    i();
  }, u = function(d) {
    var h = d.height;
    h && (n.element.style.height = typeof h == "string" ? h : "".concat(h, "px"));
  }, v = function() {
    i(), n.show();
  }, s = function() {
    n.hide();
  }, c = function() {
    n.destroy();
  }, l = function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, h = d.enableResponsiveLayout, p = h === void 0 ? !1 : h;
    p ? n.element.setAttribute("data-responsive-layout", "true") : n.element.removeAttribute("data-responsive-layout");
  };
  return {
    initInBackground: o,
    resize: u,
    open: v,
    close: s,
    destroy: c,
    update: l
  };
}
function Mm(e) {
  var r = document.getElementById(e);
  if (!r)
    throw new Error('The element not exist, element id = "#'.concat(e, '"'));
  var t = [], n = null, a = !1, i = null, o = null, u = Ig({
    root: r,
    isPreview: !0
  }), v = Bg(u.element, function() {
  }, !0), s = Nm(u.element, function(d) {
    n = new pg({
      name: "SDK",
      sender: d,
      topic: de.Topic,
      debug: !1
    }), n.register(de.Methods.GetAllConfig, function() {
      var h = W.getAllConfig();
      return h;
    }), n.register(de.Methods.PreviewReady, function() {
      var h;
      a = !0, (h = n) === null || h === void 0 || h.trigger(de.Methods.UpdatePreviewConfig, i);
    });
  }, !0), c = function() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    W.setAppConfig(h), t.push(Sg(u.element)), o || (o = Og(u.element)), s.open(), v.open();
  }, l = function() {
    var h;
    v.destroy(), s.destroy(), u.destroy(), t.forEach(function(p) {
      return p();
    }), t.length = 0, i = null, W.clearAll(), (h = o) === null || h === void 0 || h(), o = null;
  }, f = function(h) {
    var p;
    W.setTouchpoint({
      active: !0,
      config: Zf(h == null ? void 0 : h.widgetSettings),
      account_id: ""
    }), W.setParticipantName(h.userName || "");
    var m = Eg(u.element, (p = W.getAllConfig()) === null || p === void 0 || (p = p.appConfig) === null || p === void 0 ? void 0 : p.styles, h);
    if (v.update({
      themes: m
    }), a) {
      var y;
      (y = n) === null || y === void 0 || y.trigger(de.Methods.UpdatePreviewConfig, h);
    } else
      i = h;
  };
  return {
    init: c,
    destroy: l,
    updateConfig: f
  };
}
function Dm(e) {
  return Mm(e);
}
export {
  Dm as default
};
//# sourceMappingURL=talkdeskchatpreviewsdk.es.js.map
