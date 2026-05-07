document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value
     const accountNumber = document.getElementById('account-number').value
     const addAmount = parseInt(document.getElementById('add-amount').value)

     const addPin =parseInt( document.getElementById('add-pin').value)
    const availableBalance = parseInt( document.getElementById('available-balance').innerText)
   const totalNewAvailableBalance = addAmount + availableBalance;
   document.getElementById('available-balance').innerText = totalNewAvailableBalance;

})