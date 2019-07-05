<template>
  <svg id="ad8020f8-093f-44db-b40f-c83ce7d89604" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641.38 610.29" width="400">
    <polygon class="b3918f44-3b10-461b-883d-95a17337c056" points="417.77 375.68 440.69 305.15 640.69 305.15 579.57 493.24 417.77 375.68" @click="hello(4)"/>
    <polygon class="b8dfe3ff-ec7c-40a7-a4ba-ee1aadfd1ea8" points="357.77 191.02 417.77 234.61 579.57 117.06 419.57 0.81 357.77 191.02" @click="hello(2)"/>
    <polygon class="bb46db2e-1648-4457-a4bb-d20e084132d5" points="417.77 375.68 357.77 419.27 419.57 609.49 579.57 493.24 417.77 375.68" @click="hello(5)"/>
    <polygon class="fb3abca2-65b2-44ed-b72f-0461fb7414a3" points="283.61 419.27 357.77 419.27 419.57 609.49 221.8 609.49 283.61 419.27" @click="hello(6)"/>
    <polygon class="b97cced5-57c2-4279-bfda-747544918ba8" points="283.61 419.27 223.61 375.68 61.8 493.24 221.8 609.49 283.61 419.27" @click="hello(7)"/>
    <polygon class="a14a0856-32ba-4e3b-83c9-5f097b1fc69b" points="223.61 375.68 200.69 305.15 0.69 305.15 61.8 493.24 223.61 375.68" @click="hello(8)"/>
    <polygon class="f3dc304b-e5c2-41d0-8d6e-c191d732a2a5" points="200.69 305.15 223.61 234.61 61.8 117.06 0.69 305.15 200.69 305.15" @click="hello(9)"/>
    <polygon class="f8ec2580-9b5f-42a3-b2af-7ca27be89717" points="223.61 234.61 283.61 191.02 221.8 0.81 61.8 117.06 223.61 234.61" @click="hello(10)"/>
    <polygon class="bd74362f-e9b7-42de-812c-e1ced1ee9f7b" points="283.61 191.02 357.77 191.02 419.57 0.81 221.8 0.81 283.61 191.02" @click="hello(1)"/>
    <polygon class="b0711603-50fc-4573-9abf-f6a8c1bb1d1c" points="440.69 305.15 417.77 234.61 579.57 117.06 640.69 305.15 440.69 305.15" @click="hello(3)"/>
  </svg>
</template>

<script>
export default {
  name: 'seat-control',
  data () {
    return {

    }
  },
  methods: {
    hello (id) {
      alert(`hello ${id}`)
    }
  }
}
</script>

<style>
.a14a0856-32ba-4e3b-83c9-5f097b1fc69b,.b0711603-50fc-4573-9abf-f6a8c1bb1d1c,.b3918f44-3b10-461b-883d-95a17337c056,.b8dfe3ff-ec7c-40a7-a4ba-ee1aadfd1ea8,.b97cced5-57c2-4279-bfda-747544918ba8,.bb46db2e-1648-4457-a4bb-d20e084132d5,.bd74362f-e9b7-42de-812c-e1ced1ee9f7b,.f3dc304b-e5c2-41d0-8d6e-c191d732a2a5,.f8ec2580-9b5f-42a3-b2af-7ca27be89717,.fb3abca2-65b2-44ed-b72f-0461fb7414a3{stroke:#000;stroke-miterlimit:10;}
.b3918f44-3b10-461b-883d-95a17337c056{fill:#00c3ff;}
.b8dfe3ff-ec7c-40a7-a4ba-ee1aadfd1ea8{fill:#ffc700;}
.bb46db2e-1648-4457-a4bb-d20e084132d5{fill:#0049ff;}
.fb3abca2-65b2-44ed-b72f-0461fb7414a3{fill:#0029ff;}
.b97cced5-57c2-4279-bfda-747544918ba8{fill:#0091ff;}
.a14a0856-32ba-4e3b-83c9-5f097b1fc69b{fill:#bd91ff;}
.f3dc304b-e5c2-41d0-8d6e-c191d732a2a5{fill:#ffa183;}
.f8ec2580-9b5f-42a3-b2af-7ca27be89717{fill:#ff5e00;}
.bd74362f-e9b7-42de-812c-e1ced1ee9f7b{fill:#f80;}
.b0711603-50fc-4573-9abf-f6a8c1bb1d1c{fill:#ff0;}
</style>
