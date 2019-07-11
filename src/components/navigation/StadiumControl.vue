<template>
  <div style="width: 100%; background-color:#fff; clear:both; float:none;">

    <div style="width:700px; float:left; margin-left:10px; height: 583px; overflow: auto;">
      <h2 class="cherry" style="text-align: left;">campaign select</h2>
      <h4>Bacardi</h4>
      <div style="width:100%;" v-for="item in bacardi" v-bind:key="item.id">
        <div style="float:left;width:20%; margin-right:8px;">
          <img :src="`https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${item.type}${item.name}.jpg`" style="width:100%;" @click="select(item)"/>
        </div>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>
      <h4>Draft Kings</h4>
      <div style="width:100%;" v-for="item in draftkings" v-bind:key="item.id">
        <div style="float:left;width:20%; margin-right:8px;">
          <img :src="`https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${item.type}${item.name}.jpg`" style="width:100%;" @click="select(item)" />
        </div>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>
      <h4>GameStop</h4>
      <div style="width:100%;" v-for="item in gameStop" v-bind:key="item.id">
        <div style="float:left;width:20%; margin-right:8px;">
          <img :src="`https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${item.type}${item.name}.jpg`" style="width:100%;" @click="select(item)" />
        </div>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>
      <h4>Nissan</h4>
      <div style="width:100%;" v-for="item in nissan" v-bind:key="item.id">
        <div style="float:left;width:20%; margin-right:8px;">
          <img :src="`https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${item.type}${item.name}.jpg`" style="width:100%;" @click="select(item)" />
        </div>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>
      <h4>State Farm</h4>
      <div style="width:100%;" v-for="item in stateFarm" v-bind:key="item.id">
        <div style="float:left;width:20%; margin-right:8px;">
          <img :src="`https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${item.type}${item.name}.jpg`" style="width:100%;" @click="select(item)" />
        </div>
      </div>
      <div style="clear:both; float:none; padding:1%;"></div>

    </div>
    <div style="width: 400px; float:left;">
      <h2 class="cherry" style="text-align: center; margin-right:10px;">Target Seat</h2>

      <div style="width:100%;">
        <div style="width:80%; padding:10%;">
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_1.jpg" width="25%; float:left;" @click="hello(1)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_2.jpg" width="25%; float:left;" @click="hello(2)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_3.jpg" width="25%; float:left;" @click="hello(3)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_4.jpg" width="25%; float:left;" @click="hello(4)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_5.jpg" width="25%; float:left;" @click="hello(5)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_6.jpg" width="25%; float:left;" @click="hello(6)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_7.jpg" width="25%; float:left;" @click="hello(7)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_8.jpg" width="25%; float:left;" @click="hello(8)" />
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_9.jpg" width="25%; float:left;" @click="hello(9)" />:
          <img src="https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/seating_chart_10.jpg" width="25%; float:left;" @click="hello(10)" />
        </div>
      </div>
   
      <br />
      <div style="width:100%; text-align: center;">
        <p>or</p>
        <button class="btn-send" @click="hello(0)" >SEND TO ALL</button>
      </div>
    </div>
    <div style="clear:both; float:none; padding:1%;"></div>
  </div>
</template>

<script>
export default {
  name: 'seat-control',
  data () {
    return {
      moduleId: null,
      moduleType: null,
      targetId: null,
      bacardi: [
        { name : 'Bacardi_1', type: 'MA_push_cards_'},
        { name : 'Bacardi_2', type: 'MA_push_cards_'},
        { name : 'Bacardi_3', type: 'MA_push_cards_'}
        // { name : 'Bacardi_4'}
      ],
      draftkings: [
        { name : 'DraftKings_1', type: 'MA_push_cards_'},
        { name : 'DraftKings_2', type: 'MA_push_cards_'},
        { name : 'DraftKings_3', type: 'MA_push_cards_'}
        // { name : 'DraftKings_4'},
      ],
      gameStop: [
        { name : 'GameStop_1', type: 'MA_push_cards_'},
        { name : 'GameStop_2', type: 'MA_push_cards_'},
        { name : 'GameStop_3', type: 'MA_push_cards_'}
      ],
      nissan: [
        { name : 'Nissan_1', type: 'MA_push_cards_'},
        { name : 'Nissan_2', type: 'MA_push_cards_'}
      ],
      stateFarm: [
        { name : 'StateFarm_1', type: 'MA_push_cards_'},
        { name : 'StateFarm_2', type: 'MA_push_cards_'}
      ],
      ads: [
        '"test":"https://mp.vibescm.com/c/72pb07", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/accessories.jpg"',
        '"test":"https://mp.vibescm.com/c/k2z56t", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/jerseys.jpg"',
      ],
      prizes: [
        '"test":"https://mp.vibescm.com/c/872fcf", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/chiefs_lexus.jpg"',
        '"test":"https://mp.vibescm.com/c/872fcf", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/chiefs_dog.jpg"',
        '"test":"https://mp.vibescm.com/c/872fcf", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/chiefs_pass.jpg"'
      ]
    }
  },
  methods: {
    hello (id) {
      if(this.moduleId != null) {
        this.targetId = id
        this.$emit('select-seat', id)
        console.log(id) 

        let dest = null

        let splitval = this.moduleId.split('_')
        let client = splitval[0].toLowerCase()

        switch (client) {
          case 'bacardi':
            dest = 'https://mp.vibescm.com/c/a1i8g6'
            break
          case 'draftkings':
            dest = 'https://mp.vibescm.com/c/l2evd7'
            break
          case 'nissan':
            dest = 'https://mp.vibescm.com/c/z4sii6'
            break
          case 'gamestop':
            dest = 'https://mp.vibescm.com/c/hej6d1'
            break
          case 'statefarm':
            dest = 'https://mp.vibescm.com/c/jtme8q'
            break
        }

        if(this.targetId == 0) {
          this.$socket.emit('sendToAll', '');
          this.$socket.emit('sendToAll',`{"test":"${dest}", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${this.moduleType}${this.moduleId}.jpg", "client":"${this.moduleId}"}`)
        } else {
          this.$socket.emit('sendToAll', '');
          this.$socket.emit('target', 'chiefs-seat' + this.targetId, `{"test":"${dest}", "img":"https://s3.us-east-2.amazonaws.com/ds-stadium-bucket/chiefs/${this.moduleType}${this.moduleId}.jpg", "client":"${this.moduleId}"}`)
        }
      } else {
        alert('You must select a module to send')
      }
    },
    select (id) {
      this.moduleId = id.name
      this.moduleType = id.type
    }
  }
}
</script>

<style>
.btn-send { border-radius: 0; font-size: 1.2em; padding: 8px 16px; background-color: #f19648; color:#fff; border: none; margin-top:16px; }
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
