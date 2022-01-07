<template>
<div class="Test  " >
  <div  id="image">
    <div
      class="d-flex align-items-center flex-column lg-4"
      style="height: 100%"
    >
      <!-- <v-layout row wrap class="my-2 mx-2"> -->
      <div id="v-row"></div>
      <v-row class="d-flex lg-4 mx-2 my-2" >
        <div>
            <b-field>
            <b-input placeholder="ระบุชื่อแบบทดสอบที่ต้องการค้นหา"
             
               >
            </b-input>
        </b-field>
        </div>

        <div>
         <b-form-select class=" mx-2 " v-model="selected" placeholder="เลือกอาชีพที่ต้องการค้นหา" :options="items"></b-form-select>
        </div>

        <div id="v-divider"><v-divider class="mx-4" vertical></v-divider></div>
        <div>
          <v-btn class="bg-warning text-dark "> Search </v-btn>
        </div>
      </v-row>
       
      <!-- </v-layout> -->
    </div>
     <Test :data="tests" />
  </div>

  </div>
</template>

<script>
import Test from "@//components/testCom.vue";
export default {
    name: "Page test",
     components: {
   Test
    
  },

 data(){
     return {
         selected: null,
         items: [
             { value: null, text: 'เลือกอาชีพที่ต้องการค้นหา' },
          { value: 'a', text: 'เคมี' },
          { value: 'b', text: 'วิศวะ' },
          { value: { C: '3PO' }, text: 'หมอ' },
          { value: 'd', text: 'IT', disabled: true }
         ],
     }
 }

 
};
</script>


<style >
#image {
  width: 80%;
  height: 100%;
  background-image: url("../assets/bgtest.png");
  background-repeat: no-repeat;
  background-position: center top;
  background-color: white;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 5%;
}
#v-divider {
  height: 40px;
}
#v-row {
  margin: 60px;
}
#space{
    margin-left: 2px;
}

</style>

