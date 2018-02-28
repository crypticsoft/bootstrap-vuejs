<template>
      <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a class="navbar-brand pr-5 col-sm-3 col-md-2 mr-0 text-left" href="#">
          Dashboard
          <div class="float-right">
            <font-awesome-icon icon="cog" />
          </div>
        </a>
        <ul class="navbar-nav px-3 user-menu">
          <li class="nav-item text-nowrap">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <span class="user-name">{{ username }}</span>
              </a>
              <img class="img-circle avatar rounded-circle ml-2" src="https://www.gravatar.com/avatar/9ea9f368514600d71e83efdfe960f282" width="40" height="40" alt="">
              <ul class="dropdown-menu dropdown-list dropdown-menu-right" role="menu">
                  <li role="presentation" class="dropdown-item"><i class="fa fa-user"></i> <a href="profile.html">Profile</a></li>
                  <li role="presentation" class="dropdown-item"><i class="fa fa-key m-r-xs"></i> <a href="login.html">Log out</a></li>
              </ul>
          </li>
        </ul>
      </nav>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  props: ['username'],
  name: 'PanelNav',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style lang="scss" scoped>
/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .nav-settings {
  color: #c6d1e2;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>
