const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: {
    list: {
      url: "https://www.cwtheaters.com/",
      box: ".footer__location",
      website: {
        selector: "a",
        attribute: "href",
        mapper: (href) => `https://www.cwtheaters.com${href}`,
      },

      name: "h2",
      address: ".footer__locationText",
      phone: ".footer__locationText a",
      slug: {
        selector: "h2",
        mapper: (h2) => h2.split(" ").join("-"),
      },
    },
  },
  showtimes: {
    url: ":cinema.website:/?date=:date:",
    urlDateFormat: "YYYY-MM-DD",
    movies: {
      box: ".nowPlaying__content",
      title: "h3",
      showtimes: {
        box: ".button--showtime",
        time: "span",
        timeFormat: "h:mm A",
        // timeLocale: "en-US",
      },
    },
  },
});
crawlE.crawl();
