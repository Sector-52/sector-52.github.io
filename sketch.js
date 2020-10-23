let reports = ['Anon Tip off','Psi Judge Hodges','Anon Tip off','Ian Hooper','Tracy Franchina','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Anon Tip Off','Zala Guin','Calvin Hobbs','Hector Henry','Shandell Chantelle','Anon Tip Off','Erica McKewen','Cheryl DeRier','Wullie Russell','Barrie McMahon','Moira Rose','Sean Gonzailvev','Edwardo Billinghurst','Bjorn Hanson','Matthew Johnman','Ralf Sanberg','Katrina Mellow','Ali Neumeyer','Colin MacMcGregor','Misa Gringold','Evan Hansan','Judge Clarke','Judge Lloyd','Judge Field','Judge Lee','Ridge','Psi Judge Evans','Psi Judge Zigorzelski','Judge McNeil','Moula','Nrooj','Gorge Van Vincent','Thom Erricson','Erric Thompson','Sara Keys','Dyke VanDyck','Bob Hairy Poppins','Jim Cricket','Pedro Pastell','Non Javereau','Lore Jucas','Betty Davis'];
let places = ['Resyk','Christopher Biggins Block','Jurgen Prochnow Con Apts','Sig Weaver Block','Djimon Hounsou Block','Mar King Aeroball Stadium','Alan Rickman High Rise','Amanda Tapping Block','Frank Langella block','Burgess Meredith Home for Eldsters','ZoeZaldana Block','Harrison Ford Block','Paul McCartney Broadwey','Phil Daniels Parkarama','Nathan Fillion Block','Hugo Weaving Tower','Zach Quinto Con Apts','EatyMeatyRamaLicious','Jumpin Joes Jumpin Jump Spot','MCTV52 Studio'];
let crimes = ['Homicide','Code 99 Red','Jaywalking','Assault','Kidnap','Burglary','robbery','Theft','Forgery','Criminal Damage','Public Order Offence','Public Nuiscance','Back Up Required','Suspect Jimp at Scene','Gambling','Traffic Violation'];

let report = "";
let place = "";
let crime = "";

let button;

let cnv;


function setup() {
  cnv = createCanvas(350, 450);
  
  textSize(20);
  fill(255);
  
  cnv.position(windowWidth/2-(width/2), 170, 'fixed');
  background(0);
  
  button = createButton('INCIDENT REQUEST');
  button.position(cnv.x+5, cnv.y+10);
  button.mousePressed(generate);
  button.addClass('bigB');
  

  //textAlign(CENTER, CENTER);
  
}

function draw() {
  //background(220);
  

}


function generate()
{
    window.location.href = "a href="http://www.google.com";
  background(0);
  report = random(reports);  
  place = random(places); 
  crime = random(crimes); 
  fill(150);
  text("ITEM:",10,100,300,50);
  text("LOCATION:",10,170,300,50);
  text("REPORTED BY:",10,250,300,50);
  
  fill(255);
  text(crime,70,100,300,100);
  text(place,125,170,200,120);
  text(report,170,250,180,150);
  //text(report+" reported the follwing crime: "+crime+" at the following location: "+place, 30, 100, 300,400);
  

}

function windowResized() {
  cnv.position(windowWidth/2-(width/2), 170, 'fixed');
  button.position(cnv.x+5, cnv.y+10);
}
