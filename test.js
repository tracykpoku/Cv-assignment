function userinput(){
	const firstname = document.getElementById("fname").value;
	const middlename=document.getElementById("mname").value;
	const lastname=document.getElementById("lname").value;
	const email=document.getElementById("email").value;
	const gender=document.getElementById("gender").value;
	const phonenum=document.getElementById("pnum").value;
	const address=document.getElementById("address").value;

	localStorage.setItem("fnamevalue", firstname);
	localStorage.setItem("mnamevalue", middlename);
	localStorage.setItem("lnamevalue", lastname);
	localStorage.setItem("emailvalue", email);
	localStorage.setItem("gendervalue", gender);
	localStorage.setItem("pnumvalue", phonenum);
	localStorage.setItem("addressvalue", address);

	return;

	document.getElementById("display1").innerHTML = firstname;
	document.getElementById("display2").innerHTML = middlename;
	document.getElementById("display3").innerHTML = lastname;
	document.getElementById("display4").innerHTML = email;
	document.getElementById("display5").innerHTML = gender;
	document.getElementById("display6").innerHTML = phonenum;
	document.getElementById("display7").innerHTML = address;


}

	