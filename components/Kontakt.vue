<template>
  <div id="kontakt">
    <div class="row">
      <div class="kontakt">
        <img
          src="~/assets/images/nimmkontaktauf.svg"
          alt=""
          class="kontakt__heading"
        />
        <div class="kontakt__container">
          <div class="kontakt__container--left">
            <div class="kontakt__container--left-wrapper information">
              <h2 class="information__heading typo__whiteHeading">Adresse</h2>
              <p class="information__text typo__whiteText">
                Metall- & Räderwerk Iserlohn GmbH & Co. KG <br />
                Corunnastraße 1 <br />
                58636 Iserlohn
              </p>
            </div>
            <div class="kontakt__container--left-wrapper information">
              <h2 class="information__heading typo__whiteHeading">
                Vertreten durch
              </h2>
              <p class="information__text typo__whiteText">
                Julian Vogel <br />
                Matthias Fehr
              </p>
            </div>
          </div>
          <div class="kontakt__container--middle">
            <div class="kontakt__container--left-wrapper information">
              <h2 class="information__heading typo__whiteHeading">Mobil</h2>
              <p class="information__text typo__whiteText">
                Vogel: <a href="tel:+49157318391 53">+49 157 31 83 91 53</a>
                <br />
                Fehr: <a href="tel:+4917696989995">+49 176 96 98 99 95</a>
              </p>
            </div>
            <div class="kontakt__container--left-wrapper information">
              <h2 class="information__heading typo__whiteHeading">Mail</h2>
              <p class="information__text typo__whiteText">
                <a href="mailto:info@mr-werk-iserlohn.de"
                  >info@mr-werk-iserlohn.de</a
                >
                <br />
                <a href="mailto:m.fehr@mr-werk-iserlohn.de"
                  >m.fehr@mr-werk-iserlohn.de</a
                >
              </p>
            </div>
          </div>
          <div class="kontakt__container--right">
            <a
              href="mailto:info@mr-werk-iserlohn.de"
              class="kontakt__container--left-wrapper button desktop"
            >
              Schreibe uns
            </a>
            <a
              href="tel:+4915731839153"
              class="kontakt__container--left-wrapper button mobile"
            >
              Rufe uns an
            </a>
            <a
              href="https://goo.gl/maps/bexjVRnuyfR2C3Bb9"
              target="_blank"
              class="kontakt__container--left-wrapper button"
            >
              Besuche uns
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#kontakt {
  background-color: $grey;
}
a {
  color: white;
}
.mobile {
  display: none;
}
.kontakt {
  padding: 9.6rem 0;
  &__heading {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-height: 8.4rem;
  }
  &__container {
    display: flex;
    justify-content: space-around;
    margin-top: 8.7rem;
    &--left,
    &--middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &--right {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
.information {
  &__heading {
    margin-bottom: 1.3rem;
  }
  &__mobile {
    display: none;
  }
  &:first-child {
    margin-bottom: 5.4rem;
  }
}
@media (max-width: 1300px) {
  .kontakt {
    &__container {
      justify-content: space-between;
    }
  }
}
@media (max-width: 760px) {
  .information {
    &__mobile {
      display: block;
    }
  }
  .kontakt {
    &__container {
      flex-wrap: wrap;
      &--right {
        margin-top: 6rem;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
}
@media (max-width: 600px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
  .kontakt {
    &__container {
      flex-wrap: wrap;
      &--left,
      &--middle {
        width: 100%;
      }
      &--left {
        margin-bottom: 5.4rem;
      }
    }
  }
}
</style>
