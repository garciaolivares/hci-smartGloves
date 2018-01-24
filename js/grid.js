self.addEventListener("message", function(e) { 

	var height =  e.data.img.height;
	var width =  e.data.img.width;
	var unit = e.data.unit;
	var data = e.data.img.data;




    for (var y = 0; y < height; y=y+unit) {  
        for (var x = 0; x < width; x=x+unit) { 
            var index = ((y * width + x) * 4)+unit; 
                var status = "color";
                if(data[index+3]==0){  
                    status = "blank";
                } 
                postMessage({     
                                "x": x,
                                "y": y,
                                "status": status
                            }); 
        }
    }
}, false);
