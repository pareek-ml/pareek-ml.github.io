(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* mobile nav toggle — delegated, since the topbar may be injected
     asynchronously (fetched partial) after this script runs */
  document.addEventListener("click", function (e) {
    var toggle = e.target.closest(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    var link = e.target.closest(".nav-links a");
    if (link && links) {
      links.classList.remove("is-open");
      var t = document.querySelector(".nav-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    }
  });

  /* scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
      });
    } else {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealEls.forEach(function (el) {
        io.observe(el);
      });
    }
  }

  /* embedding-space ambient canvas */
  var canvas = document.getElementById("embed-canvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var wrap = canvas.parentElement;
    var points = [];
    var COUNT = 46;
    var NEIGHBORS = 3;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = 0,
      h = 0;

    function resize() {
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      points = [];
      for (var i = 0; i < COUNT; i++) {
        points.push({
          x: Math.random(),
          y: Math.random(),
          baseX: Math.random(),
          baseY: Math.random(),
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.2,
          r: Math.random() < 0.18 ? 2.6 : 1.6,
          teal: Math.random() < 0.55
        });
      }
      points.forEach(function (p) {
        p.baseX = p.x;
        p.baseY = p.y;
      });
    }

    function neighborsOf(p, list) {
      return list
        .map(function (q) {
          return { q: q, d: Math.hypot(p.x - q.x, p.y - q.y) };
        })
        .sort(function (a, b) {
          return a.d - b.d;
        })
        .slice(1, NEIGHBORS + 1);
    }

    var t = 0;
    function frame() {
      t += reduceMotion ? 0 : 0.006;
      ctx.clearRect(0, 0, w, h);

      points.forEach(function (p) {
        p.x = p.baseX + Math.sin(t * p.speed + p.phase) * 0.02;
        p.y = p.baseY + Math.cos(t * p.speed + p.phase) * 0.02;
      });

      ctx.lineWidth = 1;
      points.forEach(function (p) {
        var ns = neighborsOf(p, points);
        ns.forEach(function (n) {
          var alpha = Math.max(0, 1 - n.d * 2.4) * 0.18;
          if (alpha <= 0.005) return;
          ctx.strokeStyle = "rgba(46, 230, 255, " + alpha + ")";
          ctx.beginPath();
          ctx.moveTo(p.x * w, p.y * h);
          ctx.lineTo(n.q.x * w, n.q.y * h);
          ctx.stroke();
        });
      });

      points.forEach(function (p) {
        ctx.beginPath();
        ctx.fillStyle = p.teal ? "rgba(111, 240, 255, 0.85)" : "rgba(255, 110, 196, 0.85)";
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduceMotion) {
        window.requestAnimationFrame(frame);
      }
    }

    resize();
    seed();
    frame();

    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        resize();
      }, 150);
    });
  }
})();
