const RSS_URL = `https://blog.rust-lang.org/feed.xml`;

fetch(RSS_URL)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data)
        let html = ''
        const items = data.querySelectorAll("entry");
        items.forEach((el, nb) => {
            if (nb > 5){
                return;
            }

            const title = el.querySelector('title').textContent;
            const link = el.querySelector('link').getAttribute('href');

            html += createArticle(title, link)
        })

        document.getElementById('rust-news-feed').innerHTML = "<ul>" + html + "</ul>";
    })

function createArticle(title, link) {
    return "<li><a href=" + link + ">" + title + "</a></li>"
}