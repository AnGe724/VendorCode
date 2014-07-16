//create somrolidate class for our use
//class
function somrolidate (type) {
    this.type = type;
    this.color = "red";
    //returns array of month name variables
    this.getMonths = function(someparam) {
       alert(someparam);

    };


}

//date util functions
function getDaysInMonth(_month){
 switch(_month)
 {
 case 1:return 31;break;
 case 2:return 28;break;
 case 3:return 31;break;
 case 4:return 30;break;
 case 5:return 31;break;
 case 6:return 30;break;
 case 7:return 31;break;
 case 8:return 31;break;
 case 9:return 30;break;
 case 10:return 31;break;
 case 11:return 30;break;
 case 12:return 31;break;
 default:return 30;
 }
}
function getmysqlnow(){
    var time = new Date();

    var month=time.getMonth()+1;
    var day=time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();

    month=((month < 10) ? "0" : "") + month;
    day=((day < 10) ? "0" : "") + day;
    hours=((hours < 10) ? "0" : "") + hours;
    minutes=((minutes < 10) ? "0" : "") + minutes;

    //return time.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes+":00";
    return time.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes;
}
function getMysqlToDisplayFromat(_date,_format){
  $components=_date.split("-");
  if(_format==""){_format="m-d-y";  }
  if(_format=="m-d-y"){
    return $components[2]+"-"+$components[1]+"-"+$components[0].substring(2,5);
  }
}