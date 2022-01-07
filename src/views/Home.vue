<template>
  <div class="home" id="image">
    <div
      class="d-flex align-items-center flex-column lg-4"
      style="height: 100%"
    >
      <div class="container p-1 bg-blend-overlay" style="width: 100%" id="containerlogo">
        <img id="logo" alt="logocareer" src="../assets/logo.png" />
        <pre style="color: white" id="text">
          Community where talents exchange their career insights
          แหล่งรวบรวมข้อมูลแลกเปลี่ยนมุมมองสายงานเพื่อคนทํางานที่พร้อมพัฒนาตัวเองแบบนอกกรอบ
        </pre>
      </div>
      <div class="p-2" style="width: 100%" id="containerOursrt">
        <Ourstory />
      </div>
      <div class="p-2 " style="width: 100%" id="container01">
        <Article/>
      </div>
    </div>
  </div>
</template>

<style >
#containerOursrt {
  margin-top: 10%;
}
#container01 {
  background-color: white;
  text-align: left;
}
#containerlogo {
  margin-top: 10%;
  margin-bottom: 10%;
}
#text {
  color: white;
  font-size: 100%;
  margin-top: 5%;
}
#image {
  width: 100%;
  height: 100%;
  background-image: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-position: center top;
}
#logo {
  width: 25%;
}
.template {
  background-color: #eef0f8;
}
</style>

<script>
// @ is an alias to /src
import Ourstory from "@//components/Ourstory.vue";
import Article from "@//components/Article.vue";

export default {
  name: "Home",
  components: {
    Ourstory,
    Article
    
  },
};
</script>
