(function() {
  $(document).ready(function() {
    $(".typed").typed({
      strings: [
        "builds in Swift",
        "composes in Rails",
        "makes with Javascript",
        "deploys with Docker",
        "scales with Elixir"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      loopCount: false,
      showCursor: true
    });
  });
}).call(this);
