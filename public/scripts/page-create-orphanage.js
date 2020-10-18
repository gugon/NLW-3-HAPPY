//create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
})

// create and add marker

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// adicionar o campo de fotos
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo esta vazio se sim, não adicionar no container de imagens
    const input =  newFieldContainer.children[0]
    if(input.value == "") {return}
    input.value = ""
    // limpar o campo antes de adicionar ao cainer de imagens
    newFieldContainer.children[0].value = ""
    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span =  event.currentTarget

    const fieldsContainer =  document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // limpar ao valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
    // retirar a class .active (do botoes)
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })
    // colocar a class .active nesse botao clicado
    const button =  event.currentTarget
    button.classList.add('active')
    // pegar o botão cçicado
    // verificar se sim ou nao
    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

function validate(event){
    // fazer valição lat e lng estao preeechido
    const needsLatAndLng = false
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    } else {
        
    }
}