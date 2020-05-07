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
          </div>
          <div class="bieten__container--element">
            <img
              src="~/assets/images/leaf.svg"
              alt="Blatt"
              class="bieten__container--element-icon"
            />
            <h2 class="bieten__container--element-heading">
              Nachhaltige Entsorgung & Recycling
            </h2>
          </div>
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
    justify-content: space-between;
    &--element {
      text-align: center;
      width: 25%;
      &-icon {
        width: 20%;
        margin-bottom: 2.5rem;
        max-width: 7rem;
      }
      &-heading {
        margin-bottom: 2.5rem;
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
@media (max-width: 600px) {
  .bieten {
    &__container {
      flex-wrap: wrap;
      &--element {
        width: 100%;
        &:not(:last-child) {
          margin-bottom: 5rem;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
