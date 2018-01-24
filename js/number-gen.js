function GenBPM()
{
    var myarray= new Array("5","<10","<20","<30","<40","<50","<60","<70","<80","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138","139","140","145","150","160","170","180","190","200",">200",">1000");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("BPMmessage").innerHTML=random;
}

function GenIns1()
{
    var myarray= new Array("voice","guitar","acoustic guitar","detuned anything","-","???");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("ins1message").innerHTML=random;
}

function GenIns2()
{
    var myarray= new Array("drum machine","synthesizer", "field recording", "software", "sampler","???");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("ins2message").innerHTML=random;
}

function GenFeel()
{
    var myarray= new Array("fear", "grief", "love", "rage", "cold", "dark", "ugly", "warm", "bright", "beautiful", "delicate", "harsh", "fleeting", "life", "death");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
   document.getElementById("feelmessage").innerHTML=random;
}