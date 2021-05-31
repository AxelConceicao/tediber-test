<template>
  <div class="tb-collapse py-3">
    <div @click="isOpen ? (isOpen = false) : (isOpen = true)" class="tb-header mx-2 is-flex is-justify-content-space-between">
      <span>{{ title }}</span>
      <font-awesome-icon class="ml-2" :icon="!isOpen ? 'chevron-down' : 'chevron-up'" />
    </div>
    <div id="tb-grow" ref="tb-growTrigger">
      <div class="m-3">
        {{ lorem }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'emptyCollapse',
  props: ['title'],

  data() {
    return {
      isOpen: false,
      lorem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  },

  watch: {
    isOpen: {
      handler() {
        var growDiv = this.$refs['tb-growTrigger']
        if (growDiv.clientHeight) {
          growDiv.style.height = 0
        } else {
          growDiv.style.height = growDiv.scrollHeight + 'px'
        }
      },
    },
  },
}
</script>

<style>
#tb-grow {
  -moz-transition: height 0.5s;
  -ms-transition: height 0.5s;
  -o-transition: height 0.5s;
  -webkit-transition: height 0.5s;
  transition: height 0.5s;
  height: 0;
  overflow: hidden;
}

.tb-collapse:last-child {
  border-bottom: 2px solid rgba(40, 45, 89, 0.75);
}

.tb-collapse {
  margin-right: 4rem;
  border-top: 2px solid rgba(40, 45, 89, 0.75);
}

.tb-collapse > .tb-header:hover {
  color: #fab200;
}

.tb-header {
  user-select: none;
  transition: all 0.25s ease-out;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .tb-collapse {
    margin-right: inherit;
  }
}
</style>
