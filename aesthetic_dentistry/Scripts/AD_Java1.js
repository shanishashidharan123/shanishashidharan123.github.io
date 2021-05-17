// JavaScript Document
function openservices() {
	MM_changeProp('services','','display','block','DIV');
	MM_changeProp('AD_Procedure','','display','none','DIV');
	MM_changeProp('AD_Procedure2','','display','none','DIV')
	MM_changeProp('DentalConditions','','display','none','DIV');
	MM_changeProp('DentalConditions2','','display','none','DIV');
}

function openprocedures() {
	MM_changeProp('services','','display','none','DIV');
	MM_changeProp('AD_Procedure','','display','block','DIV');
	MM_changeProp('AD_Procedure2','','display','block','DIV')
	MM_changeProp('DentalConditions','','display','none','DIV');
	MM_changeProp('DentalConditions2','','display','none','DIV');
}

function openconditions() {
	MM_changeProp('services','','display','none','DIV');
	MM_changeProp('AD_Procedure','','display','none','DIV');
	MM_changeProp('AD_Procedure2','','display','none','DIV')
	MM_changeProp('DentalConditions','','display','block','DIV');
	MM_changeProp('DentalConditions2','','display','block','DIV');
}
function closeall() {
	MM_changeProp('services','','display','none','DIV');
	MM_changeProp('AD_Procedure','','display','none','DIV');
	MM_changeProp('AD_Procedure2','','display','none','DIV');
	MM_changeProp('DentalConditions','','display','none','DIV');
	MM_changeProp('DentalConditions2','','display','none','DIV');
}
function openclosevideo(vid1, vid2) {
	MM_changeProp(vid1,'','display','none','DIV');
	MM_changeProp(vid2,'','display','block','DIV');
}
function close_X() {
	MM_changeProp('AFP','','display','none','DIV');
	MM_changeProp('AFP2','','display','none','DIV');
}
//--------------- LOCALIZEABLE GLOBALS ---------------
var d=new Date();
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
//Ensure correct for language. English is "January 1, 2004"
var TODAY = monthname[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
//---------------   END LOCALIZEABLE   ---------------
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_changeProp(objId,x,theProp,theValue) { //v9.0
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}
//end