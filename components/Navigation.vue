<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>

<template>
  <div id="navigation" :class="{ active: active }">
    <div class="row">
      <div class="navigation">
        <img class="navigation__logo" src="~/assets/images/logo.svg" />
        <div class="navigation__burger" @click="active = !active">
          <img
            src="~/assets/images/screwdriverRight.svg"
            class="navigation__burger--tool navigation__burger--top"
            :class="{ active: active }"
          />
          <img
            src="~/assets/images/wrench.svg"
            class="navigation__burger--tool navigation__burger--mid"
            :class="{ active: active }"
          />
          <img
            src="~/assets/images/screwdriverLeft.svg"
            class="navigation__burger--tool navigation__burger--bottom"
            :class="{ active: active }"
          />
        </div>
        <div class="navigation__links">
          <a
            href=""
            class="navigation__links--link typo__navigation"
            v-scroll-to="'#bieten'"
            >Was wir bieten</a
          >
          <a
            href=""
            class="navigation__links--link typo__navigation"
            v-scroll-to="'#wir'"
            >Wer wir sind</a
          >
          <a
            href=""
            class="navigation__links--link typo__navigation"
            v-scroll-to="'#kontakt'"
            >Kontakt</a
          >
        </div>
        <div class="navigation__linksMobile">
          <a
            class="navigation__linksMobile--link typo__navigationMobile"
            v-scroll-to="'#bieten'"
            @click="active = !active"
            >Was wir bieten</a
          >
          <a
            class="navigation__linksMobile--link typo__navigationMobile"
            v-scroll-to="'#wir'"
            @click="active = !active"
            >Wer wir sind</a
          >
          <a
            class="navigation__linksMobile--link typo__navigationMobile"
            v-scroll-to="'#kontakt'"
            @click="active = !active"
            >Kontakt</a
          >
          <nuxt-link
            to="/impressum"
            class="navigation__linksMobile--link typo__navigationMobile"
            v-scroll-to="'#wir'"
            @click="active = !active"
            >Impressum</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#navigation {
  position: absolute;
  width: 100%;
  height: 15rem;
  overflow: hidden;
}
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 0;
  &__logo {
    height: 9rem;
  }
  &__burger {
    display: none;
    z-index: 1000;
    padding: 1rem;
    &--tool {
      display: block;
      margin: -2.5rem 0;
      width: 4rem;
      transition: all 0.4s;
    }
    &--top {
      &.active {
        transform: rotate(-42deg) translate(-2px, 0px);
        transform-origin: center right;
      }
    }
    &--mid {
      &.active {
        opacity: 0;
      }
    }
    &--bottom {
      &.active {
        transform: rotate(48deg) translate(-2px, 2px);
        transform-origin: center right;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
  &__linksMobile {
    display: none;
    width: 100%;
    &--link {
      text-align: center;
      &:not(:last-child) {
        margin-bottom: 5rem;
      }
    }
  }
  &__links {
    z-index: 1;
    &--link {
      position: relative;
      transition: all 0.3s;
      &:not(:last-child) {
        margin-right: 10rem;
      }
      &:last-child {
        color: $yellow;
      }
      &::after {
        transition: all 0.3s;
        content: "";
        position: absolute;
        left: -1rem;
        bottom: 0;
        height: 0;
        width: calc(100% + 2rem);
        background-color: rgba(white, 0.9);
        z-index: -1;
      }
      &:hover {
        color: $grey;
        &::after {
          height: 100%;
        }
      }
    }
  }
}
@media (max-width: 1100px) {
  #navigation {
    z-index: 5;
    transition: all 0.4s;
    &.active {
      position: fixed;
      transition: height 0.2s;
      background-color: rgba(black, 0.9);
      height: 100vh;
    }
  }
  .navigation {
    &__burger {
      display: inline-block;
    }
    &__links {
      display: none;
    }
    &__linksMobile {
      display: block;
      position: absolute;
      top: 20rem;
      &--link {
        display: block;
      }
    }
  }
}
@media (max-width: 350px) {
  .navigation {
    &__linksMobile {
      display: block;
      position: absolute;
      top: 17rem;
      &--link {
        display: block;
        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
