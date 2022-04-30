// JavaScript Document - By Shani Shashidharan
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
//Date today
var adi_date = new Date();
var adi_month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var aditoday = adi_month[adi_date.getMonth()] + " " + adi_date.getDate() + ", " + adi_date.getFullYear();
