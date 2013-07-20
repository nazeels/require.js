define(['message'],function(message){
  return function(message){
  	alert('from module');
    return message;
  };
});