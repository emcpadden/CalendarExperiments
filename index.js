function showDayDetailPanel(row, col) {
	// first see if the detail panel is already being displayed
	
}

function handleDayClick(event) {
	var $dayElement = $(this);
	var row = $dayElement.closest('.week').data('week-row');
	var col = $dayElement.data('day-column');
}