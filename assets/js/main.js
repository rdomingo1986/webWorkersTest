$(document).ready(function (){
  function whichAnimationEvent(){
    var t,
        el = document.createElement("fakeelement");

    var animations = {
      "animation"      : "animationend",
      "OAnimation"     : "oAnimationEnd",
      "MozAnimation"   : "animationend",
      "WebkitAnimation": "webkitAnimationEnd"
    }

    for (t in animations){
      if (el.style[t] !== undefined){
        return animations[t];
      }
    }
  }

  var animationEvent = whichAnimationEvent();

  var id = 0;
  var begin = 0;
  var url = $('#base_url').val();
  
  $('#start').on('click',function (){
    if($('#val').val().trim().length === 0){
      $('.small').empty().text('Debe introducir un valor').fadeIn();
      return false;
    }
    if($('#tasks > .progress').length === 5){
      $('.small').empty().text('No puede haber más de 5 tareas simultaneas').fadeIn();
      return false;
    }
    $('.small').fadeOut();
    id++;
    var obj = {
      id: id,
      value: $('#val').val(),
      progress: begin,
      url: url
    };

    if (typeof(Worker) !== "undefined") {
      if (typeof(w) == "undefined") {
        var w = new Worker("assets/js/webWorker.js");
      }
      w.postMessage(obj);
      w.onmessage = function(event){
        console.log(event.data);
        $('#task_'+event.data.id).find('> .progress-bar')
                                 .attr('aria-valuenow',event.data.progress)
                                 .css('width',event.data.progress+'%')
                                 .text(event.data.progress+'%');
        if(event.data.progress === 100){
          $('#task_'+event.data.id).before(`
            <div class="alert alert-success alert-dismissible" id="alert_`+event.data.id+`">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
              <strong>Tarea #`+event.data.id+` Completada!</strong>.
            </div>
          `).remove();
          setTimeout(function (){
            $('#alert_'+event.data.id).fadeOut().one(animationEvent,function (){
              $(this).remove();
            });
            w.terminate();
          },5000);
        }else{
          w.postMessage(event.data);
        }
      };
    } else {
      alert('Su navegador no soporta web workers');
    }

    $('#tasks').append(`
      <div class="progress" id="task_`+id+`">
        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width:0%;">
          
        </div>
      </div>
    `);
  });
});