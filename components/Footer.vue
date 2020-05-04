<template>
  <div class="footer">
    <nuxt-link to="/impressum" class="footer__impressum typo__whiteTextBold"
      >Impressum</nuxt-link
    >
    <img src="~/assets/images/logo.svg" class="footer__logo" />
    <nuxt-link to="/datenschutz" class="footer__datenschutz typo__whiteTextBold"
      >Datenschutz</nuxt-link
    >
  </div>
</template>
.<style lang="scss" scoped>
.footer {
  background-color: $grey;
  padding: 7.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &__logo {
    margin: 0 5rem;
  }
}
@media (max-width: 400px) {
  .footer {
    &__logo {
      margin: 0 2rem;
      width: 10rem;
    }
  }
}
</style>
