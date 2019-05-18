let sortedOn = 0;
function sort1(sortOn) {
   let table = document.getElementById('table');
   let tbody = table.getElementsByTagName('tbody')[0];
   let rows = tbody.getElementsByTagName('tr');
   let rowArray = new Array();
    for (let i = 0, length = rows.length; i < length; i++) {
        rowArray[i] = new Object;
        rowArray[i].oldIndex = i;
        rowArray[i].value = rows[i].getElementsByTagName('td')[sortOn].firstChild.nodeValue;
    }
    if (sortOn == sortedOn) { rowArray.reverse(); }
    else {
        sortedOn = sortOn;
        /*
        Decide which function to use from the three:RowCompareNumbers,
        RowCompareDollars or RowCompare (default).
        For first column, I needed numeric comparison.
        */
        if (sortedOn == 0) {
            rowArray.sort(RowCompareNumbers);
        }
        else {
            rowArray.sort(RowCompare);
        }
    }
    let newTbody = document.createElement('tbody');
    for (let i = 0, length = rowArray.length; i < length; i++) {
        newTbody.appendChild(rows[rowArray[i].oldIndex].cloneNode(true));
    }
    table.replaceChild(newTbody, tbody);
}
function RowCompare(a, b) {
    var aVal = a.value;
    var bVal = b.value;
    return (aVal == bVal ? 0 : (aVal > bVal ? 1 : -1));
}
// Compare number
function RowCompareNumbers(a, b) {
    var aVal = parseInt(a.value);
    var bVal = parseInt(b.value);
    return (aVal - bVal);
}
// compare currency
function RowCompareDollars(a, b) {
    var aVal = parseFloat(a.value.substr(1));
    var bVal = parseFloat(b.value.substr(1));
    return (aVal - bVal);
}
