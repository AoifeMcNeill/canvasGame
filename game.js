function init(){

    var stage = new createjs.Stage("demoCanvas");
  
    createjs.Touch.enable(stage);
    
    stage.mouseMoveOutside = true;
    
    jsSq = document.getElementById("jsSq");
  jsSq.addEventListener("click", funcSq)
        
  jsTri = document.getElementById("jsTri");
  jsTri.addEventListener("click", funcTri)
        
  jsRhom = document.getElementById("jsRhom");
  jsRhom.addEventListener("click", funcRhom)
        
  jsDia = document.getElementById("jsDia");
  jsDia.addEventListener("click", funcDia)
        
  jsTrape = document.getElementById("jsTrape");
  jsTrape.addEventListener("click", funcTrape)
        
  jsHex = document.getElementById("jsHex");
  jsHex.addEventListener("click", funcHex)
    
    function funcSq(){
    
    var sq = new createjs.Shape();
  sq.graphics.beginStroke('#000').beginFill('#FFA500').drawRect(0, 0, 85, 85);
    
    var draggerSq = new         createjs.Container();
    
    draggerSq.x = Math.random()*100;
    draggerSq.y = Math.random()*100;
    draggerSq.addChild(sq);  
    
    stage.addChild(draggerSq);
          
   draggerSq.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerSq.on("dblclick", function rotate(evt) {
    var tweenSq = createjs.Tween.get(draggerSq, {override:true})
    .to({rotation:draggerSq.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerSq = tween.target;
      draggerSq.rotation = Math.round(draggerSq.rotation);
    });
  });
          
      stage.update();   
    }
    
    function funcTri(){
    
    var tri = new createjs.Shape();
  tri.graphics.beginStroke("#000").beginFill('#008000').drawPolyStar(0, 0, 50, 3, 0, 270);
    
    var draggerTri = new         createjs.Container();
    
    draggerTri.x = Math.random()*100;
    draggerTri.y = Math.random()*100;
    draggerTri.addChild(tri);  
    
    stage.addChild(draggerTri);
          
   draggerTri.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerTri.on("dblclick", function rotate(evt) {
    var tweenTri = createjs.Tween.get(draggerTri, {override:true})
    .to({rotation:draggerTri.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerTri = tween.target;
      draggerTri.rotation = Math.round(draggerTri.rotation);
    });
  });
          
      stage.update();   
    }
    
    function funcRhom(){
    
    var rhom = new createjs.Shape();
  rhom.graphics.beginStroke("#000").beginFill('#0000FF').lineTo(130, 0).lineTo(85, 75).lineTo(0, 75).lineTo(44, 0).lineTo(130, 0);
    
    var draggerRhom = new         createjs.Container();
    
    draggerRhom.x = Math.random()*100;
    draggerRhom.y = Math.random()*100;
    draggerRhom.addChild(rhom);  
    
    stage.addChild(draggerRhom);
          
   draggerRhom.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerRhom.on("dblclick", function rotate(evt) {
    var tweenRhom = createjs.Tween.get(draggerRhom, {override:true})
    .to({rotation:draggerRhom.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerRhom = tween.target;
      draggerRhom.rotation = Math.round(draggerRhom.rotation);
    });
  });
          
      stage.update();   
    }
    
    function funcDia(){
    
    var dia = new createjs.Shape();
  dia.graphics.beginStroke("#000").beginFill('#F4A460').lineTo(130, 0).lineTo(75, 60).lineTo(0, 75).lineTo(54, 16).lineTo(130, 0);
    
    var draggerDia = new         createjs.Container();
    
    draggerDia.x = Math.random()*100;
    draggerDia.y = Math.random()*100;
    draggerDia.addChild(dia);  
    
    stage.addChild(draggerDia);
          
   draggerDia.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerDia.on("dblclick", function rotate(evt) {
    var tweenDia = createjs.Tween.get(draggerDia, {override:true})
    .to({rotation:draggerDia.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerDia = tween.target;
      draggerDia.rotation = Math.round(draggerDia.rotation);
    });
  });
          
      stage.update();   
    }
    
    
    
    function funcTrape(){
    
    var trape = new createjs.Shape();
  trape.graphics.beginStroke("#000").beginFill('#FF0000').lineTo(131, 0).lineTo(179, 75).lineTo(0, 75).lineTo(44, 0).lineTo(131, 0);
    
    var draggerTrape = new         createjs.Container();
    
    draggerTrape.x = Math.random()*100;
    draggerTrape.y = Math.random()*100;
    draggerTrape.addChild(trape);  
    
    stage.addChild(draggerTrape);
          
   draggerTrape.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerTrape.on("dblclick", function rotate(evt) {
    var tweenTrape = createjs.Tween.get(draggerTrape, {override:true})
    .to({rotation:draggerTrape.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerTrape = tween.target;
      draggerTrape.rotation = Math.round(draggerTrape.rotation);
    });
  });
          
      stage.update();   
    }
    
    function funcHex(){
    
    var hex = new createjs.Shape();
  hex.graphics.beginStroke("#000").beginFill('#FFFF00').lineTo(152, 0).lineTo(195, 75).lineTo(152, 150).lineTo(64, 150).lineTo(21, 75).lineTo(21,75).lineTo(64, 0).lineTo(152, 0);
    
    var draggerHex = new         createjs.Container();
    
    draggerHex.x = Math.random()*100;
    draggerHex.y = Math.random()*100;
    draggerHex.addChild(hex);  
    
    stage.addChild(draggerHex);
          
   draggerHex.on("pressmove",function(evt) {
     
    evt.currentTarget.x = evt.stageX;
    evt.currentTarget.y = evt.stageY;
     
     
    stage.update();   
  
  });
      
      draggerHex.on("dblclick", function rotate(evt) {
    var tweenHex = createjs.Tween.get(draggerHex, {override:true})
    .to({rotation:draggerHex.rotation+10}, 2000)
    .on("change", function(event){
      var tween = event.target,
          draggerHex = tween.target;
      draggerHex.rotation = Math.round(draggerHex.rotation);
    });
  });
          
      stage.update();   
    }
  
  }