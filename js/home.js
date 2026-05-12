const validPin = 1234;
const transactionData = []

//function to get input value
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber;
}
function getInputValue(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value

    return inputFieldValue;
}

//function to get innertext
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elemenrValueNumber = parseInt(elementValue)
    return elemenrValueNumber;
}

//function to set innertext
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value;
    return
}

//function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")

    for (const form of forms) {
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'

}

//function to toggle button
function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn')
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874F2]', 'bg-[#0874F20D]')

        // btn.classList.add('border-gray-300')
    }

    // document.getElementById('add-button').classList.remove('border-gray-300')

    document.getElementById(id).classList.add('border-[#0874F2]', 'bg-[#0874F20D]')

}

//add money
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = getInputValue('bank')

    const accountNumber = getInputValue('account-number')

    const addAmount = getInputValueNumber('add-amount')
    if(addAmount <=  0){
        alert('invalid amount')
        return
    }

    const addPin = getInputValueNumber('add-pin')


    const availableBalance = getInnerText('available-balance')

    if (accountNumber.length < 11) {
        alert('please provide valid account number')
        return
    }

    if (addPin !== validPin) {
        alert('please provide valid pin')
        return

    }
    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById
    setInnerText(totalNewAvailableBalance)
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)



})


//cashout money feature
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const agentNumber = getInputValueNumber('agent-number')



    const withdrawAmount = getInputValueNumber('withdraw-amount')
    const addPin = getInputValueNumber('add-pin')


    const availableBalance = getInnerText('available-balance')




    const totalNewAvailableBalance = availableBalance - withdrawAmount;


    setInnerText(totalNewAvailableBalance)
    const data = {
        name: 'Cash out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    // console.log(transactionData)


})

document.getElementById('transactions-button').addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""
    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 mb-4 flex justify-between items-center">
                    <!-- img? -->
                    <div class="flex items-center">
                        <div class="bg-[#f4f5f7] rounded-full p-3 mr-4 ">
                            <img src="./assets/opt-1.png" alt="">

                        </div>
                        <div>
                            <h1 class="font-semibold text-xl text-[#080808] pl-2 ">${data.name}</h1>
                            <p>${data.date}</p>
                        </div>

                    </div>
                    <!-- icon -->
                    <div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>

                    </div>
                </div>

        `
        transactionContainer.appendChild(div)
    }


})


// toggling feature

document.getElementById('add-button').addEventListener('click', function (e) {

    handleToggle('add-money-parent');
    handleButtonToggle('add-button')





})
document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent')

    handleButtonToggle('cash-out-button')

})
document.getElementById('transfer-button').addEventListener('click', function () {
    handleToggle('transfer-money-parent');

    handleButtonToggle('transfer-button')

})
document.getElementById('get-bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent');

    handleButtonToggle('get-bonus-button')



})
document.getElementById('pay-bill-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent');

    handleButtonToggle('pay-bill-button')

})
document.getElementById('transactions-button').addEventListener('click', function () {
    handleToggle('transactions-parent');


    handleButtonToggle('transactions-button')



})








