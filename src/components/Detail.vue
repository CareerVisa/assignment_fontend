<template>
  <div>
    <div id="b">
      <v-card-text>
        <div>หมวดหมู่ :{{ data.classtype }}</div>
        <div>สร้างโดย :{{ data.createby }}</div>
        <div>ชื่อแบบทดสอบ :{{ name }}</div>
        <div>ระดับความยาก :{{ data.difficulty }}</div>
        <div>การทำข้อสอบซ้ำ :{{ data.Repeat }}</div>
        <div>ประเภทแบบข้อสอบ :{{ data.type }}</div>
        <div>รายละเอียดแบบทดสอบ :{{ data.description }}</div>
      </v-card-text>
      <v-layout row wrap>
        <v-flex sm16 my-2 mx-2 v-for="Tests in Test" :key="Tests.id">
          <div class="container" id="cbox">
            <v-card-title> {{ Tests.q }}</v-card-title>
            <div class=" justify-content-start" id="C1box ">
              <div class="container" id="conBox">
                <v-card-text class="align-items-left">
                  <div class="alert alert-light">
                    {{ Tests.answer01 }}
                  </div>
                  <div class="alert alert-success">
                    <v-row class="ml-auto align-items-center justify-content-between"
                      >
                      {{ Tests.answer02 }}
                      <div class=" ml-5">
                        <v-icon large color="green darken-2 " id="v-icon">
                          mdi-check-circle 
                        </v-icon>
                      </div></v-row
                    >
                  </div>
                  <div class="alert alert-light">
                    {{ Tests.answer03 }}
                  </div>
                </v-card-text>
              </div>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    name: String,
    data: Object,
    Test: Object,
  },
};
</script>

<style >
/* .detail {
} */
#b {
  /* background-color: aquamarine; */
  text-align: left;
}
ิ#box {
  margin: 10%;
}
#cbox {
  background-color: #fbfbfb;
  justify-content: left;
}
/* #conBox {
  background-color:bisque;
    width: 45%;

} */
#C1box {
  width: 100%;
  /* background-color: aquamarine; */
  display: flex;
  align-items: left;
  text-align: left;
}
#v-icon{
    color:green
}
</style>