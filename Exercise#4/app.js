new Vue({
  el: "#exercise",
  data: {
    attachClass: {
      highlight: false,
      shrink: true
    },
    float: "float",
    userClass: "",
    isVisible: true,
    myStyle: {
      width: "100px",
      height: "125px",
      backgroundColor: "orange"
    },
    progressBarWidget: {
      width: "0px",
      backgroundColor: "red"
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        // setting the value to its opposite will change from false to true
        (vm.attachClass.highlight = !vm.attachClass.highlight),
          (vm.attachClass.shrink = !vm.attachClass.shrink);
      }, 100);
    },
    startProgress: function() {
      var vm = this;
      var width = 0;
      setInterval(function() {
        width = width + 10;
        vm.progressBarWidget.width = width + "px";
      }, 1000);
    }
  }
});
