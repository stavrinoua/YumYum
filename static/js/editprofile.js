function unhide(clickedButton, divID) {
    var item = document.getElementById(divID);
    if (item) {
        if (item.className == 'hidden') {
            item.className = 'unhidden';
            clickedButton.value = 'Edit Profile'
        } else {
            item.className = 'hidden';
            clickedButton.value = 'Edit Profile'
        }
    }
}