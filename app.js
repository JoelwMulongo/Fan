		var fan = document.getElementById('fan');
		function btn_on(){
			fan.classList.add("fan-on");
			console.log("fan on");
		}
		function btn_off(){
			fan.classList.remove("fan-on");
			console.log("fan off");
		}

// fontos hogy a megfelelő js cdn-ek meglegyenek

var features = ".draggable";

Draggable.create(features, {
		handle: '.touch',
    edgeResistance:0,
		type:"x,y",
		throwProps:false,
    autoScroll:true
});

$('.draggable').resizable().rotatable();
