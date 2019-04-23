const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');

confirmBtn.addEventListener('click', () => {
    // console.log('Confirm Button Pressed');
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    // console.log(enteredReason);
    // console.log(enteredAmount);

    if(
        enteredReason.trim().length <= 0 ||
        enteredAmount <= 0 ||
        enteredAmount.trim().length <0
    ) {
        return;
    }
    console.log(enteredReason, enteredAmount);
})

cancelBtn.addEventListener('click', () => {
    console.log('Cancel Button Pressed');
})