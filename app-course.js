const courseName = document.querySelector('#input-name');
const courseRating = document.querySelector('#input-rating');
const addBtn = document.querySelector('#btn-confirm');
const alert = document.querySelector('ion-alert-controller');
const courseList = document.querySelector('#course-list');

const clear = () => {
    courseName.value = '';
    courseRating.value = '';
}

addBtn.addEventListener('click', () => {
    // console.log('Confirm Button Pressed');
    const enteredName = courseName.value;
    const enteredRating = courseRating.value;
    // console.log(enteredReason);
    // console.log(enteredAmount);

    if(
        enteredName.trim().length <= 0 ||
        enteredRating <= 0 ||
        enteredRating > 5 ||
        enteredRating.trim().length <0
    ) {
        alert.create({
            message: 'Please enter a valid reason and amount', 
            header: 'Invalid Input',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
     const newItem = document.createElement('ion-item');
     newItem.textContent = enteredName + ' - ' + enteredRating + '/5';
     courseList.appendChild(newItem);

    clear();
})
