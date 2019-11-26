import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',

    data: {
      allRates: [],
      selectedRate: "",
      selectedRate2: "",
      amount: 0,
      reverseAmount: 0
    },

    mounted(){
      this.fetchRates();

    },

    computed: {
      calculateResult: function() {
        const result = this.amount * this.allRates[this.selectedRate]
        return result.toFixed(2);
      },
      calculateResult2: function() {
        const result = this.reverseAmount / this.allRates[this.selectedRate2]
        return result.toFixed(2);
      }
    },

    methods: {
      fetchRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
          .then(response => response.json())
          .then(data => this.allRates = data.rates )
      }
    }
  })
})
