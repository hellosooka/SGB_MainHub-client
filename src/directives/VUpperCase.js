const VUpperCase = {
  name: "upper-case",
  created(el, binding, vnode, prevVnode) {
    el.innerText = el.innerText.toUpperCase();
  },
};

export default VUpperCase;
