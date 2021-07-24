/**
 * Citation logic
 * See selections.js for form selections and dropdowns, etc
 */

// Run cite() on button click
document.getElementById('cite-id').addEventListener('click', () => {
    if (document.getElementById('title').value && document.getElementById('url').value) cite();
});

// Main cite() function
function cite() {
    const citation_format = document.getElementById('citation-format');

    // Get all authors
    // Format: [[fname, mname, lname], [fname, mname, lname], ]
    let authors = [];
    for (i=1; i<=authors_amount; i++) {
        let author = [];
        author.push(document.getElementById(`author${i}-fname`).value);
        author.push(document.getElementById(`author${i}-mname`).value);
        author.push(document.getElementById(`author${i}-lname`).value);
        authors.push(author);
    }
    // Get other info
    let title = document.getElementById('title').value;
    let website_title = document.getElementById('website-title').value;
    let publisher = document.getElementById('publisher').value;
    let url = document.getElementById('url').value;
    let date_published = document.getElementById('publish-date').value;
    let date_accessed = document.getElementById('access-date').value;

    // Create citation
    // See mla8/js or apa7.js for citation classes
    let cite;
    if (citation_format.value == 'mla8') {
        cite = new MLA8(
            authors,
            title,
            website_title,
            publisher,
            url,
            date_published,
            date_accessed
        )
    } else if (citation_format.value == 'apa7') {
        cite = new APA7(
            authors,
            title,
            website_title,
            publisher,
            url,
            date_published,
            date_accessed
        )
    } else {
        window.alert('Please choose a citation format');
    }
    // Show citation on screen
    newAlert(`
        <div class="alert alert-success" role="alert">
            <p style="font-family: 'Times New Roman', Times, serif; font-size: 18px;">
                ${cite.getCitation()}
            </p>
        </div>
    `);

};