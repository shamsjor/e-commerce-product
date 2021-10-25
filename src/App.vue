<template>
  <ModalBox ref="modal"></ModalBox>
  <Header :amount="amount"></Header>
  <div class="product">
    <div class="container">
      <Box @click="test($event)"></Box>
      <Text @passData="passData($event)"></Text>
    </div>
  </div>
</template>

<script>
import ModalBox from "@/components/modal.vue";
import Header from "@/components/Header.vue";
import Box from "@/components/Box.vue";
import Text from "@/components/Text.vue";
export default {
  name: "App",
  components: {
    ModalBox,
    Header,
    Box,
    Text,
  },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    passData(amount) {
      this.amount = amount;
    },
    test(event) {
      if (event.target.classList[0] === `main`) {
        this.$refs.modal.display();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/main.scss";
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    padding: 0px !important;
  }
}
.container {
  @include display();
  padding-top: 50px;
  .Text {
    align-self: center;
  }
}
</style>
