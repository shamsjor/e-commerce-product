<template lang="pug">
.Text
        p(class="name") Sneaker Company
        h1(class="title") Fall Limited Edition Sneakers
        p(class="para") These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        .price
            p $125.00 
                span  50%
            span(class="old") 250$
        .add
            .amount
              div
                img(src="../assets/images/icon-minus.svg", alt="alt", @click="countDown")
              span {{amount}}
              div
                img(src="../assets/images/icon-plus.svg", alt="alt", @click="countUp")
            button(@mousedown="addCart($event)", @mouseup="reset($event)")
                img(src="../assets/images/icon-cart.svg", alt="alt")
                | Add to cart
</template>

<script>
export default {
  name: "Text",
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    countUp() {
      this.amount += 1;
    },
    countDown() {
      if (this.amount === 0) {
        this.amount === 0;
      } else this.amount -= 1;
    },
    addCart(event) {
      event.target.style.opacity = "0.5";
      this.$emit(`passData`, this.amount);
    },
    reset(event) {
      event.target.style.opacity = "1";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.container {
  p.name {
    color: $primary-color;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    .title {
      width: 100%;
      margin-bottom: 30px;
    }
    p.para {
      width: 100%;
      font-size: 1.5em;
    }
  }
  .title {
    width: 70%;
    margin-bottom: 40px;
  }
  p.para {
    color: $para-color;
    width: 75%;
    margin-bottom: 20px;
  }
  @media (max-width: 768px) {
    .price {
      p {
        display: inline-block;
      }
      span.old {
        margin-left: 150px;
        font-size: 1.5em;
      }
    }
  }
  .price {
    p {
      font-weight: bold;
      font-size: 20px;
      span {
        color: $primary-color;
        background-color: $secondry-color;
        font-size: 16px;
        border-radius: 5px;
        padding: 5px;
        margin-left: 10px;
      }
    }
    span.old {
      color: $para-color;
      text-decoration: line-through;
    }
  }
  @media (max-width: 768px) {
    .amount {
      width: 100% !important;
      justify-content: space-around;
      span {
        margin: 0;
        font-size: 1.5em;
      }
    }
  }
  .amount {
    background-color: $color;
    width: fit-content;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    img {
      cursor: pointer;
    }
    span {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  @media (max-width: 768px) {
    .add {
      flex-direction: column;
    }
  }
  .add {
    @include display();
    justify-content: start;
    margin-top: 40px;
    @media (max-width: 768px) {
      button {
        margin-bottom: 50px;
        width: 80% !important;
        font-size: 1.25em;
      }
    }
    button {
      color: white;
      background-color: $primary-color;
      outline: none;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-weight: bold;
      width: 250px;
      cursor: pointer;
      margin-left: 30px;
      img {
        margin-right: 20px;
      }
    }
  }
}
</style>
