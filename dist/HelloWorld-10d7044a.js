import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, pushScopeId, popScopeId, createTextVNode } from 'vue';
import { _ as _export_sfc } from './index-16b89cff.js';

const _withScopeId = (n) => (pushScopeId("data-v-c8919969"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "greetings" };
const _hoisted_2 = { class: "green" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h3", null, [
  /* @__PURE__ */ createTextVNode(" You’ve successfully created a project with "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ createTextVNode(" + "),
  /* @__PURE__ */ createElementVNode("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ createTextVNode(". ")
], -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("h1", _hoisted_2, toDisplayString(_ctx.msg), 1),
        _hoisted_3
      ]);
    };
  }
});

const HelloWorld_vue_vue_type_style_index_0_scoped_c8919969_lang = '';

const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8919969"]]);

export { HelloWorld as default };
//# sourceMappingURL=HelloWorld-10d7044a.js.map
