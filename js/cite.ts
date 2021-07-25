/**
 * Citation logic
 * TS compiled to JS
 * See selections.js for form selections and dropdowns, etc
 */

// Run cite() on button click
document.getElementById('cite-id').addEventListener('click', () => {
    if ((document.getElementById('title') as HTMLInputElement).value && (document.getElementById('url') as HTMLInputElement).value) cite();
});

// Main cite() function
const cite = () => {
    const citation_format = document.getElementById('citation-format') as HTMLInputElement;

    // Get all authors
    // Format: [[fname, mname, lname], [fname, mname, lname], ]
    let authors = [];
    for (let i=1; i<=authors_amount; i++) {
        let author = [];
        author.push((document.getElementById(`author${i}-fname`) as HTMLInputElement).value);
        author.push((document.getElementById(`author${i}-mname`) as HTMLInputElement).value);
        author.push((document.getElementById(`author${i}-lname`) as HTMLInputElement).value);
        authors.push(author);
    }
    // Get other info
    let title: string = (document.getElementById('title') as HTMLInputElement).value;
    let website_title: string = (document.getElementById('website-title') as HTMLInputElement).value;
    let publisher: string = (document.getElementById('publisher') as HTMLInputElement).value;
    let url: string = (document.getElementById('url') as HTMLInputElement).value;
    let date_published: string = (document.getElementById('publish-date') as HTMLInputElement).value;
    let date_accessed: string = (document.getElementById('access-date') as HTMLInputElement).value;

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