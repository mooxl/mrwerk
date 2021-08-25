<template>
  <div class="footer">
    <nuxt-link to="/impressum" class="footer__impressum typo__whiteTextBold"
      >Impressum / AGBs</nuxt-link
    >
    <img src="~/assets/images/logo.svg" class="footer__logo" />
    <nuxt-link to="/datenschutz" class="footer__datenschutz typo__whiteTextBold"
      >Datenschutz</nuxt-link
    >
  </div>
</template>
.<style lang="scss" scoped>
.becurly {
  position: absolute;
  right: 0;
  top: 50%;
  font-size: 2rem;
  font-weight: bold;
  transform: rotate(-90deg);
  color: #2e2e2e;
  transition: all 0.2s;
  &:hover {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.footer {
  position: relative;
  background-color: $grey;
  padding: 7.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  &__logo {
    margin: 0 5rem;
  }
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media (max-width: 700px) {
  .footer {
    flex-wrap: wrap;
    &__impressum {
      width: 100%;
      text-align: center;
      margin-bottom: 3rem;
    }
    &__datenschutz {
      width: 100%;
      text-align: center;
    }
    &__logo {
      width: 10rem;
      margin-bottom: 3rem;
    }
  }
}
</style>
