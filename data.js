// Zakovat Ensiklopediya ma'lumotlari
// Yangi fakt qo'shish uchun shu massivga qo'shing
// Jami: 857 ta fakt

const encyclopedia = [
  // === A ===
  {
    letter: "A",
    title: "Abbat Faria",
    text: "Aleksandr Dyumaning “Graf Monte-Kristo”(1845) romanidagi asosiy qahramonlardan biri. U If qalʼasida mahbus bo’lib, u yerda bosh qahramon Edmond Dantes bilan uchrashadi. Abbat Edmondning ustozi va do’stiga aylanadi. Abbat Faria haqiqatan ham mavjud bo’lgan inson asosida yaratilgan. Aslida, Abbat Faria(1756–1819) tarixiy shaxs bo’lib, portugal katolik ruhoniysi, faylasuf va olim edi. Uning nomi gipnoz sohasi bilan bog’liq,u bu hodisani ilmiy nuqtai nazardan o’rgangan birinchi olimlardan biri hisoblanadi. Lekin badiiy obraz haqiqiy shaxsdan ancha farq qiladi."
  },
  {
    letter: "A",
    title: "Abel mukofoti",
    text: "Norvegiya hukumati tomonidan ta’sis etilgan matematika yo’nalishi bo’yicha topshiriluvchi mukofot 2003-yildan boshlab tashkil etilgan mukofot mashxur norveg matematigi Nils Xenrik Abel sharafiga nomlamgan. Sovrin puli miqdori Nobel mukofotiga nisbatan teng bo’lib, 2024- yil holatiga 754.000 $ ni tashkil etadi. Alfred Nobel o’zi nomidagi mukofotni matematikga berilishini taqiqlaganidan keyin, Sofus Li alohida mukofot joriy etishni taklif qiladi. 1902 yilda – Abel tavalludining 100 yilligiga bag’ishlab, birinchi sovrindorlar ismi ma’lum qilinishi rejada edi, lekin tashkiliy ishlar sababli 2003 yilda ilk sovrindorlar nomi ma’lum qilingan."
  },
  {
    letter: "A",
    title: "Abror Hidoyatov",
    text: "(1900-1958) Teatr va kino arbobi A. Hidoyatov dastlab eski maktabda oʻqigan. 1919-yildan Mannon Uygʻur boshchilik qilgan “Turon” truppasida ishlagan. 1920-24-yillar Neʼmat drama studiyasida oʻqiydi. Studiyada yaratilgan Garpagon (, “Xasis”), Bob ( “Aks sado”), Nasriddin (“Yana uylanaman”), shahar hokimi ( “Revizor”), Kalaf ( “Malikai Turandot”) kabi obrazlar Hidoyatov kamolotida muhim rol oʻynadi."
  },
  {
    letter: "A",
    title: "Adashgan oʻgʻilning qaytishi, Rembrandt (1668)",
    text: "Asardagi otaning qo’llari bir-biridan farq qiladi: chap qo’li kuchli va erkaklarnikiga o’xshaydi, o’ng qo’li esa ayollarniki kabi nozikroq. San’atshunoslar fikricha, bu — Rembrandtning ota shaxsida ota va onalik mehrini birlashtirib ko’rsatgan mahoratidir. Go’yo Xudo nafaqat otadek kechiradi, balki onadek bag’rikenglik bilan quchoqlaydi."
  },
  {
    letter: "A",
    title: "Adel Gyugo sindromi",
    text: "(Javobsiz sevgi yoxud Adel sindromi) — javobsiz sevgiga qaramlikdan iborat ruhiy kasallik. Sindrom o’z nomini taniqli fransuz yozuvchisi Viktor Gyugoning qizi Adel Gyugo nomidan olgan, u vafotigacha ingliz zobiti Albert Pinsonga nisbatan javobsiz his-tuyg’ulardan aziyat chekadi. Ushbu javobsiz fojeali sevgi hikoyasi Fransua Truffoning “Adel G hikoyasi” filmining syujetiga asos bo’lgan."
  },
  {
    letter: "A",
    title: "Adrian devori",
    text: "Buyuk Britaniyaning shimoliy qismida joylashgan. Milodiy 122–128-yillarda Rim imperatori Hadrian buyrug’i bilan qurilgan. Devorning uzunligi 117 km bo’lib, u Irlandiya dengizidan Shimoliy dengizgacha cho’zilgan. Mustahkam tosh va torfdan qurilgan bu inshoot Rim imperiyasining shimoliy chegarasini himoya qiluvchi eng yirik mudofaa tizimlaridan biri bo’lgan. Adrian devori bo’ylab qal’alar, minoralar va harbiy garnizonlar joylashtirilgan. U nafaqat harbiy maqsad, balki Rim hukmronligini ramziy jihatdan mustahkamlash vazifasini ham bajargan. Bugungi kunda Adrian devori Britaniyaning eng mashhur tarixiy yodgorliklaridan biri bo’lib, UNESCO Butunjahon merosi ro’yxatiga kiritilgan."
  },
  {
    letter: "A",
    title: "Aerofobiya",
    text: "Bu samolyotda uchishdan haddan tashqari qo’rqish holati bo’lib, insonning sayohat qilishiga, ish safarlariga yoki yaqinlariga borishiga ham to’sqinlik qilishi mumkin. Bu atama birinchi marta 1947-yilda amerikalik psixiatr Arnold Hutschnecker tomonidan qo’llanilgan. Tadqiqotlarga ko’ra, har 4 kishidan 1 nafari samolyotda uchishdan ma’lum darajada qo’rqadi. Aerofobiya ko’pincha boshqaruvni yo’qotish, balandlik yoki falokat yuz berishidan qo’rqish bilan bog’liq."
  },
  {
    letter: "A",
    title: "Afrikaning yashil tepaliklari",
    text: "Ernest Xemingueyning asari (1935)"
  },
  {
    letter: "A",
    title: "Agasfer sindromi",
    text: "1951-yilda P. Vingeyt tomonidan, spirtli ichimliklar va giyohvand moddalarni iste’mol qilishga moyil bo’lgan shaxslarda tasvirlangan. Bu shaxslar ko’pincha giyohvand dori- darmonlarni olish uchun turli xil tibbiy muassasalarga murojaat qilishadi. Shu bilan birga, ular o’zlarining kasalliklari haqida hikoyalar to’qib, ba’zida hatto giyohvand moddalarga bo’lgan ehtiyojni oqlash uchun o’zlariga jarohat ham yetkazadilar."
  },
  {
    letter: "A",
    title: "Agent-355",
    text: "AQSh tarixidagi ilk josuslardan biri) — ayol josus, Amerika inqilobi davrida Jorj Vashingtonga ishlagan va “Culper Ring” josuslik tashkilotining a’zosi bo’lgan Agent-355 edi. U Buyuk Britaniya armiyasi, uning taktikasi, jumladan, hujum va pistirma rejalari haqida ma’lumotlarni taqdim etadi. Agar u bo’lmasa, urushning natijasi umuman boshqacha bo’lishi mumkin edi."
  },
  {
    letter: "A",
    title: "Ahmad Zohir",
    text: "(1946–1979) — afg’on musiqa san’atining eng yirik namoyandasi va “Afg’on Elvis Preslisi” deb e’tirof etilgan xonanda."
  },
  {
    letter: "A",
    title: "Ahmoqlar kemasi",
    text: "insoniyat nodonligi va jamiyatning ko’r-ko’rona halokat sari ketishini ifodalovchi qadimiy ramz. 1494-yilda Sebastian Brant yozgan Das Narrenschiff asari orqali mashhur bo’lgan. Keyinchalik Hieronymus Bosch (Иерони́м Босх нидерландский потомственный художник 15-asr) uni san’atdagi eng mashhur allegoriyalardan biriga aylantirgan."
  },
  {
    letter: "A",
    title: "AirBnB effekti",
    text: "yo’q bo’layozgan shahar internet ilova sabab daromad manbayiga aylandi. 1960- yillarda Xochataun aholisi 100 kishidan kam bo’lgan. Ko’pchilik mahalliy aholi vakillari to’g’on qurilishi sabab ko’chib ketadi, shaharchaning ko’p qismini suv bosib ketadi. Oqibatda hududdagi pochta bo’limlari yopilib, Xochataun pochta indeksidan mahrum bo’lib, hatto xaritadan ham o’chib ketadi. 2020 yil Xochataunda 400 ta uy qolgan va ular Airbnb mehmonxona qidiruv ilovasi orqali sayyohlarga ijaraga berilgandi."
  },
  {
    letter: "A",
    title: "Ajdaho nafasi” –",
    text: "deb nomlangan chili qalampirlari shunchalik achchiqki ularning ozgina miqdori ham og’zingizni bir necha soat davomida olovdek “yondirishi” mumkin. Agar to’liq iste’mol qilinsa, u anafilaktik shok va nafas qisilishiga olib kelishi hamda inson o’limiga sabab bo’lishi ham mumkin"
  },
  {
    letter: "A",
    title: "Akashi yilnomalari",
    text: "bu metafizik tushuncha bo’lib, unda butun olamdagi barcha mavjudotlarning o’tmish, hozirgi va kelajakdagi fikrlari, so’zlari, hissiyotlari va niyatlari aks etgan, deb ishoniladi."
  },
  {
    letter: "A",
    title: "Akira Kurosava (1910–1998)",
    text: "Yaponiyaning mashhur kinorejissyori va ssenaristi. U kinematografiyada yangi vizual uslublar va dramatik hikoya shakllarini yaratgan ijodkor sifatida tanilgan. 1950-yilda suratga olingan “Rashomon” filmi Kurosavani dunyoga tanitdi. Keyinchalik 4 “Seven Samuray”, “Ikiru” va “Ran” kabi filmlari orqali butun dunyo kinosida klassika sifatida e’tirof etildi."
  },
  {
    letter: "A",
    title: "Akrafobiya",
    text: "Bu odamning baland joylarga chiqqanida kuchli qo’rquv yoki vahima his qilish holati. Bu fobiya insonning oddiy hayotiga halaqit berishi mumkin, masalan, zinapoyadan chiqishda yoki balkon yaqinida turishda. “Akrafobiya” termini yunoncha “akron” (baland joy) va “phobos” (qo’rquv) so’zlaridan kelib chiqqan. Ushbu atama ilk bor XX asr boshlarida psixologlar tomonidan klinik tavsif sifatida qo’llanilgan."
  },
  {
    letter: "A",
    title: "Akselbant",
    text: "asosan harbiy formalarda uchrovchi ramziy bezak. Dastlab oddiy mato yoki charm tasma ko’rinishida bo’lib, askarlarning qurollarini (masalan, qilich, xanjar, yoki kamon) ushlab turish uchun ishlatilgan. Oʻrta asrlarda akselbandlar Ramziy ahamiyat kasb etib, jangchining lavozimini belgilovchi element vazifasini bajargan. XVII - XVIII asrlarda esa kelib bezak sifatida ishlatila boshladi. Fransiya va Prussiya armiyalarida ular oltin va kumush iplari bilan bezatilgan. Hozirgi kunda akselbandlar harbiy madaniyat va tantanali kiyinishning ramziy qismi sifatida o’z ahamiyatini saqlab kelmoqda"
  },
  {
    letter: "A",
    title: "Akupunktura",
    text: "organizmning yumshoq toʻqimalariga maxsus ignalar kiritib davolash. Reflektor terapiya usullaridan biri Xitoy, Koreya, Yaponiya xalq tibbiyotida igna sanchib davolash qadimdan maʼlum. Bunda gavdaning muayyan (700 ga yaqin) nuqtalariga kiritilgan ignalar nerv uchlarini taʼsirlaydi. Taʼsirlanish bosh yoki orqa miyaga, u yerdan turli aʼzolarga oʻtadi. Periferik nerv sistemasi kasalliklari, uyqu buzilishi, moddalar almashinuvining oʻzgarishi, shikastlanish va boshqalar natijasida paydo boʻladigan boʻgʻim va muskul kasalliklarida qoʻllanadi. Zarurat tugʻilganda igna sanchib davolash bilan birga dori-darmonlar ham buyuriladi."
  },
  {
    letter: "A",
    title: "Aleksandr Fleming",
    text: "Aleksandr Fleming labaratoriyasida bir qancha vaqtdan beri toʻplanib qolgan idishlarni yigʻishtirayotib, ulardan biridagi mogʻorga koʻzi tushadi, tekshirib koʻrganda bu penitsillin mogʻori ekanligini aniqlab, ilk antibiotiklarni yaratadi. Antibiotiklar ikkinchi jahon urushida yaralangan askarlarning hayotini saqlab qolishda muhim roʻl oʻynaydi."
  },
  {
    letter: "A",
    title: "Aleksandr Greyam Belll",
    text: "Shotland-amerikalik olim, ixtirochi va pedagog. Amalda foydalanish uchun yaroqli birinchi telefon uchun 1876-yilda patent olgan. Energiya yoki quvvatlar nisbati logarifmi bilan oʻlchanadigan birlik – Bell nomi bilan atalgan. Onasining eshita olishida bo’lgan va otasi nutq ilmi bilan shug’ullangan. U yoshligidan tovush, nutq va eshitish tizimlariga qiziqqan va eshitish bilan bog’liq muammolarni o’rgangan va karlar ta’limi yo’nalishida ham faol ishlagan. Telefon uchun patent hozirgi kunda Antonio Meuchchiga tegishli. 2002 yilda AQSh kongressi patent unga tegishli ekanini e’lon qilgan."
  },
  {
    letter: "A",
    title: "Aleksandr mayogʻi – Qadimgi dunyoning yetti mo’jizasidan biri",
    text: "Misrning Aleksandriya shahridagi Faros orolida joylashgan boʻlib, dengizchilarga yoʻl ko’rsatuvchi eng mashhur inshootlardan biri edi. Avtomobildagi fara so’zi ham aynan Faros so’zidan kelib chiqqan. Balandligi kamida 140 metrdan oshgan va o’sha davr uchun muhandislik mo’jizasi sanalgan. Mayoq kunduzi quyosh nurini aks ettiruvchi oyna, tunda esa olov yordamida kemalarga yo’l ko’rsatgan."
  },
  {
    letter: "A",
    title: "Alfons Bertillon",
    text: "XIX(1853) asr oxiri va XX(1914) asr boshlarida yashagan kriminalist, antropolog va statist. Bertillonga haqiqiy shuhrat keltirgan narsa bu “Bertillonage” (бертильонаж) 5 deb atalgan maxsus identifikatsiya tizimi edi. Bu tizim jinoyatchilarning tana o’lchamlarini aniq o’lchash orqali ularni qayta tanib olish imkonini bergan:"
  },
  {
    letter: "A",
    title: "Alkatraz qamoqxonasi",
    text: "Alkatraz oroli, ko’pincha “Qoya” deb ham ataladi, fuqarolar urushi davrida harbiy qamoqxona, keyin esa federal jazoni ijro etish muassasasi sifatida xizmat qilgan. Qamoqxonaning sovuq va notinch dengiz suvlari boʻyida joylashgani qochishni deyarli imkonsiz qiladi. 1963 yilda qamoqxona yopiladi va Alkatraz Oltin darvoza milliy dam olish maskanining bir qismiga aylandi. Hozirda ushbu joy qamoqxona kameralarini o’rganuvchi, qochishga urinish haqidagi hikoyalarni eshitadigan va orolning xilma-xil tarixini qadrlaydigan tashrif buyuruvchilarni o’ziga jalb qiladi. Bundan tashqari, Alkatraz G’arbiy sohildagi eng qadimgi ishlaydigan mayoqqa ega va dengiz qushlari uchun uya vazifasini bajaradi."
  },
  {
    letter: "A",
    title: "Allyuziya",
    text: "mashhur tarixiy, adabiy yoki mifologik voqea/personajga ishora."
  },
  {
    letter: "A",
    title: "Alsgeymer kasalligi",
    text: "Asosan 65 yoshdan yuqori insonlarda uchrovchi, xotira va fikrlash qobiliyatlarining susayishi orqali namoyon bo’ladigan nerv tizimi xastaligi"
  },
  {
    letter: "A",
    title: "Altruizm",
    text: "boshqalarning manfaati uchun o’z manfaatini qurbon qilishga tayyor bo’lish holati. Bu tushuncha birinchi marta fransuz faylasufi Ogust Kont tomonidan ilmiy muomalaga kiritilgan. Altruistik insonlar boshqalarga yordam berishdan ruhiy mamnuniyat olishadi va bu ularning asosiy qadriyatlaridan biri hisoblanadi."
  },
  {
    letter: "A",
    title: "Alvido, qurol.",
    text: "Ernest Xemingueyning “Alvido, qurol” romani Birinchi jahon urushi davrida sodir bo’ladigan fojiaviy sevgi hikoyasini aks ettiradi. Asarning bosh qahramoni Frederik Genri — Italiya armiyasida xizmat qilayotgan amerikalik sanitar-ofitser. U urush maydonidagi dahshatlar ichida ham sevgiga duch keladi va hamshira Ketrin Barkli bilan munosabatlari rivojlanadi. Biroq, urushning shafqatsiz haqiqatlari ularning baxtini sinovga qo’yadi. Xeminguey asarda urushning ma’nosizligini, inson ruhiyati va sevgining hayotdagi ahamiyatini chuqur ochib beradi."
  },
  {
    letter: "A",
    title: "Alvon yelkanlar (1923)",
    text: "Aleksandr Grinning «Alvon yelkanlar» qissasi romantizm ruhida yozilgan, orzu va ishonch mavzulariga bag’ishlangan asardir. Asarda kambag’al baliqchining qizi Assolning bolaligida eshitgan ertagi uning butun hayotiga yo’l ko’rsatadi. U bir kun alvon yelkanli kemada shahzoda kelib, uni olib ketishiga ishonadi. Atrofdagilar uni telba deb hisoblashsa-da, Assol yuragidagi orzuga sodiq qoladi. Nihoyat, Artur Grey ismli yigit bu orzuni chinakam haqiqatga aylantiradi. Asar orqali muallif inson orzusining qudratini, iymon va mehr kuchini ulug’laydi."
  },
  {
    letter: "A",
    title: "Amalgama",
    text: "simobning boshqa metallar (masalan, kumush, qalay, mis, oltin yoki rux) bilan aralashmasidan hosil bo’ladigan qotishma. Tarkibidagi nisbatlarga qarab suyuq, quyuq yoki qattiq holatda bo’lishi mumkin. Stomatologiya: Ilgari tishlarni davolash va plomba qo’yishda (kumush va qalay amalgamasidan) keng foydalanilgan. Zargarlik va sanoat: Metall buyumlarga oltin yugurtirish, ko’zgu tayyorlash va rangli metallurgiyada rudalardan qimmatbaho metallarni ajratib olish (amalgamatsiya) maqsadida ishlatiladi"
  },
  {
    letter: "A",
    title: "Amatoksinlar",
    text: "Amanita turkumiga mansub bir nechta qo’ziqorinlarda uchraydigan o’ta kuchli toksinlar."
  },
  {
    letter: "A",
    title: "Ambidekstriya",
    text: "tug’ma yoki mashqlar orqali ishlab chiqilgan, ikki qo’lni birdek yaxshi boshqarish qobiliyati. Tugʻma ambidekstriya bolalarning 1foizida uchraydi. Shizofreniya bilan kasallanganlarning ko’pchiligi ambidekster yoki chapaqaylardir. Mashhur ambideksterlar: Leonardo da Vinchi, Nikola Tesla, Pol Makkartni, Benjamin Franklin, Mark Nopfler va Kianu Rivs ."
  },
  {
    letter: "A",
    title: "Ambisinistriya",
    text: "odam uchun ikki qo’lini ham ishlatish qiyin bo’lishi holati. Ambideksterga qarama qarshi hodisa bo’lib, insonda tug’ma bo’lishi mumkin. Shuningdek, hayot davomida olingan jarohat yoki kasalliklar natijasida ham ambisinistrlar paydo bo’ladi. Bu termin asosan ingliz tilida ishlatiladigan “ambisinistrous” soʻzidan kelib chiqqan boʻlib, o’zbek tilida “ikkala qo’lda teng noqulaylik” deb tarjima qilinadi."
  },
  {
    letter: "A",
    title: "Anagnorisis",
    text: "qahramonning muhim haqiqatni, ayniqsa o’zining yoki boshqalarning asl kimligini anglab yetishi."
  },
  {
    letter: "A",
    title: "And kandelyabri",
    text: "(Parakas kandelabri, Candelabro de Paracas) — bu Peru janubidagi Parakas yarimorolida joylashgan ulkan geoglif. U Naska chiziqlariga o’xshaydi, ammo ulardan ancha shimolda va mustaqil yodgorlik hisoblanadi. Kandelyabr — bir nechta sham qo’yish uchun mo’ljallangan dekorativ shamdon."
  },
  {
    letter: "A",
    title: "Andisha va g’urur (1813), Jeyn Ostin",
    text: "Muallif o’zining bu mashhur romanida 19-asr Angliya jamiyatidagi sinfiy tafovut, nikoh, axloqiy qadriyatlar va ayolning ijtimoiy o’rni kabi mavzularni aniqlik bilan tasvirlaydi. Asar markazida ikki kuchli xarakter — Elizabet Bennet va janob Darsi turadi. Elizabet – ziyrak, mustaqil fikrli, o’z qadriyatlariga sodiq ayol. Darsi esa – badavlat, ammo sovuqqon va g’ururli yigit. Ularning ilk uchrashuvlarida aynan g’urur (Darsining sinfiy ustunligi) va andisha (Elizabetning oldindan shakllangan salbiy qarashlari) ularni bir-biridan uzoqlashtiradi. Lekin vaqt o’tib, ular o’z ichki kamchiliklarini anglab, o’zgarishni o’rganadilar. Asarning asosiy g’oyasi — g’urur va noto’g’ri qarorlar qanday qilib inson baxtiga to’siq bo’lishi mumkinligini ko’rsatishdir."
  },
  {
    letter: "A",
    title: "Andre Jak Garnerin",
    text: "parashyut ixtirochisi. Leonardo Da Vinchida ham parashyut chizmalari bo’lgan."
  },
  {
    letter: "A",
    title: "Andrey Chikatilo",
    text: "“Rostov qassobi” Andrey Chikatilo XX asrning eng mashhur seriyali qotillaridan biri hisoblanadi. U 1978–1990-yillar oralig’ida kamida 52 nafar ayol va bolani o’ldirgani uchun sud tomonidan aybdor deb topilgan. Sovet Ittifoqida faoliyat yuritgan Chikatiloni qo’lga olish uchun yillar davomida keng ko’lamli tergov olib borilgan. 1992-yilda u sudlangan, 1994-yil 14- fevralda esa o’lim jazosi ijro etilgan. Bu ish kriminalistika tarixidagi eng murakkab va eng ko’p o’rganilgan seriyali qotillik tergovlaridan biri sifatida eslanadi."
  },
  {
    letter: "A",
    title: "Androkl",
    text: "(Androcles) — qadimgi Rim afsonasidagi qahramon bo’lib, mehr-shafqat va minnatdorlik ramzi sifatida tanilgan. Rivoyatga ko’ra, qochqin qul Androkl oyog’iga katta tikan kirib azob chekayotgan sherni uchratadi va tikanni olib tashlaydi. Oradan vaqt o’tib, Androkl ushlanib, arenada sherga tashlanadi. Ammo o’sha sher uni tanib, hujum qilish o’rniga mehr ko’rsatadi. Bu voqea tomoshabinlarni hayratga soladi va natijada Androkl ham, sher ham ozod qilinadi. Bu afsona yaxshilik hech qachon unutilmasligini va mehr-shafqat albatta o’z samarasini berishini eslatadi."
  },
  {
    letter: "A",
    title: "Angry Birds",
    text: "(Tarjimasi: Jahldor Qushlar) Finlandiyaning Rovio Entertainment shirkati tomonidan yaratilgan videooʻyinlar franshizasi. O’yin seriyasi tuxumlarini yashil cho’chqalardan qutqarishga harakat qiladigan rang-barang g’azablangan qushlarning titulli suruviga qaratilgan. Crush the Castle o’yinidan ilhomlangan. Ushbu franshiza asosida Columbia Pictures tomonidan tarqatilgan Angry Birds Filmi (2016) va Angry Birds Filmi 2 (2019) filmlari ishlangan."
  },
  {
    letter: "A",
    title: "Anjelman sindromi",
    text: "aqliy va jismoniy zaiflik, uyqu buzilishi, tutilishlar, harakatlar muammolari (ayniqsa qo’llarda), tez-tez kulish yoki tabassum qilish kabi belgilar bilan tavsiflanadigan genetik kasallikdir. Bu kasallik, shuningdek, “Petrushka sindromi” yoki “Baxtli qo’g’irchoq sindromi” deb ham ataladi. 1965-yilda Britaniyalik pediatr Garri Anjelman ushbu kasallik alomatlarini o’rganib chiqqan. Kasallikning eng yorqin xususiyati — unga chalingan odamlarning doimiy tabassumidir."
  },
  {
    letter: "A",
    title: "Anna Karenina.",
    text: "Lev Tolstoyning “Anna Karenina” romani insoniy his-tuyg’ular, muhabbat va jamiyatning qat’iy qoidalari o’rtasidagi murakkab ziddiyatni tasvirlaydi. Asarning bosh qahramoni Anna Karenina boy va hurmatli amaldor Aleksey Karenin bilan turmush qurgan bo’lsa-da, yosh ofitser Vronskiyga oshiq bo’ladi. U chinakam muhabbatni topganiga ishonsa-da, jamiyatning qoralashi, ichki azoblar va oilasidan ajralish uni tobora chuqur iztirobga botiradi. Anna jamiyatdan chetlatilib, o’z sevgisi va ijtimoiy qadriyatlar o’rtasida bo’g’ilib qoladi. Oxir-oqibat, u umidsizlikdan o’z joniga qasd qiladi."
  },
  {
    letter: "A",
    title: "Anoxranizm",
    text: "atama tarixiy kontekstda biror narsa o’z vaqtiga mos kelmasligi, ya’ni bir davrga oid bo’lmagan hodisa, buyum, fikr yoki so’z boshqa bir tarixiy davrda noto’g’ri joylashtirilgan holatni anglatadi. So’z yunoncha “ana” qarshi va “khronos” vaqt so’zlaridan kelib chiqqan bo’lib, so’zma- so’z “vaqtga qarshi, noto’g’ri vaqtga qo’yilgan” degan ma’nolarni beradi. Misol uchun: agar filmda Napoleon davrida telefon orqali gaplashayotgan sahna bo’lsa, o’rta asr voqealari aks ettirilgan rasmda elektr chiroq bo’lsa."
  },
  {
    letter: "A",
    title: "Antey",
    text: "(yoki “Antaeus”) qadimgi yunon mifologiyasidagi afsonaviy gigant bo’lib, u yer ma’budasi Gea (Yer) va dengiz xudosi Poseydonning o’g’li hisoblanadi. U har safar yer bilan aloqa qilganida kuchini tiklab olar edi. Shu sababli u yerda jang qilishda yengilmas bo’lgan. Ammo mashhur qahramon Gerakl (Gerkules) uni yengish uchun hiyla ishlatdi: Gerakl uni havoga ko’tarib, yer bilan aloqasini uzdi va siqib o’ldirdi. Shu tarzda Antey mag’lub bo’lgan."
  },
  {
    letter: "A",
    title: "Antimacassar",
    text: "Makassar yog’i shu qadar ko’p ishlatilganki u kreslo va divanlarning orqa qismini yog’lab, dog’ qoldirib yuborardi. Shuning uchun uy egalari mebellarning bosh suyab o’tiriladigan qismiga maxsus mato yopib qo’yishgan. Bugungi kunda ham samolyot va poyezdlardagi o’rindiqlarning bosh uchun mo’ljallangan oq matolari — aslida o’sha eski antimakassarlarning zamonaviy ko’rinishi."
  },
  {
    letter: "A",
    title: "Antrakt",
    text: "Spektaklda pardalar, konsert va sirk tomoshalarida boʻlimlar orasidagi tanaffus. Fransuzchadan “Entracte” harakat oʻrtasi; “entre” — oraliq, “acte” — parda, ma’nolarini anglatadi. Shuningdek, opera, balet, musiqali dramaning biron-bir pardasi (birinchisidan tashqari) boshlanishi oldidan chalinadigan musiqali muqaddima ham antrak deb ataladi. Antraktning asosiy maqsadi — tomoshabinlarga dam olish va sahna o’zgarishlariga tayyorgarlik ko’rishdir."
  },
  {
    letter: "A",
    title: "Antropomorfizm",
    text: "Inson xususiyatlari, hulq-atvor yoki his-tuyg’ularni inson bo’lmagan narsalarga (hayvon, predmet, tabiat hodisalari yoki ma’budlarga) nisbatan qo’llash holati. Masalan, «quyosh kulib turibdi», «robot ranjidi» yoki «mo’jizaviy daraxt odamlarga yordam berdi» kabi ifodalar bunga misol bo’la oladi. Tushuncha mifologiya, adabiyot, multfilmlar va bolalar ertaklarida keng qo’llaniladi. Antropomorfizm insonning tushunish va tasavvur qilishini osonlashtiradi, shu sababli u ijodiy hamda ta’limiy maqsadlarda foydali vosita hisoblanadi."
  },
  {
    letter: "A",
    title: "Antuan Laumet de La Mot Kadillak (1658–1730)",
    text: "Fransuz sayyohi va mustamlakachi. U 1701- yilda Detroit shahriga asos solgan. U Shimoliy Amerikadagi fransuz koloniyalarini kengaytirishda muhim rol o’ynagan va bir muddat Luiziana gubernatori sifatida ham faoliyat yuritgan. Qiziqarli jihati shundaki, uning asl ismi “Laumet” bo’lgan, biroq u keyinchalik o’zini zodagon sifatida ko’rsatish uchun “de La Mothe Cadillac” deb atagan."
  },
  {
    letter: "A",
    title: "Anxel",
    text: "(Angel Falls) — dunyodagi eng baland sharshara bo’lib, uning balandligi 979 metrni tashkil etadi. U Venesuelaning Kaniyama milliy bog’ida joylashgan va Churun daryosidan hosil bo’ladi. Sharshara ispan konkistadorlari tomonidan aniqlangan bo’lsa-da, uning hozirgi nomi 1933-yilda amerikalik uchuvchi Jeyms Enjel (Jimmy Angel) sharsharani osmondan kashf etganidan keyin berilgan."
  },
  {
    letter: "A",
    title: "Aokigahara",
    text: "Yaponiyaning Xonsyu orolidagi Fudzi togʻining shimoli-gʻarbidagi oʻrmon. O’smirlar orasida ko’plab o’z joniga qasd qilish holatlari bilan mashhur. Aokigahara yaponchadan «Moviy daraxtlar tekisligi» ma’nosini anglatadi. Shuningdek Dzyukay («Daraxtlar dengizi») nomi bilan ham tanilgan. Oʻrmon hududida yer ostida katta temir rudasi konlari mavjudligi da’vo qilinadi. Bu esa Aokigaharada kompaslar ishlamasligiga sabab qilin ko’rsatiladi."
  },
  {
    letter: "A",
    title: "Aqlli Gans effekti",
    text: "psixologiyada qoʻllaniladigan bu termin, xech qanday signal, ishorasiz xam xayvon yoki inson siz nimani xoxlashingizni toʻgʻri sezgan holatini ifodalashda ishlatiladi."
  },
  {
    letter: "A",
    title: "Arab bahori",
    text: "2010-2012-yillarda Yaqin Sharq va Shimoliy Afrikada yuz bergan ommaviy norozilik namoyishlari to’lqini. Tunisda boshlangan inqilob qisqa fursatda Misr, Liviya, Suriya, Yaman va boshqa davlatlarga tarqaldi. Ular hukumat almashishiga, fuqarolar urushlariga va mintaqadagi geosiyosiy vaziyatning o’zgarishiga olib keldi."
  },
  {
    letter: "A",
    title: "Ararat togʻi",
    text: "Turkiyaning sharqida joylashgan, 5137 metr balandlikdagi tog’. U ikki cho’qqidan iborat: Katta Ararat va Kichik Ararat. Geologik jihatdan bu — so’ngan vulqon bo’lib, oxirgi marta muzlik davridan keyin faollik ko’rsatgan. Farazlarga ko’ra Ararat Nuh kemasi toʻxtagan joy sifatida mashhur. Geografik jihatdan Turkiya hududida boʻlsa-da, arman xalqi uchun muqaddas togʻ sanaladi va ularning davlat ramzlarida tasvirlangan. Togʻ Armaniston chegarasidan atigi 32 km uzoqlikda joylashgan."
  },
  {
    letter: "A",
    title: "Araxnafobiya",
    text: "Bu o’rgimchaklardan irratsional qo’rquv. Bu fobiya shunchalik kuchli bo’lishi mumkinki, odam o’rgimchakni ko’rmasa ham, uning rasmi yoki tasviri orqali ham qo’rqinchli his- tuyg’ularni boshdan kechiradi. “Araxnafobiya” atamasi ilk bor 1894-yilda psixolog Eugen Bleuler tomonidan ilmiy adabiyotda qo’llanilgan. U bu fobiyani nevroz turlaridan biri sifatida tavsiflagan."
  },
  {
    letter: "A",
    title: "Argentinazavr",
    text: "(Argentinalik kaltakesak) — bo’r davriga oid, tahminan miloddan avvalgi 150-138 million yil oldin yashagan dinozavr turi. O’txor jonivor. Uzunligi 30 metr, bo’yi 6 metr, og’irligi 80- 100 tonna. 1980-yilda Argentinadan topilgan. Kattalik jihatidan unga faqat superzavr yoki ultrazavr teng kelishi mumkin. Ammo eng uzun dinozavr bo’lmagan. (Eng uzuni seysmozavr - 40 metr)"
  },
  {
    letter: "A",
    title: "Aristofan",
    text: "«Komediya otasi» va «Qadimgi komediya shahzodasi» nomlari bilan tanilgan. Yunon shoiri va dramaturg. «Bulutlar», «Lisipatra» va «Qushlar» kabi komediyalari orqali siyosatchi, faylasuf va ijtimoiy tartiblarni keskin tanqid qilgan. Jami qirqta pyesa yozgan, ulardan o’n bittasi bugungi kungacha saqlanib qolgan. Uning saqlanib qolgan aksariyat pyesalari Eski Komediya deb nomlanuvchi hajviy drama janriga tegishli."
  },
  {
    letter: "A",
    title: "Ark of the Covenant (Ahd sandig’i)",
    text: "Ahd sandig’ida muqaddas anjomlar saqlangan bo’lib, bu narsalar Isroil xalqiga Xudo ular bilan Sinay tog’ida qilgan ahdni yoki kelishuvni eslatib turgan. Ahd sandig’i Gunohlarni yuvish kunida o’tkazilgan marosimda muhim o’rinni egallagan. Ahd sandig’iga go’yilgan birinchi narsa O’nta amr yozilgan tosh lavhalar bo’lgan. Keyinchalik bu sandiqqa manna solingan tilla idish va «Horunning gullagan tayog’i» ham qo’yilgan. Tilla idish va tayoqni qaysidir vaqtdan keyin olib qo’yishganga o’xshaydi. Chunki ahd sandig’ini ma’badga ko’chirishganida, bu narsalar sandiqda yo’q bo’lgan."
  },
  {
    letter: "A",
    title: "Arldagi qizil uzumzorlar",
    text: "Vinsent Van Gogning kartina (1890-yil)"
  },
  {
    letter: "A",
    title: "Art-terapiya",
    text: "bu inson ruhiyatini davolash va emotsional muvozanatni tiklash uchun sanʼat va ijodiy faoliyatdan foydalanadigan terapiya usuli. Bu terapiyaning maqsadlari: insonning o’z his- tuyg’ularini ifoda etishga yordam berish, stress va depressiyani kamaytirish, o’zini anglash va ichki muammolarga yechim topish. Bu usul XX asrning o’rtalarida psixologiya va sanʼatning birlashuvi natijasida rivojlangan. Ushbu uslubni rivojlantirgan asosiy shaxslar: Margaret Naumburg va Adrian Hill."
  },
  {
    letter: "A",
    title: "Asalli tuzog",
    text: "( honey trap — «медовая ловушка) atamasi ishqiy yoki jinsiy joziba yordamida odamni murosaga keltiruvchi, josuslik yoki jinoiy vaziyatga jalb qiladigan manipulyatsiya usulini anglatadi"
  },
  {
    letter: "A",
    title: "Asfodel oʻtloqlari",
    text: "Asfodel oʻtloqlari qadimgi yunon mifologiyasida oʻliklarning ruhi yashaydigan joylardan biri hisoblanadi. Bu hudud Yerosti dunyosining bir qismi boʻlib, u yerda oddiy, na yaxshi, na yomon hayot kechirgan ruhlar abadiy yashaydi. Asfodel oʻtloqlari jimjit va xira manzara sifatida tasvirlanib, u yerdagi ruhlar xotiralarini yo’qotgan holda, hech qanday quvonch yoki azob sezmasdan mavjudlikni davom ettiradilar."
  },
  {
    letter: "A",
    title: "ASOS",
    text: "Britaniyaning eng yirik onlayn kiyim va kosmetika sotuvchisi nomi ingliz tilidagi “As Seen On Screen” iborasining qisqartmasi bo’lib, “ekranda ko’ringanidek” degan ma’noni anglatadi. Bu yerda ikki tomonlama yondashuv bor: birinchidan, do’kon auditoriyasi ekrandagi yulduzlarga o’xshamoqchi bo’lgan yoshlar edi. Ikkinchidan, xaridor o’z ekranida ko’rgan mahsulotning aynan o’zini olishiga amin bo’lishi kerak."
  },
  {
    letter: "A",
    title: "Astrafobiya",
    text: "Bu momaqaldiroq va chaqmoqlardan qoʻrqish hisoblanadi. Ko’pincha bolalik davrida shakllanadi va ayrim hollarda kattalikka o’tib boradi. Astrafobiyasi bor odamlar hatto ob-havo haqida 10 salbiy xabar eshitsalar ham xavotirga tushishlari mumkin. AQSh Psixiatriya Assotsiatsiyasi ma’lumotlariga ko’ra, aholining taxminan 2–3 foizi momaqaldiroq fobiyasidan aziyat chekadi. Ular chaqmoq chaqqanida oynasiz xonalarga yashirinish, quloqlarini berkitish yoki vahima bosish holatlariga duch kelishadi."
  },
  {
    letter: "A",
    title: "Atkins dietasi",
    text: "Past uglevodli parhez bo’lib tana vaznini kamaytirish va sog’lom hayot tarzini qo’llab-quvvatlashga qaratilgan. Bu parhezning asosiy tamoyili uglevodlarni minimal darajaga tushirib, yog’ va oqsillarga urg’u berishdan iborat. Amerikalik kardiolog Robert Atkins o’zining ovqatlanish tamoyillarini 70-yillarda ishlab chiqdi. Uning so’zlariga ko’ra, vazn ortishining asosiy sababi shakarni iste’mol qilishdir. Shunisi qiziqki, Atkinsning oʻzi oʻlimi paytida 117kg vaznga ega boʻlgan ekan"
  },
  {
    letter: "A",
    title: "Atsteklarda – Senzon Totochtin",
    text: "(“400 quyon”) nomli piyonista xudolar guruhi bo’lgan. Atsteklar quyonlarni mastlik bilan bog’lashgan. Shuning uchun ular mast odamni “quyonga aylangan” deb atashgan. Odamning mastlik darajasini ifodalash uchun ma’lum bir miqdordagi quyonlardan foydalanishgan. Mastlikning eng yuqori darajasi “400 quyon” hisoblangan."
  },
  {
    letter: "A",
    title: "Attorning qutisiga sigʻmaydi",
    text: "Attor — arabcha, “atir sotuvchi” degan maʼnoni bildiradi.) Hozirgi kunda atir, parfyumeriya sotuvchisiga nisbatan qoʻllaniladi. Lekin ilgari maʼno doirasi kengroq boʻlgan. Attorlar asosan giyohlar bilan shugʻullangan. Sotuvdagi atir upalar ziravor, sovunlar, yuz uchun boʻyoqlar, damlamalarni turli giyohlar orqali tayyorlagan. Ularning ishlatgan qutisi kichik bo’lib, faqat kerakli narsalar sig’ar, oʻzidan xushboʻy hid taratar edi. Maʼlumot oʻrnida: Farididdin Attorning taxallusi ham oʻzi tabib boʻlmasada giyohlardan damlama tayyorlashi boʻyicha mashhur boʻlgani uchun qoʻyilgan."
  },
  {
    letter: "A",
    title: "AUM SHINRIKYO",
    text: "(Аум Синрикё)— YAPONIYADAGI XAVFLI SEKTA «Аум Синрикё» nomi sanskritcha «аум» —«Koinot» degan ma’noni anglatadi. «Синрикё» esa ierogliflarda «haqiqat ta’limoti» deb tarjima qilingan. Ingliz tilida «Aum Shinrikyo» — “Supreme Truth” — ya’ni “Oliy haqiqat” deb tarjima qilinadi."
  },
  {
    letter: "A",
    title: "Autsayder effekti",
    text: "(ing. Underdog effect) – ijtimoiy fe’l-atvor bo’lib, bunda jamiyatda potensial autsayderga nisbatan simpatiya paydo bo’ladi. Oddiy so’zlar bilan tushuntirganda, odamlar kuchsiz jamoa musobaqa liderini mag’lub etishini xohlaydi. Ko’plab tarixiy, afsonaviy hikoyalarda ham autsayder effektiga o’xshash voqealar keltirilgan. Masalan, Dovud alayhissalomning ancha bahaybat Jolutni mag’lub etishi yoki Robin Gud haqida bir qancha afsonalar. Effekt, yana, sport musobaqalarida ham ko’p seziladi. Rioda o’tgan Olimpiada o’yinlarida, ayniqsa, “anderdog” hikoyalari ko’p bo’ldi. Jozef Skuling suzish musobaqalarida o’zining kumiri – Maykl Felpsni mag’lub etishi, Puerto Rikolik Monika Puig, kutilmaganda, musobaqa finalida dunyoning ikkinchi raketkasi Anjelika Kerberni mag’lub etishi ko’plab misollarning ikkitasi holos."
  },
  {
    letter: "A",
    title: "Avtoportret, Van Gog (1889)",
    text: "Avtoportret rassom tomonidan yanvar oyida Arlda Pol Gogen bilan janjal natijasida qulog’ining bir qismini yo’qotgan dramatik epizoddan keyin yaratilgan. Suratda quloq tasmasi Van Gogning o’ng qulog’ida ko’rsatilgan, aslida esa uning jarohati chap qulog’da boʻlgan. Bunday tasvirga sabab avtoportret ko’zgu yordamida chizilganidir."
  },
  {
    letter: "A",
    title: "Axilles tovoni",
    text: "«Axilles tovoni» iborasi insonning eng zaif nuqtasini anglatuvchi ibora hisoblanadi. Bu tushuncha qadimgi yunon afsonasidagi Axilles ismli qahramon bilan bog’liq. Rivoyatga ko’ra, onasi uni o’lmas qilish uchun Stiks daryosiga botirgan, biroq tovoni suvga tegmagan. Shu sababli, u faqat tovonidan yaralanishi mumkin edi va aynan shu joyga otilgan o’q uni halok qilgan."
  },
  {
    letter: "A",
    title: "Ayn Dubay",
    text: "dunyodagi eng baland kuzatuv g’ildiragi. 250 metr balandlikda joylashgan boʻlib, u Dubaydagi Bluewaters orolida qad rostlagan. G’ildirak 48 kabinada 1750 tagacha yo’lovchini tashish uchun mo’ljallangan va Dubay Marina va Burj Al Arab , Palm Jumeira va Burj Xalifa kabi diqqatga sazovor joylarning ko’rinishini ta’minlash uchun mo’ljallangan . Ain Dubai avvalroq Dubai Eye yoki Dubai-I deb nomlangan."
  },
  {
    letter: "A",
    title: "Ayritom yodgorligi",
    text: "Qadimgi Kushon davriga oid arxeologik yodgorlik bo’lib, Surxondaryo viloyatining Termiz shahri yaqinida joylashgan. Kushonlar davrida buddaviylar monastiri sifatida faoliyat yuritgan. Ayritomdagi haykaltaroshlik yodgorliklari va freskalar buddaviylik sanʼatining yuksak namunalaridan hisoblanadi. Ayniqsa, bu yerda topilgan raqqosalar frizi (haykaltaroshlik bezagi) Oʻzbekiston sanʼatining nodir durdonalaridan biridir."
  },
  {
    letter: "A",
    title: "Ayzek Azimov",
    text: "ilmiy fantastikaning ustuni. Amerikalik yozuvchi Belorussiyaning Petrovichi qishlog’ida tug’ilgan. 1923-yilda oilasi bilan AQShga ko’chgan va Kolumbiya universitetida bioximiklikni o’rganib, fan doktori bo’lgan. Azimovning ilk hikoyasi 1939-yilda chop etilgan. Keyinchalik u “Poydevor” turkumi, “Men robotman”, “Mangulik intihosi”, “Darba-dar”, “Koinot oqimlari” kabi mashhur asarlarni yaratdi. Uning asarlarida ilmiy g’oyalar bilan bir qatorda ijtimoiy muammolar ham yoritilgan. Uning bir nechta hikoyalari va “Koinot oqimlari” romani o’zbek tiliga tarjima qilingan. 12 B"
  },

  // === B ===
  {
    letter: "B",
    title: "Babetta",
    text: "sochlarni boshning yuqori qismiga tarab to’plangan soch turmagi. Bu soch turmagi 1959- yili Brijit Bardo ishtirok etgan “Bebetta urushga ketmoqda” filmidagi qahramonning ismi bilan nomlangan. Bu soch turmagi ko’rinishi o’xshab ketgani sababli yana “Улей”(ari uyasi) yoki “Сахарная вата”(paxta qand) deb ham ataladi."
  },
  {
    letter: "B",
    title: "Baden-Baden",
    text: "Germaniyaning Baden-Württemberg yerida joylashgan aholi punktidir. 1931- yilgacha shahar Baden deb nomlangan, ammo nemis shtatlarida bunday nomdagi bir nechta shaharlar boʻlganligi sababli, odamlar koʻpincha “Badendagi Baden” (Baden viloyati) deishgan va hozirgi qoʻshaloq nom shunday paydo boʻlgan.Baden-Baden oʻzining issiq buloqlari bilan mashhur boʻlib, ular qadimgi rimliklar tomonidan ishlatilgan. Shaharda Rim vannalarining xarobalari saqlanib qolgan."
  },
  {
    letter: "B",
    title: "Ballast",
    text: "Ilk Amerika mustamlakalari Yevropadan kemalar orqali yetib kelgan edi. Ko’pchilik kemalarda og’irlikni muvozanatda ushlab turish uchun ballast ishlatilgan. Bu ballastlar odatda og’ir g’ishtlar bo’lgan, va ular keyinchalik uylar qurilishida ishlatilgan."
  },
  {
    letter: "B",
    title: "Ballistika",
    text: "O’q, snaryad, raketa va boshqa uchuvchi jismlarning uchish jarayonini o’rganuvchi fan sohasi. Atama yunon tilidagi ballo (“otmoq”) so’zidan kelib chiqqan. Ballistika uch bo’limga bo’linadi: ichki ballistika (qurol ichidagi harakat), tashqi ballistika (havodagi uchish yo’li) va terminal ballistika (nishonga tekkandan keyingi ta’sir). Ballistika XIX asr oxirida kriminalistikaning alohida sohasi sifatida shakllangan bo’lib, 1920-yillarda maxsus mikroskoplar yordamida o’q va gilza izlarini taqqoslash usuli joriy etilgan."
  },
  {
    letter: "B",
    title: "Banana fish",
    text: "“A Perfect Day for Bananafish * * — amerikalik yozuvchi J. D. Salinger ning 1948- yilda yozilgan mashhur qisqa hikoyasi. Bu asar psixologik va ramziy ma’nolari bilan mashhur. Hikoya qisqacha Asarda Seymour Glass ismli urushdan qaytgan erkak haqida gap boradi. U plyajda kichkina qizcha bilan suhbatlashadi va unga”bananafish” degan g’alati baliq haqida hikoya aytadi. Bananafish nima? bananafishlar banan g’origa kirib juda ko’p banan yeydi; ochko’zlik sabab semirib ketadi; keyin g’ordan chiqolmay o’lib qoladi."
  },
  {
    letter: "B",
    title: "BANJO",
    text: "Dumaloq korpusi va unga tortilgan charmi (membranasi) sababli ham torli, ham zarbli musiqiy instrumentlar xususiyatini o’zida jamlagan, o’ziga xos o’tkiz va jarangdor ovozga ega torli cholg’u asbobi."
  },
  {
    letter: "B",
    title: "Banshi",
    text: "* — (irlandcha bean sídhe — “tepalik ayoli”) — Irlandiya xalq og’zaki ijodida uchraydigan ayol ruh. U o’lim yaqinlashayotganini yig’isi yoki baland nolasi orqali bildiradi."
  },
  {
    letter: "B",
    title: "Barilotto",
    text: "italyancha so’z bo’lib, asl ma’nosi kichik, kalta va yo’g’on bochka degani. Qiziq jihati: sport otishmasida barilotto nishonning markaziy kichik doirasi, ya’ni “bull’s-eye” ma’nosida ham ishlatiladi. Fare barilotto — nishonning markaziga tekkizmoq degani."
  },
  {
    letter: "B",
    title: "BARKAROLA",
    text: "Venetsiyalik qayiqchilar (gondolyeralar)ning an’anaviy qo’shig’i va shu asosda shakllangan klassik musiqa janri. “Barkarola” so’zi italyan tilidagi barca (qayiq) so’zidan kelib 13 chiqqan bo’lib, “qayiqchilar qo’shig’i” degan ma’noni anglatadi. Bu janrning asosiy xususiyati — uning ritmi. Musiqa odatda 6/8 yoki 12/8 o’lchamda bo’lib, suv to’lqinlarining tekis chayqalishini va qayiq eshkaklarining bir maromda urilishini eslatuvchi sokin harakatga"
  },
  {
    letter: "B",
    title: "Barnum effekti",
    text: "Bu hodisa odamlarning noaniq va umumiy ta’riflarni o’zlariga aniq mos deb qabul qilishidan iborat. Odamlar shaxsiy testlar yoki folbinlikning umumiy ta’riflarni o’ziga xos deb o’ylaydi. Effekt psixolog Bertram Forer tomonidan 1948-yilda tajriba orqali isbotlangan. U inson psixologiyasida ishonuvchanlik va tasdiqlovchi noto’g’ri qarashlar bilan bog’liq bo’lib, marketing va manipulyatsiyada keng qo’llaniladi."
  },
  {
    letter: "B",
    title: "Baskin Robbinsning 31 ta’mi",
    text: "1953-yilda kompaniya — “31 tur” shiori bilan mahsulotlar ishlab chiqara boshlaydi. Shior “Har kuni yangi ta’m bilan” g’oyasini o’zida mujassam etishi kerak edi. Shior kompaniya asoschilari Bert Baskin va Irvin Robbinsga juda yoqib qoladi. 2006-yilda kompaniya o’z logotipidagi “B” va “R” harflarining bir qismini pushti rangda ifodalash orqali 31 soni ko’rinishi yuzaga keltiriladi. Shuni ta’kidlab o’tish joizki, garchi kompaniya shiorida 31 ta’m ifodalangan bo’lsa-da, hozirgi kungacha kompaniya 1300 dan ortiq turli ta’mdagi muzqaymoqlar ishlab chiqargan"
  },
  {
    letter: "B",
    title: "Baykonur kosmodromi",
    text: "1955-yilda Sovet Ittifoqi tomonidan Qozog’iston hududida qurilgan dunyodagi eng katta amaldagi raketa uchirish kompleksi. Bu kosmodromdan Yerning ilk sun’iy yo’ldoshi(1957), tarixdagi kosmosga chiqqan birinchi inson Yuriy Gagarin(1961), birinchi ayol kosmonavt Valentina Tereshkovalar(1963) fazoga uchirilgan. Kosmodrom Qozog’istonning Qizilorda viloyati Toretam qishlog’i yaqinida joylashgan bo’lib, poligon hududi 6717 km² ni tashkil etadi. «Baykonur» Rossiya tomonidan foydalanishga 2050-yilgacha ijaraga olingan."
  },
  {
    letter: "B",
    title: "Bayopik",
    text: "* — (inglizcha “biopic” - biographical picture) *Mashhur shaxsning taqdiri haqida hikoya qiluvchi biografik film. Bayopikka misol qilib “Shindler ro’yxati”, “Cheksizlikni anglagan inson”, “Super 30”, “Jobbs”, “Kleopatra” kabi filmlarni keltirish mumkin."
  },
  {
    letter: "B",
    title: "Begonalashish effekti",
    text: "(Verfremdungseffekt)- aktyorlar toʻsatdan roldan chiqib tomoshabinga gapirar yoki qoʻshiq aytib, bu shunchaki teatr ekanligini eslatib turardi."
  },
  {
    letter: "B",
    title: "Belladonna",
    text: "Zaharli ko’p yillik o’simlik. XVI-XVII asrlarda italyan ayollari go’zal ko’rinish maqsadida o’z qorachiqlarini kengaytirish uchun ushbu o’simlikni ko’zlariga surishgan. Ayrim ayollar hatto uni iste’mol qilishgan. Natijada, ularda o’tkir yurak yetishmovchiligi, gallyutsinatsiya, oshqozon yarasi, taxikardiya va boshqa kasalliklar paydo bo’lgan. Ha, go’zallik qurbonlik talab qiladi degan gap bejiz emas. Aytgancha, “belladonna” italyan tilida “go’zal xonim” degani."
  },
  {
    letter: "B",
    title: "Bembi effekti",
    text: "bu atama ko’proq ommaviy axborot vositalarida yovvoyi tabiat va yovvoyi hayvonlarga hamdard bo’lgan odamlar haqida gapirilayotganda qoʻllaniladi. Kiyik, panda, koala kabi yoqimtoy hisoblangan hayvonlarni o’ldirish jamiyat tomonidan salbiyroq baholanadi. Shu bilan birga, yoqimsiz yoki jirkanch deb hisoblangan hayvonlarning azoblanishi (masalan choʻchqa) kamroq yoki umuman norozilik keltirib chiqarmaydi."
  },
  {
    letter: "B",
    title: "Bengal olovi",
    text: "V-VI asrlarda Bengaliyada yaratilgan. Dastavval ulardan diniy marosimlarni o’tkazishda foydalanishgan. Olov, ibodat turiga qarab “yovuzlik isi” yoki “baxt nafasi” taratgan. 14 Bunga olov tarkibiga oltingugurt kukuni yoki kanifol (ignabargli daraxt smolasidan olinadigan sarg’ish modda) qo’shish orqali erishilgan. VIII asr boshida odamlar nafaqat hidni, balki uning rangini ham o’zgartirishni o’rganib oldilar. Shuningdek, o’simlik poyalari hamda naychalar yordamida yonish vaqtini uzaytirishga muvaffaq bo’lishdi. Shu tariqa ilk bengal uchquni yaratildi. Ular yonganda o’ziga xos ovoz chiqarardi"
  },
  {
    letter: "B",
    title: "Benjamin Franklin effekti",
    text: "psixologik ta’sir bo’lib, bunda kimgadir yaxshilik qilgan odam, yana o’sha odamga yordam berish ehtimoli ko’proq. Odamlar o’zlariga yaxshilik qilganlarga qaraganda, o’zlari yordam ko’rsatganlarga nisbatan yaxshiroq munosabatda bo’lishadi. Effekt AQSh davlat arbobi Benjamin Franklin nomi bilan atalgan. Savdo sohasida Benjamin Franklin effekti istalgan mijoz bilan munosabat muhitini yaratish uchun ishlatilishi mumkin. Potentsial mijozga yordam taklif qilish o’rniga, sotuvchi shunchaki mijozdan yordam so’rashi mumkin."
  },
  {
    letter: "B",
    title: "Beretka",
    text: "(frans. Beret) yumshoq, dumaloq shakldagi ayollar bosh kiyimi. Ommaviy ravishda harbiylar bosh kiyimi sifatida ko’p davlatlarda ishlatiladi. Beretlar Uyg’onish davrida paydo bo’lgan va ruhoniylarning atributiga aylangan. U “beretta” deb atalgan. XVIII asrga qadar beretlarni faqat erkaklar kiyishgan. Ammo, parik paydo bo’lgandan so’ng beretlar chetga surilgan. Hozirgi kunda ko’plab mashhurlar bu bosh kiyimidan o’z uslubini yaratishda mohirona foydalanishadi. Misol uchun Britaniya qirollik oilasi a’zosi Keyt Middlton garderobida beretlarning 40 dan oshiq turi mavjud."
  },
  {
    letter: "B",
    title: "Bermud uchburchagi",
    text: "Sargasso dengizidagi, versiyalarga ko’ra turli kema va samolyotlar sirli tarzda g’oyib bo’luvchi hudud.«Iblis uchburchagi», deb ham ataluvchi hudud xaritada Florida, Puerto-Riko hamda Bermud orollari bilan chegaralangan uchburchakni xosil qiladi."
  },
  {
    letter: "B",
    title: "Bertolt Brext",
    text: "(1898–1956) — teatr olamida inqilob qilgan va uni mutlaqo yangi bosqichga olib chiqqan XX asrning eng buyuk nemis dramaturgi, rejissiyori va faylasufidir. U Germaniyaning Augsburg shahrida tugʻilib, Berlinda vafot etgan. Brext anʼanaviy teatr qoidalarini buzib, “Epik teatr” yoʻnalishini yaratdi. U tomoshabin sahnadagi voqealarga berilib yigʻlashini emas, balki xolis qarab fikrlashini talab qildi."
  },
  {
    letter: "B",
    title: "Besh apelsin urug’i",
    text: "Artur Konan Doylning 1891-yilda yozilgan hikoyasi bo’lib, unda Sherlok Xolms sirli o’limlarni tergov qiladi. Jon Openshou ismli yigit besh apelsin urug’i solingan konvert olgach, oilaviy fojialar ortidan o’zi ham halok bo’ladi. Xolms tergov davomida bu tahdidlar Ku- Kluks-Klan tashkiloti bilan bog’liqligini aniqlaydi. Jinoyatchilar jazodan qocholmaydi – ular kema halokatida nobud bo’ladi. Ushbu hikoya Xolms sarguzashtlari orasida eng sirli va hayajonlilaridan biridir."
  },
  {
    letter: "B",
    title: "Beshinchi kolonna",
    text: "davlat, jamiyat yoki tashkilot ichida bo’la turib, uni ichidan yemirish, beqarorlashtirish yoki qulatish uchun ishlaydigan , yashirin guruh yoki shaxslar. “Beshinchi kolonna” atamasi Ispaniya fuqarolar urushi davrida paydo bo’lgan."
  },
  {
    letter: "B",
    title: "Bigudi",
    text: "sochni jingalak yoki to’lqinsimon shaklga keltirish uchun ishlatiladigan moslama. Biguden nomli shaharchada keng tarqalgan bosh kiyimiga oʻxshagani uchun Bigudi deb ataladi. Zamonaviy bigudilar Byula Luiza Genri tomonidan 1925-yilda patentlangan. Bigudilar asosan plastik yoki kauchukdan tayyorlangan bo’lib, sochni o’rab bir necha soat davomida tabiiy quritish uchun qoldirish orqali jingalak sochlar hosil qilinadi."
  },
  {
    letter: "B",
    title: "Billur kecha (Kristallnacht)",
    text: "1938-yil 9–10-noyabr kunlari Germaniyada yuz bergan, yahudiylarga qarshi ommaviy hujumlar. Bu kechada natsistlar yahudiylarga tegishli minglab do’kon, maktab va ibodatxonalarni yoqib yuborib, ularni o’ldirish, hibsga olish va konslagerlarga yuborish kabi harakatlarni amalga oshirishgan. Ko’chalarda sindirilgan oynalar qoplab ketgani sababli bu kecha “Billur kecha” deb atalgan."
  },
  {
    letter: "B",
    title: "Binafsharang odam",
    text: "Pol Xolldor Karason (1950-2013) o’zining binafsharang-ko’kimtir terisi bilan mashxur bo’lgan. 1993-yilga qadar Karason odatiy inson qiyofasiga ega va yuzlariga sepkil toshgan odam edi. Pol o’zidagi teri muammolarini bartaraf etish maqsadida uyda tayyorlangan kumush xlorid eritmasini yuziga surtganidan keyin uning yuz terisi binafsharang-ko’kimtir tusga kirgan. 2008-yilda “Today” nashri ushbu g’alati yuzli odam haqida maqola e’lon qiladi. Shundan keyin u mashxur bo’lib ketadi va “ota Smurf” nomini oladi."
  },
  {
    letter: "B",
    title: "Bingo",
    text: "raqamlar tasodifiy tanlanadigan va o’yinchilar kartochkasidagi raqamlarni belgilab boradigan lotereya/tasodifiy o’yin turi. Kelib chiqishi: XX asr boshlarida AQShda ommalashgan, ildizi esa Italiyadagi Il Gioco del Lotto d’Italia lotereyasiga borib taqaladi. AQShdagi mashhur shakli: odatda 5×5 katakli karta ishlatiladi. Ustunlar B-I-N-G-O harflari bilan belgilanadi. Har bir katakda raqam bo’ladi; markaziy katak ko’pincha “FREE” hisoblanadi. O’yinchi chaqirilgan raqamlarni kartasidan belgilaydi. Belgilangan raqamlar oldindan belgilangan naqshni hosil qilganda o’yinchi “Bingo!” deb e’lon qiladi. Klassik 75-balllik variantda raqamlar 1–75 oralig’ida bo’ladi. 90-balllik bingo Buyuk Britaniya va Yevropada keng tarqalgan."
  },
  {
    letter: "B",
    title: "Bitlomaniya (Beatlemania)",
    text: "o’tgan asr 60-yillarida paydo bo’lgan atama bo’lib, “Bitlz” (“The Beatles”) guruhiga bo’lgan telbanamo ishqibozlikni tavsiflaydi."
  },
  {
    letter: "B",
    title: "Black Sabbat",
    text: "musiqiy guruh 1968-yilda tashkil topgan…"
  },
  {
    letter: "B",
    title: "BLITZKRIEG",
    text: "(nem. “chaqmoq tezligidagi urush”) Bu so’z tezkor, kuchli va to’satdan hujum orqali qisqa muddatda g’alabaga erishish strategiyasini anglatadi. U Ikkinchi jahon urushi davrida natsistlar Germaniyasi tomonidan keng qo’llangan. Maqsad: dushmanni shoshirib, qarshi zarba berishga ulgurmasdan mag’lub etish. • 1939-yilda Polshaga bosqin • 1940-yilda Fransiya va Niderlandiyaga hujum Bu harbiy harakatlar Germaniya uchun “momaqaldiroq tezligidagi g’alabalar” deb baholangan."
  },
  {
    letter: "B",
    title: "BMW",
    text: "Bayerische Motoren Werke, Germaniyaning mashhur avtomobil va mototsikl ishlab chiqaruvchi kompaniyasi. 1916-yilda aviatsiya dvigatellari ishlab chiqaruvchi korxona sifatida tashkil etilgan. Bugungi kunda premium klassdagi avtomobillari va innovatsion texnologiyalari bilan tanilgan. Shiori: “Sheer Driving Pleasure”.(Haqiqiy haydash zavqi) Bayroqdagi ko’k va oq ranglar Bavariya bayrog’ining ranglaridan olingan."
  },
  {
    letter: "B",
    title: "BODO KODI",
    text: "Axborotni uzatish tarixidagi ilk standartlashtirilgan raqamli kodlardan biri bo’lib, u zamonaviy kompyuter kodlarining bevosita ajdodi hisoblanadi. Ushbu kod 1870-yilda fransuz ixtirochisi Jan Moris Emil Bodo tomonidan telegraf xabarlarini tezroq va samaraliroq uzatish uchun ishlab chiqilgan. Morze alifbosidan farqli o’laroq, Bodo kodida har bir belgi bir xil uzunlikka ega edi, bu esa telegraf apparatlariga xabarlarni avtomatik tarzda o’qish va chop etish imkonini bergan."
  },
  {
    letter: "B",
    title: "Bofort shkalasi",
    text: "Shamol kuchini baholash uchun moʻljallangan 12 balli shkala (jadval); shamolning yerdagi buyumlarga taʼsiri va dengizning toʻlqinlanish darajasiga qarab aniqlanadi. Bu shamol tezligini baholash uchun 1805-yilda ingliz admirali Frensis Bofort tomonidan ishlab chiqilgan tizimdir. 0 (shamolsiz) dan 12 (dovul yoki bo’ron) gacha bo’lgan kuchlanishlarni ifodalaydi"
  },
  {
    letter: "B",
    title: "Bolduin effekti",
    text: "(ba’zan Bolduin evolyutsiyasi) – amerikalik psixolog va faylasuf Jeyms Bolduinning nazariyasi bo’lib, unga ko’ra inson bir qobiliyatni tug’ma ravishda emas, balki hayotida davomida o’rgangan bo’lsa, bu insonning avlodi o’sha qobiliyatga tug’ma ravishda ega bo’ladi. Nazariya haqida Jeyms Bolduin ilk bor 1896-yili, “Evolyutsiyaning yangi faktori” asarida yozgan. Oddiyroq qilib tushuntiriladigan bo’lsa, agar insonda matematikani o’rganishga qobiliyat bo’lmasa (“qonida yo’q” bo’lsa), lekin hayoti davomida muntazam matematika bilan shug’ullanish natijasida fanni chuqur o’rgansa, uning farzandida matematika “qoni” paydo bo’ladi"
  },
  {
    letter: "B",
    title: "Botfortlar",
    text: "ayollar uchun mo’ljallangan, uzun etiklar bo’lib, tizzadan yuqorida turadi. Fransiyada bu etiklar birinchi bo’lib paydo bo’lgan va ularning nomi ham fransuzcha “bottes fortes”(kuchli etik) so’zidan kelib chiqqan. Dastlab bu etiklar qirollik va harbiylar kiyimi edi. 1960- yillarda dizayner Andre Kurej ayollar uchun maxsus botfortlarni moda olamiga olib kirgan."
  },
  {
    letter: "B",
    title: "Botulizm",
    text: "bu “Clostridium botulinum” bakteriyasining toksini bilan yuzaga keladigan og’ir ovqatdan zaharlanishdir. Bu toksin havosiz muhitda rivojlanadigan maxsus bakteriyalar tomonidan ishlab chiqariladi. Shuning uchun shishib ketgan konserva bankalarida ko’p uchraydi. Anaerob muhitda bakteriya nafaqat toksin, balki gaz ham chiqaradi. Lotincha”botulus” — “kolbasa” degan so’zdan. Ilgari botulizmning asosiy manbai aynan uyda tayyorlangan kolbasalar bo’lgan."
  },
  {
    letter: "B",
    title: "Boustrofedon",
    text: "Qadimgi yozuv uslubi bo’lib, matn satrlari bir qatorda chapdan o’ngga, keyingi qatorda esa o’ngdan chapga yoziladi. Bu atama yunoncha “buqa haydagandek” degan ma’noni anglatadi — ya’ni buqa yer haydagandek bir yo’nalishda borib, keyin orqaga qaytadi. Bunday yozuv uslubi qadimgi yunon, etrusk va ba’zi boshqa madaniyatlarda qo’llanilgan. Boustrofedon nafaqat matn joylashuvi, balki harflarning o’zgaruvchan yo’nalishi bilan ham ajralib turadi."
  },
  {
    letter: "B",
    title: "Brayl alifbosi",
    text: "Koʻrish imkoniyati cheklangan insonlar uchun maxsus yozuv tizimi bo’lib, 1824- yilda fransuz ixtirochisi Lui Brayl tomonidan yaratilgan. Ushbu alifbo harflarni ifodalash uchun qo’llaniladigan 6 ta qavariq nuqtadan iborat bo’lib, barmoq bilan his qilish orqali o’qiladi. Bugungi kunda Brayl alifbosi butun dunyoda qo’llaniladi va turli tillarga moslashtirilgan."
  },
  {
    letter: "B",
    title: "Bredli effekti",
    text: "(Uaylder effekti, Dinkins effekti deb ham ataladi) – saylovda oq tanli va oq tanli boʻlmagan nomzod qatnashganda ovoz beruvchilar irqchilikda ayblanishdan qoʻrqib, oq tanli boʻlmagan nomzodga ovoz berishini aytishi va amalda bu ishni teskarisini qilishi. Bredli effektining odatiy ssenariysi 1982-yilgi Kaliforniya gubernatorlik saylovida yuz bergan. Saylov oldidan “exit- poll”larga ko’ra ancha mashhur qora tanli nomzod Tom Bredli katta farq bilan yetakchilik qilgan. Saylov byulletenlarini yakuniy qayta ishlash va ovozlarni sanab chiqishdan so’ng, Jorj Dokmejyan to’satdan yutib chiqadi, lekin uning mag’lub bo’lishi “bashorat” qilingan edi. Shunday qilib ma’lum bo’lishicha oq tanli saylovchilar soʻrovlarda qora tanli nomzodni qo’llab-quvvatlaymiz deb yolg’on gapirishgan. Ovoz berish kabinasida esa oq tanli nomzodga ovoz berishgan."
  },
  {
    letter: "B",
    title: "Bremenlik mashshoqlar",
    text: "aka-uka Grimmlar qalamiga mansub bo’lgan ertak. Ertakning asosiy qahramonlari — oʻz xoʻjayinidan xafa boʻlgan eshak, it, mushuk va xoʻroz Bremen shahriga musiqachilik qilish uchun yoʻl oladilar. Oʻrmonda ketayotib eski kulbani koʻrib qoladilar. Bir- birlarining ustiga chiqib, oʻz “kuy”larini ijro etadilar: eshak hangraydi, it uvillaydi, mushuk miyovlaydi, xoʻroz qichqiradi. Ularning ovozini eshitgan qaroqchilar qoʻrqib, qochib ketadi. Asar qahramonlari “bremenlik” deb atalsa-da, ular aslida shaharga yetib bormaydilar."
  },
  {
    letter: "B",
    title: "Brigadeyro",
    text: "Braziliyadagi eng sevimli milliy shirinliklaridan biri, oddiy ingredientlar bilan tayyorlanadigan shokoladli desert. 1940-yillarda prezidentlikka nomzod bo’lgan harbiy brigadir Eduardo Gomes sharafiga nomlangan. Uning tarafdorlari kampaniya davomida aynan shu shirinlikni tayyorlab, sotib pul yig’gan.Shundan so’ng bu shirinlik “brigadeyro” (ya’ni “brigadirniki”) nomi bilan mashhur bo’lgan. Braziliyada har yili 10-sentabrda Brigadeyro kuni nishonlanadi — bu shirinlik milliy madaniyat ramziga aylangan."
  },
  {
    letter: "B",
    title: "Britaniya Shindleri",
    text: "Ser Nikolas Uinton — 1909-yil 19-mayda Londonda ingliz-yahudiy oilasida tug’ilgan. Uinton Ikkinchi Jahon urushi arafasida Chexoslovakiyadan 669 nafar bolani qutqarishga yordam bergan. Chexoslovakiyaga qisqa tashrifi chog’ida u xavf ostida qolgan bolalar ro’yxatini tuzishga yordam bergan va qaytgandan keyin bolalarni Britaniyaga olib kelish,ular uchun uylar va homiylar topish bilan shug’ullanadi. Keyinchalik bu operatsiya “Chexiya bolalar transporti” nomi bilan mashhur bo’lgan."
  },
  {
    letter: "B",
    title: "Broun harakati",
    text: "suyuqlik yoki gaz ichidagi mayda zarrachalarning tartibsiz va doimiy harakati. Bu hodisa ingliz botanigi Robert Broun tomonidan kuzatilgan va unga uning nomi berilgan. Broun bu harakatni suvdagi gulchang zarrachalarini mikroskop ostida tekshirish paytida aniqlagan. Keyinchalik bu harakat molekulalarning tasodifiy harakati natijasida yuzaga kelishi isbotlangan. Broun harakati atom va molekulalarning mavjudligini tajribaviy isbotlovchi muhim dalil hisoblanadi."
  },
  {
    letter: "B",
    title: "Brunch",
    text: "Nonushta va tushlik oralig’ida nimadir yeb olishni ifodalovchi termin. “Brunch” termini “nonushta” (inglizcha “breakfast”) va “tushlik” (inglizcha “lunch”) so’zlari qo’shilishidan kelib chiqqan."
  },
  {
    letter: "B",
    title: "Bumerang",
    text: "Bu dastlab avstraliyalik aborigenlar tomonidan ov qilish va oʻyin maqsadida ishlatilgan bukilgan yogʻochdan yasalgan, koʻpincha oʻroqsimon, egri shakldagi qurol. U havo oqimida aylanish xususiyatiga ega boʻlib, agar toʻgʻri uloqtirilsa, yana uloqtiruvchining qoʻliga qaytib keladi. Bumeranglarning kelib chiqishi qadimiy Avstraliya, Misr va Hindistonga borib taqaladi. Eng qadimgi bumerang taxminan 20 000 yil oldin yaratilgan. Zamonaviy bo’meranglar faqat yog’ochdan emas, balki plastmassa, karbon tolasi va metall kabi materiallardan ham tayyorlanadi."
  },
  {
    letter: "B",
    title: "Buratino",
    text: "esa — rus yozuvchisi Aleksey Tolstoy tomonidan yaratilgan va Kollodi asari asosida qayta talqin qilingan."
  },
  {
    letter: "B",
    title: "Burka Band",
    text: "2002-yilda Kobulda tashkil etilgan Burka Band Afg’onistondagi ilk ayollar rok guruhlaridan biri hisoblanadi. Guruh a’zolari xavfsizlik sababli doimo burqa kiyib chiqish qilgan va o’z shaxsini sir tutishgan. Vokalist Nargizning so’zlariga ko’ra, Tolibon tahdidi tufayli hatto ularning oila a’zolari ham guruh faoliyati haqida bilishmagan. Burqa ular uchun nafaqat himoya vositasi, balki ayollar erkinligi cheklanishiga qarshi ramziy norozilik belgisi ham bo’lgan."
  },
  {
    letter: "B",
    title: "Butleger",
    text: "Ta’qiqlangan mahsulotlar savdosi bilan shug’ullanuvchi shaxs, spirtli ichimlik kontrabandasini amalga oshiruvchi inson.Versiyalarga ko’ra bu termin AQSh fuqarolar urushi paytida shakllangan bo’lib, askarlar xarbiy lagerlarga alkogol ichimliklarni etiklari ichiga yoki shimlari ostiga yashirib olib kirishgan. Ingliz tilida «boot» – etik, «leg» – oyoq ma’nolarini anglatadi. Butlegerlar harakati AQShdagi «Quruq qonun» davrida, ya’ni spirtli ichimliklar importi hamda savdosi ta’qiqlangan davr, 1920-1933-yillar oralig’ida eng avjiga chiqqan. «Quruq qonun» ning bekor qilinishi aynan butlegerlarga qarshi kurashning samarasizligi bilan bog’lanadi."
  },
  {
    letter: "B",
    title: "Buyuk Getsbi (1925)",
    text: "Orzular ortidan quvish fojeasi. Frensis Skott Fitsjerald tomonidan yozilgan roman 1920-yillar «Jazz asri» davrini tasvirlaydi. Asarda boylik, hashamat, yolg’on muhabbat va soxta orzular olamida yashayotgan insonlar hayoti ko’rsatiladi. Getsbi – sirli va nihoyatda boy inson, u oddiy yigitlik paytida sevgan ayoli, Dayzi Byukenanga yetishish uchun jamiyat zinapoyasidan shiddat bilan yuqorilaydi. Butun hayotini o’zgartiradi, faqat bir maqsad – Dayzini qaytarish uchun. Ammo asar so’ngida olinadigan xulosa: orzular har doim ham haqiqat bilan mos kelavermaydi. Getsbining orzusi qulab tushadi va bu orzular qulashida jamiyatdagi ikkiyuzlamachilik, boylar hamda kambag’allar o’rtasidagi tafovut, shuningdek, o’tmishni qaytarish ilinjida yashashning xavflari yotadi."
  },
  {
    letter: "B",
    title: "Byurokratiya",
    text: "(fransuzcha byuro – devon, yunoncha kratos – hokimiyat) – rasmiyatchilikka asoslangan boshqaruv va ma’muriyat tizimi. Byurokratiya aloxida moddiy va ma’naviy imtiyozlarga ega ma’murlar faoliyatida namoyon bo’ladi. Ibrohim Haqqul :“Byurokratiya insonning fikrlashiga qarshi ishlaydigan eng ayovsiz va dahshatli qurilmadir”,- deb taʼrif bergan. 19 C"
  },

  // === C ===
  {
    letter: "C",
    title: "Catch-22",
    text: "yoki Tuzatish-22 ( inglizcha Catch-22 ) ataylab yaratilgan, tasodifan olingan yoki huquqiy, ma’muriy, ijtimoiy yoki mantiqiy vaziyatga xos bo’lgan to’qnashuv bo’lib, ma’lum bir qoidaga rioya qilishga urinish uning buzilishini anglatadi. Bunday me’yorlarga bo’ysunadigan shaxs o’zini maqsadga muvofiq tuta olmaydi."
  },
  {
    letter: "C",
    title: "CETI",
    text: "(Cetacean Translation Initiative) — kitlar va kashalotlarning murakkab tovushli muloqotini sun’iy intellekt yordamida o’rganayotgan ilmiy loyiha. 2020-yilda boshlangan loyiha Dominika yaqinidagi kashalotlardan gidrofonlar orqali minglab tovush yozuvlarini yig’ib ularni o’rganishga harakat qilmoqda, maqsad kitlarning kommunikatsiya tizimini tushunish va kelajakda uning ma’nolarini aniqlash. Hozircha CETI ijobiy natijaga erishgani yo’q. David Gruber — loyihaning asoschilaridan biri. CETI nomi inglizcha Cetacean Translation Initiative qisqartmasi bo’lib, cetaceans — kitlar, delfinlarni anglatuvchi biologik guruh nomidan kelib chiqqan."
  },
  {
    letter: "C",
    title: "Cetus",
    text: "katta yulduz turkumi bo’lib, lotincha nomi “dengiz mahluqi” yoki “kit” ma’nosini anglatadi. Yunon mifologiyasida Cetus — Poseidon yuborgan dengiz mahluqi bo’lib, Efiopiyani vayron qilish uchun keladi. Efiopiya shohi Andromedani qurbon qilishga qaror qiladi. Yakunda Persey Cetusni o’ldirib, Andromedani qutqargan. Ceti esa Cetusning lotincha shakli."
  },
  {
    letter: "C",
    title: "Chakra",
    text: "Sanskrit tilida «g’ildirak» degani bo’lib, tanadagi energiya oqimini boshqaruvchi markazlar deb qaraladi. Hind va buddaviy an’analarga ko’ra, inson tanasida 7 ta asosiy chakra mavjud. Har bir chakra tananing muayyan qismiga, hissiyotlarga va ruhiy holatga bog’langan. Chakralarning to’g’ri ishlashi ruhiy barqarorlik, sog’lom fikrlash va jismoniy holatga ijobiy ta’sir ko’rsatadi. Meditatsiya, yoga va to’g’ri nafas olish orqali ularni muvozanatlashtirish mumkin, deb qaraladi."
  },
  {
    letter: "C",
    title: "Cheshir Mushugi",
    text: "Leuis Karrollning “Alisa moʻjizalar mamlakatida” kitobidagi qahramon. Doimo tabassum qilib turuvchi mushuk, oʻz xohishiga koʻra teleportatsiya qila oladi, xayrlashuv oldidan havoda faqat tabassum qoldirgan holda tezda yoki aksincha sekin-asta koʻzdan gʻoyib boʻla oladi. Bu mushuk (Kongleton Mushugi) cherkovga maʼsul boʻlgan ayolning sevimli mushugi boʻlgan, lekin bir kuni mushuk sayrdan keyin uyiga qaytmaydi… Bir necha kundan keyin ayol eshik tirnalayotganini eshitadi, eshikni ochganida ostonada uning sevimli mushugi oʻtirardi, ammo, bir lahzadan soʻng u havoda bugʻlangandek gʻoyib boʻladi. Shuningdek, mushuk, Disney multfilmiga asoslangan Kingdom Hearts videooʻyinlarida ham paydo boʻlgan."
  },
  {
    letter: "C",
    title: "Chexov miltigʻi",
    text: "Dramatik tamoyil bo’lib hikoyada taqdim etilgan har bir element umumiy hikoyada o’z vazifasini bajarishi kerakligini ta’kidlaydi. Bu ibora dan kelgan mashhur yozuvchi va 20-asr dramaturgi Anton Chexov shunday degan edi: “Agar sizning devoringizda birinchi qismda qurol osilgan bo’lsa, u oxirgi pardada otilishi kerak” Chexov miltig’i” yozuvchining o’quvchiga tushunarsiz unsurlarni kiritish orqali “yolg’on va’dalar” bermasligi haqidagi so’zsiz kelishuvni nazarda tutadi. Boshqacha qilib aytganda, agar siz biror narsaga e’tibor qaratsangiz, oxir-oqibat nima uchun unga e’tibor berish kerakligini bilib olasiz"
  },
  {
    letter: "C",
    title: "Chingizxonning oq buluti",
    text: "Chingiz Aytmatovning “Asrga tatigulik kun” romaniga ilova qilingan qissasi."
  },
  {
    letter: "C",
    title: "Chirlider effekti",
    text: "(guruh jozibadorligi effekti) – San-Diegodagi Kaliforniya universiteti olimlari tomonidan oʻtkazilgan tadqiqotlarga koʻra guruhda suratga tushgan odamning fotosurati faqat oʻzi boʻlgan fotosuratga qaraganda jozibaliroq koʻrinadi. Bu hodisa “Chirlider effekti” sifatida tanilgan. Tadqiqot ishtirokchilari o’rtacha hisobda guruhli suratlardagi erkaklar va ayollarning jozibadorligini umumiy sahnadan kesilgan bir xil yuzlarga qaraganda yuqoriroq baholadilar. Hissiy komponentni yo’q qilish uchun tadqiqot turli parametrlar bilan takrorlandi. Endi guruh fotosuratlari bir ramkada olinmagan, balki alohida kadrlardan yig’ilgan. Hatto bu kollajlarda ham yuzlar individuallikdan ko’ra jozibaliroq deb topilgan."
  },
  {
    letter: "C",
    title: "Chirliding",
    text: "(inglizcha “cheerleading” — ” cheer” - “qo’llab-quvvatlash” va “lead” - ” boshqarish”) Chirliding AQShda 1870-yillarda paydo bo’lgan va XX asrda keng tarqalgan qo’llab-quvvatlash guruhi. Ikki turga bo’linadi — jamoalarga bo’linib musobaqalashish hamda sport klublari yoki federatsiyalarni qo’llab-quvvatlash. 1998-yilda “Xalqaro chirliding federatsiyasi” (IFC) *tuziladi. Unga Yevropa davlatlaridan tashqari Yaponiya ham a’zo bo’lgan. 2001-yilda Tokioda chirliding bo’yicha 1-jahon chempionati bo’lib o’tadi"
  },
  {
    letter: "C",
    title: "Cho’chqalar uchib ketganda",
    text: "Bu idioma hech qachon sodir bo’lmaydigan voqeani ifodalash uchun ishlatiladi. Ingliz tilida hazil tariqasida ishlatilib, aqlbovar qilmas holatlarga nisbatan qo’llanadi. O’zbek tilidagi ekvivalenti: “Tuyaning dumi yerga tekkanda”, “Xo’roz tuxum tuqqanida”, “Simyog’och gullaganda”."
  },
  {
    letter: "C",
    title: "Chopin",
    text: "(italyancha “pianelle”) XIV-XVII asrlarda Yevropada keng tarqalgan tag qismi uzun bo’lgan ayollar poyabzali. Chopinlar O’rta Osiyodan keltirilgan oyoq kiyimlar ta’sirida Venetsiyada yaratilgan. Tag qismi uzunligi 50 santimetrgacha (ayrim manbalarda 1 metrgacha) yetgan. Bu esa uni kiygan ayolning yurishini qiyinlashtirgan. Noqulaylikdan qochish uchun ularning qo’lidan xizmatkorlar ushlab turishgan."
  },
  {
    letter: "C",
    title: "Chorikor",
    text: "Hosilning toʻrtdan bir ulushiga ishlovchi shaxs. XX asrning boshlariga qadar feodal va boylarning yerlarini ijaraga olib, ekin ekuvchi va yerda ishlovchi yersiz dehqon. Agar dehqon yerga oʻz ot ulovi bilan ishlov bersa, hosilning ikkidan bir qismini olga Shuningdek, Afgʻonistonning Parvon viloyatidagi shahar bo’lib, viloyatning markazi hisoblanadi. U Kobuldan shimolroqda joylashgan bo’lib, sanoat, hunarmandchilik va qishloq xo’jaligi bilan mashhurdir."
  },
  {
    letter: "C",
    title: "Copyleft",
    text: "Mualliflik huquqi (copyright) tushunchasiga zid bo’lgan, lekin u asosida yaratilgan tushuncha. Copyleft litsenziyalaridan foydalangan holda mualliflar va mualliflik huquqi egalari asl asarning nusxalarini va uning o’zgartirilgan versiyalarini tarqatish huquqini beradi. Hosil boʻlgan asar mualliflari uni asl asar bilan bir xil huquqlar ostida tarqatishlari shart. Natijada, “copyleft” litsenziyasidan foydalanish bepul asar yaratish imkonini beradi. 21 D"
  },

  // === D ===
  {
    letter: "D",
    title: "Daktiloskopiya",
    text: "(yun.) — qoʻl barmoqlari uchidagi teri izlariga qarab, shaxsni aniqlash usuli hamda shu bilan shug’ullanuvchi soha ham."
  },
  {
    letter: "D",
    title: "Damashq",
    text: "dunyoning eng qadimiy poytaxti. Damashq – Suriya poytaxti bo’lib, shahar miloddan avvalgi 2500-yillarga oid manbalarda eslab o’tilgan. Damashq qadimda muhim savdo yo’llari chorrahasida joylashgan bo’lib, Arameylar, Ossuriylar, Forslar, Yunonlar va Arab xalifaligi kabi ko’plab sivilizatsiyalarga guvoh bo’lgan."
  },
  {
    letter: "D",
    title: "Damokl qilichi",
    text: "Dionis ismli shohning masxarabozi Damokl shohlik ne’matlarini maqtardi. Dionis uni bir kun taxtga o’tqazib, tepasiga ot junidan osilgan qilich osib qo’ydi. Bu orqali u hokimiyat zavq emas, doimiy xavf ekanini ko’rsatdi. “Damokl qilichi” iborasi shundan kelib chiqqan bo’lib, har qanday doimiy tahdidni anglatadi. Bugun ham har qanday quvg’in tahdidi haqida gapirganda: “Boshingda DAMOKL QILICHI osilib turibdi”, - deyishadi."
  },
  {
    letter: "D",
    title: "Danning-Kryuger effekti",
    text: "ba’zi bilimi va qobiliyati past odamlar o’zini bilimli va ko’p sohalarda yetuk, deb biladi. Natijada faoliyati davomida ko’plab xatolarga yo’l qo’yadi, omadsizlikda o’zi emas, balki o’zgalar aybdor deb hisoblaydi. Effektning teskari ko’rinishi - bilimi va kompetensiyasi yuqori odamlar o’ziga past baho beradi. Ushbu effekt psixologlar D.Danning va J.Kryugerlar tomonidan o’rganilib, 1999-yilda bir qancha ekperimentlar o’tkazilgan."
  },
  {
    letter: "D",
    title: "Darrandachilik",
    text: "Qimmatbaho mo’yna olish uchun mo’ynali hayvonlarni boqish bilan shug’ullanuvchi chorvachilik tarmog’i. Unda tulki, suvsar, nutriya kabi hayvonlar kataklarda boqiladi. Bu soha naslchilik va tovar yetishtirish yo’nalishlarida rivojlangan. Oʻzbekistonda 20- asrning 70-yillaridan boshlab Darrandachilik sohasida Quyi Amudaryoda va Surxondaryo viloyatida havaskorlar tomonidan va matlubot jamiyatlari huzuridagi kichik fermalarda ondatra, qunduz, nutriya, tulki, qorakuzanlar boqila boshlangan."
  },
  {
    letter: "D",
    title: "Darvin mukofoti",
    text: "inson evolyutsiyasiga “hissa qo’shgan” eng g’alati va kulgili o’lim holatlari uchun beriladigan hazilomuz mukofot. Bu mukofot aql bovar qilmas xavf-xatarga e’tiborsizlik yoki beparvolik natijasida hayotdan ko’z yumgan kishilarga topshiriladi. Asosiy sharti — nomzod o’zini yo’q qilish orqali insoniyat genofondini yaxshilashiga “hissa qo’shishi” kerak. Mukofot 1993-yilda rasman ommalashgan va hanuzgacha internetda mashhur."
  },
  {
    letter: "D",
    title: "Datura",
    text: "(Bangidevona)— voodoo marosimlaridagi zaharli o’simlik “Jimsonweed” nomi bilan tanilgan, “Solanaceae” oilasiga mansub o’ta zaharli o’simlik. Barg va urug’larida atropin, skopolamin, hyoscyamine kabi alkaloidlar bor."
  },
  {
    letter: "D",
    title: "David haykali",
    text: "Mikelanjelo tomonidan 1501–1504-yillarda yaratilgan haykal. Renessans davrining san’at durdonasi hisoblanadi. Haykal Injildagi Dovud payg’ambarning Goliafga qarshi jangidan oldingi holatini tasvirlaydi. Haykal balandligi 5.17 metr. Verrokkio haykal yasashda yosh Leonardo da Vincidan ilhomlangan degan farazlar mavjud. Mikelanjelo yosh Dovudni mukammal erkak tanasi andozasida tasvirlab, insonning anatomik tuzilishini nihoyatda aniq ko’rsatgan. Asar dastlab 22 Florensiyadagi shaharning markaziy maydoniga qo’yilgan, hozirda esa Uffizi galereyasining bir qismi bo’lgan Akkademiya galereyasida saqlanadi."
  },
  {
    letter: "D",
    title: "Demosfen (mil. av. 384–322)",
    text: "qadimgi Afinaning mashhur notiq va siyosatchisi. Yoshligida nutqidagi nuqsonlarni yengish uchun og’ziga tosh solib dengiz bo’yida mashq qilgani bilan mashxur. 5 yoshida otasidan ajralib, katta merosga ega bo’ladi. Biroq tog’asi boylikni o’zlashtirib, unga faqat kichik qismini berdi. Haqqini sud orqali talab qilishga qaror qiladi. Qonunlarni va notiqlik san’atini o’rganish uchun mashhur advokat Isey maktabida tahsil olga."
  },
  {
    letter: "D",
    title: "Deniel Xess",
    text: "changyutgich ixtirochisi"
  },
  {
    letter: "D",
    title: "Dentofobiya",
    text: "Bu odamning stomatologik muolajalar, tish shifokori bilan uchrashuv yoki hatto bu haqda o’ylashdan ham kuchli qo’rquv yoki xavotir his qilishidir. Bu holat bolalikdagi salbiy tajriba, og’riqli muolajalar yoki boshqalarning qo’rqinchli hikoyalari sababli yuzaga keladi. Dentofobiya atamasi birinchi marta 1946-yilda amerikalik psixiatr George Wolff tomonidan qo’llanilgan. U stomatologik qo’rquvning jiddiy ruhiy holat ekanini ilmiy jihatdan asoslab bergan."
  },
  {
    letter: "D",
    title: "Detektiv qirolichasi",
    text: "“Agata Kristi” – — 1890-yil 15-sentyabrida Angliyaning Devonshir grafligidagi Torki shahrida tug’ilgan. Vafoti: 1976-yil 12-yanvar Angliyaning Oksfordshir grafligi Uollingford shahri U romantik-psixologik romanlar uchun “Meri Vestmakot” taxallusidan foydalangan. U birinchi jahon urushi davrida farmatsevt bo’lib ishlagan U dorilar, zaharlar, ularning ta’siri va dozalarini mukammal bilgan bu bilimlarini o’z romanlarida mahorat bilan qo’llagan. Asarlari: “Secret Adversary”, “Golf maydonidagi qotillik”, “Katta to’rtlik”, “Sharqiy ekspressdagi qotillik”, “Alifbo bo’yicha qotillik”, “Mesopotamiyadagi qotillik”, “Nildagi qotillik”, “O’nta negr bolasi”, “N yoki M?”, “Kutubxonadagi murda”, “Karib dengizi siri”."
  },
  {
    letter: "D",
    title: "Deus ex machina",
    text: "muammoni kutilmagan tashqi kuch yoki hodisa yordamida birdaniga hal qilish usuli."
  },
  {
    letter: "D",
    title: "DEVID BELL",
    text: "Fransuz aktyori va kaskadyori, shahar parkur yo’nalishining asoschisi va asosiy targ’ibotchisi"
  },
  {
    letter: "D",
    title: "Devid Kopperfild (16.09.1956)",
    text: "AQShlik ko’zbo’yamachi va fokuschi. 1990-yillardagi televizion shoudagi chiqishlari bilan mashxur. Tarixdagi moliyaviy tomondan eng muvaffaqiyatli illyuzionist hisoblanadi. Televideniye shoularida Ozodlik xaykalini yo’q qilishi va Buyuk Xitoy devorining ichidan o’tgan chiqishlari mashxur. Asl ismi Devid Set Kotkin. Charlz Dikkensning «Devid Kopperfild» romani) bosh qahramoni ismini o’ziga taxallus qilgan. Unga qadar «Davino» nomi ostida faoliyat yuritgan."
  },
  {
    letter: "D",
    title: "Didro effekti",
    text: "Yangi xarid qilingan narsa insonning boshqa narsalarni ham yangilash istagini qo’zg’atishi hodisasi. Tushuncha fransuz faylasufi Deni Didroning shaxsiy tajribasidan kelib chiqqan. U hashamatli yangi xalat sotib olgach, eski buyumlari unga mos kelmayotgandek tuyulib, ularni ham almashtirishga majbur bo’lgan. Bu effekt marketingda keng qo’llaniladi va odamlarni ketma-ket xarid qilishga undaydi. Masalan, yangi smartfon sotib olgan odam unga mos keladigan yangi aksessuarlarni ham xarid qilishni xohlaydi."
  },
  {
    letter: "D",
    title: "Din-Din effekti",
    text: "(Toʻgʻri va teskari)– Piter Penning teatrlashtirilgan tomoshalarida tomoshabinlardan Din-Dinni o’limdan qutqarish taklif qilinadi: agar ular parilarga ishonsalar, qarsak chalishlari so’raladi, shundan soʻng Din-Din jonlanadi. Shuning uchun narsa va hodisalarning faqat odamlar ularga ishonganligi sababli mavjudligi ba’zan Din-Din effekti deb ataladi. Din-Din effektining teskari ta’siri ham bor, qachonki ko’proq odamlar biror narsaga ishonsa, u yo’q bo’lib ketadi. Misol uchun, haydash xavfsiz, degan stereotip ommaviy ongda mustahkamlanganda, haydovchilar mashinalarni ehtiyotsizlik bilan hayday boshlaydilar va shu bilan yo’llardagi xavfni oshiradilar."
  },
  {
    letter: "D",
    title: "Diogen klubi",
    text: "Sherlock Holmes hikoyalaridagi eng sirli joylardan biri — Diogen klubi Bu klubni Holmesning akasi Maykroft Holmes tashkil etgan Klub a’zolari gaplashishni yoqtirmaydigan, yolg’izlikni afzal ko’radigan intellektual kishilardir. Unda faqat “mehmonlar xonasida”gina so’zlashish mumkin, qolgan joylarda mutlaq sukunat saqlanadi. Klub nomi yunon faylasufi Diogen sharafiga qo’yilgan. Diogen oddiy hayot tarzini tanlagan va jamiyat qoidalariga qarshi chiqqan."
  },
  {
    letter: "D",
    title: "Diogen sindromi",
    text: "ruhiy kasallik bo’lib, uning asosiy belgisi o’ziga nisbatan o’ta beparvolik, ijtimoiy izolyatsiya, befarqlik, har xil narsalarni to’plash va yig’ishga moyillik va bundan uyalmaslikdir."
  },
  {
    letter: "D",
    title: "Dishan qalʼa",
    text: "(tashqi qalʼa) – Xivaning rabod qismi. Olloqulixon 1842-yilda Xiva shahrini yovmutlar (turkman qabilalaridan biri) hujumidan himoya qilish uchun tashqi mudofaa qalqoni qurdiradi. Shoir va tarjimon Ogahiyning yozishicha, Olloqulixon oʻz qoʻl ostidagi barcha xodimlarini yiliga 12 kun tekin ishlashga majburlab, 3 yil ichida Dishan qal’a devorlarini qurdirgan. Devorni qurishda 200 mingdan ortiq odam qatnashgan. Qal’ani tiklash uchun tuproq shahardan ikki kilometr shimolda, Govukkoʻl degan hududda qazib olingan. Hozir u yerda katta koʻl bor."
  },
  {
    letter: "D",
    title: "Do’ppisi yarimta",
    text: "Ibora gʻam tashvishi yoʻq parvoyi falak, begʻam ma’nolarida keladi. Iboraning kelib chiqishi haqida shunday ma’lumot keltiriladi: “Ilgari vaqtlarda haddan tashqari xursand bo’lib yurgan chapani odam do’ppisini yarim qaytoqi qilib, boshiga qo’ndirib yurardi. Bu bilan o’zining vaqti chog’ligini bildirardi."
  },
  {
    letter: "D",
    title: "Do’zax darvozasi",
    text: "Turkmanistonda joylashgan diametri 60 metr bo’lgan o’ra. 1971-yilda burg’ilash paytida noxush voqea sodir bo’ladi. Natijada gaz bilan to’ldirilgan o’ra paydo bo’ladi. Olimlar muammoni hal qilishning eng yaxshi usuli - bu gazni yoqib yuborish deb qaror qilishadi. Ammo, ko’rib turganingizdek o’ra hamon alanga ichida. Uning yonib turishi uzoqlardan ham ko’rinib turadi. Yong’in qachon o’chishi noma’lum."
  },
  {
    letter: "D",
    title: "Do’zaxning 7 shaxzodasi",
    text: "Har biri 7 ta o’limga olib keluvchi gunoh bilan bog’langan va ramziy qiyofaga ega. 1. Lucifer — Mag’rurlik (Pride) “Do’zax hukmdori” 2. Satan — G’azab (Wrath) 3. Beelzebub (Вельзевул)— Ochko’zlik (Gluttony) “Pashshalar hukmdori” 4. Mammon – Molparastlik (Greed) 5. Asmodeus — Nafs (Lust) 6. Belphegor — Dangasalik (Sloth) 7. Abaddon (Apollyon) — Hasad (Envy)"
  },
  {
    letter: "D",
    title: "Doktor Foks effekti",
    text: "oʻziga xos psixologik holat bo’lib, o’qituvchining chiroyli tushuntirishi natijasida tinglovchilar, ma’ruzaning befoyda va to’qimaligini qaramay, o’zlarini haqiqatda nimadir 24 o’rgangandek xis qilishini anglatadi. Ya’ni, u talabalarning bahosi va o’qituvchining ta’sirchanlik darajasi o’rtasidagi bog’liqlikni ifodalaydi."
  },
  {
    letter: "D",
    title: "Dolce & Gabbana",
    text: "italyan kiyim, parfyumeriya, poyabzal hamda aksessuarlar brendi. 1985-yil Milanda, Domeniko Dolche va Stefano Gabbana tomonidan asos solingan. Kompaniya ikki yo’nalish bo’yicha faoliyat ko’rsatadi: «Dolce&Gabbana» va «D & G». Dolce&Gabbana — qimmatbaho kiyimlari liniyasi, asosan yuqori qatlam iste’molchilariga kiyim ishlab chiqadari. D & G — barcha uchun mo’ljallangan, asosan, kundalik hayot kiyim va aksessuarlar ishlab chiqaruvchi liniya. 2006- yildan buyon Italiya futbol terma jamoasi bilan o’yin formasi va kechki kostyumlar bo’yicha hamkorlik qilib kelmoqda. Juftlik o’z muvaffaqiyat va tajribalari haqida 20 dan oshiq kitob hamda 1 ta qo’shiq ham chiqarishgan."
  },
  {
    letter: "D",
    title: "Dolli",
    text: "Inson tomonidan klon qilingan birinchi sutemizuvchi jonivor. U 1996-yil 5-iyulda Shotlandiyaning Roslin instituti olimlari Ian Uilmut va uning jamoasi tomonidan keltirib chiqarilgan. Dolli qo’zining DNKsi 6 yoshli qo’y hujayrasidan olingan bo’lib, u 277 ta muvaffaqiyatsiz urinishdan so’ng dunyoga kelgan. Uning klonlanishi genetik tadqiqotlar va biotexnologiya sohasida katta yutuq bo’ldi. Dolli 6 yil yashab, 2003-yil o’pkadagi kasallik sababli hayotdan ko’z yumdi. Uning mumiyolangan tanasi hozirda Shotlandiya Milliy Muzeyida saqlanmoqda."
  },
  {
    letter: "D",
    title: "Domino effekti",
    text: "bu siyosiy teoriya hisoblanib, bir o’zgarish oqibatida boshqalarga ta’sir etish hisoblanadi. Ya’ni,bir domino toshi yiqilishi boshqa, toshni yiqlishiga olib keladi. Bu nom shuningdek, domino teoriyasi, yiqilayotgan domino teoriyasi kabi nomlarga ega. Bu termin “Sovuq urush” davrida sodir bo’lgan. Bunda bir davlatni sotsialist qilish oqibatida boshqa davlatlarni ham unga chorlash, yohud bir davlatdagi to’ntarish boshqa davlatga ta’siridir. “V demak Vendetta” filmidan doBu teoriyani Vietnam urushi davrida AQSH qo’llagani ham ma’lum bo’lib, bu termin dastavval Jon Dalles tomonidan kiritilgan."
  },
  {
    letter: "D",
    title: "Don Migel de Servantes",
    text: "ispan yozuvchisi, shoiri va dramaturgi. Uning “Don Kixot” romani Gʻarb adabiyoti klassikasi hisoblanib, 65 dan ortiq tillarga tarjima qilingan. 1602-yil Sevilya qamoqxonasida boshlagan “Don Kixot” romani (1-qismi) nashr etilishi bilanoq Yevropa miqyosida mashhur boʻlib ketadi. Romanning katta shov-shuv qozonganiga havas va hasad qilgan A. Fernandes de Avelyaneda taxallusli qalamkash 1614-yilda “Don Kixot”ning soxta davomini yozib, nashr etadi. Bundan gʻazablangan Cervantes 1615-yilda romanning haqiqiy davomi — 2-qismini eʼlon qiladi."
  },
  {
    letter: "D",
    title: "Dorian Grey portreti",
    text: "Oskar Uayldning yogana romani"
  },
  {
    letter: "D",
    title: "Dorian Grey Sindromi",
    text: "bu sindromga chalingan insonlar bor kuchlari bilan yoshligini saqlab qolishga harakat qilishadilar. Bu yo’lda turli operatsiyalar qilish, yoshlarni kiyimlarini kiyish va o’ziga yarashmagan atributlardan foydalanish kuzatiladi. Ushbu sindromga Oskar Uayldning “Dorian Greyning portreti” asari qahramoni nomi qo’yilgan."
  },
  {
    letter: "D",
    title: "Drabbl",
    text: "Bu atama adabiyotda uzog’i 100 so’zdan iborat hajmdagi qisqa hikoyani anglatadi. Bu janr asosan yozuvchini qisqa hajmda chuqur g’oya yoki kuchli dramatik holatni ifodalashga o’rgatadi. Ingliz tilidagi «drabble» so’zi dastlab ingliz yozuvchilarining ijodiy mashq shaklida paydo bo’lgan. Eng mashhur drabbl misoli Ernest Xemingueyga tegishli: «Sotiladi: chaqaloq oyoq kiyimi, hech kiyilmagan» Atigi 6 so’z butun bir fojiani tasvirlaydi."
  },
  {
    letter: "D",
    title: "Droste effekti",
    text: "rekursiv tasvirni joylashtirish texnikasi, mise en abyme texnikasining maxsus holati boʻlib tasvirning kichik nusxasi tasvirning ichiga joylashtiriladi. Effekt birinchi marta 1904-yilda Yan Misset tomonidan reklamada qo’llanilgan (Droste kakao reklama afishasida bir piyola issiq shokolad va qutida oʻzining tasviri tushirilgan hamshira tasvirlangan). 1970-yillarning oxirida gollandiyalik sport jurnalisti, shoir va tarjimon Niko Sxepmaker ushbu texnikaga “Droste effekti” nomini taklif qildi va shu nom keng tarqaldi."
  },
  {
    letter: "D",
    title: "Duglas Engelbart",
    text: "kompyuter sichqonchasini ixtiro qilgan shaxs."
  },
  {
    letter: "D",
    title: "Durendal",
    text: "shuningdek, Durandal deb ham ataladi. Fransuz epik asari “Roland qo’shig’i”da tilga olingan, Karl Buyukning jiyani Rolandga tegishli bo’lgan afsonaviy qilichdir. U sinmasligi, o’tkirligi va ichida muqaddas relikviyalar – Masihning sochi, Avliyo Pyotrning tishi va boshqalarni saqlagani bilan mashhur. Roncevaux dovonidagi jangda Roland qilich dushman qo’liga tushmasligi uchun uni toqqa urib sindirmoqchi bo’ladi, ammo Durendal hech qachon sinmaydi."
  },
  {
    letter: "D",
    title: "Durian",
    text: "Janubiy-Sharqiy Osiyoda o’sadigan tikanli meva bo’lib, o’ziga xos kuchli yoqimsiz hidi bilan tanilgan. Nomi malay tilidagi «duri» — ya’ni «tikan» so’zidan kelib chiqqan. Mevaning ichi yumshoq, sariq va yong’oqli ta’mga ega. Qo’lansa hidi sababli uni Singapur, Tailand kabi mamlakatlarda jamoat joylariga olib kirish taqiqlangan."
  },
  {
    letter: "D",
    title: "Dushmanning murdasi xushbo’y hid taratadi",
    text: "Ushbu ibora miloddan avvalgi 69-yil Rim imperatori sifatida taxtga ko’tarilgan Avl Vitelliyga tegishli. Vitelliy taxtni egallashidan biroz oldin Mark Salviy Oton imperator deb e’lon qilingan edi. Imperatorlik taxti uchun o’rtada bo’lgan ayovsiz jangda Mark Salviy Oton qo’shinlari qirib tashlanadi. O’liklarga to’la jang maydonini kuzatib, Avl Vitelliy bepisandlik bilan “Dushman murdasi xushbo’y hid taratadi” degan. Bu voqealarni Gay Svetoniy Trankvill “O’n ikki Sezarning hayoti” asarida yozib qoldirgan."
  },
  {
    letter: "D",
    title: "Dyatlov ekspeditsiyasi",
    text: "1959 yil fevral oyida “Северный Урал” hududida sodir bo’lgan ushbu fojea XX asrning eng sirli hodisalaridan biri hisoblanadi. Игорь Дятлов — Ural Politexnika instituti talabasi va yana 8 nafar shaxs. Fojia “Гора Холатчахль” yonbag’rida sodir bo’lgan. Mahalliy mansi tilida bu nom “O’lim tog’i” degan ma’noni anglatadi. 1-fevral kuni guruh ochiq yonbag’rida chodir tikadi. Kechasi noma’lum sabab bilan chodir ichkaridan kesilib, a’zolar tashqariga chiqib ketgan. Quyidagilar aniqlangan: • Chodir ichkaridan pichoq bilan kesilgan. • Sayyohlar qor ustida yalangoyoq yoki yarim kiyingan holda topilgan. • Ikki kishi daraxt yonida sovuqdan muzlab o’lgan. • Uch kishi chodir tomonga qaytishga uringan. • To’rt kishi jarlik hududida topilgan, ularda og’ir ichki jarohatlar mavjud bo’lgan. Rasmiy bayonot: “Yengib bo’lmas tabiiy kuch ta’siri.” Ish tez yopilgan. 26 E"
  },

  // === E ===
  {
    letter: "E",
    title: "Edgar Allan Po",
    text: "Amerikalik yozuvchi, shoir, adabiy tanqidchi, qisqa hikoyalar. Tavalludi: 1809- yil 19-yanvar AQSH Massachusetts Boston Vafoti: 1849-yil 7-oktyabr AQSH Baltimor Merilend Shoh asari: “Quzg’un” (Raven) (“Qora mushuk”, 1843 ), (“Quzg’un”(Raven), 1845) (“Grotesklar va arabeskalar” 1840) (“Morg koʻchasidagi qotillik”,1841) (“Mari Roje siri”,1842) (“Tilla qoʻngʻiz”, 1843) (“Oʻgirlangan maktub”, 1845)"
  },
  {
    letter: "E",
    title: "Eduard Kammings",
    text: "— 1894-yil 14-oktabrda Massachusets shtatining Kembrij shahrida tug’ilgan. U grammatika va punktuatsiya qoidalarini buzib, she’riyatda inqilob qilgan amerikalik shoir va rassom. U asosan kichik harflar bilan yozishi va so’zlarni qog’ozda vizual shaklga solishi bilan tanilgan. “i carry your heart with me” eng mashhur sheʼri. Kammings o’zini birinchi navbatda rassom, keyin shoir deb hisoblagan. U hayoti davomida 1600 dan ortiq moybo’yoqli rasm va minglab chizmalar yaratgan. Birinchi jahon urushida asirlikda bo’lgani uning “The Enormous Room” asariga asos bo’lgan. Uning ijodi lirik sevgi va o’tkir ijtimoiy satira uyg’unligidir."
  },
  {
    letter: "E",
    title: "Eduardo Saverin",
    text: "braziliyalik-amerikalik internet tadbirkor va investor, Eduardo Saverin Facebook’ning hammuassislaridan biri. Tug’ilgan: 19-mart 1982-yil, San-Paulu, Braziliya. Ta’limi: Harvard universitetida iqtisodiyot bo’yicha tahsil olgan. Facebook: 2004-yilda Mark Zuckerberg bilan birga Facebook’ni tashkil qilgan. Dastlab kompaniyaning moliyaviy ishlarini yuritgan va CFO sifatida faoliyat olib borgan. Zuckerberg bilan nizosi: Keyinchalik uning kompaniyadagi ulushi keskin kamaygan. Saverin Zuckerberg va boshqa hamkorlarini sudga bergan; ish 2009-yilda kelishuv bilan yakunlangan. The Social Network: 2010-yilgi filmda uning obrazi Andrew Garfield tomonidan ijro etilgan. Keyingi faoliyati: Venchur investor sifatida texnologik startaplarga sarmoya kiritgan. B Capital: 2015-yilda Raj Ganguly bilan B Capital Group investitsiya firmasini tashkil qilgan. Fuqaroligi: Braziliya va AQSh bilan bog’liq bo’lgan; 2011-yilda AQSh fuqaroligidan voz kechgan. Boyligi: Uning boyligi asosan Facebook aksiyalari va keyingi investitsiyalaridan shakllangan. Forbes uni dunyoning eng boy texnologiya tadbirkorlari qatorida qayd etadi. Qiziq fakt: Saverin Facebook’ning dastlabki davridagi eng muhim moliyaviy hamkorlardan biri bo’lgan, ammo kompaniyaning keyingi rivojlanishida Zuckerberg bilan munosabatlari keskin yomonlashgan."
  },
  {
    letter: "E",
    title: "Edvard Okun",
    text: "(21.09.1872, Varshava - 17.01.1945, Skernevitse) — polyak rassomi. Yan Mateyko va Isidor Yablonskiy kabi mashxur rassomlardan saboq olgan. Ikkinchi jahon urushi vaqtida yuz bergan Varshava qo’zg’oloni vaqtida Skernevitsega ko’chib o’tgan rassom 1945-yil ushbu shaharni ozod qilish uchun kelgan 1-beloruss fronti jangchilaridan birining daydi o’qidan vafot etgan. Rassomning mashxur kartinalaridan biri - siz yuqorida ko’rib turgan “Paganinining o’limi” kartinasi. Unda mashxur pianinochi haqida tarqalgan mashxur afsonaga murojaat qilingan va o’lim oldidan u uchun so’nggi musiqani chalayotgan iblis tasvirlangan."
  },
  {
    letter: "E",
    title: "Ekfrasis",
    text: "tasviriy san’at asarini adabiy matnda batafsil tasvirlash"
  },
  {
    letter: "E",
    title: "Ekstrovertlar",
    text: "energiyani tashqi olamdan oladi. Ular odamlar bilan muloqotni yoqtiradi, ijtimoiy muhitda o’zini qulay his qiladi va ochiqko’ngil bo’ladi."
  },
  {
    letter: "E",
    title: "El Dorado",
    text: "Janubiy Amerikadagi afsonaviy oltin shahar. Ispan konkistadorlari bu sirli shaharga yetib borish uchun ko’p ekspeditsiyalar uyushtirgan, ammo hech qachon topa olishmagan. Aslida, El Dorado nomi dastlab o’zini oltin bilan qoplab, marosim o’tkazuvchi mahalliy hukmdorga nisbatan ishlatilgan. Vaqt o’tishi bilan bu tushuncha butun boshli oltin shahar haqidagi afsonaga aylangan. Majoziy ma’noda “Eldorado” tezda boyib ketishingiz mumkin bo’lgan joy."
  },
  {
    letter: "E",
    title: "Elisha Otis (1811–1861)",
    text: "Amerikalik ixtirochi va tadbirkor. U xavfsizlik tizimli birinchi amaliy liftni yaratgani bilan mashhur. 1853-yilda Nyu-Yorkda o’z liftini keng jamoatchilikka namoyish qilib, “agar arqon uzilsa ham kabina qulamaydi” degan g’oyani isbotlab berdi. Shu ixtiro tufayli ko’p qavatli binolar qurilishi keng tarqaldi va zamonaviy shaharlarda osmono’par imoratlar paydo bo’lishiga asos yaratildi."
  },
  {
    letter: "E",
    title: "ENGR SKRIPKASI",
    text: "Insonning asosiy kasbi yoki faoliyatidan tashqari bo’lgan kuchli ishtiyoqi, sevimli mashg’uloti yoki xobbisini anglatuvchi ibora."
  },
  {
    letter: "E",
    title: "Enlik",
    text: "qadimiy o’lchov birligi bo’lib, u taxminan 18-20 millimetrga teng. Shuningdek, bu o’lchov 6 ta arpa donasining yonma-yon qo’yilgan uzunligiga teng deb hisoblanadi. Bunday an’anaviy o’lchov birliklari o’tmishda dehqonchilik, qurilish va boshqa sohalarda keng qo’llanilgan."
  },
  {
    letter: "E",
    title: "Ensyerro",
    text: "Ispaniyaning Pamplona shahrida har yili o’tkaziladigan an’anaviy buqalardan qochish marosimi. San Fermin bayrami doirasida bo’lib o’tadigan bu hodisada odamlar ertalab soat 08:00 da 6 ta buqadan qochib 875 metrli tor ko’cha bo’ylab yugurishadi. Avvaliga buqalarni arenaga olib borish usuli sifatida paydo bo’lgan ushbu marosimni qaysidir ma’noda korridaning kirish qismi, deyilsa bo’ladi. Ernest Xemingueyning «Quyosh chiqaveradi» asari va boshqa koʻplab filmlar ham aynan San Fermin va ensyerro voqealari asosida yaratilgan."
  },
  {
    letter: "E",
    title: "EPITAFIYA",
    text: "Qabr toshiga bitilgan yodgorlik yozuvi yoki marhum xotirasiga bag’ishlangan qisqa she’riy asar. Odatda epitafiya marhumning hayot yo’li, uning fazilatlari yoki o’limidan keyingi falsafiy mushohadalar haqida bo’ladi. Qadimda bu janr she’riyatning bir turi sifatida shakllangan bo’lib, hozirda nafaqat adabiy asar, balki madaniy-tarixiy yodgorlik hisoblanadi. Epitafiyalar qisqa, ammo o’ta ta’sirli va mazmunli bo’lishi bilan ajralib turadi. Qiziqarli tomoni shundaki, ko’p mashhur insonlar o’z epitafiyalarini hayotlik chog’larida yozib qoldirishgan. Masalan, Uilyam Shekspirning qabr toshida uning suyaklariga tegmaslik haqida ogohlantirish yozilgan bo’lsa, buyuk fizik Isaak Nyutonning qabrida uning ilmiy yutuqlari madh etilgan. Ba’zi epitafiyalar hazil yoki kinoya shaklida yozilib, insonning hayotga bo’lgan o’ziga xos qarashini ifodalagan."
  },
  {
    letter: "E",
    title: "Erised oynasi",
    text: "— Garri Potter asarlaridagi insonning qalbida qolib ketgan umidsiz istaklarni ko’rsatadi. Erised teskarisiga, ko’zguga monand aks holda o’qilsa, inglizcha desire, ya’ni istak so’zi kelib chiqadi. Ko’zguning asosida esa quyidagi yozuv tushirilgan: «Erised stra ehru oyt ube cafru oyt on wohsi» (akslantirib o’qilganda: «I show not your face but your hearts desire») — «Men senga yuzingni emas, balki qalbing istagini ko’rsataman»"
  },
  {
    letter: "E",
    title: "Eritrotsitlar",
    text: "qizil qon tanachalari"
  },
  {
    letter: "E",
    title: "Erkli Malikboyeva",
    text: "(1928 –2013) U 1950-yili Toshkent teatr va rassomlik sanʼati institutini tugatgan. 1949-yildan Hamza teatri (hozirgi Oʻzbek milliy akademik drama teatri)da ish boahlagan. 28 Ijodining dastlabki yillari mumtoz va zamonaviy dramaturgiyada chuqur lirik obrazlar – Ofeliya (“Gamlet”), Sarvinoz (“Sevgi afsonasi”), Nazira (“Ogʻriq tishlar”), Xannyan (“Sabr kosasi”) va boshqalarni mahorat bilan ijro etdi. Umesh (“Gang daryosining qizi”), Umar (“Jazoir mening Vatanim”) kabi oʻgʻil bolalar obrazida ijodining yangi qirralari ochildi."
  },
  {
    letter: "E",
    title: "Erkyul Puaro",
    text: "Agata Kristi tomonidan yaratilgan Erkyul Puaro belgiyalik xususiy detektiv bo’lib, jinoyatlarni aql-zakovat orqali fosh qilishi bilan mashhur. U 33 ta roman, 54 ta hikoya va bir pyesada ishtirok etgan. Puaro o’zining tartibsevarligi, mo’ylovi va “kulrang hujayralar”ga (ya’ni, miyaning mantig’iy tafakkuriga) tayanishi bilan ajralib turadi. Uni Devid Suje ekranga juda muvaffaqiyatli olib chiqqan."
  },
  {
    letter: "E",
    title: "Eros-433",
    text: "yorqin S-turdagi spektral sinfga mansub, Amor guruhi (I)ga kiruvchi Yerga yaqin asteroiddir. U 1898-yil 13-avgustda nemis astronomi Karl Vitt tomonidan Urania rasadxonasida kashf etilgan va qadimgi yunon mifologiyasida muhabbat xudosi hamda Afroditaning doimiy hamrohi bo’lgan Eros sharafiga nomlangan."
  },
  {
    letter: "E",
    title: "Esperanto tili",
    text: "1887-yilda polyak shifokori Ludoviko Zamenhof tomonidan yaratilgan sun’iy til bo’lib, millatlararo muloqotni osonlashtirish maqsadida ishlab chiqilgan. Uning grammatikasi sodda, fe’llari tuslanmaydi, talaffuzi yozuvga mos keladi. So’z boyligi asosan lotin, german va slavyan tillaridan olingan. Bugungi kunda esperantoda 2 millionga yaqin kishi so’zlasha oladi. Hatto ushbu tilda yozilgan adabiyotlar, gazetalar va radiokanallar ham mavjud. 1905-yildan buyon esperantistlar xalqaro kongresslar o’tkazib kelishadi."
  },
  {
    letter: "E",
    title: "Evfemizm",
    text: "soʻzlovchiga aytish noqulay, nooʻrin yoki qoʻpol tuyulgan soʻz va iboralarning sinonimi sifatida paydo boʻlgan soʻzlar. Masalan: tugʻdi oʻrniga koʻzi yoridi kabi. Atama nomi yunonchada «yumshoq ifodalash» degan ma’noni anglatadi. Evfemizm salbiy voqelikni atashdan qochish, shunday voqelikning salbiy taʼsirini yumshatish uchun xizmat qilib, kishining axloqiy meʼyorlarga zid keladigan holatlarning yoki toʻgʻridan toʻgʻri aytish mumkin boʻlmagan maxfiy voqeliklarning salbiy taʼsirini kamaytirish, ularni yashirish uchun ishlatiladi."
  },
  {
    letter: "E",
    title: "Evkalipit",
    text: "Efir moyi ajratuvchi, doim yashil daraxt yoki butalardan iborat o’simlik turi. Asosan Avstraliya, Yangi Gvineya, Indoneziya va unga yaqin orollarda o’sadi. Uning efir moyi antiseptik, parfyumeriya, kosmetika tarkibiy qismi, aromatizator, stomatologik preparatlar va sanoat erituvchilar sifatida ishlatiladi. Uning asosiy faol moddasi – tsineol, bakteriya va viruslarga qarshi kurashadi."
  },
  {
    letter: "E",
    title: "Evtanaziya",
    text: "— Davolab bo’lmaydigan kasallikka chalingan va bu kasallik tufayli chidab bo’lmas azoblarni boshdan kechirayotgan odamning o’z hayotini ixtiyoriy ravishda sun’iy tugatish amaliyoti. Termin ilk bor XVI asrda Frensis Bekon tomonidan “yengil o’lim”ni ifodalash uchun ishlatilgan. 29 F"
  },

  // === F ===
  {
    letter: "F",
    title: "Faberje tuxumlari",
    text: "1885-1917-yillarda zargar Karl Faberje tomonidan Rossiya imperator oilasi va boy mijozlar uchun yaratilgan hashamatli durdonalar. Ularning har biri qimmatbaho metallar va toshlardan yasalib, ichida sirli sovg’alar yashiringan. Jami 50 ta imperator tuxumi yasalgani ma’lum. Bugungi kunda ularning ko’pchiligi muzeylar va shaxsiy kolleksiyalarda saqlanadi."
  },
  {
    letter: "F",
    title: "Fair Play",
    text: "Fair Play (halol oʻyin) – sportda va hayotda adolat, halollik, hurmat va axloqiy qadriyatlarga rioya qilish tamoyili. Xalqaro Fair Play qoʻmitasi (CIFP) 1963-yilda tashkil etilgan va har yili sport etikasi uchun maxsus mukofotlar topshiradi. Xalqaro Olimpiya Qoʻmitasi ham Fair Play tamoyillarini targʻib qiladi."
  },
  {
    letter: "F",
    title: "Falafel",
    text: "Yaqin Sharqdagi eng qadimiy va mashhur vegetarian taomlardan biri. Falafel ilk bor Misrda “taʻmiya” nomi bilan paydo bo’lgan. Keyinchalik Levant (Sharqiy O’rta yer dengizi) mintaqasi orqali butun dunyoga tarqalgan. U ko’pincha pita noni ichida sabzavotlar, sous va ko’katlar bilan tortiladi. Bugungi kunda falafel nafaqat taom, balki arab madaniyatining ramziga aylangan."
  },
  {
    letter: "F",
    title: "Fallout",
    text: "yadroviy portlashdan keyin atmosferaga ko’tarilgan radioaktiv chang va zarrachalarning Yerga qayta tushishi. U shamol orqali uzoq masofalarga tarqalib, odamlar, hayvonlar va atrof-muhit uchun radiatsion xavf tug’dirishi mumkin."
  },
  {
    letter: "F",
    title: "Fantom og’riq sindromi",
    text: "bu global ahamiyatga ega bo’lgan murakkab tibbiy, ijtimoiy va gumanitar muammo bo’lib, u hali optimal yechimini topmagan. Zamonaviy statistik ma’lumotlarga ko’ra, oyoq-qo’llar amputatsiyadan keyin Fantom og’riq sindromi bilan kasallanish yuqori darajada saqlanib qolmoqda - 50 foizdan 80 foizgacha."
  },
  {
    letter: "F",
    title: "Faradey qafasi",
    text: "Faradey qafasi elektr o’tkazuvchi materialdan yasalgan himoya tuzilmasi bo’lib, uning ichida elektr maydoni nolga teng bo’ladi. Uni 1836-yilda Maykl Faradey kashf etgan. Bugungi kunda u elektron qurilmalarni elektromagnit ta’sirdan himoya qilish, avtomobillar va samolyotlarni chaqmoq urishidan saqlashda qo’llaniladi."
  },
  {
    letter: "F",
    title: "Farangeyt bo’yicha 451 daraja (1953)",
    text: "Rey Bredberining bu distopik romani insoniyatning fikr erkinligiga qarshi bo’lgan jamiyatda yashash qanday bo’lishini tasvirlaydi. Asarda bosh qahramon Gai Montag – kitob yoquvchi sifatida ishlaydi. Uning ishi – jamiyatda man etilgan barcha kitoblarni yoqish. Negaki, hukumat fikrlar xilma-xilligini xavfli deb hisoblaydi. Biroq Montagning ichki kurashi Klarissa ismli qiz bilan uchrashgach boshlanadi. U oddiy savollar bilan Montagni o’ylashga majbur qiladi: “Baxtlimisan?”, “Nega bu ishni qilayapsan?” Shu savollar orqali Montag haqiqatni, erkinlikni, bilimning chinakam qudratini izlay boshlaydi."
  },
  {
    letter: "F",
    title: "Fasmofobiya",
    text: "* — bu ruhlar, arvohlar yoki boshqa g’ayritabiiy mavjudotlardan kuchli, mantiqsiz va doimiy qo’rqishdir."
  },
  {
    letter: "F",
    title: "Fata Morgana",
    text: "bu asosan dengiz ustida yoki sahrolarda kuzatiluvchi, atmosferadagi optik hodisa bo’lib, u uzoqdagi obyektlarning turli shakllarda ko’rinishiga sabab bo’ladi. Ushbu hodisa tufayli 30 kemalar osmon uzra suzayotgandek yoki shaharlar havoda muallaq turgandek ko’rinishi mumkin. Bu hodisa havo haroratining o’zgarishi natijasida yorug’lik nurlarining sinishi (refraksiya) sababli yuzaga keladi. O’rta asrlarda dengizchilar bu sarobni sehrgar Morgana Lafey ismi bilan bog’lashgan."
  },
  {
    letter: "F",
    title: "Femida – adolat timsoli",
    text: "Yunon mifologiyasida Geya va Uranning 12 ta titan farzandlaridan biri va Zevsning ikkinchi ayoli. U ko’zlari bog’langan, bir qo’lida tarozi, boshqa qo’lida qilich ushlagan holda tasvirlanadi. Bu – adolatning tarafkashliksiz, o’lchovli va qat’iy bo’lishini bildiradi. Uning tarozisi haqiqatni tortsa, qilichi yolg’onni jazolaydi."
  },
  {
    letter: "F",
    title: "Fest diski",
    text: "Gretsiyaning Krit orolidan topilgan, aniq nima maqsadda foydalanilgani noma’lum bo’lgan pishirilgan loy diski. Minoy madaniyatiga oid bo’lgan bronza davriga tegishli deb yuritiladi. (miloddan avvalgi II ming yillikda) Diskda 45 ta alohida belgi mavjud bo’lib, ular jami 242 marta - 123 tasi A tomonida va 119 tasi B tomonida uchraydi."
  },
  {
    letter: "F",
    title: "Fibonachchi shoʻrvasi",
    text: "Ushbu sho’rvani tayyorlashda ingredientlar muhim rol o’ynamaydi. Asosiy ingredient ikkita — kechagi va undan avvalgi kundagi sho’rva. Fibonachchi sho’rvasini tayyorlash tartibi: 1. Sho’rva tayyorlang. Keragicha yeng va ortgan qismini muzlatkichga solib qo’ying. 2. Ertasi kuni yana yangi sho’rva tayyorlang. Keragicha yeng va ortgan qismini muzlatkichga solib qo’ying. 3. Uchinchi kun avvalgi ikki kun tayyorlangan sho’rvalarning ortgan qismi bir idishga solib aralashtiring. Bo’ldi. Fibonachchi sho’rvasi tayyor. uni mashxur matematik olim o’ylab topmagan."
  },
  {
    letter: "F",
    title: "Fibonachchi sonlari",
    text: "har bir son avvalgi ikkita sonning yigʻindisidan hosil boʻladigan ketma- ketlikdir: 1, 1, 2, 3, 5, 8, 13, 21 … Ushbu ketma-ketlikni XIII asrda italiyalik matematik Leonardo Fibonachchi tavsiflagan. Fibonachchi sonlari tabiatda keng uchraydi: gul barglari, chigʻanoq shakllari va hatto galaktikalarning tuzilishida ham namoyon boʻladi."
  },
  {
    letter: "F",
    title: "Filateliya",
    text: "pochta to’lov belgilari, asosan markalarni kolleksiya qilish. Terminni fransuz marka toʻplovchisi G.Erapen 1864-yili kiritgan. Anna Dostoevskaya ham birinchi Filatelistlardan. Oʻzbekistonda filatelistlar jamiyati 2003-yilda tashkil qilingan. Filateliya ashyolari 3 yoʻnalishda: tarixiy, mavzuviy va xronologik yoʻnalishlarda toʻplanadi va oʻrganiladi."
  },
  {
    letter: "F",
    title: "Filds mukofoti",
    text: "Matematika sohasidagi eng nufuzli xalqaro mukofot. Bu mukofot har to’rt yilda bir marta beriladi va nomzod 40 yoshdan kichik bo’lishi kerak. Mukofot matematikaning turli sohalarida buyuk natijalar qilgan yosh olimlarga taqdim etiladi. 1936-yilda Kanadalik matematika olimi Jon Charlz Filds tomonidan tashkil etilgan. Filds mukofoti olimlar uchun olam miqyosida eng yuqori e’tirof sifatida qaraladi. Mukofot jiddiy ilmiy yutuqlarni e’tirof etadi va matematik olimlar orasida “yosh olimlarning Oskari” sifatida tanilgan."
  },
  {
    letter: "F",
    title: "Flayting",
    text: "Qadimiy she’riy musobaqa bo’lib, unda ikki shaxs bir-birini haqoratli tarzda masxara qiladi.V-XVI asrlar orasida Shotlandiya, Angliya va Norvegiyada mashhur bo’lgan. G’olibni esa tinglovchilar aniqlagan. Zamonaviy rep-battllar aynan shu an’anaga o’xshaydi. “Flayting” so’zi ingliz tilidagi “flytan” – janjallashmoq fe’lidan olingan. Keyinchalik bu musobaqalar adabiy janrga aylangan."
  },
  {
    letter: "F",
    title: "Florens Naytingeyl",
    text: "— Mashhur ingliz hamshirasi u “chiroq ko’targan ayol” sifatida tanilgan. 33 yoshida kasalxonada ishlab tajriba orttirgach, “Shafqat hamshirasi” katolik muassasini boshqara boshlaydi. 1854-yilda Turkiya bilan Rossiya oʻrtasida urush kechayotgan vaqtda ,Angilya qoʻshinlarini Turkiyaga yordamga berish uchun Qrimga joʻnatadi. Florens Naytingeyl boshchiligida 38 ta tibbiyot hamshirasidan iborat otryad gospitilga yetib keladi. 1857-yil “Angilya armiyasida Sogʻliqni saqlash, gospitalarini unumli bosharish masalalari boʻyicha mulohazalar” kitobini, shuningdek u “Parvarish haqida xotiralar” kitobini ham muallifidir."
  },
  {
    letter: "F",
    title: "Florensiya",
    text: "(Stendal) sindromi - siz tasviriy san’at muzeyida boʻlsangiz va sizda yurakning tez-tez urishi, terlash, zaiflik, bosh aylanishi kabi galyusinatsiya holatlari kuzatilsa sizda Florensiya nomi bilan ham ataladigan Stendal sindromi bor boʻlishi mumkin. Bu sindrom asosan, 26-40 yosh oraligʻidagi klassik va diniy ta’limga ega boʻlgan odamlarda koʻproq uchraydi."
  },
  {
    letter: "F",
    title: "Fluid art (Suyuqlik sanʼati)",
    text: "Bu bo’yoqlarni suyuq holatda rasm matosiga to’kib, tabiiy oqimlar orqali noyob va takrorlanmas san’at asarlarini yaratish uslubidir. Bu texnikada bo’yoqlar bir-biriga aralashib, marmarsimon yoki to’lqinli effektlar hosil qiladi. Har bir fluid art asari yagona va hech qachon aynan takrorlanmaydi."
  },
  {
    letter: "F",
    title: "Flyuger",
    text: "Flyuger (nem. Fluger, gollandcha vleugel — “qanot”) — shamol yoʻnalishi va tezligini aniqlovchi maxsus qurilma. U odatda 10–12 metr balandlikdagi minoralarga oʻrnatiladi. Flyugarkaning posangisi shamolga doim teskari yoʻnaladi. Shamol yoʻnalishi 8 asosiy rumb orqali belgilanadi, tezligi esa metall plastinkaning ogʻish burchagi bo’yicha o’lchanadi. Flyuger 40 m/s gacha boʻlgan shamol tezligini aniqlay oladi."
  },
  {
    letter: "F",
    title: "Fotorobot",
    text: "bu gabitoskopiyaning amaliy natijasi, ya’ni jinoyatchi yoki noma’lum shaxsning portretini yaratish usuli."
  },
  {
    letter: "F",
    title: "Fransuz zinapoyasi effekti",
    text: "— javobning yoki fikrning bir savol yoki mavzu yuzasidan bo’layotgan muhokama tugagandan so’ng, hayolga kelishi. Misol sifatida, zakovatchilarning 1 daqiqa tugaganidan so’ng, to’g’ri javobni aytishlari yoki eslashlarini keltirish mumkin. Effektning kelib chiqishi, fransuz faylasufi Deni Didro bilan bog’lanadi. Hikoyada… “Bir kuni Didro bir zodagonning uyiga mehmonga boradi. Qizg’in muhokama ketib, zodagon Didroga qarshi fikr aytadi. Didro unga javob qaytara olmaydi. Zodagonning savoliga javob esa, u xonani tark etib, zinadan tushayotganida hayoliga keladi.” Keyinchalik, Didro bu voqea haqida, o’zining “Paradoxe sur le comédien” inshosida yozib qoladiradi. Jan-Jak Russo, Uilyam Hertslet, aka-uka Vaynerlar va boshqa ko’plab yozuvchilar ijodida ham, bu effekt haqida misollarni uchratish mumkin."
  },
  {
    letter: "F",
    title: "Fransuzcha ketish",
    text: "Iboras hech kimga aytmasdan, jimgina chiqib ketishni anglatadi. Bu ibora XVIII asr Angliyasida paydo bo’lgan va fransuzlar odobsiz tarzda xayrlashmay chiqib ketadi degan stereotip asosida yaratilgan. Inglizlar buni tanqid sifatida ishlatgan: “leave the French way”, ya’ni xayrlashmasdan tark etish. Qiziq tomoni shundaki, fransuzlarda ham shunga o’xshash ibora mavjud — “filer à l’anglaise”, ya’ni “inglizcha ketmoq”. Ular esa inglizlarni ogohlantirmasdan chiqib ketadi deb hisoblashgan."
  },
  {
    letter: "F",
    title: "Franz Bekkenbauer",
    text: "nemis futbolchisi ва murabbiyi, “Der Kaiser” (Imperator) laqabi bilan mashhur. U himoyachi sifatida yangi uslub – libero rolini ommalashtirgan. Beckenbauer Germaniya 32 terma jamoasi bilan 1974-yilda jahon chempioni bo’ldi va 1990-yilda murabbiy sifatida ham g’alaba qozondi."
  },
  {
    letter: "F",
    title: "Fregoli sindromi",
    text: "bu sindrom aktyor Leopold Fregoli nomiga qo’yilgan. U tashqi ko’rinishini bemalol o’zgartira olar edi. Bunday g’aroyib psixik holatga ega bo’lgan inson,begona insonlar (odatda boshliqlar,dushmanlar,hush ko’rmaydiganlar) oldida tashqi ko’rinishini o’zgartirish va o’zini bekitishdan iborat. Shu sababli doimo gremmda yurish zarur bo’ladi. Bu sindromni huddi teskarisi Kapgra sindromi deb ataladi.Bu ikkala sindromlar ham asosan qo’rqinnchli filmlarda ishlatilgan."
  },
  {
    letter: "F",
    title: "French Lessons",
    text: "britaniyalik yozuvchi Peter Maylening Fransiya bo’ylab gastronomik sayohati tasvirlangan kitobi. Muallif mamlakatni taomlar, pishloqlar, vino, festivallar va fransuzlarning ovqatlanish madaniyati orqali kashf etadi."
  },
  {
    letter: "F",
    title: "Frenk Zamboni (1901–1988)",
    text: "Amerikalik muhandis va ixtirochi. U muz ustini tekislovchi maxsus mashina — “Zamboni”ni yaratgani bilan mashhur. Avval muz maydonini qo’l mehnati bilan silliqlash ancha vaqt olgan bo’lsa, 1949-yilda Zambonining ixtirosi bu jarayonni bir necha daqiqaga qisqartirdi. Shu sababli xokkey, figurali uchish va boshqa muz sportlarida sifat mutlaqo yangi bosqichga ko’tarildi. Qiziq jihati shundaki, Zamboni dastlab oilaviy muzqaymoq biznesida ishlagan va aynan shu faoliyat uni muz bilan bog’liq texnikaga qiziqtirgan. Keyinchalik u butunlay ixtirochilikka o’tib, hayotini yangi g’oyalar yaratishga bag’ishladi."
  },
  {
    letter: "F",
    title: "Friendly fire (*frendli fayr*)",
    text: "Harbiy termin bo’lib, o’z sheriklarini xato bilan bir-birini o’qqa tutishi holatini anglatadi. Bu holat urushlar, mashg’ulotlar yoki xavfli vaziyatlarda sodir bo’lishi mumkin. 1994-yilda NATO kuchlarining Iroqda o’zining ikki «Black Hawk» vertolyotini adashib urib tushirishi — mashxur misollardan biri. Shuningdek, 2004-yilda Afg’onistonda amerikalik harbiy Pat Tillman o’z safdoshlari tomonidan xato bilan otib o’ldirilgan."
  },
  {
    letter: "F",
    title: "Fudziyama",
    text: "Yaponiyaning eng mashxur ramziy, turistik maskanlaridan biri. Sinto e’tiqodidagilar uchun muqaddas tog’ hisoblanadi. Vulqon balandligi 3776 metr. Cho’qqisiga chiqish uchun ob- havoga qarab 4-8 soatgacha vaqt ketasi. Fudzini ko’rish uchun yiliga 300 mingdan ziyod sayyoh tashrif buyuradi. Qadimda samuraylar bu tog’da o’z mashg’ulotlarini o’tkazishgan. Fudzi vulqoni faol hisoblansada, 1707-yildan buyoq aholini bezovta qilmagan. XIX asrga qadar tog’ga ayollarning ko’tarilishi ta’qiqlangan. Bu ishni ilk amalgan oshirgan ayol ledi Fenni Parks bo’lgan(1867)."
  },
  {
    letter: "F",
    title: "Fugu baligʻi",
    text: "— Bu Yaponiyada mashhur bo’lgan ammo juda xavfli bo’lishi mumkin bo’lgan nafis taom. Ushbu baliq tetrodotoksin deb nomlangan o’ta zaharli moddani o’z ichiga oladi, bu esa noto’g’ri tayyorlanganda inson uchun o’limga olib kelishi mumkin. Zaharli qismlari – jigari, terisi va ichki a’zolari tetrodotoksinga boy. Tetrodotoksin ta’siri – mushaklarning falajlanishi, nafas olishning to’xtashi va o’limga olib kelishi mumkin. Ba’zi yaponlar fugu iste’mol qilishni hayajonli tajriba deb hisoblaydilar. Fuguning ta’mi ko’p odamlar tomonidan nihoyatda nozik va yoqimli deb tasvirlanadi."
  },
  {
    letter: "F",
    title: "Fuko mayatnigi",
    text: "— Yerning oʻz oʻqi atrofida aylanishini tasdiqlovchi tajribani namoyish qiladigan qurilma. Fuko mayatnigi uzun sim yoki ipga osilgan ogʻir yuk bulib, u har qanday vertikal tekislikda tebrana olishi kerak. Agar Fuko mayatnigini vertikaldan ogʻdirib, qoʻyib yuborilsa, unga taʼsir qiluvchi ogʻirlik kuchi va ipning taranglik kuchi hamma vaqt mayatnikning tebranish tekisligida yotadi hamda bu tekislikni yulduzlar bilan bogʻlangan sanoq tizimiga nisbatan bura olmaydi. Yerda 33 turgan va Yer bilan birga aylanayottan kuzatuvchi Fuko mayatnigi ning tebranish tekisligi Yerga nisbatan uning aylanishiga teskari yunalishda sekin burilayotganini koʻradi"
  },
  {
    letter: "F",
    title: "Fukuruma",
    text: "Donishmand rohib qiyofasidagi yapon qo’g’irchog’i bo’lib, ilk matryoshka aynan undan ilhomlangan. Fukuruma qo’g’irchog’i odatda katta bosh, uzun soqol, va chuqur mulohazali ko’zlar bilan tasvirlanadi.Aynan shu qo’g’irchoq 1890-yilda birinchi rus matryoshkasi uchun ilhom manbai bo’lgan. Rassom Sergey Malyutin uni yapon san’at ko’rgazmasida ko’rib, ichma-ich qo’g’irchoq g’oyasini ishlab chiqqan."
  },
  {
    letter: "F",
    title: "Fukusima fojiasi",
    text: "2011-yil 11-mart kuni Yaponiyaning Fukusima prefekturasida joylashgan “Fukusima-1” atom elektr stansiyasi tarixdagi eng yirik texnogen fojialardan biriga sabab bo’ldi. Stansiya yaqinidagi Tinch okeanida ro’y bergan 9.0 magnitudali zilzila va undan so’nggi tsunami oqibatida zavodning sovutish tizimi ishdan chiqdi. Bu esa reaktorlarning qizib ketishi va portlashlar bilan yakunlandi. Bu voqea tarixdagi eng yirik yadro falokatlaridan biri bo’lib, Xirosima va Nagasaki portlashlaridan keyin Yaponiyadagi eng katta radiatsiya tarqalishiga olib keldi."
  },
  {
    letter: "F",
    title: "Fumata",
    text: "italyan va ispan tillaridan kirgan bo’lib, “tutun” ma’nosini anglatadi. Ammo bu so’z turli kontekstlarda o’ziga xos ma’nolarga ega. Vatikanda konklav vaqtida mo’ridan chiqadigan tutun orqali natija e’lon qilinadi: • Fumata bianca — oq tutun: yangi Papa saylandi. • Fumata nera — qora tutun: hali saylanmadi."
  },
  {
    letter: "F",
    title: "Furla Sumkalar",
    text: "turli aksessuarlar, soatlar, ko’zoynak va poyabzallar ishlab chiqarishga ixtisoslashgan ushbu mashhur italyan brendi nomi uning asoschisi Aldo Furlanetto familiyasining qisqartmasi hisoblanadi. Ushbu kompaniya kreativlik va o’ziga xoslikni yaxshi ko’radi. Bir gal “kompaniyaning ayol qiyofasi”ni yaratish uchun o’z xodimalaridan foydalangan. Kompaniyada ishlovchi oddiy ayollar reklama uchun huddi modellardek turib berishgan. Furla sumkalari brendning yuzi hisoblanadi. Ular yuqori sifatli materiallardan, jumladan, piton va timsoh terisidan tayyorlanadi"
  },
  {
    letter: "F",
    title: "Fyodor Reshetnikov (1906-1988)",
    text: "Sovet rassomi bo’lib, ijtimoiy-maishiy janrdagi asarlari bilan tanilgan. Uning “Oпять двойка” (“Yana ikki”) nomli kartinasi millionlab insonlarga tanish. Bu asarda maktabdan ikki baho olib qaytgan bolaning oilaviy muhitdagi holati tasvirlanadi: onaning hafsalasi pir bo’lgan, ukasi unga achinadi, it esa sodiq quvonch bilan kutib oladi. Reshetnikovning ishlari hayotiy realizmi, hissiyotlarga boyligi va o’z davri ruhini ifodalashi bilan ajralib turadi. 34 G"
  },

  // === G ===
  {
    letter: "G",
    title: "Gabitoskopiya",
    text: "bu kriminalistik texnikaning bir bo’limi bo’lib, insonning tashqi qiyofasining turli ko’rinishlarda aks etish qonuniyatlarini o’rganadi hamda jinoyatlarni fosh etish, tergov qilish va oldini olish maqsadida tashqi qiyofa haqidagi ma’lumotlarni to’plash, tadqiq qilish va ulardan foydalanish bo’yicha texnik-kriminalistik vositalar va usullarni ishlab chiqadi."
  },
  {
    letter: "G",
    title: "Galateya effekti",
    text: "insonning o’ziga bo’lgan ishonchi va o’zidan kutgan natijasi uning haqiqiy faoliyatiga ta’sir qilishi hodisasi. Ya’ni, odam o’zini qobiliyatli deb hisoblasa, ko’proq harakat qilib, yaxshiroq natijaga erishishi mumkin."
  },
  {
    letter: "G",
    title: "Galifaks portlashi",
    text: "Tarixdagi eng kuchli No-yadro portlash 1917-yil 6-dekabr kuni Kanadaning Galifaks shahrida insoniyat tarixidagi eng dahshatli sun’iy portlashlardan biri sodir bo’ldi. Bu voqea “Galifaks portlashi” nomi bilan tarixga kirgan. Fransiyaga tegishli SS Mont-Blank yuk kemasi Birinchi jahon urushi davrida Yevropaga o’q-dorilar va portlovchi moddalar tashigan. Kemada: -TNT (trinitrotoluol) -Benzol -Boshqa yuqori darajada portlovchi kimyoviy moddalar bo’lgan Mont-Blank Galifaks portiga kirayotganda Norvegiyaga tegishli SS IMO kemasi bilan to’qnashadi. To’qnashuvdan so’ng Mont-Blankda yong’in boshlanadi. Taxminan 20 daqiqa o’tib, kema portlab ketadi. Portlash taxminan 2,9 kilotonna kuchlanishni tashkil etgan uning to’lqini 100 km masofagacha sezilgan. Portlashdan keyin kichik tsunami yuzaga kelgan."
  },
  {
    letter: "G",
    title: "Galileo Galiley",
    text: "(XVI-XVII asrlar) oʻz davrining ilmiga katta taʼsir koʻrsatgan italyan faylasufi, fizik va astronom. Galiley asosan oʻzining planetalar va yulduzlar sohasidagi izlanishlari, dunyoning geliomarkazli tizimini faol qoʻllashi va mexanika boʻyicha tajribalari bilan mashhur. U ilk teleskop va termometrni ixtiro qilgan."
  },
  {
    letter: "G",
    title: "Gamelnlik kalamush ovchisi",
    text: "Shuningdek Pan Naychi yoki Gameln Alvon Naychisi deb ham ataladi. Rang-barang (“alvon”) kiyim kiygan naychi oʻzining sehrli nayi bilan kalamushlarni olib ketish uchun shahar aholisi tomonidan yollanadi. Fuqarolar vaʼda qilingan pulni toʻlashdan bosh tortishadi, u oʻz asbobining sehrli kuchidan foydalanib, ularga qarshi oʻch oldi va xuddi kalamushlar kabi ularning farzandlarini olib ketdi. Xarizma yoki yolgʻon vaʼdalar orqali oʻz muxlislarini oʻziga tortadigan odam uchun “pied piper” (“alvon naychi”) iborasi metaforaga aylangan."
  },
  {
    letter: "G",
    title: "Garpun",
    text: "Suv hayvonlarini ovlash uchun mo’ljallangan nayza shaklidagi qurol. Uning uchi tig’ yoki ilgak bilan tugaydi, shuning uchun o’lja teshib olingach, chiqib ketishi qiyin bo’ladi.Qadim zamonlardan beri baliqchilar va dengizchilar uni kit, akula va boshqa yirik jonzotlarni ovlashda ishlatishgan. Hozirgi kunda esa sport baliq ovlashida maxsus garpun miltiqlari ham qo’llaniladi."
  },
  {
    letter: "G",
    title: "Garri Gudini (1874–1926)",
    text: "Mashhur fokuschi, illyuzionist va qochish ustasi. O’zining aqlbovar qilmas chiqishlari bilan tanilgan. U har qanday kishan, qafas va hatto suv ostidagi qutilardan chiqib ketishi bilan mashhur bo’lib, Uni «Qochishlar qiroli» deb atashgan. Asl ismi Erik Vays bo’lib, bolaligida oilasi bilan Vengriyadan AQShga kelishgan. O’z chiqishlaridan tashqari sohta sehrgarlarni fosh qilish bilan shug’ullangan. «Tiriklayin ko’milish» chiqishlari tufayli bir necha bor o’lim yoqasidan qaytgan."
  },
  {
    letter: "G",
    title: "Gebefrenik sindrom",
    text: "bu sindrom har xil tentakliklar, sababsiz kulgu, yosh bolalarcha qolib ketish,to’liq yetilmay qolish va aqliy faoliyatdan ancha ortda qolib ketishdir. Bu sindrom “Ahmoqlardan ham ahmoqroq” filmi qahramoni Garri va Lloydda ko’rish mumkin. Bu sindrom rivojlangan davlatlarning 13%ida,rivojlanayotgan davlatlarning esa, 4% uchraydi!"
  },
  {
    letter: "G",
    title: "Gedonizm",
    text: "rohat, huzur, lazzatlanish) – huzur-halovatga, lazzatlanishga intilish insonning oliy maqsadi deb hisoblovchi axloqiy taʼlimot. Unga koʻra, huzur-halovatga intilish insonga tabiatan xos, uning butun xatti-harakati, maqsadi shunga qaratilgan. Gedonizm baxt-saodatga erishish axloqning asosi deb taʼlim beruvchi evdemonizmdan farqlanadi"
  },
  {
    letter: "G",
    title: "Geiger hisoblagichi",
    text: "( Geiger-Myuller hisoblagichi, GM hisoblagichi) — Geiger-Myuller trubkasi yordamida ionlashtiruvchi nurlanishni aniqlash va o’lchash uchun elektron asbobdir . Radiatsiya dozimetriyasi , radiologik himoya , eksperimental fizika va yadro sanoati kabi ilovalarda keng qo’llaniladi ."
  },
  {
    letter: "G",
    title: "Gekatonxeyrlar",
    text: "(yun.“yuz qo’lli”) qadimgi yunon mifologiyasidagi eng kuchli va qo’rqinchli mavjudotlardan biri hisoblanadi. Gekatonxeyrlar: • Uran (Osmon xudosi) • Geya (Yer ma’budasi) tomonidan dunyoga keltirilgan. Gekatonxeyrlarning har biri: • 100 ta qo’l • 50 ta bosh"
  },
  {
    letter: "G",
    title: "Geklberri Finn sindromi",
    text: "Mark Tvenning qahramoni nomi bilan atalgan bu sindromga chalingan odamlar doimiy norozilik va ichki bo’shliqni his qilishadi. Ular barcha mas’uliyatlardan qochishadi, doimo do’stlarini, sheriklarini, ish joylarini o’zgartiradilar. Ularning hayotida barqarorlikni topish qiyin. Sindrom o’smirlik “qo’zg’oloni” sifatida boshlanadi va chuqur ruhiy tushkunliklardan kelib chiqadi deb ishoniladi."
  },
  {
    letter: "G",
    title: "Gelenjik",
    text: "Rossiya Federatsiyasi Krasnodar o’lkasidagi kurort shahar. 1831-yilda asos solingan. Avvallari Torik, Pagra va Yeptala deb nomlangan. 1915-yildan shahar maqomini olgan. Toponim nomini ko’pchilik turkcha “kelinchak” so’zi bilan bog’laydi. Ammo bu to’g’ri emas. V.A. Nikonovning fikricha toponim arab sayyohlari tomonidan nomlangan bo’lib, “Xelenj” (daraxt manosini bildiruvchi so’z) asosida vujudga kelgan. Yana ba’zi versiyalarga ko’ra nom mahalliy adigey tilidagi “Xulijiy” so’zidan paydo bo’lgan bo’lib, “kichik yaylov” degan ma’no anglatadi."
  },
  {
    letter: "G",
    title: "Gemmologiya",
    text: "javohirlar, qimmatbaho toshlarni oʻrganuvchi fan. Qadimda javohirlar va ulardan ishlangan buyumlar Yevropada gemma deb atalgan. Baʼzi olimlar gemmologiyani mineralogiyaning bir sohasi deb hisoblaydilar. Gemmologlarning fikricha esa gemmologiya — bu mustaqil fan."
  },
  {
    letter: "G",
    title: "Geniza",
    text: "Yahudiy an’anasida Xudo nomi yozilgan har qanday matnni tashlab yuborish yoki yoqish mumkin emas. Shuning uchun diniy jamoalar bunday hujjatlarni Geniza deb ataluvchi maxsus joylarda saqlashgan."
  },
  {
    letter: "G",
    title: "Genrix Shliman",
    text: "Troyani topishga ishongan arxeolog. Nemis arxeologi boʻlgan bu inson bolaligidan Gomerning “Iliada” asarini sevib o’qib, unda tasvirlangan Troya shahri haqiqiy deb ishonardi. 1871-yilda hozirgi Turkiyadagi Hisarlik tepaligida qazish ishlarini boshlab, 1873-yilda afsonaviy “Priam xazinasi”ni topdi. Shliman nafaqat Troyani, balki Mikenada “Agamemnon niqobi”ni va Tirinfda qadimgi saroy qoldiqlarini ham topgan."
  },
  {
    letter: "G",
    title: "Geoglif",
    text: "tuproq ustida chizilgan yoki shakllantirilgan ulkan rasm."
  },
  {
    letter: "G",
    title: "GEOGUESSR",
    text: "Google Street View panoramalari asosida o’yinchining dunyoning qaysi nuqtasida ekanligini aniqlashga tayangan ommabop intellektual onlayn o’yin."
  },
  {
    letter: "G",
    title: "Gerkules qoʻli",
    text: ".U bir guruh arxeologlar tomonidan Iordaniya poytaxti Amman shahridan topilgan. Parcha juda katta, ammo hanuz topilmagan haykalning bir qismidir. Haykal kamida 12-13 metr bo’lgan deb tahmin qilinadi. Gerkules qo’li - arxeologik jumboqlardan biridir."
  },
  {
    letter: "G",
    title: "Gernika, Pablo Pikasso (1937)",
    text: "Asar Ispaniya Respublikasi buyurtmasi bilan chizilgan bo’lib, muallifning vatani - Ispaniyadagi Gernika shaharchasidagi 1937-yil 26-aprelda sodir bo’lgan bombardimon fojealari tasvirlangan. «Gernika» siyosiy norozilik ramziga aylangan va BMT binosida nusxasi osilgan. Kartinada faqatgina ayollar tasvirlangan boʻlib, u orqali ijodkor hayotning ogʻriq va azoblarini ifodalaydi. Ranglar esa dafn marosimi anglatadi. Undan tashqari, buqa - zoʻravonlik va yovuzlik timsoli; ot - xalq azobi; ayollar - qaygʻu va oʻlim timsolidir."
  },
  {
    letter: "G",
    title: "Gerontokratiya",
    text: "Yoshi katta insonlar hokimiyat tepasida bo’lgan boshqaruv shakli. Siyosiy qarorlar asosan keksalar tomonidan qabul qilinadi, yoshlar esa chekkada qoladi. Atama yunoncha “geron” (keksa) va “kratos” (hokimiyat) so’zlaridan olingan. Bunday tuzum Sovet Ittifoqi oxirlarida yaqqol ko’rinadi — Brejnev, Andropov, Chernenkolar bunga misol boʻla oladi."
  },
  {
    letter: "G",
    title: "GETA",
    text: "Yog’ochdan yasalgan, baland poshnali va matoli tasmalar bilan mahkamlanadigan an’anaviy yapon oyoq kiyim. Uning o’ziga xos tuzilishi, ya’ni pastki qismidagi “tishlar” deb ataluvchi tayanchlari, nafaqat yurishni osonlashtirgan, balki iqlim sharoitida kiyimlarni (kimono) loy va namlikdan himoya qilishga xizmat qilgan. Bugungi kunda getalar asosan bayramlarda, festivallarda va yukata bilan birga kiyiladigan ramziy aksessuar hisoblanadi)."
  },
  {
    letter: "G",
    title: "Geteroxromiya",
    text: "Inson yoki hayvonlarda oʻng va chap koʻz pardalarining yoki bir koʻz pardasi turli qismlarining har xil rangda boʻlishi. Nomi yunonchadan «getero» – turli, o’zga hamda «chroma» — rang, tus so’zlaridan kelib chiqqan. Tugʻma yoki hayot davrida orttirilgan bo’lishi mumkin. Hatto payg’ambar Muhammad s.a.v.ning mushugi “Muizza”ning ham ko’zlari turli rangda bo’lgan."
  },
  {
    letter: "G",
    title: "Geysha",
    text: "Yapon madaniyatining ramzlaridan biri bo’lgan geyshalar nafis sanʼatkor ayollar bo’lib, ular raqs, qo’shiq va anʼanaviy cholg’ularda mahorat ko’rsatadi. Ularning asosiy vazifasi mehmonlarni nozik suhbat, musiqiy chiqish va sanʼat bilan xushnud etishdir. Geyshalarning kiyimlari — hashamatli kimono, soch turmagi va o’ziga xos bo’yoqlari bilan ajralib turadi. Ular yapon estetikasi va nafisligining yorqin timsolidir."
  },
  {
    letter: "G",
    title: "Geyzerlar",
    text: "Yer osti suvining vulqon faoliyati tufayli qaynab, bosim ostida yer yuzasiga favvora tarzida otilishi. Ular faqat vulqonli hududlarda uchraydi. Dunyodagi eng mashhur geyzerlar Islandiya, Yangi Zelandiya va AQShdagi Yellowstone milliy bogʻida joylashgan. Eng baland geyzerlardan biri “Steamboat Geyser” bo’lib, u suvni 90 metrgacha otiladi."
  },
  {
    letter: "G",
    title: "Gillete",
    text: "1901 yilda amerikalik ixtirochi King Camp Gillette tomonidan yaratilgan kompaniya ustara tizimlari, ular uchun mashinalar va pichoqlar, soqol olish uchun aksessuarlar ishlab chiqaradi. Shu kabi mahsulotlar ayollar uchun ham ishlab chiqariladi. Boston -AQSH- Massachuts"
  },
  {
    letter: "G",
    title: "Gilotina",
    text: "O’lim jazosini ijro etish uchun ishlatilgan maxsus qurilma. U vertikal ramka va unga o’rnatilgan o’tkir tekis pichoqdan iborat bo’lib, pichoq tezlik bilan pastga tushib odamning boshini tanasidan ajratadi. Fransiyada 18 - asr oxiridagi Inqilob davrida mashhur bo’lgan. 1792 - yilda rasman ishga tushib, 1981 - yilda o’lim jazosi bekor qilingunga qadar rasmiy ravishda qo’llanilgan."
  },
  {
    letter: "G",
    title: "Gindenburg",
    text: "Samoviy Titanik 1936-yilda Germaniyada “Gindenburg” dirijabli quriladi. Dirijabl Veymar respublikasi reyxsprezidenti Paul fon Gindenburg sharafiga shunday nomlangan. Qurilish vaqtida hajmi kattaligi sababli uni “Samoviy titanik” deb atashadi. Qizig’i shundaki, ushbu nom keyinchalik kemaning taqdiriga ham ta’sir qilmay qolmagan — ushbu dirijabl 1937-yil 6-may kuni Leykxerst aviabazasi yaqinida halokatga uchraydi. Halokat natijasida 36 kishi vafot etadi."
  },
  {
    letter: "G",
    title: "Giperion",
    text: "Dunyo bo’yicha eng baland tirik daraxt sifatida tanilgan. U qizil sekvoyya (Sequoia sempervirens) turiga mansub bo’lib), balandligi 115,92 metrga yetadi. 2006-yilda Kaliforniyaning Redvud milliy bog’ida kashf etilgan. Daraxt joylashgan aniq manzil sir saqlanadi, chunki uni zarar yetkazishdan himoya qilish kerak. Uning nomi qadimgi yunon titanlaridan biri — Giperion sharafiga qo’yilgan."
  },
  {
    letter: "G",
    title: "Gippokrat qasamyodi",
    text: "Qadimgi Yunonistonning mashhur tabibi Gippokrat tomonidan yozilgan boʻlib, tibbiyot kasbining axloqiy meʼyorlari va tamoyillarini ifodalaydi. Qasamyodning asosiy mazmuni: ustoziga hurmat, kasbni halollik bilan bajarish, hayot va oʻlim masalalari, maxfiylik, kasbiy burchga sadoqat. Hozirda qasamyod zamonaviy tibbiyot tamoyillariga moslashtirilgan. Shifokorlar tibbiy muassasalar va universitetlarda bitiruv marosimida qasamyod qiladilar. Qasamyodning asosiy tamoyili “primum non nocere” - “avvalo zarar yetkazma”."
  },
  {
    letter: "G",
    title: "Glossofobiya",
    text: "Bu omma oldida gapirishdan qo’rqish holatidir. Bu qo’rquv insonning nutq so’zlash vaqtida haddan tashqari hayajonlanishi, yurak urishining tezlashishi, qo’llarning titrashi, hatto so’z topolmay qolish kabi simptomlar bilan namoyon bo’ladi. Mashhur yunon notiq Demosfen ham glossofobiyadan aziyat chekkan. U o’z qo’rquvini yengish uchun dengiz bo’yida toshlarni og’ziga solib mashq qilgan va nihoyat buyuk notiqqa aylangan."
  },
  {
    letter: "G",
    title: "Gobelen",
    text: "* — (fra. gobelin), yoki shpalera — dekorativ san’at turlaridan biri bo’lib, devorga osiladigan, bir tomonlama, tuklarsiz gilamdir. Unda syujetli yoki naqshli kompozitsiya bo’ladi va u qo’lda iplarni o’zaro kesishib to’qish usuli bilan yaratiladi. To’quvchi bir vaqtning o’zida ham tasvirni, ham matoning o’zini hosil qiladi."
  },
  {
    letter: "G",
    title: "Gogolning “Shineli”dan chiqqanmiz",
    text: "“Shinel” hikoyasi qahramoni kichik amaldor Bashmachkin yangi shinel sotib olish uchun o’z harajatlarini maksimal darajada kamaytiradi. Yangi shinelda ishga borganda hamma unga havas qilib, tabriklaydi. Lekin kechqurun uyga qaytayotganda ko’cha bezorilari shinelni tortib oladi. Natijada Bashmachkin yana eski shinel bilan qoladi. Ayozli kechalarning birida uyga kelgan qahramon kasal bo’lib qoladi. Keyinroq ahvoli og’irlashib, vafot etadi. “Biz hammamiz Gogolning”Shineli”dan chiqqanmiz” iborasi XIX asrda rus klassik adabiyoti 38 gullab-yashnashi ko’p jihatdan Nikolay Gogol ijodi bilan bog’liqligini anglatadi. Adib ko’targan mavzular bir necha yil davomida rus adabiyotida yetakchi mavzu bo’lgan."
  },
  {
    letter: "G",
    title: "Goldberg mashinasi",
    text: "Oddiy vazifani bajarish uchun murakkab va zanjirsimon mexanizmlardan foydalanadigan qurilma. Bu mashinalar o’z nomini amerikalik karikaturachi va ixtirochi Rub Goldberg va ingliz rassomi Uilyam Robinsondan olgan , ular o’z ishlarida bunday mashinalarning tasvirlaridan foydalanganlar. Ba’zan bu ibora har qanday o’ta murakkab tizimni tasvirlash uchun istehzo bilan ishlatiladi."
  },
  {
    letter: "G",
    title: "Golem effekti",
    text: "bu psixologik hodisa bo’lib, biron bir insonga nisbatan pastroq va negativ baho berish, inson faoliyatining yomonlashishiga olib keladi. Ko’pincha, bu ta’sir ta’lim yoki ish jarayonida koʻp kuzatiladi."
  },
  {
    letter: "G",
    title: "Gollandiya kasalligi",
    text: "Bu tabiiy resurslar, ayniqsa neft va gaz eksporti tufayli mamlakat valyutasining haddan tashqari mustahkamlanishi natijasida sanoatning boshqa sohalari tarmoqlarning zaiflashishidir. Atama 1970-yillarda Gollandiyada gaz qazib olish ortidan yuzaga kelgan iqtisodiy muammolar sababli paydo bo’lgan. Bunday holat faqat Gollandiyada emas, balki neftga boy boshqa davlatlarda ham kuzatilgan — masalan, Nigeriya, Venesuela yoki Rossiyada. Bu kasallik iqtisodiy barqarorlik uchun xavfli bo’lib, diversifikatsiyalashmagan iqtisodiyotga salbiy ta’sir ko’rsatadi."
  },
  {
    letter: "G",
    title: "Gollum",
    text: "JRR Tolkienning O’rta Yerdagi hayoliy dunyosida o’ziga xos nutq uslubiga ega bo’lgan yirtqich mavjudot. 1937 yilda “Xobbit” fantastik romanida tanishtirilgan va uning davomi ” Uzuklar hukmdori” da muhim rol o’ynagan . Gollum Gladden Fields yaqinida yashovchi daryo xalqining Hobbitlaridan edi. “Uzuklar hukmdori” filmida aytilishicha, u dastlab Smeagol nomi bilan tanilgan , “Yagona uzuk” tomonidan ongi zaxarlangan va keyinchalik “tomog’ida dahshatli yutish shovqini” qilish odati tufayli Gollum deb nomlangan."
  },
  {
    letter: "G",
    title: "Gologramma",
    text: "Lazer nuri yordamida predmetning hajmli (3D) tasvirini yozib olish va uni qayta tiklash usuli. Gologrammada nafaqat yorug’likning intensivligi, balki uning fazasi ham saqlanadi. Shu sababli oddiy suratdan farqli ravishda tasvir hajmli ko’rinadi va unga turli burchaklardan qaralganda o’zgarib turadi. U ilmiy tadqiqotlarda, xavfsizlik belgilarida (masalan, pul kupyuralari, plastik kartalar), shuningdek, san’at va texnologiyada qo’llaniladi."
  },
  {
    letter: "G",
    title: "Gomer",
    text: "Qadimgi Yunon shoiri. Uning soʻqir boʻlgani, oʻz asarlarini baxshilar kabi ogʻzaki aytgani maʼlum. Xios orolida Gomer oʻtirgan deb taxmin qilingan xarsang saqlanib qolgan. Uning ijodiga mansub “Iliada” va “Odisseya” dostonlari mavjud boʻlib, “Iliada”da qanday qilib yunon harbiylari qirol Agamemnon bilan Troya shahrini egallab olgani hikoya qilinadi."
  },
  {
    letter: "G",
    title: "Gotoku-neko",
    text: "Yapon afsonalaridagi ikki dumli mushuk bo’lib, boshida ag’darilgan temir panjara (gotoku) kiyib yuradi U odatda uy pechkasi yaqinida yashaydi va bambuk trubka orqali olovni kuchaytiradi. Agar mushuk 100 yil yashab, unga yaxshi qaralsa — u uyni asrovchi ruhga aylanishi mumkin. Ammo yomon muomala qilingan bo’lsa, Gotoku-neko yong’in chiqaruvchi yovuz kuchga aylanadi. ."
  },
  {
    letter: "G",
    title: "Govard Karter",
    text: "1922-yilda Tutanxamon maqbarasini ochishi bilan mashhur bo’lgan shaxs."
  },
  {
    letter: "G",
    title: "Grande Jatte orolidagi yakshanba",
    text: "(fransuzcha: Un dimanche après-midi à l’Île de la Grande Jatte) — fransuz rassomi * Jorj Syora (Georges Seurat) *ning 1884–1886-yillarda chizgan eng mashhur asarlaridan biridir. Kartinada Parij yaqinidagi Grande Jatte orolida dam olayotgan odamlar tasvirlangan. Asarning eng diqqatga sazovor jihati shundaki, u minglab mayda rangli nuqtalar yordamida ishlangan. Bu uslub puantilizm (pointillism) deb ataladi: ranglar tomoshabinning ko’zida optik tarzda birlashadi. Bugungi kunda ushbu durdona AQShning Chikago shahridagi Art Institute of Chicago muzeyida saqlanadi."
  },
  {
    letter: "G",
    title: "Greta Tunberg(2003)",
    text: "shved eko faoli bo’lib, 2018-yilda maktab o’quvchisi sifatida Fridays for Future harakatini boshlab, global iqlim o’zgarishiga qarshi kurashda yoshlarning ovozi bo’ldi. O’zining fikrini keskin ohangda ifoda etishi bilan mashhur. BMTda nutq so’zlab, dunyo yetakchilarini ekologik inqirozga befarqlikda ayblagan. 2019-yilda Time jurnali uni “Yil odami” deb e’lon qildi. Tunbergning faoliyati ko’plab iqlim harakatlarini ilhomlantirdi va millionlab odamlarni atrof-muhitni himoya qilishga undadi."
  },
  {
    letter: "G",
    title: "Grifon",
    text: "Qadimiy yunon va Sharq mifologiyasida tasvirlangan afsonaviy mavjudot. Uning boshi va qanotlari burgutniki, tanasi esa sherga o’xshaydi. Bu uyg’unlik Grifonni osmonda ham, yerda ham eng kuchli jonzotlardan biri sifatida gavdalantiradi. Rivoyatlarga ko’ra, Grifonlar oltin va bebaho xazinalarni qo’riqlovchi bo’lgan. Ular jasorat, kuch va donishmandlik timsoli sifatida o’rta asr gerblarida ham keng qo’llangan."
  },
  {
    letter: "G",
    title: "Grigori Perelman",
    text: "rossiyalik matematik, Puankare gipotezasini isbotlagan olim. Uning isboti matematikaning eng murakkab muammolaridan birini hal qildi."
  },
  {
    letter: "G",
    title: "Grozniy shturmi",
    text: "(1994-1995) Grozniy shahriga hujum — Birinchi Chechen urushi davridagi eng muhim va eng qonli harbiy operatsiyalardan biri. Ushbu janglar Checheniston poytaxti Grozniy shahrini egallash maqsadida olib borilgan. Harbiy operatsiya 1994-yil 31-dekabr, ya’ni Yangi yil arafasida boshlangan. Rossiya federal qo’shinlari shaharni qisqa vaqt ichida va katta qarshiliksiz egallash rejasini tuzgan."
  },
  {
    letter: "G",
    title: "Gulyelmo Markoni",
    text: "italiyalik ixtirochi, radiotelegrafiya asoschilaridan biri. 1895-yilda birinchi radio signalni uzatishga muvaffaq bo’lgan va 1901-yilda Atlantika okeani orqali ilk radio aloqa o’rnatilganini e’lon qilgan. 1909-yilda simsiz telegrafiyaga qo’shgan hissasi uchun Karl Ferdinand Braun bilan sheriklikda fizika bo’yicha Nobel mukofoti bilan taqdirlangan."
  },
  {
    letter: "G",
    title: "Gurlan",
    text: "Bu yerga hammadan oldin ko’r va cho’loq odam kelib yashay boshlagan emish. U atrofni obod qilgach, bu yerlarga odamlar ko’chib kelgan va joyni ko’r va lang (cho’loq) kishi sharafiga “Ko’rlang” yoki “Gurlang” deb atashgan. Shuningdek, ba’zi tadqiqotchilar fikricha, bu yer gurkirab, yashnab ketsin degan ma’noda “Gurlan” deb atalgan ekan. Eng ishonchli manbalarga ko’ra, toponim mo’g’ulcha “Kurelen”, “Kuren” so’zlaridan olingan bo’lib, “ko’ra”, “atrofi o’ralgan qishloq” degan ma’nolarni anglatadi"
  },
  {
    letter: "G",
    title: "Gustav Klimt (1862-1918)",
    text: "Avstriyalik rassom san’at olamida o’zining nafis, sirli va oltin ranglar bilan boyitilgan asarlari bilan tanilgan. Klimt ijodining eng mashhur bosqichi — «Oltin davr»(1901- 1909) deb ataladi. Aynan shu yillarda u oltin folga (Gold leaf) dan foydalanib, san’at asarlarini 40 shohona va ilohiy ko’rinishga olib kelgan. Uning eng mashhur asarlari: «Bo’sa», «Adel Blox-Bauer I portreti», «Judit I», «Betxoven Frizi», «O’lim va hayot»."
  },
  {
    letter: "G",
    title: "Guvoh effekti",
    text: "(Jenoveze sindromi) – psixologik effekt bo’lib, biron jinoyatda, favqulotda vaziyatda va boshqa holatlarda guvohlarning aziyat chekuvchiga yordam bermasligini, qancha ko’p guvoh bo’lsa, jabrlanuvchiga shuncha kam yordam berilishi, ya’ni, har bir guvoh jabrlanuvchiga o’zi emas balki boshqa bironta guvoh yordam berishi kerak, deb hisoblashini ifodalaydi."
  },
  {
    letter: "G",
    title: "Guy Fawkes",
    text: "Guy Fawkes 1605-yilda Angliyada sodir etilishi rejalashtirilgan Parlament portlatish fitnasi (Gunpowder Plot) ishtirokchilaridan biri bo’lgan. U va uning sheriklari qirol Jeyms I ni katoliklarni ta’qib qilgani uchun jazolash maqsadida parlament binosini portlatmoqchi bo’lgan. Fitna fosh bo’lib, Guy Fawkes qo’lga olinib, qiynoqqa solingan va oxir-oqibat qatl qilingan. Bugungi kunda uning niqobi (Guy Fawkes maskasi) norozilik va erkinlik ramzi sifatida ishlatiladi — xususan, “Anonymous” guruhi va “V for Vendetta” filmida mashhur bo’lgan. 41 H"
  },

  // === H ===
  {
    letter: "H",
    title: "Hail Mary",
    text: "katolik dinidagi mashhur duo (Maryamga bag’ishlangan ibodat): “Ave Maria” deb ham ataladi. Hail Mary – Sport (Amerika futboli)dagi ma’nosi “Hail Mary pass” — o’yin oxirida: vaqt tugayotganda deyarli umidsiz holatda juda uzoq va tasodifiy uzatma tashlash Ma’nosi: “omadga tayanib qilinadigan oxirgi urinish”."
  },
  {
    letter: "H",
    title: "HANOK",
    text: "Koreyaning an’anaviy me’morchilik uslubida qurilgan, tabiat bilan uyg’unlik va o’ziga xos isitish tizimiga ega bo’lgan tarixiy uylari."
  },
  {
    letter: "H",
    title: "HARUKI MURAKAMI",
    text: "U 1949-yilda Yaponiyaning Kioto shahrida tug’ilgan mashhur yozuvchi. U zamonaviy adabiyotda real hayot va sirli, tushga o’xshash voqealarni uyg’unlashtirgan. Yozuvchi bo’lishdan avval u jazz-bar ochgan, musiqa va adabiyotga mehr qo’ygan. Bir kuni beysbol o’yinida ilhomlanib, yozuvchilik faoliyatini boshlagan. Uning eng mashhur asarlari: • “Norveg o’rmoni” • “Kafka sohilida” • “1Q84” • “Qo’yni izlab sayohat”"
  },
  {
    letter: "H",
    title: "Heinz",
    text: "“Heinz” mahsulotlarini harid qilganingizda undagi “57 varieties” (“57 tur”) yozuvini ko’rgan bo’lsangiz kerak. Bu yozuv kompaniyaning har bir mahsulotida bor bo’lib, uning paydo bo’lishi haqida Genri Heinz shunday degan: “1896-yilda Nyu-Yorkka xizmat safariga borayotganimda bekatlarning birida”21 turdagi poyabzal” degan yozuvli do’konga ko’zim tushdi. Shundan keyin o’z mahsulotlarimga ham numerologik yondashuvni qo’llashga qaror qildim” Shu tariqa “57 tur” yozuvi uning mahsulotlari idishlarida paydo bo’lgan. Gap shundaki, 5 - Genrining, 7 esa xotinining sevimli raqami bo’lgan."
  },
  {
    letter: "H",
    title: "Hibakusha",
    text: "Yaponiyada Xirosima va Nagasaki shaharlariga 1945- yilda atom bombasi tashlanganidan omon qolgan kishilarga berilgan nom. So’zma-so’z tarjimada “portlashdan jabrlangan odamlar” degan ma’noni anglatadi. Hibakushalarning ko’pchiligi jismoniy jarohatlar, saraton kasalligi,genetik muammolar va ruhiy travmalarga duch kelgan."
  },
  {
    letter: "H",
    title: "Hilliyer",
    text: "Avstraliyaning Janubi-G’arbida joylashgan Midl-aylend orolidagi ko’l. U suvining pushti rang ekanligi bilan mashxur. Ko’l atrofini qum va evkalipt o’rmoni o’rab turadi. Orol va ko’l britaniyalik dengizchi Metyu Flindersning 1802-yildagi ekspeditsiyasi davomida kashf qilingan. Suvning pushtiligiga ko’ldagi ayrim noyob suv o’simliklarini sabab qilib ko’rsatishadi. Biroq turistlar uchun bu obyekt juda noqulay. Orolga faqat uchar transport orqali borish mumkinligi sababli ko’pchilik uchun bu sayohat qimmatlik qiladi."
  },
  {
    letter: "H",
    title: "Hoyyo-Bachu o’rmoni",
    text: "(Hoia-Baciu) Dunyodagi eng sirli va “mistik” joylardan biri sifatida tanilgan o’rmon bo’lib Uni ko’pincha “Transilvaniyaning Bermud uchburchagi” deb ham atashadi. joylashuvi: Kluj-Napoka, Transilvaniya, Ruminiya"
  },
  {
    letter: "H",
    title: "HTTP",
    text: "ya’ni internet brauzer protokolida mijozlar tomonidan qilingan turli xatolargan quyidagi 3 raqamli kodlar bilan javob beriladi. Quyida ulardan bir qanchasi haqida ma’lumotlar keltirilgan. 400 Bad Request («Noto’g’ri, aniq bo’lmagan so’rov») 401 Unauthorized («Ruxsat berilmagan») 402 Payment Required («To’lov talab qilinadi») 403 Forbidden («Taqiqlangan») 404 Not Found («Topilmadi») 405 Method Not Allowed («Ruxsat berilmagan usul») 406 Not Acceptable («qabul 42 qilinmaydi») 407 Proxy Authentication Required («Proksi id talab qilinadi») 408 Request Timeout («so’rov muddati tugagan») 409 Conflict («Mojaro») 410 Gone («O’chirildi») 411 Length Required («Uzunlik talab qilinadi») 412 Precondition Failed («Noto’g’ri shart») 413 Payload Too Large («Juda katta hajm») 414 URI Too Long («URi judayam uzun») 415 Unsupported Media Type («Nomutonosib Media turi») 416 Range Not Satisfiable («Qoniqarsiz zona») 417 Expectation Failed («Kutish amalga oshmadi») 418 I’m a teapot («Men choynakman») 419 Authentication Timeout («Vaqt tugadi») 421 Misdirected Request («Noto’g’ri yo’naltirilgan talab») 422 Unprocessable Entity («Ishlov berilmaydigan obyekt») 423 Locked («Qulflangan») 425 Too Early («Juda erta») 426 Upgrade Required («Yangilash talab qilinadi») 428 Precondition Required («Zaruriy shart») 429 Too Many Requests («Juda ko’p so’rov») 431 Request Header Fields Too Large («Sarlavha maydoni juda katta») 449 Retry With («qayta urunib ko’ring») 451 Unavailable For Legal Reasons («Yuridik sabablarga ko’ra mavjud emas») 499 Client Closed Request («Mijoz talabni yopdi») 43 I"
  },

  // === I ===
  {
    letter: "I",
    title: "Ich bin ein Berliner",
    text: "(men berlinlikman) — AQSh prezidenti John F. Kennedyning 1963-yil 26- iyunda G’arbiy Berlinda aytgan mashhur iborasi. Kennedy bu so’zlar bilan G’arbiy Berlin aholisi va G’arb dunyosining Sovet bosimiga qarshi birdamligini ifodalagan."
  },
  {
    letter: "I",
    title: "Iglu",
    text: "tabiiy «termos — Eskimos xalqi tomonidan quriladigan an’anaviy uy bo’lib, qor bloklaridan barpo etiladi. Ushbu struktura kuchli shamol va qattiq sovuqqa chidamli bo’lib, hatto tashqi havo - 40°C bo’lganda ham ichki haroratni 0°C atrofida ushlab turadi. Qor — o’zining tuzilishi tufayli yaxshi izolyatsiya qiluvchi material hisoblanadi. Igluning gumbazsimon shakli esa bosimni teng taqsimlaydi, shu boisdan ichidagi issiqlik yahshi saqlanadi. Sayohatchilar va polyar tadqiqotchilar ham ba’zan igludan vaqtincha turarjoy sifatida foydalanishadi."
  },
  {
    letter: "I",
    title: "IKEA effekti",
    text: "bu iste’molchilar qisman o’zlari yaratgan mahsulotlarning qiymatini koʻproq qadrlashlari va qimmatroqqa baholashlaridir. Bu nom mebel ishlab chiqaruvchi IKEA kompaniyasi bilan bog’liq. Psixolog Maykl Norton o’z hamkasblari bilan birgalikda “Mijozlar yig’ishni talab qiladigan mahsulot uchun ko’proq pul to’laydilarmi?” - degan fundamental savolga asoslangan tajriba o’tkazdi. Tadqiqot ishtirokchilari origami figuralarini yasash, Lego va IKEA qutilarini yigʻishdan iborat uch xil tajribalarda ishtirok etishdi. Natijalar shuni ko’rsatdiki, odamlar ma’lum bir mahsulotni yig’ishda bevosita ishtirok etganda (hatto u yomon bajarilgan bo’lsa ham) bu mahsulot ular uchun qimmatli boʻlib qoladi."
  },
  {
    letter: "I",
    title: "In va Yan",
    text: "Qadimiy xitoy falsafasidagi ikki ziddiyatli, ammo uyg’un kuch — qorong’u va yorug’, sovuq va issiq, ayol va erkak timsollari. In – sokinlik, passivlik, qorong’ilik; Yan – harakat, faol kuch va yorug’likni anglatadi. Ularning o’zaro doimiy aylanmasi hayot harakatini bildiradi. “In-Yan” belgisi (oq va qora doira) dunyo bo’ylab muvozanat va uyg’unlik ramziga aylangan. Ko’plab sharqona tibbiyot va ruhiy amaliyotlar asosida yotadi."
  },
  {
    letter: "I",
    title: "Indra ustuni",
    text: "Hindistonda joylashgan mashxur tarixiy yodgorlik. U Dehlidagi Qutb Minor masjidi hovlisida joylashgan. Yetti tonnalik ushbu metall ustun o’ziga xos xususiyatga ega - 1500 yil davomida zanglamagan va korroziyaga uchramagan ham. Hozirgi kunda bunday ideal toza temir ishlab chiqarish faqat kosmik sharoitda mumkin. Kolonna 415-yilda qirol Chandragupta II sharafiga o’rnatilgan. Dastavval u Matxur shahridagi ibodatxonada joylashgandi. 1050-yilda Anang Pol kolonnani Dehliga ko’chirgan."
  },
  {
    letter: "I",
    title: "Inemuri",
    text: "Yaponlarning kunduz kuni ish joyi, jamoat transporti yoki boshqa jamoat joyida uxlab olish amaliyoti. Yapon urf-odatlariga ko’ra inemuri ta’qiqlanmagan, aksincha, jamiyat tomonidan rag’batlantirilib, odam ko’p mehnat qilayotgani va buning natijasida kam uxlashi belgisi sifatida qaraladi."
  },
  {
    letter: "I",
    title: "Intertekstuallik",
    text: "bir asarda boshqa asarlar, matnlar yoki madaniy manbalarga bog’liqlik."
  },
  {
    letter: "I",
    title: "Introvertlar",
    text: "energiyani yolg’izlikdan oladigan, ichki dunyosi boy va ko’proq o’z-o’ziga qaratilgan shaxslar. Ular odatda chuqur fikrlaydi, kamroq gapiradi, lekin diqqat bilan tinglaydi."
  },
  {
    letter: "I",
    title: "Iogan Volfgang Doberener",
    text: "zajigalka ixtirochisi"
  },
  {
    letter: "I",
    title: "Ispan etigi",
    text: "inkvizitsiya davrida oyoqning tizza va to’piqlarini siqish orqali so’roq qilishda foydalanilgan qurol. Fransiya va Britan orollarida uning yog’ochli turidan foydalanilgan bo’lib, ichida teshikchalariga jallod tomonidan maxsus mixlar qoqilgan. Metall varianti esa inkvizitsiya davrida qo’llanilgan va oyoqni siqishdan tashqari olovda qizdirish orqali ham foydalanilgan."
  },
  {
    letter: "I",
    title: "Ispan grippi",
    text: "(Ispanka) - 1918-1920-yillarda davom etgan eng katta gripp pandemiyalaridan biri. Qayd etilgan birinchi holat AQShning Kanzas shtatida boʻlgan. Lekin nomlanishi orqali koʻpchilik Ispaniyadan chiqqan kasallik deb oʻylaydi. Aslida esa pandemiya haqidagi hamma maʼlumotlar aholidan sir tutilgan. Kasallik 20-40 yoshi atrofidagi insonlar orasida keng tarqalgan. 1990-yillarda olimlar muzlagan toʻqimalarni oʻrganib, virus haqida toʻliqroq maʼlumot olishga erishishgan."
  },
  {
    letter: "I",
    title: "Iuda",
    text: "Iso Masihning 12 shogirdidan biri bo’lib, tarixiy matnlarga ko’ra, Isoni 30 kumush tanga evaziga Rim hokimiyatiga sotgan. Keyinchalik u o’z qilmishidan pushaymon bo’lib, pullarni qaytarishga harakat qilgan, biroq rad javobini olgan. Rivoyatlarga ko’ra, u o’z joniga qasd qilgan yoki jazoga uchragan. Uning nomi tarixda xiyonat ramzi sifatida qolgan. 45 J"
  },

  // === J ===
  {
    letter: "J",
    title: "Jamevyu",
    text: "Inson ilgari ko’rgan yoki boshdan kechirgan narsasini tanimay qolish holati. Bu dejavyu holatining teskarisi bo’lib, odatiy muhit yoki tanish odam begona tuyulishi bilan namoyon bo’ladi. Ko’pincha stress, charchoq yoki miyaning faoliyatidagi vaqtinchalik buzilishlar bilan bog’liq."
  },
  {
    letter: "J",
    title: "Jan Fransua Shampolyon (1790–1832)",
    text: "Fransuz sharqshunosi va tilshunosi. U “Misr iyerogliflarini o’qigan inson” sifatida tarixda qoldi."
  },
  {
    letter: "J",
    title: "Jan Nikot (1530–1604)",
    text: "Fransuz diplomati va olim. U Yevropada tamakini keng targ’ib qilgan inson sifatida tarixda qoldi. 1559-yilda Portugaliyada elchi bo’lib ishlagan paytida tamaki o’simligini kashf etib, uni Fransiyaga olib keladi. O’sha davrda u tamakini dorivor xususiyatlari bilan tanishtirgan. Aynan uning familiyasi sharofati bilan tamakidagi “nikotin” moddasining nomi paydo bo’lgan va bu atama keyinchalik butun dunyoga keng tarqaldi."
  },
  {
    letter: "J",
    title: "JAN-POL MARAT",
    text: "(Jean-Paul Marat, 1743–1793) Jan-Pol Marat — Fransuz inqilobi davrida xalq tarafini olgan eng radikal siyosiy arboblardan biri. U “Xalq do’sti” (L’Ami du peuple) nomli gazeta chiqargan va unda qirollikka, zodagonlarga hamda korrupsiyaga qarshi keskin maqolalar yozgan. Marat 1793-yil 13-iyul kuni o’z vannasida pichoqlab o’ldirilgan. Uni Sharlotta Kordé ismli ayol o’ldirgan — u Maratni “xalqni qon to’kishga undayotgan” shaxs deb bilgan. Marat teri kasalligi tufayli ko’p vaqtini issiq vannada o’tkazgan. Shu sababli uning o’limi “vannadagi inqilobchi” nomi bilan tarixda qoldi. Mashhur rassom Jak Lui David uning jasadini tasvirlab, “Maratning o’limi” (La Mort de Marat) nomli asarni yaratgan — bu rasm bugun ham inqilob timsoli sifatida tanilgan."
  },
  {
    letter: "J",
    title: "Jean-Dominique Bauby",
    text: "(1952–1997) — fransuz jurnalisti, yozuvchi va Elle jurnalining bosh muharriri bo’lgan. Tug’ilgan: 23-aprel 1952, Parij, Fransiya Vafot etgan: 9-mart 1997 Kasbi: jurnalist, yozuvchi, muharrir Mashhur asari: Le Scaphandre et le Papillon (The Diving Bell and the Butterfly, 1997) Asar yozilishining o’ziga xosligi: 1995-yilda insultdan keyin locked-in syndrome holatiga tushib qolgan. U deyarli butun tanasini harakatlantira olmagan, ammo ongi faol qolgan. U kitobini chap ko’z qovog’ini pirpiratish orqali yozdirgan: yordamchisi alifboni ovoz chiqarib sanagan, Bauby kerakli harfga kelganda ko’zini yumgan. Kitob uning ichki kechinmalari, xotiralari va kasallikdan keyingi hayoti haqida. 1997-yilda, kitobi nashr etilganidan atigi ikki kun o’tib vafot etgan. 2007-yilda uning kitobi asosida The Diving Bell and the Butterfly filmi suratga olingan."
  },
  {
    letter: "J",
    title: "Jeju oroli",
    text: "Janubiy Koreyaning eng yirik vulqon oroli. Markazida 1 950 m balandlikdagi Hallasan tog’i joylashgan. Orol UNESCO merosiga kiradi: lava tunnellari, Seongsan Ilchulbong konusi va noyob qirg’oqlari bilan mashhur. “Haenyeo” — nafas apparatisiz sho’ng’uvchi ayollar madaniyati bilan ham taniqli. Bahor va kuz sayohat uchun eng qulay davr hisoblanadi."
  },
  {
    letter: "J",
    title: "Jenga",
    text: "Maxsus yog’och bo’laklaridan tashkil topgan binoning asosdagi bloklarini olib, borgan sari yuqorisiga joylab boriluvchi stol o’yini. O’yin davomida ishtirokchilar navbati bilan 54 ta qismdan iborat konstruktsiyadan bir bo’lakni olib, eng yuqori qatorga joylashtiradi. Yuqoridagi dastlabki 3 qatordan detall olish mumkin emas. Bo’lakni olish faqat bir qo’lgan foydalanish mumkin. Detall mustahkam joylashganini tekshirish uchun barmoq bilan surib ko’rish mumkin."
  },
  {
    letter: "J",
    title: "Jerri Tomas",
    text: "(1830–1885) — amerikalik mashhur bartender bo’lib, u tarixda “Professor” nomi bilan tanilgan. U zamonaviy kokteyl san’ati asoschisi hisoblanadi. 1862-yilda u dunyodagi birinchi professional kokteyl qo’llanmasi — “The Bar-Tender’s Guide” kitobini nashr etdi. Bu kitob ichimlik retseptlarini aniq o’lchovlar va usullar bilan tizimli ravishda bayon qilgan birinchi manba edi."
  },
  {
    letter: "J",
    title: "Jerrymandering",
    text: "saylov okruglari chegaralarini siyosiy maqsadda o’zgartirish orqali ma’lum bir partiya yoki guruhga ustunlik berish amaliyoti. Atama 1812-yilda AQShda paydo bo’lgan. Elbridge Jerry gubernatorligi davrida chizilgan okrug xaritasi salamandr shakliga o’xshab ketgani uchun “Jerry + salamander” birikmasidan “Jerrymander” so’zi kelib chiqqan."
  },
  {
    letter: "J",
    title: "Jetlag",
    text: "Bu atama uzoq parvozdan so’ng inson tanasining ichki soati yangi vaqt mintaqasiga moslasha olmasligidan kelib chiqadigan holatni bildiradi. Ingliz tilidan olingan bo’lib, “jet” (reaktiv samolyot) va “lag” (kechikish) so’zlaridan tashkil topgan. Jetlag charchoq, uyqusizlik, ishtaha buzilishi va diqqat susayishi bilan namoyon bo’ladi. Ayniqsa g’arbdan sharqqa uchilganda tanaga ko’proq ta’sir qiladi. Bu holat tananing tabiiy kunlik ritmlarining buzilishi bilan bog’liq."
  },
  {
    letter: "J",
    title: "Jevodan mahluqi",
    text: "(Жеводанский зверь) Fransiyaning janubidagi tarixiy Жеводан, hozirgi Лозер departamentiga 1764–1767 yillarda dahshat solgan sirli, bo’riga o’xshash mavjudotdir. Uch yil davomida 100 dan ortiq tasdiqlangan hujum sodir etilgan bo’lib, taxminan 100–124 kishi halok bo’lgan. O’zining g’ayrioddiy kattaligi va xatti-harakati bilan ajralib turgan bu jonzot Fransiya tarixidagi eng mashhur sirli voqealardan biriga aylangan va gigant bo’ridan tortib odamlar tomonidan ataylab o’rgatilgan yirtqichgacha bo’lgan turli afsona hamda nazariyalarni keltirib chiqargan. Bir necha muvaffaqiyatsiz urinishlardan so’ng 1767 yil 19 iyunda mahalliy dehqon Jan Shastel tomonidan otib o’ldirilgan."
  },
  {
    letter: "J",
    title: "Jeyms Neysmit",
    text: "Basketbol asoschisi. — Kanadalik shifokor, pedagog va sport murabbiyi. 1891- yil qishda, AQShning Massachusets shtatidagi Springfield kollejida u sportchilarni sovuq mavsumda faol saqlab qolish uchun yangi o’yin – basketbolni ixtiro qildi. Dastlabki o’yin 9 nafar o’quvchi bilan, ikki dona o’rik savatidan foydalanilgan holda o’tkazilgan. Neysmit bu o’yinni xavfsiz, jismoniy rivojlantiruvchi va taktik fikrlashga asoslangan bo’lishini xohlardi."
  },
  {
    letter: "J",
    title: "Jeyms Parkinson",
    text: "Ingliz jarrohi, geolog, paleontolog va siyosiy faol edi. O’zining 1817-yilda chop etilgan “Salkiragan falaj haqida insho” asari bilan mashhur bo’lib, unda birinchi bo’lib”falaj qo’zg’atuvchilari” ni tasvirlab bergan. Shu holat keyinchalik Jan-Martin Charko tomonidan “Parkinson kasalligi” deb o’zgartirilgan. Bu kasallik harakatdagi sekinlashuv, titroq va muvozanat muammolari bilan namoyon bo’ladi."
  },
  {
    letter: "J",
    title: "Jezva",
    text: "turkcha qahva tayyorlash uchun mo’ljallangan maxsus idish. U o’tkir bo’yinli, cho’zinchoq tutqichli va pastki qismi keng bo’ladi. Qahva sekin va bir tekis qaynashi uchun aynan shunday shakl berilgan."
  },
  {
    letter: "J",
    title: "Jibbitz",
    text: "Teshikli poyabzallarga, ayniqsa «Crocs» brendining shippaklariga o’rnatish uchun mo’ljallangan, bezak vazifasini bajaruvchi kichik aksessuar."
  },
  {
    letter: "J",
    title: "Joan Myurray",
    text: "(Джон Мюррей) 1999-yilda amerikalik parashyutchi Joan Myurray o’zining 36- parashyut sakrashini amalga oshirayotgandi, ammo sakrash kutilmaganda fojiaga aylandi. Asosiy 47 parashyuti ochilmadi Zaxira parashyuti ham chalkashib ketdi U 14 500 fut (4,4 km) balandlikdan deyarli erkin tushishga majbur bo’ldi Yerga yaqinlashganda u bexosdan qizil chumolilar uyasiga tushib qoldi. Ularning o’nlab chaqishlari organizmiga katta miqdorda adrenalin chiqarilishiga sabab bo’ldi shifokorlar aytishicha endigina to’xtamoqchi bo’lgan Joanning yuragi aynan o’sha adrenalin sabab urib turishini saqlab qolgan!"
  },
  {
    letter: "J",
    title: "Johatsu (yaponcha “bug’lanib ketgan”)",
    text: "Yaponiyada har yili minglab odamlar hech qanday iz qoldirmay, shunchaki g’oyib bo’lish hodisasi. Hayotdagi og’riqli bosqichlardan, masalan, ishdan bo’shash, ajralish, yoki katta qarzlardan keyin hech kimga aytmay, g’oyib bo’lishni tanlaydi. Yapon jamiyatidagi or-nomus tuyg’usi ba’zida odamlarni butunlay yo’qolishga majbur qiladi. Ular maxsus yotoqxonalarda yashirinib, hatto ism-familiyasini ham o’zgartiradi, yangidan hayot boshlaydi. Yaponiyada ularni qidirib topish bilan shug’ullanuvchi sirli firmalar ham mavjud."
  },
  {
    letter: "J",
    title: "Jon Milton Keyj",
    text: "shoir, musiqashunos va rassom. Keyj 1952 - yilgi uch qismli ” 4’33 ” kompozitsiyasi bilan mashhur bo’lib , uning davomida hech qanday tovush eshitilmaydi. Kompozitsiyadan maqsad - to’rt daqiqa o’ttiz uch soniyalik sukunat emas, balki ijro davomida eshitiladigan muhit tovushlarini musiqa sifatida qabul qilishdir. Keyjning yana bir mashhur ixtirosi tayyorlangan pianinodir (pianino torlari orasiga turli buyumlar - qog’oz, tangalar, qog’oz qisqichlar va boshqalar joylashtiriladi - bu asbobning ovozini o’zgartiradi."
  },
  {
    letter: "J",
    title: "Jon Stit Pemberton",
    text: "Coca cola yaratuvchisi"
  },
  {
    letter: "J",
    title: "Jozef Xeller",
    text: "amerikalik yozuvchi. Xeller rus o’quvchilariga asosan absurd adabiyot unsurlari bilan urushga qarshi “Catch - 22” satirik romani bilan tanilgan."
  },
  {
    letter: "J",
    title: "Jugderdemidiyn Gurragcha (1947)",
    text: "Mo’g’uliston tarixidagi birinchi kosmonavt. Zakovat o’yinlarida ism-familiyasi murakkabligi atrofida savol so’raladi. Sovet rusiyzabon aholisi uchun talaffuzi murakkabligi sababli familiyasini Sansarga o’zgartirgan. «Sansar» so’zi sanskrit tilidan «kosmos» ma’nosini anglatadi. 1981-yilning 22-30-mart kunlari davomida izlanuvchi sifatida kosmosda bo’lgan. Parvoz ekipaji komandiri Vladimir Janibekov edi. Mo’g’ulistonda ko’plab lavozimlarni egallangan, eng yuqori lavozimi esa Mo’g’uliston mudofaa vaziri (2000-2004). 48 K"
  },

  // === K ===
  {
    letter: "K",
    title: "Kabo Verde",
    text: "Portugalcha Yashil burun degani"
  },
  {
    letter: "K",
    title: "Kabuki",
    text: "Oʻzining liboslari, uslubli qilingan harakatlari va jozibali hikoyalari bilan mashhur boʻlgan Kabuki drama, raqs va musiqa elementlarini oʻz ichiga olgan noyob sanʼat turidir. Sahna dekoratsiyalari o’zgaruvchan bo’lib, tomoshabinni voqealar markaziga olib kiradi, barcha rollarni erkak aktyorlar ijro etadi, hattoki ayollar rollarini ham. Oʻziga xos belgisi pardoz boʻrttirilgan dizaynlar, jonli ranglar va qahramonlarni va ularning rollarini bir zumda aniqlaydigan murakkab naqshlar bilan ajralib turishidadir."
  },
  {
    letter: "K",
    title: "Kadutsey",
    text: "Bu qadimgi yunon mifologiyasida Germes (rimliklar uni Merkuriy deb atashgan) — xabar yetkazuvchi va savdo xudosi — tutgan sehrli tayoq. Bu tayoq atrofida ikkita ilon o’ralgan va tepasi qanotlar bilan bezatilgan bo’ladi. U asosan savdo, diplomatiya, muvozanat va tinchlik timsoli sanaladi. Lekin zamonaviy dunyoda u ko’pincha tibbiyot ramzi deb noto’g’ri ishlatiladi. Aslida, tibbiyotning to’g’ri belgisi bu — Asklepiy tayoqchasi bo’lib, u bitta ilon bilan tasvirlanadi va qanotga ega emas."
  },
  {
    letter: "K",
    title: "Kalinov ko’prigi",
    text: "Slavyan mifologiyasida tiriklar va o’liklar dunyosi o’rtasidagi chegara sifatida tasvirlangan afsonaviy ko’prik. U odatda tor, olovli yoki qizigan temirdan yasalgan deb aytiladi. Ko’prikdan o’tish qahramonning jasorati va kuchini sinovdan o’tkazadi. Bylinalarda, masalan Ilya Muromets haqidagi rivoyatlarda, Kalinov ko’prigi qahramonning dushman bilan yuzlashadigan, sinovdan o’tadigan muhim joy sifatida uchraydi."
  },
  {
    letter: "K",
    title: "Kamikadze",
    text: "(yaponcha - “Ilohiy shamol”) — barcha dushmanga talofat yetkazish maqsadida oʻz joniga qasd qiluvchi koʻngillilarni (nafaqat uchuvchilarni) anglatadi. Atama dastlab moʻgʻul xoni Xubilayning Yaponiya qirgʻoqlariga yaqinlashgan kemalarini ikki marotaba yoʻq qilgan tayfunning nomi sifatida uchraydi. 20-asrning oʻrtalarida “kamikadze” soʻzi Tinch okeanida borayotgan urushning soʻnggi bosqichida yaponlarning dushman kemalariga oʻz samolyoti bilan hujum qilib, halok boʻlgan uchuvchilariga nisbatan qoʻllanila boshlandi."
  },
  {
    letter: "K",
    title: "Kamuflyaj",
    text: "Tirik mavjudotlar yoki buyumlarning tashqi ko’rinishini qaytarib, atrof-muhitga moslashtirib, ko’zga kamroq tashlanadigan yoki butunlay ko’rinmas qilish vositasi. Tabiatda bu himoya mexanizmi hayvonlarda tabiiy ravishda (masalan, yo’lbarsning chiziqlari, kapalak qanotidagi ranglar,) uchraydi. Harbiy sohada esa maxsus rang va naqshlar yordamida askarlar, texnika yoki inshootlarni yashirish uchun qo’llaniladi. So’z fransuzcha camoufler — “yashirish” so’zidan olingan bo’lib, dastlab Birinchi jahon urushida keng qo’llana boshlagan."
  },
  {
    letter: "K",
    title: "Kandomblé",
    text: "Braziliyada shakllangan afro-braziliya dini bo’lib, u G’arbiy Afrika xalqlarining qadimiy e’tiqodlari va katolik an’analari uyg’unlashuvidan vujudga kelgan. Bu dinda tabiat va hayotning turli jihatlarini ifodalovchi Orishalar nomli ilohiy ruhlarga sig’iniladi. Marosimlar odatda baraban sadolari, qo’shiq, raqs va diniy trans holati bilan o’tkaziladi. Bugungi kunda Candomblé Braziliyaning eng mashhur an’anaviy dinlaridan biri hisoblanadi va ayniqsa Bahia shtatida keng tarqalgan."
  },
  {
    letter: "K",
    title: "Kapalak effekti",
    text: "sistemaga ta’sir ettirilgan har qanday sezilmas kichik ta’sir ham kelajakda aytib bo’lmas katta o’zgarishlarga olib kelishi mumkinligini bildiradi. Unga misol qilib Vudro Vilsonning 1919-yili Versalga Parij tinchlik konferensiyasiga kelganida bir yosh siyosatchidan uchrashish haqida so’ralgan maktubga rad javobini berishi bo’ladi.O’sha maktubi rad etilgan yosh siyosatchi Xo Shi Min edi.U yosh va g’oyalarga to’la yigit edi.U o’sha paytda faqatgina Vyetnamning mustaqilligini xohlagan va AQSH prezidentining ozgina yordamiga umid qilgan edi.Ammo rad javobini olgandan so’ng Xo Shi Min ning qarashlari o’zgaradi va u SSSRga keladi va kommunizm tarafdoriga aylanadi.Vyetnam Fransiyadan mustaqil bo’la olgach u kommunistik partiya tarafdorlarini boshlaydi va Vyetnam ikkiga bo’linib urush boshlaydi. Bu barcha ishlar V.Vilson biroz vaqtini o’sha yigitchaga ajratganida yuzaga kelmas edi."
  },
  {
    letter: "K",
    title: "Kapgra sindromi",
    text: "bu o’ziga xos psixopatologik kasallik bo’lib, unda bemor o’z yaqinlaridan kimnidir (eri, xotini, ota-onasi va hokazo) egizagi bilan almashtirib qo’yilgan deb o’ylaydi yoki notanish odamlarni tanish/qarindosh sifatida qabul qiladi. Ayrim hollarda bemor o’zi qilgan yomon ishlarni o’ziga juda ham o’xshovchi dublyor tomonidan sodir etilgan deb hisoblashi ham mumkin."
  },
  {
    letter: "K",
    title: "KAPIBARA",
    text: "Dunyodagi eng yirik kemiruvchi hayvon bo’lib, o’zining o’ta xotirjam tabiati va boshqa jonivorlar bilan “do’stsevarligi” tufayli internet yulduziga aylangan."
  },
  {
    letter: "K",
    title: "Kapoeyra",
    text: "Bu Braziliyada paydo bo’lgan jang san’ati bo’lib, unda jangovar harakatlar musiqa va raqs elementlari bilan uyg’unlashgan. U asosan afrikalik qullar tomonidan o’zlarini himoya qilish va madaniy meroslarini saqlash maqsadida shakllangan. Bugungi kunda kapoeyra sport, o’yin va san’atning o’ziga xos kombinatsiyasi sifatida dunyo bo’ylab mashhur."
  },
  {
    letter: "K",
    title: "Kardiogramma (kardio … va …gramma)",
    text: "Maxsus asbob yordamida yurak faoliyatini qayd qilish uchun qogʻoz yoki fotoplyonkaga yozib olingan egri chiziq. Tibbiyotda bu elektrokardiogramma EKG deb ataladi. U yurak urish ritmini, yurak mushaklarining holatini va yurakda mumkin bo’lgan muammolarni aniqlashda yordam beradi. Butun gavdaga tarqaluvchi yurak toklari (harakat toklari) EKG si gavdaning turli qismlari (koʻkrak qafasi, qoʻl va oyoqlar)ga oʻrnatilgan va elektrokardiografga ulangan elektrodlar bilan yozib olinadi."
  },
  {
    letter: "K",
    title: "Karies effekti",
    text: "bu savdoda ishlatiladigan termin bo’lib, bunda do’konlardagi tovarlar, oralarida bo’sh joylar qoldirilib javonlarga joylashtiriladi. Effekt, xaridorlarda ushbu tovarga katta talab mavjudligi fikrini paydo qilish va ayni damda javonlarda qolganini, tezroq xarid qilish hissini uyg’otish orqali ishlaydi."
  },
  {
    letter: "K",
    title: "Karl Gustav Yung (1875–1961)",
    text: "Shveytsariyalik psixiatr va faylasuf. U analitik psixologiya asoschisi sifatida inson ruhiyatini chuqur o’rganib, yangi tushunchalarni ilm-fanga olib kirdi. U “kollektiv ongsizlik” va arxetiplar nazariyasini ishlab chiqib, butun insoniyatga xos ramz va timsollarni izohladi. Shuningdek, persona, soyalar va individuatsiya kabi muhim g’oyalarni ilgari surdi. Yung qarashlari psixologiyadan tashqari san’at, adabiyot va mifologiya tadqiqotlariga ham katta ta’sir ko’rsatdi.Mashhur so’zi:“O’zini bilmagan odam boshqasini ham tushunolmaydi.”"
  },
  {
    letter: "K",
    title: "Karl Landshteyner (1868–1943)",
    text: "Avstriyalik shifokor va immunolog. U “Qon guruhlarini kashf qilgan inson” sifatida tarixda qoldi."
  },
  {
    letter: "K",
    title: "Karl Saganning “Olmali pirogi”",
    text: "Mashhur astronom va ilm-fan targ’ibotchisi Karl Sagan shunday degan”Agar noldan olmali pirog tayyorlamoqchi bo’lsangiz, avvalo butun olamni yaratishingiz kerak.” Bu ibora uning “Kosmos” kitobi va teleseriali orqali mashhur bo’lgan. Ma’nosi shuki, oddiy ko’ringan narsalar ham koinotdagi murakkab jarayonlar mahsulidir. Olma, un, shakar va boshqa barcha mahsulotlar yulduzlarda hosil bo’lgan kimyoviy elementlardan tashkil topgan. Demak, hatto bitta olmali pirog ortida ham butun koinotning tarixi mujassam."
  },
  {
    letter: "K",
    title: "Karlos Heskok",
    text: "(1942-1999) — Aqsh snayperi 🇺🇸 Karlos Norman Heskok II — Aqsh dengiz piyodalar korpusi tarixidagi eng mashhur snayperlardan biri. U ayniqsa Vietnam urushi davridagi jasorati bilan tanilgan. 93 ta tasdiqlangan nishon. “White Feather” (Oq pat) laqabi bilan tanilgan. U shlyapasiga oq pat taqib yurardi. Shu sabab dushman askarlari uni shu nom bilan atagan. U dushman snayperi bilan duelda(1km) durbin orqali qaraganida dushman snayperining optikasini ko’radi va to’g’ri optikaning ichiga o’q uzadi o’q optikadan o’tib raqib ko’ziga tegadi. Uning sharafiga “Springfield Armory M25 White Feather” nomli snayper miltig’i yaratilgan."
  },
  {
    letter: "K",
    title: "Karmana",
    text: "Navoiy viloyatidagi shahar. Shu nomdagi tuman markazi. Shahar maqomini 1979-yilda olgan. O’rta asr manbalarida Kermine nomi bilan tilga olingan. Toponim etimologiyasi haqida turli xil qarashlar mavjud. Tarixchi olim V.Bartold shahar nomini “ki Armaniya” — “Armanistonga o’xshash”, “Armanmonand” deb izohlaydi. Ba’zi manbalarga ko’ra, eski turkiy tildagi “karman” — “qishloq” so’zi toponim nomi paydo bo’lishiga asos bo’lgan. Lekin ko’plab ishonchli manbalarda “Karmana” nomi eski so’g’diy tilidagi “Xarmana” — ” “Katta saroy” so’zi asosida vujudga kelgani ta’kidlangan."
  },
  {
    letter: "K",
    title: "Karnak toshlari",
    text: "Stounxendj haqida hamma eshitgan ammo Karnak toshlari haqida juda kam odam biladi. Fransiyaning Bretan regionidagi Karnak shahri yaqinidan topilgan 3000 ga yaqin megalitdan iborat ushbu yodgorlik haqidagi afsonaga ko’ra, har bir tosh sehrgar Merlin tomonidan toshga aylantirilgan Rimlik legioner ekan. Ushbu hodisani tushuntirishga qaratilgan ilmiy farazlar toshlar murakkab zilzila natijasida shunday holatga kelganini ta’kidlaydi."
  },
  {
    letter: "K",
    title: "Kart-blansh",
    text: "fransuzcha “carte blanche” - toza, bo’sh xujjat. 1. Kimgadir biror ishni amalga oshirishda cheksiz vakolat berish, harakatlar uchun to’liq erkinlik. 2. Bir shaxs (rahbar) tomonidan imzolangan, boshqa bir shaxsga (vakilga) o’z xohishiga ko’ra matn bilan to’ldirish huquqini beradigan blanka."
  },
  {
    letter: "K",
    title: "Kartoshka urushi",
    text: "(Kartoffelkrieg) *. 1777-78-yillarda Prussiya qiroli Fridrix II Bavariya taxti uchun urushda qatnashishga qaror qiladi. Ammo, ushbu urushda kichik harbiy to’qnashuvlarni hisobga olmasa, deyarli katta urushlar yuz bermaydi. Nemislar bu urushni “kartoshka urushi” deb atashadi. Chunki, sifatsiz ta’minot tufayli askarlar kartoshka terib yeyishga majbur bo’lishgan."
  },
  {
    letter: "K",
    title: "Kasparov Garri Kimovich",
    text: "Shaxmat tarixidagi eng buyuk grossmeysterlardan biri bo’lib, u shaxmat bo’yicha 13-jahon chempioni hisoblanadi. 1985-yilda 22 yoshida Anatoliy Karpovni mag’lub etib, eng yosh jahon chempioniga aylangan. 20 yil davomida dunyoning eng kuchli shaxmatchisi bo’lib qolgan. 1997-yilda IBM kompaniyasining sun’iy intellekti — Deep Blue bilan tarixiy o’yin o’ynagan. Kasparov 2005-yilda professional shaxmatdan nafaqaga chiqib, siyosiy faoliyat va inson huquqlari himoyasiga o’tgan."
  },
  {
    letter: "K",
    title: "Kastelyerlar – jonli minoralar",
    text: "Kastelyerlar Ispaniyaning Kataloniya viloyatida an’anaviy “inson minoralari” (castells) quruvchi guruhlardir. XX asr o’rtalarida Ispaniyada “Kastelyers de Vilafranka” uyushmasiga asos solindi, u o’z oldiga qadimiy Kataloniyaga xos Ball de Valencians (“Valensiya raqsi”) an’anasini qayta tiklash maqsadini qo’ygan edi. Jamoalar birgalikda bir necha qavatli inson piramidalarini quradilar, eng yuqorisiga esa bolalar chiqadi.Odatga muofiq bola qoʻlini baland koʻtarishi kastelni qurish tugallanganligini bildiradi."
  },
  {
    letter: "K",
    title: "Kataklizm",
    text: "dahshatli tabiiy ofatlarni ifodalovchi termin."
  },
  {
    letter: "K",
    title: "Katarzis",
    text: "asarni idrok etish jarayonida qo’rquv, achinish kabi hislar orqali ruhiy poklanish."
  },
  {
    letter: "K",
    title: "Katta og’a tushunchasi",
    text: "“Katta og’a” (“Big Brother”) tushunchasi ingliz yozuvchisi Jorj Oruellning 1984 romanidan kelib chiqqan. Unda Katta og’a totalitar tuzumning ramzi sifatida tasvirlanadi va hamma joyda kuzatuv olib boruvchi hukumat nazoratini anglatadi. Bugungi kunda bu atama davlat yoki texnologik kompaniyalarning shaxsiy hayot ustidan haddan tashqari nazoratini ifodalash uchun ishlatiladi. Masalan, kuzatuv kameralarining ko’payishi, internetdagi ma’lumotlar yig’ilishi va sun’iy intellekt orqali monitoring shular jumlasidandir."
  },
  {
    letter: "K",
    title: "Kaydzen",
    text: "(yoki «kaizen») — yaponcha so’z bo’lib, «takomillashtirish» yoki «yaxshilikka tomon o’zgarish» ma’nosini anglatadi. U «kai» (o’zgarish) va «zen» (yaxshi) so’zlarining birikmasidan iborat. Biznesda bu — vaqt o’tishi bilan samaradorlikni oshirish maqsadida barcha xodimlarni jalb qilgan holda kichik, ammo izchil o’zgarishlarni amalga oshirishga qaratilgan boshqaruv strategiyasidir."
  },
  {
    letter: "K",
    title: "Kenotaf (yun. kenotaphion)",
    text: "boʻsh qabr) — Marhum dafn etilgan joyda bo’lmagan qabr toshi boʻlib ramziy qabr vazifasini bajaradi. Odatda, u urushda halok boʻlganlar, bedarak yoʻqolganlar yoki uzoqda vafot etganlar xotirasini abadiylashtirish uchun qoʻyiladi."
  },
  {
    letter: "K",
    title: "Kichkina xo’jayin sindromi",
    text: "bu kasallikka chalingan odamlar kichik bir lavozimni egasi bo’lsada, undan maksimal darajada foydalanib, o’zini doimo namoyishni qilishni sevishadi. Ular har safar o’zlarini qanday lavozimda ekanliklarini bot-bot eslatib turishadi. O’zlaridan yuqori lavozimdagi odam qarshisida odatda bu kasallik sezilmaydi. Ushbu sindrom Vaxter sindromi, garderobchi sindromi, shveytsar sindromi kabi nomlarga ega."
  },
  {
    letter: "K",
    title: "Kidalt",
    text: "(inglizcha”kid” - “bola” va “adult” - “katta”) — Yoshi katta bo’lsa-da o’zining bolalarga xos qiliqlarini yo’qotmagan odamlarni ifodalash uchun o’ylab topilgan termin. Kidaltlar katta bo’lishsa-da, multfilm ko’rish, komiks yig’ish va o’yinchoq o’ynashda davom etadilar. Ushbu holat erkaklarda ham, ayollarda ham uchrashi mumkin. Ko’proq erkaklarda uchraydi. Ko’plab kidaltlarga infantilizm, ya’ni bolalarga xos xatti-harakatlar — yengiltaklik, soddalik, injiqlik, mas’uliyatni o’z zimmasiga olishni istamaslik kabilar ham xosdir. Psixologlar tilida kidaltlik “Piter Pen sindromi” deb ham ataladi."
  },
  {
    letter: "K",
    title: "Kilimanjaro",
    text: "Afrikadagi eng baland tog’ tizmasi boʻlib, dengiz sathidan 5895 metr balandlikda joylashan. Eng qizig’i, bu tog’ vulqon bo’lishiga qaramay, hozirda u faol emas va cho’qqisida doimiy qor qoplamasi bor — bu Ekvator zonasida qor mavjud bo’lgan noyob joylardan biri hisoblanadi. U 52 uchta asosiy konusdan iborat: Kibo, Mawenzi va Shira. Eng balandi — Kibo cho’qqisi, aynan mana shu nuqta Afrikaning “tomi” deb ataladi."
  },
  {
    letter: "K",
    title: "Kindertransport",
    text: "1938–1939 yillarda natsistlar zulmi ostida qolgan minglab bolalarni qutqarish uchun maxsus operatsiya amalga oshirildi. Bu operatsiya Kindertransport deb atalgan. 1938-yilda Adolf Gitler siyosati tufayli yahudiylarga qarshi ta’qib kuchaydi. Shu sababli Britaniya hukumati bolalarni qabul qilishga rozi bo’ldi. Asosan Germaniya, Avstriya va Polsha hududlaridan bolalar olib chiqildi. Jami taxminan 10 000 nafar bola qutqarilgan. Ular poyezd va kemalar orqali Buyuk Britaniyaga olib kelingan. Ser Nicholas Winton 669 nafar bolani shaxsan qutqarishga yordam bergan. Uni keyinchalik “Britaniyalik Shindler” deb atashgan. Kindertransport minglab bolalarning hayotini saqlab qolgan va insonparvarlik tarixidagi eng muhim qutqaruv operatsiyalaridan biri hisoblanadi."
  },
  {
    letter: "K",
    title: "Kinizm",
    text: "Qadimgi yunon falsafiy oqimlaridan biri bo’lib, insonning haqiqiy baxti va erkinligi tabiiy, sodda hayot kechirishda deb bilish. Asosiy g’oyasi — jamiyatning sun’iy qoidalari, boylik va shon-shuhratdan voz kechib, o’zini o’zi yetarli qilish. Mashhur vakili Diogen bo’lib, u bochkada yashagan va jamiyat odatlarini masxara qilgan."
  },
  {
    letter: "K",
    title: "Kinofobiya",
    text: "Bu itlardan kuchli va nazorat qilib bo’lmaydigan qo’rquvdir. Ushbu fobiya bolalikdagi salbiy tajriba (masalan, it tomonidan qo’rqitilgan yoki tishlangan) sababli rivojlanishi mumkin. Ba’zida esa bu qo’rquv boshqalarning salbiy hikoyalari yoki ommaviy axborot vositalaridagi tasvirlar orqali ham shakllanadi. “Kinofobiya” atamasi ilk bor 1955-yilda amerikalik psixiatrlar tomonidan klinik kuzatuvlar asosida fobiyalar tasnifiga kiritilgan. U yunoncha “kyon” (κύων – it) va “phobos” (φόβος – qo’rquv) so’zlaridan olingan."
  },
  {
    letter: "K",
    title: "KINOLOGIYA",
    text: "bu itlar haqidagi fan bo’lib, ularning zotlari, xulqi, o’qitilishi va xizmatdagi qo’llanilishini o’rganadi."
  },
  {
    letter: "K",
    title: "Kipu yozuvi",
    text: "Qadimgi inklar tomonidan axborot saqlash va uzatish uchun ishlatilgan tugunli yozuv tizimidir. Ikki yarim minggacha osilgan iplarni o’z ichiga olishi mumkin boʻlgan bu yozuv imperator yo’llari bo’ylab chaski choparlari tomonidan xabarlarni uzatish uchun, shuningdek, taqvim , topografik tizim , soliqlar , qonunlar va boshqa maqsadlardan foydalanilgan."
  },
  {
    letter: "K",
    title: "Kitsune",
    text: "Yapon mifologiyasida sehrli kuchlarga ega bo’lgan aqlli tulki ruhi. U oddiy tulkidan farqli ravishda, inson qiyofasiga kira oladi va ko’pincha chiroyli ayol bo’lib odamlarni aldash yoki sinash uchun paydo bo’ladi. Rivoyatlarga ko’ra, Kitsune qancha yashasa, shuncha kuchli bo’ladi — eng qudratlilari 9 dumga ega bo’lib, “kyūbi no kitsune” deb ataladi. Ba’zilari odamlarni himoya qiladi va omad olib keladi, boshqalari esa ularni aldab, falokatga olib keladi."
  },
  {
    letter: "K",
    title: "Kivi qushi",
    text: "Yangi Zelandiyaga xos noyob qush bo’lib, u uchish qobiliyatiga ega emas. Uning patlari mo’ynaga o’xshaydi, qanotlari esa juda kichik va tashqaridan ko’rinmaydi. Kivining burni uchi juda sezgir bo’lib, oziq-ovqatni hid orqali topishiga yordam beradi. Maori tilidagi kivi soʻzi odatda qoʻngʻiroq ovozi “taqlididan kelib chiqqan” deb qabul qilinadi.Uzun qiyshiq tumshugʻi va jigarrang tanasi bilan jingalak kiviyga oʻxshaydi. Kivi Yangi Zelandiyaning ramzi sifatida tan olingan."
  },
  {
    letter: "K",
    title: "Klakyorlar",
    text: "Teatr, konsert yoki boshqa ommaviy tadbirlarda sun’iy tarzda ijobiy reaksiya (qarsak, kulgi, olqish) bildirish uchun yollangan tomoshabinlardir. Ular tomoshabinlarning umumiy taassurotiga ta’sir qilish maqsadida ishlatiladi. “Klakyor” so’zi fransuz tilidagi claque — “qarsak” so’zidan olingan."
  },
  {
    letter: "K",
    title: "Klaustrofobiya",
    text: "Bu yopiq yoki tor joylarda bo’lishdan kuchli qo’rquv hissi. Bu holat odamda lift, samolyot, yoki derazasiz xonalarda paydo bo’lishi mumkin. Klaustrofobiyadan aziyat chekayotganlar yurak urishi tezlashishi, nafas qisishi yoki vahima xurujini boshdan kechirishadi. Klaustrofobiya atamasi birinchi marta 1879-yilda fransuz psixiatori Benjamin Ball tomonidan fobiyalarni tasniflash doirasida ishlatilgan. U bu atama bilan tor va yopiq joylarda paydo bo’ladigan irratsional qo’rquvni ifodalagan."
  },
  {
    letter: "K",
    title: "Klepsidra",
    text: "(yun. klepto - “o’g’irlash” va hydor - “suv”) - suv soati bo’lib, qadimgi davrlardan beri vaqt o’lchash uchun ishlatilgan mexanizmdir. Uning ishlash shakli qum soatiga o’xshaydi, lekin suv asosida. Oddiy shaklda klepsidra 2 idishdan iborat bo’lib, suv asta-sekin yuqoridan pastga oqadi. Pastki idishdagi suv miqdori vaqt o’tishini ko’rsatadi. Qadimgi Misr, Yunoniston va Rimda sud jarayonlarida nutq muddatini o’lchash yoki tunda vaqtni o’lchash uchun ishlatishgan."
  },
  {
    letter: "K",
    title: "KLEPTOMANIYA",
    text: "Moddiy ehtiyoj yoki shaxsiy foyda ko’zlamasdan, biron bir narsani o’g’irlashga nisbatan yuzaga keladigan patologik va nazorat qilib bo’lmaydigan moyillik."
  },
  {
    letter: "K",
    title: "Kleyne-Levin sindromi",
    text: "nisbatan kam uchraydigan ushbu nevrologik kasallik uyquning haddan tashqari ko’payib ketishi (gipersomniya) bilan tavsiflanadi. Unga chalingan odamlar kuniga 18 soatgacha (va undan ortiqroq ham) uxlashi mumkin. Ular faqat ovqatlanish va hojatga chiqish uchungina uyg’onadilar. Agar uyquga kimdir halal bersa, asabiy va agressiv munosabatda bo’lishadi. Ushbu sindrom odatda o’smirlik davrida yuzaga keladi."
  },
  {
    letter: "K",
    title: "Kliffxenger",
    text: "kino yoki adabiyotda syujet liniyasini yaratish uslubi, bunda asar eng kulminatsion nuqtada tugab qoladi. Bu uslub asar mualliflari tomonidan o’quvchi yoki tomoshabinni keyingi qismga qiziqtirish uchun ishlatiladi. Kliffxengerning eng yorqin misolini “Ming bir kecha” ertagida ko’rish mumkin. Unda Shahrizoda o’z umrini saqlab qolish uchun tong otar paytida ertakni eng qiziq joyida to’xtatadi."
  },
  {
    letter: "K",
    title: "Knyaz Gvidon",
    text: "Aleksandr Pushkinning “Shoh Saltan haqidagi ertak” asarida Knyaz Gvidon — adolatli, jasur va oqilona qahramon sifatida tasvirlanadi. U hasadgo’ylar tuhmatiga uchragan onasi bilan birga yog’och bochkaga solinib, dengizga uloqtiriladi. Mo’jiza yuz beradi: bochka orolga kelib uriladi va u yerda Gvidon ulg’ayib, dono hukmdorga aylanadi. Gvidon oqqush malikani qutqarib, sehrli yordamga erishadi. U turli jonzotlarga aylanib, otasi Shoh Saltan saroyiga yashirin boradi va nihoyat haqiqatni ochib beradi. Ertak adolat tantanasi va baxtli yakun bilan tugaydi."
  },
  {
    letter: "K",
    title: "Ko’k gripp",
    text: "AQShda politsiyachilarning ish tashlashi noqonuniy bo’lgani uchun ular oldindan kelishib, “kasallik” sababli ishlamagan kunlarini “Ko’k gripp” deb atashadi. Bu ibora politsiya formasi rangidan olingan. Shuningdek, o’t o’chiruvchilarning ish tashlashi — “Qizil toshma”, o’qituvchilarniki esa “Bo’r talvasasi” deb yuritiladi."
  },
  {
    letter: "K",
    title: "Kobra effekti",
    text: "Muammoni hal qilish uchun qabul qilingan yechim aksincha, uni yanada ogʻirlashtiradigan holatni ifodalaydi. Hindistonda Britaniya mustamlakachiligi davrida zaharli kobralarni yoʻq qilish uchun har bir oʻldirilgan ilon uchun mukofot tayinlanadi. Dastlab ilonlar soni kamayadi, biroq odamlar mukofot uchun kobralarni sunʼiy ravishda koʻpaytira boshlaydi. Mukofot bekor qilingach, yetishtirilgan ilonlar yovvoyi tabiatga qoʻyib yuboriladi va natijada kobralar soni yanada oshib ketadi."
  },
  {
    letter: "K",
    title: "Kokkeyne – Orzular mamlakati",
    text: "Oʻrta asr Yevropasida xalq ogʻzaki ijodida tilga olingan Kokkeyne (yoki Cockaigne) — bu ish qilish shart boʻlmagan, barcha neʼmatlar o’z-o’zidan keladigan hayoliy mamlakat edi. Bu utopik tasvir o’sha davr og’ir mehnat va qashshoqligiga javoban paydo bo’lgan xalq orzusining mahsuli edi. Kokkeyne — orzular, dangasalik va boylik timsoli sifatida tarixda qoldi."
  },
  {
    letter: "K",
    title: "Koko Shanel (1883-1971)",
    text: "Zamonaviy ayollar modasining asoschilaridan biri. 1883-yilda Fransiyada dunyoga kelgan. Kambag’al hayotga qaramay, o’z mehnati va didi bilan butun dunyoni zabt etdi. Ayollar uchun korsetsiz, qulay liboslar, shimlar va erkaklar uslubidagi kiyimlarni ommalashtirdi. U yaratgan “kichik qora ko’ylak” va Chanel №5 atiri moda tarixiga abadiy kirgan. 1920-yillardan boshlab u ayollarning o’ziga bo’lgan ishonchini oshirib, go’zallik me’yorlarini o’zgartirdi. Uning falsafasi oddiy edi: “Hashamat – bu qulaylikdir. Aks holda u hashamat emas.” Shanel brendi esa bugungi kungacha o’z ahamiyatini yo’qotmagan."
  },
  {
    letter: "K",
    title: "Kokteyl bazmi effekti",
    text: "odatda turli bazmlar, ko’plab odamlar va baland shovqin bilan o’tadi. Bunday holatlarda, qarshingizdagi inson bilan suhbatlashish deyarli imkonsiz. Kokteyl bazmi effekti deb, shovqin orasida, insonning e’tibori boshqa obyektda bo’lgan holatda ham, o’zi uchun kerakli ma’lumotni ilg’ab olish qobiliyatiga aytiladi. Effekt, britaniyalik olim Edvard Kollin Cherrining 1953-yilda o’tkazgan tajribalari evaziga vujudga kelgan. Olimlar tajribalar evaziga, “kokteyl bazmi effekti”ni qurbaqalar, qaldirg’ochlar va chumchuqlarda ham aniqlashgan."
  },
  {
    letter: "K",
    title: "Kolorado",
    text: "ispancha qizil ranga boʻyalgan degani"
  },
  {
    letter: "K",
    title: "Komadzin",
    text: "qizil sochli ayollar"
  },
  {
    letter: "K",
    title: "Konklav",
    text: "Rim-katolik cherkovida yangi papa saylash uchun kardinal ruhoniylar maxsus yopiq majlisga yig’ilishi. So’zning ma’nosi lotincha — “yopiq xonada” degan maʼnoni anglatadi.Kardinallar tashqi dunyodan uzilib, faqat ovoz berish va ibodat bilan shug’ullanishadi. Qaror qabul qilingach, yangi papa tanlanganini oq tutun orqali e’lon qilishadi."
  },
  {
    letter: "K",
    title: "Korsakov sindromi",
    text: "rus psixiatri Sergey Korsakov tomonidan aniqlangan amnestik sindrom yoki organik amnestik sindromning bir turi. Bu sindrom B1 vitamini yetishmasligi yoki miya shikastlanishi tuyfali yuzaga kelishi mumkin. Bunda, asosan, xotira buziladi. Bemor hozirgina boʻlib oʻtgan voqea-hodisalarni eslay olmaydi, aksincha, yillar ilgari boʻlib oʻtgan voqealarni xotirasida saqlab qoladi. U qayerda turganini, vaqt, sana, atrofidagi kishilarni ismni toʻgʻri aytib berolmaydi. Oʻzi yashab turgan xonasi va joyini adashtiradi, bir daqiqa oldin aytgan soʻzlarini darrov yodidan chiqarib qoʻyadi. Bemorning bilim darajasi, malakasi, kasb-mahorati saqlanib qolgan holda, yangi narsalarni oʻzlashtira olmaydi. Soxta xotira, tez charchash va lohaslik alomatlari kuzatiladi. Korsakov 55 sindromi shuningdek yuqumli kasalliklar, zaharlanish va alkogolizm natijasida ham yuz berishi mumkin."
  },
  {
    letter: "K",
    title: "Kotar sindromi",
    text: "(tirik murda sindromi) — kamdan-kam uchraydigan ruhiy hastalik bo’lib, undan zararlangan odam o’zini o’lgan, umuman mavjud emas deb yoki bo’laklab tashlangan hamda ichki a’zolari yo’qolgan deb o’ylaydi. Yuz nafar bemordan olingan na’munalar shuni ko’rsatdiki, o’zining mavjudligini inkor etish Kotar sindromi bilan bog’liq holatlarning 45 foizida uchraydi; qolgan 55 foiz bemorda esa boqiy hayot haqida hom hayollar bo’ladi."
  },
  {
    letter: "K",
    title: "Koulrofobiya",
    text: "masxarabozlardan qo’rqish kasalligi. Ushbu fobiya o’tgan asrda paydo bo’lgan. O’sha davrda masxaraboz obrazidan odamlarni qo’rqitishda ham foydalanishgan. Aynan koulrofobiya Stiven Kingni mashxur “U”(“Оно”) asarini yozishga ilhomlantirgan. Qiziqarli fakt: 1990-yilda “U” romani asosida suratga olingan filmda masxaraboz Pennivayz rolini ijro etgan Tim Karri ham butun umri davomida koulrofobiyaning og’ir shaklidan aziyat chekkan."
  },
  {
    letter: "K",
    title: "Koʻrinmas qoʻl nazariyasi",
    text: "Ilk marotaba bu termin Adam Smithning “Axloqiy hissiyotlar nazariyasi” asarida ishlatiladi. Unga ko’ra, har bir inson faqat o’z manfaatini ko’zlab harakat qilsa ham, bozordagi raqobat va talab-taklif kuchi orqali jamiyat uchun foydali natijalar yuzaga keladi. Bu jarayon “ko’rinmas qo’l” tomonidan boshqarilayotgandek tasvirlanadi."
  },
  {
    letter: "K",
    title: "Krakelyur",
    text: "(fr. craquelure) — rassomlik asari yuzasida vaqt o’tishi bilan paydo bo’ladigan mayda yoriqlar tarmog’i. Asosan: moybo’yoqli rasmlar, laklangan yog’och buyumlar va boshqa san’at asarlarida uchraydi. Sababi: bo’yoq, grunt va lak qatlamlarining vaqt o’tishi bilan qurishi, qisqarishi va harorat/namlik o’zgarishlariga turlicha javob berishi. Ko’rinishi: yuzada o’rgimchak to’riga o’xshash mayda chiziqlar hosil qiladi. San’atshunoslikda ahamiyati: krakelyurning turi va shakli asarning yoshi, saqlanish sharoiti va restavratsiya tarixini aniqlashda yordam berishi mumkin. Muhim: krakelyurning o’zi asarning qadimiyligini mutlaq isbotlamaydi, chunki sun’iy ravishda ham hosil qilish mumkin. Termin: craquelure → fransuzcha craqueler — «yorilmoq, darz ketmoq»."
  },
  {
    letter: "K",
    title: "Krematoriy",
    text: "bu krematsiya amalga oshiriladigan maxsus bino. Unda pechlar, vidolashuv zallari va ekologik xavfsizlikka mo’ljallangan texnologiyalar mavjud. AQShning Kaliforniya shtatidagi Forest Lawn krematoriyasida Michael Jackson 2009-yilda vafot etgach, krematsiya qilinib, oʻsha yerga dafn etilgan."
  },
  {
    letter: "K",
    title: "Krematsiya",
    text: "Jasadni an’anaviy tarzda ko’mish o’rniga olovda yoqish orqali dafn qilish usuli. Bu usul Hindistonda, Yaponiyada, Yevropaning ayrim davlatlarida keng tarqalgan. Krematsiyadan so’ng qolgan kul odatda urnaga solinadi yoki tabiatga sochiladi."
  },
  {
    letter: "K",
    title: "Krinolin",
    text: "Kiyim ostidagi ramka. XIX asrda ayollar kiyimida mashhur bo’lib, ular bir nechta yubka kiyish o’rniga, faqat krinolinni kiyishni boshladilar. 1885-yilda Sara Enn Xenli ismli qiz 75 metr balandlikdan yiqilib tirik qolgan, chunki krinolin parashyut vazifasini bajargan edi. Krinolin, shuningdek, hazillar obyektiga aylangan – o’sha davr odamlari uni ichiga ayol solingan qafasga qiyoshlashgan."
  },
  {
    letter: "K",
    title: "Kriptonit",
    text: "DC Comicsning Supermen haqidagi hikoyalarida uchraydigan fantastik material. Kripton sayyorasidan kelib chiqqan yashil kristall bo’lib, Supermenga va boshqa kriptoniyaliklarga 56 halokatli ta’sir ko’rsatadi, zaiflashtiradi. Kriptonitning qizil va oltin kabi turlari ham mavjud boʻlib, uning nurlanishi faqat qo’rg’oshindan o’tolmaydi. Supermenning mashhurligi tufayli kriptonit “Axillesning tovoni” bilan sinonim boʻlgan zaiflik ramziga aylangan."
  },
  {
    letter: "K",
    title: "Kristofer Nolan ning filmlari",
    text: "The Dark Knight (2008) Inception (2010) Interstellar (2014) Memento (2000) Dunkirk (2017)"
  },
  {
    letter: "K",
    title: "KU-KLUKS-KLAN (KKK)",
    text: "1865-yildan AQSh da faoliyat yuritib kelayotgan, irqchilik, qora tanlilarga mutloq nafrat va oq tanli aholi ustunligini kuch ishlatib ta’minlash g’oyalarini targ’ib qiluvchi terroristik tashkilot. Jamiyatni fuqarolar urushida magʻlub bo’lgan sobiq askarlar tashkil qilgan. Nomi yunoncha Kuklos(doira), lotincha Cucullus(kapyushon) yoki qurolni qayta o’qlash tovushiga qiyoslanishidan kelib chiqqan, degan versiyalar bor. KKK harakatlaridan oldin ogohlantirish sifatida bargli eman novdasi, qovun yoki apelsin urug’larini yuborgan. Ogohlantirish olgan shaxs oʻz qarashlaridan voz kechishi yoki mamlakatni tark etishi, aks holda u hayotidan mahrum qilinishi mumkin bo’lgan."
  },
  {
    letter: "K",
    title: "Kuleshov effekti",
    text: "1920-yillarda sovet rejissyori Lev Kuleshov o’tkazgan tajriba kino tarixidagi eng mashhur psixologik hodisalardan biriga aylandi. U bir xil yuz ifodasiga ega aktyor tasvirini navbatma-navbat: ovqat,tobut,ayol tasvirlari bilan montaj qildi. Tomoshabinlar esa aktyor: och qolgan, qayg’urayotgan, quvonayotgan, deb o’ylashgan. Aslida esa aktyorning yuz ifodasi uchala holatda ham mutlaqo bir xil edi."
  },
  {
    letter: "K",
    title: "KULLINAN",
    text: "Insoniyat tarixida topilgan eng yirik va eng mashhur zargarlik sifatidagi tabiiy olmos. Ushbu ulkan qimmatbaho tosh 1905-yil 26-yanvarda Janubiy Afrikadagi “Premer” konida topilgan. Kon boshqaruvchisi Frederik Uells uni devor ichida yaltirab turganini ko’rib, dastlab oddiy shisha bo’lagi deb o’ylagan. Olmosning og’irligi 3106 karat (taxminan 621 gramm) bo’lib, u kon egasi ser Tomas Kullinan sharafiga nomlangan. Topilma o’zining benuqson shaffofligi va moviy-oq tusga egaligi bilan dunyoni hayratga solgan."
  },
  {
    letter: "K",
    title: "Kulrang uy",
    text: "Mark Shagal kartinasi"
  },
  {
    letter: "K",
    title: "Kulrangning 50 jilosi",
    text: "Erika Leonard Jeymsning asari"
  },
  {
    letter: "K",
    title: "Kumbxa Mela",
    text: "Hindistonda o’tkaziladigan eng yirik diniy festival. Bu festival hindu mifologiyasiga ko’ra, “Samudra mantxan” (Okeanni aralashtirish) afsonasi bilan bog’liq. Afsonada aytilganidek, devlar va hudolar “Amrita” (abadiylik eliksiri) to’ldirilgan Kumbxa uchun kurashishgan va uning to’rt joyiga tomchilari tushgan. Bu festivaldagi asosiy urf-odatlar: hajilar daryoga tushib, gunohlardan tozalanishadi, ruhiy yetakchilar ma’ruzalar o’qiydi va meditatsiyalar o’tkaziladi."
  },
  {
    letter: "K",
    title: "Kupertino effekti",
    text: "foydalanuvchi elektron tarzda jo’natgan biror bir matnni programma, foydalanuvchi aslida yozishni xohlamagan va matn logikasiga tushmaydigan boshqa bir so’z bilan almashtirganda yuzaga keladi. Ba’zida Kupertino effekti kulgili situatsiya sababchisi bo’lib qoladi. Nega aynan Kupertino effekti? Aytaylik T9 effekti yo boshqa birorta nom emas. Gap shundaki, inglizlar orasida, aslida lug’atda chiziqcha orqali yoziladigan co-operation so’zini chiziqchasiz yozish odat tusiga kirgan. Natijada, programma so’zni ko’p hollarda Kaliforniya shtatidagi shahar – Kupertinoga ( Cupertino ) avtomatik tarzda almashtirgan."
  },
  {
    letter: "K",
    title: "Kupidon oʻqi",
    text: "Rim mifologiyasida u Kupidon nomi bilan tanilgan va sevgi xudosini ifodalagan. Shuningdek, Venera va Marsning o’g’li edi. Kupidon hamma joyda sevgi tarqatadigan farishta sifatida tasvirlangan. Ammo haqiqat shundaki, har doim ham shunday bo’lmagan. U yonida ikki turdagi o’qlarni olib yurgan. Birinchisi oltin kaptar patlariga ega o’q bo’lib, uning zarbasi qabul qiluvchida kuchli va tezkor sevgini keltirib chiqargan. Ikkinchisi esa, qo’rg’oshin patlari bo’lgan o’qlar bo’lib, uning zarbasi befarqlikni keltirib chiqargan."
  },
  {
    letter: "K",
    title: "KVAMATSIYA",
    text: "An’anaviy dafn qilish yoki olov yordamida kremiya qilishga ekologik muqobil hisoblangan, suv va ishqor yordamida tanani parchalash jarayoni."
  },
  {
    letter: "K",
    title: "Kvartet masali",
    text: "Ivan Krilovning ushbu masalida to’rt hayvon — maymun, eshak, echki va ayiq musiqa chalishga urinadi. Bu ishni qila olmagach, o’tirgan joylari va u joyga mos musiqiy asbobni sabab deb o’ylashadi. O’zaro joylarini almashtirishadi, ammo baribir kuy yomon chiqadi . Sababi — ularning hech biri musiqani bilmasligi edi. Bu masalda muhim ijtimoiy g’oya ilgari surilgan: agar insonda bilim va layoqat bo’lmasa, faqat lavozim yoki joyni o’zgartirish bilan ish yuritib bo’lmaydi."
  },
  {
    letter: "K",
    title: "Kvasir qoni",
    text: "Skandinaviya mifologiyasidagi afsonalardan biri bo’lib, u “she’riyat asali” sifatida tanilgan. Aesir va Vanir ma’budlari urushdan so’ng yaratgan eng dono mavjudoti hisoblanadi. Ular tinchlik ramzi sifatida tupuklarini bir idishga to’plab undan Kvasir nomli donishmandni yaratishadi. Kvasirga hasad qilgan Fjalar va Galar uni o’ldirib, qonidan shoirlik ichimligi tayyorlashadi. Uni ichgan kishi shoirlik ilhomi, donolik va mukammal nutq mahoratiga ega bo’lgan."
  },
  {
    letter: "K",
    title: "Kviddich",
    text: "“Garri Potter” sehrli olamidagi sehrgarlar cho’p ustida uchib, maxsus to’plar bilan o’ynaydigan sport turi. O’yinda 7 nafar o’yinchi qatnashadi: chaserlar to’pni halqadan o’tkazib gol uradi, beaterlar raqibni chalg’ituvchi bludgerlarni nazorat qiladi, keeper darvozani himoya qiladi, seeker esa oltin snitchni tutib, jamoasiga 150 ball olib keladi. Sehr va tezlik uyg’unlashgan bu o’yin J. K. Rowling tasavvuridan yaralib, keyinchalik haqiqiy dunyoda “quadball” nomi bilan sport sifatida o’ynala boshlandi. 58 L"
  },

  // === L ===
  {
    letter: "L",
    title: "Lalisa Manobal (1997- yil, 27-mart)",
    text: "Tailandlik mashhur qo’shiqchi, raqqosa, model va aktrisa. Janubiy Koreyaning mashhur Blackpink guruhi a’zosi. 2021 - yilda “LALISA” yakkaxon albomi katta mashhurlikka erishgan. Eng mashhur qo’shiqlari: Money, Lalisa, Rockstar. Louis Vuitton, Bulgari va MAC Cosmetics kabi brendlar bilan ishlaydi."
  },
  {
    letter: "L",
    title: "Las Vegas",
    text: "AQShning Nevada shtatidagi eng yirik shaharlardan biri bo’lib, “Dunyoning qimor poytaxti” sifatida tanilgan. 1905-yilda asos solingan va 1931-yilda qimor o’yinlari qonuniylashtirilgach, tez rivojlangan. Las-Vegas, shuningdek, o’zining shahar shiori bilan mashhur: «Vegasda sodir bo’lgan narsa Vegasda qoladi»."
  },
  {
    letter: "L",
    title: "LASOS EFFEKTI (SALMON EFFECT)",
    text: "Insonlarning yillar o’tib, qanchalik uzoqqa ketishmasin yoki qanday muvaffaqiyatga erishishmasin, oxir-oqibat o’zlari tug’ilib o’sgan maskanga, ildizlariga va vataniga qaytib kelish hodisasini anglatuvchi psixologik hamda sotsiologik tushuncha."
  },
  {
    letter: "L",
    title: "Lasso",
    text: "Bu uzun ilmoqli arqon bo’lib, asosan, chorvachilik va chavandozlik bilan shug’ullanuvchilar tomonidan ishlatilgan. Undan chorva hayvonlarini ushlash, boshqarish yoki nazorat qilishda foydalanilgan. Materiali odatda teridan yoki mustahkam kanop- arqondan tayyorlangan. Uning bir uchida ilmoq (halqa) bo’lib, bu hayvonlarni ushlash uchun mo’ljallangan. Ilmoq bog’lab qo’yilganda oson tortilib, hayvonni mahkamlab oladi. Lasso ko’pincha kovboylar, janubi-g’arbiy AQSh hamda Lotin Amerikasi mintaqalaridagi chorvadorlar tomonidan ishlatilgan."
  },
  {
    letter: "L",
    title: "Laurel va Hardy",
    text: "1927 yildan 1955 yilgacha ingliz Sten Laurel (1890-1965) va amerikalik Oliver Xardi (1892-1957) dan iborat komediya jamoasi edi. Ovozsiz kino davrida jamoa sifatida o’z kareralarini boshlaganlar, ular osonlik bilan yangi so’zlashuvchi rasmlarga o’tishdi va o’zlarining shiddatli komediyalari bilan xalqaro miqyosda mashhur bo’lishdi. Laurelning xarakteri bechora va bolalarcha edi; Hardy hukmron va muloyim edi, lekin ikkalasi ham ajralmas do’st edi."
  },
  {
    letter: "L",
    title: "Lazurit",
    text: "qadimdan juda qadrlangan, to’q ko’k rangli qimmatbaho-yarim qimmatbaho tosh."
  },
  {
    letter: "L",
    title: "Le-Man",
    text: "soatlik poyga dunyoning eng qadimiy va nufuzli avtomobil poygalaridan biri bo’lib, 1923- yildan beri har yili Fransiyada o’tkazib kelinadi. Mashhur mashina sinflari: Hypercar - eng yuqori toifa (Ferrari, Toyota, Porsche), LMP2 - prototip mashinalar, LMGT3 - sport avtomobillarining trek uchun o’zgartirilgan versiyalari. Har bir mashina 3 nafar haydovchi tomonidan boshqariladi, bir haydovchi ketma-ket 4 soatdan ortiq hayday olmaydi. Poyga tarixidagi eng muvaffaqiyatli avtomobil brendi - Porsche(19 marta g’olib), eng ko’p g’alaba qozongan haydovchi - Tom Kristensen(9 marta g’alaba)."
  },
  {
    letter: "L",
    title: "Ledi Makbet effekti",
    text: "(shuningdek Pontiy Pilat sindromi deb ham ataladi) – psixologik hodisa bo’lib, u inson psixikasidagi aqliy va jismoniy poklik o’rtasidagi bog’liqlikni ifodalaydi. Sharmandalik va vijdon azobi tuyg’usini boshdan kechirgan odam gunohlarini yuvib ketkazishga intiladi. Effekt Uilyam Shekspirning Makbet pyesasi qahramoni Ledi Makbet sharafiga nomlangan. Asarda u qotillik sodir etganidan keyin qo’llaridagi qon dog’larini ko’rib, “Yo’qol, la’nati dogʻ!” – deb xitob qiladi. Makbet effekti tadqiqotchi psixologlar Chjun Chenbo va Kati Lilenkvist tomonidan 59 psixologik tajribada kashf etilgan va ular tomonidan 2006-yilda “Science” jurnalida chop etilgan maqolada tasvirlangan. Keyinchalik Chenbo va Lilenkvist eksperimental ravishda jismoniy va axloqiy poklik o’rtasidagi boshqa aloqalarni ham kashf etdilar. Bir qator tadqiqotlarga asoslanib, ushbu olimlar jamoasi psixologiyaga “axloqiy tozalash” tushunchasini kiritdilar. Quyidagi rasmda avstriyalik rassom Gabriel fon Maks ko’ylagi bilan qo’lini tozalashga urinayotgan Makbet xonimni tasvirlagan."
  },
  {
    letter: "L",
    title: "Leet",
    text: "(1337) Leet — bu ingliz tilidagi harflarni raqamlar va maxsus belgilar bilan almashtirib yozish usuli. Atama “elite” (elita) so’zidan kelib chiqqan. Dastlab u xakerlar va kompyuter subkulturalari orasida paydo bo’lgan. 1980–1990-yillarda: “BBS” tizimlarida ayrim so’zlar filtrlangan foydalanuvchilar filtrni chetlab o’tish uchun harflarni raqamlar bilan almashtira boshlagan – elite → 3l173 – hack → h4ck Shu tarzda “leet speak” shakllangan."
  },
  {
    letter: "L",
    title: "Lejen sindromi",
    text: "(‘’Mushukcha yig’lash’‘, “Qichqirayotgan mushuk” yoki “Mushuk chinqirig’i’’ sindromi): Sindrom fransuz pediatri va genetiki Jerom Lejen sharafiga nomlangan. U boshqa hammualliflar bilan bu kasallikni birinchi marta 1963-yilda tasvirlab bergan. Lejen sindromi bilan kasallanish har 3000 boladan 1 tasida uchraydi. Kasallik o’g’il bolalar va qizlarga bir xil darajada ta’sir qiladi. Bolalar 2500 grammgacha (hatto to’liq muddatli homiladorlik bilan ham) yoki undan kam vazn bilan tug’iladi."
  },
  {
    letter: "L",
    title: "LEND-LIZ (LEND-LEASE)",
    text: "Ikkinchi jahon urushi davrida AQSh tomonidan o’z ittifoqchilariga (asosan Buyuk Britaniya, SSSR, Xitoy va Fransiya) qurol-yarog’, harbiy texnika, oziq-ovqat va strategik xomashyolarni yetkazib berish bo’yicha davlat dasturi."
  },
  {
    letter: "L",
    title: "Leni Rifenshtal",
    text: "(1902–2003) — Gitler va fashizm gʻoyalarini ulugʻlovchi eng taʼsirli va texnik jihatdan mukammal tashviqot (propaganda) filmlarini suratga olgan daho nemis rejissyoridir. U Berlinda tugʻilib, 101 yoshida vafot etgan. (“Iroda tantanasi” (1935))"
  },
  {
    letter: "L",
    title: "Libritsid (Biblioklazm)",
    text: "Bu kitoblarni yoʻqotish yoki ataylab yo’q qilish, yoqish yoki yo’qotish jarayoni. Tarixda bu holat mafkuraviy va diniy sabablarga ko’ra ko’p kuzatilgan. Masalan, Aleksandriya kutubxonasining yo’q qilinishi, 1933-yilda natsistlar tomonidan kitoblarning ommaviy yoqilishi va inkvizitsiya davrida taqiqlangan asarlarning yo’qotilishi biblioklazmning yorqin misollaridir."
  },
  {
    letter: "L",
    title: "Likurg kubogi",
    text: "yorug’lik qaysi tomondan tushishiga qarab rangini qizildan yashilga o’zgartiruvchi idish. Hozirda Britaniya muzeyida saqlanuvchi buyumda Frakiya shohi Likurgning o’limi tasvirlangani sababli shunday nomlanadi. Afsonaga ko’ra Likurg vino ma’budi Dionisni haqorat qilgani sababli uzum poyalari tomonidan o’ldirilgan. Kubokning rang o’zgartirish effektiga uning tarkibidagi oltin va kumush nanozarralari mavjudligi sabab bo’ladi."
  },
  {
    letter: "L",
    title: "Lilian Tod",
    text: "Amerikalik ixtirochi va aviatsiya kashshoflaridan biri bo’lib dunyodagi birinchi ayol samolyot konstruktori sifatida tanilgan. U samolyot dizayniga oid chizmalar ishlab chiqqan va 1906- yilda ilk ayol samolyot konstruktori sifatida tan olingan. 1909- yilda o’zi yaratgan samolyot modelining to’liq hajmdagi versiyasini qurishga muvaffaq bo’ladi."
  },
  {
    letter: "L",
    title: "Lima sindromi",
    text: "Stokgolm sindromining teskari versiyasi boʻlib, garovga oluvchi tomonidan jabrlanuvchiga nisbatan xayrixohlik vujudga kelishi tushuniladi. Bunday holatda jinoyatchi hatto garovga olingan shaxsni ozod qilishi yoki uni sheriklaridan himoya qilishi mumkin. Ushbu hodisa 1996-yilda Lima (Peru)dagi Yaponiya elchixonasi bilan sodir bo’lgan voqea sharafiga nomlangan boʻlib, o’sha voqeadan ikki hafta o’tgach, terrorchilar garovga olinganlarning deyarli yarmini ozod qilishgan."
  },
  {
    letter: "L",
    title: "Lixtenberg figuralari",
    text: "Dielektrik yuzalarga yuqori kuchlanish berilganda hosil bo’ladigan elektr naqshlaridir. Ularni 1777-yilda nemis fizigi Jorj Lixtenberg kashf etgan. Lixtenberg nomi yana bir paradoksal tasavvur — “Lixtenberg pichog’i” bilan ham bog’liq: bu pichoqda na tig’, na tutqich bor. Shunga qaramay, u 19 yildan beri ishlatiladi va hech qachon eskirmaydi. Bu fikr — mavjudlik va ma’nosizlik chegarasidagi falsafiy hazildir"
  },
  {
    letter: "L",
    title: "London sindromi",
    text: "Bu Stokgolm sindromiga zid psixologik holat bo’lib, unda garovga olingan shaxs bosqinchilarga nisbatan jangari, tajovuzkor va qarshilik ko’rsatuvchi munosabatda bo’ladi. 1980-yilda Eronning Londondagi elchixonasi bosib olinganda, garovga olingan diplomat Abbos Lavasani bosqinchilar bilan hamkorlik qilishdan bosh tortadi. U doimiy ravishda ular bilan bahslashadi va yakunda o’ldiriladi. Ushbu voqea London sindromi atamasiga asos bo’lgan."
  },
  {
    letter: "L",
    title: "London yong’ini",
    text: "1666-yil 2–6-sentabr kunlari Angliya poytaxti Londonda sodir bo’lgan ulkan yongʻin boʻlib, 2-sentabr kuni ertalab, Pudding Lane ko’chasida joylashgan novvoyxonadan boshlangan. Yong’inning dastlabki sababi o’choqdan chiqqan uchqun bo’lishi mumkin. O’sha davrda Londondagi ko’plab uylar yog’ochdan qurilgan va tor ko’chalar bo’ylab joylashgani sababli olov tez tarqalgan. 13 mingdan ortiq bino, jumladan, 93 ta cherkov, St. Paul sobori, shuningdek, ko’plab hukumat va tijorat binolari yo’q bo’ldi.100 mingdan ortiq kishi uy-joysiz qolgan."
  },
  {
    letter: "L",
    title: "LORAN GYUNEL",
    text: "Tug’ilgan yili 1966-yil, Perigyo, Fransiya • Yo’nalishi: Psixologik romanlar, falsafiy hikoyalar, U zamonaviy Ekzistensializm - “hayot ma’nosi haqida falsafa” yo’nalishining eng mashhur yozuvchilaridan biri hisoblanadi. Baxtli bo’lishni istagan odam Xudolar har doim yashirin sayohat qilishadi Donolikdan yiroq faylasuf Men yashashni o’rgangan kun *"
  },
  {
    letter: "L",
    title: "Lorens kuchi",
    text: "elektr yoki magnit maydonida harakatlanayotgan zaryadlangan zarrachaga ta’sir qiluvchi kuchdir. Magnit maydonda harakatlanuvchi bitta zaryadlangan zarrachaga maydon tomonidan ta’sir etuvchi kuch Lorens kuchi deb ataladi"
  },
  {
    letter: "L",
    title: "Lotereya (fr.)",
    text: "qurʼa) — davlat yoki tashkilotlar tomonidan maxsus biletlar sotish orqali aholidan ixtiyoriy pul mablagʻlari yigʻish shakli. Yevropada ilk rasmiy lotereya 1466-yil 24-fevralda Belgiyaning Bryugge shahrida o’tkazilgan. Niderlandiyalik rassom Yan van Eykning bevasi erining xotirasiga bag’ishlab, kambag’allar uchun xayriya lotereyasi uyushtirgan. Undan tushgan mablag’ to’liq xayriya ishlariga sarflangan. Shu sababli 24-fevral jahonda lotereya kuni sifatida esga olinadi."
  },
  {
    letter: "L",
    title: "Lox-Ness maxluqi",
    text: "Lox-Ness maxluqi (qisqacha “Nessi”) — Shotlandiyadagi Lox-Ness ko’lida mavjud deb taxmin qilinadigan afsonaviy mavjudot. U haqidagi ilk ma’lumotlar 6-asrga borib taqaladi. 1933-yilda maxluqni ko’rganlar haqidagi xabarlar ko’paygan va u haqida ko’plab fotosuratlar olingan, ammo ularning haqiqiyligi shubhali. Olimlar va tadqiqotchilar ko’ldagi maxluq mavjudligini isbotlash uchun ko’plab ekspeditsiyalar uyushtirgan, lekin aniq dalillar topilmagan."
  },
  {
    letter: "L",
    title: "Lukull bazmi",
    text: "Haddan tashqari hashamatli va serharj ziyofatni anglatuvchi ibora. Atama Rim sarkardasi va davlat arbobi Lutsiy Litsiniy Lukull (mil. avv. 118–56) nomi bilan bog’liq bo’lib, u nafaqat harbiy qobiliyati, balki serhasham turmush tarzi va pishiriqlarga bo’lgan ishtiyoqi bilan ham mashhur edi. Lukull Rimning Sharqdagi yurishlarida ulkan boylik orttirgan va ushbu boylikni o’zining hashamatli hayoti, xususan, beqiyos ziyofatlari uchun sarflagan."
  },
  {
    letter: "L",
    title: "Lunatizm",
    text: "Uyquning chuqur bosqichida odamning ongisiz ravishda yurishi yoki boshqa harakatlarni bajarishi holati. Lunatizm odatda uxlashdan keyingi birinchi soatlarda yuz beradi. Bu paytda odam uyg’onmagan bo’ladi, ammo ko’zlari ochiq, oddiy harakatlarni bajarishi yoki gapirishi mumkin. Ko’pincha ertalab bu holatni eslamaydi.Tibbiyotda bu holat somnambulizm deb ataladi. So’z lotincha luna (“oy”) so’zidan kelib chiqqan bo’lib, tarixda bu holat oy fazalari bilan bog’liq deb o’ylangan."
  },
  {
    letter: "L",
    title: "Lutning xotini",
    text: "Injildagi mashhur obrazlardan biridir. “Tavrot” va “Injil”da aytilishicha, Lut payg’ambar oilasi bilan Sodom va Gomorra shaharlaridan chiqib ketayotganida, Alloh ularga ortga qaramaslikni buyuradi. Ammo Lutning xotini orqasiga qaraydi va shu zahoti u tuz haykalga aylanadi. Ibora orqaga qarash, eski narsaga yopishib qolish, o’tmishni qo’yib yubormaslik, kelajak sari odimlay olmaslik, buyruqqa bo’ysunmaslik, imkoniyatni boy berish bilan izohlanadi."
  },
  {
    letter: "L",
    title: "Luvr muzeyi",
    text: "Parijdagi eng mashhur va dunyodagi eng yirik san’at muzeylaridan biridir. 1791- yilda Inqilobiy Konvent dekreti bilan milliy badiiy muzey sifatida asos solingan va 1793-yil 8- noyabrdan omma uchun ochilgan Uning minglab kartina va haykaltaroshlik namunalari ichida Gioconda (Mona Lisa), Milosslik Venera, Samofrakiyalik Nika kabi mashhur asarlar, Rembrandt, Tizian va Leonardo da Vinci kartinalari bor. 1989-yili qasr oʻrtasiga I. M. Pei yaratgan shisha piramida qoʻshildi."
  },
  {
    letter: "L",
    title: "Lyambda",
    text: "qadimgi yunon alifbosining 11-harfi. – Λ Lyambda harfi qadimgi finikiycha “Lamed” harfidan kelib chiqqan. Shu sababli u lotin alifbosidagi L, kirillchadagi Л harflarining ajdodi hisoblanadi. Qadimgi Yunonistonda Sparta jangchilari qalqonlarida Λ belgisi tasvirlangan. Λ — “Lakedemon” —Spartaning qadimgi nomining bosh harfi hamda yunon mifalogiyasidagi qahramon."
  },
  {
    letter: "L",
    title: "Lyudmila Pavlichenko",
    text: "Tarixdagi eng mashxur snayper ayol Lyudmila Pavlichenko birinchi marta jangga kirganida nemis askarini otib tashlashga jur’ati yetmay turib qoladi. Ammo dushman yosh rus askarini o’ldirganini ko’rgach o’ziga kelib, tepkini bosadi. “Ko’z oldimda o’ldirilgan o’sha yigit juda ham ajoyib bola edi. Shundan keyin meni hech narsa to’xtata olmagan” — eslaydi keyinchalik Lyudmila. Butun ikkinchi jahon urushi davomida u 309 nafar dushman askarini yo’q qilgan. 62 M"
  },

  // === M ===
  {
    letter: "M",
    title: "Madam Tyusso Muzeyi",
    text: "Dunyoning eng mashhur mum haykallar muzeyi 1835-yilda Londonda ochilgan. Muzey asoschisi Mari Tyusso ilk mum haykalini 1777-yilda yaratgan. Hozirda muzey dunyo boʻylab bir nechta shoxobchalarga ega. Unda mashhur shaxslar, tarixiy arboblar va kino qahramonlarining haykallari namoyish etiladi. Muzeyning eng qadimgi eksponatlaridan biri Mari Tyussoning oʻz mum haykalidir."
  },
  {
    letter: "M",
    title: "Madlen pechenyesi",
    text: "Fransiyada paydo bo’lgan mashhur pechene bo’lib, o’ziga xos chig’anoq shakli va yumshoq tuzilmasi bilan ajralib turadi. XIX asrda yaratilgan bu shirinlik yozuvchi Marsel Prust asarida tilga olingach, butun dunyoga mashhur bo’ldi. Madlen pechenyesi tuxum, sariyog’, shakar va limon po’stidan tayyorlanadi. Uni aynan maxsus qoliplarda pishirish orqali chig’anoq shakli beriladi."
  },
  {
    letter: "M",
    title: "Mafusail",
    text: "Yer yuzidagi eng qadimiy tirik daraxtlardan biri. AQShning Kaliforniya shtatidagi Oq togʻlar (White Mountains) da o’sadi. Taxminan 4800 yildan ortiq umr ko’rgan bu daraxt hanuz yashab turibdi. Uning nomi Injilda tilga olingan 969 yil yashagan inson — Mafusail sharafiga qo’yilgan."
  },
  {
    letter: "M",
    title: "Magneto",
    text: "Marvel komiks olamidagi eng mashhur mutantlardan biri — magnit maydonini boshqarish qobiliyatiga ega. Haqiqiy ismi Erik Lensherr (ba’zida Max Eisenhardt) bo’lib, u yahudiy kelib chiqishi tufayli Ikkinchi jahon urushi davrida kontslagerda qiynoqlarga uchragan. Shu og’ir kechinmalar uning insoniyatga bo’lgan ishonchini yo’qotishiga sabab bo’ladi. Magneto mutantlarning ustunligini himoya qiluvchi radikal mafkuraga ega va ko’pincha X-Men guruhi bilan to’qnashadi. Shunga qaramay, u ba’zida ularning ittifoqchisiga ham aylangan."
  },
  {
    letter: "M",
    title: "Magnus effekti",
    text: "aylanayotgan jism havo yoki suyuqlik ichida harakatlanganda, uning yo’nalishini o’zgartiruvchi yonlama kuch paydo bo’lish hodisasi."
  },
  {
    letter: "M",
    title: "Makassar moyi",
    text: "19-asr Yevropasida erkaklar orasida juda mashhur bo’lgan Makassar moyi aslida Indoneziyaning. Makassar shahridan nom olgan. Dastlabki retseptlarda Makassarda o’sadigan maxsus eben yog’ochidan olinadigan tabiiy yog’ ishlatilgan. Mana shu sabablarga ko’ra mahsulot “Macassar oil” deb atalgan."
  },
  {
    letter: "M",
    title: "Makedoncha o’q uzish",
    text: "Bu usulda odam ikkala qo’lidagi o’qotar quroldan bir vaqtning o’zida foydalanadi. Jangovar va vestern filmlar hamda kompyuter o’yinlarida keng tarqalgan. Terminni yozuvchi Vladimir Bogomolov o’ylab topgan bo’lib, 1934-yilda Marselda Yugoslaviya qiroli Aleksandr va Fransiya tashqi ishlar vaziri Jan Lui Bartuni o’ldirgan Vlado Chernozemskiy shu usuldan foydalangan."
  },
  {
    letter: "M",
    title: "Makkalou effekti",
    text: "Bu inson uzoq vaqt davomida rangli tasvirlarga qaragandan so’ng, neytral (oq- qora) tasvirlarda ham rang effektini sezishi bilan tavsiflanadigan psixologik hodisa. Ushbu vizual illyuziya ong osti darajasida idrokning o’zgarishini ko’rsatadi va ba’zan kunlar yoki haftalar davomida saqlanib qolishi mumkin. Makkalou effekti 1960-yillarda amerikalik psixolog Selina 63 Makkalou tomonidan kashf qilingan. U rang va naqshlarning birga taqdim etilishi odamlarning ko’z va miyada qanday iz qoldirishini tajriba orqali aniqlagan."
  },
  {
    letter: "M",
    title: "Makkartizm",
    text: "AQShda 1940-yillarning oxiri va 1950-yillarning oʻrtalarida (ayniqsa 1950-1954 yillarda) avj olgan, sovuq urush davridagi keskin antikommunistik kayfiyat va siyosiy qatagʻonlar davri. Bu atama amerikalik senator Jozef Makkarti nomidan kelib chiqqan boʻlib, “qizil vabo”ga qarshi kurash bahonasida jamiyatda keng qamrovli “jodugarlar ovi” (охота на ведьм) olib borilishini anglatadi."
  },
  {
    letter: "M",
    title: "Maksvell iblisi",
    text: "Ikkinchi termodinamika qonuniga zid ko’rinuvchi tajribiy fikr bo’lib, kichik farazli jonzot issiq va sovuq molekulalarni ajratib, energiya sarflamasdan tartib o’rnatishi mumkinligi haqida bahs yuritadi. 1871-yilda fizik Jeyms Klark Maksvell tomonidan taklif qilingan faraziy tushuncha. Bu tushuncha keyinchalik axborot nazariyasi va entropiya bilan bog’liq holda tahlil qilingan."
  },
  {
    letter: "M",
    title: "Malvina",
    text: "A. N. Tolstoyning ” Oltin kalit yoki Buratinoning sarguzashtlari ” kitobidagi qahramon. Jingalak ko’k sochli qiz “Senyor Karabas Barabas” qo’g’irchoq teatridagi eng chiroyli qo’g’irchoq, uning boshi chinni va tanasi paxta bilan to’ldirilgan. Karabas Barabasdan o’rmonga qochib ketadi va Buratino bilan uchrashguncha u erda yashaydi. O’rmonda yashaydigan barcha tirik mavjudotlar tomonidan g’amxo’rlik qiladi."
  },
  {
    letter: "M",
    title: "Mandela effekti",
    text: "ayrim hollarda bir qancha odamlar mayda detallarigacha bir xil bo’lgan yolg’on xotiraga ega bo’lishlari mumkin. Bu xotiralar real voqelikka zid hamda uni isbotlovchi hech qanday dalillarsiz bo’ladi. Aynan shu holatga nisbatan “Mandela effekti” termini ishlatiladi. Effektning paydo bo’lish tarixi 2013-yilga borib taqaladi. Shu yilning 5-dekabrida JARning sobiq prezidenti, mashxur siyosiy arbob Nelson Mandela vafot etadi. Bu haqidagi xabar ijtimoiy tarmoqlarda qizg’in muhokama qilinadi. Qiziqarli tomoni, ko’plab foydalanuvchilar ushbu xabardan hayratga tushadilar. Negaki ular siyosatchini o’tgan asrning 80-yillarida qamoqda vafot etgan deb bilishardi. Hattoki ayrimlar bu haqida xabarlar chiqqanini ham eslab o’tadi. Aslida Mandelaning 90-yillarda ozod qilinganini juda kam odam yodga oladi. Mazkur “yolg’on xotira”ni tushuntirish uchun keyinchalik Fiona Brum “Mandela effekti” terminini taklif qiladi."
  },
  {
    letter: "M",
    title: "Maneki-neko",
    text: "bu Yaponiyaning an’anaviy omad va boylik keltiruvchi haykalchasidir. U koʻtarilgan panjasi bilan biznesga mijozlar va pulni chorlab turadi."
  },
  {
    letter: "M",
    title: "Manilov sindromi",
    text: "(“O’lik jonlar” romani qahramoni) - doimiy ravishda amaldagi harakatsiz qilinadigan orzu va hayoliy muvaffaqiyat bilan izohlanadigan hodisa. Ular o’zlarini hayollarida katta martaba yoki lavozimda tassavur qilishadi. Farqi, odatda Xlestakov sindromi omma oldida, ko’pchilik orasida sezilsa, Manilov sindromi yolg’izlikda, inson yakka qolganda ko’rinadi."
  },
  {
    letter: "M",
    title: "Mannon Uyg’ur",
    text: "(1897-1955) Asl ismi-sharifi Abdumannon Majidov bo’lib, Yevropa shaklidagi oʻzbek teatr sanʼati va hozirgi Oʻzbek milliy akademik drama teatri (sobiq Hamza nomidagi teatr) asoschilaridan hisoblanadi. 1918—20 yillar da •Abdulla Avloniyning “Advokatlik osonmi?” komediyasini, • Hamzaning “Zaharli hayot yoxud Ishq qurbonlari”, “Boy ila xizmatchi”, “Tuhmatchilar jazosi” asarlarini, • Gʻozi Yunusning “Zahhoki moron” tragediyasini, •Abdulla Qodiriyning “Baxtsiz kuyov”, •Gʻulom Zafariyning “Halima”, •Fitratning “Abu Muslim”, “Chin 64 sevish” dramalarini sahnalashtirish bilan teatr repertuarini milliy asarlar bilan mustahkamlashga harakat qildi. Oʻzi yozgan “Turkiston tabibi”, “Fanniy uy”, “Oʻn ikki soatlik hokimiyat” pyesalarini ham sahnalashtirdi. Toshkent sanʼat institutiga (1991), Surxondaryo teatriga (1978) Mannon Uygʻur nomi berilgan. Toshkent shahridagi koʻchalardan biri Uygʻur nomi bilan ataladi. Vafotidan soʻng “Buyuk xizmatlari uchun” ordeni bilan mukofotlangan(2001)."
  },
  {
    letter: "M",
    title: "Mansarda",
    text: "(frans. mansarde) — bino chordogʻidagi xona, boloxonaning bir turi. Undan foydali qoʻshimcha xona yaratish, bino hajmini boyitish, unga goʻzallik hamda salobat bagʻishlashda foydalaniladi. Mansardalar XVII asrda Fransiyada paydo bo’lgan. Qirol Lyudovik XIV Versal saroyida 2 qavatdan yuqori bo’lgan binolar qurishni ta’qiqlagandan keyin o’sha davrlarning mashxur arxitektorlaridan biri - Fransua Mansar binolarning chordoq qismidan foydali maqsadda foydalanishni taklif qiladi. Shu tariqa qurilish sohasida ushbu arxitektor nomi bilan bog’liq yangi termin — mansarda paydo bo’ladi"
  },
  {
    letter: "M",
    title: "Manul",
    text: "mushuksimonlar oilasiga mansub hayvon bo’lib, tanasining uzunligi 52-65 sm, dumi 23-31 sm hamda vazni 2-5 kg atrofida bo’ladi. Manullar asosan Markaziy Osiyo, Kavkazorti, G’arbiy Eron, Boltiqbo’yi, Mo’g’uliston va Shimoliy-G’arbiy Xitoyda yashashadi. Manulni qo’lga o’rgatib bo’lmaydi. Hattoki, tug’ilganidan boshlab insonlar orasida katta qilingan taqdirda ham birinchi imkoniyat bo’lishi bilan qochib ketadi."
  },
  {
    letter: "M",
    title: "Mariya Kyuri Sklodovska",
    text: "Polshalik mashhur fizik va kimyogar, ikki bora Nobel olgan ilk shaxs. 1903- yilda Fizika bo’yicha, radioaktivlik tadqiqotlari uchun, 1911- yilda Kimyo bo’yicha, radiy va poloniy elementlarni kashf qilgani uchun Nobel mukofotini oladi. Radioaktiv materiallar bilan ko’p ishlagani natijasida, o’z sog’lig’iga zarar yetib aplastik anemiya sababli vafot etadi. Radiatsiya sababli uni qo’rg’oshin tobutda dafn etilgan."
  },
  {
    letter: "M",
    title: "Mariya Mayer (1906-1972)",
    text: "Nemis-amerikalik fizika olimasi. Atom yadrosi tuzilishini o’rganishda katta hissa qo’shgan bo’lib, “Yadro qobiq modeli” nazariyasini ishlab chiqqani bilan mashhur. Ushbu ishlari uchun 1963- yilda Nobel mukofotini qo’lga kiritgan. Izlanishlari davomida ayollarga berilgan imkoniyatlar kamligi sababli ko’p vaqt davomida haq olmasdan ishlashga majbur bo’lgan."
  },
  {
    letter: "M",
    title: "Marselyeza",
    text: "Fransiya milliy madhiyasi bo’lib, ozodlik, kurash va xalq birligining ramziga aylangan tarixiy qo’shiqdir. Bu madhiya 1792-yil, Fransiyada yozilgan. Avvaliga “Reyn armiyasi qo’shig’i” deb nomlangan. Keyin esa Marsel shahridan Parijga yo’l olgan inqilobchilar aynan shu qo’shiqni kuylab yurishgan. Shu bois u “Marselyeza” deb nom olgan."
  },
  {
    letter: "M",
    title: "Marta Mitchell effekti",
    text: "bu termin orqali psixiatrlar tomonidan o’z oldiga kelgan bemorning aslida to’g’ri bo’lgan gaplariga ishonmay qo’yiladigan noto’g’ri tashxisi ifodalanadi."
  },
  {
    letter: "M",
    title: "Martin Skorsez ning filmlari",
    text: "Goodfellas (1990) Taxi Driver (1976) The Departed (2006) Raging Bull (1980) Casino (1995)"
  },
  {
    letter: "M",
    title: "Marvarid sirgʻali qiz",
    text: "Yan Vermeer, (1665) Suratni ko’pincha Golland Mona Lizasi deb atashadi. Rassom bu asarni kimga bag’ishlab chizgani va qizning ismi noma’lum. Asarda tasvirlangan qiz aslida haqiqiy emas — bu “troni” deb ataluvchi xayoliy obraz. Vermeer uni ideal go’zallik timsoli 65 sifatida yaratgan, deyishadi. 2003-yilda Treysi Shevalyening xuddi shu nomdagi romani asosida badiiy filmi suratga olingan."
  },
  {
    letter: "M",
    title: "Mastaba",
    text: "(arab. — tosh oʻrindiq) — Qadimgi Misr maqbaralarining nomi. Mastabalar uyga oʻxshatib gʻisht bilan qurilgan qumtepalardan iborat. Ularning yonlariga ibodat qilinadigan maxsus xona hamda dafn anjomlari qoʻyiladigan yertoʻla ham qurilgan. Qad. Misrdagi I va II sulola davrida mastabalar firʼavnlar maqbarasi xizmatini oʻtadi. III suloladan boshlab mastabalar oʻrniga firʼavnlar oʻzlari uchun ehrom (piramida)lar qurdira boshladilar."
  },
  {
    letter: "M",
    title: "Matcha",
    text: "Yaponiyada qadimdan ichiladigan maxsus yashil choy kukuni. Rohiblar uni hushyorlik va sokinlikni bir vaqtning o’zida saqlash uchun ichishgan. Avval choy barglari soyada o’stiriladi, quritiladi va kukun holiga keltiriladi. Matchaning tarixiy ildizlari XVI asrda yashagan Sen no Rikyu ismli yapon rohibi bilan bog’liq. U choy marosimini mukammallikka yetkazgan."
  },
  {
    letter: "M",
    title: "Matfey effekti",
    text: "mualliflikni belgilashda taniqliroq bo’lgan olim unchalik mashhur bo’lmagan olim oldida prioritetga ega bo’ladi. Yana bir qiziq jihati, ayrim manbalarda “Matfey effekti”ning o’zi aslida Robert Mertonning xotini — sotsiolog Xarriyet Sukerman tomonidan o’ylab topilgani aytiladi (hozirda hammuallif hisoblanadi). Shuning uchun bu holatda “Matilda effekti” ishga tushganini ham ko’rishimiz mumkin."
  },
  {
    letter: "M",
    title: "Matilda effekti",
    text: "Bu ayollar ilm-fan sohasidagi yutuqlari uchun yetarlicha e’tirofga sazovor bo’lmasligi, ularning kashfiyotlari erkaklar nomiga yozilishi hodisasidir. Atama amerikalik yozuvchi Matilda Joslyn Gage sharafiga nomlangan bo’lib, 1993-yilda tarixchi Margaret Rossiter tomonidan ilmiy muhokamaga kiritilgan. DNKning tuzilmasini aniqlashga katta hissa qo’shgan Rosalind Franklin ismi uzoq vaqtgacha e’tibordan chetda qolgan."
  },
  {
    letter: "M",
    title: "Matryoshka",
    text: "1890-yilda Yaponiyadan sotuvchi S.I. Mamontovning xotini uchun keksa donishmand Fukurima haykalchalaridan iborat “baxtning 7 Xudosi” - “sitifukudzin” nomli o’ziga xos to’plamni keltirishadi. Keyinchalik rus ustalari tomonidan bu to’plam asosida hozirda biz “matryoshka” deb ataydigan hamda rus millati faxri hisoblanadigan o’yinchoqlar to’plami yaratiladi"
  },
  {
    letter: "M",
    title: "Maugli sindromi",
    text: "Yaqin yillar oldin Kambodjada 18 yil oldin yoʻqolgan qiz topildi. U yovvoyi itlar toʻdasida ulgʻaygan. Afrika davlatlaridan birida oʻn yoshli bola maymunlar toʻdasida 3 yil boʻlgani, yana bir boshqa opa-singillar uzoq vaqt boʻrilar toʻdasida boʻlgani eʼlon qilindi. Bular barchasi real hayotda sodir boʻlgan voqealardir. Kipling asarida tasvirlangan romantik syujetga qaramay, hayotdagi voqealar ancha murakkabroq. Sindromning aniq taʼrifini berishning iloji yoʻq, bu juda keng tushuncha: shifokor, sotsiolog, klinik psixolog yoki ijtimoiy psixolog uni oʻziga xos jihatlarini qoʻshib, umumiy shakllantirishi kerak."
  },
  {
    letter: "M",
    title: "Maxfiy kecha” asari (1495-1498)",
    text: "Leonardo da Vinchining eng mashhur freska, ya’ni devorga chizilgan rasmlaridan biri. Iso Masih o’z shogirdlari bilan oxirgi kechki ovqatni yeb o’tirgan payt, xususan, ulardan biri — Iuda xiyonat qilishini aytgan dramatik lahza tasvirlangan. Leonardo Iudaning qo’lida kichkina hamyonchasi bilan tasvirlaydi. Ehtimol, bu Isoga xiyonat qilgani uchun olgan 30 kumush tangasi yoki xazinachi sifatida o’n ikki havoriylar orasida tutgan o’rniga ishora qilgan. 66 Shogirdlar soni 12 nafar, ammo rasmda qo’llar soni 26 ta — bu esa 1 juft qo’l ortiqcha degani. San’atshunoslar bu qo’l kimga tegishli ekanini aniqlay olishmagan."
  },
  {
    letter: "M",
    title: "Mayflower",
    text: "(ingliz tilidan “May guli”) 102 nafar inglizlar 1620-yil 16-sentyabrda kapitan Kristofer Jons boshchiligida Shimoliy Amerikaga yo’l olgan savdo kemasi. Kema Atlantika okeanini kesib o’tib, 21-noyabrda Plimut (hozirgi Massachusets shtati) *ga kelib tushadi hamda Shimoliy Amerikadagi ilk ingliz aholi punktlaridan biri tashkil qilinadi. “Plimoth Plantation” loyihasi doirasida yaratilgan “Mayflower II” kemasi 1957-yildan beri Plimut ko’rfazida eksponat sifatida saqlanadi. Har yili uni 10 minglab odamlar kelib ko’radi."
  },
  {
    letter: "M",
    title: "Meksikancha duel",
    text: "Uchta raqib ishtirok etuvchi qurollangan bellashuv. Birinchi otgan qatnashchida ustunlik bo’ladigan odatiy dueldan farqli ravishda meksikacha duelda «kim birinchi o’q uzsa» tamoyiliga amal qilinadi. Bunda, masalan, birinchi odam ikkinchi odamga o’q uzishga ulgirsa, uchinchi odam birinchi odamni otib tashlashi va tirik qolishi mumkin. Shu tariqa tomonlar o’z manfaatlari uchun duel balansini buza olmaydilar."
  },
  {
    letter: "M",
    title: "Melting pot",
    text: "Turli millat, irq va madaniyat vakillari bir joyda yashab, aralashib ketadigan jamiyatni ifodalovchi ibora. Atama ingliz tilidagi “melting pot” — “eritish qozoni” so’zma-so’z tarjimasidan kelib chiqqan. U bir xil jamiyatda turli xalq vakillari aralashib, yagona madaniyat shakllanishini anglatadi. Ko’pincha AQShga nisbatan ishlatiladi, chunki bu mamlakat turli millat va madaniyatlar aralashib ketgan jamiyat sifatida qaraladi."
  },
  {
    letter: "M",
    title: "Mening ismim Qirmizi",
    text: "Orxan Pamukning asari (1998)"
  },
  {
    letter: "M",
    title: "Menketcher",
    text: "inglizcha “mancatcher”- “odam tutuvchi”. Bu metal tutqich dastlab jang vaqtida otliqlarni ularga yaqinlashmasdan turib ot ustidan yiqitish uchun ishlatilgan. Undan Yevropada bir necha yuz yillar davomida foydalanilgan, biroq o’tochar qurollar paydo bo’lishi bilan o’z ahamiyatini yo’qotgan. Menketcherdan XVIII asr oxirigacha qochoq jinoyatchilarni tutish uchun foydalanilgan."
  },
  {
    letter: "M",
    title: "Metro 2033",
    text: "Muallif Dmitriy Gluxovskiy Yozilgan: 2002–2005 Janr: Post-apokaliptika, fantastika, falsafiy roman, Yadro urushidan keyin (taxm. 2033-yil) Sikvellari: Metro 2034 , Metro 2035. Syujet qisqacha Yadro urushi natijasida yer yuzasi yashashga yaroqsiz bo’lib qoladi. Omon qolgan odamlar Moskva metrosida yashashga majbur bo’ladi. Har bir bekat — alohida davlat, mafkuraviy tuzum yoki sektaga aylangan. Bosh qahramon — Artyom"
  },
  {
    letter: "M",
    title: "Meydzin",
    text: "Yaponiyada “meydzin” so’zi “ustoz(Master), mohir, san’at egasi” degan ma’noni beradi. Go o’yini ustasi."
  },
  {
    letter: "M",
    title: "Michelin(mishlen)",
    text: "Fransiyaning Michelin kompaniyasi nafaqat avtomobil shinalari ishlab chiqarishi, balki restoranlarni baholovchi nufuzli Michelin Guide bilan ham mashhur. Michelin yulduzlari restoranlarga 1 dan 3 gacha baho berib, ularning sifati va xizmat darajasini belgilaydi."
  },
  {
    letter: "M",
    title: "Mikelanjelo Buonarroti",
    text: "Uyg’onish davrining buyuk italiyalik rassom, haykaltarosh va arxitektoridir. U o’zining mashhur “David” haykali bilan inson tanasining go’zalligi va kuchini ajoyib darajada aks ettirdi. Shuningdek, Vatikan shahridagi Sistina kapellasining shiftiga chizgan freskalari 67 san’at olamida nodir namuna hisoblanadi. Uning arxitektura sohasidagi yutuqlaridan eng mashhuri — San-Pyerro bazilikasining kupoli bo’lib, u ko’plab avlodlarga ilhom manbai bo’lib xizmat qiladi."
  },
  {
    letter: "M",
    title: "Millefiori",
    text: "shisha sanʼatining murakkab texnikasi boʻlib, u “ming gul” maʼnosini anglatadi. Ushbu usulda har xil rangli shisha tayoqchalar eritilib, mayda disk shaklida kesiladi va maxsus qoliplarda joylashtiriladi. Millefiori texnikasi ,asosan, Venetsiyaning Murano orolida rivojlangan va odatda shisha zeb-ziynatlar, idishlar hamda mozaikalar yaratishda qoʻllaniladi."
  },
  {
    letter: "M",
    title: "Milluol g’ishti",
    text: "Futbol fanatlari orasidagi bezorilarning gazetadan yasalgan qo’lbola quroli. Qurol nomi «Milluol» futbol jamoasiga borib taqaladi. Bu klub muxlislari 1960-1970-yillar davomida o’z bezoriliklarida ushbu quroldan foydalanishgan. Qurolning mashxur bo’lishiga asosiy sabab uning stadionga olib kirilishi osonligi hamda yasashga yengilligi bo’lgan."
  },
  {
    letter: "M",
    title: "Minecraft",
    text: "2011-yilda shved kompaniyasi Mojang Studios tomonidan ishlab chiqilgan oʻyin. Dastlab Markus “Notch” Persson tomonidan Java dasturlash tilida yaratilgan boʻlib, uning birinchi ochiq sinov versiyasi 2009-yil 17-mayda chiqarilgan. Oʻyinchilar deyarli cheksiz hududni tashkil qiluvchi voksel bloklardan iborat uch oʻlchamli dunyoni tadqiq qiladilar. Oʻyinchilar xomashyo topish va qazib olish, asboblar va narsalar yasash, shuningdek, turli binolar, yer ishlari imkoniyatiga ega."
  },
  {
    letter: "M",
    title: "Minimundus bogʻi",
    text: "Avstriyaning Klagenfurt shahrida joylashgan, dunyoning eng mashhur binolarining kichik o’lchamdagi aniq nusxalaridan iborat ochiq havodagi bog’. Bu yerda Eyfel minorasi, Vatikandagi Sankt-Peter sobori va Dubaydagi Burj Xalifa kabi me’moriy yodgorliklarning miniatyura versiyalarini ko’rish mumkin. Minimundus bog’ida taxminan 150 dan ortiq binolar miniatyura shaklida joylashgan bo’lib, ularni yaratishda butun dunyodan kelgan san’atkorlar va mutaxassislar ishtirok etgan."
  },
  {
    letter: "M",
    title: "Minotavr",
    text: "afsonaviy mavjudot, klassik antik davrda buqaning boshi va inson tanasi bilan tasvirlangan. Krit qiroli Minosning buyrugʻi bilan arxitektor Dedal va oʻgʻli Ikar tomonidan ishlab chiqilgan labirintning markazida yashagan. Afsonaga ko’ra, qahramon Tesey Minotavrni o’ldirib, Labirintdan Afina buyrug’i bilan Ariadna tomonidan unga berilgan ip yordamida chiqib ketishga muvaffaq bo’lgan."
  },
  {
    letter: "M",
    title: "Mitridat",
    text: "Pont qirolligining eng mashhur hukmdori, ko’pincha “Buyuk Mitridat” yoki ” Rimning ashaddiy dushmani” deb ataladi. Rimning Kichik Osiyo va Yunonistonda kuchayishiga qarshi chiqqan va Rimga qarshi uchta katta urush olib borgan(mil.avv. 88-63- yillar). Mitridat zahar bilan o’ldirilishdan qo’rqib, yoshligidan turli zaharlarni kichik dozadan ichib, ularga chidamli bo’lgan. Bu tarixda ” mitridatizm ” - zaharga asta-sekin o’rganib borish amaliyoti deyiladi."
  },
  {
    letter: "M",
    title: "Mobius lentasi",
    text: "Bu noyob matematik shakl bo’lib, faqat bitta tomoni va bitta qirrasi mavjud. Uni 1858-yilda nemis matematiklari August Ferdinand Mobius va Johann Benedict Listing mustaqil ravishda kashf qilganlar. Mobius lentasi lentaning ikki uchini 180° burib yopish orqali hosil qilinadi va cheksizlik hamda uzluksizlik ramzi sifatida qaraladi."
  },
  {
    letter: "M",
    title: "Mogikanlarning so’nggisi iborasi",
    text: "Biror xalq, avlod yoki guruhning oxirgi vakiliga ishora qiladi. Bu atama Jeyms Fenimor Kuperning «So’nggi mogikan» romanidan kelib chiqqan bo’lib, tarix 68 sahnasidan yo’qolib borayotgan madaniyat yoki qadriyatlarning so’nggi namoyandalari haqida gapirganda ishlatiladi. «So’nggi mogikan» — Fenimor Kuperning 1826-yilda yozilgan mashhur romani. Asar Fransiya va Britaniya o’rtasidagi yetti yillik urush davrida (1757-yil) Amerikadagi mahalliy hindu qabilalarining hayoti va janglarini tasvirlaydi. Asosiy qahramonlar – mohikanlar qabilasining so’nggi vakillari bo’lib, ular o’z yerlari va erkinligi uchun kurashadi."
  },
  {
    letter: "M",
    title: "Molxona (Jorj Oruell, 1945)",
    text: "Jorj Oruellning mashhur siyosiy allegoriyasi bo’lib, u real tarixiy voqealarni ramzlar orqali hikoya qiladi. Asar markazida — insonlar zulmidan qutulib, o’z boshqaruv tizimini yaratishga intilgan hayvonlar bor. Ular adolat, tenglik va erkinlik asosida yangi tartib o’rnatishni niyat qiladilar. Biroq cho’chqalar orasidan ajralib chiqqan Napoleon nomli yetakchi asta- sekin hokimiyatni o’z qo’liga oladi va jamiyatni yangi zulm ostiga soladi. Oruell bu asar orqali Rossiyadagi 1917-yilgi inqilob va uning keyingi bosqichlarini — ayniqsa Stalinizmni — keskin tanqid qiladi."
  },
  {
    letter: "M",
    title: "Monomax toji",
    text: "Rossiya podsholari tomonidan ishlatilgan qadimiy toj bo’lib, Moskva Kremlidagi Olmos fondi emas, Qurol-aslaha palatasida saqlanadi. U Rossiya hukmdorlarining hokimiyat ramzlaridan biri bo’lgan."
  },
  {
    letter: "M",
    title: "Monte Karlo metodi",
    text: "murakkab matematik va real hayotiy muammolarni tasodifiy sonlar va ko’p martalik simulyatsiya orqali taxminiy yechish usuli. Kompyuter bir jarayonni minglab yoki millionlab marta tasodifiy takrorlaydi va natijalarning o’rtachasidan yakuniy javob chiqaradi. Iteratsiyalar soni oshgani sari aniqlik ham ortadi. Nomining kelib chiqishi — Monakodagi Monte Karlo hududi bilan bog’liq. U yer kazinolari bilan mashxur bo’lgan, tasodifiylikka tayanadigan bu usul ham shu nom bilan atalgan. Atamani matematiklar Stanislaw Ulam va John von Neumann kiritgan."
  },
  {
    letter: "M",
    title: "Mops",
    text: "(gollandcha) Dekorativ it zoti. Mopslar Yevropaga XVI asrda Xitoydan olib kelingan va G’arbiy Yevropa hamda Gollandiyada mashhur bo’lgan. XIX asrda Buyuk Britaniya qirolichasi Viktoriyaning ham mopslarga mehri tushib qolgan. Mopslar yoqimtoy va mehribon hamroh-ekani bilan ajralib turadi. Ushbu zot 2004-yilgi “Butunjahon itlar ko’rgazmasi”da “Eng yaxshi” deb topilgan."
  },
  {
    letter: "M",
    title: "Mortonning vilkasi",
    text: "Bu ikkita bir xil darajada yoqimsiz muqobil o’rtasidagi tanlov holatini yoki fikrlashning ikkita tarmog’i bir xil darajada yoqimsiz xulosalarga olib keladigan vaziyatni tavsiflovchi ifoda. 1487 yilda Genrix VII qonunlari asosida Angliya lord-kansleri Jon Morton tomonidan ishlab chiqilgan soliq yig’ish siyosatidan kelib chiqqan. Unga ko’ra, agar odam hashamatda yashasa — demak, soliqqa yetarli daromadi bor; agar tejamkor bo’lsa — demak, ortiqcha jamg’armasi bor. Har ikkala holatda ham soliq undirilgan."
  },
  {
    letter: "M",
    title: "Morze alifbosi",
    text: "Harflar, raqamlar va tinish belgilarini nuqta (·) va tire (–) lar yordamida ifodalovchi maxsus kod tizimi. Uni 1837-yilda Samuel Morze va Alfred Veyl ixtiro qilgan. Dastlab telegraf aloqasi uchun yaratilgan bu tizim vaqt o’tishi bilan radioaloqa, harbiy va dengiz navigatsiyasida ham keng qo’llanila boshlandi. Eng mashhur Morze signali – SOS (··· – – – ···) bo’lib, u halokat holatida yordam chaqirish uchun ishlatiladi."
  },
  {
    letter: "M",
    title: "Motsart effekti",
    text: "nazariyaga koʻra Motsart musiqasini eshitish, insonda vaqtinchalik IQ darajasini oshiradi. Ayniqsa inson yoshligidan kompozitor asarlarini eshitsa insonning tafakkuri va aqliy 69 rivojlanishiga foydali taʼsir koʻrsatadi. Ushbu nazariya boʻyicha ilk tadqiqotlar 1993-yil Frensis Rausher, Gordon Shou va Ketrin Ki tomonidan olib borilgan. Ular 36 ta talabani uch guruhga boʻlib ay kyu test olishadi. Birinchi guruh talabalariga Motsartning ikkita fortepiano uchun yozilgan re major sonatasi, ikkinchi guruhga xech qanday musiqa qoʻyilmaydi, uchinchi guruh talabalariga esa tinchlantiruvchi, sokin musiqa qoʻyib beriladi. Natijalar shuni koʻrsatadiki, Motsart asarini eshitib test ishlagan talabalar eng yuqori koʻrsatgichni qayd etishgan boʻlib, ushbu samaradorlik faqat kichik muddat (10-15 daqiqa) davom etgan."
  },
  {
    letter: "M",
    title: "Moviy barglar",
    text: "Billni oʻldirish filmidagi bar"
  },
  {
    letter: "M",
    title: "Moviy chavandoz",
    text: "1911-yilda Kandiskiy asos solgan rassomlar uyushmasi"
  },
  {
    letter: "M",
    title: "Moviy kiyimdagi bola",
    text: "Tomas Geynsboro kartinasi 1770"
  },
  {
    letter: "M",
    title: "Moviy oʻqning sayohati",
    text: "Janni Rodari asari"
  },
  {
    letter: "M",
    title: "Moviy qon” iborasi",
    text: "Ispaniya qirollik oilasi o’zlarining vest-gotlardan kelib chiqqani va Afrikadan kelgan mavrlar bilan aralashib ketmagani bilan juda ham mag’rurlanishgan. Ularning terisi qora emas, oppoq bo’lgani uchun qon tomirlari yaqqol ko’rinib turgan. Shuning uchun ular o’zlarini moviy qonli odamlar deb hisoblashgan. Keyinchalik “moviy qon” iborasi barcha aristokratlarga nisbatan ishlatila boshlangan."
  },
  {
    letter: "M",
    title: "Moviy sayyora",
    text: "Atrof muhitni muhofaza qilishga eʼtibor qaratgan insonlarga beriladigan mukofot"
  },
  {
    letter: "M",
    title: "Mozambikcha o’q uzish",
    text: "Yaqin masofada hujumchini tezda zararsizlantirish uchun mo’ljallangan jangovar texnika. Unga ko’ra, dushman tanasiga ikki marta, agar u hanuz tahdid solayotgan bo’lsa, boshiga bir marta o’q uziladi. Bu usul Mozambik urushi davrida amalda sinovdan o’tgan va keyinchalik maxsus kuchlar hamda politsiya bo’linmalarida keng qo’llanila boshlagan. Shuningdek, bu usul «mozambikcha uchlik», deb ham ataladi."
  },
  {
    letter: "M",
    title: "Moʻyi Muborak madrasasi",
    text: "Toshkentdagi Hazrati Imom majmuasining muhim qismi bo’lib, 1856–1857 yillarda Mirzo Ahmad qushbegi tomonidan qurilgan. Bu madrasada eng qadimiy Qur’on nusxasi — Usmon Mus’hafi va Payg’ambarimiz Muhammad ‫ﷺ‬ning muborak soch tolasi saqlanadi. 1856–1857 yillarda qurilgan bu madrasa nafis peshtoqi, gumbazi va hujralari bilan ajralib turadi. Mustaqillik yillarida qayta ta’mirdan chiqarilib, atrofida bog’ va xiyobonlar barpo etilgan."
  },
  {
    letter: "M",
    title: "Mulan",
    text: "Xitoy xalq rivoyatlaridagi afsonaviy ayol qahramon bo’lib, otasi qariganligi sababli o’zini erkak sifatida ko’rsatib, xarbiy xizmatga qo’shilgan. U haqidagi eng qadimgi manba – “Mulan qo’shig’i” deb nomlangan doston bo’lib, taxminan V–VI asrlarga tegishli. Mulan urushda ko’plab jasoratlar ko’rsatadi. 12 yillik xizmatdan so’ng u uyiga qaytadi va nihoyat o’zining asl shaxsini ochadi. Mulan obrazi fidoyilik, jasorat va oilaviy burchni ifodalaydi. U XX asr va undan keyingi davrlarda ko’plab san’at asarlarida, jumladan, Disney’ning 1998 va 2020-yillardagi filmlarida qayta talqin qilingan. Uning timsoli zamonaviy ayollar uchun ham kuch va jasorat ramziga aylangan."
  },
  {
    letter: "M",
    title: "Muleta",
    text: "buqalar jangida matador tomonidan yakuniy bosqichda ishlatiladigan qizil mato. U kichikroq bo’lib, maxsus tayyorlangan matodan qilingan va ingichka tayoqqa mahkamlangan bo’ladi. Matador muletadan foydalanib, buqani to’g’ri pozitsiyaga olib keladi va unga yakuniy zarbani beradi. Qizil rang esa qon bilan birlashib, tomoshabinlar uchun yanada dramatik effekt yaratish uchungina qo’llaniladi, buqaning jahlini chiqarish uchum emas. Sababi — buqalar ranglarni farqlay olmaydi."
  },
  {
    letter: "M",
    title: "Mursak",
    text: "murassa (arab. — ziynatlangan, bezatilgan)— avra-astarli, uzun yengli, qadim ustki kiyim."
  },
  {
    letter: "M",
    title: "Mushukli klavesin",
    text: "(fortepianoga o’xshash cholg’u asbobi) O’rta asrlarda hatto musiqa ham ba’zan juda shafqatsiz ko’rinishda bo’lgan. Masalan, Ispaniya qiroli, Filipp IIda “mushukli klavesin” bo’lgan. U o’n to’rtta bo’lmaga bo’lingan quti bo’lib, oldindan tanlangan mushuklar bo’lmalarga ovozining yo’g’onligiga asosan joylashtirilardi. Bechora jonivorlarning boshi qutidan chiqib turar, dumlari bo’lsa klaviatura ostiga mahkamlanardi. Klavish bosilganda, mushukning dumiga o’rnatilgan igna hayvonga sanchilar, natijada, u baqirib ovoz chiqarardi."
  },
  {
    letter: "M",
    title: "Muz odam",
    text: "200dan ortiq odamning qotili bo’lgan Richard Kuklinskiy o’z qurbonlari jasadini muzlatgichda saqlagani tufayli “Muz odam” laqabini olgan. Uning bunday qilishi sababi — hech bir ekspertiza uzoq vaqt davomida saqlangan jasadning o’lim vaqtini aniqlay olmasdi. Tergovchilar Kuklinskining bu uslubi haqida tasodifan xabardor bo’lib qolishgan. Bunga kunlarning birida Richard qisman erigan jasadni yo’l chetida qoldirib ketgani sabab bo’ladi. Jasadning yurak mushagida muz parchalari qolib ketgandi va ushbu topilma uning mashhur laqabi yuzaga kelishiga ham sabab bo’ldi."
  },
  {
    letter: "M",
    title: "Myunxauzen sindromi",
    text: "inson tibbiy ko’rikdan o’tish, davolanish, kasalxonaga yotish, jarrohlik amaliyotini o’tkazish uchun kasallik belgilarini bo’rttirib ko’rsatadigan (simulyatsiya qiladigan) psixologik kasallik. Myunxauzen sindromi sabablarini umumiy qabul qilingan izohi shundan iboratki, kasallikni simulyatsiya qilish ushbu sindromli odamlarga yetishmayotgan e’tibor, g’amxo’rlik, hamdardlik va psixologik yordamni olishlariga imkon beradi. Sindrom o’zining hayoliy hikoyalari bilan mashhur bo’lgan nemis baroni Karl Fridrix Ieronim fon Myunxauzen (1720-1797) nomi bilan atalgan. 71 N"
  },

  // === N ===
  {
    letter: "N",
    title: "Naska suratlari",
    text: "bu Perudagi Naska platosida joylashgan ulkan geogliflar bo’lib, ular yerga chizilgan chiziqlar, shakllar va hayvon tasvirlaridan iborat."
  },
  {
    letter: "N",
    title: "National Atomic Testing Museum",
    text: "(NATM) — bu AQShning noyob tarixiy va ilmiy muzeyi, Nevada shtatining Las Vegas shahrida joylashgan. U “Nevada Test Site” maydoni tarixini, atom sinovlarini va Sovuq Urush davridagi yadroviy qurollanishni keng ommaga tushunarli qilib ko’rsatadi. • Muzey 2005-yilda ochilgan."
  },
  {
    letter: "N",
    title: "Natsist bifshtekslar",
    text: "Ushbu atama bilan fashistlar Germaniyasida natsistlar tomoniga ixtiyoriy ravishda qo’shilgan sotsialistlar va kommunistlar atalgan. Nemislar ularni nafrat bilan “bifshteks” deb atagan, chunki ular “tashqi tomoni jigarrang va ichi esa qizil” edi. Jigarrang — fashistlar formasi rangini, qizil esa — kommunizm va sotsializm g’oyalariga hayrixohlikni anglatardi."
  },
  {
    letter: "N",
    title: "Nekrolog",
    text: "Yaqinda vafot etgan shaxsning o’limi haqida ommaviy axborot vositalarida e’lon qilingan kichik maqola materiali shakli, gazeta jurnalistikasining janrlaridan biri. Marhum ishlagan muassasalarda, ayrim mamlakatlarda ko’chalarda va jamoat joylarida ham nekrologlarni koʻrish mumkin. So’z yunon tilidan nekros — oʻlik, logos — soʻz, degan ma’nolarni anglatadi."
  },
  {
    letter: "N",
    title: "Nelson Mandela (1918-2013)",
    text: "Inson huquqlari uchun kurashgan eng mashxur shaxslardan biri. Tinchlik uchun Nobel mukofoti sovrindori(1993). Janubiy Afrika Respublikasining prezidenti(1994- 1999). Janubiy Afrika Respublikasida hukmronlik qilgan aparteid, ya’ni irqchilik siyosatiga qarshi kurash yetakchisi bo’lgan. Shu sababli umrining 27 yili qamoqda o’tgan. Shunga qaramay xalq uchun irqchilikka qarshi kurash ramzi bo’lishda davom etgan. 1994-yilda JAR tarixidagi ilk qora tanli prezident etib saylangan. Prezidentlikdan ketgach ham eng ko’zga ko’ringan siyosiy faollardan biri bo’lgan. Futbol bo’yicha Jahon chempionati JAR hududida o’tkazilishiga katta hissa qo’shgan."
  },
  {
    letter: "N",
    title: "Nepotizm (lotincha: urug’, zot, sulola)",
    text: "korrupsiyaning bir ko’rinishi bo’lib, siyosatda, ish, lavozimga erishishda shaxslarning qobiliyati, bilimi, ma’lumotiga emas, balki urug’-aymoqchilik, oshna-og’aynichilikka yon bosish, qo’llab-quvvatlash, sharoit yaratib berish shaklida namoyon bo’ladi."
  },
  {
    letter: "N",
    title: "NI-1 tanki",
    text: "(«На испуг» “Qo’rqituvchi”). Shuningdek, “Yanvarets”, “Odessa tanki” nomlari bilan ham mashxur. 1941-yil yoz va kuzida shaharni himoya qilish uchun qamalda bo’lgan shahar sanoatining imkoniyatlarini hisobga olgan holda Odessada shoshilinch ravishda ellikka yaqin nusxada ishlab chiqarilgan tank. Aslida u mulyaj-qurolga ega bo’lgan zirhli traktor edi. Odessaliklar haqiqiy tanklar yetishmasligi tufayli shunday “tank”lardan foydalanishga qaror qilishgan. 20 ta “Yanvarets” tunda yorqin faralar hamda sirenalar yordamida rumin qo’shinini chekinishga majbur qilgan"
  },
  {
    letter: "N",
    title: "Nigeriyadan maktublar",
    text: "Firibgarlik xatlarining ommaviy tarqalishi oʻtgan asrning 80-yillarda Nigeriyadan boshlangan. Ular pochta yoki faks orqali yuborilib, “Nigeriya shahzodasi” pul so’rab, katta mukofot va’da qilgan. 2005- yilda bu xatlar g’alati syujetlari uchun Shnobel mukofotiga sazovor bo’lgan. Ular “SCAM 419” deb ham ataladi, chunki Nigeriyada firibgarlik 419-modda bilan jazolanadi. O’zbekistonda esa bu holat JKning 168-moddasiga to’g’ri keladi."
  },
  {
    letter: "N",
    title: "Nik Vuychich",
    text: "— dunyodagi eng mashhur tetra-ameliya sindromli inson. Motivatsion speaker yozuvchi. Qo’l va oyoqlarsiz tug’ilgan 1982, Мельбурн, Австралия."
  },
  {
    letter: "N",
    title: "Nike",
    text: "1964-yilda Phil Knight va Bill Bowerman tomonidan asos solingan sport kiyimlari va poyabzallarini ishlab chiqaruvchi kompaniya. Dastlab 1964-yilda “Blue Ribbon Sports” nomi bilan ochilgan bo’lsa ,1971-yilda “Nike” deb qayta nomlangan. Logotipi “Swoosh” - tezlik va harakatni ifodalovchi chiziq. Slogani - “Just Do It”. Brand haqida qiziqarli faktlar: - Kompaniya o’z nomini qadimgi Yunon mifologiyasidagi g’alaba ma’budasi “Nika” nomidan olgan. - Air Jordan 1 poyabzali ilk bor NBA tomonidan ta’qiqlangan, lekin Maykl Jordan baribir ularni kiygan"
  },
  {
    letter: "N",
    title: "Nikkolo Makiavelli",
    text: "(1469–1527) — italiyalik siyosiy faylasuf, diplomat va yozuvchi. U «Hukmdor» (The Prince) asari bilan mashhur. Uning qarashlarida siyosatda hokimiyatni saqlab qolish, strategiya va real vaziyatni hisobga olish muhim o’rin tutadi."
  },
  {
    letter: "N",
    title: "Nikolay Nikolayevich Nosov",
    text: "rus bolalar yozuvchisi, dramaturg, kinossenarist. Bilmasvoy haqidagi bir qancha asarlari bilan tanilgan ushbu yozuvchi Moskva kinematografiya institutini tamomlagan. 1938-yildan bolalar uchun asarlar yoza boshlaydi. Uning birinchi hikoyasi 1938-yili “Ermakchi” nomi bilan nashr etiladi. Mashhur qilgan kitob “Quvnoq oila” deb nomlangan. “Bilmasvoy va doʻstlarining sarguzashtlari” trilogiyasiga yana “Bilmasvoy Quyosh shahrida” va “Bilmasvoy Oyda” ertak-romanlari ham mashhur."
  },
  {
    letter: "N",
    title: "Niktofobiya yoki skotofobiya",
    text: "(grekcha-qo’rquv) - qorong’ulikdan yoki tundan qo’rqish. Ushbu fobiya kattalar va bolalar orasida eng keng tarqalgan qo’rquv hisoblanadi. Odatda bunday fobiya gallyutsinatsiya keltirib chiqaradi hamda odamga uyda (yoki xonada) undan tashqari kimdir bordek tuyulaveradi. Statistikaga ko’ra, dunyo aholisining qariyb 10 foizi qorong’ulikdan qo’rqadi."
  },
  {
    letter: "N",
    title: "Nintendo",
    text: "Yaponiyada asos solingan dunyodagi eng mashhur videoo’yin kompaniyalaridan biri. 1889-yilda Kyoto shahrida dastlab qog’ozli o’yin kartalari (hanafuda) ishlab chiqarish bilan faoliyat boshlagan. 1970-yillarga kelib, elektron o’yinlar bozoriga kirib keldi va tez orada global o’yin gigantiga aylandi. Nintendo dunyoga Super Mario, Zelda, Donkey Kong, Pokémon kabi afsonaviy o’yinlar va Game Boy, Wii, Nintendo Switch kabi mashhur konsollarni taqdim etgan."
  },
  {
    letter: "N",
    title: "Nirvana guruhi",
    text: "1987-yilda Kurt Kobeyn va Krist Novoselich tomonidan AQShning Sietl shahrida tashkil etilgan. Grunge janrining asoschilaridan biri bo’lib, 1990-yillar musiqasiga kuchli ta’sir ko’rsatgan. Ularning «Smells Like Teen Spirit» qo’shig’i butun dunyoda mashhurlikka erishdi va «Nevermind» albomi 90-yillarning eng muhim musiqiy asarlaridan biri hisoblanadi. Kurt Kobeynning 1994-yildagi fojiali o’limi guruh faoliyatiga nuqta qo’ydi."
  },
  {
    letter: "N",
    title: "Nirvana tushunchasi",
    text: "buddaviylikda barcha azob-uqubatlar, istak va qaramliklardan xalos bo’lib, ruhiy tinchlikka erishish holati. Bu holatga erishgan shaxs «uyg’ongan» hisoblanadi. Nirvana abadiy sokinlik va oromni anglatadi. Shuningdek Nirvana nomli 1987-yilda AQShning Sietl shahrida tashkil topgan mashhur rok guruhi bo’lib, guruh Kurt Kobeyn boshchiligida 1991-yilda chiqqan “Nevermind” albomi orqali butun dunyoga tanildi. «Smells Like Teen Spirit» qo’shig’i butun bir avlodning ramziga aylangan."
  },
  {
    letter: "N",
    title: "Nomatofobiya. Odamni ismi bilan chaqirishdan qo’rqish",
    text: "kasalligi. Ism o’rniga nomatofoblar laqab yoki “ey”, “siz” kabi neytral so’zlardan foydalanadi. Agar u baribir kimnidir ismi bilan chaqirishga majbur bo’lsa, bu juda g’ayritabiiy, huddiki zaif odam tilini burishtirib gapirayotganga o’xshab chiqadi. Garri Potter filmida odamlar Volan-de-Mort ismini aytishdan qo’rqishadi."
  },
  {
    letter: "N",
    title: "Notr Dam sobori",
    text: "Fransiyaning Parij shahrida joylashgan mashhur gotik uslubdagi katolik sobori bo’lib, 1163-yilda qurilishi boshlangan va 1345-yilda yakunlangan. U “Parijning yuragi” deb ataladi va ko’plab tarixiy voqealarga guvoh bo’lgan. Sobor Viktor Gyugoning “Parij Bibi Maryam ibodatxonasi” romanida ham muhim o’rin egallaydi. 2019-yilda yong’in oqibatida katta zarar ko’rgan sobor hozirda ta’mirlanmoqda. Uning bezakli vitraj derazalari, gargul haykallari va 13-asr qo’ng’irog’i bilan mashhur. 74 O"
  },

  // === O ===
  {
    letter: "O",
    title: "Obid Jalilov",
    text: "(1896-1963) U mashxur teatr va kino aktyori bo’lib, 1919-yildan oʻzbek drama gruppasi (1929-yildan Hamza teatri)da ishlay boshlagan. Aktyorlik mahorati intellektual psixologik yoʻsinda shakllangan. Bemor (“Turkiston tabibi”), Podkolyosin (“Uylanish”) kabi rollari aktyorning sahnadagi ilk yirik obrazlaridir."
  },
  {
    letter: "O",
    title: "Odango",
    text: "asosan Yapon qizlarida keng tarqalgan soch turmagi. Odango soʻzi yapon taomining nomidan olingan boʻlib, unga oʻxshab ketganligi uchun ham shunday ataladi. Koʻpincha yapon anime va mangalarida shu turmakdan foydalaniladi. Xitoy va AQSh da bu turmak mashhur boʻlib, Xitoyda “yaji” yoki “shuangyaji” deyilsa, AQSHda “space buns” deya 1990-yillarda mashhur boʻlgan."
  },
  {
    letter: "O",
    title: "ODIN C",
    text: "(1C) Rossiya xususiy kompaniyasi tomonidan 1991-yilda asos solingan. Ish va uy sharoitida foydalanish uchun kompyuter dasturlari va ma’lumotlar bazalarini yaratish hamda tarqatish, qo’llab-quvvatlash va rivojlantirishga ixtisoslashgan. Asoschisi va direktori — Boris Nuraliev. Kompaniya nomi kompaniyaga tegishli izlash dasturi nomidan kelib chiqqan bo’lib, undan ma’lumot olish uchun 1 sekunddan ortiq vaqt talab qilinmaydi."
  },
  {
    letter: "O",
    title: "Odisseya",
    text: "Gomerning “Odisseya” asari qadimgi yunon adabiyotining eng mashhur eposlaridan biri. Qahramon Odisseyning Troya urushidan keyingi 10 yillik mashaqqatli yo’lini tasvirlaydi. Odissey o’z vataniga – Itaka oroliga qaytish uchun sirli orollar, xavfli maxluqlar va ma’budlar tomonidan berilgan sinovlardan o’tadi. Polifem siklopini yengadi, sehrgar Kirkega duch keladi, sirenalar qo’shig’idan omon qoladi va hatto Yer osti olamiga tushib ketadi. «Odisseya» faqatgina sarguzasht emas, balki insoniyat qadriyatlari, oilaga sadoqat va uyga qaytish orzusining timsoli ham hisoblanadi."
  },
  {
    letter: "O",
    title: "Odorologiya",
    text: "bu hidlar haqida fan bo’lib, ularning tabiati, hosil bo’lishi, qabul qilinishi va turli sohalarda, jumladan, kriminalistika, tibbiyot va psixologiyada qo’llanilishini o’rganadi."
  },
  {
    letter: "O",
    title: "Ofeliya sindromi",
    text: "bu atama 1982-yilda doktor Yan Karr tomonidan kiritilgan. Uning 15 yoshli qizida progressiv xotirani yo’qotish, ruhiy tushkunlik, o’z fantaziyalariga ishonishga moyillik, kuchli estetik tuyg’ular va shunga oʻxshash holatlar kuzatilgan. Aniqlangan ruhiy kasallik Xodjkin kasalligidan kelib chiqqan. Keyingi tadqiqotlar shuni ko’rsatdiki, ushbu kasallik bilan og’rigan bemorlarda ko’pincha bu sindrom kuzatiladi. *Ofeliya - Uilyam Shekspirning “Gamlet” tragediyasidagi qahramon"
  },
  {
    letter: "O",
    title: "Okarina",
    text: "Asosan sopol, forfor yoki yog’ochdan tayyorlanuvchi, xushtaksimon ovozli, havo puflash orqali tovush chiqaruvchi cholgʻu asbobi."
  },
  {
    letter: "O",
    title: "Oklahoma",
    text: "qizil insonlar yurti degan manoni anglatadi"
  },
  {
    letter: "O",
    title: "Oksyumoron",
    text: "Bu bir-biriga zid bo’lgan so’z yoki tushunchalarning birikmasidan iborat bo’ladi. U adabiyotda, nutqda, hatto kundalik tilimizda ham ko’pincha istehzo, kinoya yoki chuqur ma’no berish uchun ishlatiladi. Masalan,Tirik murda, abadiyatning oxiri, ochiq sir, oʻlik jonlar."
  },
  {
    letter: "O",
    title: "Oldos Leonard Haksli (1894-1963)",
    text: "Ingliz yozuvchisi va faylasuf. U 1932-yilda yozilgan mashhur «Ajib yangi dunyo» («Brave New World») romanida genetika, sun’iy baxt va nazorat ostidagi jamiyatni tasvirlab, distopik adabiyotga asos soldi. Haksli «1984» romani muallifi Jorj Oruellning ustozlaridan biri bo’lgan. Shuningdek, «The Doors of Perception» asarida psixoaktiv moddalarning ongga ta’sirini o’rganadi. Hakslining g’oyalari zamonaviy san’at va musiqa, xususan The Doors guruhiga ham kuchli ta’sir ko’rsatgan."
  },
  {
    letter: "O",
    title: "Oltin malina",
    text: "(Golden Raspberry Awards yoki qisqacha Razzies) nomi “malina” bilan bog’liq bo’lishining sababi – ingliz tilidagi “blowing a raspberry” iborasidan kelib chiqqan. Bu ibora tilni lablar orasida titratib, masxara yoki norozilik ifodalash ma’nosini anglatadi. 1981-yilda amerikalik Jon Uilson tomonidan yaratilgan anti-mukofot boʻlib, yilning eng yomon aktyori, ssenariysi, rejissyori, film qoʻshigʻi va filmlariga beriladi. “Oltin malina” nomzodlari va gʻolblari “Oskar” mukofotiga nomzodlar va gʻoliblar eʼlon qilinishidan bir kun avval eʼlon qilinadi. Mukofotning nomida “oltin” so’zi bo’lsa-da ,taxminan, 5 dollar turadigan plastik malina mevasi bilan bezatilgan oltin rangga bo’yalgan tennis to’pining shakliga ega"
  },
  {
    letter: "O",
    title: "Oltin Mangust",
    text: "Xalqaro sport mukofoti bo’lib, jahon maydonlarida yuksak natijalarga erishgan sportchilarni sharaflash uchun ta’sis etilgan. Uning maqsadi — sport an’analarini mustahkamlash, sog’lom turmush tarzini targ’ib qilish, sport rivojiga hissa qo’shgan murabbiylar va faxriylarni e’zozlashdir. Haykalcha shaklidagi mukofot “Golden Mongoose International Sports Award” yozuvi bilan ajralib turadi va turli mamlakatlardan eng munosib sport ahliga topshiriladi."
  },
  {
    letter: "O",
    title: "Oltin Quyosh Qushi",
    text: "(Golden Sun Bird) — 3000 yillik sirli artefakt 2001-yilda Xitoyning Sichuan viloyatidagi qadimiy Sanxingdui yodgorligidan topilgan bu nozik oltin bezak olimlarni hayratda qoldirdi. Uning diametri atigi 12,5 sm, lekin undagi mukammal naqshlar 3000 yillik texnik mahoratni ko’rsatadi."
  },
  {
    letter: "O",
    title: "Ona suti bilan kirgan",
    text: "Bu ibora rimlik donishmand va notiq Setseron (mil.avv 106-43) asarlarida ilk bora uchraydi. Keyinchalik Avgustin (354-430)ning “Tazarru” asarining uchinchi kitobida “men oʻzimdagi barcha xislatlarni ona suti orqali olganman” degan iborani yozgan. Bu gap insondagi biror xislat yoki kamchilikning juda yoshligidan paydo boʻlishini anglatadi. Ya’ni, “Sut bilan kirib, jon bilan chiqadi” degan ma’noda."
  },
  {
    letter: "O",
    title: "Opta Sports",
    text: "Ilgari Opta Sportsdata va ko’proq Opta nomi bilan tanilgan.Britaniya sport tahlili kompaniyasi. Opta 70 dan ortiq mamlakatlarda 30 dan ortiq sport turlari bo’yicha ma’lumotlarni taqdim etadi, mijozlar ligalar va federatsiyalardan tortib, teleradiokompaniyalar va tikish veb- saytlarigacha. Kompaniya 1996-yilda tashkil etilgan va 2013-yilda Perform Group tomonidan sotib olingan . Oʻz navbatida, Perform Group 2019-yilda Vista Equity Partners tomonidan sotib olindi va uni STATS MChJ bilan birlashtirib, Opta’ning hozirgi bosh kompaniyasi Stats Performni tashkil qildi."
  },
  {
    letter: "O",
    title: "Oq boʻyin",
    text: "Normurod Norqobilov asari"
  },
  {
    letter: "O",
    title: "Oq bulutlar oppoq bulutlar",
    text: "Oʻtkir Hoshimovning asari"
  },
  {
    letter: "O",
    title: "Oq fil ideomasi",
    text: "Juda qimmat, lekin foydasiz yoki ortiqcha narsani anglatadi. Idiomaning kelib chiqishi Janubiy-sharqiy Osiyoga borib taqaladi. Oq fil o’z egasining moliyaviy jihatdan yaxshi holatda ekanligini bildirgan. Agar monarx kimgadir oq fil sovg’a qilsa, bu monarxning o’sha odamga nisbatan himmatini bildirgan. Biroq, boshqa tomondan fil muqaddas bo’lgani uchun uni sotish yoki xo’jalik ishlarida ishlatish mumkin emas edi. Uni boqish va saqlash esa katta harajat talab qilgan."
  },
  {
    letter: "O",
    title: "Oq kema",
    text: "Chingiz Aytmatovning asari"
  },
  {
    letter: "O",
    title: "Oq kun",
    text: "Yaponiyada 14-mart kuni nishonlanadigan kun."
  },
  {
    letter: "O",
    title: "Oq palto sindromi",
    text: "insonning mutlaqo noo’rin holatlarda, har tomonlama o’z ustunligini namoyish etishga bo’lgan ishtiyoqini ifodalaydi. Ushbu sindromga chalingan insonlar, turli xil manipulyatsiyalardan foydalanib, boshqalarning nazarida “ko’tarilish”ga harakat qilishadi. Bunday insonlar, o’z tasavvurlarida, hamma narsani “iloji boricha yaxshilikka” hal qilishga intilish va o’zlaridagi bilim va tajribani joriy vaziyatda eng to’g’ri deb hisoblash bilan ajralib turishadi. Oq palto sindromiga ega bo’lgan insonning yonida, siz doimo o’zingizni bo’ysunuvchi rolida his qilasiz. Inson qancha uzoq bu sindromning hukmronligi ostida bo’lsa, shuncha ko’p o’zining qarashlari to’g’riligiga, boshqalarning his-tuyg’ulari va fikrlari esa noto’g’ri va yolg’on ekanligiga ishonishni boshlaydi."
  },
  {
    letter: "O",
    title: "Oq qaldirgʻoch",
    text: "Oʻlmas Umarbekov asari (1974)"
  },
  {
    letter: "O",
    title: "Oq qarg’a iborasi",
    text: "Boshqalardan keskin ajralib turadigan odamlarni tasvirlovchi idioma. Ibora ba’zan salbiy (moslasha olmaydigan kishi) yoki neytral-ijobiy (o’ziga xos shaxs) ma’noda ishlatilishi mumkin. Metafora tabiatda oq qarg’alarning juda kam uchrashidan kelib chiqqan bo’lib, ularning oq rangda ekanligi albinizm bilan bog’liq. Ilk bor ibora sifatida Rim shoiri Yuvenal tomonidan eramizning I asrida ishlatilgan: «Odam qullikdan so’ng shoh bo’lishi, asirlikdan so’ng ozod bo’lishi mumkin, ammo bunday omadli odamning ham oq qarg’ani uchratish ehtimoli kam»."
  },
  {
    letter: "O",
    title: "Oq qushlar oppoq qushlar",
    text: "Odil Yoqubovning asari"
  },
  {
    letter: "O",
    title: "Oq soʻyloq",
    text: "Jek London qissasi (1906)"
  },
  {
    letter: "O",
    title: "Oq suvsar tutgan xonim",
    text: "Leonardo da Vinchi kartinasi (1490)"
  },
  {
    letter: "O",
    title: "Oq tun",
    text: "Mosyagin Lev Pavlobich kartinasi (1959)"
  },
  {
    letter: "O",
    title: "Oq tunlar",
    text: "Dostoyevskiy asari (1848)"
  },
  {
    letter: "O",
    title: "Oq yoqaliklar",
    text: "G’arb sotsiologiyasida axborotni saqlash, foydalanish va qayta ishlash bilan bog’liq aqliy mehnat bilan shug’ullanadigan xodimlar yoki menedjer kabi lavozimda ishlovchilarni ifodalash uchun qabul qilingan termin."
  },
  {
    letter: "O",
    title: "Origami san’ati",
    text: "Qog’ozni buklash orqali turli shakl va figuralar yasash san’ati. U asosan Yaponiyada rivojlangan bo’lib, “ori” – buklash, “kami” – qog’oz degan ma’nolarni bildiradi. Origami 77 qadimdan ramziy ma’noga ega bo’lib, eng mashxur shakl — turna qushi (senbazuru) uzoq umr va baxt timsoli hisoblanadi. Origami nafaqat estetik zavq bag’ishlaydi, balki matematik va muhandislik sohalarida ham qo’llaniladi. NASA muhandislari kosmik apparatlar yig’ilishida origami tamoyillaridan foydalanishadi, tibbiyotda esa yurak stentlari va implantlar yaratishda qo’llaniladi."
  },
  {
    letter: "O",
    title: "Oshibana san’ati",
    text: "Quritilgan gullar va o’t-o’lanlarni maxsus usulda bosib, yassi san’at asarlari yaratish san’ati. Bu usul asosan Yaponiyada rivojlangan bo’lib, yapon tilida “oshi” (bosish) va “bana” (gul) ma’nosini anglatadi.Oshibananing kelib chiqishi ming yillik tarixga ega bo’lib, qadimiy Yapon, Xitoy va Koreya madaniyatlarida tabiatni saqlash va qadrlash usuli sifatida ishlatilgan."
  },
  {
    letter: "O",
    title: "Otello tragediyasi",
    text: "Uilyam Shekspirning “Otello” tragediyasi 1603-yilda yozilgan bo’lib, inson qalbidagi hasad, shubha va manipulyatsiyaning halokatli oqibatlarini yoritadi. Asar syujeti Venetsiya generali Otelloning o’z rafiqasi Dezdemona haqidagi ig’volarga ishonib, uni o’ldirishi va keyinchalik bu tuhmat ekanini anglab, o’z joniga qasd qilishi atrofida qurilgan. Ig’vogar Yago esa maqsadiga yetish uchun har qanday hiylaga tayyor shaxs sifatida namoyon bo’ladi."
  },
  {
    letter: "O",
    title: "Oykumena",
    text: "Turli xalqlar o’rnashib, hayot kechiradigan, odam yashaydigan hududlarni anglatadigan atama. Atama qadimgi yunon tilidagi “oikoumene” — “aholi yashaydigan yer” so’zidan kelib chiqqan. U dastlab yunon va rim geografiyasida odamlar bilgan va o’zlashtirgan dunyo qismini ifodalash uchun ishlatilgan. Ko’pincha qadim davr xaritalarida O’rta Yer dengizi atrofidagi mamlakatlar “oykumena” sifatida ko’rsatilgan. Keyinchalik buyuk kashfiyotlar natijasida bu tushuncha butun Yer sharini qamrab olgan."
  },
  {
    letter: "O",
    title: "Oʻlik mushuk strategiyasi",
    text: "E’tiborni muhim masaladan chalg’itish uchun ishlatiladigan usulni ifodalovchi termin. 2008-yilda, London meri lavozimiga nomzod bo’lgan Boris Jonsonning saylovoldi kampaniyasi vaqtida paydo bo’lgan. O’sha vaqtda polittexnolog Linton Krosbi Jonsonga shunday maslahat beradi: Agar siz kechki ovqat paytida stolga o’lik mushuk qo’ysangiz, hamma shu haqida gapira boshlaydi. Odamlar hayratga tushadimi, jahli chiqadimi farqi yo’q, baribir ularning hammasi “Ey Xudoyim, o’lik mushuk! Dahshat! Uni yo’qotsangizchi” deb baqira boshlaydi. Va ular siz unutishlarini istagan narsalarni unutishadi.” 78 P"
  },

  // === P ===
  {
    letter: "P",
    title: "Pablo Pikasso",
    text: "ispan rassomi, haykaltaroshi va san’at sohasidagi innovatorlardan biri. U kubizm(buyumlarni geometrik shakllar orqali tasvirlashga asoslangan) yo’nalishini yaratgan va o’z asarlari orqali 20- asr san’atiga ulkan ta’sir ko’rsatgan. Mashhur asarlari: “Guernika” - urushning dahshatlarini ramziy ifodalagan asari, “Avinyon qizlari” - Kubizmning boshlanish nuqtasi hisoblangan, “Dora Maar portreti” - Surrealistik uslubdagi mashhur portret. Hayoti davomida sermahsul ijod qilib, 50,000 mingdan ziyod asar yaratgan."
  },
  {
    letter: "P",
    title: "Pakola",
    text: "Nomi Pakistan-Cola dan qisqartirilgan xushbo’y gazlangan alkogolsiz ichimlik. Pokistonning birinchi milliy ichimligi. Pakola ichimligi 1950 yilda Haji Ali Mohammad tomonidan asos solingan Mehran Bottlers kompaniyasi tomonidan ishlab chiqarilgan. Haji Ali Mohammad Pokistondagi ichimliklar sanoatini rivojlantirishda muhim rol o’ynagan tadbirkorlardan biri hisoblanadi. 1960-yillarning boshida odamlar Pakolani sovutilgan sut bilan aralashtirib, Ramazon oyida umumiy iftorlik paytida ko’zalarda berishni boshladilar."
  },
  {
    letter: "P",
    title: "Panama shlyapasi",
    text: "Dunyoga mashhur Panama shlyapalari aslida Ekvadorda tayyorlanadi. Ushbu shlyapalar Panama kanalini quruvchilari uchun olib kelingan va 1906-yilda “The New York Times” gazetasida Panama kanali qurilishini kuzatayotgan prezident Teodor Ruzveltning shunday shlyapani kiygan surati chop etilishi ushbu nom ostida mashhur bo’lishiga asosiy sabab bo’lgan."
  },
  {
    letter: "P",
    title: "Panatseya",
    text: "Yunon mifologiyasida barcha dardlarga davo bo’lgan vosita, dori. U tabobat ma’budi Asklepiyning qizi Panakeya nomidan olingan bo’lib, yunonchadan «hamma dardga davo» degan ma’noni anglatadi. Misol uchun Jenshen oʻsimligi Sharq tabobatida qadimdan barcha dardlarga davo sifatida qo’llanilgan. Ba’zida uni «Sharqning panatseyasi» deb atashadi."
  },
  {
    letter: "P",
    title: "Pangramma",
    text: "(grekcha - “hamma harflar”) Alifboning barcha harflarini imkon qadar bir martadan ortiq ishlatmagan holda yaratilgan qisqa matn. Pangrammalarning qanday paydo bo’lgani haqida birorta ishonchli manba mavjud emas. Ch.Bombo 1875-yilda miloddan avvalgi IV asrda shoir Avsoniy barcha harflarni o’z ichiga olgan she’rlar yozgani haqida aytib o’tgan. Eng mashxur ingliz pangrammasi — “The quick brown fox jumps over the lazy dog” * 1885-yildan beri ma’lum."
  },
  {
    letter: "P",
    title: "Panurg podasi",
    text: "Bu ibora odamlarning ko’r-ko’rona yetakchiga ergashishi va mustaqil fikrlay olmasligini ifodalaydi. Fransua Rablening Gargantua va Pantagryuel asarida Panurg ismli qahramon dushmanidan o’ch olish uchun bitta qo’yni daryoga tashlaydi. Buni ko’rgan boshqa qo’ylar unga ergashib, o’zlarini suvga tashlab, halok bo’lishadi."
  },
  {
    letter: "P",
    title: "Pareidoliya",
    text: "Bu inson miyasi mavhum yoki tasodifiy shakllar ichida ma’noli obrazlarni, ayniqsa odam yuzi, hayvon, yoki tanish narsalarni ko’rib olish holatidir. Bu hodisa nevrologik jihatdan miyamizning “tanib olishga ishtiyoqi” kuchli bo’lishi bilan bog’liq. Odam miyasida yuzlarni tanib olish uchun maxsus moslashgan hudud bor — fusiform facial area (FFA). Shu sababli biz uy devoridagi dog’, osmondagi bulut, non bo’lagi, hatto elektr rozilkasida ham “yuz” ko’rib yuborishimiz mumkin."
  },
  {
    letter: "P",
    title: "Parfiya o’qi",
    text: "Suhbat yoki munozarada, raqibni qurolsizlantirib, uni tahlikaga solib qo’yuvchi eng so’nggi fikr yoki harakatni anglatuvchi majoziy ibora. Parfiya davlati otliq kamonchilari tomonidan ishlatilgan maxsus harbiy taktika bo’lib, jang paytida dushmanni aldash va orqaga qarab oʻq otish usuliga asoslangan boʻlin, jangda kimnidir kutilmaganda aniq zarba berishi tushuniladi."
  },
  {
    letter: "P",
    title: "Parij sindromi",
    text: "ko’p jihatdan Parijga tashrif buyurgan yapon sayyohlari uchun xosdir. Parijga har yili olti millionga yaqin yapon sayyohlari tashrif buyuradilar. Ular o’zlari kutgan fantastik, kuchli romantika, yuqori moda va jozibali ko’rinishga ega degan hayol bilan shaharga tashrif buyuradilar. Agarda shahar ular oʻylaganlaridek boʻlib chiqmasa, ularda ba’zi gallyutsinatsiyalar, bezovtalik, bosh aylanishi va terlash kabi holatlar kuzatiladi. Bu dahshatli shok holatidir, undan qutilishining yagona yo’li Parijdan chiqib ketish va unga qaytmaslikdir."
  },
  {
    letter: "P",
    title: "PARKUR",
    text: "Atrof-muhitdagi to’siqlarni (devorlar, panjaralar, uylar orasidagi masofalar) faqat inson tanasi imkoniyatlaridan foydalangan holda, eng tez va samarali tarzda bosib o’tish san’ati."
  },
  {
    letter: "P",
    title: "Parnas togʻi",
    text: "Gretsiyaning markazidagi eng yirik va baland togʼ tizmasidir (2457 m). Jahon madaniyatida shoirlar va ijodkorlar ramzi sanaladi. Fransiyadagi mashhur “Parnaschilar” adabiy oqimi va Parijdagi Monparnas dahasi nomi shu togʻdan olingan. Qadimgi yunon mifologiyasida Apollon va muzalar (ilhom ilohalari) yashagan muqaddas makondir."
  },
  {
    letter: "P",
    title: "Parnassius Autocrator",
    text: "Kelib chiqishi rus bo’lgan amerikalik entimolog Andrey Nikolayevich Ivanov 1911-yilda kolleksiyachi A.Golbekning Pomirga sayohat vaqtida to’plagan hashorat na’munalarini o’rganayotib yangi turdagi kapalaklarga duch keladi. 1912-yilda u yangi turga Romanovlar sulolasi hukmronligining 300 yilligi munosabati bilan “Parnassius Autocrator” nomini beradi. Kapalak o’z nomiga juda ham munosib edi — uning qanotlaridagi qora-oq-oltinrang naqsh Romanovlar bayrog’i ranglariga o’xshab ketardi."
  },
  {
    letter: "P",
    title: "Paskal garovi",
    text: "fransuz faylasufi va matematigi Blez Paskal ilgari surgan falsafiy argument. U Xudo mavjud yoki mavjud emasligini isbotlashga emas, noaniqlik sharoitida qanday qaror qilish ma’qul ekanini ko’rib chiqadi."
  },
  {
    letter: "P",
    title: "Pastish",
    text: "boshqa ijodkor yoki asarning uslubiga taqlid qilib yaratilgan asar."
  },
  {
    letter: "P",
    title: "Pasxa oroli",
    text: "sirli Moai haykallari. 1722-yilda gollandiyalik admiral Yakob Roggeven Pasxa bayrami kuni kemasidan orolni ko’rib, uni “Pasxa oroli” deb atadi. Orolga tushgan sayohatchilarni eng avvalo ulkan tosh haykallar – moai lar hayratga soldi. Moai – “but” yoki “sanam” degan ma’noni anglatadi. Ularning umumiy qiyofasi: uzun burun, cho’zilgan quloqlar, chiziq shaklidagi qo’llar va jiddiy chehra."
  },
  {
    letter: "P",
    title: "Patefon",
    text: "Grammofon plastinkasiga yozilgan tovushni qayta eshittirish uchun xizmat qiladigan apparat, grammofonning turi. Dastlab katta karnayli boʻlgan, keyinchalik karnayi quti ichiga joylashtirilgan. Diskini dasta bilan burab taranglab turiladigan prujina aylantiradi. Elektr toki talab qilmaydigan bu qurilma ovozni igna orqali plastinkadan o’qib, rezonator orqali eshittirgan."
  },
  {
    letter: "P",
    title: "Patologoanatom",
    text: "To’qima va organizm a’zolarini o’ganish orqali murdadagi o’lim sabablarini yoki tirik insondagi xastaliklarni aniqlovchi tibbiy mutaxassis. Bunday mutaxassislar jasadni yorib ko’rish, organlarni tekshirish va undagi to’qimalarning mikroskopik tahlillari orqali o’lim sabablarini aniqlaydi. Sud-tibbiy ekspertizada ishtirok etib, o’lim sababi, zaharlanish yoki jinoyat bilan bog’liq holatlarni tahlil qiladi."
  },
  {
    letter: "P",
    title: "Payshanba kuni yomg’irdan keyin",
    text: "“Payshanba kuni yomg’irdan keyin” degan ibora slavyan mifologiyasida momaqaldiroq va chaqmoq xudosi Perunga ishonmaslik tufayli paydo bo’lgan. Payshanba Perunning kuni edi. Odamlarning momaqaldiroq va chaqmoq xudosiga qilgan ibodatlari har doim ham amalga oshavermagan. Shuning uchun, slavyanlar amalga oshmaydigan narsa haqida gapirganlarida “bu payshanba kuni yomg’irdan keyin sodir bo’lishi mumkin” iborasini qo’llay boshlashgan."
  },
  {
    letter: "P",
    title: "Pedofobiya",
    text: "Bu bolalardan kuchli va asossiz qo’rquv yoki ularni yoqtirmaslik holatidir. Bu fobiya bilan yashovchilar bolalarning tovushi, harakati yoki hatto suratiga nisbatan ham zo’r bezovtalik his qilishlari mumkin. “Pedophobia” atamasi ilk bor 1967-yilda amerikalik psixolog Gerome Kagan tomonidan bolalarga nisbatan irratsional qo’rquvni ifodalash uchun ishlatilgan. U o’z tadqiqotlarida kattalarning ba’zida bolalarning beqarorligi va nazorat qilib bo’lmaydigan xatti-harakatlaridan xavotirga tushishini ta’kidlagan."
  },
  {
    letter: "P",
    title: "PENDELTYUR",
    text: "Jamoat binolari va transport vositalarida (metropoliten, vokzal, savdo markazlari) o’rnatiladigan, har ikki tomonga — ham ichkariga, ham tashqariga erkin ochiladigan maxsus mexanizmli eshiklar."
  },
  {
    letter: "P",
    title: "Penni-farting",
    text: "XIX asr oxirida paydo bo’lgan, old g’ildiragi juda katta, orqa g’ildiragi esa juda kichik bo’lgan ilk tipdagi velosiped. Nomini o’sha davr ingliz tangalaridan olgan: katta penny tangasi old g’ildirakni, kichik farthing tangasi esa orqa g’ildirakni eslatgan. Penni-farting tez yurishi bilan ajralib turgan, ammo baland old g’ildirak tufayli yiqilish xavfi katta bo’lgani sababli tez orada zamonaviy velosipedlar bilan almashtirilgan."
  },
  {
    letter: "P",
    title: "Penologiya",
    text: "bu jinoyat sodir etgan shaxslarga qo’llanadigan jazolar tizimi va ularning samaradorligini o’rganadigan soha."
  },
  {
    letter: "P",
    title: "Penrouz zinasi – imkonsiz zinapoya",
    text: "Inception filmidagi mashhur sahnada ko’ringan Penrouz zinasi — paradoksal shakldagi “imkonsiz obyekt” bo’lib, uni Lionel Penrouz va uning o’g’li Rojer Penrouz 1958-yilda yaratgan. Zinapoyaning har qanday yo’nalishda harakati doimo boshlang’ich nuqtaga olib keladi. Rassom Maurits Esher bu figuraning mashhurligini oshirib, uni “Ko’tarilish va tushish” asarida aks ettirgan. Penrouz zinasini real 3D fazoda qurish mumkin emas."
  },
  {
    letter: "P",
    title: "Pentagramma",
    text: "bu besh qirrali yulduz shakli bo’lib, qadimdan turli diniy va madaniy kontekstlarda qo’llanib kelgan."
  },
  {
    letter: "P",
    title: "PERSEIDALAR",
    text: "Har yili iyul oyining oxiridan avgust oyining o’rtalariga qadar namoyon bo’ladigan, Yerdan kuzatish mumkin bo’lgan eng mashhur va yorqin meteorlar oqimi (yulduzlar uchishi)."
  },
  {
    letter: "P",
    title: "Perun",
    text: "Slavyan mifologiyasida eng qudratli xudolardan biri — urush, momaqaldiroq va yashin hukmdori. Perun osmonda chaqmoq va momaqaldiroq bilan kezadi, dushmanlariga o’qday yashin yog’diradi. U asosan qurol sifatida boltani yoki kamon o’qini ishlatadi. Afsonalarga ko’ra, Perunning asosiy raqibi Veles bo’lib, u er osti dunyosi va chorvaning homiysi sanaladi. Perun va Velesning osmonda va yerdagi abadiy kurashi — slavyan dunyoqarashida tabiat kuchlari muvozanati ramzi bo’lgan."
  },
  {
    letter: "P",
    title: "Petank",
    text: "Fransiyada paydo bo’lgan an’anaviy o’yin bo’lib, metall sharlarni kichik yog’och to’pchaga imkon qadar yaqinroq tashlash orqali o’ynaladi. O’yin odatda ochiq maydonda, qumli yoki shag’alli yerda o’tkaziladi. Ishtirokchilar navbatma-navbat shar uloqtirib, eng yaqin joylashtira olgan jamoa ochko oladi."
  },
  {
    letter: "P",
    title: "Petri idishi",
    text: "(muqobil ravishda Petri plastinkasi yoki hujayra madaniyati idishi sifatida tanilgan Biologlar hujayralarni etishtirish mumkin bo’lgan o’sish muhitini, dastlab bakteriyalar , zamburug’lar va mayda moxlar hujayralarini saqlash uchun foydalanadigan, sayoz shaffof qopqoqli idishdir . Idish uning ixtirochisi, nemis bakteriologi Yuliy Richard Petri sharafiga nomlangan . Birinchi antibiotik bo’lgan penitsillin 1929- yilda Aleksandr Fleming Petri idishidagi bakterial kulturani ifloslantiruvchi penitsilium mog’or uning atrofidagi bakteriyalarni o’ldirganini payqaganida kashf etilgan."
  },
  {
    letter: "P",
    title: "Petrikor",
    text: "Yomg’ir tomchilari quruq tuproq yoki toshga tushganda havoga tarqaladigan yoqimli hid. Bu hid o’simliklar ishlab chiqaradigan yog’simon modda va tuproqdagi bakteriyalar ajratadigan geosmin aralashmasidan kelib chiqadi. Atama 1964-yilda avstraliyalik izlanuvchilar Izabella Bear hamda Roderik Tomas tomonidan maxsus «Nature» jurnalidagi maqola uchun o’ylab topilgan. Yunoncha petra (“tosh”) va ichor (ma’budlar tomirida oqadigan suyuqlik) ma’nosini anglatadi."
  },
  {
    letter: "P",
    title: "Peysi",
    text: "Bu yahudiy erkaklarining quloq yonida osilib turuvchi jingalak soch to’plami bo’lib, u diniy odat sifatida saqlanadi. Bu so’z ivrit tilidan olingan bo’lib, “pe’ot” (‫“ — )פֵּאוֹת‬boshning chekkalari” degan ma’noni anglatadi. Tavrotda boshning yon qismlarini qirqmaslik buyurilgan (Levitlar 19:27). Ayniqsa ortodoks va hasid yahudiylar bu urfga qat’iy amal qilib, peysini uslub bilan jingalaklab saqlashadi."
  },
  {
    letter: "P",
    title: "Phantom",
    text: "so’zi yunoncha phantasma “ko’rinish, soxta shakl” ma’nosidan kelib chiqqan. U odatda odamlar ko’ziga ko’ringan, ammo darhol g’oyib bo’ladigan soxta arvoh sifatida tasavvur qilinadi."
  },
  {
    letter: "P",
    title: "Pifagor chashkasi",
    text: "(ochko’zlik chashkasi, adolatli chashka) Pifagor tomonidan ixtiro qilingan maxsus idish. Ushbu chashkani butunlay to’ldirish imkonsiz bo’lgan. Agar bunga urinsangiz, maxsus teshik orqali ortiqcha suv to’kilib ketardi. Pifagor bu idishni Samosda suv kam bo’lgani sababli barcha qullar bir xil miqdorda suv ichishi uchun ixtiro qilgan deb hisoblanadi"
  },
  {
    letter: "P",
    title: "Pigmalion afsonasi",
    text: "Pigmalion Kipr orolining podshosi va iste’dodli haykaltarosh edi. U ayollarning kamchiliklaridan norozi bo’lib, hech kimga uylanmadi va o’z qo’llari bilan ideal go’zallikka ega haykal – Galateyani yaratdi. Haykal shu qadar chiroyli ediki, Pigmalion unga oshiq bo’lib, tirik insondek mehr bera boshladi. Ma’buda Afrodita uning sevgisini ko’rib, haykalga jon ato etdi. Shu tariqa, Pigmalion o’z sevgilisiga erishdi va u bilan baxtli yashadi."
  },
  {
    letter: "P",
    title: "Pikvik sindromi",
    text: "semirish fonida nafas olish mexanizmining buzilishi. Bunda, yuqori ortiqcha vazn fonida, yurak va tana yuzaga kelgan o’zgarishlarga moslasha olmaydi. Natijada, qondagi kislorod ko’rsatkichi pasayadi va bu, kunduzgi uyquchanlik, dam olish vaqtida nafas siqilishi va yuqori qon bosimi orqali namoyon bo’ladi. Sindrom, 1836-1837-yillarda chop etilgan, Charlz Dikkensning “Pikvik klubining oʻlimidan keyingi yozishmalari” romani qahramoni - Jodan ilhomlanib nomlangan. Jo, kun davomida ko’p ovqatlanar va istalgan vaqtda, istalgan joyda uxlab qolar edi. Ilk marta, 1956-yilda bu kasallik o’rganilgandan so’ng, “Pikvik sindromi” nomi ostida yuritila boshlandi."
  },
  {
    letter: "P",
    title: "Piltdaun odami",
    text: "20- asrning eng mashhur ilmiy nayranglaridan biridir.1912- yilda Angliyaning Sharqiy Sasseks shahridagi Piltdaun shag’al chuqurida Charlz Doson tomonidan topilgan deb e’lon qilingan. Odamlar va maymunlar o’rtasida paydo bo’lgan noma’lum ibtidoiy odamning toshga aylangan qoldiqlari, deb tanishtirilgan. Biroq 1953-yilda olimlar bu qoldiqlar soxtalashtirilganini aniqladilar: inson bosh suyagi va orangutan jag’ suyagi sun’iy ravishda birlashtirilgan edi. Bu fan tarixidagi eng mashhur qalbakilashtirishlardan biri bo’lib, 40 yil davomida antropologiyani chalg’itgan."
  },
  {
    letter: "P",
    title: "Pingvin effekti",
    text: "bu olomon psixologiyasidan olingan atama bo’lib, qaysidir “qurbon” nimadir boshlashini kutish va vaziyatga qarab unga barcha qo’shilishini anglatadi."
  },
  {
    letter: "P",
    title: "Pinokkio",
    text: "italiyalik yozuvchi Karlo Kollodi qahramoni, 1883-yilda yozilgan asarda paydo bo’lgan."
  },
  {
    letter: "P",
    title: "Pinyata",
    text: "Qog’oz va shu kabi yupqa materialdan tayyorlanib, ichiga shirinlik yoki rangli qog’oz bo’laklari to’ldirilgan o’yinchoq. Asosan tug’ilgan kun bazmlarida ko’ngilochar o’yinlarda qo’llaniladi. Kelib chiqishi Meksika mamlakati bo’lib, shakli turli hayvonlar, asosan ot hamda 7 qirrali yulduz ko’rinishida bo’ladi. O’yin sharti bo’yicha ishtirokchining ko’zi bog’lanib, 2-3 bor joyida aylantirilib, so’ngra pinyatani topish va tayoq bilan urib tushirish, shu bilan ichidagi shirinliklarni barchaga tarqatish talab etiladi."
  },
  {
    letter: "P",
    title: "Pircha g’alaba",
    text: "Mag’lubiyatga teng bo’lgan g’alaba degan ma’noni anglatadi. Iborasining kelib chiqishi qadimgi Yunonistondagi Epir davlati podshosi Pir bilan bogʻliq. Miloddan avvalgi 279-yilda uning qo’shini rimliklarga qarshi jangda g’alaba qozongan. Ammo jangdagi yo’qotishlarni ko’rib, Pir: “Yana shunday g’alaba qozonsam, qo’shinsiz qolaman ekan”, degan. Biroq, bu jangdan oldin ham qadimgi mualliflar “Kadm g’alabasi” sinonim iborasiga duch kelishgan. Bu Argivlarga qarshi urushda Fiva shahrining afsonaviy asoschisi Kadm armiyasining xuddi shunday og’ir g’alabasiga ishora qiladi."
  },
  {
    letter: "P",
    title: "Pit-stop",
    text: "Avto va motosportda poyga davomida avtomobil yoki mototsiklni qisqa muddatga to’xtatish jarayoni. Bu jarayonda mashina belgilangan zonaga kiradi va jamoa a’zolari (pit crew) kerakli ishlarni bajarishadi. Ko’pincha shinalarni almashtirish va yoqilg’i quyish ishlari amalga oshiriladi. Formula 1 tarixidagi eng tezkor pit stop 2019 - yilda Red Bull Racing jamoasi tomonidan bajarilgan bo’lib, atigi 1,82 soniya davom etgan !"
  },
  {
    letter: "P",
    title: "Piter Pen sindromi",
    text: "doimo beg’ubor bola bo’lib qolish istagi katta odamlarning voqelikni to’g’ri va jiddiy qabul qila olmasliklari natijasida yuzaga keladi. Hayoti davomida hech bo’lmaganda 1 marotaba “Qaniydi yoshligimga qaytib qolsam edi,buncha muammo va g’am tashvishlar bo’lmagan 83 bo’lardi” deydiganlar talaygina. Psixologlar buni “kassallik”ni “Piter Pen sindromi” deb atashadi. Bu holatda odam katta bo’lishdan, o’ziga buror bir mas’uliyatni olishdan qo’rqadi va bulardan qochadi. Bu termin birinchi bora 1983-yilda “O’sib ulg’aymagan erkaklar” kitobida qoʻllaniladi. Baʼzi manbalarda bu sindromni ilk bor Yaponiyada o’z maoshlaridan qoniqmayotgan ofis hodimlari orasida tarqalgani keltirib o’tiriladi."
  },
  {
    letter: "P",
    title: "Pitsa effekti",
    text: "ma’lum bir xalq yoki millat madaniyatining bir qismi boshqa bir muhitga chiqib, turli o’zgarishlarni boshdan kechirishi va o’z “ona” madaniyatiga qaytib kirishini ifodalovchi termindir. Termin 1970-yilda indolog va antropolog Leopold Fisher (keyinchalik Agexananda Bxarati nomini olgan) tomonidan taklif qilingan bo’lib, bunga Italiyada kambag’allar taomi bo’lgan pitsaning Amerikaga ko’chib borgan italyanlar tomonidan mukammallahtirilgani va keyinchalik amerikaliklar orasida mashxur taomga aylanib, o’zining tarixiy vataniga “italyan oshxonasining nozik taomi” sifatida qaytib kelgani sabab bo’lgan."
  },
  {
    letter: "P",
    title: "Platsebo effekti",
    text: "biron-bir davolash hususiyatiga ega bo’lmagan, lekin shu maqsadda ishlatiladigan vosita hisoblanadi. Bu vositani qabul qilayotgan bemor, uni davolash hususiyati yo’q ekanligi haqida bilmaydi, biroq unga chindan ham ishonadi. Bunga misol qilsak, sizga biron dori beriladi va u sizni tanangizni ma’lum qismiga ta’sir etishi haqida uqtiriladi. Siz to’xtamasdan bu haqida o’ylaysiz va u chindan ham sizga ta’sir etadi. > Buni sinab ko’rish uchun, boshi og’riyotgan bemorga juda kuchli dori > berayabman deya, unga oddiy suv solib bering. Hech qancha vaqt > o’tmasdan bemor og’riqni ma’lum qismini (80% ta’sir etish > hususiyati aniqlangan) yo’qotadi."
  },
  {
    letter: "P",
    title: "Plogging",
    text: "yugurish yoki piyoda yurish paytida yo’lda uchragan chiqindilarni yig’ib borish faoliyati. Bu sport va tabiatni tozalashni birlashtiradi. Atama Shvetsiyada paydo bo’lgan."
  },
  {
    letter: "P",
    title: "Polestonok kafesida qovurilgan yashil pomidorlar",
    text: "Fenni Flegg asari (1987)"
  },
  {
    letter: "P",
    title: "Polikrat",
    text: "(Polycrates) Miloddan avvalgi VI asrda Samos orolini boshqargan yunon hukmdori. U kuchli dengiz floti tuzib, Egey dengizidagi eng qudratli hukmdorlardan biriga aylangan. “Polikrat uzugi” haddan tashqari omadning oxiri yaxshi tugamaydi. Rivoyatga ko’ra, Misr fir’avni Amasis Polikratning uzluksiz omadidan xavotirlanib, unga eng qadrli narsasidan voz kechishni maslahat beradi. Polikrat qimmatbaho uzugini dengizga uloqtiradi. Bir necha kun o’tgach, baliqchi tutgan baliqning qornidan o’sha uzuk topiladi. Bu hodisa “taqdirdan qochib bo’lmaydi” degan alomat sifatida talqin qilinadi. Ko’p o’tmay Polikrat dushmanlari tomonidan hiyla bilan qo’lga olinadi va qatl etiladi."
  },
  {
    letter: "P",
    title: "Poltergeist",
    text: "so’zi nemis tilidan olingan bo’lib “poltern””shovqin qilish”, geist — “ruh” degan ma’noni anglatadi. U odatda uy ichida narsalarni siljituvchi, eshiklarni qarsillatib ochib-yopuvchi, sirli tovushlar chiqaruvchi arvoh sifatida tasvirlanadi."
  },
  {
    letter: "P",
    title: "Pomada to’pponcha",
    text: "Sovuq urush davri josuslarining quroli. Lab bo’yog’i naychasiga joylashtirilgan 4,5 mm patronli KGB josuslari to’pponchasini “O’lim bo’sasi” deb ham nomlashadi. U orqali faqat bitta o’q otish mumkin bo’lgan. Chunki ushbu to’pponchani qayta o’qlashning iloji yo’q edi. Shuning uchun u faqat so’nggi chora sifatida ishlatilgan."
  },
  {
    letter: "P",
    title: "Potyomkin qishlog’i",
    text: "tashqi ko’rinishni chiroyli ko’rsatish uchun haqiqatni yashirishga urinishni ifodalovchi ibora. Rivoyatlarga ko’ra, Rossiya sarkardasi Grigoriy Potyomkin Qrimga Yekaterina II tashrif buyurganda, hudud rivojlanganini ko’rsatish uchun faqat sirtidan bezatilgan soxta qishloqlar qurdirgan. Bu atama bugungi kunda ham haqiqatdan ko’ra ko’rinishga e’tibor qaratiladigan vaziyatlarni tasvirlashda qo’llaniladi."
  },
  {
    letter: "P",
    title: "Praga bahori (1968)",
    text: "Chexoslovakiya KP yetakchisi Aleksandr Dubchek “insoniy yuzli sotsializm” siyosatini boshladi — bu so’z erkinligi, matbuot va safar qilish huquqlarini o’z ichiga olgan islohotlar edi. 1968-yil 20-avgustda SSSR boshchiligidagi 5 davlat (SSSR, Polsha, GDR, Vengriya va Bolgariya) 500 000 askar bilan Chexoslovakiyaga bostirib kirdi. Islohotlar to’xtatildi, ammo Praga bahori butun dunyo bo’ylab erkinlik uchun kurash ramziga aylandi."
  },
  {
    letter: "P",
    title: "Prandtl–Glauert effekti",
    text: "Bu effekt samolyot tovush tezligiga yaqinlashganda hosil bo’ladigan bug’ halqasini ifodalaydi. Ko’pchilik bu holatni “tovush to’sig’ini yorish” deb o’ylaydi, ammo aslida bu — havo bosimining keskin pasayishi natijasida yuzaga kelgan vizual illyuziya. Effekt 1920- yillarda nemis olimi Ludwig Prandtl va amerikalik Hermann Glauert tomonidan aerodinamika asosida nazariy jihatdan ishlab chiqilgan."
  },
  {
    letter: "P",
    title: "PROJEKTOR",
    text: "(Прожектор) effekti – bu insonning xatti-harakatlari va tashqi ko’rinishi boshqalar eʼtiborida ekanligini ortiqcha baholash tendensiyasidan iborat bo’lgan psixologik effekt. “Прожектор” effektining ma’nosi shundaki, odamning tashqi ko’rinishi va uning harakatlarining ko’rinishi o’z-o’zidan bo’rttiriladi, go’yo yorug’lik nuri bilan yoritilgandek. Boshqacha qilib aytganda, biz har doim oʻzimizni diqqat markazida deb o’ylaymiz. Bu ta’sirni birinchi bo’lib amerikalik psixolog Tomas Gilovich payqagan va o’rgangan. Keyinchalik, Uilyams kollejining (AQSh) professori Kennet Savitskiy bilan birgalikda bu tasirga “Прожектор” effekti nomini berishgan."
  },
  {
    letter: "P",
    title: "Prokrust",
    text: "Qadimgi Yunon afsonalarida tilga olingan mashhur qotil. U yo’lovchilarni o’zining temir to’shagiga yotqizib, kimning bo’yi qisqa bo’lsa, cho’zib qiynagan, bo’yi uzun bo’lsa, ortiqchasini kesib tashlagan. Prokrust to’shagi degan ibora hozirgacha ishlatiladi — bu har qanday odam yoki hodisani zo’rlab, mos kelmaydigan bir qolipga solishga urinish ma’nosini anglatadi."
  },
  {
    letter: "P",
    title: "Prokrust to’shagi",
    text: "Iborasi qadimgi yunon mifologiyasidan olingan. Prokrust — bu yo’lovchilarni to’xtatib, ularni o’zining temir to’shagiga yotqizadigan zolim edi. Agar odam to’shakdan uzun bo’lsa, oyoq-qo’llarini kesar, agar qisqaroq bo’lsa, zo’rlab cho’zardi — toki har kim to’shakka “mos” kelsin. Bugun bu ibora hayotda yoki jamiyatda insonlarni majburan bir qolipga solish, ularning tabiiy xilma- xilligini inkor qilish holatlariga nisbatan ishlatiladi. Masalan, har kimni bir xil fikrlashga majburlash yoki ijodiy erkinlikni cheklash — bu “Prokrust to’shagiga yotqizish”dir."
  },
  {
    letter: "P",
    title: "Pronoya",
    text: "Paranoyaning teskarisi bo’lgan tushuncha. Agar Paranoyada inson hamma narsadan shubhalanib, atrofdagilar unga qarshi fitna qilishayotganini o’ylasa, Pronoyada - esa aksincha, dunyo va odamlar unga yaxshilik tilashadi, hamma narsa uning foydasiga ishlayapti deb hisoblaydi. Bu tushunchani 1970 - yillarda psixolog Jon Perri Barlou ommalashtirgan."
  },
  {
    letter: "P",
    title: "Puasson Simeon Deni",
    text: "(1781–1840) fransuz matematigi va fizik bo’lib, ehtimollar nazariyasi, matematik fizika va differensial tenglamalar sohalarida katta iz qoldirgan. Uning nomi bilan atalgan 85 Puasson taqsimoti, Puasson tenglamasi va Puasson integrali matematika tarixida muhim o’rin egallaydi. Puasson taqsimoti — bu diskret ehtimollik taqsimoti, u ma’lum vaqt yoki makon oralig’ida aniq sonli hodisalar sodir bo’lish ehtimolini ifodalaydi."
  },
  {
    letter: "P",
    title: "Pulsar",
    text: "juda tez aylanadigan neytron yulduz bo’lib, o’z qutblaridan muntazam ravishda radio, rentgen yoki boshqa nurlanishlarni chiqaradi. U aylanganda nurlanish Yer tomonga yo’nalib, bizga muntazam impulslar sifatida ko’rinadi. Qiziq fakt: Ba’zi pulsarlar soniyasiga yuzlab marta aylanishi mumkin"
  },
  {
    letter: "P",
    title: "Punsh",
    text: "(punch) — Osiyodan kelib chiqqan, keyinchalik butun dunyoga tarqalgan aralash ichimlik bo’lib, meva sharbati, spirtli ichimliklar, shakar va ziravorlar aralashmasidan tayyorlanadi. Punsh Hindiston hududida paydo bo’lgan va dastlab panch (hindcha “besh”) deb atalgan. Chunki ichimlikning dastlabki retseptida 5 ta asosiy mahsulot bo’lgan:"
  },
  {
    letter: "P",
    title: "Pyorl-Harbor",
    text: "1941-yil 7-dekabrda Yaponiyaning AQShbdagi Pyorl-Harbor harbiy bazasiga hujum qilish voqeasi sodir bo’lgan. Yaponiyalik uchuvchilar tongda AQSh floti kemalarini nishonga olib, 188 ta samolyot va 8 ta jangovar kemani ishdan chiqargan va 2400 dan ortiq inson hayotiga zomin bo’lgan. Ertasi kuni AQSh urush e’lon qilgan — shu tariqa mamlakat Ikkinchi jahon urushiga rasman qo’shilgan. Prezident Ruzvelt bu kunni “sharmandalik kuni” deb atagan."
  },
  {
    letter: "P",
    title: "Pyotr I ning suv osti kemasi.",
    text: "Urushda suvosti kemalaridan foydalanish g’oyasini ilk bora Leonardo da Vinchi aytgan. Biroq, ilk bor Pyotr I boshchiligida “yashirin kema” nomini olgan harbiy suvosti kemasi yaratiladi. Uni yasagan usta — duradgor Yefim Prokopyevich Nikonov bo’lgan. Dehqonlar oilasidan chiqqan duradgor 1721-yil yozida o’z kemasida Nevada ikkita muvaffaqiyatli sho’ng’ishni amalga oshiradi."
  },
  {
    letter: "P",
    title: "PYTHON dasturlash tili",
    text: "“Python” nomi ilondan emas! Til nomi ingliz komediya shousi “Monty Python’s Flying Circus” dan olingan. Yaratuvchisi Guido van Rossum shunchaki bu nomni esda qolarli deb topgan. 1991-yilda yaratilgan, 86 Q"
  },

  // === Q ===
  {
    letter: "Q",
    title: "Qashqar rubobi",
    text: "Xitoyning Uyg’ur viloyatidagi Qashqar shaxrida paydo bo’lgan. Shuning uchun qashqar rubobi deb ataladi. Qashqar rubobining uzunligi 80-100 sm dir. Cho’michsimon kosasi tut kabi qattiq daraxtlar yog’ochidan yasaladi. Ijrochilikni oʻzlashtirish birmuncha yengilligi, mohir rubobchi-sozandalar ( Muhammadjon Mirzayev va boshqalar)ning yetishib chiqishi bu sozning 1940- yillardan Oʻzbekistonva Tojikistonda havaskor va professional sozandalar orasida ommalashgan."
  },
  {
    letter: "Q",
    title: "Qichqiriq",
    text: "Edvard Munk (1893) Bu asar insoniy qo’rquv va ichki iztirobning ramziga aylangan. Rassom kuchli ranglar va to’lqinsimon chiziqlar yordamida ichki hayqiriqni butun tabiat bilan uyg’unlashtiradi). Osmonning alangadek qizil rangi va tevarak-atrofdagi notinch manzara tomoshabinda beqarorlik hissini uyg’otadi. Markazdagi siymo qo’rquvni ifodalaydi, ammo u shaxsiy hayqiriq emas — butun insoniyat iztiroblarining timsolidir. Munk bu asar orqali ruhiy holatni ko’z bilan ko’rinarli darajaga olib chiqqan."
  },
  {
    letter: "Q",
    title: "Qizil , koʻk, sariq kompozitsiyasi",
    text: "Pit Mondrian (1930)"
  },
  {
    letter: "Q",
    title: "Qizil ajdaho",
    text: "Tomas Harris asari (1981)"
  },
  {
    letter: "Q",
    title: "Qizil baron",
    text: "Mixail Shumaxerning laqabi"
  },
  {
    letter: "Q",
    title: "Qizil fondagi oʻroq",
    text: "Kazemir Maleyevichning kartinasi (1913)"
  },
  {
    letter: "Q",
    title: "Qizil koʻshkdagi uyqu",
    text: "Sao Syutsinning asari (1791)"
  },
  {
    letter: "Q",
    title: "Qizil kresloda oʻtirgan ayol",
    text: "Pablo Pikassoning kartinasi (1929)"
  },
  {
    letter: "Q",
    title: "Qizil otni choʻmiltirish",
    text: "Kuzma Petrov Vodkinning kartinasi (1913)"
  },
  {
    letter: "Q",
    title: "Qizil va oq gullar urushi",
    text: "1455-1485 Angliya taxti uchun Plantagenetlar sulolasining ikki tarmog’i: Lankasterlar va Yorklar o’rtasida bo’lib o’tgan qonli fuqarolar urushi"
  },
  {
    letter: "Q",
    title: "Qogʻoz yoʻlbars idiomasi",
    text: "Qadimgi Xitoyda donni sichqondan yoki uyni ruhlardan himoya qilish uchun qog’oz yo’lbars yasashgan. Idioma sifatida qog’oz yo’lbars — xavfli ko’rinsa-da, aslida zararsiz bo’lgan narsani ifodalash uchun ishlatiladi."
  },
  {
    letter: "Q",
    title: "Qora ajal",
    text: "(nomli shaxmatchi) 1841-1924-yillarda yashagan Jozef Genri Blekbern angliyaning eng mashxur shaxmatchilaridan biri bo’lgan. Uning shaxmatga qiziqishiga amerikalik shaxmatchi Pol Myorfining Yevropa bo’ylab uyushtirgan gastroli sabab bo’lgan. U doim qora kostyum, qora silindir kiyib yurgan va uzun qora soqol qo’ygan. Ammo unga “Qora ajal” laqabi tashqi ko’rinishi uchun berilmagan. Shaxmatchiga bunday laqab berilishiga uning qora donalarda juda kuchli o’ynashi va deyarli mag’lub bo’lmasligi sabab bo’lgan."
  },
  {
    letter: "Q",
    title: "Qora beva",
    text: "O’zining bir nechta turmush o’rtoqlarini o’ldirgan ayollarga nisbatan ishlatiladigan termin bo’lib, bunday ayollar, odatda, moliyaviy foyda olish maqsadida turmush o’rtoqlari yoki oila a’zolarining joniga qasd qilishadi. Termin Shimoliy va Janubiy Amerikada keng tarqalgan zaharli o’rgimchak nomiga atalib, uning o’ziga xosligi Qora Bevalar o’z «erlaridan» foydalanib bo’lgach, yeb qo’yishadi."
  },
  {
    letter: "Q",
    title: "Qora ritsar",
    text: "O’rta asrlarda o’z geraldik belgisiga ega bo’lmagan ritsarlar qora ritsar deb atalgan. Odatda o’z shaxsiyatini oshkor qilishni istamagan ritsarlar qora ritsarga aylanardi. Qora ritsarlarning ko’payib ketishiga geraldik belgini olish protsessining murakkabligi ham sabab bo’lgan. Odatda bunday belgilarni taqdim qilish zodagonlar tomonidan amalga oshirilgan hamda qat’iy tartibga solingani uchun oddiy ritsarlar unga ega bo’lolmasdi. Bunday ritsarlar yollanma jangchiga aylanar hamda o’z zirhlarini zanglashdan himoyalash uchun qora rangga bo’yab olishardi."
  },
  {
    letter: "Q",
    title: "Qora shlyapa",
    text: "qonunni chetlab oʻtuvchi kiberjinoyatchilar"
  },
  {
    letter: "Q",
    title: "Qora Stalin",
    text: "Mengustu Xayle Mariamning laqabi"
  },
  {
    letter: "Q",
    title: "Quddus sindromi",
    text: "ma’lum bo’lishicha, muqaddas zamin ba’zi diniy odamlarga boshqacha ta’sir qiladi. Bu yerda sayyohlar ba’zida Bibliyaning qahramonlari yoki oxiri zamon haqida qilingan psixotik noto’g’ri tushunchalardan aziyat chekishadi. Quddusdagi vaziyat Parij sindromiga o’xshaydi, chunki tashrif ko’pincha sayohatchining fikriga mos kelmaydi."
  },
  {
    letter: "Q",
    title: "Quid pro quo",
    text: "lotincha ibora bo’lib, “biror narsaning evaziga boshqa narsa” degan ma’noni bildiradi."
  },
  {
    letter: "Q",
    title: "Qunduzcha jangi",
    text: "Amir Temur qoʻshinlari bilan Oltin Oʻrda xoni Toʻxtamish qoʻshini oʻrtasida hozirgi samara bilan Chistopol shaharlari oraligʻida, Volga daryosining sharqiy sohilida joylashgan Qunduzcha (hozirgi Kondurcha) mavzeida sodir boʻlgan jang. Ibn Arabshohning yozishicha, Toʻxtamish qoʻshinining bir qismi ikki lashkarboshi oʻrtasida chiqqan nizo tufayli jang maydonidan qochgan. Qunduzcha jangi Sohibqiron foydasiga hal boʻlgan, katta oʻlja bilan Movarounnahrga qaytgan. 88 R"
  },

  // === R ===
  {
    letter: "R",
    title: "Rahat lokum",
    text: "(yoki oddiygina “lokum”) –Bu shirinlik asosan shakar, makkajo’xori kraxmalidan tayyorlanadi va turli yong’oqlar (pista, bodom, yong’oq), qandli mevalar yoki atirgul suvi bilan boyitiladi. Tashqi tomoni ko’pincha kukun shakarda qoplangan bo’ladi. Uning nomi “rahmat” ma’nosidan kelib chiqadi, chunki bu shirinlik qadim zamonlardan beri mehmonlarga hurmat va minnatdorchilik sifatida berilgan."
  },
  {
    letter: "R",
    title: "Rain Steam and Speed",
    text: "The Great Western Railway (1844) Joseph Mallord William Turnerning Yomg’ir, bug’ va tezlik birlashgan manzara ichida poezd tuman orasidan o’tilib bormoqda. Rasmda hatto kichik quyon ham bor — u poezd yo’nalishida yugurmoqda. Bu tabiatning texnika qarshisidagi ojizligini ramziy ko’rsatadi."
  },
  {
    letter: "R",
    title: "Raqs vabosi",
    text: "(Dancing Plague) — tarixdagi eng g’alati hodisalardan biri. (1518) Strasbourg ya’ni o’sha paytda Muqaddas Rim imperiyasi da 500–400 kishi haftalab to’xtamasdan raqsga tushgan Ba’zilar charchoq va yurak xurujidan vafot etgan. Hammasi bitta ayol musiqasiz ko’cha markazida 3 kun tinmay raqs tushganidan boshlangan. Bunga asosiy sabab sifatida kuchli stress va ommaviy psixologik ta’sir hisoblanmoqda."
  },
  {
    letter: "R",
    title: "Rashmor tog’i",
    text: "AQShning to’rt prezidenti portretlari o’yib ishlangani bilan mashxur obyekt. Janubiy Dakota shtatida joylashgan, «Demokratiya qal’asi» deb ham ataluvchi bu milliy memorialning umumiy maydoni 517 gektar bo’lib, uni ko’rish uchun yiliga 2 mln dan ziyod inson tashrif buyuradi. Avvallari bu tog’ mahalliy aholi tilida «Oltita avlod otalari» deb nomlanib, 1930- yilda biznesmen Charlz Rashmor sharafiga qayta nomlangan. Aynan U prezidentlar haykallari qurilishiga bir shaxs tomonidan qo’shilgan eng katta hissani – 5000 $ mablag’ ajratgan edi. Muallif, xaykaltarosh Gutzon Borglum loyiha ustida 1927-yildan vafotigacha, ya’ni 1941-yilga qadar ishlagan. Monument uning o’limidan so’ng, 1947-yilda bitkazilgan. Muallif to’rt prezidentni tanlashda quyidagi mantiqni ilgari surgan: J. Vashington — millatni demokratiyaga olib kelgani uchun; T. Jefferson — mustaqillik dekloratsiyasi uchun; A. Linkoln — qullikni yakunlagani uchun; T. Ruzvelt — Panama kanali qurilishi sababli."
  },
  {
    letter: "R",
    title: "Rasyomon effekti",
    text: "bir voqeani tasvirlashda, har bir guvoh aytgan ma’lumot boshqa guvohning fikrlari bilan mos kelmasligi. Yani, bir hodisani insonlar turli hil tasvirlaganda ishlatiladigan termin. Effekt o’z nomini yapon rejissyori – Akiro Kurosavaning “Rasyomon” filmidan olgan. Bu filmda bir qotillikni to’rt nafar guvoh to’rt xil tasvirlaydi. Effekt, guvoh voqeani tasvirlashda o’zining fantaziyasidan voqeaga yangi detallar qo’shishi (voqeaga yanada intriga qo’shish uchun) oqibatida vujudga keladi."
  },
  {
    letter: "R",
    title: "Raubritterlar",
    text: "Shon-sharaf va or-nomus barcha ritsarlarning ham asosiy shiori bo’lmagan. Masalan ayrim zodagon oiladan chiqqan, ammo yomon yo’lga kirib ketganlar keyinchalik oddiy odamlarni tunay boshlagan. Ular “raubritter” deb atalgan. Bunday “antirobingudlar” haqida ilk bora XVIII asrga oid nemis ritsarlik romanlarida yozib qoldirilgan. Ushbu romanlarda o’z mulki yonidan o’tib ketayotgan savdogar yoki sayyohlarni talovchi zodagon ritsarlar haqida so’z borardi"
  },
  {
    letter: "R",
    title: "Ravshan Sayfiddinovich Ermatov",
    text: "oʻzbekistonlik professional futbol hakami. Futbol boʻyicha jahon kubogining oʻyinlarini 11 marta boshqargan. 2008, 2009, 2010 va 2011-yillarda Osiyoning «Eng Yaxshi Hakami», deb baholangan. 2000-yildan 2019-yilgacha Oʻzbekiston futbol ligasi tizimida va 2003-yildan 2019-yilgacha xalqaro miqyosda ishlagan. 2019-yildan buyon Oʻzbekiston futbol assotsiatsiyasi raisining birinchi oʻrinbosari."
  },
  {
    letter: "R",
    title: "Raymond Kopa",
    text: "frantsuz professional futbolchisi. 1950-yillardagi afsonaviy Real Madrid jamoasining bir qismi bo’lib, uchta evrokubokni yutgan. Kopa birinchi marta Ispaniyada 1955- yil mart oyida Madridda bo’lib o’tgan o’yinda Frantsiya terma jamoasida Ispaniyaga qarshi o’ynaganida e’tiborni tortgan, shundan so’ng Ispaniyaning Marca sport gazetasi uni “Kichik Napoleon” deb atagan."
  },
  {
    letter: "R",
    title: "Rayyan Arkan Dikha",
    text: "Indoneziyaning Pacu Jalur Riau viloyatidagi an’anaviy o’rmonli kanoe musobaqasida «Togak Luan» rolida chiqish qilgan 11 yoshli bola. Aura farming videolari bilan mashxur."
  },
  {
    letter: "R",
    title: "Red Apple",
    text: "Kventin Tarantino oʻylab topgan sigaret brendi"
  },
  {
    letter: "R",
    title: "Regata (ital. regata)",
    text: "qator, saf) — Eshkakli, yelkanli yoki motorli qayiqlarda turkum poygalardan iborat sport musobaqa turi.Turli kemalari uchun poygalar tashkil qilinadi. Har bir kemaga poygani toʻgʻri tamomlaganligi uchun ochkolar beriladi, oʻyin soʻngida ochkolar hisoblanib gʻolib aniqlanadi."
  },
  {
    letter: "R",
    title: "Rene Lennek",
    text: "stetoskop yaratuvchisi"
  },
  {
    letter: "R",
    title: "Rentgen apparati",
    text: "1895-yilda olmon fizigi Vilgelm Rentgen tasodifan ko’rinmas nurlanishni kashf etdi. U bu nurlar turli jismlar orqali o’tib, faqat suyak kabi zich tuzilmalar tomonidan to’silishini aniqladi. Natijada, inson tanasining ichki tuzilishini aks ettiruvchi tasvirlarni olish imkoni paydo bo’ldi. Dastlabki rentgen surati – bu olim rafiqasining kafti edi. O’z qo’lining rentgen suratini ko’rgan ayol «Men o’z o’limimni ko’rdim!» deya baqirib yuborgan ekan. Rentgen o’z apparatini nemischa X-strahlen-strahlen, ya’ni «Noma’lum nur» deb atagan. Bu yangiligi uchun Nobel mukofotiga loyiq ko’rilgan."
  },
  {
    letter: "R",
    title: "Restorff effekti",
    text: "bir xil obyektlar qatoridan ajralib turgan bir obyektning boshqalariga nisbatan yaxshiroq eslab qolinishi. Nazariya 1933-yilda nemis psixiatri va pediatri Xedvig Restorff tomonidan eksperimental ravishda kashf etilgan va uning sharafiga nomlangan. Tajriba davomida Restorff ishtirokchilarga so’zlar ro’yxatini taqdim etgan va ular orasida boshqa soʻzlarga nisbatan farq qiladigan bir nechta so’zlar ham bor edi. Natijalar shuni ko’rsatdiki, ishtirokchilar tajriba oxirida aynan farq qiluvchi soʻzlarni yaxshi eslab qolishgan. Restorff effekti teskari ta’sirga ham ega. Agar siz ma’lum bir so’zni ta’kidlasangiz, u sizning e’tiboringizni jalb qiladi va natijada qolgan so’zlar yomonroq esda qoladi. Restorff effektidan marketing sohasida, dizaynda, xotirani rivojlantirishda, chet so’zlarni o’rganishda va boshqa koʻplab sohalarda foydalanish mumkin."
  },
  {
    letter: "R",
    title: "Rickroll",
    text: "internetdagi mashhur bait-and-switch prank, ya’ni odamni biror narsani ko’rsatamiz deb aldab, aslida Rick Astley’ning “Never Gonna Give You Up” klipiga olib borish. Qo’shiq: Never Gonna Give You Up Ijrochi: Rick Astley Chiqqan yili: 1987 Meme paydo bo’lgan davr: 2007-yil Kelib chiqishi: 4chan forumidagi avvalgi duckrolling hazilidan rivojlangan. Odamga masalan, “GTA 90 IV yangi treyleri” deb havola beriladi, lekin bosganda Rick Astley klipi ochiladi. 2007-yil 29-mart — Guinness World Records birinchi qayd etilgan rickroll holatini GTA IV treyleri bilan bog’laydi. Keyinchalik rickroll internetning eng uzoq yashagan memlaridan biriga aylandi."
  },
  {
    letter: "R",
    title: "Rikotta",
    text: "bu Italiyaga xos bo’lgan yumshoq, mayin ta’mli pishloq turi. Odatda motsarella tayyorlash jarayonidan ortgan zardobdan tayyorlanadi. Nomi italyancha “ricotta” so’zidan olingan bo’lib, “qayta pishirilgan” degan ma’noni anglatadi. Sigir, qo’y, echki sutidan tayyorlanadi. Ko’pincha lazanya, pishiriqlar va desertlarda ishlatiladi. Italiyaning Janubiy qismida (Sitsiliya, Apuliya, Kampaniya, Kalabriya) urfga aylangan mahsulot hisoblanadi."
  },
  {
    letter: "R",
    title: "Riksha XIX asr oxirida Janubiy Osiyoda paydo bo’lgan",
    text: "odatda uch g’ildirakli, odamlarni tashish uchun ishlatiladigan transport vositasi."
  },
  {
    letter: "R",
    title: "Rim tepaliklari",
    text: "Rim geografik jihatdan ettita tepalikka ega: Esquiline, Palatine, Aventine, Capitoline, Quirinal, Viminal va Caelian Hill. Rim qurilishidan oldin , etti tepalikning har biri o’zining kichik turar-joyiga ega edi. Insonlar guruhlari bir-biri bilan shov-shuv bo’lib, oxir-oqibat bir- biri bilan birlashib, Rimning ettita an’anaviy tepaligida Servian devorlarini qurish bilan ramziylashdi."
  },
  {
    letter: "R",
    title: "Ringelman effekti",
    text: "bu guruh hajmi o’sib borishi bilan, har bir guruh aʼzosi oʻz ish unumdorligini pasaytirishi. Birinchi marta 1913-yilda fransuz qishloq xo’jaligi professori Maksimilian Ringelman (1861 - 1931) tomonidan tasvirlangan. Ringelman effekti ta’sirini ko’rish uchun arqon tortish musobaqasini misol qilib koʻrsatish mumkin. Jamoaga qancha koʻp odam jalb qilinsa, ularning o’rtacha ish unumdorligi shunchalik pasayadi, chunki har bir ishtirokchi o’z harakatlari hal qiluvchi emas deb oʻylaydi."
  },
  {
    letter: "R",
    title: "Rip Van Vinkle",
    text: "Vashington Irving hikoyasi. Qahramon 20 yil uxlab qoladi va revolutsiyani o’tkazib yuboradi."
  },
  {
    letter: "R",
    title: "Ritsin",
    text: "“Ricinus communis” (kastor) o’simligi urug’idan olinadigan, dunyodagi eng kuchli tabiiy zaharlardan biridir. Kastor yog’i o’zi zararsiz bo’lsa-da, zahar aynan moy olinib bo’lgandan keyin qoladi."
  },
  {
    letter: "R",
    title: "Robert Adler",
    text: "Televizor uchun simsiz masofadan boshqarish pultini ixtiro qilgan amerikalik fizik. U ishlab chiqqan birinchi masofadan boshqarish pulti “Space Commander” televizoridagi funksiyalarni boshqarish uchun talqin qilinadigan yuqori chastotali ohanglarni ishlab chiqarish uchun tyuning vilkalariga oʻxshash alyuminiy rodlardan foydalangan. Qurilma bolgʻachasi tugmachalarni urib kerakli diapazondagi tovush signalin hosil qilgan."
  },
  {
    letter: "R",
    title: "Robert Oppengeymer",
    text: "Amerikalik nazariy fizik boʻlib , Los-Alamoss Ikkinchi Jahon urushi loyihasining Manhetten loyihasida direktor boʻlib ishlagan. Birinchi yadro qurolini yaratishni nazorat qilishdagi roli uchun uni ko’pincha ” atom bombasining otasi” deb atashadi. Atom bombasi birinchi marta 1945- yil iyul oyida Nyu-Meksikoda sinovdan o’tkazildi ; Keyinchalik Oppengeymer o’sha paytda uning xayoliga Bhagavad Gitadagi so’zlar kelganini esladi : ” Men o’limga aylandim, olamlarni vayron qiluvchi”"
  },
  {
    letter: "R",
    title: "Robinzon sindromi",
    text: "bu kim bilandir gaplashishga bo’lgan kuchli istak hisobidan kelib chiqadigan sindrom sanaladi.Asardan ma’lumki,Robinzon Kruzo Jumavoyni uchratguncha hech kim bilan gaplashmagan va uni kim bilandir gaplashishiga bo’lgan ehtiyojlari yuqori darajada bo’lgan.Bu personajdan kelib chiqib sindrom shunday atalgan."
  },
  {
    letter: "R",
    title: "Robita",
    text: "shariatdagi ruhiy aloqa degan maʼnoni anglatadi, bu tasavvufdagi murid (shogird) va uning pir-murshidi (ustoz) oʻrtasidagi ruhiy bogʻlanishdir."
  },
  {
    letter: "R",
    title: "Rodeo",
    text: "buqani minib uni boshqarish va bo’ysundirish san’ati."
  },
  {
    letter: "R",
    title: "Rongo-rongo",
    text: "XIX asrda Pasxa orolidan topilgan sirli yozuv tizimi. Haligacha undagi har bir detal alohida so’zni yoki bo’g’inni anglatishi haqida aniq to’xtamga kelinmagan. Yozuvlarning barchasi toromiro daraxti poyasiga yozilgan. Hozirda dunyo muzeylarida 25 ta shunday yozuvli yog’och bo’laklari saqlanadi. Ularda tahminan 8000 ga yaqin iyerogliflari aniqlangan. Pasxa oroli aholisining asosiy ishga yaroqli qismi 1862-yildan boshlab Peruga qul qilib olib ketilgan. 1864-yil 2-yanvar kuni orolga kelgan rohib Yevgeniy Eyro o’z maktubida orol aholisi har birini uyida o’ziga xos yozuvli yog’och bo’lagi borligi, lekin aholi orasida savodlilari qolmagani uchun ushbu yozuvni o’qish imkoni deyarli mavjud emasligi haqida yozadi."
  },
  {
    letter: "R",
    title: "Rorshax testi",
    text: "inson psixologiyasini o’rganish uchun ishlatiladigan mashhur loyqa dog’lar testi. Uni 1921-yilda shveytsariyalik psixiatr German Rorshax ishlab chiqqan. Test odamlarning dog’larda nimani ko’rishiga asoslanadi va ularning ichki dunyosini ochib berishga yordam beradi."
  },
  {
    letter: "R",
    title: "Rosa Parks (1913–2005)",
    text: "Afroamerikalik fuqarolik huquqlari himoyachisi. U “Fuqarolik huquqlari harakatining onasi” sifatida tanilgan. 1955-yil 1-dekabr kuni Alabama shtatining Montgomeri shahrida avtobusda oq tanli yo’lovchiga joy bermaganligi uchun hibsga olingan. Bu voqea Montgomeri avtobus boykotiga sabab bo’lib, AQShda irqiy tenglik uchun kurashning ramziga aylandi. Rosa Parks jasorati bilan millionlab odamlarga ilhom bag’ishladi. Keyinchalik u “Kongressning oltin medali” va boshqa yuksak mukofotlar bilan taqdirlandi."
  },
  {
    letter: "R",
    title: "Rossiya qora tuprogʻi",
    text: "Dokuchayev asari"
  },
  {
    letter: "R",
    title: "Rost bilan yolgʻonning orasi toʻrt enlik",
    text: "Inson ko’pincha boshqalardan eshitgan gap-so’zlarga ishonadi, holbuki, ko’zi bilan ko’rgan haqiqatni ko’pincha inkor qiladi. Ushbu ibora hayotimizda ehtiyotkorlik va mustaqil fikrlash qanchalik muhimligini eslatadi."
  },
  {
    letter: "R",
    title: "Rozvell hodisasi",
    text: "1947-yilda AQShning Nyu-Meksiko shtatidagi Roswell shahri yaqinida yuz bergan va keyinchalik NUJ (UFO) hamda o’zga sayyoraliklar haqidagi eng mashhur afsonalardan biriga aylangan voqea. Sana: 1947-yil iyul. Joy: Roswell, New Mexico, AQSh. Fermer W. W. “Mac” Brazel fermasida g’alati qoldiqlar topilgan. 8-iyul 1947 kuni Roswell Army Air Field qoldiqlarni olib qo’ygani haqida matbuot xabari tarqalgan. Keyin AQSh harbiylari bu materiallar meteorologik shar bilan bog’liq ekanini bildirgan. Keyingi o’n yilliklarda esa hodisa “o’zga sayyoralik kemasi qulagan va hukumat jasadlarni yashirgan” degan nazariya bilan mashhur bo’ldi. AQSh hukumatining keyingi izohiga ko’ra, qoldiqlar Project Mogul — Sovet yadroviy sinovlarini aniqlash uchun ishlatilgan maxfiy balon tizimi bilan bog’liq bo’lgan. Muhim: Roswellda alien kosmik kemasi yoki o’zga 92 sayyoralik jasadlari topilgani haqida ishonchli ilmiy dalil mavjud emas. Roswell hodisasi asosan UFO folklori va konspiratsiya madaniyatining mashhur ramziga aylanga"
  },
  {
    letter: "R",
    title: "Rudolf Gertsog",
    text: "Britaniyalik kommersant. Rudolf birinchi bo’lib o’z mashinasiga avtomobil raqamini o’rnatgan shaxs hisoblanadi. Ushbu hodisa 1901-yilda sodir bo’lgan. Rudolfning mashina raqamida faqat uchta belgi bor edi — IA1. Bu belgilar shunchaki tanlanmagan — IA — Rudolfning sevikli rafiqasi Ioganna Ankerning initsiallari, 1 esa xotini uning hayotidagi birinchi va yagona ayol ekanini anglatadi."
  },
  {
    letter: "R",
    title: "Rui Gonsales de Klavixo",
    text: "Kastiliya qiroli Genrix III ning Amir Temur huzuriga yuborgan 2- elchilisi. Elchilar 1403-yil 22-mayda Kadis shahridan yoʻlga chiqib, 15 oydan soʻng Samarqandga yetib kelgan. Klavixo tomonidan yozilgan elchilik kundaligi bosib oʻtilgan manzillar (Kadis, Balear o.lari, Gaeta, Messina, Rodos, Xios, Konstantinopol, Trapezunt, Arzirum, Tabriz, Tehron, Nishopur, Mashhad, Balx, Buxoro, Samarqand)ning batafsil bayoni keltirilib oʻtilgan. Uning safar xotiralari 1- marta 1582-yil Argonte de Molina shahrida “Buyuk Temur tarixi” nomi bilan nashr etilgan. 93 S"
  },

  // === S ===
  {
    letter: "S",
    title: "Safari rallisi",
    text: "Afrikada, asosan Keniya hududida o’tkaziladigan mashhur avtomobil poygasi. Uning asosiy qiyinchiligi — yo’llarning og’irligi va tabiatning o’zgaruvchan sharoiti). Poygachilar chang, loy, tosh va notekis yo’llardan o’tishadi. Ko’pincha kutilmagan yomg’irlar yoki yovvoyi hayvonlarning yo’lga chiqishi ham musobaqani yanada murakkablashtiradi. Safari rallisi “dunyodagi eng og’ir ralli” sifatida tanilgan bo’lib, 1953-yildan boshlab o’tkazib kelinadi va 2021-yilda yana WRC taqvimiga qaytgan."
  },
  {
    letter: "S",
    title: "Sakkizinchi sinf sindromi",
    text: "Yaponiyada keng tarqalgan psixologik vaziyat bo’lib mahalliy tilda Chunibyo atamasi bilan nomlanadi. Asosan 13-15 yoshli bolalarning o’zini g’ayritabiiy kuchga yoki hech kimda yo’q muhim ma’lumotga egadek his qilishishiga aytiladi. Bunday sindrom, asosan, turli anime ko’rish yoki manga komikslaridan kuchli ta’sirlanganlik natijasida kelib chiqadi va yapon o’smirlari orasida bu holat norma deb hisoblanadi."
  },
  {
    letter: "S",
    title: "Sakkokiy",
    text: "XIV–XV asrlarda yashagan mashhur o’zbek mumtoz shoiri, temuriylar davri adabiyotining yirik vakillaridan biri. U g’azal va qasidalari bilan tanilgan. Sakkokiy ijodida muhabbat, insoniy fazilatlar va zamonasining ijtimoiy hayoti muhim o’rin tutadi. Qiziq fakt: Sakkokiy Alisher Navoiydan oldingi o’zbek adabiyotining eng muhim namoyandalaridan biri hisoblanadi."
  },
  {
    letter: "S",
    title: "Sakred Seltzer",
    text: "bu alkogolli gazlangan suv bo’lib. U 95 % muqaddas suv va 5 % alkogol aralashmasidan tayyorlangan. Suv rim-katolik diniy marosimda muqaddas deb e’lon qilingan (holy water) deb ta’kidlangan. Mahsulot MSCHF nomli AQShda joylashgan san’at hamda eksperimental to’plam tomonidan taqdim etilgan. MSCHF avval ham turli “ijodiy” mahsulotlar bilan mashhur bo’lgan misol uchun “Jesus Shoes”."
  },
  {
    letter: "S",
    title: "Sakura",
    text: "Yaponiyaning bahor va yangilanish timsoli hisoblangan mashhur gullaydigan daraxt. Har yili millionlab yaponlar “hanami” an’anasiga amal qilib, sakura gullarini tomosha qilish uchun bog’larga tashrif buyuradilar. Sakura qisqa vaqt gullaydi, bu esa hayotning go’zalligi va o’tkinchiligini eslatadi. Sakura, shuningdek, AQSh, Avstraliya va Braziliyada tarqalgan. Yaponiyada Sakura ayollar ismi juda mashxur. II Jahon Urushi davrida kamikadzelarni ruhlantirish uchun samoloyotlariga sakura guli surati tushurilgan."
  },
  {
    letter: "S",
    title: "Salem",
    text: "AQShning Massachusetts shtatida joylashgan mashhur tarixiy shahar bo’lib, 1692-yildagi jodugarlik sudlari bilan tanilgan. O’sha davrda jodugarlikda ayblanib 20 kishi qatl etilgan. Bu voqea Salemni “Jodugarlar shahri” sifatida tarixda qoldirdi. Hozirda u sayyohlar uchun mashhur maskan bo’lib, har yili Halloween bayramida millionlab mehmonlarni jalb qiladi."
  },
  {
    letter: "S",
    title: "Salvador Dali (1904–1989)",
    text: "Ispaniyalik rassom, syurrealizm janrida ijod qilgan. O’zining ekzentrik xulqi va san’atdagi yangiliklarga bo’lgan yondoshuvi bilan mashhur. Eng mashhur asarlaridan biri «Xotira davomiyligi»(1931) bo’lib, unda erigan soatlar tasvirlangan. Shuningdek, chupa-chups logotipining muallifi hisoblanadi."
  },
  {
    letter: "S",
    title: "Samaynofobiya",
    text: "Helloven bayramidan qo’rqish kasalligi bo’lib unga ega bo’lgan odamlar Helloven bayrami haqida o’ylashganda haddan tashqari qo’rquv yoki xavotirga tushishlari mumkin. Aslida Helloven qadimgi Keltlar festivali Samayn, yig’im-terim mavsumining tugashini nishonlash bayramidan kelib chiqqan deyiladi. Samaynofobiya bilan og’rigan ko’plab odamlar Helloven bayrami bilan bog’liq o’tmishdagi travmatik vaziyatni boshdan kechirganlar. Helloven bilan bog’liq narsalar, jumladan, arvohlar, o’rgimchaklar, jodugarlik yoki zombilardan qo’rquv ushbu fobiyaga sabab bo’ladi."
  },
  {
    letter: "S",
    title: "Samjoko",
    text: "Sharq mifologiyasida uchraydigan afsonaviy qush — uch oyoqli qora qarg’a.Qadimiy Xitoy, Koreya va Yapon rivoyatlarida u asosan quyosh timsoli sifatida tasvirlangan. Uch oyog’i osmon, yer va odam birligini yoki uch qudrat (quyosh, oy, yer) ni bildiradi. Koreya afsonalarida Samjoko hokimiyat va osmoniy qudrat ramzi bo’lib, oddiy qarg’adan ancha kuchli hisoblangan. Koguryo davri devoriy rasmlarida u quyosh markazida tasvirlangan."
  },
  {
    letter: "S",
    title: "Samuel Kolt (1814-1862)",
    text: "O’qotar qurollar tarixida inqilob qilgan ixtirochi va tadbirkor. 1836- yilda o’zi ixtiro qilgan revolver uchun patent olgan va Colt firmasiga asos solgan. Uning qurollari Amerika va Yevropada keng tarqaldi, armiya va politsiya uchun asosiy qurolga aylandi. Afsonaga ko’ra, Koltning qabr toshida quyidagi so’zlar yozilgan: «Xudo insonlarni kuchli va kuchsiz qilib yaratdi. Kolt ularning imkoniyatini tenglashtirdi.»"
  },
  {
    letter: "S",
    title: "Sansara",
    text: "(sanskritcha — qayta tugʻilish) — hind dini va falsafaning asosiy tushunchalaridan biri. Jonning qayta tug’ilishi va o’limlar doirasi. Unga ko’ra, har bir mavjudot keyingi hayotida o’z karmasiga qarab, ya’ni yaxshi va yomon amallariga mos tarzda boshqa tanada – inson, hayvon, ma’bud qiyofasida qayta tug’iladi."
  },
  {
    letter: "S",
    title: "SARIN",
    text: "(Зарин)— INSONIYAT TARIXIDAGI ENG XAVFLI MODDALARDAN BIRI 1938- yilda Germaniyada ikki olim pestitsid yaratmoqchi bo’lgan, ammo tasodifan asab tizimini falaj qiluvchi moddani — Sarinni kashf etishgan.Sarin rangsiz, hidsiz suyuqlik bo’lib, hatto juda kichik miqdorda ham insonni bir necha daqiqada falaj qiladi.Nafas orqali kirganda u miya va asab tizimini ishdan chiqaradi. Atigi 35 mg/m³ konsentratsiya 2 daqiqada o’limga olib kelishi mumkin. Sarin dunyo e’tiboriga 1995-yil Tokio metrosida sodir bo’lgan hujum orqali tushgan. “Aum Shinrikyo” sektasi tomonidan amalga oshirilgan bu terakt oqibatida minglab odamlar zaharlanib, ko’plari halok bo’lgan."
  },
  {
    letter: "S",
    title: "Sariq matbuot (shuningdek, bulvar matbuoti)",
    text: "Asosan taniqli odamlar hayoti haqidagi mish- mishlar, sensatsiyalar (ko’pincha to’qima) hamda janjallarni bosib chiqarishga ixtisoslashgan va juda arzon narxda tarqatiladigan bosma nashrlarga nisbatan ishlatiladigan termin."
  },
  {
    letter: "S",
    title: "Sati",
    text: "Qadimiy Hindistonda amal qilgan urf-odat bo’lib, beva qolgan ayol erining dafn marosimida o’zini tiriklayin kuydirish holati. Sati so’zining o’zi sanskrit tilida “pokiza”, “sodiq ayol” degan ma’noni bildiradi. Dastlab ixtiyoriy bo’lgan bu urf-odat keyinchalik ko’p hollarda ayollarni majburlashga aylangan va shafqatsiz tus olgan."
  },
  {
    letter: "S",
    title: "Satoshi Nakamoto",
    text: "bitkoin kriptovalyutasi protokilini hamda u uchun dastlabki dasturiy ta’minotni ishlab chiqqan shaxs, yoki guruhning tahallusi. Bu shaxs yoki guruhning asl ismini 95 aniqlash uchun bir necha urinishlar amalga oshirilgan, biroq ularning barchasi muvaffaqiyatsiz bo’lgan. Rasmda Budapesht shahridagi Nakamoto sharafiga o’rnatilgan byust."
  },
  {
    letter: "S",
    title: "Saturnaliya",
    text: "qullarni xo’jayinga aylantiruvchi bayram. Qadimgi Rimda qishloq xo’jaligi ilohi bo’lgan Saturn sharafiga har yili 17-dekabrda o’tkazilgan o’ziga xos bayram. Ushbu bayram qishloq xo’jaligi ishlari nihoyasiga yetgan va o’rim-yig’im harakatlari tugagaganidan keyin o’yin-kulgi qilib nishonlangan. Saturnaliya vaqtida jamoat ishlari hamda maktablarda darslar to’xtatilgan, jinoyatchilarni jazolash ta’qiqlangan. Shuningdek, qullar bu kunlarda alohida imtiyozlarga ega bo’lardilar: ular ishdan ozod qilinib, pilleus (ozodlik ramzi) kiyib yurishar, xo’jayinlari bilan bir stolda ovqatlanar va bu paytda xo’jayinlar qullariga xizmat qilardi."
  },
  {
    letter: "S",
    title: "Savant Sindromi",
    text: "rasmiy lugʻatdagi izohga koʻra Savant bu: rivojlanish nuqsoni(autizm yoki intellektual nuqsoni) boʻlgan inson, maʼlum bir chegaralangan sohalarda (matematika, musiqa kabi) oʻziga xos maxoratga ega boʻlishiga nisbatan qoʻllaniladi."
  },
  {
    letter: "S",
    title: "Sekundant",
    text: "Duel qatnashchilaridan har bir raqibning duel shartlari haqida muzokara olib boruvchi va ularning bajarilishini kuzatib turuvchi ishonchli kishisi. Boks va shaxmat oʻyinlarida musobaqa qatnashchisiga vositachilik qiluvchi, oʻyin davomida, tanaffus vaqtlarida xizmat koʻrsatuvchi shaxs."
  },
  {
    letter: "S",
    title: "Selma Lagerlyof (1858- 1940)",
    text: "Shved yozuvchisi, 1909- yilda Nobel mukofotini olgan ilk ayol adiba. Eng mashhur asari - “Nilsonning yovvoyi g’ozlar bilan sarguzashtlari” bo’lib, asarda o’quvchilarga tabiatni sevish, do’stlik va jasorat haqida dars beradi. Uning nomida “Selma Lagerlyof” mukofoti ham bo’lib, adibaning usulida yozadigan yozuvchilarga 1984 - yildan beri berib kelinadi."
  },
  {
    letter: "S",
    title: "Sem amaki",
    text: "Amerika Qo’shma Shtatlarining milliy timsollaridan biri. XIX asrda paydo bo’lib, ayniqsa, Birinchi va Ikkinchi jahon urushlari davrida AQSh harbiy targ’ibot plakatlarida tez-tez uchragan. Nom ilk bor 1813-yilda Britan-AQSh urushi davrida paydo bo’lgan. Kelib chiqishi Nyu- Yorklik Semyuel Uilson nomi bilan bog’liq. U AQSh armiyasi uchun go’sht yetkazib bergan va mahsulotlarini United States (Qo’shma shtatlar) ma’nosida «U.S.» yozuvi bilan tamg’alagan. Askarlar esa hazil tariqasida yozuvni Uncle Sam (Sem amaki) deb talqin qilishgan edi."
  },
  {
    letter: "S",
    title: "Sergey Mavrodi (1955-2018)",
    text: "Rossiya tarixidagi eng yirik moliyaviy piramida hisoblangan «MMM» OAJning ta’sischisi sifatida tanilgan. 15 million odamni jalb qilgan va ularga yuqori daromad va’da qilgan bu firibgarlik sxemasi 1994-yilga kelib qulaydi, pul tikkanlar o’z mablag’isiz qoladi. «MMM» tarafdorlarining shiori «Мы были вчера, Мы есть сегодня, Мы будем завтра» («Biz kecha bor edik, biz bugun bormiz, biz ertaga ham bo’lamiz»). Mavrodi 2003-yilda hibsga olinib, 4,5 yillik qamoq jazosiga hukm qilingan."
  },
  {
    letter: "S",
    title: "Sestus",
    text: "ilk bokschilar perchatkasi. Boks perchatkalarinig ilk analoglari miloddan avvalgi XVI asrda Gretsiyada paydo bo’lgan. Albatta, u davrda boksning o’zi hali yo’q edi. Ammo ushbu sport turiga o’xshash boshqa jang san’atlarida jarohat yetkazish ehtimolini kamaytirish uchun sestusdan foydalanishgan. Lotincha “caestus” so’zi “caedare” so’zidan kelib chiqqan bo’lib, “zarba bermoq” degan ma’no angalatadi. “Meilichae” deb nomlanadigan bunday qo’lqoplar xom mol go’shti yoki eshak terisini kaftga o’rash va arqon bilan bog’lab qo’yish orqali hosil qilinardi."
  },
  {
    letter: "S",
    title: "Sevgi uch yil yashaydi iborasi",
    text: "Bu ibora fransuz yozuvchisi Frederik Begbederning mashhur romani nomidan kelib chiqqan. Asarga ko’ra, sevgi uch bosqichdan iborat: ehtiros (1-yil), yaqinlik (2- yil) va zerikish (3-yil). Uchinchi yildan keyin munosabatlar sovuqlashishi mumkin, degan fikr ilgari suriladi."
  },
  {
    letter: "S",
    title: "Sevilyalik sartarosh",
    text: "Fransuz dramaturgi Pyer Bomarshe tomonidan 1775-yilda yozilgan asar bo’lib, Figaro trilogiyasining birinchi qismidir. Asarda zukko sartarosh Figaro yosh Rosina va Graf Almavivaning sevgisini himoya qilib, Doktor Bartoloning rejasini barbod qiladi. Ushbu asar Joakkino Rossini tomonidan opera sifatida bastalangan va bugungi kunda ham eng mashhur operalardan biri hisoblanadi."
  },
  {
    letter: "S",
    title: "Seysmograf",
    text: "Yer osti plitalarining toʻqnashuvi natijasida hosil boʻlgan tebranishlarni oʻlchash va qayd etish, zilzila epitsentri yo’nalishini ko’rsatadigan vosita. Qadimgi yunoncha sistus — zilzila va qadimgi yunoncha grphŉ — yozib olish, ma’nolarini anglatadi. Birinchi oson ishlatiladigan seysmograf 1875-1895 yillarda Yaponiyada ishlagan ingliz geologi Jon Miln tomonidan yaratilgan. 1906 -yilda Rossiya shahzodasi Boris Golitsin elektromagnit induksiya hodisasiga asoslangan birinchi elektromagnit seysmografni ixtiro qiladi."
  },
  {
    letter: "S",
    title: "Shabbat",
    text: "Yahudiylarda haftaning eng muqaddas kuni — dam olish va ibodat davri. U juma kuni quyosh botishi bilan boshlanib, shanba kuni quyosh botishigacha davom etadi. Bu vaqt davomida ishlash va turli mehnat turlaridan tiyilish odat qilingan.Shabbatning asosiy ramzlari — sham yoqish, maxsus non (xalla) va sharob bilan dasturxon atrofida oila yig’ilish hisoblanadi."
  },
  {
    letter: "S",
    title: "Shamollarda qolgan hislarim, Margaret Mitchell (1936)",
    text: "Fuqarolar urushi va undan keyingi tiklanish davrida Amerika janubining hayoti va uning o’zgarishlarini yoritadigan ulkan epik roman. Asarda bosh qahramon — jasur va qaysar Skarlett O’Hara hayoti orqali insonning yashashga, sevishga va kurashishga bo’lgan cheksiz irodasi tasvirlanadi. Asar Pulitzer mukofotiga sazovor bo’lgan va bugungi kungacha dunyoda eng ko’p o’qilgan romanlar qatoridan joy olgan."
  },
  {
    letter: "S",
    title: "Sharl-Anri Sanson (Charles-Henri Sanson)",
    text: "Fransiya tarixidagi eng mashhur jallodlardan biri. U Fransuz inqilobi davrida Parijning bosh jallodi bo’lgan.1792–1794-yillarda gilotina orqali minglab hukmlarni ijro etgan. Qirol Lyudovik XVIning qatlini ham aynan Sanson amalga oshirgan. U aslida jallodlar sulolasining vakili bo’lib, oilasi bu kasbni bir necha avlod davomida bajargan. U Mariya- Antuanettani ham qatl etgan."
  },
  {
    letter: "S",
    title: "Shaxmat terminlari",
    text: "Gambit ochilishda tez rivojlanish yoki hujum uchun piyoda yoki figura qurbon qilish. Armageddon — durang bo’lsa g’olibni aniqlash uchun o’ynaladigan hal qiluvchi partiya. Oq 1 daqiqa ko’proq vaqt bilan boshlaydi agar durrang bo’lsa ham qora foydasiga bo’ladi. Blokada — raqib piyodasining oldiga figura qo’yib, uning oldinga yurishini to’xtatish strategiyasi. Berserk — rasmiy bo’lmagan onlayn turnirlarda vaqtning yarmini qurbon qilib o’ynash, yutsa qo’shimcha ochko beriladi. Qal’a (Fortress) — yutqazayotgandek ko’rinsa ham himoyaviy tuzilma qurib, raqibga g’alaba qilish imkonini bermaydigan pozitsiya. Endshpil — partiyaning oxirgi bosqichi, kam figurali holatda mot qilish yoki piyodani so’ngi katakka olib borish uchun o’ynaladi."
  },
  {
    letter: "S",
    title: "Sherman galstugi",
    text: "1864-yilda Shimol va Janub o’rtasidagi urush oxiriga yetib qolgandi. Shimol qo’shinlarining generali Uilyam Tekumse Sherman boshliq harbiy qism Jorjiya orqali o’tib 97 ketayotganda temir yo’lni vayron qilishadi. Shpallar yoqib yuboriladi, relslar sug’urib olinib, olovda qizdiriladi hamda telegraf ustunlariga o’rab tashlanadi. Buning natijasida paydo bo’lgan aji buji shakl askarlar tomonidan “Sherman shpilkalari” yoki “Sherman galstugi” deb nomlanadi."
  },
  {
    letter: "S",
    title: "Shibbolet",
    text: "Muayyan tilga oid soʻzni talaffuz qilish orqali kimligingizni aniqlash usuli. Tarixda bu soʻz ayniqsa dushmanni aniqlashda ishlatilgan. Eng mashhur holat Yahudiylar va Efrayim qabilasi oʻrtasidagi urushda kuzatilgan. Efrayimliklar “sh” tovushini talaffuz qila olmaganlari uchun “shibbolet”ni “sibbolet” deb aytishgan. Shu orqali ular fosh boʻlgan. Bugungi kunda “shibbolet” atamasi keng maʼnoda ishlatiladi — odamning asl kelib chiqishi yoki guruhga mansubligini oshkor qiladigan har qanday til yoki madaniyat xususiyatini anglatuvchi belgi sifatida ishlatiladi."
  },
  {
    letter: "S",
    title: "Shisha shift",
    text: "Odatda ayollar va ozchilik guruh vakillarining yuqori lavozimga chiqishiga, ezilgan demografiyaning iyerarxiyasida maʼlum darajadan oshib ketishiga toʻsqinlik qiladigan koʻrinmas toʻsiqni ifodalash uchun ishlatiladi. Shisha shift garchi koʻrinmas toʻsiqni ifodalangan boʻlsa-da, aslida u yengish qiyin boʻlgan holatdir. Bu metafora birinchi marta feministlar tomonidan yuqori natijalarga erishgan ayollarning martabaga erishishlarida toʻsiqqa uchrash holatlariga nisbatan ishlatilgan. Uni 1978-yilda Merilin Loden nutqi chogʻida qoʻllagan."
  },
  {
    letter: "S",
    title: "Shnobel mukofoti",
    text: "Bir qarashda kulguli bo’lgan kashfiyotlar uchun topshiriladigan sovrin. Nobel mukofotiga parodiya sifatida ta’sis etilgan bu sovrin jiddiy ilm-fanni hazil orqali targ’ib qiladi. 1991- yildan beri «Aqlga sig’mas tadqiqotlar» hajviy jurnali tomonidan topshiriladi. Inglizcha nomi Ignobel, ya’ni ignoble(uyatli) so’ziga ishora qilingan. 10 ta yo’nalish bo’yicha g’oliblar aniqlanib, haqiqiy Nobel mukofoti laureatlari tomonidan topshiriladi. Mukofot puli 10 trillion Zimbabve dollari, ya’ni 10 $ atrofida. Xalq orasida Antinobel deb ham nomlanadi."
  },
  {
    letter: "S",
    title: "Shofar",
    text: "bu yahudiylarning marosimlarda ishlatiladigan puflama musiqiy asbobi bo’lib, u hayvon shoxidan yasaladi. Uning tarixi qadimiy bo’lib, Musoga qadar borib taqaladi. Shofarga Rosh ha- Shana (yahudiy yangi yili) bayramida, Yom Kippur (Hukm kuni) yakunida va boshqa marosimlarda chalishadi. Yubiley yilida Yom Kippur kuni shofarda chalish Tavrotdagi 613 amrdan biridir. “Yovel” (qo’y, qochqor) so’zi ko’pincha “shofar” bilan bog’lanadi, shuning uchun dastlab bu asbob qo’chqor shoxidan yasalgan deb taxmin qilinadi."
  },
  {
    letter: "S",
    title: "SHOK-ART",
    text: "bu oddiy san’at emas. Bu tomoshabinni bezovta qiladigan, o’ylantiradigan, ba’zida esa jahlini chiqaradigan san’at yo’nalishidir. Ushbu oqim 1960-yillarda paydo bo’lgan. Shok-art sizga yoqmasligi mumkin. Lekin agar u sizni o’ylantirsa — demak, u o’z vazifasini bajargan."
  },
  {
    letter: "S",
    title: "Shpal",
    text: "temir yo’l infratuzilmasining muhim elementi. U relslar ostiga yotqizilib, ularni belgilangan masofada va barqaror holatda ushlab turadi. Shpal poyezd yukidan keladigan bosimni relslardan qabul qilib, ballast yoki beton asosga bir tekis taqsimlaydi."
  },
  {
    letter: "S",
    title: "Shrodinger mushugi",
    text: "Kvant mexanikasidagi mashhur paradoks bo’lib, u superpozitsiya holatini tushuntirish uchun taklif qilingan. Tajribaga ko’ra, yopiq qutidagi mushuk bir vaqtning o’zida ham tirik, ham o’lik bo’lishi mumkin. Natija faqat quti ochilganda aniqlanadi. Bu tajriba kvant kuzatuvining ahamiyatini ko’rsatadi."
  },
  {
    letter: "S",
    title: "Shutdown",
    text: "Moliyaviy masalalarni o’z vaqtida kelisha olinmaganligi sababli AQSh hukumatining noma’lum muddatga o’z faoliyatini to’xtatishi"
  },
  {
    letter: "S",
    title: "SIANID",
    text: "(KCN)— “Shirin o’lim”Ko’rgan odam uni shakar deb o’ylaydi, lekin u — o’limga olib keluvchi zahar. Sianid suvda erib, achchiq bodom hidini qoldiradi, lekin hamma ham bu hidni sezmaydi. Bir chimdim (140mg) — va hujayralar kisloroddan uziladi. Inson nafas ola olmay…"
  },
  {
    letter: "S",
    title: "Sidney opera teatri",
    text: "Avstraliyaning Sidney shahri markazida joylashgan butun dunyoga mashhur opera teatridir. Qit’aning eng asosiy obidalardan biri bo’lmish ushbu bino dunyodagi boshqa inshootlardan o’zining parussimon tomi bilan mashhur. Opera teatri 1973 yildan boshlab Xarbor Bridj ko’prigi bilan bir qatorda dunyodagi eng mashhur zamonaviy arxitektura inshootlardan biri deb tan olingan, hamda Sidney shahrining tashrif qog’ozi hisoblanadi. Bino 1973-yilda qurib bitkazilgan, shu yilning 20 -oktyabr kuni Angliya qirolichasi Elizavetta II tomonidan ochilgan."
  },
  {
    letter: "S",
    title: "Siesta",
    text: "bu asosan issiq iqlimli mamlakatlarda (masalan, Ispaniya va Lotin Amerikasi) tushdan keyin, kunning eng issiq vaqtida qilinadigan qisqa muddatli uyqu yoki dam olish anʼanasidir"
  },
  {
    letter: "S",
    title: "Sikada 3301",
    text: "internet tarixidagi eng sirli va murakkab kriptografik jumboqlardan biri. U 2012-yil 4-yanvarda paydo bo’lib, noma’lum guruh o’zini “3301” deb imzolagan. Maqsad — “yuqori intellektli odamlarni” topish ekani aytilgan. Jumboqlarda: steganografiya, kriptografiya, kitob shifrlari, QR-kodlar va hatto dunyoning turli joylariga joylashtirilgan real posterlar ishlatilgan. Ayrim bosqichlar Polsha, AQSh, Avstraliya va boshqa mamlakatlardagi GPS koordinatalarga olib borgan. Eng sirli qismi: 2014-yilgi jumboq “Liber Primus” deb ataluvchi runik kitobga olib kelgan va uning katta qismi hanuz ommaviy ravishda yechilmagan. Kimlar ortida? CIA, NSA, MI6, xususiy kiberxavfsizlik guruhi kabi ko’plab nazariyalar mavjud, ammo Cicada 3301 ortida kim turgani aniq tasdiqlanmagan."
  },
  {
    letter: "S",
    title: "Silvia Plat effekti",
    text: "bu shoiralarning ruhiy kasallikka chalinishga eng moyil insonlar ekanligini isbotlaydigan fenomin hisoblanadi. > Fanga bu atamani S. Kaufman kirgizadi. U barcha san’at sohalari > ichida, eng psixik kasallikka chalinishi ko’p uchraydigan soha deb > aynan shoiralarni aytgan. Bunga asos qilib u amerikalik shoira Silvia > Platni olgan. U 1963-yilda, 30 yoshida o’zini- o’zi o’ldirgan va > bunga asosiy sabab uning turmush o’rtog’i bilan aloqasi uzilishi > bo’lgan. Undan tashqari Emili Dikinson va Sara Tisdeylda ham bu holat > kuzatilgan. Kaufman buni aniqlash uchun asosan ikki bora tadqiqod olib > borgan. Birinchisida, 1629 ta yozuvchi va matbuot vakillari ichidan > eng psixik zaiflar shoiralar chiqqan. Ikkinchi tekshiruvda, 520 > san’atning boshqa vakilalari va siyosatchi ayollar qatnashishgan. Bu > tadqiqodda ham shoiralar psixik kasallikka chalinish ehtimoli > bo’yicha oldingi o’rinda bo’lishgan."
  },
  {
    letter: "S",
    title: "Simo Xyayuxya",
    text: "(SIMO XAYHA)— “OQ AJAL” Finlyandiyalik afsonaviy snayper 1939–1940 yillar Sovet–Fin urushida qatnashgan."
  },
  {
    letter: "S",
    title: "SIMOB",
    text: "(Merkuriy, Ртуть) • Kimyoviy belgisi: Hg (hydrargyrum — “suyuq kumush”) • Atom raqami: 80 • Yagona suyuq metal Simobdan ajraladigan bug’lari zaharli. • Organizmda to’planib, asab tizimga zarar yetkazadi va tremor, xotira yo’qolishi, ruhiy o’zgarishlar, depressiya va hatto psixozga olib keladi. 18–19-asrlarda Shlyapa tayyorlash uchun “fe’lt” (jun mahsuloti)ni yumshatish va shakl berish uchun simob nitrat bilan berilgan."
  },
  {
    letter: "S",
    title: "Sinedrion sudi",
    text: "(/kengashi) “Synedrion” atamasi (Sinedrion) eng mashhuri qadimgi Quddusdagi yahudiy xalqining oliy kengashi va tribunali hisoblanadi. Bu eng mashhur sud nasroniylik Isoning xochga mixlanishidan biroz oldin bo’lib o’tgan Oliy Kengash sudidir. Asosan iyerusalemda faoliyat yuritgan va odatda 71 a’zodan iborat bo’lgan. Xristian manbalariga ko’ra, Iso ustidan dastlabki sud ham shu kengashda bo’lgan."
  },
  {
    letter: "S",
    title: "Sinesteziya",
    text: "Bir necha hissiy sezgilarning bir vaqtda bir-biriga aralashib idrok qilinishi holati.Bunda odam bir hisni boshdan kechirayotganda, unga boshqa bir sezgi avtomatik tarzda qo’shiladi. Masalan, raqam yoki harflarni muayyan ranglarda ko’rish, so’zlarni eshitib ularning ta’mini sezish yoki musiqa tinglab rangli “manzara”larni ko’rish kabi. So’z yunoncha syn – “birgalikda” va aisthēsis – “sezgi” degan so’zlardan olingan."
  },
  {
    letter: "S",
    title: "Singan oynalar nazariyasi",
    text: "1982-yilda James Q. Wilson va George L. Kelling tomonidan ilgari surilgan kriminologik nazariya. Unga ko’ra, kichik tartibsizliklar — singan oynalar, graffiti, axlat va qarovsiz muhit — nazoratsiz qolsa, odamlar bu joyda tartib yo’qligini sezib, yanada jiddiy qonunbuzarliklar sodir etishi mumkin."
  },
  {
    letter: "S",
    title: "Singapur",
    text: "Janubiy Sharqiy Osiyodagi davlat boʻlib, Singapur oroli va unga tutash mayda orollar hamda Malakka yarim orolining janubiy chekkasigacha boʻlgan qismni oʻz ichiga oladi. 14-asrga oid Xitoy va Yava yilnomalarida bu orol Tumasik (yavacha “masek” – dengiz) deb atalgan. Singapur” tarjima qilinganida “arslon, sherlar shahri” degan ma’noni bildiradi."
  },
  {
    letter: "S",
    title: "Sir Edmund Hillary",
    text: "1953-yilda Tenzing Norgay bilan birga dunyodagi eng baland tog’ — Everest cho’qqisini birinchi bo’lib zabt etgan inson. Asl kasbi asalarichi bo’lsa-da, balandlikka intilishi uni tarixga kiritdi. U keyinchalik Shimoliy va Janubiy qutblarga ham yetib borib, Yer yuzining uch eng ekstremal nuqtasini zabt etgan birinchi inson bo’ldi. Shuningdek, Sherpa xalqi uchun maktablar, kasalxonalar barpo etgan xayriyachi sifatida ham tanilgan."
  },
  {
    letter: "S",
    title: "Sirius",
    text: "Dunyodagi yagona it qo’shilgan chanali harbiy qism Daniya armiyasiga tegishli bo’lib bu patrul qismi “Sirius” deb nomlanadi. U Grenlandiyaning shimoliy qirg’oqlarida, chana eng samarali transport vositasi hisoblanadigan joylarda xizmatni amalga oshiradi. Ushbu xizmatda 2 kishi va 10-15 kuchuklardan iborat 6 jamoa mavjud."
  },
  {
    letter: "S",
    title: "Sirokko",
    text: "O’rta Yer dengizi hududida esadigan janubi-sharqiy shamol nomi."
  },
  {
    letter: "S",
    title: "Sizif mehnati",
    text: "Ibora behuda va natijasiz mehnatni anglatadi. Afsonaga ko’ra, Korinf shohi Sizif ma’budlarni aldagani uchun abadiy jazoga mahkum etilgan. U ulkan toshni tog’ cho’qqisiga chiqarishga majbur bo’lib, tosh har safar cho’qqiga yetay deganda pastga dumalar va harakat qaytadan boshlanar edi."
  },
  {
    letter: "S",
    title: "Skovil shkalasi",
    text: "Bu qalampir (chili) va boshqa achchiq mahsulotlarning achchiqlik darajasini o’lchovchi shkaladir. Uni 1912-yilda amerikalik kimyogar Uilbur Skovill ishlab chiqqan. Shkala achchiqlikni kapsaitsin moddasining miqdoriga qarab baholaydi — bu modda qalampirga achchiq ta’m beradi Achchiqlik darajasi kapsaitsin moddasining miqdoriga qarab SHU (Scoville Heat Units) bilan o’lchanadi. Eng achchiq qalampir — Carolina Reaper, uning ko’rsatkichi 2,200,000 SHU ga yetadi."
  },
  {
    letter: "S",
    title: "Sleypnir",
    text: "Skandinav mifologiyasida xudolar boshlig’i Odin minadigan, sakkiz oyog’i bilan tezligi va qudrati tengsiz bo’lgan afsonaviy ot. Afsonaga ko’ra, u hiylakor xudo Loki ayg’ir qiyofasiga kirib, ulkan devning oti bilan juftlashganidan tug’ilgan. Sleypnir osmonda ham, yerda ham, o’liklar olamida ham bemalol harakatlana oladi. Uning sakkiz oyog’i barcha yo’llarda, jumladan xudolar va odamlarga bog’liq dunyolar orasida tez yurish imkonini beradi. Skandinav dostonlarida u eng ulug’ va eng tez ot sifatida tasvirlanadi."
  },
  {
    letter: "S",
    title: "Smith & Wesson",
    text: "Mashxur revolver ishlab chiqaruvchi kompaniya"
  },
  {
    letter: "S",
    title: "Soat kubogi",
    text: "(“Uhrencup”) 1962-yildan boshlab har yili Shveytsariyaning Grenxen shahrida yozda o’tkaziladigan do’stona o’rtoqlik turniri. Turnir asoschisi — “Grenxen” futbol klubi. O’yinlar “Bryul” stadionida bo’lib o’tadi. Grenxen shahri o’z soatsozlari hamda soat brendlari bilan mashxur. Kubok shu tufayli “Uhrencup” nomini olgan. Garchi kubokda asosan shveytsar jamoalari qatnashsa-da, turli davrlarda unda Vulverxempton, Galatasaray, Ipsvich, Kyoln, Partizan, Sosho, Borussiya (D) kabi jamoalar ham g’alaba qozongan"
  },
  {
    letter: "S",
    title: "Soliloqviy",
    text: "qahramonning boshqa personaj bilan suhbatlashmasdan, o’z fikrlarini ovoz chiqarib bayon qilishi."
  },
  {
    letter: "S",
    title: "Somnilokviya",
    text: "(lotincha “somnus” - “uyqu” va “loquor” - “gapirish”) *Uyqu vaqtidagi nutqiy faollik. Uyquda gapirish. Olimlarning ta’kidlashicha, uyquda gapirish umuman zararsiz kasallik hisoblanadi. U yetkazadigan yagona zarar - sherikning oromini buzishdir."
  },
  {
    letter: "S",
    title: "Sonic",
    text: "SEGA kompaniyasining «Sonic the Hedgehog» videooʻyinlari seriyasidagi bosh qahramon. Naoto Ohshima va Yuji Naka tomonidan yaratilgan. Sonic koʻk rangli shaxslashtirilgan tipratikandir. Sonic haqida keyinchalik komiks,multfilm va filmlar ishlangan. U tezlikda yugurish orqali yovuz olim Dr. Robotnikdan (Eggman) dunyoni himoya qiladi."
  },
  {
    letter: "S",
    title: "Sovet Sinatrasi",
    text: "Muslim Magomayev (1942-2008) –sovet va ozarbayjon opera va estrada qoʻshiqchisi edi. Buvisi tomonidan asrab olinganidan so’ng, u bolaligida pianino chalishni o’rgangan va 14 yoshida vokal darslarini olgan. O’smirlik chog’ida u italyan qo’shiqlari, amerikalik jazz va boshqa mashhur musiqa uslublariga qiziqib qolgan. U Boku musiqa akademiyasida pianino va bastakorlik mutaxassisligi bo’yicha tahsil olgan."
  },
  {
    letter: "S",
    title: "Spelling Bee",
    text: "Igliz tilidagi so’zlarni harfma-harf to’g’ri aytib berish bo’yicha o’tkaziladigan musobaqa hisoblanadi. Asosan, bolalar va o’smirlar ishtirok etadi. Ushbu tanlov qatnashchilarning imlo, eshitish, xotira va diqqat qobiliyatlarini sinovdan o’tkazadi. Birinchi milliy Spelling Bee 1925- yilda AQShda o’tkazilgan. Hozirda bu tanlov butun dunyoda ommalashib, yoshlarning ingliz tilini chuqur o’rganishiga xizmat qilmoqda."
  },
  {
    letter: "S",
    title: "Spiritizm",
    text: "ruhlar mavjudligi va ular bilan aloqa qilish mumkinligi haqidagi diniy-falsafiy ta’limot va harakat. Asosiy shakllanish davri: XIX asr, ayniqsa 1850-yillar. Asosiy shaxs: Allan Kardec (1804–1869), asl ismi Hippolyte Léon Denizard Rivail. Mamlakat: Fransiya. Kardec spiritizmga oid ta’limotni ruhlar bilan muloqot qilish tajribalari va yozib olingan javoblar asosida tizimlashtirgan. Asosiy g’oya: insonning ruhi o’limdan keyin ham mavjud bo’ladi va reinkarnatsiya orqali rivojlanishda davom etadi. Uning eng mashhur kitobi — Le Livre des Esprits (The Spirits’ Book), 101 1857-yil. Keyingi muhim asari — The Mediums’ Book (1861). Spiritizm ≠ oddiy “ruh chaqirish” Spiritizmda ruhiy rivojlanish, axloq va reinkarnatsiya markaziy o’rinda turadi. Seans, mediumlik va ruhlar bilan aloqa qilish esa uning amaliy tomonlaridan biridir. Ilmiy nuqtai nazardan: ruhlar bilan aloqa yoki reinkarnatsiya mavjudligini tasdiqlovchi ishonchli ilmiy dalillar mavjud emas. Spiritizm diniy-falsafiy e’tiqod sifatida qaraladi."
  },
  {
    letter: "S",
    title: "Spoiler",
    text: "Bu syujetning muhim elementlarini ochib beradigan ommaviy axborot vositalarining qisqacha mazmuni yoki tavsifining elementi bo’lib, syujetni yaratuvchi mo’ljallanganidek, tabiiy ravishda kashf qilish tajribasi uning to’liq ta’siridan mahrum bo’lgan degan ma’noni anglatadi. Masalan,filmda bosh qahramon oxirida o’ladi yoki kitobning yakunida ular ajrashishadi."
  },
  {
    letter: "S",
    title: "Spotify",
    text: "Dunyodagi eng yirik musiqiy platforma. 2008-yilda yaratilgan va bugun dunyoda 550 milliondan ortiq foydalanuvchiga ega eng yirik musiqa platformasidir.U sun’iy intellekt asosida shaxsiy playlistlar tuzadi, offline tinglash va reklamasiz xizmatni taqdim etadi."
  },
  {
    letter: "S",
    title: "Stankard-Greys-Vulf sindromi",
    text: "Bu “tungi ovqatlanish sindromi” nomi bilan ham tanilgan bo’lib, dunyo aholisining taxminan 1–2%ida uchraydi. Kechki ovqatni iste’mol qilgan bo’lishiga qaramay, bemorlar tunda uyg’onib, ovqatlanishga ehtiyoj sezadi. Ushbu sindrom haqida dastlab 1955-yilda psixiatr Albert Stankard va hamkasblari tomonidan ilmiy maqolada so’z yuritilgan."
  },
  {
    letter: "S",
    title: "Stiven Spilbergning filmlari",
    text: "Schindler’s List (1993) Saving Private Ryan (1998) Jaws (1975) E.T. the Extra-Terrestrial (1982) Jurassic Park (1993)"
  },
  {
    letter: "S",
    title: "Stiven Uilyam Xoking",
    text: "Ingliz nazariy fizigi , kosmologi va muallifi boʻlib , Kembrij universitetining Nazariy kosmologiya markazida tadqiqot direktori. U qora tuynuklar nazariyasini tubdan o’zgartirib, ular energiya chiqarishi mumkinligini — “Hawking nurlanishi”ni — ilm-fanga kiritgan. 21 yoshida unga ALS (amyotrofik lateral skleroz) tashxisi qo’yilib, butun tanasi falaj bo’lgan bo’lsa-da, ilmiy faoliyatini to’xtatmagan. U ovoz sintezatori orqali muloqot qilgan Mashhur kitoblar: “Vaqtning qisqacha tarixi”, “Qora tuynuklar va chaqaloq olamlari”."
  },
  {
    letter: "S",
    title: "Stokgolm sindromi",
    text: "psixologiyada keng tarqalgan atama bolib, beixtiyor asirga olingan jabrlanuvchi va bosqinchilar o’rtasida o’zaro va bir tomonlama xayrixohlik vujudga kelishi hisoblanadi. Kuchli ta’sir ostida garovga olinganlar bosqinchilariga hamdard bo’lishni boshlaydilar, ularning harakatlarini oqlaydilar va oxir-oqibat ular bilan tanishadilar, g’oyalarini qabul qiladilar va “umumiy” maqsadga erishish uchun qurbonlikka ham tayyor bo’ladilar."
  },
  {
    letter: "S",
    title: "Stradivari skripkasi",
    text: "Italiyalik Antonio Stradivari tomonidan XVII asr ohiri XVIII asr boshi oralig’ida yasalgan, dunyodagi eng sifatli va qimmatbaho deya e’tirof etiluvchi skripkalar. Stradivari yasagan skripkalar “Stradivarius” nomi bilan tanilgan bo’lib, o’zining tiniq, boy va chuqur ohanglari bilan ajralib turadi. Hozirgi kunda asl nusxalari 600 dan kam qolgan va ularning ayrimlari 10 million dollardan ortiq narxda baholanadi."
  },
  {
    letter: "S",
    title: "Streyzand effekti",
    text: "bu ijtimoiy fenomen bo’lib, ma’lum bir ma’lumotni jamoatchilik e’tiboridan olib tashlashga urinish (senzura) uning yanada keng tarqalishiga olib keladi (odatda Internet orqali). 2003-yilda Barbara Streyzand o’z uyining fotosurati Kaliforniya qirg’og’ining boshqa fotosuratlari orasida mavjud bo’lgani uchun fotograf Kennet Adelman va Pictopia.com saytidan 50 million dollar 102 talab qilib, sudga murojaat qiladi. Barbaraning advokatlari sudga murojaat etishidan oldin, 3850- raqamli fotosurat (unda Streyzandning uyi ko’rsatilgan) veb-saytdan atigi 6 marta ko’chirilgandi - ikki martasi advokatlar tomonidan. Keyinchalik, jurnalist Pol Rojers (San-Jose Mercury News) sud jarayoni to’g’risidagi ma’lumotlarning tarqalishi natijasida ushbu uyning fotosurati bir oydan keyin 420 mingdan ziyod marta ko’rilganligini ta’kidlaydi. > 2004-yil 10-mayda sud Barbara Streyzandning da’vosini rad etadi."
  },
  {
    letter: "S",
    title: "Strup effekti",
    text: "so’zlarning yozilishi va ma’nosi bir-biriga teskari kelganda, ularni o’qishda vujudga keladigan muammoga aytiladi. Effekt haqida, 1929-yillardan boshlab Germaniya manbalarida ma’lumotlar tarqala boshlagan. Uning nomlanishi esa, 1935-yilda shu sohada ilk testlarni taqdim etgan amerikalik psixolog Jon Ridli Strupga borib taqaladi. Ma’lumotlarga ko’ra, Strup testining rus tilidagi variantidan, 1950-yillarda AQShda rus josuslarni aniqlashda foydalanilgan. Hozirgi kunda esa, Strup testlaridan insonlardagi miyaning e’tiborlilik va moslashuvchanlik ko’rsatkichlarini aniqlashda foydalanilmoqda."
  },
  {
    letter: "S",
    title: "Sudzigiri",
    text: "(«chorrahadagi qotillik») — Yangi katana olgach yoki yangi jang uslubini o’zlashtirgach samuraylar tunda ko’chada duch kelgan istalgan odamga hujum qilib uni sinab ko’rish amaliyoti. Faqat yagona sharti — o’sha odam mavqe jihatdan samuraydan quyi tabaqa vakili bo’lishi lozim edi."
  },
  {
    letter: "S",
    title: "Sufrajistlar",
    text: "XIX asr oxiri va XX asr boshlarida, asosan Buyuk Britaniya va AQShda ayollarga saylov huquqi berilishi uchun kurashgan ijtimoiy-siyosiy harakat vakillari. So’z inglizcha suffrage — “saylov huquqi” so’zidan kelib chiqqan. Ular mitinglar, namoyishlar va matbuot orqali targ’ibot olib borishgan, ba’zan esa radikal usullarni ham qo’llashgan. Ularning sa’y-harakatlari tufayli ko’plab mamlakatlarda ayollarga ovoz berish huquqi berilgan."
  },
  {
    letter: "S",
    title: "Sugsvang",
    text: "(nemischa “zugzwang” - “yurishga majburlik”) * Shashka va shaxmatdagi holat bo’lib, bunda o’yinchi tomonidan amalga oshiriladigan navbatdagi har qanday yurish uning holati yomonlashishiga olib keladi. Hozirda bu atama nafaqat shaxmatda, balki boshqa sport turlarida (bilyard, kyorling), qimor va stol o’yinlarida (narda, karta o’yinlari), shuningdek boshqa ko’plab sohalarda va hatto kundalik hayotda ham qo’llaniladi. Masalan, biron bir harakat yoki harakatsizlik vaziyatning yomonlashishiga olib keladigan bo’lsa, “buni qilmaslik kerak” degan ma’noda sugsvang atamasi qo’llanadi."
  },
  {
    letter: "S",
    title: "Sulaymon sudi",
    text: "Sulaymon payg’ambar adolatli hukm chiqarish qobiliyati bilan mashhur bo’lgan. Uning odil sudlari “Sulaymon sudi” yohud “Sulaymon qarori” iboralarining kelib chiqishiga sabab bo’lgan. Eng mashhur voqealardan biri – ikki ayol bir bolaning onasiligini da’vo qilganida, Sulaymon chaqaloqning haqiqiy onasini aniqlash uchun uni ikkiga bo’lishni taklif qilgan. Haqiqiy ona bolaning hayoti uchun qayg’urib, undan voz kechgan, shunda Sulaymon bola unga tegishli ekanini anglab yetgan."
  },
  {
    letter: "S",
    title: "Sumo",
    text: "Kurashchi oʻz raqibini dumaloq ringdan tashqariga chiqarishga yoki oyoq kaftidan boshqa istalgan tana aʼzosi bilan yerga tegizishga (odatda uloqtirish, itarib yuborish) majburlashi mumkin boʻlgan raqobatbardosh toʻliq kontaktli kurash turidir. Eng yuqori unvon “yokozuna” deb ataladi. Sumochilarning kiyimi bo’lgan mavasi esa uzunligi 9 metrgacha bo’ladi. Sumochilar maktabi xeya deb ataladi. Sumochilarga avtomobil haydash ta’qiqlangan. Qizig’i shuki, Yaponiyadagi eng mashxur 103 sumochilar – bu mongollar. Sababi yosh yaponlarda sumo bilan shug’ullanishga qiziqish kamaymoqda."
  },
  {
    letter: "S",
    title: "Superman sindromi",
    text: "Bu sindrom o’zini barcha muammolarni yelkasi bilan ko’tarib, hamma narsani mukammal qilishga urinish holati. Bunday odamlarda yordam so’rash zaiflik belgisi sifatida qabul qilinadi va ular doimiy ravishda boshqalarga yordam berishga intilishadi. Tadqiqotlarga ko’ra, Superman sindromiga ko’proq mukammallikka intiluvchi, javobgarlikni o’z zimmasiga oladigan va boshqalarning ehtiyojlarini o’zidan ustun qo’yadigan odamlar duchor bo’ladi."
  },
  {
    letter: "S",
    title: "Suvaysh kanali",
    text: "Misrning shim.sharqiy qismidagi kema qatnaydigan shlyuzsiz dengiz kanali. Oʻrta dengizni Qizil dengiz bilan birlashtirib turadi. Suvaysh kanali xududi Osiyo bilan Afrika oraligʻidagi shartli geografik chegara deb qabul qilingan. U “Fir’avnlar kanali”, shuningdek, Aristotel bu kanalni Sesostris deb atagan. Kanal qurilishi bir necha asr davom etib, Qizil dengiz tomonga qarab siljiyvergan.Shundan so’ng Qizil dengizdagi kemalar kanal orqali O’rta Yer dengiziga ham chiqa olgan."
  },
  {
    letter: "S",
    title: "Svalbard Global Seed Vault",
    text: "Shimoliy Muz okeanidagi Shpitsbergen orolida, muzliklar ostida joylashgan. Bu yerda butun dunyodan olingan millionlab urug’ namunalari saqlanadi. Harorat doim - 18 °C bo’lib, ombor global falokatlar, urushlar yoki tabiiy ofatlar yuz bergan taqdirda ham insoniyatni oziq-ovqat bilan ta’minlash uchun yaratilgan. Ombor 2008-yilda ochilgan bo’lib, “Yer sayyorasining ehtiyot nusxasi” deb ham ataladi."
  },
  {
    letter: "S",
    title: "SVAROG",
    text: "slavyan mifologiyasida olov va temirchilik xudosi sifatida tanilgan. Uning nomi slavyancha “Svet” — yorug’lik , nur so’zidan kelib chiqqan. U Yunon mifalogiyasidagi Gefestning analogi. DC qahramoni bo’lmish Firestorm ba’zi komikslarda Svarog nomi bilan yonma-yon kelgan. “Svarog” Rossiyada 18 yildan ortiq vaqtdan beri mavjud bo’lgan, MMA, MIG, TIG va CUT kabi payvandlash uskunalarini ishlab chiqaruvchi brend ham hisoblanadi."
  },
  {
    letter: "S",
    title: "Sweeney Todd",
    text: "“Fleet Streetning iblis sartaroshi” XIX asr ingliz shahar afsonasi va badiiy qahramoni. Birinchi bor: The String of Pearls (1846–1847) nomli Penny Dreadful hikoyasida Londonning Fleet Street ko’chasidagi sartarosh mijozlarini o’ldirib, jasadlarini pastdagi novvoyxonaga yuboradi. Sherigi Mrs. Lovett — jasad go’shtidan piroglar tayyorlaydi. 2007-yilda Tim Burton tomonidan Sweeney Todd: The Demon Barber of Fleet Street filmi suratga olingan. Filmda Johnny Depp — Sweeney Todd, Helena Bonham Carter — Mrs. Lovett rolini ijro etgan."
  },
  {
    letter: "S",
    title: "Syulli Pryudom (1839–1907)",
    text: "Fransuz shoiri va essechisi, tarixda birinchi adabiyot boʻyicha Nobel mukofoti sovrindori sifatida tanilgan. Uning she’rlari musiqiy ohangdorligi, falsafiy teranligi va ichki iztiroblarni nozik ifodasi bilan mashhur. Muhandislik ma’lumotiga ega bo’lsa-da, qalbi uni she’riyatga yetaklagan. 1901-yilda unga Nobel mukofoti “she’riyati yuksak badiiy fazilatlari, insoniy his-tuyg’ularning nafis ifodasi va ajoyib san’at mahorati uchun” berilgan. 104 T"
  },

  // === T ===
  {
    letter: "T",
    title: "Tamagochi effekti",
    text: "pixologik hodisa bo’lib, unda odamlar robot, virtual obyektlar, gadjetlarga hissiy jihatdan qaram bo’lib qoladilar. Hattoki telefoningizdagi biror bir dasturga bog’lanib qolishingiz ham Tamagochi effektiga misol bo’la oladi. Tamagochi effekti atamasi 1996-yil paydo bo’lgan bo’lib, bu nom Yaponiyaning virtual o’yinchoqlar ishlab chiqaruvchi “Bandai” kompaniyasiga tegishli savdo belgisidan olingan. Tadqiqotlar shuni ko’rsatadiki, Tamagochi effekti har qanday yoshda namoyon bo’lishi va insonning salomatligiga,salbiy ta’sir ko’rsatishi mumkin."
  },
  {
    letter: "T",
    title: "Tambora vulqoni",
    text: "Indoneziyaning Sumbava orolida joylashgan faol stratovulqon. 1815-yil 10–11- aprel kunlari sodir bo’lgan portlash — insoniyat tarixida qayd etilgan eng kuchli vulqon otilishi hisoblanadi. Portlash natijasida vulqon balandligi 4300 metrdan 2850 metrgacha qisqarib, ulkan krater hosil bo’lgan. Jangdek dahshatli bu portlash oqibatida 100 mingga yaqin odam halok bo’lgan. Atmosferaga chiqib ketgan kul va oltingugurt Yerning iqlimiga kuchli ta’sir ko’rsatgan, 1816-yil tarixga “Yozsiz yil” nomi bilan kirgan. O’sha yili Yevropa va Shimoliy Amerikada sovuq, qor va ocharchilik kuzatilgan."
  },
  {
    letter: "T",
    title: "Tangram",
    text: "(xitoycha , qī qiǎo bǎn, ya’ni “yetti mahorat taxtachasi”) — bu yetti tekis shakldan iborat boshqotirma bo’lib, ularni ma’lum tartibda joylashtirib inson, hayvon, buyum, harf yoki raqam ko’rinishidagi murakkab figuralarni hosil qilish mumkin."
  },
  {
    letter: "T",
    title: "Tanka",
    text: "Yapon she’riyatining qadimiy janrlaridan biri. 31 bo’g’indan iborat bo’lib, 5 misrada 5-7- 5-7-7 tarzida tuziladi. Asosan tabiat manzaralari, inson tuyg’ulari, muhabbat va vaqtning o’tishini ifodalaydi. Har bir misra qisqa bo’lsa-da, unda ramziy ma’no va chuqur falsafa yashiringan. Tanka yapon adabiyotining eng nafis va ta’sirchan she’riy shakllaridan biri hisoblanadi."
  },
  {
    letter: "T",
    title: "Tantal Yunon mifologiyasida xudolarning sodiq do’sti bo’lgan",
    text: "ammo ularning sirlarini ochib qo’ygan va abadiy azobga hukm etilgan shoh. Tantal o’z o’g’li Pelopsni so’yib, go’shtidan xudolar uchun ziyofat tayyorlaydi — ularni sinab ko’rmoqchi bo’ladi. Bu dahshatli jinoyat uchun u abadiy ochlik va chanqov azobiga mahkum etiladi: suvda turgan bo’lsa-da, ichmoqchi bo’lsa — suv chekinadi, tepasidagi mevalar esa qo’l uzatsa — uzoqlashadi."
  },
  {
    letter: "T",
    title: "Tantamareska",
    text: "Fotosuratlar uchun mo’ljallangan, yuz qismida maxsus teshiklari qoldirilgan stend. Odatda plastik, DVP yoki kartondan tayyorlangab bo’lib, temir karkaslarga tortilgan keng fotosurat holatida ham bo’lishi mumkin). Unda turli holatda turgan, yuz, ba’zan oyoq va qo’llar uchun maxsus teshik qoldirilgan personajlarning surati tushirilgan bo’ladi."
  },
  {
    letter: "T",
    title: "Taras Bulba",
    text: "Nikolay Gogolning “Taras Bulba asari kazak polkovnigi va uning o’g’illari haqida hikoya qiladi. Unda Vatan, jasorat va xiyonat mavzulari yorqin aks etgan. Taras Bulba obrazi ozodlik uchun kurashuvchi xalq qahramoni sifatida gavdalanadi. Asardagi eng keng tarqalgan iqtibos, bu Taras Bulbaning o’g’liga qarata aytgan ushbu so’zlaridir: «Men seni tug’dirdimmi – o’zim o’ldiraman ham …»"
  },
  {
    letter: "T",
    title: "Tekstrovert",
    text: "bu odamlar bilan yozishma orqali muloqot qilishni afzal ko’radigan shaxs. Ular matn orqali o’z fikrlarini aniq va ravon ifodalashadi, ammo real hayotda muloqot qilishda noqulaylik sezishlari mumkin. Tekstrovertlar introvert va ekstrovertlarning o’ziga xos kombinatsiyasidir."
  },
  {
    letter: "T",
    title: "Tenzing Norgay",
    text: "nepallik-hindistonlik Sherpa alpinisti. 1953-yil 29-mayda Edmund Hillary bilan birga Everest cho’qqisiga ilk bor muvaffaqiyatli chiqqan ikki insondan biri."
  },
  {
    letter: "T",
    title: "Terrakota armiyasi",
    text: "Xitoyning birinchi imperatori Tsin Shi Xuangdi maqbarasi yaqinidan topilgan ulkan loydan yasalgan haykal askarlar armiyasi. Miloddan avvalgi 210-209- yillarda Tsin sulolasi davrida, imperatorni o’limidan keyingi hayotida himoya qilish uchun yasalgan. Terrakota armiyasi 8 mingdan ortiq haykaldan iborat bo’lib, ularga piyoda askarlar, chavandozlar, aravakashlar va otlar kiradi. 1987-yilda YUNESKOning Jahon merosi ro’yxatiga kiritilgan."
  },
  {
    letter: "T",
    title: "Tesey paradoksi",
    text: "Bu obyektning barcha qismlari almashtirilsa, u hanuz o’sha obyekt bo’lib qoladimi, degan falsafiy savoldir. Tesey kemasi har safar ta’mirlanib, barcha taxtalari asta-sekin yangilangan. Faylasuflar shunday bahs yuritgan: “Agar eski qismlar saqlanib, ular bilan yana bir kema yasalsa, qaysi biri haqiqiy Tesey kemasi bo’ladi?” Bu paradoks o’zlik va doimiylik haqida chuqur fikrlashga undaydi."
  },
  {
    letter: "T",
    title: "Tetcher effekti yoki Tetcher illyuziyasi",
    text: "yuzning odatdagi holatida o’zgarishlar aniq bo’lishiga qaramay, teskari yuzdagi o’zgarishlarni aniqlash qiyinroq bo’lgan hodisa. Ta’sir 1980-yilda York universiteti psixologiya professori Piter Tompson tomonidan aniqlangan. Illyuziya birinchi marta sobiq Britaniya Bosh vaziri Margaret Tetcherning suratida namoyish etilgan va uning sharafiga nomlangan."
  },
  {
    letter: "T",
    title: "Tetra-amelia sindromi",
    text: "juda kam uchraydigan tug’ma kasallik bo’lib, to’rtta a’zoning to’liq yo’qligi bilan tavsiflanadi. (“Tetra” to’rtta degan ma’noni anglatadi va “amelia” tug’ilish paytida oyoq-qo’llarining yo’qligini anglatadi). Bu, birinchi navbatda, WNT3 yoki RSPO2 genlarida autosomal retsessiv mutatsiyalar tufayli yuzaga keladi"
  },
  {
    letter: "T",
    title: "Tetris",
    text: "Sovet dasturchisi Aleksey Pajitnov tomonidan 1985-yilda ixtiro qilingan va ishlab chiqilgan kompyuter o’yini. «Tetromino», ya’ni bir-biriga ulangan kvadratlar va «tennis» so’zlaridan olingan. Bu o’yinda 10x20 o’lchamdagi oynaga turli shakldagi bloklar tushadi. Ularni aylantirib va siljitib joylashtirasiz. To’ldirilgan qatorlar yo’qoladi, o’yin tezlashadi. Maqsad — imkon qadar ko’proq qator to’ldirib, shakllar to’planib ketishidan saqlanish."
  },
  {
    letter: "T",
    title: "Tetrodotoksin",
    text: "(TTX) — dunyodagi eng xavfli tabiiy zaharlardan biri 1774-yil 7-sentabrda kapitan Jeyms Kuk va jamoasi tropik baliq go’shtini yeyishadi. Oradan ko’p o’tmay, ular karaxtlik va nafas olishda qiynalishadi. Sababi — tetrodotoksin zahari. Tetrodotoksin — fugu (blowfish) baliqlarida, ayrim osiyo dengiz hayvonlarining tuxum va terisida uchraydigan kuchli neyrotoksin. U asab tolalaridagi ion kanallarini “to’sib qo’yadi”, natijada impuls o’tmaydi va tana falajlanadi."
  },
  {
    letter: "T",
    title: "The North Face",
    text: "Bu AQSHda tashkil topgan mashhur brend bo’lib, asosan, tog’-chang’i, yurish (trekking), alpinizm va boshqa ekstremal sport turlari uchun mo’ljallangan kiyim-kechak, poyabzal va jihozlarni ishlab chiqaradi. Kompaniya logotipiga 1966-yilda asos solingan boʻlib, Yosemit National Parkda joylashgan Half Dome chizmasidan ilhomlanib yaratilgan."
  },
  {
    letter: "T",
    title: "The Physical Impossibility of Death in the Mind of Someone Living",
    text: "” — Demyen Xerst ijodida 1991-yilda yaratilgan “Tirik inson ongida o’limni anglashning jismoniy imkonsizligi” asari 4,3 metr uzunlikdagi yo’lbars akulasi bo’lib, u formaldegid to’ldirilgan maxsus idishda saqlanadi. Asar 1991- yilda kolleksioner Charlz Saatchi tomonidan buyurtma qilingan. U Demyen Xerstga: “Nimani xohlasang, o’shani yarat” degan. Asarni yaratish 70 000 dollardan ortiq mablag’ talab qilgan — akula maxsus buyurtma bilan Avstraliyada tutilgan, bundan tashqari kimyoviy saqlash jarayoni ham juda qimmatga tushgan. Ko’pchilik uchun jirkanch ko’ringan ushbu asarda “Odam o’limni ko’rishi, lekin uni anglay olmasligi” tasvirlangan."
  },
  {
    letter: "T",
    title: "Timsoh koʻz yoshlari",
    text: "Koʻp tillarda mavjud boʻlgan frazeologik birlik boʻlib, his-tuygʻularning soxta, samimiy boʻlmagan ifodasini, soxta yigʻlashni anglatadi. Bu ibora timsohlar oʻljasini tanovul qilayotganda yigʻlaydi, degan qadimgi ishonchdan kelib chiqqan. Plutarx asarlaridan birida timsohning xatti-harakati kimnidir oʻldirishga qasd qilib, keyin qurboniga motam tutadigan odamlarning qilmishiga qiyoslanadi. Timsoh koʻz yoshlari sindromi yoki Bogorad sindromi Bell falajini notoʻgʻri davolash natijasida paydo boʻlgan, oqibatda ovqatlanish paytida yosh bezlari taʼsirlanadi. Sovet neyrofiziologi F. A. Bogorad birinchi marta 1928-yilda sindromni tasvirlab berdi va ushbu nomni taklif qilgan."
  },
  {
    letter: "T",
    title: "Tirisey",
    text: "(Tiresias) — qadimgi yunon mifologiyasidagi eng mashhur folbinlardan biri. U ko’zi ojiz bo’lsa-da, xudolar tomonidan kelajakni ko’rish va bashorat qilish qobiliyati bilan siylangan. Tirisey Edip haqidagi afsonada muhim rol o’ynaydi. Aynan u Edipga uning asl kelib chiqishi va taqdiridagi dahshatli haqiqatni ochib beradi. Shuningdek, u Gomerning “Odisseya” asarida ham uchraydi va Odisseyga uyiga qaytish yo’li haqida maslahat beradi. Bugungi kunda “Tirisey” nomi haqiqatni boshqalardan oldin ko’ra oladigan dono va uzoqni ko’ra biluvchi inson timsoli sifatida ishlatiladi."
  },
  {
    letter: "T",
    title: "Titanik kemasi",
    text: "O’z davrining eng yirik va hashamatli yo’lovchi kemalaridan biri bo’lib, Angliyaning Sautgempton hamda AQShning Nyu-York shahri orasidagi reyslar uchun qurilgan edi. 1912-yil 10-aprelda o’zining ilk reysiga yo’l olgan kema 14-aprel kechasi Atlantika okeanida aysberg bilan to’qnashib, 2 soatu 40 daqiqa ichida cho’kib ketgan. Kema bortida 2200 dan ortiq yo’lovchi va ekipaj a’zolari bo’lib, ulardan taxminan 1500 nafari halok bo’lgan. «Titanik» qoldiqlari 1985-yilda okean tubidan topilgan. Fojia asosidagi mashxur film esa 1997-yilda premyera qilingan. Jeyms Kemeron rejissyorlik qilgan film 11 ta Oskar mukofotiga loyiq ko’rilgan va dunyo bo’ylab umumiy 2.2 mlrd $ kassaga erishgan."
  },
  {
    letter: "T",
    title: "Tokvil effekti yoki Tokvil paradoksi",
    text: "ijtimoiy hayotdagi katta muammolar qancha yaxshilana boraversa, kichik muammolarga nisbatan norozilik shuncha o’sib borishi hodisasi. Effektni “Ishtaha - ovqat vaqti keladi” deb ham ta’riflash mumkin. Shundan kelib chiqib, biror bir narsada ko’proq ijtimoiy adolatga erishilgandan so’ng, avvalgidan ham kichikroq ijtimoiy adolatsizliklarga nisbatan kuchli qarshilik paydo bo’lishi hodisasi kuzatiladi. Effekt ilk marta, fransuz siyosatchisi Aleksis De Tokvilning 1835-1840-yillarda chiqarilgan “Amerikadagi demokratiya” kitobida tasvirlangan."
  },
  {
    letter: "T",
    title: "Tomagavk",
    text: "Shimoliy Amerika hindularining jangovar boltasi. Nomi turli sharqiy algonkin tillaridagi atamaning inglizcha transliteratsiyadan kelib chiqqan. Dastlab bu nom bilan turli xil jangovar dubinkalar, keyinchalik, metall bolg’alar atalgan. Tomagavk yaqin masofada jang qilish quroli hamda uloqtiriladigan sport inventari sifatida ishlatilgan, ammo kamdan-kam hollarda jangda ishlatilgan."
  },
  {
    letter: "T",
    title: "Tomas Plankett",
    text: "tarixdagi afsonaviy ingliz snayperi 🇬🇧 1809-yilda irlandiyalik mergan Tomas Plankett Napoleon urushlari vaqtida taxminan 600 metr masofadan fransuz generalini bitta o’q bilan yo’q qilgan. O’sha davr qurollari uchun bu deyarli imkonsiz natija edi. Keyin esa ikkinchi o’q bilan general yordamchisini ham urgan."
  },
  {
    letter: "T",
    title: "Tomas Xaksli",
    text: "“Darvinning buldogi” laqabi bilan tanilgan mashhur ingliz biologi va faylasufi. Xaksli ilmiy haqiqatni diniy bosimdan ustun qo’ygan, shuning uchun ko’plab munozaralarda qat’iyat bilan qatnashgan.U “agnostik” (isbot bo’lmaganda e’tiqod qilishdan tiyilish) atamasini ilk bor fanga olib kirgan. Uning biologiyaga qo’shgan hissasi uchun Britaniya Qirollik jamiyati tomonidan 1894- yilda Darvin medali bilan taqdirlangan."
  },
  {
    letter: "T",
    title: "Tort ustidagi olcha",
    text: "biror narsani yanada mukammal yoki yoqimli qiladigan so’nggi kichik detalni anglatuvchi ibora. Masalan, katta yutuqqa erishib, ustiga yana kutilmagan bonus olish — “tort ustidagi olcha”.Ingliz tilida ham “the cherry on top” iborasi aynan shu ma’noda ishlatiladi ### YOLG’ON, QIP-QIZIL YOLG’ON VA STATISTIKA” “There are three kinds of lies: lies, damned lies, and statistics” — raqamlar yordamida odamlarni ishontirish yoki chalg’itish qanchalik osonligini kinoyali tarzda ifodalovchi mashhur ibora. Bu ibora ko’pincha Mark Tven yoki Benjamin Disraeliga nisbat beriladi. Aslida esa Disraelining asarlarida bu jumla topilmagan; uning kelib chiqishi ancha noaniq."
  },
  {
    letter: "T",
    title: "Toʻrtinchi devorni buzish(yoki olib tashlash)",
    text: "Teatr sahnasida uchta devor mavjud ekanligiga ishonamiz: chap, o’ng va orqa. Biroq, tomoshabin bilan sahnani ajratib turuvchi “toʻrtinchi devor” mavjud. Ushbu uslub orqali asar obrazlari yoki hikoya qiluvchilar bevosita siz bilan gaplashadi. Misol uchun, Deadpool filmidagi bosh qahramon yoki baʼzi teatr asarlarida aktyorlarning zalga murojaati bu uslubning yorqin namunasidir. Bu texnika tomoshabinni asarga yanada yaqinlashtirish, hazil yoki tanqid orqali yangi maʼnolar yaratish maqsadida qoʻllaniladi."
  },
  {
    letter: "T",
    title: "Trasologiya",
    text: "jinoyat joyida qoladigan barcha izlarni aniqlash va o’rganish bilan shug’ullanuvchi kriminalistika sohasi."
  },
  {
    letter: "T",
    title: "Trevi favvorasi",
    text: "Italiya poytaxti Rim shahrida joylashgan bo’lib, afsonaga ko’ra, agar kishi o’ng qo’li bilan chap yelkasidan favvoraga tanga otsa, kelajakda Rimga qaytadi. Trevi mavzesida joylashgan ushbu favvora uchta asosiy ko’cha kesishmasida joylashgani uchun ham “Trevi” nomi bilan atalgan. Favvora suvlari Rimning qadimiy akveduk tizimidan oqib keladi."
  },
  {
    letter: "T",
    title: "Trevi favvorasi",
    text: "Trevi favvorasi (italyancha: Fontana di Trevi) — Rim, Italiyada joylashgan mashhur barokko uslubidagi favvora. Favvora 1732–1762 yillarda Nikolò Salvi tomonidan loyihalashtirilgan. Uning balandligi 26,3 metr, kengligi esa 49,15 metr bo’lib, Rimdagi eng yirik barokko favvoralardan biridir. Favvoraning markazida dengiz xudosi Okean haykali joylashgan, atrofida ikki yirik atlant va turli dengiz hayvonlari tasvirlangan. Favvoraga tashrif buyurganlar odatda orqa tomonga o’tirib, tanga tashlab, Rimga qaytishlarini yoki tilaklarini amalga oshirishadi."
  },
  {
    letter: "T",
    title: "TRINITI",
    text: "Insoniyat tarixidagi birinchi yadroviy portlash sinoviga berilgan maxfiy kodli nom. Ushbu sinov 1945-yil 16-iyul kuni AQSHning Nyu-Meksiko shtatidagi poligonida, “Manxetten loyihasi” doirasida amalga oshirilgan. Sinovda “Gadget” (Moslama) deb nomlangan plutoniy asosidagi bomba portlatilgan. Aynan shu voqea dunyoda “atom asri”ning boshlanishini belgilab berdi 108 va insoniyatning urush olib borish hamda energiya haqidagi tasavvurlarini butunlay o’zgartirib yubordi)."
  },
  {
    letter: "T",
    title: "Tripofobiya",
    text: "zich joylashgan teshikchalardan qo’rqish. Tripofobiyadan aziyat chekadigan odamlar ko’plab kichik teshiklari bo’lgan narsalarni xavf bilan bog’laydi. Ba’zi ma’lumotlarga ko’ra minglab odamlar bundan aziyat cheksada, hozirgacha bunday fobiyalar rasmiy ro’yxatiga kiritilmagan. Tripofoblar ko’plab asalari uyasi, gubkalar yoki ba’zi bir o’simliklardan hadiksiraydi. Tripofobiya alomatlari ko’ngil aynishi, tana qichishi va hatto vahimaga tushish hollarini o’z ichiga olishi mumkin."
  },
  {
    letter: "T",
    title: "Trismegist",
    text: "Bu “uch marta buyuk” degan ma’noni anglatuvchi epitet bo’lib, u afsonaviy shaxs — Germesga tegishlidir. U misrlik xudo Tot va yunon xudosi Germesning sintezidan yaratilgan sinkretik iloh hisoblanadi. Germes Trismegist ham Mabud ham Shoh ham Ruhoniy bo’lgan."
  },
  {
    letter: "T",
    title: "Trollar zinapoyasi",
    text: "(norvegcha — “Trollstigen”) *Tabiiy landshaftdagi ushbu noyob ilon izi yo’l Norvegiyaning eng ko’p turist tashrif buyuradigan joylaridan biri hisoblanadi. Ushbu yo’l Ondalsnes shahrini Ryouma kommunasi bilan bog’laydigan RV63 yo’lining bir qismi hisoblanadi. U 1936-yil 31-iyulda qirol Hokon VII tomonidan ochilgan."
  },
  {
    letter: "T",
    title: "TSINANDALI",
    text: "Quruq oq gruzin vinosi. Gruziyaning eng mashhur sharoblaridan biri bo’lib, SSSR paytida birinchi raqamli vino hisoblangan"
  },
  {
    letter: "T",
    title: "Tsundoku",
    text: "Yapon tilida kitoblarni sotib olib, ularni oʻqimasdan uy yoki ishxonada yigʻib qoʻyish odatini ifodalovchi atama. Bu soʻz “tsunde” (toʻplash), “oku” (qoʻyib qoʻyish) va “doku” (oʻqish) soʻzlarining birikmasidan kelib chiqqan. Tsundoku kitobsevarlar orasida keng tarqalgan holat boʻlib, u bilimga tashnalik va kitoblarga boʻlgan muhabbatni aks ettiradi, biroq ular uchun vaqt topish muammosi bilan ham bogʻliq."
  },
  {
    letter: "T",
    title: "Tuban vodiy effekti",
    text: "bu yapon robototexnika olimi va muhandisi Masahiro Mori tomonidan ishlab chiqilgan gipotezaga asoslangan hodisa bo’lib, robot yoki boshqa texnikaning, odamga o’xshab ko’rinishi yoki harakatlanishi, kuzatuvchida chuqur nafrat va qo’rquvni keltirib chiqaradi. 1978-yilda yapon olimi Masahiro Mori odamlarning robotlar ko’rinishiga bo’lgan hissiy munosabatini o’rganib, so’rov o’tkazdi. Dastlab, natijalarni oldindan aytish mumkin edi: robot odamga qanchalik o’xshash bo’lsa, u shunchalik yoqimli ko’rinadi — lekin faqat ma’lum bir chegaraga qadar. Maksimal odam ko’rinishiga yaqin robotlar, kutilmaganda odamlarda noqulaylik va qo’rquv hissini keltirib chiqardi. O’rganishlar natijasida, inson psixikasida yuzaga keladigan qattiq tushkun holatning, sxemadagi ko’rinishi, effekt nomlanishiga sabab bo’ldi. Shuningdek, effekt kinomotografiya va rassomchilikda “Giperrealizm” yo’nalishini ajralib chiqishiga turtki bo’ldi."
  },
  {
    letter: "T",
    title: "Tubsizlikdagi Xristos",
    text: "Genuyadan unchalik uzoq bo’lmagan San-Fruttuozo buxtasida dengiz tubida joylashgan haykalning nomi. Balandligi 2,5 metr bo’lgan ushbu haykal 1954-yil 22-avgustda 17 metr chuqurlikka o’rnatilgan. Suv ostiga haykal o’rnatish g’oyasi ilk bora italyan dayveri Dulio Markantega suv osti meditatsiyasi bilan shug’ullanayotgan paytda kelgan. U mazkur haykal orqali bu yerda 1947-yilda halok bo’lgan birinchi italyan akvalangisti Dario Gonzatti xotirasini abadiylashtirmoqchi ham bo’ladi. Haykalni Gvido Galleti ismli haykaltarosh yasagan."
  },
  {
    letter: "T",
    title: "Tula",
    text: "Rossiyaning qadimiy shaharlaridan biri boʻlib o’zining mashhur pryaniklari va samovarlari bilan tanilgan. Tula pryanik - bosma ruscha pryanikning mashhur turi. Odatda, Tula pryanik to’rtburchak kafel yoki tekis shaklga o’xshaydi. Shtamplangan pryanik yasash san’at turi hisoblanadi. Imzolar turli naqshlar, belgilar, Tula Kremlining tasvirlari, ismlar, tabriklarni o’z ichiga olishi mumkin. Tula samovari –an’anaviy choy qaynatish idishi.Ilk samovarchilar rus aka-uka Lisitsinlar Ivan Fyodorovich va Nazar Fyodorovichlar edi. 1778-yilda ular samovar yasadilar va oʻsha yili Nazar Lisitsin Rossiyada birinchi samovar ishlab chiqaruvchi zavodni roʻyxatdan oʻtkazdi."
  },
  {
    letter: "T",
    title: "Turetta sindromi",
    text: "markaziy nerv tizimining buzilishidan hosil bo’luvchi bu sindrom,har qanday yoshdagi insonlarda uchrab turadi. Bu sindrom harakatlantiruvchi (motor),yoki tovush nerv sistemasida o’z aksini topadi va oqibatda bu nerv sistemalarini boshqarishning iloji bo’lmay qoladi. > ."
  },
  {
    letter: "T",
    title: "Tyuring testi",
    text: "Ilk bor Alan Tyuring tomonidan “Mind” jurnalida 1950 -yilda Hisoblash mashinalari va oʻy nomli maqolada ilk bor tilga olingan emperik test. Tyuring mashina ham oʻylashini isbotlashga harakat qiladi. Ushbu testning odatiy talqini quyidagicha: “Inson bir kishi va bir inson bilan muloqot qila oladi. Savollarga berilgan javoblarga asoslanib, u kim bilan gaplashayotganini aniqlashi kerak: odam yoki kompyuter dasturi. Kompyuter dasturining maqsadi esa odamni notoʻgʻri tanlov qilishga undash”. Test qatnashchilari bir-birlarini koʻrmaydilar. Agar qatnashchi suhbatdoshlarning qaysi biri inson ekanini aniq ayta olmasa, dastur sinovdan oʻtgan hisoblanadi. 110 U"
  },

  // === U ===
  {
    letter: "U",
    title: "UBUNTU",
    text: "Janubiy va Sharqiy Afrika xalqlari falsafasiga ko’ra, insonlar o’rtasidagi o’zaro bog’liqlik va insoniylikni ifodalovchi tushuncha. Ushbu atama zulucha “umuntu ngumuntu ngabantu” iborasidan kelib chiqqan bo’lib, “Men borman, chunki biz bormiz” yoki “Inson boshqa insonlar orqali insondir” degan ma’nolarni anglatadi. Ubuntu falsafasining markazida saxovat, hamdardlik, resurslarni baham ko’rish va jamoaviy birlik yotadi. Bu dunyoqarashga ko’ra, bir insonning baxtsizligi yoki kamsitilishi butun jamiyatning shikastlanishi deb qabul qilinadi."
  },
  {
    letter: "U",
    title: "Uch kunlik rohib sindromi",
    text: "Odamlar hayotlarida bir marta bo’lsa ham o’zlari uchun yangi ish bilan shug’ullanish niyatini his qilishgan (sport, ingliz tilini o’rganish, kitob o’qish va hokazo). Bu rejalashtirilgan ishimizni avvalida kuchli ishtiyoq bilan boshlaymiz, uch yoki bir haftada bu ishtiyoq oʻrnini erinchoqlik egallaydi. Reja qilgan ishimizga befarqlikni his qila boshlaymiz va shu bilan to’xtatib qo’yamiz. Bu fanda uch kunlik rohib sindromi deb ataladi."
  },
  {
    letter: "U",
    title: "Ufologiya",
    text: "Nomaʼlum uchar jismlar va ular bilan taxminan bogʻliq boʻlgan voqea-hodisalar holatlar haqidagi guvohlarning xabar va maʼlumotlarini toʻplash, guruxlashtirish va talqin qilish, ularning toʻgʻri-notoʻgʻriligini aniqlash bilan shugʻullanuvchi soha. Bu termin ilk bor 1950-yillarda paydo bo’lgan va ilmiy hamda noilmiy qiziqishlar doirasida rivojlangan. Ufologiya bilan shug’ullanuvchi shaxs ufolog deb ataladi. Ufologlar NUO (Noma’lum Uchar Obyektlar) bilan bog’liq hodisalarni o’rganishadi va bu borada guvohlarning ko’rsatmalari, fotosuratlar, videolar, va boshqa dalillarni tahlil qilishadi."
  },
  {
    letter: "U",
    title: "Uidji doskasi",
    text: "(The Ouija board) – Ruhlar bilan muloqot qilish vositasi bo’lib ilk bor 1890-yillarda yaratilgan u yordamida insonlar o’zlarini qiziqtirgan savollarga javob olishlariga ishonishgan. Doskada lotin harflari, 0-9 gacha bo’lgan raqamlar, “Ha”, “Yo’q”, “Salom”, “Xayr” so’zlari va turli xil belgilar va grafikalarni ko’rish mumkin."
  },
  {
    letter: "U",
    title: "Uilyam Gibson",
    text: "kiberpank janrining asoschisi Uilyam Gibson 1948-yilda tug’ilgan amerika- kanadalik yozuvchi bo’lib, kiberpank janrining asoschilaridan biri hisoblanadi. 1984-yilda chop etilgan “Neuromancer” romani nafaqat kiberpankni ommalashtirdi, balki “kibermakon” (cyberspace) atamasini ham mashhur qildi. Asarda sun’iy intellekt, xakerlar va virtual olam tasvirlari bugungi internet va raqamli dunyo haqidagi tasavvurlarga katta ta’sir ko’rsatgan. Mashhur asarlari: Neuromancer (1984) Count Zero (1986) Mona Lisa Overdrive (1988) Pattern Recognition (2003) Gibsonning asarlari ilmiy fantastika tarixida muhim o’rin tutadi va zamonaviy texnologiyalar rivojlanishini oldindan tasvirlagan eng ta’sirli adiblardan biri sifatida e’tirof etiladi."
  },
  {
    letter: "U",
    title: "Uilyams sindromi",
    text: "irsiy xromosomalarning qayta tuzilishi natijasida yuzaga keladigan kasallik bo’lib, undan aziyat chekadiganlar o’ziga xos tashqi ko’rinishga ega bo’ladilar. Shu bilan birga, ular ma’lum bir sohalarda aqliy rivojlanish kuzatilgan holda umumiy aqliy zaiflik bilan ajralib turishadi. Sindrom 1961-yilda Yangi Zelandiyalik kardiologi J.Uilyams tomonidan tavsiflab berilgan. Bemorlarning yuz tuzilishidagi o’ziga xoslik tufayli ushbu kasallik ba’zi maxsus adabiyotlarda “elf yuzi sindromi” deb ham ataladi."
  },
  {
    letter: "U",
    title: "Uliss (1922), Jeyms Joys",
    text: "Ushbu roman modernizm adabiyotining eng murakkab va ta’sirli asarlaridan biridir. Asar Homerning “Odisseya” dostoniga zamonaviy shaklda javob bo’lib, Dublinda yashovchi oddiy inson — Leopold Blumning 1904-yil 16-iyun kuni kechgan hayotini tasvirlaydi. Bu oddiy voqealar ketma-ketligi orqali muallif inson tafakkurining ichki olamini, xotira, til, ong oqimi va identitet kabi murakkab masalalarni ochib bergan."
  },
  {
    letter: "U",
    title: "Umberto Eko",
    text: "(1932–2016) — italiyalik yozuvchi, faylasuf, semiotik, adabiyotshunos va medievalist. U ayniqsa tarixiy detektiv romanlari va belgilar, til hamda talqin haqidagi ilmiy ishlari bilan mashhur. Tug’ilgan: 5-yanvar 1932, Alessandria, Italiya. Vafot etgan: 19-fevral 2016, Milan. Ta’limi: Turin universiteti; 1954-yilda Tomas Akvinskiy estetikasi bo’yicha dissertatsiya himoya qilgan. Asosiy sohasi: semiotika — belgilar, ramzlar va ularning ma’nosini o’rganish. Universitet: 1975-yildan Bolonya universitetida semiotika professori bo’lgan. Eng mashhur asarlari «Atirgul nomi» (Il nome della rosa, 1980) — XIV asr monastirida sodir bo’ladigan qotilliklarni tergov qiluvchi rohib Uilyam Baskervillik haqidagi tarixiy detektiv roman. 1980-yilda Strega mukofotini olgan va 45 dan ortiq tillarga tarjima qilingan. «Fuko mayatnigi» (Il pendolo di Foucault, 1988) — fitnalar, ezoterika va tarixiy sirlar bilan bog’liq roman. «Kecha oldingi orol» (1994) «Baudolino» (2000) «Praga qabristoni» (2010) «Nol raqam» (2015) — uning so’nggi romani. Qiziqarli fakt Eco faqat yozuvchi emas edi. U 40 dan ortiq faxriy doktorlik darajasiga ega bo’lgan va juda katta shaxsiy kutubxona to’plagan. 2021-yilda uning 44 000 jildlik zamonaviy kutubxonasi va arxivi Bolonya universitetiga topshirilgan."
  },
  {
    letter: "U",
    title: "Universal Product Code",
    text: "(UPC) — ya’ni ko’proq shtrix-kod nomi bilan tanilgan kod — 1974-yil 24-iyun kuni soat 8:01 da, AQShning Ogayo shtati, Troy shahridagi Marsh supermarketida skanerlangan."
  },
  {
    letter: "U",
    title: "Uotergeyt ishi",
    text: "1972–1974-yillarda AQSHda yuz bergan Uotergeyt mojarosi prezident Richard Niksonning muddatidan oldin isteʼfoga chiqishiga sabab boʻldi. 1972-yil Vashingtondagi “Uotergeyt” mehmonxonasida joylashgan Demokratik partiya shtab-kvartirasiga yashirin eshituv moslamalari oʻrnatilgani aniqlanib, 5 kishi qoʻlga olingan. Mojaroda Niksonning roli oshkor bo’lib, u ayblovlardan qochish uchun lavozimini tark etdi. Siyosatshunoslar bu voqeani “AQSH tarixidagi eng jiddiy tinchlik davridagi siyosiy inqiroz” deb baholaganlar."
  },
  {
    letter: "U",
    title: "Uri Geller",
    text: "Isroillik illyuzionist , fokuschi. Uning mashhur chiqishlari qoshiq egish , yashirin chizmalarni tasvirlash va soatlarni to’xtatish yoki tezroq ishlatishni o’z ichiga olgan. Gellerning so’zlariga ko’ra, u bu amallarni ongi va fikr kuchi orqali amalga oshirgan. Televizion chiqishlari paytida uning metall buyumlarni egish qobiliyati “Geller effekti” nomi bilan mashhur bo’lgan. Illyuzionistlar Gellerni g’ayritabiiy ong kuchiga ega ekanligi haqidagi da’volari tufayli uni firibgar deb atashgan."
  },
  {
    letter: "U",
    title: "Urush apofeozi",
    text: "Vasiliy Vereshagin (1871–1872) Vereshchagin bu asarida urushning dahshatli oqibatlarini ramziy obraz orqali ifodalagan. Kartinaning markazida inson suyaklaridan qurilgan ulkan piramida tasvirlangan. Bu piramida urush qurbonlarining son-sanoqsizligini va insoniyat tarixida takrorlanib kelayotgan fojealarni anglatadi. Rassom yorqin osmon fonida oq suyaklarni chizib, kontrast yaratgan — shu orqali u hayot va o’lim o’rtasidagi keskin tafovutni ko’rsatadi. “Urush apofeozi” nafaqat san’at asari, balki kuchli tinchlik chaqirig’i sifatida ham tarixda o’rin olgan."
  },
  {
    letter: "U",
    title: "Usta va Margarita, Mixail Bulgakov. (1967)",
    text: "Syujet Voland – ya’ni shayton obrazidagi sirli mehmonning 1930-yillar Moskva hayotiga aralashuvi bilan boshlanadi. U bilan birga kelgan sehrli yordamchilari orqali odamlarning yolg’onchiligi, ochko’zligi va ikkiyuzlamachiligi ochiladi. Bu fon orqasida ikkinchi chiziq — Usta va Margarita sevgisi rivojlanadi. Usta – yozuvchi, o’zining Pontiy Pilat haqidagi romanini yozgani uchun qatag’on qilinadi. Margarita esa o’z sevgilisi uchun jonini ham fido qilishga tayyor. Usta yozgan roman esa uchinchi chiziqni tashkil etadi – unda Pontiy Pilatning haqiqat oldida ojizligi, qo’rquvi va tavbasi tasvirlanadi. Yoshua (Iso) – haqiqat timsoli bo’lib, uni aybsiz bilgan Pilat baribir uni o’limga mahkum qiladi. Bulgakov asarda din, adolat, san’at, muhabbat va erkinlik mavzularini o’zaro bog’lab, insoniyat va jamiyat mohiyatiga teran nazar tashlaydi."
  },
  {
    letter: "U",
    title: "Uzuklar Hukmdori, Jon Tolkin. (1954)",
    text: "“Uzuklar Hukmdori” trilogiyasi fantastik adabiyot tarixida inqilob qilgan asarlardan biridir. Asar O’rta Yer deb ataluvchi sehrli dunyoda sodir bo’ladi. Hikoyaning markazida — barchani hukmronlik ostiga oluvchi qudratli Uzuk va uni yo’q qilish uchun qilingan mashaqqatli safar turadi. Asosiy qahramon — oddiy hobbit Frodo Beggins bo’lib, u kuchli yovuzlik — Sauron kuchlariga qarshi turish uchun Uzukni halokat tog’iga olib borib, uning lavasida yo’q qilishi kerak. Frodoning safdoshlari — Sem, Aragorn, Legolas, Gimli, Gendalf va boshqalar — sadoqat, mardlik va do’stlik ramzlari sifatida namoyon bo’ladi. Tolkin O’rta Yer tarixini, tillarini, xalqlarini va madaniyatini o’ziga xos tarzda asarda ochib bera olgan. 113 V"
  },

  // === V ===
  {
    letter: "V",
    title: "Valentin Katayev",
    text: "(1897–1986) Rus va sovet adabiyotining mashhur yozuvchisi, dramaturg va jurnalisti. Birinchi va Ikkinchi jahon urushlari davrida harbiy muxbir sifatida ishlagan. Uning asarlari bolalar va kattalar orasida keng shuhrat qozongan. Eng mashhur asarlari: “Polk o’g’li” (Сын полка) — urush yillarida ota-onasidan ayrilgan bolaning taqdiri haqida qissa. “Yetti rangli gul” (Цветик- семицветик) — har bir yaprog’i bitta tilakni amalga oshiradigan sehrli gul haqidagi mashhur ertak."
  },
  {
    letter: "V",
    title: "Valentina Tereshkova – kosmosdagi birinchi ayol",
    text: "1963-yil 16-iyun kuni “Vostok-6” kemasida uchib, insoniyat tarixida kosmosga chiqqan birinchi ayolga aylandi. U 2 sutka, 22 soat va 50 daqiqa davomida Yer atrofida 48 marta aylanib, parvoz davomida turli ilmiy tajribalar olib bordi. Kosmosga chiqishidan oldin u professional kosmonavt emas, balki tajribali parashyutchi bo’lgan."
  },
  {
    letter: "V",
    title: "Valkiriya",
    text: "Skandinav mifologiyasida jangda halok bo’lgan jangchilarning ruhlarini olib ketadigan, Odinning xizmatidagi jasur ayollar. Ularning asosiy vazifasi jang maydonida halok bo’lgan jangchilarning ruhlarini Valhallaga olib borishdir. Jangchilarni Valhallaga toʻplashdan maqsad esa qiyomat (Ragnarok)dagi ulkan jang vaqtida Odin va Thorning yonida turib, qahramonlarcha jang qiladigan bahodir jangchilarni bir joyga yigʻish hisoblanadi. Valkiriyalar qahramonlik, jasorat, va mardlikni ifodalaydigan obrazlardir."
  },
  {
    letter: "V",
    title: "Valxalla",
    text: "Skandinav mifologiyasida Odinning qahramonlar zali. Bu zal Asgardda joylashgan va jang maydonida jasorat bilan halok bo’lgan jangchilarni valkiriyalar tanlab, shu yerga olib kelgan. Valxallada ular kun bo’yi jang qilib, kechqurun ziyofat qiladi va Ragnarok kelganda Odin bilan birga kurashga tayyorgarlik ko’radi. Bu joy vikinglar uchun abadiy sharaf ramzi hisoblangan."
  },
  {
    letter: "V",
    title: "Van Gog sindromi",
    text: "bemor o’zini-o’zi operatsiya qilishi yoki muayyan operatsiyani bajarishni talab qilishi bilan namoyon bo’ladi. Sindromning asosiy klinik belgisi - bu o’z-o’zini jarohatlash (tananing ayrim qismlarini kesib tashlash) va/yoki jarrohlik operatsiyalarini bajarishda shifokorlarga doimiy talablar. Ushbu sindromning mashxur rassom sharafiga nomlanishi ham bejiz emas. Versiyalardan biriga ko’ra, Van Gog psixologik muammolarni boshdan kechirayotgan kunlarning birida o’z qulog’ining bir qismini kesib tashlagan. (Boshqa bir versiyada uning qulog’i rassomning yaqin do’sti Pol Gogen tomonidan foxisha Rashel tufayli kelib chiqqan janjal payti kesib yuborilgan deyiladi.) Ushbu sindrom ilk bor 1934-yilda “The Psychoanalytic Quarterly” jurnalida amerikalik psixiatr Karl Menninger tomonidan bayon qilingan."
  },
  {
    letter: "V",
    title: "Van Gogh",
    text: "(Vincent Van Gogh). (1853-1890) Golland rassomi, post-impressionizmning eng mashhur namoyandalaridan biri. Uning asarlari yorqin ranglar,chuqur hissiyotlar va dinamik uslubi bilan ajralib turadi. Van Gogh turli ruhiy buzilishlar muammolariga duch kelgan va bu ruhiy holati ham uning ijodiga taʼsir qilgan Eng mashhur asarlari: “Kungaboqarlar”, “Yulduzli tun”, “Kartoshka yeyuvchilar”, “Oʻzini portreti”. “Yulduzli tun” asarini shifoxonada davolanayotgan paytida chizgan degan qarashlar bor. Van Gogh 1890-yilda o’z joniga qasd qilgan deb hisoblanadi."
  },
  {
    letter: "V",
    title: "Vandalizm",
    text: "Atayin mulk, san’at asari yoki tabiatga zarar yetkazish harakati, barchaga tegishli bo’lgan jamoat mulkini buzish. Masalan — Daraxt po’stlog’iga o’yma yozuv qoldirish, haykalni 114 sindirish yoki devorga yozuv yozish va hokazo. Ko’plab mamlakatlarda vandalizm jinoyat hisoblanadi va jarima yoki qamoq bilan jazolanadi."
  },
  {
    letter: "V",
    title: "Vaporetto",
    text: "Venetsiyada umumiy transportning eng muhim shakli bo’lgan “suv tramvay”i. Bu transport vositasi Venetsiya shahri ichida va qishloq orollari orasida qataydi. Vaporetto “kichik bug’li transport vositasi” deb nomlanadi, chunki dastlab bug’ bilan ishlaydigan transport vositalari bo’lgan."
  },
  {
    letter: "V",
    title: "Varfolamey kechasi",
    text: "1572-yil 24-avgustga o’tar kechasi Fransiyada sodir bo’lgan qonli voqealar “Varfolamey kechasi” nomi bilan mashhur. Ushbu qirg’in Parijda katoliklar tomonidan protestantlarga (gugenotlarga) qarshi uyushtirilgan. Hodisa Fransiya qiroli Karl IX onasi Katerina de Mediçi ta’siri ostida gugenot yetakchilarini yo’q qilishga buyruq berganidan keyin boshlangan. Natijada, minglab protestantlar, jumladan, ularning yetakchilaridan biri Gaspard de Kolini ham o’ldirilgan. Keyinchalik qirg’in butun Fransiyaga tarqalgan."
  },
  {
    letter: "V",
    title: "Varganza",
    text: "Qashqadaryo viloyatining Kitob tumanida joylashgan Varganza shaharchasi ilgari Qatorbogʻ deb atalgan. 2009-yilda shaharcha maqomini olgan bu maskan 2019-yilda oʻtkazilgan “Anor” xalqaro festivali ortidan Oʻzbekistonda ilk agroturizm qishlogʻi sifatida eʼtirof etilgan. Bu yerda 23 mamlakat vakillari ishtirok etgan."
  },
  {
    letter: "V",
    title: "Vasiliy Zaytsev",
    text: "Vasiliy Grigorevich Zaytsev (Василий Зайцев) Ikkinchi jahon urushidagi eng mashhur snayperlardan biri. Tavalludi: 19 mart 1915, Orenburg guberniyasi Vafoti: 15 dekabr 1991, Kiyev Unvoni: Sovet Ittifoqi Qahramoni (1943) Harbiy unvoni: Kapitan Zaytsev 1942-yil sentyabridan boshlab Stalingradda jang qilgan."
  },
  {
    letter: "V",
    title: "Veblen effekti",
    text: "oddiy iste’molchi uchun qimmatlik qiladigan tovarlarni shunday tovarni sotib olishga qodir iste’molchi tomonidan o’z ustunligini boshqalarga ko’rsatib qo’yish maqsadida namoyishkorona sotib olinishi bilan tavsiflanadi. Bunda xarid motivi o’sha mahsulotga bo’lgan ehtiyoj bo’lmaydi. Effekt amerikalik iqtisodchi Torsteyn Bunde Veblen tomonidan 1899-yilda tavsiflab berilgan va uning sharafiga nomlangan."
  },
  {
    letter: "V",
    title: "Velobol To’p bilan o’ynaladigan jamoaviy o’yin bo’lib",
    text: "unda o’yinchilar velosipedda bo’lishlari talab qilinadi. Eng keng tarqalgani 2 kishilik 2 jamoa o’rtasida o’ynaladigan shaklidir. Ammo ba’zi hollarda jamoalarda 5-6 tadan o’yinchi bo’ladi. O’yin XIX asr oxirlarida AQShda paydo bo’lgan. Asoschisi o’sha paytlarning mashhur velopoygachisi Nik Kaufman hisoblanadi. 1930-yilda nemis velosipedchilar uyushmasi tashabbusi bilan velobol bo’yicha birinchi jahon chempinati o’tkaziladi."
  },
  {
    letter: "V",
    title: "VENTRILOKVIZM",
    text: "Nutq a’zolarining deyarli sezilmas harakati orqali tovush hosil qilish san’ati bo’lib, bunda tovush go’yo insonning ichidan yoki boshqa bir uzoqdagi ob’ektdan chiqayotgandek tuyuladi."
  },
  {
    letter: "V",
    title: "Versal sulh shartnomasi",
    text: "Birinchi jahon urushi tugaganidan keyin gʻolib davlatlar bilan Germaniya oʻrtasida Versal shahrida imzolangan sulh shartnomasi. Unga binoan Germaniya ilgari bosib olgan anchagina hududlarni boʻshatib berdi. Fransiya — Elzas va Lotaringiya viloyatlarini, Polsha ilgari oʻziga tegishli boʻlgan ayrim hududlarni qaytarib oldi. Gitler hokimiyat tepasiga kelgach, shartnomani buza boshladi, unda koʻrsatilgan harbiy majburiyatlarni bajarmasligini bildirdi. Ikkinchi jahon urushi boshlariga kelib Versal sulh shartnomasi butunlay ahamiyatsiz boʻlib qoldi."
  },
  {
    letter: "V",
    title: "Verter effekti",
    text: "televidenie yoki boshqa ommaviy axborot vositalarida keng yoritilgan yoki mashhur badiiy adabiyot yoki kino asarida tasvirlangan o’z joniga qasd qilishdan so’ng sodir bo’luvchi taqlid qilish natijasida kelib chiqadigan o’z joniga qasd qilishning ommaviy to’lqinidir. Mazkur effekt 1974-1975-yillarda sotsiolog Devid Fillips tomonidan aniqlangan. Devid Filips XVIII asr oxirida butun Yevropani qamrab olgan o’z joniga qasd qilish to’lqinini o’rgangan. O’z davri uchun mashhur Gyotening”Yosh Verterning iztiroblari” romanidan so’ng (shu yerdan fenomen nomi kelib chiqqan) ushbu hodisa kuzatilgani aniqlangan."
  },
  {
    letter: "V",
    title: "Victorinox",
    text: "shveytsar armiya pichogʻi (“Victoria” ismi va frantsuzcha “acier inoxydable” - “zanglamaydigan po’lat” so’zlari birlashishidan) - shveytsar armiya pichog’i va boshqa turdagi pichoqlar, soatlar va oshxona anjomlari ishlab chiqaruvchi kompaniya. Bosh ofisi Shvits kantonining Ibax qishlog’ida joylashgan. Kompaniyaga 1884-yilda Karl Elzener tomonidan asos solingan. 1909- yilda uning onasi Viktoriya vafot etadi. Shundan keyin Karl kompaniyani onasi sharafiga “Victoria” deb nomlaydi. 1921-yilda zanglamaydigan po’latdan pichoq yasay boshlagach kompaniya nomi “Victorinox”ga (“Victoria” va “inox”) o’zgartiriladi"
  },
  {
    letter: "V",
    title: "Viktor Lyustig (1890–1947)",
    text: "Mashhur firibgar sifatida tarixda qolgan shaxs. U o’zining aql-idroki va makkorligi bilan XX asrning eng yirik firibgarlik voqealaridan biriga sababchi bo’lgan: 1925-yilda Parijda Eyfel minorasini “metallga sotish” niyatida auktsion uyushtirgan. Bu bilan u bir nechta tadbirkorlarni aldagan. Lyustigning eng mashhur iboralaridan biri: “Odamlarni alday olish uchun ular ishonishni xohlashlarini ta’minlash kerak.”"
  },
  {
    letter: "V",
    title: "Vitruvian odami",
    text: "Leonardo da Vinchi tomonidan 1490-yilda chizilgan “Vitruvian odami” inson tanasining ideal nisbatlarini ifodalaydi. Bu rasm Mark Vitruviyning me’moriy asarlariga asoslanib, inson tanasi geometriya va san’at uyg’unligini namoyon etadi. Doira va kvadrat ichida joylashgan inson figurasi universum va yerning mutanosibligini aks ettiradi."
  },
  {
    letter: "V",
    title: "Vudu qo’g’irchog’i",
    text: "(Voodoo doll)— inson formasidagi kichik sodda qog’irchoq bo’lib, odatda hunarmandchilik materiallardan (matolar, tolalar, loy, yog’och) tayyorlanadi"
  },
  {
    letter: "V",
    title: "Vuelta",
    text: "Ispaniyada o’tkaziladigan an’anaviy velosiped poygasi bo’lib, “Tour de France” va “Giro d’Italia” bilan bir qatorda dunyoning eng yirik Grand Tour musobaqalaridan biridir. Musobaqa ilk bor 1935-yilda start olgan. Odatda avgust–sentyabr oylarida bo’lib o’tadigan Vuelta sportchilardan kuchli chidamlilik, tog’li hududlarda esa alohida mahorat talab qiladi. Qizil rangli futbolka (La Roja) — Vuelta g’olibiga beriladigan ramziy libos hisoblanadi. U musobaqaning umumiy yetakchisini bildiradi va har bosqich yakunida ochkolar hisobiga ko’ra eng yaxshi natija ko’rsatgan sportchiga topshiriladi. Avvaliga bu libos boshqa ranglarda bo’lgan, ammo 2010-yildan boshlab ramziy ravishda Ispaniya bayrog’ining asosiy rangi — qizil tanlandi."
  },
  {
    letter: "V",
    title: "Vunderkind",
    text: "(nemischa: Wunderkin— ajoyib bola) Zoʻr va favqulodda noyob qobiliyatlarini, faoliyatning biror turiga layoqatini barvaqt namoyon etuvchi bola. Vunderkind soʻzi kinoyali maʼnoda ham ishlatiladi. Masalan, Volfgang Amadey Motsart 5 yoshida musiqa bastalashni boshlagan."
  },
  {
    letter: "V",
    title: "Vuvuzela ( zulu vuvuzela , “shovqin qilish”)",
    text: "2010 - yilgi FIFA Jahon chempionati paytida keng tarqalgan bir metr uzunlikdagi shox. Vuvuzelani 1970- yilda janubiy afrikalik Freddi Maaki ixtiro 116 qilgan.U 1970-yilgi futbol bo’yicha jahon chempionatida muxlislarni shox ishlatayotganini ko’rgan.Keyin Maaki velosipedidan shox olib, uni gugurtlarda ishlata boshladi. Keyinchalik, u shoxni uzaytirdi. Maaki ixtirosi janubiy afrikalik muxlislar tomonidan qabul qilindi, ular har xil materiallardan shoxli naychalar yasashni boshladilar. 117 W"
  },

  // === W ===
  {
    letter: "W",
    title: "WD-40",
    text: "Bu ko’p funksiyali aerozol bo’lib zangni bo’shatadi, g’ijirlashni yo’qotadi, namlikni siqib chiqaradi va metallni korroziyadan himoya qiladi. WD — Water Displacement, 40 esa muvaffaqiyatli chiqqan 40-formula degani. WD-40 1953-yilda AQShda muhandis Norman Larsen tomonidan yaratilgan."
  },
  {
    letter: "W",
    title: "Whitewashing",
    text: "ingliz tilidan kelib chiqqan va so’zma-so’z “oqlash” degan ma’noni bildiradi. “Whitewashing”deganda tarixiy voqealarni yoki shaxslarni haqiqiy holatidan yaxshiroq, oqroq qilib ko’rsatish, salbiy jihatlarini yashirish tushuniladi."
  },
  {
    letter: "W",
    title: "Wing walking",
    text: "samolyot uchayotgan paytda insonning uning qanoti ustida turishi, yurishi yoki boshqa akrobatik harakatlar bajarishi bilan bog’liq ekstremal aviatsiya turi."
  },
  {
    letter: "W",
    title: "Wrigley",
    text: "“Juicy Fruit” saqichi Wrigley Juicy Fruit saqichining 10 dona qadog’i deyarli 52 yil avval oziq-ovqat do’konida UPC barkodi orqali skanerlangan birinchi mahsulot bo’lgan. Oq va qora chiziqlardan iborat yagona stiker ilk bor Chikagoda joylashgan Wm. Wrigley Jr. kompaniyasi tomonidan ishlab chiqarilgan Juicy Fruit saqichining qadoqli to’plamini sotib olish jarayonini osonlashtirgan. 118 X"
  },

  // === X ===
  {
    letter: "X",
    title: "Xachapuri",
    text: "Gruziyaning eng mashhur milliy taomlaridan biri bo’lib, asosiy tarkibiy qismi — eritilgan pishloq bilan to’ldirilgan non. Xachapuri turli viloyatlarda turlicha tayyorlanadi: adjaruli xachapurida tuxum va sariyog’ ham qo’shiladi, imeruli va megreluli xachapurilari esa pishloqning turli turlaridan iborat.Bu taom Gruziya madaniyati va mehmondo’stligining ramzi hisoblanadi."
  },
  {
    letter: "X",
    title: "Xarbor Bridj",
    text: "(“Harbour Bridge”) Sidneydagi eng yirik ko’prik bo’lib, 1932-yil 19-martda ochilgan. Nyu-Yorkdagi “Hell Gate” ko’prigi ushbu ko’prik uchun namuna vazifasini bajargan. O’ziga xos ko’rinishi tufayli ushbu ko’prik “Kiyim ilgich” (“The Coathanger”) nomini olgan. Ko’prik va unga tutash Opera uyi Sidney shahrining va umuman Avstraliyaning ramziga aylangan."
  },
  {
    letter: "X",
    title: "Xlestakov sindromi",
    text: "(“Revizor” romani qahramoni) – doimiy ravishda diqqat markazida bo’lish istagi bilan izohlanadigan hodisa. Ular o’zlarini atrofdagilardan yuqoriroq martaba yoki lavozimda tasavvur qilib, o’zlari sodir etmagan “katta ishlari” haqida so’zlaydilar. Ularning hayot ruhi - pafos, boshqalarning nazarida o’zini tasdiqlash istagi ularning xatti-harakatlariga xosdir. Fosh bo’lganda esa, bu odamlar xijolat bo’lishmaydi, suvdan osongina va tez chiqib ketishadi."
  },
  {
    letter: "X",
    title: "Xlor",
    text: "grekcha yashil degani"
  },
  {
    letter: "X",
    title: "Xokku",
    text: "Yapon she’riyatining eng qadimiy va eng ixcham janrlaridan biri. Atigi 3 misra va 17 bo’g’indan iborat bo’lib, 5-7-5 tarzida tuziladi. Asosan tabiat, fasllar, vaqt va inson ruhiy holati tasvirlanadi. Unda har bir so’z ramziy ma’no kasb etadi. Tashqi soddaligi ortida chuqur falsafa yashiringan. Klassik xokkular ko’pincha mavsumiy belgilar — qor, yomg’ir, gullar, qushlar orqali his-tuyg’ularni ifodalaydi. Eng taniqli xokku ustasi — Matsuo Basyo (1644–1694) hisoblanadi."
  },
  {
    letter: "X",
    title: "Xonadagi fil” iborasi",
    text: "Bu ibora katta va muhim muammoni tasvirlash uchun ishlatiladi, lekin odamlar uni ataylab muhokama qilishmaydi. Bu tushuncha ingliz tilidagi “Elephant in the room” iborasidan kelib chiqqan bo’lib, muhim va noqulay mavzularni chetlab o’tish holatlarini ifodalaydi. Krilov tomonidan 1814-yilda yozilgan “Qiziquvchan odam” masalida kuntskamerada bo’lgan odam do’stiga u yerda fildan boshqa hamma eksponatlarni ko’rganini ta’kidlaydi. Aslida hajm jihatidan olsak, uni ko’rmay qolish imkonsiz edi. Asardagi ushbu holat keyinchalik idiomaga aylangan."
  },
  {
    letter: "X",
    title: "Xotorn effekti",
    text: "biron ishni kuzatuvchilarsiz va kuzatuvchilar bor vaqtda amalga oshiring.Ikki holatdan qaysi birida siz ko’proq ter to’kasiz va harakat qilasiz?"
  },
  {
    letter: "X",
    title: "Xudoybergan Devonov",
    text: "birinchi oʻzbek kinooperatori va oʻzbek kinosanʼatining asoschisi XX asr oxirida Xorazmning oʻsha paytdagi hukmdori Muhammad Rahimxon II nemis-mennonitlarning bir necha oilasiga oʻlkada yashashiga ruxsat bergan. Ularning eng yoshi ulugʻi Vilgelm Penner yoki mahalliy odamlarning tili bilan Panor buvada qiziquvchan Xudoybergan birinchi marta fotoapparatni koʻrgan va undan foydalanishga ruxsat soʻragan. Keyinchalik Panor buva shogirdining muvaffaqiyatlaridan xursand boʻlib, unga fotoapparatni sovgʻa qilgan. U “Oʻrta Osiyo meʼmoriy yodgorliklari”, “Turkiston koʻrinishlari”, “Xiva va xivaliklar” kabi qisqa filmlarni ishlagan."
  },
  {
    letter: "X",
    title: "Xvasondagi qotilliklar",
    text: "1986 yildan 1991 yilgacha Janubiy Koreyaning Kyongi provinsiyasining Xvason shahrida sodir bo’lgan bir qator qotilliklar. Koreya jinoiy tarixidagi eng mashxur holatlar qatorida jinoyatlar politsiya faoliyatidagi kamchiliklarni fosh qildi. Bong Jun Xoning “Qotillik xotiralari” filmi shu voqeani hikoya qiladi.(2003) Jinoyatlar o’n nafar ayol va qiz Xvasondagi qishloq yo’llaridan o’g’irlab ketilgan, jinsiy tajovuz qilingan va o’z kiyimlari bilan bo’g’ib o’ldirilgani haqida. Qurbonlar 14 yoshli talabadan 71 yoshli kampirgacha bo’lgan. Kuchli jamoatchilik bosimi ostida politsiya 1989 yilda mahalliy Yun Sung Yoni zo’ravonlik orqali majburan tan olganidan keyin qotilliklar uchun hibsga oldi. U 20 yil qamoqda o’tirdi. Haqiqiy qotil Li Chun-Jening identifikatsiyasi 2019-yilda yuqori DNK tex.riga duch kelgach Li 14 ta qotillik va 30 ga yaqin jinsiy tajovuzni tan oldi. Da’vo muddati 2006 yilda tugaganligi sababli, jinoiy javobgarlikka tortilmagan,faqat bir yil davomida qamoqda saqlangan. 120 Y"
  },

  // === Y ===
  {
    letter: "Y",
    title: "Yaguar",
    text: "Jaguar Land Rover transmilliy avtomobil ishlab chiqaruvchi kompaniyasiga tegishli brend. 1922- yilda Swallow Sidecar kompaniyasi sifatida tashkil etilgan bo’lib, motorli yon aravachalar ishlab chiqargan. II jahon urushidan keyin “SS” ning nomaqbul harflar kombinatsiyasini oldini olish uchun nom “Yaguar”ga o’zgartirildi. Savdoda qiyinchiliklarga duch kela boshlagan kompaniya rahbariyati 1966- yilda British Motor rahbariyati bilan hamkorlik qila boshladi va kompaniyani o’z tarkibiga kiritdi. Shu vaqtdan boshlab Yaguar modellari tobora ommalashib bormoqda."
  },
  {
    letter: "Y",
    title: "Yakudza",
    text: "Yaponiyadagi uyushgan jinoyatchilik guruhlar tizimi. Asosiy belgilari: tana bo’yi tatuirovkalar va jazo yoki sodiqlik ramzi sifatida kesib tashlangan barmoqlar."
  },
  {
    letter: "Y",
    title: "Yanus",
    text: "Rim mifologiyasida o’tmishni hamda kelajakni ko’ra oladigan ikki yuzli ma’bud.Yanus eshik va darvozlar ma’budi hisoblangan. Shu sababli u eshik qo’riqchisining atributlari — kalit va kutilmagan mehmonlarni haydash uchun tayoq bilan tasvirlanadi. Eski yilning yakuni va yangisining boshlanishiga ramziy ma’noda Yanvar oyi ham aynan Yanus sharafiga nomlangan. Shuningdek, Yanus Yunon mifologiyasida o’z muqobili bo’lmagan yagona Rim ma’budi."
  },
  {
    letter: "Y",
    title: "Yapon “Shindleri”",
    text: "Chiune Sugihara (1900–1986) Ikkinchi jahon urushi davrida Litvaning Kaunas shahrida Yaponiya vitse-konsuli bo’lib ishlagan diplomat. U 1940-yilda o’z hukumatining ko’rsatmalariga zid ravishda, fashistlar ta’qibidan qochayotgan minglab yahudiylarga Yaponiya orqali o’tish uchun tranzit vizalarini bergan. Sugihara kuniga 18-20 soatlab qo’lda viza yozgan va konsullik yopilib, poezdda ketayotgan so’nggi daqiqalarida ham derazadan imzolangan viza varaqalarini tarqatgan. Uning sa’y-harakatlari bilan 6 000 ga yaqin inson o’limdan saqlab qolingan. Urushdan keyin diplomatik faoliyatini yakunlashga majbur bo’lgan Sugihara 1984-yilda Isroil tomonidan”Xalqlar orasidagi odil kishi” unvoni bilan taqdirlangan. Bugungi kunda u insonparvarlik timsoli sifatida butun dunyoda e’zozlanadi."
  },
  {
    letter: "Y",
    title: "Yashil chiroqlar",
    text: "Metyu Makkonaxining avtobiografik asari (2020)"
  },
  {
    letter: "Y",
    title: "Yashil kecha",
    text: "Rashod nuri Gulteginning asari"
  },
  {
    letter: "Y",
    title: "Yashil Kitob",
    text: "Muammar Kaddafiyning asari"
  },
  {
    letter: "Y",
    title: "Yashil lampa",
    text: "Aleksandr Greenning asari (1930)"
  },
  {
    letter: "Y",
    title: "Yashil milya",
    text: "Stiven Kingning asari"
  },
  {
    letter: "Y",
    title: "Yashil niva",
    text: "Shukur Xolmirzayevning asari (1957)"
  },
  {
    letter: "Y",
    title: "Yashil odam",
    text: "K. Emisning asari 1995"
  },
  {
    letter: "Y",
    title: "Yashil qishloq",
    text: "Mirmuhsinning asari"
  },
  {
    letter: "Y",
    title: "Yelkamning chuquri ko’rsin",
    text: "Bu ibora bundan keyin umrbod ko’rmay degan maʼnoda ishlatiladi. Mahmud Sattor “O’zbekning gapi qiziq” kitobida yozishicha, jumla o’ta norozilik, ozurda bo’lish, jonga tegib ketish, bezorijonlik xulosasini ifodalaydi."
  },
  {
    letter: "Y",
    title: "Yesenin sindromi",
    text: "Sergey Yesenin - rus shoiri, 1925-yil 28-dekabrda o’z joniga qasd qilgan. Mazkur voqaeadan so’ng 1926-yilda SSSRda o’z joniga qasd qiluvchilar soni nihoyatda oshib ketadi. Shunga o’xshash holatlar Rossiya va Sobiq Ittifoq davlatlarida ba’zida “Yesenin sindromi” deyiladi."
  },
  {
    letter: "Y",
    title: "Yesenin sindromi",
    text: "Sergey Yesenin — mashhur rus shoiri, 1925-yil 28-dekabr kuni o’z joniga qasd qilgan. Uning o’limidan so’ng 1926-yilda SSSRda o’z joniga qasd holatlari keskin oshadi. Statistik ma’lumotlarga ko’ra, bu davrda yoshlar orasida o’z joniga qasd qilish holatlari 20% ga ko’paygan. Bu sindrom Rossiya va sobiq Ittifoq davlatlarida ko’proq tilga olinadi, ayniqsa, adabiyot, san’at va psixologiya bilan shug’ullanuvchilar orasida."
  },
  {
    letter: "Y",
    title: "Yigitali Sattorov",
    text: "Neo-ekspressionizm yo’nalishidagi o’zbek rassomi"
  },
  {
    letter: "Y",
    title: "Yo-yo",
    text: "miloddan avvalgi 500-yillarda ixtiro qilingan. Ushbu o’yinchoq eng qadimiy o’yinchoq hisoblanadi. Insoniyat undan faqat zararsiz o’yinlar uchun foydalanmagan. Masalan, filippinliklar ushbu o’yinchoqdan ov quroli sifatida foydalanganlar."
  },
  {
    letter: "Y",
    title: "Yonaguni",
    text: "Yaponiya Atlantidasi Joylashuvi: Yonaguni oroli (Okinava prefekturasi, Yaponiya), taxminan 24.436°N, 123.011°E. 1986-yilda sho’ng’uvchi Kihachiro Aratake Yonaguni oroli yaqinida suv ostida g’ayrioddiy tosh platformalarni topgan. Keyinroq olim Masaaki Kimura ularni qadimiy “suvosti shahar” deb atadi."
  },
  {
    letter: "Y",
    title: "Yuk 200",
    text: "Halok bo’lgan askar tanasini dafn qilinadigan joyga yetkazishda unga nisbatan ishlatiladigan kod belgisi. Harbiy jargonda «o’ldirilgan, halok bo’lgan» askarlar jasadiga nisbatan evfemizm, ya’ni «yumshatilgan» nomlanish sifatida ham qo’llaniladi. Atama Afg’on urushi(1979- 1989) davrda paydo bo’lgan. 122 Z"
  },

  // === Z ===
  {
    letter: "Z",
    title: "Zarifa Saidnosirova",
    text: "Kimyogar olima, birinchi oʻzbek ayol rassomi, Oybekning rafiqasi. Oʻrta maktablar va texnikumlar uchun “Kimyo” darsligi muallifi. Shuningdek, pedagogik faoliyatidan tashqari, volfram kompleks birikmalari va kimyo terminlarining ruscha-oʻzbekcha lugʻati ustida ilmiy ish olib borgan. “Ximiyadan ruscha-oʻzbekcha qisqacha izohli lugʻat”, “Oybegim mening” kitoblari muallifidir."
  },
  {
    letter: "Z",
    title: "Zebo Gʻaniyeva",
    text: "Ikkinchi jahon urushi davrida snayper, razvedkachi. 1942-yil 12-apreldan 23- maygacha Chernoye, Lunevo, Ojetsi va Diagilevo qishloqlari hududida faoliyat yuritayotgan ushbu diviziyaning 151-alohida motooʻqchi razvedka batalonining 20 ta dushmanni yoʻq qilgan. V.S. Murmantsevaning “Sovet ayollari Ulugʻ Vatan urushida” kitobiga koʻra, u qisqa vaqt ichida 21 ta fashistni oʻldirgan. Rassom Toir Salahovaning xotiralaridan suhbatlarning birida Gʻaniyeva: “Toir, men bir yuz yigirma toʻqqizta fashistni oʻldirdim”,- degan. 1945-yilda Nabi Gʻaniyevning “Tohir va Zuhra” filmida rol ijro etgan"
  },
  {
    letter: "Z",
    title: "Zeygarnik effekti",
    text: "Litva-sovet psixologi Blyuma Zeygarnik Kurt Lyuinning ofitsiantlar xaqidagi yozganlarini oʻqib qoladi va bu jarayonni chuqurroq oʻrgana boshlaydi. Kurt Lyuin yozishicha, ofitsiant xali puli toʻlanmagan buyurtmalarni juda yaxshi eslab qolgan, pul toʻlangandan soʻng esa buyurtma xaqida deyarli eslay olmaganligi kuzatilgan. Zeygarnikning ishlari 1927-yilda Psychological Research jurnalida chiqadi. Ushbu effektni asoslashda u yana bir tajriba oʻtkazgan, unga koʻra birinchi gurux talabalarga 10 lab masalalar berishadi va maʼlum vaqt oʻtgach vaqt tugadi deb oxirigacha bajarishga qoʻymaydi, 2-gurux esa oxirigacha bajaradi. Oʻquvchilardan qanday masalalar tushganini soʻrashganda 1-gurux deyarli xammasini eslab qolgan. Demak, Zeygarnik effektiga koʻra, oxiriga yetmagan yoki toʻxtalishlar bilan davom etadigan ishlar inson xotirasida yaxshiroq qoladi. Buni psixologik tomondan shunday tushuntirishadi- shunchaki ish yakuniga yetmagach sizning koʻproq diqqatingiz shunga qaratilgan boʻladi va bunda ushbu ish xotirada yaxshiroq qolishi taʼminlanadi"
  },
  {
    letter: "Z",
    title: "Zunnor",
    text: "(arab. — chilvir) — charmdan yasalgan maxsus kamar, belbogʻ. Arab xalifaligi davrida musulmon davlati hududida yashab, boshqa dinga eʼtiqod qiluvchilar — zimmiy (asosan yahudiy va xristian) lar musulmon emasligining belgisi sifatida zunnorni majburan taqishgan. "
  },

  // === # ===
  {
    letter: "#",
    title: "4:20",
    text: "termin. Tonggi 4:20 va tushdan keyingi 16:20 ni bildiradi. Bu vaqtda ko’plab giyohvandlar birga vaqt o’tkazish, marixuana chekib, davlatning narkotikka qarshi siyosatini muhokama qilish uchun yig’ilishardi. Versiyalardan biriga ko’ra, atama nomi 1971-yilda «San-Rafael» o’rta maktabi o’quvchilarining darsdan keyin marixuana chekish uchun Lui Paster haykali oldida to’planishidan kelib chiqqan. O’smirlar odatda «420 Lui!» deb salomlashishgan."
  }
];
