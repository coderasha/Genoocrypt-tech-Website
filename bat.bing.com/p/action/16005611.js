! function(c, l, a, r, i, t, y) {
    a[c] = a[c] || function() {
        (a[c].q = a[c].q || []).push(arguments)
    };

    function sync() {
        (new Image).src = "https://c.clarity.ms/c.gif"
    }
    "complete" == document.readyState ? sync() : window.addEventListener("load", sync);
    a[c]("metadata", (function() {
        a[c]("set", "_s", "uet")
    }), !1);
    a[c]("metadata", (function() {
        a[c]("set", "_u", "16005611")
    }), !1);
    if (a[c].v || a[c].t) return a[c]("event", c, "dup." + i.projectId);
    a[c].t = !0, (t = l.createElement(r)).async = !0, t.src = "https://f.clarity.ms/s/0.6.34/clarity.js", (y = l.getElementsByTagName(r)[0]).parentNode.insertBefore(t, y), a[c]("start", i), a[c].q.unshift(a[c].q.pop())
}("clarity", document, window, "script", {
    "projectId": "9nnvh1k2ie",
    "upload": "https://f.clarity.ms/collect",
    "expire": 365,
    "cookies": ["_uetmsclkid", "_uetvid"],
    "track": true,
    "lean": false,
    "fallback": "https://www.clarity.ms/eus-b/collect",
    "content": true,
    "unmask": ["!price", "!Price"]
});