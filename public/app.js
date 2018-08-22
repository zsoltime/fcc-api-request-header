'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#test');
  const output = document.querySelector('#output');

  btn.addEventListener('click', () => {
    output.value = "I'm still fetching...";
    btn.setAttribute('disabled', true);

    fetch('/api/whoami')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res;
      })
      .then(res => res.json())
      .then((res) => {
        btn.removeAttribute('disabled');
        output.value = JSON.stringify(res, null, 2);
      })
      // eslint-disable-next-line no-console
      .catch((err) => {
        btn.removeAttribute('disabled');
        output.value = err;
      });
  });
});
