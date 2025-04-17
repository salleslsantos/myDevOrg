({
    startTimer : function(component, event, helper) {
        setTimeout(function() {
            component.set("v.showSecondButton", true);
        }, 30000); // 30 segundos
    }
})
