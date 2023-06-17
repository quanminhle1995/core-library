'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const vue = require('vue');

const _hoisted_1$1 = ["value"];
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "header.ce",
  props: ["modelValue"],
  emits: ["update:modelValue", "updateValue"],
  setup(__props, { emit: emits }) {
    function handleInput($event) {
      emits("update:modelValue", $event.target.value);
      emits("updateValue", $event.target.value);
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", null, [
        vue.createElementVNode("input", {
          value: __props.modelValue,
          onInput: handleInput
        }, null, 40, _hoisted_1$1)
      ]);
    };
  }
});

const _style_0 = "h1[data-v-38fcba5a] {\n  color: red;\n}";

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["styles", [_style_0]], ["__scopeId", "data-v-38fcba5a"]]);

function useHeader(tagName) {
  const WCHeader = vue.defineCustomElement(Header);
  customElements.define(tagName, WCHeader);
}

const _withScopeId = (n) => (vue.pushScopeId("data-v-c8919969"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = { class: "greetings" };
const _hoisted_2 = { class: "green" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h3", null, [
  /* @__PURE__ */ vue.createTextVNode(" You’ve successfully created a project with "),
  /* @__PURE__ */ vue.createElementVNode("a", {
    href: "https://vitejs.dev/",
    target: "_blank",
    rel: "noopener"
  }, "Vite"),
  /* @__PURE__ */ vue.createTextVNode(" + "),
  /* @__PURE__ */ vue.createElementVNode("a", {
    href: "https://vuejs.org/",
    target: "_blank",
    rel: "noopener"
  }, "Vue 3"),
  /* @__PURE__ */ vue.createTextVNode(". ")
], -1));
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "HelloWorld",
  props: {
    msg: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("h1", _hoisted_2, vue.toDisplayString(_ctx.msg), 1),
        _hoisted_3
      ]);
    };
  }
});

const HelloWorld_vue_vue_type_style_index_0_scoped_c8919969_lang = '';

const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c8919969"]]);

exports.HelloWorldVue = HelloWorld;
exports.useHeader = useHeader;
//# sourceMappingURL=index.cjs.map
