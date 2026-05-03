const RSS_URL_BLOG = 'https://blog.rust-lang.org/feed.xml';
const RSS_URL_SECU = 'https://rustsec.org/feed.xml';

function fetchNewsFeed(rss_url, html_id) {
    fetch(rss_url)
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

            document.getElementById(html_id).innerHTML = "<ul>" + html + "</ul>";
        })
}

function createArticle(title, link) {
    return "<li><a href=" + link + ">" + title + "</a></li>"
}

fetchNewsFeed(RSS_URL_BLOG, 'rust-blog-feed');
fetchNewsFeed(RSS_URL_SECU, 'rust-secu-feed');