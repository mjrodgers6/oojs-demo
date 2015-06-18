
function Anchor(age, gender, signoff){
    this.age = age;
    this.gender = gender;   
}

function National() {
    Anchor.apply(this, arguments);
    this.signoff = "Good Night and Good Luck."    
}

function Local() {
    Anchor.apply(this, arguments);
    this.signoff = "Stay Classy, San Diego"
}

National.prototype = new Anchor();
Local.prototype = new Anchor();

var lester = new National(56, "male");
var katie = new National(58, "female");

var burgundy = new Local(47, "male");
var corningstone = new Local(43, "female");
