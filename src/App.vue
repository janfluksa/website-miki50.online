<script setup>
import Header from './components/Header.vue';
import Section from './components/Section.vue';
import Col from './components/Col.vue';
import Tile from './components/Tile.vue';
</script>

<template>
  <Header />

  <Section>
    <Col>

      <Tile image="ondra.jpg">
        <h2>Všechno nejlepší k narozeninám! </h2>
        <p>Ať jsi vždy minimálně tak šťastný jako já se 4 párky v rohlíku.</p>
      </Tile>


      <Tile image="lucka.jpeg" dark>
        <h2>Nazdravi 🥂 </h2>
        <p>...k tem 30. a 20. narozeninam.</p>
      </Tile>

      <Tile image="renca.jpg">
        <h2>Milý Miki, </h2>
        <p>K tvým kulatým narozeninám Ti přeju, aby každý nový den byl pro Tebe barevnější, 
          než kterýkoli obrázek, co vytvoříš. Ať si stále <br>udržuješ ten skvělý humor <br>a pohodu, 
          které k Tobě <br>neodmyslitelně patří.
        </p>
        <p>Všechno nejlepší <br>a hodně zdraví! :-)</p>
        <p>PS: A snad brzy <br>naviděnou!</p>
      </Tile>


      <Tile image="martin.jpeg">
        <h2>Všechno nejlepší k narozeninám, </h2>
        <p>Miki! Ať máš pořád skvělé nápady, partu fajn lidí kolem sebe a udržíš si svou 
          okouzlující upřímnost. Zdravíčko ať slouží a život ať tě baví.</p>
      </Tile>

    </Col>

    <Col>

      <Tile video="misa.mp4" dark>
        <h2>Salud! 🥃</h2>
        <p>Ať ti to dál tančí jako doteď!</p>
      </Tile>

      
      <Tile image="alex.jpeg" dark>
        <h2>Všechno nejlepší</h2>
        <p>Buď turistou ve vlastním městě a vychutnej si dalších 50 let! ❤️</p>
      </Tile>


      <Tile image="michal.jpg">
        <h2>Všechno nejlepší</h2>
        <p>Ať je další 50 pořádná jízda, třeba i do Brna</p>
      </Tile>

      <Tile image="sarka.jpeg">
        <h2>Miki má narozeniny!!!</h2>
        <p>Přejeme ti se Žoldou všechno nejlepší! Všechno, <br>co si přeješ, ať se vyplní 
          a ať jsi stále tak super. <br>Doufám že spolu zažijeme ještě hodně srandy. <br>Mám tě ráda ❤️ 😉</p>
      </Tile>


    </Col>

  </Section>


  <main>
  </main>
</template>

<style lang="scss" scoped>

</style>
