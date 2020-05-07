<script>
export default {
  data() {
    return {
      width: 0
    };
  },
  computed: {
    computedWidth: function() {
      return this.width;
    }
  },
  mounted() {
    this.width = this.$refs.heading.clientWidth;
  }
};
</script>

<template>
  <div id="start">
    <div class="row">
      <div class="start">
        <div class="start__container">
          <h1 class="start__container--heading typo__start" ref="heading">
            Mehr als <br />
            Schrott
          </h1>
          <p
            class="start__container--text typo__white"
            :style="{ width: computedWidth + 'px' }"
          >
            Mit uns können sie Ihren Schrott schnell, einfach und nachhaltig
            entsorgen. Wir bieten bei Bedarf einen Abholservice und recyceln die
            Rohstoffe dann bei uns, sodass sie dem Wertstoffkreislauf
            fachgerecht zurückgeführt werden und unsere Umwelt nicht unnötig
            belasten. Stahlschrotte und Metalle können zum Beispiel zu 100%
            wiederverwertet werden, wenn diese getrennt und sortiert werden.
            <br /><br />
            Rufen sie uns an, denn Ihr Schrott gehört noch längst nicht zum
            alten Eisen!
          </p>
          <a
            v-scroll-to="'#bieten'"
            class="start__container--button button button__white"
            >Was wir bieten</a
          >
          <a
            v-scroll-to="'#kontakt'"
            class="start__container--button button button__yellow"
            >Kontakt</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#start {
  min-height: 100vh;
  background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
    url("~assets/images/start.jpg");
  background-size: cover;
  background-position: center;
  z-index: -2;
}
.start {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 17rem 0 12rem 0;
  &__container {
    &--heading {
      margin-bottom: 2rem;
    }
    &--text {
      margin-bottom: 5rem;
    }
  }
}
.button__yellow {
  display: none;
}
@media (max-width: 1100px) {
  .button {
    &__white {
      display: none;
    }
    &__yellow {
      display: inline-block;
    }
  }
}
</style>
