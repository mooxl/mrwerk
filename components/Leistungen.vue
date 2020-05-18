<template>
  <div id="leistungen">
    <div class="row">
      <div class="leistungen">
        <h2 class="leistungen__heading typo__leistungen">
          Leistungen im Bereich<br />Schrott & Altmetallhandel
        </h2>
        <div class="leistungen__split">
          <div
            class="leistungen__split--section leistungen__split--section-ankauf leistungen__split--section-big"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              Ankauf von Kupfer, Messing, VA (Edelstahl)
            </p>
            <div
              class="leistungen__split--section-text leistungen__split--section-text-ankauf typo__leistungenText"
            >
              <ul>
                <li>
                  <strong>Eisen</strong> wie Träger, Stahlguss, Autofelgen
                </li>
                <li><strong>Kupfer</strong> wie Rohre, Bleche, Kabel, Draht</li>
                <li><strong>Messing</strong> wie Wasserhähne, Rohre, Bleche</li>
                <li>
                  <strong>Aluminium</strong> wie Aluminiumfenster, Profile,
                  Bleche
                </li>
                <li>
                  und eine Vielzahl anderer Metalle wie
                  <strong>Zink, Edelstahl, Blei, Zinn</strong>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="leistungen__split--section leistungen__split--section-gitterboxen"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              Aufstellung von Gitterboxen
            </p>
            <p
              class="leistungen__split--section-text leistungen__split--section-text-aufstellung typo__leistungenText"
            >
              Sie haben wenig Platz oder benötigen mobile Schrottcontainers in
              Ihrem Betrieb. Wir haben die Lösung! Wir stellen Ihnen unsere
              Gitterboxen zur Verfügung und tauschen diese auf Abruf.
            </p>
          </div>
        </div>
        <div class="leistungen__split">
          <div
            class="leistungen__split--section leistungen__split--section-abholung"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              Abholung von Metall und Schrott
            </p>
          </div>
          <div
            class="leistungen__split--section leistungen__split--section-verwiegung leistungen__split--section-big"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              Verwiegung bis 150kg beim Kunden
            </p>
            <p
              class="leistungen__split--section-text leistungen__split--section-text-verwiegung typo__leistungenText"
            >
              Wir verwiegen Ihr Material bis zu einem Gesamtgewicht von 150kg
              direkt beim Kunden. Sollte es gewünscht werden kann das Material
              direkt vor Ort vergütet werden.
            </p>
          </div>
        </div>
        <div class="leistungen__split">
          <div
            class="leistungen__split--section  leistungen__split--section-demontage leistungen__split--section-big"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              Demontage
            </p>
            <p
              class="leistungen__split--section-text leistungen__split--section-text-demontage typo__leistungenText"
            >
              Sie haben eine Halle mit Schrott auszuräumen oder eine alte
              Maschine die entsorgt und demontiert werden soll? Wir unterbreiten
              Ihnen gerne ein Angebot für die Demontage. Setzen Sie sich gerne
              mit uns in Verbindung.
            </p>
          </div>
          <div
            class="leistungen__split--section leistungen__split--section-felgen"
          >
            <p
              class="leistungen__split--section-heading typo__leistungenHeading"
            >
              An-/Verkauf von Felgen, Kompletträdern und Ersatzteilen
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#leistungen {
  padding: 15rem 0;
  background-color: $grey;
}
.leistungen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &__heading {
    width: 100%;
    margin-bottom: 4rem;
  }
  &__split {
    width: calc(33.3333333% - 1.77777rem);
    &--section {
      position: relative;
      margin-bottom: 3rem;
      background-size: cover;
      background-position: center;
      padding: 4rem;
      height: 35rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      &-big {
        height: 50rem;
      }
      &-ankauf {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/ankauf.jpg");
      }
      &-gitterboxen {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/gitterboxen.jpg");
      }
      &-verwiegung {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/verwiegung.jpg");
      }
      &-demontage {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/worker.jpg");
      }
      &-abholung {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/abholung.jpg");
      }
      &-felgen {
        background-image: linear-gradient(rgba(black, 0.6), rgba(black, 0.6)),
          url("~assets/images/felgen.jpg");
        background-position: top;
      }

      &-text {
        height: 0;
        overflow: hidden;
        opacity: 0;
        transition: all 0.3s;
      }
      &:hover {
        .leistungen__split--section-text {
          margin-top: 1.5rem;
          opacity: 1;
          &-ankauf {
            height: 17rem;
          }
          &-demontage {
            height: 13rem;
          }
          &-aufstellung {
            height: 13rem;
          }
          &-verwiegung {
            height: 12rem;
          }
        }
      }
    }
  }
}
@media (max-width: 1550px) {
  .leistungen {
    &__split {
      &--section {
        &:hover {
          .leistungen__split--section-text {
            &-ankauf {
              height: 20rem;
            }
            &-demontage {
              height: 15rem;
            }
            &-aufstellung {
              height: 15rem;
            }
            &-verwiegung {
              height: 15rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1450px) {
  .leistungen {
    &__split {
      &--section {
        &:hover {
          .leistungen__split--section-text {
            &-ankauf {
              height: 25rem;
            }
            &-demontage {
              height: 20rem;
            }
            &-aufstellung {
              height: 17rem;
            }
            &-verwiegung {
              height: 16rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1250px) {
  .leistungen {
    &__split {
      &--section {
        &:hover {
          .leistungen__split--section-text {
            &-ankauf {
              height: 30rem;
            }
            &-demontage {
              height: 25rem;
            }
            &-aufstellung {
              height: 20rem;
            }
            &-verwiegung {
              height: 17rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1125px) {
  .leistungen {
    &__split {
      &--section {
        padding: 2rem;
        &:hover {
          .leistungen__split--section-text {
            &-ankauf {
              height: 35rem;
            }
            &-demontage {
              height: 25rem;
            }
            &-aufstellung {
              height: 22rem;
            }
            &-verwiegung {
              height: 20rem;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 900px) {
  #leistungen {
    padding: 10rem 0;
  }
  .leistungen {
    flex-wrap: wrap;
    &__split {
      width: 100%;
      &--section {
        padding: 2rem;
        height: auto;
        &-heading {
          margin-top: 10rem;
          text-align: center;
        }
        &-text {
          height: auto;
          opacity: 1;
          margin-top: 2rem;
          text-align: center;
        }
        &:hover {
          .leistungen__split--section-text {
            margin-top: 2rem;
            opacity: 1;
            &-ankauf {
              height: auto;
            }
            &-demontage {
              height: auto;
            }
            &-aufstellung {
              height: auto;
            }
            &-verwiegung {
              height: auto;
            }
          }
        }
      }
    }
  }
}
</style>
