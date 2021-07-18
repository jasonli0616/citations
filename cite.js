/**
 * Citation logic
 * See selections.js for form selections and dropdowns, etc
 */

document.getElementById('cite-id').addEventListener('click', () => {
    if (document.getElementById('title').value && document.getElementById('url').value) cite();
});

function cite() {
    const citation_format = document.getElementById('citation-format');

    let authors = [];
    for (i=1; i<=authors_amount; i++) {
        let author = [];
        author.push(document.getElementById(`author${i}-fname`).value);
        author.push(document.getElementById(`author${i}-mname`).value);
        author.push(document.getElementById(`author${i}-lname`).value);
        authors.push(author);
    }
    let title = document.getElementById('title').value;
    let website_title = document.getElementById('website-title').value;
    let publisher = document.getElementById('publisher').value;
    let url = document.getElementById('url').value;
    let date_published = document.getElementById('publish-date').value;
    let date_accessed = document.getElementById('access-date').value;

    if (citation_format.value == 'mla8') {
        let cite = new MLA8(
            authors,
            title,
            website_title,
            publisher,
            url,
            date_published,
            date_accessed
        )
        newAlert(`
            <div class="alert alert-success" role="alert">
                <p style="font-family: 'Times New Roman', Times, serif; font-size: 18px;">
                    ${cite.getCitation()}
                </p>
            </div>
        `);
    }
    else if (citation_format.value == 'apa7') {
        let cite = new APA7(
            authors,
            title,
            website_title,
            publisher,
            url,
            date_published,
            date_accessed
        )
        newAlert(`
            <div class="alert alert-success" role="alert">
                <p style="font-family: 'Times New Roman', Times, serif; font-size: 18px;">
                    ${cite.getCitation()}
                </p>
            </div>
        `);
    }

};