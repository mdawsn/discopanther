/**
 * Create a local noconflict scope.
 * This is important as perhaps we are running in an noConflict environment so $ is not defined, but jQuery is.
 * What this will do is alias $ to jQuery, such that we can still write our code exactly the same as if we weren't in a noConflict environment.
 * Another important thing is that this allows us to create a local scope.
 * Local scopes are important they avoid variable overwrites and keeps our code nice and tidy.
 */
(function(e) {
  var t = e(document.body),
      n = e("#menu"),
      r = e("#content"),
      i = e("#current");
  e.Ajaxy.configure({
    method: "get",
    Controllers: {
      _generic: {
        request: function() {
          var n = e.Ajaxy;
          return n.options.debug && window.console.debug("$.Ajaxy.Controllers._generic.request", [this, arguments]), t.addClass("loading"), !0
        },
        response: function() {
          var n = e.Ajaxy,
              r = this.State.Response.data,
              i = this.state || "unknown";
          n.options.debug && window.console.debug("$.Ajaxy.Controllers._generic.response", [this, arguments], r, i);
          var s = r.title || !1;
          if (!s && this.state || !1) s = "jQuery Ajaxy - " + this.state;
          return s && (document.title = s), t.removeClass("loading"), e("#current").text("Our current state is: [" + i + "]"), !0
        },
        error: function() {
          var n = e.Ajaxy,
              r = this.State.Error.data || this.State.Response.data,
              i = this.state || "unknown",
              s = r.error || r.responseText || "Unknown Error.",
              o = r.content || s;
          return window.console.error("$.Ajaxy.Controllers._generic.error", [this, arguments], o), t.removeClass("loading"), e("#current").text("Our current state is: [" + i + "]"), !0
        }
      },
      page: {
        classname: "menuitem",
        matches: /^.*html/,
        request: function() {
          var t = e.Ajaxy;
          return t.options.debug && window.console.debug("$.Ajaxy.Controllers.page.request", [this, arguments]), n.find(".active").removeClass("active"), r.stop(!0, !0).fadeOut(400), !0
        },
        response: function() {
          var t = e.Ajaxy,
              i = this.State.Response.data,
              s = this.state,
              o = this.State;
          t.options.debug && window.console.debug("$.Ajaxy.Controllers.page.response", [this, arguments], i, s), n.children(':has(a[href*="' + o.raw.state + '"])').addClass("active").siblings(".active").removeClass("active");
          var u = this;
          return r.html(i.content).fadeIn(400, function() {
            u.documentReady(r)
          }), !0
        }
      }
    }
  })
})(jQuery);
