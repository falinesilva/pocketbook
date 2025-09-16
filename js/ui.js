// Logo
fetch("/logo/logo.html")
.then(res => res.text())
.then(html => document.getElementById("logo").innerHTML = html);

// Nav Bar
fetch("/nav/nav.html")
.then(res => res.text())
.then(html => document.getElementById("nav").innerHTML = html);

// Modules
async function showView(file) {
  const response = await fetch(file);
  const html = await response.text();
  document.getElementById("content").innerHTML = html;
  }

window.onload = () => showView("./modules/overview.html");

// Footer
fetch("/footer/footer.html")
  .then(res => res.text())
  .then(html => document.getElementById("footer").innerHTML = html);