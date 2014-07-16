function messageHTML(message,error){
  if(error==0)error=false;
  if(error==1)error=true;

  if(error){
   return "<div class=errormsg><span style='margin-right:1em;'><img src='images/exclamation.png'></span><span>"+message+"</span></div>";
  }
  else {
   return "<div class=successmsg><span style='margin-right:1em;'><img src='images/check.png'></span><span>"+message+"</span></div>";
  }
}
function pleasewait(divid){
 document.getElementById(divid).innerHTML="<img src=images/ajax-loader.gif>  &nbsp;&nbsp;<b>Processing......</b>";
 return true;
 }
function myalert(msg){
  if(DEBUG_MODE){
    alert(msg);
  }
}
