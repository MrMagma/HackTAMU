import EventEmitter from "events";

const emitter = new EventEmitter();

export default {
    onEmoteReceived(listener) {
        emitter.on("emote-received", listener);
    },
    saveNotes() {

    },
    onNotesSaved() {

    },
    sendImage(blob) {
        console.log(blob.size);
    }
}