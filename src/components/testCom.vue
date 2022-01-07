<template>
  <div class="test">
    <div id="box">
      <div class="container" id="texthead"><h3>เลือกแบบทดสอบ</h3></div>
      <div>
        <v-layout row wrap>
          <v-flex
            mt-8
            xs12
            sm6
            md2
            lg4
            p-5
            v-for="test in tests"
            :key="test.id"
          >
            <div falt class="container text-xs-center">
              <v-card falt class="text-xs-center">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="test.src"
                >
                </v-img>
                <!-- <v-card-title>{{ test.Name }}</v-card-title> -->
                <v-card-text class="text-dark">
                  <div>{{ test.Name }}</div>
                  <div>ประเภทแบบทดสอบ: {{ test.Type }}</div>
                  <div>หมวดหมู่อาชีพ: {{ test.Career }}</div>
                  <div>การทำซ้ำ: {{ test.Repeat }}</div>
                </v-card-text>
                <v-card-actions
                  ><div class="container align-items-center">
                    <v-btn class="bg-primary text-white" href="/testdetail"> รายละเอียด </v-btn>
                  </div></v-card-actions
                >
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <div class="container d-flex justify-content-end">
     
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  props: {
    msg: String,
  },
  data() {
    return {
      tests: [
        {
          Id: 1,
          src: require("../assets/test.png"),
          Name: "เคมีอาจารอุ๊",
          Type: "ข้อเขียน",
          Career: "เคมี",
          Repeat: "ได้",

        },
        {
          Id: 2,
          src: require("../assets/test.png"),
          Name: "เคมีอาจารอุ๊",
          Type: "ข้อเขียน",
          Career: "เคมี",
          Repeat: "ได้",
        },
        
      ],
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1 },
      ],
    };
  },
};
</script>

<style >
#box {
  background-color: white;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: left;
}
#texthead {
  margin-top: 8%;
  margin-right: 2%;
  margin-left: 2%;
}
.v-btn {
  width: 250px;
}
.page-item.active .page-link {  
    background-color: #131628  !important;  
    border-color: #131628 !important;  
}
/* .container {
  background-color: violet;
} */
</style>