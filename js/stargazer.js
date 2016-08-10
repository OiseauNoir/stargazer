$(document).ready(function() {
  $('#search').on('submit', function() {
    var name = $('#search-name').val();
    //console.log(name)
      $.ajax({
        url: 'http://www.strudel.org.uk/lookUP/json/?name='+name,
        dataType: "jsonp",
        jsonpCallback: "logResults"
      })
    // .done(function(data) {
    //   console.log(data);
    // })
      .fail(function() {
        alert('error');
      })
    return false;
  })
});

function logResults(json){
  console.log(json);
  $('#preview').html('<img src="' + json.image.src + '">')
}
