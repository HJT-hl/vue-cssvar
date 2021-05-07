module.exports =  function(app,options){
    let name = options?.name === undefined ? 'css' : options?.name
    let isPx = options?.isPx === undefined ?  true : options?.isPx
  
    function change(el,binding){
        for(const [key,value] of Object.entries(binding.value)){
            if(value == null) continue;
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