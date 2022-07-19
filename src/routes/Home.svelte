<script>
    import Card from '../lib/Card.svelte'
    import InputPublisher from '../lib/InputPublisher.svelte'
    import InputFamily from '../lib/InputFamily.svelte';
    import InputKingdomHall from '../lib/InputKingdomHall.svelte';
    import InputHouse from '../lib/InputHouse.svelte';
    import Navbar from '../lib/Navbar.svelte'
   
    let lib=[
        {id:0, title:'Возвещатели собрания'},
        {id:1, title:'Члены семьи, живущие в одном доме (не Свидетели)'},
        {id:2, title:'Дома возвещателей'},
        {id:3, title:'Залы Царства'}
    ]
</script>

<div>
   <Navbar title="Molodejnoye"/>
    <div class="cards">
        <Card title={lib[0].title}><InputPublisher/></Card>
        <Card title={lib[1].title}><InputFamily/></Card>
        <Card title={lib[2].title}><InputHouse/></Card>
        <Card title={lib[3].title}><InputKingdomHall/></Card>
    </div>
</div>
<style>
     .cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>