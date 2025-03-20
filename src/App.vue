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
        <h2>Napis</h2>
        <p>text</p>
      </Tile>

    </Col>
    <Col>Right</Col>
  </Section>

  <Section>
    Ahoj
  </Section>

  <Section>
    Ahoj
  </Section>

  <main>
  </main>
</template>

<style lang="scss" scoped>

</style>
