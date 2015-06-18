//Class Example
/*function Ninja(stars){

  this.stars = stars;

  this.getStars = function(){
    return this.stars;
  };

  hasSword: true;

  this.throwStar = function() {
    if (this.getStars() > 0){
      console.log("Threw a Star");
      this.stars--;
    } else {
      console.log("No more stars! Vanish!");
    }
  };
}

var ninja1 = new Ninja(4);
var ninja2 = new Ninja(1);

//this will not alter ninja1
ninja2.hasMask = true;

//this will alter both ninjas and all future ninjas
Ninja.prototype.wearsBlack = true;

function MountedNinja(){
  console.log(this);
  console.log(arguments);
  
  Ninja.apply(this, arguments);
  this.ridesHorse = true;
}

MountedNinja.prototype = new Ninja(4);

rider = new MountedNinja(); */

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