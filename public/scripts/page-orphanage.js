// objeto criado para desabilitar a mudança de localização dentro do mapa
const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([-23.5379081, -46.6447413], 16);

// create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create amd add marker
L.marker([-23.5379081, -46.6447413], { icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  // --remover todas as classes .active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);
  // para cada botão dentro da procura que realizamos na linha 35, remover a classe active

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  // --selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  // --atualizar o container  de imagem
  imageContainer.src = image.src;

  //--adicionar a classe .active para este botão(selecionado)
  button.classList.add("active");
}
