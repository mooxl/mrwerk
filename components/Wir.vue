<template>
  <div id="wir">
    <div class="wir">
      <div class="wir__left"></div>
      <div class="wir__right">
        <img
          src="~/assets/images/werwirsind.svg"
          alt="Wer wir sind"
          class="wir__right--heading"
        />
        <div class="wir__right--text typo__grey">
          Wir, die Existenzgründer Julian Vogel und Matthias Fehr bilden ein
          junges Team, das schon immer in den Bereichen Schrott und
          Metallrecycling gearbeitet hat. <br />
          <br />
          Wir sind davon überzeugt, dass Recycling einen erheblichen Beitrag zur
          Schonung der Umweltressourcen beitragen wird. Aus diesem Grund haben
          wir uns Anfang 2020 entschlossen einen kleinen Entsorgungsbetrieb
          aufzubauen. Wir möchten unseren Kunden kostengünstige und schnelle
          Lösungen anbieten. <br />
          <br />
          Bei uns sind die Wege kurz! Sie können sicher sein, dass Ihr Anliegen
          sofort bearbeitet wird und nicht erst an die „nächste zuständige
          Abteilung“ verwiesen wird.
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wir {
  display: flex;
  &__left {
    width: 50%;
    background-size: cover;
    background-position: center;
    background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
      url("~assets/images/worker.jpg");
  }
  &__right {
    width: 50%;
    padding: 12.5rem 7.5rem;
    &--heading {
      margin-bottom: 4rem;
    }
    &--text {
      max-width: 53rem;
    }
  }
}
@media (max-width: 950px) {
  .wir {
    flex-wrap: wrap;
    &__left {
      width: 100%;
      height: 30vh;
    }
    &__right {
      padding: 10rem 5rem;
      &--heading {
        display: block;
        margin: 0 auto 7.5rem auto;
        width: 100%;
        max-height: 8.4rem;
      }
      &--text {
        max-width: 100rem;
      }
      width: 100%;
    }
  }
}
</style>
