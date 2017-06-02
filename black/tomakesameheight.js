
function make_same_height(){
	var cols=$(".card-col");
	var len=cols.length;
	var maxheight=0;
	for(i of cols){
		var ht=$(i).height();
		if(ht>maxheight)
			maxheight=ht;
	}
	for(i of cols){
		$(i).height(maxheight);
	}
}
$( window ).resize(function() {
	make_same_height();
}
make_same_height();