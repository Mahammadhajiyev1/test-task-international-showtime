const CrawlE = require("crawl-e/v0.6.5");

let crawlE = new CrawlE({
  cinemas: [
    {
      name: "Kino Freistadt",
      address: "Kino Freistadt, Salzgasse 25, 4240 Freistadt, Austria",
      website: "https://www.kino-freistadt.at/",
      phone: "+43 7942 777 11",
    },
  ],

  movies: {
    list: {
      url: "https://www.kino-freistadt.at/",
      box: ".dailyProgramMovieBox ",
      title: ".dailyProgramContentMovie",
      href: ".dailyProgramContentMovie @href",
    },
    showtimes: {
      url: "https://www.kino-freistadt.at:movie.href:#tab-2/",
      showtimes: {
        box: ".dailyProgramMovieBox",
        date: ".movieProgramDate",
        dateFormat: "dd. D. MMMM",
        dateLocale: "de",
        time: {
          selector: ".movieProgramTime :first",
          mapper: (time) => time.replace("Uhr", "").trim(),
        },
      },
    },
  },
});
crawlE.crawl();
