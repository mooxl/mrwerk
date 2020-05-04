<script>
export default {
  data() {
    return {
      zoom: 16,
      center: [51.375351, 7.738095],
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
    };
  }
};
</script>
<template>
  <div class="map">
    <no-ssr>
      <l-map :scrollWheelZoom="false" :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="center">
          <l-icon class="map__icon">
            <img class="test" src="~assets/images/marker.svg" alt="Marker" />
            <img
              class="test1"
              src="~assets/images/logoBlack.svg"
              alt="Marker"
            />
          </l-icon>
        </l-marker>
      </l-map>
    </no-ssr>
    <div class="map__overlay"></div>
  </div>
</template>
<style lang="scss" scoped>
.test {
  position: absolute;
  bottom: 0;
}
.test1 {
  position: absolute;
  bottom: -1.5rem;
  left: 3rem;
}
.map {
  position: relative;
  height: 43rem;
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 500;
  }
  &__icon {
    display: flex;
  }
}
</style>
