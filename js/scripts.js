var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

const inputField = document.querySelectorAll('.input-field');

/*[].forEach.call(inputField, elem => {
  const label = elem.nextElementSibling;

  elem.addEventListener('change', () => {
    elem.value ? label.classList.add('active') : label.classList.remove('active');
  });
});
