"use strict";

const $ = selector => document.querySelector(selector);

function processEntries() {
	var subtotal = document.getElementById('subtotal').value;
	var tax_rate = document.getElementById('tax_rate').value;
	if (parseFloat(subtotal) < 0 || parseFloat(subtotal) > 10000) {
		alert("Enter subtotal value between 1 - 10000");
	}
	else if (parseFloat(tax_rate) < 0 || parseFloat(tax_rate) > 10000) {
		alert("Enter tax rate value between 1 - 12");
	}
	else {
		var tax = (parseFloat(subtotal) * parseFloat(tax_rate)) / 100;
		var total = parseFloat(tax) + parseFloat(subtotal);
		document.getElementById("sales_tax").value = tax.toFixed(2);
		document.getElementById("total").value = total.toFixed(2);
	}
}

function clearForm() {
	document.getElementById('subtotal').value = "";
	document.getElementById('tax_rate').value = "";
	document.getElementById('sales_tax').value = "";
	document.getElementById('total').value = "";
}