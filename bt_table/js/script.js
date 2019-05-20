// sắp xếp thứ tự các mục
let tbody = $('#table_body');
function sort_name(){

    tbody.find('tr').sort(function(a, b) {
        if ($('#name_order').val() == 'asc'){
            return $('td:nth-child(2)', a).text().localeCompare($('td:nth-child(2)', b).text());
        }
        else{
            return $('td:nth-child(2)', b).text().localeCompare($('td:nth-child(2)', a).text());
        }

    }).appendTo(tbody);

    let sort_order = $('#name_order').val();
    if (sort_order == "asc"){
        document.getElementById("name_order").value = "desc";
    }
    if (sort_order == "desc"){
        document.getElementById("name_order").value = "asc";
    }
}

function sort_code(){

    tbody.find('tr').sort(function(a, b) {
        if ($('#code_order').val() == 'asc'){
            return $('td:nth-child(3)', a).text().localeCompare($('td:nth-child(3)', b).text());
        }
        else{
            return $('td:nth-child(3)', b).text().localeCompare($('td:nth-child(3)', a).text());
        }

    }).appendTo(tbody);

    let sort_order = $('#code_order').val();
    if (sort_order == "asc"){
        document.getElementById("code_order").value = "desc";
    }
    if (sort_order == "desc"){
        document.getElementById("code_order").value = "asc";
    }
}

function sort_price(){

    tbody.find('tr').sort(function(a, b) {
        if ($('#price_order').val() == 'asc'){
            return $('td:nth-child(4)', a).text() - ($('td:nth-child(4)', b).text());
        }
        else{
            return $('td:nth-child(4)', b).text() - ($('td:nth-child(4)', a).text());
        }

    }).appendTo(tbody);

    let sort_order = $('#price_order').val();
    if (sort_order == "asc"){
        document.getElementById("price_order").value = "desc";
    }
    if (sort_order == "desc"){
        document.getElementById("price_order").value = "asc";
    }
}

function sort_amount(){

    tbody.find('tr').sort(function(a, b) {
        if ($('#amount_order').val() == 'asc'){
            return $('td:nth-child(5)', a).text() - ($('td:nth-child(5)', b).text());
        }
        else{
            return $('td:nth-child(5)', b).text() - ($('td:nth-child(5)', a).text());
        }

    }).appendTo(tbody);

    let sort_order = $('#amount_order').val();
    if (sort_order == "asc"){
        document.getElementById("amount_order").value = "desc";
    }
    if (sort_order == "desc"){
        document.getElementById("amount_order").value = "asc";
    }
}



