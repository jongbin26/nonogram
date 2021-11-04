// start html
for(i=0;i<localStorage.length;i++){
  temp="game"+(i+1);
  console.log(temp);
  const litag=document.createElement('li');
  litag.innerHTML=temp;
  document.getElementsByClassName("gamelist")[0].append(litag);
}