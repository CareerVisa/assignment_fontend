
<template>
  <div id="app">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item href="/" id="n-button">หน้าแรก</b-nav-item>
        <b-nav-item href="/test" id="n-button">แบบทดสอบ</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto align-items-center">
        <h6 style="color: white">สวัสดี,สมปอง</h6>
        <div>
          <b-nav-form>
           
            <b-button
              variant="success"
              class="my-2 my-sm-0 mx-2 text-success btn alert-success"
              type="submit"
              >O</b-button
            >
          </b-nav-form>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
    <v-footer>
      <v-card id="v-card" width="100%">
        <v-card-text id="v-card-text">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class=""
            icon
            text
            color="red lighten-2"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text id="v-card-text">
          ©{{ new Date().getFullYear()
          }}<strong>
            test_test.net All rights reserved. Personal Data Protection Policy |
            Terms and Conditions</strong
          >
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eef0f8;
}
.h4{
  color: white;
}
#nav {
  padding: 30px;
}
.navbar {
  background-color: #131628 !important;
}
#n-button {
  background-color: white;
  border-radius: 15px;
  margin-right: 5px;
}
#v-card {
  background-color: #131628 !important;
}
.v-footer {
  background-color: #131628 !important;
  /* height: 65px; */
  position: absolute;

}
#white--text {
  color: azure;
}
#v-card-text {
  color: white;
}
.theme--light.v-divider {
  border-color: white !important;
}

.v-icon {
  color: white !important;
}
</style>

<script>
export default {
  data: () => ({
    icons: ["mdi-youtube", "mdi-facebook", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>