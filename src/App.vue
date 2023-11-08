<template>
  <div id="app">

   <Header />
   <Home />
   <Footer />
    </div>
</template>

<script>
import './styles/global.css';

import Header from './components/Header'
import Home from './home/Home';
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header, 
    Home,
    Footer
  }
}
</script>

