

const nav = document.createElement("nav");
  nav.classList.add('navbar','navbar-expand-lg','navbar-light','bg-light');
nav.innerHTML = `
<a class="navbar-brand" href="#">To Do Notes</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>`;


export { nav }
