function tasks(){
  onmessage = function(e) {
    var ev = e;
    var url = e.data.url;
    var req = new XMLHttpRequest();
    var data = new FormData();

    data.append('message',ev.data.value);

    req.open("POST", url+'Welcome/save', false);

    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        setTimeout(function (){
          ev.data.progress += 10;
          postMessage(ev.data);
        },5000);
      }
    };
    
    req.send(data);
  };
}

tasks();