require(['lib/domReady','lib/jquery','message'], function (domReady,jquery,message) {
  domReady(function () {
  	$('#output').html('this is first example');
  	alert(message('test'));
  });
});