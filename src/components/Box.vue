<template lang="pug">
.box
  
        .main-im
            img(:src="require(`../assets/images/image-product-${number}.jpg`)", alt="alt", class="main")
        div(class="thumbnails", @click="tab($event)")
            each val in [1, 2, 3, 4]
              div(class=`tab-${val}`, class= (val === 1 ? "opacity" : undefined))
                img(src=`../assets/images/image-product-${val}-thumbnail.jpg`, alt="alt",data=`${val}`)
                
</template>

<script>
export default {
  name: "Box",
  data() {
    return {
      number: 1,
    };
  },
  methods: {
    tab(event) {
      this.number = event.target.getAttribute(`data`);
      let tabs = event.target.parentElement.parentElement.children;
      Array.from(tabs).forEach((element) => {
        element.classList.remove(`opacity`);
      });
      event.target.parentElement.classList.add(`opacity`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.main-im {
  // width: 50%;
  cursor: pointer;
  img {
    width: 70%;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
  }
}
@media (max-width: 786px) {
  .thumbnails {
    width: 100% !important;
    margin-left: 15px;
  }
}
.thumbnails {
  @include display();
  width: 50%;
  img {
    border-radius: 5px;
    width: 70%;
    cursor: pointer;
  }
}
</style>
