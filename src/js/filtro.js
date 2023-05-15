// init Isotope
var $grid = $('#todos-productos').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});