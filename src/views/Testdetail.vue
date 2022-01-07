<template>
  <div class="detail">
    <div class="d-flex align-items-center flex-column lg-4">
      <v-layout row wrap id="box">
        <div class="container">
          <v-flex my-2 mx-2>
            <div falt class="container ">
              <img height="350" width="440" src="../assets/test.png" />

              <v-card-title>รายละเอียด</v-card-title>
              <Detail :name="name" :data="detail" :Test="test" />
              <v-card-actions
                ><div class="container align-items-center">
                  <v-btn class="bg-dark text-white" href="/test">
                    ย้อนกลับ
                  </v-btn>
                </div></v-card-actions
              >
            </div>
          </v-flex>
        </div>
      </v-layout>
    </div>
  </div>
</template>

<script>
import Detail from "@//components/Detail.vue";

export default {
  name: "Testdetail",
  components: {
    Detail,
  },

  data() {
    return {
      name: "25 คำถาม แบบทดสอบวัดระดับภาษาอังกฤษได้ด้วยตนเอง",
      detail: {
        classtype: "General",
        createby: "ohmohm_001@hotmail.com",
        difficulty: "intermediate",
        Repeat: "ได้",
        type: "ข้อเขียน",
        description:
          "ถ้าคุณกำลังสงสัยว่าภาษาอังกฤษของตนเองอยู่ในระดับไหน?? ลองทำแบบทดสอบนี้!!               แบบทดสอบที่วัดความรู้ทางด้านภาษาอังกฤษของคุณผ่านการตอบคำถาม 25 ข้อ คะแนนจะขึ้นอยู่กับความถูกต้องและแม่นยำในการตอบ และแสดงผลเป็นเปอร์เซ็นต์จาก 100%",
      },
      test: [
        {
          id: 1,
          q: "1.Choose the best word or phrase to complete the sentence. The cat saw in the mirror and ran away",
          // answer: [
          //   { idans: 1, text: "A.itself" },
          //   { idans: 2, text: "B. herself" },
          //   { idans: 3, text: "C. himself" },
          // ],
          answer01: "A.itself",
          answer02: "B.herself",
          answer03: "C.himself",
        },
        {
          id: 2,
          q: "2.Choose the best word or phrase to complete the sentence. The cat saw in the mirror and ran away",
          answer01: "A.itself",
          answer02: "B.herself",
          answer03: "C.himself",
        },
        {
          id: 3,
          q: "3.Choose the best word or phrase to complete the sentence. The cat saw in the mirror and ran away",
          answer01: "A.itself",
          answer02: "B.herself",
          answer03: "C.himself",
        },
        {
          id: 4,
          q: "4.Choose the best word or phrase to complete the sentence. The cat saw in the mirror and ran away",
          answer01: "A.itself",
          answer02: "B.herself",
          answer03: "C.himself",
        },
      ],
    };
  },
};
</script>

<style >
.detail {
  background-color: #eef0f8;
  margin: 5%;
}
#img-bg {
  background-image: url("../assets/test.png");
  margin: 50%;
}
#box {
  background-color: white;
  width: 80%;
  height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  /* text-align: left; */
}
#Sdiv {
  margin-top: 5%;
  margin-right: 1%;
  margin-left: 1%;
  margin-bottom: 5%;
}
</style>