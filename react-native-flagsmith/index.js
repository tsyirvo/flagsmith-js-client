!function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? e(exports) : 'function' == typeof define && define.amd ? define(['exports'], e) : e((t = 'undefined' != typeof globalThis ? globalThis : t || self)['react-native-flagsmith'] = {});
}(this, (function(t) {
    'use strict';
    var e = function() {
        return e = Object.assign || function(t) {
            for (var e, n = 1, i = arguments.length; n < i; n++) for (var a in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return t;
        }, e.apply(this, arguments);
    };

    function n(t, e, n) {
        if (n || 2 === arguments.length) for (var i, a = 0, r = e.length; a < r; a++) !i && a in e || (i || (i = Array.prototype.slice.call(e, 0, a)), i[a] = e[a]);
        return t.concat(i || Array.prototype.slice.call(e));
    }

    var i, a, r = function t(e, n) {
        if (e === n) return !0;
        if (e && n && 'object' == typeof e && 'object' == typeof n) {
            if (e.constructor !== n.constructor) return !1;
            var i, a, r;
            if (Array.isArray(e)) {
                if ((i = e.length) != n.length) return !1;
                for (a = i; 0 != a--;) if (!t(e[a], n[a])) return !1;
                return !0;
            }
            if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
            if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
            if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
            if ((i = (r = Object.keys(e)).length) !== Object.keys(n).length) return !1;
            for (a = i; 0 != a--;) if (!Object.prototype.hasOwnProperty.call(n, r[a])) return !1;
            for (a = i; 0 != a--;) {
                var s = r[a];
                if (!t(e[s], n[s])) return !1;
            }
            return !0;
        }
        return e != e && n != n;
    }, s = 'BULLET_TRAIN_DB', l = 'BULLET_TRAIN_EVENT', o = 'https://api.flagsmith.com/api/v1/', g = function(t) {
        return 'Attempted to ' + t + ' a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true.';
    }, u = function() {
        function t(t) {
            var n = this;
            this.getJSON = function(t, e, a) {
                var r = n, s = r.environmentID, l = r.headers,
                    o = { method: e || 'GET', body: a, headers: { 'x-environment-key': s } };
                return e && 'GET' !== e && (o.headers['Content-Type'] = 'application/json; charset=utf-8'), l && Object.assign(o.headers, l), i(t, o).then((function(t) {
                    return t.text().then((function(e) {
                        var n = e;
                        try {
                            n = JSON.parse(e);
                        } catch (t) {
                        }
                        return t.ok ? n : Promise.reject(n);
                    }));
                }));
            }, this.getFlags = function(t, i) {
                var a = n, s = a.onChange, l = a.onError, o = a.identity, g = a.api, u = !1, c = function(t, i) {
                    var a = t.flags, l = t.traits;
                    n.withTraits = !1;
                    var o = {}, g = {};
                    if (l = l || [], (a = a || []).forEach((function(t) {
                        o[t.feature.name.toLowerCase().replace(/ /g, '_')] = {
                            id: t.feature.id,
                            enabled: t.enabled,
                            value: t.feature_state_value,
                        };
                    })), l.forEach((function(t) {
                        g[t.trait_key.toLowerCase().replace(/ /g, '_')] = t.trait_value;
                    })), n.oldFlags = e({}, n.flags), i) {
                        var u = {};
                        i.map((function(t) {
                            u[t.name] = t;
                        })), n.segments = u;
                    }
                    var c = r(n.flags, o), f = r(n.traits, g);
                    n.flags = o, n.traits = g, n.updateStorage(), s && s(n.oldFlags, {
                        isFromServer: !0,
                        flagsChanged: !c,
                        traitsChanged: !f,
                    });
                };
                return o ? Promise.all([n.withTraits ? n.getJSON(g + 'identities/', 'POST', JSON.stringify({
                    identifier: o,
                    traits: Object.keys(n.withTraits).map((function(t) {
                        return { trait_key: t, trait_value: n.withTraits[t] };
                    })),
                })) : n.getJSON(g + 'identities/?identifier=' + encodeURIComponent(o))]).then((function(e) {
                    c(e[0], e[1]), t && !u && (u = !0, t());
                })).catch((function(t) {
                    var e = t.message;
                    l && l({ message: e });
                })) : Promise.all([n.getJSON(g + 'flags/')]).then((function(e) {
                    c({ flags: e[0] }, null), t && !u && (u = !0, t());
                })).catch((function(t) {
                    i && !u && (u = !0, i(t)), l && l(t);
                }));
            }, this.analyticsFlags = function() {
                var t = n.api;
                if (0 !== Object.getOwnPropertyNames(n.evaluationEvent).length) return n.getJSON(t + 'analytics/flags/', 'POST', JSON.stringify(n.evaluationEvent)).then((function(t) {
                    var i = n.getState();
                    n.setState(e(e({}, i), { evaluationEvent: {} })), n.updateEventStorage();
                })).catch((function(t) {
                    n.log('Exception fetching evaluationEvent', t);
                }));
            }, this.analyticsInterval = null, this.api = null, this.cacheFlags = null, this.enableAnalytics = null, this.enableLogs = null, this.environmentID = null, this.evaluationEvent = null, this.flags = null, this.getFlagInterval = null, this.headers = null, this.initialised = null, this.oldFlags = null, this.onChange = null, this.onError = null, this.identity = null, this.segments = null, this.ticks = null, this.timer = null, this.traits = null, this.withTraits = null, this.evaluateFlag = function(t) {
                if (n.enableAnalytics) {
                    if (!n.evaluationEvent) return;
                    void 0 === n.evaluationEvent[t] && (n.evaluationEvent[t] = 0), n.evaluationEvent[t] += 1;
                }
                n.updateEventStorage();
            }, this.getValue = function(t) {
                var e = n.flags && n.flags[t.toLowerCase().replace(/ /g, '_')], i = null;
                return e && (i = e.value), n.evaluateFlag(t), i;
            }, this.getTrait = function(t) {
                return n.traits && n.traits[t.toLowerCase().replace(/ /g, '_')];
            }, this.setTrait = function(t, e) {
                var i = n, a = i.getJSON, r = i.identity, s = i.api;
                if (s) {
                    var l = { identity: { identifier: r }, trait_key: t, trait_value: e };
                    return a(''.concat(s, 'traits/'), 'POST', JSON.stringify(l)).then((function() {
                        n.initialised && n.getFlags();
                    }));
                }
                console.error(g('setTrait'));
            }, this.setTraits = function(t) {
                var e = n, i = e.getJSON, a = e.identity, r = e.api;
                if (r) {
                    t && 'object' == typeof t || console.error('Expected object for flagsmith.setTraits');
                    var s = Object.keys(t).map((function(e) {
                        return { identity: { identifier: a }, trait_key: e, trait_value: t[e] };
                    }));
                    return i(''.concat(r, 'traits/bulk/'), 'PUT', JSON.stringify(s)).then((function() {
                        n.initialised && n.getFlags();
                    }));
                }
                console.error(g('setTraits'));
            }, this.incrementTrait = function(t, e) {
                var i = n, a = i.getJSON, r = i.identity, s = i.api;
                return a(''.concat(s, 'traits/increment-value/'), 'POST', JSON.stringify({
                    trait_key: t,
                    increment_by: e,
                    identifier: r,
                })).then(n.getFlags);
            }, this.hasFeature = function(t) {
                var e = n.flags && n.flags[t.toLowerCase().replace(/ /g, '_')], i = !1;
                return e && e.enabled && (i = !0), n.evaluateFlag(t), i;
            }, i = t.fetch ? t.fetch : global.fetch, a = t.AsyncStorage;
        }

        return t.prototype.init = function(t) {
            var n = this, i = t.environmentID, r = t.api, g = void 0 === r ? o : r, u = t.headers, c = t.onChange,
                f = t.cacheFlags, h = t.onError, v = t.defaultFlags, p = t.preventFetch, y = t.enableLogs,
                d = t.enableAnalytics, m = t.AsyncStorage, S = t.state;
            return new Promise((function(t, r) {
                if (n.environmentID = i, n.api = g, n.headers = u, n.getFlagInterval = null, n.analyticsInterval = null, n.onChange = c, n.onError = h, n.enableLogs = y, n.enableAnalytics = d || !1, n.flags = Object.assign({}, v) || {}, n.initialised = !0, n.ticks = 1e4, n.timer = n.enableLogs ? (new Date).valueOf() : null, m && (a = m), n.cacheFlags = void 0 !== a && f, n.setState(S), !i) throw r('Please specify a environment id'), 'Please specify a environment id';
                a.getItem(l).then((function(t) {
                    if (t) try {
                        n.evaluationEvent = JSON.parse(t);
                    } catch (t) {
                        n.evaluationEvent = {};
                    } else n.evaluationEvent = {};
                    n.analyticsInterval = setInterval(n.analyticsFlags, n.ticks);
                })), n.enableAnalytics && (n.analyticsInterval && clearInterval(n.analyticsInterval), a.getItem(l, (function(t, i) {
                    if (i) {
                        var a = JSON.parse(i);
                        a && (S = n.getState(), n.log('Retrieved events from cache', i), n.setState(e(e({}, S), { evaluationEvent: a })));
                    }
                }))), f ? a.getItem(s, (function(e, i) {
                    if (i) try {
                        var a = JSON.parse(i);
                        a && a.api === n.api && a.environmentID === n.environmentID && (n.setState(a), n.log('Retrieved flags from cache', a)), n.flags ? (n.onChange && n.onChange(null, { isFromServer: !1 }), n.oldFlags = n.flags, t(!0), p || n.getFlags()) : p ? t(!0) : n.getFlags(t, r);
                    } catch (t) {
                        n.log('Exception fetching cached logs', t);
                    } else p ? (v && n.onChange(null, { isFromServer: !1 }), t(!0)) : n.getFlags(t, r);
                })) : p ? (v && n.onChange(null, { isFromServer: !1 }), t(!0)) : n.getFlags(t, r);
            })).catch((function(t) {
                return h && h(t);
            }));
        }, t.prototype.getAllFlags = function() {
            return this.flags;
        }, t.prototype.identify = function(t, e) {
            return this.identity = t, e && (this.withTraits = e), this.initialised && !this.getFlagInterval ? this.getFlags() : Promise.resolve();
        }, t.prototype.getState = function() {
            return {
                api: this.api,
                environmentID: this.environmentID,
                flags: this.flags,
                identity: this.identity,
                segments: this.segments,
                traits: this.traits,
                evaluationEvent: this.evaluationEvent,
            };
        }, t.prototype.setState = function(t) {
            t && (this.initialised = !0, this.api = t.api || this.api || o, this.environmentID = t.environmentID || this.environmentID, this.flags = t.flags || this.flags, this.identity = t.identity || this.identity, this.segments = t.segments || this.segments, this.traits = t.traits || this.traits, this.evaluationEvent = t.evaluationEvent || this.evaluationEvent);
        }, t.prototype.log = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            this.enableLogs && console.log.apply(this, n(['FLAGSMITH:', (new Date).valueOf() - this.timer, 'ms'], t, !0));
        }, t.prototype.updateStorage = function() {
            if (this.cacheFlags) {
                var t = JSON.stringify(this.getState());
                this.log('Setting storage', t), a.setItem(s, t);
            }
        }, t.prototype.updateEventStorage = function() {
            if (this.enableAnalytics) {
                var t = JSON.stringify(this.getState().evaluationEvent);
                this.log('Setting event storage', t), a.setItem(l, t);
            }
        }, t.prototype.logout = function() {
            return this.identity = null, this.segments = null, this.traits = null, this.initialised && !this.getFlagInterval ? this.getFlags() : Promise.resolve();
        }, t.prototype.startListening = function(t) {
            void 0 === t && (t = 1e3), this.getFlagInterval && clearInterval(this.getFlagInterval), this.getFlagInterval = setInterval(this.getFlags, t);
        }, t.prototype.stopListening = function() {
            clearInterval(this.getFlagInterval), this.getFlagInterval = null;
        }, t.prototype.getSegments = function() {
        }, t;
    }();

    function c(t) {
        var e = t.fetch, n = t.AsyncStorage;
        return new u({ fetch: e, AsyncStorage: n });
    }

    var f = c({});
    t.createFlagsmithInstance = () => c({}), t.default = f, Object.defineProperty(t, '__esModule', { value: !0 });
}));
//# sourceMappingURL=index.js.map
