const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "MULTIKULTURELLES CENTRUM TEMPLIN E. V.",
      address: "Prenzlauer Allee 617268 Templin / Uckermark",
      website: "https://www.mkc-templin.de",
      phone: "03987/551063",
    },
  ],
  showtimes: {
    url: "https://www.mkc-templin.de/kino/kino-im-mkc/",
    movies: {
      box: ".list-item-kino",
      title: "h3",
      dates: {
        box: ".item-spielzeit",
        date: ".tag",
        dateLocale: "de",
        dateFormat: "dd. DD.MM.",
        showtimes: {
          box: ".zeit",
          time: {
            selector: ".spielzeit",
            mapper: (value) => value.replace(/[Uhr]/g, "").replace(/\s+/g, ""),
          },
        },
      },
      attributes: ".genre span",
    },
  },
});
crawlE.crawl();
