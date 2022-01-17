const Client = require("./client");
const Translator = require("./translator");

const suliyat = new Translator("Suliyat");
const desire = new Translator("Desire");
const opeyemi = new Translator("Opeyemi");

const tobi = new Client("Tobi", 27);
const korewa = new Client("Korewa", 10);
const arinola = new Client("Arinoal", 22);

suliyat.addPhoto(naijaphoto);
korewa.addPhoto(berlinphoto);

desire.bio = "";
tobi.bio = "";

opeyemi.comment = "";
arinola.comment = "";
