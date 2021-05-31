<template>
  <div class="columns tb-trackorder">
    <div class="column is-flex is-flex-direction-column">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <img :src="require('@/assets/img/groups/Group.svg')" alt="" />
        <font-awesome-icon class="tb-arrow ml-4" icon="arrow-right" />
      </div>
      <div class="mt-5 is-flex is-align-items-center is-justify-content-center">
        <input type="checkbox" onclick="return false;" />
        <font-awesome-icon v-if="order.order_status.packed" class="tb-check" :icon="['far', 'check-circle']" />
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <img :src="require('@/assets/img/groups/Group 2.svg')" alt="" />
        <font-awesome-icon class="tb-arrow ml-4" icon="arrow-right" />
      </div>
      <div class="mt-5 is-flex is-align-items-center is-justify-content-center">
        <input type="checkbox" onclick="return false;" />
        <font-awesome-icon v-if="order.order_status.shipped" class="tb-check" :icon="['far', 'check-circle']" />
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <img :src="require('@/assets/img/groups/Group 3.svg')" alt="" />
        <font-awesome-icon class="tb-arrow ml-4" icon="arrow-right" />
      </div>
      <div class="mt-5 is-flex is-align-items-center is-justify-content-center">
        <input type="checkbox" onclick="return false;" />
        <font-awesome-icon v-if="order.order_status.in_transit" class="tb-check" :icon="['far', 'check-circle']" />
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column">
      <div class="is-flex is-align-items-center is-justify-content-center">
        <img :src="require('@/assets/img/groups/Group 4.svg')" alt="" />
      </div>
      <div class="mt-5 is-flex is-align-items-center is-justify-content-center">
        <input type="checkbox" onclick="return false;" />
        <font-awesome-icon v-if="order.order_status.delivered" class="tb-check" :icon="['far', 'check-circle']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderStatus',
  props: ['order'],
}
</script>

<style>
.tb-check {
  color: green;
  /* position: absolute; */
  margin-left: -20px;
  transform: scale(1.2);
}

.tb-trackorder > .column img {
  height: 80px;
}

.tb-trackorder > .column input {
  transform: scale(1.3);
}

.tb-trackorder > .column input:disabled {
  border-color: rgba(40, 45, 89, 0.75);
  color: rgba(40, 45, 89, 0.75);
  background-color: #fff;
}

@media screen and (max-width: 600px) {
  .tb-trackorder > .column img {
    height: 60px;
  }

  .tb-trackorder > .column .tb-arrow {
    display: none;
  }
}
</style>
