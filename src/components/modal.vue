<template lang="pug">
.modal
    .modal-content
        .close
            img(src="../assets/images/icon-close.svg", alt="alt", @click="close")
        .main
            img.previous(src="../assets/images/icon-previous.svg", alt="alt", @click="previous")
            Box(ref="main")
            img.next(src="../assets/images/icon-next.svg", alt="alt",@click="next")
            
</template>

<script>
import Box from "./Box.vue";
export default {
  name: "ModalBox",
  components: {
    Box,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    close() {
      let modal = document.querySelector(`.modal`);
      modal.style.display = `none`;
    },
    next() {
      let thumbnails = this.$refs.main.$el.children[1].children;
      this.counter += 1;
      if (this.counter > thumbnails.length - 1) {
        this.counter = 0;
      }
      thumbnails[this.counter].children[0].click();
    },
    previous() {
      let thumbnails = this.$refs.main.$el.children[1].children;
      this.counter -= 1;
      if (this.counter < 0) {
        this.counter = thumbnails.length - 1;
      }
      thumbnails[this.counter].children[0].click();
    },
    display() {
      document.querySelector(`.modal`).style.display = `block`;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  display: none;
  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 100%;
    position: relative;
    .close {
      position: absolute;
      top: 6%;
      left: 63%;
      cursor: pointer;
    }
    .main {
      width: 50%;
      margin-top: 60px;
      margin-left: 100px;
      .previous {
        position: absolute;
        top: 50%;
        background: white;
        padding: 10px;
        border-radius: 50%;
        left: 28%;
        cursor: pointer;
      }
      .next {
        position: absolute;
        top: 50%;
        background: white;
        padding: 10px;
        border-radius: 50%;
        left: 62%;
        cursor: pointer;
      }
    }
  }
}
</style>
