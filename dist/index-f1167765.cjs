'use strict';

const vue = require('vue');

const _hoisted_1 = ["value"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
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
        }, null, 40, _hoisted_1)
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

const Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["styles", [_style_0]], ["__scopeId", "data-v-38fcba5a"]]);

function useHeader(tagName) {
  const WCHeader = vue.defineCustomElement(Header);
  customElements.define(tagName, WCHeader);
}

const HelloWorld = vue.defineAsyncComponent(() => Promise.resolve().then(() => require('./HelloWorld-4f9db98d.cjs')));

exports.HelloWorld = HelloWorld;
exports._export_sfc = _export_sfc;
exports.useHeader = useHeader;
//# sourceMappingURL=index-f1167765.cjs.map
