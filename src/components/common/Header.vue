<template>
  <!-- element-ui -->
  <el-container>
    <el-header height = '80px' style="margin-top: 30px;">
      <div class="header">
        <div class="nav-left">
<!--          <img src="/logo.png" alt="">-->
        </div>
        <div class="nav-center">
          <ul style="margin-left: 50px">
            <li v-for="(list, index) in headerList" :key="index">
              <router-link :to="{name: list.name}">
                {{ list.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nav-right">
          <span>登录</span>
           |
          <span>注册</span>
        </div>
      </div>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        headerList: [
          {id: '1', name: 'Home', title: '首页'},
          {id: '2', name: 'Course', title: '免费课程'},
          {id: '3', name: 'LightCourse', title: '轻课'},
          {id: '4', name: 'Micro', title: '学位课程'}
        ],
        isShow: false
      }
    }
  }
</script>
<style scoped>
  .nav-center ul li a.is-active{
    color: #4a4a4a;
    border-bottom: 4px solid #ffc210;
  }
  .nav-center ul li {
    float: left;
    width: 200px;

  }
  .nav-center ul li a{

  }

</style>