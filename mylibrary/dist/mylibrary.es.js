import { openBlock as s, createElementBlock as a, toDisplayString as _, createElementVNode as l, renderSlot as p } from "vue";
const r = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, i = {
  props: {
    label: String
  }
};
function u(t, o, e, n, c, d) {
  return s(), a("button", null, _(e.label), 1);
}
const h = /* @__PURE__ */ r(i, [["render", u], ["__scopeId", "data-v-54a77a1c"]]), f = {
  name: "Modal"
}, $ = { class: "modal" }, m = { class: "modal-content" };
function v(t, o, e, n, c, d) {
  return s(), a("div", $, [
    l("div", m, [
      p(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const g = /* @__PURE__ */ r(f, [["render", v], ["__scopeId", "data-v-97ef93f8"]]);
export {
  h as Button,
  g as Modal
};
