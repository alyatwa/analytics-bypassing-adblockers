window.ga = window.ga || function () {
  (ga.q = ga.q || []).push(arguments);
};
ga.l = +new Date;
ga('create', 'UA-134528920-1', 'auto');
ga('send', 'pageview');

function gtag() {
  dataLayer.push(arguments);
}

var request = new XMLHttpRequest();
request.open('GET', 'https://elegant-benz-28d755.netlify.com/proxy/https://www.google-analytics.com/analytics.js', true);

request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var proxiedScript = request.responseText
      .replace(/www\.google/gi, 'elegant-benz-28d755.netlify.com/proxy/https://www.google')
      .replace(/https:\/\/ampcid\.google/gi, 'https://elegant-benz-28d755.netlify.com/proxy/https://ampcid.google');
    var script = document.createElement('script');
    script.innerHTML = proxiedScript;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    gtag('js', new Date());
    gtag('config', 'UA-134329841-1');
  }
};
request.send();
