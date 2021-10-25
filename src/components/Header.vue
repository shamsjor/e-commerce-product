<template lang="pug">
header
    .container
        .navbar
            .menu-icon(@click="show")
              img(src="../assets/images/icon-menu.svg", alt="alt")
            .logo
                img(src="../assets/images/logo.svg", alt="alt")
            ul(ref="menu")
                img(src="../assets/images/icon-close.svg", alt="alt", class="close",@click="close")
                each val in [`Collections`, `Men`, `Women`, `About`,`Contact`] 
                    li= val
        .profile
            .cart
                img(src="../assets/images/icon-cart.svg", alt="alt", @click="total")
                span(v-if="isEmpty") {{0}}
                span(v-else) {{amount}}
            .avatar
                img(src="../assets/images/image-avatar.png", alt="alt")
            .basket(:class="{hidden: !isVisible}")
              h2 Cart
              p.empty(:class="{hidden: !isEmpty}") Your cart is empty
              div.body-card(:class="{hidden: isEmpty}") 
                img(src="../assets/images/image-product-1-thumbnail.jpg", alt="alt",class="main")
                div
                  p Fall Limited Edition Sneakers
                   .total
                  p.equation {{`$${price}.00x${amount}`}}
                    span {{`${totalPrice}.00$`}}
                img(src="../assets/images/icon-delete.svg", alt="alt", class="delete", @click="clear")
              button(:class="{hidden: isEmpty}") Checkout
</template>

<script>
export default {
  name: "Header",
  props: ["amount"],
  data() {
    return {
      totalPrice: 0,
      price: 125,
      isVisible: false,
      isEmpty: true,
    };
  },
  methods: {
    total() {
      this.totalPrice = this.price * Number(this.amount);
      if (this.isVisible) {
        this.isVisible = false;
      } else this.isVisible = true;
      if (this.amount > 0) {
        this.isEmpty = false;
      } else this.isEmpty = true;
    },
    clear() {
      this.isEmpty = true;
    },
    show() {
      this.$refs.menu.style.display = `block`;
    },
    close() {
      this.$refs.menu.style.display = `none`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

header {
  padding-top: 40px;
}
.container {
  @include display();

  border-bottom: 1px solid $para-color;
  .navbar {
    @include display();
    width: 60%;
    .menu-icon {
      display: none;
    }
    @media (max-width: 768px) {
      .menu-icon {
        display: block;
        margin-left: 20px;
        margin-top: 4px;
      }
      ul {
        display: none;
        // display: block;
        position: fixed;
        height: 100%;
        z-index: 100;
        color: black;
        background-color: white;
        left: 0;
        padding: 30px;
        top: 0;
        li {
          margin-top: 30px;
          font-weight: bold;
        }
        .close {
          display: block;
        }
      }
    }
  }
  ul {
    @include display();
    width: 70%;
    color: $para-color;
    .close {
      display: none;
    }
    li {
      padding-bottom: 30px;
    }
    li:hover {
      border-bottom: 4px solid $primary-color;
      color: $title-color;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    .profile {
      width: 22%;
    }
  }
  .profile {
    @include display();
    width: 15%;
    .avatar {
      img:hover {
        border: 1px solid $primary-color;
      }
      margin-top: -10px;
      img {
        width: 50px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
    @media (max-width: 768px) {
      .avatar {
        margin-top: -17px;
      }
      .cart {
        margin-left: -65px;
      }
    }
    .cart {
      cursor: pointer;
      position: relative;
      span {
        background-color: $primary-color;
        color: white;
        border-radius: 10px;
        width: 18px;
        position: absolute;
        text-align: center;
        font-size: 10px;
        font-weight: bold;
        left: 55%;
        top: -2px;
      }
    }
    @media (max-width: 768px) {
      .basket {
        left: 10% !important;
        width: 80%;
      }
    }
    .basket {
      position: absolute;
      position: absolute;
      box-shadow: 1px 1px 20px 0px black;
      z-index: 2;
      background: white;
      border-radius: 5px;
      padding: 20px;
      flex-wrap: wrap;
      left: 70%;
      top: 100px;
      .empty {
        padding: 30px;
        color: $para-color;
      }
      h2 {
        border-bottom: 1px solid $para-color;
        margin-bottom: 15px;
        padding-bottom: 5px;
      }
      .body-card {
        display: flex;
        .main {
          width: 40px;
          border-radius: 5px;
        }
        div {
          margin-left: 10px;
          p {
            color: $para-color;
          }
        }
        .equation {
          color: $para-color;
          span {
            color: $title-color;
            margin-left: 10px;
          }
        }
      }
      .delete {
        height: 100%;
        margin-left: 5px;
        cursor: pointer;
      }
    }
    button {
      margin-top: 10px;
      width: 100%;
      outline: none;
      border: none;
      padding: 5px;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      background-color: $primary-color;
    }
  }
}
</style>
