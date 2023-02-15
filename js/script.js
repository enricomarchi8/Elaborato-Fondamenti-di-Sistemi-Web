const Home = {
    data() {
        return {
            articoli: null     
        }
    }, 
    template: `
    <div id="sottotitolo">
        <div class="row mt-4 text-center">
            <h2>Articoli Recenti</h2>
        </div>
    </div>
    <div class="row ps-sm-5 pe-sm-5">
        <article v-bind:class="articolo['BootstrapHomeGrid']" v-for="articolo in articoli">
            <router-link v-bind:to="articolo['Percorso']">
                <div class="card border-0 articolo">
                    <img class="card-img card-img-home" v-bind:src="articolo['Immagine']" v-bind:alt="articolo['Alt']" />
                    <div class="card-img-overlay text-center">
                        <span class="badge rounded-pill badge-home">{{articolo['Titolo']}}</span>
                    </div>    
                </div>
            </router-link>
        </article>
    </div>
    `,
    methods: {
        getArticoli: function(){
            axios.get('./articoli.json')
              .then(response => {
                this.articoli = response.data
              });
        }
    },
    mounted(){
        this.getArticoli();
    }
};

const Articolo1 = {
    data() {
        return {
            articoli: null,
            path: "/articolo1",
            asidePaths: ["/articolo2","/articolo3"],
            font: null       
        }
    }, 
    template: `
    <div class="row col-1 offset-10 mt-3 d-lg-none">
        <nav class="navbar">
            <router-link to="/" class="btn border-0" href="/">
                <img src="img/home.png" id="home_img" alt="Vai alla homepage">
            </router-link>
        </nav>
    </div>
    <div class="row">
        <div class="col-sm-10 offset-sm-1 col-lg-6 col-xl-7 mt-2 mt-lg-4">
            <article v-for="articolo in articoli" v-show="articolo['Percorso'] == path" id="articolo" class="card bg-light mb-3 p-0">
                <div class="card-header row text-center m-0">
                    <div class="col d-flex align-self-center">
                        <button type="button" id="audio_btn" @click="leggiTesto">
                            <img type="icon" id="audio_img" src="/img/audio.png" alt="Leggi l'articolo">
                            <audio ref="audio">
                                <source v-bind:src="articolo['Audio']" type="audio/mpeg">
                            </audio>
                        </button>
                        <div class="articl_ttl col ps-2 pe-2">
                        <h3>{{articolo['Titolo']}}</h3>
                        </div>
                        <button type="button" id="text_btn" id="text_btn" @click="testoSemplificato">
                            <img type="icon" id="text_img" src="/img/text.png" alt="Testo semplificato">
                        </button>
                    </div> 
                </div> 
                <div class="card-body ms-4 me-4 mt-2 mb-2">
                    <p id="testoArticolo" class="card-text">
                    La SEO, ovvero "Search Engine Optimization", è il processo attraverso il quale si ottimizzano i contenuti di un sito web per migliorare la sua visibilità sui motori di ricerca. <br> In altre parole, la SEO è la pratica che consente di rendere un sito web più visibile nei risultati di ricerca organica, ovvero quelli non a pagamento. <br> Chi fa SEO in maniera professionale, ha la possibilità di ottenere un plus di visibilità e un vantaggio competitivo non indifferente. <br> Bisogna, tuttavia, tener presente che dietro questo risultato si nasconde sempre un lavoro lungo e complesso, fatto di attenzione ai dettagli e ai tecnicismi. <br> SEO è un investimento importante per far crescere il tuo business online. Devi quindi essere sicuro di scegliere i migliori consulenti SEO, in grado di fornirti servizi di qualità.
                    </p>
                </div>
            </article>
        </div>
        <aside class="col-4 col-xl-3 mt-4 ms-5 mt-4 pe-5 d-none d-lg-block">
            <div class="col-12">
            <div class="sottotitolo" id="sottotitolo">
                <div class="row text-center">
                    <h2>Articoli Recenti</h2>
                </div>
            </div>
            </div>
            <div class="col-12 mt-4 mb-5" v-for="articolo in articoli" v-show="asidePaths.includes(articolo['Percorso'])">
                <router-link v-bind:to="articolo['Percorso']">
                    <div class="card border-0 articolo">
                        <img class="card-img card-img-article" v-bind:src="articolo['Immagine']" v-bind:alt="articolo['Alt']">
                        <div class="card-img-overlay text-center">
                            <span class="badge rounded-pill badge-article">{{articolo['Titolo']}}</span>
                        </div>    
                    </div>
                </router-link>
            </div>
        </aside>
        <div class="row col mt-4">
        <button type="button" class="torna_su border-0" id="upBtn" @click="tornaSu">TORNA SU</button>
        </div>
    </div>
    `,
    methods: {
        getArticoli: function(){
            axios.get('./articoli.json')
              .then(response => {
                this.articoli = response.data
              });
        },
        leggiTesto: function(){
            if (this.$refs.audio[0].paused) {
                this.$refs.audio[0].play();
            }else{
                this.$refs.audio[0].pause();
            }
        },
        testoSemplificato: function(){
            if($("#testoArticolo").css("fontFamily") != "Dyslexic"){
                this.font = $("#testoArticolo").css("fontFamily");
                $("#testoArticolo").css("fontFamily", "Dyslexic");
            }else{
                $("#testoArticolo").css("fontFamily", this.font);
            }
        },
        tornaSu: function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    mounted(){
        this.getArticoli();
    }
}

const Articolo2 = {
    data() {
        return {
            articoli: null,
            path: "/articolo2",
            asidePaths: ["/articolo1","/articolo3"],
            font: null       
        }
    }, 
    template: `
    <div class="row col-1 offset-10 mt-3 d-lg-none">
        <nav class="navbar">
            <router-link to="/" class="btn border-0" href="/">
                <img src="img/home.png" id="home_img" alt="Vai alla homepage">
            </router-link>
        </nav>
    </div>
    <div class="row">
        <div class="col-sm-10 offset-sm-1 col-lg-6 col-xl-7 mt-2 mt-lg-4">
            <article v-for="articolo in articoli" v-show="articolo['Percorso'] == path" id="articolo" class="card bg-light mb-3 p-0">
                <div class="card-header row text-center m-0">
                    <div class="col d-flex align-self-center">
                        <button type="button" id="audio_btn" @click="leggiTesto">
                            <img type="icon" id="audio_img" src="/img/audio.png" alt="Leggi l'articolo">
                            <audio ref="audio">
                                <source v-bind:src="articolo['Audio']" type="audio/mpeg">
                            </audio>
                        </button>
                        <div class="articl_ttl col ps-2 pe-2">
                        <h3>{{articolo['Titolo']}}</h3>
                        </div>
                        <button type="button" id="text_btn" id="text_btn" @click="testoSemplificato">
                            <img type="icon" id="text_img" src="/img/text.png" alt="Testo semplificato">
                        </button>
                    </div> 
                </div> 
                <div class="card-body ms-4 me-4 mt-2 mb-2">
                    <p id="testoArticolo" class="card-text">
                    Investire in SEO conviene, soprattutto ragionando sul lungo termine. Ma quanto costa la SEO? Cifre esatte, ovviamente, non si possono dare, perché dipendono dai tariffari di ciascun professionista, è possibile farsi un’idea a livello budget. Da tenere conto c’è il fatto che un’attività di web marketing comprende tanti strumenti e solo su alcuni di questi avrà senso investire. E il budget che si ha a disposizione, in questo caso, ha una buona fetta di responsabilità, perché andrà gestito e suddiviso tra tutte le scelte di marketing che si andranno a fare. l’investimento specifico in SEO dovrà attestarsi tra un quarto e metà del budget a disposizione. La SEO sarà, infatti, solo una delle parti della strategia di comunicazione e sarà quindi, nel lungo periodo, complementare e integrativa di altre attività come la pubblicità sui social che, se fatta come si deve, può influenzare a livello di reputazione e autorevolezza di un marchio. Investire in SEO è cosa buona, investire in ciò che la SEO diventerà è cosa ottima. Le tendenze future di questo fondamentale strumento di web marketing sono:
                    <ul>
                      <li><b>Intelligenza artificiale:</b> giocherà un ruolo sempre più decisivo nella SEO. Il RankBrain, l’algoritmo di intelligenza artificiale di Google, sarà fondamentale nel ranking del motore di ricerca e presumibilmente baserà le sue preferenze sui cosiddetti Core Web Vitals, sulla user experience e sulla stabilità del sito.</li>
                      <li><b>Ricerca vocale:</b> nel prossimo futuro la ricerca vocale influirà in maniera decisiva sulle query di ricerca. L’avvento di Alexa, dell’assistente di Google e di Siri ha reso questa pratica più semplice e popolare, tanto che entro il 2022 più della metà delle famiglie (55%) possiederà un dispositivo intelligente di questo tipo. Sarà necessario, quindi, ottimizzare il proprio sito per la ricerca vocale non tanto con parole chiave ma con intere frasi chiave, usate spontaneamente dagli utenti a livello di parlato.</li>
                      <li><b>Mobile SEO:</b> entro il 2025 il 73% degli utenti accederà alla rete tramite dispositivi mobili. Già oggi, più della metà del traffico di ricerca proviene da smartphone o tablet. Anche Google si sta orientando in tale direzione, privilegiando i siti ottimizzati per i dispositivi mobili… a noialtri non resta che adeguarci.</li>
                      <li><b>Ottimizzazione video:</b> secondo Cisco, in futuro, il consumo di video supererà quello di tutte le altre tipologie di contenuto. Ottimizzare il contenuto video significa non solo ottimizzarne il nome, ma anche descrivere al meglio l’offerta del proprio canale video.</li>
                      <li><b>Ottimizzazione immagini:</b> stesso discorso vale per le immagini, la cui ottimizzazione, già oggi, ha un ruolo importante nelle indicizzazioni di Google. Il futuro vedrà un diverso e più accentuato utilizzo delle immagini online: serviranno per acquistare direttamente prodotti e ottenere informazioni, di conseguenza la loro ottimizzazione, tramite il Tag Alt, la pertinenza al contenuto e l’alta qualità, diventerà fondamentale. </li>
                    </ul>
                    </p>
                </div>
            </article>
        </div>
        <aside class="col-4 col-xl-3 mt-4 ms-5 mt-4 pe-5 d-none d-lg-block">
            <div class="col-12">
            <div class="sottotitolo" id="sottotitolo">
                <div class="row text-center">
                    <h2>Articoli Recenti</h2>
                </div>
            </div>
            </div>
            <div class="col-12 mt-4 mb-5" v-for="articolo in articoli" v-show="asidePaths.includes(articolo['Percorso'])">
                <router-link v-bind:to="articolo['Percorso']">
                    <div class="card border-0 articolo">
                        <img class="card-img card-img-article" v-bind:src="articolo['Immagine']" v-bind:alt="articolo['Alt']">
                        <div class="card-img-overlay text-center">
                            <span class="badge rounded-pill badge-article">{{articolo['Titolo']}}</span>
                        </div>    
                    </div>
                </router-link>
            </div>
        </aside>
        <div class="row col mt-4">
        <button type="button" class="torna_su border-0" id="upBtn" @click="tornaSu">TORNA SU</button>
        </div>
    </div>
    `,
    methods: {
        getArticoli: function(){
            axios.get('./articoli.json')
              .then(response => {
                this.articoli = response.data
              });
        },
        leggiTesto: function(){
            if (this.$refs.audio[1].paused) {
                this.$refs.audio[1].play();
            }else{
                this.$refs.audio[1].pause();
            }
        },
        testoSemplificato: function(){
            if($("#testoArticolo").css("fontFamily") != "Dyslexic"){
                this.font = $("#testoArticolo").css("fontFamily");
                $("#testoArticolo").css("fontFamily", "Dyslexic");
            }else{
                $("#testoArticolo").css("fontFamily", this.font);
            }
        },
        tornaSu: function(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    },
    mounted(){
        this.getArticoli();
    }
}

const Articolo3 = {
    data() {
        return {
            articoli: null,
            viewing: true,
            persone: null,
            selected: 0,
            path: "/articolo3",
            asidePaths: ["/articolo1","/articolo2"],
            reloaded: false
        }
    },
    template: `
    <div class="row col-1 offset-10 mt-3 d-lg-none">
        <nav class="navbar">
            <router-link to="/" class="btn border-0" href="/">
                <img src="img/home.png" id="home_img" alt="Vai alla homepage">
            </router-link>
        </nav>
    </div>
    <div class="row">
        <div class="col-sm-10 offset-sm-1 col-lg-6 col-xl-7 mt-2 mt-lg-4">
            <article id="articolo" class="card bg-light mb-3 p-0">
                <div class="card-header text-center">
                    <h3>Persone</h3>
                    <input type="checkbox" v-model="viewing" data-toggle="toggle" data-width="140" data-onlabel="<i class='fa fa-eye'></i> &nbsp;Visualizza" data-offlabel="<i class='fa fa-edit'></i> &nbsp;Modifica" data-onstyle="success" data-offstyle="danger">
                </div>
                <div class="card-body ms-3 me-3 ms-md-5 me-md-5 mt-2 mb-2">
                    <ul v-if="persone!=null && viewing" class="list-group list-group-flush bg-transparent">
                        <li v-for="persona in persone" class="list-group-item bg-transparent">{{persona.nome + " " + persona.cognome}}</li>
                    </ul>
                    <div>
                        <form v-if="persone!=null && !viewing">
                            <ul class="list-group list-group-flush bg-transparent">
                                <li class="list-group-item bg-transparent">
                                    <label for="persona_selezionata" class="form-label">Persona da modificare</label>
                                    <select id="persona_selezionata" v-model="selected" class="form-control">
                                        <option v-for="(persona, index) in persone" v-bind:value="index">{{persona.nome + " " + persona.cognome}}</option>
                                    </select>    
                                </li>
                                <li class="list-group-item bg-transparent">
                                    <label for="nome" class="form-label">Nome</label>
                                    <input v-model="persone[selected].nome" class="form-control" type="text" name="nome" id="nome"/>    
                                </li>
                                <li class="list-group-item bg-transparent">
                                    <label for="cognome" class="form-label">Cognome:</label>
                                    <input v-model="persone[selected].cognome" class="form-control" type="text" name="cognome" id="cognome"/>    
                                </li>
                                <li class="list-group-item bg-transparent text-center">
                                    <button id="save_btn" class="btn" @click.prevent="salvaDati">Salva</button>    
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </article>
        </div>
        <aside class="col-4 col-xl-3 mt-4 ms-5 mt-4 pe-5 d-none d-lg-block">
            <div class="col-12">
            <div class="sottotitolo" id="sottotitolo">
                <div class="row text-center">
                    <h2>Articoli Recenti</h2>
                </div>
            </div>
            </div>
            <div class="col-12 mt-4 mb-5" v-for="articolo in articoli" v-show="asidePaths.includes(articolo['Percorso'])">
                <router-link v-bind:to="articolo['Percorso']">
                    <div class="card border-0 articolo">
                        <img class="card-img card-img-article" v-bind:src="articolo['Immagine']" v-bind:alt="articolo['Alt']">
                        <div class="card-img-overlay text-center">
                            <span class="badge rounded-pill badge-article">{{articolo['Titolo']}}</span>
                        </div>    
                    </div>
                </router-link>
            </div>
        </aside>
    </div>
    `,
    methods: {
        getDati: function(){
            if(localStorage.getItem("dati")!=null){
                this.persone = JSON.parse(localStorage.getItem("dati"));
            }else{
            axios.get('./dati.json')
                .then(response => {
                    this.persone = response.data;
                });
            }       
        },
        salvaDati: function(){
          localStorage.setItem('dati', JSON.stringify(this.persone));
        },
        getArticoli: function(){
            axios.get('./articoli.json')
                .then(response => {
                this.articoli = response.data
            });
        }
    },
    mounted(){
        if (localStorage.getItem('reloaded')) {
            localStorage.removeItem('reloaded');
        } else {
            localStorage.setItem('reloaded', '1');
            location.reload();
        };
        this.getDati();
        this.getArticoli();
    }
}

const routes = [
  { path: '/', component: Home },
  { path: '/articolo1', component: Articolo1 },
  { path: '/articolo2', component: Articolo2 },
  { path: '/articolo3', component: Articolo3 }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');