const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: {
    list: {
      url: "https://www.cineplexx.at/kinos/",
      box: ".media",
      website: ".media-body-footer a @href",

      name: "a @title",
      address: ".gray-font",
      phone: ".gray-font",
      slug: {
        selector: "h2",
        mapper: (h2) => h2.split(" ").join("-"),
      },
    },
  },

  showtimes: {
    url: ":cinema.website:",
    movies: {
      box: ".overview-element",
      title: "h2",
      showtimes: {
        box: ":box",
        date: "p:has(span) @ownText()",
        dateFormat: "DD.MM.YYYY",
        time: ".time-desc:first @ownText()",
        timeFormat: "HH:mm",
      },
    },
  },
});
crawlE.crawl();
