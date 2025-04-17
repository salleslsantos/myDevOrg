({
    pineappleHandler : function(component, event) {
        var msg = event.getParam('msg');
        component.set("v.mensagem",msg);
    }
})