 function make_same_height_general(){
        $(".main-row .card").height("auto");
        var all_rows=$(".main-row").children(".cards-container");
        for(row of all_rows){
            var cols=$(row).children(".col");
            var len=cols.length;
            var maxheight=0;
            for(i of cols){
                var ht=($(i).children(".card")).height();
                if(ht>maxheight)
                    maxheight=ht;
            }
            console.log("maxheight:"+maxheight);
            if(maxheight>20){
                for(i of cols){
                    ($(i).children(".card")).height(maxheight);
                }
            }
        }
    }
    function make_same_height_modal(){
        $(".modal .card").height("auto");
        var all_rows=$(".modal .cards-container");
        for(row of all_rows){
            var cols=$(row).children(".col");
            var len=cols.length;
            var maxheight=0;
            for(i of cols){
                var ht=(($(i).children("a")).children(".card")).height();
                if(ht>maxheight)
                    maxheight=ht;
            }
            console.log("maxheight modal:"+maxheight);
            if(maxheight>20){
                for(i of cols){
                    (($(i).children("a")).children(".card")).height(maxheight);
                }
            }
        }
    }
    $( window ).resize(function() {
       make_same_height_general()
       make_same_height_modal();
   });
    $(document).ready(function(){
         window.setTimeout(function(){
    make_same_height_general();
    make_same_height_modal();
},500);
});
    $(".modal-trigger").click(function(){
        window.setTimeout(function(){
            make_same_height_modal();
        },1000);
    });