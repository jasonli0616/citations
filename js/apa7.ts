/**
 * APA7 citation class
 * TS compiled to JS
 */

class APA7 {

    authors: string;
    title: string;
    website_title: string;
    url: string;
    date_published: string;
    date_accessed: string;

    constructor(
        authors: Array<String>, // [[fname, mname, lname], [fname, mname, lname]]
        title: string,
        website_title: string,
        publisher: string,
        url: string,
        date_published: string,
        date_accessed: string
    ) {
        this.authors = this.getAuthors(authors);
        this.title = this.getTitle(title) + " ";
        this.website_title = this.getWebsiteTitle(website_title);
        this.url = this.getURL(url);
        this.date_published = this.getDate(date_published);
        this.date_accessed = this.getDate(date_accessed, true);
    }

    getAuthors(authors: Array<String>): string {
        let authorsString = "";

        if (authors.length == 1 && !authors[0][0] && !authors[0][2]) return "";
        if (authors.length > 2 && authors[0]) {
            if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0]} ${authors[0][1]}, et al.`;
            else authorsString = `${authors[0][2]}, ${authors[0][0]}, et al.`;

        } else if (authors.length > 1 && (authors[0] && authors[1])) {
            if (authors[0][1] && authors[1][1]) authorsString = `${authors[0][2]}, ${authors[0][0][0]}. ${authors[0][1][0]}., & ${authors[1][0]}, ${authors[1][1][0]} ${authors[1][2][0]}.`;
            else if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0][0]}. ${authors[0][1][0]}., & ${authors[1][0]}, ${authors[1][2][0]}.`;
            else if (authors[1][1]) authorsString = `${authors[0][2]}, ${authors[0][0][0]}., & ${authors[1][0]}, ${authors[1][1][0]}. ${authors[1][2]}.`;
            else `${authors[0][2]}, ${authors[0][0][0]}., & ${authors[1][0]}, ${authors[1][2][0]}.`;

        } else {
            if (authors[0][1]) authorsString = `${authors[0][2]}, ${authors[0][0][0]}. ${authors[0][1][0]}.`;
            else if (authors[0][0] && !authors[0][2] && !authors[0][1]) authorsString = `${authors[0][0]}.`;
            else if (authors[0][2] && !authors[0][0] && !authors[0][1]) authorsString = `${authors[0][2]}.`;
            else if (authors[0][1] && !authors[0][0] && !authors[0][2]) authorsString = `${authors[0][1]}.`;
            else authorsString = `${authors[0][2]}, ${authors[0][0][0]}.`;
        }

        return authorsString + " ";
    }

    getTitle(title: string): string {
        if (title == "") return "";
        if (title.charAt(title.length - 1) != ".") return `"${title}."`
        else return `"${title}"`;
    }

    getWebsiteTitle(website_title: string): string {
        if (website_title == "") return "";
        return `<em>${website_title}</em>,` + " ";
    }

    getURL(url: string): string {
        if (url == "") return "";
        return `from ${url}.`;
    }

    getDate(date: string, accessed: boolean = false): string {
        if (!date) return "";
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        let d = new Date(date);
        let dateStr = `${d.getUTCFullYear()}, ${months[d.getUTCMonth()]} ${d.getUTCDate()}`;
        let dateStrAccessed = `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;

        if (accessed) return `Retrieved ${dateStrAccessed},` + " ";
        return `(${dateStr}).` + " ";
    }

    getCitation(): string {
        let citation = "";
        if (!this.authors && this.title) citation += this.title;
        else if (this.authors) citation += this.authors;
        if (this.date_published != undefined) citation += this.date_published;
        if (this.title && !(!this.authors && this.title)) citation += this.title;
        if (this.website_title) citation += this.website_title;
        if (this.date_accessed) citation += this.date_accessed;
        if (this.url) citation += this.url;

        return citation.trim();
    }
}