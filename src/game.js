function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve,ms))
}

async function jogo() {
  document.querySelector('.main1').style.display = 'none';
  document.querySelector('.main2').style.display = 'flex';
  document.querySelector('.main3').style.display = 'none';
  document.querySelector('.main4').style.display = 'none';



  const audio = document.getElementById('audio');
  const upCpu = document.getElementById('upCpu');
  const downCpu = document.getElementById('downCpu');
  const leftCpu = document.getElementById('leftCpu');
  const rightCpu = document.getElementById('rightCpu');
  const upPlayer = document.getElementById('upPlayer');
  const downPlayer = document.getElementById('downPlayer');
  const leftPlayer = document.getElementById('leftPlayer');
  const rightPlayer = document.getElementById('rightPlayer');

  const upCheck = false;
  const downCheck = false;
  const leftCheck = false;
  const rightCheck = false;
  

  // Adiciona um ouvinte de eventos para o evento keydown
  function handleKeyDown(event) {
    switch (event.keyCode) {
      case 37:
        leftPlayer.pause();
        leftPlayer.currentTime = 0;
        leftPlayer.play();
        teclaSpan.textContent = 'Seta para a esquerda';
        break;
      case 38:
        upPlayer.pause();
        upPlayer.currentTime = 0;
        upPlayer.play();
        teclaSpan.textContent = 'Seta para cima';
        break;
      case 39:
        rightPlayer.pause();
        rightPlayer.currentTime = 0;
        rightPlayer.play();
        teclaSpan.textContent = 'Seta para a direita';
        break;
      case 40:
        downPlayer.pause();
        downPlayer.currentTime = 0;
        downPlayer.play();
        teclaSpan.textContent = 'Seta para baixo';
        break;
      default:
        teclaSpan.textContent = 'Outra tecla';
        break;
    }
  };

  let tempoInicial = null;

  audio.play();

  const teclaSpan = document.getElementById('tecla');

  //LÓGICA ---------------------------------------------------------------------------

  //Obs, tempo original : 10:700 TUDO menos + 700

  teclaSpan.textContent = 'Teclas inativas. Aguarde...';
    document.removeEventListener('keydown', handleKeyDown);

    //TEMPLATE BOX
    
    //TEMPLATE BOX


    await sleep(11500); //music start

    downCpu.play();
    
    await sleep(1000); //input time

   teclaSpan.textContent = 'Você pode usar as teclas agora!';
    document.addEventListener('keydown', handleKeyDown);

    await sleep(1000); //input end

    teclaSpan.textContent = 'NAO PODE USAR';
    document.removeEventListener('keydown', handleKeyDown);

    await sleep(680); //Time to speak

    upCpu.play();

    await sleep(900);

    teclaSpan.textContent = 'PERMITIDO';
    document.addEventListener('keydown', handleKeyDown);

    await sleep(1000);


    teclaSpan.textContent = 'NAO PODE USAR';
    document.removeEventListener('keydown', handleKeyDown);

    await sleep(710);

    leftCpu.play();


    await sleep(900);

    teclaSpan.textContent = 'PERMITIDO';
    document.addEventListener('keydown', handleKeyDown);


    await sleep(1000);

    teclaSpan.textContent = 'NAO PODE USAR';
    document.removeEventListener('keydown', handleKeyDown);

    await sleep(710);

    rightCpu.play();

    await sleep(900);

    teclaSpan.textContent = 'PERMITIDO';
    document.addEventListener('keydown', handleKeyDown);

    await sleep(1000);

    teclaSpan.textContent = 'NAO PODE USAR';
    document.removeEventListener('keydown', handleKeyDown);

    await sleep(760);

    upCpu.play(); await sleep(190);
    leftCpu.play(); await sleep(460);
    downCpu.play(); await sleep(330); 
    downCpu.pause(); downCpu.currentTime = 0;
    downCpu.play();

    await sleep(50);

    teclaSpan.textContent = 'PERMITIDO';
    document.addEventListener('keydown', handleKeyDown);

    await sleep (1400);

    teclaSpan.textContent = 'NAO PODE USAR';
    document.removeEventListener('keydown', handleKeyDown);





  

}




