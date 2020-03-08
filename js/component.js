Vue.component('main-menu',{
  props:['groups'],
  data(){
    return{
      // loginName: localStorage.getItem('acName')
    }
  },
  methods: {
    goodToWait () {
      alert('敬請期待!')
    }
  },
  template:`
  <div class="mainMenu d-flex align-items-center justify-content-between">
    <!-- Close Icon -->
    <div class="closeIcon">
      <i class="ti-close" aria-hidden="true"></i>
    </div>
    <!-- Logo Area -->
    <div class="logo-area">
      <a href="index.html">
        <img src="img/logo_2.png" height="100" alt="">
      </a>
    </div>
    <!-- Nav -->
    <div class="sonarNav">
      <nav>
        <ul>
          <li class="nav-item active">
            <a class="nav-link" href="index.html">回到首頁</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">關於我們</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="groups.html">各組資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="exhibition.html">展場資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="award.html">獲獎資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="albums.html">活動相簿</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" target="_blank" href="https://www.facebook.com/WzuColorfulVision">粉絲專頁</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="nav-footer">
      <a :href="'groups'+index+'.html'" v-for="(item, index) in groups">
        {{item.name}}<span> / </span>
      </a>
    </div>
  </div>
  `,
})
Vue.component('header-area',{
  data(){
    return{
      // loginName: localStorage.getItem('acName')
    }
  },
  methods: {

  },
  mounted: function(){
  },
  template:`
  <header class="header-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="menu-area d-flex justify-content-between">
            <!-- Logo Area  -->
            <div class="logo-area">
              <a href="index.html">
                艷視 ColorVision
              </a>
            </div>

            <div class="menu-content-area d-flex align-items-center">
              <!-- Menu Icon -->
              <span class="navbar-toggler-icon" id="menuIcon"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  `,
})
Vue.component('footer-area',{
  data(){
    return{
      year: '2019'
    }
  },
  template:`
  <footer class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- Copywrite Text -->
          <div class="copywrite-text">
            Copyright &copy;
            {{year}}
            All rights reserved
            | Made with <a href="https://colorlib.com" target="_blank">Colorlib</a> 
            by <a href="http://c028.wzu.edu.tw/" target="_blank">DCAM</a> 
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  `,
  created() {
    this.year = new Date().getFullYear()
  },
})

new Vue({
  el: ".all",
  data: {
    groups: groupData
  },
  methods: {
    test: function(){

    }
  },
})
