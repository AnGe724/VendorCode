function getSOAPXML(methodname,param1,param2,param3,param4){


}
function getNodeValue(obj,tag)
{       
        var returnValue ='';
        if(window.ActiveXObject) {
          returnValue = getNodeValueIE(obj,tag);
        }
        else{          
          try{
		if (obj.getElementsByTagName(tag)[0]){
		    if(obj.getElementsByTagName(tag)[0].firstChild)
		      if(obj.getElementsByTagName(tag)[0].firstChild.nodeValue)
		        returnValue = obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
		      else if(obj.getElementsByTagName(tag)[0].firstChild.data)
		        returnValue = obj.getElementsByTagName(tag)[0].firstChild.data;
		}
	  }catch(e){}
	}
        return returnValue;
	/* codingforums.com/showthread.php?t=120429*/
	//return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}
function getNodeValueIE(obj,tag){
        var returnValue ='';
        //alert(tag);
        try{
	      if(obj.getElementsByTagName(tag)[0].firstChild.data)
	      {
		returnValue = obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
		//alert(tag+'nodevalue');
	      }
	      else if(obj.getElementsByTagName(tag)[0].firstChild.nodeValue)
	      {
		returnValue = obj.getElementsByTagName(tag)[0].firstChild.data;
		//alert(tag+'datavalue');
	       }
	}catch(e){}
	//alert(tag+'|'+returnValue);
	//alert('aaa');
	return returnValue;

}