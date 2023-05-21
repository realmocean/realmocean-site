---
title: Low/No Code Platform Nedir? Kimler Kullanmalı?
author: Selim TAN
author_title: Software Engineer
author_url: 'https://www.linkedin.com/in/selim-tan-5a852040/'
author_image_url: 'https://realmocean.com/img/undraw_responsive_re_e1nn.svg'
tags: []
---


Low / No code platform, dusuk kod, az kod gibi turkceye cevirebilecegimiz, temel olarak uzman programlama bilgisi gerektirmeden hizli bir sekilde web veya mobil uygulamalar gelistirmek amaciyla tasarlanmis platformlardir. Low code ve No code kavramları birlikte kullanılsa da aynı şeyler değildir. Bu yazıda daha çok low-code üzerinde duracağız.

 Bu platformlar, yazılım uygulamalarını hızlı bir şekilde oluşturmak, dağıtmak ve yönetmek için  genellikle görsel bir yaklaşım sunar. Temel amaç ise yazılım geliştirme sürecini hızlandırmak, kolaylaştırmak ve kod gereksinimlerini en aza indirgemektir. Gelistiriciler kod yazmak yerine hazır bileşen setlerini kullanarak ve sürükle-bırak yaparak uygulama sayfalarini ya da formlarını tasarlar. Bu şekilde yazilim gelistirmek icin ihtiyac duyulan uzmanlik seviyesini dusurmeyi amaçlarlar.

Aslinda bu cok yeni ve sihirli bir kavram degildir. Microislemcilerin nispeten kisa tarihi boyunca bir donanim icin yazilim gelistirme isi her donem yuksek uzmanlik gerektiren isler arasindaydi. Ornegin 1960 li yillarda programcilar o zamanki sistemler icin yazilim gelistirirken Fortran veya ALGOL gibi diller kullaniyorlardi. Bu diller tahmin edeceginiz uzere hem uygulamanin calisacagi donanimi hem de programlama dilinin ozelliklerini cok iyi bilmeyi gerektiriyordu. Bu sebeple uzmanlar programlamayi donanimdan bagimsiz hale getirip herkesin anlayabilecegi bir forma sokmak icin kafa yordular. Bunun sonucunda 1964 yilinda BASIC programlama dili gelistirildi ve uzman olmayan kullanıcılar da programlamayla tanışmaya başladı. O donem BASIC okul müfredatlarına dahi girmeyi başarmıştı. Yazilim tarihinin ilk low code mantigi basic ile baslamistir diyebiliriz. Sonrasinda bu mantigi daha da ileri taşıyıp görsel programlamayı hayatımıza sokan visual basic, delphi, visual studio gibi yazilim araclarininda temelinde low code mantigi ile yazilim gelistirmek vardir.  90 larin sonunda Window API ile basit bir form olusturmak icin yüzlerce satir C ya da C++ kodu yazmak ve sayfalarca API dokumantasyonu okumak gerekirken, delphi ile sadece surukle birak yaparak neredeyse programin tum gorsel arabirimini hazirlayabiliyordunuz. Bir satir kod yazmadan DB ye baglanip, bu baglantiyi bir datagrid e baglayip formunuzun icerisinde gosterebiliyordunuz. Bu araçlar 2000 lerde web uygulamalarinin yazilim dunyasinda baskin hale gelmesiyle kendi kabuklarina cekildiler yada yada sekil degistirerek mobil platformlara yoneldiler.

Peki ne degisti de bu tip sistemler tekrar yazilim dunyasinda populer hale geldi.

90 lı yıllarda yazılımlar daha çok monolitik yapıdaydılar. Genellikle client bir makinede çalışır, bir veritanabına bağlanır ve size ihtiyac duydugunuz raporları verirdi. Bu tip uygulamaları geliştiren yazılımcı profilleri genellikle şimdiki tabir ile full stack tarzdaydı. Fakat günümüzde frontend, backend, tester, devops, microservis gibi kavramların herbiri kendi çapında bir uzmanlık gerektiriyor. Low code platformlar backend ve fronendi birleştirip, devops işlemlerini üstlenerek eski tarzda monolitik düşünmenin basitliği ile standartlara uygun uygulamalar geliştirmeyi sağlıyorlar.

Popülerleşmelerinin nedenlerini listeleyecek olursak;

- Yazilimlarin cok fazla karmasik hale gelmesi, gelistirilmelerinin uzun zaman ve maliyet gerektirmesi
- Kapsamlarin cok buyuyerek tek bir firmanin uzmanligini asmasi
- Yeterli uzman developerlarin bulunamaması
- Dijital donusumun yayginlasmasi ile firmalarin kendi ihtiyaclarina yonelik terzi isi cozumlere ihtiyac duymasi ve bu çözümlere minimum maliyet ile sahip olmak istemeleri
- Kurumsal firmalarin kullandiklari sistemlerinin (ERP, CRM, veritabanı, vb...) eksik biraktigi noktalari hizli ve minimum maliyetle kapatmak istemeleri
- Ciktilari hizli gorme istegi
- Musteri beklentilerine ve taleplerine hizli cevap verebilme

Ozellikle son maddeyi detaylandirmak istiyorum. Yazilimda temel olarak iki taraf vardir.
O yazilima ihtiyac duyan bir kisi, ekip ya da sirket ve bu yazilimi gelistirecek olan kisi, ekip ya da sirket.
Biz bu iki tarafi consumer ve provider olarak isimlendirelim.

Basit olarak consumer kendi ihtiyaclarini tanimlayacak ve provider da bu ihtiyaclari karsilayacak uygulamayi gelistirecek. Fakat yazilimin dogasi geregi bastaki ihtiyaclar degisecek, ihtiyaclar baska ihtiyaclari doguracak ve ongorulmeyen bircok konu ile ugrasmak gerekecek. Iste boyle durumlarda low code plaformlar esneklik ve hız kazandirdigi icin tercih edilebiliyor.

 Gartner a gore low code platformlar yayginlasmaya son hizla devam edecekler, 2023 sonunda kurumsal uygulamalarin %50 sinin low code ile gelistirilecegi ongoruluyor.


Peki low code platformlarin sahip olduğu genel ozellikler neler;

- Bir form veya ekran olusturmak icin gorsel bir ortam
- Bu formlarda kullanabileceğiniz sürükle-bırak hazır bileşen setleri (kullanıcı veri girişi, dosya yükleme, buton vb...)
- Bu formlara girilen verilerin islenecegi iş akiş modelinin gorsel olarak tasarlanması
- Bir kural motoru
- Devops sureclerini platformun kendisinin ustlenmesi
- Test için kod yazmak gerekmediğinden testlerin direk son kullanıcı tarafından yapılabilmesi
- Hazir entegrasyon cozumleri ve bağlantı noktaları (SAP, Salesforge, Oracle, MSSQL, Google, ve bunun gibi onlarcası)
- Kullanici, Organizasyon tanımları vb (Identity management)
- RPA çözümleri
- Bot çözümleri

Şimdide bu platformların güzlü ve zayıf yönlerine bakalım;

### Low / No Code platformların artıları

#### Hızlı Uygulama Geliştirme
Low-code platformlar, kullanıcıların kod yazmadan hızla uygulama geliştirmelerini sağlar. Görsel olarak hazır bileşenleri sürükle-bırak yaparak, uygulama geliştirme süreci büyük ölçüde hızlanır. Bu da iş süreçlerini hızla otomatikleştirmek veya yeni çözümler sunmak için avantaj sağlar.

#### Daha Az Teknik Bilgi Gerektirir
Low-code platformlar, geleneksel yazılım geliştirme süreçlerine ihtiyaç duymaz. Bu, kullanıcıların kodlama bilgisine sahip olmadan bile uygulama geliştirebilecekleri anlamına gelir. Bu şekilde, iş analistleri, danışmanlar ve hatta son kullanıcılar gibi teknik olmayan kişiler bile uygulama geliştirebilirler.

#### İş Süreçlerini Otomatikleştirme
Low-code platformlar, iş süreçlerini otomatikleştirme ve verimliliği artırma konusunda oldukça başarılıdır. İş akışları, formlar, veri tabanları ve raporlama gibi işlevleri hızla oluşturabilir ve kendi sistemlerinizle entegre edebilirsiniz. Bu sayede, manuel süreçleri azaltarak süreçlerinizi iyileştirmek ve verimliliği artırmak mümkün olur.

#### Hızlı Prototipleme
Low-code platformlar, hızlı prototipleme için idealdir. Kolaylıkla prototipler oluşturabilir, kullanıcı geri bildirimlerine dayalı olarak hızla değişiklikler yapabilir ve uygulamanın kullanılabilirliğini ve işlevselliğini artırabilirsiniz. Bu, müşteri gereksinimlerine daha hızlı yanıt verme ve daha iyi kullanıcı deneyimi sağlar.

#### Daha Az Maliyet
Low-code platformlar, geleneksel yazılım geliştirme süreçlerine göre daha düşük maliyetlidir. Kod yazma sürecinin azalması, daha az kaynak ve zaman harcamanızı sağlar. Ayrıca, bazı platformlar bulut tabanlı olduğu için donanım ve altyapı maliyetlerinden de tasarruf etmeniz mümkündür.

#### Yazılım yaşam döngüsü desteği
Low-code platformlar, yerleşik devops desteği içerirler. Uygulamada bir değişiklik yapıldığında bu değişikliği versiyonlayıp teste gondermek ya da yayınlamak mümkündür.

#### Kolay entegrasyonlar
Low-code platformlar, kurumsal sistemler (ERP, CRM, veritabanları, API'lar vb.) ile entegrasyon için hazır arayüzler veya bağlantı noktaları barındırırlar. Bu, entegrasyon sürecini hızlandırır ve daha kolay bir şekilde kurumsal sistemlerle veri alışverişi yapmanızı sağlar.

### Low / No Code platformların eksileri

#### Sınırlı Özelleştirme
Low-code platformlar, genellikle kullanıcılara hızlı ve kolay bir şekilde uygulama geliştirmeyi sağlar. Ancak, bu tür platformlar genellikle sınırlı özelleştirme seçenekleri sunar. Dolayısıyla, karmaşık veya benzersiz iş gereksinimlerini karşılamak için yeterli esnekliği sağlamayabilirler. Özelleştirme gerektiren karmaşık projeler için daha geleneksel yazılım geliştirme yöntemlerine ihtiyaç duyulabilir.

#### Performans Sorunları
Low-code platformlar, genellikle birçok kullanıcıyı ve büyük veri hacmini desteklemek için optimize edilmemiştir. Bu nedenle, ölçeklenebilirlik ve performans sorunları ortaya çıkabilir. Özellikle yoğun veritabanı işlemleri gerektiren uygulamalarda performans sorunları yaşanabilir. Bu durum, büyük ölçekli işletmeler veya kritik iş süreçlerine sahip kurumlar için önemli bir dezavantaj olabilir.

#### Sınırlı Kontrol
Low-code platformlar, kullanıcılara hızlı uygulama geliştirme imkanı sunsa da, bu bazı durumlarda kontrol eksikliği yaratabilir. Özellikle güvenlik ve veri gizliliği gibi hassas konularda daha fazla kontrol ve özelleştirme ihtiyacı duyulabilir.

#### Bağımlılık
Bir low-code platformuna bağımlı hale gelmek, gelecekte bazı riskleri beraberinde getirebilir. Platform sağlayıcısı, hizmetleri sunmayı durdurabilir, ücretlerini değiştirebilir veya platformu geliştirmeyi bırakabilir. Bu durumda, mevcut uygulamaların taşınması veya platform değişikliği gerekebilir. Bu nedenle, platform sağlayıcısının güvenilirliği ve uzun vadeli planları hakkında iyi bir araştırma yapmak önemlidir. Kurumlar, kullandıkları low-code firmasını tedarikçisi olarak değil iş ortağı olarak görmeli, buna uygun strateji geliştirmelidir.

#### Öğrenme eğrisi
Low-code platformlar, geleneksel yazılım geliştirme becerilerine sahip olmadan uygulama geliştirmeyi kolaylaştırsa da, bu platformları kullanmak için yine de belirli bir öğrenme eğrisi gerekebilir. Platformun özelliklerini ve kullanımını tam olarak anlamak, verimli bir şekilde uygulama geliştirmek için zaman ve çaba gerektirebilir. Ayrıca, platforma özgü becerilerin geliştirilmesi ve sınırlamaların anlaşılması belirli bir zaman gerektirecektir.

#### İş isterlerinin karmaşıklaşması
Low-code platformları basit süreçlerin otomasyonu veya prototipleme için mükemmel bir seçenektir. Ancak, prototip aşamasını geçtikten sonra iş mantığı zamanla daha karmaşık hale gelir. Bir projeyi daha ileriye taşımak için uzman bir ekibe ihtiyaç duyabilirsiniz.


### Kimler kullanmalı

#### İş Analistleri
İş analistleri, iş gereksinimlerini anlama, analiz etme ve belgeleme konularında uzmanlaşmış kişilerdir. Low-code platformlar, iş analistlerinin hızla uygulanabilir çözümler oluşturmasına olanak tanır. Bu platformlarla, iş akışlarını otomatikleştirebilir, veritabanları oluşturabilir ve raporlama araçları kullanabilirler.

#### Danışmanlar
Danışmanlar, low-code platformunu kullanarak müşterilerinin iş süreçlerini daha verimli hale getirebilir, sürekli iyileştirme çabalarını destekleyebilir ve ilgili standartların gerekliliklerini karşılamak için daha iyi bir kontrol ortamı yaratabilirler.

#### Girişimciler ve Startup'lar (Yazılım startupları hariç)
Girişimciler ve startup'lar, genellikle kısıtlı bir bütçeyle hızla çalışabilir bir ürün veya hizmet sunma hedefindedirler. Low-code platformlar, teknik becerilere sahip olmayan girişimcilerin veya startup'ların hızla prototip geliştirmelerini sağlar. Bu platformlar, pazarlama web siteleri, veri tabanı uygulamaları ve müşteri yönetimi araçları gibi çeşitli işlevler için hızlı çözümler sunabilir.

#### Kurumsal Geliştirme Ekipleri
Kurumsal şirketlerde, geliştirme kaynakları genellikle sınırlı olabilir ve iş gereksinimlerini hızla karşılamak gerekir. Low-code platformlar, geliştirme süreçlerini hızlandırabilir ve geliştirme ekibinin daha fazla işi daha az zamanda tamamlamasına olanak tanır. Böylece şirketler, iş süreçlerini otomatikleştirme, müşteri deneyimini geliştirme veya veri analitiği gibi projeleri daha hızlı gerçekleştirebilir.

#### Terzi İşi Yazılım Geliştiriciler
Müşterilerinize özel çözümler üretiyorsanız, low-code platformlar bu iş için çok idealdir.

#### Mobil Uygulama Geliştiricileri
Low-code platformlar, hızla mobil uygulama geliştirmek isteyen mobil uygulama geliştiricileri için idealdir. Bu platformlar, kod yazmadan mobil uygulamalar oluşturmak için sürükle ve bırak arayüzler sağlar. Mobil uygulama geliştiricileri, hızla prototipler oluşturabilir veya müşteri gereksinimlerine göre özelleştirilebilir uygulamalar oluşturabilirler.

### Kimler kullanmamalı

#### Kendi paket yazılımını geliştirecek yazılım şirketleri
Eğer kendi paket uygulamanızı geliştirmeyi planlıyorsanız geleneksel yazılım geliştirme yontemleri sizin için daha uygun olacaktır.

#### Karmaşık ve Özelleştirilmiş İş Gereksinimleri
Low-code platformlar, genellikle standart iş gereksinimlerini karşılamak için tasarlanmıştır. Ancak, karmaşık veya özelleştirilmiş iş gereksinimleri olan projeler için yeterli esneklik sağlamayabilirler. Bu durumda, daha geleneksel yazılım geliştirme yöntemlerine ihtiyaç duyulabilir.

#### Büyük Ölçekli ve Yüksek Performanslı Uygulamalar
Low-code platformları, genellikle küçük ve orta ölçekli projeler için uygundur. Ancak, büyük ölçekli uygulamalar veya yüksek performans gerektiren uygulamalar için uygun olmayabilirler. Ölçeklenebilirlik ve performans sorunları ortaya çıkabilir ve kullanıcı deneyimini olumsuz etkileyebilir.

#### Form Tabanlı Olmayan Uygulamalar
Low-code platformlar, genellikle kullanıcıdan bir form aracılığı ile veri alıp bu veriyi bir iş akışına sokup, sonuçlarını raporlamak üzere tasarlanırlar. Eğer uygulamanız bu mantıkta değilse (ornegin bir not alma uygulaması ya da bir arayüz tasarlama uygulaması yazıyorsanız) low-code platform tercihi dogru olmayacaktır.

#### Tam Kontrol Gerektiren Projeler
Bazı projelerde, tam kontrol ve özelleştirme gerektiren durumlar olabilir. Örneğin, veri gizliliği, güvenlik veya regülasyonlara uygunluk gibi hassas konularda daha fazla kontrol ihtiyacı duyulabilir. Low-code platformlar, bu tür projeler için yeterli esneklik ve kontrol altyapısını sağlamayabilir.

#### Özel Altyapı Gereksinimleri
Bazı durumlarda, low-code platformlarının kullanımı belirli bir altyapıya veya sunucu ortamına bağlı olabilir. Kuruluşunuzun özel altyapı gereksinimleri varsa veya kendi sunucularınızda uygulama çalıştırmanız gerekiyorsa, low-code platformları bu gereksinimleri karşılamayabilir.

#### Yeni Teknolojilere Adaptasyon İhtiyacı
Low-code platformlar, belirli bir topoloji veya teknik yeterlilikler üzerine kuruludur. Eğer kuruluşunuz yeni veya önceden kullanılmayan bir teknolojiye adapte olmak istiyorsa, mevcut low-code platformları bu yeni teknolojileri desteklemeyebilir.

#### Daha Geleneksel Yazılım Geliştirme Becerilerine Sahip Kişiler
Bireysel veya ekip olarak zaten geleneksel yazılım geliştirme becerilerine sahipseniz, low-code platformları kullanmak yerine bu becerileri kullanmayı tercih edebilirsiniz.

