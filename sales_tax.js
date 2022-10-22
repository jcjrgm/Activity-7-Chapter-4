"use strict";

const $ = selector => document.querySelector(selector);

var processEntries=function(){
	if($('subtotal').value<10000 && $('subtotal').value>0 && $('tax_rate').value>0 && $('tax_rate').value<12 ) {
		$('sales_tax').value = ($('subtotal').value*$('tax_rate').value)/100;
		$('total').value = parseFloat($('sales_tax').value)+parseFloat($('subtotal').value);
		$('subtotal').focus();
	}

	else {
		alert("Subtotal must be >0 and <10000 \n Tax rate must be >0 and <12")
	}

}

var clearEntries=function(){
$('sales_tax').value='';
$('total').value='';
$('subtotal').value='';
$('tax_rate').value='';
$('subtotal').focus();
}

var clearSubtotal=function(){
$('subtotal').value='';
}

var clearTaxRate=function(){
$('tax_rate').value='';
}

window.onload=function(){
$('subtotal').focus();
$('calculate').onclick=processEntries;
$('clear').onclick=clearEntries;
$('subtotal').onclick=clearSubtotal;
$('tax_rate').onclick=clearTaxRate;
};