self.addEventListener("message", function(e) { 

	var height =  e.data.img.height;
	var width =  e.data.img.width;
	var unit = e.data.unit;
	var data = e.data.img.data;

    for (var y = 0; y < height; y=y+unit) { 
        var yPoint = Math.ceil(y/unit);
        for (var x = 0; x < width; x=x+unit) {
            var xPoint = Math.ceil(x/unit);
            var index = ((y * width + x) * 4)+unit;
                if(data[index+3]==255){ 
                    postMessage({	"xPoint":xPoint,
                    				"yPoint":yPoint,  
                    				"progress": ((y+1)*100)/height,
                    				"x": x,
                    				"y": y,
                    			});
                }
        }
    }
}, false);
