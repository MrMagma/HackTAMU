import EventEmitter from "events";
import request from "request";
import axios from "axios";

import data, { SERVER_URL } from "./data.json";

const emitter = new EventEmitter();

let prevEmote;

export default {
    onEmoteReceived(listener) {
        emitter.on("emote-received", listener);
    },
    onToggleInfo(listener) {
        emitter.on("toggle", listener);
    },
    toggleInfo() {
        emitter.emit("toggle");
    },
    saveNotes({ emotions, notes, id }) {
        request.post(SERVER_URL + "saveNotes").form({
            mood: emotions[0].name,
            content: notes,
            id: id
        });
    },
    getNotes(mood, listener) {
        // axios.post(SERVER_URL + "getNotes", {
        //     body: mood,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //       }
        // }).then((response) => {
        //     console.log(response.data, response);
        // })
        var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://emotebackend.herokuapp.com/getNotes',
  'headers': {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    'mood': mood.toLowerCase()
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  listener(response.body);
});
    },
    onNotesSaved() {

    },
    sendImage(blob) {
        
        //  var request = require('request');
        //  var options = {
        //  'method': 'POST',
        //  'url': SERVER_URL + "processFrame",
        //  'headers': {
        //     'Content-Type': ['application/x-www-form-urlencoded', 'image/jpeg']
        //   },
        //     body : blob

        //  };
        //  request(options, function (error, response) { 
        //   if (error) throw new Error(error);
        //   console.log(response.body);
        //  });
        let formData = new FormData();
        let objectURL = URL.createObjectURL(blob);
        formData.append("frame", objectURL);
        axios.post(SERVER_URL + "processFrame", blob, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then((response) => {
            prevEmote = response.data;
            emitter.emit("emote-received", response.data);
        }).catch((err) => {
            console.error(err);
            emitter.emit("emote-received", prevEmote);
        })
    }
}