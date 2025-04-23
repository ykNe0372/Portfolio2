(function () {
  "use strict";

  (function () {
    const jsTitle = document.querySelectorAll(".js-mv_tit-item");
    jsTitle.forEach((target) => {
      let newText = "";
      const text = target.textContent;
      const result = text.split("");
      for (let i = 0; i < result.length; i++) {
        newText += "<span>" + result[i] + "</span>";
      }
      target.innerHTML = newText;
    });
  })();

  (function () {
    const jsOptext = ".js-loader-Optext > span";
    const jsLoaderBg = ".js-loader-bg";
    const jsPic = ".js-mv-pic [id*=item]";
    const jsTitle = ".js-mv_tit-item span";
    const jsReaddText = ".js-mv_tit-read";
    const jsHeader = ".js-header";

    gsap.set([jsPic, jsTitle, jsReaddText], {
      opacity: 0,
      y: 30,
    });

    gsap.set(jsOptext, {
      opacity: 0,
      y: -50,
    });

    gsap.set(jsHeader, {
      opacity: 0,
      y: -50,
    });

    const tl = gsap.timeline();

    tl.to(jsOptext, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.8,
      stagger: {
        amount: 1,
        from: "start",
        ease: "sine.in",
      },
    })
      .to(jsOptext, {
        opacity: 0,
      })
      .to(
        jsLoaderBg,
        {
          y: "-100%",
        },
        "+=0.5"
      )
      .to(
        jsPic,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "elastic.inOut(1, 0.3)",
          },
        },
        "+=0.2"
      )
      .to(
        jsTitle,
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 1,
            from: "start",
            ease: "elastic.inOut(1, 0.5)",
          },
        },
        "-=0.1"
      )
      .to(
        jsReaddText,
        {
          opacity: 1,
          y: 0,
        },
        "-=0.2"
      )
      .to(
        jsHeader,
        {
          opacity: 1,
          y: 0,
        },
        "<"
      );
  })();
})();
