<script>
import Navigation from "~/components/Navigation";
import Start from "~/components/Start";
import Bieten from "~/components/Bieten";
import Leistungen from "~/components/Leistungen";
import Wir from "~/components/Wir";
import Kontakt from "~/components/Kontakt";
import Map from "~/components/Map";
import Footer from "~/components/Footer";
export default {
  components: {
    Navigation,
    Start,
    Bieten,
    Leistungen,
    Wir,
    Kontakt,
    Map,
    Footer
  }
};
</script>

<template>
  <div class="mrwerk">
    <Navigation />
    <Start />
    <Bieten />
    <Leistungen />
    <Wir />
    <Kontakt />
    <Map />
    <Footer />
  </div>
</template>
