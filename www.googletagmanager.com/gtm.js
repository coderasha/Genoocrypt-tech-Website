// Copyright 2012 Google Inc. All rights reserved.
(function() {

    var data = {
        "resource": {
            "version": "27",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__u",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": "",
                "vtp_name": "userEmailHash"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__e"
            }],
            "tags": [{
                "function": "__sp",
                "once_per_event": true,
                "vtp_conversionId": "943617023",
                "vtp_customParamsFormat": "NONE",
                "vtp_enableOgtRmktParams": true,
                "vtp_enableUserId": true,
                "vtp_url": ["macro", 1],
                "vtp_enableRdpCheckbox": true,
                "tag_id": 1
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionValue": "1",
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "943617023",
                "vtp_conversionLabel": "4czjCPHL93MQ_-f5wQM",
                "vtp_url": ["macro", 1],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 3
            }, {
                "function": "__gclidw",
                "once_per_event": true,
                "vtp_enableCookieOverrides": false,
                "vtp_enableCrossDomainFeature": true,
                "vtp_enableCookieUpdateFeature": false,
                "vtp_enableCookieFlagsFeature": true,
                "tag_id": 6
            }, {
                "function": "__awct",
                "once_per_event": true,
                "vtp_enableConversionLinker": true,
                "vtp_conversionCookiePrefix": "_gcl",
                "vtp_conversionId": "953691586",
                "vtp_conversionLabel": "KfCLCJvL7o8BEMLb4MYD",
                "vtp_url": ["macro", 1],
                "vtp_enableProductReportingCheckbox": true,
                "vtp_enableNewCustomerReportingCheckbox": true,
                "vtp_enableEnhancedConversionsCheckbox": false,
                "vtp_enableEnhancedConversionVariable": false,
                "vtp_enableRdpCheckbox": true,
                "vtp_enableTransportUrl": false,
                "vtp_enableShoppingQualitySettings": true,
                "tag_id": 8
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "16005611",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "PAGE_LOAD",
                "tag_id": 9
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2620155767891",
                "vtp_eventName": "checkout",
                "tag_id": 11
            }, {
                "function": "__pntr",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_setCustomParams": false,
                "vtp_tagId": "2620155767891",
                "vtp_eventName": "pagevisit",
                "tag_id": 12
            }, {
                "function": "__baut",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_goalValue": "1",
                "vtp_eventCategory": "Transaction",
                "vtp_tagId": "16005611",
                "vtp_uetqName": "uetq",
                "vtp_eventType": "CUSTOM",
                "tag_id": 46
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "routeChange"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "conversionTransaction"
            }],
            "rules": [
                [
                    ["if", 0],
                    ["add", 0, 2, 4, 6]
                ],
                [
                    ["if", 1],
                    ["add", 0, 2, 4, 6]
                ],
                [
                    ["if", 2],
                    ["add", 1, 3, 5, 7]
                ]
            ]
        },
        "runtime": [
            [50, "__pntr", [46, "a"],
                [52, "b", ["require", "copyFromWindow"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", ["require", "injectScript"]],
                [52, "e", ["require", "logToConsole"]],
                [52, "f", ["require", "makeTableMap"]],
                ["e", [0, "GTM PTag v1.4; tagId: ", [17, [15, "a"], "tagId"]]],
                [52, "g", [28, ["b", "pintrk"]]],
                [52, "h", ["c", "pintrk", "pintrk.queue"]],
                [22, [15, "g"],
                    [46, [53, [52, "k", [8, "np", "gtm"]],
                        [22, [17, [15, "a"], "em"],
                            [46, [43, [15, "k"], "em", [17, [15, "a"], "em"]]]
                        ],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "aem_enabled"]],
                            [46, [43, [15, "k"], "aem_enabled", [20, [17, [15, "a"], "aem_enabled"], "yes"]],
                                [43, [15, "k"], "gtm_aem_configs", [7]],
                                [22, [17, [15, "k"], "aem_enabled"],
                                    [46, [2, [17, [15, "k"], "gtm_aem_configs"], "push", [7, "em"]]]
                                ]
                            ]
                        ],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "md_scraping_enabled"]],
                            [46, [43, [15, "k"], "md_frequency", [39, [17, [15, "a"], "md_scraping_enabled"], 1, 0]]]
                        ],
                        ["h", "load", [2, [17, [15, "a"], "tagId"], "toString", [7]],
                            [15, "k"]
                        ],
                        ["h", "page"]
                    ]],
                    [46, [22, [17, [15, "a"], "em"],
                        [46, [53, [52, "k", [8, "em", [17, [15, "a"], "em"]]],
                            ["h", "set", [15, "k"]]
                        ]]
                    ]]
                ],
                [22, [20, [17, [15, "a"], "eventName"], ""],
                    [46, [53, [52, "k", [8]],
                        [22, [2, [15, "a"], "hasOwnProperty", [7, "aem_enabled"]],
                            [46, [43, [15, "k"], "aem_enabled", [20, [17, [15, "a"], "aem_enabled"], "yes"]],
                                [43, [15, "k"], "gtm_aem_configs", [7]],
                                [22, [17, [15, "k"], "aem_enabled"],
                                    [46, [2, [17, [15, "k"], "gtm_aem_configs"], "push", [7, "em"]]]
                                ]
                            ]
                        ],
                        ["h", "set", [15, "k"]]
                    ]]
                ],
                [52, "i", [51, "", [7],
                    [41, "k"],
                    [3, "k", [8]],
                    [22, [17, [15, "a"], "setCustomParams"],
                        [46, [3, "k", ["f", [17, [15, "a"], "values"], "name", "value"]]]
                    ],
                    [43, [15, "k"], "np", "gtm"],
                    [52, "l", [51, "", [7, "n"],
                        [22, [21, [16, [15, "a"],
                                    [15, "n"]
                                ],
                                [44]
                            ],
                            [46, [43, [15, "k"],
                                [15, "n"],
                                [16, [15, "a"],
                                    [15, "n"]
                                ]
                            ]]
                        ]
                    ]],
                    [52, "m", [51, "", [7, "n"],
                        [22, [21, [16, [15, "a"],
                                    [15, "n"]
                                ],
                                [44]
                            ],
                            [46, [22, [20, [17, [15, "k"], "line_items"],
                                        [44]
                                    ],
                                    [46, [43, [15, "k"], "line_items", [7, [8]]]]
                                ],
                                [43, [16, [17, [15, "k"], "line_items"], 0],
                                    [15, "n"],
                                    [16, [15, "a"],
                                        [15, "n"]
                                    ]
                                ]
                            ]
                        ]
                    ]],
                    [38, [17, [15, "a"], "eventName"],
                        [46, "watchvideo", "viewcategory", "custom", "signup", "lead", "search", "addtocart", "checkout", "pagevisit"],
                        [46, [5, [46]],
                            [5, [46]],
                            [5, [46, [4]]],
                            [5, [46]],
                            [5, [46, ["l", "lead_type"],
                                [4]
                            ]],
                            [5, [46, ["l", "search_query"],
                                [4]
                            ]],
                            [5, [46]],
                            [5, [46, ["l", "order_id"],
                                ["l", "order_quantity"],
                                ["l", "value"],
                                ["l", "currency"]
                            ]],
                            [5, [46, ["m", "product_id"],
                                ["m", "product_category"],
                                [4]
                            ]],
                            [9, [46, [4]]]
                        ]
                    ],
                    [22, [21, [17, [15, "a"], "eventName"], ""],
                        [46, ["e", [0, "Firing Pinterest event: ", [17, [15, "a"], "eventName"]]],
                            ["e", "Event Data:"],
                            ["e", [15, "k"]],
                            ["h", "track", [17, [15, "a"], "eventName"],
                                [15, "k"]
                            ]
                        ]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "j", [51, "", [7],
                    ["e", "Pinterest Error: Loading JS failed!"],
                    [2, [15, "a"], "gtmOnFailure", [7]]
                ]],
                ["d", "https://s.pinimg.com/ct/core.js", [15, "i"],
                    [15, "j"], "PinterestJS"
                ]
            ],
            [50, "__baut", [46, "a"],
                [52, "b", ["require", "injectScript"]],
                [52, "c", ["require", "callInWindow"]],
                [52, "d", ["require", "makeTableMap"]],
                [38, [17, [15, "a"], "eventType"],
                    [46, "PAGE_LOAD", "VARIABLE_REVENUE", "CUSTOM"],
                    [46, [5, [46, [43, [15, "a"], "eventType", "pageView"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "variableRevenue"],
                            [4]
                        ]],
                        [5, [46, [43, [15, "a"], "eventType", "custom"]]]
                    ]
                ],
                [22, [17, [15, "a"], "eventCategory"],
                    [46, [43, [15, "a"], "p_event_category", [17, [15, "a"], "eventCategory"]]]
                ],
                [22, [17, [15, "a"], "eventLabel"],
                    [46, [43, [15, "a"], "p_event_label", [17, [15, "a"], "eventLabel"]]]
                ],
                [22, [17, [15, "a"], "eventValue"],
                    [46, [43, [15, "a"], "p_event_value", [17, [15, "a"], "eventValue"]]]
                ],
                [22, [17, [15, "a"], "goalValue"],
                    [46, [43, [15, "a"], "p_revenue_value", [17, [15, "a"], "goalValue"]]]
                ],
                [52, "e", [51, "", [7],
                    [52, "i", [39, [30, [20, [17, [15, "a"], "eventType"], "pageView"],
                            [28, [17, [15, "a"], "customParamTable"]]
                        ],
                        [8],
                        ["d", [17, [15, "a"], "customParamTable"], "customParamName", "customParamValue"]
                    ]],
                    [52, "j", [8, "pageViewSpa", [7, "page_path", "page_title"], "variableRevenue", [7, "currency", "revenue_value"], "custom", [7, "event_category", "event_label", "event_value", "currency", "revenue_value"], "ecommerce", [7, "ecomm_prodid", "ecomm_pagetype", "ecomm_totalvalue", "ecomm_category"], "hotel", [7, "currency", "hct_base_price", "hct_booking_xref", "hct_checkin_date", "hct_checkout_date", "hct_length_of_stay", "hct_partner_hotel_id", "hct_total_price", "hct_pagetype"], "travel", [7, "travel_destid", "travel_originid", "travel_pagetype", "travel_startdate", "travel_enddate", "travel_totalvalue"]]],
                    [65, "k", [30, [16, [15, "j"],
                                [17, [15, "a"], "eventType"]
                            ],
                            [7]
                        ],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "p_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "tpp", "1"],
                    [36, [15, "i"]]
                ]],
                [52, "f", [51, "", [7],
                    [52, "i", [39, [28, [17, [15, "a"], "customConfigTable"]],
                        [8],
                        ["d", [17, [15, "a"], "customConfigTable"], "customConfigName", "customConfigValue"]
                    ]],
                    [54, "k", [15, "i"],
                        [46, [22, [20, [16, [15, "i"],
                                [15, "k"]
                            ], "true"],
                            [46, [43, [15, "i"],
                                [15, "k"], true
                            ]],
                            [46, [22, [20, [16, [15, "i"],
                                    [15, "k"]
                                ], "false"],
                                [46, [43, [15, "i"],
                                    [15, "k"], false
                                ]]
                            ]]
                        ]]
                    ],
                    [52, "j", [7, "navTimingApi", "storeConvTrackCookies", "removeQueryFromUrls", "disableAutoPageView"]],
                    [65, "k", [15, "j"],
                        [46, [43, [15, "i"],
                            [15, "k"],
                            [30, [16, [15, "i"],
                                    [15, "k"]
                                ],
                                [16, [15, "a"],
                                    [0, "c_", [15, "k"]]
                                ]
                            ]
                        ]]
                    ],
                    [43, [15, "i"], "ti", [17, [15, "a"], "tagId"]],
                    [43, [15, "i"], "tm", "gtm002"],
                    [36, [15, "i"]]
                ]],
                [52, "g", [51, "", [7],
                    [22, [20, [17, [15, "a"], "eventType"], "pageView"],
                        [46, [53, [52, "i", ["f"]],
                            ["c", "UET_init", [17, [15, "a"], "uetqName"],
                                [15, "i"]
                            ],
                            ["c", "UET_push", [17, [15, "a"], "uetqName"], "pageLoad"]
                        ]],
                        [46, [53, [52, "i", ["e"]],
                            [22, [20, [17, [15, "a"], "eventType"], "pageViewSpa"],
                                [46, ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", "page_view", [15, "i"]]],
                                [46, [53, [52, "j", [30, [30, [17, [15, "a"], "customEventAction"],
                                        [17, [15, "a"], "eventAction"]
                                    ], ""]],
                                    ["c", "UET_push", [17, [15, "a"], "uetqName"], "event", [15, "j"],
                                        [15, "i"]
                                    ]
                                ]]
                            ]
                        ]]
                    ],
                    [2, [15, "a"], "gtmOnSuccess", [7]]
                ]],
                [52, "h", "https://bat.bing.com/bat.js"],
                ["b", [15, "h"],
                    [15, "g"],
                    [17, [15, "a"], "gtmOnFailure"],
                    [15, "h"]
                ]
            ]
        ],
        "permissions": {
            "__pntr": {
                "access_globals": {
                    "keys": [{
                        "key": "pintrk",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "pintrk.queue",
                        "read": true,
                        "write": true,
                        "execute": true
                    }]
                },
                "logging": {
                    "environments": "debug"
                },
                "inject_script": {
                    "urls": ["https:\/\/s.pinimg.com\/ct\/core.js"]
                }
            },
            "__baut": {
                "inject_script": {
                    "urls": ["https:\/\/bat.bing.com\/bat.js"]
                },
                "access_globals": {
                    "keys": [{
                        "key": "UET_push",
                        "read": false,
                        "write": false,
                        "execute": true
                    }, {
                        "key": "UET_init",
                        "read": false,
                        "write": false,
                        "execute": true
                    }]
                }
            }
        }

        ,
        "security_groups": {
            "nonGoogleScripts": ["__pntr", "__baut"]
        }

    };


    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var l, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            return a.raw = a
        },
        da = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        },
        ea = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        fa;
    if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
    else {
        var ha;
        a: {
            var ia = {
                    a: !0
                },
                ja = {};
            try {
                ja.__proto__ = ia;
                ha = ja.a;
                break a
            } catch (a) {}
            ha = !1
        }
        fa = ha ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ka = fa,
        la = function(a, b) {
            a.prototype = ea(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Yk = b.prototype
        },
        ma = this || self,
        na = function(a) {
            return a
        };
    var oa = function(a, b) {
        this.g = a;
        this.o = b
    };
    var pa = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        },
        ra = function() {
            this.C = {};
            this.s = !1;
            this.I = {}
        },
        sa = function(a, b) {
            var c = [],
                d;
            for (d in a.C)
                if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                    case 1:
                        c.push(d);
                        break;
                    case 2:
                        c.push(a.get(d));
                        break;
                    case 3:
                        c.push([d, a.get(d)])
                }
            return c
        };
    ra.prototype.get = function(a) {
        return this.C["dust." + a]
    };
    ra.prototype.set = function(a, b) {
        this.s || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.C[a] = b))
    };
    ra.prototype.has = function(a) {
        return this.C.hasOwnProperty("dust." + a)
    };
    var ta = function(a, b) {
        b = "dust." + b;
        a.s || a.I.hasOwnProperty(b) || delete a.C[b]
    };
    ra.prototype.Ib = function() {
        this.s = !0
    };
    var ua = function(a) {
        this.o = new ra;
        this.g = [];
        this.s = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (pa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
    };
    l = ua.prototype;
    l.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.g.length; c++) {
            var d = this.g[c];
            null === d || void 0 === d ? b.push("") : d instanceof ua ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
        }
        return b.join(",")
    };
    l.set = function(a, b) {
        if (!this.s)
            if ("length" === a) {
                if (!pa(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.g.length = Number(b)
            } else pa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
    };
    l.get = function(a) {
        return "length" === a ? this.length() : pa(a) ? this.g[Number(a)] : this.o.get(a)
    };
    l.length = function() {
        return this.g.length
    };
    l.Hb = function() {
        for (var a = sa(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
        return new ua(a)
    };
    var va = function(a, b) {
        pa(b) ? delete a.g[Number(b)] : ta(a.o, b)
    };
    l = ua.prototype;
    l.pop = function() {
        return this.g.pop()
    };
    l.push = function(a) {
        return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.shift = function() {
        return this.g.shift()
    };
    l.splice = function(a, b, c) {
        return new ua(this.g.splice.apply(this.g, arguments))
    };
    l.unshift = function(a) {
        return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
    };
    l.has = function(a) {
        return pa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
    };
    l.Ib = function() {
        this.s = !0;
        Object.freeze(this.g);
        this.o.Ib()
    };
    var wa = function() {
        function a(f, g) {
            if (b[f]) {
                if (b[f].ce + g > b[f].max) throw Error("Quota exceeded");
                b[f].ce += g
            }
        }
        var b = {},
            c = void 0,
            d = void 0,
            e = {
                Xj: function(f) {
                    c = f
                },
                eh: function() {
                    c && a(c, 1)
                },
                Zj: function(f) {
                    d = f
                },
                Jb: function(f) {
                    d && a(d, f)
                },
                zk: function(f, g) {
                    b[f] = b[f] || {
                        ce: 0
                    };
                    b[f].max = g
                },
                wj: function(f) {
                    return b[f] && b[f].ce || 0
                },
                reset: function() {
                    b = {}
                },
                gj: a
            };
        e.onFnConsume = e.Xj;
        e.consumeFn = e.eh;
        e.onStorageConsume = e.Zj;
        e.consumeStorage = e.Jb;
        e.setMax = e.zk;
        e.getConsumed = e.wj;
        e.reset = e.reset;
        e.consume = e.gj;
        return e
    };
    var xa = function(a, b) {
        this.s = a;
        this.O = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.o = new ra;
        this.g = this.I = void 0
    };
    xa.prototype.add = function(a, b) {
        ya(this, a, b, !1)
    };
    var ya = function(a, b, c, d) {
        if (!a.o.s)
            if (a.s.Jb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
                var e = a.o;
                e.set(b, c);
                e.I["dust." + b] = !0
            } else a.o.set(b, c)
    };
    xa.prototype.set = function(a, b) {
        this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Jb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
    };
    xa.prototype.get = function(a) {
        return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
    };
    xa.prototype.has = function(a) {
        return !!this.o.has(a) || !(!this.C || !this.C.has(a))
    };
    var za = function(a) {
        var b = new xa(a.s, a);
        a.I && (b.I = a.I);
        b.O = a.O;
        b.g = a.g;
        return b
    };
    var Aa = function() {},
        Ba = function(a) {
            return "function" === typeof a
        },
        m = function(a) {
            return "string" === typeof a
        },
        Da = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ea = Array.isArray,
        Fa = function(a, b) {
            if (a && Ea(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ha = function(a, b) {
            if (!Da(a) || !Da(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        Ka = function(a, b) {
            for (var c = new Ia, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        La = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ma = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Na = function(a) {
            return Math.round(Number(a)) || 0
        },
        Oa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Pa = function(a) {
            var b = [];
            if (Ea(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Qa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        Ia = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ia.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ia.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Xa = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return !0;
            return !1
        },
        Ya = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Za = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <=
                    b.indexOf(d)) return
            }
            return d
        },
        $a = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ab = /^\w{1,9}$/,
        bb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            La(a, function(d, e) {
                ab.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        cb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };
    var db = function(a, b) {
        ra.call(this);
        this.O = a;
        this.ab = b
    };
    la(db, ra);
    db.prototype.toString = function() {
        return this.O
    };
    db.prototype.Hb = function() {
        return new ua(sa(this, 1))
    };
    db.prototype.g = function(a, b) {
        a.s.eh();
        return this.ab.apply(new eb(this, a), Array.prototype.slice.call(arguments, 1))
    };
    db.prototype.o = function(a, b) {
        try {
            return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var gb = function(a, b) {
            for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof oa); d++);
            return c
        },
        fb = function(a, b) {
            try {
                var c = a.get(String(b[0]));
                if (!(c && c instanceof db)) throw Error("Attempting to execute non-function " + b[0] + ".");
                return c.g.apply(c, [a].concat(b.slice(1)))
            } catch (e) {
                var d = a.I;
                d && d(e, b.context ? {
                    id: b[0],
                    line: b.context.line
                } : null);
                throw e;
            }
        },
        eb = function(a, b) {
            this.o = a;
            this.g = b
        },
        G = function(a, b) {
            return Ea(b) ? fb(a.g, b) : b
        },
        H = function(a) {
            return a.o.O
        };
    var hb = function() {
        ra.call(this)
    };
    la(hb, ra);
    hb.prototype.Hb = function() {
        return new ua(sa(this, 1))
    };
    var ib = {
        control: function(a, b) {
            return new oa(a, G(this, b))
        },
        fn: function(a, b, c) {
            var d = this.g,
                e = G(this, b);
            if (!(e instanceof ua)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            this.g.s.Jb(a.length + f.length);
            return new db(a, function() {
                return function(g) {
                    var h = za(d);
                    void 0 === h.g && (h.g = this.g.g);
                    for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++)
                        if (k[n] = G(this, k[n]), k[n] instanceof oa) return k[n];
                    for (var p = e.get("length"), q =
                            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new ua(k));
                    var r = gb(h, f);
                    if (r instanceof oa) return "return" === r.g ? r.o : r
                }
            }())
        },
        list: function(a) {
            var b = this.g.s;
            b.Jb(arguments.length);
            for (var c = new ua, d = 0; d < arguments.length; d++) {
                var e = G(this, arguments[d]);
                "string" === typeof e && b.Jb(e.length ? e.length - 1 : 0);
                c.push(e)
            }
            return c
        },
        map: function(a) {
            for (var b = this.g.s, c = new hb, d = 0; d < arguments.length - 1; d += 2) {
                var e = G(this, arguments[d]) + "",
                    f = G(this, arguments[d + 1]),
                    g = e.length;
                g += "string" ===
                    typeof f ? f.length : 1;
                b.Jb(g);
                c.set(e, f)
            }
            return c
        },
        undefined: function() {}
    };
    var jb = function() {
            this.s = wa();
            this.g = new xa(this.s)
        },
        kb = function(a, b, c) {
            var d = new db(b, c);
            d.Ib();
            a.g.set(b, d)
        },
        lb = function(a, b, c) {
            ib.hasOwnProperty(b) && kb(a, c || b, ib[b])
        };
    jb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.o(c)
    };
    jb.prototype.o = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
        return b
    };
    jb.prototype.C = function(a, b) {
        var c = za(this.g);
        c.g = a;
        for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
        return d
    };
    var mb, nb = function() {
        if (void 0 === mb) {
            var a = null,
                b = ma.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    ma.console && ma.console.error(c.message)
                }
                mb = a
            } else mb = a
        }
        return mb
    };
    var pb = function(a, b) {
        this.g = b === ob ? a : ""
    };
    pb.prototype.toString = function() {
        return this.g + ""
    };
    var qb = function(a) {
            return a instanceof pb && a.constructor === pb ? a.g : "type_error:TrustedResourceUrl"
        },
        ob = {},
        rb = function(a) {
            var b = nb(),
                c = b ? b.createScriptURL(a) : a;
            return new pb(c, ob)
        };
    var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function tb() {
        var a = ma.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }

    function ub(a) {
        return -1 != tb().indexOf(a)
    };
    var vb = {},
        wb = function(a, b, c) {
            this.g = c === vb ? a : ""
        };
    wb.prototype.toString = function() {
        return this.g.toString()
    };
    var xb = function(a) {
            return a instanceof wb && a.constructor === wb ? a.g : "type_error:SafeHtml"
        },
        yb = function(a) {
            var b = nb(),
                c = b ? b.createHTML(a) : a;
            return new wb(c, null, vb)
        };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var zb = {};
    var Ab = function() {},
        Bb = function(a) {
            this.g = a
        };
    la(Bb, Ab);
    Bb.prototype.toString = function() {
        return this.g
    };

    function Cb(a, b) {
        var c = [new Bb(Db[0].toLowerCase(), zb)];
        if (0 === c.length) throw Error("No prefixes are provided");
        var d = c.map(function(f) {
                var g;
                if (f instanceof Bb) g = f.g;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function Eb(a) {
        if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
        if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
    };
    var z = window,
        I = document,
        Fb = navigator,
        Gb = I.currentScript && I.currentScript.src,
        Hb = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Ib = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Jb = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Kb = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Lb(a, b, c) {
        b && La(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Mb = function(a, b, c, d) {
            var e = I.createElement("script");
            Lb(e, d, Jb);
            e.type = "text/javascript";
            e.async = !0;
            var f = rb(a);
            e.src = qb(f);
            var g, h, k, n = null == (k = (h = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : k.call(h, "script[nonce]");
            (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
            Ib(e, b);
            c && (e.onerror = c);
            var p = I.getElementsByTagName("script")[0] || I.body || I.head;
            p.parentNode.insertBefore(e, p);
            return e
        },
        Nb = function() {
            if (Gb) {
                var a = Gb.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Ob = function(a, b, c, d, e) {
            var f = e,
                g = !1;
            f || (f = I.createElement("iframe"), g = !0);
            Lb(f, c, Kb);
            d && La(d, function(k, n) {
                f.dataset[k] = n
            });
            f.height = "0";
            f.width = "0";
            f.style.display = "none";
            f.style.visibility = "hidden";
            if (g) {
                var h = I.body && I.body.lastChild || I.body || I.head;
                h.parentNode.insertBefore(f, h)
            }
            Ib(f, b);
            void 0 !== a && (f.src = a);
            return f
        },
        Pb = function(a, b, c) {
            var d = new Image(1, 1);
            d.onload = function() {
                d.onload = null;
                b && b()
            };
            d.onerror =
                function() {
                    d.onerror = null;
                    c && c()
                };
            d.src = a;
            return d
        },
        Qb = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Rb = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        K = function(a) {
            z.setTimeout(a, 0)
        },
        Sb = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Tb = function(a) {
            var b = a.innerText || a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b &&
                (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Ub = function(a) {
            var b = I.createElement("div"),
                c = b,
                d = yb("A<div>" + a + "</div>");
            void 0 !== c.tagName && Eb(c);
            c.innerHTML = xb(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Vb = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Wb = function(a) {
            var b;
            try {
                b = Fb.sendBeacon && Fb.sendBeacon(a)
            } catch (c) {}
            b ||
                Pb(a)
        },
        Xb = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Zb = function(a) {
            var b = I.featurePolicy;
            return b && Ba(b.allowsFeature) ? b.allowsFeature(a) : !1
        };
    var $b = function(a, b) {
            return G(this, a) && G(this, b)
        },
        ac = function(a, b) {
            return G(this, a) === G(this, b)
        },
        bc = function(a, b) {
            return G(this, a) || G(this, b)
        },
        cc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        dc = function(a, b) {
            a = String(G(this, a));
            b = String(G(this, b));
            return a.substring(0, b.length) === b
        },
        ec = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof hb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var gc = function() {
        this.g = new jb;
        fc(this)
    };
    gc.prototype.execute = function(a) {
        return this.g.o(a)
    };
    var fc = function(a) {
        lb(a.g, "map");
        var b = function(c, d) {
            kb(a.g, c, d)
        };
        b("and", $b);
        b("contains", cc);
        b("equals", ac);
        b("or", bc);
        b("startsWith", dc);
        b("variable", ec)
    };
    var hc = function(a) {
        if (a instanceof hc) return a;
        this.hb = a
    };
    hc.prototype.toString = function() {
        return String(this.hb)
    };
    var jc = function(a) {
        ra.call(this);
        this.g = a;
        this.set("then", ic(this));
        this.set("catch", ic(this, !0));
        this.set("finally", ic(this, !1, !0))
    };
    la(jc, hb);
    var ic = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new db("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof db || (d = void 0);
            e instanceof db || (e = void 0);
            var f = za(this.g),
                g = function(k) {
                    return function(n) {
                        return c ? (k.g(f), a.g) : k.g(f, n)
                    }
                },
                h = a.g.then(d && g(d), e && g(e));
            return new jc(h)
        })
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var kc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        lc = function(a) {
            if (null == a) return String(a);
            var b = kc.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        mc = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        nc = function(a) {
            if (!a || "object" != lc(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !mc(a, "constructor") && !mc(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || mc(a, b)
        },
        oc = function(a, b) {
            var c = b || ("array" == lc(a) ? [] : {}),
                d;
            for (d in a)
                if (mc(a, d)) {
                    var e = a[d];
                    "array" == lc(e) ? ("array" != lc(c[d]) && (c[d] = []), c[d] = oc(e, c[d])) : nc(e) ? (nc(c[d]) || (c[d] = {}), c[d] = oc(e, c[d])) : c[d] = e
                }
            return c
        };
    var qc = function(a, b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n = sa(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (h instanceof ua) {
                        var n = [];
                        d.push(h);
                        e.push(n);
                        for (var p = h.Hb(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
                        return n
                    }
                    if (h instanceof jc) return h.g;
                    if (h instanceof hb) {
                        var r = {};
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    if (h instanceof db) {
                        var t = function() {
                            for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++) v[x] = pc(v[x],
                                b, c);
                            var y = b ? b.s : wa(),
                                w = new xa(y);
                            b && (w.g = b.g);
                            return g(h.g.apply(h, [w].concat(v)))
                        };
                        d.push(h);
                        e.push(t);
                        f(h, t);
                        return t
                    }
                    var u = !1;
                    switch (c) {
                        case 1:
                            u = !0;
                            break;
                        case 2:
                            u = !1;
                            break;
                        case 3:
                            u = !1;
                            break;
                        default:
                    }
                    if (h instanceof hc && u) return h.hb;
                    switch (typeof h) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return h;
                        case "object":
                            if (null === h) return null
                    }
                };
            return g(a)
        },
        pc = function(a,
            b, c) {
            var d = [],
                e = [],
                f = function(h, k) {
                    for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]))
                },
                g = function(h) {
                    var k = d.indexOf(h);
                    if (-1 < k) return e[k];
                    if (Ea(h) || Ma(h)) {
                        var n = new ua([]);
                        d.push(h);
                        e.push(n);
                        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
                        return n
                    }
                    if (nc(h)) {
                        var q = new hb;
                        d.push(h);
                        e.push(q);
                        f(h, q);
                        return q
                    }
                    if ("function" === typeof h) {
                        var r = new db("", function(w) {
                            for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = qc(G(this, A[B]), b, c);
                            return g((0, this.g.O)(h, h, A))
                        });
                        d.push(h);
                        e.push(r);
                        f(h, r);
                        return r
                    }
                    var x = typeof h;
                    if (null === h || "string" === x || "number" === x || "boolean" === x) return h;
                    var y = !1;
                    switch (c) {
                        case 1:
                            y = !0;
                            break;
                        case 2:
                            y = !1;
                            break;
                        default:
                    }
                    if (void 0 !== h && y) return new hc(h)
                };
            return g(a)
        };
    var rc = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        sc = function(a) {
            if (void 0 === a || Ea(a) || nc(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        };
    var tc = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof ua)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new ua(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
            return new ua(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f = e; f < d; f++)
                if (this.has(f) &&
                    this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
            return new ua(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a, b) {
            return this.push.apply(this,
                Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = rc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ?
                Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new ua(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = rc(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.g(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments,
                1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var uc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
        vc = new oa("break"),
        wc = new oa("continue"),
        xc = function(a, b) {
            return G(this, a) + G(this, b)
        },
        yc = function(a, b) {
            return G(this, a) && G(this, b)
        },
        zc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (!(c instanceof ua)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
                b + " of " + a + ".");
            var d = "number" === typeof a;
            if ("boolean" === typeof a || d) {
                if ("toString" === b) {
                    if (d && c.length()) {
                        var e = qc(c.get(0));
                        try {
                            return a.toString(e)
                        } catch (q) {}
                    }
                    return a.toString()
                }
                throw Error("TypeError: " + a + "." + b + " is not a function.");
            }
            if ("string" === typeof a) {
                if (0 <= uc.indexOf(b)) {
                    var f = qc(c);
                    return pc(a[b].apply(a, f), this.g)
                }
                throw Error("TypeError: " + b + " is not a function");
            }
            if (a instanceof ua) {
                if (a.has(b)) {
                    var g = a.get(b);
                    if (g instanceof db) {
                        var h = rc(c);
                        h.unshift(this.g);
                        return g.g.apply(g, h)
                    }
                    throw Error("TypeError: " +
                        b + " is not a function");
                }
                if (0 <= tc.supportedMethods.indexOf(b)) {
                    var k = rc(c);
                    k.unshift(this.g);
                    return tc[b].apply(a, k)
                }
            }
            if (a instanceof db || a instanceof hb) {
                if (a.has(b)) {
                    var n = a.get(b);
                    if (n instanceof db) {
                        var p = rc(c);
                        p.unshift(this.g);
                        return n.g.apply(n, p)
                    }
                    throw Error("TypeError: " + b + " is not a function");
                }
                if ("toString" === b) return a instanceof db ? a.O : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, rc(c))
            }
            if (a instanceof hc && "toString" === b) return a.toString();
            throw Error("TypeError: Object has no '" +
                b + "' property.");
        },
        Ac = function(a, b) {
            a = G(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.g;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = G(this, b);
            c.set(a, d);
            return d
        },
        Dc = function(a) {
            var b = za(this.g),
                c = gb(b, Array.prototype.slice.apply(arguments));
            if (c instanceof oa) return c
        },
        Ec = function() {
            return vc
        },
        Fc = function(a) {
            for (var b = G(this, a), c = 0; c < b.length; c++) {
                var d = G(this, b[c]);
                if (d instanceof oa) return d
            }
        },
        Gc = function(a) {
            for (var b =
                    this.g, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = G(this, arguments[c + 1]);
                    ya(b, d, e, !0)
                }
            }
        },
        Hc = function() {
            return wc
        },
        Ic = function(a, b, c) {
            var d = new ua;
            b = G(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.g.add(a, G(this, f))
        },
        Jc = function(a, b) {
            return G(this, a) / G(this, b)
        },
        Kc = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            var c = a instanceof hc,
                d = b instanceof hc;
            return c || d ? c && d ? a.hb == b.hb : !1 : a ==
                b
        },
        Lc = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = G(this, arguments[c]);
            return b
        };

    function Mc(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = gb(f, d);
            if (g instanceof oa) {
                if ("break" === g.g) break;
                if ("return" === g.g) return g
            }
        }
    }

    function Nc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof hb || b instanceof ua || b instanceof db) {
            var d = b.Hb(),
                e = d.length();
            return Mc(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Oc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Pc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Qc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Nc(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Sc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Tc =
        function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = za(d);
                ya(f, a, e, !0);
                return f
            }, b, c)
        },
        Uc = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            var d = this.g;
            return Rc(function(e) {
                var f = za(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Rc(a, b, c) {
        if ("string" === typeof b) return Mc(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof ua) return Mc(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        throw new TypeError("The value is not iterable.");
    }
    var Vc = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = G(this, a);
            if (!(f instanceof ua)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.g;
            d = G(this, d);
            var h = za(g);
            for (e(g, h); fb(h, b);) {
                var k = gb(h, d);
                if (k instanceof oa) {
                    if ("break" === k.g) break;
                    if ("return" === k.g) return k
                }
                var n = za(g);
                e(h, n);
                fb(n, c);
                h = n
            }
        },
        Wc = function(a) {
            a = G(this, a);
            var b = this.g,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Xc = function(a, b) {
            var c;
            a = G(this, a);
            b = G(this, b);
            if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
            if (a instanceof hb || a instanceof ua || a instanceof db) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : pa(b) && (c = a[b]);
            else if (a instanceof hc) return;
            return c
        },
        Yc = function(a, b) {
            return G(this, a) > G(this,
                b)
        },
        Zc = function(a, b) {
            return G(this, a) >= G(this, b)
        },
        $c = function(a, b) {
            a = G(this, a);
            b = G(this, b);
            a instanceof hc && (a = a.hb);
            b instanceof hc && (b = b.hb);
            return a === b
        },
        ad = function(a, b) {
            return !$c.call(this, a, b)
        },
        cd = function(a, b, c) {
            var d = [];
            G(this, a) ? d = G(this, b) : c && (d = G(this, c));
            var e = gb(this.g, d);
            if (e instanceof oa) return e
        },
        dd = function(a, b) {
            return G(this, a) < G(this, b)
        },
        ed = function(a, b) {
            return G(this, a) <= G(this, b)
        },
        fd = function(a, b) {
            return G(this, a) % G(this, b)
        },
        gd = function(a, b) {
            return G(this, a) * G(this, b)
        },
        hd = function(a) {
            return -G(this,
                a)
        },
        id = function(a) {
            return !G(this, a)
        },
        jd = function(a, b) {
            return !Kc.call(this, a, b)
        },
        kd = function() {
            return null
        },
        ld = function(a, b) {
            return G(this, a) || G(this, b)
        },
        md = function(a, b) {
            var c = G(this, a);
            G(this, b);
            return c
        },
        nd = function(a) {
            return G(this, a)
        },
        od = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        pd = function(a) {
            return new oa("return", G(this, a))
        },
        qd = function(a, b, c) {
            a = G(this, a);
            b = G(this, b);
            c = G(this, c);
            if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
            (a instanceof db || a instanceof ua || a instanceof hb) && a.set(b, c);
            return c
        },
        rd = function(a, b) {
            return G(this, a) - G(this, b)
        },
        sd = function(a, b, c) {
            a = G(this, a);
            var d = G(this, b),
                e = G(this, c);
            if (!Ea(d) || !Ea(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === G(this, d[h]))
                    if (f = G(this, e[h]), f instanceof oa) {
                        var k = f.g;
                        if ("break" === k) return;
                        if ("return" === k || "continue" === k) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = G(this, e[e.length - 1]), f instanceof oa && ("return" === f.g || "continue" ===
                    f.g))) return f
        },
        td = function(a, b, c) {
            return G(this, a) ? G(this, b) : G(this, c)
        },
        ud = function(a) {
            a = G(this, a);
            return a instanceof db ? "function" : typeof a
        },
        vd = function(a) {
            for (var b = this.g, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        wd = function(a, b, c, d) {
            var e = G(this, d);
            if (G(this, c)) {
                var f = gb(this.g, e);
                if (f instanceof oa) {
                    if ("break" === f.g) return;
                    if ("return" === f.g) return f
                }
            }
            for (; G(this, a);) {
                var g = gb(this.g, e);
                if (g instanceof oa) {
                    if ("break" === g.g) break;
                    if ("return" === g.g) return g
                }
                G(this,
                    b)
            }
        },
        xd = function(a) {
            return ~Number(G(this, a))
        },
        Ad = function(a, b) {
            return Number(G(this, a)) << Number(G(this, b))
        },
        Bd = function(a, b) {
            return Number(G(this, a)) >> Number(G(this, b))
        },
        Cd = function(a, b) {
            return Number(G(this, a)) >>> Number(G(this, b))
        },
        Dd = function(a, b) {
            return Number(G(this, a)) & Number(G(this, b))
        },
        Ed = function(a, b) {
            return Number(G(this, a)) ^ Number(G(this, b))
        },
        Fd = function(a, b) {
            return Number(G(this, a)) | Number(G(this, b))
        };
    var Hd = function() {
        this.g = new jb;
        Gd(this)
    };
    Hd.prototype.execute = function(a) {
        return Id(this.g.o(a))
    };
    var Jd = function(a, b, c) {
            return Id(a.g.C(b, c))
        },
        Gd = function(a) {
            var b = function(d, e) {
                lb(a.g, d, String(e))
            };
            b("control", 49);
            b("fn", 51);
            b("list", 7);
            b("map", 8);
            b("undefined", 44);
            var c = function(d, e) {
                kb(a.g, String(d), e)
            };
            c(0, xc);
            c(1, yc);
            c(2, zc);
            c(3, Ac);
            c(53, Dc);
            c(4, Ec);
            c(5, Fc);
            c(52, Gc);
            c(6, Hc);
            c(9, Fc);
            c(50, Ic);
            c(10, Jc);
            c(12, Kc);
            c(13, Lc);
            c(47, Oc);
            c(54, Pc);
            c(55, Qc);
            c(63, Vc);
            c(64, Sc);
            c(65, Tc);
            c(66, Uc);
            c(15, Wc);
            c(16, Xc);
            c(17, Xc);
            c(18, Yc);
            c(19, Zc);
            c(20, $c);
            c(21, ad);
            c(22, cd);
            c(23, dd);
            c(24, ed);
            c(25, fd);
            c(26, gd);
            c(27,
                hd);
            c(28, id);
            c(29, jd);
            c(45, kd);
            c(30, ld);
            c(32, md);
            c(33, md);
            c(34, nd);
            c(35, nd);
            c(46, od);
            c(36, pd);
            c(43, qd);
            c(37, rd);
            c(38, sd);
            c(39, td);
            c(40, ud);
            c(41, vd);
            c(42, wd);
            c(58, xd);
            c(57, Ad);
            c(60, Bd);
            c(61, Cd);
            c(56, Dd);
            c(62, Ed);
            c(59, Fd)
        };

    function Id(a) {
        if (a instanceof oa || a instanceof db || a instanceof ua || a instanceof hb || a instanceof hc || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };
    var Kd = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            Yh: a("consent"),
            xe: a("consent_always_fire"),
            $f: a("convert_case_to"),
            ag: a("convert_false_to"),
            bg: a("convert_null_to"),
            cg: a("convert_true_to"),
            dg: a("convert_undefined_to"),
            Jk: a("debug_mode_metadata"),
            Gb: a("function"),
            cf: a("instance_name"),
            Mi: a("live_only"),
            Ni: a("malware_disabled"),
            Oi: a("metadata"),
            Ti: a("original_activity_id"),
            Ok: a("original_vendor_template_id"),
            Nk: a("once_on_load"),
            Si: a("once_per_event"),
            Jg: a("once_per_load"),
            Qk: a("priority_override"),
            Rk: a("respected_consent_types"),
            Pg: a("setup_tags"),
            Rg: a("tag_id"),
            Sg: a("teardown_tags")
        }
    }();
    var fe;
    var ge = [],
        he = [],
        ie = [],
        je = [],
        ke = [],
        le = {},
        oe, pe, qe, re = function(a, b) {
            var c = {};
            c["function"] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        se = function(a, b) {
            var c = a["function"],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = le[c],
                f = {},
                g;
            for (g in a)
                if (a.hasOwnProperty(g))
                    if (0 === g.indexOf("vtp_")) e && d && d.dh && d.dh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g];
                    else if (g === Kd.xe.toString() && a[g]) {}
            e && d && d.bh && (f.vtp_gtmCachedValues = d.bh);
            if (b) {
                if (null == b.name) {
                    var h;
                    a: {
                        var k = b.index;
                        if (null == k) h = "";
                        else {
                            var n;
                            switch (b.type) {
                                case 2:
                                    n = ge[k];
                                    break;
                                case 1:
                                    n = je[k];
                                    break;
                                default:
                                    h = "";
                                    break a
                            }
                            var p = n && n[Kd.cf];
                            h = p ? String(p) : ""
                        }
                    }
                    b.name = h
                }
                e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
            }
            return void 0 !== e ? e(f) : fe(c, f, b)
        },
        ue = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
            return d
        },
        te = function(a,
            b, c) {
            if (Ea(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = ge[f];
                        if (!g || b.Ff(g)) return;
                        c[f] = !0;
                        var h = String(g[Kd.cf]);
                        try {
                            var k = ue(g, b, c);
                            k.vtp_gtmEventId = b.id;
                            b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
                            d = se(k, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            qe && (d = qe.ij(d, k))
                        } catch (w) {
                            b.wh && b.wh(w, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[te(a[n],
                            b, c)] = te(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = te(a[q], b, c);
                            pe && (p = p || r === pe.Sd);
                            d.push(r)
                        }
                        return pe && p ? pe.mj(d) : d.join("");
                    case "escape":
                        d = te(a[1], b, c);
                        if (pe && Ea(a[1]) && "macro" === a[1][0] && pe.Jj(a)) return pe.fk(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Ld[a[t]] && (d = Ld[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!je[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            lh: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v["function"] =
                            a[1];
                        var x = ve(v, b, c),
                            y = !!a[4];
                        return y || 2 !== x ? y !== (1 === x) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
                }
            }
            return a
        },
        ve = function(a, b, c) {
            try {
                return oe(ue(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        };
    var we = function(a, b, c) {
        var d;
        d = Error.call(this);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.o = a;
        this.g = c
    };
    la(we, Error);

    function xe(a, b) {
        if (Ea(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) xe(a[c], b[c])
        }
    };
    var ye = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.$j = a;
        this.o = b;
        this.g = []
    };
    la(ye, Error);
    var Ae = function() {
        return function(a, b) {
            a instanceof ye || (a = new ye(a, ze));
            b && a.g.push(b);
            throw a;
        }
    };

    function ze(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Da(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var De = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Be(a), f = 0; f < he.length; f++) {
                var g = he[f],
                    h = Ce(g, e);
                if (h) {
                    for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < je.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Ce = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f =
                    a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Be = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = ve(ie[c], a));
                return b[c]
            }
        };
    var Ee = {
        ij: function(a, b) {
            b[Kd.$f] && "string" === typeof a && (a = 1 == b[Kd.$f] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Kd.bg) && null === a && (a = b[Kd.bg]);
            b.hasOwnProperty(Kd.dg) && void 0 === a && (a = b[Kd.dg]);
            b.hasOwnProperty(Kd.cg) && !0 === a && (a = b[Kd.cg]);
            b.hasOwnProperty(Kd.ag) && !1 === a && (a = b[Kd.ag]);
            return a
        }
    };
    var Fe = function() {
        this.g = {}
    };

    function Ge(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e].call(void 0, b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new we(c, d, g);
            }
    }

    function He(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.g[d],
                    f = a.g.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Ge(e, b, d, g);
                    Ge(f, b, d, g)
                }
            }
        }
    };
    var Le = function() {
            var a = data.permissions || {},
                b = Ie.J,
                c = this;
            this.o = new Fe;
            this.g = {};
            var d = {},
                e = He(this.o, b, function() {
                    var f = arguments[0];
                    return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            La(a, function(f, g) {
                var h = {};
                La(g, function(k, n) {
                    var p = Je(k, n);
                    h[k] = p.assert;
                    d[k] || (d[k] = p.U)
                });
                c.g[f] = function(k, n) {
                    var p = h[k];
                    if (!p) throw Ke(k, {}, "The requested permission " + k + " is not configured.");
                    var q = Array.prototype.slice.call(arguments, 0);
                    p.apply(void 0, q);
                    e.apply(void 0, q)
                }
            })
        },
        Ne =
        function(a) {
            return Me.g[a] || function() {}
        };

    function Je(a, b) {
        var c = re(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Ke;
        try {
            return se(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new we(e, {}, "Permission " + e + " is unknown.");
                },
                U: function() {
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Ke(a, b, c) {
        return new we(a, b, c)
    };
    var Oe = !1;
    var Pe = {};
    Pe.Ik = Oa('');
    Pe.pj = Oa('');
    var Qe = Oe,
        Re = Pe.pj,
        Se = Pe.Ik;
    var hf = function(a, b) {
            return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
        },
        jf = function(a, b) {
            var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
            hf(b, "/*") && (b = b.slice(0, -2));
            hf(b, "?") && (b = b.slice(0, -1));
            var d = b.split("*");
            if (!c && 1 === d.length) return a === d[0];
            for (var e = -1, f = 0; f < d.length; f++) {
                var g = d[f];
                if (g) {
                    e = a.indexOf(g, e);
                    if (-1 === e || 0 === f && 0 !== e) return !1;
                    e += g.length
                }
            }
            if (c || e === a.length) return !0;
            var h = d[d.length - 1];
            return a.lastIndexOf(h) === a.length - h.length
        },
        kf = /^[a-z0-9-]+$/i,
        lf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
        nf = function(a, b) {
            var c;
            if (!(c = !mf(a))) {
                var d;
                a: {
                    var e = a.hostname.split(".");
                    if (2 > e.length) d = !1;
                    else {
                        for (var f = 0; f < e.length; f++)
                            if (!kf.exec(e[f])) {
                                d = !1;
                                break a
                            }
                        d = !0
                    }
                }
                c = !d
            }
            if (c) return !1;
            for (var g = 0; g < b.length; g++) {
                var h;
                var k = a,
                    n = b[g];
                if (!lf.exec(n)) throw Error("Invalid Wildcard");
                var p = n.slice(8),
                    q = p.slice(0, p.indexOf("/")),
                    r;
                var t = k.hostname,
                    u = q;
                if (0 !== u.indexOf("*.")) r = t.toLowerCase() === u.toLowerCase();
                else {
                    u = u.slice(2);
                    var v = t.toLowerCase().indexOf(u.toLowerCase());
                    r = -1 === v ? !1 : t.length === u.length ?
                        !0 : t.length !== u.length + v ? !1 : "." === t[v - 1]
                }
                if (r) {
                    var x = p.slice(p.indexOf("/"));
                    h = jf(k.pathname + k.search, x) ? !0 : !1
                } else h = !1;
                if (h) return !0
            }
            return !1
        },
        mf = function(a) {
            return "https:" === a.protocol && (!a.port || "443" === a.port)
        };
    var of = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i, pf = {
        Fn: "function",
        DustMap: "Object",
        List: "Array"
    }, M = function(a, b, c) {
        for (var d = 0; d < b.length; d++) {
            var e = of .exec(b[d]);
            if (!e) throw Error("Internal Error in " + a);
            var f = e[1],
                g = "!" === e[2],
                h = e[3],
                k = c[d];
            if (null == k) {
                if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
            } else if ("*" !== h) {
                var n = typeof k;
                k instanceof db ? n = "Fn" : k instanceof ua ? n = "List" : k instanceof hb ? n = "DustMap" : k instanceof hc && (n = "OpaqueValue");
                if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (pf[n] || n) + ", which does not match required type " + (pf[h] || h) + ".");
            }
        }
    };

    function qf(a) {
        return "" + a
    }

    function rf(a, b) {
        var c = [];
        return c
    };
    var sf = function(a, b) {
            var c = new db(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = G(this, d[e]);
                return b.apply(this, d)
            });
            c.Ib();
            return c
        },
        tf = function(a, b) {
            var c = new hb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Ba(e) ? c.set(d, sf(a + "_" + d, e)) : (Da(e) || m(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Ib();
            return c
        };
    var uf = function(a, b) {
        M(H(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new hb;
        return d = tf("AssertApiSubject", c)
    };
    var vf = function(a, b) {
        M(H(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof jc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new hb;
        return d = tf("AssertThatSubject", c)
    };

    function zf(a) {
        return function() {
            for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(qc(arguments[d], c));
            return pc(a.apply(null, b))
        }
    }
    var Bf = function() {
        for (var a = Math, b = Af, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = zf(a[e].bind(a)))
        }
        return c
    };
    var Cf = function(a) {
        var b;
        return b
    };
    var Df = function(a) {
        var b;
        return b
    };
    var Ef = function(a) {
        return encodeURI(a)
    };
    var Ff = function(a) {
        return encodeURIComponent(a)
    };
    var Gf = function(a) {
        M(H(this), ["message:?string"], arguments);
    };
    var Hf = function(a, b) {
        M(H(this), ["min:!number", "max:!number"], arguments);
        return Ha(a, b)
    };
    var N = function(a, b, c) {
        var d = a.g.g;
        if (!d) throw Error("Missing program state.");
        d.cj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var If = function() {
        N(this, "read_container_data");
        var a = new hb;
        a.set("containerId", 'GTM-585RXMV');
        a.set("version", '27');
        a.set("environmentName", '');
        a.set("debugMode", Qe);
        a.set("previewMode", Se);
        a.set("environmentMode", Re);
        a.Ib();
        return a
    };
    var Jf = {};
    Jf.sstECEnableData = !0;
    Jf.enableAdsEc = !0;
    Jf.sstFFConversionEnabled = !0;
    Jf.sstEnableAuid = !0;
    Jf.enableGbraidUpdate = !0;
    Jf.enable1pScripts = !0;
    Jf.enableGlobalEventDeveloperIds = !1;
    Jf.enableGa4OnoRemarketing = !1;
    Jf.omitAuidIfWbraidPresent = !1;
    Jf.sstEnableDclid = !0;
    Jf.reconcileCampaignFields = !1;
    Jf.enableEmFormCcd = !1;
    Jf.enableEmFormCcdPart2 = !1;
    Jf.enableUrlPassthrough = !0;
    Jf.enableLandingPageDeduplication = !0;
    Jf.enableGtagDestinationFps = !0;
    Jf.enableFloodlightPrerenderingBypass = !1;
    Jf.enableHashTempClientId = !0;
    Jf.enableTranslateUAParamsToClassic = !0;
    Jf.analyticsPrivateParamsExcluded = !1;
    Jf.requireGtagUserDataTos = !0;
    Jf.sendBeaconEnableExperimentPercentage = Number('') || 0;

    function Kf() {
        return pc(Jf)
    };
    var Lf = function() {
        return (new Date).getTime()
    };
    var Mf = function(a) {
        if (null === a) return "null";
        if (a instanceof ua) return "array";
        if (a instanceof db) return "function";
        if (a instanceof hc) {
            a = a.hb;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var Nf = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Qe || Se) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return pc(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(qc(c))
            })
        }
    };
    var Of = function(a) {
        return Na(qc(a, this.g))
    };
    var Pf = function(a) {
        return Number(qc(a, this.g))
    };
    var Qf = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var Rf = function(a, b, c) {
        var d = null,
            e = !1;
        M(H(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new hb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof hb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Af = "floor ceil round max min abs pow sqrt".split(" ");
    var Sf = function() {
            var a = {};
            return {
                yj: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                Ak: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        Tf = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return db.prototype.g.apply(a, c)
            }
        },
        Uf = function(a, b) {
            M(H(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var Vf = {};
    Vf.keys = function(a) {
        return new ua
    };
    Vf.values = function(a) {
        return new ua
    };
    Vf.entries = function(a) {
        return new ua
    };
    Vf.freeze = function(a) {
        return a
    };
    Vf.delete = function(a, b) {
        return !1
    };
    var Xf = function() {
        this.g = {};
        this.o = {};
    };
    Xf.prototype.get = function(a, b) {
        var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
        return c
    };
    Xf.prototype.add = function(a, b, c) {
        if (this.g.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.o.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.g[a] = c ? void 0 : Ba(b) ? sf(a, b) : tf(a, b)
    };
    var Zf = function(a, b, c) {
        if (a.o.hasOwnProperty(b)) throw "Attempting to add a private function which already exists: " + b + ".";
        if (a.g.hasOwnProperty(b)) throw "Attempting to add a private function with an existing API name: " + b + ".";
        a.o[b] = Ba(c) ? sf(b, c) : tf(b, c)
    };

    function Yf(a, b) {
        var c = void 0;
        return c
    };

    function $f() {
        var a = {};
        return a
    };
    var S = {
        Fb: "_ee",
        jc: "_syn_or_mod",
        Sk: "_uei",
        Tk: "_upi",
        Xc: "_eu",
        Pk: "_pci",
        Gg: "_is_passthrough_cid",
        Fg: "_is_linker_valid",
        jf: "_ntg",
        hf: "_nge",
        ac: "event_callback",
        Id: "event_timeout",
        Ia: "gtag.config",
        Pa: "gtag.get",
        ya: "purchase",
        Yb: "refund",
        Ab: "begin_checkout",
        Vb: "add_to_cart",
        Wb: "remove_from_cart",
        gi: "view_cart",
        fg: "add_to_wishlist",
        za: "view_item",
        Xb: "view_promotion",
        Ce: "select_promotion",
        Be: "select_item",
        Bb: "view_item_list",
        eg: "add_payment_info",
        fi: "add_shipping_info",
        eb: "value_key",
        pb: "value_callback",
        ba: "allow_ad_personalization_signals",
        Tc: "restricted_data_processing",
        Fc: "allow_google_signals",
        Ca: "cookie_expires",
        $b: "cookie_update",
        Uc: "session_duration",
        Nd: "session_engaged_time",
        Gd: "engagement_time_msec",
        La: "user_properties",
        Z: "transport_url",
        ia: "ads_data_redaction",
        Ea: "user_data",
        Oc: "first_party_collection",
        H: "ad_storage",
        P: "analytics_storage",
        ye: "region",
        Zf: "wait_for_update",
        Ba: "conversion_linker",
        Qa: "conversion_cookie_prefix",
        ma: "value",
        ka: "currency",
        Ag: "trip_type",
        ca: "items",
        qg: "passengers",
        Fe: "allow_custom_scripts",
        Eb: "session_id",
        wg: "quantity",
        tb: "transaction_id",
        rb: "language",
        Fd: "country",
        Ed: "allow_enhanced_conversions",
        Ke: "aw_merchant_id",
        Ie: "aw_feed_country",
        Je: "aw_feed_language",
        He: "discount",
        X: "developer_id",
        ng: "global_developer_id_string",
        lg: "event_developer_id_string",
        Od: "delivery_postal_code",
        Qe: "estimated_delivery_date",
        Oe: "shipping",
        Ue: "new_customer",
        Le: "customer_lifetime_value",
        Pe: "enhanced_conversions",
        Ec: "page_view",
        ra: "linker",
        R: "domains",
        cc: "decorate_forms",
        kg: "enhanced_conversions_automatic_settings",
        ni: "auto_detection_enabled",
        Se: "ga_temp_client_id",
        De: "user_engagement",
        ai: "app_remove",
        bi: "app_store_refund",
        ci: "app_store_subscription_cancel",
        di: "app_store_subscription_convert",
        ei: "app_store_subscription_renew",
        hi: "first_open",
        ii: "first_visit",
        ji: "in_app_purchase",
        ki: "session_start",
        li: "allow_display_features",
        cb: "campaign",
        Gc: "campaign_content",
        Hc: "campaign_id",
        Ic: "campaign_medium",
        Jc: "campaign_name",
        Kc: "campaign_source",
        Lc: "campaign_term",
        oa: "client_id",
        qa: "cookie_domain",
        Zb: "cookie_name",
        nb: "cookie_path",
        Ra: "cookie_flags",
        Mc: "custom_map",
        Ld: "groups",
        pg: "non_interaction",
        fb: "page_location",
        Ve: "page_path",
        Sa: "page_referrer",
        Sc: "page_title",
        Da: "send_page_view",
        sb: "send_to",
        Vc: "session_engaged",
        Nc: "euid_logged_in_state",
        Wc: "session_number",
        Gi: "tracking_id",
        ub: "url_passthrough",
        bc: "accept_incoming",
        Rc: "url_position",
        ug: "phone_conversion_number",
        rg: "phone_conversion_callback",
        sg: "phone_conversion_css_class",
        vg: "phone_conversion_options",
        Bi: "phone_conversion_ids",
        Ai: "phone_conversion_country_code",
        Cb: "aw_remarketing",
        Ge: "aw_remarketing_only",
        Ee: "gclid",
        mi: "auid",
        vi: "affiliation",
        jg: "tax",
        Ne: "list_name",
        ig: "checkout_step",
        hg: "checkout_option",
        wi: "coupon",
        xi: "promotions",
        Ka: "user_id",
        Ei: "retoken",
        Ja: "cookie_prefix",
        gg: "disable_merchant_reported_purchases",
        ui: "dc_natural_search",
        si: "dc_custom_params",
        og: "method",
        Fi: "search_term",
        ri: "content_type",
        zi: "optimize_id",
        yi: "experiments",
        qb: "google_signals"
    };
    S.Kd = "google_tld";
    S.Qd = "update";
    S.Re = "firebase_id";
    S.Pc = "ga_restrict_domain";
    S.Hd = "event_settings";
    S.Me = "dynamic_event_settings";
    S.fc = "user_data_settings";
    S.yg = "screen_name";
    S.Xe = "screen_resolution";
    S.Db = "_x_19";
    S.ob = "enhanced_client_id";
    S.Jd = "_x_20";
    S.Te = "internal_traffic_results";
    S.Pd = "traffic_type";
    S.Md = "referral_exclusion_definition";
    S.Qc = "ignore_referrer";
    S.oi = "content_group";
    S.Aa = "allow_interest_groups";
    S.We = "redact_device_info", S.mg = "geo_granularity";
    var cg = {};
    S.Dg = Object.freeze((cg[S.eg] = 1, cg[S.fi] = 1, cg[S.Vb] = 1, cg[S.Wb] = 1, cg[S.gi] = 1, cg[S.Ab] = 1, cg[S.Be] = 1, cg[S.Bb] = 1, cg[S.Ce] = 1, cg[S.Xb] = 1, cg[S.ya] = 1, cg[S.Yb] = 1, cg[S.za] = 1, cg[S.fg] = 1, cg));
    S.Ze = Object.freeze([S.ba, S.Fc, S.$b]);
    S.Qi = Object.freeze([].concat(S.Ze));
    S.$e = Object.freeze([S.Ca, S.Id, S.Uc, S.Nd, S.Gd]);
    S.Ri = Object.freeze([].concat(S.$e));
    var dg = {};
    S.ze = (dg[S.H] = "1", dg[S.P] = "2", dg);
    var eg = {};
    S.Yf = Object.freeze((eg[S.ba] = 1, eg[S.Ed] = 1, eg[S.Aa] = 1, eg[S.Cb] = 1, eg[S.Ge] = 1, eg[S.He] = 1, eg[S.Ie] = 1, eg[S.Je] = 1, eg[S.ca] = 1, eg[S.Ke] = 1, eg[S.Qa] = 1, eg[S.Ba] = 1, eg[S.qa] = 1, eg[S.Ca] = 1, eg[S.Ra] = 1, eg[S.Ja] = 1, eg[S.ka] = 1, eg[S.Le] = 1, eg[S.X] = 1, eg[S.gg] = 1, eg[S.Pe] = 1, eg[S.Qe] = 1, eg[S.Re] = 1, eg[S.Oc] = 1, eg[S.rb] = 1, eg[S.Ue] = 1, eg[S.fb] = 1, eg[S.Sa] = 1, eg[S.rg] = 1, eg[S.sg] = 1, eg[S.ug] = 1, eg[S.vg] = 1, eg[S.Tc] = 1, eg[S.Da] = 1, eg[S.sb] = 1, eg[S.Od] = 1, eg[S.tb] = 1, eg[S.Z] = 1, eg[S.Qd] = 1, eg[S.ub] = 1, eg[S.Ea] = 1, eg[S.Ka] = 1, eg[S.ma] = 1,
        eg));
    var fg = {
        gh: "IN",
        Fh: "IN-OR"
    };
    var gg = {},
        hg = function(a, b) {
            gg[a] = gg[a] || [];
            gg[a][b] = !0
        },
        ig = function(a) {
            for (var b = [], c = gg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
            for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
            return b.join("")
        },
        jg = function() {
            for (var a = [], b = gg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
            return 0 < a.length ? a : void 0
        };
    var kg = function(a) {
        hg("GTM", a)
    };
    var lg = new function(a, b) {
        this.g = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var ng = function() {
        var a = mg,
            b = "Df";
        if (a.Df && a.hasOwnProperty(b)) return a.Df;
        var c = new a;
        a.Df = c;
        a.hasOwnProperty(b);
        return c
    };
    var mg = function() {
        var a = {};
        this.g = function() {
            var b = lg.g,
                c = lg.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.o = function() {
            a[lg.g] = !0
        }
    };
    var og = [];

    function pg() {
        var a = Hb("google_tag_data", {});
        a.ics || (a.ics = {
            entries: {},
            set: qg,
            update: rg,
            addListener: sg,
            notifyListeners: tg,
            active: !1,
            usedDefault: !1,
            usedUpdate: !1,
            accessedDefault: !1,
            accessedAny: !1,
            wasSetLate: !1
        });
        return a.ics
    }

    function qg(a, b, c, d, e, f) {
        var g = pg();
        g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
        g.active = !0;
        g.usedDefault = !0;
        if (void 0 != b) {
            var h = g.entries,
                k = h[a] || {},
                n = k.region,
                p = c && m(c) ? c.toUpperCase() : void 0;
            d = d.toUpperCase();
            e = e.toUpperCase();
            if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
                var q = !!(f && 0 < f && void 0 === k.update),
                    r = {
                        region: p,
                        initial: "granted" === b,
                        update: k.update,
                        quiet: q
                    };
                if ("" !== d || !1 !== k.initial) h[a] = r;
                q && z.setTimeout(function() {
                    h[a] === r && r.quiet && (r.quiet = !1, ug(a), tg(), hg("TAGGING",
                        2))
                }, f)
            }
        }
    }

    function rg(a, b) {
        var c = pg();
        c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
        c.active = !0;
        c.usedUpdate = !0;
        if (void 0 != b) {
            var d = vg(c, a),
                e = c.entries,
                f = e[a] = e[a] || {};
            f.update = "granted" === b;
            var g = vg(c, a);
            f.quiet ? (f.quiet = !1, ug(a)) : g !== d && ug(a)
        }
    }

    function sg(a, b) {
        og.push({
            uf: a,
            tj: b
        })
    }

    function ug(a) {
        for (var b = 0; b < og.length; ++b) {
            var c = og[b];
            Ea(c.uf) && -1 !== c.uf.indexOf(a) && (c.Bh = !0)
        }
    }

    function tg(a, b) {
        for (var c = 0; c < og.length; ++c) {
            var d = og[c];
            if (d.Bh) {
                d.Bh = !1;
                try {
                    d.tj({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    }

    function vg(a, b) {
        var c = a.entries[b] || {};
        return void 0 !== c.update ? c.update : c.initial
    }
    var wg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return vg(b, a)
        },
        xg = function(a) {
            var b = pg();
            b.accessedDefault = !0;
            return (b.entries[a] || {}).initial
        },
        yg = function(a) {
            var b = pg();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        zg = function() {
            if (!ng().g()) return !1;
            var a = pg();
            a.accessedAny = !0;
            return a.active
        },
        Ag = function() {
            var a = pg();
            a.accessedDefault = !0;
            return a.usedDefault
        },
        Bg = function(a, b) {
            pg().addListener(a, b)
        },
        Cg = function(a, b) {
            pg().notifyListeners(a, b)
        },
        Dg = function(a, b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!yg(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Bg(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Eg = function(a, b) {
            function c() {
                for (var f = [], g = 0; g < d.length; g++) {
                    var h = d[g];
                    !1 === wg(h) || e[h] || (f.push(h), e[h] = !0)
                }
                return f
            }
            var d = m(b) ? [b] : b,
                e = {};
            c().length !== d.length && Bg(d, function(f) {
                var g = c();
                0 < g.length && (f.uf = g, a(f))
            })
        };

    function Fg() {}

    function Gg() {};

    function Hg(a) {
        for (var b = [], c = 0; c < Ig.length; c++) {
            var d = a(Ig[c]);
            b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
        }
        return b.join("")
    }
    var Ig = [S.H, S.P],
        Jg = function(a) {
            var b = a[S.ye];
            b && kg(40);
            var c = a[S.Zf];
            c && kg(41);
            for (var d = Ea(b) ? b : [b], e = {
                    yc: 0
                }; e.yc < d.length; e = {
                    yc: e.yc
                }, ++e.yc) La(a, function(f) {
                return function(g, h) {
                    if (g !== S.ye && g !== S.Zf) {
                        var k = d[f.yc],
                            n = fg.gh,
                            p = fg.Fh;
                        pg().set(g, h, k, n, p, c)
                    }
                }
            }(e))
        },
        Kg = 0,
        Lg = function(a, b) {
            La(a, function(e, f) {
                pg().update(e, f)
            });
            Cg(b.eventId, b.priorityId);
            var c = Ta(),
                d = c - Kg;
            Kg && 0 <= d && 1E3 > d && kg(66);
            Kg = c
        },
        Mg = function(a) {
            var b = wg(a);
            return void 0 != b ? b : !0
        },
        Ng = function() {
            return "G1" + Hg(wg)
        },
        Og = function(a, b) {
            Bg(a,
                b)
        },
        Pg = function(a, b) {
            Eg(a, b)
        },
        Qg = function(a, b) {
            Dg(a, b)
        };
    var Sg = function(a) {
            return Rg ? I.querySelectorAll(a) : null
        },
        Tg = function(a, b) {
            if (!Rg) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!I.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        Ug = !1;
    if (I.querySelectorAll) try {
        var Vg = I.querySelectorAll(":root");
        Vg && 1 == Vg.length && Vg[0] == I.documentElement && (Ug = !0)
    } catch (a) {}
    var Rg = Ug;
    var Wg = function(a) {
            return null == a ? "" : m(a) ? Qa(String(a)) : "e0"
        },
        Yg = function(a) {
            return a.replace(Xg, "")
        },
        $g = function(a) {
            return Zg(a.replace(/\s/g, ""))
        },
        Zg = function(a) {
            return Qa(a.replace(ah, "").toLowerCase())
        },
        ch = function(a) {
            a = a.replace(/[\s-()/.]/g, "");
            "+" !== a.charAt(0) && (a = "+" + a);
            return bh.test(a) ? a : "e0"
        },
        eh = function(a) {
            var b = a.toLowerCase().split("@");
            if (2 == b.length) {
                var c = b[0];
                /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
                c = c + "@" + b[1];
                if (dh.test(c)) return c
            }
            return "e0"
        },
        hh = function(a,
            b) {
            window.Promise || b([]);
            Promise.all(a.map(function(c) {
                return c.value && -1 !== fh.indexOf(c.name) ? gh(c.value).then(function(d) {
                    c.value = d
                }) : Promise.resolve()
            })).then(function() {
                b(a)
            }).catch(function() {
                b([])
            })
        },
        gh = function(a) {
            if ("" === a || "e0" === a) return Promise.resolve(a);
            if (z.crypto && z.crypto.subtle) try {
                var b = ih(a);
                return z.crypto.subtle.digest("SHA-256", b).then(function(c) {
                    var d = Array.from(new Uint8Array(c)).map(function(e) {
                        return String.fromCharCode(e)
                    }).join("");
                    return z.btoa(d).replace(/\+/g, "-").replace(/\//g,
                        "_").replace(/=+$/, "")
                }).catch(function() {
                    return "e2"
                })
            } catch (c) {
                return Promise.resolve("e2")
            } else return Promise.resolve("e1")
        },
        ih = function(a) {
            var b;
            if (z.TextEncoder) b = (new z.TextEncoder("utf-8")).encode(a);
            else {
                for (var c = [], d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
                }
                b = new Uint8Array(c)
            }
            return b
        },
        ah = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g,
        dh = /^\S+@\S+\.\S+$/,
        bh = /^\+\d{10,15}$/,
        Xg = /[.~]/g,
        jh = {},
        kh = (jh.email = "em", jh.phone_number = "pn", jh.first_name = "fn", jh.last_name = "ln", jh.street = "sa", jh.city = "ct", jh.region = "rg", jh.country = "co", jh.postal_code = "pc", jh.error_code = "ec", jh),
        lh = function(a, b) {
            function c(n, p, q) {
                var r = n[p];
                Ea(r) || (r = [r]);
                for (var t = 0; t < r.length; ++t) {
                    var u = Wg(r[t]);
                    "" !== u && f.push({
                        name: p,
                        value: q(u),
                        index: void 0
                    })
                }
            }

            function d(n, p, q, r) {
                var t = Wg(n[p]);
                "" !== t && f.push({
                    name: p,
                    value: q(t),
                    index: r
                })
            }

            function e(n) {
                return function(p) {
                    kg(64);
                    return n(p)
                }
            }
            var f = [];
            if ("https:" === z.location.protocol) {
                c(a, "email", eh);
                c(a, "phone_number", ch);
                c(a, "first_name", e($g));
                c(a, "last_name", e($g));
                var g = a.home_address || {};
                c(g, "street", e(Zg));
                c(g, "city", e(Zg));
                c(g, "postal_code", e(Yg));
                c(g, "region", e(Zg));
                c(g, "country", e(Yg));
                var h = a.address || {};
                Ea(h) || (h = [h]);
                for (var k = 0; k < h.length; k++) d(h[k], "first_name", $g, k), d(h[k], "last_name", $g, k), d(h[k], "street", Zg, k), d(h[k], "city", Zg, k), d(h[k], "postal_code", Yg, k), d(h[k],
                    "region", Zg, k), d(h[k], "country", Yg, k);
                hh(f, b)
            } else f.push({
                name: "error_code",
                value: "e3",
                index: void 0
            }), b(f)
        },
        mh = function(a, b) {
            lh(a, function(c) {
                for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
                    var g = c[f].name,
                        h = c[f].value,
                        k = c[f].index,
                        n = kh[g];
                    n && h && (-1 === fh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
                }
                1 === c.length && "error_code" === c[0].name && (e = 0);
                b(encodeURIComponent(d.join("~")), e)
            })
        },
        nh = function(a) {
            if (z.Promise) try {
                return new Promise(function(b) {
                    mh(a,
                        function(c, d) {
                            b({
                                pe: c,
                                Xk: d
                            })
                        })
                })
            } catch (b) {}
        },
        fh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
    var oh = {},
        T = z.google_tag_manager = z.google_tag_manager || {},
        ph = Math.random();
    oh.Wd = "4d0";
    oh.aa = "dataLayer";
    oh.$h = "ChEI8PXukgYQn6eJu+W/s6T3ARIkAPsa7TX1w8hu9l3gqpWFRflUgs+vXUy7aieFzuErySk/anjKGgKQng\x3d\x3d";
    var qh = {
            __cl: !0,
            __ecl: !0,
            __ehl: !0,
            __evl: !0,
            __fal: !0,
            __fil: !0,
            __fsl: !0,
            __hl: !0,
            __jel: !0,
            __lcl: !0,
            __sdl: !0,
            __tl: !0,
            __ytl: !0
        },
        rh = {
            __paused: !0,
            __tg: !0
        },
        sh;
    for (sh in qh) qh.hasOwnProperty(sh) && (rh[sh] = !0);
    oh.Dc = "www.googletagmanager.com";
    var th, uh = oh.Dc + "/gtm.js";
    th = uh;
    var vh = Oa(""),
        wh = null,
        xh = null,
        Fh = {},
        Gh = {},
        Hh = function() {
            var a = T.sequence || 1;
            T.sequence = a + 1;
            return a
        };
    oh.Zh = "";
    var Ih = "";
    oh.Xd = Ih;
    var Jh = new Ia,
        Kh = {},
        Lh = {},
        Oh = {
            name: oh.aa,
            set: function(a, b) {
                oc($a(a, b), Kh);
                Mh()
            },
            get: function(a) {
                return Nh(a, 2)
            },
            reset: function() {
                Jh = new Ia;
                Kh = {};
                Mh()
            }
        },
        Nh = function(a, b) {
            return 2 != b ? Jh.get(a) : Ph(a)
        },
        Ph = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Kh, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Qh = function(a, b) {
            Lh.hasOwnProperty(a) || (Jh.set(a, b), oc($a(a, b), Kh), Mh())
        },
        Rh = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Nh(c, 1);
                if (Ea(d) || nc(d)) d = oc(d);
                Lh[c] = d
            }
        },
        Mh = function(a) {
            La(Lh, function(b, c) {
                Jh.set(b, c);
                oc($a(b), Kh);
                oc($a(b, c), Kh);
                a && delete Lh[b]
            })
        },
        Sh = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Ph(a) : Jh.get(a);
            "array" === lc(d) || "object" === lc(d) ? c = oc(d) : c = d;
            return c
        };
    var Th, Uh = !1;

    function Vh() {
        Uh = !0;
        Th = Th || {}
    }
    var Wh = function(a) {
        Uh || Vh();
        return Th[a]
    };
    var Xh = function(a) {
        if (I.hidden) return !0;
        var b = a.getBoundingClientRect();
        if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
        var c = z.getComputedStyle(a, null);
        if ("hidden" === c.visibility) return !0;
        for (var d = a, e = c; d;) {
            if ("none" === e.display) return !0;
            var f = e.opacity,
                g = e.filter;
            if (g) {
                var h = g.indexOf("opacity(");
                0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
            }
            if (void 0 !== f && 0 >= f) return !0;
            (d = d.parentElement) && (e = z.getComputedStyle(d,
                null))
        }
        return !1
    };
    var fi = /:[0-9]+$/,
        gi = function(a, b, c, d) {
            for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
                var h = f[g].split("=");
                if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
                    var k = h.slice(1).join("=");
                    if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
                    e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
                }
            }
            return c ? e : void 0
        },
        ji = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = hi(a.protocol) || hi(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port :
                z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(fi, "").toLowerCase());
            return ii(a, b, c, d, e)
        },
        ii = function(a, b, c, d, e) {
            var f, g = hi(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ki(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(fi, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" ===
                        g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || hg("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var k = f.split("/");
                    0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
                    f = k.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = gi(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f = a && a.href
            }
            return f
        },
        hi = function(a) {
            return a ? a.replace(":",
                "").toLowerCase() : ""
        },
        ki = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        li = function(a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || hg("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(fi, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        mi = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !==
                        p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = li(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var k = "" + f + g + h;
            "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
            return k
        };
    var ni = {};
    var pi = function(a, b, c) {
            if (a) {
                var d = a.element,
                    e = {
                        Za: a.Za,
                        tagName: d.tagName,
                        type: 1
                    };
                b && (e.querySelector = oi(d));
                c && (e.isVisible = !Xh(d));
                return e
            }
        },
        si = function(a) {
            if (0 != a.length) {
                var b;
                b = qi(a, function(c) {
                    return !ri.test(c.Za)
                });
                b = qi(b, function(c) {
                    return "INPUT" === c.element.tagName.toUpperCase()
                });
                b = qi(b, function(c) {
                    return !Xh(c.element)
                });
                return b[0]
            }
        },
        qi = function(a, b) {
            if (1 >= a.length) return a;
            var c = a.filter(b);
            return 0 == c.length ? a : c
        },
        oi = function(a) {
            var b;
            if (a === I.body) b = "body";
            else {
                var c;
                if (a.id) c = "#" + a.id;
                else {
                    var d;
                    if (a.parentElement) {
                        var e;
                        a: {
                            var f = a.parentElement;
                            if (f) {
                                for (var g = 0; g < f.childElementCount; g++)
                                    if (f.children[g] === a) {
                                        e = g + 1;
                                        break a
                                    }
                                e = -1
                            } else e = 1
                        }
                        d = oi(a.parentElement) + ">:nth-child(" + e + ")"
                    } else d = "";
                    c = d
                }
                b = c
            }
            return b
        },
        ti = !0,
        ui = !1;
    ni.Wh = "true";
    var vi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),
        wi = new RegExp(/@(gmail|googlemail)\./i),
        ri = new RegExp(/support|noreply/i),
        xi = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "),
        yi = ["BR"],
        zi = {},
        Ai = function(a) {
            a = a || {
                uc: !0,
                vc: !0
            };
            a.xb = a.xb || {
                email: !0,
                phone: !0,
                Zg: !0
            };
            var b, c = a,
                d = !!c.uc + "." + !!c.vc;
            c && c.cd && c.cd.length && (d += "." + c.cd.join("."));
            c && c.xb && (d += "." + c.xb.email + "." + c.xb.phone + "." + c.xb.Zg);
            b = d;
            var e = zi[b];
            if (e && 200 > Ta() - e.timestamp) return e.result;
            var f;
            var g = [],
                h = I.body;
            if (h) {
                for (var k =
                        h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
                    var p = k[n];
                    if (!(0 <= xi.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
                        for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++)
                            if (!(0 <= yi.indexOf(p.children[r].tagName.toUpperCase()))) {
                                q = !0;
                                break
                            }
                        q || g.push(p)
                    }
                }
                f = {
                    elements: g,
                    status: 1E4 < k.length ? "2" : "1"
                }
            } else f = {
                elements: g,
                status: "4"
            };
            var t = f,
                u = t.status,
                v = [],
                x;
            if (a.xb && a.xb.email) {
                for (var y = t.elements, w = [], A = 0; A < y.length; A++) {
                    var B = y[A],
                        E = B.textContent;
                    "INPUT" === B.tagName.toUpperCase() &&
                        B.value && (E = B.value);
                    if (E) {
                        var C = E.match(vi);
                        if (C) {
                            var D = C[0],
                                F;
                            if (z.location) {
                                var R = ii(z.location, "host", !0);
                                F = 0 <= D.toLowerCase().indexOf(R)
                            } else F = !1;
                            F || w.push({
                                element: B,
                                Za: D
                            })
                        }
                    }
                }
                var J = a && a.cd;
                if (J && 0 !== J.length) {
                    for (var Q = [], O = 0; O < w.length; O++) {
                        for (var P = !0, L = 0; L < J.length; L++) {
                            var Z = J[L];
                            if (Z && Tg(w[O].element, Z)) {
                                P = !1;
                                break
                            }
                        }
                        P && Q.push(w[O])
                    }
                    v = Q
                } else v = w;
                x = si(v);
                10 < w.length && (u = "3")
            }
            var ba = [];
            !a.tk && x && (v = [x]);
            for (var U = 0; U < v.length; U++) ba.push(pi(v[U], a.uc, a.vc));
            var qa = {
                elements: ba.slice(0, 10),
                ek: pi(x, a.uc, a.vc),
                status: u
            };
            zi[b] = {
                timestamp: Ta(),
                result: qa
            };
            return qa
        },
        Bi = function(a) {
            return a.tagName + ":" + a.isVisible + ":" + a.Za.length + ":" + wi.test(a.Za)
        };
    var Ci = function(a, b, c) {
            if (c) {
                var d = c.selector_type,
                    e = String(c.value),
                    f;
                if ("js_variable" === d) {
                    e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
                    for (var g = e.split(","), h = 0; h < g.length; h++) {
                        var k = g[h].trim();
                        if (k) {
                            if (0 === k.indexOf("dataLayer.")) f = Nh(k.substring(10));
                            else {
                                var n = k.split(".");
                                f = z[n.shift()];
                                for (var p = 0; p < n.length; p++) f = f && f[n[p]]
                            }
                            if (void 0 !== f) break
                        }
                    }
                } else if ("css_selector" === d && Rg) {
                    var q = Sg(e);
                    if (q && 0 < q.length) {
                        f = [];
                        for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Tb(q[r]) ||
                            Qa(q[r].value));
                        f = 1 === f.length ? f[0] : f
                    }
                }
                f && (a[b] = f)
            }
        },
        Di = function(a) {
            if (a) {
                var b = {};
                Ci(b, "email", a.email);
                Ci(b, "phone_number", a.phone);
                b.address = [];
                for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
                    var e = {};
                    Ci(e, "first_name", c[d].first_name);
                    Ci(e, "last_name", c[d].last_name);
                    Ci(e, "street", c[d].street);
                    Ci(e, "city", c[d].city);
                    Ci(e, "region", c[d].region);
                    Ci(e, "country", c[d].country);
                    Ci(e, "postal_code", c[d].postal_code);
                    b.address.push(e)
                }
                return b
            }
        },
        Ei = function(a) {
            if (a) switch (a.mode) {
                case "selectors":
                    return Di(a.selectors);
                case "auto_detect":
                    var b;
                    var c = a.auto_detect;
                    if (c) {
                        var d = Ai({
                                uc: !1,
                                vc: !1,
                                cd: c.exclude_element_selectors,
                                xb: {
                                    email: !!c.email,
                                    phone: !!c.phone,
                                    Zg: !!c.address
                                }
                            }).elements,
                            e = {};
                        if (0 < d.length)
                            for (var f = 0; f < d.length; f++) {
                                var g = d[f];
                                if (1 === g.type) {
                                    e.email = g.Za;
                                    break
                                }
                            }
                        b = e
                    } else b = void 0;
                    return b
            }
        },
        Fi = function(a) {
            switch (a.enhanced_conversions_mode) {
                case "manual":
                    var b = a.enhanced_conversions_manual_var;
                    return void 0 !== b ? b : z.enhanced_conversion_data;
                case "automatic":
                    return Di(a[S.kg])
            }
        };
    var Gi = {},
        Hi = function(a, b) {
            if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
            void 0 === Gi[a] && (Gi[a] = Math.floor(Math.random() * b));
            return Gi[a]
        };
    var Ii = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var Ji = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                k && c && (k = decodeURIComponent(k));
                d.push(k)
            }
        }
        return d
    };
    var Ki = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        Li = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };

    function Mi(a) {
        return "null" !== a.origin
    };
    var Pi = function(a, b, c, d) {
            return Ni(d) ? Ji(a, String(b || Oi()), c) : []
        },
        Si = function(a, b, c, d, e) {
            if (Ni(e)) {
                var f = Qi(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Ri(f, function(g) {
                        return g.fe
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Ri(f, function(g) {
                        return g.md
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Ti(a, b, c, d) {
        var e = Oi(),
            f = window;
        Mi(f) && (f.document.cookie = a);
        var g = Oi();
        return e != g || void 0 != c && 0 <= Pi(b, g, !1, d).indexOf(c)
    }
    var Xi = function(a, b, c, d) {
            function e(x, y, w) {
                if (null == w) return delete h[y], x;
                h[y] = w;
                return x + "; " + y + "=" + w
            }

            function f(x, y) {
                if (null == y) return delete h[y], x;
                h[y] = !0;
                return x + "; " + y
            }
            if (!Ni(c.jb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Ui(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var k;
            c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
            g = e(g, "expires", k);
            g = e(g, "max-age", c.Uj);
            g = e(g, "samesite",
                c.qk);
            c.sk && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Vi(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (x) {
                        q = x;
                        continue
                    }
                    r = !0;
                    if (!Wi(u, c.path) && Ti(v, a, b, c.jb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Wi(n, c.path) ? 1 : Ti(g, a, b, c.jb) ? 0 : 1
        },
        Yi = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Xi(a,
                b, c)
        };

    function Ri(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                k = b(h);
            k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function Qi(a, b, c) {
        for (var d = [], e = Pi(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var k = g.shift();
                k && (k = k.split("-"), d.push({
                    id: g.join("."),
                    fe: 1 * k[0] || 1,
                    md: 1 * k[1] || 1
                }))
            }
        }
        return d
    }
    var Ui = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Zi = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        $i = /(^|\.)doubleclick\.net$/i,
        Wi = function(a, b) {
            return $i.test(window.document.location.hostname) || "/" === b && Zi.test(a)
        },
        Oi = function() {
            return Mi(window) ? window.document.cookie : ""
        },
        Vi = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            $i.test(e) || Zi.test(e) || a.push("none");
            return a
        },
        Ni = function(a) {
            if (!ng().g() || !a || !zg()) return !0;
            if (!yg(a)) return !1;
            var b = wg(a);
            return null == b ? !0 : !!b
        };
    var aj = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ Ii(a) & 2147483647) : String(b)
        },
        bj = function(a) {
            return [aj(a), Math.round(Ta() / 1E3)].join(".")
        },
        ej = function(a, b, c, d, e) {
            var f = cj(b);
            return Si(a, f, dj(c), d, e)
        },
        fj = function(a, b, c, d) {
            var e = "" + cj(c),
                f = dj(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        },
        cj = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        dj = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length -
                1
        };

    function gj(a, b, c) {
        var d, e = Number(null != a.Pb ? a.Pb : void 0);
        0 !== e && (d = new Date((b || Ta()) + 1E3 * (e || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: d
        }
    };
    var hj = ["1"],
        ij = {},
        jj = {},
        nj = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = kj(a.prefix);
            if (!ij[c] && !lj(c, a.path, a.domain) && b) {
                var d = kj(a.prefix),
                    e = bj();
                if (0 === mj(d, e, a)) {
                    var f = Hb("google_tag_data", {});
                    f._gcl_au ? hg("GTM", 57) : f._gcl_au = e
                }
                lj(c, a.path, a.domain)
            }
        };

    function mj(a, b, c, d) {
        var e = fj(b, "1", c.domain, c.path),
            f = gj(c, d);
        f.jb = "ad_storage";
        return Yi(a, e, f)
    }

    function lj(a, b, c) {
        var d = ej(a, b, c, hj, "ad_storage");
        if (!d) return !1;
        var e = d.split(".");
        5 === e.length ? (ij[a] = e.slice(0, 2).join("."), jj[a] = {
            id: e.slice(2, 4).join("."),
            uh: Number(e[4]) || 0
        }) : 3 === e.length ? jj[a] = {
            id: e.slice(0, 2).join("."),
            uh: Number(e[2]) || 0
        } : ij[a] = d;
        return !0
    }

    function kj(a) {
        return (a || "_gcl") + "_au"
    };
    var oj = function(a) {
        for (var b = [], c = I.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Xf: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function pj(a, b) {
        var c = oj(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Xf] || (d[c[e].Xf] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    Fa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Xf].push(g)
            }
        }
        return d
    };

    function qj() {
        for (var a = rj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function sj() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var rj, tj;

    function uj(a) {
        function b(k) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = tj[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return k
        }
        rj = rj || sj();
        tj = tj || qj();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var vj;
    var zj = function() {
            var a = wj,
                b = xj,
                c = yj(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Qb(I, "mousedown", d);
                Qb(I, "keyup", d);
                Qb(I, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Aj = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            yj().decorators.push(f)
        },
        Bj = function(a, b, c) {
            for (var d = yj().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var k = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (k && (p || n !== I.location.hostname))
                        for (var q = 0; q < k.length; q++)
                            if (k[q] instanceof RegExp) {
                                if (k[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback())
                }
            }
            return e
        };

    function yj() {
        var a = Hb("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Cj = /(.*?)\*(.*?)\*(.*)/,
        Dj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        Ej = /^(?:www\.|m\.|amp\.)+/,
        Fj = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function Gj(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
    }
    var Ij = function(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b,
                        f = e.push,
                        g, h = String(d);
                    rj = rj || sj();
                    tj = tj || qj();
                    for (var k = [], n = 0; n < h.length; n += 3) {
                        var p = n + 1 < h.length,
                            q = n + 2 < h.length,
                            r = h.charCodeAt(n),
                            t = p ? h.charCodeAt(n + 1) : 0,
                            u = q ? h.charCodeAt(n + 2) : 0,
                            v = r >> 2,
                            x = (r & 3) << 4 | t >> 4,
                            y = (t & 15) << 2 | u >> 6,
                            w = u & 63;
                        q || (w = 64, p || (y = 64));
                        k.push(rj[v], rj[x], rj[y], rj[w])
                    }
                    g = k.join("");
                    f.call(e, g)
                }
            }
        var A = b.join("*");
        return ["1", Hj(A),
            A
        ].join("*")
    };

    function Hj(a, b) {
        var c = [z.navigator.userAgent, (new Date).getTimezoneOffset(), Fb.userLanguage || Fb.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = vj)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        vj = d;
        for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ vj[(k ^ c.charCodeAt(n)) & 255];
        return ((k ^ -1) >>> 0).toString(36)
    }

    function Jj() {
        return function(a) {
            var b = li(z.location.href),
                c = b.search.replace("?", ""),
                d = gi(c, "_gl", !1, !0) || "";
            a.query = Kj(d) || {};
            var e = ji(b, "fragment").match(Gj("_gl"));
            a.fragment = Kj(e && e[3] || "") || {}
        }
    }

    function Lj(a, b) {
        var c = Gj(a).exec(b),
            d = b;
        if (c) {
            var e = c[2],
                f = c[4];
            d = c[1];
            f && (d = d + e + f)
        }
        return d
    }
    var Mj = function(a, b) {
            b || (b = "_gl");
            var c = Fj.exec(a);
            if (!c) return "";
            var d = c[1],
                e = Lj(b, (c[2] || "").slice(1)),
                f = Lj(b, (c[3] || "").slice(1));
            e.length && (e = "?" + e);
            f.length && (f = "#" + f);
            return "" + d + e + f
        },
        Nj = function(a) {
            var b = Jj(),
                c = yj();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d
        },
        Kj = function(a) {
            try {
                var b = Oj(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = uj(d[e + 1]);
                        c[f] = g
                    }
                    hg("TAGGING", 6);
                    return c
                }
            } catch (h) {
                hg("TAGGING",
                    8)
            }
        };

    function Oj(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Cj.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    k;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === Hj(h, p)) {
                            k = !0;
                            break a
                        }
                    k = !1
                }
                if (k) return h;
                hg("TAGGING", 7)
            }
        }
    }

    function Pj(a, b, c, d) {
        function e(p) {
            p = Lj(a, p);
            var q = p.charAt(p.length - 1);
            p && "&" !== q && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        var f = Fj.exec(c);
        if (!f) return "";
        var g = f[1],
            h = f[2] || "",
            k = f[3] || "",
            n = a + "=" + b;
        d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
        return "" + g + h + k
    }

    function Qj(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(),
            d = Bj(b, 1, c),
            e = Bj(b, 2, c),
            f = Bj(b, 3, c);
        if (Xa(d)) {
            var g = Ij(d);
            c ? Rj("_gl", g, a) : Sj("_gl", g, a, !1)
        }
        if (!c && Xa(e)) {
            var h = Ij(e);
            Sj("_gl", h, a, !0)
        }
        for (var k in f)
            if (f.hasOwnProperty(k)) a: {
                var n = k,
                    p = f[k],
                    q = a;
                if (q.tagName) {
                    if ("a" === q.tagName.toLowerCase()) {
                        Sj(n, p, q);
                        break a
                    }
                    if ("form" === q.tagName.toLowerCase()) {
                        Rj(n, p, q);
                        break a
                    }
                }
                "string" == typeof q && Pj(n, p, q)
            }
    }

    function Sj(a, b, c, d) {
        if (c.href) {
            var e = Pj(a, b, c.href, void 0 === d ? !1 : d);
            sb.test(e) && (c.href = e)
        }
    }

    function Rj(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
                    var h = e[g];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        f = !0;
                        break
                    }
                }
                if (!f) {
                    var k = I.createElement("input");
                    k.setAttribute("type", "hidden");
                    k.setAttribute("name", a);
                    k.setAttribute("value", b);
                    c.appendChild(k)
                }
            } else if ("post" === d) {
                var n = Pj(a, b, c.action);
                sb.test(n) && (c.action = n)
            }
        }
    }

    function wj(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || Qj(e, e.hostname)
            }
        } catch (g) {}
    }

    function xj(a) {
        try {
            if (a.action) {
                var b = ji(li(a.action), "host");
                Qj(a, b)
            }
        } catch (c) {}
    }
    var Tj = function(a, b, c, d) {
            zj();
            Aj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        Uj = function(a, b) {
            zj();
            Aj(a, [ii(z.location, "host", !0)], b, !0, !0)
        },
        Vj = function() {
            var a = I.location.hostname,
                b = Dj.exec(I.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(Ej, ""),
                k = e.replace(Ej, ""),
                n;
            if (!(n = h === k)) {
                var p = "." + k;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        Wj = function(a, b) {
            return !1 === a ? !1 : a || b || Vj()
        };
    var Xj = {};
    var Yj = /^\w+$/,
        Zj = /^[\w-]+$/,
        ak = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        },
        bk = function() {
            if (!ng().g() || !zg()) return !0;
            var a = wg("ad_storage");
            return null == a ? !0 : !!a
        },
        ck = function(a, b) {
            yg("ad_storage") ? bk() ? a() : Eg(a, "ad_storage") : b ? hg("TAGGING", 3) : Dg(function() {
                ck(a, !0)
            }, ["ad_storage"])
        },
        ek = function(a) {
            return dk(a).map(function(b) {
                return b.Fa
            })
        },
        dk = function(a) {
            var b = [];
            if (!Mi(z) || !I.cookie) return b;
            var c = Pi(a, I.cookie, void 0, "ad_storage");
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    Ad: d.Ad
                }, e++) {
                var f = fk(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.Ad = g.Fa;
                    var k = g.timestamp,
                        n = g.labels,
                        p = Fa(b, function(q) {
                            return function(r) {
                                return r.Fa === q.Ad
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = gk(p.labels, n || [])) : b.push({
                        version: h,
                        Fa: d.Ad,
                        timestamp: k,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return hk(b)
        };

    function gk(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function ik(a) {
        return a && "string" == typeof a && a.match(Yj) ? a : "_gcl"
    }
    var kk = function() {
            var a = li(z.location.href),
                b = ji(a, "query", !1, void 0, "gclid"),
                c = ji(a, "query", !1, void 0, "gclsrc"),
                d = ji(a, "query", !1, void 0, "wbraid"),
                e = ji(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || gi(f, "gclid", !1);
                c = c || gi(f, "gclsrc", !1);
                d = d || gi(f, "wbraid", !1)
            }
            return jk(b, c, e, d)
        },
        jk = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Zj.test(d) && (e.gbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Zj)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        mk = function(a) {
            var b = kk();
            ck(function() {
                lk(b, !1, a)
            })
        };

    function lk(a, b, c, d, e) {
        function f(x, y) {
            var w = nk(x, g);
            w && (Yi(w, y, h), k = !0)
        }
        c = c || {};
        e = e || [];
        var g = ik(c.prefix);
        d = d || Ta();
        var h = gj(c, d, !0);
        h.jb = "ad_storage";
        var k = !1,
            n = Math.round(d / 1E3),
            p = function(x) {
                var y = ["GCL", n, x];
                0 < e.length && y.push(e.join("."));
                return y.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if ((void 0 == Xj.enable_gbraid_cookie_write ? 0 : Xj.enable_gbraid_cookie_write) && !k && a.gb) {
            var q = a.gb[0],
                r = nk("gb",
                    g),
                t = !1;
            if (!b)
                for (var u = dk(r), v = 0; v < u.length; v++) u[v].Fa === q && u[v].labels && 0 < u[v].labels.length && (t = !0);
            t || f("gb", p(q))
        }
    }
    var pk = function(a, b) {
            var c = Nj(!0);
            ck(function() {
                for (var d = ik(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== ak[f]) {
                        var g = nk(f, d),
                            h = c[g];
                        if (h) {
                            var k = Math.min(ok(h), Ta()),
                                n;
                            b: {
                                var p = k;
                                if (Mi(z))
                                    for (var q = Pi(g, I.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r)
                                        if (ok(q[r]) > p) {
                                            n = !0;
                                            break b
                                        }
                                n = !1
                            }
                            if (!n) {
                                var t = gj(b, k, !0);
                                t.jb = "ad_storage";
                                Yi(g, h, t)
                            }
                        }
                    }
                }
                lk(jk(c.gclid, c.gclsrc), !1, b)
            })
        },
        nk = function(a, b) {
            var c = ak[a];
            if (void 0 !== c) return b + c
        },
        ok = function(a) {
            return 0 !== qk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
                0) : 0
        };

    function fk(a) {
        var b = qk(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            Fa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function qk(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Zj.test(a[2]) ? [] : a
    }
    var rk = function(a, b, c, d, e) {
            if (Ea(b) && Mi(z)) {
                var f = ik(e),
                    g = function() {
                        for (var h = {}, k = 0; k < a.length; ++k) {
                            var n = nk(a[k], f);
                            if (n) {
                                var p = Pi(n, I.cookie, void 0, "ad_storage");
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                ck(function() {
                    Tj(g, b, c, d)
                })
            }
        },
        hk = function(a) {
            return a.filter(function(b) {
                return Zj.test(b.Fa)
            })
        },
        sk = function(a, b) {
            if (Mi(z)) {
                for (var c = ik(b.prefix), d = {}, e = 0; e < a.length; e++) ak[a[e]] && (d[a[e]] = ak[a[e]]);
                ck(function() {
                    La(d, function(f, g) {
                        var h = Pi(c + g, I.cookie, void 0, "ad_storage");
                        h.sort(function(t,
                            u) {
                            return ok(u) - ok(t)
                        });
                        if (h.length) {
                            var k = h[0],
                                n = ok(k),
                                p = 0 !== qk(k.split(".")).length ? k.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== qk(k.split(".")).length ? k.split(".")[2] : void 0;
                            q[f] = [r];
                            lk(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function tk(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var uk = function(a) {
        function b(e, f, g) {
            g && (e[f] = g)
        }
        if (zg()) {
            var c = kk();
            if (tk(c, a)) {
                var d = {};
                b(d, "gclid", c.gclid);
                b(d, "dclid", c.dclid);
                b(d, "gclsrc", c.gclsrc);
                b(d, "wbraid", c.gbraid);
                Uj(function() {
                    return d
                }, 3);
                Uj(function() {
                    var e = {};
                    return e._up = "1", e
                }, 1)
            }
        }
    };

    function vk(a, b) {
        var c = ik(b),
            d = nk(a, c);
        if (!d) return 0;
        for (var e = dk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function wk(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    };
    var xk = function(a) {
            var b = [];
            La(a, function(c, d) {
                d = hk(d);
                for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Fa);
                e.length && b.push(c + ":" + e.join(","))
            });
            return b.join(";")
        },
        zk = function(a, b, c) {
            if ("aw" === a || "dc" === a || "gb" === a) {
                var d = yk("gcl" + a);
                if (d) return d.split(".")
            }
            var e = ik(b);
            if ("_gcl" == e) {
                c = void 0 === c ? !0 : c;
                var f = !Mg(S.H) && c,
                    g;
                g = kk()[a] || [];
                if (0 < g.length) return f ? ["0"] : g
            }
            var h = nk(a, e);
            return h ? ek(h) : []
        },
        yk = function(a) {
            var b = li(z.location.href),
                c = ji(b, "host", !1);
            if (c && c.match(Ak)) {
                var d = ji(b, "path").split(a +
                    "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        },
        Bk = function(a, b) {
            yg(S.H) ? Mg(S.H) ? a() : Eg(a, S.H) : b ? kg(42) : Qg(function() {
                Bk(a, !0)
            }, [S.H])
        },
        Ak = /^\d+\.fls\.doubleclick\.net$/,
        Ck = !1;
    var Dk = function(a, b) {
            return zk("aw", a, b)
        },
        Ek = function(a, b) {
            return zk("dc", a, b)
        },
        Fk = function(a) {
            var b = yk("gac");
            return b ? !Mg(S.H) && a ? "0" : decodeURIComponent(b) : xk(bk() ? pj() : {})
        },
        Gk = function(a) {
            var b = yk("gacgb");
            return b ?
                !Mg(S.H) && a ? "0" : decodeURIComponent(b) : xk(bk() ? pj("_gac_gb", !0) : {})
        },
        Hk = function(a) {
            var b = kk(),
                c = [],
                d = b.gclid,
                e = b.dclid,
                f = b.gclsrc || "aw";
            !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({
                Fa: d,
                Af: f
            });
            e && c.push({
                Fa: e,
                Af: "ds"
            });
            if (!Ck) {}
            Bk(function() {
                nj(a);
                var g = ij[kj(a.prefix)];
                if (g && 0 < c.length)
                    for (var h = T.joined_auid = T.joined_auid || {}, k = 0; k < c.length; k++) {
                        var n =
                            c[k],
                            p = n.Fa,
                            q = n.Af,
                            r = (a.prefix || "_gcl") + "." + q + "." + p;
                        if (!h[r]) {
                            var t = "https://adservice.google.com/pagead/regclk";
                            t = "gb" === q ? t + "?gbraid=" + p + "&auid=" + g : t + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
                            Wb(t);
                            h[r] = !0
                        }
                    }
            })
        },
        Ik = function(a) {
            var b;
            if (yk("gclaw") || yk("gac") || 0 < (kk().aw || []).length) b = !1;
            else {
                var c;
                if (0 < (kk().gb || []).length) c = !0;
                else {
                    var d = Math.max(vk("aw", a), wk(bk() ? pj() : {}));
                    c = Math.max(vk("gb", a), wk(bk() ? pj("_gac_gb", !0) : {})) > d
                }
                b = c
            }
            return b
        };
    var Jk = function(a) {
        var b = Fb && Fb.userAgent || "";
        if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
        var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
        if ("" === c) return !1;
        for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
            if (void 0 === d[f]) return !0;
            if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
        }
        return e.length >= d.length
    };
    var Lk = function(a) {
            var b = a ? Fi(a) : z.enhanced_conversion_data,
                c = (a || {}).enhanced_conversions_mode,
                d = void 0;
            if ("manual" === c && b) switch (b._tag_mode) {
                case "CODE":
                    d = "c";
                    break;
                case "AUTO":
                    d = "a";
                    break;
                case "MANUAL":
                    d = "m";
                    break;
                default:
                    d = "c"
            } else d = "automatic" === c ? Kk(a) ? "a" : "m" : "c";
            if (z.Promise) try {
                return b ? nh(b).then(function(e) {
                    e.kh = d;
                    return e
                }) : Promise.resolve({
                    pe: "",
                    kh: void 0
                })
            } catch (e) {}
        },
        Kk = function(a) {
            var b = a && a[S.kg];
            return b && b[S.ni]
        },
        Mk = function(a) {
            if (Mg(S.H)) return a;
            a = a.replace(/&url=([^&#]+)/,
                function(b, c) {
                    var d = mi(decodeURIComponent(c));
                    return "&url=" + encodeURIComponent(d)
                });
            return a = a.replace(/&ref=([^&#]+)/, function(b, c) {
                var d = mi(decodeURIComponent(c));
                return "&ref=" + encodeURIComponent(d)
            })
        },
        Nk = function() {
            if (vh || !0 !== z._gtmdgs && !Jk("11")) return -1;
            var a = Na('1');
            return Hi(1, 100) < a ? Hi(2, 2) : -1
        },
        Ok = function() {
            return -1 !== Fb.userAgent.toLowerCase().indexOf("firefox")
        },
        Pk = function(a) {
            if (a && a.length) {
                for (var b = [], c = 0; c < a.length; ++c) {
                    var d = a[c];
                    d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
                }
                return b.join(",")
            }
        };
    var Qk = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Rk = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Sk = {
            cl: ["ecl"],
            customPixels: ["customScripts", "html"],
            ecl: ["cl"],
            ehl: ["hl"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Tk = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
    var Uk = function() {
            var a = !1;
            return a
        },
        Wk = function(a) {
            var b = Nh("gtm.allowlist") || Nh("gtm.whitelist");
            b && kg(9);
            Uk() && (b = ["google", "gtagfl", "lcl", "zone"]);
            var c = b && Ya(Pa(b), Rk),
                d = Nh("gtm.blocklist") ||
                Nh("gtm.blacklist");
            d || (d = Nh("tagTypeBlacklist")) && kg(3);
            d ? kg(8) : d = [];
            Vk() && (d = Pa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Pa(d).indexOf("google") && kg(2);
            var e = d && Ya(Pa(d), Sk),
                f = {};
            return function(g) {
                var h = g && g[Kd.Gb];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var k = Gh[h] || [],
                    n = a(h, k);
                if (b) {
                    var p;
                    if (p = n) a: {
                        if (0 > c.indexOf(h))
                            if (k && 0 < k.length)
                                for (var q = 0; q < k.length; q++) {
                                    if (0 > c.indexOf(k[q])) {
                                        kg(11);
                                        p = !1;
                                        break a
                                    }
                                } else {
                                    p = !1;
                                    break a
                                }
                        p = !0
                    }
                    n = p
                }
                var r = !1;
                if (d) {
                    var t = 0 <= e.indexOf(h);
                    if (t) r = t;
                    else {
                        var u = Ka(e, k || []);
                        u && kg(10);
                        r = u
                    }
                }
                var v = !n || r;
                v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ka(e, Tk));
                return f[h] = v
            }
        },
        Vk = function() {
            return Qk.test(z.location && z.location.hostname)
        };
    var Ie = {
            J: "GTM-585RXMV",
            Cc: ""
        },
        Xk = {
            zh: "GTM-585RXMV",
            Ah: "GTM-585RXMV"
        },
        Yk = function() {
            var a = [Ie.J];
            return a
        },
        Zk = function() {
            var a = [];
            Xk.Ah && (a = Xk.Ah.split("|"));
            return a
        };
    var al = function() {
            var a = T.tidr;
            a || (a = new $k, T.tidr = a);
            return a
        },
        $k = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {}
        },
        bl = function(a) {
            return al().container.hasOwnProperty(a)
        };
    var el = function(a) {},
        yl = function(a) {},
        zl =
        function() {
            return "&tc=" + je.filter(function(a) {
                return a
            }).length
        },
        Cl = function() {
            2022 <= Al().length && Bl()
        },
        Dl = function(a) {
            return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
        },
        Fl = function() {
            El || (El = z.setTimeout(Bl, 500))
        },
        Bl = function() {
            El && (z.clearTimeout(El), El = void 0);
            if (void 0 !== Gl && (!Hl[Gl] || Il || Jl))
                if (Kl[Gl] || Ll.Lj() || 0 >= Ml--) kg(1), Kl[Gl] = !0;
                else {
                    Ll.kk();
                    var a = Al(!0);
                    Pb(a);
                    Hl[Gl] = !0;
                    Ol = Nl = Ql = Rl = Sl = Jl = Il = "";
                    Pl = []
                }
        },
        Al = function(a) {
            var b = Gl;
            if (void 0 === b) return "";
            var c = ig("GTM"),
                d = ig("TAGGING");
            return [Tl, Hl[b] ? "" : "&es=1", Ul[b], el(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", zl(), Il, Jl, Sl, Rl, yl(a), Ql, Nl, Ol ? "&dl=" + encodeURIComponent(Ol) : "", 0 < Pl.length ? "&tdp=" + Pl.join(".") : "", "&z=0"].join("")
        },
        Wl = function() {
            Tl = Vl()
        },
        Vl = function() {
            return [Xl,
                "&v=3&t=t", "&pid=" + Ha(), "&rv=" + oh.Wd
            ].join("")
        },
        xl = ["L", "S", "Y"],
        dl = ["S", "E"],
        Yl = {
            sampleRate: "0.005000",
            Th: "",
            Sh: Number("5")
        },
        Zl = 0 <= I.location.search.indexOf("?gtm_latency=") || 0 <= I.location.search.indexOf("&gtm_latency="),
        $l;
    if (!($l = Zl)) {
        var am = Math.random(),
            bm = Yl.sampleRate;
        $l = am < bm
    }
    var cm = $l,
        Xl = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=27",
        dm = {
            label: Ie.J + " Container",
            children: [{
                label: "Initialization",
                children: []
            }]
        },
        Tl = Vl(),
        Hl = {},
        Il = "",
        Jl = "",
        Ql = "",
        Rl = "",
        Nl = "",
        Pl = [],
        Ol = "",
        gl = {},
        fl = !1,
        cl = {},
        em = {},
        Sl = "",
        Gl = void 0,
        Ul = {},
        Kl = {},
        El = void 0,
        fm = 5;
    0 < Yl.Sh && (fm = Yl.Sh);
    var Ll = function(a, b) {
            for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
            return {
                Lj: function() {
                    return c < a ? !1 : Ta() - d[c % a] < b
                },
                kk: function() {
                    var f = c++ % a;
                    d[f] = Ta()
                }
            }
        }(fm, 1E3),
        Ml = 1E3,
        hm = function(a, b) {
            if (cm && !Kl[a] &&
                Gl !== a) {
                Bl();
                Gl = a;
                Ql = Il = "";
                Ul[a] = "&e=" + Dl(b) + "&eid=" + a;
                Fl();
            }
        },
        im = function(a, b, c, d) {
            if (cm && b) {
                var e, f = String(b[Kd.Gb] || "").replace(/_/g, "");
                0 === f.indexOf("cvt") && (f = "cvt");
                e = f;
                var g = c + e;
                if (!Kl[a]) {
                    a !== Gl && (Bl(), Gl = a);
                    Il = Il ? Il + "." + g : "&tr=" + g;
                    var h = b["function"];
                    if (!h) throw Error("Error: No function name given for function call.");
                    var k = (le[h] ? "1" : "2") + e;
                    Ql = Ql ? Ql + "." + k : "&ti=" + k;
                    Fl();
                    Cl()
                }
            }
        };
    var pm = function(a, b, c) {
            if (cm && !Kl[a]) {
                a !== Gl && (Bl(), Gl = a);
                var d = c + b;
                Jl = Jl ? Jl + "." + d : "&epr=" + d;
                Fl();
                Cl()
            }
        },
        qm = function(a, b, c) {};
    var rm = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        sm = {},
        tm = Object.freeze((sm[S.Fb] = !0, sm[S.jc] = !0, sm)),
        um = {},
        vm = Object.freeze((um[S.Da] = !0, um)),
        wm = 0 <= I.location.search.indexOf("?gtm_diagnostics=") || 0 <= I.location.search.indexOf("&gtm_diagnostics="),
        ym = function(a, b, c) {};

    function zm(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function xm(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? vm[q] : t
            },
            f;
        for (f in zm(a, b))
            if (!tm[f]) {
                var g = (d ? d + "." : "") + f,
                    h = e(f, a),
                    k = e(f, b),
                    n = "object" === lc(h) || "array" === lc(h),
                    p = "object" === lc(k) || "array" === lc(k);
                if (n && p) xm(h, k, c, g);
                else if (n || p || h !== k) c[g] = !0
            }
        return Object.keys(c)
    };
    var Am = !1,
        Bm = 0,
        Cm = [];

    function Dm(a) {
        if (!Am) {
            var b = I.createEventObject,
                c = "complete" == I.readyState,
                d = "interactive" == I.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Am = !0;
                for (var e = 0; e < Cm.length; e++) K(Cm[e])
            }
            Cm.push = function() {
                for (var f = 0; f < arguments.length; f++) K(arguments[f]);
                return 0
            }
        }
    }

    function Em() {
        if (!Am && 140 > Bm) {
            Bm++;
            try {
                I.documentElement.doScroll("left"), Dm()
            } catch (a) {
                z.setTimeout(Em, 50)
            }
        }
    }
    var Fm = function(a) {
        Am ? a() : Cm.push(a)
    };
    var Hm = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: Ie.J
        }
    };
    var Jm = function(a, b) {
            this.g = !1;
            this.C = [];
            this.I = {
                tags: []
            };
            this.O = !1;
            this.o = this.s = 0;
            Im(this, a, b)
        },
        Km = function(a, b, c, d) {
            if (rh.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            nc(d) && (e = oc(d, e));
            e.id = c;
            e.status = "timeout";
            return a.I.tags.push(e) - 1
        },
        Lm = function(a, b, c, d) {
            var e = a.I.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        Mm = function(a) {
            if (!a.g) {
                for (var b = a.C, c = 0; c < b.length; c++) b[c]();
                a.g = !0;
                a.C.length = 0
            }
        },
        Im = function(a, b, c) {
            void 0 !== b && a.$d(b);
            c && z.setTimeout(function() {
                return Mm(a)
            }, Number(c))
        };
    Jm.prototype.$d = function(a) {
        var b = this,
            c = Va(function() {
                return K(function() {
                    a(Ie.J, b.I)
                })
            });
        this.g ? c() : this.C.push(c)
    };
    var Nm = function(a) {
            a.s++;
            return Va(function() {
                a.o++;
                a.O && a.o >= a.s && Mm(a)
            })
        },
        Om = function(a) {
            a.O = !0;
            a.o >= a.s && Mm(a)
        };
    var Pm = function() {
            function a(d) {
                return !Da(d) || 0 > d ? 0 : d
            }
            if (!T._li && z.performance && z.performance.timing) {
                var b = z.performance.timing.navigationStart,
                    c = Da(Oh.get("gtm.start")) ? Oh.get("gtm.start") : 0;
                T._li = {
                    cst: a(c - b),
                    cbt: a(xh - b)
                }
            }
        },
        Qm = function(a) {
            z.performance && z.performance.mark(Ie.J + "_" + a + "_start")
        },
        Rm = function(a) {
            if (z.performance) {
                var b = Ie.J + "_" + a + "_start",
                    c = Ie.J + "_" + a + "_duration";
                z.performance.measure(c, b);
                var d = z.performance.getEntriesByName(c)[0];
                z.performance.clearMarks(b);
                z.performance.clearMeasures(c);
                var e = T._p || {};
                void 0 === e[a] && (e[a] = d.duration, T._p = e);
                return d.duration
            }
        },
        Sm = function() {
            if (z.performance && z.performance.now) {
                var a = T._p || {};
                a.PAGEVIEW = z.performance.now();
                T._p = a
            }
        };
    var Tm = {},
        Um = function() {
            return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
        },
        Vm = !1;

    function Ym() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var Zm = function(a) {},
        $m = function(a, b) {
            return function() {
                var c = Um(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            k = 0 > g.indexOf("&tid=" + b);
                        k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        k && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };

    function en(a, b, c, d) {
        var e = je[a],
            f = fn(a, b, c, d);
        if (!f) return null;
        var g = te(e[Kd.Pg], c, []);
        if (g && g.length) {
            var h = g[0];
            f = en(h.index, {
                onSuccess: f,
                onFailure: 1 === h.lh ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function fn(a, b, c, d) {
        function e() {
            if (f[Kd.Ni]) h();
            else {
                var x = ue(f, c, []);
                var y = x[Kd.Yh];
                if (null != y)
                    for (var w = 0; w < y.length; w++)
                        if (!Mg(y[w])) {
                            h();
                            return
                        }
                var A = Km(c.wb, String(f[Kd.Gb]), Number(f[Kd.Rg]), x[Kd.Oi]),
                    B = !1;
                x.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        im(c.id, je[a], "5", D);
                        Lm(c.wb, A, "success",
                            D);
                        g()
                    }
                };
                x.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - C;
                        im(c.id, je[a], "6", D);
                        Lm(c.wb, A, "failure", D);
                        h()
                    }
                };
                x.vtp_gtmTagId = f.tag_id;
                x.vtp_gtmEventId = c.id;
                c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
                im(c.id, f, "1");
                var E = function() {
                    var D = Ta() - C;
                    im(c.id, f, "7", D);
                    Lm(c.wb, A, "exception",
                        D);
                    B || (B = !0, h())
                };
                var C = Ta();
                try {
                    se(x, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    E(D)
                }
            }
        }
        var f = je[a],
            g = b.onSuccess,
            h = b.onFailure,
            k = b.terminate;
        if (c.Ff(f)) return null;
        var n = te(f[Kd.Sg], c, []);
        if (n && n.length) {
            var p = n[0],
                q = en(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: k
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 === p.lh ? k : q
        }
        if (f[Kd.Jg] || f[Kd.Si]) {
            var r = f[Kd.Jg] ? ke : c.Bk,
                t = g,
                u = h;
            if (!r[a]) {
                e = Va(e);
                var v = gn(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function gn(a, b, c) {
        var d = [],
            e = [];
        b[a] = hn(d, e, c);
        return {
            onSuccess: function() {
                b[a] = jn;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = kn;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function hn(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function jn(a) {
        a()
    }

    function kn(a, b) {
        b()
    };

    function ln(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return li("" + c + b).href
        }
    }

    function mn(a, b) {
        return nn() ? ln(a, b) : void 0
    }

    function nn() {
        var a = !1;
        return a
    }

    function on() {
        return !!oh.Xd && "SGTM_TOKEN" !== oh.Xd.replaceAll("@@", "")
    };
    var pn = function() {
        var a = !1;
        return a
    };
    var rn = function(a, b, c, d) {
            return (2 === qn() || d || "http:" != z.location.protocol ? a : b) + c
        },
        qn = function() {
            var a = Nb(),
                b;
            if (1 === a) a: {
                var c = th;c = c.toLowerCase();
                for (var d = "https://" + c, e = "http://" + c, f = 1, g = I.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
                    var k = g[h].src;
                    if (k) {
                        k = k.toLowerCase();
                        if (0 === k.indexOf(e)) {
                            b = 3;
                            break a
                        }
                        1 === f && 0 === k.indexOf(d) && (f = 2)
                    }
                }
                b = f
            }
            else b = a;
            return b
        };
    var sn = !1;
    var un = function(a, b, c) {
            if (!tn()) {
                if (bl(a)) return;
                var d = c ? "/gtag/js" : "/gtm.js",
                    e = "?id=" + encodeURIComponent(a) + "&l=" + oh.aa,
                    f = 0 === a.indexOf("GTM-");
                f || (e += "&cx=c");
                var g = on();
                g && (e += "&sign=" + oh.Xd);
                var h = mn(b, d + e);
                if (!h) {
                    var k = oh.Dc + d;
                    g && Gb && f && (k = Gb.replace(/^(?:https?:\/\/)?/i,
                        "").split(/[?#]/)[0]);
                    h = rn("https://", "http://", k + e)
                }
                al().container[a] = !0;
                Mb(h)
            }
        },
        vn = function(a, b) {
            if (!sn) un(a, b, !0);
            else if (!tn()) {
                if (al().destination.hasOwnProperty(a)) return;
                var c = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + oh.aa + "&cx=c";
                on() && (c += "&sign=" + oh.Xd);
                var d = mn(b, c);
                d || (d = rn("https://", "http://", oh.Dc + c));
                al().destination[a] = !0;
                Mb(d)
            }
        };

    function tn() {
        if (pn()) {
            return !0
        }
        return !1
    }
    var wn = function() {
            this.eventModel = {};
            this.targetConfig = {};
            this.containerConfig = {};
            this.globalConfig = {};
            this.dataLayerConfig = {};
            this.remoteConfig = {};
            this.onSuccess = function() {};
            this.onFailure = function() {};
            this.setContainerTypeLoaded = function() {};
            this.getContainerTypeLoaded = function() {};
            this.priorityId = this.eventId = void 0;
            this.isGtmEvent = !1
        },
        xn = function(a) {
            var b = new wn;
            b.eventModel = a;
            return b
        },
        yn = function(a, b) {
            a.targetConfig = b;
            return a
        },
        zn = function(a, b) {
            a.containerConfig = b;
            return a
        },
        An = function(a, b) {
            a.globalConfig =
                b;
            return a
        },
        Bn = function(a, b) {
            a.dataLayerConfig = b;
            return a
        },
        Cn = function(a, b) {
            a.remoteConfig = b;
            return a
        },
        Dn = function(a, b) {
            a.onSuccess = b;
            return a
        },
        En = function(a, b) {
            a.setContainerTypeLoaded = b;
            return a
        },
        Fn = function(a, b) {
            a.getContainerTypeLoaded = b;
            return a
        },
        Gn = function(a, b) {
            a.onFailure = b;
            return a
        };
    l = wn.prototype;
    l.getWithConfig = function(a) {
        if (void 0 !== this.eventModel[a]) return this.eventModel[a];
        if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
        if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
        Hn(this, this.globalConfig[a], this.dataLayerConfig[a]) && kg(71);
        if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
        if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
    };
    l.getTopLevelKeys = function() {
        function a(e) {
            for (var f = Object.keys(e), g = 0; g < f.length; ++g) b[f[g]] = 1
        }
        var b = {};
        a(this.eventModel);
        a(this.targetConfig);
        a(this.containerConfig);
        a(this.globalConfig);
        for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++)
            if (!b.hasOwnProperty(c[d])) {
                kg(71);
                break
            }
        return Object.keys(b)
    };
    l.getMergedValues = function(a, b) {
        function c(h) {
            nc(h) && La(h, function(k, n) {
                e = !0;
                d[k] = n
            })
        }
        var d = {},
            e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        var f = e,
            g = d;
        d = {};
        e = !1;
        b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
        b && 2 !== b || c(this.eventModel[a]);
        (e !== f || Hn(this, d, g)) && kg(71);
        e = f;
        d = g;
        return e ? d : void 0
    };
    l.getKeysFromFirstOfAnyScope = function(a) {
        var b = {},
            c = !1,
            d = function(g) {
                for (var h = 0; h < a.length; h++) void 0 !== g[a[h]] && (b[a[h]] = g[a[h]], c = !0);
                return c
            };
        if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
        d(this.globalConfig);
        var e = b,
            f = c;
        b = {};
        c = !1;
        d(this.dataLayerConfig);
        Hn(this, b, e) && kg(71);
        b = e;
        c = f;
        if (c) return b;
        d(this.remoteConfig);
        return b
    };
    l.getEventModelKeys = function() {
        var a = [],
            b;
        for (b in this.eventModel) b !== S.Fb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
        return a
    };
    var Hn = function(a, b, c) {
        try {
            if (b === c) return !1;
            var d = lc(b);
            if (d !== lc(c) || !(nc(b) && nc(c) || "array" === d)) return !0;
            if ("array" === d) {
                if (b.length !== c.length) return !0;
                for (var e = 0; e < b.length; e++)
                    if (Hn(a, b[e], c[e])) return !0
            } else {
                for (var f in c)
                    if (!b.hasOwnProperty(f)) return !0;
                for (var g in b)
                    if (!c.hasOwnProperty(g) || Hn(a, b[g], c[g])) return !0
            }
        } catch (h) {
            kg(72)
        }
        return !1
    };
    var In = function() {
        T.dedupe_gclid || (T.dedupe_gclid = "" + bj());
        return T.dedupe_gclid
    };
    var Jn;
    if (3 === oh.Wd.length) Jn = "g";
    else {
        var Kn = "G";
        Jn = Kn
    }
    var Ln = {
            "": "n",
            UA: "u",
            AW: "a",
            DC: "d",
            G: "e",
            GF: "f",
            HA: "h",
            GTM: Jn,
            OPT: "o"
        },
        Mn = function(a) {
            var b = Ie.J.split("-"),
                c = b[0].toUpperCase(),
                d = Ln[c] || "i",
                e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "",
                f;
            if (3 === oh.Wd.length) {
                var g = "w";
                f = "2" + g
            } else f = "";
            return f + d + oh.Wd + e
        };

    function Nn(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var On = function(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Pn() {
        return ub("iPhone") && !ub("iPod") && !ub("iPad")
    };
    ub("Opera");
    ub("Trident") || ub("MSIE");
    ub("Edge");
    !ub("Gecko") || -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") || ub("Trident") || ub("MSIE") || ub("Edge"); - 1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
    ub("Macintosh");
    ub("Windows");
    ub("Linux") || ub("CrOS");
    var Qn = ma.navigator || null;
    Qn && (Qn.appVersion || "").indexOf("X11");
    ub("Android");
    Pn();
    ub("iPad");
    ub("iPod");
    Pn() || ub("iPad") || ub("iPod");
    tb().toLowerCase().indexOf("kaios");
    var Rn = function(a) {
        if (!a || !I.head) return null;
        var b, c;
        c = void 0 === c ? document : c;
        b = c.createElement("meta");
        I.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    };
    var Sn = function() {};
    var Tn = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Un = function(a, b) {
            this.o = a;
            this.g = null;
            this.C = {};
            this.O = 0;
            this.I = void 0 === b ? 500 : b;
            this.s = null
        };
    la(Un, Sn);
    Un.prototype.addEventListener = function(a) {
        var b = {},
            c = Li(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.I && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.I));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Tn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Vn(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
                d = 0), c()
        }
    };
    Un.prototype.removeEventListener = function(a) {
        a && a.listenerId && Vn(this, "removeEventListener", null, a.listenerId)
    };
    var Xn = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var k;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Wn(a.vendor.consents, void 0 === d ? "755" : d);
                    k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Wn(a.purpose.consents, b)
                } else k = !0;
            else k = 1 === h ? a.purpose && a.vendor ? Wn(a.purpose.legitimateInterests,
                b) && Wn(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return k
        },
        Wn = function(a, b) {
            return !(!a || !a[b])
        },
        Vn = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.o.__tcfapi) {
                var e = a.o.__tcfapi;
                e(b, 2, c, d)
            } else if (Yn(a)) {
                Zn(a);
                var f = ++a.O;
                a.C[f] = c;
                if (a.g) {
                    var g = {};
                    a.g.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Yn = function(a) {
            if (a.g) return a.g;
            var b;
            a: {
                for (var c = a.o, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.g = b;
            return a.g
        },
        Zn = function(a) {
            a.s || (a.s = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.C[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, On(a.o, a.s))
        };
    var $n = !0;
    $n = !1;
    var ao = {
            1: 0,
            3: 0,
            4: 0,
            7: 3,
            9: 3,
            10: 3
        },
        bo = Nn("", 550),
        co = Nn("", 500);

    function eo() {
        var a = T.tcf || {};
        return T.tcf = a
    }
    var jo = function() {
        var a = eo(),
            b = new Un(z, $n ? 3E3 : -1);
        if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.o.__tcfapi || null != Yn(b))) {
            a.active = !0;
            a.pd = {};
            fo();
            var c = null;
            $n ? c = z.setTimeout(function() {
                go(a);
                ho(a);
                c = null
            }, co) : a.tcString = "tcunavailable";
            try {
                b.addEventListener(function(d) {
                    c && (clearTimeout(c), c = null);
                    if (0 !== d.internalErrorState) go(a), ho(a);
                    else {
                        var e;
                        a.gdprApplies = d.gdprApplies;
                        if (!1 === d.gdprApplies) e = io(), b.removeEventListener(d);
                        else if ("tcloaded" ===
                            d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
                            var f = {},
                                g;
                            for (g in ao)
                                if (ao.hasOwnProperty(g))
                                    if ("1" === g) {
                                        var h = d,
                                            k = !0;
                                        k = void 0 === k ? !1 : k;
                                        var n;
                                        var p = h;
                                        !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Tn(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                                        f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                                            !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : Xn(h, "1", 0) : !1
                                    } else f[g] = Xn(d, g, ao[g]);
                            e = f
                        }
                        e && (a.tcString = d.tcString || "tcempty", a.pd = e, ho(a))
                    }
                })
            } catch (d) {
                c && (clearTimeout(c), c = null), go(a), ho(a)
            }
        }
    };

    function go(a) {
        a.type = "e";
        a.tcString = "tcunavailable";
        $n && (a.pd = io())
    }

    function fo() {
        var a = {},
            b = (a.ad_storage = "denied", a.wait_for_update = bo, a);
        Jg(b)
    }

    function io() {
        var a = {},
            b;
        for (b in ao) ao.hasOwnProperty(b) && (a[b] = !0);
        return a
    }

    function ho(a) {
        var b = {},
            c = (b.ad_storage = a.pd["1"] ? "granted" : "denied", b);
        Lg(c, {
            eventId: 0
        }, {
            gdprApplies: a ? a.gdprApplies : void 0,
            tcString: ko()
        })
    }
    var ko = function() {
            var a = eo();
            return a.active ? a.tcString || "" : ""
        },
        lo = function() {
            var a = eo();
            return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
        },
        mo = function(a) {
            if (!ao.hasOwnProperty(String(a))) return !0;
            var b = eo();
            return b.active && b.pd ? !!b.pd[String(a)] : !0
        };
    var no = function(a, b) {
            var c = a && !Mg(S.H);
            return b && c ? "0" : b
        },
        ro = function(a) {
            function b(u) {
                var v;
                T.reported_gclid || (T.reported_gclid = {});
                v = T.reported_gclid;
                var x, y = g;
                x = !g || zg() && !Mg(S.H) ? k + (u ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (u ? "gcu" : "gcs");
                if (!v[x]) {
                    v[x] = !0;
                    var w = [],
                        A = {},
                        B = function(Q, O) {
                            O && (w.push(Q + "=" + encodeURIComponent(O)), A[Q] = !0)
                        },
                        E = "https://www.google.com";
                    if (zg()) {
                        var C = Mg(S.H);
                        B("gcs", Ng());
                        u && B("gcu", "1");
                        Ag() && B("gcd", "G1" + Hg(xg));
                        B("rnd", In());
                        if ((!k || n && "aw.ds" !== n) && Mg(S.H)) {
                            var D = ek("_gcl_aw");
                            B("gclaw", D.join("."))
                        }
                        B("url", String(z.location).split(/[?#]/)[0]);
                        B("dclid", no(d, p));
                        var F = !1;
                        F = !0;
                        C || !d && !F || (E = "https://pagead2.googlesyndication.com")
                    }
                    B("gdpr_consent", ko());
                    B("gdpr", lo());
                    "1" === Nj(!1)._up && B("gtm_up", "1");
                    B("gclid", no(d, k));
                    B("gclsrc", n);
                    if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", no(d, q)), A.gbraid && po && (y = !1), !A.gbraid && zg() && Mg(S.H))) {
                        var R = ek("_gcl_gb");
                        0 < R.length && (B("gclgb", R.join(".")), po && (y = !1))
                    }
                    B("gtm", Mn(!e));
                    g && Mg(S.H) && (nj(f || {}), y && B("auid", ij[kj(f.prefix)] || ""));
                    qo || a.ee && B("did", a.ee), a.qc && B("gdid", a.qc), a.oc && B("edid", a.oc);
                    var J = E + "/pagead/landing?" + w.join("&");
                    Wb(J)
                }
            }
            var c = !!a.tf,
                d = !!a.Xa,
                e = a.V,
                f = void 0 ===
                a.Kb ? {} : a.Kb,
                g = void 0 === a.oe ? !0 : a.oe,
                h = kk(),
                k = h.gclid || "",
                n = h.gclsrc,
                p = h.dclid || "",
                q = h.gbraid || "",
                r = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || q),
                t = zg();
            if (r || t) t ? Qg(function() {
                b();
                Mg(S.H) || Pg(function(u) {
                    return b(!0, u.consentEventId, u.consentPriorityId)
                }, S.H)
            }, [S.H]) : b()
        },
        oo = function(a) {
            var b = String(z.location).split(/[?#]/)[0],
                c = oh.$h || z._CONSENT_MODE_SALT;
            return a ? c ? String(Ii(b + a + c)) : "0" : ""
        },
        qo = !1;
    var po = !1;
    var so = function(a) {
        if (!zg() || wg(S.H)) {
            a = a || {};
            nj(a, !1);
            var b = jj[kj(ik(a.prefix))];
            if (b && !(18E5 < Ta() - 1E3 * b.uh)) {
                var c = b.id,
                    d = c.split(".");
                if (2 === d.length && !(864E5 < Ta() - 1E3 * (Number(d[1]) || 0))) return c
            }
        }
    };
    var to = !1;
    var uo = function() {
            this.g = {}
        },
        vo = function(a, b, c) {
            null != c && (a.g[b] = c)
        },
        wo = function(a) {
            return Object.keys(a.g).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
            }).join("&")
        },
        yo = function(a, b, c, d, e) {
            if (!zg()) {
                xo(a, b, c, d, e);
                return
            }
            Qg(function() {
                Mg(S.H) ? xo(a, b, c, d, e) : d && d()
            }, [S.H]);
        };

    var zo = function(a, b, c) {
            c = void 0 === c ? !0 : c;
            var d = {
                    gclgb: function() {
                        return zk("gb", b, c).join(".")
                    },
                    gacgb: function() {
                        return Gk(c)
                    },
                    gclaw: function() {
                        return Dk(b, c).join(".")
                    },
                    gac: function() {
                        return Fk(c)
                    }
                },
                e = Ik(b);
            to && (e = !1);
            var f = e ? "gclgb" : "gclaw",
                g = e ? "gacgb" : "gac",
                h = d[g],
                k = (0, d[f])(),
                n = "_gcl" !== b ? "" : h();
            k && vo(a, f, k);
            n && vo(a, g, n)
        },
        xo = function(a, b, c, d, e) {
            c = c || {};
            var f = c.Kb || {},
                g = new uo;
            mh(b, function(h, k) {
                vo(g, "em", h);
                vo(g, "gtm", Mn());
                zg() && (vo(g, "gcs", Ng()), vo(g, "gcd", "G1" + Hg(xg)));
                zo(g, ik(f.prefix), c.Xa);
                vo(g, "auid", ij[kj(f.prefix)]);
                e && e.ke && vo(g, "gdid", e.ke);
                e && e.he && vo(g, "edid", e.he);
                var A = wo(g);
                Wb("https://google.com/pagead/form-data/" + a + "?" + A);
                d && d()
            })
        };
    var Ao = /[A-Z]+/,
        Bo = /\s/,
        Co = function(a) {
            if (m(a)) {
                a = Qa(a);
                var b = a.indexOf("-");
                if (!(0 > b)) {
                    var c = a.substring(0, b);
                    if (Ao.test(c)) {
                        for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++)
                            if (!d[e] || Bo.test(d[e]) && ("AW" !== c || 1 !== e)) return;
                        return {
                            id: a,
                            prefix: c,
                            containerId: c + "-" + d[0],
                            N: d
                        }
                    }
                }
            }
        },
        Eo = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) {
                var d = Co(a[c]);
                d && (b[d.id] = d)
            }
            Do(b);
            var e = [];
            La(b, function(f, g) {
                e.push(g)
            });
            return e
        };

    function Do(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.N[1] && b.push(d.containerId)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var Go = function(a, b, c) {
            if (z[a.functionName]) return b.Mf && K(b.Mf), z[a.functionName];
            var d = Fo();
            z[a.functionName] = d;
            if (a.ae)
                for (var e = 0; e < a.ae.length; e++) z[a.ae[e]] = z[a.ae[e]] || Fo();
            a.ne && void 0 === z[a.ne] && (z[a.ne] = c);
            Mb(rn("https://", "http://", a.Vf), b.Mf, b.Yj);
            return d
        },
        Fo = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Ho = {
            functionName: "_googWcmImpl",
            ne: "_googWcmAk",
            Vf: "www.gstatic.com/wcm/loader.js"
        },
        Io = {
            functionName: "_gaPhoneImpl",
            ne: "ga_wpid",
            Vf: "www.gstatic.com/gaphone/loader.js"
        },
        Jo = {
            Xh: "",
            Ui: "5"
        },
        Ko = {
            functionName: "_googCallTrackingImpl",
            ae: [Io.functionName, Ho.functionName],
            Vf: "www.gstatic.com/call-tracking/call-tracking_" + (Jo.Xh || Jo.Ui) + ".js"
        },
        Lo = {},
        Mo = function(a, b, c, d) {
            kg(22);
            if (c) {
                d = d || {};
                var e = Go(Ho, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.ib && (f.autoreplace = c);
                e(2, d.ib, f, c, 0, Sa(), d.options)
            }
        },
        No = function(a, b, c, d) {
            kg(21);
            if (b && c) {
                d = d || {};
                for (var e = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Sa()
                    }, f = 0; f < a.length; f++) {
                    var g = a[f];
                    Lo[g.id] ||
                        (g && "AW" === g.prefix && !e.adData && 2 <= g.N.length ? (e.adData = {
                            ak: g.N[0],
                            cl: g.N[1]
                        }, Lo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {
                            gaWpid: g.containerId
                        }, Lo[g.id] = !0))
                }(e.gaData || e.adData) && Go(Ko, d)(d.ib, e, d.options)
            }
        },
        Oo = function() {
            var a = !1;
            return a
        },
        Po = function(a, b) {
            if (a)
                if (pn()) {} else {
                    if (m(a)) {
                        var c =
                            Co(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = b.getWithConfig(S.Bi);
                    if (f && Ea(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = Co(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.containerId && a.containerId === h.containerId) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var k = b.getWithConfig(S.ug),
                            n;
                        if (k) {
                            Ea(k) ? n = k : n = [k];
                            var p = b.getWithConfig(S.rg),
                                q = b.getWithConfig(S.sg),
                                r = b.getWithConfig(S.vg),
                                t = b.getWithConfig(S.Ai),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var x = 0; x < n.length; x++)
                                if (x < v)
                                    if (d) No(d, n[x], t, {
                                        ib: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix &&
                                a.N[1]) Oo() ? No([a], n[x], t || "US", {
                                ib: u,
                                options: r
                            }) : Mo(a.N[0], a.N[1], n[x], {
                                ib: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (Oo()) No([a], n[x], t || "US", {
                                    ib: u
                                });
                                else {
                                    var y = a.containerId,
                                        w = n[x],
                                        A = {
                                            ib: u
                                        };
                                    kg(23);
                                    if (w) {
                                        A = A || {};
                                        var B = Go(Io, A, y),
                                            E = {};
                                        void 0 !== A.ib ? E.receiver = A.ib : E.replace = w;
                                        E.ga_wpid = y;
                                        E.destination = w;
                                        B(2, Sa(), E)
                                    }
                                }
                        }
                    }
                }
        };
    var Ro = function() {
            var a = T.floc;
            if (a) {
                var b = a.ts,
                    c = a.floc;
                if (b && c && 1E3 > Ta() - b) return Promise.resolve(c)
            }
            var d = void 0;
            try {
                d = Promise.race([I.interestCohort().then(function(e) {
                    T.floc = {
                        ts: Ta(),
                        floc: e
                    };
                    return e
                }), new Promise(function(e) {
                    z.setTimeout(function() {
                        return e()
                    }, Qo)
                })]).catch(function() {})
            } catch (e) {
                return
            }
            return d
        },
        To = function() {
            if (!z.Promise) return !1;
            Ba(I.interestCohort) || So || (So = !0, Rn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
            return Ba(I.interestCohort)
        },
        So = !1,
        Qo = Number("200");
    var Vo = function(a, b) {
            var c = a.vh,
                d = a.Ph;
            a.de && (Wj(c[S.bc], !!c[S.R]) && pk(Uo, b), mk(b), sk(Uo, b), Hk(b));
            c[S.R] && rk(Uo, c[S.R], c[S.Rc], !!c[S.cc], b.prefix);
            d && uk(["aw", "dc", "gb"])
        },
        Wo = function(a, b, c, d) {
            var e = a.Rh,
                f = a.callback,
                g = a.xh;
            if ("function" === typeof f)
                if (e === S.Ee && void 0 === g) {
                    var h = d(b.prefix, c);
                    0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
                } else e === S.mi ? (kg(65), nj(b, !1), f(ij[kj(b.prefix)])) : f(g)
        },
        Uo = ["aw", "dc", "gb"];
    var Xo = !1;

    function Yo() {
        if (Ba(Fb.joinAdInterestGroup)) return !0;
        Xo || (Rn(''), Xo = !0);
        return Ba(Fb.joinAdInterestGroup)
    }

    function Zo(a, b) {
        var c = void 0;
        try {
            c = I.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                hg("TAGGING", 9);
                return
            }
        } else try {
            if (50 <= I.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                hg("TAGGING", 10);
                return
            }
        } catch (e) {}
        Ob(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    };
    var $o = function(a, b, c, d, e) {
            var f;
            if (f = !b && !a.g) {
                var g;
                if (g = !a.isGtmEvent) {
                    var h = a.s.remoteConfig[S.fc];
                    g = h ? "auto_detect" === h.mode || "selectors" === h.mode || "code" === h.mode : !1
                }
                f = g
            }
            if (f) {
                var k = a.K(S.Ea);
                if (null !== k) {
                    var n;
                    k && nc(k) ? n = k : n = Ei(a.getRemoteConfig(S.fc));
                    n && yo(a.I, n, {
                        Kb: e,
                        Xa: c
                    }, void 0, d)
                }
            }
        },
        ap = function(a, b) {},
        bp = function(a, b) {
            a.sa("google_gtm_url_processor", function(c) {
                b && (c = Mk(c));
                var d = c;
                return c = d
            })
        },
        cp = function(a, b) {
            a.mc("gdpr_consent",
                ko());
            a.mc("gdpr", lo());
            zg() && a.g && (a.W("gcs", Ng()), Ag() && a.W("gcd", "G1" + Hg(xg)), b && a.W("gcu", "1"))
        },
        ep = function(a, b) {
            var c;
            if (!(c = b))
                if ("false" !== ni.Wh && ti)
                    if (ui) c = !0;
                    else {
                        var d = Wh("AW-" + a.I);
                        c = !!d && !!d.preAutoPii
                    }
            else c = !1;
            if (c) {
                var e = Ta(),
                    f = Ai({
                        uc: !0,
                        vc: !0,
                        tk: dp
                    });
                if (0 !== f.elements.length) {
                    var g = [];
                    var n = f.ek;
                    n && (a.W("ec_sel", n.querySelector), a.W("ec_meta", Bi(n)));
                    a.W("ec_lat", String(Ta() - e));
                    a.W("ec_s", f.status)
                }
            }
        },
        fp = function(a) {
            if (!a.g) a.K(S.ca) && a.sa("google_gtag_event_data", {
                items: a.K(S.ca)
            });
            else if (a.eventName == S.ya) {
                a.Zc({
                    google_conversion_merchant_id: a.K(S.Ke),
                    google_basket_feed_country: a.K(S.Ie),
                    google_basket_feed_language: a.K(S.Je),
                    google_basket_discount: a.K(S.He),
                    google_basket_transaction_type: a.eventName,
                    google_disable_merchant_reported_conversions: !0 === a.K(S.gg)
                });
                pn() && a.sa("google_disable_merchant_reported_conversions", !0);
                var b;
                var c = a.K(S.ca);
                if (c) {
                    for (var d = [], e = 0; e < c.length; ++e) {
                        var f = c[e];
                        f && d.push({
                            item_id: f.id,
                            quantity: f.quantity,
                            value: f.price,
                            start_date: f.start_date,
                            end_date: f.end_date
                        })
                    }
                    b = d
                } else b = void 0;
                var g = b;
                g && a.sa("google_conversion_items", g)
            }
        },
        gp = function(a) {
            var b;
            var c = {};
            a.isGtmEvent ? !a.g && a.eventName && (c.event = a.eventName) : c.event = a.eventName;
            var d = a.s.eventModel;
            if (d) {
                oc(d, c);
                for (var e in c) c.hasOwnProperty(e) && S.Yf[e.split(".")[0]] && delete c[e];
                b = c
            } else b = null;
            var f = b;
            f && a.sa("google_custom_params",
                f)
        },
        hp = function(a) {
            pn() && (a.sa("opt_image_generator", function() {
                return new Image
            }), a.sa("google_enable_display_cookie_match", !1))
        },
        ip = function(a) {
            var b, c = !1;
            c = !0 === z._gtmpcm ? !0 : Jk("14.1.1");
            (b = c) && a.nc("apcm");
            if (!a.isGtmEvent) {
                var d = Nk();
                0 === d ? a.mc("dg", "c") : 1 === d && a.mc("dg", "e")
            }
        },
        jp = function(a, b) {
            var c = mn(a, "/pagead/conversion_async.js");
            if (c) return c;
            var d = rn("https://", "http://", "www.googleadservices.com"),
                e = !b.isGtmEvent && 1 === Nk();
            if (Ok() || e) d = "https://www.google.com";
            return d + "/pagead/conversion_async.js"
        },
        kp = !1,
        lp = !1;
    var mp = !1;
    var np = !1;
    var dp = !1;
    var op = [],
        pp = function(a) {
            var b = z.google_trackConversion,
                c = a.o.gtm_onFailure;
            "function" == typeof b ? b(a.o) || c() : c()
        },
        qp = function() {
            for (; 0 < op.length;) pp(op.shift())
        },
        rp = function(a, b) {
            var c = kp;
            lp && (c = b.getContainerTypeLoaded("AW"));
            if (!c) {
                kp = !0;
                Pm();
                var d = function() {
                    lp && b.setContainerTypeLoaded("AW", !0);
                    qp();
                    op = {
                        push: pp
                    }
                };
                pn() ? d() : Mb(a, d, function() {
                    qp();
                    kp = !1;
                    lp && b.setContainerTypeLoaded("AW", !1)
                })
            }
        },
        sp = function(a, b, c) {
            var d = Co(a);
            !d && c.isGtmEvent && (d = this.dk(a));
            this.V = a;
            this.I = d.N[0] || "";
            this.O = d.containerId === d.id;
            this.C = d.N[1];
            this.g = void 0 !== this.C;
            this.eventName = b;
            this.isGtmEvent =
                c.isGtmEvent;
            this.s = c;
            this.o = {
                google_conversion_id: this.I,
                google_conversion_label: this.C,
                google_conversion_format: "3",
                google_conversion_color: "ffffff",
                google_conversion_domain: "",
                google_gtm: Mn()
            }
        };
    l = sp.prototype;
    l.dk = function(a) {
        var b = a.indexOf("/"),
            c = 3 <= b,
            d = a.substring(3, c ? b : a.length);
        return {
            id: a,
            prefix: "AW",
            containerId: "AW-" + d,
            N: [d, c ? a.substring(b + 1) : void 0]
        }
    };
    l.sa = function(a, b) {
        this.o[a] = b
    };
    l.nk = function() {
        delete this.o.google_transport_url
    };
    l.Zc = function(a) {
        for (var b in a) a.hasOwnProperty(b) &&
            (this.o[b] = a[b])
    };
    l.W = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b)
    };
    l.mc = function(a, b) {
        void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] = b)
    };
    l.nc = function(a) {
        this.o.google_gtm_experiments = this.o.google_gtm_experiments || {};
        this.o.google_gtm_experiments[a] = !0
    };
    l.K = function(a) {
        return this.s.getWithConfig(a)
    };
    l.getRemoteConfig = function(a) {
        return this.s.remoteConfig[a]
    };
    var vp = function(a, b, c, d) {
        function e(F, R) {
            function J() {
                op.push(F);
                lp && d.getContainerTypeLoaded("AW") && qp()
            }
            var Q = [];
            if (R) {
                F.g && k && (nj(A), F.W("auid", ij[kj(n)]));
                var L = (g(S.Pe) || {})[F.C];
                ep(F, Kk(L));
                var Z = !0 === g(S.Ed) || L;
                if (F.g && Z && (!np || !Ik())) {
                    var ba = Lk(L);
                    ba && Q.push(ba.then(function(U) {
                        F.W("em", U.pe);
                        F.W("ec_mode", U.kh)
                    }))
                }
            }
            if (Q.length) try {
                Promise.all(Q).then(function() {
                    J()
                });
                return
            } catch (U) {}
            J()
        }
        var f = new sp(a, b, d),
            g = function(F) {
                return d.getWithConfig(F)
            },
            h = void 0 != g(S.ia) &&
            !1 !== g(S.ia),
            k = !1 !== g(S.Ba),
            n = g(S.Qa) || g(S.Ja),
            p = g(S.qa),
            q = g(S.Ca),
            r = g(S.Ra),
            t = {};
        if (!mp) {
            var u = d.getMergedValues(S.X);
            t.jh = bb(nc(u) ? u : {})
        }
        var v = d.getMergedValues(S.X, 1),
            x = d.getMergedValues(S.X, 2);
        t.ke = bb(nc(v) ? v : {}, ".");
        t.he = bb(nc(x) ? x : {}, ".");
        var y = g(S.Z),
            w = jp(y, f);
        rp(w, d);
        var A = {
                prefix: n,
                domain: p,
                Pb: q,
                flags: r
            },
            B = b == S.Ia;
        var D = !1 === g(S.Cb) || !1 === g(S.Da);
        if (!B || !f.g && !D)
            if (!0 === g(S.Ge) && (f.g = !1), !1 !== g(S.ba) || f.g) {
                f.Zc({
                    google_remarketing_only: !f.g,
                    google_conversion_language: f.K(S.rb),
                    google_conversion_value: f.K(S.ma),
                    google_conversion_currency: f.K(S.ka),
                    google_conversion_order_id: f.K(S.tb),
                    google_user_id: f.K(S.Ka),
                    google_conversion_page_url: f.K(S.fb),
                    google_conversion_referrer_url: f.K(S.Sa)
                });
                f.Zc({
                    onload_callback: f.s.onSuccess,
                    gtm_onFailure: f.s.onFailure
                });
                ip(f);
                f.g && f.sa("google_transport_url", ln(f.K(S.Z), "/"));
                f.sa("google_restricted_data_processing", f.K(S.Tc));
                hp(f);
                !1 === f.K(S.ba) && f.sa("google_allow_ad_personalization_signals", !1);
                k ? f.Zc({
                    google_gcl_cookie_prefix: A.prefix,
                    google_gcl_cookie_domain: A.domain,
                    google_gcl_cookie_max_age_seconds: A.Pb,
                    google_gcl_cookie_flags: A.flags
                }) : f.sa("google_read_gcl_cookie_opt_out", !0);
                gp(f);
                fp(f);
                "1" === Nj(!1)._up && f.W("gtm_up", "1");
                f.g && (f.W("vdnc", f.K(S.Ue)), f.W("vdltv", f.K(S.Le)));
                cp(f);
                f.g && (f.W("delopc", f.K(S.Od)),
                    f.W("oedeld", f.K(S.Qe)), f.W("delc", f.K(S.Fd)), f.W("shf", f.K(S.Oe)), f.W("iedeld", Pk(f.K(S.ca))));
                mp || f.W("did", t.jh), f.W("gdid", t.ke), f.W("edid", t.he);
                bp(f, h);
                ap(f, A);
                $o(f, B, h, t, A);
                zg() ? Qg(function() {
                    cp(f);
                    var F = Mg(S.H);
                    if (f.g) {
                        var R = !1;
                        R = !0;
                        F || y || !h && !R || f.sa("google_transport_url",
                            "https://pagead2.googlesyndication.com/");
                        e(f, F)
                    } else if (F) {
                        e(f, F);
                        return
                    }
                    F || Pg(function() {
                        var J = new sp(a, f.eventName, d);
                        J.g = f.g;
                        J.Zc(oc(f.o));
                        bp(J, h);
                        !y && J.o.google_transport_url && J.nk();
                        cp(J, !0);
                        e(J, !0)
                    }, S.H)
                }, [S.H]) : e(f, !0)
            }
    };
    var Ip = function(a, b, c) {
            this.va = a;
            this.eventName = b;
            this.D = c;
            this.F = {};
            this.metadata = {};
            this.Wa = !1
        },
        Jp = function(a, b, c) {
            var d = a.D.getWithConfig(b);
            void 0 !== d ? a.F[b] = d : void 0 !== c && (a.F[b] = c)
        },
        Kp = function(a, b, c) {
            var d = Wh(a.va);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Lp(a) {
        return {
            getDestinationId: function() {
                return a.va
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                return void(a.eventName = b)
            },
            getHitData: function(b) {
                return a.F[b]
            },
            setHitData: function(b, c) {
                return void(a.F[b] = c)
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.F[b] && (a.F[b] = c)
            },
            copyToHitData: function(b, c) {
                Jp(a, b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                return void(a.metadata[b] = c)
            },
            abort: function() {
                return void(a.Wa = !0)
            },
            getProcessedEvent: function() {
                return a
            }
        }
    };
    var jq = function() {
            var a = !0;
            mo(7) && mo(9) && mo(10) || (a = !1);
            return a
        },
        kq = function() {
            var a = !0;
            mo(3) && mo(4) || (a = !1);
            return a
        };
    var dr = null,
        er = !1;

    function fr(a) {
        return er && !a ? dr = dr || new gr : T.gcq = T.gcq || new gr
    }
    var hr = function(a, b, c) {
            fr().register(a, b, c)
        },
        ir = function(a, b, c, d) {
            fr().push("event", [b, a], c, d)
        },
        jr = function(a, b, c) {
            fr().insert("event", [b, a], c)
        },
        kr = function(a, b) {
            fr().push("config", [a], b)
        },
        lr = function(a, b, c, d) {
            fr().push("get", [a, b], c, d)
        },
        mr = function(a) {
            return fr().getRemoteConfig(a)
        },
        nr = function() {
            var a = S.Z;
            return fr().getGlobalConfigValue && fr().getGlobalConfigValue(a)
        },
        or = {},
        pr = function() {
            this.status = 1;
            this.containerConfig = {};
            this.targetConfig = {};
            this.remoteConfig = {};
            this.o = {};
            this.s = null;
            this.claimed =
                this.g = !1
        },
        qr = function(a, b, c, d, e) {
            this.type = a;
            this.s = b;
            this.V = c || "";
            this.g = d;
            this.o = e
        },
        gr = function() {
            this.o = {};
            this.s = {};
            this.g = [];
            this.C = {
                AW: !1,
                UA: !1
            }
        },
        rr = function(a, b) {
            var c = Co(b);
            return a.o[c.containerId] = a.o[c.containerId] || new pr
        },
        sr = function(a, b, c, d) {
            if (b) {
                var e = Co(b);
                if (e && 1 === rr(a, b).status) {
                    rr(a, b).status = 2;
                    var f = {};
                    cm && (f.timeoutId = z.setTimeout(function() {
                        kg(38);
                        Fl()
                    }, 3E3));
                    a.push("require", [f], e.containerId);
                    or[e.containerId] = Ta();
                    if (pn()) {} else 2 === d ? vn(e.containerId, c) : un(e.containerId, c, !0)
                }
            }
        },
        tr = function(a, b, c, d) {
            if (d.V) {
                var e = rr(a, d.V),
                    f = e.s;
                if (f) {
                    var g = oc(c),
                        h = oc(e.targetConfig[d.V]),
                        k = oc(e.containerConfig),
                        n = oc(e.remoteConfig),
                        p = oc(a.s),
                        q = {};
                    try {
                        q = oc(Kh)
                    } catch (x) {
                        kg(72)
                    }
                    var r = Nh("gtm.uniqueEventId"),
                        t = Co(d.V).prefix,
                        u = Va(function() {
                            var x = g[S.ac];
                            x && K(x)
                        }),
                        v = Fn(En(Gn(Dn(Bn(An(Cn(zn(yn(xn(g), h), k), n), p), q), function() {
                            pm(r, t, "2");
                            u()
                        }), function() {
                            pm(r, t, "3");
                            u()
                        }), function(x, y) {
                            a.C[x] = y
                        }), function(x) {
                            return a.C[x]
                        });
                    try {
                        pm(r, t, "1"), ym(d.type, d.V, v);
                        f(d.V, b, d.s, v)
                    } catch (x) {
                        pm(r, t, "4");
                    }
                }
            }
        };
    l = gr.prototype;
    l.register = function(a, b, c) {
        var d = rr(this, a);
        if (3 !== d.status) {
            d.s = b;
            d.status = 3;
            c && (oc(d.remoteConfig, c), d.remoteConfig = c);
            var e = Co(a),
                f = or[e.containerId];
            if (void 0 !== f) {
                var g = T[e.containerId].bootstrap,
                    h = e.prefix.toUpperCase();
                T[e.containerId]._spx && (h = h.toLowerCase());
                var k = Nh("gtm.uniqueEventId"),
                    n = h,
                    p = Ta() - g;
                if (cm && !Kl[k]) {
                    k !== Gl && (Bl(), Gl = k);
                    var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
                    Rl = Rl ? Rl + "," + q : "&cl=" + q
                }
                delete or[e.containerId]
            }
            this.flush()
        }
    };
    l.notifyContainerLoaded = function(a, b) {
        var c = this,
            d = function(f) {
                if (Co(f)) {
                    var g = rr(c, f);
                    g.status = 3;
                    g.claimed = !0
                }
            };
        d(a);
        for (var e = 0; e < b.length; e++) d(b[e]);
        this.flush()
    };
    l.push = function(a, b, c, d) {
        if (void 0 !== c) {
            if (!Co(c)) return;
            sr(this, c, b[0][S.Z] || this.s[S.Z], "event" === a ? 2 : 1);
            rr(this, c).g && (d = !1)
        }
        this.g.push(new qr(a, Math.floor(Ta() / 1E3), c, b, d));
        d || this.flush()
    };
    l.insert = function(a, b, c) {
        var d = Math.floor(Ta() / 1E3);
        0 < this.g.length ? this.g.splice(1, 0, new qr(a, d, c, b, !1)) : this.g.push(new qr(a, d, c, b, !1))
    };
    l.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
            var f = this.g[0];
            if (f.o) !f.V || rr(this, f.V).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift();
            else {
                var g = void 0;
                switch (f.type) {
                    case "require":
                        g = rr(this, f.V);
                        if (3 !== g.status && !a) {
                            this.g.push.apply(this.g, c);
                            return
                        }
                        cm && z.clearTimeout(f.g[0].timeoutId);
                        break;
                    case "set":
                        La(f.g[0], function(r, t) {
                            oc($a(r, t), b.s)
                        });
                        break;
                    case "config":
                        g = rr(this, f.V);
                        if (g.claimed) break;
                        e.$a = {};
                        La(f.g[0], function(r) {
                            return function(t, u) {
                                oc($a(t, u), r.$a)
                            }
                        }(e));
                        var h = !!e.$a[S.Qd];
                        delete e.$a[S.Qd];
                        var k = Co(f.V),
                            n = k.containerId === k.id;
                        h || (n ? g.containerConfig = {} : g.targetConfig[f.V] = {});
                        g.g && h || tr(this, S.Ia, e.$a, f);
                        g.g = !0;
                        delete e.$a[S.Fb];
                        n ? oc(e.$a, g.containerConfig) : (oc(e.$a, g.targetConfig[f.V]), kg(70));
                        d = !0;
                        break;
                    case "event":
                        g = rr(this, f.V);
                        if (g.claimed) break;
                        e.zd = {};
                        La(f.g[0], function(r) {
                            return function(t, u) {
                                oc($a(t, u), r.zd)
                            }
                        }(e));
                        tr(this, f.g[1], e.zd, f);
                        break;
                    case "get":
                        if (g = rr(this, f.V), !g.claimed) {
                            var p = {},
                                q = (p[S.eb] = f.g[0], p[S.pb] = f.g[1], p);
                            tr(this,
                                S.Pa, q, f)
                        }
                }
                this.g.shift();
                ur(this, f)
            }
            e = {
                $a: e.$a,
                zd: e.zd
            }
        }
        this.g.push.apply(this.g, c);
        d && this.flush()
    };
    var ur = function(a, b) {
        if ("require" !== b.type)
            if (b.V)
                for (var c = a.getCommandListeners(b.V)[b.type] || [], d = 0; d < c.length; d++) c[d]();
            else
                for (var e in a.o)
                    if (a.o.hasOwnProperty(e)) {
                        var f = a.o[e];
                        if (f && f.o)
                            for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
                    }
    };
    gr.prototype.getRemoteConfig = function(a) {
        return rr(this, a).remoteConfig
    };
    gr.prototype.getCommandListeners = function(a) {
        return rr(this, a).o
    };
    gr.prototype.getGlobalConfigValue = function(a) {
        return this.s[a]
    };
    var wr = function(a, b) {
            return 1 === arguments.length ? vr("set", a) : vr("set", a, b)
        },
        xr = function(a, b) {
            return 1 === arguments.length ? vr("config", a) : vr("config", a, b)
        },
        yr = function(a, b) {
            return 1 === arguments.length ? vr("event", a) : vr("event", a, b)
        };

    function vr(a) {
        return arguments
    }
    var Ar = function(a) {
        if (zr(a)) return a;
        this.g = a
    };
    Ar.prototype.getUntrustedMessageValue = function() {
        return this.g
    };
    var zr = function(a) {
            return !a || "object" !== lc(a) || nc(a) ? !1 : "getUntrustedMessageValue" in a
        },
        Br = function(a) {
            if (zr(a)) return a.getUntrustedMessageValue()
        };
    Ar.prototype.getUntrustedMessageValue = Ar.prototype.getUntrustedMessageValue;
    var Cr = function() {
        this.g = [];
        this.o = []
    };
    Cr.prototype.push = function(a, b, c) {
        var d = this.g.length + 1;
        zr(a) && (a = Br(a) || a);
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        a = new Ar(a);
        var e = {
            debugContext: c,
            message: a,
            notBeforeEventId: b,
            priorityId: d
        };
        this.g.push(e);
        for (var f = 0; f < this.o.length; f++) try {
            this.o[f](e)
        } catch (g) {}
    };
    Cr.prototype.listen = function(a) {
        this.o.push(a)
    };
    Cr.prototype.get = function() {
        for (var a = {}, b = 0; b < this.g.length; b++) {
            var c = this.g[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    var Er = function(a, b, c) {
            Dr().push(a, b, c)
        },
        Gr = function() {
            var a = Fr;
            Dr().listen(a)
        },
        Hr = function(a, b) {
            return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
        };

    function Dr() {
        var a = T.mb;
        a || (a = new Cr, T.mb = a);
        return a
    }
    var Ir = !1;
    var Jr = !1;
    var Kr = function(a, b) {
        T.addDestinationToContainer ? T.addDestinationToContainer(a, b) : (T.pendingDestinationIds = T.pendingDestinationIds || [], T.pendingDestinationIds.push([a, b]))
    };
    var vs = function(a) {
            var b = T.zones;
            return b ? b.getIsAllowedFn(Yk(), a) : function() {
                return !0
            }
        },
        ws = function(a) {
            var b = T.zones;
            return b ? b.isActive(Yk(), a) : !0
        };
    var zs = function(a, b) {
        for (var c = [], d = 0; d < je.length; d++)
            if (a[d]) {
                var e = je[d];
                var f = Nm(b.wb);
                try {
                    var g = en(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = c,
                            k = h.push,
                            n = d,
                            p = e["function"];
                        if (!p) throw "Error: No function name given for function call.";
                        var q = le[p];
                        k.call(h, {
                            Lh: n,
                            Ch: q ? q.priorityOverride || 0 : 0,
                            execute: g
                        })
                    } else xs(d, b), f()
                } catch (t) {
                    f()
                }
            }
        c.sort(ys);
        for (var r = 0; r < c.length; r++) c[r].execute();
        return 0 <
            c.length
    };

    function ys(a, b) {
        var c, d = b.Ch,
            e = a.Ch;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Lh,
                h = b.Lh;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function xs(a, b) {
        if (!cm) return;
        var c = function(d) {
            var e = b.Ff(je[d]) ? "3" : "4",
                f = te(je[d][Kd.Pg], b, []);
            f && f.length && c(f[0].index);
            im(b.id, je[d], e);
            var g = te(je[d][Kd.Sg], b, []);
            g && g.length && c(g[0].index)
        };
        c(a);
    }
    var Cs = !1,
        As;
    var Is = function(a) {
        var b = Ta(),
            c = a["gtm.uniqueEventId"],
            d = a["gtm.priorityId"],
            e = a.event;
        if ("gtm.js" === e) {
            if (Cs) return !1;
            Cs = !0;
        }
        var h, k = !1;
        if (ws(c)) h = vs(c);
        else {
            if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
            k = !0;
            h = vs(Number.MAX_SAFE_INTEGER)
        }
        hm(c, e);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = n;
        var r = {
                id: c,
                priorityId: d,
                name: e,
                Ff: Wk(h),
                Bk: [],
                wh: function() {
                    kg(6)
                },
                bh: Es(),
                dh: Fs(c),
                wb: new Jm(q, p)
            },
            t = De(r);
        k && (t = Gs(t));
        var u = zs(t, r),
            v = !1;
        Om(r.wb);
        "gtm.js" !== e && "gtm.sync" !== e || Zm(Ie.J);
        return Hs(t, u) || v
    };

    function Fs(a) {
        return function(b) {
            cm && (sc(b) || qm(a, "input", b))
        }
    }

    function Es() {
        var a = {};
        a.event = Sh("event", 1);
        a.ecommerce = Sh("ecommerce", 1);
        a.gtm = Sh("gtm");
        a.eventModel = Sh("eventModel");
        return a
    }

    function Gs(a) {
        for (var b = [], c = 0; c < a.length; c++) a[c] && (qh[String(je[c][Kd.Gb])] && (b[c] = !0), void 0 !== je[c][Kd.Ti] && (b[c] = !0));
        return b
    }

    function Hs(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && je[c] && !rh[String(je[c][Kd.Gb])]) return !0;
        return !1
    }
    var Me;
    var Js = !1;
    var Ks = "HA GF G UA AW DC".split(" "),
        Ls = !1,
        Ms = !1,
        Ns = 0;

    function Os(a) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Hh()
        });
        return a["gtm.uniqueEventId"]
    }

    function Ps() {
        return Ls
    }
    var Qs = {
            config: function(a) {
                Os(a);
            },
            consent: function(a) {
                if (3 === a.length) {
                    kg(39);
                    var b = {
                            eventId: Os(a),
                            priorityId: a["gtm.priorityId"]
                        },
                        c = a[1];
                    "default" === c ? Jg(a[2]) : "update" === c && Lg(a[2], b)
                }
            },
            event: function(a) {
                var b = a[1];
                if (!(2 > a.length) && m(b)) {
                    var c;
                    if (2 < a.length) {
                        if (!nc(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        c = a[2]
                    }
                    var d = !1;
                    c && c[S.hf] && (0 === Ie.J.indexOf("GTM") && (d = !0), delete c[S.hf]);
                    var e = c,
                        f = {},
                        g = (f.event = b, f);
                    e && (g.eventModel = oc(e), e[S.ac] && (g.eventCallback = e[S.ac]), e[S.Id] && (g.eventTimeout = e[S.Id]));
                    var h = Os(a),
                        k = a["gtm.priorityId"];
                    g["gtm.uniqueEventId"] = h;
                    k && (g["gtm.priorityId"] = k);
                    return d ? void 0 : g
                }
            },
            get: function(a) {},
            js: function(a) {
                if (2 == a.length && a[1].getTime) {
                    Ms = !0;
                    Ps();
                    var b = {};
                    return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] = Os(a), b
                }
            },
            policy: function(a) {
                if (3 === a.length && m(a[1]) && Ba(a[2])) {
                    var b =
                        a[1],
                        c = a[2],
                        d = Me.o;
                    d.g[b] ? d.g[b].push(c) : d.g[b] = [c];
                    if (kg(74), "all" === a[1]) {
                        kg(75);
                        var e = !1;
                        try {
                            e = a[2](Ie.J, "unknown", {})
                        } catch (f) {}
                        e || kg(76)
                    }
                } else {
                    kg(73);
                }
            },
            set: function(a) {
                var b;
                2 == a.length && nc(a[1]) ? b = oc(a[1]) : 3 == a.length && m(a[1]) && (b = {}, nc(a[2]) || Ea(a[2]) ? b[a[1]] =
                    oc(a[2]) : b[a[1]] = a[2]);
                if (b) {
                    var c = Os(a),
                        d = a["gtm.priorityId"];
                    b._clear = !0;
                    return b
                }
            }
        },
        Rs = {
            policy: !0
        };
    var Ss = function(a) {
            var b = z[oh.aa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        Ts = function(a) {
            var b = z[oh.aa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var Us = !1,
        Vs = [];

    function Ws() {
        if (!Us) {
            Us = !0;
            for (var a = 0; a < Vs.length; a++) K(Vs[a])
        }
    }
    var Xs = function(a) {
        Us ? K(a) : Vs.push(a)
    };
    var mt = 0,
        nt = {},
        ot = [],
        pt = [],
        qt = !1,
        rt = !1,
        st = function(a) {
            return z[oh.aa].push(a)
        },
        tt = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return st(a)
        },
        ut = function(a, b) {
            var c = T[oh.aa],
                d = c ? c.subscribers : 1,
                e = 0,
                f = !1,
                g = void 0;
            b && (g = z.setTimeout(function() {
                f || (f = !0, a());
                g = void 0
            }, b));
            return function() {
                ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
            }
        };

    function vt(a) {
        var b = a._clear;
        La(a, function(d, e) {
            "_clear" !== d && (b && Qh(d), Qh(d, e))
        });
        wh || (wh = a["gtm.start"]);
        var c = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        c || (c = Hh(), a["gtm.uniqueEventId"] = c, Qh("gtm.uniqueEventId", c));
        return Is(a)
    }

    function wt(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b) return !0
        }
        return !1
    }

    function xt() {
        for (var a = !1; !rt && (0 < ot.length || 0 < pt.length);) {
            if (!qt && wt(ot[0])) {
                var b = {},
                    c = (b.event = "gtm.init_consent", b),
                    d = {},
                    e = (d.event = "gtm.init", d),
                    f = ot[0]["gtm.uniqueEventId"];
                f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
                ot.unshift(c, e);
                qt = !0;
            }
            rt = !0;
            delete Kh.eventModel;
            Mh();
            var p = null,
                q = void 0;
            if (pt.length) {
                var r = pt.shift();
                p = r.message;
                q = r.debugContext
            }
            null == p && (p = ot.shift());
            if (null != p) {
                var t = zr(p);
                t && (p = Br(p), Rh());
                try {
                    if (Ba(p)) try {
                        p.call(Oh)
                    } catch (E) {} else if (Ea(p)) {
                        var u =
                            p;
                        if (m(u[0])) {
                            var v = u[0].split("."),
                                x = v.pop(),
                                y = u.slice(1),
                                w = Nh(v.join("."), 2);
                            if (null != w) try {
                                w[x].apply(w, y)
                            } catch (E) {}
                        }
                    } else {
                        if (Ma(p)) {
                            a: {
                                if (p.length && m(p[0])) {
                                    var A = Qs[p[0]];
                                    if (A && (!t || !Rs[p[0]])) {
                                        p = A(p, q);
                                        break a
                                    }
                                }
                                p = void 0
                            }
                            if (!p) {
                                rt = !1;
                                continue
                            }
                        }
                        a = vt(p) || a;
                        if (wt(p)) {
                            var B = p["gtm.uniqueEventId"];
                            void 0 !== B && (yt(B), mt = B)
                        }
                    }
                } finally {
                    t && Mh(!0)
                }
            }
            rt = !1
        }
        return !a
    }

    function zt() {
        var b = xt();
        try {
            Ss(Ie.J)
        } catch (c) {}
        return b
    }

    function Fr(a) {
        var b = a.notBeforeEventId;
        mt < b ? (nt[String(b)] = nt[String(b)] || [], nt[String(b)].push(a)) : (pt.push(a), pt.sort(Hr), K(function() {
            rt || xt()
        }))
    }

    function yt(a) {
        for (var b = nt[String(a)] || [], c = 0; c < b.length; c++) pt.push(b[c]);
        b.length && pt.sort(Hr);
        delete nt[String(a)]
    }
    var Bt = function() {
            var a = Hb(oh.aa, []),
                b = Hb("google_tag_manager", {});
            nt = Dr().get();
            yt(0);
            Gr();
            b = b[oh.aa] = b[oh.aa] || {};
            Fm(function() {
                if (!b.gtmDom) {
                    b.gtmDom = !0;
                    var e = {};
                    a.push((e.event = "gtm.dom", e))
                }
            });
            Xs(function() {
                if (!b.gtmLoad) {
                    b.gtmLoad = !0;
                    var e = {};
                    a.push((e.event = "gtm.load", e))
                }
            });
            b.subscribers = (b.subscribers || 0) + 1;
            var c = a.push;
            a.push = function() {
                var e;
                if (0 < T.SANDBOXED_JS_SEMAPHORE) {
                    e = [];
                    for (var f = 0; f < arguments.length; f++) e[f] = new Ar(arguments[f])
                } else e = [].slice.call(arguments, 0);
                ot.push.apply(ot,
                    e);
                var g = c.apply(a, e);
                if (300 < this.length)
                    for (kg(4); 300 < this.length;) this.shift();
                var h = "boolean" !== typeof g || g;
                return xt() && h
            };
            var d = a.slice(0);
            ot.push.apply(ot, d);
            if (At()) {
                K(zt)
            }
        },
        At = function() {
            var a = !0;
            return a
        };

    function Ct(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    };
    var Dt = {};
    Dt.Sd = new String("undefined");
    var eu = z.clearTimeout,
        fu = z.setTimeout,
        V = function(a, b, c, d) {
            if (pn()) {
                b && K(b)
            } else return Mb(a, b, c, d)
        },
        gu = function() {
            return new Date
        },
        hu = function() {
            return z.location.href
        },
        iu = function(a) {
            return ji(li(a), "fragment")
        },
        ju = function(a) {
            return ki(li(a))
        },
        ku = function(a, b) {
            return Nh(a, b || 2)
        },
        lu = function(a, b, c) {
            return b ? tt(a, b, c) : st(a)
        },
        mu = function(a, b) {
            z[a] = b
        },
        W = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        nu = function(a, b, c) {
            return Pi(a, b, void 0 === c ? !0 : !!c)
        },
        ou = function(a, b, c) {
            return 0 === Yi(a, b, c)
        },
        pu = function(a, b) {
            if (pn()) {
                b && K(b)
            } else Ob(a, b)
        },
        qu = function(a) {
            return !!Kt(a, "init", !1)
        },
        ru = function(a) {
            It(a, "init", !0)
        },
        su = function(a, b, c) {
            cm && (sc(a) || qm(c, b, a))
        };
    var Qu = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function Ru(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var Su = new Ia;

    function Tu(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = Su.get(e);
            f || (f = new RegExp(b, d), Su.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function Uu(a, b) {
        function c(g) {
            var h = li(g),
                k = ji(h, "protocol"),
                n = ji(h, "host", !0),
                p = ji(h, "port"),
                q = ji(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
            return [k, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Vu(a) {
        return Wu(a) ? 1 : 0
    }

    function Wu(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = oc(a, {});
                oc({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Vu(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return 0 <= String(b).indexOf(String(c));
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < Qu.length; g++) {
                            var h = Qu[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (k) {}
                    f = !1
                }
                return f;
            case "_ew":
                return Ru(b, c);
            case "_eq":
                return String(b) === String(c);
            case "_ge":
                return Number(b) >= Number(c);
            case "_gt":
                return Number(b) > Number(c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return Number(b) <= Number(c);
            case "_lt":
                return Number(b) < Number(c);
            case "_re":
                return Tu(b, c, a.ignore_case);
            case "_sw":
                return 0 === String(b).indexOf(String(c));
            case "_um":
                return Uu(b, c)
        }
        return !1
    };

    function Xu(a, b) {
        var c = this;
    };
    var Yu;
    var Zu = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Yu) try {
                a[b]()
            } catch (c) {
                kg(77)
            } else a[b]()
    };

    function $u(a, b, c) {
        var d = this,
            e;
        return e
    };

    function av(a, b, c) {};

    function bv(a, b, c, d) {};

    function cv(a) {};

    function gv(a) {};
    var hv = {},
        iv = [],
        jv = {},
        kv = 0,
        lv = 0;

    function sv(a, b) {}

    function zv(a, b) {};

    function Ev(a) {};
    var Fv = {},
        Gv = [];
    var Nv = function(a, b) {};

    function Ov(a, b, c) {};

    function Pv(a, b) {
        return !0
    };

    function Qv(a, b, c) {};

    function Rv() {
        var a = 2;
        return a
    };

    function Sv(a, b) {
        var c;
        M(H(this), ["path:!string"], [a]);
        N(this, "access_globals", "execute", a);
        for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++)
            if (e = f, f = f[d[g]], e === z || e === I) return;
        if ("function" !== lc(f)) return;
        for (var h = Rv(), k = [], n = 1; n < arguments.length; n++) k.push(qc(arguments[n], this.g, h));
        var p = (0, this.g.O)(f, e, k);
        c = pc(p, this.g, h);
        void 0 === c && void 0 !== p && kg(45);
        return c
    };

    function Tv(a) {};

    function Uv(a) {};

    function Vv(a) {
        M(H(this), ["listener:!Fn"], arguments);
        N(this, "process_dom_events", "window", "load");
        Xs(qc(a))
    };

    function Wv(a) {
        var b;
        return b
    };

    function Xv(a, b) {
        var c;
        var d = pc(c, this.g, Rv());
        void 0 === d && void 0 !== c && kg(45);
        return d
    };

    function Yv(a) {
        var b;
        M(H(this), ["path:!string"], arguments);
        N(this, "access_globals", "read", a);
        var c = a.split("."),
            d = Za(c, [z, I]);
        if (!d) return;
        var e = d[c[c.length - 1]];
        b = pc(e, this.g, Rv());
        void 0 === b && void 0 !== e && kg(45);
        return b
    };

    function Zv(a, b) {
        var c;
        return c
    };

    function $v(a, b) {
        var c = null,
            d = Rv();
        M(H(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        N(this, "access_globals", "readwrite", a);
        N(this, "access_globals", "readwrite", b);
        var e = [z, I],
            f = a.split("."),
            g = Za(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var k = g[h];
        if (k && !Ba(k)) return null;
        if (k) return pc(k, this.g, d);
        var n;
        k = function() {
            if (!Ba(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = k;
        var p = b.split("."),
            q = Za(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            k.apply(k, Array.prototype.slice.call(arguments, 0))
        };
        return pc(c, this.g, d)
    };

    function aw(a) {
        var b;
        return pc(b, this.g,
            Rv())
    };
    var bw = {},
        cw = [],
        dw = {},
        ew = 0,
        fw = 0;
    var lw = function(a, b) {
        var c = this;
        return b
    };
    var qw = function(a, b) {
        var c = this;
        return b
    };
    var vw = function() {
        var a = this;
    };
    var ww = {},
        xw = [];
    var Ew = function(a, b) {
        var c = this;
        return b
    };
    var Iw = function(a, b) {
        var c = this;
        return b
    };
    var Jw, Kw;
    var Tw = function(a, b) {
        var c = this;
        return b
    };
    var Db = ca(["data-gtm-yt-inspected-"]),
        Uw = ["www.youtube.com", "www.youtube-nocookie.com"],
        Vw, Ww = !1;
    var fx = function(a, b) {
        var c = this;
        return b
    };

    function gx(a) {
        return !1
    }
    var hx;

    function ix(a) {
        var b = !1;
        return b
    };

    function ox(a, b) {
        var c = !1;
        return c
    };
    var px = function(a) {
        var b;
        return b
    };

    function qx(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    };

    function rx() {
        return fg.gh
    };

    function sx() {
        var a = [];
        return pc(a)
    };

    function tx(a) {
        var b = null;
        return b
    };

    function ux(a, b) {
        var c;
        return c
    };

    function vx(a, b) {
        var c;
        return c
    };

    function wx(a, b) {
        var c;
        return c
    };

    function xx(a) {
        var b = "";
        return b
    };

    function yx() {
        return fg.Fh
    };

    function zx(a, b) {
        var c;
        return c
    };

    function Ax(a) {
        var b = "";
        return b
    };

    function Bx() {
        N(this, "get_user_agent");
        return z.navigator.userAgent
    };

    function Cx(a) {
        if (!a) return {};
        var b = a.sj;
        return Hm(b.type, b.index, b.name)
    };

    function Ex(a, b) {};

    function Fx(a, b) {};
    var Gx = {};

    function Hx(a, b, c, d, e, f) {
        f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [
            [c],
            [d]
        ], Mb(a, function() {
            for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
            g.push = function(k) {
                K(k);
                return 0
            }
        }, function() {
            for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
            e[f] = null
        }, b)) : Mb(a, c, d, b)
    }

    function Ix(a, b, c, d) {
        M(H(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
        N(this, "inject_script", a);
        var e = this.g;
        Hx(a, void 0, function() {
            b && b.o(e)
        }, function() {
            c && c.o(e)
        }, Gx, d);
    }
    var Jx = Object.freeze({
            dl: 1,
            id: 1
        }),
        Kx = {};

    function Lx(a, b, c, d) {};

    function Mx(a) {
        var b = !0;
        return b
    };
    var Nx = function() {
            return !1
        },
        Ox = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };
    var Px = ["textContent", "value", "tagName", "children", "childElementCount"];

    function Qx(a) {
        var b;
        return b
    };

    function Rx() {
        try {
            N(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = qc(a[b], this.g);
        console.log.apply(console, a);
    };

    function Sx(a, b) {
        var c;
        return c
    };

    function Tx(a) {
        var b = void 0;
        return b
    };

    function Ux(a) {};

    function Vx(a, b) {
        var c = !1;
        return c
    };

    function Wx() {
        var a = "";
        return a
    };

    function Xx() {
        var a = "";
        return a
    };

    function Yx(a, b) {
        var c = this;
    };
    var Zx = Object.freeze(["config", "event", "get", "set"]);

    function $x(a, b, c) {};

    function ay(a, b) {
        var c = !1;
        return c
    };

    function by() {};

    function cy(a, b, c, d) {
        d = void 0 === d ? !1 : d;
    };

    function dy(a, b, c) {};

    function ey(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    };
    var fy = !1;
    fy = !0;

    function gy(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        for (var b = a.Hb(), c = b.length(), d = 0; d < c; d++) {
            var e = b.get(d);
            e !== S.ye && N(this, "access_consent", e, "write")
        }
        var f = this.g.g,
            g = f.eventId,
            h = Cx(f);
        if (fy) {
            var k = vr("consent", "default", qc(a));
            Er(k, g, h)
        } else Jg(qc(a))
    }

    function hy(a, b, c) {
        return !1
    };

    function iy(a, b, c) {};

    function jy(a, b, c) {};
    var ky = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };

    function ly(a, b, c, d) {
        var e = this;
    };

    function my(a, b, c) {};
    var ny = {},
        oy = {};
    ny.getItem = function(a) {
        var b = null;
        return b
    };
    ny.setItem = function(a, b) {};
    ny.removeItem = function(a) {};
    ny.clear = function() {};
    var py = function(a) {
        var b;
        return b
    };
    var qy = !1;
    qy = !0;

    function ry(a) {
        M(H(this), ["consentSettings:!DustMap"], arguments);
        var b = qc(a),
            c;
        for (c in b) b.hasOwnProperty(c) && N(this, "access_consent", c, "write");
        var d = this.g.g,
            e = d.eventId,
            f = Cx(d);
        qy ? Er(vr("consent", "update", b), e, f) : Lg(b, {
            eventId: e
        })
    }
    var sy = function() {
        var a = new Xf;
        pn() ? (a.add("injectHiddenIframe", Aa), a.add("injectScript", Aa)) : (a.add("injectHiddenIframe", Fx), a.add("injectScript", Ix));
        var b = dy;
        a.add("Math", Bf());
        a.add("Object", Vf);
        a.add("TestHelper", $f());
        a.add("addConsentListener", Xu);
        a.add("addEventCallback", cv);
        a.add("aliasInWindow", Pv);
        a.add("assertApi",
            uf);
        a.add("assertThat", vf);
        a.add("callInWindow", Sv);
        a.add("callLater", Tv);
        a.add("copyFromDataLayer", Xv);
        a.add("copyFromWindow", Yv);
        a.add("createArgumentsQueue", $v);
        a.add("createQueue", aw);
        a.add("decodeUri", Cf);
        a.add("decodeUriComponent", Df);
        a.add("encodeUri", Ef);
        a.add("encodeUriComponent", Ff);
        a.add("fail", Gf);
        a.add("fromBase64", px, !("atob" in z));
        a.add("generateRandom", Hf);
        a.add("getContainerVersion", If);
        a.add("getCookieValues", qx);
        a.add("getQueryParameters", vx);
        a.add("getReferrerQueryParameters",
            wx);
        a.add("getReferrerUrl", xx);
        a.add("getTimestamp", Lf);
        a.add("getTimestampMillis", Lf);
        a.add("getType", Mf);
        a.add("getUrl", Ax);
        a.add("isConsentGranted", Mx);
        a.add("localStorage", Ox, !Nx());
        a.add("logToConsole", Rx);
        a.add("makeInteger", Of);
        a.add("makeNumber", Pf);
        a.add("makeString", Qf);
        a.add("makeTableMap", Rf);
        a.add("mock", Uf);
        a.add("parseUrl", Tx);
        a.add("queryPermission", Vx);
        a.add("readCharacterSet", Wx);
        a.add("readTitle", Xx);
        a.add("sendPixel", b);
        a.add("setCookie", ey);
        a.add("setDefaultConsentState", gy);
        a.add("setInWindow", hy);
        a.add("sha256", ly);
        a.add("templateStorage", ny);
        a.add("toBase64", py, !("btoa" in z));
        a.add("updateConsentState", ry);
        Zf(a, "callOnWindowLoad", Vv);
        Zf(a, "internal.addFormInteractionListener", sv);
        Zf(a, "internal.addFormSubmitListener", zv);
        Zf(a, "internal.addGaSendListener", Ev);
        Zf(a, "internal.addHistoryChangeListener", Nv);
        Zf(a, "internal.evaluateFilteringRules", gx);
        Zf(a, "internal.evaluateMatchingRules", ix);
        Zf(a, "internal.getDestinationIds", sx);
        Zf(a, "internal.getFlags", Kf);
        Zf(a, "internal.locateUserData",
            Qx);
        Zf(a, "internal.registerGtagCommandListener", $x);
        Zf(a, "internal.sendGtagEvent", cy);
        a.add("JSON", Nf(function(c) {
            var d = this.g.g;
            d && d.log.call(this, "error", c)
        }));
        a.add("gtagSet", Ex);
        pn() ? Zf(a, "internal.injectScript", Aa) : Zf(a, "internal.injectScript", Lx);
        Zf(a, "internal.enableAutoEventOnFormSubmit", qw);
        Zf(a, "internal.enableAutoEventOnFormInteraction", lw);
        Zf(a, "internal.enableAutoEventOnHistoryChange",
            Ew);
        Zf(a, "internal.addDataLayerEventListener", $u);
        Zf(a, "internal.enableAutoEventOnYouTubeActivity", fx);
        Zf(a, "internal.removeDataLayerEventListener", ay);
        Zf(a, "internal.enableAutoEventOnGaSend", vw);
        Zf(a, "internal.enableAutoEventOnLinkClick", Iw);
        Zf(a, "internal.enableAutoEventOnScroll", Tw);
        Zf(a, "internal.getCountryCode", rx);
        Zf(a, "internal.getRegionCode", yx);
        return function(c) {
            var d;
            if (a.g.hasOwnProperty(c)) d = a.get(c, this);
            else {
                var e;
                if (e = a.o.hasOwnProperty(c)) {
                    var f = !1,
                        g = this.g.g;
                    if (g) {
                        var h = g.gd();
                        if (h) {
                            0 !== h.indexOf("__cvt_") && (f = !0);
                        }
                    }
                    e = f
                }
                if (e) {
                    var k = a.o.hasOwnProperty(c) ? a.o[c] : void 0;
                    d = k
                } else throw Error(c + " is not a valid API name.");
            }
            return d
        }
    };
    var ty = function() {
            return !1
        },
        uy = function() {
            var a = {};
            return function(b, c, d) {}
        };
    var vy;

    function wy() {
        var a = vy;
        return function(b, c, d) {
            var e = d && d.event;
            xy(c);
            var f = new hb;
            La(c, function(q, r) {
                var t = pc(r);
                void 0 === t && void 0 !== r && kg(44);
                f.set(q, t)
            });
            a.g.g.I = Ae();
            var g = {
                cj: Ne(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                $d: void 0 !== e ? function(q) {
                    return e.wb.$d(q)
                } : void 0,
                gd: function() {
                    return b
                },
                log: function() {},
                sj: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                }
            };
            if (ty()) {
                var h = uy(),
                    k = void 0,
                    n = void 0;
                g.Oa = {
                    Wf: [],
                    $c: {},
                    Va: function(q, r, t) {
                        1 === r && (k = q);
                        7 === r && (n = t);
                        h(q, r, t)
                    },
                    Kf: Sf()
                };
                g.log = function(q, r) {
                    if (k) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        h(k, 4, {
                            level: q,
                            source: n,
                            message: t
                        })
                    }
                }
            }
            var p = Jd(a, g, [b, f]);
            a.g.g.I = void 0;
            p instanceof oa && "return" === p.g && (p = p.o);
            return qc(p)
        }
    }

    function xy(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Ba(b) && (a.gtmOnSuccess = function() {
            K(b)
        });
        Ba(c) && (a.gtmOnFailure = function() {
            K(c)
        })
    }

    function yy() {
        vy.g.g.O = function(a, b, c) {
            T.SANDBOXED_JS_SEMAPHORE = T.SANDBOXED_JS_SEMAPHORE || 0;
            T.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                T.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function zy(a) {
        void 0 !== a && La(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Gh[e] = Gh[e] || [];
                Gh[e].push(b)
            }
        })
    };
    var Ay = encodeURI,
        X = encodeURIComponent,
        By = Pb;
    var Cy = function(a, b) {
            if (!a) return !1;
            var c = ji(li(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        Dy = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };

    function bA() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var cA = function() {
            var a = bA();
            a.hid = a.hid || Ha();
            return a.hid
        },
        dA = function(a, b) {
            var c = bA();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var LA = function() {
        if (Ba(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var sB = window,
        tB = document,
        uB = function(a) {
            var b = sB._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === sB["ga-disable-" + a]) return !0;
            try {
                var c = sB.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = Ji("AMP_TOKEN", String(tB.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return tB.getElementById("__gaOptOutExtension") ? !0 : !1
        };
    var vB = {};

    function GB(a) {
        delete a.eventModel[S.Fb];
        NB(a.eventModel)
    }
    var NB = function(a) {
        La(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[S.La] || {};
        La(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var WB = function(a, b, c) {
            ir(b, c, a)
        },
        XB = function(a, b, c) {
            ir(b, c, a, !0)
        },
        ZB = function(a, b) {};

    function YB(a, b) {}
    var Y = {
        h: {}
    };





    Y.h.sp = ["google"],
        function() {
            (function(a) {
                Y.__sp = a;
                Y.__sp.m = "sp";
                Y.__sp.isVendorTemplate = !0;
                Y.__sp.priorityOverride = 0
            })(function(a) {
                var b, c = {};
                "DATA_LAYER" == a.vtp_customParamsFormat ? c = a.vtp_dataLayerVariable : "USER_SPECIFIED" == a.vtp_customParamsFormat && (c = Dy(a.vtp_customParams, "key", "value"));
                b = nc(c) ? c : {};
                b[S.Ge] = !0;
                a.vtp_enableDynamicRemarketing && (a.vtp_eventValue && (b[S.ma] = a.vtp_eventValue), a.vtp_eventItems && (b[S.ca] = a.vtp_eventItems));
                a.vtp_rdp && (b[S.Tc] = !0);
                a.vtp_userId && (b[S.Ka] = a.vtp_userId);
                var d = Gn(Dn(xn(b), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure);
                d.isGtmEvent = !0;
                var e = "AW-" + a.vtp_conversionId;
                a.vtp_conversionLabel && (e += "/" + a.vtp_conversionLabel);
                vp(e, a.vtp_eventName || "", Date.now(), d)
            })
        }();
    Y.h.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Y.h.f = ["google"],
        function() {
            (function(a) {
                Y.__f = a;
                Y.__f.m = "f";
                Y.__f.isVendorTemplate = !0;
                Y.__f.priorityOverride = 0
            })(function(a) {
                var b = ku("gtm.referrer", 1) || I.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ji(li(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : ju(String(b)) : String(b)
            })
        }();

    Y.h.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_globals = b;
                Y.__access_globals.m = "access_globals";
                Y.__access_globals.isVendorTemplate = !0;
                Y.__access_globals.priorityOverride = 0
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
                        e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var k = c[h],
                        n = k.key;
                    k.read && e.push(n);
                    k.write && f.push(n);
                    k.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!m(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " +
                            q + " on global variable: " + r + ".");
                    },
                    U: a
                }
            })
        }();
    Y.h.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.m = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : ku("gtm.url", 1)) || hu();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return ju(String(c));
                var e = li(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] || "",
                        k = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ea(h) ?
                    n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = ji(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!k || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ji(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.h.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = ku(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1),
                    d = void 0 !== c ? c : a.vtp_defaultValue;
                su(d, "v", a.vtp_gtmEventId);
                return d
            })
        }();
    Y.h.inject_script = ["google"],
        function() {
            function a(b, c) {
                return {
                    url: c
                }
            }(function(b) {
                Y.__inject_script = b;
                Y.__inject_script.m = "inject_script";
                Y.__inject_script.isVendorTemplate = !0;
                Y.__inject_script.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_urls || [],
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e, f) {
                        if (!m(f)) throw d(e, {}, "Script URL must be a string.");
                        try {
                            if (nf(li(f), c)) return
                        } catch (g) {
                            throw d(e, {}, "Invalid script URL filter.");
                        }
                        throw d(e, {}, "Prohibited script URL: " + f);
                    },
                    U: a
                }
            })
        }();


    Y.h.gclidw = ["google"],
        function() {
            var a = ["aw", "dc", "gf", "ha", "gb"];
            (function(b) {
                Y.__gclidw = b;
                Y.__gclidw.m = "gclidw";
                Y.__gclidw.isVendorTemplate = !0;
                Y.__gclidw.priorityOverride = 100
            })(function(b) {
                K(b.vtp_gtmOnSuccess);
                var c, d, e, f;
                b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
                var g = {
                    prefix: e,
                    path: c,
                    domain: d,
                    flags: f
                };
                b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
                    Vj()) && pk(a, g));
                mk(g);
                sk(["aw", "dc"], g);
                Hk(g);
                var h = e;
                if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
                    var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
                    rk(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
                }
                var n = ku(S.ia);
                ro({
                    eventId: b.vtp_gtmEventId,
                    priorityId: b.vtp_gtmPriorityId,
                    tf: !1,
                    Xa: void 0 != n && !1 !== n,
                    Kb: g,
                    oe: !0
                });
                b.vtp_enableUrlPassthrough && uk(["aw", "dc", "gb"])
            })
        }();

    Y.h.awct = ["google"],
        function() {
            function a(b, c, d) {
                return function(e, f, g) {
                    c[e] = "DATA_LAYER" === d ? ku(g) : b[f]
                }
            }(function(b) {
                Y.__awct = b;
                Y.__awct.m = "awct";
                Y.__awct.isVendorTemplate = !0;
                Y.__awct.priorityOverride = 0
            })(function(b) {
                var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
                    d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
                    e = Dy(b.vtp_customVariables, "varName", "value") || {},
                    f = {},
                    g = (f[S.ma] = b.vtp_conversionValue || 0, f[S.ka] = b.vtp_currencyCode, f[S.tb] =
                        b.vtp_orderId, f[S.Qa] = b.vtp_conversionCookiePrefix, f[S.Ba] = c, f[S.Ed] = d, f[S.ia] = ku(S.ia), f);
                b.vtp_rdp && (g[S.Tc] = !0);
                if (b.vtp_enableCustomParams)
                    for (var h in e) S.Yf.hasOwnProperty(h) || (g[h] = e[h]);
                if (b.vtp_enableProductReporting) {
                    var k = a(b, g, b.vtp_productReportingDataSource);
                    k(S.Ke, "vtp_awMerchantId", "aw_merchant_id");
                    k(S.Ie, "vtp_awFeedCountry", "aw_feed_country");
                    k(S.Je, "vtp_awFeedLanguage", "aw_feed_language");
                    k(S.He, "vtp_discount", "discount");
                    k(S.ca, "vtp_items", "items")
                }
                g[S.X] = ku("developer_id");
                b.vtp_enableShippingData && (g[S.Od] = b.vtp_deliveryPostalCode, g[S.Qe] = b.vtp_estimatedDeliveryDate, g[S.Fd] = b.vtp_deliveryCountry, g[S.Oe] = b.vtp_shippingFee);
                b.vtp_transportUrl && (g[S.Z] = b.vtp_transportUrl);
                if (b.vtp_enableNewCustomerReporting) {
                    var n = a(b, g, b.vtp_newCustomerReportingDataSource);
                    n(S.Ue, "vtp_awNewCustomer", "new_customer");
                    n(S.Le, "vtp_awCustomerLTV", "customer_lifetime_value")
                }
                var p;
                a: {
                    if (b.vtp_enableEnhancedConversion) {
                        var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
                        if (q) {
                            p = {
                                enhanced_conversions_mode: "manual",
                                enhanced_conversions_manual_var: q
                            };
                            break a
                        }
                    }
                    p = void 0
                }
                var r = p;
                if (r) {
                    var t = {};
                    g[S.Pe] = (t[b.vtp_conversionLabel] = r, t)
                }
                var u = Gn(Dn(xn(g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure);
                u.isGtmEvent = !0;
                vp("AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
                    S.ya, Date.now(), u)
            })
        }();

    Y.h.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__logging = b;
                Y.__logging.m = "logging";
                Y.__logging.isVendorTemplate = !0;
                Y.__logging.priorityOverride = 0
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    U: a
                }
            })
        }();











    var $B = {};
    $B.dataLayer = Oh;
    $B.callback = function(a) {
        Fh.hasOwnProperty(a) && Ba(Fh[a]) && Fh[a]();
        delete Fh[a]
    };
    $B.bootstrap = 0;
    $B._spx = !1;
    (function(a) {
        if (!z["__TAGGY_INSTALLED"]) {
            var b = !1;
            if (I.referrer) {
                var c = li(I.referrer);
                b = "cct.google" === ii(c, "host")
            }
            if (!b) {
                var d = Pi("googTaggyReferrer");
                b = d.length && d[0].length
            }
            b && (z["__TAGGY_INSTALLED"] = !0, Mb("https://cct.google/taggy/agent.js"))
        }
        var f = function(q) {
                var r = "GTM",
                    t = "GTM";
                var u = z["google.tagmanager.debugui2.queue"];
                u || (u = [], z["google.tagmanager.debugui2.queue"] = u, Mb("https://" + oh.Dc + "/debug/bootstrap?id=" + Ie.J + "&src=" + t + "&cond=" + q + "&gtm=" + Mn()));
                var v = {
                    messageType: "CONTAINER_STARTING",
                    data: {
                        scriptSource: Gb,
                        containerProduct: r,
                        debug: !1,
                        id: Ie.J
                    }
                };
                v.data.resume = function() {
                    a()
                };
                oh.Zh && (v.data.initialPublish = !0);
                u.push(v)
            },
            g = void 0,
            h = ji(z.location, "query", !1, void 0, "gtm_debug");
        Ct(h) && (g = 2);
        if (!g && I.referrer) {
            var k = li(I.referrer);
            "tagassistant.google.com" === ii(k, "host") && (g = 3)
        }
        if (!g) {
            var n = Pi("__TAG_ASSISTANT");
            n.length && n[0].length && (g = 4)
        }
        if (!g) {
            var p = I.documentElement.getAttribute("data-tag-assistant-present");
            Ct(p) && (g = 5)
        }
        g && Gb ? f(g) : a()
    })(function() {
        var a = !1;
        a && Qm("INIT");
        ng().o();
        jo();
        Xj.enable_gbraid_cookie_write = !0;
        var b = !!T[Ie.J];
        if (b) {
            var c = T.zones;
            c && c.unregisterChild(Yk());
        } else {
            for (var d = Zk(), e = 0; e < d.length; e++) Kr(d[e], Ie.J);
            for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) ge.push(g[h]);
            for (var k = f.tags || [], n = 0; n < k.length; n++) je.push(k[n]);
            for (var p = f.predicates || [], q = 0; q < p.length; q++) ie.push(p[q]);
            for (var r = f.rules || [], t = 0; t < r.length; t++) {
                for (var u = r[t], v = {}, x = 0; x < u.length; x++) v[u[x][0]] = Array.prototype.slice.call(u[x], 1);
                he.push(v)
            }
            le = Y;
            oe = Vu;
            Me = new Le;
            var y = data.sandboxed_scripts,
                w = data.security_groups,
                A = data.runtime || [],
                B = data.runtime_lines;
            vy = new Hd;
            yy();
            fe = wy();
            var E = vy,
                C = sy();
            kb(E.g, "require", C);
            for (var D = 0; D < A.length; D++) {
                var F = A[D];
                if (!Ea(F) || 3 > F.length) {
                    if (0 === F.length) continue;
                    break
                }
                B && B[D] && B[D].length && xe(F, B[D]);
                vy.execute(F)
            }
            if (void 0 !== y)
                for (var R = ["sandboxedScripts"], J = 0; J < y.length; J++) {
                    var Q = y[J].replace(/^_*/, "");
                    Gh[Q] = R
                }
            zy(w);
            T[Ie.J] = $B;
            for (var O = al(), P = Yk(), L = 0; L < P.length; L++) O.container[P[L]] = !0;
            for (var Z = Zk(), ba = 0; ba < Z.length; ba++) O.destination[Z[ba]] = !0;
            O.canonical[Ie.Cc] = !0;
            Wa(Gh, Y.h);
            qe = Ee;
            Bt();
            Am = !1;
            Bm = 0;
            if ("interactive" == I.readyState && !I.createEventObject || "complete" == I.readyState) Dm();
            else {
                Qb(I, "DOMContentLoaded", Dm);
                Qb(I,
                    "readystatechange", Dm);
                if (I.createEventObject && I.documentElement.doScroll) {
                    var U = !0;
                    try {
                        U = !z.frameElement
                    } catch (Ra) {}
                    U && Em()
                }
                Qb(z, "load", Dm)
            }
            Us = !1;
            "complete" === I.readyState ? Ws() : Qb(z, "load", Ws);
            cm && z.setInterval(Wl, 864E5);
            xh = Ta();
            if (a) {
                var Ja = Rm("INIT");
            }
        }
    });

})()