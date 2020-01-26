import EventEmitter from "events";

const emitter = new EventEmitter();

export default {
    onNotesChange(listener) {
        emitter.on("notes-change", listener);
    }
    
}