var input = document.querySelectorAll('.js-date')[0];
  
var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    
    var len = elm.value.length;
    

    if(len !== 1 || len !== 3) {
      if(e.keyCode == 47) {
        e.preventDefault();
      }
    }
    

    if(len === 2) {
      elm.value += '/';
    }

    if(len === 5) {
      elm.value += '/';
    }
  });
};
  
dateInputMask(input);


function somenteNumero(evt) {
         
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}