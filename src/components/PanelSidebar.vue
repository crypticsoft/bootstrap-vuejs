<template>
  <nav :class="[narrowClass ? 'narrow' : '', sidebarClasses]">
    <div class="sidebar-sticky">
      <ul class="nav flex-column mt-2 text-left">
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <font-awesome-icon icon="desktop" />
          <span class="nav-text">My Dashboard</span> <span class="sr-only">(current)</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <font-awesome-icon icon="user" />
          <span class="nav-text">Profile</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <font-awesome-icon icon="power-off" />
          <span class="nav-text">Logout</span>
        </a>
      </li>
    </ul>
    </div>
  </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'PanelSidebar',
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      errorClass: 'error',
      narrowClass: '',
      sidebarClasses: 'col-md-2 d-none d-md-block bg-dark sidebar'
    }
  }
}
</script>

<style lang="scss" scoped>
/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  &.bg-dark {
    background-color: #38434e !important;
  }
  &.narrow {
    width: 50px;
    .nav .nav-item .nav-link {
      max-height: 40px;
      .nav-text {
        font-size: 0;
      }
    }
  }
}

.sidebar-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 48px; /* Height of navbar */
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar {
  .sidebar-sticky {
    .nav-link {
      font-weight: 500;
      color: #c6d1e2;
      &.active {
        color: #fff;
        background-color: #30B19B;
      }
      &:hover {
        &:not(.active) {
          background-color: #323b45;
        }
      }
      svg {
        margin-right: 5px;
      }
      .nav-text {

      }
    }
  }
  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #999;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
    text-transform: uppercase;
  }
}
</style>
