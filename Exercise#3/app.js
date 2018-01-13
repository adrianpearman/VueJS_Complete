new Vue({
  el: "#exercise",
  data: {
    value: 0
  },
  methods: {
    click: function(step, $event) {
      value + step;
    }
  },
  computed: {
    result: function() {
      return this.value > 37 ? "Done" : "Not There Yet";
    }
  },
  watch: {
    value: function() {
      var vm = this;
      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  }
});
