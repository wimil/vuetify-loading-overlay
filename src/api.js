import Vue from "vue";
import Component from "./Component";

import { VueSpinners } from "@saeris/vue-spinners";
Vue.use(VueSpinners);

const Loading = (options = {}) => {
  const propsData = Object.assign({}, options);
  const ComponentClass = Vue.extend(Component);

  const instance = new ComponentClass({
    el: document.createElement("div"),
    propsData
  });

  return instance;
};

export default Loading;
