(function() {
  $(".logo").click(function() {
    $("body").toggleClass("fart");
  });

  $(document).ready(function() {
    var audio;
    audio = $(".click")[0];
    $(".logo").mousedown(function() {
      audio.play();
    });
    $(".logo").mouseup(function() {
      audio.play();
    });
  });

}).call(this);

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
