var authors_amount = 1;

// Show alert
function newAlert(alert = '') {
    var alert_section = document.getElementById('alert');
    alert_section.innerHTML = alert;
}

// Citation type dropdown
let citation_type = document.getElementById('citation-type');
citation_type.onchange = () => {
    if (citation_type.value != 'Website') {
        newAlert(`
            <div class="alert alert-danger" role="alert">
                This option is not available yet.
            </div>
        `);
    } else {
        newAlert();
    }
};

// Add author
let add_author_btn = document.getElementById('add-author-btn');
add_author_btn.addEventListener('click', () => {
    authors_amount += 1;
    let authors_div = document.getElementById('authors');
    authors_div.innerHTML = authors_div.innerHTML + `
    <div class="author" id="author${authors_amount}">
        <h4 class="text-white">Author ${authors_amount}</h4>
        <input type="text" name="author${authors_amount}-fname" id="author${authors_amount}-fname" placeholder="First name">
        <input type="text" name="author${authors_amount}-mname" id="author${authors_amount}-mname" placeholder="Middle name">
        <input type="text" name="author${authors_amount}-lname" id="author${authors_amount}-lname" placeholder="Last name">
    </div>
    `;
});

// Remove author
let remove_author_btn = document.getElementById('remove-author-btn');
remove_author_btn.addEventListener('click', () => {
    if (authors_amount != 1) {
        document.getElementById(`author${authors_amount}`).remove();
        authors_amount -= 1;
    }
});