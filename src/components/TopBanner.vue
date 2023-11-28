<template>
  <header id="top-banner">
    <div class="product">
      <span class="product-description">Make your learning courses with</span>
      <span class="product-name">Snap Course</span>
    </div>
    <div class="product-version">
      <span class="product-version-text">Beta</span>
    </div>
  </header>
</template>

<script>
export default {
  name: "TopBanner"
}
</script>

<style scoped>
#top-banner {
  display: flex;
  width: 100%;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  gap: 3px;
  background: #FC7F00;
  font-style: normal;
}
#top-banner .product {
  font-size: 14px;
  line-height: 150%; /* 21px */
}
#top-banner > .product > .product-description {
  margin-right: 3px;
  color: #FFF;
  font-weight: 500;
}
#top-banner > .product > .product-name {
  color: #1774D3;
  font-weight: 600;
}
#top-banner > .product-version {
  display: flex;
  width: 32px;
  height: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #1774D3;
}
#top-banner > .product-version > .product-version-text {
  color: #FFF;
  font-size: 10px;
  font-weight: 500;
  line-height: 150%; /* 15px */
}
</style>