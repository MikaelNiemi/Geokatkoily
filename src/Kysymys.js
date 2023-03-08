import './App.css';
import Kuva1 from './Kuva1.jpg';
import Kuva2 from './Kuva2.jpg';
import Kuva3 from './Kuva3.jpg';
import Kuva4 from './Kuva4.jpg';
import Kuva5 from './Kuva5.jpg';

function Kysymys({KysymyksetEteenpain}) {

    switch(KysymyksetEteenpain) {
        case 0:
            return(
                <div>
                    <h1>1.	Laulu 20 perheestä</h1>
                    <p>Koordinaatit ovat muotoa:</p>
                    <h2>60° XX.XXX 022° XX.XXX</h2>
                    <p>Matti oli elämässään tavannut 20 upeata perhettä. Hän päätti tehdä heistä laulun. Rosenlewin perhe oli todella säkenöivä ja heidän kanssaan Matilla oli ollut aina hauskaa. Wasastjernan perheessä oli äiti, isä ja kaksi vallatonta lasta. Lapsien kanssa sattui ja tapahtui. Matilla ei ollut omia lapsia, joten heidän vilkkautensa ei häntä haitannut. Päinvastoin, hänestä oli hauska seurata lasten kommelluksia. Frenckell-perhe oli vielä hieman vieras. He olivat vielä tutustumisvaiheessa. Perheen isä oli klovni ja Matti kävi hänen esityksiään katsomassa aina kun voi. Björnbergit hän on tuntenut jo lapsesta asti. Heidän perheen äiti ja isä olivat hänen lapsuudenkavereitaan. Perhe oli hänelle kaikkein läheisin. Serlachiukset olivat muuttaneet ulkomailta ja heillä oli aina mukavia kertomuksia Afrikan viidakosta. Serlachius oli hyvin harvinainen nimi ja Matilla oli vaikeuksia ääntää nimi oikein. Virkkusten isä oli nimensä mukainen virkkunen. Isä heräsi kukonlaulun aikaan joka aamu. Onneksi hän ei silti soitellut Matille siihen aikoihin. Matti tykkäsi nukkua pitkään. Kaikkien nimiä ei tässä kohtaa nyt mainita. Viimeisin perhe pitää vielä mainita, sillä Waldenin perheen tytär menee naimisiin Matin siskonpojan kanssa. Se on Matille tärkeä asia, sillä siskonpoika on hänen kummipoikansa. Hän sisällyttää senkin asian lauluunsa. Laulu julkaistaan helmikuussa 2030. </p>
                    <p>Mutta miten ne koordinaatit, mistäs ne syntyikään…</p>
                </div>
            )


        case 1:
            return(
                <div>
                    <h1>2.	Geokätköilyä sinne tänne</h1>
                    <p>Mister Geokätköilijä mietti, että mihin sitä tällä kertaa lähtisi. Hetken mietittyään, hän päätti lähteä Forssaan. Forssassa hän vietti päivän kierrellen eri museoissa. Hän ei löytänyt sieltä muuta kiinnostavaa, niin hän päätti siirtyä seuraavaan paikkaan. Pohjois-Karjalassa hän ei aiemmin ole ollut, joten hän päätti suunnistaa seuraavaksi sinnepäin. Kohteeksi valikoitui Outokumpu. Hänellä kävi onni, kun hän tapasi Anna Puun Outokummun torilla. Hän oli keskittynyt puhelimeensa, kun hän törmäsi yhtäkkiä Annan selkään. Geokätköilijä pahoitteli ja kehui Annan laulutaitoa. Annalla oli kiire, joten sananvaihto jäi lyhyeen.  Geokätköilijä kyllästyi Outokummun maisemiin ja halusi jo pikaisesti toiseen paikkaan. Hän otti seuraavaksi suunnaksi Pirkanmaan Akaan. Akaa ja sen veturimuseo oli Geokätköilijältä kokematta. </p>
                    <p>Yhtäkkiä Geokätköilijälle tuli koti-ikävä ja hän halusi palata kotiin. Kankaanpää oli hänen tuttu ja turvallinen kotinsa. Hän tapaili kavereitaan ja unohti hetkeksi kätköilyn. Tätä kului noin viikko, kun taas matkakuume iski. Tällä kertaa hän päätti valita suunnaksi Enonkosken. Enonkoski sijaitsi Etelä-Savossa. Siellä voisi kätköillä. Hämärän tullessa voisi mennä seuraamaan Enonkosken Pyrintöä, kun ei Geokätköilijä välittänyt oikein pimeäkätköistä. Etelä-Pohjanmaan puukkojunkkarit kiinnostivat myös Geokätköilijää, siksi hän päätti valita seuraavaksi kohteeksi Evijärven. Evijärven Vasikka-ahon markkinat kuulostivat kivoilta, joten sinne heinäkuussa oli kiva matkustaa. Geokätköilijän loma loppuikin heinäkuun viimeisenä sunnuntaina, joten Evijärvi jäisi viimeiseksi kohteeksi.</p>
                </div>
            )

        case 2:
            return(
                <div>
                    <h1>3.	Wikipedia</h1>
                    <p>Sika eli kesysika (Sus scrofa domestica) on eurooppalaisesta villisiasta hyötyeläimeksi jalostettu alalaji, jota kasvatetaan yleisesti lihan ja usein myös nahan tuotantoa varten. Kesysika ja villisika ovat samaa lajia, mutta niiden välillä on eroja. Tehotuotantoon jalostettu kalju kesysika kasvaa 5–6 kertaa villisikaa nopeammin ja sen liha on väriltään paljon vaaleampaa ja maultaan miedompaa. Kesysika on myös hintelämpi ja sillä on lyhyemmät jalat.</p>
                    <p>Italiassa sikoja käytetään myös tryffelien etsijöinä. Joitakin sikoja pidetään myös lemmikkieläiminä, erityisesti minipossuja. Sika on hyvin sosiaalinen eläin, joka elää laumassa. Kesysika porsii ympäri vuoden ja tuottaa vuoden aikana 2–3 pahnuetta. Kesysian pahnueessa on noin 12 porsasta. Villisian pahnuekoko on vain noin 4-6 porsasta. Villisika tuottaa yhden pahnueen kerran vuodessa, ja se porsii kevätkesällä. Näin se turvaa porsaille ravinnon ja paremmat olosuhteet. Kesysika voi kasvaa huomattavasti suuremmaksi kuin villisika: suurimmat kesysiat ovat painaneet 900 kilogrammaa, mutta painavimmat villisiat vain hieman yli 300 kilogrammaa.</p>
                    <p>Aikuinen naaras on emakko ja uros on karju. Sian poikanen on nimeltään porsas. Itäiset perinteiset nimitykset ovat potsi, porsas, imisä ja orasa. Puhekielessä porsasta, kuten myös uudempaa termiä possu käytetään usein sian tai sianlihan synonyyminä. Imisä voi tarkoittaa myös teuraaksi kasvatettavaa naarassikaa ja orasa kastroitua teuraaksi kasvatettavaa urossikaa. Sika elää noin 20-vuotiaaksi, jos sitä ei teurasteta.</p>
                    <p>Nukkumis- ja lämmittelysuojaksi sioilla saattoi olla ulkosalla olkikasoja, joihin ne kaivautuivat. Luontaisesti siat syövät juuria, marjoja, sieniä, kasvien osia ja jopa raatoja, eivätkä ne kesäaikaan tarvinneet juuri muuta lisäruokaa kuin ihmistalouden ruoan tähteitä ja sitäkin vain kesyyden säilyttämiseksi. Talvella niille sekoitettiin tai keitettiin ruuantähteistä ja juureksista erityistä sianruokaa ja lisäksi ne söivät ulkosalta löytämiään ihmisten ja hevosten ulosteita. Yöksi ne päästettiin yleensä omaan suojaansa eli lättiin tai sikopajaan. Tällaisen sian lihominen teurastuskuntoon kesti viisikin vuotta. Talousporsaaksi sanottiin 1900-luvulla kotitaloudessa elävää sikaa, jota pidettiin sisätiloissa usein vain pikkuporsaana. Sitä ruokittiin ja lihotettiin, kunnes se teurastettiin jouluksi.</p>
                    <p>Lainsäädäntö määrää sioille mahdollisuuden seisoma- ja makuutiloihin luonnollisessa asennossa. Sian pitopaikka on karsina, sikojen ulkoilualue on tarha ja sikojen pitopaikkana käytettävää rakennusta kutsutaan nykyään sikalaksi. Aikaisemmin sitä sanottiin muun muassa lätiksi tai sikopajaksi. Sian pitopaikan täytyy olla riittävän tilava, valoisa, turvallinen, toimia suojana, ilmastoitu ja tyydyttää sian tarpeet. Sian tarpeisiin kuuluvat muun muassa maaperän tonkiminen kärsällä ja rypeminen eli mutakylvyt. Sialla on oltava karsinassa makuu-, ruokinta- ja ulostusalueet. </p>
                    <p>Imetysaikana lainsäädäntöä ei tarvitse noudattaa. Tällöin emakoita saa pitää porsitus- eli emakkohäkissä. Ollessaan emakkohäkissä, ne eivät kykene kuukauteen liikkumaan tai kääntymään ympäri. Makuualueen on oltava kuiva ja puhdas. Sika on hyvin siisti eläin, ja jos se saa elää tilavassa karsinassa, tekee se tarpeensa vain tiettyyn kohtaan. Sioilla ei ole toimivia hikirauhasia ihossaan, minkä vuoksi niiden kyky johtaa vettä ja tätä kautta lämpöä iholtaan on huono. Tämän vuoksi siat säätelevät ruumiinlämpöään pääasiassa käyttäytymisellään. Vapaana ollessaan sika hakeutuukin kuumalla säällä rypemään savi- tai mutakuoppaan.</p>
                    <p>Hedelmöittämiseen käytetään joko keinosiemennystä tai karjua. Porsaat voidaan vieroittaa emakosta 21 päivän ikäisenä, mikäli siihen on tarvetta, kuitenkin mieluiten vasta 28 päivän ikäisenä. Lihasiat kuljetetaan teurastamolle noin puolen vuoden ikäisenä. Suomessa teurastetaan vuosittain yli kaksi miljoonaa sikaa. Sika mielletään usein kulttuurissa epäsiistiksi, huonotapaiseksi ja ahmatiksi. Myös huonotapaista ihmistä (yleensä miestä) sanotaan siaksi. Porsastelu tarkoittaa esimerkiksi epäsiistiä syömistä, sikailu itsekästä, häikäilemätöntä käytöstä, esimerkiksi rahan huijaamista. Epäkohteliaasta ihmisestä voidaan käyttää adjektiivia sikamainen.</p>
                    <p>Aikoinaan 1900-luvun alussa Itä-Suomessa kasvatettiin pirtasioiksi kutsuttuja maatiaissikoja, jotka muistuttivat ulkonäöltään enemmän villisikaa kuin kesysikaa. 1950-luvulle saakka maatiaissikoja kasvatettiin vapaina, ja ne saivat liikkua kaikkialla aidattujen viljelysten ulkopuolella. Länsi-Suomessa oli oma maatiaissikansa ja Savossa ja Karjalassa omansa. Läntisellä sialla oli luppakorvat, karjalais-savolaisella pystyt korvat. Molemmat kannat ovat hävinneet risteytysten vuoksi. Maatiaissioilla oli villisikojen tapaan paksu turkki ja ne kestivät paljon paremmin kylmää kuin nykyiset, lähes harjaksettomiksi jalostetut siat.</p>
                </div>
            )

        case 3:
            return(
                <div>
                    <h1>4.	Hyppääjien unelma 1988</h1>
                    <p>Koordinaatit ovat muotoa</p>
                    <h2>60° 59.ABC</h2>
                    <h2>022° 30.DEF</h2>
                    <p>Selvitä alla olevien kuvien avulla A-F merkitys. Kaikki on suurta ja normaalia.</p>
                    <p>A)</p><img src={Kuva1}/>
                    <p>B)</p><img src={Kuva2}/>
                    <p>C)</p><img src={Kuva3}/>
                    <p>D)</p><img src={Kuva2}/>
                    <p>E)</p><img src={Kuva4}/>
                    <p>F)</p><img src={Kuva5}/>
                </div>
            )

        case 4:
            return(
                <div>
                    <h1>5.	Runo Ystävälle</h1>
                    <p>Koordinaatit ovat muotoa:</p>
                    <h2>60° 22.XXX 022° 33.XXX</h2>
                    <p>&lt;!--/Minuns ystävänii on kuin villasukkax, hän pitääy, minuts, lämpiimänä. Minun yystäväni on kkuin villassukkai, hänn on peehmeä jja mukavaä. Minun ystäväni on kkuin villaasukkax, hänn oon ihlana ja tärkeä!/--&gt;</p>
                </div>
            )
    }
    
}

export default Kysymys;