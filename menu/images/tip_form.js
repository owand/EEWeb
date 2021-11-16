// Tipue 1.63


// ---------- script properties ----------


var results_location = "../find/results.html";


// ---------- end of script properties ----------


function search_form(tip_Form) {
	if (tip_Form.d.value.length > 0) {
		document.cookie = 'tid=' + escape(tip_Form.d.value) + '; path=/';
		document.cookie = 'tin=0; path=/';
		parent.main.location.href = results_location;
	}
}
