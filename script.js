const state = {
    RUNNING: 'running',
    STOPPED: 'stopped',
    PAUSED: 'paused'
}

class View {
    currentState=state.STOPPED;

    constructor(){
        console.log("Hello from the View constructor.");
        /*Tie view methods to UI elements.*/
        $(document).on("click", "#start_stop", this.btnStartStop);
    }

    btnStartStop = function() {
        console.log("StartStop was clicked.");
    }
}

class Model {
    view;

    constructor(v){
        console.log("Hello from the Model constructor.");
        this.view=v;
    }
}

$( document ).ready(function() {
    let m=new Model(new View());
});