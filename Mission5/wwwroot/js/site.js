
// Write your JavaScript code.

$('#calcPriceButton').click(function () {
    if ($.isNumeric($('#hoursInput').val()) && $('#hoursInput').val() >= 0)
    {$('#priceOutput').text("$" + ($('#hoursInput').val() * $('#price').val()).toFixed(2))}
    else {$('#priceOutput').text("Cannot calculate price, please enter a positive number.")}
})
