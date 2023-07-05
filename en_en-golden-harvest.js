const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: {
    list: {
      url: "https://www.goldenharvest.com/cinema/",
      box: ".Cinemas_list li",
      website: (box) => {
        const a = box.attr("onclick").match(/'([^']+)'/)[1];

        return `https://www.goldenharvest.com${a}`;
      },
      address: ".cover-left p:first",
      name: ".cover-left h1",
      phone: ".cover-left p:nth-child(3)",
      slug: {
        selector: ".cover-left h1",
        mapper: (h2) => h2.split(" ").join("-"),
      },
    },
  },

  showtimes: {
    url: ":cinema.website:",
    movies: {
      box: ".cell",
      title: "h1",
      showtimes: {
        box: ".cell a",
        date: "@data-date",
        time: "@data-time",
      },
    },
  },
});
crawlE.crawl();
