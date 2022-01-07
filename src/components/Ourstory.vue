<template>
  <div class="ourstory">
    <h1>Ourstory</h1>
    <div class=" text-align: left " >
      <v-layout row wrap>
        <v-flex mt-8  p-5 v-for="link in videoId" :key="link.Id">
          <v-card  falt class="text-xs-center "> </v-card>
          <iframe
            width="400"
            height="260"
            :src="link.src"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <!-- <button @click="playVideo">play</button> -->
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>
<style scoped>
#container {
  /* background-color: aliceblue; */
  color: red;
  width: 20%;
}
.v-layout {
  margin-right: 15%;
}
</style>


<script lang="ts">
export default {
  name: "Ourstory",
  props: {
    msg: String,
  },

  data() {
    return {
      videoId: [
        { Id: 0, src: "https://www.youtube.com/embed/IiwiFgZlnLI" },
        { Id: 1, src: "https://www.youtube.com/embed/t_Owj--Lgt4" },
        { Id: 2, src: "https://www.youtube.com/embed/cWX9kHZpeEM" },
        { Id: 3, src: "https://www.youtube.com/embed/A2pNPTQ31PQ" },
        { Id: 4, src: "https://www.youtube.com/embed/X63NzKyn4SQ" },
        { Id: 5, src: "https://www.youtube.com/embed/0RB-D7l1IQ0" },
      ],
    };
  },
};
</script>

