function calc()
{
	var kill=parseInt(document.getElementById('kill').value);
	var dead=parseInt(document.getElementById('dead').value);
	var assist=parseInt(document.getElementById('assist').value);
	if(dead=='' || dead==' ' || isNaN(dead))
	{
		dead=0;
	}
	if(kill=='' || kill==' ' || isNaN(kill))
	{
		kill=0;
	}
	if(assist=='' || assist==' ' || isNaN(assist))
	{
		assist=0;
	}
	if(kill>=0 && dead>=0 && assist>=0 && kill<1000 && dead<1000 && assist<1000)
	{
		if(kill==0 && assist==0 && dead==0)
		{
			var kda=0;
			var msg="Your K/D/A is: <p id='res'>"+kda+"</p>";
		}
		else if(dead>0)
		{
			var kda=parseInt((kill+assist)/dead);
			var msg="Your K/D/A is: <p id='res'>"+kda+"</p>";
		}
		else if(dead==0)
		{
			var kda=parseInt(kill+assist);
			var msg="Your K/D/A is: <p id='res'>"+kda+"</p>Perfect K/D/A";
		}
		else
		{
			var msg='';
		}
	}
	else
	{
		alert('Invalid Data');
		var msg='';
	}
	document.getElementById('result').innerHTML='<h3>'+msg+'</h3>';
}
