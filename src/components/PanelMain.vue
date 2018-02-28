<template>
      <div class="container-fluid">
        <div class="row">
          <PanelSidebar />
          <main class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <slot>
              <HelloWorld />
              <font-awesome-icon icon="spinner" spin />
            </slot>
          </main>
        </div>
      </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import PanelSidebar from '../components/PanelSidebar'
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'PanelMain',
  components: {
    FontAwesomeIcon,
    PanelSidebar,
    HelloWorld
  }
}

</script>
<style lang="scss" scoped></style>
