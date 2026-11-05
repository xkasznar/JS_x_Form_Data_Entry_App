console.log("jede to");

function checkDate(den, mesiac, rok)
{
	if(rok>=1900 && rok<=9999)
    {
        //check month
        if(mesiac>=1 && mesiac<=12)
        {
            //check days
            if((den>=1 && den<=31) && (mesiac==1 || mesiac==3 || mesiac==5 || mesiac==7 || mesiac==8 || mesiac==10 || mesiac==12))
                return 0;
            else if((den>=1 && den<=30) && (mesiac==4 || mesiac==6 || mesiac==9 || mesiac==11))
                return 0;
            else if((den>=1 && den<=28) && (mesiac==2))
                return 0;
            else if(den==29 && mesiac==2 && (rok%400==0 ||(rok%4==0 && rok%100!=0)))
                return 0;
            else
				return 1;
        }
        else
			return 2;
	}
    else
		return 3;
}

function calcDateAge(den, mesiac, rok)
{
	today = new Date();
    realDen = today.getDate();
	realMesiac	= today.getMonth() + 1;
	realRok = today.getYear() +1900;
	if(realMesiac > mesiac) return realRok-rok;
	else if(realMesiac == mesiac){
		if(realDen >= den)
			return realRok-rok;
		else if(realDen < den)
			return realRok-rok-1;
	}
	else if(realMesiac < mesiac)
		return realRok-rok-1;
}

function checkAge()
{
	den = document.getElementById('den').value;
	mesiac = document.getElementById('mesiac').value;
	rok = document.getElementById('rok').value;
	vek = document.getElementById('vek').value;
	if(den != "" && mesiac != "" && rok != ""){
		switch(checkDate(den, mesiac, rok)){
			case 1:
				alert("Deň nie je v poriadku");
				document.getElementById('den').style.backgroundColor = "lightpink";
				return 1;
			case 2:
				alert("Mesiac nie je v poriadku");
				document.getElementById('mesiac').style.backgroundColor = "lightpink";
				return 2;
			case 3:
				alert("Rok nie je v poriadku");
				document.getElementById('rok').style.backgroundColor = "lightpink";
				return 3;
		}
		document.getElementById('den').style.backgroundColor = "white";
		document.getElementById('mesiac').style.backgroundColor = "white";
		document.getElementById('rok').style.backgroundColor = "white";
	}
	if(den != "" && mesiac != "" && rok != "" && vek != ""){
		if(calcDateAge(den, mesiac, rok) != vek){
			alert("Dátum vs. vek nesúhlasia");
			document.getElementById('vek').style.backgroundColor = "lightpink";
			return 4;
		}
		document.getElementById('vek').style.backgroundColor = "white";
	}
	return 0;
}

function selUpd1()
{
	if(selBranch1.options[selBranch1.selectedIndex].index == 0)
	{
		selBranch2.options[0].text = "Low Earth Orbit";
		selBranch2.options[0].value = "00x";
		selBranch2.options[1].text = "High Earth Orbit";
		selBranch2.options[1].value = "01x";
		selBranch3.options[0].text = "EL LEO Econ";
		selBranch3.options[0].value = "000";
		selBranch3.options[1].text = "EL LEO Bsns";
		selBranch3.options[1].value = "001"; 
	}
	else
	{
		selBranch2.options[0].text = "Low Mars Orbit";
		selBranch2.options[0].value = "10x";
		selBranch2.options[1].text = "High Mars Orbit";
		selBranch2.options[1].value = "11x";
		selBranch3.options[0].text = "ML LMO Econ";
		selBranch3.options[0].value = "100";
		selBranch3.options[1].text = "ML LMO Bsns";
		selBranch3.options[1].value = "101"; 
	}
}

function selUpd2()
{
	if(selBranch1.options[selBranch1.selectedIndex].index == 0 && selBranch2.options[selBranch2.selectedIndex].index == 0)
	{
		selBranch3.options[0].text = "EL LEO Econ";
		selBranch3.options[0].value = "000";
		selBranch3.options[1].text = "EL LEO Bsns";
		selBranch3.options[1].value = "001";  
	} 
	else if(selBranch1.options[selBranch1.selectedIndex].index == 0 && selBranch2.options[selBranch2.selectedIndex].index == 1)
	{
		selBranch3.options[0].text = "EL HEO Econ";
		selBranch3.options[0].value = "010";
		selBranch3.options[1].text = "EL HEO Bsns";
		selBranch3.options[1].value = "011";      
	} 
	else if(selBranch1.options[selBranch1.selectedIndex].index == 1 && selBranch2.options[selBranch2.selectedIndex].index == 0)
	{
		selBranch3.options[0].text = "ML LMO Econ";
		selBranch3.options[0].value = "100";
		selBranch3.options[1].text = "ML LMO Bsns";
		selBranch3.options[1].value = "101";      
	}
	else
	{
		selBranch3.options[0].text = "ML HMO Econ";
		selBranch3.options[0].value = "110";
		selBranch3.options[1].text = "ML HMO Bsns";
		selBranch3.options[1].value = "111";      
	}    
}

function rbExp()
{
	which = document.getElementById('rb-opt-exp');
	which.style.display = "block";
}
function rbShrink()
{
	which = document.getElementById('rb-opt-exp');
	which.style.display = "none";
}
function checkEmail()
{
	nasMail = document.getElementById('email').value;
	regex = /^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,4}|[.]{1}[a-zA-Z]{1,}[.]{1}[a-zA-Z]{2,4})$/;

	if(regex.test(nasMail) == false)
	{
		alert("xxx@y.zz alebo xxx@y.z.ww, 3+ zn. pred @, nizke dom. volne, TLD 2-4 zn.");
		return 1;
	}  
	return 0;
}

function checkRBOpt(){
	if(!(document.getElementById('rb-optano').checked ||
	document.getElementById('rb-optnie').checked))
		return 1;
	return 0;
}

function checkRRS(){
	if(!(document.getElementById('rrsA').checked ||
	document.getElementById('rrsB').checked ||
	document.getElementById('rrsC').checked ||
	document.getElementById('rrsD').checked ||
	document.getElementById('rrsE').checked ||
	document.getElementById('rrsFx').checked))
		return 1;
	return 0;
}


function checkAll()
{
	den = document.getElementById('den').value;
	mesiac = document.getElementById('mesiac').value;
	rok = document.getElementById('rok').value;
	vek = document.getElementById('vek').value;
	if(den == "" || mesiac == "" || rok == "" || vek == ""){
		alert("Prázdne deň/mesiac/rok/vek");
		return false;
	}
	if(checkAge() != 0) return false;
	if(checkEmail() != 0) return false;
	if(checkRBOpt() != 0){
		alert("Komentujte či ste boli upovedomení o bezpečnosti");
		return false;
	}
	if(document.getElementById('tarea-big').value == ""){
		alert("Veľké textové pole je povinná položka");
		return false;
	}
	if(checkRRS() != 0){
		alert("Oznámkovať nás je povinné");
		return false;
	}
	return true;
}