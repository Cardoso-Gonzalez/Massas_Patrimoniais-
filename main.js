const aparecer = document.getElementById('main')
const botao = document.getElementById('btn')

botao.addEventListener('click', function() {
    // Se estiver escondido, mostra
    if (aparecer.style.display == 'none') {
      aparecer.style.display = 'block';
      botao.textContent = 'Ver menos';
    } else {
      // Se já estiver a mostrar, esconde de novo
      aparecer.style.display = 'none';
      botao.textContent = 'Ver mais';
    }
  });