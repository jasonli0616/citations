/**
 * MLA8 citation class
 */

class MLA8 {
    constructor(
        authors, // [[fname, mname, lname], [fname, mname, lname]]
        title, // str
        website_title, // str
        publisher, // str
        url, // str
        date_published, // str
        date_accessed // str
    ) {
        this.authors = this.getAuthors(authors);
        this.title = this.getTitle(title) + " ";
        this.website_title = this.getWebsiteTitle(website_title);
        this.publisher = this.getPublisher(publisher);
        this.url = this.getURL(url);
        this.date_published = this.getDate(date_published);
    }

    getAuthors(authors) {
        let authorsString = "";

        if (authors.length == 1 && !authors[0][0] && !authors[0][2]) return "";
        if (authors.length > 2 && authors[0]) {
            if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} ${authors[0][1]}, et al.`;
            else authorsString = `${authors[0][2]}, ${authors[0][0]}, et al.`;

        } else if (authors.length > 1 && (authors[0] && authors[1])) {
            if (authors[0][1] && authors[1][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} ${authors[0][1]} and ${authors[1][0]} ${authors[1][1]} ${authors[1][2]}.`;
            else if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} ${authors[0][1]} and ${authors[1][0]}, ${authors[1][2]}.`;
            else if (authors[1][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} and ${authors[1][0]}, ${authors[1][1]} ${authors[1][2]}.`;
            else `${authors[0][2]}, ${authors[0][0]} and ${authors[1][0]}, ${authors[1][2]}.`;

        } else {
            if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} ${authors[0][1]}.`;
            else if (authors[0][0] && !authors[0][2] && !authors[0][1]) authorsString = `${authors[0][0]}.`;
            else if (authors[0][2] && !authors[0][0] && !authors[0][1]) authorsString = `${authors[0][2]}.`;
            else if (authors[0][1] && !authors[0][0] && !authors[0][2]) authorsString = `${authors[0][1]}.`;
            else authorsString = `${authors[0][2]}, ${authors[0][0]}.`;
        }

        return authorsString + " ";
    }

    getTitle(title) {
        if (title == "") return "";
        if (title.charAt(title.length - 1) != ".") return `"${title}."`
        else return `"${title}"`;
    }

    getWebsiteTitle(website_title) {
        if (website_title == "") return "";
        return `<em>${website_title}</em>,` + " ";
    }

    getPublisher(publisher) {
        if (publisher == "") return "";
        return `${publisher},` + " ";
    }

    getURL(url) {
        if (url == "") return "";
        return `${url}.`;
    }

    getDate(date) {
        if (!date) return "";
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        let d = new Date(date);
        let dateStr = `${d.getUTCDate()} ${months[d.getUTCMonth()]}. ${d.getUTCFullYear()}`;
        return `${dateStr},` + " ";
    }

    getCitation() {
        let citation = "";
        if (this.authors) citation += this.authors;
        if (this.title) citation += this.title;
        if (this.website_title) citation += this.website_title;
        if (this.publisher) citation += this.publisher;
        if (this.date_published != undefined) citation += this.date_published;
        if (this.url) citation += this.url;

        return citation.trim();
    }
}