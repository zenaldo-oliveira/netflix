// Seletores
const botaoSom = document.querySelector('.botao-som');
const video = document.querySelector('video');
const botao = document.querySelector('.link-info');
const modal = document.querySelector('.modal');
const audio = document.querySelector('.audio');

// Função para tocar o áudio de "tudum"
const tocarAudio = () => {
  if (audio) {
    audio.play().catch((error) => {
      console.error('Erro ao reproduzir o áudio:', error);
    });
  }
};

// Ligar o som do vídeo e tocar o áudio ao clicar no botão de som
const ligaSom = () => {
  if (video) {
    video.muted = false;
  }
  tocarAudio();
};

// Exibir e ocultar o modal
const mostrarModal = () => {
  if (modal) {
    modal.style.display = 'block';
  }
};

const esconderModal = () => {
  if (modal) {
    modal.style.display = 'none';
  }
};

// Eventos
botaoSom?.addEventListener('click', ligaSom);
botao?.addEventListener('click', mostrarModal);
modal?.addEventListener('click', esconderModal);
window.addEventListener('load', tocarAudio);
