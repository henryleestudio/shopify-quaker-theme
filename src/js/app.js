let jQuery = require('jquery');
window.jQuery = window.$ = jQuery;

// global.$ = global.jQuery = require('jquery')
require('._buttons.js')

$(function() {

  $('alert').on('click', function(){
    alert('jQuery')
  })

})

