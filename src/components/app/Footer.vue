<template>
  <div>
    <div class='text'> </div>
    <div class='copyright'>
      <p>Copyright All rights reserved.	</p>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang='scss' scoped>
@import '../../scss/abstracts/variables';

.text {
  float: left;
  width: 25rem;
  font-size: 2rem;
  font-weight: bold;
  color: $color-secondary;
}

.copyright {
  float: left;
  width: calc(100% - 25rem);
  font-size: 1.2rem;
  text-align: center;
  color: $color-primary;
}
</style>