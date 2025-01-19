/*!
 * Built by Endavans
 * © https://beeq.design - Apache 2 License.
 */
class te {
  /**
   * @type {T}
   */
  #t;
  #e = /* @__PURE__ */ new Set();
  /**
   * @param {T} current
   */
  constructor(t) {
    this.#t = t;
  }
  /**
   * @return {T}
   */
  get current() {
    return this.#t;
  }
  /**
   * @param {T} value
   */
  set current(t) {
    this.#t != t && (this.#t = t, this.#e.forEach((n) => n(t)));
  }
  /**
   * @type {import("hooks").Ref["on"]}
   */
  on(t) {
    return this.#e.add(t), () => this.#e.delete(t);
  }
}
const Mt = (e) => new te(e), tt = Symbol.for("atomico.hooks");
globalThis[tt] = globalThis[tt] || {};
let k = globalThis[tt];
const ee = Symbol.for("Atomico.suspense"), At = Symbol.for("Atomico.effect"), ne = Symbol.for("Atomico.layoutEffect"), Ft = Symbol.for("Atomico.insertionEffect"), O = (e, t, n) => {
  const { i: s, hooks: r } = k.c, o = r[s] = r[s] || {};
  return o.value = e(o.value), o.effect = t, o.tag = n, k.c.i++, r[s].value;
}, se = (e) => O((t = Mt(e)) => t), _ = () => O((e = Mt(k.c.host)) => e), Rt = () => k.c.update, oe = (e, t, n = 0) => {
  let s = {}, r = !1;
  const o = () => r, c = (i, f) => {
    for (const d in s) {
      const l = s[d];
      l.effect && l.tag === i && (l.value = l.effect(l.value, f));
    }
  };
  return { load: (i) => {
    k.c = { host: t, hooks: s, update: e, i: 0, id: n };
    let f;
    try {
      r = !1, f = i();
    } catch (d) {
      if (d !== ee)
        throw d;
      r = !0;
    } finally {
      k.c = null;
    }
    return f;
  }, cleanEffects: (i) => (c(Ft, i), () => (c(ne, i), () => {
    c(At, i);
  })), isSuspense: o };
}, M = Symbol.for;
function It(e, t) {
  const n = e.length;
  if (n !== t.length)
    return !1;
  for (let s = 0; s < n; s++) {
    let r = e[s], o = t[s];
    if (r !== o)
      return !1;
  }
  return !0;
}
const w = (e) => typeof e == "function", R = (e) => typeof e == "object", { isArray: re } = Array, et = (e, t) => (t ? e instanceof HTMLStyleElement : !0) && "hydrate" in (e?.dataset || {});
function Ut(e, t) {
  let n;
  const s = (r) => {
    let { length: o } = r;
    for (let c = 0; c < o; c++) {
      const u = r[c];
      if (u && Array.isArray(u))
        s(u);
      else {
        const a = typeof u;
        if (u == null || a === "function" || a === "boolean")
          continue;
        a === "string" || a === "number" ? (n == null && (n = ""), n += u) : (n != null && (t(n), n = null), t(u));
      }
    }
  };
  s(e), n != null && t(n);
}
const $t = (e, t, n) => (e.addEventListener(t, n), () => e.removeEventListener(t, n));
class Lt {
  /**
   *
   * @param {HTMLElement} target
   * @param {string} message
   * @param {string} value
   */
  constructor(t, n, s) {
    this.message = n, this.target = t, this.value = s;
  }
}
class _t extends Lt {
}
class ce extends Lt {
}
const q = "Custom", ie = null, ae = { true: 1, "": 1, 1: 1 };
function le(e, t, n, s, r) {
  const {
    type: o,
    reflect: c,
    event: u,
    value: a,
    attr: i = ue(t)
  } = n?.name != q && R(n) && n != ie ? n : { type: n }, f = o?.name === q && o.map, d = a != null ? o == Function || !w(a) ? () => a : a : null;
  Object.defineProperty(e, t, {
    configurable: !0,
    /**
     * @this {import("dom").AtomicoThisInternal}
     * @param {any} newValue
     */
    set(l) {
      const m = this[t];
      d && o != Boolean && l == null && (l = d());
      const { error: v, value: p } = (f ? he : me)(
        o,
        l
      );
      if (v && p != null)
        throw new _t(
          this,
          `The value defined for prop '${t}' must be of type '${o.name}'`,
          p
        );
      m != p && (this._props[t] = p ?? void 0, this.update(), u && jt(this, u), this.updated.then(() => {
        c && (this._ignoreAttr = i, fe(this, o, i, this[t]), this._ignoreAttr = null);
      }));
    },
    /**
     * @this {import("dom").AtomicoThisInternal}
     */
    get() {
      return this._props[t];
    }
  }), d && (r[t] = d()), s[i] = { prop: t, type: o };
}
const jt = (e, { type: t, base: n = CustomEvent, ...s }) => e.dispatchEvent(new n(t, s)), ue = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(), fe = (e, t, n, s) => s == null || t == Boolean && !s ? e.removeAttribute(n) : e.setAttribute(
  n,
  t?.name === q && t?.serialize ? t?.serialize(s) : R(s) ? JSON.stringify(s) : t == Boolean ? "" : s
), de = (e, t) => e == Boolean ? !!ae[t] : e == Number ? Number(t) : e == String ? t : e == Array || e == Object ? JSON.parse(t) : e.name == q ? t : (
  // TODO: If when defining reflect the prop can also be of type string?
  new e(t)
), he = ({ map: e }, t) => {
  try {
    return { value: e(t), error: !1 };
  } catch {
    return { value: t, error: !0 };
  }
}, me = (e, t) => e == null || t == null ? { value: t, error: !1 } : e != String && t === "" ? { value: void 0, error: !1 } : e == Object || e == Array || e == Symbol ? {
  value: t,
  error: {}.toString.call(t) !== `[object ${e.name}]`
} : t instanceof e ? {
  value: t,
  error: e == Number && Number.isNaN(t.valueOf())
} : e == String || e == Number || e == Boolean ? {
  value: t,
  error: e == Number ? typeof t != "number" ? !0 : Number.isNaN(t) : e == String ? typeof t != "string" : typeof t != "boolean"
} : { value: t, error: !0 };
let ye = 0;
const pe = (e) => {
  const t = (e?.dataset || {})?.hydrate || "";
  return t || "c" + ye++;
}, j = (e, t = HTMLElement) => {
  const n = {}, s = {}, r = "prototype" in t && t.prototype instanceof Element, o = r ? t : "base" in t ? t.base : HTMLElement, { props: c, styles: u } = r ? e : t;
  class a extends o {
    constructor() {
      super(), this._setup(), this._render = () => e({ ...this._props });
      for (const f in s)
        this[f] = s[f];
    }
    /**
     * @returns {import("core").Sheets[]}
     */
    static get styles() {
      return [super.styles, u];
    }
    async _setup() {
      if (this._props)
        return;
      this._props = {};
      let f, d;
      this.mounted = new Promise(
        (h) => this.mount = () => {
          h(), f != this.parentNode && (d != f ? this.unmounted.then(this.update) : this.update()), f = this.parentNode;
        }
      ), this.unmounted = new Promise(
        (h) => this.unmount = () => {
          h(), (f != this.parentNode || !this.isConnected) && (l.cleanEffects(!0)()(), d = this.parentNode, f = null);
        }
      ), this.symbolId = this.symbolId || Symbol(), this.symbolIdParent = Symbol();
      const l = oe(
        () => this.update(),
        this,
        pe(this)
      );
      let m, v = !0;
      const p = et(this);
      this.update = () => (m || (m = !0, this.updated = (this.updated || this.mounted).then(() => {
        try {
          const h = l.load(this._render), b = l.cleanEffects();
          return h && //@ts-ignore
          h.render(this, this.symbolId, p), m = !1, v && !l.isSuspense() && (v = !1, !p && be(this)), b();
        } finally {
          m = !1;
        }
      }).then(
        /**
         * @param {import("internal/hooks.js").CleanUseEffects} [cleanUseEffect]
         */
        (h) => {
          h && h();
        }
      )), this.updated), this.update();
    }
    connectedCallback() {
      this.mount(), super.connectedCallback && super.connectedCallback();
    }
    disconnectedCallback() {
      super.disconnectedCallback && super.disconnectedCallback(), this.unmount();
    }
    /**
     * @this {import("dom").AtomicoThisInternal}
     * @param {string} attr
     * @param {(string|null)} oldValue
     * @param {(string|null)} value
     */
    attributeChangedCallback(f, d, l) {
      if (n[f]) {
        if (f === this._ignoreAttr || d === l)
          return;
        const { prop: m, type: v } = n[f];
        try {
          this[m] = de(v, l);
        } catch {
          throw new ce(
            this,
            `The value defined as attr '${f}' cannot be parsed by type '${v.name}'`,
            l
          );
        }
      } else
        super.attributeChangedCallback(f, d, l);
    }
    static get props() {
      return { ...super.props, ...c };
    }
    static get observedAttributes() {
      const f = super.observedAttributes || [];
      for (const d in c)
        le(this.prototype, d, c[d], n, s);
      return Object.keys(n).concat(f);
    }
  }
  return a;
};
function be(e) {
  const { styles: t } = e.constructor, { shadowRoot: n } = e;
  if (n && t.length) {
    const s = [];
    Ut(t, (r) => {
      r && (r instanceof Element ? n.appendChild(r.cloneNode(!0)) : s.push(r));
    }), s.length && (n.adoptedStyleSheets = s);
  }
}
const Yt = (e) => (t, n) => {
  O(
    /**
     * Clean the effect hook
     * @type {import("internal/hooks.js").CollectorEffect}
     */
    ([s, r] = []) => ((r || !r) && (r && It(r, n) ? s = s || !0 : (w(s) && s(), s = null)), [s, n]),
    /**
     * @returns {any}
     */
    ([s, r], o) => o ? (w(s) && s(), []) : [s || t(), r],
    e
  );
}, $ = Yt(At), ge = Yt(Ft);
class Bt extends Array {
  /**
   *
   * @param {any} initialState
   * @param {(nextState: any, state:any[], mount: boolean )=>void} mapState
   */
  constructor(t, n) {
    let s = !0;
    const r = (o) => {
      try {
        n(o, this, s);
      } finally {
        s = !1;
      }
    };
    super(void 0, r, n), r(t);
  }
  /**
   * The following code allows a mutable approach to useState
   * and useProp this with the idea of allowing an alternative
   * approach similar to Vue or Qwik of state management
   * @todo pending review with the community
   */
  // get value() {
  //     return this[0];
  // }
  // set value(nextState) {
  //     this[2](nextState, this);
  // }
}
const rt = (e) => {
  const t = Rt();
  return O(
    (n = new Bt(e, (s, r, o) => {
      s = w(s) ? s(r[0]) : s, s !== r[0] && (r[0] = s, o || t());
    })) => n
  );
}, T = (e, t) => {
  const [n] = O(([s, r, o = 0] = []) => ((!r || r && !It(r, t)) && (s = e()), [s, t, o]));
  return n;
}, ct = (e) => {
  const { current: t } = _();
  if (!(e in t))
    throw new _t(
      t,
      `For useProp("${e}"), the prop does not exist on the host.`,
      e
    );
  return O(
    (n = new Bt(t[e], (s, r) => {
      s = w(s) ? s(t[e]) : s, t[e] = s;
    })) => (n[0] = t[e], n)
  );
}, C = (e, t = {}) => {
  const n = _();
  return n[e] || (n[e] = (s = t.detail) => jt(n.current, {
    type: e,
    ...t,
    detail: s
  })), n[e];
}, nt = M("atomico/options");
globalThis[nt] = globalThis[nt] || {
  sheet: !!document.adoptedStyleSheets
};
const qt = globalThis[nt], Ee = {
  checked: 1,
  value: 1,
  selected: 1
}, ve = {
  list: 1,
  type: 1,
  size: 1,
  form: 1,
  width: 1,
  height: 1,
  src: 1,
  href: 1,
  slot: 1
}, De = {
  shadowDom: 1,
  staticNode: 1,
  cloneNode: 1,
  children: 1,
  key: 1
}, B = {}, st = [];
class ot extends Text {
}
const Se = M("atomico/id"), I = M("atomico/type"), Z = M("atomico/ref"), xt = M("atomico/vnode"), we = () => {
};
function Ce(e, t, n) {
  return Ht(this, e, t, n);
}
const zt = (e, t, ...n) => {
  const s = t || B;
  let { children: r } = s;
  if (r = r ?? (n.length ? n : st), e === we)
    return r;
  const o = e ? e instanceof Node ? 1 : (
    //@ts-ignore
    e.prototype instanceof HTMLElement && 2
  ) : 0;
  if (o === !1 && e instanceof Function)
    return e(
      r != st ? { children: r, ...s } : s
    );
  const c = qt.render || Ce;
  return {
    [I]: xt,
    type: e,
    props: s,
    children: r,
    key: s.key,
    // key for lists by keys
    // define if the node declares its shadowDom
    shadow: s.shadowDom,
    // allows renderings to run only once
    static: s.staticNode,
    // defines whether the type is a childNode `1` or a constructor `2`
    raw: o,
    // defines whether to use the second parameter for document.createElement
    is: s.is,
    // clone the node if it comes from a reference
    clone: s.cloneNode,
    render: c
  };
};
function Ht(e, t, n = Se, s, r) {
  let o;
  if (t && t[n] && t[n].vnode == e || e[I] != xt)
    return t;
  (e || !t) && (r = r || e.type == "svg", o = e.type != "host" && (e.raw == 1 ? (t && e.clone ? t[Z] : t) != e.type : e.raw == 2 ? !(t instanceof e.type) : t ? t[Z] || t.localName != e.type : !t), o && e.type != null && (e.raw == 1 && e.clone ? (s = !0, t = e.type.cloneNode(!0), t[Z] = e.type) : t = e.raw == 1 ? e.type : e.raw == 2 ? new e.type() : r ? document.createElementNS(
    "http://www.w3.org/2000/svg",
    e.type
  ) : document.createElement(
    e.type,
    e.is ? { is: e.is } : void 0
  )));
  const c = t[n] ? t[n] : B, { vnode: u = B, cycle: a = 0 } = c;
  let { fragment: i, handlers: f } = c;
  const { children: d = st, props: l = B } = u;
  if (f = o ? {} : f || {}, e.static && !o)
    return t;
  if (e.shadow && !t.shadowRoot && // @ts-ignore
  t.attachShadow({ mode: "open", ...e.shadow }), e.props != l && Ne(t, l, e.props, f, r), e.children !== d) {
    const m = e.shadow ? t.shadowRoot : t;
    i = Pe(
      e.children,
      /**
       * @todo for hydration use attribute and send childNodes
       */
      i,
      m,
      n,
      // add support to foreignObject, children will escape from svg
      !a && s,
      r && e.type == "foreignObject" ? !1 : r
    );
  }
  return t[n] = { vnode: e, handlers: f, fragment: i, cycle: a + 1 }, t;
}
function Te(e, t) {
  const n = new ot(""), s = new ot("");
  let r;
  if (e[t ? "prepend" : "append"](n), t) {
    let { lastElementChild: o } = e;
    for (; o; ) {
      const { previousElementSibling: c } = o;
      if (et(o, !0) && !et(c, !0)) {
        r = o;
        break;
      }
      o = c;
    }
  }
  return r ? r.before(s) : e.append(s), {
    markStart: n,
    markEnd: s
  };
}
function Pe(e, t, n, s, r, o) {
  e = e == null ? null : re(e) ? e : [e];
  const c = t || Te(n, r), { markStart: u, markEnd: a, keyes: i } = c;
  let f;
  const d = i && /* @__PURE__ */ new Set();
  let l = u;
  if (e && Ut(e, (m) => {
    if (typeof m == "object" && !m[I])
      return;
    const v = m[I] && m.key, p = i && v != null && i.get(v);
    l != a && l === p ? d.delete(l) : l = l == a ? a : l.nextSibling;
    const h = i ? p : l;
    let b = h;
    if (m[I])
      b = Ht(m, h, s, r, o);
    else {
      const A = m + "";
      !(b instanceof Text) || b instanceof ot ? b = new Text(A) : b.data != A && (b.data = A);
    }
    b != l && (i && d.delete(b), !h || i ? (n.insertBefore(b, l), i && l != a && d.add(l)) : h == a ? n.insertBefore(b, a) : (n.replaceChild(b, h), l = b)), v != null && (f = f || /* @__PURE__ */ new Map(), f.set(v, b));
  }), l = l == a ? a : l.nextSibling, t && l != a)
    for (; l != a; ) {
      const m = l;
      l = l.nextSibling, m.remove();
    }
  return d && d.forEach((m) => m.remove()), c.keyes = f, c;
}
function Ne(e, t, n, s, r) {
  for (const o in t)
    !(o in n) && Dt(e, o, t[o], null, r, s);
  for (const o in n)
    Dt(e, o, t[o], n[o], r, s);
}
function Dt(e, t, n, s, r, o) {
  if (t = t == "class" && !r ? "className" : t, n = n ?? null, s = s ?? null, t in e && Ee[t] && (n = e[t]), !(s === n || De[t] || t[0] == "_"))
    if (t[0] == "o" && t[1] == "n" && (w(s) || w(n)))
      ke(e, t.slice(2), s, o);
    else if (t == "ref")
      s && (w(s) ? s(e) : s.current = e);
    else if (t == "style") {
      const { style: c } = e;
      n = n || "", s = s || "";
      const u = R(n), a = R(s);
      if (u)
        for (const i in n)
          if (a)
            !(i in s) && St(c, i, null);
          else
            break;
      if (a)
        for (const i in s) {
          const f = s[i];
          u && n[i] === f || St(c, i, f);
        }
      else
        c.cssText = s;
    } else {
      const c = t[0] == "$" ? t.slice(1) : t;
      c === t && (!r && !ve[t] && t in e || w(s) || w(n)) ? e[t] = s ?? "" : s == null ? e.removeAttribute(c) : e.setAttribute(
        c,
        R(s) ? JSON.stringify(s) : s
      );
    }
}
function ke(e, t, n, s) {
  if (s.handleEvent || (s.handleEvent = (r) => s[r.type].call(e, r)), n) {
    if (!s[t]) {
      const r = n.capture || n.once || n.passive ? Object.assign({}, n) : null;
      e.addEventListener(t, s, r);
    }
    s[t] = n;
  } else
    s[t] && (e.removeEventListener(t, s), delete s[t]);
}
function St(e, t, n) {
  let s = "setProperty";
  n == null && (s = "removeProperty", n = null), ~t.indexOf("-") ? e[s](t, n) : e[t] = n;
}
const wt = {};
function z(e, ...t) {
  const n = (e.raw || e).reduce(
    (s, r, o) => s + r + (t[o] || ""),
    ""
  );
  return wt[n] = wt[n] || Oe(n);
}
function Oe(e) {
  if (qt.sheet) {
    const t = new CSSStyleSheet();
    return t.replaceSync(e), t;
  } else {
    const t = document.createElement("style");
    return t.textContent = e, t;
  }
}
const Me = zt("host", { style: "display: contents" }), W = M("atomico/context"), Ae = (e, t) => {
  const n = _();
  ge(
    () => $t(
      n.current,
      "ConnectContext",
      /**
       * @param {CustomEvent<import("context").DetailConnectContext>} event
       */
      (s) => {
        e === s.detail.id && (s.stopPropagation(), s.detail.connect(t));
      }
    ),
    [e]
  );
}, Fe = (e) => {
  const t = C("ConnectContext", {
    bubbles: !0,
    composed: !0
  }), n = () => {
    let o;
    return t({
      id: e,
      connect(c) {
        o = c;
      }
    }), o;
  }, [s, r] = rt(
    n
  );
  return $(() => {
    s || (e[W] || (e[W] = customElements.whenDefined(
      new e().localName
    )), e[W].then(
      () => r(n)
    ));
  }, [e]), s;
}, Re = (e) => {
  const t = Fe(e), n = Rt();
  return $(() => {
    if (t)
      return $t(t, "UpdatedValue", n);
  }, [t]), (t || e).value;
}, Ie = (e) => {
  const t = j(
    () => (Ae(t, _().current), Me),
    {
      props: {
        value: {
          type: Object,
          event: { type: "UpdatedValue" },
          value: () => e
        }
      }
    }
  );
  return t.value = e, t;
}, y = (e, t, n) => (t == null ? t = { key: n } : t.key = n, zt(e, t)), U = y, Kt = z`*,*:before,*:after{box-sizing:border-box}button{padding:0;touch-action:manipulation;cursor:pointer;user-select:none}`, Jt = z`.vh{position:absolute;transform:scale(0)}`;
function it() {
  const e = /* @__PURE__ */ new Date();
  return new E(e.getFullYear(), e.getMonth() + 1, e.getDate());
}
function at(e, t = 0) {
  const n = S(e), s = n.getUTCDay(), r = (s < t ? 7 : 0) + s - t;
  return n.setUTCDate(n.getUTCDate() - r), E.from(n);
}
function Zt(e, t = 0) {
  return at(e, t).add({ days: 6 });
}
function Wt(e) {
  return E.from(new Date(Date.UTC(e.year, e.month, 0)));
}
function H(e, t, n) {
  return t && E.compare(e, t) < 0 ? t : n && E.compare(e, n) > 0 ? n : e;
}
const Ue = { days: 1 };
function $e(e, t = 0) {
  let n = at(e.toPlainDate(), t);
  const s = Zt(Wt(e), t), r = [];
  for (; E.compare(n, s) < 0; ) {
    const o = [];
    for (let c = 0; c < 7; c++)
      o.push(n), n = n.add(Ue);
    r.push(o);
  }
  return r;
}
function S(e) {
  return new Date(Date.UTC(e.year, e.month - 1, e.day ?? 1));
}
const Le = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[0-1])$/, X = (e, t) => e.toString().padStart(t, "0");
class E {
  constructor(t, n, s) {
    this.year = t, this.month = n, this.day = s;
  }
  // this is an incomplete implementation that only handles arithmetic on a single unit at a time.
  // i didn't want to get into more complex arithmetic since it get tricky fast
  // this is enough to serve my needs and will still be a drop-in replacement when actual Temporal API lands
  add(t) {
    const n = S(this);
    if ("days" in t)
      return n.setUTCDate(this.day + t.days), E.from(n);
    let { year: s, month: r } = this;
    "months" in t ? (r = this.month + t.months, n.setUTCMonth(r - 1)) : (s = this.year + t.years, n.setUTCFullYear(s));
    const o = E.from(S({ year: s, month: r, day: 1 }));
    return H(E.from(n), o, Wt(o));
  }
  toString() {
    return `${X(this.year, 4)}-${X(this.month, 2)}-${X(this.day, 2)}`;
  }
  toPlainYearMonth() {
    return new K(this.year, this.month);
  }
  equals(t) {
    return E.compare(this, t) === 0;
  }
  static compare(t, n) {
    return t.year < n.year ? -1 : t.year > n.year ? 1 : t.month < n.month ? -1 : t.month > n.month ? 1 : t.day < n.day ? -1 : t.day > n.day ? 1 : 0;
  }
  static from(t) {
    if (typeof t == "string") {
      const n = t.match(Le);
      if (!n)
        throw new TypeError(t);
      const [, s, r, o] = n;
      return new E(
        parseInt(s, 10),
        parseInt(r, 10),
        parseInt(o, 10)
      );
    }
    return new E(
      t.getUTCFullYear(),
      t.getUTCMonth() + 1,
      t.getUTCDate()
    );
  }
}
class K {
  constructor(t, n) {
    this.year = t, this.month = n;
  }
  add(t) {
    const n = S(this), s = (t.months ?? 0) + (t.years ?? 0) * 12;
    return n.setUTCMonth(n.getUTCMonth() + s), new K(n.getUTCFullYear(), n.getUTCMonth() + 1);
  }
  equals(t) {
    return this.year === t.year && this.month === t.month;
  }
  toPlainDate() {
    return new E(this.year, this.month, 1);
  }
}
function x(e, t) {
  if (t)
    try {
      return e.from(t);
    } catch {
    }
}
function P(e) {
  const [t, n] = ct(e);
  return [T(() => x(E, t), [t]), (o) => n(o?.toString())];
}
function _e(e) {
  const [t = "", n] = ct(e);
  return [T(() => {
    const [o, c] = t.split("/"), u = x(E, o), a = x(E, c);
    return u && a ? [u, a] : [];
  }, [t]), (o) => n(`${o[0]}/${o[1]}`)];
}
function je(e) {
  const [t = "", n] = ct(e);
  return [T(() => {
    const o = [];
    for (const c of t.trim().split(/\s+/)) {
      const u = x(E, c);
      u && o.push(u);
    }
    return o;
  }, [t]), (o) => n(o.join(" "))];
}
function L(e, t) {
  return T(
    () => new Intl.DateTimeFormat(t, { timeZone: "UTC", ...e }),
    [t, e]
  );
}
function Ct(e, t, n) {
  const s = L(e, n);
  return T(() => {
    const r = [], o = /* @__PURE__ */ new Date();
    for (var c = 0; c < 7; c++) {
      const u = (o.getUTCDay() - t + 7) % 7;
      r[u] = s.format(o), o.setUTCDate(o.getUTCDate() + 1);
    }
    return r;
  }, [t, s]);
}
const Tt = (e, t, n) => H(e, t, n) === e, Pt = (e) => e.target.matches(":dir(ltr)"), Ye = { month: "long", day: "numeric" }, Be = { month: "long" }, qe = { weekday: "narrow" }, xe = { weekday: "long" }, G = { bubbles: !0 };
function ze({ props: e, context: t }) {
  const { offset: n } = e, {
    firstDayOfWeek: s,
    isDateDisallowed: r,
    min: o,
    max: c,
    page: u,
    locale: a,
    focusedDate: i
  } = t, f = it(), d = Ct(xe, s, a), l = Ct(qe, s, a), m = L(Ye, a), v = L(Be, a), p = T(
    () => u.start.add({ months: n }),
    [u, n]
  ), h = T(
    () => $e(p, s),
    [p, s]
  ), b = C("focusday", G), A = C("selectday", G), Xt = C("hoverday", G);
  function mt(g) {
    b(H(g, o, c));
  }
  function Gt(g) {
    let D;
    switch (g.key) {
      case "ArrowRight":
        D = i.add({ days: Pt(g) ? 1 : -1 });
        break;
      case "ArrowLeft":
        D = i.add({ days: Pt(g) ? -1 : 1 });
        break;
      case "ArrowDown":
        D = i.add({ days: 7 });
        break;
      case "ArrowUp":
        D = i.add({ days: -7 });
        break;
      case "PageUp":
        D = i.add(g.shiftKey ? { years: -1 } : { months: -1 });
        break;
      case "PageDown":
        D = i.add(g.shiftKey ? { years: 1 } : { months: 1 });
        break;
      case "Home":
        D = at(i, s);
        break;
      case "End":
        D = Zt(i, s);
        break;
      default:
        return;
    }
    mt(D), g.preventDefault();
  }
  function Qt(g) {
    const D = p.equals(g);
    if (!t.showOutsideDays && !D)
      return;
    const Vt = g.equals(i), yt = g.equals(f), pt = S(g), Y = r?.(pt), bt = !Tt(g, o, c);
    let gt = "", N;
    if (t.type === "range") {
      const [F, J] = t.value, Et = F?.equals(g), vt = J?.equals(g);
      N = F && J && Tt(g, F, J), gt = `${Et ? "range-start" : ""} ${vt ? "range-end" : ""} ${N && !Et && !vt ? "range-inner" : ""}`;
    } else
      t.type === "multi" ? N = t.value.some((F) => F.equals(g)) : N = t.value?.equals(g);
    return {
      part: `${`button day ${// we don't want outside days to ever be shown as selected
      D ? N ? "selected" : "" : "outside"} ${Y ? "disallowed" : ""} ${yt ? "today" : ""}`} ${gt}`,
      tabindex: D && Vt ? 0 : -1,
      disabled: bt,
      "aria-disabled": Y ? "true" : void 0,
      "aria-pressed": D && N,
      "aria-current": yt ? "date" : void 0,
      "aria-label": m.format(pt),
      onkeydown: Gt,
      onclick() {
        Y || A(g), mt(g);
      },
      onmouseover() {
        !Y && !bt && Xt(g);
      }
    };
  }
  return {
    weeks: h,
    yearMonth: p,
    daysLong: d,
    daysShort: l,
    formatter: v,
    getDayProps: Qt
  };
}
const Q = it(), lt = Ie({
  type: "date",
  firstDayOfWeek: 1,
  isDateDisallowed: () => !1,
  focusedDate: Q,
  page: { start: Q.toPlainYearMonth(), end: Q.toPlainYearMonth() }
});
customElements.define("calendar-month-ctx", lt);
const He = j(
  (e) => {
    const t = Re(lt), n = se(), s = ze({ props: e, context: t });
    function r() {
      n.current.querySelector("button[tabindex='0']")?.focus();
    }
    return /* @__PURE__ */ U("host", { shadowDom: !0, focus: r, children: [
      /* @__PURE__ */ y("div", { id: "h", part: "heading", children: s.formatter.format(S(s.yearMonth)) }),
      /* @__PURE__ */ U("table", { ref: n, "aria-labelledby": "h", part: "table", children: [
        /* @__PURE__ */ y("thead", { children: /* @__PURE__ */ y("tr", { part: "tr head", children: s.daysLong.map((o, c) => /* @__PURE__ */ U("th", { part: "th", scope: "col", children: [
          /* @__PURE__ */ y("span", { class: "vh", children: o }),
          /* @__PURE__ */ y("span", { "aria-hidden": "true", children: s.daysShort[c] })
        ] })) }) }),
        /* @__PURE__ */ y("tbody", { children: s.weeks.map((o, c) => /* @__PURE__ */ y("tr", { part: "tr week", children: o.map((u, a) => {
          const i = s.getDayProps(u);
          return /* @__PURE__ */ y("td", { part: "td", children: i && /* @__PURE__ */ y("button", { ...i, children: u.day }) }, a);
        }) }, c)) })
      ] })
    ] });
  },
  {
    props: {
      offset: {
        type: Number,
        value: 0
      }
    },
    styles: [
      Kt,
      Jt,
      z`:host{--color-accent: black;--color-text-on-accent: white;display:flex;flex-direction:column;gap:.25rem;text-align:center;inline-size:fit-content}table{border-collapse:collapse;font-size:.875rem}th{font-weight:700;block-size:2.25rem}td{padding-inline:0}button{color:inherit;font-size:inherit;background:transparent;border:0;font-variant-numeric:tabular-nums;block-size:2.25rem;inline-size:2.25rem}button:hover:where(:not(:disabled,[aria-disabled])){background:#0000000d}button:is([aria-pressed=true],:focus-visible){background:var(--color-accent);color:var(--color-text-on-accent)}button:focus-visible{outline:1px solid var(--color-text-on-accent);outline-offset:-2px}button:disabled,:host::part(outside),:host::part(disallowed){cursor:default;opacity:.5}`
    ]
  }
);
customElements.define("calendar-month", He);
function Nt(e) {
  return /* @__PURE__ */ y(
    "button",
    {
      part: `button ${e.name} ${e.onclick ? "" : "disabled"}`,
      onclick: e.onclick,
      "aria-disabled": e.onclick ? null : "true",
      children: /* @__PURE__ */ y("slot", { name: e.name, children: e.children })
    }
  );
}
function ut(e) {
  const t = S(e.page.start), n = S(e.page.end);
  return /* @__PURE__ */ U("div", { role: "group", "aria-labelledby": "h", part: "container", children: [
    /* @__PURE__ */ y("div", { id: "h", class: "vh", "aria-live": "polite", "aria-atomic": "true", children: e.formatVerbose.formatRange(t, n) }),
    /* @__PURE__ */ U("div", { part: "header", children: [
      /* @__PURE__ */ y(Nt, { name: "previous", onclick: e.previous, children: "Previous" }),
      /* @__PURE__ */ y("slot", { part: "heading", name: "heading", children: /* @__PURE__ */ y("div", { "aria-hidden": "true", children: e.format.formatRange(t, n) }) }),
      /* @__PURE__ */ y(Nt, { name: "next", onclick: e.next, children: "Next" })
    ] }),
    /* @__PURE__ */ y(
      lt,
      {
        value: e,
        onselectday: e.onSelect,
        onfocusday: e.onFocus,
        onhoverday: e.onHover,
        children: /* @__PURE__ */ y("slot", {})
      }
    )
  ] });
}
const ft = {
  value: {
    type: String,
    value: ""
  },
  min: {
    type: String,
    value: ""
  },
  max: {
    type: String,
    value: ""
  },
  isDateDisallowed: {
    type: Function,
    value: (e) => !1
  },
  firstDayOfWeek: {
    type: Number,
    value: () => 1
  },
  showOutsideDays: {
    type: Boolean,
    value: !1
  },
  locale: {
    type: String,
    value: () => {
    }
  },
  months: {
    type: Number,
    value: 1
  },
  focusedDate: {
    type: String,
    value: () => {
    }
  },
  pageBy: {
    type: String,
    value: () => "months"
  }
}, dt = [
  Kt,
  Jt,
  z`:host{display:block;inline-size:fit-content}[role=group]{display:flex;flex-direction:column;gap:1em}:host::part(header){display:flex;align-items:center;justify-content:space-between}:host::part(heading){font-weight:700;font-size:1.25em}button{display:flex;align-items:center;justify-content:center}button[aria-disabled]{cursor:default;opacity:.5}`
], Ke = { year: "numeric" }, Je = { year: "numeric", month: "long" };
function V(e, t) {
  return (t.year - e.year) * 12 + t.month - e.month;
}
const kt = (e, t) => (e = t === 12 ? new K(e.year, 1) : e, {
  start: e,
  end: e.add({ months: t - 1 })
});
function Ze({
  pageBy: e,
  focusedDate: t,
  months: n,
  max: s,
  min: r,
  goto: o
}) {
  const c = e === "single" ? 1 : n, [u, a] = rt(
    () => kt(t.toPlainYearMonth(), n)
  ), i = (d) => a(kt(u.start.add({ months: d }), n)), f = (d) => {
    const l = V(u.start, d.toPlainYearMonth());
    return l >= 0 && l < n;
  };
  return $(() => {
    if (f(t))
      return;
    const d = V(t.toPlainYearMonth(), u.start);
    o(t.add({ months: d }));
  }, [u.start]), $(() => {
    if (f(t))
      return;
    const d = V(u.start, t.toPlainYearMonth());
    i(d === -1 ? -c : d === n ? c : Math.floor(d / n) * n);
  }, [t, c, n]), {
    page: u,
    previous: !r || !f(r) ? () => i(-c) : void 0,
    next: !s || !f(s) ? () => i(c) : void 0
  };
}
function ht({
  months: e,
  pageBy: t,
  locale: n,
  focusedDate: s,
  setFocusedDate: r
}) {
  const [o] = P("min"), [c] = P("max"), u = C("focusday"), a = C("change"), i = T(
    () => H(s ?? it(), o, c),
    [s, o, c]
  );
  function f(h) {
    r(h), u(S(h));
  }
  const { next: d, previous: l, page: m } = Ze({
    pageBy: t,
    focusedDate: i,
    months: e,
    min: o,
    max: c,
    goto: f
  }), v = _();
  function p() {
    v.current.querySelectorAll("calendar-month").forEach((h) => h.focus());
  }
  return {
    format: L(Ke, n),
    formatVerbose: L(Je, n),
    page: m,
    focusedDate: i,
    dispatch: a,
    onFocus(h) {
      h.stopPropagation(), f(h.detail), setTimeout(p);
    },
    min: o,
    max: c,
    next: d,
    previous: l,
    focus: p
  };
}
const We = j(
  (e) => {
    const [t, n] = P("value"), [s = t, r] = P("focusedDate"), o = ht({
      ...e,
      focusedDate: s,
      setFocusedDate: r
    });
    function c(u) {
      n(u.detail), o.dispatch();
    }
    return /* @__PURE__ */ y("host", { shadowDom: !0, focus: o.focus, children: /* @__PURE__ */ y(
      ut,
      {
        ...e,
        ...o,
        type: "date",
        value: t,
        onSelect: c
      }
    ) });
  },
  { props: ft, styles: dt }
);
customElements.define("calendar-date", We);
const Ot = (e, t) => E.compare(e, t) < 0 ? [e, t] : [t, e], Xe = j(
  (e) => {
    const [t, n] = _e("value"), [s = t[0], r] = P("focusedDate"), o = ht({
      ...e,
      focusedDate: s,
      setFocusedDate: r
    }), c = C("rangestart"), u = C("rangeend"), [a, i] = P(
      "tentative"
    ), [f, d] = rt();
    $(() => d(void 0), [a]);
    function l(h) {
      o.onFocus(h), m(h);
    }
    function m(h) {
      h.stopPropagation(), a && d(h.detail);
    }
    function v(h) {
      const b = h.detail;
      h.stopPropagation(), a ? (n(Ot(a, b)), i(void 0), u(S(b)), o.dispatch()) : (i(b), c(S(b)));
    }
    const p = a ? Ot(a, f ?? a) : t;
    return /* @__PURE__ */ y("host", { shadowDom: !0, focus: o.focus, children: /* @__PURE__ */ y(
      ut,
      {
        ...e,
        ...o,
        type: "range",
        value: p,
        onFocus: l,
        onHover: m,
        onSelect: v
      }
    ) });
  },
  {
    props: {
      ...ft,
      tentative: {
        type: String,
        value: ""
      }
    },
    styles: dt
  }
);
customElements.define("calendar-range", Xe);
const Ge = j(
  (e) => {
    const [t, n] = je("value"), [s = t[0], r] = P("focusedDate"), o = ht({
      ...e,
      focusedDate: s,
      setFocusedDate: r
    });
    function c(u) {
      const a = [...t], i = t.findIndex((f) => f.equals(u.detail));
      i < 0 ? a.push(u.detail) : a.splice(i, 1), n(a), o.dispatch();
    }
    return /* @__PURE__ */ y("host", { shadowDom: !0, focus: o.focus, children: /* @__PURE__ */ y(
      ut,
      {
        ...e,
        ...o,
        type: "multi",
        value: t,
        onSelect: c
      }
    ) });
  },
  { props: ft, styles: dt }
);
customElements.define("calendar-multi", Ge);

export { We as CalendarDate, He as CalendarMonth, Ge as CalendarMulti, Xe as CalendarRange };

//# sourceMappingURL=cally.js.map