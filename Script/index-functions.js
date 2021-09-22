	var x = null
	var y = null
	
$(document).on("click",'#port',function(){
	life($(this).text())

}); 
	function life(birth){
	var you = birth
	if (you  == Rejected) 
		{
			accept()
		}
	else if (you  == Unloved) 
		{
			letgo();
		}
	else if (you  == Single) 
		{
			suicide();
		}
	else if (you  == Loveher) 
		{
			dont() ;
		}
	restart_life()
  }