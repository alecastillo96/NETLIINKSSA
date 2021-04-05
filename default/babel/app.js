const toggleMenu = () => {
  let menuToggle = document.querySelector('.toggle');
  let navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active')
};

feather.replace();

const onclick = () => {
  let subsSuccess = document.querySelector('.success');
  if (subsSuccess > 0) {
    alert('Sies');
  }
}