/**
 * @depends nothing
 * @name core.console
 * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
 */
/**
 * Console Emulator
 * We have to convert arguments into arrays, and do this explicitly as webkit (chrome) hates function references, and arguments cannot be passed as is
 * @version 1.0.3
 * @date August 31, 2010
 * @since 0.1.0-dev, December 01, 2009
 * @package jquery-sparkle {@link http://balupton.com/projects/jquery-sparkle}
 * @author Benjamin "balupton" Lupton {@link http://balupton.com}
 * @copyright (c) 2009-2010 Benjamin Arthur Lupton {@link http://balupton.com}
 * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
 */
// Check to see if console exists, if not define it
typeof window.console == "undefined" && (window.console = {}), typeof window.console.emulated == "undefined" && (typeof window.console.log == "function" ? window.console.hasLog = !0 : (typeof window.console.log == "undefined" && (window.console.log = function() {}), window.console.hasLog = !1), typeof window.console.debug == "function" ? window.console.hasDebug = !0 : (typeof window.console.debug == "undefined" && (window.console.debug = window.console.hasLog ?
function() {
  var e = ["console.debug:"];
  for (var t = 0; t < arguments.length; t++) e.push(arguments[t]);
  window.console.log.apply(window.console, e)
} : function() {}), window.console.hasDebug = !1), typeof window.console.warn == "function" ? window.console.hasWarn = !0 : (typeof window.console.warn == "undefined" && (window.console.warn = window.console.hasLog ?
function() {
  var e = ["console.warn:"];
  for (var t = 0; t < arguments.length; t++) e.push(arguments[t]);
  window.console.log.apply(window.console, e)
} : function() {}), window.console.hasWarn = !1), typeof window.console.error == "function" ? window.console.hasError = !0 : (typeof window.console.error == "undefined" && (window.console.error = function() {
  var e = "An error has occured.";
  if (window.console.hasLog) {
    var t = ["console.error:"];
    for (var n = 0; n < arguments.length; n++) t.push(arguments[n]);
    window.console.log.apply(window.console, t), e = "An error has occured. More information is available in your browser's javascript console."
  }
  for (var n = 0; n < arguments.length; ++n) {
    if (typeof arguments[n] != "string") break;
    e += "\n" + arguments[n]
  }
  throw typeof Error != "undefined" ? new Error(e) : e
}), window.console.hasError = !1), typeof window.console.trace == "function" ? window.console.hasTrace = !0 : (typeof window.console.trace == "undefined" && (window.console.trace = function() {
  window.console.error("console.trace does not exist")
}), window.console.hasTrace = !1), window.console.emulated = !0), String.prototype.trim = String.prototype.trim ||
function() {
  return this.replace(/^\s+|\s+$/g, "")
}, String.prototype.strip = String.prototype.strip ||
function(value, regex) {
  value = String(value);
  var str = this;
  return value.length && (!regex && !0 && (value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1")), str = str.replace(eval("/^" + value + "+|" + value + "+$/g"), "")), String(str)
}, String.prototype.stripLeft = String.prototype.stripLeft ||
function(value, regex) {
  value = String(value);
  var str = this;
  return value.length && (!regex && !0 && (value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1")), str = str.replace(eval("/^" + value + "+/g"), "")), String(str)
}, String.prototype.stripRight = String.prototype.stripRight ||
function(value, regex) {
  value = String(value);
  var str = this;
  return value.length && (!regex && !0 && (value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1")), str = str.replace(eval("/" + value + "+$/g"), "")), String(str)
}, String.prototype.toInt = String.prototype.toInt ||
function() {
  return parseInt(this, 10)
}, String.prototype.wrap = String.prototype.wrap ||
function(e, t) {
  return e + this + t
}, String.prototype.wrapSelection = String.prototype.wrapSelection ||
function(e, t, n, r) {
  if (typeof n == "undefined" || n === null) n = this.length;
  if (typeof r == "undefined" || r === null) r = this.length;
  return this.substring(0, n) + e + this.substring(n, r) + t + this.substring(r)
}, String.prototype.toSlug = String.prototype.toSlug ||
function() {
  return this.toLowerCase().replace(/[\s_]/g, "-").replace(/[^-a-z0-9]/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "")
}, String.prototype.queryStringToJSON = String.prototype.queryStringToJSON ||
function() {
  var params = String(this);
  params = params.substring(params.indexOf("?") + 1), params = params.replace(/\+/g, "%20");
  if (params.substring(0, 1) === "{" && params.substring(params.length - 1) === "}") return eval(decodeURIComponent(params));
  params = params.split(/\&(amp\;)?/);
  var json = {};
  for (var i = 0, n = params.length; i < n; ++i) {
    var param = params[i] || null;
    if (param === null) continue;
    param = param.split("=");
    if (param === null) continue;
    var key = param[0] || null;
    if (key === null) continue;
    if (typeof param[1] == "undefined") continue;
    var value = param[1];
    key = decodeURIComponent(key), value = decodeURIComponent(value);
    try {
      value = eval(value)
    } catch (e) {}
    var keys = key.split(".");
    if (keys.length === 1) json[key] = value;
    else {
      var path = "",
          cmd = "";
      $.each(keys, function(ii, key) {
        path += '["' + key.replace(/"/g, '\\"') + '"]', jsonCLOSUREGLOBAL = json, cmd = "if ( typeof jsonCLOSUREGLOBAL" + path + ' === "undefined" ) jsonCLOSUREGLOBAL' + path + " = {}", eval(cmd), json = jsonCLOSUREGLOBAL, delete jsonCLOSUREGLOBAL
      }), jsonCLOSUREGLOBAL = json, valueCLOSUREGLOBAL = value, cmd = "jsonCLOSUREGLOBAL" + path + " = valueCLOSUREGLOBAL", eval(cmd), json = jsonCLOSUREGLOBAL, delete jsonCLOSUREGLOBAL, delete valueCLOSUREGLOBAL
    }
  }
  return json
}, function(e) {
  e.fn.binder = e.fn.binder ||
  function(t, n, r) {
    var i = e(this);
    return r || !1 ? i.bind(t, n, r) : (r = n, i.bind(t, r)), i
  }, e.fn.once = e.fn.once ||
  function(t, n, r) {
    var i = e(this);
    return r || !1 ? (i.unbind(t, r), i.bind(t, n, r)) : (r = n, i.unbind(t, r), i.bind(t, r)), i
  }, e.fn.enter = e.fn.enter ||
  function(t, n) {
    return e(this).binder("enter", t, n)
  }, e.event.special.enter = e.event.special.enter || {
    setup: function(t, n) {
      e(this).bind("keypress", e.event.special.enter.handler)
    },
    teardown: function(t) {
      e(this).unbind("keypress", e.event.special.enter.handler)
    },
    handler: function(t) {
      var n = e(this),
          r = t.keyCode === 13;
      if (r) return t.type = "enter", e.event.handle.apply(this, [t]), !0;
      return
    }
  }, e.fn.cancel = e.fn.cancel ||
  function(t, n) {
    return e(this).binder("cancel", t, n)
  }, e.event.special.cancel = e.event.special.cancel || {
    setup: function(t, n) {
      e(this).bind("keyup", e.event.special.cancel.handler)
    },
    teardown: function(t) {
      e(this).unbind("keyup", e.event.special.cancel.handler)
    },
    handler: function(t) {
      var n = e(this),
          r = typeof t.DOM_VK_ESCAPE == "undefined" ? !1 : t.DOM_VK_ESCAPE,
          i = t.keyCode === 27;
      if (r || i) return t.type = "cancel", e.event.handle.apply(this, [t]), !0;
      return
    }
  }, e.fn.lastclick = e.fn.lastclick ||
  function(t, n) {
    return e(this).binder("lastclick", t, n)
  }, e.event.special.lastclick = e.event.special.lastclick || {
    setup: function(t, n) {
      e(this).bind("click", e.event.special.lastclick.handler)
    },
    teardown: function(t) {
      e(this).unbind("click", e.event.special.lastclick.handler)
    },
    handler: function(t) {
      var n = function() {
          var t = this,
              n = e(t),
              r = n.data("lastclick-timeout") || !1;
          r && clearTimeout(r), r = !1, n.data("lastclick-timeout", r)
          },
          r = function(t) {
          var r = this;
          n.call(r);
          var i = e(r);
          i.data("lastclick-clicks", (i.data("lastclick-clicks") || 0) + 1);
          var s = setTimeout(function() {
            var s = i.data("lastclick-clicks");
            n.apply(r, [t]), i.data("lastclick-clicks", 0), t.type = "lastclick", e.event.handle.apply(r, [t, s])
          }, 500);
          i.data("lastclick-timeout", s)
          };
      r.apply(this, [t])
    }
  }, e.fn.firstclick = e.fn.firstclick ||
  function(t, n) {
    return e(this).binder("firstclick", t, n)
  }, e.event.special.firstclick = e.event.special.firstclick || {
    setup: function(t, n) {
      e(this).bind("click", e.event.special.firstclick.handler)
    },
    teardown: function(t) {
      e(this).unbind("click", e.event.special.firstclick.handler)
    },
    handler: function(t) {
      var n = function(t) {
          var n = this,
              r = e(n),
              i = r.data("firstclick-timeout") || !1;
          i && clearTimeout(i), i = !1, r.data("firstclick-timeout", i)
          },
          r = function(t) {
          var r = this;
          n.call(r);
          var i = e(r);
          i.data("firstclick-clicks", (i.data("firstclick-clicks") || 0) + 1), i.data("firstclick-clicks") === 1 && (t.type = "firstclick", e.event.handle.apply(r, [t]));
          var s = setTimeout(function() {
            n.apply(r, [t]), i.data("firstclick-clicks", 0)
          }, 500);
          i.data("firstclick-timeout", s)
          };
      r.apply(this, [t])
    }
  }, e.fn.singleclick = e.fn.singleclick ||
  function(t, n) {
    return e(this).binder("singleclick", t, n)
  }, e.event.special.singleclick = e.event.special.singleclick || {
    setup: function(t, n) {
      e(this).bind("click", e.event.special.singleclick.handler)
    },
    teardown: function(t) {
      e(this).unbind("click", e.event.special.singleclick.handler)
    },
    handler: function(t) {
      var n = function(t) {
          var n = this,
              r = e(n),
              i = r.data("singleclick-timeout") || !1;
          i && clearTimeout(i), i = !1, r.data("singleclick-timeout", i)
          },
          r = function(t) {
          var r = this;
          n.call(r);
          var i = e(r);
          i.data("singleclick-clicks", (i.data("singleclick-clicks") || 0) + 1);
          var s = setTimeout(function() {
            var s = i.data("singleclick-clicks");
            n.apply(r, [t]), i.data("singleclick-clicks", 0), s === 1 && (t.type = "singleclick", e.event.handle.apply(r, [t]))
          }, 500);
          i.data("singleclick-timeout", s)
          };
      r.apply(this, [t])
    }
  }
}(jQuery), function(e) {
  e.fn.opacityFix = e.fn.opacityFix ||
  function() {
    var t = e(this),
        n = t.css("background-color");
    if (n && n !== "rgba(0, 0, 0, 0)") return this;
    var r = t;
    while (r.inDOM()) {
      r = r.parent(), n = r.css("background-color");
      if (n && n !== "rgba(0, 0, 0, 0)") {
        t.css("background-color", n);
        break
      }
    }
    return this
  }, e.fn.parentsAndSelf = e.fn.parentsAndSelf ||
  function(t) {
    var n = e(this);
    return n.parents(t).andSelf().filter(t)
  }, e.fn.findAndSelf = e.fn.findAndSelf ||
  function(t) {
    var n = e(this);
    return n.find(t).andSelf().filter(t)
  }, e.fn.firstInput = e.fn.firstInput ||
  function() {
    var t = e(this);
    return t.findAndSelf(":input").filter(":first")
  }, e.fn.choose = e.fn.choose ||
  function(t) {
    var n = e(this);
    if (typeof t == "undefined") t = n.val();
    else if (n.val() !== t) return this;
    switch (!0) {
    case this.is("option"):
      n.parents("select:first").choose(t);
      break;
    case n.is(":checkbox"):
      n.attr("checked", !0);
      break;
    case n.is(":radio"):
      n.attr("checked", !0);
      break;
    case n.is("select"):
      n.val(t);
      break;
    default:
    }
    return this
  }, e.fn.unchoose = e.fn.unchoose ||
  function() {
    var t = e(this);
    switch (!0) {
    case t.is("option"):
      t.parents(":select:first").unchoose();
      break;
    case t.is(":checkbox"):
      t.attr("checked", !1);
      break;
    case t.is(":radio"):
      t.attr("checked", !1);
      break;
    case t.is("select"):
      t.val(t.find("option:first").val());
      break;
    default:
    }
    return this
  }, e.fn.wouldSubmit = e.fn.wouldSubmit ||
  function() {
    var t = e(this).findAndSelf(":input"),
        n = !0;
    if (!t.length || !t.attr("name") && !0 || t.is(":radio,:checkbox") && !t.is(":selected,:checked")) n = !1;
    return n
  }, e.fn.values = e.fn.values ||
  function() {
    var t = e(this).findAndSelf(":input"),
        n = {};
    return t.each(function() {
      var t = e(this),
          r = t.attr("name") || null,
          i = t.val();
      if (!t.wouldSubmit()) return !0;
      r.indexOf("[]") !== -1 ? (typeof n[r] == "undefined" && (n[r] = []), n[r].push(i)) : n[r] = i
    }), n
  }, e.fn.submitForm = e.fn.submitForm ||
  function() {
    var t = e(this),
        n = t.parentsAndSelf("form:first").trigger("submit");
    return t
  }, e.fn.inDOM = e.fn.inDOM ||
  function() {
    var t = e(this).parent().parent();
    return t.size() && (t.height() || t.width())
  }, e.fn.valWrap = e.fn.valWrap ||
  function(t, n) {
    var r = e(this);
    return r.val(r.val().wrap(t, n))
  }, e.fn.valWrapSelection = e.fn.valWrapSelection ||
  function(t, n, r, i) {
    var s = e(this),
        o = s.get(0);
    t = t || "", n = n || "";
    if (r || i) s.val(s.val().wrapSelection(t, n, r, i));
    else {
      var r = o.selectionStart,
          i = o.selectionEnd;
      if (document.selection) {
        o.focus();
        var u = document.selection.createRange();
        u.text = t + u.text + n
      } else {
        var a = o.scrollTop;
        s.val(s.val().wrapSelection(t, n, r, i)), o.focus(), o.selectionStart = r + t.length, o.selectionEnd = i + t.length, o.scrollTop = a
      }
    }
    return s
  }, e.fn.giveFocus = e.fn.giveFocus ||
  function() {
    var t = e(this),
        n = ":input:visible:first";
    return t.findAndSelf(n).focus(), this
  }, e.fn.giveTarget = e.fn.giveTarget ||
  function() {
    var t = e(this);
    return e(".target").removeClass("target"), t.addClass("target"), this
  }, e.fn.highlight = e.fn.highlight ||
  function(t) {
    return e(this).effect("highlight", {}, t || 3e3)
  }, e.fn.htmlAndSelf = e.fn.htmlAndSelf ||
  function() {
    return e(this).attr("outerHTML")
  }, e.fn.preventDefaultOnClick = e.fn.preventDefaultOnClick ||
  function() {
    return e(this).click(function(e) {
      return e.preventDefault(), !1
    })
  }, e.fn.attemptTypeChangeTo = e.fn.attemptTypeChangeTo ||
  function(t) {
    var n = e(this),
        r = !1,
        i = n.get(0),
        s = i.type;
    return t === s ? r = !0 : n.is("input") && (e.browser.msie || (i.type = t, i.type !== s && (r = !0))), r
  }
}(jQuery), function(e) {
  e.prepareObject = e.prepareObject ||
  function(t, n) {
    var r = {},
        i = "$.prepareObject.skipValue";
    e.extend(r, t || {}), e.intercept(!0, r, n);
    var s = arguments;
    return s[0] = s[1] = i, e.each(s, function(t, n) {
      if (n === i) return !0;
      e.intercept(!0, r, n)
    }), r
  }, e.intercept = e.intercept ||
  function() {
    var t = arguments,
        n, r = !1,
        i = !1,
        s = "$.intercept.skipValue";
    typeof t[0] == "boolean" ? (r = t[0], t[0] = s, typeof t[1] == "boolean" ? (i = t[1], t[1] = s, i ? n = {} : (n = t[2], t[2] = s)) : (n = t[1], t[1] = s)) : (n = t[0], t[0] = s);
    var o = {};
    return e.each(n, function(e) {
      o[e] = !0
    }), r ? e.each(t, function(t, r) {
      if (r === s) return !0;
      e.each(r, function(t, r) {
        if (typeof o[t] == "undefined") return !0;
        typeof r == "object" && !(r.test || !1 || !1) ? e.extend(n[t], r || {}) : n[t] = r
      })
    }) : e.each(t, function(t, r) {
      e.each(r, function(t, r) {
        if (typeof o[t] == "undefined") return !0;
        typeof r == "object" && !(r.test || !1 || !1) ? e.intercept(!0, n[t], r) : n[t] = r
      })
    }), n
  }, e.promise = e.promise ||
  function(t) {
    var n = t.object || this;
    typeof n[t.handlers] == "undefined" && (n[t.handlers] = []), typeof n[t.flag] == "undefined" && (n[t.flag] = !1);
    var r = n[t.handlers],
        i = n[t.flag],
        s = t.arguments[0];
    switch (typeof s) {
    case "boolean":
      i = n[t.flag] = s;
    case "undefined":
      i && r.length && (e.each(r, function(e, t) {
        t.call(n)
      }), n[t.handlers] = []);
      break;
    case "function":
      i ? s.call(n) : n[t.handlers].push(s);
      break;
    default:
      window.console.error("Unknown arguments for $.promise", [this, arguments])
    }
    return i
  }
}(jQuery), function(e) {
  !e.ScrollTo && !0 ? (e.ScrollTo = {
    config: {
      duration: 400,
      easing: "swing",
      callback: undefined,
      durationMode: "each"
    },
    configure: function(t) {
      var n = e.ScrollTo;
      return e.extend(n.config, t || {}), this
    },
    scroll: function(t, n) {
      var r = e.ScrollTo,
          i = t.pop(),
          s = i.$container,
          o = i.$target,
          u = e("<span/>").css({
          position: "absolute",
          top: "0px",
          left: "0px"
        }),
          a = s.css("position");
      s.css("position", "relative"), u.appendTo(s);
      var f = u.offset().top,
          l = o.offset().top,
          c = l - f;
      u.remove(), s.css("position", a);
      var h = function(e) {
          return t.length === 0 ? typeof n.callback == "function" && n.callback.apply(this, [e]) : r.scroll(t, n), !0
          };
      return s.animate({
        scrollTop: c + "px"
      }, n.duration, n.easing, h), !0
    },
    fn: function(t) {
      var n = e.ScrollTo,
          r = e(this);
      if (r.length === 0) return this;
      var i = r.parent(),
          s = [];
      config = e.extend({}, n.config, t);
      while (i.length === 1 && !i.is("body") && i.get(0) !== document) {
        var o = i.get(0);
        i.css("overflow-y") !== "visible" && o.scrollHeight !== o.clientHeight && (s.push({
          $container: i,
          $target: r
        }), r = i), i = i.parent()
      }
      return s.push({
        $container: e(e.browser.msie ? "html" : "body"),
        $target: r
      }), config.durationMode === "all" && (config.duration /= s.length), n.scroll(s, config), this
    },
    construct: function(t) {
      var n = e.ScrollTo;
      return e.fn.ScrollTo = n.fn, n.config = e.extend(n.config, t), this
    }
  }, e.ScrollTo.construct()) : window.console.warn("$.ScrollTo has already been defined...")
}(jQuery), function(e) {
  !e.History && !0 ? (e.History = {
    options: {
      debug: !1
    },
    state: "",
    $window: null,
    $iframe: null,
    handlers: {
      generic: [],
      specific: {}
    },
    extractHash: function(e) {
      var t = e.replace(/^[^#]*#/, "").replace(/^#+|#+$/, "");
      return t
    },
    getState: function() {
      var t = e.History;
      return t.state
    },
    setState: function(t) {
      var n = e.History;
      return t = n.extractHash(t), n.state = t, n.state
    },
    getHash: function() {
      var t = e.History,
          n = t.extractHash(window.location.hash || location.hash);
      return n
    },
    setHash: function(t) {
      var n = e.History;
      return t = n.extractHash(t), typeof window.location.hash != "undefined" ? window.location.hash !== t && (window.location.hash = t) : location.hash !== t && (location.hash = t), t
    },
    go: function(t) {
      var n = e.History;
      t = n.extractHash(t);
      var r = n.getHash(),
          i = n.getState();
      return t !== r ? n.setHash(t) : (t !== i && n.setState(t), n.trigger()), !0
    },
    hashchange: function(t) {
      var n = e.History,
          r = n.getHash();
      return n.go(r), !0
    },
    bind: function(t, n) {
      var r = e.History;
      return n ? (typeof r.handlers.specific[t] == "undefined" && (r.handlers.specific[t] = []), r.handlers.specific[t].push(n)) : (n = t, r.handlers.generic.push(n)), !0
    },
    trigger: function(t) {
      var n = e.History;
      typeof t == "undefined" && (t = n.getState());
      var r, i, s, o;
      if (typeof n.handlers.specific[t] != "undefined") {
        o = n.handlers.specific[t];
        for (r = 0, i = o.length; r < i; ++r) s = o[r], s(t)
      }
      o = n.handlers.generic;
      for (r = 0, i = o.length; r < i; ++r) s = o[r], s(t);
      return !0
    },
    construct: function() {
      var t = e.History;
      return e(document).ready(function() {
        t.domReady()
      }), !0
    },
    configure: function(t) {
      var n = e.History;
      return n.options = e.extend(n.options, t), !0
    },
    domReadied: !1,
    domReady: function() {
      var t = e.History;
      if (t.domRedied) return;
      return t.domRedied = !0, t.$window = e(window), t.$window.bind("hashchange", this.hashchange), setTimeout(t.hashchangeLoader, 200), !0
    },
    nativeSupport: function(t) {
      t = t || e.browser;
      var n = t.version,
          r = parseInt(n, 10),
          i = n.split(/[^0-9]/g),
          s = parseInt(i[0], 10),
          o = parseInt(i[1], 10),
          u = parseInt(i[2], 10),
          a = !1;
      if ((t.msie || !1) && r >= 8) a = !0;
      else if ((t.webkit || !1) && r >= 528) a = !0;
      else if (t.mozilla || !1) s > 1 ? a = !0 : s === 1 && (o > 9 ? a = !0 : o === 9 && u >= 2 && (a = !0));
      else if (t.opera || !1) s > 10 ? a = !0 : s === 10 && o >= 60 && (a = !0);
      return a
    },
    hashchangeLoader: function() {
      var t = e.History,
          n = t.nativeSupport();
      if (!n) {
        var r;
        if (e.browser.msie) {
          t.$iframe = e('<iframe id="jquery-history-iframe" style="display: none;"></$iframe>').prependTo(document.body)[0], t.$iframe.contentWindow.document.open(), t.$iframe.contentWindow.document.close();
          var i = !1;
          r = function() {
            var e = t.getHash(),
                n = t.getState(),
                r = t.extractHash(t.$iframe.contentWindow.document.location.hash);
            n !== e ? (i || (t.$iframe.contentWindow.document.open(), t.$iframe.contentWindow.document.close(), t.$iframe.contentWindow.document.location.hash = e), i = !1, t.$window.trigger("hashchange")) : n !== r && (i = !0, t.setHash(r))
          }
        } else r = function() {
          var e = t.getHash(),
              n = t.getState();
          n !== e && t.$window.trigger("hashchange")
        };
        setInterval(r, 200)
      } else {
        var s = t.getHash();
        s && t.$window.trigger("hashchange")
      }
      return !0
    }
  }, e.History.construct()) : window.console.warn("$.History has already been defined...")
}(jQuery), function(e) {
  e(document.body).addClass("js"), !e.Ajaxy && !0 ? (e.Ajaxy = {
    options: {
      root_url: "",
      base_url: "",
      relative_url: "",
      request_match: !1,
      no_log_class: "ajaxy-no_log",
      redirect: !1,
      relative_as_base: !0,
      support_text: !0,
      analytics: !0,
      auto_ajaxify: !0,
      auto_ajaxify_documentReady: !0,
      auto_sparkle_documentReady: !0,
      add_sparkle_extension: !0,
      scrollto_content: !1,
      scrollto_options: {
        duration: 800,
        easing: "swing"
      },
      anchor_param_name: "anchor",
      track_all_anchors: !1,
      track_all_internal_links: !1,
      debug: !0,
      aliases: [
        ["", "/"]
      ],
      Controllers: {},
      method: "post"
    },
    defaults: {
      Controller: {
        classname: null,
        selector: null,
        matches: null,
        controller: null,
        response: null,
        request: null,
        error: null,
        refresh: null
      },
      Action: {
        propagate: !0,
        action: null,
        state: null,
        State: null,
        controller: null,
        Controller: null,
        forward: function() {
          window.console.error("Ajaxy.Action.forward: Forward never defined.", [this, arguments]), window.console.trace()
        },
        trigger: function() {
          window.console.error("Ajaxy.Action.trigger: Trigger never defined.", [this, arguments]), window.console.trace()
        },
        stopPropagation: function() {
          this.propagate = !1
        },
        preventDefault: function() {
          this.propagate = !1
        },
        documentReady: function(t, n) {
          var r = e.Ajaxy,
              i = this;
          typeof n != "object" && (n = {});
          var s = {};
          switch (i.action) {
          case "refresh":
            s.auto_ajaxify_documentReady = s.auto_sparkle_documentReady = !1;
            break;
          default:
          }
          var o = e.extend(!0, {}, s, n);
          return r.stateCompleted(i.State, t, o)
        }
      },
      State: {
        mode: null,
        el: null,
        isLink: !1,
        isForm: !1,
        anchor: "",
        querystring: "",
        state: "",
        hash: "",
        location: "",
        locationShort: "",
        raw: {
          anchor: "",
          querystring: "",
          hash: "",
          state: "",
          location: "",
          locationShort: ""
        },
        vanilla: {
          anchor: "",
          querystring: "",
          hash: "",
          state: "",
          location: "",
          locationShort: ""
        },
        clean: {
          anchor: "",
          querystring: "",
          hash: "",
          state: "",
          location: "",
          locationShort: ""
        },
        controller: null,
        Request: {
          url: null,
          data: {}
        },
        Response: {
          callback: null,
          data: {}
        },
        Error: {
          callback: null,
          data: {}
        },
        User: {
          data: {}
        }
      }
    },
    isConstructed: !1,
    aliases: {},
    postpone: !1,
    Controllers: {},
    States: {},
    ignoredStates: {},
    currentState: {},
    ajaxQueue: [],
    data: {},
    redirected: !1,
    get: function(t) {
      var n = e.Ajaxy;
      return typeof n.data[t] != "undefined" ? n.data[t] : undefined
    },
    set: function(t, n) {
      var r = e.Ajaxy;
      typeof n == "undefined" ? typeof t == "object" && r.data.extend(!0, t) : r.data[t] = n
    },
    ensureString: function(e) {
      var t = "";
      switch (typeof e) {
      case "number":
      case "string":
        t = String(e);
        break;
      default:
        t = ""
      }
      return t
    },
    extractRelativeUrl: function(t, n) {
      var r = e.Ajaxy,
          i = e.History;
      typeof n == "undefined" && (n = !0), t = r.ensureString(t);
      var s = t.stripLeft(r.options.root_url).stripLeft(r.options.base_url);
      return n && s === "/" && (s = ""), s
    },
    extractState: function(t) {
      var n = e.Ajaxy,
          r = n.extractRelativeUrl(t, !1);
      return r
    },
    extractHash: function(t) {
      var n = e.Ajaxy,
          t = n.extractState(t),
          r = t.match(/^([^#?]*)/) || "";
      if (r && r.length || !1) r = r[1] || "";
      return r
    },
    extractAnchor: function(t) {
      var n = e.Ajaxy,
          t = n.extractState(t),
          r = n.options.anchor_param_name,
          i = t.replace(/[^#]+#/g, "#").match(/#+([^#\?]*)/) || "";
      if (i && i.length || !1) i = i[1] || "";
      i === t && (i = "");
      if (!i) {
        var i = t.match(RegExp(r + "=([a-zA-Z0-9-_]+)")) || "";
        if (i && i.length || !1) i = i[1] || ""
      }
      return i
    },
    extractQuerystring: function(t) {
      var n = e.Ajaxy,
          t = n.extractState(t),
          r = t.match(/\?(.*)$/) || "";
      if (r && r.length || !1) r = r[1] || "";
      return r
    },
    track: function(t) {
      var n = e.Ajaxy;
      if (typeof pageTracker != "undefined") {
        var r = t.vanilla.locationShort;
        n.options.debug && window.console.debug("Ajaxy.track", [this, arguments], [r]), pageTracker._trackPageview(r)
      }
      return !0
    },
    matches: function(t, n) {
      var r = e.Ajaxy,
          i = !1;
      switch (typeof t) {
      case "function":
      case "object":
        if (t.test || !1 || !1) {
          i = t.test(n);
          break
        };
      case "array":
        e.each(t, function(e, t) {
          i = r.matches(t, n);
          if (i) return !1
        });
        break;
      case "number":
      case "string":
        i = String(t) === n
      }
      return i
    },
    match: function(t) {
      var n = e.Ajaxy,
          r = !1;
      return e.each(n.Controllers, function(e, i) {
        var s = n.matches(i.matches || !1, t);
        if (s) return r = e, !1
      }), r
    },
    getController: function(t, n) {
      var r = e.Ajaxy,
          i = undefined,
          s = typeof(t || undefined);
      return s !== "number" && s !== "string" || typeof r.Controllers[t] == "undefined" ? s === "object" && typeof t.controller == "string" ? i = r.getController(t.controller, n) : n ? i = e.extend(!0, {}, r.defaults.Controller) : n !== !1 && (window.console.error("Ajaxy.getController: Controller does not exist", [this, arguments]), window.console.trace()) : i = r.Controllers[t], i
    },
    getControllerAction: function(t, n, r) {
      var i = e.Ajaxy,
          s = undefined,
          o = i.getController(t, !1);
      if (typeof o == "undefined") r !== !1 && (window.console.error("Ajaxy.getControllerAction: Controller does not exist", [this, arguments]), window.console.trace());
      else {
        var u = typeof(o[n] || undefined);
        u === "function" || u === "object" ? s = o[n] : r !== !1 && (window.console.error("Ajaxy.getControllerAction: Controller Action does not exist", [this, arguments]), window.console.trace())
      }
      return s
    },
    bind: function() {
      var t = e.Ajaxy;
      return t.addControllers.apply(this, arguments)
    },
    addController: function(t, n) {
      var r = e.Ajaxy;
      return typeof n == "undefined" && typeof t == "object" ? n = t : typeof t == "string" && typeof n == "function" ? n = {
        controller: t,
        response: n
      } : typeof t == "string" && typeof n == "object" ? typeof n.controller == "undefined" && (n.controller = t) : (window.console.error("Ajaxy.addController: Unknown Controller Format", [this, arguments]), window.console.trace()), typeof r.Controllers[n.controller] != "undefined" ? (window.console.error("Ajaxy.addController: Controller [" + n.controller + "] has already been bound.", [this, arguments], [n]), window.console.trace(), !1) : (n = e.prepareObject(r.defaults.Controller, n), !n.selector && n.classname && (n.selector = "." + n.classname), r.Controllers[n.controller] = n, r.options.auto_ajaxify && r.ajaxifyController(n), n)
    },
    addControllers: function(t) {
      var n = e.Ajaxy;
      return typeof t == "object" && typeof t.controller == "string" ? window.console.warn("Ajaxy.addControllers: It seems you intended to call addController instead.", [this, arguments]) : (typeof t == "object" || typeof t == "array") && e.each(t, function(e, t) {
        n.addController(e, t)
      }), !0
    },
    getState: function(t, n, r) {
      var i = e.Ajaxy;
      t = i.extractState((t || {}).state || t);
      var s = undefined,
          o = typeof(t || undefined),
          u = o === "number" || o === "string";
      return u && typeof i.States[t] != "undefined" ? s = i.States[t] : n ? s = i.createState(t) : n !== !1 && (r || !1) && (window.console.error("Ajaxy.getState: State does not exist", [this, arguments]), window.console.trace()), s && i.rebuildState(s), s
    },
    createState: function(t) {
      var n = e.Ajaxy;
      return t = n.extractState((t || {}).state || t), State = e.extend(!0, {}, n.defaults.State, {
        state: t
      }), n.rebuildState(State), State
    },
    buildState: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      n.options.debug && window.console.debug("Ajaxy.buildState:", [this, arguments]), typeof t == "string" && (t = {
        url: t
      });
      var i = n.getState(!1, !0);
      e.extend(!0, i, t), !i.state && !0 && (i.url || !1) && (i.state = n.extractState(i.url)), i.state || (i.state = "/");
      if (i.el) {
        var s = e(i.el);
        s.is("form") ? (i.isForm = !0, i.isLink = !1) : s.is("a") ? (i.isForm = !1, i.isLink = !0) : window.console.warn("Ajaxy.buildState: Unknown element type passed.", [this, arguments], [i.el]), delete s
      }
      n.rebuildState(i);
      if (i.anchor === i.state || i.anchor === i.hash) i.anchor = "";
      return !i.hash && !0 && !i.raw.querystring && (i.anchor || "") && (i.hash = n.currentState.hash || "", i.querystring = i.raw.querystring, n.rebuildState(i)), (!i.state || !i.hash && !i.raw.querystring) && window.console.warn("Ajaxy.go: No state or (hash and querystring).", [this, arguments], [i]), i.mode || (i.isLink && n.postpone ? i.anchor && !i.raw.querystring && i.hash === n.options.relative_url ? i.mode = "ignore" : i.mode = "postpone" : i.isForm ? i.mode = "silent" : i.mode = "default"), i
    },
    rebuildState: function(t, n) {
      var r = e.Ajaxy,
          i = r.extractState(t.state),
          s = r.ensureString(t.hash) || r.extractHash(i),
          o = r.ensureString(t.anchor) || r.extractAnchor(i),
          u = r.ensureString(t.querystring) || r.extractQuerystring(i),
          a = r.options.base_url,
          f = r.options.root_url,
          l = r.options.anchor_param_name;
      if (o) {
        var c = u.queryStringToJSON();
        c.anchor = o, u = unescape(e.param(c)), delete c
      }
      return t.anchor = o, t.querystring = u, t.hash = s, t.state = s + (u ? "?" + u : ""), t.locationShort = a + "#" + t.state, t.location = f + t.locationShort, t.raw.anchor = "", t.raw.querystring = t.querystring.replace(RegExp("&?" + l + "=[a-zA-Z0-9-_]+", "gi"), "").replace(/^&+/g, ""), t.raw.hash = t.hash, t.raw.state = t.hash + (t.raw.querystring ? "?" + t.raw.querystring : ""), t.raw.locationShort = a + (t.raw.state ? "#" + t.raw.state : ""), t.raw.location = f + t.raw.locationShort, t.vanilla.anchor = t.anchor, t.vanilla.querystring = t.raw.querystring, t.vanilla.hash = t.vanilla.anchor, t.vanilla.state = t.vanilla.anchor, t.vanilla.locationShort = a + t.raw.hash + (t.vanilla.querystring ? "?" + t.vanilla.querystring : "") + (t.vanilla.anchor ? "#" + t.vanilla.anchor : ""), t.vanilla.location = f + t.vanilla.locationShort, t.clean.anchor = "", t.clean.querystring = t.raw.querystring, t.clean.hash = "", t.clean.state = "", t.clean.locationShort = a + t.hash + (t.clean.querystring ? "?" + t.clean.querystring : ""), t.clean.location = f + t.clean.locationShort, t
    },
    storeState: function(t) {
      var n = e.Ajaxy,
          r = !0,
          i = typeof(t || undefined);
      return n.rebuildState(t), i === "object" && typeof t.state == "string" ? r = n.States[t.state] = t : (window.console.error("Ajaxy.storeState: Unknown State Format", [this, arguments]), window.console.trace(), r = !1), r
    },
    statesEquivalent: function(t, n) {
      var r = e.Ajaxy,
          i = !1;
      if (t.isForm || n.isForm) i = !1;
      else if (t.state || !1) {
        var s = r.aliases[t.hash] || [t.hash];
        e.each(s, function(e, r) {
          if (r === n.hash && t.raw.querystring === n.raw.querystring) return i = !0, !1
        })
      }
      return i
    },
    stateCompleted: function(t, n, r) {
      var i = e.Ajaxy;
      typeof t != "object" && (t = {});
      if (!(n instanceof jQuery) || !n.length) n = e(document.body);
      typeof r != "object" && (r = {});
      var s = e.extend({}, i.options, r);
      if (s.auto_sparkle_documentReady && e.Sparkle || !1) s.add_sparkle_extension && (s.auto_ajaxify_documentReady = !1), n.sparkle();
      s.auto_ajaxify_documentReady && n.ajaxify();
      var o = t.anchor || !1;
      if (o) {
        t.anchor = !1;
        var u = e("#" + o).giveTarget();
        u.ScrollTo(s.scrollto_options)
      } else s.scrollto_content && !n.is("body") && n.ScrollTo(s.scrollto_options);
      return !0
    },
    refresh: function() {
      var t = e.Ajaxy,
          n = e.History;
      return t.go(n.getHash())
    },
    go: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      n.options.debug && window.console.debug("Ajaxy.go:", [this, arguments]);
      var i = n.buildState(t);
      n.storeState(i);
      switch (i.mode) {
      case "silent":
        n.stateChange(i.state);
        break;
      case "ignore":
        n.ignoredStates[i.vanilla.state] = i, document.location = i.vanilla.location;
        break;
      case "postpone":
        document.location = i.location;
        break;
      case "default":
      default:
        r.go(i.state)
      }
      return !0
    },
    trigger: function(t, n, r) {
      var i = e.Ajaxy;
      i.options.debug && window.console.debug("Ajaxy.trigger: ", [this, arguments]);
      var s, o, u, a = !0;
      t || (window.console.warn("Ajaxy.trigger: No controller was passed, reset to _generic.", [this, arguments]), t = "_generic");
      var f = i.getController(t),
          l = i.getControllerAction(t, n, !1),
          c = i.getState(r, !0),
          r = c.state || undefined;
      if (typeof f == "undefined") return window.console.error("Ajaxy.trigger: Controller does not exist", [this, arguments]), window.console.trace(), t !== "_generic" && i.trigger("_generic", "error", c), !1;
      if (typeof l == "undefined") return n === "refresh" ? (window.console.warn("Ajaxy.trigger: Controller Action [" + t + "].[" + n + "] does not exist. Defaulting to [" + t + "].[" + n + "] Action.", [this, arguments]), i.trigger(t, "response", c)) : (t === "_generic" ? (window.console.error("Ajaxy.trigger: Controller Action [" + t + "].[" + n + "] does not exist.", [this, arguments]), window.console.trace()) : (window.console.warn("Ajaxy.trigger: Controller Action [" + t + "].[" + n + "] does not exist. Defaulting to [_generic].[" + n + "] Action.", [this, arguments]), i.trigger("_generic", n, c)), !1);
      var h = e.extend(!0, {}, i.defaults.Action, {
        action: n,
        controller: t,
        Controller: f,
        state: r,
        State: c
      });
      h.forward = h.trigger = function(e, s, o) {
        return i.options.debug && window.console.debug("Ajaxy.Action.trigger:", [this, arguments]), e = e || t, s = s || n, o = o || r, i.trigger(e, s, o), !0
      };
      var p = l.apply(h, []);
      return h.propagate === !1 && (a = !1), a && t !== "_generic" && h.forward("_generic"), !0
    },
    request: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      n.options.debug && window.console.debug("Ajaxy.request:", [this, arguments]);
      var i = !1,
          s = n.options.request_match instanceof RegExp && !n.options.request_match.test(t),
          o = typeof n.ignoredStates[t] != "undefined";
      if (s || o) return n.options.debug && window.console.debug("Ajaxy.request: We are an ignored state", [this, arguments], [t]), !0;
      delete s, delete o;
      var u = n.getState(t, !0);
      if (n.redirected !== !1) {
        n.redirected = !1;
        return
      }
      e(".target").removeClass("target");
      if (n.statesEquivalent(u, n.currentState)) return u.controller = n.currentState.controller, u.Request = n.currentState.Request, u.Response = n.currentState.Response, u.Error = n.currentState.Error, n.currentState = u, n.storeState(u), n.trigger(u.controller, "refresh", n.currentState), n.options.debug && window.console.debug("Ajaxy.request: There has been no considerable change", [this, arguments], [n.currentState, u, t]), !0;
      n.ajaxQueue.push(t);
      if (n.ajaxQueue.length !== 1) return !1;
      n.options.analytics && n.track(u), n.currentState = u;
      var a = u.controller || n.match(t) || undefined;
      u.controller = a, u.Request.url = u.Request.url || u.clean.location, n.storeState(u), n.trigger(a, "request");
      var f = {
        data: u.Request.data,
        url: u.Request.url,
        success: function(i, s) {
          n.options.debug && window.console.debug("Ajaxy.request.success:", [this, arguments]), i = e.extend(!0, {}, n.defaults.State.Response.data, i), i.Ajaxy = i.Ajaxy || {};
          if (i.Ajaxy.redirected) {
            var o = n.extractState(i.Ajaxy.redirected.to);
            n.redirected = {
              status: !0,
              from: t,
              to: o
            }, r.go(o)
          }
          n.ajaxQueue.shift();
          var a = n.ajaxQueue.pop();
          if (a && a !== t) return n.ajaxQueue = [], n.stateChange(a), !1;
          u.Response.data = i, u.Error.data = {};
          var f = i.controller || u.controller || null;
          f === null && (f = "_generic", window.console.warn("Ajaxy.request.success.controller: The controller was unable to be determined, defaulted to _generic.", [this, arguments], [i.controller, u.controller]));
          if (u.Response.callback) if (u.Response.callback.apply(u, arguments) || f === "callback") return !0;
          return n.trigger(f, "response", u)
        },
        error: function(e, r, i, s) {
          n.options.debug && window.console.debug("Ajaxy.request.error:", [this, arguments]), s || (s = {
            responseText: e.responseText.trim() || !1
          }), n.ajaxQueue.shift();
          var o = n.ajaxQueue.pop();
          if (o && o !== t) return n.ajaxQueue = [], n.stateChange(o), !1;
          var a = {
            XMLHttpRequest: e,
            textStatus: r,
            errorThrown: i
          };
          u.Request.XMLHttpRequest = e, u.Response.data = s, u.Error.data = {};
          var f = s.controller || u.controller || null;
          f === null && (f = "_generic", window.console.warn("Ajaxy.request.error.controller: The controller was unable to be determined, defaulted to _generic.", [this, arguments], [s.controller, u.controller]));
          if (u.Error.callback) if (u.Error.callback.apply(u, arguments) || f === "callback") return !0;
          return n.trigger(f, "error", u)
        },
        complete: function(e, t) {
          n.options.debug && window.console.debug("Ajaxy.request.complete:", [this, arguments]), u.Request.XMLHttpRequest = e
        }
      };
      if (u.isForm) {
        var l = e(u.el),
            c = l.attr("enctype");
        if (c === "multipart/form-data") {
          var h = "ajaxy_form_iframe_" + Math.floor(Math.random() * 99999),
              p = e('<iframe style="display:none" src="about:blank" id="' + h + '" name="' + h + '" >').appendTo("body").hide(),
              d = e('<input type="hidden" name="ajax" value="true"/>').appendTo(l),
              v = e('<input type="hidden" name="Ajaxy[form]" value="true"/>').appendTo(l);
          p.bind("load", function() {
            var t = this.document || this.currentDocument || this.contentWindow.document;
            if (t.location.href === "about:blank") return !0;
            var n = p.contents().find(".response").val(),
                r = !1;
            try {
              r = e.parseJSON(n)
            } catch (i) {
              window.console.error("Ajaxy.request.form: Invalid Response.", [this, arguments], [n])
            }
            r ? request.success(r) : request.error(r), l.removeAttr("target"), p.remove(), d.remove(), v.remove()
          }), l.attr("target", h), l.submit();
          var m = l.values();
          f.data = e.extend(!0, f.data, m || {}), i = !0
        } else {
          var m = l.values();
          f.data = e.extend(!0, f.data, m || {})
        }
      }
      var g = !0;
      return u.Request = f, i || (g = n.ajax(f)), g
    },
    ajax: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      n.options.debug && window.console.debug("Ajaxy.ajax:", [this, arguments]);
      var i = {};
      i.success = t.success ||
      function(t, r) {
        n.options.debug && window.console.debug("Ajaxy.ajax.callbacks.success:", [this, arguments]), e(".error").empty()
      }, i.error = t.error ||
      function(t, r, i, s) {
        n.options.debug && window.console.debug("Ajaxy.ajax.callbacks.error:", [this, arguments]), e(".error").html(i)
      }, i.complete = t.complete ||
      function(e, t) {
        n.options.debug && window.console.debug("Ajaxy.ajax.callbacks.complete:", [this, arguments])
      }, delete t.success, delete t.error, delete t.complete;
      var s = {
        type: n.options.method,
        dataType: n.options.support_text ? "text" : "json"
      };
      return e.extend(!0, s, t), s.success = function(t, r) {
        n.options.debug && window.console.debug("Ajaxy.ajax.request.success:", [this, arguments]);
        var s = {},
            o = {};
        if (typeof t != "object" && n.options.support_text && t) try {
          o = e.parseJSON(t)
        } catch (u) {
          var a = n.htmlCompat(t),
              f = e(a),
              l = f.find("#ajaxy-head"),
              c = f.find("#ajaxy-body"),
              h = f.find("#ajaxy-title"),
              p = f.find("#ajaxy-controller"),
              d = h.length ? h.text() : "",
              v = l.length ? l.htmlAndSelf() : "",
              m = c.length ? c.htmlAndSelf() : "",
              g = c.length ? c.html() : a,
              y = p.length ? p.text().trim() : null;
          o = {
            controller: y,
            responseText: t,
            html: a,
            title: d,
            head: v,
            body: m,
            content: g
          }
        } else o = t;
        return s.data = o, n.options.debug && window.console.debug("Ajaxy.ajax.success:", [this, arguments]), typeof o.controller == "undefined" && (typeof o.success != "undefined" && !o.success || typeof o.error != "undefined" && o.error) ? i.error.apply(this, [null, r, o.error || !0, o]) : i.success.apply(this, [o, r])
      }, s.error = function(t, r, s) {
        n.options.debug && window.console.debug("Ajaxy.ajax.request.error:", [this, arguments]);
        var o = t.responseText || !1;
        o && (o = o.trim()), o || (o = !1);
        var u = {
          error: s || !0,
          responseText: o
        };
        if (o) try {
          u = e.parseJSON(o)
        } catch (a) {} finally {
          return this.success.apply(this, [u, r])
        }
        return i.error.apply(this, [t, r, s, u])
      }, e.ajax(s)
    },
    configure: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      t = t || {};
      if (typeof t != "object") {
        window.console.error("Ajaxy.configure: Invalid Options Passed", [this, arguments]);
        return
      }
      var i;
      typeof t.Controllers == "object" ? (i = t.Controllers, delete t.Controllers) : typeof t.controllers == "object" ? (i = t.controllers, delete t.controllers) : (i = t, t = {}), n.options = e.extend(!0, n.options, t.options || t), n.options.root_url = (n.options.root_url || document.location.protocol.toString() + "//" + document.location.hostname.toString()).replace(/\/+$/, "") + "/", n.options.base_url = n.options.base_url || "", n.options.relative_url = n.extractState(n.options.relative_url || document.location.pathname.toString()), n.options.relative_as_base && n.options.base_url.length === 0 && (n.options.base_url = n.options.relative_url, n.options.relative_url = ""), n.options.root_url = n.options.root_url.replace(/\/+$/, ""), n.options.base_url = n.options.base_url.replace(/\/+$/, ""), n.options.relative_url = n.extractRelativeUrl(n.options.relative_url), n.options.root_url === "/" && (n.options.root_url = ""), n.options.base_url === "/" && (n.options.base_url = ""), n.options.relative_url === "/" && (n.options.relative_url = "");
      if (n.options.request_match === !0) {
        var s = [];
        n.options.root_url && s.push("^" + n.options.root_url + n.options.base_url), n.options.base_url && s.push("^" + n.options.base_url), s.push("^/"), n.options.request_match = RegExp(s.join("|"), "i"), delete s
      }
      n.options.debug && window.console.debug("Ajaxy.configure:", [this, arguments]);
      if (n.options.relative_url && n.options.relative_url !== null) if (n.options.redirect === !0) {
        var o = n.options.root_url + n.options.base_url + "#" + n.options.relative_url,
            u = r.getHash();
        u && (o += "?anchor=" + u), document.location = o
      } else n.options.redirect === "postpone" ? n.postpone = !0 : n.options.redirect === "disable" && (n.addAjaxy = n.ajaxify = n.bind = function() {}, e(function() {
        e(".ajaxy").removeAjaxy()
      }));
      return n.aliases = [], e.each(n.options.aliases, function(t, r) {
        e.each(r, function(e, t) {
          n.aliases[t] = r
        })
      }), n.addControllers(i), n.onConfigured(!0), !0
    },
    construct: function() {
      var t = e.Ajaxy,
          n = e.History,
          r = e.Sparkle;
      if (t.isConstructed) return;
      return t.isConstructed = !0, n.bind(function(e) {
        return t.stateChange(e)
      }), (e.Sparkle || !1) && e.Sparkle.addExtension("ajaxy", function() {
        e(this).ajaxify()
      }), e.fn.ajaxy = t.fn.ajaxify, e.each(t.fn, function(t, n) {
        e.fn[t] = n
      }), e(function() {
        t.onDocumentReady(!0)
      }), t.onReady(function() {
        t.options.auto_ajaxify && e("body").ajaxify()
      }), t.onConfigured(function() {
        t.onDocumentReady(function() {
          t.onReady(!0)
        })
      }), !0
    },
    ajaxifyController: function(t) {
      var n = e.Ajaxy,
          r = n.getController(t);
      return r && (r.selector || !1) && e(function() {
        var n = e(r.selector);
        n.data("ajaxy-controller", t).addAjaxy()
      }), !0
    },
    fn: {
      ajaxify: function() {
        var t = e.Ajaxy,
            n = e(this);
        e.each(t.Controllers, function(e, n) {
          t.ajaxifyController(e)
        });
        if (t.options.track_all_internal_links) {
          var r = n.findAndSelf("a[href^=/],a[href^=./]");
          if (t.options.root_url) {
            var i = e("a[href^=" + t.options.root_url + "]");
            r = r.add(i), delete i
          }
          r = r.filter(":not(.ajaxy,.no-ajaxy)").addClass("ajaxy"), delete r
        }
        return t.options.track_all_anchors && n.findAndSelf("a[href^=#]:not(.ajaxy,.no-ajaxy)").addClass("ajaxy"), n.addAjaxy(), n
      },
      addAjaxy: function(t) {
        var n = e.Ajaxy,
            r = e(this);
        r.is("form,a") && r.addClass("ajaxy");
        if (t) {
          var i = n.getController(t);
          i.classname && r.addClass(i.classname)
        }
        return r.findAndSelf("a.ajaxy:not(.ajaxy-has)").addClass("ajaxy-has").once("click", n.ajaxifyHelpers.a), r.findAndSelf("form.ajaxy:not(.ajaxy-has)").addClass("ajaxy-has").once("submit", n.ajaxifyHelpers.form), r
      },
      removeAjaxy: function(t) {
        var n = e.Ajaxy,
            r = e(this),
            i = e.extend({
            permanently: !0
          }, t),
            s = r.findAndSelf("a.ajaxy").removeClass("ajaxy ajaxy-has").unbind("click", n.ajaxifyHelpers.a),
            o = r.findAndSelf("form.ajaxy").removeClass("ajaxy ajaxy-has").unbind("submit", n.ajaxifyHelpers.form);
        return i.permanently && s.add(o).addClass("no-ajaxy"), r
      }
    },
    ajaxifyHelpers: {
      a: function(t) {
        var n = e.Ajaxy,
            r = e(this),
            i = n.extractRelativeUrl(r.attr("href")).replace(/^\/?\.\//, "/"),
            s = n.extractState(i),
            o = n.extractAnchor(i);
        if ("/" + o === s || o === s) o = "";
        var u = !r.hasClass(n.options.no_log_class),
            a = r.data("ajaxy-controller") || null;
        return n.go({
          state: s,
          controller: a,
          log: u,
          anchor: o,
          el: this
        }), t.stopPropagation(), t.preventDefault(), !1
      },
      form: function(t) {
        var n = e.Ajaxy,
            r = e(this),
            i = r.attr("disabled");
        i = i || i === "false";
        if (i) return !1;
        if (r.attr("target")) return !0;
        var s = n.extractRelativeUrl(r.attr("action")).replace(/^\/?\.\//, "/"),
            o = n.extractState(s);
        return n.go({
          state: o,
          el: this
        }), t.stopPropagation(), t.preventDefault(), !1
      }
    },
    htmlCompat: function(e) {
      var t = String(e).replace(/<\!DOCTYPE[^>]*>/i, "").replace(/<(html|head|body|title|meta)\b/gi, '<div id="ajaxy-$1"').replace(/<\/(html|head|body|title|meta)\b/gi, "</div");
      return t
    },
    stateChange: function(t) {
      var n = e.Ajaxy,
          r = e.History;
      n.request(t)
    },
    onConfigured: function() {
      var t = this;
      return e.promise({
        object: t,
        handlers: "onConfiguredHandlers",
        flag: "isConfigured",
        arguments: arguments
      })
    },
    onDocumentReady: function(t) {
      var n = this;
      return e.promise({
        object: n,
        handlers: "onDocumentReadyHandlers",
        flag: "isDocumentReady",
        arguments: arguments
      })
    },
    onReady: function(t) {
      var n = this;
      return e.promise({
        object: n,
        handlers: "onReadyHandlers",
        flag: "isReady",
        arguments: arguments
      })
    }
  }, e.Ajaxy.construct()) : window.console.warn("$.Ajaxy has already been defined...")
}(jQuery);
