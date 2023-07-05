const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "TCL Chinese Theatres",
      address: "6925 Hollywood Blvd, Hollywood, CA 90028",
      website: "http://www.tclchinesetheatres.com/",
      phone: "+1 323 461 3331",
    },
  ],

  showtimes: {
    url: "https://tickets.tclchinesetheatres.com/Browsing/Cinemas/Details/0001",
    movies: {
      box: ".film-item",
      title: "h3.film-title",
      showtimes: {
        box: ".session-times",
        datetime: "time @datetime",
        datetimeLocale: "en-US",
        datetimeFormat: "YYYY-MM-DDTHH:mm:ss",
      },
    },
  },
});

crawlE.crawl();
