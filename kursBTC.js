function moneyConvector(){
    var BTC,DOL;
    BTC = document.getElementById('kursBTC').value;
    DOL = document.getElementById('dollars').value;
    result = DOL / BTC;
    document.getElementById('outputbtc').innerHTML = result.toFixed(8);
    
}