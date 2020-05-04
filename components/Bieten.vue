<template>
  <div id="bieten">
    <div class="row">
      <div class="bieten">
        <img
          src="~/assets/images/waswirbieten.svg"
          alt="Was wir bieten"
          class="bieten__heading"
        />
        <div class="bieten__container">
          <div class="bieten__container--element">
            <img
              src="~/assets/images/recycling.svg"
              alt="Recycling"
              class="bieten__container--element-icon"
            />
            <h2 class="bieten__container--element-heading">
              Schrott & Altmetallhandel
            </h2>
            <p class="bieten__container--element-text typo__grey">
              Sie gingen weiter. Immer auf der Suche nach neuen Steinhäufchen.
              Das zweite Türmchen stand auf der Glitzerlichtung.
            </p>
          </div>
          <div class="bieten__container--element">
            <img
              src="~/assets/images/tire.svg"
              alt="Tire"
              class="bieten__container--element-icon"
            />
            <h2 class="bieten__container--element-heading">
              Handel mit Ersatzteilen & Kompletträdern
            </h2>
            <p class="bieten__container--element-text typo__grey">
              Sie gingen weiter. Immer auf der Suche nach neuen Steinhäufchen.
              Das zweite Türmchen stand auf der Glitzerlichtung.
            </p>
          </div>
          <!-- <div class="bieten__container--element">
            <img
              src="~/assets/images/truck.svg"
              alt="Truck"
              class="bieten__container--element-icon"
            />
            <h2 class="bieten__container--element-heading">
              Bauschuttentsorgung
            </h2>
            <p class="bieten__container--element-text typo__grey">
              Sie gingen weiter. Immer auf der Suche nach neuen Steinhäufchen.
              Das zweite Türmchen stand auf der Glitzerlichtung. Wir sind immer
              da.
            </p>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bieten {
  padding: 10rem 0;
  &__heading {
    display: block;
    margin: 0 auto 10rem auto;
    width: 100%;
    max-height: 8.4rem;
  }
  &__container {
    display: flex;
    justify-content: center;
    &--element {
      width: 18%;
      text-align: center;
      &:first-child {
        margin-right: 20%;
      }
      &-icon {
        margin-bottom: 2.5rem;
      }
      &-heading {
        margin-bottom: 2.5rem;
      }
    }
  }
}
@media (max-width: 1200px) {
  .bieten {
    &__container {
      &--element {
        width: 22%;
      }
    }
  }
}
@media (max-width: 1200px) {
  .bieten {
    &__container {
      &--element {
        width: 25%;
      }
    }
  }
}
@media (max-width: 1000px) {
  .bieten {
    &__container {
      &--element {
        width: 30%;
      }
    }
  }
}
@media (max-width: 800px) {
  .bieten {
    &__container {
      &--element {
        width: 40%;
      }
    }
  }
}
@media (max-width: 500px) {
  .bieten {
    &__container {
      flex-wrap: wrap;
      &--element {
        width: 100%;
        &:first-child {
          margin-bottom: 5rem;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
