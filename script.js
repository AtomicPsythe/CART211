function onButtonClick() {

  }
  
  const button = document.querySelector('button');
  button.addEventListener('click', onButtonClick);

  const obj = document.createElement("audio");
  console.log(obj.volume); // 1
  obj.volume = 0.75;