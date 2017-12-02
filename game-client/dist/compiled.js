(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    }, isWindow: function isWindow(a) {
      return null != a && a == a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, isPlainObject: function isPlainObject(a) {
      var b;if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }for (b in a) {}return void 0 === b || k.call(a, b);
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      var d;if (b) {
        if (h) return h.call(b, a, c);for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) {
          if (c in b && b[c] === a) return c;
        }
      }return -1;
    }, merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;while (c > d) {
        a[e++] = b[d++];
      }if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d) : void 0;
    }, now: function now() {
      return +new Date();
    }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; e > b; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));for (b = 0; e > b; b++) {
        n.find(a, d[b], c);
      }return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }if (f = d.getElementById(e[2]), f && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);this.length = 1, this[0] = f;
      }return this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = !0, c || j.disable(), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K));
  }function K() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready());
  }n.ready.promise = function (b) {
    if (!I) if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);else {
      d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);var c = !1;try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}c && c.doScroll && !function f() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (b) {
            return a.setTimeout(f, 50);
          }J(), n.ready();
        }
      }();
    }return I.promise(b);
  }, n.ready.promise();var L;for (L in n(l)) {
    break;
  }l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");l.deleteExpando = !0;try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }a = null;
  }();var M = function M(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
  },
      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      O = /([A-Z])/g;function P(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(O, "-$1").toLowerCase();if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
        } catch (e) {}n.data(a, b, c);
      } else c = void 0;
    }return c;
  }function Q(a) {
    var b;for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }return !0;
  }function R(a, b, d, e) {
    if (M(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), "object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f;
    }
  }function S(a, b, c) {
    if (M(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;while (e--) {
            delete d[b[e]];
          }if (c ? !Q(d) : !n.isEmptyObject(d)) return;
        }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function hasData(a) {
      return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a);
    }, data: function data(a, b, c) {
      return R(a, b, c);
    }, removeData: function removeData(a, b) {
      return S(a, b);
    }, _data: function _data(a, b, c) {
      return R(a, b, c, !0);
    }, _removeData: function _removeData(a, b) {
      return S(a, b, !0);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
          }n._data(f, "parsedAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? P(f, a, n.data(f, a)) : void 0;
    }, removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } }), function () {
    var a;l.shrinkWrapBlocks = function () {
      if (null != a) return a;a = !1;var b, c, e;return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
      V = ["Top", "Right", "Bottom", "Left"],
      W = function W(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function X(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var Y = function Y(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        Y(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Z = /^(?:checkbox|radio)$/i,
      $ = /<([\w:-]+)/,
      _ = /^$|\/(?:java|ecma)script/i,
      aa = /^\s+/,
      ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a) {
    var b = ba.split("|"),
        c = a.createDocumentFragment();if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }return c;
  }!function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;function ea(a, b) {
    var c,
        d,
        e = 0,
        f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
    }return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }function fa(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }var ga = /<|&#?\w+;/,
      ha = /<tbody/i;function ia(a) {
    Z.test(a.type) && (a.defaultChecked = a.checked);
  }function ja(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++) {
      if (g = a[r], g || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (ga.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];while (f--) {
          i = i.lastChild;
        }if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }n.merge(q, i.childNodes), i.textContent = "";while (i.firstChild) {
          i.removeChild(i.firstChild);
        }i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
        f = 0;while (g = i[f++]) {
          _.test(g.type || "") && c.push(g);
        }
      }
    }return i = null, p;
  }!function () {
    var b,
        c,
        e = d.createElement("div");for (b in { submit: !0, change: !0, focusin: !0 }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
    }e = null;
  }();var ka = /^(?:input|select|textarea)$/i,
      la = /^key/,
      ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      na = /^(?:focusinfocus|focusoutblur)$/,
      oa = /^([^.]*)(?:\.(.+)|)/;function pa() {
    return !0;
  }function qa() {
    return !1;
  }function ra() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function sa(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        sa(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;while (h--) {
          f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }a = null;
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);if (r && (k = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    }, trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }o = 0;while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
        }if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;try {
            e[q]();
          } catch (s) {}n.event.triggered = void 0, m && (e[h] = m);
        }return b.result;
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== ra() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ra() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), l.submit || (n.event.special.submit = { setup: function setup() {
      return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    }, postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    }, teardown: function teardown() {
      return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit");
    } }), l.change || (n.event.special.change = { setup: function setup() {
      return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1) : void n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    }, handle: function handle(a) {
      var b = a.target;return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
    }, teardown: function teardown() {
      return n.event.remove(this, "._change"), !ka.test(this.nodeName);
    } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return sa(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return sa(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }, trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } });var ta = / jQuery\d+="(?:null|\d+)"/g,
      ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
      va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      wa = /<script|<style|<link/i,
      xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ya = /^true\/(.*)/,
      za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Aa = ca(d),
      Ba = Aa.appendChild(d.createElement("div"));function Ca(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function Da(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }function Ea(a) {
    var b = ya.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function Fa(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;if (h) {
        delete g.handle, g.events = {};for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }g.data && (g.data = n.extend({}, g.data));
    }
  }function Ga(a, b) {
    var c, d, e;if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }b.removeAttribute(n.expando);
      }"script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }function Ha(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
    });if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
      }if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) {
        g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
      }k = e = null;
    }return a;
  }function Ia(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(va, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Ga(e, d[g]);
      }if (b) if (c) for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) {
        Fa(e, d[g]);
      } else Fa(a, f);return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f;
    }, cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || M(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    } }), n.fn.extend({ domManip: Ha, detach: function detach(a) {
      return Ia(this, a, !0);
    }, remove: function remove(a) {
      return Ia(this, a);
    }, text: function text(a) {
      return Y(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    }, append: function append() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return Ha(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ca(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return Ha(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(ea(a, !1));while (a.firstChild) {
          a.removeChild(a.firstChild);
        }a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return Y(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return Ha(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }return this.pushStack(e);
    };
  });var Ja,
      Ka = { HTML: "block", BODY: "block" };function La(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function Ma(a) {
    var b = d,
        c = Ka[a];return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c;
  }var Na = /^margin/,
      Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
      Pa = function Pa(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Qa = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");if (j.style) {
      var _k = function _k() {
        var k,
            l,
            m = d.documentElement;m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
      };

      j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function reliableHiddenOffsets() {
          return null == b && _k(), f;
        }, boxSizingReliable: function boxSizingReliable() {
          return null == b && _k(), e;
        }, pixelMarginRight: function pixelMarginRight() {
          return null == b && _k(), c;
        }, pixelPosition: function pixelPosition() {
          return null == b && _k(), b;
        }, reliableMarginRight: function reliableMarginRight() {
          return null == b && _k(), g;
        }, reliableMarginLeft: function reliableMarginLeft() {
          return null == b && _k(), h;
        } });
    }
  }();var Ra,
      Sa,
      Ta = /^(top|right|bottom|left)$/;a.getComputedStyle ? (Ra = function Ra(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Qa.currentStyle && (Ra = function Ra(a) {
    return a.currentStyle;
  }, Sa = function Sa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });function Ua(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Va = /alpha\([^)]*\)/i,
      Wa = /opacity\s*=\s*([^)]*)/i,
      Xa = /^(none|table(?!-c[ea]).+)/,
      Ya = new RegExp("^(" + T + ")(.*)$", "i"),
      Za = { position: "absolute", visibility: "hidden", display: "block" },
      $a = { letterSpacing: "0", fontWeight: "400" },
      _a = ["Webkit", "O", "Moz", "ms"],
      ab = d.createElement("div").style;function bb(a) {
    if (a in ab) return a;var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = _a.length;while (c--) {
      if (a = _a[c] + b, a in ab) return a;
    }
  }function cb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }function db(a, b, c) {
    var d = Ya.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }function eb(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
    }return g;
  }function fb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Ra(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
      if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Sa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];if (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function () {
          return fb(a, b, d);
        }) : fb(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e = d && Ra(a);return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      } };
  }), l.opacity || (n.cssHooks.opacity = { get: function get(a, b) {
      return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    }, set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e);
    } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function (a, b) {
    return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0;
  }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
      marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px" : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Na.test(a) || (n.cssHooks[a + b].set = db);
  }), n.fn.extend({ css: function css(a, b) {
      return Y(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ra(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return cb(this, !0);
    }, hide: function hide() {
      return cb(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        W(this) ? n(this).show() : n(this).hide();
      });
    } });function gb(a, b, c, d, e) {
    return new gb.prototype.init(a, b, c, d, e);
  }n.Tween = gb, gb.prototype = { constructor: gb, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = gb.propHooks[this.prop];return a && a.get ? a.get(this) : gb.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = gb.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this;
    } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {};var hb,
      ib,
      jb = /^(?:toggle|show|hide)$/,
      kb = /queueHooks$/;function lb() {
    return a.setTimeout(function () {
      hb = void 0;
    }), hb = n.now();
  }function mb(a, b) {
    var c,
        d = { height: a },
        e = 0;for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = V[e], d["margin" + c] = d["padding" + c] = a;
    }return b && (d.opacity = d.width = a), d;
  }function nb(a, b, c) {
    for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function ob(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && W(a),
        r = n._data(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], jb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;q = !0;
        }o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;n._removeData(a, "fxshow");for (b in o) {
          n.style(a, b, o[b]);
        }
      });for (d in o) {
        g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function pb(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function qb(a, b, c) {
    var d,
        e,
        f = 0,
        g = qb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for (pb(k, j.opts.specialEasing); g > f; f++) {
      if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(qb, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return X(c.elem, a, U.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b);
      }
    }, prefilters: [ob], prefilter: function prefilter(a, b) {
      b ? qb.prefilters.unshift(a) : qb.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = qb(this, n.extend({}, a), f);(e || n._data(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && kb.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }!b && c || n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e);
    };
  }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;for (hb = n.now(); c < b.length; c++) {
      a = b[c], a() || b[c] !== a || b.splice(c--, 1);
    }b.length || n.fx.stop(), hb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    ib || (ib = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(ib), ib = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();var rb = /\r/g,
      sb = /[\x20\t\r\n\f]+/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a)).replace(sb, " ");
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }return c || (a.selectedIndex = -1), e;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var tb,
      ub,
      vb = n.expr.attrHandle,
      wb = /^(?:checked|selected)$/i,
      xb = l.getSetAttribute,
      yb = l.input;n.fn.extend({ attr: function attr(a, b) {
      return Y(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d);
      }
    } }), ub = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = vb[b] || n.find.attr;yb && xb || !wb.test(b) ? vb[b] = function (a, b, d) {
      var e, f;return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e;
    } : vb[b] = function (a, b, c) {
      return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), yb && xb || (n.attrHooks.value = { set: function set(a, b, c) {
      return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c);
    } }), xb || (tb = { set: function set(a, b, c) {
      var d = a.getAttributeNode(c);return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0;
    } }, vb.id = vb.name = vb.coords = function (a, b, c) {
    var d;return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = { get: function get(a, b) {
      var c = a.getAttributeNode(b);return c && c.specified ? c.value : void 0;
    }, set: tb.set }, n.attrHooks.contenteditable = { set: function set(a, b, c) {
      tb.set(a, "" === b ? !1 : b, c);
    } }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = { set: function set(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
      } };
  })), l.style || (n.attrHooks.style = { get: function get(a) {
      return a.style.cssText || void 0;
    }, set: function set(a, b) {
      return a.style.cssText = b + "";
    } });var zb = /^(?:input|select|textarea|button|object)$/i,
      Ab = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return Y(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = { get: function get(a) {
        return a.getAttribute(b, 4);
      } };
  }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    }, set: function set(a) {
      var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");var Bb = /[\t\r\n\f]/g;function Cb(a) {
    return n.attr(a, "class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Cb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Cb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Cb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } });var Db = a.location,
      Eb = n.now(),
      Fb = /\?/,
      Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");var c,
        d = null,
        e = n.trim(b + "");return e && !n.trim(e.replace(Gb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;if (!b || "string" != typeof b) return null;try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };var Hb = /#.*$/,
      Ib = /([?&])_=[^&]*/,
      Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Lb = /^(?:GET|HEAD)$/,
      Mb = /^\/\//,
      Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ob = {},
      Pb = {},
      Qb = "*/".concat("*"),
      Rb = Db.href,
      Sb = Nb.exec(Rb.toLowerCase()) || [];function Tb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function Ub(a, b, c, d) {
    var e = {},
        f = a === Pb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function Vb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }return c && n.extend(!0, a, c), a;
  }function Wb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;break;
        }d || (d = g);
      }f = f || d;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function Xb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Rb, type: "GET", isLocal: Kb.test(Sb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Qb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a);
    }, ajaxPrefilter: Tb(Ob), ajaxTransport: Tb(Pb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === u) {
            if (!k) {
              k = {};while (b = Jb.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }b = k[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return u || (a = t[c] = t[c] || a, s[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > u) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);return this;
        }, abort: function abort(a) {
          var b = a || v;return j && j.abort(b), y(0, b), this;
        } };if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();v = "abort";for (e in { success: 1, error: 1, complete: 1 }) {
        w[e](l[e]);
      }if (j = Ub(Pb, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));try {
          u = 1, j.send(s, y);
        } catch (x) {
          if (!(2 > u)) throw x;y(-1, x);
        }
      } else y(-1, "No Transport");function y(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }return w;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }return a;
        }).append(this);
      }return this;
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } });function Yb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }function Zb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;while (a && 1 === a.nodeType) {
      if ("none" === Yb(a) || "hidden" === a.type) return !0;a = a.parentNode;
    }return !1;
  }n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };var $b = /%20/g,
      _b = /\[\]$/,
      ac = /\r?\n/g,
      bc = /^(?:submit|button|image|reset|file)$/i,
      cc = /^(?:input|select|textarea|keygen)/i;function dc(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      dc(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      dc(c, a[c], b, e);
    }return d.join("&").replace($b, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(ac, "\r\n") };
        }) : { name: b.name, value: c.replace(ac, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic();
  } : hc;var ec = 0,
      fc = {},
      gc = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in fc) {
      fc[a](void 0, !0);
    }
  }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;return { send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++ec;if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;if (_c && (d || 4 === g.readyState)) if (delete fc[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = fc[h] = _c : _c();
        }, abort: function abort() {
          _c && _c(void 0, !0);
        } };
    }
  });function hc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }function ic() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;return { send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        }, abort: function abort() {
          b && b.onload(void 0, !0);
        } };
    }
  });var jc = [],
      kc = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = jc.pop() || n.expando + "_" + Eb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || d;var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var lc = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && lc) return lc.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function mc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = { top: 0, left: 0 },
          e = this[0],
          f = e && e.ownerDocument;if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = { top: 0, left: 0 },
            d = this[0];return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Qa;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = /Y/.test(b);n.fn[a] = function (d) {
      return Y(this, function (a, d, e) {
        var f = mc(a);return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e);
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ua(l.pixelPosition, function (a, c) {
      return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({
      padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return Y(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    } }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var nc = a.jQuery,
      oc = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n;
  }, b || (a.jQuery = a.$ = n), n;
});

},{}],2:[function(require,module,exports){
'use strict';

/**
 * @author jbouny / https://github.com/jbouny
 *
 * Work based on :
 * @author Slayvin / http://slayvin.net : Flat mirror for three.js
 * @author Stemkoski / http://www.adelphi.edu/~stemkoski : An implementation of water shader based on the flat mirror
 * @author Jonas Wagner / http://29a.ch/ && http://29a.ch/slides/2012/webglwater/ : Water shader explanations in WebGL
 */

THREE.Water = function (width, height, options) {

	THREE.Mesh.call(this, new THREE.PlaneBufferGeometry(width, height));

	var scope = this;

	options = options || {};

	var textureWidth = options.textureWidth !== undefined ? options.textureWidth : 512;
	var textureHeight = options.textureHeight !== undefined ? options.textureHeight : 512;

	var clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
	var alpha = options.alpha !== undefined ? options.alpha : 1.0;
	var time = options.time !== undefined ? options.time : 0.0;
	var normalSampler = options.waterNormals !== undefined ? options.waterNormals : null;
	var sunDirection = options.sunDirection !== undefined ? options.sunDirection : new THREE.Vector3(0.70707, 0.70707, 0.0);
	var sunColor = new THREE.Color(options.sunColor !== undefined ? options.sunColor : 0xffffff);
	var waterColor = new THREE.Color(options.waterColor !== undefined ? options.waterColor : 0x7F7F7F);
	var eye = options.eye !== undefined ? options.eye : new THREE.Vector3(0, 0, 0);
	var distortionScale = options.distortionScale !== undefined ? options.distortionScale : 20.0;
	var side = options.side !== undefined ? options.side : THREE.FrontSide;
	var fog = options.fog !== undefined ? options.fog : false;

	//

	var mirrorPlane = new THREE.Plane();
	var normal = new THREE.Vector3();
	var mirrorWorldPosition = new THREE.Vector3();
	var cameraWorldPosition = new THREE.Vector3();
	var rotationMatrix = new THREE.Matrix4();
	var lookAtPosition = new THREE.Vector3(0, 0, -1);
	var clipPlane = new THREE.Vector4();

	var view = new THREE.Vector3();
	var target = new THREE.Vector3();
	var q = new THREE.Vector4();

	var textureMatrix = new THREE.Matrix4();

	var mirrorCamera = new THREE.PerspectiveCamera();

	var parameters = {
		minFilter: THREE.LinearFilter,
		magFilter: THREE.LinearFilter,
		format: THREE.RGBFormat,
		stencilBuffer: false
	};

	var renderTarget = new THREE.WebGLRenderTarget(textureWidth, textureHeight, parameters);

	if (!THREE.Math.isPowerOfTwo(textureWidth) || !THREE.Math.isPowerOfTwo(textureHeight)) {

		renderTarget.texture.generateMipmaps = false;
	}

	var mirrorShader = {

		uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib['fog'], THREE.UniformsLib['lights'], {
			normalSampler: { value: null },
			mirrorSampler: { value: null },
			alpha: { value: 1.0 },
			time: { value: 0.0 },
			size: { value: 1.0 },
			distortionScale: { value: 20.0 },
			textureMatrix: { value: new THREE.Matrix4() },
			sunColor: { value: new THREE.Color(0x7F7F7F) },
			sunDirection: { value: new THREE.Vector3(0.70707, 0.70707, 0) },
			eye: { value: new THREE.Vector3() },
			waterColor: { value: new THREE.Color(0x555555) }
		}]),

		vertexShader: ['uniform mat4 textureMatrix;', 'uniform float time;', 'varying vec4 mirrorCoord;', 'varying vec4 worldPosition;', THREE.ShaderChunk['fog_pars_vertex'], THREE.ShaderChunk['shadowmap_pars_vertex'], 'void main() {', '	mirrorCoord = modelMatrix * vec4( position, 1.0 );', '	worldPosition = mirrorCoord.xyzw;', '	mirrorCoord = textureMatrix * mirrorCoord;', '	vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );', '	gl_Position = projectionMatrix * mvPosition;', THREE.ShaderChunk['fog_vertex'], THREE.ShaderChunk['shadowmap_vertex'], '}'].join('\n'),

		fragmentShader: ['uniform sampler2D mirrorSampler;', 'uniform float alpha;', 'uniform float time;', 'uniform float size;', 'uniform float distortionScale;', 'uniform sampler2D normalSampler;', 'uniform vec3 sunColor;', 'uniform vec3 sunDirection;', 'uniform vec3 eye;', 'uniform vec3 waterColor;', 'varying vec4 mirrorCoord;', 'varying vec4 worldPosition;', 'vec4 getNoise( vec2 uv ) {', '	vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);', '	vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );', '	vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );', '	vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );', '	vec4 noise = texture2D( normalSampler, uv0 ) +', '		texture2D( normalSampler, uv1 ) +', '		texture2D( normalSampler, uv2 ) +', '		texture2D( normalSampler, uv3 );', '	return noise * 0.5 - 1.0;', '}', 'void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {', '	vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );', '	float direction = max( 0.0, dot( eyeDirection, reflection ) );', '	specularColor += pow( direction, shiny ) * sunColor * spec;', '	diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;', '}', THREE.ShaderChunk['common'], THREE.ShaderChunk['packing'], THREE.ShaderChunk['bsdfs'], THREE.ShaderChunk['fog_pars_fragment'], THREE.ShaderChunk['lights_pars'], THREE.ShaderChunk['shadowmap_pars_fragment'], THREE.ShaderChunk['shadowmask_pars_fragment'], 'void main() {', '	vec4 noise = getNoise( worldPosition.xz * size );', '	vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );', '	vec3 diffuseLight = vec3(0.0);', '	vec3 specularLight = vec3(0.0);', '	vec3 worldToEye = eye-worldPosition.xyz;', '	vec3 eyeDirection = normalize( worldToEye );', '	sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );', '	float distance = length(worldToEye);', '	vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;', '	vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.z + distortion ) );', '	float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );', '	float rf0 = 0.3;', '	float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );', '	vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;', '	vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);', '	vec3 outgoingLight = albedo;', '	gl_FragColor = vec4( outgoingLight, alpha );', THREE.ShaderChunk['tonemapping_fragment'], THREE.ShaderChunk['fog_fragment'], '}'].join('\n')

	};

	var material = new THREE.ShaderMaterial({
		fragmentShader: mirrorShader.fragmentShader,
		vertexShader: mirrorShader.vertexShader,
		uniforms: THREE.UniformsUtils.clone(mirrorShader.uniforms),
		transparent: true,
		lights: true,
		side: side,
		fog: fog
	});

	material.uniforms.mirrorSampler.value = renderTarget.texture;
	material.uniforms.textureMatrix.value = textureMatrix;
	material.uniforms.alpha.value = alpha;
	material.uniforms.time.value = time;
	material.uniforms.normalSampler.value = normalSampler;
	material.uniforms.sunColor.value = sunColor;
	material.uniforms.waterColor.value = waterColor;
	material.uniforms.sunDirection.value = sunDirection;
	material.uniforms.distortionScale.value = distortionScale;

	material.uniforms.eye.value = eye;

	scope.material = material;

	scope.onBeforeRender = function (renderer, scene, camera) {

		mirrorWorldPosition.setFromMatrixPosition(scope.matrixWorld);
		cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);

		rotationMatrix.extractRotation(scope.matrixWorld);

		normal.set(0, 0, 1);
		normal.applyMatrix4(rotationMatrix);

		view.subVectors(mirrorWorldPosition, cameraWorldPosition);

		// Avoid rendering when mirror is facing away

		if (view.dot(normal) > 0) return;

		view.reflect(normal).negate();
		view.add(mirrorWorldPosition);

		rotationMatrix.extractRotation(camera.matrixWorld);

		lookAtPosition.set(0, 0, -1);
		lookAtPosition.applyMatrix4(rotationMatrix);
		lookAtPosition.add(cameraWorldPosition);

		target.subVectors(mirrorWorldPosition, lookAtPosition);
		target.reflect(normal).negate();
		target.add(mirrorWorldPosition);

		mirrorCamera.position.copy(view);
		mirrorCamera.up.set(0, 1, 0);
		mirrorCamera.up.applyMatrix4(rotationMatrix);
		mirrorCamera.up.reflect(normal);
		mirrorCamera.lookAt(target);

		mirrorCamera.far = camera.far; // Used in WebGLBackground

		mirrorCamera.updateMatrixWorld();
		mirrorCamera.projectionMatrix.copy(camera.projectionMatrix);

		// Update the texture matrix
		textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
		textureMatrix.multiply(mirrorCamera.projectionMatrix);
		textureMatrix.multiply(mirrorCamera.matrixWorldInverse);

		// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
		// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
		mirrorPlane.setFromNormalAndCoplanarPoint(normal, mirrorWorldPosition);
		mirrorPlane.applyMatrix4(mirrorCamera.matrixWorldInverse);

		clipPlane.set(mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant);

		var projectionMatrix = mirrorCamera.projectionMatrix;

		q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
		q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
		q.z = -1.0;
		q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];

		// Calculate the scaled plane vector
		clipPlane.multiplyScalar(2.0 / clipPlane.dot(q));

		// Replacing the third row of the projection matrix
		projectionMatrix.elements[2] = clipPlane.x;
		projectionMatrix.elements[6] = clipPlane.y;
		projectionMatrix.elements[10] = clipPlane.z + 1.0 - clipBias;
		projectionMatrix.elements[14] = clipPlane.w;

		eye.setFromMatrixPosition(camera.matrixWorld);

		//

		var currentRenderTarget = renderer.getRenderTarget();

		var currentVrEnabled = renderer.vr.enabled;
		var currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;

		scope.visible = false;

		renderer.vr.enabled = false; // Avoid camera modification and recursion
		renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows

		renderer.render(scene, mirrorCamera, renderTarget, true);

		scope.visible = true;

		renderer.vr.enabled = currentVrEnabled;
		renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;

		renderer.setRenderTarget(currentRenderTarget);
	};
};

THREE.Water.prototype = Object.create(THREE.Mesh.prototype);
THREE.Water.prototype.constructor = THREE.Water;

},{}],3:[function(require,module,exports){
'use strict';

/**
 * Based on http://www.emagix.net/academic/mscs-project/item/camera-sync-with-css3-and-webgl-threejs
 * @author mrdoob / http://mrdoob.com/
 */

THREE.CSS3DObject = function (element) {

	THREE.Object3D.call(this);

	this.element = element;
	this.element.style.position = 'absolute';

	this.addEventListener('removed', function () {

		if (this.element.parentNode !== null) {

			this.element.parentNode.removeChild(this.element);
		}
	});
};

THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype);
THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;

THREE.CSS3DSprite = function (element) {

	THREE.CSS3DObject.call(this, element);
};

THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype);
THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;

//

THREE.CSS3DRenderer = function () {

	console.log('THREE.CSS3DRenderer', THREE.REVISION);

	var _width, _height;
	var _widthHalf, _heightHalf;

	var matrix = new THREE.Matrix4();

	var cache = {
		camera: { fov: 0, style: '' },
		objects: {}
	};

	var domElement = document.createElement('div');
	domElement.style.overflow = 'hidden';

	this.domElement = domElement;

	var cameraElement = document.createElement('div');

	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
	cameraElement.style.MozTransformStyle = 'preserve-3d';
	cameraElement.style.transformStyle = 'preserve-3d';

	domElement.appendChild(cameraElement);

	var isIE = /Trident/i.test(navigator.userAgent);

	this.setClearColor = function () {};

	this.getSize = function () {

		return {
			width: _width,
			height: _height
		};
	};

	this.setSize = function (width, height) {

		_width = width;
		_height = height;
		_widthHalf = _width / 2;
		_heightHalf = _height / 2;

		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';

		cameraElement.style.width = width + 'px';
		cameraElement.style.height = height + 'px';
	};

	function epsilon(value) {

		return Math.abs(value) < 1e-10 ? 0 : value;
	}

	function getCameraCSSMatrix(matrix) {

		var elements = matrix.elements;

		return 'matrix3d(' + epsilon(elements[0]) + ',' + epsilon(-elements[1]) + ',' + epsilon(elements[2]) + ',' + epsilon(elements[3]) + ',' + epsilon(elements[4]) + ',' + epsilon(-elements[5]) + ',' + epsilon(elements[6]) + ',' + epsilon(elements[7]) + ',' + epsilon(elements[8]) + ',' + epsilon(-elements[9]) + ',' + epsilon(elements[10]) + ',' + epsilon(elements[11]) + ',' + epsilon(elements[12]) + ',' + epsilon(-elements[13]) + ',' + epsilon(elements[14]) + ',' + epsilon(elements[15]) + ')';
	}

	function getObjectCSSMatrix(matrix, cameraCSSMatrix) {

		var elements = matrix.elements;
		var matrix3d = 'matrix3d(' + epsilon(elements[0]) + ',' + epsilon(elements[1]) + ',' + epsilon(elements[2]) + ',' + epsilon(elements[3]) + ',' + epsilon(-elements[4]) + ',' + epsilon(-elements[5]) + ',' + epsilon(-elements[6]) + ',' + epsilon(-elements[7]) + ',' + epsilon(elements[8]) + ',' + epsilon(elements[9]) + ',' + epsilon(elements[10]) + ',' + epsilon(elements[11]) + ',' + epsilon(elements[12]) + ',' + epsilon(elements[13]) + ',' + epsilon(elements[14]) + ',' + epsilon(elements[15]) + ')';

		if (isIE) {

			return 'translate(-50%,-50%)' + 'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)' + cameraCSSMatrix + matrix3d;
		}

		return 'translate(-50%,-50%)' + matrix3d;
	}

	function renderObject(object, camera, cameraCSSMatrix) {

		if (object instanceof THREE.CSS3DObject) {

			var style;

			if (object instanceof THREE.CSS3DSprite) {

				// http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

				matrix.copy(camera.matrixWorldInverse);
				matrix.transpose();
				matrix.copyPosition(object.matrixWorld);
				matrix.scale(object.scale);

				matrix.elements[3] = 0;
				matrix.elements[7] = 0;
				matrix.elements[11] = 0;
				matrix.elements[15] = 1;

				style = getObjectCSSMatrix(matrix, cameraCSSMatrix);
			} else {

				style = getObjectCSSMatrix(object.matrixWorld, cameraCSSMatrix);
			}

			var element = object.element;
			var cachedStyle = cache.objects[object.id] && cache.objects[object.id].style;

			if (cachedStyle === undefined || cachedStyle !== style) {

				element.style.WebkitTransform = style;
				element.style.MozTransform = style;
				element.style.transform = style;

				cache.objects[object.id] = { style: style };

				if (isIE) {

					cache.objects[object.id].distanceToCameraSquared = getDistanceToSquared(camera, object);
				}
			}

			if (element.parentNode !== cameraElement) {

				cameraElement.appendChild(element);
			}
		}

		for (var i = 0, l = object.children.length; i < l; i++) {

			renderObject(object.children[i], camera, cameraCSSMatrix);
		}
	}

	var getDistanceToSquared = function () {

		var a = new THREE.Vector3();
		var b = new THREE.Vector3();

		return function (object1, object2) {

			a.setFromMatrixPosition(object1.matrixWorld);
			b.setFromMatrixPosition(object2.matrixWorld);

			return a.distanceToSquared(b);
		};
	}();

	function zOrder(scene) {

		var order = Object.keys(cache.objects).sort(function (a, b) {

			return cache.objects[a].distanceToCameraSquared - cache.objects[b].distanceToCameraSquared;
		});
		var zMax = order.length;

		scene.traverse(function (object) {

			var index = order.indexOf(object.id + '');

			if (index !== -1) {

				object.element.style.zIndex = zMax - index;
			}
		});
	}

	this.render = function (scene, camera) {

		var fov = camera.projectionMatrix.elements[5] * _heightHalf;

		if (cache.camera.fov !== fov) {

			domElement.style.WebkitPerspective = fov + 'px';
			domElement.style.MozPerspective = fov + 'px';
			domElement.style.perspective = fov + 'px';

			cache.camera.fov = fov;
		}

		scene.updateMatrixWorld();

		if (camera.parent === null) camera.updateMatrixWorld();

		var cameraCSSMatrix = 'translateZ(' + fov + 'px)' + getCameraCSSMatrix(camera.matrixWorldInverse);

		var style = cameraCSSMatrix + 'translate(' + _widthHalf + 'px,' + _heightHalf + 'px)';

		if (cache.camera.style !== style && !isIE) {

			cameraElement.style.WebkitTransform = style;
			cameraElement.style.MozTransform = style;
			cameraElement.style.transform = style;

			cache.camera.style = style;
		}

		renderObject(scene, camera, cameraCSSMatrix);

		if (isIE) {

			// IE10 and 11 does not support 'preserve-3d'.
			// Thus, z-order in 3D will not work.
			// We have to calc z-order manually and set CSS z-index for IE.
			// FYI: z-index can't handle object intersection
			zOrder(scene);
		}
	};
};

},{}],4:[function(require,module,exports){
'use strict';

var _game = require('../src/game.js');

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    new _game2.default();
})();

// OLD CODE / FOR REFERENCE / WHATEVS
// form.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	let animal = document.querySelector("input[name='animal']:checked").value;
// 	let name = document.getElementById("name").value;
// 	if(name !== ""){
// 		modal.style.display = "none";
// 		new Playground(name, animal);
// 	} else{
// 		alert("Enter name plz!");
// 	}
// });
// function addPlatform( scene, url) {
//
//     var placeholder = new THREE.Object3D();
//var texture = new THREE.TextureLoader().load( textureUrl );
//texture.minFilter = THREE.LinearFilter;
//texture.anisotropy = textureQuality;

// var loader = new THREE.JSONLoader();
// loader.load( url, function( geometry, materials ) {
//     //geometry.computeFaceNormals();
//     var platform = new THREE.Mesh( geometry, materials );
//     platform.name = "platform";
//     scene.add( platform );
// });

// var loader = new THREE.JSONLoader();
// loader.load(url, function(geometry, materials) {
//     geometry.computeFaceNormals();
//     //var bufferGeometry = new THREE.BufferGeometry();
//     //var newGeo = bufferGeometry.fromGeometry(geometry);
//
//     var newMaterials = new THREE.MeshFaceMaterial(materials);
//     var object = new THREE.Mesh(geometry, newMaterials);
//
//     object.name = "platform";
//
//     //placeholder.scale.set(size,size,size);
//     placeholder.add( object );
//     scene.add(placeholder);
// });

// addModel(scene, url, function(object) {
//     object.name = "platform";
// });

// var loader = new THREE.ObjectLoader();
// loader.load( url, function( obj ) {
//
//     scene.add( obj );
// });

// var loader = new THREE.OBJLoader();
//
// // load a resource
// loader.load(
//     // resource URL
//     'shared/island.obj',
//     // Function when resource is loaded
//     function ( object ) {
//         scene.add( object );
//     }
// );

// instantiate a loader
// var loader = new THREE.ColladaLoader();
//
// loader.load(
//     // resource URL
//     'models/collada/stormtrooper/stormtrooper.dae',
//     // Function when resource is loaded
//     function ( collada ) {
//         scene.add( collada.scene );
//     },
//     // Function called when download progresses
//     function ( xhr ) {
//         console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
//     }
// );
//
//     return true;
// }

},{"../src/game.js":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseModel = function () {
    function baseModel(scene, id, options, parent_model) {
        var _this = this;

        _classCallCheck(this, baseModel);

        if (!id) {
            id = options.name;
        }

        if (typeof options.name == "undefined") {
            options.name = id;
        }

        this.clock = new THREE.Clock();
        this.anim_clock = new THREE.Clock();
        this.scene = scene;
        this.id = id;
        this.name = id;
        this.options = options;
        this.submodels = [];
        this.is_submodel = false;
        this.parent_model = null;
        this.started = false;
        this.group = new THREE.Group();
        this.target = false;
        this.scale = 1;
        this.is_placed = false;
        this.has_init = false;
        this.texture = false;
        this.mouse = scene.mouse;
        //
        this.animation_multiplier = 1;
        this.playing_animation = false;
        this.apply_physics = false;
        this.added_to_scene = false;
        this.raycaster = new THREE.Raycaster();

        if (typeof parent_model != "undefined") {
            this.setParentModel(parent_model);
        }

        this.position = new THREE.Vector3();
        this.offset = new THREE.Vector3();
        this.velocity = new THREE.Vector3();
        this.rotation = 0;

        if (typeof options.scale !== "undefined") {
            this.scale = options.scale;
        }

        if (typeof options.position !== "undefined") {

            if (typeof options.position.x !== "undefined") {
                this.position.x = options.position.x;
            }

            if (typeof options.position.y !== "undefined") {
                this.position.y = options.position.y;
            }

            if (typeof options.position.z !== "undefined") {
                this.position.z = options.position.z;
            }
        }

        if (typeof options.offset !== "undefined") {

            if (typeof options.offset.x !== "undefined") {
                this.offset.x = options.offset.x / this.scale;
            }

            if (typeof options.offset.y !== "undefined") {
                this.offset.y = options.offset.y / this.scale;
            }

            if (typeof options.offset.z !== "undefined") {
                this.offset.z = options.offset.z / this.scale;
            }
        }

        //this.original_position = this.position.clone();
        this.original_position = new THREE.Vector3(0, 0, 0);
        this.ray = new THREE.Raycaster();
        this.ray_origin = new THREE.Vector3(0, 0, 0);
        this.ray_dest = new THREE.Vector3(0, 0, 0);
        this.line = new THREE.Line3(this.ray_origin, this.ray_dest);

        var model = this;
        this.scene.models.add(this);

        mcec.log("Model created with id " + id);

        if (typeof this.mouse_move == "function") {
            mcec.bindMove(function (e) {
                _this.handleMouseMove(e);
            });
        }
    }

    _createClass(baseModel, [{
        key: "makeTextSprite",
        value: function makeTextSprite(message, parameters) {
            if (parameters === undefined) parameters = {};

            var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
            var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
            var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
            var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : { r: 0, g: 0, b: 0, a: 1.0 };
            var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : { r: 255, g: 255, b: 255, a: 1.0 };
            var textColor = parameters.hasOwnProperty("textColor") ? parameters["textColor"] : { r: 0, g: 0, b: 0, a: 1.0 };

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            context.font = "Bold " + fontsize + "px " + fontface;
            var metrics = context.measureText(message);
            var textWidth = metrics.width;

            context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
            context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

            context.lineWidth = borderThickness;
            //roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 8);

            context.fillStyle = "rgba(" + textColor.r + ", " + textColor.g + ", " + textColor.b + ", 1.0)";
            context.fillText(message, borderThickness, fontsize + borderThickness);

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;

            var spriteMaterial = new THREE.SpriteMaterial({ map: texture, useScreenCoordinates: false });
            var sprite = new THREE.Sprite(spriteMaterial);

            //sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);

            return sprite;
        }
    }, {
        key: "handleMouseMove",
        value: function handleMouseMove(e) {
            if (this.has_init == false) return;
            this.mouse_move(e);
        }
    }, {
        key: "getScene",
        value: function getScene() {
            return this.scene.scene;
        }
    }, {
        key: "add",
        value: function add(mesh) {
            mcec.log("Adding mesh to group: " + this.name);
            this.group.add(mesh);
        }
    }, {
        key: "isModelSet",
        value: function isModelSet() {
            return !(typeof this.model == "undefined");
        }
    }, {
        key: "isMeshLoaded",
        value: function isMeshLoaded() {
            return !(typeof this.model == "undefined");
        }
    }, {
        key: "getModel",
        value: function getModel() {
            return this.model;
        }
    }, {
        key: "addSubmodel",
        value: function addSubmodel(submodel, name) {
            this.submodels.push(new submodel(this.scene, name, this));

            return this;
        }
    }, {
        key: "setParentModel",
        value: function setParentModel(parent) {
            this.is_submodel = true;
            this.parent_model = parent;

            return this;
        }
    }, {
        key: "setTargetFromVector",
        value: function setTargetFromVector(vector) {
            this.target = vector;
        }
    }, {
        key: "setTargetFromCoords",
        value: function setTargetFromCoords(x, y, z) {
            this.target = new THREE.Vector3(x, y, z);

            if (this.set_target instanceof Function) this.set_target(this.target);
        }
    }, {
        key: "setTarget",
        value: function setTarget(x, z) {
            var y = this.scene.world.getY(x, z);
            this.target = new THREE.Vector3(x, y, z);

            this.setTargetFromCoords(x, y, z);
        }
    }, {
        key: "hasTarget",
        value: function hasTarget() {
            if (this.target) {
                return this.target;
            }
        }
    }, {
        key: "getPosition",
        value: function getPosition() {
            //return this.model.position;
            return this.position;
        }
    }, {
        key: "loadedMesh",
        value: function loadedMesh(mesh) {
            mesh.name = this.name;
            this.model = mesh;
            this.model.position.copy(this.position);
            this.add(this.model);

            this.updatePosition();

            mcec.log("Mesh loaded for " + this.name);

            if (this.is_submodel) {
                this.group.visible = false;
            }

            this.animations = this.getAnimations();

            if (this.animations > 0) {
                this.model.animations = this.animations;
                mcec.log("Detected that " + this.name + " has " + this.animations.length + " animations embedded");
            }

            //var box = new THREE.Box3().setFromObject( mesh );
            var box = new THREE.Box3().setFromObject(mesh);

            // maybe use this later
            //this.box_size = box.getSize();
            //this.box_size = ;

            //console.log("Detected box size for " + this.name + " - " , this.box_size.y);
        }
    }, {
        key: "getAnimations",
        value: function getAnimations() {
            var animations = [];

            try {
                var a = this.model.geometry.animations;
                if (a.length) {
                    animations = a;
                }
            } catch (e) {}

            return animations;
        }
    }, {
        key: "getAnimation",
        value: function getAnimation(name) {
            var clip = THREE.AnimationClip.findByName(this.getAnimations(), name);
            return clip;
        }
    }, {
        key: "playAnimation",
        value: function playAnimation(name) {
            var play_at_normal_speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (this.playing_animation == name) {
                mcec.log("Skipping playAnimation, because sequence is already playing");
                return this.action;
            }

            var clip = this.getAnimation(name);
            var object = this.model;

            this.mixer = new THREE.AnimationMixer(object);
            this.action = this.mixer.clipAction(clip);
            this.playing_animation = name;

            if (!play_at_normal_speed) this.mixer.timeScale = this.animation_multiplier;

            return this.action.play();
        }
    }, {
        key: "addToScene",
        value: function addToScene() {
            if (this.is_submodel) {
                // this.group.visible = false;
                this.parent_model.group.add(this.group);
            } else {
                this.scene.add(this.getModel());

                this.updatePosition();
            }
        }
    }, {
        key: "handleInit",
        value: function handleInit() {
            if (this.has_init) return;

            if (this.init instanceof Function) {
                this.init();
            }
            this.has_init = true;
            this.handleUpdate();
        }
    }, {
        key: "handleUpdate",
        value: function handleUpdate(delta) {
            this.updatePosition();
            if (this.has_init && this.update instanceof Function) this.update(delta);

            if (typeof this.mixer !== "undefined") {
                this.mixer.update(delta);
            }
        }
    }, {
        key: "handleClick",
        value: function handleClick(intersection, e) {
            var x = intersection.point.x;
            var y = intersection.point.y;
            var z = intersection.point.z;

            if (this.has_init && this.click instanceof Function) this.click(x, y, z, intersection, e);
        }
    }, {
        key: "handlePhysics",
        value: function handlePhysics() {
            return; // DISABLED
            var hit = this.getIntersects();

            if (hit) {
                //var height = hits[0].distance;
                //console.log(hit);
                this.position.y -= hit;
            }
        }
    }, {
        key: "handlePhysics_unused",
        value: function handlePhysics_unused() {
            var myplayer = this.scene.getMyPlayer();
            var scene = this;

            var timeStep = 1;
            var timeLeft = timeStep + 1;
            var birdsEye = 50;
            var kneeDeep = 3;
            var raycaster = new THREE.Raycaster();
            raycaster.ray.direction.set(0, -1, 0);
            var angles = new THREE.Vector2();
            var displacement = new THREE.Vector3();
            var platform = this.model; //scene.get().getObjectByName("platform", true);
            var dt = 5;
            timeLeft += dt;
            var time = 0.3,
                damping = 0.93,
                gravity = 0.01,
                tau = 2 * Math.PI;

            raycaster.ray.origin.copy(myplayer.position);
            raycaster.ray.origin.y += birdsEye;

            var hits = raycaster.intersectObject(platform);

            // are we above, or at most knee deep in, the platform?
            if (hits.length > 0 && hits[0].face.normal.y > 0) {
                var actualHeight = hits[0].distance - birdsEye;
                // collision: stick to the surface if landing on it
                if (myplayer.velocity.y <= 0 && Math.abs(actualHeight) < kneeDeep) {
                    myplayer.position.y -= actualHeight;
                    myplayer.velocity.y = 0;
                    myplayer.airborne = false;
                }
            }

            //angles.copy(myplayer.spinning).multiplyScalar(time);
            //if (!myplayer.airborne) myplayer.spinning.multiplyScalar(damping);

            myplayer.rotation.add(angles);
            myplayer.position.add(displacement);

            // limit the tilt at ±0.4 radians
            myplayer.rotation.x = Math.max(-0.4, Math.min(+0.4, myplayer.rotation.x));

            // wrap horizontal rotation to 0...2π
            myplayer.rotation.y += tau;
            myplayer.rotation.y %= tau;

            //
            // var x = myplayer.motion.position.x;
            // var y = myplayer.motion.position.y;
            // var z = myplayer.motion.position.z;
            //
            // x = parseInt(x);
            // y = parseInt(y);
            // z = parseInt(z);
            //
            // console.log(x, y, z);
        }
    }, {
        key: "getMesh",
        value: function getMesh() {
            if (!this.isMeshLoaded()) return false;
            return this.model;
        }
    }, {
        key: "updatePosition",
        value: function updatePosition() {
            if (this.isMeshLoaded()) {
                this.position.copy(this.getModel().position);
            }

            if (this.isMeshLoaded() && this.update_model instanceof Function) this.update_model();

            // no need for submodels to proceed past this
            if (this.is_submodel) return;

            //this.group.position.copy(this.position);

            if ((this.position.x !== this.original_position.x || this.position.z !== this.original_position.z) && this.scene.world.isMeshLoaded()) {
                if (this.move instanceof Function) this.move();
                this.original_position = this.position.clone();
            }
        }
    }, {
        key: "getIntersects",
        value: function getIntersects(recurse) {

            //this.model.geometry.computeBoundingBox();

            var height = this.model.geometry.boundingBox.max.y;
            var raycaster = this.raycaster;
            raycaster.ray.origin.copy(this.position);
            raycaster.ray.direction.set(0, -1, 0);
            raycaster.ray.origin.y = this.position.y + height + 5;

            var hits = raycaster.intersectObject(this.scene.world.model, false);

            if (hits.length > 0) {
                for (var i = 0; i < hits.length; i++) {
                    if (hits[i].object.name == this.scene.world.model.name) return hits[i].distance - (height + 10);
                }
            }

            this.raycaster = raycaster;

            return false;
        }
    }, {
        key: "placeOnGround",
        value: function placeOnGround() {
            var y = this.scene.world.getY(this.position.x, this.position.z);

            if (y) {
                this.getModel().position.y = y;
                //mcec.log("Ground found @ " + y);
            } else {
                mcec.log("Cant find the ground");
            }

            this.is_placed = true;
        }
    }, {
        key: "placeMarkerFromVec",
        value: function placeMarkerFromVec(vec) {
            this.placeMarker(vec.x, vec.y, vec.z);
        }
    }, {
        key: "placeMarker",
        value: function placeMarker(x, y, z) {

            if (!z) {
                z = y;
                y = this.scene.world.getY(x, z);
            }

            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
            var cube = new THREE.Mesh(geometry, material);

            cube.position.set(x, y, z);

            this.scene.add(cube);
        }
    }, {
        key: "placePlane",
        value: function placePlane(x, y, z, width, height, alt) {

            console.log("Making plane");

            var geometry = new THREE.PlaneBufferGeometry(width, height, 32);

            if (alt == true) {
                var material = new THREE.MeshBasicMaterial({ color: 0x0000cc, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
                var plane = new THREE.Mesh(geometry, material);
            } else {
                var material = new THREE.MeshBasicMaterial({ color: 0xFFF300, side: THREE.DoubleSide, transparent: true, opacity: 0.3 });
                var plane = new THREE.Mesh(geometry, material);
            }

            plane.lookAt(new THREE.Vector3(0, 1, 0));

            plane.position.set(x, y, z);

            this.scene.add(plane);
        }
    }, {
        key: "addShape",
        value: function addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {
            // flat shape with texture
            // note: default UVs generated by ShapeBufferGeometry are simply the x- and y-coordinates of the vertices
            var group = new THREE.Group();
            // var geometry = new THREE.ShapeBufferGeometry( shape );
            // var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { side: THREE.DoubleSide} ) );
            // mesh.position.set( x, y, z - 175 );
            // mesh.rotation.set( rx, ry, rz );
            // mesh.scale.set( s, s, s );
            // group.add( mesh );

            // flat shape
            var geometry = new THREE.ShapeBufferGeometry(shape);
            var mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: color, side: THREE.DoubleSide }));
            mesh.position.set(x, y, z - 125);
            mesh.rotation.set(rx, ry, rz);
            mesh.scale.set(s, s, s);
            group.add(mesh);

            return mesh;

            // extruded shape
            // var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
            // var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color } ) );
            // mesh.position.set( x, y, z - 75 );
            // mesh.rotation.set( rx, ry, rz );
            // mesh.scale.set( s, s, s );
            // group.add( mesh );

            //this.addLineShape( shape, color, x, y, z, rx, ry, rz, s );

            return group;
        }

        //     var roundedRectShape = new THREE.Shape();
        // ( function roundedRect( ctx, x, y, width, height, radius ) {
        //         ctx.moveTo( x, y + radius );
        //         ctx.lineTo( x, y + height - radius );
        //         ctx.quadraticCurveTo( x, y + height, x + radius, y + height );
        //         ctx.lineTo( x + width - radius, y + height );
        //         ctx.quadraticCurveTo( x + width, y + height, x + width, y + height - radius );
        //         ctx.lineTo( x + width, y + radius );
        //         ctx.quadraticCurveTo( x + width, y, x + width - radius, y );
        //         ctx.lineTo( x + radius, y );
        //         ctx.quadraticCurveTo( x, y, x, y + radius );
        //     } )( roundedRectShape, 0, 0, 50, 50, 20 );

        // function for drawing rounded rectangles

    }, {
        key: "roundRect",
        value: function roundRect(ctx, x, y, w, h, r) {
            //ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            //ctx.closePath();
            //ctx.fill();
            //ctx.stroke();
        }
    }, {
        key: "lookToward",
        value: function lookToward(x, z) {
            // get real dest height, but set it to current height to not alter player angle
            //var y = this.scene.world.getY(x, z);

            //var bbox = new THREE.Box3().setFromObject(this.group);
            //var height = bbox.max.y - bbox.min.y;
            var dest = new THREE.Vector3(x, this.position.y, z);
            var sim = new THREE.Object3D();

            var mult_z = 5;

            // copy player location and roation
            sim.position.copy(this.getModel().position);
            sim.rotation.copy(this.getModel().rotation);

            // make sim look toward dest
            sim.translateZ(-mult_z);
            sim.lookAt(dest);

            // convert sim rotation to degrees, then apply to our player
            var rotation = this.get360Rotation(sim);
            this.set360Rotation(rotation);
            //this.scene.camera.setChaseRotation(rotation);

            // set destination height correctly
            //dest.y = y;

            // todo: ask server to walk me there ?
            // todo: make player rotate when server sends confirmation

            //return dest;
        }
    }, {
        key: "getVectorFromFront",
        value: function getVectorFromFront(dist, mesh) {
            var mesh2 = new THREE.Object3D();

            if (!mesh) mesh = this.getModel();

            mesh2.position.copy(mesh.position);
            mesh2.rotation.copy(mesh.rotation);

            mesh2.translateZ(dist);

            return mesh2.position.clone();
        }
    }, {
        key: "hideSubmodel",
        value: function hideSubmodel(name) {
            var model = this.group.getObjectByName(name);

            model.visible = false;
        }
    }, {
        key: "showSubmodel",
        value: function showSubmodel(name) {
            var model = this.group.getObjectByName(name);

            model.visible = true;
        }
    }, {
        key: "get360Rotation",
        value: function get360Rotation(mesh) {
            if (!mesh) mesh = this.getModel();

            var euler = new THREE.Euler();
            euler.order = "YXZ";
            euler.setFromQuaternion(mesh.quaternion);

            var rotation = euler.y * THREE.Math.RAD2DEG + 180;

            return rotation;
        }
    }, {
        key: "set360Rotation",
        value: function set360Rotation(degrees) {
            var euler = new THREE.Euler();
            euler.order = "YXZ";
            euler.setFromQuaternion(this.getModel().quaternion);
            euler.y = (degrees - 180) / THREE.Math.RAD2DEG;

            this.getModel().setRotationFromEuler(euler);
            this.rotation = degrees;

            return this.rotation;
        }
    }, {
        key: "getPointInBetweenByLen",
        value: function getPointInBetweenByLen(pointA, pointB, length) {
            var dir = pointB.clone().sub(pointA).normalize().multiplyScalar(length);
            return pointA.clone().add(dir);
        }
    }, {
        key: "getPointInBetweenByPerc",
        value: function getPointInBetweenByPerc(pointA, pointB, percentage) {
            var dir = pointB.clone().sub(pointA);
            var len = dir.length();
            dir = dir.normalize().multiplyScalar(len * percentage);
            return pointA.clone().add(dir);
        }
    }, {
        key: "distanceBetween",
        value: function distanceBetween(v1, v2) {

            var dx = v1.x - v2.x;
            var dy = v1.y - v2.y;
            var dz = v1.z - v2.z;

            return Math.sqrt(dx * dx + dy * dy + dz * dz);
        }
    }, {
        key: "XZdistanceBetween",
        value: function XZdistanceBetween(v1, v2) {
            var dx = v1.x - v2.x;
            var dz = v1.z - v2.z;

            return Math.sqrt(dx * dx + dz * dz);
        }
    }, {
        key: "distanceFrom",
        value: function distanceFrom(vec) {
            return this.XZdistanceBetween(this.position, vec);
        }

        // called when the physics engine wants to move something

    }, {
        key: "physicsSetPosition",
        value: function physicsSetPosition(x, y, z) {

            if (x) {
                if (typeof this.scale !== "undefined") {
                    //y -= (this.scale * this.size.y);
                }

                y -= 5;

                this.physics_vector = new THREE.Vector3(x, y, z);

                this.getModel().position.set(x, y, z);
                this.position.set(x, y, z);
            } else {
                //this.getModel().position.set(this.position.clone());
            }
        }
    }]);

    return baseModel;
}();

exports.default = baseModel;

},{}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mcec = require('../shared/mcec');

var camera = function () {
    function camera(scene) {
        _classCallCheck(this, camera);

        this.scene = scene;

        // todo: load defaults from config
        this.maxHeight = mcec.isDevMode() ? 500 : 150;
        this.minHeight = 35;
        //
        this.maxRotation = 360;
        this.minRotation = 0;
        //
        this.player_height = 2;
        this.camera_offset = 3;
        //
        this.reset_camera = false; // use this to reset camera rotation back to behind the player
        this.fly_mode = false; // only for development use
        this.lock_player_to_flight_camera = false; // self explanatory hahahahahahahahaha

        this.camera = this.create();

        // true will copy players position to camera position on load
        this.update_flight_cam = true;
        this.shift_multiplier = 1;
        this.shift_max = 100;
        this.shift_easing = 0.1;
    }

    _createClass(camera, [{
        key: 'watchControls',
        value: function watchControls() {
            var _this = this;

            var scale = 1.5;
            var x_factor = 1.8 * scale;
            var y_factor = 1.5 * scale;

            // left arrow
            mcec.ifKeyDown(37, function () {
                _this.setRotation(x_factor);
            });

            // right arrow
            mcec.ifKeyDown(39, function () {
                _this.setRotation(-x_factor);
            });

            // up arrow
            mcec.ifKeyDown(38, function () {
                _this.setHeight(y_factor);
            });

            // down arrow
            mcec.ifKeyDown(40, function () {
                _this.setHeight(-y_factor);
            });
        }
    }, {
        key: 'create',
        value: function create() {
            // todo: load these from player prefs
            this.rotation = 0;
            this.height = this.minHeight * 1.2;

            //this.height = this.maxHeight;
            this.chase = true; // true for chase camera!

            this.camera = new THREE.PerspectiveCamera(40, 1, 1, 10000);
            this.camera.useQuaternion = true;

            //this.cube = new THREE.Mesh(new THREE.CubeGeometry(10, 10, 10, 10, 10, 10), new THREE.MeshBasicMaterial({color: 0x00aaff}));
            //this.scene.add(this.cube);

            this.update_flight_cam = true;
            //this.camera.position.set(190.5868832470435, 628.201465651957, -1167.9644912477233);
            //this.camera.lookAt(new THREE.Vector3(0, -1, 0));

            //            {x: -5.929157268400164, y: 280.3812646691446, z: 635.4284977385496}
            // //            -0.4536856055188674, _y: 0.052359877559829876, _z: 0, _order: "XYZ",

            //         p {x: 7.680423544965432, y: -68.72132594194467, z: 15.180308778621093}
            //         mcec.getApp().scene.camera.camera.rotation
            //         Ya {_x: -0.8119535586032041, _y: -0.030033283560852827, _z: -0.03165694404998019, _order: "XYZ", onChangeCallback: ƒ}

            return this.camera;
        }
    }, {
        key: 'setLoginCamera',
        value: function setLoginCamera() {
            this.camera.position.set(-900, 300, -900);
            this.camera.lookAt(new THREE.Vector3(100, -900, 100));
        }

        // for rendering shit

    }, {
        key: 'getOrthoCamera',
        value: function getOrthoCamera() {
            if (typeof this.camera_ortho == "undefined") {
                this.sceneRenderTarget = new THREE.Scene();

                this.camera_ortho = new THREE.OrthographicCamera(this.scene.world.width / -2, this.scene.world.width / 2, this.scene.world.height / 2, this.scene.world.height / -2, -10000, 10000);
                this.camera_ortho.position.z = 1000;
                this.sceneRenderTarget.add(this.camera_ortho);
            }

            return this.camera_ortho;
        }
    }, {
        key: 'get',
        value: function get() {
            return this.camera;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(offset) {
            this.height += offset;

            if (this.height > this.maxHeight) this.height = this.maxHeight;
            if (this.height < this.minHeight) this.height = this.minHeight;

            return this.height;
        }
    }, {
        key: 'setTarget',
        value: function setTarget(target) {
            this.camera.target = target;
            this.controls.target.copy(target);
        }
    }, {
        key: 'setChase',
        value: function setChase(enabled) {
            this.chase = enabled;
        }
    }, {
        key: 'setRotation',
        value: function setRotation(offset) {

            if (this.fly_mode) return;

            if (this.chase) {
                //disable chase cam
                this.setChase(false);
                //this.rotation = this.get360Rotation();
            }

            var rotation = this.rotation + offset;

            if (rotation > this.maxRotation) rotation = this.minRotation + offset;
            if (rotation < this.minRotation) rotation = this.maxRotation + offset;

            this.rotation = rotation;
            //console.log("NEW ROTATION:", rotation);

            //return this.set360Rotation(rotation);

            // console.log("ROTATION", this.rotation);
            // console.log("360", this.get360Rotation());
            // console.log("PLAYER 360", this.scene.getMyPlayer().get360Rotation());
        }
    }, {
        key: 'setChaseRotation',
        value: function setChaseRotation(rotation) {
            if (this.chase == false) return;

            this.set360Rotation(rotation - 90);
        }
    }, {
        key: 'update',
        value: function update(timeElapsed) {
            this.watchControls();

            var camera = this.camera;
            var scene = this.scene;

            var dist = this.camera_offset * 2 + 2 * this.height;
            // var x = Math.cos(((this.rotation / THREE.Math.RAD2DEG) * 180) * dist + scene.getMyPlayer().position.x;
            // var z = Math.sin(((this.rotation / THREE.Math.RAD2DEG) * 180) * dist + scene.getMyPlayer().position.z;

            // set camera position
            // camera.position.x = x;
            // camera.position.z = z;
            //camera.position.y = scene.getMyPlayer().position.y;

            if (this.scene.getMyPlayer() == false) return;
            if (this.scene.getMyPlayer().isMeshLoaded() == false) return;

            if (!this.fly_mode) {

                var position = new THREE.Vector3(scene.getMyPlayer().position.x, scene.getMyPlayer().position.y, scene.getMyPlayer().position.z);
                // add standard offset to camera position
                position.y += this.camera_offset;

                // add height offset set from arrow keys
                position.y += this.height;

                // set camera position
                camera.position.copy(position);

                // set camera position if chase cam
                if (this.chase || this.reset_camera) {
                    var behind_player = scene.getMyPlayer().getVectorFromFront(-dist);

                    camera.position.x = behind_player.x;
                    camera.position.z = behind_player.z;

                    // just run once to reset camera
                    if (this.reset_camera) {
                        this.reset_camera = false;
                    }
                } else {
                    var obj = new THREE.Object3D();

                    obj.position.copy(position);

                    this.set360Rotation(this.rotation, obj);
                    obj.translateZ(dist); // change to -dist

                    camera.position.copy(obj.position);
                }

                // create a target
                var lookAt = new THREE.Object3D();
                lookAt.position.copy(scene.getMyPlayer().getPosition());
                lookAt.position.y += this.player_height;

                //if(this.chase) lookAt.translateZ(5);

                // look at the player
                camera.lookAt(lookAt.position);
            } else {
                if (this.update_flight_cam) {
                    this.update_flight_cam = false;
                    this.camera.position.copy(this.scene.getMyPlayer().model.position);
                    this.camera.position.y += 50;
                    this.camera.lookAt(this.scene.getMyPlayer().model.position);

                    // this.camera.position.set(261.49, -73.98, -14.18);
                    // var euler = new THREE.Euler(-2.72, -0.012, 3.11, 'XYZ' );
                    //this.camera.setRotationFromEuler(euler);


                    return;
                }

                var target = new THREE.Object3D();
                target.position.copy(camera.position);
                target.rotation.copy(camera.rotation);

                var factor = 0.2;
                target.translateZ(factor);

                var euler = new THREE.Euler(0, 0, 0, 'YXZ');
                euler.setFromQuaternion(camera.quaternion);

                var x_factor = 2.5;
                var y_factor = 1.5;

                // shift
                if (mcec.key('16')) {
                    this.shift_multiplier += this.shift_multiplier * this.shift_easing;
                    if (this.shift_multiplier > this.shift_max) this.shift_multiplier = this.shift_max;

                    factor = factor * this.shift_multiplier;
                } else {
                    this.shift_multiplier = 1;
                }

                // arrow up
                if (mcec.key('38')) {
                    euler.x += Math.PI / 180 * y_factor;
                }

                // arrow down
                if (mcec.key('40')) {
                    euler.x -= Math.PI / 180 * y_factor;
                }

                // arrow left
                if (mcec.key('37')) {
                    euler.y += Math.PI / 180 * x_factor;

                    //camera.position.x = radius * Math.cos( angle );
                    //camera.position.z = radius * Math.sin( angle );

                    //angle += 0.01;
                }

                // arrow right
                if (mcec.key('39')) {
                    euler.y -= Math.PI / 180 * x_factor;
                }

                camera.quaternion.setFromEuler(euler);

                // w - up
                if (mcec.key('87')) {
                    camera.translateZ(-factor);
                    //camera.position.z += (-factor);
                }

                // s - down
                if (mcec.key('83')) {
                    //camera.position.z += factor;
                    camera.translateZ(factor);
                }

                // a - left
                if (mcec.key('65')) {
                    camera.translateX(-factor);
                    //camera.position.x += (-factor);
                }

                // d - right
                if (mcec.key('68')) {
                    camera.translateX(factor);
                    //camera.position.x += (factor);
                }

                if (mcec.key('32')) {
                    this.scene.getMyPlayer().model.position.copy(camera.position);
                    //this.scene.world.spawnBall(camera.position.clone());
                }

                //camera.rotation.setFromEuler(euler);
                //camera.lookAt(target);

                if (this.lock_player_to_flight_camera) {
                    this.scene.getMyPlayer().model.position.x = camera.position.x;
                    this.scene.getMyPlayer().model.position.z = camera.position.z;
                }
            }

            // whatever this does
            camera.updateProjectionMatrix();

            // update this variable
            this.rotation = this.get360Rotation();
        }
    }, {
        key: '_trashz',
        value: function _trashz() {
            //camera.lookAt(this.myplayer.getPosition());
            //camera.position.y = this.myplayer.getPosition().y + 20;

            // var rotation = new THREE.Euler(0, 0, 0);
            //
            // rotation.x = scene.getMyPlayer().rotation.x;
            // rotation.y = scene.getMyPlayer().rotation.y;
            //
            // //camera.quaternion.setFromEuler(rotation);

            // var pressed = mcec.key("32");
            // if(typeof pressed !== "undefined") {
            //     console.log(pressed);
            // }
            //console.log(camera.rotation);
            //camera.position.x += 500;
            //camera.zoom = zoomFactor;

            //console.log(this.myplayer.model.position);


            //mcec.getApp().scene.getCamera().position.y += 1000.0;
            //mcec.getApp().scene.getCamera().position.x += 8.0;

            //this.getCamera().target = this.getMyPlayer().getPosition();

            //this.getCamera().position.x = this.getMyPlayer().motion.position.x;
            //this.getCamera().position.z = this.getMyPlayer().motion.position.z;

            //var zoomFactor = 500;
        }
    }, {
        key: 'get360Rotation',
        value: function get360Rotation(mesh) {
            if (!mesh) mesh = this.camera;

            var euler = new THREE.Euler();
            euler.order = "YXZ";
            euler.setFromQuaternion(mesh.quaternion);

            var rotation = euler.y * THREE.Math.RAD2DEG + 180;
            return rotation;
        }
    }, {
        key: 'set360Rotation',
        value: function set360Rotation(degrees, mesh) {
            if (!mesh) mesh = this.camera;
            if (!degrees) degrees = this.rotation;

            var euler = new THREE.Euler();
            euler.order = "YXZ";
            euler.setFromQuaternion(mesh.quaternion);
            euler.y = (degrees - 180) / THREE.Math.RAD2DEG;

            mesh.setRotationFromEuler(euler);
            if (mesh == this.camera) this.rotation = degrees;

            return this.rotation;
        }
    }]);

    return camera;
}();

module.exports = camera;

},{"../shared/mcec":69}],7:[function(require,module,exports){
(function (global){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//global.THREE = require('../js/build/three.min');

var mcec = require('../shared/mcec');
var io = require('../src/sockets');
var scene = require('../src/scene');
var login = require('../src/login');
var jQuery = require('../js/jquery-1.12.4.min');

var game = function () {
    function game() {
        _classCallCheck(this, game);

        global.$ = jQuery;
        global.mcec = mcec;

        // version to enforce
        this.version = '0.0.1b';

        // yeah
        this.clock = new THREE.Clock();

        // main bitches
        this.login = new login(this);
        this.scene = new scene(this);

        // idk
        this.state = -1; // havent received a state
        this.last_state = false;
        this.login_ready = false;

        mcec.setApp(this);
        mcec.getApp().start();
    }

    _createClass(game, [{
        key: 'update',
        value: function update() {
            var delta = this.clock.getDelta();

            if (typeof this.login !== "undefined") this.login.update(delta);
            if (typeof this.scene !== "undefined") this.scene.update(delta);
        }
    }, {
        key: 'setBinds',
        value: function setBinds() {
            var _this = this;

            // bind events and such
            var get_ping = function get_ping() {
                io.send('latency', Date.now(), function (startTime) {
                    var latency = Date.now() - startTime;
                    mcec.log('My ping is: ' + latency + 'ms');
                });
            };

            io.bind('connect', function () {
                mcec.log("Socket connected.");

                get_ping();
            });

            io.bind('message', function (msg) {
                mcec.log("Incoming fucking message " + msg);
            });

            io.bind('disconnect', function () {
                mcec.log("Socket disconnected.");

                _this.state = -1;
                _this.scene.doReset();
            });

            io.bind('ping', function () {
                get_ping();
            });

            io.bind('state', function (state) {
                mcec.log("Server says my state is: " + state);

                _this.state = state;
            });

            this.scene.setBinds();
        }
    }, {
        key: 'start',
        value: function start() {
            // start connection and create socket (before binds)
            io.connect();

            this.setBinds();

            // this is where the magic happens
            //var login = this.login;
            //login.show();
        }
    }]);

    return game;
}();

module.exports = game;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../js/jquery-1.12.4.min":1,"../shared/mcec":69,"../src/login":8,"../src/scene":13,"../src/sockets":15}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _models = require('../src/models');

var _models2 = _interopRequireDefault(_models);

require('../js/objects/water');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var players = require('../src/players');
var world = require('../src/world');
var renderer = require('../src/renderer');
var camera = require('../src/camera');
var terrain = require('../src/terrain');
var mcec = require('../shared/mcec');
var io = require('../src/sockets');
var views = require('../src/views');

//import '../js/water-material';

var login = function () {
    function login(game) {
        _classCallCheck(this, login);

        this.game = game;
        this.enabled = false;

        this.start();
    }

    // called upon init


    _createClass(login, [{
        key: 'start',
        value: function start() {
            // create a div that we will put our login screen into
            this.div = $('<div>').attr('id', 'container-login');

            // this is a div that will be displayed when the server isnt connected
            this.loading_div = $('#container-loading');

            // inject our login div into the page
            $('body').prepend(this.div);
        }
    }, {
        key: 'hide',
        value: function hide() {
            var _this = this;

            this.loading_div.hide();
            this.div.fadeOut(500, function () {
                _this.div.hide();
                _this.div.html('');
            });
        }

        // called to show the login screen

    }, {
        key: 'show',
        value: function show() {
            var _this2 = this;

            if (this.is_showing) return;
            this.is_showing = true;

            mcec.log("Showing login screen");

            views.clearBinds();

            views.load('login', function (html) {
                _this2.div.html(html);
                _this2.loading_div.hide();
                _this2.div.show();
            }).bindForm('login', function (data, inputs, e) {
                _this2.doLogin(inputs.user, inputs.pass);
            });

            //this.game.scene.camera.setLoginCamera();
        }
    }, {
        key: 'show_loader',
        value: function show_loader() {
            this.div.hide();
            this.div.html('');

            this.loading_div.show();

            this.game.scene.camera.setLoginCamera();
        }
    }, {
        key: 'doLogin',
        value: function doLogin(user, pass) {
            var _this3 = this;

            mcec.log('doLogin(' + user + ', ' + pass + ')');

            io.send('login', { user: user, pass: pass }, function (result, user_info, error) {
                mcec.log("LOGIN", result, user_info, error);
                if (result == true) {
                    _this3.user_info = user_info;
                    _this3.game.scene.getMyPlayer().loadDefaults(user_info);
                } else {
                    alert(error);
                }
            });
        }

        // called per tick

    }, {
        key: 'update',
        value: function update(delta) {
            if (typeof this.div == "undefined") return;

            var changed = false;

            if (this.last_state !== this.game.state) changed = true;
            this.last_state = this.game.state;

            if (changed) {
                this.is_showing = false;
            }

            if (this.game.state == -1) {
                this.show_loader();
            }

            if (this.game.state <= 0) {
                this.show();
            }

            if (this.game.state > 0) {
                this.hide();
            }
        }
    }]);

    return login;
}();

module.exports = login;

},{"../js/objects/water":2,"../shared/mcec":69,"../src/camera":6,"../src/models":9,"../src/players":11,"../src/renderer":12,"../src/sockets":15,"../src/terrain":16,"../src/views":18,"../src/world":20}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import ColladaLoader from "../src/ColladaLoader.js";
var mcec = require('../shared/mcec');

var models = function () {
    function models(scene) {
        _classCallCheck(this, models);

        this.scene = scene;
        this.queue = [];
        this.queue_textures = [];
        this.models = [];
        this.textures = [];
        this.has_init = false;
        this.queue_started = false;
    }

    _createClass(models, [{
        key: 'add',
        value: function add(model) {
            if (typeof model.filename !== "undefined" && model.filename.indexOf('.png')) {
                model.loaded = false;
                this.queue_textures.push(model);
                return;
            }
            this.queue.push(model);
        }
    }, {
        key: 'hide',
        value: function hide() {
            while (scene.children.length > 0) {
                scene.remove(scene.children[0]);
            }
        }
    }, {
        key: 'click',
        value: function click(e) {
            if (!this.has_init) {
                mcec.log("Waiting for all models to initialize ..");
                return;
            }

            // var raycaster = new THREE.Raycaster(); // create once
            // var mouse = new THREE.Vector2(); // create once
            //
            // mouse.x = ( e.clientX / mcec.getViewportSize().width ) * 2 - 1;
            // mouse.y = - ( e.clientY / mcec.getViewportSize().height ) * 2 + 1;
            //
            // raycaster.setFromCamera( mouse, this.scene.getCamera() );

            var camera = this.scene.getCamera();

            var vector = new THREE.Vector3();
            var raycaster = new THREE.Raycaster();
            var dir = new THREE.Vector3();

            vector.set(e.clientX / window.innerWidth * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1, 0.5); // z = 0.5 important!
            vector.unproject(camera);
            raycaster.set(camera.position, vector.sub(camera.position).normalize());

            var intersects = raycaster.intersectObjects(this.scene.scene.children, true);

            // GPU PICKING
            // this.scene.gpuPicker.needUpdate = true;
            //
            // var raymouse = new THREE.Vector2();
            // raymouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
            // raymouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
            //
            // raycaster.setFromCamera( raymouse, this.scene.getCamera() );
            // var intersects = this.scene.gpuPicker.pick(this.scene.mouse, raycaster);


            for (var i = 0; i < intersects.length; i++) {
                var intersection = intersects[i];
                var mesh = intersection.object;
                var model = this.get(mesh);

                //mcec.log("INTERSECTION", intersection, mesh, model);

                if (model) {
                    model.handleClick(intersection, e);
                }

                if (mesh.name == "") continue;

                // console.log(e);
                // mcec.log("Clicked on object " + obj.name);
                // console.log(obj);

                //this.scene.world.placeMarker(intersection.point.x, intersection.point.y+1, intersection.point.z);

                if (mesh.name == "click_mesh") continue;
                if (mesh.name == "skybox") continue;
                if (mesh.type == "LineSegments") continue;

                break;
            }
        }

        // get model by mesh

    }, {
        key: 'get',
        value: function get(mesh) {
            for (var i = 0; i < this.models.length; i++) {
                var model = this.models[i];

                var is_platform = mesh.name == "platform" && model.name == "platform";

                if (model.model == mesh || is_platform) {
                    return model;
                }
            }

            return false;
        }
    }, {
        key: 'getTexture',
        value: function getTexture(id) {
            for (var i = 0; i < this.textures.length; i++) {
                var texture = this.textures[i];

                if (texture.id == id) return texture.texture;
            }

            return false;
        }

        // load all models in queue

    }, {
        key: 'startQueue',
        value: function startQueue(callback) {
            var models = this;
            models.callback = callback;

            this.queue_started = true;
            this.processQueue();
        }
    }, {
        key: 'removeFromQueue',
        value: function removeFromQueue(model) {

            var new_q = [];

            for (var i = 0; i < this.queue.length; i++) {
                if (this.queue[i] !== model) {
                    new_q.push(this.queue[i]);
                }
            }

            this.queue = new_q;
        }
    }, {
        key: 'processQueue',
        value: function processQueue() {
            if (!this.queue_started) return;

            var waiting = 0;

            for (var i = 0; i < this.queue.length; i++) {
                var model = this.queue[i];

                if (!model.started) {
                    model.started = true;
                    this.load(model);

                    mcec.log("Loading: " + model.id);
                }

                if (model.isMeshLoaded()) {

                    this.models.push(model);
                    this.removeFromQueue(model);

                    //this.queue.splice(i, 1);

                    mcec.log("Moving " + model.id + " to scene");

                    model.addToScene();
                } else {
                    waiting++;
                }
            }

            if (waiting > 0) {
                mcec.log("Still " + waiting + " items left in queue");
                //this.processQueue();
            } else {

                if (!this.has_init) {

                    this.has_init = true;
                    mcec.log("Queue is complete, doing callback");

                    if (typeof this.callback !== "undefined") this.callback();
                }
            }

            //this.addToScene();

            // for(var i=0; i<this.queue_textures.length; i++) {
            //
            //     var texture = this.queue_textures[i];
            //     models.loadTexture(texture);
            //
            //     mcec.log("Loading: " + texture);
            // }
        }
    }, {
        key: 'addToScene',
        value: function addToScene() {
            // for(var i=0; i<this.queue.length; i++) {
            //     var model = this.queue[ i ];
            //
            //
            //
            //
            //     //this.scene.add(model.model);
            // }
            //
            // for(var i=0; i<this.queue_textures.length; i++) {
            //     var texture = this.queue_textures[ i ];
            //
            //     this.textures.push(texture);
            //     this.queue_textures.slice(i, i+1);
            //
            //     //this.scene.add(model.model);
            // }
            //
            // // all done, empty queue
            // this.callback();
            // this.init();
        }
    }, {
        key: 'updateQueue',
        value: function updateQueue() {

            if (!this.queue_started) return;

            var count = 0;
            for (var i = 0; i < this.queue.length; i++) {
                var q = this.queue[i];

                count++;

                if (q.isMeshLoaded()) {
                    count--;
                }
            }

            // for(var i=0; i<this.queue_textures.length; i++) {
            //     var q = this.queue_textures[ i ];
            //
            //     count ++;
            //
            //     if(q.loaded === true) {
            //         count --;
            //     }
            // }

            if (count > 0) {
                mcec.log("Still " + count + " items left in queue");

                this.processQueue();
            } else {

                if (!this.has_init) {
                    mcec.log("Queue is complete, doing callback");

                    this.callback();
                }
            }
        }
    }, {
        key: 'queue_count',
        value: function queue_count() {
            return this.queue.length;
        }
    }, {
        key: 'load',
        value: function load(model) {
            var models = this;
            var options = model.options;

            if (!options) options = {};
            var processMesh = function processMesh(mesh, options) {

                if (!mesh) {
                    var mesh = new THREE.Object3D();
                }

                models.applyOptionsToMesh(mesh, options, model);

                model.loadedMesh(mesh);
                models.processQueue();
            };

            if (typeof options.filename == "undefined") {
                mcec.log(options.name + " has no filename, creating empty object3d");

                model.load(function (mesh) {
                    processMesh(mesh, options, model);
                });
            } else {
                var url = options.filename + "?r=" + this.scene.clock.getDelta();

                mcec.log("Loading model from url: " + url);

                var JSONLoaderCallback = function JSONLoaderCallback(geometry, materials) {

                    var hasMaterials = typeof materials !== "undefined";

                    if (hasMaterials) {
                        mcec.log("Model " + options.name + " came with materials");
                        var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
                    } else {
                        mcec.log("Model " + options.name + " did not come with materials");
                        var mesh = new THREE.Mesh(geometry);
                    }

                    processMesh(mesh, options, model);
                };
                var ObjectLoaderCallback = function ObjectLoaderCallback(object) {

                    if (typeof object.scene !== "undefined") {
                        var mesh = object.scene;
                    } else {
                        var mesh = object;
                    }

                    //var mesh = new THREE.Mesh( object.scene.children[0].geometry, object.scene.children[0].material );

                    //console.log(mesh);
                    //
                    // for(var i=0; i<mesh.children.length; i++) {
                    //
                    //     var child = mesh.children[ i ];
                    //
                    //     if(child.type == "Mesh") {
                    //         // console.log("CHILD", child);
                    //         // child.material.side = THREE.DoubleSide;
                    //         // child.material.skinning = true;
                    //     }
                    // }

                    processMesh(mesh, options, model);
                };

                if (url.indexOf('.dae') != -1) {
                    var loader = new THREE.ColladaLoader();
                    loader.load(url, function (obj) {
                        ObjectLoaderCallback(obj);
                    });
                } else if (url.indexOf('.fbx') != -1) {
                    var loader = new THREE.FBXLoader();
                    loader.load(url, function (obj) {
                        ObjectLoaderCallback(obj);
                    });
                } else {
                    var loader = new THREE.JSONLoader();
                    loader.load(url, function (geometry, materials) {
                        JSONLoaderCallback(geometry, materials);
                    });
                }
            }
        }
    }, {
        key: 'applyOptionsToMesh',
        value: function applyOptionsToMesh(mesh, options, model) {

            if (!options) var options = {};

            mcec.log("Applying options to mesh: " + options.name);

            var hasMaterials = typeof mesh.material !== "undefined";

            if (hasMaterials) {
                var material = mesh.material;
            }

            if (options.enhance === "true") {
                mcec.log("Enabling enhancements");
                //mesh.geometry.dynamic = true;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            }

            if (typeof options.name !== "undefined") {
                mesh.name = options.name;
            }

            //if(model) model.group.scale.set(model.scale, model.scale, model.scale);
            if (typeof options.scale !== "undefined") mesh.scale.set(options.scale, options.scale, options.scale);

            if (options.skinning === true && hasMaterials) {
                mcec.log("Enabling skinning for " + options.name);
                for (var i = 0; i < material.length; i++) {
                    var m = material[i];
                    m.skinning = true;
                }
            }

            if (hasMaterials && options.morph_targets !== "undefined" && options.morph_targets == true) {
                mcec.log("Enabling morphTargets for " + options.name);
                for (var i = 0; i < material.length; i++) {
                    var m = material[i];
                    m.morphTargets = true;
                }
            }

            if (hasMaterials && options.morph_normals !== "undefined" && options.morph_normals == true) {
                mcec.log("Enabling morphNormals for " + options.name);
                for (var i = 0; i < material.length; i++) {
                    var m = material[i];
                    m.morphNormals = true;
                }
            }

            if (hasMaterials && options.shininess !== "undefined") {
                mcec.log("Modifying shininess for " + options.name);
                for (var i = 0; i < material.length; i++) {
                    var m = material[i];
                    m.shininess = options.shininess;
                }
            }

            if (typeof options.place_on !== "undefined") {

                //var y = models.get('platform').getY(90, 90);

                //console.log(y);

            }

            if (mesh.name == "self") {}

            return mesh;
        }
    }, {
        key: 'loadTexture',
        value: function loadTexture(texture) {
            var models = this;
            var url = texture.filename;
            var name = texture.name;

            var loader = new THREE.TextureLoader();
            loader.load(url, function (tx) {

                texture.id = name;
                texture.texture = tx;
                texture.loaded = true;

                mcec.log("Loaded texture: " + name + " from " + url);

                models.updateQueue();
            });
        }
    }, {
        key: 'update',
        value: function update(delta) {

            for (var i in this.models) {
                var model = this.models[i];

                if (!model.isMeshLoaded()) continue;

                model.handleInit();
                model.handleUpdate(delta);
            }

            this.processQueue();
        }
    }, {
        key: 'modelsHaveInit',
        value: function modelsHaveInit() {
            var init = true;

            for (var model in this.models) {
                if (this.models[model].has_init == false) init = false;
            }

            return init;
        }
    }, {
        key: 'init',
        value: function init() {
            for (var model in this.models) {
                this.models[model].handleInit();
            }
        }
    }]);

    return models;
}();

exports.default = models;

module.exports = models;

},{"../shared/mcec":69}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basemodel = require('../src/basemodel');

var _basemodel2 = _interopRequireDefault(_basemodel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var io = require('../src/sockets');

var player = function (_baseModel) {
    _inherits(player, _baseModel);

    function player(scene, id, defaults) {
        _classCallCheck(this, player);

        var options = {
            filename: 'shared/player.json',
            scale: 10,
            skinning: true,
            // morph_targets: true,
            // morph_normals: true,
            // enhance: true,
            shininess: 0,
            //skinning: true,
            //offset: {y: -145},
            mass: 1
        };

        var _this = _possibleConstructorReturn(this, (player.__proto__ || Object.getPrototypeOf(player)).call(this, scene, id, Object.assign(options, defaults)));

        _this.walk_speed = 0.5; // how fast we want the player to walk
        _this.walk_segment = 150; // how far to walk before each calculation
        _this.animation_multiplier = 1.5; // how fast the animation should play

        _this.apply_physics = true;
        _this.is_npc = options.npc == true;
        _this.raycaster = new THREE.Raycaster();
        _this.walk_attempt = false; // # of retries when walking
        _this.is_walking = false;
        // this.addSubmodel(player_weapon, 'weapon');
        // this.addSubmodel(player_head, 'head');

        if (typeof options.id !== "undefined") mcec.log("Player (user id #" + options.id + ") initializing!");
        return _this;
    }

    _createClass(player, [{
        key: 'loadDefaults',
        value: function loadDefaults(user_info) {
            if (typeof user_info == "undefined") return;

            this.user_info = user_info;

            for (var n in user_info) {
                var v = user_info[n];

                if (n == "position") {

                    this.position.x = v.x;
                    this.position.y = v.y;
                    this.position.z = v.z;

                    if (this.isMeshLoaded()) this.model.position = this.position;
                }
            }

            if (typeof user_info.username !== "undefined") this.makeNameTag(user_info.username);
        }
    }, {
        key: 'makeNameTag',
        value: function makeNameTag(text) {
            var _this2 = this;

            //this.name_tag = this.makeTextSprite(text, { fontsize: 12, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
            //this.name_tag = new SpriteText2D(text, { align: textAlign.center,  font: '40px Arial', fillStyle: '#000000' , antialias: false });


            //this.scene.add( this.name_tag );

            var loader = new THREE.FontLoader();
            var font = loader.load('fonts/helvetiker_regular.typeface.json', function (font) {

                var geometry = new THREE.TextGeometry(text, { size: 0.1,
                    height: 0.001,
                    curveSegments: 3,
                    font: font,
                    bevelThickness: 0.1,
                    bevelSize: 0.1,
                    bevelEnabled: false
                });

                var name_tag = new THREE.Group();

                // player name 1
                var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, side: THREE.FrontSide }));
                mesh.position.z = 0.001;
                name_tag.add(mesh);

                // calc some geom brah
                name_tag.children[0].geometry.computeBoundingBox();
                var size = name_tag.children[0].geometry.boundingBox;
                var width = size.max.x - size.min.x;
                var height = size.max.y - size.min.y;

                // rounded rect
                var w = width + .07;
                var h = height + .035;

                // // player name shadow 1
                // var mesh2 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity: 0.1, side: THREE.FrontSide } ) );
                // mesh2.position.x += 0.02; // right
                // mesh2.position.y += -0.02; // down
                // mesh2.position.z = 0.025; // behind mesh1
                // name_tag.add(mesh2);

                // player name 2 ( FLIP SIDE )
                var mesh3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, side: THREE.FrontSide }));
                mesh3.rotation.y = THREE.Math.degToRad(180);
                mesh3.position.x += width;
                mesh3.position.z = -0.001; // behind
                name_tag.add(mesh3);

                // // player name shadow 2 ( FLIP SIDE )
                // var mesh4 = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, transparent: true, opacity: 0.1, side: THREE.FrontSide } ) );
                // mesh4.rotation.y = THREE.Math.degToRad(180);
                // mesh4.position.x += width; // right
                // mesh4.position.x -= 0.02; // right
                // mesh4.position.y += -0.02; // down
                // mesh4.position.z = -0.025;// behind
                // name_tag.add(mesh4);

                // create rect
                var shape = new THREE.Shape();
                _this2.roundRect(shape, 0, 0, w, h, 0.02);

                var geometry = new THREE.ShapeBufferGeometry(shape);
                var label = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, side: THREE.DoubleSide }));
                label.position.z = 0; // center
                label.position.y -= (h - height) * 1.05; // down
                label.position.x -= (w - width) / 2; // left

                name_tag.add(label);

                _this2.name_tag = name_tag;

                //this.name_tag.scale.set(0.1, 0.1, 0.1);
            });
        }
    }, {
        key: 'update_model',
        value: function update_model() {

            // stick to ground
            //if(this.is_placed && this.is_walking) this.handlePhysics();
        }
    }, {
        key: 'init',
        value: function init() {
            this.model.geometry.computeBoundingBox();
            var bbox = new THREE.Box3().setFromObject(this.model);

            this.size = bbox;
            this.height = bbox.max.y - bbox.min.y;
            this.height_scaled = this.height / this.options.scale;
            this.scene.camera.player_height = this.height;

            mcec.log("Player completely loaded - " + this.name, this.height);

            //this.getModel().position.set(0, 50, 0);
            //this.handlePhysics();
            //this.is_placed = true;

            //this.model.material

            this.playIdleAnimation();

            if (this.isMyPlayer()) {
                this.localPlayerInit();
            }

            if (typeof this.name_tag !== "undefined") {
                this.getModel().add(this.name_tag);
            }

            this.name_tag.children[0].geometry.computeBoundingBox();
            this.name_tag.position.x = -(this.name_tag.children[0].geometry.boundingBox.max.x / 2);
            this.name_tag.position.y = this.height_scaled * 1.1;

            //this.initPhysics();

            var material = new THREE.MeshBasicMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0
            });

            var geometry = new THREE.CylinderBufferGeometry(0.5, 0.05, 3.8, 4, 4);

            var hitbox = new THREE.Mesh(geometry, material);

            //hitbox.position.y += 1;

            hitbox.castShadow = false;
            hitbox.receiveShadow = false;

            hitbox.name = "hitbox";

            this.hitbox = hitbox;
            this.model.add(hitbox);
            this.scene.hitboxes.push(this.hitbox);

            // var scene = this.scene;
            // this.can_update = false;
            // var me = this;
            // var loader = new THREE.JSONLoader();
            // loader.load("shared/player.json", function ( geometry, materials ) {
            //
            //     for ( var i = 0; i < materials.length; i ++ ) {
            //         var m = materials[ i ];
            //         m.skinning = true;
            //         m.morphTargets = true;
            //         // m.specular.setHSL( 0, 0, 0.1 );
            //         // m.color.setHSL( 0.6, 0, 0.6 );
            //         //m.map = map;
            //         //m.envMap = envMap;
            //         //m.bumpMap = bumpMap;
            //         //m.bumpScale = 2;
            //         //m.combine = THREE.MixOperation;
            //         //m.reflectivity = 0.75;
            //     }
            //
            //     var mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
            //
            //     mesh.updateMatrix();
            //     mesh.updateMatrixWorld(true);
            //
            //     mesh.scale.set(25,25,25);
            //
            //     mesh.position.x -= 100;
            //     mesh.position.z += 100;
            //     mesh.position.y = scene.world.getY(mesh.position.x, mesh.position.z);
            //
            //
            //
            //     if (typeof mesh.geometry !== "undefined" && typeof mesh.geometry.vertices !== "undefined") {
            //         mcec.log("Reversing vertices for model " + mesh.name);
            //
            //         var geo = mesh.geometry;
            //         var verts = geo.vertices;
            //
            //         for (let i = 0; i < verts.length; i++) {
            //             //verts[i].setX(verts[i].x * -1);
            //             //verts[i].setY(verts[i].y * -1);
            //         }
            //
            //         geo.verticesNeedUpdate = true;
            //     }
            //
            //
            //     scene.add(mesh);
            //
            //     me.testmesh = mesh;
            //
            //     me.testthemesh(mesh);
            //
            // } );
        }
    }, {
        key: 'initPhysics',
        value: function initPhysics() {

            // idk
            var mass = 15;
            var mesh = this.getMesh();

            // make a bounding box
            var box = new THREE.Box3().setFromObject(mesh);
            var x = box.size().x;
            var y = box.size().y;
            var z = box.size().z;

            // maybe use this later
            this.box_size = box.size();

            //this.scene.world.addRigidBody(this);

            // do random ammojs shit that i dont get
            // var shape = new Ammo.btBoxShape( new Ammo.btVector3(x, y, z) );
            // shape.setMargin( margin );
            //
            // var localInertia = new Ammo.btVector3( 0, 0, 0 );
            // shape.calculateLocalInertia( mass, localInertia );
            //
            // var transform = new Ammo.btTransform();
            // transform.setIdentity();
            //
            // var pos = mesh.position;
            // transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
            //
            // var motionState = new Ammo.btDefaultMotionState( transform );
            // var rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, shape, localInertia );
            // var body = new Ammo.btRigidBody( rbInfo );
            //
            // mesh.userData.physicsBody = body;
            //
            // this.scene.world.dynamic_objects.push( mesh );
            // this.scene.world.physics_world.addRigidBody( body );
        }
    }, {
        key: 'localPlayerInit',
        value: function localPlayerInit() {
            // var x = this.position.x;
            // var z = this.position.z;
            // var radius = 30;
            //
            // // dont touch
            // var min_x = x - (radius/2);
            // var min_z = z -(radius/2);
            // var max_x = x + (radius/2);
            // var max_z = z +(radius/2);
            //
            // for(var _x=min_x; _x<max_x; _x++) {
            //     for(var _z=min_z; _z<max_z; _z++) {
            //
            //         var pos = this.scene.world.terrain.GetGridSquarePositionAt(_x, _z);
            //
            //         var y = this.scene.world.terrain.getY(pos.x, pos.z);
            //         var y2 = this.scene.world.terrain.getY(pos.x, pos.z, 1);
            //
            //         console.log("Y and Filtered Y:", y, y2);
            //
            //         this.placePlane(pos.x, y2, pos.z, 5, 5);
            //         //this.placePlane(pos.x, y2, pos.z, 5, 5, true);
            //     }
            // }

            //this.scene.world.terrain.getCurrentSector().addWireframe();

        }
    }, {
        key: 'click',
        value: function click(e) {
            mcec.log("player clicked on " + this.user_info.id);
            console.log(this);
        }
    }, {
        key: 'set_target',
        value: function set_target(target) {
            this.startWalking();
        }
    }, {
        key: 'startWalking',
        value: function startWalking() {
            //console.time('testWalkTime');

            this.is_walking = true;
            this.walk_step = false;

            this.playAnimation("Walk");
        }

        // updated framely, and should just gradually pull the player down

    }, {
        key: 'applyGravity',
        value: function applyGravity() {
            if (this.stuck_to_ground == true) return;

            var grav = 1;
            var above = 10;
            var raycaster = new THREE.Raycaster();
            var y = this.position.y;

            //raycaster.ray.direction.set( 0, -1, 0 );
            //raycaster.ray.origin.set(this.position.x, this.position.y + above, this.position.z);

            // var hits = raycaster.intersectObject( this.scene.world.terrain.getSectorFromPosition(this.position.x, this.position.z).mesh );
            // var hits_filtered = [];
            //
            // if( ( hits.length > 0 ) ) {
            //     for(var i=0; i<hits.length; i++) {
            //         y = (hits[i].distance) - above;
            //         break;
            //     }
            // }

            //if(this.walk_step !== "undefined" && this.walk_step !== false) {
            //    var alt = this.scene.world.terrain.getY(this.walk_step.x, this.walk_step.z, 1);
            //} else {
            var alt = this.scene.world.terrain.getY(this.position.x, this.position.z, this.position.y);
            //}

            var diff = this.position.y - alt;

            // move player up
            if (diff < 0) {
                if (y + grav * 2 > alt) y = alt;else y += grav * 2;
            }

            // move player down
            if (diff > 0) {
                if (y - grav < alt) y = alt;else y -= grav;
            }

            if (y == this.model.position.y) {
                this.stuck_to_ground = true;
            }

            //console.log(y, this.scene.world.terrain.getY(this.position.x, this.position.z, 10));

            this.model.position.y = y;
        }

        // im walking, and need to move across the screen

    }, {
        key: 'walkUpdate',
        value: function walkUpdate(attempt) {
            var _this3 = this;

            var segment_dist = this.walk_segment;

            // clone target and set to player Y
            var level_target = this.target.clone();
            level_target.y = this.position.y; // so theres no messing with y position of our player

            // are we less than 10% distance to the step?
            if ((this.distanceFrom(this.walk_step) < segment_dist * 0.1 || !this.walk_step) && !this.walk_step_pending) {

                // calculate a new step step_segment toward the target
                var new_step = this.getPointInBetweenByLen(this.getModel().position.clone(), this.target, segment_dist);

                this.walk_step_pending = true;
                io.send('walk', new_step, function (pos) {
                    _this3.walk_step = new THREE.Vector3(pos.x, pos.y, pos.z);
                    _this3.walk_step_pending = false;

                    mcec.log("[IO] Got walk step back!", _this3.walk_step);
                });

                // place a marker on this next step for debug
                // this.walk_step.y = this.scene.world.getY(this.walk_step.x, this.walk_step.z);
                // this.placeMarker(this.walk_step.x, this.walk_step.y, this.walk_step.z);
            }

            // walk only if we have a step!
            if (this.walk_step !== false) {

                if (this.distanceFrom(this.walk_step) < 1 && this.walk_step_pending) {
                    mcec.log("LAG! Waiting on walk step!");
                } else {
                    // get a new point for this frame that is just an increment toward the walk_step, so walk_speed
                    var pos = this.getPointInBetweenByLen(this.getModel().position.clone(), this.walk_step, this.walk_speed);

                    // look toward the target
                    this.lookToward(pos.x, pos.z);

                    // set my X and Z to the new position, the altitude will be handled by 'gravity'
                    this.getModel().position.x = pos.x;
                    this.getModel().position.z = pos.z;

                    // check if arrived at dest
                    if (this.distanceFrom(this.target) < 1 && !this.walk_step_pending) {
                        this.walkComplete();
                    }
                }
            }

            /*
            // if(!this.walk_step || distance_to_next < segment_dist * .1 || attempt > 0) {
            //
            //     if(target !== this.walk_step) {
            //
            //         mcec.log("Getting new walk step (" + this.name + "), distance was: " + distance_to_next);
            //
            //         this.walk_step = this.getPointInBetweenByLen(this.getModel().position, target, segment_dist);
            //
            //         //this.walk_step.y = this.getModel().position.y;
            //         //target.y = this.getModel().position.y;
            //
            //         var dist1 = this.distanceFrom(this.walk_step);
            //         var dist2 = this.distanceFrom(target);
            //
            //         // if its going to take longer to take a step, than the whole trip..
            //         if (dist1 > dist2) {
            //             mcec.log("Setting final walk step same as target");
            //             this.walk_step = target.clone();
            //         }
            //
            //         //this.walk_step.y = this.scene.world.getY(this.walk_step.x, this.walk_step.z);
            //
            //         //this.walk_step.y  += player_height + 5;
            //
            //         //this.placeMarker(this.walk_step.x, this.walk_step.y, this.walk_step.z);
            //
            //
            //     }
            // }
             //this.walk_step = this.getPointInBetweenByLen(this.getModel().position, target, segment_dist);
            //new_pos = this.getPointInBetweenByLen(old_pos, target, step_dist);
             // calc distances
            //var dist1 = this.distanceFrom(this.walk_step);
            //var dist2 = this.distanceFrom(target);
             // if(target !== this.walk_step) {
            //     new_pos = this.getPointInBetweenByLen(this.getModel().position, this.walk_step, step_dist);
            // }
             //var hasnt_moved = false;
            
            // make movement
            // if(old_pos.x > this.walk_step.x) {
            //     new_pos.x -= step_dist;
            // }
            // if(old_pos.x < this.walk_step.x) {
            //     new_pos.x += step_dist;
            // }
            //
            // if(old_pos.z > this.walk_step.z) {
            //     new_pos.z -= step_dist;
            // }
            // if(old_pos.z < this.walk_step.z) {
            //     new_pos.z += step_dist;
            // }
             //new_pos = this.getPointInBetweenByLen(old_pos, this.walk_step, step_dist);
             // if(new_pos.y > this.walk_step.y) {
            //     new_pos.y -= step_dist;
            // }
            // if(new_pos.y < this.walk_step.y) {
            //     new_pos.y += step_dist;
            // }
             //new_pos = this.getVectorFromFront(step_dist, {position: n});
            //this.placeMarker(new_pos.x, new_pos.y, new_pos.z);
             //var coords = this.getGridLocation();
            //var target_coords = this.scene.world.terrain.getGridCoordsAt(this.target.x, this.target.z);
            //var arrived = ((coords.x == target_coords.x && coords.y == target_coords.y));
             //if(coords == this.grid_coords) {
            //    hasnt_moved = true;
            //}
             //this.grid_coords = coords;
            */
        }
    }, {
        key: 'getGridLocation',
        value: function getGridLocation() {
            var x = this.position.x;
            var z = this.position.z;

            var coords = this.scene.world.terrain.getGridCoordsAt(x, z);

            return coords;
        }
    }, {
        key: 'walkComplete',
        value: function walkComplete() {
            this.is_walking = false;
            this.target = false;
            this.walk_attempt = false;
            this.walk_step = false;

            mcec.log("I've finished walking (" + this.name + ")");

            //this.placeOnGround();

            if (this.isMyPlayer()) {
                this.scene.world.clearClickMesh();
            }

            this.playIdleAnimation();

            //console.timeEnd('testWalkTime');
        }
    }, {
        key: 'playIdleAnimation',
        value: function playIdleAnimation() {
            this.playAnimation("Idle", true);
        }

        // called when the model is moved in any way

    }, {
        key: 'move',
        value: function move() {
            //this.placeOnGround();
            //mcec.log("Placed player on ground (" + this.name + ")");

            this.stuck_to_ground = false;

            if (!this.has_init) return;

            //this.name_tag.position.x -= 2;
            //this.name_tag.position.x -= 5;
            //this.name_tag.lookAt(this.scene.getCamera().position);
        }
    }, {
        key: 'isMyPlayer',
        value: function isMyPlayer() {
            return this == this.scene.getMyPlayer();
        }
    }, {
        key: 'isNPC',
        value: function isNPC() {
            return this.is_npc;
        }
    }, {
        key: 'freeze',
        value: function freeze() {
            this.model = undefined;
        }
    }, {
        key: 'walkTo',
        value: function walkTo(x, y, z) {
            mcec.log("WalkTo(" + x + ", " + z + ")");

            if (!z) {
                z = y;
                this.setTarget(x, z);
            } else {
                //this.lookToward(x, z);
                this.setTargetFromCoords(x, y, z);
            }
        }

        // idk.. remove self from scene?

    }, {
        key: 'unload',
        value: function unload() {
            mcec.log("Unloading player ", this);

            for (var i = 0; i < this.scene.scene.children.length; i++) {
                var obj = this.scene.scene.children[i];

                if (obj == this.model) {
                    this.scene.scene.remove(obj);
                }
            }

            for (var i = 0; i < this.scene.hitboxes.length; i++) {
                var obj = this.scene.hitboxes[i];

                if (obj == this.hitbox) {
                    this.scene.hitboxes.splice(i, 1);
                }
            }

            this.scene.scene.remove(this.name_tag);
        }

        // this is called for every player on every render update,
        // does NOT fire until the model is loaded

    }, {
        key: 'update',
        value: function update() {
            //this.model.position.z += 1;

            if (!this.is_placed) {
                this.placeOnGround();
            }

            if (!this.is_walking && this.hasTarget()) {
                mcec.log("Found that I (" + this.name + ") have a target");
                this.startWalking();
            }

            if (this.is_walking) {
                this.walkUpdate();
            } else {

                var rand_x = Math.floor(Math.random() * 500 + 1) - 250;
                var rand_y = Math.floor(Math.random() * 500 + 1) - 250;

                var dist = this.distanceFrom(this.scene.getMyPlayer().position);
                if (this.isNPC() && this.scene.world.has_init && dist > 5 && !this.is_walking) {

                    // var pos = this.getPointInBetweenByLen(this.position, this.scene.getMyPlayer().position, dist);

                    var pos = this.position;

                    mcec.log(this.name + " my position: " + pos.x + ", " + pos.z);

                    var x = mcec.random(pos.x + 20, pos.x - 20);
                    var z = mcec.random(pos.z + 20, pos.z - 20);

                    mcec.log(this.name + " walking to: " + x + ", " + z);

                    this.walkTo(x, z);
                }
            }

            this.applyGravity();
        }
    }]);

    return player;
}(_basemodel2.default);

module.exports = player;

},{"../src/basemodel":5,"../src/sockets":15}],11:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = require('../src/player.js');

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var players = function () {
    function players(scene) {
        _classCallCheck(this, players);

        this.scene = scene;

        this.players = [];

        this.myplayer = this.addMyPlayer();
        //this.myplayer = false;
    }

    _createClass(players, [{
        key: 'addPlayer',
        value: function addPlayer(defaults) {
            var player = new _player2.default(this.scene, 'player', defaults);
            this.players.push(player);

            player.loadDefaults(defaults);

            return player;
        }
    }, {
        key: '__OLD_addPlayer',
        value: function __OLD_addPlayer(id, options) {
            var player = new _player2.default(this.scene, id, options);
            this.players.push(player);

            return player;
        }
    }, {
        key: 'addMyPlayer',
        value: function addMyPlayer(defaults) {
            var players = this;
            var setCamera = function setCamera(mesh) {
                players.setPlayerCamera(mesh);
            };
            var player = this.addPlayer(defaults); //, {callback: setCamera});

            return player;
        }
    }, {
        key: 'handleUpdate',
        value: function handleUpdate() {
            for (var i = 0; i < this.players.length; i++) {
                mcec.log("UPDATING PLAYER " + i);
                this.players[i].handleUpdate();
            }
        }
    }, {
        key: 'getMyPlayer',
        value: function getMyPlayer() {
            return this.myplayer;
        }
    }, {
        key: 'setPlayerCamera',
        value: function setPlayerCamera(mesh) {
            mcec.log("Setting player camera");
            mesh.add(this.camera.get());
            this.scene.setControls();
        }
    }, {
        key: 'getPlayer',
        value: function getPlayer(id) {
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];

                if (player.user_info.id == id) return player;
            }
        }
    }, {
        key: 'removePlayer',
        value: function removePlayer(id) {
            for (var i = 0; i < this.players.length; i++) {
                var player = this.players[i];

                if (player.user_info.id == id) {
                    player.unload();
                    this.players.splice(i, 1);

                    return true;
                }
            }
        }
    }]);

    return players;
}();

module.exports = players;

},{"../src/player.js":10}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CSS3DRenderer = require('../js/renderers/CSS3DRenderer.js');

var _CSS3DRenderer2 = _interopRequireDefault(_CSS3DRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var renderer = function () {
    function renderer(scene, css_renderer) {
        _classCallCheck(this, renderer);

        this.scene = scene;
        this.renderer = this.create(css_renderer);
    }

    _createClass(renderer, [{
        key: 'create',
        value: function create(css_renderer) {

            if (css_renderer) {
                var renderer = new THREE.CSS3DRenderer();

                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.domElement.style.position = 'absolute';
                renderer.domElement.style.top = 0;
            } else {
                var renderer = new THREE.WebGLRenderer({ antialias: true });

                //var renderer = new THREE.CSS3DRenderer();

                renderer.setPixelRatio(window.devicePixelRatio);

                //renderer.setClearColor("#CCCCCC");
                renderer.sortObjects = false;
                renderer.autoClear = false;
                renderer.gammaInput = true;
                renderer.gammaOutput = true;
                //renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.shadowMapEnabled = true;
                renderer.shadowMapType = THREE.PCFSoftShadowMap;

                renderer.shadowMapEnabled = true;
                renderer.shadowMapSoft = true;
            }

            // renderer.shadowCameraNear = 3;
            // renderer.shadowCameraFar = 15000;
            // renderer.shadowCameraFov = 50;
            //
            // renderer.shadowMapBias = 0.0039;
            // renderer.shadowMapDarkness = 0.5;
            // renderer.shadowMapWidth = 1024;
            // renderer.shadowMapHeight = 1024;

            return renderer;
        }
    }, {
        key: 'get',
        value: function get() {
            return this.renderer;
        }
    }]);

    return renderer;
}();

module.exports = renderer;

},{"../js/renderers/CSS3DRenderer.js":3}],13:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('../js/objects/water');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mcec = require('../shared/mcec');
var players = require('../src/players');
var world = require('../src/world');
var renderer = require('../src/renderer');
var camera = require('../src/camera');
var terrain = require('../src/terrain');
var models = require('../src/models');
var io = require('../src/sockets');

var scene = function () {
    function scene(game, bypass_init) {
        _classCallCheck(this, scene);

        this.game = game;

        //
        // some of our main shit
        this.enabled = false;
        this.skybox_scale = 10000;
        this.mouse = new THREE.Vector2(0, 0);
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.css_scene = new THREE.Scene();
        this.hitboxes = []; // will hold our picking objects

        // renderers and camera
        this.renderer = new renderer(this);
        this.css_renderer = new renderer(this, true);
        this.camera = new camera(this);

        this.doReset();

        if (!bypass_init) {
            // watch controls
            mcec.watchControls(this.getRenderer().domElement);

            this.start(function () {
                game.update();
            });
        }
    }

    _createClass(scene, [{
        key: 'add',
        value: function add(obj) {
            return this.scene.add(obj);
        }
    }, {
        key: 'addSkybox',
        value: function addSkybox() {
            var size = this.skybox_scale; //this.world.terrain.sector_size;

            this.getCamera().far = size * 2;

            mcec.log("Initializing skybox with size: " + size);

            var scene = this;
            var skygroup = new THREE.Group();

            //var skyboxCubemap = new THREE.CubeTextureLoader().load(urls);
            var texture = new THREE.TextureLoader().load('shared/skybox.jpg');
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            var material = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                specular: 0x050505,
                shininess: 0,
                side: THREE.DoubleSide,
                map: texture,
                transparent: true,
                opacity: 1
            });

            var geometry = new THREE.SphereBufferGeometry(size, 10, 10);
            var skybox = new THREE.Mesh(geometry, material);

            skybox.castShadow = false;
            skybox.receiveShadow = false;

            skybox.name = "skybox";

            this.skybox = skygroup;

            // experimenting with nightbox

            var texture = new THREE.TextureLoader().load('shared/nightbox.jpg');
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

            var material = new THREE.MeshLambertMaterial({
                color: 0xffffff,
                specular: 0x050505,
                shininess: 0,
                side: THREE.DoubleSide,
                map: texture
                //transparent: true,
                //opacity: 1
            });
            var geometry = new THREE.SphereBufferGeometry(size + size * 0.002, 10, 10);
            var nightbox = new THREE.Mesh(geometry, material);
            nightbox.castShadow = false;
            nightbox.receiveShadow = false;
            this.nightbox = nightbox;

            skygroup.add(nightbox);
            skygroup.add(skybox);

            scene.add(skygroup);
        }
    }, {
        key: 'get',
        value: function get() {
            return this.scene;
        }
    }, {
        key: 'getCamera',
        value: function getCamera() {
            return this.camera.get();
        }
    }, {
        key: 'getContainer',
        value: function getContainer() {
            var container = document.getElementById('container');

            return container;
        }
    }, {
        key: 'getMyPlayer',
        value: function getMyPlayer() {
            return this.players.getMyPlayer();
        }
    }, {
        key: 'getRenderer',
        value: function getRenderer(css_renderer) {
            if (css_renderer) return this.css_renderer.get();else return this.renderer.get();
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            //mcec.log("scene click");

            if (!this.getMyPlayer()) return;
            this.models.click(e);
            //e.preventDefault();
        }
    }, {
        key: 'handleResize',
        value: function handleResize() {
            mcec.log("Resizing window");

            var viewport = mcec.getViewportSize();

            this.getRenderer().setSize(viewport.width, viewport.height);
            this.getRenderer(true).setSize(viewport.width, viewport.height);
            this.getCamera().aspect = viewport.width / viewport.height;
            this.getCamera().updateProjectionMatrix();

            //if(typeof this.gpuPicker !== "undefined") this.gpuPicker.resizeTexture( viewport.width, viewport.height );
        }
    }, {
        key: 'handleMovement',
        value: function handleMovement() {
            var player = this.getMyPlayer();

            var forward = new THREE.Vector3();
            var sideways = new THREE.Vector3();

            //if (!player.motion.airborne) {
            // look around with camera using arrows
            // var multx = 0.05;
            // var multy = 0.08;
            // var sx = this.keysPressed[this.watchedKeys.UP] ? multx : (this.keysPressed[this.watchedKeys.DN] ? -multx : 0);
            // var sy = this.keysPressed[this.watchedKeys.LT] ? multy : (this.keysPressed[this.watchedKeys.RT] ? -multy : 0);
            //
            // if (Math.abs(sx) >= Math.abs(player.motion.spinning.x)) player.motion.spinning.x = sx;
            // if (Math.abs(sy) >= Math.abs(player.motion.spinning.y)) player.motion.spinning.y = sy;
            //
            // // move around physically using WSAD
            // var mult = 0.5;
            // forward.set(Math.sin(player.motion.rotation.y), 0, Math.cos(player.motion.rotation.y));
            // sideways.set(forward.z, 0, -forward.x);
            // forward.multiplyScalar(this.keysPressed[this.watchedKeys.W] ? -mult : (this.keysPressed[this.watchedKeys.S] ? mult : 0));
            // sideways.multiplyScalar(this.keysPressed[this.watchedKeys.A] ? -mult : (this.keysPressed[this.watchedKeys.D] ? mult : 0));
            //
            // var combined = forward.add(sideways);
            // if (Math.abs(combined.x) >= Math.abs(player.motion.velocity.x)) player.motion.velocity.x = combined.x;
            // if (Math.abs(combined.y) >= Math.abs(player.motion.velocity.y)) player.motion.velocity.y = combined.y;
            // if (Math.abs(combined.z) >= Math.abs(player.motion.velocity.z)) player.motion.velocity.z = combined.z;
            //
            // //jump
            // var mult = 0.7;
            // var vy = this.keysPressed[this.watchedKeys.SP] ? mult : 0;
            // player.motion.velocity.y += vy;
            //}

            //console.log("COORDS: " , player.motion.position.x, player.motion.position.y, player.motion.position.z, " ROTATION: ", player.motion.rotation.x, player.motion.rotation.y);
        }
    }, {
        key: 'setLighting',
        value: function setLighting() {
            var hemilight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
            //hemilight.color.setHSL(.24, .64, .19 );
            //hemilight.groundColor.setHSL(0.095, 1, 1);
            hemilight.position.set(-500, this.skybox_scale / 3, 0);
            this.hemilight = hemilight;
            this.add(hemilight);

            // var alight = new THREE.AmbientLight(0x00ffe4, 1);
            // this.add(alight);

            var dirlight = new THREE.DirectionalLight(0xffffff, 1);
            dirlight.position.set(0, this.skybox_scale / 3, 0);
            //dirlight.color.setHSL(.74, .64, .59 );
            //dirlight.position.set(-1, 1.75, 1);
            //dirlight.position.multiplyScalar(150);
            dirlight.castShadow = true;
            dirlight.shadowMapWidth = 2048;
            dirlight.shadowMapHeight = 2048;

            var d = 50;

            dirlight.shadowCameraLeft = -d;
            dirlight.shadowCameraRight = d;
            dirlight.shadowCameraTop = d;
            dirlight.shadowCameraBottom = -d;

            dirlight.shadowCameraFar = 3500;
            dirlight.shadowBias = -0.0001;

            this.dirlight = dirlight;
            this.add(dirlight);
        }
    }, {
        key: 'setFog',
        value: function setFog() {
            // set fog i guess
            this.fog = new THREE.FogExp2(0xd3e0e8, 100);
        }
    }, {
        key: 'setControls',
        value: function setControls() {
            // var controls = new THREE.TrackballControls(this.getCamera(), this.getRenderer().domElement);
            // controls.noPan = true;
            // controls.rotateSpeed = 8.0;
            // controls.minDistance = 20;
            // controls.maxDistance = 400;
            //
            // this.controls = controls;
        }
    }, {
        key: 'setCamera',
        value: function setCamera() {}
    }, {
        key: 'start',
        value: function start(callback) {
            var scene = this;
            var start = function start() {
                scene.init(callback);
            };

            //this.models.add({name: 'click_good', filename: "shared/mouse_click_good.png"});
            //this.models.add({name: 'click_bad', filename: "shared/mouse_click_bad.png"});scene.bindEvents();

            // todo: Enhance!
            // scene.addSkybox();

            scene.init(callback);
        }
    }, {
        key: 'setWater',
        value: function setWater() {
            // Create the water effect
            // this.water = new THREE.Water(
            //     10000,
            //     10000,
            //     {
            //         textureWidth: 512,
            //         textureHeight: 512,
            //         waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
            //             texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            //         }),
            //         //alpha: 	parameters.alpha,
            //         sunDirection: this.dirlight.position.clone().normalize(),
            //         sunColor: 0xffffff,
            //         waterColor: 0x001e0f,
            //         //distortionScale: parameters.distortionScale,
            //         //fog: scene.fog != undefined
            //     }
            // );
            //
            // this.water.rotation.x = - Math.PI / 2;
            // this.water.receiveShadow = true;
            // this.water.scale.set(1000, 1000, 1000);
            // //this.water.position.y += 400;
            // this.add(this.water);

            // this.water = new THREE.Water(
            //     this.getRenderer(),
            //     this.getCamera(),
            //     this.scene,
            //     {
            //         textureWidth: 512,
            //         textureHeight: 512,
            //         waterNormals: new THREE.TextureLoader().load( 'textures/waternormals.jpg', function ( texture ) {
            //             texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            //         }),
            //         alpha: 1,
            //         sunDirection: this.dirlight.position.clone().normalize(),
            //         sunColor: 0xffffff,
            //         waterColor: 0x001e0f,
            //         //distortionScale: parameters.distortionScale,
            //         //fog: scene.fog != undefined
            //     }
            // );
            //
            // this.watermesh = new THREE.Mesh(
            //     new THREE.PlaneGeometry(10000, 10000, 1, 1),
            //     this.water.material
            // );
            //
            // //this.watermesh.scale.set(1000, 1000, 1000);
            // this.watermesh.add(this.water);
            // this.watermesh.rotation.x = - Math.PI * 0.5;
            // this.water.position.y -= 330;
            //
            // this.water.add(this.watermesh);
            //
            // this.add(this.water);
            this.water_options = {
                oceanSide: this.skybox_scale * 2,
                size: 512,
                distortionScale: 0,
                alpha: 0.7
            };

            //this.waterNormals;

            var water = new THREE.Water(this.water_options.oceanSide, this.water_options.oceanSide, {
                textureWidth: this.water_options.size,
                textureHeight: this.water_options.size,
                waterNormals: new THREE.TextureLoader().load('textures/water-512.jpg', function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }),
                alpha: this.water_options.alpha,
                sunDirection: this.dirlight.position.clone().normalize(),
                sunColor: 0x00aaac,
                waterColor: 0x00fffc,
                distortionScale: this.water_options.distortionScale,
                fog: this.fog || undefined
            });

            water.material.side = THREE.DoubleSide;

            this.water = new THREE.Group();
            this.water.rotation.x = -Math.PI / 2;
            this.water.castShadow = false;
            this.water.receiveShadow = false;
            this.water.position.y = 0;
            this.water.name = "water";

            this.water.add(water);

            this.add(this.water);

            ////////////////////////////////////////
            ////////////////////////////////////////
        }
    }, {
        key: 'init',
        value: function init(callback) {
            var scene = this;

            scene.handleResize();

            mcec.log("Initializing scene");

            window.addEventListener('resize', function () {
                scene.handleResize();
            }, false);

            var scene = this;
            var render = function render(timeStamp) {

                //var deltaTime = scene.clock.getDelta();
                //scene.update(deltaTime);

                // call our game loop with the time elapsed since last rendering, in ms
                callback();

                var camera = scene.getCamera();

                requestAnimationFrame(render);

                scene.getRenderer(true).render(scene.css_scene, camera);
                scene.getRenderer().render(scene.get(), camera);
                //scene.time += deltaTime;
            };

            this.inject();
            render();
        }

        // reset back to login screen

    }, {
        key: 'doReset',
        value: function doReset() {
            for (var i in this.scene.children) {
                this.scene.remove(this.scene.children[i]);
            }

            this.scene = new THREE.Scene();

            // start adding models
            this.models = new models(this);
            this.world = new world(this);
            this.players = new players(this);
            this.water = false;

            //this.doReset();
            this.setLighting();
            this.setFog();
            this.setWater();

            this.camera.setLoginCamera();

            mcec.log("Scene reset");
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (!this.is_showing) return;
            this.is_showing = false;

            //this.constructor(this.game);
        }
    }, {
        key: 'show',
        value: function show() {
            if (this.is_showing) return;
            this.is_showing = true;

            mcec.log("Scene start bitch");

            this.addSkybox();
            this.models.startQueue();
        }
    }, {
        key: 'setBinds',
        value: function setBinds() {
            var _this = this;

            // io.send('login', {user: user, pass: pass}, (result, user_info, error) => {
            //     console.log("LOGIN", result, user_info, error);
            //     this.user_info = user_info;
            //     this.game.scene.getMyPlayer().loadDefaults(user_info);
            // });

            io.bind('player_add', function (player_info) {
                console.log("Server says theres a player nearby!", player_info);
                var player = _this.players.addPlayer(player_info);
            });

            io.bind('player_walk', function (info) {

                var player_id = info.player_id;
                var walk_to = info.position;

                console.log("WALK_TO", walk_to);

                var player = _this.players.getPlayer(player_id);

                if (!player) {
                    mcec.log("Cannot find player #" + player_id);
                    return;
                }

                console.log("PLAYER WALK", player_id, player);

                if (player.model.position.x !== walk_to.x || player.model.position.y !== walk_to.y) {
                    player.walkTo(walk_to.x, walk_to.z);
                } else {
                    console.log("Player doesnt need to move!", walk_to, player.model.position);
                }
            });

            io.bind('player_remove', function (player_id) {
                mcec.log("Server says to remove player " + player_id);
                var player = _this.players.removePlayer(player_id);
            });
        }
    }, {
        key: 'inject',
        value: function inject() {
            var _this2 = this;

            // run after start() was called, and everything has loaded

            mcec.log("Injecting renderer into DOM element");

            this.getContainer().appendChild(this.getRenderer().domElement);
            //this.getContainer().appendChild(this.getRenderer(true).domElement);

            var elem = $(this.getRenderer().domElement);
            elem.attr('id', 'game');

            mcec.bindClick(true, function (e) {
                _this2.handleClick(e);
            });

            return true;
        }
    }, {
        key: 'update',
        value: function update(delta) {
            this.models.update(delta);
            this.camera.update(delta);

            if (this.game.state <= 0) {
                this.camera.setLoginCamera();
                this.hide();
            } else {
                this.models.startQueue();
                this.show();
            }

            if (this.getMyPlayer() !== false) {
                if (this.getMyPlayer().isMeshLoaded()) {
                    if (typeof this.skybox !== "undefined") {
                        // move the skybox around our player
                        this.skybox.position.x = this.getMyPlayer().model.position.x;
                        this.skybox.position.z = this.getMyPlayer().model.position.z;
                    }

                    if (typeof this.water !== "undefined" && typeof this.water.position !== "undefined") {
                        // .. and the water?
                        this.water.position.x = this.getMyPlayer().model.position.x;
                        this.water.position.z = this.getMyPlayer().model.position.z;
                    }
                }
            }

            if (typeof this.water !== "undefined") {
                if (typeof this.water.children !== "undefined") this.water.children[0].material.uniforms.time.value += 0.4 / 60.0;
            }
        }
    }]);

    return scene;
}();

module.exports = scene;

},{"../js/objects/water":2,"../shared/mcec":69,"../src/camera":6,"../src/models":9,"../src/players":11,"../src/renderer":12,"../src/sockets":15,"../src/terrain":16,"../src/world":20}],14:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var shaders = function () {
    function shaders(scene) {
        _classCallCheck(this, shaders);

        this.scene = scene;
        this.shaders = [];
        this.materials = [];

        // only one in use right now
        this.shaders.terrain = {
            uniforms: {},
            fog: scene.fog,
            vertexShader: "        uniform sampler2D bumpTexture;\n" + "        uniform float bumpScale;\n" + "\n" + "        varying float vAmount;\n" + "        varying vec2 vUV;\n" + "\n" + "        void main()\n" + "        {\n" + "            vUV = uv;\n" + "            vec4 bumpData = texture2D( bumpTexture, uv );\n" + "\n" + "            vAmount = bumpData.r; // assuming map is grayscale it doesn't matter if you use r, g, or b.\n" + "\n" + "            // move the position along the normal\n" + "            vec3 newPosition = position + normal * bumpScale * vAmount;\n" + "\n" + "            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n" + "        }",
            fragmentShader: "        uniform sampler2D oceanTexture;\n" + "        uniform sampler2D snowyTexture;\n" + "        uniform sampler2D sandyTexture;\n" + "        uniform sampler2D grassTexture;\n" + "        uniform sampler2D rockyTexture;\n" + "\n" + "        varying vec2 vUV;\n" + "\n" + "        varying float vAmount;\n" + "\n" + "        void main()\n" + "        {\n" + "            // its like .. bottom point - top point .. and the range in between is the fade\n" + "            vec4 snowy = (smoothstep(0.60, 0.6205, vAmount) - smoothstep(1.10, 1.20, vAmount)) * texture2D( snowyTexture, vUV * 100.0 );\n" + "            vec4 rocky = (smoothstep(0.39, 0.47, vAmount) - smoothstep(0.5985, 0.6195, vAmount)) * texture2D( rockyTexture, vUV * 80.0 );\n" + "            vec4 grass = (smoothstep(0.27, 0.38, vAmount) - smoothstep(0.44, 0.45, vAmount)) * texture2D( grassTexture, vUV * 90.0 );\n" + "            vec4 sand = (smoothstep(0.05, 0.25, vAmount) - smoothstep(0.28, 0.36, vAmount)) * texture2D( sandyTexture, vUV * 280.0 );\n" + "            vec4 water = (smoothstep(-0.30, -0.25, vAmount) - smoothstep(0.0, 0.35, vAmount)) * texture2D( oceanTexture, vUV * 100.0 );\n" + "\n" + "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) + water + sand + grass + rocky + snowy;\n" + "        }"
        };

        this.shaders.TerrainNormal = {

            uniforms: {
                'heightMap': { type: 't', value: null },
                'resolution': { type: 'v2', value: new THREE.Vector2(128, 128) },
                'scale': { type: 'v2', value: new THREE.Vector2(0, 0) },
                'height': { type: 'f', value: 0.05 }
            },

            vs: ['varying vec2 vUv;', 'void main() {', 'vUv = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),

            fs: ['uniform float height;', 'uniform vec2 resolution;', 'uniform sampler2D heightMap;', 'varying vec2 vUv;', 'void main() {', 'float val = texture2D( heightMap, vUv ).x;', 'float valU = texture2D( heightMap, vUv + vec2( 1.0 / resolution.x, 0.0 ) ).x;', 'float valV = texture2D( heightMap, vUv + vec2( 0.0, 1.0 / resolution.y ) ).x;', 'gl_FragColor = vec4( ( 0.5 * normalize( vec3( val - valU, val - valV, height  ) ) + 0.5 ), 1.0 );', '}'].join('\n')

        };

        this.shaders.TerrainNoise = {

            uniforms: {
                time: { type: 'f', value: 1.0 },
                scale: { type: 'v2', value: new THREE.Vector2(1.5, 1.5) },
                offset: { type: 'v2', value: new THREE.Vector2(0, 0) }
            },
            fs: ['uniform float time;', 'varying vec2 vUv;', 'vec4 permute( vec4 x ) {', 'return mod( ( ( x * 34.0 ) + 1.0 ) * x, 289.0 );', '}', 'vec4 taylorInvSqrt( vec4 r ) {', 'return 1.79284291400159 - 0.85373472095314 * r;', '}', 'float snoise( vec3 v ) {', 'const vec2 C = vec2( 1.0 / 6.0, 1.0 / 3.0 );', 'const vec4 D = vec4( 0.0, 0.5, 1.0, 2.0 );', '// First corner', 'vec3 i  = floor( v + dot( v, C.yyy ) );', 'vec3 x0 = v - i + dot( i, C.xxx );', '// Other corners', 'vec3 g = step( x0.yzx, x0.xyz );', 'vec3 l = 1.0 - g;', 'vec3 i1 = min( g.xyz, l.zxy );', 'vec3 i2 = max( g.xyz, l.zxy );', 'vec3 x1 = x0 - i1 + 1.0 * C.xxx;', 'vec3 x2 = x0 - i2 + 2.0 * C.xxx;', 'vec3 x3 = x0 - 1. + 3.0 * C.xxx;', '// Permutations', 'i = mod( i, 289.0 );', 'vec4 p = permute( permute( permute(', ' i.z + vec4( 0.0, i1.z, i2.z, 1.0 ) )', '+ i.y + vec4( 0.0, i1.y, i2.y, 1.0 ) )', '+ i.x + vec4( 0.0, i1.x, i2.x, 1.0 ) );', '// Gradients', '// ( N*N points uniformly over a square, mapped onto an octahedron.)', 'float n_ = 1.0 / 7.0; // N=7', 'vec3 ns = n_ * D.wyz - D.xzx;', 'vec4 j = p - 49.0 * floor( p * ns.z *ns.z );  //  mod(p,N*N)', 'vec4 x_ = floor( j * ns.z );', 'vec4 y_ = floor( j - 7.0 * x_ );    // mod(j,N)', 'vec4 x = x_ *ns.x + ns.yyyy;', 'vec4 y = y_ *ns.x + ns.yyyy;', 'vec4 h = 1.0 - abs( x ) - abs( y );', 'vec4 b0 = vec4( x.xy, y.xy );', 'vec4 b1 = vec4( x.zw, y.zw );', 'vec4 s0 = floor( b0 ) * 2.0 + 1.0;', 'vec4 s1 = floor( b1 ) * 2.0 + 1.0;', 'vec4 sh = -step( h, vec4( 0.0 ) );', 'vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;', 'vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;', 'vec3 p0 = vec3( a0.xy, h.x );', 'vec3 p1 = vec3( a0.zw, h.y );', 'vec3 p2 = vec3( a1.xy, h.z );', 'vec3 p3 = vec3( a1.zw, h.w );', '// Normalise gradients', 'vec4 norm = taylorInvSqrt( vec4( dot( p0, p0 ), dot( p1, p1 ), dot( p2, p2 ), dot( p3, p3 ) ) );', 'p0 *= norm.x;', 'p1 *= norm.y;', 'p2 *= norm.z;', 'p3 *= norm.w;', '// Mix final noise value', 'vec4 m = max( 0.6 - vec4( dot( x0, x0 ), dot( x1, x1 ), dot( x2, x2 ), dot( x3, x3 ) ), 0.0 );', 'm = m * m;', 'return 42.0 * dot( m*m, vec4( dot( p0, x0 ), dot( p1, x1 ), dot( p2, x2 ), dot( p3, x3 ) ) );', '}', 'float surface3( vec3 coord ) {', 'float n = 0.0;', 'n += 1.0 * abs( snoise( coord ) );', 'n += 0.5 * abs( snoise( coord * 2.0 ) );', 'n += 0.25 * abs( snoise( coord * 4.0 ) );', 'n += 0.125 * abs( snoise( coord * 8.0 ) );', 'return n;', '}', 'void main( void ) {', 'vec3 coord = vec3( vUv, -time );', 'float n = surface3( coord );', 'gl_FragColor = vec4( vec3( n, n, n ), 1.0 );', '}'].join('\n'),

            vs: ['varying vec2 vUv;', 'uniform vec2 scale;', 'uniform vec2 offset;', 'void main( void ) {', 'vUv = uv * scale + offset;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n')
        };

        this.shaders.TerrainLuminosity = {

            uniforms: {
                'tDiffuse': { type: 't', value: null }
            },

            vs: ['varying vec2 vUv;', 'void main() {', 'vUv = uv;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
            fs: ['uniform sampler2D tDiffuse;', 'varying vec2 vUv;', 'void main() {', 'vec4 texel = texture2D( tDiffuse, vUv );', 'vec3 luma = vec3( 0.299, 0.587, 0.114 );', 'float v = dot( texel.xyz, luma );', 'gl_FragColor = vec4( v, v, v, texel.w );', '}'].join('\n')
        };

        this.shaders.TerrainShader2 = {
            uniforms: {
                env: { type: 't', value: null },
                enableReflection: { type: 'i', value: 0 },
                useRefract: { type: 'i', value: 0 },
                reflectivity: { type: 'f', value: 1.0 },
                refractionRatio: { type: 'f', value: 0.98 },
                combine: { type: 'i', value: 0 },
                fogcolor: { type: 'c', value: new THREE.Color(0x25292e) },

                'oceanTexture': { type: 't', value: null },
                'sandyTexture': { type: 't', value: null },
                'grassTexture': { type: 't', value: null },
                'rockyTexture': { type: 't', value: null },
                'snowyTexture': { type: 't', value: null },

                'enableDiffuse1': { type: 'i', value: 0 },
                'enableDiffuse2': { type: 'i', value: 0 },
                'enableSpecular': { type: 'i', value: 1 },
                'enableFog': { type: 'i', value: 1 },

                'tDiffuse1': { type: 't', value: null },
                'tDiffuse2': { type: 't', value: null },
                'tDetail': { type: 't', value: null },
                'tNormal': { type: 't', value: null },
                'tSpecular': { type: 't', value: null },
                'tDisplacement': { type: 't', value: null },

                'uNormalScale': { type: 'f', value: 1.0 },

                'uDisplacementBias': { type: 'f', value: 0.0 },
                'uDisplacementScale': { type: 'f', value: 1.0 },

                'diffuse': { type: 'c', value: new THREE.Color(0xeeeeee) },
                'specular': { type: 'c', value: new THREE.Color(0xFF1111) },
                'ambient': { type: 'c', value: new THREE.Color(0x050505) },
                'shininess': { type: 'f', value: 30 },
                'opacity': { type: 'f', value: 1 },

                'vAmount': { type: 'f', value: 30 },

                'uRepeatBase': { type: 'v2', value: new THREE.Vector2(1, 1) },
                'uRepeatOverlay': { type: 'v2', value: new THREE.Vector2(1, 1) },

                'uOffset': { type: 'v2', value: new THREE.Vector2(0, 0) }
            },

            //] ),

            fs: [
            //'precision highp float;',
            'uniform sampler2D env;', 'uniform sampler2D oceanTexture;', 'uniform sampler2D sandyTexture;', 'uniform sampler2D grassTexture;', 'uniform sampler2D rockyTexture;', 'uniform sampler2D snowyTexture;', 'uniform bool useRefract;', 'uniform float refractionRatio;', 'uniform float reflectivity;', 'uniform bool enableReflection;', 'uniform bool enableFog;', 'varying float vAmount;', 'uniform vec3 fogcolor;', 'uniform vec3 ambient;', 'uniform vec3 diffuse;', 'uniform vec3 specular;', 'uniform float shininess;', 'uniform float opacity;', 'uniform bool enableDiffuse1;', 'uniform bool enableDiffuse2;', 'uniform bool enableSpecular;', 'uniform sampler2D tDiffuse1;', 'uniform sampler2D tDiffuse2;', 'uniform sampler2D tDetail;', 'uniform sampler2D tNormal;', 'uniform sampler2D tSpecular;', 'uniform sampler2D tDisplacement;', 'uniform float uNormalScale;', 'uniform vec2 uRepeatOverlay;', 'uniform vec2 uRepeatBase;', 'uniform vec2 uOffset;', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'varying vec2 vN;', 'varying vec3 vViewPosition;', 'varying vec3 vWorldPosition;',

            //THREE.ShaderChunk[ 'shadowmap_pars_fragment' ],
            //THREE.ShaderChunk[ 'envmap_pars_fragment' ],
            //THREE.ShaderChunk[ 'fog_pars_fragment' ],


            'void main() {', 'vec2 uvOverlay = uRepeatOverlay * vUv + uOffset;', 'vec2 uvBase = uRepeatBase * vUv;', 'vec4 water = (smoothstep(0.01, 0.20, vAmount) - smoothstep(0.24, 0.26, vAmount)) * texture2D( oceanTexture, uvOverlay );', 'vec4 sandy = (smoothstep(0.10, 0.30, vAmount) - smoothstep(0.28, 0.31, vAmount)) * texture2D( sandyTexture, uvOverlay );', 'vec4 grass = (smoothstep(0.28, 0.40, vAmount) - smoothstep(0.35, 0.40, vAmount)) * texture2D( grassTexture, uvOverlay );', 'vec4 rocky = (smoothstep(0.30, 0.76, vAmount) - smoothstep(0.40, 0.70, vAmount)) * texture2D( rockyTexture, uvOverlay );', 'vec4 snowy = (smoothstep(0.80, 0.99, vAmount))                                   * texture2D( snowyTexture, uvOverlay );', 'gl_FragColor = vec4( vec3( 1.0 ), opacity );', 'vec3 specularTex = vec3( 1.0 );', 'vec3 normalTex = texture2D( tDetail, uvOverlay ).xyz * 2.0 - 1.0;', 'normalTex.xy *= uNormalScale;', 'normalTex = normalize( normalTex );', 'if( enableDiffuse1 && enableDiffuse2 ) {', 'vec4 colDiffuse1 = texture2D( tDiffuse1, uvOverlay );', 'vec4 colDiffuse2 = texture2D( tDiffuse2, uvOverlay );',

            /*'#ifdef GAMMA_INPUT',
                'colDiffuse1.xyz *= colDiffuse1.xyz;',
                'colDiffuse2.xyz *= colDiffuse2.xyz;',
            '#endif',*/

            'gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) );',
            //'gl_FragColor = gl_FragColor * mix ( colDiffuse1, colDiffuse2, 1.0 - texture2D( tDisplacement, uvBase ) )+ water + sandy + grass + rocky + snowy;',
            'gl_FragColor = vec4( gl_FragColor.xyz, 1.0 )+ water + sandy + grass + rocky + snowy;',
            //'fullTexture = vec4( gl_FragColor.xyz, 1.0 )+ water + sandy + grass + rocky + snowy;',
            //'gl_FragColor.xyz = mix( gl_FragColor.xyz, fullTexture, 1.0 );',


            ' } else if( enableDiffuse1 ) {', 'gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay );',
            //'gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay ) + water + sandy + grass + rocky + snowy;',
            //'gl_FragColor = gl_FragColor * mix ( tDiffuse1, water + sandy + grass + rocky + snowy, 1.0 - texture2D( tDisplacement, uvBase ) );',

            '} else if( enableDiffuse2 ) {', 'gl_FragColor = gl_FragColor * texture2D( tDiffuse2, uvOverlay );', '}', 'if( enableSpecular )', 'specularTex = texture2D( tSpecular, uvOverlay ).xyz;', 'mat3 tsb = mat3( vTangent, vBinormal, vNormal );', 'vec3 finalNormal = tsb * normalTex;', 'vec3 normal = normalize( finalNormal );', 'vec3 viewPosition = normalize( vViewPosition );', 'if ( enableReflection ) {',
            // environment
            'vec3 ev = texture2D( env, vN ).rgb;',
            //'gl_FragColor.xyz *= ev;',
            'gl_FragColor.xyz = mix( gl_FragColor.xyz, ev.xyz, reflectivity );', '}',

            // fog
            'if(enableFog){', 'float circle_radius_min = 0.3;', 'float circle_radius_max = 0.5;', 'float fogDensity = 0.4;', 'float fog_far = 30.4;', 'vec2 nuv = vUv - vec2(0.5, 0.5);', 'float dist =  sqrt(dot(nuv, nuv));',
            //'vec3 fog_color = vec3(1.0/37., 1.0/41., 1.0/46.);',
            'float fog = 0.0;', 'if ( dist > circle_radius_min )', 'fog =(dist-circle_radius_min)*5.0;',

            //'float fog = fogDensity * (gl_FragCoord.z / gl_FragCoord.w) / fog_far;',
            //'float fog = fogDensity * (vUv.x / vUv.y) / fog_far;',
            //'fog -= .2;',
            //'vec3 col = mix( fogcolor, gl_FragColor.xyz , clamp(1. - fog, 0., 1.));',
            //'gl_FragColor = vec4(col, 1.);',
            'gl_FragColor = vec4(gl_FragColor.xyz, 1.-fog);', '}', '}'].join('\n'),

            vs: [
            //'precision highp float;',
            'attribute vec4 tangent;', 'uniform vec2 uRepeatBase;', 'uniform sampler2D tNormal;', 'uniform sampler2D tDisplacement;', 'uniform float uDisplacementScale;', 'uniform float uDisplacementBias;', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'varying vec3 vViewPosition;', 'varying vec3 vWorldPosition;', 'varying float vAmount;',
            // spherical test
            'varying vec2 vN;', 'varying vec3 vPos;', 'void main() {', 'vNormal = normalize( normalMatrix * normal );',

            // tangent and binormal vectors

            'vTangent = normalize( normalMatrix * tangent.xyz );', 'vBinormal = cross( vNormal, vTangent ) * tangent.w;', 'vBinormal = normalize( vBinormal );',

            // texture coordinates

            'vUv = uv;', 'vec4 bumpData = texture2D( tDisplacement, uv );', 'vAmount = bumpData.r;', 'vec2 uvBase = uv * uRepeatBase;',

            // displacement mapping

            'vec3 dv = texture2D( tDisplacement, uvBase ).xyz;', 'float df = uDisplacementScale * dv.x + uDisplacementBias;', 'vec3 displacedPosition = normal * df + position;', 'vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );', 'vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );', 'gl_Position = projectionMatrix * mvPosition;', 'vWorldPosition = worldPosition.xyz;', 'vViewPosition = -mvPosition.xyz;', 'vec3 normalTex = texture2D( tNormal, uvBase ).xyz * 2.0 - 1.0;', 'vNormal = normalMatrix * normalTex;',

            // spherical
            'vPos = normalize( vec3( mvPosition ) );',
            //'vNormal = normalize( normalMatrix * normal );',
            'vec3 r = reflect( vPos, normalize(vNormal) );', 'float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );', 'vN = r.xy / m + .5;', '}'].join('\n')

        };
    }

    _createClass(shaders, [{
        key: "getShaders",
        value: function getShaders() {
            return this.shaders;
        }
    }, {
        key: "getShader",
        value: function getShader(name) {
            return this.shaders[name];
        }
    }, {
        key: "addShader",
        value: function addShader(name, shader) {
            this.shaders[name] = shader;
        }
    }, {
        key: "getShaderMaterial",
        value: function getShaderMaterial(name) {
            if (typeof this.materials[name] == "undefined") {
                this.materials[name] = new THREE.ShaderMaterial(this.getShader(name));
            }

            return this.materials[name];
        }
    }, {
        key: "setUniforms",
        value: function setUniforms(name, uniforms) {

            if (typeof this.shaders[name] == "undefined") return false;

            this.shaders[name]['uniforms'] = uniforms;

            return true;
        }
    }]);

    return shaders;
}();

module.exports = shaders;

},{}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mcec = require('../shared/mcec');

var sockets = function () {
    function sockets() {
        _classCallCheck(this, sockets);

        this.server_ip = mcec.config('server_ip');
        this.server_port = mcec.config('server_port');

        this.callbacks = [];
    }

    // unused events: flush, drain, upgradeError, upgrade


    _createClass(sockets, [{
        key: 'connect',
        value: function connect() {
            this.socket = (0, _socket2.default)(this.server_ip + ":" + this.server_port);

            mcec.log("Initializing socket");

            // this.socket.on('connect',       (data) => { this.fire('connect',    data); });
            // this.socket.on('event',         (data) => { this.fire('event',      data); });
            // this.socket.on('error',         (data) => { this.fire('error',      data); });
            // this.socket.on('disconnect',    (data) => { this.fire('disconnect', data); });
            // this.socket.on('ping',          (data) => { this.fire('ping',       data); });
            // this.socket.on('pong',          (data) => { this.fire('pong',       data); });

            this.bind('connect');
            this.bind('event');
            this.bind('error');
            this.bind('disconnect');
            this.bind('ping');
            this.bind('pong');
        }
    }, {
        key: 'fire',
        value: function fire(event, data) {
            mcec.log("[IO] Firing event: " + event);

            if (typeof this.callbacks[event] == "undefined") return;

            for (var i = 0; i < this.callbacks[event].length; i++) {
                var callback = this.callbacks[event][i];

                callback(data);
            }
        }
    }, {
        key: 'bind',
        value: function bind(event, callback) {
            var _this = this;

            mcec.log("[IO] Binding event " + event);

            if (typeof this.callbacks[event] == "undefined") {
                this.callbacks[event] = [];

                this.socket.on(event, function (data) {
                    _this.fire(event, data);
                });
            }

            if (callback) this.callbacks[event].push(callback);
        }
    }, {
        key: 'send',
        value: function send(event, data, callback) {
            mcec.log("[IO] Sending event (" + event + ") = " + data);

            this.socket.emit(event, data, callback);
        }
    }]);

    return sockets;
}();

module.exports = new sockets();

},{"../shared/mcec":69,"socket.io-client":52}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _terrain_tile = require("../src/terrain_tile");

var _terrain_tile2 = _interopRequireDefault(_terrain_tile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var terrain = function () {
    function terrain(scene, world) {
        _classCallCheck(this, terrain);

        this.scene = scene;
        this.world = world;

        //
        // WARNING
        // WARNING
        // WARNING
        //
        // Changing any of these settings may have serious effects in
        // unexpected areas of the game. If there are any static positions set
        // that don't use the grid system, they will be off if sector size is
        // modified, etc.
        //
        // Dont fuck around bra
        //

        // note: this class uses a lot of x,y shit but THREE uses x,z
        // so just keep that in mind we aren't really referring to y in here, but z .. but fuck that shit

        // this group will hold all sectors, assembled, as our terrain
        this.group = new THREE.Group();

        // sector storage
        this.sectors = [];

        // how many sectors do we have on the X and Y axis
        // ex: x:5, y:2 would mean we have 10 sectors, 2 rows of 5
        this.sectors_x = 0;
        this.sectors_y = 0;

        // we want an infinite map.. so at what coord do we loop back to zero?
        // this number should be the tile BEFORE THE OUT OF BOUNDS tile
        // this is basically tile count
        // todo: obviously retrieve from server on init
        this.sector_max_x = 14; // 14 = 15 since zero counts bra
        this.sector_max_y = 14;

        // sectors are square, no need for W x H
        this.sector_size = 10000; // basically Width and Height and below is max depth, varied by the bump map
        this.max_height = this.sector_size / 3; //  max depth interpreted by the height map
        this.data_size = [100, 100]; // the size of each sector square on the heightmap, also vertices per mesh is data_size[0]-1 squared

        // size of our square
        this.square_x = this.sector_size / (this.data_size[0] - 1);
        this.square_y = this.sector_size / (this.data_size[1] - 1);

        // max depth and height of each sector
        this.sector_alt = [this.max_height * -.25, this.max_height * .75]; // 75% of the depth will be above water // 25% will be below water

        ////////////

        this.terrain_ready = false;
        this.sectors_needed = [];
    }

    // convert any coordinate to an infinite world one
    // ex: you have 5 tiles, -1 becomes #5 again
    // note: this function counts zero as a tile! ex: 0,1,2 .. max: 3 .. -1 becomes 2


    _createClass(terrain, [{
        key: "infiniteCoord",
        value: function infiniteCoord(coord, max) {
            max = max + 1;

            while (coord < 0 || coord >= max) {
                coord = 0 + coord % max;

                if (coord < 0) {
                    coord = -coord;
                    coord = max - coord;
                }
            }

            return coord;
        }

        // convert any grid/sector coord (like -2/5) to a looparound infite one (max-2/5)

    }, {
        key: "safeSectors",
        value: function safeSectors(sector_x, sector_y) {
            // INFINITE WORLD MOTHERFUCKER
            // yeah, hi, and it only took this many lines..

            var x = this.infiniteCoord(sector_x, this.sector_max_x);
            var y = this.infiniteCoord(sector_y, this.sector_max_y);

            return { x: x, y: y };
        }
    }, {
        key: "safeX",
        value: function safeX(sector_x) {
            var sector_x = this.infiniteCoord(sector_x, this.sector_max_x);

            return sector_x;
        }
    }, {
        key: "safeY",
        value: function safeY(sector_y) {
            var sector_y = this.infiniteCoord(sector_y, this.sector_max_y);

            return sector_y;
        }

        // find a sector [x, y] based on a vector position

    }, {
        key: "getSectorFromCoords",
        value: function getSectorFromCoords(x, z, safe) {
            // the skybox is currently set to be one tile size
            var tile_size = this.sector_size;

            // which sector is the player on
            var sector_x = x / tile_size;
            var sector_y = z / tile_size;

            // % to next sector
            var sector_x_loc = (x % tile_size / sector_x / 100).toFixed(2); // % to next sector (decimal)
            var sector_y_loc = (z % tile_size / sector_y / 100).toFixed(2); // % to next sector (decimal)

            // floor it
            sector_x = Math.floor(sector_x);
            sector_y = Math.floor(sector_y);

            if (safe) {
                sector_x = this.safeX(sector_x);
                sector_y = this.safeY(sector_y);
            }

            return { x: sector_x, y: sector_y };
        }

        // find a sector [x, y] based on a vector position

    }, {
        key: "getSectorFromPosition",
        value: function getSectorFromPosition(x, z) {
            var sec = this.getSectorIDFromPosition(x, z);
            var sector = this.getSector(sec.x, sec.y);

            return sector;
        }

        // find a sector [x, y] based on a vector position

    }, {
        key: "getSectorIDFromPosition",
        value: function getSectorIDFromPosition(x, z, safe) {
            // the skybox is currently set to be one tile size
            var tile_size = this.sector_size;

            // which sector is the player on
            var sector_x = x / tile_size;
            var sector_y = z / tile_size;

            // % to next sector
            var sector_x_loc = (x % tile_size / sector_x / 100).toFixed(2); // % to next sector (decimal)
            var sector_y_loc = (z % tile_size / sector_y / 100).toFixed(2); // % to next sector (decimal)

            // floor it
            sector_x = Math.floor(sector_x);
            sector_y = Math.floor(sector_y);

            if (safe) {
                sector_x = this.safeX(sector_x);
                sector_y = this.safeY(sector_y);
            }

            return { x: sector_x, y: sector_y };
        }

        // find a vector2 coord of the top left (0,0) of the tile

    }, {
        key: "getSectorCoords",
        value: function getSectorCoords(sector_x, sector_y) {}
    }, {
        key: "getSector",
        value: function getSector(sector_x, sector_y, spoofing_x, spoofing_y, dont_create) {

            var x = sector_x;
            var y = sector_y;

            var safe_x = this.safeX(x);
            var safe_y = this.safeY(y);

            // detect if we are beyond the grid limits
            if (x !== safe_x || y !== safe_y) {
                // get the real sector we need, spoof as this one
                return this.getSector(safe_x, safe_y, sector_x, sector_y, dont_create);
            }

            var sector = this.getSectorListItem(x, y, spoofing_x, spoofing_y, dont_create);

            return sector;
        }
    }, {
        key: "old_getSector",
        value: function old_getSector(sector_x, sector_y, spoofing) {

            var x = sector_x;
            var y = sector_y;

            var info = {
                x: sector_x,
                y: sector_y
            };

            if (spoofing) {
                x = spoofing.x;
                y = spoofing.y;

                info.spoofing_x = x;
                info.spoofing_y = y;
            }

            if (sector_x < 0 || sector_x > this.sector_max_x || sector_y < 0 || sector_y > this.sector_max_y) {
                return this.getSafeSector(sector_x, sector_y, spoofing);
            }

            var sector = this.getSectorListItem(x, y, info);

            return sector;
        }
    }, {
        key: "getSafeSector",
        value: function getSafeSector(sector_x, sector_y, spoofing) {
            sector_x = this.safeX(sector_x);
            sector_y = this.safeY(sector_y);

            return this.getSector(sector_x, sector_y, spoofing);
        }
    }, {
        key: "getSectorListItem",
        value: function getSectorListItem(x, y, spoofing_x, spoofing_y, dont_create) {

            // detect if we are beyond the grid limits
            if (x < 0 || x > this.sector_max_x || y < 0 || y > this.sector_max_y) {
                mcec.log("ERROR: " + x + ", " + y + " - sector doesn't exist! Should be called through getSector() first");
                return false;
            }

            for (var i = 0; i < this.sectors.length; i++) {
                var sector = this.sectors[i];

                if (sector.x == x && sector.y == y) {
                    return sector;
                }
            }

            if (dont_create) return false;

            var sector = new _terrain_tile2.default(this.scene, x, y, spoofing_x, spoofing_y);
            this.sectors.push(sector);

            return sector;
        }
    }, {
        key: "getSector_old",
        value: function getSector_old(sector_x, sector_y, spoofing) {
            // create row if it doesnt exist
            if (typeof this.sectors[sector_y] == "undefined") {
                this.sectors[sector_y] = [];
            }

            // create col if it doesnt exist, and load tile into it
            if (typeof this.sectors[sector_y][sector_x] == "undefined") {
                this.terrain_ready = false;
                this.sectors[sector_y][sector_x] = new _terrain_tile2.default(this.scene, sector_x, sector_y, spoofing);
            } else {
                // check if sector has been loaded before, but the mesh was removed due to player movement
                if (this.sectors[sector_y][sector_x].needs_refresh) {
                    this.sectors[sector_y][sector_x].load();
                }
            }

            var sector = this.sectors[sector_y][sector_x];
            return sector;
        }

        // load necessary terrain tiles, based on location
        // add to group, return group with callback

    }, {
        key: "load",
        value: function load(callback) {
            // send back the group
            callback(this.group);
        }
    }, {
        key: "getCurrentGridCoords",
        value: function getCurrentGridCoords() {
            var player = this.scene.getMyPlayer();
            var x = player.position.x;
            var z = player.position.z;

            return this.getGridCoordsAt(player.position.x, player.position.z);
        }

        // which sectors does active player need?

    }, {
        key: "sectorsForPlayer",
        value: function sectorsForPlayer() {
            var player = this.scene.getMyPlayer();
            var x = player.position.x;
            var z = player.position.z;

            var sectors_needed = this.determineSectorsNeeded(x, z);

            return sectors_needed;
        }

        // which sector is active player on?

    }, {
        key: "getCurrentSector",
        value: function getCurrentSector() {
            var player = this.scene.getMyPlayer();
            var x = player.position.x;
            var z = player.position.z;

            var coords = this.getSectorFromCoords(x, z, true);
            var sector = this.getSector(coords.x, coords.y);

            return sector;
        }

        // returns grid location (like from 200x200 for example) from actual world position
        // note: doesnt return which sector this lands on though

    }, {
        key: "getGridCoordsAt",
        value: function getGridCoordsAt(x, z) {
            // normalize position
            x = x % this.sector_size;
            z = z % this.sector_size;

            // 0-1 value, a percentage, of where the grid was clicked projected onto the image
            var x_mult = x / this.sector_size;
            var y_mult = z / this.sector_size;

            // calculate xy coords on the image, and round because theres no 1.5 pixel wide anything
            var _x = Math.floor((this.data_size[0] - 1) * x_mult);
            var _y = Math.floor((this.data_size[1] - 1) * y_mult);

            // invert negative numbers because its coming from the other direction
            if (_x < 0) {
                _x += this.data_size[0];
            }
            if (_y < 0) {
                _y += this.data_size[1];
            }
            return { x: _x, y: _y };
        }

        // returns grid location (like from 200x200 for example) from actual world position
        // note: doesnt return which sector this lands on though
        // note: precision = this may return, say, 5.5x6.7 for 5x6 to indicate where on the grid this location lands!

    }, {
        key: "getPrecisionGridCoordsAt",
        value: function getPrecisionGridCoordsAt(x, z) {
            // normalize position
            x = x % this.sector_size;
            z = z % this.sector_size;

            // 0-1 value, a percentage, of where the grid was clicked projected onto the image
            var x_mult = x / this.sector_size;
            var y_mult = z / this.sector_size;

            // calculate xy coords on the image, and round because theres no 1.5 pixel wide anything
            var _x = (this.data_size[0] - 1) * x_mult;
            var _y = (this.data_size[1] - 1) * y_mult;

            // invert negative numbers because its coming from the other direction
            if (_x < 0) {
                _x += this.data_size[0];
            }
            if (_y < 0) {
                _y += this.data_size[1];
            }
            return { x: _x, y: _y };
        }

        // example: 150 x 150 turns into 1500x1500 on a 200x200 grid thats 2000x2000 size

    }, {
        key: "getRelativePositionFromGridCoords2",
        value: function getRelativePositionFromGridCoords2(x, y) {

            return this.getGridCoordsAt(x, y);
            // // var _x = x % this.sector_size;
            // // var _z = y % this.sector_size;
            //
            // var _x = x / this.data_size[0];
            // var _z = y / this.data_size[0];
            //
            // _x = _x * this.sector_size;
            // _z = _z * this.sector_size;
            //
            // return {x: _x, z: _z};
        }

        // will return real world position (realtive to that sector) from grid coords

    }, {
        key: "getRelativePositionFromGridCoords",
        value: function getRelativePositionFromGridCoords(x, y) {
            // this will return generic converted coords for us
            var pos = this.getGridCoordsAt(x, y);

            pos.x += this.mesh.position.x - this.sector_size / 2;
            pos.z += this.mesh.position.z - this.sector_size / 2;

            return { x: pos.x, z: pos.z };
        }
    }, {
        key: "getFaceFromPosition",
        value: function getFaceFromPosition(x, z, just_geom) {
            var sector = this.getSectorFromPosition(x, z);
            var pos = this.getPrecisionGridCoordsAt(x, z);
            var face = sector.getFaceFromGridPoint(pos.x, pos.y, just_geom);

            return face;
            //console.log(pos);
        }

        // this is to be passed raw real word coords

    }, {
        key: "getY3",
        value: function getY3(x, z, filter_passes) {

            if (!filter_passes) filter_passes = false;

            // determine which sector that lands on..
            var coords = this.getSectorFromCoords(x, z, true);
            var sector = this.getSector(coords.x, coords.y);

            // do math to figure out which x,z on that sector we need
            //mcec.log("Terrain -> getY(" + x + ", " +  z + ")");

            // our x,y (i like y) coords of where on the tile we need to find
            var _x = x % this.sector_size;
            var _z = z % this.sector_size;

            // ask that sector for its heightmap value at x,z
            // distribute the work to give the illusion of ease
            var y = sector.getHeightMapValueAt(_x, _z, filter_passes);

            return y;
        }
    }, {
        key: "getY",
        value: function getY(x, z, ref_y) {
            var sector = this.getSectorFromPosition(x, z, true);

            // console.log("XZ WAS IN SECTOR:", x, z, sector.id());
            return sector.getY(x, z, ref_y);

            return false;

            var height = 50;
            var raycaster = sector.raycaster;

            raycaster.ray.direction.set(0, -1, 0);
            raycaster.ray.origin.set(x, 500, z);

            // var mouse = new THREE.Vector2(x, z);
            // var intersect = this.gpuPicker.pick(mouse, raycaster);

            //return intersect;

            //this.scene.getRenderer().render(sector.picking_scene, this.scene.getCamera());
            sector.picking_scene.updateMatrixWorld(true);

            //
            var hits = raycaster.intersectObjects(sector.picking_scene.children, true);
            var hits_filtered = [];

            //if(hits.length > 0) console.log(hits);

            if (hits.length > 0) {
                for (var i = 0; i < hits.length; i++) {
                    //if(hits[i].object.name == this.name) {
                    //console.log(hits[i]);
                    var offset = height - hits[i].distance;
                    //console.log(offset);
                    //return offset + hits[i].face.normal.y;
                    return hits[i].point.y; //distance);
                    //}
                }
            }

            return false;
        }
    }, {
        key: "GetGridSquarePositionAt",
        value: function GetGridSquarePositionAt(x, z, center) {
            var coords = this.getGridCoordsAt(x, z);
            console.log("Grid coords of click: ", coords);

            var sec = this.getSectorIDFromPosition(x, z);

            if (center) {
                var pos = this.getGridSquareCenter(sec.x, sec.y, coords.x, coords.y);
            } else {
                var pos = this.getGridSquarePosition(sec.x, sec.y, coords.x, coords.y);
            }

            console.log("Position of those coords: ", sec, pos);

            return pos;
        }

        // this is to be passed raw real word coords

    }, {
        key: "getYTest",
        value: function getYTest(x, z, filter_passes) {

            // determine which sector that lands on..
            var coords = this.getSectorFromCoords(x, z, true);
            var sector = this.getSector(coords.x, coords.y);

            // do math to figure out which x,z on that sector we need
            //mcec.log("Terrain -> getY(" + x + ", " +  z + ")");

            // our x,y (i like y) coords of where on the tile we need to find
            var _x = x % this.sector_size;
            var _z = z % this.sector_size;

            // ask that sector for its heightmap value at x,z
            // distribute the work to give the illusion of ease
            var y = sector.getHeightMapValueAt(_x, _z, filter_passes);

            return y;
        }

        // returns the CENTER of the grid square

    }, {
        key: "getGridSquarePosition",
        value: function getGridSquarePosition(sector_x, sector_y, x, y) {

            // sectors real world position.. 0,0 = 500,500 (1000 / 2 = 500 to get it at 0)
            var pos = this.getSectorPositionTopLeft(sector_x, sector_y);

            // grid square size is square_x and y
            var _x = this.square_x * x;
            var _z = this.square_y * y;

            console.log("Sector position: ", pos);

            // add the position of our sector
            _x += pos.x;
            _z += pos.z;

            // _x -= (this.sector_size / 2);
            // _z -= (this.sector_size / 2);
            //
            // _x += ((this.sector_size / this.data_size[0]) / 2);
            // _z += ((this.sector_size / this.data_size[1]) / 2);

            return { x: _x, z: _z };
        }
    }, {
        key: "getGridSquareCenter",
        value: function getGridSquareCenter(sector_x, sector_y, x, y) {
            var pos = this.getGridSquarePosition(sector_x, sector_y, x, y);

            pos.x += this.square_x / 2;
            pos.z += this.square_y / 2;

            return { x: pos.x, z: pos.z };
        }
    }, {
        key: "getVerticeLocation",
        value: function getVerticeLocation(sector_x, sector_y, x, y) {
            var pos = this.getGridSquarePosition(sector_x, sector_y, x, y);

            pos.x -= this.square_x / 2;
            pos.z -= this.square_y / 2;

            return { x: pos.x, z: pos.z };
        }

        // check which sectors are needed and load them
        // unload sectors which arent necessary anymore
        // this should be called on update()

    }, {
        key: "checkNeededSectors",
        value: function checkNeededSectors() {
            var player = this.scene.getMyPlayer();
            var x = player.position.x;
            var z = player.position.z;

            for (var n = 0; n < this.sectors.length; n++) {
                var sector = this.sectors[n];

                if (sector.is_needed) {
                    sector.is_needed = false;
                }
            }

            for (var i = 0; i < this.sectors_needed.length; i++) {
                var needed = this.sectors_needed[i];
                var sector = this.getSector(needed.x, needed.y);

                sector.is_needed = true;
                if (sector.is_loaded) sector.setSpoofing(needed.x, needed.y);
            }
        }

        // will return array of which sectors are needed
        // this is actual sectors, this will never return a negative

    }, {
        key: "determineSectorsNeeded",
        value: function determineSectorsNeeded(x, z) {
            // grab sector from our vec2
            var coords = this.getSectorFromCoords(x, z);

            // populate this shit with the sectors we need to load
            var sectors_needed = [];

            // what type of grid are we making around the player
            var radius = 3;

            // figure shit out
            for (var i = 0; i < radius; i++) {

                var _x = i + coords.x - Math.floor(radius / 2);

                for (var j = 0; j < radius; j++) {

                    var _y = j + coords.y - Math.floor(radius / 2);
                    var actual = { x: _x, y: _y };
                    //var needed = this.safeSectors(_x, _y);

                    //console.log("SECTOR NEEDED: ", actual);

                    //needed.actual = actual;
                    sectors_needed.push(actual);
                }
            }

            return sectors_needed;
        }
    }, {
        key: "loadSector",
        value: function loadSector(sector_x, sector_y) {

            var sector = this.getSector(sector_x, sector_y);

            return sector;
        }
    }, {
        key: "unloadSector",
        value: function unloadSector(sector) {
            var id = sector.id();

            for (var i = 0; i < this.group.children.length; i++) {

                var child = this.group.children[i];
                if (child == sector.mesh) {
                    this.group.remove(child);

                    //delete this.sectors[ sector.sector_y ][ sector.sector_x ];
                    sector.mesh = null;
                    sector.has_init = false;
                    sector.is_loaded = false;
                    sector.is_loading = false;

                    mcec.log("Completely unloaded mesh for sector " + id);
                }
            }
        }
    }, {
        key: "loopLoadedSectors",
        value: function loopLoadedSectors(callback) {

            for (var y in this.sectors) {

                if (typeof this.sectors[y] == "undefined") continue;

                var sector = this.sectors[y];

                callback(sector.raw_x, sector.raw_y);

                // for(var x in this.sectors[ y ]) {
                //
                //     //var sector = this.getSector(x, y);
                //
                //     if(typeof this.sectors[ y ][ x ] !== "undefined") {
                //         //var sector = this.sectors[ y ][ x ];
                //
                //         callback(x, y);
                //     }
                // }
            }
        }
    }, {
        key: "loopNeededSectors",
        value: function loopNeededSectors(callback) {

            if (typeof this.sectors_needed == "undefined") return;

            for (var y in this.sectors_needed) {

                var sector = this.sectors_needed[y];

                callback(sector.x, sector.y);

                // for(var x in this.sectors[ y ]) {
                //
                //     //var sector = this.getSector(x, y);
                //
                //     if(typeof this.sectors[ y ][ x ] !== "undefined") {
                //         //var sector = this.sectors[ y ][ x ];
                //
                //         callback(x, y);
                //     }
                // }
            }
        }

        // this is all local math, so make sure to pass the sector you want the
        // position for (spoofed), and not the actual sector ..

    }, {
        key: "getSectorPosition",
        value: function getSectorPosition(sector_x, sector_y) {
            // position the mesh
            var size = this.sector_size;
            var offset = size / 2;

            var pos_x = size * sector_x;
            var pos_z = size * sector_y;

            pos_x += offset;
            pos_z += offset;

            return { x: pos_x, z: pos_z };
        }

        // this is all local math, so make sure to pass the sector you want the
        // position for (spoofed), and not the actual sector ..

    }, {
        key: "getSectorPositionTopLeft",
        value: function getSectorPositionTopLeft(sector_x, sector_y) {
            // position the mesh
            var size = this.sector_size;
            //var offset = (size / 2);

            var pos_x = size * sector_x;
            var pos_z = size * sector_y;

            //pos_x += offset;
            //pos_z += offset;

            return { x: pos_x, z: pos_z };
        }
    }, {
        key: "initSector",
        value: function initSector(sector) {

            mcec.log("INIT SECTOR " + sector.id());

            sector.init();
            sector.has_init = true;

            // position the mesh
            var x = sector.raw_x;
            var y = sector.raw_y;

            var pos = this.getSectorPosition(x, y);
            sector.setPosition(pos.x, pos.z);
        }
    }, {
        key: "updateSector",
        value: function updateSector(sector_x, sector_y) {
            //var sector = this.getSector(sector_x, sector_y);

            if (!sector.has_init) {
                if (sector.is_loaded) {
                    // mcec.log("Sector " + sector.id() + " has init, adding to group!");
                    //
                    // this.initSector(sector);
                } else {
                        //mcec.log("Sector stil hasnt loaded " + sector.id());
                    }
            }

            return sector.has_init;
        }

        // check if a real sector is loaded, should be passes safe values

    }, {
        key: "isSectorLoaded",
        value: function isSectorLoaded(x, y) {
            var _this = this;

            this.loopLoadedSectors(function (x, y) {
                var sector = _this.getSector(x, y, false, false, true);

                if (sector.raw_x == x && sector.raw_y == y) {
                    return true;
                }
            });

            return false;
        }
    }, {
        key: "update",
        value: function update(delta) {
            var _this2 = this;

            if (typeof this.scene.getMyPlayer() == "undefined") return;
            // player position
            var x = this.scene.getMyPlayer().position.x;
            var z = this.scene.getMyPlayer().position.z;

            // determine which sectors we need and store
            this.sectors_needed = this.determineSectorsNeeded(x, z);

            // make sure all necessary sectors are loaded
            this.loopNeededSectors(function (x, y) {
                var sector = _this2.getSector(x, y);
            });

            // loop all loaded sectors and give them an update call
            this.loopLoadedSectors(function (x, y) {
                var sector = _this2.getSector(x, y);

                sector.update();
            });

            //this.checkNeededSectors();
            //
            // if(!this.terrain_ready && this.sectors_needed.length > 0) {
            //     var waiting = 0;
            //     this.loopLoadedSectors((x, y) => {
            //         var init = this.getSector(x, y).has_init;
            //
            //         if(!init) waiting++;
            //     });
            //
            //     if(waiting == 0) {
            //         this.terrain_ready = true;
            //         // this just happens when first loading
            //         mcec.log("Terrain is ready to go!");
            //     }
            // }
            //
            // if(this.sectors.length > 0) {
            //     this.loopLoadedSectors((x, y) => {
            //         var sector = this.getSector(x, y);
            //
            //         sector.update();
            //     });
            // }
        }

        // currently unused sample code .. may speed things up

    }, {
        key: "combine_meshes__",
        value: function combine_meshes__() {
            // List of all the materials used in the meshes you want to combine
            var materials = [material1, material2, material3];

            // List of the meshes you want to combine, for each one you have to store the index of the material within the materials array
            var meshes = [{ mesh: mesh1, materialIndex: 0 }, { mesh: mesh2, materialIndex: 1 }, { mesh: mesh3, materialIndex: 2 }];

            // Geometry of the combined mesh
            var totalGeometry = new THREE.Geometry();
            for (var i = 0; i < meshes.length; i++) {
                meshes[i].mesh.updateMatrix();
                totalGeometry.merge(meshes[i].mesh.geometry, meshes[i].mesh.matrix, meshes[i].materialIndex);
            }

            // Create the combined mesh
            var combinedMesh = new THREE.Mesh(totalGeometry, new THREE.MeshFaceMaterial(materials));
            scene.add(combinedMesh);
        }
    }, {
        key: "sameSide",
        value: function sameSide(p1, p2, a, b) {
            var ab = b.clone().sub(a);
            var ap1 = p1.clone().sub(a);
            var ap2 = p2.clone().sub(a);
            var cp1 = new THREE.Vector3().crossVectors(ab, ap1);
            var cp2 = new THREE.Vector3().crossVectors(ab, ap2);
            return cp1.dot(cp2) >= 0;
        }
    }, {
        key: "pointInTriangle",
        value: function pointInTriangle(p, a, b, c) {
            return this.sameSide(p, a, b, c) && this.sameSide(p, b, a, c) && this.sameSide(p, c, a, b);
        }
    }, {
        key: "closestToSegment",
        value: function closestToSegment(p, a, b) {
            var ab = b.clone().sub(a);
            var nab = ab.clone().normalize();
            var n = nab.dot(p.clone().sub(a));
            if (n < 0) return a;
            if (n > ab.length()) return b;
            return a.clone().add(nab.multiplyScalar(n));
        }
    }, {
        key: "closestToSides",
        value: function closestToSides(p, sides) {
            var minDist = 1e9;
            var ret;
            var self = this;
            sides.forEach(function (side) {
                var ct = self.closestToSegment(p, side[0], side[1]);
                var dist = ct.distanceTo(p);
                if (dist < minDist) {
                    minDist = dist;
                    ret = ct;
                }
            });
            return ret;
        }
    }, {
        key: "closestPointToTriangle",
        value: function closestPointToTriangle(p, a, b, c) {
            // if the point is inside the triangle then it's the closest point
            if (this.pointInTriangle(p, a, b, c)) return p;
            // otherwise it's the closest point to one of the sides
            return this.closestToSides(p, [[a, b], [b, c], [a, c]]);
        }
    }]);

    return terrain;
}();

exports.default = terrain;


module.exports = terrain;

},{"../src/terrain_tile":17}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var terrain_tile = function () {
    function terrain_tile(scene, sector_x, sector_y, spoofing_x, spoofing_y) {
        _classCallCheck(this, terrain_tile);

        // for ease
        this.scene = scene;
        this.terrain = scene.world.terrain;

        // this will hold the X and Y that this tile represents
        this.sector_x = sector_x;
        this.sector_y = sector_y;

        // for ease
        this.x = this.sector_x;
        this.y = this.sector_y;

        // should be set to the same size as the heightmap image
        this.data_size = this.terrain.data_size;

        // is the mesh set?
        this.is_loaded = false;

        // are we trying?
        this.is_loading = false;

        // is this mesh needed?
        this.is_needed = false;

        // has init() been called?
        this.has_init = false;

        // should we reinit and reload the mesh?
        this.needs_refresh = false;

        // this tiles mesh (a member of the world group)
        this.mesh = null;

        // for hit detection
        this.name = scene.world.name;

        var extra = "";
        if (spoofing_x) {
            extra = " Acting as [ " + spoofing_x + ", " + spoofing_y + " ]";
        }

        mcec.log("Terrain sector created [ " + sector_x + ", " + sector_y + " ]" + extra);

        this.setSpoofing(spoofing_x, spoofing_y, true);
    }

    _createClass(terrain_tile, [{
        key: "setSpoofing",
        value: function setSpoofing(spoofing_x, spoofing_y, bypass_init) {
            //console.log("SET SPOOFING TO", spoofing_x, spoofing_y, this.id());

            // if(spoofing_x !== this.spoofing_x || spoofing_y !== this.spoofing_y) {
            //     if(!bypass_init) this.terrain.initSector(this);
            // }

            // where are we faking as, if any?
            this.spoofing_x = spoofing_x;
            this.spoofing_y = spoofing_y;

            // raw coords, always populated
            this.raw_x = spoofing_x ? spoofing_x : this.x;
            this.raw_y = spoofing_y ? spoofing_y : this.y;

            // this is for our infinite world actual coords (could be negative or overmaxed grid coords)
            this.spoofing = { x: spoofing_x, y: spoofing_y };
            this.is_spoofing = spoofing_x ? true : false;
        }
    }, {
        key: "id",
        value: function id() {
            return "[" + this.sector_x + "," + this.sector_y + "] - as:[" + this.raw_x + "," + this.raw_y + "]";
        }

        // init the camera and whatever is needed for gpu picking this actual tile

    }, {
        key: "initPicker2__UNUSED",
        value: function initPicker2__UNUSED() {
            var renderer = this.scene.getRenderer();

            this.picking_texture = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter });
            var texture = new THREE.Texture(this.canvas, THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping, THREE.NearestFilter, THREE.NearestFilter);

            //this.picking_camera = new THREE.OrthographicCamera(this.terrain.sector_size / - 2, this.terrain.sector_size / 2, this.terrain.sector_size / 2, this.terrain.sector_size / - 2, -10000, 10000);
            this.picking_camera = new THREE.PerspectiveCamera(40, 1, 1, 10000);

            this.picking_camera.lookAt(new THREE.Vector3(0, -1, 0));
            this.picking_camera.position.y = this.terrain.sector_alt[1];
            this.picking_camera.position.x = this.terrain.sector_size / 2;
            this.picking_camera.position.z = this.terrain.sector_size / 2;
            //this.scene.camera.tits = this.picking_camera;

            this.picking_scene = new THREE.Scene();

            var mesh = new THREE.Mesh(this.mesh.geometry, texture);
            this.picking_scene.add(mesh);

            // render our scene and store it for picking whenever
            // renderer.render(this.picking_scene, this.picking_camera);//, this.picking_texture);
            //
            // var size = this.terrain.sector_size * this.terrain.sector_size;
            // var gl = renderer.getContext();
            // var pixelBuffer = new Uint8Array(4 * size);
            //
            // //read the pixel under the mouse from the texture
            // gl.readPixels(0, 0, this.terrain.sector_size, this.terrain.sector_size, gl.RGBA, gl.UNSIGNED_BYTE, pixelBuffer);
            //
            //
            // var screenshot = renderer.domElement.toDataURL();
            // //
            // var ss = new Image();
            // ss.src = screenshot;
            // //
            // var src = document.getElementById("body");
            //
            // //
            // if(this.x == 0 && this.y == 0) {
            //     console.log(pixelBuffer);
            //     src.appendChild(ss);
            // }

            //console.log(pixelBuffer);

            // //interpret the pixel as an ID
            // var id = (pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | (pixelBuffer[2]);
            // var data = pickingData[id];
            // if(data){
            //     //move our highlightBox so that it surrounds the picked object
            //     if(data.position && data.rotation && data.scale){
            //         highlightBox.position.copy(data.position);
            //         highlightBox.rotation.copy(data.rotation);
            //         highlightBox.scale.copy(data.scale).addSelf(offset);
            //         highlightBox.visible = true;
            //     }
            // } else {
            //     highlightBox.visible = false;
            // }

            mcec.log(this.id() + " GPU Picker initialized and rendered");
        }
    }, {
        key: "initPicker",
        value: function initPicker() {
            mcec.log("Initializing picker " + this.id());
            this.raycaster = new THREE.Raycaster();
            this.picking_scene = new THREE.Scene();
            this.picking_objects = [];
            this.faces_created = [];
        }

        // called after the mesh is actually loaded into the scene

    }, {
        key: "init",
        value: function init() {
            // ideas..

            mcec.log("Sector init " + this.id());
            this.initPicker();

            // this.point = new THREE.Mesh(
            //     new THREE.SphereGeometry(0.1, 32, 32),
            //     new THREE.MeshBasicMaterial({ color: 0xff0000 })
            // );
            //
            // this.scene.add(this.point);
            // this.point.position.copy(this.mesh.position);

            // this.initCharacters();
            // this.initObjects();
            // this.initTerrain();
            //
        }

        // using x,z because we arent dealing with our grid system, but actual position/vector

    }, {
        key: "setPosition",
        value: function setPosition(x, y, z) {
            if (!z) {
                z = y;
                y = false;
            }

            this.mesh.position.x = x;
            if (y) this.mesh.position.y = y;
            this.mesh.position.z = z;

            mcec.log(this.id() + " setting position = (" + x + ", " + y + ", " + z + ")");

            return this.mesh.position;
        }
    }, {
        key: "setPositionInsideSector",
        value: function setPositionInsideSector(x, y, z) {}
    }, {
        key: "getPosition",
        value: function getPosition() {
            return this.mesh.position;
        }
    }, {
        key: "unload",
        value: function unload() {
            delete this.mesh;
            this.mesh = null;

            this.has_init = false;
            this.is_loaded = false;
        }
    }, {
        key: "onLoad",
        value: function onLoad(callback) {
            this.callbacks.push(callback);
        }

        // basically init

    }, {
        key: "load",
        value: function load() {
            // if(this.is_loaded) return;
            // if(this.is_loading) return;

            mcec.log("Starting LOAD for sector " + this.id());

            this.is_loading = true;
            this.is_loaded = false;
            this.has_init = false;
            this.needs_refresh = false;

            // this is going to come from the server so, just sloppy load it for now nastayyyy
            if (!this.image_map) {
                var bumpTexture = new THREE.ImageUtils.loadTexture('shared/world.png');
                bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
                this.image_map = bumpTexture;
            }

            var self = this;
            this.getHeightDataFromImage(this.image_map.image, function (data) {

                var filt = self.BoxFilterHeightMap(self.data_size[0], self.data_size[1], data, true, 1);
                self.setHeightMap(filt);

                var min = 0,
                    max = 0;
                for (var i = 0; i < filt.length; i++) {

                    var val = filt[i];

                    if (min == 0) min = val;
                    if (val > max) max = val;
                    if (val < min) min = val;
                }

                self.heightmap_min = min;
                self.heightmap_min = max;

                // create mesh
                var mesh = self.heightDataToMesh(filt);

                // set the mesh and set is_loaded which tells terrain to init this tile
                self.mesh = mesh;
                self.is_loaded = true;
                self.is_loading = false;

                // add to world group
                self.terrain.group.add(mesh);

                self.terrain.initSector(self);

                mcec.log("SET MESH FOR " + self.id());

                // for(var i=0; i<self.callbacks.length; i++) {
                //     self.callbacks[i](self);
                // }
                //
                // self.callbacks = [];
            });
        }
    }, {
        key: "setHeightMap",
        value: function setHeightMap(data) {
            this.heightmap = data;
        }
    }, {
        key: "BoxFilterHeightMap",
        value: function BoxFilterHeightMap(width, height, heightMap, smoothEdges, passes) {
            //     width: Width of the height map in bytes
            //    height: Height of the height map in bytes
            // heightMap: Pointer to your height map data

            // Temporary values for traversing single dimensional arrays
            var x = 0;
            var z = 0;

            var widthClamp = smoothEdges ? width : width - 1;
            var heightClamp = smoothEdges ? height : height - 1;

            // [Optimization] Calculate size ahead of time
            var size = width * height;

            // Validate requirements
            if (!heightMap) return;
            if (!passes) passes = 1;

            // Allocate the result
            var result = new Float32Array(size);

            // Make sure memory was allocated
            if (!result) return;

            for (var z = smoothEdges ? 0 : 1; z < heightClamp; ++z) {

                for (var x = smoothEdges ? 0 : 1; x < widthClamp; ++x) {
                    // Sample a 3x3 filtering grid based on surrounding neighbors

                    var value = 0.0;
                    var cellAverage = 1.0;

                    // Sample top row

                    if (x - 1 + (z - 1) * width >= 0 && x - 1 + (z - 1) * width < size) {
                        value += heightMap[x - 1 + (z - 1) * width];
                        cellAverage++;
                    }

                    if (x - 0 + (z - 1) * width >= 0 && x - 0 + (z - 1) * width < size) {
                        value += heightMap[x + (z - 1) * width];
                        cellAverage++;
                    }

                    if (x + 1 + (z - 1) * width >= 0 && x + 1 + (z - 1) * width < size) {
                        value += heightMap[x + 1 + (z - 1) * width];
                        cellAverage++;
                    }

                    // Sample middle row

                    if (x - 1 + (z - 0) * width >= 0 && x - 1 + (z - 0) * width < size) {
                        value += heightMap[x - 1 + z * width];
                        cellAverage++;
                    }

                    // Sample center point (will always be in size)
                    value += heightMap[x + z * width];

                    if (x + 1 + (z - 0) * width >= 0 && x + 1 + (z - 0) * width < size) {
                        value += heightMap[x + 1 + z * width];
                        cellAverage++;
                    }

                    // Sample bottom row

                    if (x - 1 + (z + 1) * width >= 0 && x - 1 + (z + 1) * width < size) {
                        value += heightMap[x - 1 + (z + 1) * width];
                        cellAverage++;
                    }

                    if (x - 0 + (z + 1) * width >= 0 && x - 0 + (z + 1) * width < size) {
                        value += heightMap[x + (z + 1) * width];
                        cellAverage++;
                    }

                    if (x + 1 + (z + 1) * width >= 0 && x + 1 + (z + 1) * width < size) {
                        value += heightMap[x + 1 + (z + 1) * width];
                        cellAverage++;
                    }

                    // Store the result
                    result[x + z * width] = value / cellAverage;
                }
            }

            if (passes > 1) {

                for (var pass = 1; pass < passes; pass++) {
                    mcec.log("Pass #" + (pass + 1) + " for heightmap");
                    result = this.BoxFilterHeightMap(width, height, result, smoothEdges);
                }
            }

            return result;
        }
    }, {
        key: "getHeightDataFromImage",
        value: function getHeightDataFromImage(image, callback) {
            var self = this;

            // has our image already loaded? if so just process it
            if (typeof image.has_init !== "undefined") {
                self.processImageHeightData(image, callback);
                return;
            }

            // process after loading
            image.onload = function () {
                self.processImageHeightData(image, callback);
            };
        }
    }, {
        key: "processImageHeightData",
        value: function processImageHeightData(image, callback) {
            var self = this;
            var width = self.data_size[0];
            var height = self.data_size[1];

            // create canvas
            self.canvas = document.createElement('canvas');
            self.canvas.width = width; // or 'width' if you want a special/scaled size
            self.canvas.height = height; // or 'height' if you want a special/scaled size

            // various shit
            var size = width * height;
            var data = new Float32Array(size);
            var min = self.terrain.sector_alt[0];
            var max = self.terrain.sector_alt[1];
            var range = max - min;

            // draw the image onto the canvas
            var context = self.canvas.getContext('2d');
            context.drawImage(image, 0, 0);

            // loop through all x,y coords and add to data[]
            // (float 0-1 for pixel depth) x (height range) + min
            var range = max - min;
            var i = 0;
            for (var y = 0; y < height; y++) {

                var row = context.getImageData(0, y, width, 1).data;

                for (var x = 0; x < width; x++) {

                    var r = row[x * 4];
                    var g = row[x * 4 + 1];
                    var b = row[x * 4 + 2];
                    var a = row[x * 4 + 3];

                    var num = (r / 255 + g / 255 + b / 255) / 3;

                    data[i] = num * range + min;

                    i++;
                }
            }

            image.has_init = true;
            callback(data);
        }
    }, {
        key: "heightDataToMesh",
        value: function heightDataToMesh(data) {
            // geometry
            var geometry = this.getTerrainGeometryFromHeightmap(data, this.terrain.sector_size, this.terrain.sector_size);

            // material
            // var texture = THREE.ImageUtils.loadTexture( 'shared/world.png' );
            // var material = new THREE.MeshLambertMaterial( { map: texture, side: THREE.DoubleSide, morph_normals: true } );

            // mesh
            var mesh = new THREE.Mesh(geometry, this.scene.world.shaders.getShaderMaterial('terrain'));
            mesh.name = this.name;

            return mesh;
        }
    }, {
        key: "addWireframe",
        value: function addWireframe(mesh) {
            if (!mesh) mesh = this.mesh;
            // // wireframe
            var geo = new THREE.WireframeGeometry(mesh.geometry); // or WireframeGeometry
            var mat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
            var wireframe = new THREE.LineSegments(geo, mat);
            mesh.add(wireframe);
        }
    }, {
        key: "getVertice",
        value: function getVertice(x, y) {

            var data = this.mesh.geometry.attributes.position.array;
            var square = y * this.data_size[0] + x;
            var pos = square * 3;

            var vertice = new THREE.Vector3(data[pos], data[pos + 1], data[pos + 2]);
            return vertice;
        }
    }, {
        key: "getNormal",
        value: function getNormal(x, y) {
            var data = this.mesh.geometry.attributes.normal.array;
            var square = y * this.data_size[0] + x;
            var pos = square * 3;

            var vertice = new THREE.Vector3(data[pos], data[pos + 1], data[pos + 2]);
            return vertice;
        }
    }, {
        key: "getFaceFromGridPoint",
        value: function getFaceFromGridPoint(precision_x, precision_y, just_geom) {
            // normalize the x and y
            var x = Math.floor(precision_x);
            var y = Math.floor(precision_y);

            // we convert the precision x and y to decimal, basically a percentage of X and Y
            // so its 0-1, so if we combine the two, and we are above 1 (100%) then we are over
            // the halfway point of the triangle. dont question me bitch.
            if (precision_x % 1 + precision_y % 1 < 1) {
                var face = 1;
            } else {
                var face = 2;
            }

            // cache the faces
            // todo: limit the amount cached and auto purge
            if (typeof this.faces_created == "undefined") this.faces_created = [];
            if (typeof this.faces_created[x] == "undefined") this.faces_created[x] = [];
            if (typeof this.faces_created[x][y] == "undefined") this.faces_created[x][y] = [];
            if (typeof this.faces_created[x][y][face] !== "undefined") return this.faces_created[x][y][face];

            // grab our vertices (for the whole square)
            // todo: do something clever later using the face # to limit this
            var v1 = this.getVertice(x, y);
            var v2 = this.getVertice(x + 1, y);
            var v3 = this.getVertice(x, y + 1);
            var v4 = this.getVertice(x + 1, y + 1);

            // math *yawn*
            var normal = new THREE.Vector3(0, 1, 0);
            normal = this.mesh.position.clone();
            var geom = new THREE.Geometry();

            // which side of the square are we pushing
            if (face == 1) {
                geom.vertices.push(v1);
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.faces.push(new THREE.Face3(0, 1, 2, normal));

                var tri = new THREE.Triangle(v1, v2, v3);
            } else {
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.vertices.push(v4);
                geom.faces.push(new THREE.Face3(2, 1, 0, normal));

                var tri = new THREE.Triangle(v4, v3, v2);
            }

            // update shit
            //geom.verticesNeedUpdate = true;
            //geom.elementsNeedUpdate = true;
            //geom.morphTargetsNeedUpdate = true;
            //geom.uvsNeedUpdate = true;
            //geom.normalsNeedUpdate = true;
            //geom.colorsNeedUpdate = true;
            //geom.tangentsNeedUpdate = true;

            geom.computeFaceNormals();
            //geom.computeVertexNormals();
            //geom.computeBoundingBox();
            //geom.computeBoundingSphere();

            // dont do the rest if we just want the geometry
            if (just_geom) return geom;

            // create object
            var object = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({ color: 0xcccc00, side: THREE.DoubleSide, transparent: true, opacity: 0.5 }));

            // set properties
            object.position.copy(this.mesh.position);
            object.position.y += 0.01;
            object.name = "click_face";
            object.triangle = tri;

            // cache this face
            this.faces_created[x][y][face] = object;

            // add to picking scene
            //this.picking_scene.add(object);

            // clone and add for visibility / debug
            var scene_obj = object.clone();
            this.scene.add(scene_obj);
            this.addWireframe(scene_obj);

            // return the face!
            return this.faces_created[x][y][face];
        }
    }, {
        key: "getTerrainGeometryFromHeightmap",
        value: function getTerrainGeometryFromHeightmap(data, width, height) {

            // build geometry
            var geometry = new THREE.PlaneBufferGeometry(width, height, this.data_size[0] - 1, this.data_size[1] - 1);
            geometry.rotateX(-Math.PI / 2);

            var vertices = geometry.attributes.position.array;
            for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
                vertices[j + 1] = data[i];
            }

            //var square = 51;

            //var vertice = square * 3 + 1;

            //vertices[ vertice ] = -80;
            //vertices[312] = -50;
            // vertices[313] = -50;
            // vertices[314] = -50;


            // notify the geometry need to update vertices
            //geometry.mergeVertices();
            // geometry.dynamic = true;
            // geometry.verticesNeedUpdate	= true;
            // geometry.normalsNeedUpdate	= true;

            geometry.verticesNeedUpdate = true;
            geometry.elementsNeedUpdate = true;
            geometry.morphTargetsNeedUpdate = true;
            geometry.uvsNeedUpdate = true;
            geometry.normalsNeedUpdate = true;
            geometry.colorsNeedUpdate = true;
            geometry.tangentsNeedUpdate = true;

            geometry.computeFaceNormals();
            geometry.computeVertexNormals();

            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();

            return geometry;
        }
    }, {
        key: "getHeightData",
        value: function getHeightData(img) {
            var canvas = document.createElement('canvas');
            canvas.terrain.sector_size = 128;
            canvas.terrain.sector_size = 128;
            var context = canvas.getContext('2d');

            var size = 128 * 128,
                data = new Float32Array(size);

            context.drawImage(img, 0, 0);

            for (var i = 0; i < size; i++) {
                data[i] = 0;
            }

            var imgd = context.getImageData(0, 0, 128, 128);
            var pix = imgd.data;

            var j = 0;
            for (var i = 0, n = pix.length; i < n; i += 4) {
                var all = pix[i] + pix[i + 1] + pix[i + 2];
                data[j++] = all / 30;
            }

            return data;
        }
    }, {
        key: "Ammo_createTerrainShape",
        value: function Ammo_createTerrainShape(data) {

            // This parameter is not really used, since we are using PHY_FLOAT height data type and hence it is ignored
            var heightScale = 5;

            // Up axis = 0 for X, 1 for Y, 2 for Z. Normally 1 = Y is used.
            var upAxis = 1;

            // hdt, height data type. "PHY_FLOAT" is used. Possible values are "PHY_FLOAT", "PHY_UCHAR", "PHY_SHORT"
            var hdt = "PHY_FLOAT";

            // Set this to your needs (inverts the triangles)
            var flipQuadEdges = true;

            // Creates height data buffer in Ammo heap
            //this.ammoHeightData = Ammo._malloc( 4 * this.data_size[0] * this.data_size[1] );

            // Copy the javascript height data array to the Ammo one.
            // var p = 0;
            // var p2 = 0;
            // for ( var j = 0; j < this.data_size[1]; j ++ ) {
            //     for ( var i = 0; i < this.data_size[0]; i ++ ) {
            //
            //         // write 32-bit float data to memory
            //         Ammo.HEAPF32[this.ammoHeightData + p2 >> 2] = data[ p ];
            //
            //         p ++;
            //
            //         // 4 bytes/float
            //         p2 += 4;
            //     }
            // }
            //
            // // Creates the heightfield physics shape
            // var heightFieldShape = new Ammo.btHeightfieldTerrainShape(
            //
            //     this.data_size[0],
            //     this.data_size[1],
            //
            //     this.ammoHeightData,
            //
            //     heightScale,
            //     this.terrain.sector_alt[0],
            //     this.terrain.sector_alt[1],
            //
            //     upAxis,
            //     hdt,
            //     flipQuadEdges
            // );

            // Set horizontal scale
            var scaleX = this.terrain.sector_size / (this.data_size[0] - 1);
            var scaleZ = this.terrain.sector_size / (this.data_size[1] - 1);

            scaleX = scaleX * this.model.scale.x;
            scaleZ = scaleZ * this.model.scale.z;

            //console.log("GET RAW", heightFieldShape.getRawHeightFieldValue( 100 , 100 ));


            //heightFieldShape.setLocalScaling( new Ammo.btVector3( scaleX, this.model.scale.y, scaleZ ) );
            //heightFieldShape.setScale(2, 2);
            //heightFieldShape.setMargin( 0.05 );

            //return heightFieldShape;
        }
    }, {
        key: "update",
        value: function update() {
            var _this = this;

            this.is_needed = false;
            this.terrain.loopNeededSectors(function (x, y) {
                var safeX = _this.terrain.safeX(x);
                var safeY = _this.terrain.safeY(y);

                // check if im needed
                if (safeX == _this.x && safeY == _this.y) {
                    // im necessary for the scene
                    _this.is_needed = true;

                    // check if spoofing is needed
                    if (safeX !== x || safeY !== y) {

                        // check if spoofing is current (if ive moved)
                        if (_this.spoofing_x !== x || _this.spoofing_y !== y) {

                            // update spoofing
                            _this.setSpoofing(x, y);

                            // seems like a special case, where the sector is never unloaded
                            // but just moved. and it needs to be repositioned
                            // for example, if sector 1,1 is needed very next, as -14,-14, and never unloads
                            // we can just reinit
                            if (_this.is_loaded) _this.terrain.initSector(_this);
                        }
                    }
                }
            });

            // am i needed?
            if (this.is_needed) {

                // well have i init?
                if (!this.is_loaded) {

                    // am i at least trying?
                    if (!this.is_loading) {

                        // start shit
                        this.load();
                    }
                }
            } else {
                // im not needed, but im loaded? wtf?
                if (this.is_loaded || this.has_init) {
                    this.terrain.unloadSector(this);
                }
            }
        }
    }, {
        key: "getSurroundingCoords",
        value: function getSurroundingCoords(x, y, radius) {
            // populate this shit with the sectors we need to load
            var area = [];

            // what type of grid are we making around the player
            if (!radius) radius = 3;

            // figure shit out
            for (var i = 0; i < radius; i++) {

                var _x = i + x - Math.floor(radius / 2);

                for (var j = 0; j < radius; j++) {

                    var _y = j + y - Math.floor(radius / 2);
                    var coords = { x: _x, y: _y };

                    area.push(coords);
                }
            }

            return area;
        }
    }, {
        key: "getHeightMapValueAt",
        value: function getHeightMapValueAt(x, z, filter_passes) {
            if (typeof this.heightmap == "undefined") return false;
            if (!filter_passes) filter_passes = 0;

            // get the grid coords, aka location on the map image per pixel, of our x,z
            var grid_coords = this.terrain.getGridCoordsAt(x, z);

            // how many times will we average the surrounding pixels values into this ones
            if (filter_passes > 0) {
                // var surrounding = this.getSurroundingCoords(x, z, 5);
                //
                // var total = 0;
                // var count = 0;
                //
                // for(var i=0; i<filter_passes; i++) {
                //     for(var j=0; j<surrounding.length; j++) {
                //
                //         var coords = surrounding[ j ];
                //
                //         if(coords.x == parseInt(coords.x, 10) && coords.y == parseInt(coords.y, 10)) {
                //
                //             total += this.getHeightMapValueAt(coords.x, coords.y);
                //             count++;
                //
                //         }
                //     }
                // }


                var total = 0;
                var count = 0;

                for (var i = 0; i < filter_passes; i++) {
                    var heights = [];
                    for (var _z = 0; _z < 2; _z++) {
                        for (var _x = 0; _x < 2; _x++) {
                            var coords = { x: grid_coords.x + _x, z: grid_coords.y + _z };

                            if (coords.x == parseInt(coords.x, 10) && coords.z == parseInt(coords.z, 10)) {
                                var val = this.getPixelValueAt(coords.x, coords.z);

                                heights.push(val);

                                // console.log("FILTER COORDS: ", coords, val);
                                // total += val;
                                // count++;
                            }
                        }
                    }

                    var max = Math.max.apply(Math, heights);
                    var min = Math.min.apply(Math, heights);

                    for (var j = 0; j < heights.length; j++) {

                        var h = heights[j];

                        if (h == min && h !== max) continue;
                        if (h == max && h !== min) {
                            //total += h;
                        }

                        total += h;
                        count++;
                    }
                }

                console.log("Done filtering.. total:", total, " count:", count);

                var map_value = parseFloat(total / count);
            } else {
                var map_value = this.getPixelValueAt(grid_coords.x, grid_coords.y);
            }

            //mcec.log("Terrain (" + this.id() + ") -> getHeightMapValueAt(" + x + ", " +  z + ") = [ heightmap coords: " + grid_coords.x + ", " + grid_coords.y + " ] = " + map_value);

            return map_value;
        }
    }, {
        key: "getPixelValueAt",
        value: function getPixelValueAt(x, y) {
            //console.log("EVIDENCE5: " + this.heightmap[14356]);

            // get the pixel value for our grid coords
            var pixel = y * this.data_size[0] + x;

            // the actual height (y coord) we are looking for
            var map_value = this.heightmap[pixel];

            //console.log("pixelValueAt(" + x + ", " + y + ") [" + pixel + "] = " + map_value);

            return map_value;
        }
    }, {
        key: "getY",
        value: function getY(x, z, ref_y) {
            if (this.is_loaded == false) return false;

            var self = this;

            if (!ref_y) ref_y = 100;

            // grab the click face, offset it
            var geom = this.terrain.getFaceFromPosition(x, z, true);
            var p = new THREE.Vector3(x, ref_y, z).clone().sub(this.mesh.position);

            // click face geometry and normals
            var face = geom.faces[0];
            var normal = face.normal;

            // vertices
            var va = geom.vertices[face.a];
            var vb = geom.vertices[face.b];
            var vc = geom.vertices[face.c];

            // dot
            var pd = normal.dot(p.clone().sub(va));

            // move p -(pd - td) units in the direction of the normal
            var proj = p.clone().sub(normal.clone().multiplyScalar(pd));

            // closest point of proj and the triangle
            var cp = this.terrain.closestPointToTriangle(proj, va, vb, vc);

            // move our point
            //self.point.position.copy(cp).add(this.mesh.position);

            return cp.y;
        }
    }, {
        key: "getYRaycast",
        value: function getYRaycast(x, z) {
            if (!this.isMeshLoaded()) return;

            // should already be done
            if (typeof this.model.geometry !== "undefined") {
                this.model.geometry.computeBoundingBox();
                // use the height for the ray so we dont waste time putting it to 1k or some shit
                var height = this.model.geometry.boundingBox.max.y * this.model.scale.y;
            } else {
                var height = this.scene.world.terrain.max_height;
            }

            console.log("GETY(): HEIGHT: " + height);

            var raycaster = new THREE.Raycaster();
            raycaster.ray.direction.set(0, -1, 0);
            raycaster.ray.origin.set(x, height, z);

            // var mouse = new THREE.Vector2(x, z);
            // var intersect = this.gpuPicker.pick(mouse, raycaster);

            //return intersect;

            //

            var hits = raycaster.intersectObject(this.terrain.getCurrentSector().mesh);
            var hits_filtered = [];

            if (hits.length > 0) {
                for (var i = 0; i < hits.length; i++) {
                    //if(hits[i].object.name == this.name) {
                    console.log(hits[i]);
                    var offset = height - hits[i].distance;
                    console.log(offset);
                    return offset + hits[i].face.normal.y;
                    return hits[i].point.y; //distance);
                    //}
                }
            }

            return false;
        }
    }, {
        key: "computeFaceCentroids",
        value: function computeFaceCentroids(geometry) {

            var f, fl, face;

            for (f = 0, fl = geometry.faces.length; f < fl; f++) {

                face = geometry.faces[f];
                face.centroid = new THREE.Vector3(0, 0, 0);

                if (face instanceof THREE.Face3) {

                    face.centroid.add(geometry.vertices[face.a]);
                    face.centroid.add(geometry.vertices[face.b]);
                    face.centroid.add(geometry.vertices[face.c]);
                    face.centroid.divideScalar(3);
                } else if (face instanceof THREE.Face4) {

                    face.centroid.add(geometry.vertices[face.a]);
                    face.centroid.add(geometry.vertices[face.b]);
                    face.centroid.add(geometry.vertices[face.c]);
                    face.centroid.add(geometry.vertices[face.d]);
                    face.centroid.divideScalar(4);
                }
            }
        }

        // converted from c++

    }, {
        key: "intersectTriangle",
        value: function intersectTriangle(pt, dir, tri) {

            var EPSILON = 0.000001;
            var edge1 = tri[1].sub(tri[0]);
            var edge2 = tri[2].sub(tri[0]);
            var tvec = pt.sub(tri[0]);
            var pvec = dir.cross(edge2);
            var qvec = tvec.cross(edge1);
            var output = new THREE.Vector3();

            console.log(edge1, edge2, tvec, pvec, qvec);

            var det = edge1.dot(pvec);
            if (det < EPSILON) return null;

            var u = tvec.dot(pvec);
            if (u < 0 || u > det) return null;

            var v = dir.dot(qvec);
            if (v < 0 || u + v > det) return null;

            var t = edge2.dot(qvec) / det;
            output.x = pt.x + t * dir.x;
            output.y = pt.y + t * dir.y;
            output.z = pt.z + t * dir.z;

            return output;
        }
    }]);

    return terrain_tile;
}();

exports.default = terrain_tile;


module.exports = terrain_tile;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import ColladaLoader from "../src/ColladaLoader.js";
var mcec = require('../shared/mcec');
var io = require('../src/sockets');

var views = function () {
	function views() {
		_classCallCheck(this, views);

		this.submit_callbacks = [];
	}

	// load a view, call the callback


	_createClass(views, [{
		key: 'load',
		value: function load(name, callback) {
			var _this = this;

			io.send('view', name, function (html) {

				mcec.log('Got HTML back for: ' + name);

				html = _this.processViewHTML(html);

				callback(html);
			});

			return this;
		}
	}, {
		key: 'clearBinds',
		value: function clearBinds() {
			this.submit_callbacks = [];
		}
	}, {
		key: 'bindForm',
		value: function bindForm(id, callback) {
			if (typeof this.submit_callbacks[id] == "undefined") this.submit_callbacks[id] = [];

			this.submit_callbacks[id].push(callback);
		}
	}, {
		key: 'captureFormSubmit',
		value: function captureFormSubmit(form) {
			var _this2 = this;

			var form = $(form);
			var frm = form.attr('id');

			// check if its for us
			if (frm.substr(0, 4) !== "frm-") return;

			// trim the id
			var id = frm.substr(4);

			$('body').off('submit', '#' + frm);
			$('body').on('submit', '#' + frm, function (e) {
				_this2.handleFormSubmit(id, e);
			});
		}
	}, {
		key: 'handleFormSubmit',
		value: function handleFormSubmit(id, e) {
			mcec.log("Form #" + id + " was submitted");

			// this is ours to handle
			e.preventDefault();
			e.stopPropagation();

			if (typeof this.submit_callbacks[id] == "undefined") return;

			var form_data = $(e.target).serialize();
			var form_els = [];

			$(e.target).find('input,select,textarea').each(function (i, el) {
				el = $(el);
				form_els[el.attr('name')] = el.val();
			});

			for (var i in this.submit_callbacks[id]) {
				this.submit_callbacks[id][i](form_data, form_els, e);
			}
		}
	}, {
		key: 'processViewHTML',
		value: function processViewHTML(html) {
			var _this3 = this;

			$(html).filter('form').each(function (i, form) {
				_this3.captureFormSubmit(form);
			});

			return html;
		}
	}]);

	return views;
}();

exports.default = views;

module.exports = new views();

},{"../shared/mcec":69,"../src/sockets":15}],19:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basemodel = require('../src/basemodel');

var _basemodel2 = _interopRequireDefault(_basemodel);

var _CSS3DRenderer = require('../js/renderers/CSS3DRenderer.js');

var _CSS3DRenderer2 = _interopRequireDefault(_CSS3DRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var webview = function (_baseModel) {
    _inherits(webview, _baseModel);

    function webview(scene, url, overrides) {
        _classCallCheck(this, webview);

        var options = {
            scale: 1,
            url: url
            // skinning: true,
            // morph_targets: true,
            // morph_normals: true,
            // enhance: true,
            // shininess: 0,
            //skinning: true,
            //offset: {y: -145},
            // mass: 1,
            // position: {x: 705, y: 15.15, z: 321},
        };

        var _this = _possibleConstructorReturn(this, (webview.__proto__ || Object.getPrototypeOf(webview)).call(this, scene, "webview", Object.assign(options, overrides)));

        _this.scene = scene;

        return _this;
    }

    _createClass(webview, [{
        key: 'load',
        value: function load(callback) {
            var width = this.options.width || 500;
            var height = this.options.height || 500;

            // create the div to hold our iframe
            var div = document.createElement('div');
            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.backgroundColor = '#000';

            // create the iframe to hold our webpage
            var iframe = document.createElement('iframe');
            iframe.style.width = width + 'px';
            iframe.style.height = height + 'px';
            iframe.style.border = '0px';
            iframe.src = this.options.url;

            // add the iframe to the div
            div.appendChild(iframe);

            var div2 = document.createElement('div');
            div2.innerHTML = 'Plain text inside a div.';
            div2.className = 'animated bounceInDown';
            div2.style.background = "#0094ff";
            div2.style.fontSize = "2em";
            div2.style.color = "white";
            div2.style.padding = "2em";

            // add the div to a new CSS 3D Object
            var object = new THREE.CSS3DObject(div);

            // create renderer
            this.renderer = new THREE.CSS3DRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.domElement.style.position = 'absolute';
            this.renderer.domElement.style.top = 0;

            // add it to page
            document.body.appendChild(this.renderer.domElement);

            // create scene
            this.render_scene = new THREE.Scene();

            // add our object to our render scene
            this.scene.css_scene.add(object);

            callback();
        }
    }, {
        key: 'update',
        value: function update() {
            //this.renderer.render(this.render_scene, this.scene.getCamera());
        }
    }]);

    return webview;
}(_basemodel2.default);

module.exports = webview;

},{"../js/renderers/CSS3DRenderer.js":3,"../src/basemodel":5}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _basemodel = require('../src/basemodel');

var _basemodel2 = _interopRequireDefault(_basemodel);

var _terrain = require('../src/terrain');

var _terrain2 = _interopRequireDefault(_terrain);

var _webview = require('../src/webview');

var _webview2 = _interopRequireDefault(_webview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var terrain = require('../src/terrain');
var shaders = require('../src/shaders');
var io = require('../src/sockets');

var world = function (_baseModel) {
    _inherits(world, _baseModel);

    function world(scene, id) {
        _classCallCheck(this, world);

        var options = {
            name: 'platform'
        };

        // shit that ammojs will keep track of as an object in the world with gravity and shit
        var _this = _possibleConstructorReturn(this, (world.__proto__ || Object.getPrototypeOf(world)).call(this, scene, 'platform', options));

        _this.dynamic_objects = [];

        //this.transform_aux = new Ammo.btTransform();
        _this.mouse = new THREE.Vector2();

        // init shaders
        _this.shaders = new shaders(scene);

        // lets do this
        _this.terrain = new _terrain2.default(scene, _this);
        return _this;
    }

    _createClass(world, [{
        key: 'createObjectMaterial',
        value: function createObjectMaterial() {
            var c = Math.floor(Math.random() * (1 << 24));
            return new THREE.MeshPhongMaterial({ color: c });
        }
    }, {
        key: 'init',
        value: function init() {
            mcec.log("Set world model");

            // so clicks work
            this.setClickMesh();

            // so water works
            //this.scene.setWater();

            // init physics
            // this.initPhysics();


            //this.spawnBall(0,300,0);

            //
            // // instantiate a loader
            // var loader = new THREE.ImageLoader();
            // var me = this;
            //
            // function getHeightData(img) {
            //     var canvas = document.createElement('canvas');
            //     canvas.width = 2048 / 8;
            //     canvas.height = 2048 / 8;
            //     var context = canvas.getContext('2d');
            //
            //     var size = 2048 / 8 * 2048 / 8,
            //         data = new Float32Array(size);
            //
            //     context.drawImage(img, 0, 0);
            //
            //     for (var i = 0; i < size; i++) {
            //         data[i] = 0
            //     }
            //
            //     var imgd = context.getImageData(0, 0, 2048 / 8, 2048 / 8);
            //     var pix = imgd.data;
            //
            //     var j = 0;
            //     for (var i = 0, n = pix.length; i < n; i += (4)) {
            //         var all = pix[i] + pix[i + 1] + pix[i + 2];
            //         data[j++] = all / 40;
            //     }
            //
            //     return data;
            // }
            //
            // // load a image resource
            // loader.load(
            //     // resource URL
            //     'shared/planet.jpg',
            //     // Function when resource is loaded
            //     function ( image ) {
            //         var data = getHeightData(image);
            //
            //         console.log(data);
            //
            //         var terrainG = new THREE.PlaneBufferGeometry(700, 700, 100 - 1, 100 - 1);
            //         terrainG.rotateX(-Math.PI / 2);
            //
            //         var vertices = terrainG.attributes.position.array;
            //
            //         for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
            //             vertices[j + 1] = data[i] * 5;
            //         }
            //
            //         terrainG.computeFaceNormals();
            //         terrainG.computeVertexNormals();
            //
            //         var material = new THREE.MeshLambertMaterial({
            //             //side: THREE.DoubleSide,
            //             color: 0xffffff,
            //             transparent: false,
            //         });
            //
            //         var terrain = new THREE.Mesh(terrainG, material);
            //         terrain.receiveShadow = true;
            //         terrain.castShadow = true;
            //         terrain.position.y = 0;
            //         me.add(terrain);
            //
            //         // var xS = 63, yS = 63;
            //         // var terrainScene = THREE.Terrain({
            //         //     easing: THREE.Terrain.Linear,
            //         //     frequency: 2.5,
            //         //     heightmap: canvas,
            //         //     material: new THREE.MeshBasicMaterial({color: 0x5566aa}),
            //         //     maxHeight: 20,
            //         //     minHeight: -100,
            //         //     steps: 1,
            //         //     useBufferGeometry: false,
            //         //     xSegments: xS,
            //         //     xSize: 1024,
            //         //     ySegments: yS,
            //         //     ySize: 1024,
            //         // });
            //         //
            //         // me.add(terrainScene);
            //     }
            // );
            //

        }
    }, {
        key: 'spawnBall',
        value: function spawnBall(vec) {
            var threeObject = null;
            var shape = null;
            var objectSize = 13;
            var margin = 0.05;

            var radius = 1 + Math.random() * objectSize;
            var threeObject = new THREE.Mesh(new THREE.SphereGeometry(radius, 20, 20), this.createObjectMaterial());
            var shape = new Ammo.btSphereShape(radius);
            shape.setMargin(margin);

            threeObject.position.copy(vec);

            var mass = objectSize * 50;
            var localInertia = new Ammo.btVector3(0, 0, 0);
            shape.calculateLocalInertia(mass, localInertia);

            var transform = new Ammo.btTransform();
            transform.setIdentity();
            var pos = threeObject.position;
            transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));

            var motionState = new Ammo.btDefaultMotionState(transform);
            var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
            var body = new Ammo.btRigidBody(rbInfo);

            threeObject.userData.physicsBody = body;

            this.scene.add(threeObject);
            this.dynamic_objects.push(threeObject);
            this.physics_world.addRigidBody(body);
        }

        // this will be called to load a mesh when a filename isnt specified in the constructor
        // scene wont render until the callback is called with the mesh

    }, {
        key: 'load',
        value: function load(callback) {
            var self = this;

            // texture used to generate "bumpiness"
            var bumpTexture = new THREE.ImageUtils.loadTexture('shared/world.png');
            bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;

            var oceanTexture = new THREE.ImageUtils.loadTexture('textures/dirt-512.jpg');
            oceanTexture.wrapS = oceanTexture.wrapT = THREE.RepeatWrapping;

            var sandyTexture = new THREE.ImageUtils.loadTexture('textures/sand-512.jpg');
            sandyTexture.wrapS = sandyTexture.wrapT = THREE.RepeatWrapping;

            var grassTexture = new THREE.ImageUtils.loadTexture('textures/grass-512.jpg');
            grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;

            var rockyTexture = new THREE.ImageUtils.loadTexture('textures/rock-512.jpg');
            rockyTexture.wrapS = rockyTexture.wrapT = THREE.RepeatWrapping;

            var snowyTexture = new THREE.ImageUtils.loadTexture('textures/snow-512.jpg');
            snowyTexture.wrapS = snowyTexture.wrapT = THREE.RepeatWrapping;

            console.log(this.scene.fog);

            // use "this." to create global object
            this.shaders.setUniforms('terrain', {
                bumpTexture: { type: "t", value: bumpTexture },
                bumpScale: { type: "f", value: 1 },
                oceanTexture: { type: "t", value: oceanTexture },
                sandyTexture: { type: "t", value: sandyTexture },
                grassTexture: { type: "t", value: grassTexture },
                rockyTexture: { type: "t", value: rockyTexture },
                snowyTexture: { type: "t", value: snowyTexture },
                fogColor: { type: "c", value: this.scene.fog.color },
                fogNear: { type: "f", value: this.scene.fog.near },
                fogFar: { type: "f", value: this.scene.fog.far }
            });

            // create custom material from the shader code above
            //   that is within specially labelled script tags
            this.terrainMaterial = this.shaders.getShaderMaterial('terrain');
            this.terrainMaterial.needsUpdate = true;

            var size = this.terrain_width * this.terrain_height * 4;
            var geometry = new THREE.PlaneBufferGeometry(this.height, this.width, this.terrain_height - 1, this.terrain_width - 1);
            //geometry.dynamic = true;
            // geometry.verticesNeedUpdate = true;
            // geometry.elementsNeedUpdate = true;
            // geometry.morphTargetsNeedUpdate = true;
            // geometry.uvsNeedUpdate = true;
            // geometry.normalsNeedUpdate = true;
            // geometry.colorsNeedUpdate = true;
            // geometry.tangentsNeedUpdate = true;
            //
            // geometry.computeFaceNormals();
            // geometry.computeVertexNormals();
            //
            // geometry.computeBoundingBox();
            // geometry.computeBoundingSphere();
            geometry.rotateX(-Math.PI / 2);

            //var plane = new THREE.Mesh(	geometry, customMaterial );

            //plane.rotation.x = -Math.PI / 2;
            //plane.position.y = this.bump_scale / 2;

            //for GETY()
            // var pars = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat };
            // this.heightMap = new THREE.WebGLRenderTarget( this.terrain_width, this.terrain_height, pars);
            //
            // this.tmpData = new Float32Array(size);
            // this.bump_texture = bumpTexture;
            //
            //
            // plane.updateMatrix();
            //
            // water
            // var waterGeo = new THREE.PlaneGeometry( self.height, self.width, 1, 1 );
            // var waterTex = new THREE.ImageUtils.loadTexture( 'textures/water-512.jpg' );
            //
            // waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
            // waterTex.repeat.set(5,5);
            //
            // var waterMat = new THREE.MeshBasicMaterial( {map: waterTex, transparent:true, opacity:0.40} );
            // self.water2 = new THREE.Mesh(	waterGeo, waterMat );
            //
            // self.water2.rotation.x = -Math.PI / 2;
            // self.water2.position.y = 30;
            //
            // this.scene.add(self.water2);
            //
            // var new_mesh = plane.clone();
            //
            // return new_mesh;

            this.terrain.load(callback);

            // this.getHeightDataFromImage(bumpTexture.image, function(data) {
            //
            //     self.heightmap = data;
            //
            //
            //     //console.log("HEIGHT MAP:", self.heightmap);
            //
            //     var min = 0, max = 0;
            //
            //     for(var i=0; i<self.heightmap.length; i++) {
            //
            //         var val = self.heightmap[i];
            //
            //         if(min == 0) min = val;
            //         if(val > max) max = val;
            //         if(val < min) min = val;
            //
            //     }
            //
            //     console.log("MIN:", min);
            //     console.log("MAX:", max);
            //
            //     self.heightmap = self.BoxFilterHeightMap(self.terrain_width, self.terrain_height, self.heightmap, true, 5);
            //
            //     var mesh = self.heightDataToMesh(self.heightmap);
            //
            //     callback(mesh);
            //
            //     //console.log("WORLD PHYSICS");
            //
            //     //mesh.scale.set(1000,1000,1000);
            //     //mesh.position.y = -5;
            //
            // });
        }
    }, {
        key: 'getHeightAt',
        value: function getHeightAt(x, z, apply_modifier) {

            x = parseInt(x);
            z = parseInt(z);

            // height = 5
            // width = 5
            //
            var i = z * this.canvas.height + x;
            //
            // x = 3
            // y = 2
            //
            // result = 13
            //
            //     - - - - -
            //         - - - - -
            //             - - - x -
            //     - - - - -
            //         - - - - -

            var height = this.pixel_heights[i];

            console.log("HEIGHT IS:", +height);

            return height;
        }
    }, {
        key: 'imageToMesh',
        value: function imageToMesh(image) {
            // -------------------------------------
            // Image
            var depth = 1000;
            var width = 1000;
            var spacingX = 1;
            var spacingZ = 1;
            var heightOffset = 100;
            var canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            var ctx = canvas.getContext('2d');
            var img = new Image();
            var me = this;
            //img.src = image; // The image will not load in codepen.io, and that's why you don't see the mesh.

            /*img.onload = function () {
                 // Vertices
                ctx.drawImage(img, 512, 512);
                var pixel = ctx.getImageData(0, 0, width, depth);
                var geom = new THREE.Geometry();
                var output = [];
                for (var x = 0; x < depth; x++) {
                    for (var z = 0; z < width; z++) {
                        var yValue = pixel.data[z * 4 + (depth * x * 4)] / heightOffset;
                        var vertex = new THREE.Vector3(x * spacingX, yValue, z * spacingZ);
                        geom.vertices.push(vertex);
                    }
                }
                 // Faces
                for (var p = 0; p < depth - 1; p++) {
                    for (var h = 0; h < width - 1; h++) {
                        var a = h + p * width;
                        var b = (h + 1) + (p * width);
                        var c = h + ((p + 1) * width);
                        var d = (h + 1) + ((p + 1) * width);
                        var face1 = new THREE.Face3(a, b, d);
                        var face2 = new THREE.Face3(d, c, a);
                        geom.faces.push(face1);
                        geom.faces.push(face2);
                    }
                }
                 geom.computeVertexNormals(true);
                geom.computeFaceNormals();
                 var mesh = new THREE.Mesh(geom, new THREE.MeshLambertMaterial({
                    color: 0x98dafc,
                    shading: THREE.SmoothShading
                }));
                 mesh.position.set(-257, 0, -257);
                mesh.receiveShadow = true;
                 me.add(mesh);
             };*/
        }
    }, {
        key: 'addTerrainMesh',
        value: function addTerrainMesh(geometry, scale, x, y, z, rx, ry, rz, material) {
            mesh = new THREE.Mesh(geometry, material);
            mesh.scale.x = mesh.scale.y = mesh.scale.z = scale;
            mesh.position.x = x;
            mesh.position.y = y;
            mesh.position.z = z;
            mesh.rotation.x = rx;
            mesh.rotation.y = ry;
            mesh.rotation.z = rz;
            mesh.overdraw = true;
            mesh.doubleSided = false;

            mesh.updateMatrix();
            this.add(mesh);

            return mesh;
        }
    }, {
        key: 'click',
        value: function click(x, y, z, intersection) {
            var _this2 = this;

            //this.placeMarker(x, y, z);
            mcec.log("Terrain click");
            //console.log(intersection, x, y, z);

            // todo: move this to the appropriate socket related location

            io.send('walk_request', { x: x, y: y, z: z }, function (can_walk, adjusted_pos) {

                if (!can_walk) return;

                _this2.scene.getMyPlayer().walkTo(adjusted_pos.x, adjusted_pos.y, adjusted_pos.z);

                // get the face normal in object space
                var vec = intersection.face.normal.clone();

                // the cone points up
                var up = new THREE.Vector3(0, 1, 0);

                if (vec.y == 1 || vec.y == -1) {
                    var axis = new THREE.Vector3(1, 0, 0).normalize();
                } else {
                    var axis = new THREE.Vector3().crossVectors(up, vec).normalize();
                }

                // determine the amount to rotate
                var radians = Math.acos(up.dot(vec));

                // do shit
                var mat = new THREE.Matrix4();
                mat.makeRotationAxis(axis, radians);

                // set rotation
                _this2.clickMesh.rotation.copy(new THREE.Euler().setFromRotationMatrix(mat));
                _this2.clickMesh.position.set(x, y, z);
                _this2.clickMesh.material.side = THREE.DoubleSide;

                _this2.clickMesh.material.opacity = _this2.clickMeshMaxOpacity;
                _this2.clickMesh.visible = true;
            });
        }
    }, {
        key: 'mouse_move',
        value: function mouse_move(e) {
            if (e.which != 0) return;

            this.scene.mouse.x = e.clientX;
            this.scene.mouse.y = e.clientY;

            // this.scene.gpuPicker.needUpdate = true;
        }
    }, {
        key: 'pickMouse',
        value: function pickMouse() {
            var mouse3D = new THREE.Vector3(this.scene.mouse.x / window.innerWidth * 2 - 1, -(this.scene.mouse.y / window.innerHeight) * 2 + 1, 0.5);
            var raycaster = new THREE.Raycaster();

            raycaster.setFromCamera(mouse3D, this.scene.getCamera());

            var hits = raycaster.intersectObjects(this.scene.hitboxes);

            if (hits.length > 0) {

                var hit = hits[0];
                var parent = hit.object.parent;
                var model = this.scene.models.get(parent);

                if (model) {

                    var username = model.user_info.username;

                    mcec.log("Mouse over player:", username);
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }, {
        key: 'update',
        value: function update(delta) {
            //if(this.clickMesh.material.opacity > 0) this.clickMesh.material.opacity -= 0.1;

            if (typeof this.last_pick == "undefined") this.last_pick = 0;
            var time = Date.now();

            if (time - this.last_pick > 100) {
                this.pickMouse();
                this.last_pick = time;
            }

            this.terrain.update(delta);
        }
    }, {
        key: 'getZ',
        value: function getZ(x, z) {

            //this.div = obj.div || [256,256];
            //this.div = obj.div || [512,512];
            //this.size = obj.size || [50, 10, 50];


            this.update();

            var colx = Math.floor((x / this.width + .5) * this.terrain_width);
            var colz = Math.floor((-z / this.height + .5) * this.terrain_height);

            var pixel = Math.floor((colz - 1) * this.terrain_width + colx) * 4;

            var result = (this.tmpData[pixel + 0] + this.tmpData[pixel + 1] + this.tmpData[pixel + 2]) * this.ratio;

            return result;
        }
    }, {
        key: 'getY',
        value: function getY(x, z) {
            //if (!this.isMeshLoaded()) return;

            //return this.getYRaycast(x, z);
            return this.terrain.getY(x, z, this.scene.getMyPlayer().model.position.y);
        }
    }, {
        key: 'getYRaycast',
        value: function getYRaycast(x, z) {
            if (!this.isMeshLoaded()) return;

            // should already be done
            if (typeof this.model.geometry !== "undefined") {
                this.model.geometry.computeBoundingBox();
                // use the height for the ray so we dont waste time putting it to 1k or some shit
                var height = this.model.geometry.boundingBox.max.y * this.model.scale.y;
            } else {
                var height = this.scene.world.terrain.max_height;
            }
            height = this.terrain.getY(x, z) + 0.5;

            console.log("GETY(): HEIGHT: " + height);

            var raycaster = new THREE.Raycaster();
            raycaster.ray.direction.set(0, -1, 0);
            raycaster.ray.origin.set(x, height, z);

            // var mouse = new THREE.Vector2(x, z);
            // var intersect = this.gpuPicker.pick(mouse, raycaster);

            //return intersect;

            //

            var hits = raycaster.intersectObject(this.terrain.getSectorFromPosition(x, z).mesh);
            var hits_filtered = [];

            if (hits.length > 0) {
                for (var i = 0; i < hits.length; i++) {
                    //if(hits[i].object.name == this.name) {
                    console.log(hits[i]);
                    var offset = height - hits[i].distance;
                    console.log(offset);
                    //return offset + hits[i].face.normal.y;
                    return hits[i].point.y; //distance);
                    //}
                }
            }

            return false;
        }
    }, {
        key: 'getY2',
        value: function getY2(x, z) {
            //return this.getHeightAt(x, z, true);
            console.log("GETY: START");
            var max_y = 1500;
            var min_y = -500;
            var chunk = 1000;
            var raycaster = new THREE.Raycaster(new THREE.Vector3(x, max_y, z), new THREE.Vector3(0, -1, 0), 0, chunk);
            var platform = this.scene.world.model; //scene.get().getObjectByName("platform", true);

            var y = max_y;
            while (y >= min_y) {

                //console.log("TESTING: " + y);

                var hits = raycaster.intersectObject(platform, false);
                //if(hits.length > 0) console.log(hits);
                if (hits.length > 0) {
                    //&& (hits[0].face.normal.y > 0)
                    var result = y + (hits[0].face.normal.y - hits[0].distance);
                    console.log("GETY: " + result);
                    return result;
                }

                y -= chunk;

                raycaster.ray.origin.y = y;
            }

            return false;
        }
    }, {
        key: 'getYOld',
        value: function getYOld(x, z) {

            var max_y = 2000;
            var min_y = -1000;
            var chunk = 10;

            var y = max_y;
            while (y >= min_y) {

                var origin = new THREE.Vector3(x, y + chunk, z);
                var direction = new THREE.Vector3(x, y - 10, z);

                //origin.normalize();
                //direction.normalize();

                var rc = new THREE.Raycaster(origin, direction);

                try {
                    var where = rc.intersectObject(this.model);

                    if (where.length > 0) {
                        console.log(where);
                        return where[0].point.y;
                    }
                } catch (e) {}

                y -= chunk;
            }

            return false;
        }
    }, {
        key: 'clearClickMesh',
        value: function clearClickMesh() {
            this.clickMesh.visible = false;
        }
    }, {
        key: 'setClickMesh',
        value: function setClickMesh() {
            // custom png material
            //var texture = this.scene.models.getTexture('click_good');
            //var material = new THREE.MeshPhongMaterial({map: texture, color: 0xFFFFFF, transparent: true, opacity: 0.75});

            // basic yellow material
            var material = new THREE.MeshBasicMaterial({ color: 0xFFF300, transparent: true, opacity: 0.3 });

            // create mesh
            //var mesh = new THREE.Mesh(new THREE.BoxGeometry(20, 0.2, 20), material);
            var mesh = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 0.3, 20, 0), material);

            this.clickMeshMaxOpacity = material.opacity;

            this.clickMesh = mesh;
            this.clickMesh.name = "click_mesh";
            this.clickMesh.material.opacity = 0;

            var scale = 0.8;

            this.clickMesh.scale.set(scale, scale, scale);
            this.clickMesh.visible = false;

            // add to scene
            this.scene.add(this.clickMesh);
        }
    }, {
        key: 'getMaterial',
        value: function getMaterial(img) {
            var material = new THREE.MeshBasicMaterial({ map: new THREE.Texture(null, THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping), ambient: 0xaaaaaa, specular: 0xffffff, shininess: 0, shading: THREE.SmoothShading });

            return material;
        }
    }, {
        key: 'initPhysics',
        value: function initPhysics() {

            console.log("WORLD PHYSICS");

            this.collision_config = new Ammo.btDefaultCollisionConfiguration();
            this.dispatcher = new Ammo.btCollisionDispatcher(this.collision_config);
            this.broadphase = new Ammo.btDbvtBroadphase();
            this.solver = new Ammo.btSequentialImpulseConstraintSolver();
            this.physics_world = new Ammo.btDiscreteDynamicsWorld(this.dispatcher, this.broadphase, this.solver, this.collision_config);
            this.physics_world.setGravity(new Ammo.btVector3(0, -9.82, 0));

            // Create the terrain body
            //this.model.scale.set(5,5,5);
            this.shape = this.createTerrainShape(this.heightmap);

            var groundTransform = new Ammo.btTransform();
            groundTransform.setIdentity();

            // Shifts the terrain, since bullet re-centers it on its bounding box.
            groundTransform.setOrigin(new Ammo.btVector3(0, (this.terrain_max_height + this.terrain_min_height) * this.model.scale.y / 2, 0));

            var groundMass = 0;
            var groundLocalInertia = new Ammo.btVector3(0, 0, 0);
            var groundMotionState = new Ammo.btDefaultMotionState(groundTransform);
            var groundBody = new Ammo.btRigidBody(new Ammo.btRigidBodyConstructionInfo(groundMass, groundMotionState, this.shape, groundLocalInertia));
            this.physics_world.addRigidBody(groundBody);
        }
    }, {
        key: 'testGetY',
        value: function testGetY(num) {

            if (!num) num = 500;

            console.time('testGetY');

            for (var i = 0; i < num; ++i) {

                var x = mcec.random(-500, 500);
                var y = mcec.random(-500, 500);

                var junk = this.getY(x, y);
                console.log("COORDS: x: ", x, ", y: ", y);
            }

            console.timeEnd('testGetY');

            console.time('testGPUGetY');

            for (var i = 0; i < num; ++i) {

                var x = mcec.random(0, 500);
                var y = mcec.random(0, 500);

                var junk = this.terrain.getY(x, y);
                console.log("COORDS: x: ", x, ", y: ", y);
            }

            console.timeEnd('testGPUGetY');
        }
    }, {
        key: 'spawnRobots',
        value: function spawnRobots(num) {
            if (!num) num = 15;
            // add another player for some fun
            mcec.log("TRYING TO ADD NPCS");

            for (var i = 0; i < num; i++) {

                var x = mcec.random(1, 15);
                var z = mcec.random(1, 15);

                x += this.scene.getMyPlayer().position.x;
                z += this.scene.getMyPlayer().position.z;

                this.scene.players.addPlayer("Player #" + (i + 1), { npc: true, position: { x: x, z: z, y: 150 } });
            }
        }
    }, {
        key: 'spawnWebview',
        value: function spawnWebview(url, w, h, x, y, z) {

            if (!w) w = 500;
            if (!h) h = 500;
            if (!x) x = this.scene.getMyPlayer().position.x;
            if (!y) y = this.scene.getMyPlayer().position.y;
            if (!z) z = this.scene.getMyPlayer().position.z;
            if (!url) url = "/login.html";

            this.webview = new _webview2.default(this.scene, url, {
                width: w,
                height: h,
                position: { x: x, y: y, z: z }
            });
        }
    }, {
        key: 'updatePhysics',
        value: function updatePhysics(deltaTime) {
            if (typeof this.physics_world !== "undefined") this.physics_world.stepSimulation(deltaTime, 10);

            // Update objects
            for (var i = 0, il = this.dynamic_objects.length; i < il; i++) {

                var obj = this.dynamic_objects[i];

                var body = obj.getModel().userData.physicsBody;
                var ms = body.getMotionState();

                if (ms) {
                    ms.getWorldTransform(this.transform_aux);

                    var p = this.transform_aux.getOrigin();
                    var q = this.transform_aux.getRotation();

                    obj.physicsSetPosition(p.x(), p.y(), p.z());
                    //obj.quaternion.set( q.x(), q.y(), q.z(), q.w() );
                } else {
                    obj.physicsSetPosition();
                }
            }
        }
    }, {
        key: 'addRigidBody',
        value: function addRigidBody(model) {

            var threeObject = model.getModel();
            var mass = model.options.mass;

            //threeObject.position.copy( pos );
            //threeObject.quaternion.copy( quat );

            var pos = threeObject.position.clone();
            var quat = threeObject.quaternion.clone();

            // make a box with our shit in it to check the size
            var box = new THREE.Box3().setFromObject(threeObject);
            var x = box.size().x;
            var y = box.size().y;
            var z = box.size().z;

            // for later
            model.size = box.size();
            var cc = new Ammo.btKinematicCharacterController();

            var transform = new Ammo.btTransform();
            transform.setIdentity();
            transform.setOrigin(new Ammo.btVector3(pos.x, pos.y, pos.z));
            transform.setRotation(new Ammo.btQuaternion(quat.x, quat.y, quat.z, quat.w));

            var motionState = new Ammo.btDefaultMotionState(transform);
            var localInertia = new Ammo.btVector3(0, 0, 0);

            var shape = new Ammo.btBoxShape(new Ammo.btVector3(x * 0.5, y * 0.5, z * 0.5));
            shape.setMargin(0.05);
            shape.calculateLocalInertia(mass, localInertia);

            //shape.setLocalScaling( new Ammo.btVector3( 0.25, 0.25, 0.25 ) );

            var rbInfo = new Ammo.btRigidBodyConstructionInfo(mass, motionState, shape, localInertia);
            var body = new Ammo.btRigidBody(rbInfo);

            threeObject.userData.physicsBody = body;
            //scene.add( threeObject );

            if (mass > 0) {
                this.dynamic_objects.push(model);
                // Disable deactivation
                body.setActivationState(4);
            }

            this.physics_world.addRigidBody(body);
        }
    }]);

    return world;
}(_basemodel2.default);

module.exports = world;

},{"../src/basemodel":5,"../src/shaders":14,"../src/sockets":15,"../src/terrain":16,"../src/webview":19}],21:[function(require,module,exports){
module.exports = after

function after(count, callback, err_cb) {
    var bail = false
    err_cb = err_cb || noop
    proxy.count = count

    return (count === 0) ? callback() : proxy

    function proxy(err, result) {
        if (proxy.count <= 0) {
            throw new Error('after called too many times')
        }
        --proxy.count

        // after first error, rest are passed to err_cb
        if (err) {
            bail = true
            callback(err)
            // future error callbacks will go to error handler
            callback = err_cb
        } else if (proxy.count === 0 && !bail) {
            callback(null, result)
        }
    }
}

function noop() {}

},{}],22:[function(require,module,exports){
/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */

module.exports = function(arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

  if (start < 0) { start += bytes; }
  if (end < 0) { end += bytes; }
  if (end > bytes) { end = bytes; }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);
  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }
  return result.buffer;
};

},{}],23:[function(require,module,exports){

/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};


},{}],24:[function(require,module,exports){
/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();

},{}],25:[function(require,module,exports){
(function (global){
/**
 * Create a blob builder even when vendor prefixes exist
 */

var BlobBuilder = global.BlobBuilder
  || global.WebKitBlobBuilder
  || global.MSBlobBuilder
  || global.MozBlobBuilder;

/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function() {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */

var blobSupportsArrayBufferView = blobSupported && (function() {
  try {
    var b = new Blob([new Uint8Array([1,2])]);
    return b.size === 2;
  } catch(e) {
    return false;
  }
})();

/**
 * Check if BlobBuilder is supported
 */

var blobBuilderSupported = BlobBuilder
  && BlobBuilder.prototype.append
  && BlobBuilder.prototype.getBlob;

/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  for (var i = 0; i < ary.length; i++) {
    var chunk = ary[i];
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer;

      // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer
      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      ary[i] = buf;
    }
  }
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};

  var bb = new BlobBuilder();
  mapArrayBufferViews(ary);

  for (var i = 0; i < ary.length; i++) {
    bb.append(ary[i]);
  }

  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
};

function BlobConstructor(ary, options) {
  mapArrayBufferViews(ary);
  return new Blob(ary, options || {});
};

module.exports = (function() {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],26:[function(require,module,exports){

},{}],27:[function(require,module,exports){
/**
 * Slice reference.
 */

var slice = [].slice;

/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function(obj, fn){
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function(){
    return fn.apply(obj, args.concat(slice.call(arguments)));
  }
};

},{}],28:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],29:[function(require,module,exports){

module.exports = function(a, b){
  var fn = function(){};
  fn.prototype = b.prototype;
  a.prototype = new fn;
  a.prototype.constructor = a;
};
},{}],30:[function(require,module,exports){

module.exports = require('./socket');

/**
 * Exports parser
 *
 * @api public
 *
 */
module.exports.parser = require('engine.io-parser');

},{"./socket":31,"engine.io-parser":42}],31:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var transports = require('./transports/index');
var Emitter = require('component-emitter');
var debug = require('debug')('engine.io-client:socket');
var index = require('indexof');
var parser = require('engine.io-parser');
var parseuri = require('parseuri');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = Socket;

/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket (uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);

  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure
    : (global.location && 'https:' === location.protocol);

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname ||
    (global.location ? location.hostname : 'localhost');
  this.port = opts.port || (global.location && location.port
      ? location.port
      : (this.secure ? 443 : 80));
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  }

  // SSL options for Node.js client
  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode;

  // other options for Node.js client
  var freeGlobal = typeof global === 'object' && global;
  if (freeGlobal.global === freeGlobal) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  }

  // set on handshake
  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null;

  // set on heartbeat
  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;

  this.open();
}

Socket.priorWebsocketSuccess = false;

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = require('./transport');
Socket.transports = require('./transports/index');
Socket.parser = require('engine.io-parser');

/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query);

  // append engine.io protocol identifier
  query.EIO = parser.protocol;

  // transport name
  query.transport = name;

  // per-transport options
  var options = this.transportOptions[name] || {};

  // session id if we already have one
  if (this.id) query.sid = this.id;

  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void (0)
  });

  return transport;
};

function clone (obj) {
  var o = {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }
  return o;
}

/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */
Socket.prototype.open = function () {
  var transport;
  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }
  this.readyState = 'opening';

  // Retry with the next transport if the transport is disabled (jsonp: false)
  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};

/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */

Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  }

  // set up transport
  this.transport = transport;

  // set up transport listeners
  transport
  .on('drain', function () {
    self.onDrain();
  })
  .on('packet', function (packet) {
    self.onPacket(packet);
  })
  .on('error', function (e) {
    self.onError(e);
  })
  .on('close', function () {
    self.onClose('transport close');
  });
};

/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */

Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, { probe: 1 });
  var failed = false;
  var self = this;

  Socket.priorWebsocketSuccess = false;

  function onTransportOpen () {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }
    if (failed) return;

    debug('probe transport "%s" opened', name);
    transport.send([{ type: 'ping', data: 'probe' }]);
    transport.once('packet', function (msg) {
      if (failed) return;
      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;

        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');

          cleanup();

          self.setTransport(transport);
          transport.send([{ type: 'upgrade' }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport () {
    if (failed) return;

    // Any callback called by transport should be ignored since now
    failed = true;

    cleanup();

    transport.close();
    transport = null;
  }

  // Handle any error that happens while probing
  function onerror (err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;

    freezeTransport();

    debug('probe transport "%s" failed because of error: %s', name, err);

    self.emit('upgradeError', error);
  }

  function onTransportClose () {
    onerror('transport closed');
  }

  // When the socket is closed while we're probing
  function onclose () {
    onerror('socket closed');
  }

  // When the socket is upgraded while we're probing
  function onupgrade (to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  }

  // Remove all listeners on the transport and on self
  function cleanup () {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);

  this.once('close', onclose);
  this.once('upgrading', onupgrade);

  transport.open();
};

/**
 * Called when connection is deemed open.
 *
 * @api public
 */

Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush();

  // we check for `readyState` in case an `open`
  // listener already closed the socket
  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');
    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};

/**
 * Handles a packet.
 *
 * @api private
 */

Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState ||
      'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

    this.emit('packet', packet);

    // Socket is live - any packet counts
    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};

/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */

Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen();
  // In case open handler closes socket
  if ('closed' === this.readyState) return;
  this.setPing();

  // Prolong liveness of socket on heartbeat
  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};

/**
 * Resets ping timeout.
 *
 * @api private
 */

Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || (self.pingInterval + self.pingTimeout));
};

/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */

Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};

/**
* Sends a ping packet.
*
* @api private
*/

Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};

/**
 * Called on `drain` event
 *
 * @api private
 */

Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen);

  // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`
  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};

/**
 * Flush write buffers.
 *
 * @api private
 */

Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable &&
    !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer);
    // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`
    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};

/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */

Socket.prototype.write =
Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};

/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */

Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;

  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};

/**
 * Closes the connection.
 *
 * @api private
 */

Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';

    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close () {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose () {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade () {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};

/**
 * Called upon transport error
 *
 * @api private
 */

Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};

/**
 * Called upon transport close.
 *
 * @api private
 */

Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this;

    // clear timers
    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer);

    // stop event from firing again for transport
    this.transport.removeAllListeners('close');

    // ensure transport won't stay open
    this.transport.close();

    // ignore further transport communication
    this.transport.removeAllListeners();

    // set ready state
    this.readyState = 'closed';

    // clear session id
    this.id = null;

    // emit close event
    this.emit('close', reason, desc);

    // clean buffers after, so users can still
    // grab the buffers on `close` event
    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};

/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */

Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];
  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }
  return filteredUpgrades;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./transport":32,"./transports/index":33,"component-emitter":28,"debug":39,"engine.io-parser":42,"indexof":48,"parseqs":49,"parseuri":50}],32:[function(require,module,exports){
/**
 * Module dependencies.
 */

var parser = require('engine.io-parser');
var Emitter = require('component-emitter');

/**
 * Module exports.
 */

module.exports = Transport;

/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport (opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}

/**
 * Mix in `Emitter`.
 */

Emitter(Transport.prototype);

/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};

/**
 * Opens the transport.
 *
 * @api public
 */

Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};

/**
 * Closes the transport.
 *
 * @api private
 */

Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};

/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */

Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};

/**
 * Called upon open
 *
 * @api private
 */

Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};

/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */

Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};

/**
 * Called with a decoded packet.
 */

Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon close.
 *
 * @api private
 */

Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

},{"component-emitter":28,"engine.io-parser":42}],33:[function(require,module,exports){
(function (global){
/**
 * Module dependencies
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var XHR = require('./polling-xhr');
var JSONP = require('./polling-jsonp');
var websocket = require('./websocket');

/**
 * Export transports.
 */

exports.polling = polling;
exports.websocket = websocket;

/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling (opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./polling-jsonp":34,"./polling-xhr":35,"./websocket":37,"xmlhttprequest-ssl":38}],34:[function(require,module,exports){
(function (global){

/**
 * Module requirements.
 */

var Polling = require('./polling');
var inherit = require('component-inherit');

/**
 * Module exports.
 */

module.exports = JSONPPolling;

/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;

/**
 * Global JSONP callbacks.
 */

var callbacks;

/**
 * Noop.
 */

function empty () { }

/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */

function JSONPPolling (opts) {
  Polling.call(this, opts);

  this.query = this.query || {};

  // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution
  if (!callbacks) {
    // we need to consider multiple engines in the same page
    if (!global.___eio) global.___eio = [];
    callbacks = global.___eio;
  }

  // callback identifier
  this.index = callbacks.length;

  // add callback to jsonp global
  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  });

  // append to query string
  this.query.j = this.index;

  // prevent spurious errors from being emitted when the window is unloaded
  if (global.document && global.addEventListener) {
    global.addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}

/**
 * Inherits from Polling.
 */

inherit(JSONPPolling, Polling);

/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;

/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();
  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];
  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }
  this.script = script;

  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};

/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */

JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;

    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);

    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete () {
    initIframe();
    fn();
  }

  function initIframe () {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;

    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe();

  // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./polling":36,"component-inherit":29}],35:[function(require,module,exports){
(function (global){
/**
 * Module requirements.
 */

var XMLHttpRequest = require('xmlhttprequest-ssl');
var Polling = require('./polling');
var Emitter = require('component-emitter');
var inherit = require('component-inherit');
var debug = require('debug')('engine.io-client:polling-xhr');

/**
 * Module exports.
 */

module.exports = XHR;
module.exports.Request = Request;

/**
 * Empty function
 */

function empty () {}

/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */

function XHR (opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (global.location) {
    var isSSL = 'https:' === location.protocol;
    var port = location.port;

    // some user agents have empty `location.port`
    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = opts.hostname !== global.location.hostname ||
      port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}

/**
 * Inherits from Polling.
 */

inherit(XHR, Polling);

/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;

/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout;

  // other options for Node.js client
  opts.extraHeaders = this.extraHeaders;

  return new Request(opts);
};

/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */

XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};

/**
 * Starts a poll cycle.
 *
 * @api private
 */

XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};

/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */

function Request (opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout;

  // SSL options for Node.js client
  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;

  // other options for Node.js client
  this.extraHeaders = opts.extraHeaders;

  this.create();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);
    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);
        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {}

    // ie6 check
    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };
      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          var contentType;
          try {
            contentType = xhr.getResponseHeader('Content-Type');
          } catch (e) {}
          if (contentType === 'application/octet-stream') {
            xhr.responseType = 'arraybuffer';
          }
        }
        if (4 !== xhr.readyState) return;
        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(xhr.status);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (global.document) {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};

/**
 * Called upon successful response.
 *
 * @api private
 */

Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};

/**
 * Called if we have data.
 *
 * @api private
 */

Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};

/**
 * Called upon error.
 *
 * @api private
 */

Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};

/**
 * Cleans up house.
 *
 * @api private
 */

Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  }
  // xmlhttprequest
  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (global.document) {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};

/**
 * Called upon load.
 *
 * @api private
 */

Request.prototype.onLoad = function () {
  var data;
  try {
    var contentType;
    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}
    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }
  if (null != data) {
    this.onData(data);
  }
};

/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */

Request.prototype.hasXDR = function () {
  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
};

/**
 * Aborts the request.
 *
 * @api public
 */

Request.prototype.abort = function () {
  this.cleanup();
};

/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */

Request.requestsCount = 0;
Request.requests = {};

if (global.document) {
  if (global.attachEvent) {
    global.attachEvent('onunload', unloadHandler);
  } else if (global.addEventListener) {
    global.addEventListener('beforeunload', unloadHandler, false);
  }
}

function unloadHandler () {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./polling":36,"component-emitter":28,"component-inherit":29,"debug":39,"xmlhttprequest-ssl":38}],36:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parseqs = require('parseqs');
var parser = require('engine.io-parser');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:polling');

/**
 * Module exports.
 */

module.exports = Polling;

/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = require('xmlhttprequest-ssl');
  var xhr = new XMLHttpRequest({ xdomain: false });
  return null != xhr.responseType;
})();

/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */

function Polling (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(Polling, Transport);

/**
 * Transport name.
 */

Polling.prototype.name = 'polling';

/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};

/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */

Polling.prototype.pause = function (onPause) {
  var self = this;

  this.readyState = 'pausing';

  function pause () {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};

/**
 * Starts polling cycle.
 *
 * @api public
 */

Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};

/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */

Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);
  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    }

    // if its a close packet, we close the ongoing requests
    if ('close' === packet.type) {
      self.onClose();
      return false;
    }

    // otherwise bypass onData and handle the message
    self.onPacket(packet);
  };

  // decode payload
  parser.decodePayload(data, this.socket.binaryType, callback);

  // if an event did not trigger closing
  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};

/**
 * For polling, send a close packet.
 *
 * @api private
 */

Polling.prototype.doClose = function () {
  var self = this;

  function close () {
    debug('writing close packet');
    self.write([{ type: 'close' }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};

/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */

Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;
  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = '';

  // cache busting is forced
  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // avoid port if default for schema
  if (this.port && (('https' === schema && Number(this.port) !== 443) ||
     ('http' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

},{"../transport":32,"component-inherit":29,"debug":39,"engine.io-parser":42,"parseqs":49,"xmlhttprequest-ssl":38,"yeast":68}],37:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var Transport = require('../transport');
var parser = require('engine.io-parser');
var parseqs = require('parseqs');
var inherit = require('component-inherit');
var yeast = require('yeast');
var debug = require('debug')('engine.io-client:websocket');
var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
var NodeWebSocket;
if (typeof window === 'undefined') {
  try {
    NodeWebSocket = require('ws');
  } catch (e) { }
}

/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */

var WebSocket = BrowserWebSocket;
if (!WebSocket && typeof window === 'undefined') {
  WebSocket = NodeWebSocket;
}

/**
 * Module exports.
 */

module.exports = WS;

/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS (opts) {
  var forceBase64 = (opts && opts.forceBase64);
  if (forceBase64) {
    this.supportsBinary = false;
  }
  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;
  if (!this.usingBrowserWebSocket) {
    WebSocket = NodeWebSocket;
  }
  Transport.call(this, opts);
}

/**
 * Inherits from Transport.
 */

inherit(WS, Transport);

/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';

/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;

/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  };

  // SSL options for Node.js client
  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }
  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket ? (protocols ? new WebSocket(uri, protocols) : new WebSocket(uri)) : new WebSocket(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};

/**
 * Adds event listeners to the socket
 *
 * @api private
 */

WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };
  this.ws.onclose = function () {
    self.onClose();
  };
  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };
  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};

/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */

WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  // encodePacket efficient as it uses WS framing
  // no need for encodePayload
  var total = packets.length;
  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};
          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? global.Buffer.byteLength(data) : data.length;
            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        }

        // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error
        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done () {
    self.emit('flush');

    // fake drain
    // defer to next tick to allow Socket to clear writeBuffer
    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};

/**
 * Called upon close
 *
 * @api private
 */

WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};

/**
 * Closes socket.
 *
 * @api private
 */

WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};

/**
 * Generates uri for connection.
 *
 * @api private
 */

WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = '';

  // avoid port if default for schema
  if (this.port && (('wss' === schema && Number(this.port) !== 443) ||
    ('ws' === schema && Number(this.port) !== 80))) {
    port = ':' + this.port;
  }

  // append timestamp to URI
  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  // communicate binary support capabilities
  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query);

  // prepend ? to query
  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */

WS.prototype.check = function () {
  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../transport":32,"component-inherit":29,"debug":39,"engine.io-parser":42,"parseqs":49,"ws":26,"yeast":68}],38:[function(require,module,exports){
(function (global){
// browser shim for xmlhttprequest module

var hasCORS = require('has-cors');

module.exports = function (opts) {
  var xdomain = opts.xdomain;

  // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
  var xscheme = opts.xscheme;

  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217
  var enablesXDR = opts.enablesXDR;

  // XMLHttpRequest can be disabled on IE
  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) { }

  // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example
  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) { }

  if (!xdomain) {
    try {
      return new global[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) { }
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"has-cors":47}],39:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))

},{"./debug":40,"_process":51}],40:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require('ms');

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

},{"ms":41}],41:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

},{}],42:[function(require,module,exports){
(function (global){
/**
 * Module dependencies.
 */

var keys = require('./keys');
var hasBinary = require('has-binary2');
var sliceBuffer = require('arraybuffer.slice');
var after = require('after');
var utf8 = require('./utf8');

var base64encoder;
if (global && global.ArrayBuffer) {
  base64encoder = require('base64-arraybuffer');
}

/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */

var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);

/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */
var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);

/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */
var dontSendBlobs = isAndroid || isPhantomJS;

/**
 * Current protocol version.
 */

exports.protocol = 3;

/**
 * Packet types.
 */

var packets = exports.packets = {
    open:     0    // non-ws
  , close:    1    // non-ws
  , ping:     2
  , pong:     3
  , message:  4
  , upgrade:  5
  , noop:     6
};

var packetslist = keys(packets);

/**
 * Premade error packet.
 */

var err = { type: 'error', data: 'parser error' };

/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = require('blob');

/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */

exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = (packet.data === undefined)
    ? undefined
    : packet.data.buffer || packet.data;

  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (Blob && data instanceof global.Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  }

  // might be an object with { base64: true, data: dataAsBase64String }
  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  }

  // Sending data as a utf-8 string
  var encoded = packets[packet.type];

  // data fragment is optional
  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), { strict: false }) : String(packet.data);
  }

  return callback('' + encoded);

};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}

/**
 * Encode packet helpers for binary types
 */

function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);

  resultBuffer[0] = packets[packet.type];
  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i+1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();
  fr.onload = function() {
    packet.data = fr.result;
    exports.encodePacket(packet, supportsBinary, true, callback);
  };
  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);

  return callback(blob);
}

/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */

exports.encodeBase64Packet = function(packet, callback) {
  var message = 'b' + exports.packets[packet.type];
  if (Blob && packet.data instanceof global.Blob) {
    var fr = new FileReader();
    fr.onload = function() {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };
    return fr.readAsDataURL(packet.data);
  }

  var b64data;
  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);
    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }
    b64data = String.fromCharCode.apply(null, basic);
  }
  message += global.btoa(b64data);
  return callback(message);
};

/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */

exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  }
  // String data
  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);
      if (data === false) {
        return err;
      }
    }
    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return { type: packetslist[type], data: data.substring(1) };
    } else {
      return { type: packetslist[type] };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);
  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }
  return { type: packetslist[type], data: rest };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, { strict: false });
  } catch (e) {
    return false;
  }
  return data;
}

/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */

exports.decodeBase64Packet = function(msg, binaryType) {
  var type = packetslist[msg.charAt(0)];
  if (!base64encoder) {
    return { type: type, data: { base64: true, data: msg.substr(1) } };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return { type: type, data: data };
};

/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */

exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function(message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(results.join(''));
  });
};

/**
 * Async array map using after
 */

function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function(i, el, cb) {
    each(el, function(error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}

/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */

exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;
  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '', n, msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || (length != (n = Number(length)))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    }

    // advance cursor
    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

};

/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */

exports.encodePayloadAsArrayBuffer = function(packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function(err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function(acc, p) {
      var len;
      if (typeof p === 'string'){
        len = p.length;
      } else {
        len = p.byteLength;
      }
      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);

    var resultArray = new Uint8Array(totalLength);

    var bufferIndex = 0;
    encodedPackets.forEach(function(p) {
      var isString = typeof p === 'string';
      var ab = p;
      if (isString) {
        var view = new Uint8Array(p.length);
        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }
        ab = view.buffer;
      }

      if (isString) { // not true binary
        resultArray[bufferIndex++] = 0;
      } else { // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();
      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }
      resultArray[bufferIndex++] = 255;

      var view = new Uint8Array(ab);
      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });

    return callback(resultArray.buffer);
  });
};

/**
 * Encode as Blob
 */

exports.encodePayloadAsBlob = function(packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function(encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;
      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);
        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }
        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = (encoded instanceof ArrayBuffer)
        ? encoded.byteLength
        : encoded.size;

      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);
      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }
      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function(err, results) {
    return callback(new Blob(results));
  });
};

/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */

exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1; ; i++) {
      if (tailArray[i] === 255) break;

      // 310 = char length of Number.MAX_VALUE
      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);

    var msg = sliceBuffer(bufferTail, 0, msgLength);
    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';
        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function(buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./keys":43,"./utf8":44,"after":21,"arraybuffer.slice":22,"base64-arraybuffer":24,"blob":25,"has-binary2":45}],43:[function(require,module,exports){

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */

module.exports = Object.keys || function keys (obj){
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }
  return arr;
};

},{}],44:[function(require,module,exports){
(function (global){
/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint, strict) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			if (strict) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
			return false;
		}
		return true;
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint, strict) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			if (!checkScalarValue(codePoint, strict)) {
				codePoint = 0xFFFD;
			}
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint, strict);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol(strict) {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString, opts) {
		opts = opts || {};
		var strict = false !== opts.strict;

		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol(strict)) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],45:[function(require,module,exports){
(function (global){
/* global Blob File */

/*
 * Module requirements.
 */

var isArray = require('isarray');

var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Module exports.
 */

module.exports = hasBinary;

/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary (obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }
    return false;
  }

  if ((typeof global.Buffer === 'function' && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) ||
     (typeof global.ArrayBuffer === 'function' && obj instanceof ArrayBuffer) ||
     (withNativeBlob && obj instanceof Blob) ||
     (withNativeFile && obj instanceof File)
    ) {
    return true;
  }

  // see: https://github.com/Automattic/has-binary/pull/4
  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"isarray":46}],46:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],47:[function(require,module,exports){

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */

try {
  module.exports = typeof XMLHttpRequest !== 'undefined' &&
    'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

},{}],48:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],49:[function(require,module,exports){
/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */

exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};

/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */

exports.decode = function(qs){
  var qry = {};
  var pairs = qs.split('&');
  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return qry;
};

},{}],50:[function(require,module,exports){
/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */

var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

var parts = [
    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
];

module.exports = function parseuri(str) {
    var src = str,
        b = str.indexOf('['),
        e = str.indexOf(']');

    if (b != -1 && e != -1) {
        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
    }

    var m = re.exec(str || ''),
        uri = {},
        i = 14;

    while (i--) {
        uri[parts[i]] = m[i] || '';
    }

    if (b != -1 && e != -1) {
        uri.source = src;
        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
        uri.ipv6uri = true;
    }

    return uri;
};

},{}],51:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],52:[function(require,module,exports){

/**
 * Module dependencies.
 */

var url = require('./url');
var parser = require('socket.io-parser');
var Manager = require('./manager');
var debug = require('debug')('socket.io-client');

/**
 * Module exports.
 */

module.exports = exports = lookup;

/**
 * Managers cache.
 */

var cache = exports.managers = {};

/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup (uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};

  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] ||
                      false === opts.multiplex || sameNamespace;

  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }
    io = cache[id];
  }
  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }
  return io.socket(parsed.path, opts);
}

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = parser.protocol;

/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;

/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = require('./manager');
exports.Socket = require('./socket');

},{"./manager":53,"./socket":55,"./url":56,"debug":57,"socket.io-parser":61}],53:[function(require,module,exports){

/**
 * Module dependencies.
 */

var eio = require('engine.io-client');
var Socket = require('./socket');
var Emitter = require('component-emitter');
var parser = require('socket.io-parser');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:manager');
var indexOf = require('indexof');
var Backoff = require('backo2');

/**
 * IE6+ hasOwnProperty
 */

var has = Object.prototype.hasOwnProperty;

/**
 * Module exports
 */

module.exports = Manager;

/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager (uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);
  if (uri && ('object' === typeof uri)) {
    opts = uri;
    uri = undefined;
  }
  opts = opts || {};

  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];
  var _parser = opts.parser || parser;
  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}

/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */

Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};

/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */

Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};

/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */

Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : (nsp + '#')) + this.engine.id;
};

/**
 * Mix in `Emitter`.
 */

Emitter(Manager.prototype);

/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};

/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};

/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};

/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};

/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};

/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */

Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};

/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */

Manager.prototype.open =
Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;

  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false;

  // emit `open`
  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  });

  // emit `connect_error`
  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);
    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  });

  // emit `connect_timeout`
  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout);

    // set timer
    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);

  return this;
};

/**
 * Called upon transport open.
 *
 * @api private
 */

Manager.prototype.onopen = function () {
  debug('open');

  // clear old subs
  this.cleanup();

  // mark as open
  this.readyState = 'open';
  this.emit('open');

  // add new subs
  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};

/**
 * Called upon a ping.
 *
 * @api private
 */

Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};

/**
 * Called upon a packet.
 *
 * @api private
 */

Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};

/**
 * Called with data.
 *
 * @api private
 */

Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};

/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */

Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};

/**
 * Called upon socket error.
 *
 * @api private
 */

Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};

/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */

Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];
  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting () {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};

/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */

Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;

  this.close();
};

/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */

Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }
      self.encoding = false;
      self.processPacketQueue();
    });
  } else { // add packet to the queue
    self.packetBuffer.push(packet);
  }
};

/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */

Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};

/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */

Manager.prototype.cleanup = function () {
  debug('cleanup');

  var subsLength = this.subs.length;
  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;

  this.decoder.destroy();
};

/**
 * Close the current socket.
 *
 * @api private
 */

Manager.prototype.close =
Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;
  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }
  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};

/**
 * Called upon engine close.
 *
 * @api private
 */

Manager.prototype.onclose = function (reason) {
  debug('onclose');

  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};

/**
 * Attempt a reconnection.
 *
 * @api private
 */

Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;

  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);

    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;

      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts);

      // check again for the case socket closed in above events
      if (self.skipReconnect) return;

      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);

    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};

/**
 * Called upon successful reconnect.
 *
 * @api private
 */

Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

},{"./on":54,"./socket":55,"backo2":23,"component-bind":27,"component-emitter":28,"debug":57,"engine.io-client":30,"indexof":48,"socket.io-parser":61}],54:[function(require,module,exports){

/**
 * Module exports.
 */

module.exports = on;

/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on (obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

},{}],55:[function(require,module,exports){

/**
 * Module dependencies.
 */

var parser = require('socket.io-parser');
var Emitter = require('component-emitter');
var toArray = require('to-array');
var on = require('./on');
var bind = require('component-bind');
var debug = require('debug')('socket.io-client:socket');
var parseqs = require('parseqs');

/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;

/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat
  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  if (opts && opts.query) {
    this.query = opts.query;
  }
  if (this.io.autoConnect) this.open();
}

/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);

/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;

  var io = this.io;
  this.subs = [
    on(io, 'open', bind(this, 'onopen')),
    on(io, 'packet', bind(this, 'onpacket')),
    on(io, 'close', bind(this, 'onclose'))
  ];
};

/**
 * "Opens" the socket.
 *
 * @api public
 */

Socket.prototype.open =
Socket.prototype.connect = function () {
  if (this.connected) return this;

  this.subEvents();
  this.io.open(); // ensure open
  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};

/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = { type: parser.EVENT, data: args };

  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress;

  // event ack callback
  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  delete this.flags;

  return this;
};

/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};

/**
 * Called upon engine `open`.
 *
 * @api private
 */

Socket.prototype.onopen = function () {
  debug('transport is open - connecting');

  // write connect packet if necessary
  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({type: parser.CONNECT, query: query});
    } else {
      this.packet({type: parser.CONNECT});
    }
  }
};

/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */

Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};

/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onpacket = function (packet) {
  if (packet.nsp !== this.nsp) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};

/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};

/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */

Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);

    self.packet({
      type: parser.ACK,
      id: id,
      data: args
    });
  };
};

/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */

Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];
  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};

/**
 * Called upon server connect.
 *
 * @api private
 */

Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};

/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */

Socket.prototype.emitBuffered = function () {
  var i;
  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }
  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }
  this.sendBuffer = [];
};

/**
 * Called upon server disconnect.
 *
 * @api private
 */

Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};

/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */

Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }
    this.subs = null;
  }

  this.io.destroy(this);
};

/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.close =
Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({ type: parser.DISCONNECT });
  }

  // remove socket from pool
  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }
  return this;
};

/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */

Socket.prototype.compress = function (compress) {
  this.flags = this.flags || {};
  this.flags.compress = compress;
  return this;
};

},{"./on":54,"component-bind":27,"component-emitter":28,"debug":57,"parseqs":49,"socket.io-parser":61,"to-array":67}],56:[function(require,module,exports){
(function (global){

/**
 * Module dependencies.
 */

var parseuri = require('parseuri');
var debug = require('debug')('socket.io-client:url');

/**
 * Module exports.
 */

module.exports = url;

/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url (uri, loc) {
  var obj = uri;

  // default to window.location
  loc = loc || global.location;
  if (null == uri) uri = loc.protocol + '//' + loc.host;

  // relative path support
  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);
      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    }

    // parse
    debug('parse %s', uri);
    obj = parseuri(uri);
  }

  // make sure we treat `localhost:80` and `localhost` equally
  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';

  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host;

  // define unique id
  obj.id = obj.protocol + '://' + host + ':' + obj.port;
  // define href
  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : (':' + obj.port));

  return obj;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"debug":57,"parseuri":50}],57:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))

},{"./debug":58,"_process":51}],58:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40,"ms":59}],59:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"dup":41}],60:[function(require,module,exports){
(function (global){
/*global Blob,File*/

/**
 * Module requirements
 */

var isArray = require('isarray');
var isBuf = require('./is-buffer');
var toString = Object.prototype.toString;
var withNativeBlob = typeof global.Blob === 'function' || toString.call(global.Blob) === '[object BlobConstructor]';
var withNativeFile = typeof global.File === 'function' || toString.call(global.File) === '[object FileConstructor]';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function(packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'
  return {packet: pack, buffers: buffers};
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = { _placeholder: true, num: buffers.length };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);
    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }
    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};
    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }
    return newData;
  }
  return data;
}

/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */

exports.reconstructPacket = function(packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful
  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}

/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */

exports.removeBlobs = function(data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj;

    // convert any blob
    if ((withNativeBlob && obj instanceof Blob) ||
        (withNativeFile && obj instanceof File)) {
      pendingBlobs++;

      // async filereader
      var fileReader = new FileReader();
      fileReader.onload = function() { // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        }
        else {
          bloblessData = this.result;
        }

        // if nothing pending its callback time
        if(! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) { // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) { // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;
  _removeBlobs(bloblessData);
  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./is-buffer":62,"isarray":65}],61:[function(require,module,exports){

/**
 * Module dependencies.
 */

var debug = require('debug')('socket.io-parser');
var Emitter = require('component-emitter');
var hasBin = require('has-binary2');
var binary = require('./binary');
var isBuf = require('./is-buffer');

/**
 * Protocol version.
 *
 * @api public
 */

exports.protocol = 4;

/**
 * Packet types.
 *
 * @api public
 */

exports.types = [
  'CONNECT',
  'DISCONNECT',
  'EVENT',
  'ACK',
  'ERROR',
  'BINARY_EVENT',
  'BINARY_ACK'
];

/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;

/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;

/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;

/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;

/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;

/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;

/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;

/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;

/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;

/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function(obj, callback){
  if ((obj.type === exports.EVENT || obj.type === exports.ACK) && hasBin(obj.data)) {
    obj.type = obj.type === exports.EVENT ? exports.BINARY_EVENT : exports.BINARY_ACK;
  }

  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  }
  else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};

/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */

function encodeAsString(obj) {

  // first is type
  var str = '' + obj.type;

  // attachments if we have them
  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  }

  // if we have a namespace other than `/`
  // we append it followed by a comma `,`
  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  }

  // immediately followed by the id
  if (null != obj.id) {
    str += obj.id;
  }

  // json data
  if (null != obj.data) {
    str += JSON.stringify(obj.data);
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */

function encodeAsBinary(obj, callback) {

  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;

    buffers.unshift(pack); // add packet info to beginning of data list
    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}

/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */

function Decoder() {
  this.reconstructor = null;
}

/**
 * Mix in `Emitter` with Decoder.
 */

Emitter(Decoder.prototype);

/**
 * Decodes an ecoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function(obj) {
  var packet;
  if (typeof obj === 'string') {
    packet = decodeString(obj);
    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) { // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet);

      // no attachments, labeled binary but no binary data to follow
      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else { // non-binary full packet
      this.emit('decoded', packet);
    }
  }
  else if (isBuf(obj) || obj.base64) { // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);
      if (packet) { // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  }
  else {
    throw new Error('Unknown type: ' + obj);
  }
};

/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */

function decodeString(str) {
  var i = 0;
  // look up type
  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) return error();

  // look up attachments if type binary
  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';
    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }
    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }
    p.attachments = Number(buf);
  }

  // look up namespace (if any)
  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';
    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  }

  // look up id
  var next = str.charAt(i + 1);
  if ('' !== next && Number(next) == next) {
    p.id = '';
    while (++i) {
      var c = str.charAt(i);
      if (null == c || Number(c) != c) {
        --i;
        break;
      }
      p.id += str.charAt(i);
      if (i === str.length) break;
    }
    p.id = Number(p.id);
  }

  // look up json data
  if (str.charAt(++i)) {
    p = tryParse(p, str.substr(i));
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(p, str) {
  try {
    p.data = JSON.parse(str);
  } catch(e){
    return error();
  }
  return p; 
}

/**
 * Deallocates a parser's resources
 *
 * @api public
 */

Decoder.prototype.destroy = function() {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};

/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */

function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}

/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */

BinaryReconstructor.prototype.takeBinaryData = function(binData) {
  this.buffers.push(binData);
  if (this.buffers.length === this.reconPack.attachments) { // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }
  return null;
};

/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */

BinaryReconstructor.prototype.finishedReconstruction = function() {
  this.reconPack = null;
  this.buffers = [];
};

function error() {
  return {
    type: exports.ERROR,
    data: 'parser error'
  };
}

},{"./binary":60,"./is-buffer":62,"component-emitter":28,"debug":63,"has-binary2":45}],62:[function(require,module,exports){
(function (global){

module.exports = isBuf;

/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */

function isBuf(obj) {
  return (global.Buffer && global.Buffer.isBuffer(obj)) ||
         (global.ArrayBuffer && obj instanceof ArrayBuffer);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],63:[function(require,module,exports){
(function (process){
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = require('./debug');
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

}).call(this,require('_process'))

},{"./debug":64,"_process":51}],64:[function(require,module,exports){
arguments[4][40][0].apply(exports,arguments)
},{"dup":40,"ms":66}],65:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"dup":46}],66:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"dup":41}],67:[function(require,module,exports){
module.exports = toArray

function toArray(list, index) {
    var array = []

    index = index || 0

    for (var i = index || 0; i < list.length; i++) {
        array[i - index] = list[i]
    }

    return array
}

},{}],68:[function(require,module,exports){
'use strict';

var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
  , length = 64
  , map = {}
  , seed = 0
  , i = 0
  , prev;

/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */
function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}

/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */
function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}

/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */
function yeast() {
  var now = encode(+new Date());

  if (now !== prev) return seed = 0, prev = now;
  return now +'.'+ encode(seed++);
}

//
// Map each character to its index.
//
for (; i < length; i++) map[alphabet[i]] = i;

//
// Expose the `yeast`, `encode` and `decode` functions.
//
yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

},{}],69:[function(require,module,exports){
(function (process){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mcec = function () {
    function mcec() {
        _classCallCheck(this, mcec);

        this.dev_mode = function () {
            if (typeof window !== 'undefined') {
                // this means we are client
                return window.location.hostname.indexOf('localhost') !== -1 || window.location.hostname.indexOf('127.0.0.1') !== -1 || window.location.href.indexOf('#dev_mode') !== -1;
            } else {
                // this means we are server
                for (var i = 0; i < process.argv.length; i++) {
                    if (process.argv[i] === "dev") return true;
                }
            }
            return false;
        }();

        var prod_config = {
            server_ip: "game.mcec.io",
            server_port: "9000"
        };

        var dev_config = {
            server_ip: "game.mcec.io",
            server_port: "9200"
        };

        this._config = this.dev_mode ? dev_config : prod_config;

        this.log("Initializing");
        if (this.dev_mode) this.log("Set dev mode");
    }

    _createClass(mcec, [{
        key: 'config',
        value: function config(name) {
            return this._config[name];
        }
    }, {
        key: 'log',
        value: function log() {
            if (!this.isDevMode()) return;

            var args = ["[MCEC]"];

            for (var i in arguments) {
                var arg = arguments[i];

                args.push(arg);
            }

            console.log.apply(null, args);
        }

        //////

    }, {
        key: 'bindKey',
        value: function bindKey(key, callback) {

            if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == "object") {
                for (var i in key) {
                    this.bindKey(key[i], callback);
                }

                return;
            }

            if (typeof this.keyBinds[key] == "undefined") {
                this.keyBinds[key] = [];
            }

            this.keyBinds[key].push(callback);

            this.log("Added keybind for key #" + key);
        }
    }, {
        key: 'bindClick',
        value: function bindClick(down, callback) {

            if (typeof this.mouseBinds[down] == "undefined") {
                this.mouseBinds[down] = [];
            }

            this.mouseBinds[down].push(callback);

            this.log("Added mouse bind for down = " + (down == true));
        }
    }, {
        key: 'bindMove',
        value: function bindMove(callback) {

            if (typeof this.mouseMoveBinds == "undefined") {
                this.mouseMoveBinds = [];
            }

            this.mouseMoveBinds.push(callback);

            this.log("Added mouse bind for movement");
        }
    }, {
        key: 'getViewportSize',
        value: function getViewportSize() {
            return {
                width: window.innerWidth, height: window.innerHeight
            };
        }
    }, {
        key: 'isDevMode',
        value: function isDevMode() {
            return this.dev_mode;
        }
    }, {
        key: 'getServerAddress',
        value: function getServerAddress() {
            return this.config('server_ip') + ":" + this.config('server_port');
        }
    }, {
        key: 'setApp',
        value: function setApp(inst) {
            this.app = inst;
        }
    }, {
        key: 'getApp',
        value: function getApp() {
            return this.app;
        }
    }, {
        key: 'key',
        value: function key(key) {
            var key = this.keysPressed[key];
            return key ? key : false;
        }
    }, {
        key: 'keyDown',
        value: function keyDown(key) {
            return this.key(key);
        }
    }, {
        key: 'pressKey',
        value: function pressKey(key, down) {
            this.keysPressed[key] = down;

            if (down) {
                if (typeof this.keyBinds[key] == "undefined") return false;

                for (var i = 0; i < this.keyBinds[key].length; i++) {
                    this.keyBinds[key][i]();
                }
            }
        }
    }, {
        key: 'pressMouse',
        value: function pressMouse(down, e) {
            this.mouseDown = down;

            if (typeof this.mouseBinds[down] == "undefined") return false;

            for (var i = 0; i < this.mouseBinds[down].length; i++) {
                this.mouseBinds[down][i](e);
            }
        }
    }, {
        key: 'moveMouse',
        value: function moveMouse(e) {
            this.mouseMove = e;

            this.mouse = new THREE.Vector2();
            this.mouse.x = event.clientX / window.innerWidth * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            if (typeof this.mouseMoveBinds == "undefined") return false;

            for (var i = 0; i < this.mouseMoveBinds.length; i++) {
                this.mouseMoveBinds[i](e);
            }
        }
    }, {
        key: 'ifKeyDown',
        value: function ifKeyDown(key, callback) {
            if (this.key(key)) {
                callback();
            }
        }
    }, {
        key: 'watchControls',
        value: function watchControls(domElement) {
            this.log("Watching mouse & keys");

            var self = this;

            //
            // KEYS
            //

            this.keysPressed = {};
            this.keyBinds = {};

            var handler = function handler(down, self) {
                return function (e) {
                    var key = e.keyCode;
                    if (key >= 0) {
                        self.pressKey(key, down);
                        //e.preventDefault();
                    }
                };
            };

            window.addEventListener("keydown", handler(true, this), false);
            window.addEventListener("keyup", handler(false, this), false);

            //
            // MOUSE BUTTONS
            //

            this.mouseDown = false;
            this.mouseBinds = {};

            handler = function handler(down, self) {
                return function (e) {
                    self.pressMouse(down, e);
                    //e.preventDefault();
                };
            };

            window.addEventListener("mousedown", handler(true, this), false);
            window.addEventListener("mouseup", handler(false, this), false);

            //
            // MOUSE MOVEMENT
            //

            this.mouseDown = false;
            this.mouseBinds = {};

            handler = function handler(self) {
                return function (e) {
                    self.moveMouse(e);
                    //e.preventDefault();
                };
            };

            window.addEventListener('mousemove', handler(this));

            //
            // TOUCH CONTROLS BITCH
            //

            handler = function handler(event) {
                var touches = event.changedTouches,
                    first = touches[0],
                    type = "";
                switch (event.type) {
                    //case "touchstart": type = "mousedown"; break;
                    //case "touchmove":  type = "mousemove"; break;
                    case "touchend":
                        type = "mousedown";break;
                    default:
                        return;
                }

                // initMouseEvent(type, canBubble, cancelable, view, clickCount,
                //                screenX, screenY, clientX, clientY, ctrlKey,
                //                altKey, shiftKey, metaKey, button, relatedTarget);

                var simulatedEvent = window.createEvent("MouseEvent");
                simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0 /*left*/, null);

                first.target.dispatchEvent(simulatedEvent);
                //event.preventDefault();
            };

            window.addEventListener("touchstart", handler, true);
            window.addEventListener("touchmove", handler, true);
            window.addEventListener("touchend", handler, true);
            window.addEventListener("touchcancel", handler, true);

            //
            // BLOCK RIGHT CLICK
            //

            window.oncontextmenu = function (e) {
                e.preventDefault();return false;
            };
        }
    }, {
        key: 'random',
        value: function random(min, max) {
            return Math.random() * (max - min) + min;
        }
    }, {
        key: 'loop',
        value: function loop(objects, callback) {
            for (var i in objects) {
                var obj = objects[i];

                callback(obj);
            }
        }
    }]);

    return mcec;
}();

module.exports = new mcec();

}).call(this,require('_process'))

},{"_process":51}]},{},[4])

//# sourceMappingURL=compiled.js.map
