function penzfeldobas(){
	var tipp,uzenet;
	
	tipp=document.getElementById("jatekos").value;
	
	if(tipp<0||tipp>1){
			uzenet="Hiba!";
	}else{
			uzenet=Math.round(Math.random());
	}
	
	document.getElementById("eredmeny").innerHTML = "A gép dobása: " + uzenet; 
}