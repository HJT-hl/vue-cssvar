const config = {
    name : 'css',
    isPx : true,
    toLine : false
}

function toLowerLine(str) {
	var temp = str.replace(/[A-Z]/g, function (match) {	
		return "-" + match.toLowerCase();
  	});
  	if(temp.slice(0,1) === '-'){ 
  		temp = temp.slice(1);
  	}
	return temp;
}
module.exports =  function(app,options=config) {

    let {name,isPx,toLine} = {...config , ...options}
    function change(el,binding){
        for(let [key,value] of Object.entries(binding.value)){
            if(value == null) continue;
            if(toLine){
                key = toLowerLine(key)
            }
            if(isPx){
                if ( typeof value === "number") value += 'px'
            }
            el.style.setProperty('--'+key, value);
        }
    }
    app.directive(name, {
        mounted(el,binding){
            change(el,binding)
        },
        inserted(el,binding){
            change(el,binding)
        },
        updated(el, binding) {
            change(el,binding)
        },
        update(el,binding){
            change(el,binding)
        }
    })
    return app;
}