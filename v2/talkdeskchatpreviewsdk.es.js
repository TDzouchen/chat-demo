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
var Re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ys(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ve = function(e) {
  return e && e.Math === Math && e;
}, $ = (
  // eslint-disable-next-line es/no-global-this -- safe
  ve(typeof globalThis == "object" && globalThis) || ve(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  ve(typeof self == "object" && self) || ve(typeof Re == "object" && Re) || ve(typeof Re == "object" && Re) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
), mi = { exports: {} }, $n = $, ms = Object.defineProperty, Nt = function(e, r) {
  try {
    ms($n, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    $n[e] = r;
  }
  return r;
}, bs = $, $s = Nt, wn = "__core-js_shared__", Sn = mi.exports = bs[wn] || $s(wn, {});
(Sn.versions || (Sn.versions = [])).push({
  version: "3.38.0",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var Mt = mi.exports, En = Mt, Dt = function(e, r) {
  return En[e] || (En[e] = r || {});
}, w = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, ws = w, or = !ws(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), bi = or, $i = Function.prototype, lt = $i.call, Ss = bi && $i.bind.bind(lt, lt), O = bi ? Ss : function(e) {
  return function() {
    return lt.apply(e, arguments);
  };
}, se = function(e) {
  return e == null;
}, Es = se, Os = TypeError, sr = function(e) {
  if (Es(e)) throw new Os("Can't call method on " + e);
  return e;
}, Is = sr, Ts = Object, Se = function(e) {
  return Ts(Is(e));
}, Ps = O, Cs = Se, xs = Ps({}.hasOwnProperty), j = Object.hasOwn || function(r, t) {
  return xs(Cs(r), t);
}, Rs = O, _s = 0, js = Math.random(), As = Rs(1 .toString), Ft = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + As(++_s + js, 36);
}, Ls = $, On = Ls.navigator, In = On && On.userAgent, Ee = In ? String(In) : "", wi = $, Or = Ee, Tn = wi.process, Pn = wi.Deno, Cn = Tn && Tn.versions || Pn && Pn.version, xn = Cn && Cn.v8, L, Ze;
xn && (L = xn.split("."), Ze = L[0] > 0 && L[0] < 4 ? 1 : +(L[0] + L[1]));
!Ze && Or && (L = Or.match(/Edge\/(\d+)/), (!L || L[1] >= 74) && (L = Or.match(/Chrome\/(\d+)/), L && (Ze = +L[1])));
var ur = Ze, Rn = ur, Ns = w, Ms = $, Ds = Ms.String, Si = !!Object.getOwnPropertySymbols && !Ns(function() {
  var e = Symbol("symbol detection");
  return !Ds(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Rn && Rn < 41;
}), Fs = Si, Ei = Fs && !Symbol.sham && typeof Symbol.iterator == "symbol", ks = $, Bs = Dt, _n = j, Gs = Ft, Us = Si, Ks = Ei, ee = ks.Symbol, Ir = Bs("wks"), zs = Ks ? ee.for || ee : ee && ee.withoutSetter || Gs, T = function(e) {
  return _n(Ir, e) || (Ir[e] = Us && _n(ee, e) ? ee[e] : zs("Symbol." + e)), Ir[e];
}, Ws = T, Vs = Ws("toStringTag"), Oi = {};
Oi[Vs] = "z";
var kt = String(Oi) === "[object z]", Tr = typeof document == "object" && document.all, E = typeof Tr > "u" && Tr !== void 0 ? function(e) {
  return typeof e == "function" || e === Tr;
} : function(e) {
  return typeof e == "function";
}, N = {}, Hs = w, _ = !Hs(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] !== 7;
}), Ys = E, P = function(e) {
  return typeof e == "object" ? e !== null : Ys(e);
}, Xs = $, jn = P, ft = Xs.document, Js = jn(ft) && jn(ft.createElement), cr = function(e) {
  return Js ? ft.createElement(e) : {};
}, qs = _, Qs = w, Zs = cr, Ii = !qs && !Qs(function() {
  return Object.defineProperty(Zs("div"), "a", {
    get: function() {
      return 7;
    }
  }).a !== 7;
}), eu = _, ru = w, Ti = eu && ru(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype !== 42;
}), tu = P, nu = String, au = TypeError, M = function(e) {
  if (tu(e)) return e;
  throw new au(nu(e) + " is not an object");
}, iu = or, _e = Function.prototype.call, A = iu ? _e.bind(_e) : function() {
  return _e.apply(_e, arguments);
}, Pr = $, ou = E, su = function(e) {
  return ou(e) ? e : void 0;
}, Y = function(e, r) {
  return arguments.length < 2 ? su(Pr[e]) : Pr[e] && Pr[e][r];
}, uu = O, vr = uu({}.isPrototypeOf), cu = Y, vu = E, lu = vr, fu = Ei, du = Object, Pi = fu ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = cu("Symbol");
  return vu(r) && lu(r.prototype, du(e));
}, hu = String, lr = function(e) {
  try {
    return hu(e);
  } catch {
    return "Object";
  }
}, pu = E, gu = lr, yu = TypeError, K = function(e) {
  if (pu(e)) return e;
  throw new yu(gu(e) + " is not a function");
}, mu = K, bu = se, Bt = function(e, r) {
  var t = e[r];
  return bu(t) ? void 0 : mu(t);
}, Cr = A, xr = E, Rr = P, $u = TypeError, wu = function(e, r) {
  var t, n;
  if (r === "string" && xr(t = e.toString) && !Rr(n = Cr(t, e)) || xr(t = e.valueOf) && !Rr(n = Cr(t, e)) || r !== "string" && xr(t = e.toString) && !Rr(n = Cr(t, e))) return n;
  throw new $u("Can't convert object to primitive value");
}, Su = A, An = P, Ln = Pi, Eu = Bt, Ou = wu, Iu = T, Tu = TypeError, Pu = Iu("toPrimitive"), Cu = function(e, r) {
  if (!An(e) || Ln(e)) return e;
  var t = Eu(e, Pu), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = Su(t, e, r), !An(n) || Ln(n)) return n;
    throw new Tu("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), Ou(e, r);
}, xu = Cu, Ru = Pi, Ci = function(e) {
  var r = xu(e, "string");
  return Ru(r) ? r : r + "";
}, _u = _, ju = Ii, Au = Ti, je = M, Nn = Ci, Lu = TypeError, _r = Object.defineProperty, Nu = Object.getOwnPropertyDescriptor, jr = "enumerable", Ar = "configurable", Lr = "writable";
N.f = _u ? Au ? function(r, t, n) {
  if (je(r), t = Nn(t), je(n), typeof r == "function" && t === "prototype" && "value" in n && Lr in n && !n[Lr]) {
    var a = Nu(r, t);
    a && a[Lr] && (r[t] = n.value, n = {
      configurable: Ar in n ? n[Ar] : a[Ar],
      enumerable: jr in n ? n[jr] : a[jr],
      writable: !1
    });
  }
  return _r(r, t, n);
} : _r : function(r, t, n) {
  if (je(r), t = Nn(t), je(n), ju) try {
    return _r(r, t, n);
  } catch {
  }
  if ("get" in n || "set" in n) throw new Lu("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var xi = { exports: {} }, dt = _, Mu = j, Ri = Function.prototype, Du = dt && Object.getOwnPropertyDescriptor, Gt = Mu(Ri, "name"), Fu = Gt && (function() {
}).name === "something", ku = Gt && (!dt || dt && Du(Ri, "name").configurable), Ut = {
  EXISTS: Gt,
  PROPER: Fu,
  CONFIGURABLE: ku
}, Bu = O, Gu = E, ht = Mt, Uu = Bu(Function.toString);
Gu(ht.inspectSource) || (ht.inspectSource = function(e) {
  return Uu(e);
});
var Kt = ht.inspectSource, Ku = $, zu = E, Mn = Ku.WeakMap, Wu = zu(Mn) && /native code/.test(String(Mn)), fr = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, Vu = _, Hu = N, Yu = fr, Oe = Vu ? function(e, r, t) {
  return Hu.f(e, r, Yu(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, Xu = Dt, Ju = Ft, Dn = Xu("keys"), zt = function(e) {
  return Dn[e] || (Dn[e] = Ju(e));
}, dr = {}, qu = Wu, _i = $, Qu = P, Zu = Oe, Nr = j, Mr = Mt, ec = zt, rc = dr, Fn = "Object already initialized", pt = _i.TypeError, tc = _i.WeakMap, er, $e, rr, nc = function(e) {
  return rr(e) ? $e(e) : er(e, {});
}, ac = function(e) {
  return function(r) {
    var t;
    if (!Qu(r) || (t = $e(r)).type !== e)
      throw new pt("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (qu || Mr.state) {
  var D = Mr.state || (Mr.state = new tc());
  D.get = D.get, D.has = D.has, D.set = D.set, er = function(e, r) {
    if (D.has(e)) throw new pt(Fn);
    return r.facade = e, D.set(e, r), r;
  }, $e = function(e) {
    return D.get(e) || {};
  }, rr = function(e) {
    return D.has(e);
  };
} else {
  var q = ec("state");
  rc[q] = !0, er = function(e, r) {
    if (Nr(e, q)) throw new pt(Fn);
    return r.facade = e, Zu(e, q, r), r;
  }, $e = function(e) {
    return Nr(e, q) ? e[q] : {};
  }, rr = function(e) {
    return Nr(e, q);
  };
}
var ue = {
  set: er,
  get: $e,
  has: rr,
  enforce: nc,
  getterFor: ac
}, Wt = O, ic = w, oc = E, Ae = j, gt = _, sc = Ut.CONFIGURABLE, uc = Kt, ji = ue, cc = ji.enforce, vc = ji.get, kn = String, Ve = Object.defineProperty, lc = Wt("".slice), fc = Wt("".replace), dc = Wt([].join), hc = gt && !ic(function() {
  return Ve(function() {
  }, "length", { value: 8 }).length !== 8;
}), pc = String(String).split("String"), gc = xi.exports = function(e, r, t) {
  lc(kn(r), 0, 7) === "Symbol(" && (r = "[" + fc(kn(r), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!Ae(e, "name") || sc && e.name !== r) && (gt ? Ve(e, "name", { value: r, configurable: !0 }) : e.name = r), hc && t && Ae(t, "arity") && e.length !== t.arity && Ve(e, "length", { value: t.arity });
  try {
    t && Ae(t, "constructor") && t.constructor ? gt && Ve(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = cc(e);
  return Ae(n, "source") || (n.source = dc(pc, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = gc(function() {
  return oc(this) && vc(this).source || uc(this);
}, "toString");
var Ai = xi.exports, yc = E, mc = N, bc = Ai, $c = Nt, B = function(e, r, t, n) {
  n || (n = {});
  var a = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (yc(t) && bc(t, i, n), n.global)
    a ? e[r] = t : $c(r, t);
  else {
    try {
      n.unsafe ? e[r] && (a = !0) : delete e[r];
    } catch {
    }
    a ? e[r] = t : mc.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, Li = O, wc = Li({}.toString), Sc = Li("".slice), X = function(e) {
  return Sc(wc(e), 8, -1);
}, Ec = kt, Oc = E, He = X, Ic = T, Tc = Ic("toStringTag"), Pc = Object, Cc = He(/* @__PURE__ */ function() {
  return arguments;
}()) === "Arguments", xc = function(e, r) {
  try {
    return e[r];
  } catch {
  }
}, hr = Ec ? He : function(e) {
  var r, t, n;
  return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = xc(r = Pc(e), Tc)) == "string" ? t : Cc ? He(r) : (n = He(r)) === "Object" && Oc(r.callee) ? "Arguments" : n;
}, Rc = kt, _c = hr, jc = Rc ? {}.toString : function() {
  return "[object " + _c(this) + "]";
}, Ac = kt, Lc = B, Nc = jc;
Ac || Lc(Object.prototype, "toString", Nc, { unsafe: !0 });
var Vt = {}, Ni = {}, Mi = {}.propertyIsEnumerable, Di = Object.getOwnPropertyDescriptor, Mc = Di && !Mi.call({ 1: 2 }, 1);
Ni.f = Mc ? function(r) {
  var t = Di(this, r);
  return !!t && t.enumerable;
} : Mi;
var Dc = O, Fc = w, kc = X, Dr = Object, Bc = Dc("".split), Ht = Fc(function() {
  return !Dr("z").propertyIsEnumerable(0);
}) ? function(e) {
  return kc(e) === "String" ? Bc(e, "") : Dr(e);
} : Dr, Gc = Ht, Uc = sr, J = function(e) {
  return Gc(Uc(e));
}, Kc = _, zc = A, Wc = Ni, Vc = fr, Hc = J, Yc = Ci, Xc = j, Jc = Ii, Bn = Object.getOwnPropertyDescriptor;
Vt.f = Kc ? Bn : function(r, t) {
  if (r = Hc(r), t = Yc(t), Jc) try {
    return Bn(r, t);
  } catch {
  }
  if (Xc(r, t)) return Vc(!zc(Wc.f, r, t), r[t]);
};
var pr = {}, qc = Math.ceil, Qc = Math.floor, Zc = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? Qc : qc)(t);
}, ev = Zc, Yt = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : ev(r);
}, rv = Yt, tv = Math.max, nv = Math.min, av = function(e, r) {
  var t = rv(e);
  return t < 0 ? tv(t + r, 0) : nv(t, r);
}, iv = Yt, ov = Math.min, sv = function(e) {
  var r = iv(e);
  return r > 0 ? ov(r, 9007199254740991) : 0;
}, uv = sv, gr = function(e) {
  return uv(e.length);
}, cv = J, vv = av, lv = gr, Gn = function(e) {
  return function(r, t, n) {
    var a = cv(r), i = lv(a);
    if (i === 0) return !e && -1;
    var o = vv(n, i), u;
    if (e && t !== t) {
      for (; i > o; )
        if (u = a[o++], u !== u) return !0;
    } else for (; i > o; o++)
      if ((e || o in a) && a[o] === t) return e || o || 0;
    return !e && -1;
  };
}, fv = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Gn(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Gn(!1)
}, dv = O, Fr = j, hv = J, pv = fv.indexOf, gv = dr, Un = dv([].push), Fi = function(e, r) {
  var t = hv(e), n = 0, a = [], i;
  for (i in t) !Fr(gv, i) && Fr(t, i) && Un(a, i);
  for (; r.length > n; ) Fr(t, i = r[n++]) && (~pv(a, i) || Un(a, i));
  return a;
}, Xt = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], yv = Fi, mv = Xt, bv = mv.concat("length", "prototype");
pr.f = Object.getOwnPropertyNames || function(r) {
  return yv(r, bv);
};
var ki = {};
ki.f = Object.getOwnPropertySymbols;
var $v = Y, wv = O, Sv = pr, Ev = ki, Ov = M, Iv = wv([].concat), Tv = $v("Reflect", "ownKeys") || function(r) {
  var t = Sv.f(Ov(r)), n = Ev.f;
  return n ? Iv(t, n(r)) : t;
}, Kn = j, Pv = Tv, Cv = Vt, xv = N, Rv = function(e, r, t) {
  for (var n = Pv(r), a = xv.f, i = Cv.f, o = 0; o < n.length; o++) {
    var u = n[o];
    !Kn(e, u) && !(t && Kn(t, u)) && a(e, u, i(r, u));
  }
}, _v = w, jv = E, Av = /#|\.prototype\./, Ie = function(e, r) {
  var t = Nv[Lv(e)];
  return t === Dv ? !0 : t === Mv ? !1 : jv(r) ? _v(r) : !!r;
}, Lv = Ie.normalize = function(e) {
  return String(e).replace(Av, ".").toLowerCase();
}, Nv = Ie.data = {}, Mv = Ie.NATIVE = "N", Dv = Ie.POLYFILL = "P", Jt = Ie, Le = $, Fv = Vt.f, kv = Oe, Bv = B, Gv = Nt, Uv = Rv, Kv = Jt, x = function(e, r) {
  var t = e.target, n = e.global, a = e.stat, i, o, u, v, s, c;
  if (n ? o = Le : a ? o = Le[t] || Gv(t, {}) : o = Le[t] && Le[t].prototype, o) for (u in r) {
    if (s = r[u], e.dontCallGetSet ? (c = Fv(o, u), v = c && c.value) : v = o[u], i = Kv(n ? u : t + (a ? "." : "#") + u, e.forced), !i && v !== void 0) {
      if (typeof s == typeof v) continue;
      Uv(s, v);
    }
    (e.sham || v && v.sham) && kv(s, "sham", !0), Bv(o, u, s, e);
  }
}, zv = hr, Wv = String, yr = function(e) {
  if (zv(e) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
  return Wv(e);
}, Vv = M, Bi = function() {
  var e = Vv(this), r = "";
  return e.hasIndices && (r += "d"), e.global && (r += "g"), e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.dotAll && (r += "s"), e.unicode && (r += "u"), e.unicodeSets && (r += "v"), e.sticky && (r += "y"), r;
}, qt = w, Hv = $, Qt = Hv.RegExp, Zt = qt(function() {
  var e = Qt("a", "y");
  return e.lastIndex = 2, e.exec("abcd") !== null;
}), Yv = Zt || qt(function() {
  return !Qt("a", "y").sticky;
}), Xv = Zt || qt(function() {
  var e = Qt("^r", "gy");
  return e.lastIndex = 2, e.exec("str") !== null;
}), Jv = {
  BROKEN_CARET: Xv,
  MISSED_STICKY: Yv,
  UNSUPPORTED_Y: Zt
}, Gi = {}, qv = Fi, Qv = Xt, Ui = Object.keys || function(r) {
  return qv(r, Qv);
}, Zv = _, el = Ti, rl = N, tl = M, nl = J, al = Ui;
Gi.f = Zv && !el ? Object.defineProperties : function(r, t) {
  tl(r);
  for (var n = nl(t), a = al(t), i = a.length, o = 0, u; i > o; ) rl.f(r, u = a[o++], n[u]);
  return r;
};
var il = Y, Ki = il("document", "documentElement"), ol = M, sl = Gi, zn = Xt, ul = dr, cl = Ki, vl = cr, ll = zt, Wn = ">", Vn = "<", yt = "prototype", mt = "script", zi = ll("IE_PROTO"), kr = function() {
}, Wi = function(e) {
  return Vn + mt + Wn + e + Vn + "/" + mt + Wn;
}, Hn = function(e) {
  e.write(Wi("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, fl = function() {
  var e = vl("iframe"), r = "java" + mt + ":", t;
  return e.style.display = "none", cl.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(Wi("document.F=Object")), t.close(), t.F;
}, Ne, Ye = function() {
  try {
    Ne = new ActiveXObject("htmlfile");
  } catch {
  }
  Ye = typeof document < "u" ? document.domain && Ne ? Hn(Ne) : fl() : Hn(Ne);
  for (var e = zn.length; e--; ) delete Ye[yt][zn[e]];
  return Ye();
};
ul[zi] = !0;
var mr = Object.create || function(r, t) {
  var n;
  return r !== null ? (kr[yt] = ol(r), n = new kr(), kr[yt] = null, n[zi] = r) : n = Ye(), t === void 0 ? n : sl.f(n, t);
}, dl = w, hl = $, pl = hl.RegExp, gl = dl(function() {
  var e = pl(".", "s");
  return !(e.dotAll && e.test(`
`) && e.flags === "s");
}), yl = w, ml = $, bl = ml.RegExp, $l = yl(function() {
  var e = bl("(?<a>b)", "g");
  return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc";
}), re = A, br = O, wl = yr, Sl = Bi, El = Jv, Ol = Dt, Il = mr, Tl = ue.get, Pl = gl, Cl = $l, xl = Ol("native-string-replace", String.prototype.replace), tr = RegExp.prototype.exec, bt = tr, Rl = br("".charAt), _l = br("".indexOf), jl = br("".replace), Br = br("".slice), $t = function() {
  var e = /a/, r = /b*/g;
  return re(tr, e, "a"), re(tr, r, "a"), e.lastIndex !== 0 || r.lastIndex !== 0;
}(), Vi = El.BROKEN_CARET, wt = /()??/.exec("")[1] !== void 0, Al = $t || wt || Vi || Pl || Cl;
Al && (bt = function(r) {
  var t = this, n = Tl(t), a = wl(r), i = n.raw, o, u, v, s, c, l, f;
  if (i)
    return i.lastIndex = t.lastIndex, o = re(bt, i, a), t.lastIndex = i.lastIndex, o;
  var d = n.groups, h = Vi && t.sticky, p = re(Sl, t), m = t.source, y = 0, g = a;
  if (h && (p = jl(p, "y", ""), _l(p, "g") === -1 && (p += "g"), g = Br(a, t.lastIndex), t.lastIndex > 0 && (!t.multiline || t.multiline && Rl(a, t.lastIndex - 1) !== `
`) && (m = "(?: " + m + ")", g = " " + g, y++), u = new RegExp("^(?:" + m + ")", p)), wt && (u = new RegExp("^" + m + "$(?!\\s)", p)), $t && (v = t.lastIndex), s = re(tr, h ? u : t, g), h ? s ? (s.input = Br(s.input, y), s[0] = Br(s[0], y), s.index = t.lastIndex, t.lastIndex += s[0].length) : t.lastIndex = 0 : $t && s && (t.lastIndex = t.global ? s.index + s[0].length : v), wt && s && s.length > 1 && re(xl, s[0], u, function() {
    for (c = 1; c < arguments.length - 2; c++)
      arguments[c] === void 0 && (s[c] = void 0);
  }), s && d)
    for (s.groups = l = Il(null), c = 0; c < d.length; c++)
      f = d[c], l[f[0]] = s[f[1]];
  return s;
});
var Ll = bt, Nl = x, Yn = Ll;
Nl({ target: "RegExp", proto: !0, forced: /./.exec !== Yn }, {
  exec: Yn
});
function Ml(e, r) {
  return !e || !r ? !1 : e.contains ? e.contains(r) : e.childNodes ? Array.prototype.indexOf.call(e.childNodes, r) !== -1 : !1;
}
function St(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function Dl(e) {
  if (Array.isArray(e)) return e;
}
function Fl(e) {
  if (Array.isArray(e)) return St(e);
}
function Hi(e, r) {
  if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
}
function kl(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Xi(n.key), n);
  }
}
function Yi(e, r, t) {
  return r && kl(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function C(e, r, t) {
  return (r = Xi(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function Bl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var n, a, i, o, u = [], v = !0, s = !1;
    try {
      if (i = (t = t.call(e)).next, r !== 0) for (; !(v = (n = i.call(t)).done) && (u.push(n.value), u.length !== r); v = !0) ;
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
function Ul() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Kl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xn(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function F(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xn(Object(t), !0).forEach(function(n) {
      C(e, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xn(Object(t)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return e;
}
function zl(e, r) {
  return Dl(e) || Gl(e, r) || Ji(e, r) || Ul();
}
function Wl(e) {
  return Fl(e) || Bl(e) || Ji(e) || Kl();
}
function Vl(e, r) {
  if (typeof e != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function Xi(e) {
  var r = Vl(e, "string");
  return typeof r == "symbol" ? r : r + "";
}
function Ji(e, r) {
  if (e) {
    if (typeof e == "string") return St(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? St(e, r) : void 0;
  }
}
var Hl = w, qi = function(e, r) {
  var t = [][e];
  return !!t && Hl(function() {
    t.call(null, r || function() {
      return 1;
    }, 1);
  });
}, Yl = x, Xl = O, Jl = Ht, ql = J, Ql = qi, Zl = Xl([].join), ef = Jl !== Object, rf = ef || !Ql("join", ",");
Yl({ target: "Array", proto: !0, forced: rf }, {
  join: function(r) {
    return Zl(ql(this), r === void 0 ? "," : r);
  }
});
var tf = X, nf = O, af = function(e) {
  if (tf(e) === "Function") return nf(e);
}, Jn = af, of = K, sf = or, uf = Jn(Jn.bind), Te = function(e, r) {
  return of(e), r === void 0 ? e : sf ? uf(e, r) : function() {
    return e.apply(r, arguments);
  };
}, cf = X, Qi = Array.isArray || function(r) {
  return cf(r) === "Array";
}, vf = O, lf = w, Zi = E, ff = hr, df = Y, hf = Kt, eo = function() {
}, ro = df("Reflect", "construct"), en = /^\s*(?:class|function)\b/, pf = vf(en.exec), gf = !en.test(eo), le = function(r) {
  if (!Zi(r)) return !1;
  try {
    return ro(eo, [], r), !0;
  } catch {
    return !1;
  }
}, to = function(r) {
  if (!Zi(r)) return !1;
  switch (ff(r)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return !1;
  }
  try {
    return gf || !!pf(en, hf(r));
  } catch {
    return !0;
  }
};
to.sham = !0;
var no = !ro || lf(function() {
  var e;
  return le(le.call) || !le(Object) || !le(function() {
    e = !0;
  }) || e;
}) ? to : le, qn = Qi, yf = no, mf = P, bf = T, $f = bf("species"), Qn = Array, wf = function(e) {
  var r;
  return qn(e) && (r = e.constructor, yf(r) && (r === Qn || qn(r.prototype)) ? r = void 0 : mf(r) && (r = r[$f], r === null && (r = void 0))), r === void 0 ? Qn : r;
}, Sf = wf, ao = function(e, r) {
  return new (Sf(e))(r === 0 ? 0 : r);
}, Ef = Te, Of = O, If = Ht, Tf = Se, Pf = gr, Cf = ao, Zn = Of([].push), G = function(e) {
  var r = e === 1, t = e === 2, n = e === 3, a = e === 4, i = e === 6, o = e === 7, u = e === 5 || i;
  return function(v, s, c, l) {
    for (var f = Tf(v), d = If(f), h = Pf(d), p = Ef(s, c), m = 0, y = l || Cf, g = r ? y(v, h) : t || o ? y(v, 0) : void 0, S, I; h > m; m++) if ((u || m in d) && (S = d[m], I = p(S, m, f), e))
      if (r) g[m] = I;
      else if (I) switch (e) {
        case 3:
          return !0;
        case 5:
          return S;
        case 6:
          return m;
        case 2:
          Zn(g, S);
      }
      else switch (e) {
        case 4:
          return !1;
        case 7:
          Zn(g, S);
      }
    return i ? -1 : n || a ? a : g;
  };
}, io = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: G(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: G(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: G(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: G(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: G(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: G(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: G(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: G(7)
}, xf = w, Rf = T, _f = ur, jf = Rf("species"), oo = function(e) {
  return _f >= 51 || !xf(function() {
    var r = [], t = r.constructor = {};
    return t[jf] = function() {
      return { foo: 1 };
    }, r[e](Boolean).foo !== 1;
  });
}, Af = x, Lf = io.map, Nf = oo, Mf = Nf("map");
Af({ target: "Array", proto: !0, forced: !Mf }, {
  map: function(r) {
    return Lf(this, r, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Df = x, Ff = Se, so = Ui, kf = w, Bf = kf(function() {
  so(1);
});
Df({ target: "Object", stat: !0, forced: Bf }, {
  keys: function(r) {
    return so(Ff(r));
  }
});
function Gf(e) {
  var r = e.charCodeAt(0);
  return r >= 65 && r <= 90;
}
function ea(e) {
  var r = Wl(e).map(function(t, n) {
    return Gf(t) ? n === 0 ? t.toLowerCase() : "-" + t.toLowerCase() : t;
  }).join("");
  return "--".concat(r);
}
function Uf(e, r) {
  var t = Object.keys(r);
  return t.length ? t.reduce(function(n, a) {
    return a.indexOf("-") > -1 || a.indexOf("_") > -1 ? n : (e.style.setProperty(ea(a), r[a]), F(F({}, n), {}, C({}, ea(a), r[a])));
  }, {}) : {};
}
function uo(e, r) {
  var t;
  if (typeof e == "string" ? t = e.indexOf("#") > -1 ? document.querySelector(e) : document.getElementById(e) : t = e, t)
    return Uf(t, r);
}
function Kf(e) {
  var r = document.createElement("style");
  return r.id = e, r;
}
function Gr(e, r) {
  return r.querySelector("#".concat(e));
}
function zf(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.head, n = Gr(r, t);
  if (n)
    return n.innerHTML = e, function() {
      var i = Gr(r, t);
      i && t.removeChild(i);
    };
  var a = Kf(r);
  return a.innerHTML = e, t.appendChild(a), function() {
    var i = Gr(r, t);
    i && t.removeChild(i);
  };
}
function Wf(e, r) {
  try {
    return JSON.stringify(e);
  } catch {
    return "";
  }
}
function Vf(e, r, t) {
  try {
    return JSON.parse(e);
  } catch {
    return r;
  }
}
var Hf = /* @__PURE__ */ function() {
  function e(r) {
    var t = this, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Hi(this, e), C(this, "_moving", !1), C(this, "_moved", !1), C(this, "_initialXY", [0, 0]), C(this, "_startXY", [0, 0]), C(this, "_boundaryValue", 5), C(this, "_rb", null), C(this, "_isPC", !0), this.current = r, this.options = n, this.onMoveStart = this.onMoveStart.bind(this), this.onMoving = this.onMoving.bind(this), this.onMoveEnd = this.onMoveEnd.bind(this), this.removeDocumentListeners = this.removeDocumentListeners.bind(this), this.current.addEventListener("mousedown", this.onMoveStart), this.current.addEventListener("touchstart", this.onMoveStart), this._rb = new ResizeObserver(function() {
      t.reset();
    }), this._rb.observe(document.body);
  }
  return Yi(e, [{
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
      var i = this.getEventInfo(t), o = i.clientXY, u = zl(o, 2), v = u[0], s = u[1], c = v - this._startXY[0], l = s - this._startXY[1];
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
}(), co = {
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
}, Yf = cr, Ur = Yf("span").classList, ra = Ur && Ur.constructor && Ur.constructor.prototype, vo = ra === Object.prototype ? void 0 : ra, Xf = io.forEach, Jf = qi, qf = Jf("forEach"), Qf = qf ? [].forEach : function(r) {
  return Xf(this, r, arguments.length > 1 ? arguments[1] : void 0);
}, ta = $, na = co, Zf = vo, Kr = Qf, ed = Oe, lo = function(e) {
  if (e && e.forEach !== Kr) try {
    ed(e, "forEach", Kr);
  } catch {
    e.forEach = Kr;
  }
};
for (var zr in na)
  na[zr] && lo(ta[zr] && ta[zr].prototype);
lo(Zf);
function rd(e, r) {
  var t = F({}, e);
  return Object.keys(t).forEach(function(n) {
    (e[n] === void 0 || e[n] === null) && delete t[n], r != null && r.removeEmptyString && e[n] === "" && delete t[n];
  }), t;
}
var fe = $, td = Ee, nd = X, Me = function(e) {
  return td.slice(0, e.length) === e;
}, fo = function() {
  return Me("Bun/") ? "BUN" : Me("Cloudflare-Workers") ? "CLOUDFLARE" : Me("Deno/") ? "DENO" : Me("Node.js/") ? "NODE" : fe.Bun && typeof Bun.version == "string" ? "BUN" : fe.Deno && typeof Deno.version == "object" ? "DENO" : nd(fe.process) === "process" ? "NODE" : fe.window && fe.document ? "BROWSER" : "REST";
}(), ad = fo, rn = ad === "NODE", id = O, od = K, sd = function(e, r, t) {
  try {
    return id(od(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, ud = P, cd = function(e) {
  return ud(e) || e === null;
}, vd = cd, ld = String, fd = TypeError, dd = function(e) {
  if (vd(e)) return e;
  throw new fd("Can't set " + ld(e) + " as a prototype");
}, hd = sd, pd = P, gd = sr, yd = dd, tn = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = hd(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(a, i) {
    return gd(a), yd(i), pd(a) && (e ? t(a, i) : a.__proto__ = i), a;
  };
}() : void 0), md = N.f, bd = j, $d = T, aa = $d("toStringTag"), Pe = function(e, r, t) {
  e && !t && (e = e.prototype), e && !bd(e, aa) && md(e, aa, { configurable: !0, value: r });
}, ia = Ai, wd = N, ho = function(e, r, t) {
  return t.get && ia(t.get, r, { getter: !0 }), t.set && ia(t.set, r, { setter: !0 }), wd.f(e, r, t);
}, Sd = Y, Ed = ho, Od = T, Id = _, oa = Od("species"), po = function(e) {
  var r = Sd(e);
  Id && r && !r[oa] && Ed(r, oa, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
}, Td = vr, Pd = TypeError, nn = function(e, r) {
  if (Td(r, e)) return e;
  throw new Pd("Incorrect invocation");
}, Cd = no, xd = lr, Rd = TypeError, _d = function(e) {
  if (Cd(e)) return e;
  throw new Rd(xd(e) + " is not a constructor");
}, sa = M, jd = _d, Ad = se, Ld = T, Nd = Ld("species"), Md = function(e, r) {
  var t = sa(e).constructor, n;
  return t === void 0 || Ad(n = sa(t)[Nd]) ? r : jd(n);
}, Dd = or, go = Function.prototype, ua = go.apply, ca = go.call, Fd = typeof Reflect == "object" && Reflect.apply || (Dd ? ca.bind(ua) : function() {
  return ca.apply(ua, arguments);
}), kd = O, yo = kd([].slice), Bd = TypeError, Gd = function(e, r) {
  if (e < r) throw new Bd("Not enough arguments");
  return e;
}, Ud = Ee, mo = /(?:ipad|iphone|ipod).*applewebkit/i.test(Ud), R = $, Kd = Fd, zd = Te, va = E, Wd = j, bo = w, la = Ki, Vd = yo, fa = cr, Hd = Gd, Yd = mo, Xd = rn, Et = R.setImmediate, Ot = R.clearImmediate, Jd = R.process, Wr = R.Dispatch, qd = R.Function, da = R.MessageChannel, Qd = R.String, Vr = 0, me = {}, ha = "onreadystatechange", we, z, Hr, Yr;
bo(function() {
  we = R.location;
});
var an = function(e) {
  if (Wd(me, e)) {
    var r = me[e];
    delete me[e], r();
  }
}, Xr = function(e) {
  return function() {
    an(e);
  };
}, pa = function(e) {
  an(e.data);
}, ga = function(e) {
  R.postMessage(Qd(e), we.protocol + "//" + we.host);
};
(!Et || !Ot) && (Et = function(r) {
  Hd(arguments.length, 1);
  var t = va(r) ? r : qd(r), n = Vd(arguments, 1);
  return me[++Vr] = function() {
    Kd(t, void 0, n);
  }, z(Vr), Vr;
}, Ot = function(r) {
  delete me[r];
}, Xd ? z = function(e) {
  Jd.nextTick(Xr(e));
} : Wr && Wr.now ? z = function(e) {
  Wr.now(Xr(e));
} : da && !Yd ? (Hr = new da(), Yr = Hr.port2, Hr.port1.onmessage = pa, z = zd(Yr.postMessage, Yr)) : R.addEventListener && va(R.postMessage) && !R.importScripts && we && we.protocol !== "file:" && !bo(ga) ? (z = ga, R.addEventListener("message", pa, !1)) : ha in fa("script") ? z = function(e) {
  la.appendChild(fa("script"))[ha] = function() {
    la.removeChild(this), an(e);
  };
} : z = function(e) {
  setTimeout(Xr(e), 0);
});
var $o = {
  set: Et,
  clear: Ot
}, ya = $, Zd = _, eh = Object.getOwnPropertyDescriptor, rh = function(e) {
  if (!Zd) return ya[e];
  var r = eh(ya, e);
  return r && r.value;
}, wo = function() {
  this.head = null, this.tail = null;
};
wo.prototype = {
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
var So = wo, th = Ee, nh = /ipad|iphone|ipod/i.test(th) && typeof Pebble < "u", ah = Ee, ih = /web0s(?!.*chrome)/i.test(ah), ie = $, oh = rh, ma = Te, Jr = $o.set, sh = So, uh = mo, ch = nh, vh = ih, qr = rn, ba = ie.MutationObserver || ie.WebKitMutationObserver, $a = ie.document, wa = ie.process, De = ie.Promise, It = oh("queueMicrotask"), Q, Qr, Zr, Fe, Sa;
if (!It) {
  var ke = new sh(), Be = function() {
    var e, r;
    for (qr && (e = wa.domain) && e.exit(); r = ke.get(); ) try {
      r();
    } catch (t) {
      throw ke.head && Q(), t;
    }
    e && e.enter();
  };
  !uh && !qr && !vh && ba && $a ? (Qr = !0, Zr = $a.createTextNode(""), new ba(Be).observe(Zr, { characterData: !0 }), Q = function() {
    Zr.data = Qr = !Qr;
  }) : !ch && De && De.resolve ? (Fe = De.resolve(void 0), Fe.constructor = De, Sa = ma(Fe.then, Fe), Q = function() {
    Sa(Be);
  }) : qr ? Q = function() {
    wa.nextTick(Be);
  } : (Jr = ma(Jr, ie), Q = function() {
    Jr(Be);
  }), It = function(e) {
    ke.head || Q(), ke.add(e);
  };
}
var lh = It, fh = function(e, r) {
  try {
    arguments.length === 1 ? console.error(e) : console.error(e, r);
  } catch {
  }
}, on = function(e) {
  try {
    return { error: !1, value: e() };
  } catch (r) {
    return { error: !0, value: r };
  }
}, dh = $, $r = dh.Promise, hh = $, be = $r, ph = E, gh = Jt, yh = Kt, mh = T, Ea = fo, et = ur;
be && be.prototype;
var bh = mh("species"), Tt = !1, Eo = ph(hh.PromiseRejectionEvent), $h = gh("Promise", function() {
  var e = yh(be), r = e !== String(be);
  if (!r && et === 66) return !0;
  if (!et || et < 51 || !/native code/.test(e)) {
    var t = new be(function(i) {
      i(1);
    }), n = function(i) {
      i(function() {
      }, function() {
      });
    }, a = t.constructor = {};
    if (a[bh] = n, Tt = t.then(function() {
    }) instanceof n, !Tt) return !0;
  }
  return !r && (Ea === "BROWSER" || Ea === "DENO") && !Eo;
}), Ce = {
  CONSTRUCTOR: $h,
  REJECTION_EVENT: Eo,
  SUBCLASSING: Tt
}, ce = {}, Oa = K, wh = TypeError, Sh = function(e) {
  var r, t;
  this.promise = new e(function(n, a) {
    if (r !== void 0 || t !== void 0) throw new wh("Bad Promise constructor");
    r = n, t = a;
  }), this.resolve = Oa(r), this.reject = Oa(t);
};
ce.f = function(e) {
  return new Sh(e);
};
var Eh = x, nr = rn, U = $, oe = A, Ia = B, Ta = tn, Oh = Pe, Ih = po, Th = K, Xe = E, Ph = P, Ch = nn, xh = Md, Oo = $o.set, sn = lh, Rh = fh, _h = on, jh = So, Io = ue, ar = $r, un = Ce, To = ce, wr = "Promise", Po = un.CONSTRUCTOR, Ah = un.REJECTION_EVENT, Lh = un.SUBCLASSING, rt = Io.getterFor(wr), Nh = Io.set, Z = ar && ar.prototype, V = ar, Ge = Z, Co = U.TypeError, Pt = U.document, cn = U.process, Ct = To.f, Mh = Ct, Dh = !!(Pt && Pt.createEvent && U.dispatchEvent), xo = "unhandledrejection", Fh = "rejectionhandled", Pa = 0, Ro = 1, kh = 2, vn = 1, _o = 2, Ue, Ca, Bh, xa, jo = function(e) {
  var r;
  return Ph(e) && Xe(r = e.then) ? r : !1;
}, Ao = function(e, r) {
  var t = r.value, n = r.state === Ro, a = n ? e.ok : e.fail, i = e.resolve, o = e.reject, u = e.domain, v, s, c;
  try {
    a ? (n || (r.rejection === _o && Uh(r), r.rejection = vn), a === !0 ? v = t : (u && u.enter(), v = a(t), u && (u.exit(), c = !0)), v === e.promise ? o(new Co("Promise-chain cycle")) : (s = jo(v)) ? oe(s, v, i, o) : i(v)) : o(t);
  } catch (l) {
    u && !c && u.exit(), o(l);
  }
}, Lo = function(e, r) {
  e.notified || (e.notified = !0, sn(function() {
    for (var t = e.reactions, n; n = t.get(); )
      Ao(n, e);
    e.notified = !1, r && !e.rejection && Gh(e);
  }));
}, No = function(e, r, t) {
  var n, a;
  Dh ? (n = Pt.createEvent("Event"), n.promise = r, n.reason = t, n.initEvent(e, !1, !0), U.dispatchEvent(n)) : n = { promise: r, reason: t }, !Ah && (a = U["on" + e]) ? a(n) : e === xo && Rh("Unhandled promise rejection", t);
}, Gh = function(e) {
  oe(Oo, U, function() {
    var r = e.facade, t = e.value, n = Ra(e), a;
    if (n && (a = _h(function() {
      nr ? cn.emit("unhandledRejection", t, r) : No(xo, r, t);
    }), e.rejection = nr || Ra(e) ? _o : vn, a.error))
      throw a.value;
  });
}, Ra = function(e) {
  return e.rejection !== vn && !e.parent;
}, Uh = function(e) {
  oe(Oo, U, function() {
    var r = e.facade;
    nr ? cn.emit("rejectionHandled", r) : No(Fh, r, e.value);
  });
}, te = function(e, r, t) {
  return function(n) {
    e(r, n, t);
  };
}, ne = function(e, r, t) {
  e.done || (e.done = !0, t && (e = t), e.value = r, e.state = kh, Lo(e, !0));
}, xt = function(e, r, t) {
  if (!e.done) {
    e.done = !0, t && (e = t);
    try {
      if (e.facade === r) throw new Co("Promise can't be resolved itself");
      var n = jo(r);
      n ? sn(function() {
        var a = { done: !1 };
        try {
          oe(
            n,
            r,
            te(xt, a, e),
            te(ne, a, e)
          );
        } catch (i) {
          ne(a, i, e);
        }
      }) : (e.value = r, e.state = Ro, Lo(e, !1));
    } catch (a) {
      ne({ done: !1 }, a, e);
    }
  }
};
if (Po && (V = function(r) {
  Ch(this, Ge), Th(r), oe(Ue, this);
  var t = rt(this);
  try {
    r(te(xt, t), te(ne, t));
  } catch (n) {
    ne(t, n);
  }
}, Ge = V.prototype, Ue = function(r) {
  Nh(this, {
    type: wr,
    done: !1,
    notified: !1,
    parent: !1,
    reactions: new jh(),
    rejection: !1,
    state: Pa,
    value: void 0
  });
}, Ue.prototype = Ia(Ge, "then", function(r, t) {
  var n = rt(this), a = Ct(xh(this, V));
  return n.parent = !0, a.ok = Xe(r) ? r : !0, a.fail = Xe(t) && t, a.domain = nr ? cn.domain : void 0, n.state === Pa ? n.reactions.add(a) : sn(function() {
    Ao(a, n);
  }), a.promise;
}), Ca = function() {
  var e = new Ue(), r = rt(e);
  this.promise = e, this.resolve = te(xt, r), this.reject = te(ne, r);
}, To.f = Ct = function(e) {
  return e === V || e === Bh ? new Ca(e) : Mh(e);
}, Xe(ar) && Z !== Object.prototype)) {
  xa = Z.then, Lh || Ia(Z, "then", function(r, t) {
    var n = this;
    return new V(function(a, i) {
      oe(xa, n, a, i);
    }).then(r, t);
  }, { unsafe: !0 });
  try {
    delete Z.constructor;
  } catch {
  }
  Ta && Ta(Z, Ge);
}
Eh({ global: !0, constructor: !0, wrap: !0, forced: Po }, {
  Promise: V
});
Oh(V, wr, !1);
Ih(wr);
var xe = {}, Kh = T, zh = xe, Wh = Kh("iterator"), Vh = Array.prototype, Hh = function(e) {
  return e !== void 0 && (zh.Array === e || Vh[Wh] === e);
}, Yh = hr, _a = Bt, Xh = se, Jh = xe, qh = T, Qh = qh("iterator"), Mo = function(e) {
  if (!Xh(e)) return _a(e, Qh) || _a(e, "@@iterator") || Jh[Yh(e)];
}, Zh = A, ep = K, rp = M, tp = lr, np = Mo, ap = TypeError, ip = function(e, r) {
  var t = arguments.length < 2 ? np(e) : r;
  if (ep(t)) return rp(Zh(t, e));
  throw new ap(tp(e) + " is not iterable");
}, op = A, ja = M, sp = Bt, up = function(e, r, t) {
  var n, a;
  ja(e);
  try {
    if (n = sp(e, "return"), !n) {
      if (r === "throw") throw t;
      return t;
    }
    n = op(n, e);
  } catch (i) {
    a = !0, n = i;
  }
  if (r === "throw") throw t;
  if (a) throw n;
  return ja(n), t;
}, cp = Te, vp = A, lp = M, fp = lr, dp = Hh, hp = gr, Aa = vr, pp = ip, gp = Mo, La = up, yp = TypeError, Je = function(e, r) {
  this.stopped = e, this.result = r;
}, Na = Je.prototype, Sr = function(e, r, t) {
  var n = t && t.that, a = !!(t && t.AS_ENTRIES), i = !!(t && t.IS_RECORD), o = !!(t && t.IS_ITERATOR), u = !!(t && t.INTERRUPTED), v = cp(r, n), s, c, l, f, d, h, p, m = function(g) {
    return s && La(s, "normal", g), new Je(!0, g);
  }, y = function(g) {
    return a ? (lp(g), u ? v(g[0], g[1], m) : v(g[0], g[1])) : u ? v(g, m) : v(g);
  };
  if (i)
    s = e.iterator;
  else if (o)
    s = e;
  else {
    if (c = gp(e), !c) throw new yp(fp(e) + " is not iterable");
    if (dp(c)) {
      for (l = 0, f = hp(e); f > l; l++)
        if (d = y(e[l]), d && Aa(Na, d)) return d;
      return new Je(!1);
    }
    s = pp(e, c);
  }
  for (h = i ? e.next : s.next; !(p = vp(h, s)).done; ) {
    try {
      d = y(p.value);
    } catch (g) {
      La(s, "throw", g);
    }
    if (typeof d == "object" && d && Aa(Na, d)) return d;
  }
  return new Je(!1);
}, mp = T, Do = mp("iterator"), Fo = !1;
try {
  var bp = 0, Ma = {
    next: function() {
      return { done: !!bp++ };
    },
    return: function() {
      Fo = !0;
    }
  };
  Ma[Do] = function() {
    return this;
  }, Array.from(Ma, function() {
    throw 2;
  });
} catch {
}
var ko = function(e, r) {
  try {
    if (!r && !Fo) return !1;
  } catch {
    return !1;
  }
  var t = !1;
  try {
    var n = {};
    n[Do] = function() {
      return {
        next: function() {
          return { done: t = !0 };
        }
      };
    }, e(n);
  } catch {
  }
  return t;
}, $p = $r, wp = ko, Sp = Ce.CONSTRUCTOR, Bo = Sp || !wp(function(e) {
  $p.all(e).then(void 0, function() {
  });
}), Ep = x, Op = A, Ip = K, Tp = ce, Pp = on, Cp = Sr, xp = Bo;
Ep({ target: "Promise", stat: !0, forced: xp }, {
  all: function(r) {
    var t = this, n = Tp.f(t), a = n.resolve, i = n.reject, o = Pp(function() {
      var u = Ip(t.resolve), v = [], s = 0, c = 1;
      Cp(r, function(l) {
        var f = s++, d = !1;
        c++, Op(u, t, l).then(function(h) {
          d || (d = !0, v[f] = h, --c || a(v));
        }, i);
      }), --c || a(v);
    });
    return o.error && i(o.value), n.promise;
  }
});
var Rp = x, _p = Ce.CONSTRUCTOR, Rt = $r, jp = Y, Ap = E, Lp = B, Da = Rt && Rt.prototype;
Rp({ target: "Promise", proto: !0, forced: _p, real: !0 }, {
  catch: function(e) {
    return this.then(void 0, e);
  }
});
if (Ap(Rt)) {
  var Fa = jp("Promise").prototype.catch;
  Da.catch !== Fa && Lp(Da, "catch", Fa, { unsafe: !0 });
}
var Np = x, Mp = A, Dp = K, Fp = ce, kp = on, Bp = Sr, Gp = Bo;
Np({ target: "Promise", stat: !0, forced: Gp }, {
  race: function(r) {
    var t = this, n = Fp.f(t), a = n.reject, i = kp(function() {
      var o = Dp(t.resolve);
      Bp(r, function(u) {
        Mp(o, t, u).then(n.resolve, a);
      });
    });
    return i.error && a(i.value), n.promise;
  }
});
var Up = x, Kp = ce, zp = Ce.CONSTRUCTOR;
Up({ target: "Promise", stat: !0, forced: zp }, {
  reject: function(r) {
    var t = Kp.f(this), n = t.reject;
    return n(r), t.promise;
  }
});
var Wp = M, Vp = P, Hp = ce, Yp = function(e, r) {
  if (Wp(e), Vp(r) && r.constructor === e) return r;
  var t = Hp.f(e), n = t.resolve;
  return n(r), t.promise;
}, Xp = x, Jp = Y, qp = Ce.CONSTRUCTOR, Qp = Yp;
Jp("Promise");
Xp({ target: "Promise", stat: !0, forced: qp }, {
  resolve: function(r) {
    return Qp(this, r);
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
}, ln = { exports: {} }, ae = typeof Reflect == "object" ? Reflect : null, ka = ae && typeof ae.apply == "function" ? ae.apply : function(r, t, n) {
  return Function.prototype.apply.call(r, t, n);
}, qe;
ae && typeof ae.ownKeys == "function" ? qe = ae.ownKeys : Object.getOwnPropertySymbols ? qe = function(r) {
  return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r));
} : qe = function(r) {
  return Object.getOwnPropertyNames(r);
};
function Zp(e) {
  console && console.warn && console.warn(e);
}
var Go = Number.isNaN || function(r) {
  return r !== r;
};
function b() {
  b.init.call(this);
}
ln.exports = b;
ln.exports.once = ng;
b.EventEmitter = b;
b.prototype._events = void 0;
b.prototype._eventsCount = 0;
b.prototype._maxListeners = void 0;
var Ba = 10;
function Er(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(b, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return Ba;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || Go(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    Ba = e;
  }
});
b.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
b.prototype.setMaxListeners = function(r) {
  if (typeof r != "number" || r < 0 || Go(r))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + r + ".");
  return this._maxListeners = r, this;
};
function Uo(e) {
  return e._maxListeners === void 0 ? b.defaultMaxListeners : e._maxListeners;
}
b.prototype.getMaxListeners = function() {
  return Uo(this);
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
    ka(v, this, t);
  else
    for (var s = v.length, c = Ho(v, s), n = 0; n < s; ++n)
      ka(c[n], this, t);
  return !0;
};
function Ko(e, r, t, n) {
  var a, i, o;
  if (Er(t), i = e._events, i === void 0 ? (i = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (i.newListener !== void 0 && (e.emit(
    "newListener",
    r,
    t.listener ? t.listener : t
  ), i = e._events), o = i[r]), o === void 0)
    o = i[r] = t, ++e._eventsCount;
  else if (typeof o == "function" ? o = i[r] = n ? [t, o] : [o, t] : n ? o.unshift(t) : o.push(t), a = Uo(e), a > 0 && o.length > a && !o.warned) {
    o.warned = !0;
    var u = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(r) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = r, u.count = o.length, Zp(u);
  }
  return e;
}
b.prototype.addListener = function(r, t) {
  return Ko(this, r, t, !1);
};
b.prototype.on = b.prototype.addListener;
b.prototype.prependListener = function(r, t) {
  return Ko(this, r, t, !0);
};
function eg() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function zo(e, r, t) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: r, listener: t }, a = eg.bind(n);
  return a.listener = t, n.wrapFn = a, a;
}
b.prototype.once = function(r, t) {
  return Er(t), this.on(r, zo(this, r, t)), this;
};
b.prototype.prependOnceListener = function(r, t) {
  return Er(t), this.prependListener(r, zo(this, r, t)), this;
};
b.prototype.removeListener = function(r, t) {
  var n, a, i, o, u;
  if (Er(t), a = this._events, a === void 0)
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
    i === 0 ? n.shift() : rg(n, i), n.length === 1 && (a[r] = n[0]), a.removeListener !== void 0 && this.emit("removeListener", r, u || t);
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
function Wo(e, r, t) {
  var n = e._events;
  if (n === void 0)
    return [];
  var a = n[r];
  return a === void 0 ? [] : typeof a == "function" ? t ? [a.listener || a] : [a] : t ? tg(a) : Ho(a, a.length);
}
b.prototype.listeners = function(r) {
  return Wo(this, r, !0);
};
b.prototype.rawListeners = function(r) {
  return Wo(this, r, !1);
};
b.listenerCount = function(e, r) {
  return typeof e.listenerCount == "function" ? e.listenerCount(r) : Vo.call(e, r);
};
b.prototype.listenerCount = Vo;
function Vo(e) {
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
  return this._eventsCount > 0 ? qe(this._events) : [];
};
function Ho(e, r) {
  for (var t = new Array(r), n = 0; n < r; ++n)
    t[n] = e[n];
  return t;
}
function rg(e, r) {
  for (; r + 1 < e.length; r++)
    e[r] = e[r + 1];
  e.pop();
}
function tg(e) {
  for (var r = new Array(e.length), t = 0; t < r.length; ++t)
    r[t] = e[t].listener || e[t];
  return r;
}
function ng(e, r) {
  return new Promise(function(t, n) {
    function a(o) {
      e.removeListener(r, i), n(o);
    }
    function i() {
      typeof e.removeListener == "function" && e.removeListener("error", a), t([].slice.call(arguments));
    }
    Yo(e, r, i, { once: !0 }), r !== "error" && ag(e, a, { once: !0 });
  });
}
function ag(e, r, t) {
  typeof e.on == "function" && Yo(e, "error", r, t);
}
function Yo(e, r, t, n) {
  if (typeof e.on == "function")
    n.once ? e.once(r, t) : e.on(r, t);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(r, function a(i) {
      n.once && e.removeEventListener(r, a), t(i);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var ig = ln.exports;
const og = /* @__PURE__ */ ys(ig);
var ir = function() {
  return ir = Object.assign || function(r) {
    for (var t, n = 1, a = arguments.length; n < a; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, ir.apply(this, arguments);
};
function Ga(e, r, t, n) {
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
function Ua(e, r) {
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
var sg = (
  /** @class */
  function() {
    function e(r) {
      this.options = r, this._traceId = 0, this._methods = /* @__PURE__ */ new Map(), this._emitter = new og(), this._handlerOnMessageByBound = this.handlerOnMessage.bind(this), this.createService(), this.getListener().addEventListener("message", this._handlerOnMessageByBound, !1);
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
      return Ga(this, void 0, void 0, function() {
        var t, n;
        return Ua(this, function(a) {
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
        return Ga(r, void 0, void 0, function() {
          var n, a, i, o, u;
          return Ua(this, function(v) {
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
      var t = this.options, n = t.sender, a = t.origin, i = t.topic, o = e.jsonStringifyData(ir(ir({}, r), { topic: i }));
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
), ug = /* @__PURE__ */ function() {
  function e() {
    Hi(this, e), C(this, "appConfig", {}), C(this, "touchpoint", null), C(this, "appProps", null), C(this, "context", {}), C(this, "participantName", "");
  }
  return Yi(e, [{
    key: "setAppConfig",
    value: function(t) {
      var n, a = (t == null ? void 0 : t.styles) || {};
      return this.appConfig = F(F(F({}, this.appConfig), t), {}, {
        styles: Object.keys(a).length ? F(F({}, (n = this.appConfig) === null || n === void 0 ? void 0 : n.styles), a) : {}
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
const W = new ug(), cg = '@keyframes loading{0%,5%{transform:translate(40px) scale(1);background:#e9e9e9}10%{transform:translate(40px) scale(1);background:var(--chat-theme-color, #1f1f1f)}40%{transform:translate(20px) scale(1.5);background:var(--chat-theme-color, #1f1f1f)}90%,95%{transform:translate(0) scale(1);background:var(--chat-theme-color, #1f1f1f)}to{transform:translate(0) scale(1);background:#e9e9e9}}@keyframes move-x{0%,10%{transform:translate(0)}90%,to{transform:translate(20px)}}@keyframes dot1-animate{0%{transform:matrix(1,0,0,1,285.389,355.211)}25%{transform:matrix(.9957,0,0,.9957,286.3071,355.4352)}50%{transform:matrix(.7195,0,0,.7195,331.1569,366.3884)}to{transform:matrix(.6882,0,0,.6882,350.5277,371.1191) scale(0)}}@keyframes dot2-animate{0%{transform:matrix(1,0,0,1,354.999,355.211)}25%{transform:matrix(.9957,0,0,.9957,354.999,355.4352)}50%{transform:matrix(.7195,0,0,.7195,354.999,366.3883)}to{transform:matrix(.6882,0,0,.6882,354.999,371.119) scale(0)}}@keyframes dot3-animate{0%{transform:matrix(1,0,0,1,424.611,355.211)}25%{transform:matrix(.9957,0,0,.9957,423.6929,355.4352)}50%{transform:matrix(.7195 0,0,.7195,378.8418,366.3884)}to{transform:matrix(.6882,0,0,.6882,359.474,371.1191) scale(0)}}@keyframes wave-animate{0%{transform:scale(0)}to{transform:scale(1)}}.tdw-widget-wrapper{--chat-z-index: 99999;position:fixed;z-index:var(--chat-z-index)}.tdw-widget-wrapper[data-preview]{position:sticky;display:flex;flex-direction:column;gap:24px;align-items:self-end}.tdw-widget{position:fixed;right:20px;bottom:var(--chat-position-bottom, 20px);z-index:var(--chat-z-index);width:var(--chat-container-width, 360px);min-width:360px;height:var(--chat-container-height, 680px);max-height:calc(var(--chat-screen-height) - var(--chat-position-bottom, 20px) - 20px);border:none;border-radius:20px;box-shadow:0 32px 20px #00000005,0 16px 16px #0000000a,0 4px 8px #0000000f,0 -4px 24px #00000014;overflow:hidden;transform-origin:right bottom;transition:height .2s,visibility 1s,opacity 83ms ease-out,transform .4s cubic-bezier(.25,.8,.25,1);will-change:width,height,visibility,opacity,transform}.tdw-widget[aria-hidden=true]{opacity:0;visibility:hidden;pointer-events:none;transform:scale(0)}.tdw-widget[aria-hidden=false]{opacity:1;visibility:visible;pointer-events:auto;transform:scale(1)}.tdw-widget[data-preview]{position:unset}.tdw-widget iframe{width:100%;height:100%;border:none;border-radius:inherit}@media only screen and (max-width: 600px),(max-height: 620px){.tdw-widget[data-responsive-layout=true]{top:0;right:0;bottom:0;left:0;overflow:hidden;width:var(--chat-screen-width, 100%);min-width:var(--chat-screen-width, 100%);max-width:var(--chat-screen-width, 100%);height:var(--chat-screen-height, 100%);min-height:var(--chat-screen-height, 100%);max-height:var(--chat-screen-height, 100%);border-radius:0}}.tdw-widget-trigger{--box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 8%), 0 16px 16px 0 rgba(0, 0, 0, 4%), 0 32px 20px 0 rgba(0, 0, 0, 2%);position:fixed;right:var(--trigger-button-position-right, 10px);bottom:var(--trigger-button-position-bottom, 20px);z-index:var(--chat-z-index);display:flex;justify-content:center;align-items:center;width:var(--trigger-button-width, 64px);height:var(--trigger-button-height, 64px);border:none;border-radius:50%;cursor:pointer;background-image:var(--chat-icon);background-size:56%;background-repeat:no-repeat;background-position:center;transition:background-color .1s ease-in-out;box-shadow:var(--chat-launcher-shadow, var(--box-shadow));background-color:var(--chat-launcher-color, #1f1f1f)}.tdw-widget-trigger:hover{background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger[data-has-chat-icon=yes] .tdw-widget-trigger-animate{display:none}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=wave]{display:block;transform-origin:center 52%;animation:wave-animate 2s infinite;animation-direction:alternate;animation-delay:0s,1s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot1]{animation:dot1-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot2]{animation:dot2-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg g[data-target=dot3]{animation:dot3-animate 2s infinite;animation-direction:alternate;animation-delay:0s,4s}.tdw-widget-trigger[data-preview]{position:relative;right:unset;bottom:unset}.tdw-widget-trigger[data-has-chat-icon=no] .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path,.tdw-widget-trigger[data-has-chat-icon=no]:hover .tdw-widget-trigger-animate svg>g>g:nth-child(2)>g>path{fill:#fff}.tdw-widget-trigger-animate{position:absolute;top:0;right:0;bottom:0;left:0;overflow:hidden;border-radius:50%;background-color:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-animate svg{position:relative;width:100%;height:100%;transform:translateZ(0);content-visibility:visible}.tdw-widget-trigger-animate svg g[data-target]{animation:none}.tdw-widget-trigger-animate svg g[data-target=wave]{display:none}.tdw-widget-trigger-animate svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate svg g[data-target=wave]>g>g>path{fill:var(--chat-launcher-color, #383838)}.tdw-widget-trigger-animate:hover svg g[data-target=circle]>g>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot1]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot2]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=dot3]>g>path,.tdw-widget-trigger-animate:hover svg g[data-target=wave]>g>g>path{fill:var(--chat-hover-launcher-color, #383838)}.tdw-widget-trigger-badge{position:absolute;top:0;right:0;width:20px;height:20px;line-height:20px;text-align:center;color:#fff;background-color:#f5222d;font-size:10px;border-radius:50%;box-sizing:border-box;transition:right,width,border-radius .25s ease}.tdw-widget-trigger-badge-more{right:-4px;width:31px;border-radius:48px}.tdw-widget-loading{display:flex;flex-direction:column;width:100%;height:100%}.tdw-widget-header{height:64px;background-color:var(--chat-header-background-color, #f8f8f8);border-top-left-radius:8px;border-top-right-radius:8px}.tdw-widget-content{display:flex;flex-direction:column;justify-content:center;align-items:center;height:calc(100% - 56px);padding:16px;box-sizing:border-box}.tdw-loader{position:relative;width:100px;height:10px}.tdw-loader:before,.tdw-loader:after{content:"";position:absolute;top:0;left:0;width:10px;height:10px;margin-left:25%;border-radius:50%;box-shadow:20px 0 #e9e9e9;background:#e9e9e9;animation:move-x 1s linear infinite}.tdw-loader:after{box-shadow:none;transform:translate(40px) scale(1);z-index:2;animation:loading 1s linear infinite}';
var vg = function(r) {
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
  return rd(t, {
    removeEmptyString: !0
  });
}, lg = "talkdesk-chat-widget-style";
function fg(e) {
  var r, t, n, a, i = e == null ? void 0 : e.config, o = i ? Vf(i, {}) : e == null ? void 0 : e.widgetSettings, u = {};
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
function dg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
  return vg(F(F({}, fg(r)), e));
}
function hg(e) {
  var r = [];
  return r.push(zf(cg, lg, e)), function() {
    r.forEach(function(t) {
      return t();
    }), r.length = 0;
  };
}
function pg(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0, n = dg(r, t), a = Object.keys(n);
  if (a.length)
    return uo(e, n);
}
function gg(e, r) {
  var t = function() {
    uo(e, {
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
var Ka = "tdw-widget-wrapper";
function yg(e) {
  var r = e.root, t = e.isPreview, n = t === void 0 ? !1 : t, a = document.createElement("div");
  return a.className = Ka, a.setAttribute("data-".concat(Ka), ""), n && a.setAttribute("data-preview", ""), r.appendChild(a), {
    element: a,
    destroy: function() {
      Ml(r, a) && r.removeChild(a), a.remove();
    }
  };
}
var mg = A, bg = j, $g = vr, wg = Bi, za = RegExp.prototype, Sg = function(e) {
  var r = e.flags;
  return r === void 0 && !("flags" in za) && !bg(e, "flags") && $g(za, e) ? mg(wg, e) : r;
}, Eg = Ut.PROPER, Og = B, Ig = M, Wa = yr, Tg = w, Pg = Sg, fn = "toString", Xo = RegExp.prototype, Jo = Xo[fn], Cg = Tg(function() {
  return Jo.call({ source: "a", flags: "b" }) !== "/a/b";
}), xg = Eg && Jo.name !== fn;
(Cg || xg) && Og(Xo, fn, function() {
  var r = Ig(this), t = Wa(r.source), n = Wa(Pg(r));
  return "/" + t + "/" + n;
}, { unsafe: !0 });
var Rg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 710 710" width="710" height="710" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_51)" data-target="circle"><g transform="matrix(1,0,0,1,355,355)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M0,-355.0159912109375 C196.07000732421875,-355.0159912109375 355.0159912109375,-196.07000732421875 355.0159912109375,0 C355.0159912109375,196.07000732421875 196.07000732421875,355.0159912109375 0,355.0159912109375 C-196.07000732421875,355.0159912109375 -355.0159912109375,196.07000732421875 -355.0159912109375,0 C-355.0159912109375,-196.07000732421875 -196.07000732421875,-355.0159912109375 0,-355.0159912109375z"></path></g></g><g transform="matrix(1,0,0,1,354.9989929199219,384.5849914550781)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-67.62200164794922,-135.24400329589844 C-67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 67.62200164794922,-135.24400329589844 C123.64199829101562,-135.24400329589844 169.05499267578125,-89.83100128173828 169.05499267578125,-33.81100082397461 C169.05499267578125,22.20800018310547 123.64199829101562,67.62200164794922 67.62200164794922,67.62200164794922 C67.62200164794922,67.62200164794922 50.71699905395508,67.62200164794922 50.71699905395508,67.62200164794922 C50.71699905395508,67.62200164794922 -50.71699905395508,135.24400329589844 -50.71699905395508,135.24400329589844 C-50.71699905395508,135.24400329589844 -50.71699905395508,67.62200164794922 -50.71699905395508,67.62200164794922 C-50.71699905395508,67.62200164794922 -67.62200164794922,67.62200164794922 -67.62200164794922,67.62200164794922 C-123.64199829101562,67.62200164794922 -169.05499267578125,22.20800018310547 -169.05499267578125,-33.81100082397461 C-169.05499267578125,-89.83100128173828 -123.64199829101562,-135.24400329589844 -67.62200164794922,-135.24400329589844z"></path></g></g><g data-target="dot3" transform="matrix(1,0,0,1,424.6109924316406,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.88800048828125,-10.815999984741211 -19.88800048828125,0 C-19.88800048828125,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.88800048828125,10.8149995803833 19.88800048828125,0 C19.88800048828125,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot1" transform="matrix(1,0,0,1,285.3890075683594,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M0,-19.58300018310547 C-10.984000205993652,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984000205993652,19.58300018310547 0,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 0,-19.58300018310547z"></path></g></g><g data-target="dot2" transform="matrix(1,0,0,1,354.9989929199219,355.21099853515625)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(30,30,30)" fill-opacity="1" d=" M-0.0010000000474974513,-19.58300018310547 C-10.984999656677246,-19.58300018310547 -19.888999938964844,-10.815999984741211 -19.888999938964844,0 C-19.888999938964844,10.8149995803833 -10.984999656677246,19.58300018310547 -0.0010000000474974513,19.58300018310547 C10.984000205993652,19.58300018310547 19.888999938964844,10.8149995803833 19.888999938964844,0 C19.888999938964844,-10.815999984741211 10.984000205993652,-19.58300018310547 -0.0010000000474974513,-19.58300018310547z"></path></g></g><g data-target="wave"><g transform="matrix(0.9995219707489014,-0.03091629408299923,0.03091629408299923,0.9995219707489014,356.4827575683594,355.05108642578125)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(31,31,31)" fill-opacity="1" d=" M73.96199798583984,-17.92799949645996 C73.96199798583984,-17.92799949645996 49.125999450683594,-29.759000778198242 49.125999450683594,-29.759000778198242 C40.44200134277344,-9.998000144958496 21.340900421142578,2.770447254180908 0.46700000762939453,2.7699999809265137 C-21.07493782043457,2.769519567489624 -40.41497039794922,-10.566868782043457 -48.804969787597656,-31.209869384765625 C-48.804969787597656,-31.209869384765625 -60.26470184326172,-26.16266632080078 -60.26519775390625,-26.1624755859375 C-60.265830993652344,-26.162199020385742 -73.96195220947266,-20.127910614013672 -73.96195220947266,-20.127910614013672 C-61.29095458984375,11.061088562011719 -32.06700134277344,31.209999084472656 0.46700000762939453,31.209999084472656 C31.999000549316406,31.209999084472656 60.83599853515625,11.920999526977539 73.96199798583984,-17.92799949645996z"></path></g></g></g></g></svg>';
function _g() {
  var e = document.createElement("div");
  e.className = "tdw-widget-trigger-animate", e.innerHTML = Rg;
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
var Va = "talkdesk-chat-widget-trigger";
function jg(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = _g(), a = document.createElement("button");
  a.id = Va, a.className = "tdw-widget-trigger", a.ariaLabel = "Open chat widget", t && a.setAttribute("data-preview", "");
  var i = null, o = null, u = function() {
    var m;
    (m = o) === null || m === void 0 || m.destroy(), o = null;
  }, v = function() {
    o || (o = new Hf(a, {
      onClick: function() {
      }
    }));
  }, s = function() {
    document.getElementById(Va) || (e.appendChild(a), a.appendChild(n.element), a.onclick = function() {
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
var Ag = TypeError, Lg = 9007199254740991, Ng = function(e) {
  if (e > Lg) throw Ag("Maximum allowed index exceeded");
  return e;
}, Mg = _, Dg = N, Fg = fr, kg = function(e, r, t) {
  Mg ? Dg.f(e, r, Fg(0, t)) : e[r] = t;
}, Bg = x, Gg = w, Ug = Qi, Kg = P, zg = Se, Wg = gr, Ha = Ng, Ya = kg, Vg = ao, Hg = oo, Yg = T, Xg = ur, qo = Yg("isConcatSpreadable"), Jg = Xg >= 51 || !Gg(function() {
  var e = [];
  return e[qo] = !1, e.concat()[0] !== e;
}), qg = function(e) {
  if (!Kg(e)) return !1;
  var r = e[qo];
  return r !== void 0 ? !!r : Ug(e);
}, Qg = !Jg || !Hg("concat");
Bg({ target: "Array", proto: !0, arity: 1, forced: Qg }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function(r) {
    var t = zg(this), n = Vg(t, 0), a = 0, i, o, u, v, s;
    for (i = -1, u = arguments.length; i < u; i++)
      if (s = i === -1 ? t : arguments[i], qg(s))
        for (v = Wg(s), Ha(a + v), o = 0; o < v; o++, a++) o in s && Ya(n, a, s[o]);
      else
        Ha(a + 1), Ya(n, a++, s);
    return n.length = a, n;
  }
});
var Zg = T, e0 = mr, r0 = N.f, _t = Zg("unscopables"), jt = Array.prototype;
jt[_t] === void 0 && r0(jt, _t, {
  configurable: !0,
  value: e0(null)
});
var t0 = function(e) {
  jt[_t][e] = !0;
}, n0 = w, a0 = !n0(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), i0 = j, o0 = E, s0 = Se, u0 = zt, c0 = a0, Xa = u0("IE_PROTO"), At = Object, v0 = At.prototype, Qo = c0 ? At.getPrototypeOf : function(e) {
  var r = s0(e);
  if (i0(r, Xa)) return r[Xa];
  var t = r.constructor;
  return o0(t) && r instanceof t ? t.prototype : r instanceof At ? v0 : null;
}, l0 = w, f0 = E, d0 = P, Ja = Qo, h0 = B, p0 = T, Lt = p0("iterator"), Zo = !1, H, tt, nt;
[].keys && (nt = [].keys(), "next" in nt ? (tt = Ja(Ja(nt)), tt !== Object.prototype && (H = tt)) : Zo = !0);
var g0 = !d0(H) || l0(function() {
  var e = {};
  return H[Lt].call(e) !== e;
});
g0 && (H = {});
f0(H[Lt]) || h0(H, Lt, function() {
  return this;
});
var es = {
  IteratorPrototype: H,
  BUGGY_SAFARI_ITERATORS: Zo
}, y0 = es.IteratorPrototype, m0 = mr, b0 = fr, $0 = Pe, w0 = xe, S0 = function() {
  return this;
}, E0 = function(e, r, t, n) {
  var a = r + " Iterator";
  return e.prototype = m0(y0, { next: b0(+!n, t) }), $0(e, a, !1), w0[a] = S0, e;
}, O0 = x, I0 = A, rs = Ut, T0 = E, P0 = E0, qa = Qo, Qa = tn, C0 = Pe, x0 = Oe, at = B, R0 = T, _0 = xe, ts = es, j0 = rs.PROPER, A0 = rs.CONFIGURABLE, Za = ts.IteratorPrototype, Ke = ts.BUGGY_SAFARI_ITERATORS, he = R0("iterator"), ei = "keys", pe = "values", ri = "entries", L0 = function() {
  return this;
}, dn = function(e, r, t, n, a, i, o) {
  P0(t, r, n);
  var u = function(y) {
    if (y === a && f) return f;
    if (!Ke && y && y in c) return c[y];
    switch (y) {
      case ei:
        return function() {
          return new t(this, y);
        };
      case pe:
        return function() {
          return new t(this, y);
        };
      case ri:
        return function() {
          return new t(this, y);
        };
    }
    return function() {
      return new t(this);
    };
  }, v = r + " Iterator", s = !1, c = e.prototype, l = c[he] || c["@@iterator"] || a && c[a], f = !Ke && l || u(a), d = r === "Array" && c.entries || l, h, p, m;
  if (d && (h = qa(d.call(new e())), h !== Object.prototype && h.next && (qa(h) !== Za && (Qa ? Qa(h, Za) : T0(h[he]) || at(h, he, L0)), C0(h, v, !0))), j0 && a === pe && l && l.name !== pe && (A0 ? x0(c, "name", pe) : (s = !0, f = function() {
    return I0(l, this);
  })), a)
    if (p = {
      values: u(pe),
      keys: i ? f : u(ei),
      entries: u(ri)
    }, o) for (m in p)
      (Ke || s || !(m in c)) && at(c, m, p[m]);
    else O0({ target: r, proto: !0, forced: Ke || s }, p);
  return c[he] !== f && at(c, he, f, { name: a }), _0[r] = f, p;
}, hn = function(e, r) {
  return { value: e, done: r };
}, N0 = J, pn = t0, ti = xe, ns = ue, M0 = N.f, D0 = dn, ze = hn, F0 = _, as = "Array Iterator", k0 = ns.set, B0 = ns.getterFor(as), G0 = D0(Array, "Array", function(e, r) {
  k0(this, {
    type: as,
    target: N0(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = B0(this), r = e.target, t = e.index++;
  if (!r || t >= r.length)
    return e.target = void 0, ze(void 0, !0);
  switch (e.kind) {
    case "keys":
      return ze(t, !1);
    case "values":
      return ze(r[t], !1);
  }
  return ze([t, r[t]], !1);
}, "values"), ni = ti.Arguments = ti.Array;
pn("keys");
pn("values");
pn("entries");
if (F0 && ni.name !== "values") try {
  M0(ni, "name", { value: "values" });
} catch {
}
var is = { exports: {} }, os = {}, U0 = X, K0 = J, ss = pr.f, z0 = yo, us = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], W0 = function(e) {
  try {
    return ss(e);
  } catch {
    return z0(us);
  }
};
os.f = function(r) {
  return us && U0(r) === "Window" ? W0(r) : ss(K0(r));
};
var V0 = w, H0 = V0(function() {
  if (typeof ArrayBuffer == "function") {
    var e = new ArrayBuffer(8);
    Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
  }
}), Y0 = w, X0 = P, J0 = X, ai = H0, Qe = Object.isExtensible, q0 = Y0(function() {
  Qe(1);
}), Q0 = q0 || ai ? function(r) {
  return !X0(r) || ai && J0(r) === "ArrayBuffer" ? !1 : Qe ? Qe(r) : !0;
} : Qe, Z0 = w, ey = !Z0(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), ry = x, ty = O, ny = dr, ay = P, gn = j, iy = N.f, ii = pr, oy = os, yn = Q0, sy = Ft, uy = ey, cs = !1, k = sy("meta"), cy = 0, mn = function(e) {
  iy(e, k, { value: {
    objectID: "O" + cy++,
    // object ID
    weakData: {}
    // weak collections IDs
  } });
}, vy = function(e, r) {
  if (!ay(e)) return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
  if (!gn(e, k)) {
    if (!yn(e)) return "F";
    if (!r) return "E";
    mn(e);
  }
  return e[k].objectID;
}, ly = function(e, r) {
  if (!gn(e, k)) {
    if (!yn(e)) return !0;
    if (!r) return !1;
    mn(e);
  }
  return e[k].weakData;
}, fy = function(e) {
  return uy && cs && yn(e) && !gn(e, k) && mn(e), e;
}, dy = function() {
  hy.enable = function() {
  }, cs = !0;
  var e = ii.f, r = ty([].splice), t = {};
  t[k] = 1, e(t).length && (ii.f = function(n) {
    for (var a = e(n), i = 0, o = a.length; i < o; i++)
      if (a[i] === k) {
        r(a, i, 1);
        break;
      }
    return a;
  }, ry({ target: "Object", stat: !0, forced: !0 }, {
    getOwnPropertyNames: oy.f
  }));
}, hy = is.exports = {
  enable: dy,
  fastKey: vy,
  getWeakData: ly,
  onFreeze: fy
};
ny[k] = !0;
var vs = is.exports, py = E, gy = P, oi = tn, yy = function(e, r, t) {
  var n, a;
  return (
    // it can work only with native `setPrototypeOf`
    oi && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    py(n = r.constructor) && n !== t && gy(a = n.prototype) && a !== t.prototype && oi(e, a), e
  );
}, my = x, by = $, $y = O, si = Jt, wy = B, Sy = vs, Ey = Sr, Oy = nn, Iy = E, Ty = se, it = P, ot = w, Py = ko, Cy = Pe, xy = yy, Ry = function(e, r, t) {
  var n = e.indexOf("Map") !== -1, a = e.indexOf("Weak") !== -1, i = n ? "set" : "add", o = by[e], u = o && o.prototype, v = o, s = {}, c = function(y) {
    var g = $y(u[y]);
    wy(
      u,
      y,
      y === "add" ? function(I) {
        return g(this, I === 0 ? 0 : I), this;
      } : y === "delete" ? function(S) {
        return a && !it(S) ? !1 : g(this, S === 0 ? 0 : S);
      } : y === "get" ? function(I) {
        return a && !it(I) ? void 0 : g(this, I === 0 ? 0 : I);
      } : y === "has" ? function(I) {
        return a && !it(I) ? !1 : g(this, I === 0 ? 0 : I);
      } : function(I, gs) {
        return g(this, I === 0 ? 0 : I, gs), this;
      }
    );
  }, l = si(
    e,
    !Iy(o) || !(a || u.forEach && !ot(function() {
      new o().entries().next();
    }))
  );
  if (l)
    v = t.getConstructor(r, e, n, i), Sy.enable();
  else if (si(e, !0)) {
    var f = new v(), d = f[i](a ? {} : -0, 1) !== f, h = ot(function() {
      f.has(1);
    }), p = Py(function(y) {
      new o(y);
    }), m = !a && ot(function() {
      for (var y = new o(), g = 5; g--; ) y[i](g, g);
      return !y.has(-0);
    });
    p || (v = r(function(y, g) {
      Oy(y, u);
      var S = xy(new o(), y, v);
      return Ty(g) || Ey(g, S[i], { that: S, AS_ENTRIES: n }), S;
    }), v.prototype = u, u.constructor = v), (h || m) && (c("delete"), c("has"), n && c("get")), (m || d) && c(i), a && u.clear && delete u.clear;
  }
  return s[e] = v, my({ global: !0, constructor: !0, forced: v !== o }, s), Cy(v, e), a || t.setStrong(v, e, n), v;
}, _y = B, jy = function(e, r, t) {
  for (var n in r) _y(e, n, r[n], t);
  return e;
}, ui = mr, Ay = ho, ci = jy, Ly = Te, Ny = nn, My = se, Dy = Sr, Fy = dn, We = hn, ky = po, ge = _, vi = vs.fastKey, ls = ue, li = ls.set, st = ls.getterFor, By = {
  getConstructor: function(e, r, t, n) {
    var a = e(function(s, c) {
      Ny(s, i), li(s, {
        type: r,
        index: ui(null),
        first: void 0,
        last: void 0,
        size: 0
      }), ge || (s.size = 0), My(c) || Dy(c, s[n], { that: s, AS_ENTRIES: t });
    }), i = a.prototype, o = st(r), u = function(s, c, l) {
      var f = o(s), d = v(s, c), h, p;
      return d ? d.value = l : (f.last = d = {
        index: p = vi(c, !0),
        key: c,
        value: l,
        previous: h = f.last,
        next: void 0,
        removed: !1
      }, f.first || (f.first = d), h && (h.next = d), ge ? f.size++ : s.size++, p !== "F" && (f.index[p] = d)), s;
    }, v = function(s, c) {
      var l = o(s), f = vi(c), d;
      if (f !== "F") return l.index[f];
      for (d = l.first; d; d = d.next)
        if (d.key === c) return d;
    };
    return ci(i, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function() {
        for (var c = this, l = o(c), f = l.first; f; )
          f.removed = !0, f.previous && (f.previous = f.previous.next = void 0), f = f.next;
        l.first = l.last = void 0, l.index = ui(null), ge ? l.size = 0 : c.size = 0;
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
        for (var l = o(this), f = Ly(c, arguments.length > 1 ? arguments[1] : void 0), d; d = d ? d.next : l.first; )
          for (f(d.value, d.key, this); d && d.removed; ) d = d.previous;
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function(c) {
        return !!v(this, c);
      }
    }), ci(i, t ? {
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
    }), ge && Ay(i, "size", {
      configurable: !0,
      get: function() {
        return o(this).size;
      }
    }), a;
  },
  setStrong: function(e, r, t) {
    var n = r + " Iterator", a = st(r), i = st(n);
    Fy(e, r, function(o, u) {
      li(this, {
        type: n,
        target: o,
        state: a(o),
        kind: u,
        last: void 0
      });
    }, function() {
      for (var o = i(this), u = o.kind, v = o.last; v && v.removed; ) v = v.previous;
      return !o.target || !(o.last = v = v ? v.next : o.state.first) ? (o.target = void 0, We(void 0, !0)) : We(u === "keys" ? v.key : u === "values" ? v.value : [v.key, v.value], !1);
    }, t ? "entries" : "values", !t, !0), ky(r);
  }
}, Gy = Ry, Uy = By;
Gy("Map", function(e) {
  return function() {
    return e(this, arguments.length ? arguments[0] : void 0);
  };
}, Uy);
var bn = O, Ky = Yt, zy = yr, Wy = sr, Vy = bn("".charAt), fi = bn("".charCodeAt), Hy = bn("".slice), di = function(e) {
  return function(r, t) {
    var n = zy(Wy(r)), a = Ky(t), i = n.length, o, u;
    return a < 0 || a >= i ? e ? "" : void 0 : (o = fi(n, a), o < 55296 || o > 56319 || a + 1 === i || (u = fi(n, a + 1)) < 56320 || u > 57343 ? e ? Vy(n, a) : o : e ? Hy(n, a, a + 2) : (o - 55296 << 10) + (u - 56320) + 65536);
  };
}, Yy = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: di(!1),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: di(!0)
}, Xy = Yy.charAt, Jy = yr, fs = ue, qy = dn, hi = hn, ds = "String Iterator", Qy = fs.set, Zy = fs.getterFor(ds);
qy(String, "String", function(e) {
  Qy(this, {
    type: ds,
    string: Jy(e),
    index: 0
  });
}, function() {
  var r = Zy(this), t = r.string, n = r.index, a;
  return n >= t.length ? hi(void 0, !0) : (a = Xy(t, n), r.index += a.length, hi(a, !1));
});
var pi = $, hs = co, em = vo, ye = G0, gi = Oe, rm = Pe, tm = T, ut = tm("iterator"), ct = ye.values, ps = function(e, r) {
  if (e) {
    if (e[ut] !== ct) try {
      gi(e, ut, ct);
    } catch {
      e[ut] = ct;
    }
    if (rm(e, r, !0), hs[r]) {
      for (var t in ye)
        if (e[t] !== ye[t]) try {
          gi(e, t, ye[t]);
        } catch {
          e[t] = ye[t];
        }
    }
  }
};
for (var vt in hs)
  ps(pi[vt] && pi[vt].prototype, vt);
ps(em, "DOMTokenList");
function nm(e) {
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
function am() {
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
function im(e) {
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
var om = "talkdesk-chat-widget", yi = "loading-element", sm = "iframe-element", um = function() {
  var r = W.getAllConfig(), t = r.appProps;
  return "./v2/widget/latest/index.html?touchpointId=".concat(t == null ? void 0 : t.touchpointId);
}, cm = function() {
  return "".concat("https://talkdeskchatsdk.svc.talkdeskstg.com", "/v2/widget/latest/preview.html");
};
function vm(e, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = nm(om), a = im(function() {
    n.remove(yi);
  });
  n.append(yi, am()), n.hide(), t && n.element.setAttribute("data-preview", "");
  var i = function() {
    n.isMounted() || (e.appendChild(n.element), a.element.src = t ? cm() : um(), n.append(sm, a), r && a.element.contentWindow && r(a.element.contentWindow));
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
function lm(e) {
  var r = document.getElementById(e);
  if (!r)
    throw new Error('The element not exist, element id = "#'.concat(e, '"'));
  var t = [], n = null, a = !1, i = null, o = null, u = yg({
    root: r,
    isPreview: !0
  }), v = jg(u.element, function() {
  }, !0), s = vm(u.element, function(d) {
    n = new sg({
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
    W.setAppConfig(h), t.push(hg(u.element)), o || (o = gg(u.element)), s.open(), v.open();
  }, l = function() {
    var h;
    v.destroy(), s.destroy(), u.destroy(), t.forEach(function(p) {
      return p();
    }), t.length = 0, i = null, W.clearAll(), (h = o) === null || h === void 0 || h(), o = null;
  }, f = function(h) {
    var p;
    W.setTouchpoint({
      active: !0,
      config: Wf(h == null ? void 0 : h.widgetSettings),
      account_id: ""
    }), W.setParticipantName(h.userName || "");
    var m = pg(u.element, (p = W.getAllConfig()) === null || p === void 0 || (p = p.appConfig) === null || p === void 0 ? void 0 : p.styles, h);
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
function fm(e) {
  return lm(e);
}
export {
  fm as default
};
//# sourceMappingURL=talkdeskchatpreviewsdk.es.js.map
