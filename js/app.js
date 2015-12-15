/* SantaModel assists santa's helpers in packing children's requests.
 * It provides quality control by checking if the requests are being
 * fulfilled
 */

var SantaModel = {
  
  /* Initializes the model with a list of requests, 
   * and sets the first one as the current one 
   */
   init : function(list){
     this.lista = list;
     this.current = 0;
     this.points = 0;
   },
  
   /* It moves "current" to the next request */
   next : function (){
       this.current++;
   },
    
    addPoints : function(){
      this.points ++;
    },
  
   /* Returns the current request. 
    * If all requests have been processed (there is no current one), it returns null 
    */
   getCurrentRequest : function () {
       if(this.lista[this.current] == undefined){
           return null;
       } else {
           return this.lista[this.current];
       }
   },  
    
   /* Packs the given item if it fulfills the current request.       
    * returns 1 if the given item fulfills the request (= answer)
    * returns 0 if the given item does not fulfill the request
    */
   pack : function(item) {
       if(item === this.lista[this.current].answer){
           return 1;
       } else {
           return 0;
       }
   },
    
    getTotPoints: function(){
        return this.points;
    }
  
};

var controller = {
    init: function(){
        var lista = requests;
        SantaModel.init(lista);
        //if(SantaModel.current<SantaModel.list.length){
        view.render();
        view.clickAnsw();
        //}else{
          //  view.renderTotal();
    //    }
    },
    
    getRequest: function(){
        return SantaModel.getCurrentRequest();
    },
    
    getPackRes: function(){
        return SantaModel.pack();
    },
    
    addPoint: function(){
        SantaModel.addPoints();
    },
    
    callNext: function(){
        SantaModel.next();
    },
    
    getPoints: function(){
        return SantaModel.getTotPoints();
    }
    

};

var view = {  
    render: function(){
        //$(".card").html(""); 
        var tmpl = controller.getRequest();
        $(".question").text(tmpl.question);
        $(".question-items").append('<li>' + tmpl.options[0] + '</li>');
        $(".question-items").append('<li>' + tmpl.options[1] + '</li>');
    },
    
    clickAnsw: function(){
        $(".question-items").click(function(elem){
            var risp =  elem.data;
            if(controller.getPackRes() == 1){
                controller.addPoint();
            }
            controller.callNext();
        });
    },
    
    renderTotal: function(){
       // $(".card").html("");
        var temp = controller.getPoints();
        $(".results").html("Total points: " + temp);
    }
};

$(document).ready(function(){
    controller.init();
});
