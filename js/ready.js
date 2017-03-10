$(document).ready(function(){
  // La magia aquí

  if (!getCookie('header-advice')) {
    $('#top-advice').removeClass('hidden');
  }

});

$(document).on('click', '#top-advice .close', function(e){
  e.preventDefault();
  $(this).closest('#top-advice').remove();
  setCookie('header-advice', 1, 1);
});