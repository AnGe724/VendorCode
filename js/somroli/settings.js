//following settings are entered by user should be saved locally
if(document.location.hostname=="brahma-new" || document.location.hostname=="localhost"){
  var SERVER="localhost/stage";
}
else {
  var SERVER="devbox.somroli.com/stage";
}

var WSDL_PATH="http://"+SERVER+"/mobileserver1/somroliMobileTxnServer.php?wsdl";
var JSON_PATH="http://"+SERVER+"/mobileserver1/somroliMobileJSONServer.php";
var PHOTOPUNCH_SERVER_FILE_PATH="http://"+SERVER+"/mobileserver1/uploadpunchphoto.php";
//var WSDL_PATH=SERVER+"somrolimobile.wsdl";
var CUSTOMER_CODE='';
var CUSTOMER_KEY='';

var EMPLOYEE_ID='';
var EMPLOYEE_PASSWORD='';
var EMPLOYEE_FIRST_NAME='';
var EMPLOYEE_LAST_NAME='';
var SEL_SITE_ID='';
var ATT_VERIFIED=20;
//following settings are downloaded from server based on user settings
var WORK_CODES;
var PTO_CODES;
var SITE_LIST; /*array of id=>name*/
var EXTRA_PAY_CODES;
var PAID_BREAK_STATUS_CODE;
var EMP_DEFAULT_WORKCODE;
var ENABLE_PUNCH_PHOTO=true;
var ENABLE_GEOLOCATION_FOR_PUNCH=true;
//MODULE ENABLEMENT
var CLOCK_TOOL=true;
var EXTRAPAY_TOOL =false;
var PTO_REQUEST=true;
var MONITOR=true;

//following codes are predefined
var STATUS_CODE_CLOCKIN=0;
var STATUS_CODE_CLOCKOUT=1;
var STATUS_CODE_BREAKOUT=2;
var STATUS_CODE_BREAKIN=3;


//GEOLOCATION
var LATITUDE;
var LONGITUDE;
var ALTITUDE;
var ACCURACY;
var ALTITUDEACCURACY;
var HEADING;
var SPEED;
var GEO_LOC_FETCHING=false;

var DEBUG_MODE=false;
function load_settings(){
  var settingsData = JSON.parse(window.localStorage.getItem('settings'));
  if(settingsData != null){
	  //codes
	  WORK_CODES=settingsData['WORK_CODES'];
	  PTO_CODES=settingsData['PTO_CODES'];
	  SITE_LIST=settingsData['SITE_LIST'];
	  PAID_BREAK_STATUS_CODE=settingsData['PAID_BREAK_STATUS_CODE'];
	  EXTRA_PAY_CODES=settingsData['EXTRA_PAY_CODES'];
	  CUSTOMER_CODE=settingsData['CUSTOMER_CODE'];
	  CUSTOMER_KEY=settingsData['CUSTOMER_KEY'];

	  //emp info
	  if(settingsData['EMPLOYEE_ID'] != null)EMPLOYEE_ID=settingsData['EMPLOYEE_ID']; else EMPLOYEE_ID="";
	  if(settingsData['EMPLOYEE_PASSWORD'] != null)EMPLOYEE_PASSWORD=settingsData['EMPLOYEE_PASSWORD'];else EMPLOYEE_PASSWORD="";
	  if(settingsData['EMPLOYEE_FIRST_NAME'] != null)EMPLOYEE_FIRST_NAME=settingsData['EMPLOYEE_FIRST_NAME']; else EMPLOYEE_FIRST_NAME="";
	  if(settingsData['EMPLOYEE_LAST_NAME'] != null)EMPLOYEE_LAST_NAME=settingsData['EMPLOYEE_LAST_NAME']; else EMPLOYEE_LAST_NAME="";
	  if(settingsData['SEL_SITE_ID'] != null)SEL_SITE_ID=settingsData['SEL_SITE_ID']; else SEL_SITE_ID="";

	  //default these settings are on
	  if(settingsData['ENABLE_PUNCH_PHOTO'] != null)ENABLE_PUNCH_PHOTO=settingsData['ENABLE_PUNCH_PHOTO']; 
	  if(settingsData['ENABLE_GEOLOCATION_FOR_PUNCH'] != null)ENABLE_GEOLOCATION_FOR_PUNCH=settingsData['ENABLE_GEOLOCATION_FOR_PUNCH']; 

  }
  //if(CUSTOMER_CODE=='1'){DEBUG_MODE=true;}
  _debug=window.localStorage.getItem('DEBUG_SWITCH');
  if(_debug=='1'){DEBUG_MODE=true;}
  //myalert(JSON.stringify(settingsData));
}
function updateSetting(_name,_value){
  var settingsData = JSON.parse(window.localStorage.getItem('settings'));
  if(settingsData != null){
    settingsData[_name]=_value;
    //myalert(JSON.stringify(settingsData));
    window.localStorage.setItem('settings', JSON.stringify(settingsData));
  }

}

///////////COMMON STORAGE FUNCTIONS//////////
function removeLocalStorageItem(itemname){
  window.localStorage.removeItem(itemname);
}

//sent value is array
function saveLocalStorage(_name,_value){
    window.localStorage.setItem(_name,JSON.stringify( _value));
}
//return value is array
function getLocalStorage(_name){

    return JSON.parse(window.localStorage.getItem(_name));
}
//return value is json
function getLocalStorageJSON(_name){

    return window.localStorage.getItem(_name);
}