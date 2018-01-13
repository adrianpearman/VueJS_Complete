new Vue({
  el: "#exercise",
  data: {
    value: ""
  },
  methods: {
    clicked: function() {
      alert("I've been clicked!");
    },
    updateText: function(event) {
      this.value = event.target.value;
    }
  }
});
