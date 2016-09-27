function ready(fn) {
  if (document.readyState != 'loading'){
    // fn();
    document.alert("hello");

  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

}
