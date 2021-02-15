// efeito scroll para o menu mudar de cor
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});

//menu toggle responsivo
function toggleMenu() {
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation')
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}