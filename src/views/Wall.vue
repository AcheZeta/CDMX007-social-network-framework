<template>
<div id="demo">
      <div class="comment-form">    
        <textarea type="text" v-model="comment" placeholder="Cuentanos algo"></textarea>
        <br/>
        <button>Add Comment</button>
   </div>
</div>
</template>

<script>
export default {
  name: "wall",
  data() {
    return {
      message: ""
    };
  }
};
</script>

