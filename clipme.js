
document.body.insertAdjacentHTML('beforeend',`

<style>
.clipme {
  user-select:all;
}
</style>
`)
function copy(selector,command){
  if(selector) document.querySelector(selector).select();
  if(!command)command = 'copy';
  document.execCommand(command);
  console.log('Copied Something!');
}
