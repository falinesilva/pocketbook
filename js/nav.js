async function showView(file) {
        const response = await fetch(file);
        const html = await response.text();
        document.getElementById("content").innerHTML = html;
      }

      window.onload = () => showView("./views/overview.html");