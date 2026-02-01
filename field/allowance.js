const field = document.getElementById("field");

let fragments = [];

function appear() {
  const el = document.createElement("div");
  el.className = "fragment";

  el.style.left = Math.random() * 100 + "vw";
  el.style.top = Math.random() * 100 + "vh";

  field.appendChild(el);
  fragments.push(el);

  if (fragments.length > 7) {
    const old = fragments.shift();
    old.remove();
  }
}

setInterval(() => {
  if (Math.random() > 0.6) {
    appear();
  }
}, 2000);
