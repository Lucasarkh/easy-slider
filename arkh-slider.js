const selector = () => document.querySelector(arkhSlider().target);
function createSlider() {
  const e = arkhSlider();
  let t = { ...e };
  const l = () => {
      (t = window.matchMedia("(max-width: 767px)").matches ? { ...e, ...e.mobile } : { ...e }), d();
    },
    n = document.querySelector(arkhSlider().target);
  if (!n) return;
  const r = n.style;
  r.position = "relative";
  const s = Array.from(n.children).filter((e) => !["prev", "next", "dots"].some((t) => e.classList.contains(t)));
  let o,
    a = 0,
    i = !1,
    c = 0;
  const d = () => {
    const { itensToShow: e, interval: l, infinite: d, autoplay: h, arrows: u, dots: y, draggable: p, stopOnHover: g, nav: f, navShow: v, scrollSlider: m } = t;
    if (((n.innerHTML = ""), s.forEach((e) => n.appendChild(e)), u)) {
      const t = createButton("❯", "absolute", "10px", "50%", "right"),
        l = createButton("❮", "absolute", "10px", "50%", "left");
      n.appendChild(t),
        n.appendChild(l),
        t.addEventListener("click", () => {
          (d || a + e < s.length) && ((a = (a + 1) % s.length), E());
        }),
        l.addEventListener("click", () => {
          (d || a > 0) && ((a = (a - 1 + s.length) % s.length), E());
        });
    }
    let b = [];
    if (y) {
      const e = document.createElement("div");
      e.classList.add("dots"),
        (e.style.position = "absolute"),
        (e.style.bottom = "10px"),
        (e.style.left = "50%"),
        (e.style.transform = "translateX(-50%)"),
        (b = s.map((t, l) => {
          const n = document.createElement("span");
          return (
            (n.style.display = "inline-block"),
            (n.style.width = "10px"),
            (n.style.height = "10px"),
            (n.style.borderRadius = "50%"),
            (n.style.margin = "0 5px"),
            (n.style.cursor = "pointer"),
            (n.style.backgroundColor = "rgba(255, 255, 255, 0.5)"),
            (n.style.transition = "all 0.3s ease"),
            n.addEventListener("click", () => {
              (a = l), E();
            }),
            e.appendChild(n),
            n
          );
        })),
        n.appendChild(e);
    }
    (r.display = "flex"),
      (r.overflow = "hidden"),
      (r.width = "100%"),
      s.forEach((t, l) => {
        const n = t.style;
        (n.maxWidth = 100 / e + "%"), window.innerWidth > 768 && (n.padding = "4px");
        t.querySelectorAll("*").forEach((e) => {
          (e.style.width = "100%"),
            e.addEventListener("mousedown", (e) => {
              e.preventDefault();
            });
        }),
          l >= e && (t.style.display = "none");
      });
    const E = () => {
      s.forEach((e, t) => {
        (e.style.display = "none"), (e.style.order = (t - a + s.length) % s.length);
      });
      for (let t = 0; t < e; t++) {
        let e = a + t;
        d && (e = (a + t) % s.length), (s[e].style.display = "flex"), (s[e].style.order = t);
      }
      w();
    };
    m &&
      n.addEventListener("wheel", () => {
        event.preventDefault(), (a = event.deltaY > 0 ? (a - 1 + s.length) % s.length : (a + 1) % s.length), E();
      });
    const x = document.querySelector(f);
    if (x) {
      x.style.overflowX = "scroll";
      const e = document.createElement("style");
      (e.textContent = "\n          .scroll-bar::-webkit-scrollbar {\n            height: 4px;\n          }\n          .scroll-bar::-webkit-scrollbar-thumb {\n            background-color: rgba(0, 0, 0, 0.5);\n            border-radius: 10px;\n          }\n        "),
        document.head.appendChild(e),
        x.classList.add("scroll-bar"),
        x.addEventListener("wheel", () => {
          event.preventDefault(), event.deltaY > 0 ? (x.scrollLeft += 150) : (x.scrollLeft -= 150);
        }),
        s.forEach((e, t) => {
          e.querySelector("img").src;
          const l = document.createElement("img");
          (l.style.padding = "2px"),
            (l.src = e.querySelector("img").src),
            l.addEventListener("click", () => {
              (a = t), E();
            }),
            x.appendChild(l);
        });
      const t = Array.from(x.children);
      for (let e = 0; e < t.length; e++) t[e].style.width = 90 / v + "%";
      x.style.display = "flex";
    }
    const w = () => {
      b.length > 0 &&
        b.forEach((e, t) => {
          (e.style.backgroundColor = t === a ? "rgba(0, 0, 0, 0.5)" : "rgba(151, 151, 151, 0.5)"), (e.style.width = t === a ? "24px" : "10px"), (e.style.borderRadius = t === a ? "5px" : "50%");
        });
    };
    function L(e, t, l) {
      e.addEventListener(t, l);
    }
    if (
      (l > 0 &&
        h &&
        (o && clearInterval(o),
        (o = setInterval(() => {
          if (d || a + e < s.length) {
            (a = (a + 1) % s.length), E(), !d && a + e >= s.length && clearInterval(o);
            Array.from(x.children).forEach((e) => {
              e.addEventListener("click", () => {
                o && clearInterval(o);
              }),
                s.forEach((e) => {
                  e.addEventListener("click", () => {
                    o && clearInterval(o);
                  });
                });
            });
          }
        }, l)),
        g &&
          (n.addEventListener("mouseover", () => {
            o && clearInterval(o);
          }),
          n.addEventListener("mouseout", () => {
            o && clearInterval(o),
              (o = setInterval(() => {
                (d || a + e < s.length) && ((a = (a + 1) % s.length), E(), !d && a + e >= s.length && clearInterval(o));
              }, l));
          }))),
      p)
    ) {
      const t = (e) => {
          (i = !0),
            (c = e.type.includes("mouse") ? e.pageX : e.touches[0].clientX),
            n.classList.add("grabbing"),
            s.forEach((e) => {
              e.style.cursor = "pointer";
            });
        },
        l = (t) => {
          if (i) {
            s.forEach((e) => {
              e.style.cursor = "grabbing";
            });
            const l = (t.type.includes("mouse") ? t.pageX : t.touches[0].clientX) - c;
            Math.abs(l) > 50 && (l < 0 && (d || a + e < s.length) ? (a = (a + 1) % s.length) : l > 0 && (d || a > 0) && (a = (a - 1 + s.length) % s.length), E(), (i = !1));
          }
        },
        r = () => {
          n.classList.remove("grabbing"),
            s.forEach((e) => {
              e.style.cursor = "pointer";
            }),
            (i = !1);
        };
      n.querySelectorAll("a").forEach((e) => {
        e.addEventListener("click", (e) => {
          i && e.preventDefault();
        });
      }),
        L(n, "mousedown", t),
        L(n, "touchstart", t),
        L(n, "mousemove", l),
        L(n, "touchmove", l),
        L(n, "mouseup", r),
        L(n, "touchend", r),
        n.addEventListener("mouseleave", () => {
          i && r();
        });
    }
    E();
  };
  l(), window.addEventListener("resize", l);
}
function createButton(e, t, l, n, r) {
  const s = document.createElement("div");
  return (s.innerText = e), (s.style.position = t), (s.style[r] = l), (s.style.top = n), (s.style.height = "24px"), (s.style.width = "24px"), (s.style.display = "flex"), (s.style.alignItems = "center"), (s.style.justifyContent = "center"), (s.style.borderRadius = "50%"), (s.style.cursor = "pointer"), (s.style.fontSize = "20px"), (s.style.fontWeight = "bold"), (s.style.userSelect = "none"), (s.style.color = "#808080"), s;
}
createSlider();
