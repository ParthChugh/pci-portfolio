export function throttle(fn, time) {
    let timeout = null;
    return function () {
        if(timeout) return;
        const context = this;
        const args = arguments;
        const later = () => {
            fn.call(context, ...args);
            timeout = null;
        }
        timeout = setTimeout(later, time);
    }
  }