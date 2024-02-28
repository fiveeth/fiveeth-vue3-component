import { defineComponent as f, computed as c, openBlock as u, createElementBlock as i, createElementVNode as d, normalizeStyle as p, renderSlot as h, createTextVNode as m } from "vue";
const _ = { class: "x-button" }, g = /* @__PURE__ */ f({
  __name: "index",
  props: {
    size: { default: "normal" },
    type: { default: "default" }
  },
  emits: ["clickTo"],
  setup(e, { emit: t }) {
    const o = t, n = e, r = () => {
      o("clickTo");
    }, s = c(() => {
      switch (n.type) {
        case "primary":
          return {
            color: "#fff",
            background: "#409eff"
          };
        case "success":
          return {
            color: "#fff",
            background: "#40ff89"
          };
        case "warnning":
          return {
            color: "#fff",
            background: "#fcff40"
          };
        case "error":
          return {
            color: "#fff",
            background: "#ff6340"
          };
        default:
          return {
            color: "#333",
            background: "#fff",
            border: "1px solid #e7e7e7"
          };
      }
    }), a = c(() => {
      switch (n.size) {
        case "large":
          return {
            height: "40px",
            "line-height": "40px"
          };
        case "small":
          return {
            height: "20px",
            "line-height": "20px"
          };
        default:
          return {
            height: "30px",
            "line-height": "30px"
          };
      }
    });
    return (l, v) => (u(), i("div", _, [
      d("button", {
        style: p([s.value, a.value]),
        onClick: r
      }, [
        h(l.$slots, "default", {}, () => [
          m("default")
        ], !0)
      ], 4)
    ]));
  }
}), x = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, r] of t)
    o[n] = r;
  return o;
}, k = /* @__PURE__ */ x(g, [["__scopeId", "data-v-614596f1"]]), b = [k], y = (e) => {
  b.forEach((t) => {
    e.component(t.__name, t);
  });
}, S = {
  install: y
};
export {
  k as Button,
  S as default
};
