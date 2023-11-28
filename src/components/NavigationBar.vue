<template>
  <nav id="navigation-bar" @mouseleave="hideSubmenu">
    <div class="main-memu-container">
      <div class="left-container">
        <div class="logo" @click="navigateHome">
          <img src="/assets/logo.svg"/>
        </div>
        <div id="menu-container" v-for="(item, index) in menuItems"
             class="menu-item"
             :key="item.title"
             @mouseover="showSubmenu(index)"
        >
          <div class="menu-title"> {{item.title}} </div>
        </div>
      </div>
      <div class="right-container">
        <div class="user-key"> {{"User : "}}</div>
        <div class="user-info-box">
          <div class="user-info"> {{"SDS 인재양성파트"}}</div>
        </div>
      </div>
    </div>
    <div class="sub-menu-container" :style="{visibility: subMenuVisibility}">
      <div v-for="subItem in activeSubmenu"
           class="sub-menu-item"
           :key="subItem.subTitle"
      >
        <router-link :to="subItem.link">
          <div class="sub-menu-title"> {{subItem.subTitle}} </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      menuItems: [
        {
          title:"Curriculums",
          subMenu: [
            {subTitle: "Your Curriculumns", link:""},
            {subTitle: "Curriculumn Design", link:""},
            {subTitle: "Open Curriculumn", link:""}
          ]
        },
        {
          title:"Courses",
          subMenu: [
            {subTitle: "Your Courses", link:""},
            {subTitle: "Course Design", link:"/course"},
            {subTitle: "Learning & Exam", link:""}
          ]
        },
        {
          title: "Employee Learning Tracker",
          subMenu: [
            {subTitle: "Learning Tracker", link: ""},
            {subTitle: "Exam Tracker", link: ""},
            {subTitle: "Employee Tracker", link: ""}
          ]
        }
      ],
      isSubMenuVisible: false,
      activeSubmenu: []
    }
  },
  computed: {
    subMenuVisibility() {
      return this.isSubMenuVisible ? 'visible' : 'hidden';
    }
  },
  methods: {
    navigateHome() {
      if (this.$router.currentRoute.fullPath !== "/") {
        this.$router.push('/');
      }
    },
    showSubmenu(index) {
      this.activeSubmenu = this.menuItems[index].subMenu;
      this.isSubMenuVisible = true;
    },
    hideSubmenu() {
      this.isSubMenuVisible = false;
    }
  }
}
</script>

<style scoped>
#navigation-bar > .main-memu-container{
  display: flex;
  padding: 12px 60px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #E0E0E0;
}
.left-container{
  display: flex;
  align-items: center;
  gap: 50px;
}
.right-container{
  display: flex;
  align-items: center;
  gap: 8px;
}
.logo {
  display: flex;
  width: 44px;
  height: 44px;
  padding: 5.704px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #FC7F00;
}
#menu-container {
  display: flex;
  align-items: center;
  gap: 26px;
}
.menu-item {
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 10px;
}
.menu-item:hover {
  border-radius: 6px;
  background: #F1F1F3;
}
.user-key {
  color: #262626;
  font-weight: 400;
  line-height: 150%; /* 21px */
}
.user-info-box {
  display: flex;
  width: 109px;
  height: 23px;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: #0041CF;
}
.user-info {
  color: #FFF;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
}
.sub-menu-container {
  display: flex;
  padding: 16px 60px 20px 154px;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid #E0E0E0;
}
.sub-menu-item {
  display: flex;
  height: 30px;
  padding: 0px 16px;
  align-items: center;
  border-radius: 6px;
}
.sub-menu-item:hover {
  border-radius: 6px;
  background: #F1F1F3;
}
.sub-menu-title {
  color: #262626;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
}
</style>