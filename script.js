const state = {
    RUNNING: 'running',
    STOPPED: 'stopped',
    PAUSED: 'paused'
}

class View {
    currentState=state.STOPPED;
    model=null;

    constructor(){
        /*Tie view methods to UI elements.*/
        $(document).on("click", "#start_stop", this.btnStartStop);
    }

    setModel = function(m){
        this.model=m;
    }

    btnStartStop = function() {
        console.log(this.currentState);
        if (this.currentState=state.STOPPED) {
            console.log(this.model);
            this.model.helloFromModel();
        }
    }
}

class Model {
    view;

    constructor(v){
        this.view=v;
        v.setModel(this);
    }

    helloFromModel=function(){
        console.log("Hello from model");
    }
}

$( document ).ready(function() {
    let m=new Model(new View());
});