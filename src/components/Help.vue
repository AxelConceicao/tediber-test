<template>
  <div id="td-help" class="mb-6">
    <Splitter class="mb-6" title="Besoin d'aide ?" />
    <EmptyCollapse title="FOIRE AUX QUESTIONS TEDIBER" />
    <EmptyCollapse title="LA GARANTIE TEDIBER" />
    <EmptyCollapse title="REPRISE DE L’ANCIENNE LITERIE" />
    <EmptyCollapse title="COMMENT FAIRE UN RETOUR ?" />
  </div>
</template>

<script>
import Splitter from '@/components/Splitter'
import EmptyCollapse from '@/components/EmptyCollapse'

export default {
  name: 'help',
  components: {
    Splitter,
    EmptyCollapse,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style>
#td-help .tb-collapse {
  margin-right: 0 !important;
}
</style>
