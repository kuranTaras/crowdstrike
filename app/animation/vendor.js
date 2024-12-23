
(() => {
    var t = {
            765: (t, e, i) => {
                "use strict";
                var s = i(704),
                    n = i(302),
                    a = i(511),
                    r = i(138),
                    o = i(661),
                    h = i(498),
                    u = i.n(h);
                let l = null;
                class c {
                    constructor() {
                        if (l) return l;
                        (this.updateFunctions = []), (this.updateFunctionsLength = 0), (l = this), this.init();
                    }
                    static getInstance() {
                        return l || (l = new c()), l;
                    }
                    static add(t) {
                        c.getInstance().add(t);
                    }
                    static remove(t) {
                        c.getInstance().remove(t);
                    }
                    static reset() {
                        c.getInstance().reset();
                    }
                    init() {
                        (this.animFunction = this.update.bind(this)), window.requestAnimationFrame(this.animFunction);
                    }
                    add(t) {
                        this.updateFunctions.push(t), (this.updateFunctionsLength = this.updateFunctions.length);
                    }
                    remove(t) {
                        let e;
                        for (let i = 0; i < this.updateFunctionsLength; i++)
                            if (((e = this.updateFunctions[i]), e === t)) {
                                this.updateFunctions.splice(i, 1);
                                break;
                            }
                        this.updateFunctionsLength = this.updateFunctions.length;
                    }
                    update(t) {
                        let e;
                        for (let i = 0; i < this.updateFunctionsLength; i++) (e = this.updateFunctions[i]), e(t);
                        window.requestAnimationFrame(this.animFunction);
                    }
                    reset() {
                        for (let t = 0; t < this.updateFunctionsLength; t++) delete this.updateFunctions[t];
                        (this.updateFunctions = []), (this.updateFunctions.length = 0), (this.updateFunctionsLength = 0);
                    }
                }
                class d {
                    constructor() {
                        (this.prevSize = { w: 0, h: 0 }), (this.checkTime = 0), (this.interval = 500);
                    }
                    check(t = !1) {
                        const e = performance.now();
                        return !(
                            e - this.checkTime < this.interval ||
                            ((this.checkTime = e), !t && ((window.innerWidth === this.prevSize.w && window.innerHeight === this.prevSize.h) || ((this.prevSize.w = window.innerWidth), (this.prevSize.h = window.innerHeight), 0)))
                        );
                    }
                }
                var p = i(238),
                    g = i.n(p);
                let m = null;
                class v {
                    constructor() {
                        if (m) return m;
                        (this._uaParser = new (g())()),
                            (this._isDesktop = null),
                            (this._isMobile = null),
                            (this._isIos = null),
                            (this._isAndroid = null),
                            (this._isSafari = null),
                            (this._isIE = null),
                            (this._isEdge = null),
                            (this._device = null),
                            (m = this);
                    }
                    static getInstance() {
                        return m || (m = new v()), m;
                    }
                    static logInfo() {
                        console.log("----------"),
                            console.log("Device"),
                            console.dir(v.getInstance()._uaParser.getDevice()),
                            console.log("----------"),
                            console.log("OS"),
                            console.dir(v.getInstance()._uaParser.getOS()),
                            console.log("----------"),
                            console.log("Browser"),
                            console.dir(v.getInstance()._uaParser.getBrowser()),
                            console.log("----------");
                    }
                    static get isDesktop() {
                        return v.getInstance().isDesktop;
                    }
                    static get isMobile() {
                        return v.getInstance().isMobile;
                    }
                    static get isIos() {
                        return v.getInstance().isIos;
                    }
                    static get isAndroid() {
                        return v.getInstance().isAndroid;
                    }
                    static get isSafari() {
                        return v.getInstance().isSafari;
                    }
                    static get isIE() {
                        return v.getInstance().isIE;
                    }
                    static get isEdge() {
                        return v.getInstance().isEdge;
                    }
                    static get device() {
                        return v.getInstance().device;
                    }
                    get isDesktop() {
                        if (this._isDesktop) return this._isDesktop;
                        const t = this._uaParser.getDevice();
                        return (this._isDesktop = void 0 === t.type), this._isDesktop && v.isSafari && (this._isDesktop = !("ontouchstart" in document)), this._isDesktop;
                    }
                    get isMobile() {
                        if (this._isMobile) return this._isMobile;
                        const t = this._uaParser.getDevice();
                        return (this._isMobile = "mobile" === t.type || "tablet" === t.type), !this._isMobile && v.isSafari && (this._isMobile = "ontouchstart" in document), this._isMobile;
                    }
                    get isIos() {
                        if (this._isIos) return this._isIos;
                        const t = this._uaParser.getOS();
                        return (this._isIos = t.name.toLowerCase().includes("ios")), this._isIos;
                    }
                    get isAndroid() {
                        if (this._isAndroid) return this._isAndroid;
                        const t = this._uaParser.getOS();
                        return (this._isAndroid = t.name.toLowerCase().includes("android")), this._isAndroid;
                    }
                    get isSafari() {
                        if (this._isSafari) return this._isSafari;
                        const t = this._uaParser.getBrowser();
                        return (this._isSafari = t.name.toLowerCase().includes("safari")), this._isSafari;
                    }
                    get isIE() {
                        if (this._isIE) return this._isIE;
                        const t = this._uaParser.getBrowser();
                        return (this._isIE = t.name.toLowerCase().includes("ie")), this._isIE;
                    }
                    get isEdge() {
                        if (this._isEdge) return this._isEdge;
                        const t = this._uaParser.getBrowser();
                        return (this._isEdge = t.name.toLowerCase().includes("edge")), this._isEdge;
                    }
                    get device() {
                        return this._device || (v.isDesktop ? (this._device = "desktop") : v.isMobile && (this._device = "mobile")), this._device;
                    }
                }
                let x = null;
                class f {
                    constructor() {
                        if (x) return x;
                        (this.position = { x: 0, y: 0 }), (x = this), this.init();
                    }
                    static getInstance() {
                        return x || (x = new f()), x;
                    }
                    static get x() {
                        return f.getInstance().position.x;
                    }
                    static get y() {
                        return f.getInstance().position.y;
                    }
                    init() {
                        const t = v.isMobile ? "touchmove" : "pointermove";
                        document.addEventListener(t, this.onPointerMove.bind(this), { capture: !0 });
                    }
                    getDownX(t) {
                        return v.isDesktop ? t.pageX : t.changedTouches[0].pageX;
                    }
                    getDownY(t) {
                        return v.isDesktop ? t.pageY : t.changedTouches[0].pageY;
                    }
                    onPointerMove(t) {
                        (this.position.x = this.getDownX(t)), (this.position.y = this.getDownY(t));
                    }
                }
                class w {
                    static random(t, e) {
                        return void 0 === t ? Math.random() : void 0 === e ? Math.random() * t : t + Math.random() * (e - t);
                    }
                    static randomInt(t, e) {
                        return Math.floor(w.random(t, e));
                    }
                    static constrain(t, e, i) {
                        return Math.max(Math.min(t, i), e);
                    }
                    static map(t, e, i, s, n) {
                        return ((t - e) / (i - e)) * (n - s) + s;
                    }
                    static radians(t) {
                        return t * ((2 * Math.PI) / 360);
                    }
                    static dist(t, e, i, s) {
                        return Math.sqrt((t - i) * (t - i) + (e - s) * (e - s));
                    }
                    static lerp(t, e, i) {
                        return t + (e - t) * i;
                    }
                    static calcViewportFov(t, e) {
                        return 2 * Math.atan(t / e) * (180 / Math.PI);
                    }
                }
                class y {
                    constructor(t, e) {
                        (this.position = { x: t.x, y: t.y }), (this.velocity = { x: 0, y: 0 }), (this.alphaSpeed = e), (this.direction = 0);
                    }
                    lerp(t, e, i) {
                        return t + (e - t) * i;
                    }
                    step(t) {
                        const e = Math.exp(-this.alphaSpeed * (1 / 60)),
                            i = this.lerp(t.x, this.position.x, e),
                            s = this.lerp(t.y, this.position.y, e);
                        (this.velocity.x = i - this.position.x), (this.velocity.y = s - this.position.y), (this.position.x = i), (this.position.y = s);
                    }
                    calcDirection(t) {
                        this.direction = Math.atan2(this.position.y - t.y, this.position.x - t.x);
                    }
                    reset() {
                        (this.position.x = 0), (this.position.y = 0), (this.velocity.x = 0), (this.velocity.y = 0), (this.direction = 0);
                    }
                    get x() {
                        return this.position.x;
                    }
                    get y() {
                        return this.position.y;
                    }
                }
                var _ = i(344),
                    I = i.n(_),
                    S = i(487),
                    b = i.n(S);
                const M = 64;
                class D {
                    constructor() {
                        (this.$container = document.getElementById("CanvasContainer")),
                            (this.$canvas = this.$container.querySelector("canvas.display-canvas")),
                            (this.ctx = this.$canvas.getContext("2d")),
                            (this.dpr = Math.min(window.devicePixelRatio, 1)),
                            (this.numElements = 4096),
                            (this.typeData = []);
                        for (let t = 0; t < this.numElements; t++) {
                            const t = String.fromCharCode(65 + w.randomInt(0, 26));
                            this.typeData.push({ char: t });
                        }
                        (this.tween = new y({ x: 0, y: 0 }, 15)), (this.resizeChecker = new d()), (this.fps = 60), (this.updateTime = performance.now()), this.init(), this.initGPUComputation(), this.initTweakpane();
                    }
                    async init() {
                        const t = new FontFace("Manrope-Bold", "url(./font/Manrope-Bold.woff2)"),
                            e = [t.load()];
                        await Promise.all(e), document.fonts.add(t), this.resize(), c.add(this.update.bind(this));
                    }
                    initGPUComputation() {
                        (this.renderer = new s.C({ canvas: this.$container.querySelector("canvas.sim-canvas"), alpha: !1, antialias: !1, depth: !1, stencil: !1 })),
                            (this.gpuCompute = new a.n(M, M, this.renderer)),
                        v.isSafari && this.gpuCompute.setDataType(o.cLu);
                        const t = this.gpuCompute.createTexture();
                        this.fillTexture(t),
                            (this.heightmapVariable = this.gpuCompute.addVariable("heightmap", I(), t)),
                            this.gpuCompute.setVariableDependencies(this.heightmapVariable, [this.heightmapVariable]),
                            (this.heightmapVariable.material.uniforms.mousePos = { value: new r.F(1e4, 1e4) }),
                            (this.heightmapVariable.material.uniforms.mouseSize = { value: 0.2 }),
                            (this.heightmapVariable.material.uniforms.viscosityConstant = { value: 0.92 }),
                            (this.heightmapVariable.material.uniforms.maxHeight = { value: 1 }),
                            (this.heightmapVariable.material.defines.BOUNDS = (2).toFixed(1)),
                            (this.readWaterLevelShader = this.gpuCompute.createShaderMaterial(b(), { levelTexture: { value: null } })),
                            (this.readWaterLevelImage = new Uint8Array(16384)),
                            (this.readWaterLevelRenderTarget = new n.d(M, M, { wrapS: o.uWy, wrapT: o.uWy, minFilter: o.TyD, magFilter: o.TyD, format: o.wk1, type: o.ywz, depthBuffer: !1 })),
                            this.gpuCompute.init();
                    }
                    fillTexture(t) {
                        const e = t.image.data;
                        let i = 0;
                        for (let t = 0; t < M; t++) for (let t = 0; t < M; t++) (e[i + 0] = 0), (e[i + 1] = 0), (e[i + 2] = 0), (e[i + 3] = 1), (i += 4);
                    }
                    initTweakpane() {
                        const t = this.heightmapVariable.material.uniforms;
                        (this.pane = new (u())()),
                            this.pane.addInput(t.mouseSize, "value", { min: 0.1, max: 0.3, step: 0.001, label: "mouse size" }),
                            this.pane.addInput(t.viscosityConstant, "value", { min: 0.5, max: 1, step: 0.001, label: "viscosity" }),
                            this.pane.addInput(t.maxHeight, "value", { min: 0.1, max: 1, step: 0.001, label: "wave height" }),
                            this.pane.addButton({ title: "Random" }).on("click", () => {
                                (t.mouseSize.value = 0.1 + 0.2 * Math.random()), (t.viscosityConstant.value = 0.7 + 0.3 * Math.random()), (t.maxHeight.value = 0.1 + 0.9 * Math.random()), this.pane.refresh();
                            });
                    }
                    resize() {
                        const { width: t, height: e } = this.$container.getBoundingClientRect();
                        const heroWidth = document.querySelector('.hero__img').offsetWidth;
                        const heroHeight = document.querySelector('.hero__img').offsetHeight;
                        (this.$canvas.width = heroWidth),
                            (this.$canvas.height = heroHeight),
                            (this.fontSize = Math.floor(this.$canvas.width / M)),
                            (this.ctx.textAlign = "center"),
                            (this.ctx.textBaseline = "middle"),
                            (this.ctx.fillStyle = "#C4C4C4"),
                            (this.ctx.font = `${this.fontSize}px 'Manrope-Bold'`);
                    }
                    update(t) {
                        const e = Math.min(window.innerWidth, window.innerHeight),
                            i = window.innerWidth / e,
                            s = window.innerHeight / e,
                            n = -i + (f.x / e) * 1.11,
                            a = s - (f.y / e) * 1.11;
                        if (
                            (this.tween.step({ x: n, y: a }),
                                (this.heightmapVariable.material.uniforms.mousePos.value.x = this.tween.position.x),
                                (this.heightmapVariable.material.uniforms.mousePos.value.y = this.tween.position.y),
                            t - this.updateTime < 1e3 / this.fps)
                        )
                            return;
                        (this.updateTime = t), this.gpuCompute.compute();
                        const r = this.gpuCompute.getCurrentRenderTarget(this.heightmapVariable).texture;
                        (this.readWaterLevelShader.uniforms.levelTexture.value = r),
                            this.gpuCompute.doRenderTarget(this.readWaterLevelShader, this.readWaterLevelRenderTarget),
                            this.renderer.readRenderTargetPixels(this.readWaterLevelRenderTarget, 0, 0, M, M, this.readWaterLevelImage);
                        const o = this.$canvas.width*1.5;
                        this.ctx.clearRect(0, 0, o, o);
                        const h = o / M;
                        for (let t = 0; t < this.numElements; t++) {
                            const e = this.typeData[t].char,
                                i = (t % M) * h + 0.5 * h,
                                s = Math.floor(t / M) * h + 0.5 * h,
                                n = this.readWaterLevelImage[4 * t],
                                a = w.constrain(Math.pow(0.6 + n / 255, 2), 0, 1.25);
                            this.ctx.save(), this.ctx.translate(i, s), this.ctx.scale(a, a), this.ctx.fillText(e, 0, 0), this.ctx.restore();
                        }
                    }
                }
                document.addEventListener("DOMContentLoaded", () => {
                    new D();
                });
            },
            344: (t) => {
                t.exports =
                    "#include <common>\n\nuniform vec2 mousePos;\nuniform float mouseSize;\nuniform float viscosityConstant;\nuniform float maxHeight;\n\nvoid main() {\n  vec2 cellSize = 1.0 / resolution.xy;\n  vec2 uv = gl_FragCoord.xy * cellSize;\n\n  vec4 heightmapValue = texture2D(heightmap, uv);\n\n  vec4 north = texture2D(heightmap, uv + vec2(0.0, cellSize.y));\n  vec4 south = texture2D(heightmap, uv + vec2(0.0, - cellSize.y));\n  vec4 east  = texture2D(heightmap, uv + vec2(cellSize.x, 0.0));\n  vec4 west  = texture2D(heightmap, uv + vec2(- cellSize.x, 0.0));\n\n  float newHeight = ((north.x + south.x + east.x + west.x) * 0.5 - heightmapValue.y) * viscosityConstant;\n\n  float mousePhase = clamp(length((uv - vec2(0.5)) * BOUNDS - vec2(mousePos.x, - mousePos.y)) * PI / mouseSize, 0.0, PI);\n  newHeight += (cos(mousePhase) + 1.0) * mouseSize * maxHeight;\n\n  heightmapValue.y = heightmapValue.x;\n  heightmapValue.x = newHeight;\n\n  gl_FragColor = heightmapValue;\n}\n";
            },
            487: (t) => {
                t.exports =
                    "uniform sampler2D levelTexture;\n\nvoid main() {\n  vec2 cellSize = 1.0 / resolution.xy;\n  vec2 uv = gl_FragCoord.xy * cellSize;\n\n  float waterLevel = texture2D(levelTexture, uv).x;\n  gl_FragColor = vec4(waterLevel, 0.0, 0.0, 1.0);\n}\n";
            },
        },
        e = {};
    function i(s) {
        if (e[s]) return e[s].exports;
        var n = (e[s] = { exports: {} });
        return t[s].call(n.exports, n, n.exports, i), n.exports;
    }
    (i.m = t),
        (i.x = (t) => {}),
        (i.n = (t) => {
            var e = t && t.__esModule ? () => t.default : () => t;
            return i.d(e, { a: e }), e;
        }),
        (i.d = (t, e) => {
            for (var s in e) i.o(e, s) && !i.o(t, s) && Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
        }),
        (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (() => {
            var t = { 179: 0 },
                e = [[765, 736]],
                s = (t) => {},
                n = (n, a) => {
                    for (var r, o, [h, u, l, c] = a, d = 0, p = []; d < h.length; d++) (o = h[d]), i.o(t, o) && t[o] && p.push(t[o][0]), (t[o] = 0);
                    for (r in u) i.o(u, r) && (i.m[r] = u[r]);
                    for (l && l(i), n && n(a); p.length; ) p.shift()();
                    return c && e.push.apply(e, c), s();
                },
                a = (globalThis.webpackChunk_007_ripple_type = globalThis.webpackChunk_007_ripple_type || []);
            function r() {
                for (var s, n = 0; n < e.length; n++) {
                    for (var a = e[n], r = !0, o = 1; o < a.length; o++) {
                        var h = a[o];
                        0 !== t[h] && (r = !1);
                    }
                    r && (e.splice(n--, 1), (s = i((i.s = a[0]))));
                }
                return 0 === e.length && (i.x(), (i.x = (t) => {})), s;
            }
            a.forEach(n.bind(null, 0)), (a.push = n.bind(null, a.push.bind(a)));
            var o = i.x;
            i.x = () => ((i.x = o || ((t) => {})), (s = r)());
        })(),
        i.x();
})();