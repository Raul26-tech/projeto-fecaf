// Criando função para realizar o slide do menu

const ToggleMenu = () => {
    let navigation = document.querySelector('.navigation')
    let toggle = document.querySelector('.toggle')
    navigation.classList.toggle('active')
    toggle.classList.toggle('active')
}