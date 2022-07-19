<script>
   import {onDestroy } from "svelte/internal";
   import {onMount} from 'svelte'
   import {db, getDocFamily, getDocPublisher} from './db' 
   import Login from './lib/Login.svelte'
   import Footer from './lib/Footer.svelte'
   import {auth} from './store/auth'
   import Router from 'svelte-spa-router'
import Home from "./routes/Home.svelte";
      

   let authValue;
   auth.subscribe(value=>{
    authValue=value
   })

   const routes={
    '/':Home,
    '/login':Login
   }
   onMount(()=>{
      console.log ('db',db)
      // console.log("get doc", getDocPublisher())
    })

    async function docConsole(){
      console.log('get doc')
      await getDocPublisher()
      await getDocFamily()
    }
onDestroy
  
</script>

<main>
  
  {#if authValue}
     <Router {routes}/>
     
  {:else}
     <Login on:login={docConsole}/>
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  /* img {
    height: 16rem;
    width: 16rem;
  } */
 

 
  @media (min-width: 480px) {
   
  }
</style>
