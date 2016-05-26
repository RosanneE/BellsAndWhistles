function modify_qty(val,qtya) {
    var qty = document.getElementById(qtya).value;
    var new_qty = parseInt(qty,10) + val;
    
    document.getElementById(qtya).value = new_qty;
    return new_qty;
}
