const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Burg Kino",
      address: "Opernring 191010 Vienna, Austria",
      website: "https://www.burgkino.at",
      phone: "+43 1 587 84 06",
    },
  ],

  movies: {
    list: {
      url: "https://www.burgkino.at/showtimes/today",
      box: ".view-content .col-sm-12",
      title: "a @ownText()",
      href: "a @href",
    },
    showtimes: {
      url: "https://www.burgkino.at:movie.href:",
      showtimes: {
        box: "time",
        datetime: "@datetime",
        datetimeFormat: "YYYY-MM-DDTHH:mm:ssZ",
        datetimeLocale: "en-US",
      },
    },
  },
});
crawlE.crawl();
