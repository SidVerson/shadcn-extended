import {
  computed,
  defineComponent,
  h,
  inject,
  onUnmounted,
  provide,
  ref,
  unref,
  watchPostEffect,
  withDirectives
} from "./chunk-45KCXATN.js";
import "./chunk-DC5AMYBS.js";

// node_modules/vue-wrap-balancer/node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// node_modules/vue-wrap-balancer/dist/index.mjs
var vBindOnce = {
  created(el, binding) {
    const [key, value] = binding.value;
    el.setAttribute(key, value || nanoid(5));
  },
  getSSRProps(binding) {
    const [key, value] = binding.value;
    return {
      [key]: value
    };
  }
};
var SYMBOL_KEY = "__wrap_b";
var SYMBOL_NATIVE_KEY = "__wrap_n";
var SYMBOL_OBSERVER_KEY = "__wrap_o";
var relayout = (id, ratio, wrapper) => {
  wrapper = wrapper || document.querySelector(`[data-br="${id}"]`);
  const container = wrapper.parentElement;
  const update = (width2) => wrapper.style.maxWidth = `${width2}px`;
  wrapper.style.maxWidth = "";
  const width = container.clientWidth;
  const height = container.clientHeight;
  let lower = width / 2 - 0.25;
  let upper = width + 0.5;
  let middle;
  if (width) {
    update(lower);
    lower = Math.max(wrapper.scrollWidth, lower);
    while (lower + 1 < upper) {
      middle = Math.round((lower + upper) / 2);
      update(middle);
      if (container.clientHeight === height)
        upper = middle;
      else
        lower = middle;
    }
    update(upper * ratio + width * (1 - ratio));
  }
  if (!wrapper.__wrap_o) {
    (wrapper.__wrap_o = new ResizeObserver(() => {
      self.__wrap_b(0, +wrapper.dataset.brr, wrapper);
    })).observe(container);
  }
};
var RELAYOUT_STR = relayout.toString();
var isTextWrapBalanceSupported = '(self.CSS&&CSS.supports("text-wrap","balance")?1:2)';
function createScriptElement(injected, nonce, suffix) {
  if (suffix)
    suffix = `self.${SYMBOL_NATIVE_KEY}!=1&&${suffix}`;
  return h("script", {
    innerHTML: (injected ? "" : `self.${SYMBOL_NATIVE_KEY}=self.${SYMBOL_NATIVE_KEY}||${isTextWrapBalanceSupported};self.${SYMBOL_KEY}=${RELAYOUT_STR};`) + suffix,
    nonce
  });
}
var BalancerProvider = defineComponent({
  name: "BalancerProvider",
  props: {
    preferNative: {
      type: Boolean,
      required: false,
      default: true
    },
    nonce: {
      type: String,
      required: false
    }
  },
  setup(props, { slots }) {
    const preferNative = computed(() => props.preferNative);
    provide("BALANCER_PROVIDER", {
      preferNative,
      hasProvider: true
    });
    return () => {
      var _a;
      return [
        createScriptElement(false, props.nonce),
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      ];
    };
  }
});
var src_default = defineComponent({
  name: "WrapBalancer",
  props: {
    as: {
      type: String,
      required: false,
      default: "span"
    },
    ratio: {
      type: Number,
      required: false,
      default: 1
    },
    preferNative: {
      type: Boolean,
      required: false,
      default: true
    },
    nonce: {
      type: String,
      required: false
    }
  },
  setup(props, { slots, attrs }) {
    const As = props.as;
    const id = attrs.id || nanoid(5);
    const wrapperRef = ref(null);
    const contextValue = inject("BALANCER_PROVIDER", {
      preferNative: true,
      hasProvider: false
    });
    const preferNativeBalancing = computed(() => {
      var _a;
      return (_a = props.preferNative) != null ? _a : unref(contextValue.preferNative);
    });
    watchPostEffect(() => {
      if (preferNativeBalancing.value && typeof self !== "undefined" && self[SYMBOL_NATIVE_KEY] === 1)
        return;
      if (wrapperRef.value)
        (self[SYMBOL_KEY] = relayout)(0, props.ratio, wrapperRef.value);
    });
    onUnmounted(() => {
      if (preferNativeBalancing.value && typeof self !== "undefined" && self[SYMBOL_NATIVE_KEY] === 1)
        return;
      if (!wrapperRef.value)
        return;
      const resizeObserver = wrapperRef.value[SYMBOL_OBSERVER_KEY];
      if (resizeObserver) {
        resizeObserver.disconnect();
        delete wrapperRef.value[SYMBOL_OBSERVER_KEY];
      }
    });
    return () => {
      var _a;
      return withDirectives(h(As, {
        ...attrs,
        "data-brr": props.ratio,
        "ref": wrapperRef,
        "style": {
          ...attrs.style,
          display: "inline-block",
          verticalAlign: "top",
          textDecoration: "inherit",
          textWrap: preferNativeBalancing.value ? "balance" : "initial"
        }
      }, [
        (_a = slots.default) == null ? void 0 : _a.call(slots),
        withDirectives(
          createScriptElement(contextValue.hasProvider, props.nonce, `self.${SYMBOL_KEY}(document.currentScript.dataset.ssrId,${props.ratio})`),
          [
            [vBindOnce, ["data-ssr-id", id]]
          ]
        )
      ]), [
        [vBindOnce, ["data-br", id]]
      ]);
    };
  }
});
export {
  BalancerProvider,
  src_default as default
};
/*! Bundled license information:

vue-wrap-balancer/dist/index.mjs:
  (*!
   * Original code by Shu Ding
   * MIT Licensed, Copyright 2022 Shu Ding, see https://github.com/shuding/react-wrap-balancer/blob/main/LICENSE.md for details
   *
   * Credits to the team:
   * https://github.com/shuding/react-wrap-balancer/blob/main/src/index.tsx
   *)
*/
//# sourceMappingURL=vue-wrap-balancer.js.map
