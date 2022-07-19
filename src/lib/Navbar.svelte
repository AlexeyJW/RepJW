<script>
    import {Router, Link, Route} from 'svelte-routing';
    import Home from '../routes/Home.svelte'
    import LogOut from '../routes/LogOut.svelte';
    export let title;
  
    

</script>
<style>
  .navbar{
    background-color: #b97106;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>
<div class="navbar">
    <div class="title">
        <h2>{title}</h2>
    </div>
   <!-- <div class="router">
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="logout">Logout</Link>
        </nav>
       
    
    <div>
        <Route path="/"><Home/></Route>
        <Route path="logout" component={LogOut}/>
    </div>
    </Router>
   </div>
    -->
</div>