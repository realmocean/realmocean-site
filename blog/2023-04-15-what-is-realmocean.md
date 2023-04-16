---
title: Realmocean Nedir
author: Selim TAN
author_title: Software Engineer
author_url: 'https://www.linkedin.com/in/selim-tan-5a852040/'
author_image_url: 'https://media.licdn.com/dms/image/C4D03AQEw23lEsyjb_g/profile-displayphoto-shrink_200_200/0/1600513688130?e=1686787200&v=beta&t=bpL1oNOw3VepBPfFEl7d8cU8QDnVZ-xNe1uPDresZ_I'
tags: []
---
# Realmocean

Realmocean, web uygulamaları için bulut tabanlı multitenant yapıya sahip super app geliştirme platformudur. Bu platform, geliştiricilerin kimlik yönetimi, lisans yönetimi, ticket yönetimi, uygulama mağazsı yönetimi vb. işlerini kolaylaştırır ve bu verileri bulutta saklayarak hızlı ve güvenli bir şekilde erişmelerini sağlar. Realmocean tarafından sağlanan hizmetler hakkında detaylı bilgilere [https://realmocean.com](https://realmocean.com) üzerinden erişebilirsiniz. Realmocean ayrıca, uygulama geliştiricilerin uygulama analizleri yapmalarını ve kullanıcı verilerini anlamalarını sağlayan bir dizi araç sunar. Bu sayede, geliştiriciler uygulamalarını optimize edebilir ve müşteri deneyimini iyileştirebilirler. Realmocean platformu, özellikle web uygulama geliştiricileri ve şirketleri hizmet etmeyi hedeflemektedir. Bunlar arasında bireysel web uygulaması geliştirenler,start-up'lar, küçük ve orta ölçekli yazılım firmaları ve kendi uygulamalarını geliştirmek isteyen büyük ve kurumsal müşteriler yer almaktadır. Özellikle küçük ölçekli yazılım geliştiricileri için ekonomik bir seçenektir. Çünkü platform üzerindeki fiyatlandırma, geliştiricilerin ihtiyaçlarına ve bütçelerine göre özelleştirilebilir. Ayrıca, Realmocean'un sunduğu hizmetler sayesinde geliştiriciler, kendi işlerine odaklanarak, uygulamalarını daha hızlı bir şekilde piyasaya sürme imkanı bulabilirler.

Realocean'ı kısaca tanıdıktan sonra realmocean içerisindeki kavramları biraz detaylandıralım;

## Realm
Realm developerlar ve iş ortakları için uygulamalarını müşterilerine kullandıracakları bir tür ortam yada işletim sistemi gibi düşünülebilir. Her realm kendi alt domain adına sahiptir. Bir realm olusturduğunuzda https://realm_adı.realmocean.app adresi üzerinden o realm e giriş yapabilirsiniz. İsterseniz kendi domain alanınızı bu adrese yönlendirebilirsiniz. Realm içerisinde;

 - Multitenant management,
 - Identity Management,
 - License Management,
 - Integration Platform
 - Internationalization
 - Bios özelleştirme,
 - App store yönetimi,
 - Auth Providers Management
 - İstatistik görüntüleme vb.

işlemleri gerçekleştirebilirsiniz.


Ayrıca her realm birbirinden yalıtılmış durumdadır. Bir organizasyon birden fazla realm'a sahip olabilir. Örneğin bir realm production için bir realm test için kullanılıyor olabilir. Yada bir uygulamanızı sadece o uygulamaya özel bir realm üzerinden yayınlayabilirsiniz. Ayrıca realm'ların görünüm ve davranış şekillerini de özelleştirebilirsiniz.

## Bios
Realmları kendi sektörel yada hedeflediğimiz müşteri profillerine göre özelleştirme ihtiyacı duyabiliriz. Bu noktada kendi bioslarımı yazarak realmların görünümlerini ve temelde sahip oldukları service arabirimlerini özelleştirebiliriz. Bioslar realm üzerinde herhangi bir uygulama çalıştırılmadan önce yüklenir. Dolayısı ile realm'minizin nasıl görüneceğini bioslar belirler. Realminiz için hazır bioslardan da kullanabilirsiniz. Realmocean bios mağazasından beğendiğiniz bir biosu satın alabilirisiniz.

## App
App'ler realmocean içerisinde müşterilerinize sunduğunuz uygulamalardır. Bu uygulamalar çok geniş bir yelpazede her türden olabilir. Bir CRM uygulaması gibi kompleks bir uygulama olacağı gibi bir hesap makinesi uygulaması da olabilir. Burada sizin veya müşterileriniz ihtiyacına göre uygulamanızı şekillendirmeniz etkili olacaktır. Realmocean'da developer olarak yer alıyorsanız uygulamanızı realocean appstore içerisinden yayınlayabilir ve tüm realmler içerisinden erişilmesini sağlayabilirsiniz. Eğer realm sahibiyseniz müşterilerinize realmocean appstore içindeki uygulamaları kullandırabilirsiniz.

## Opa (One Page App)
Tek sayfalık uygulamalar belli bir iş konusuna odaklanmış tek sayfadan oluşan uygulamalardır. Bu uygulamalar diğer uygulamalar içerisine entegre edilerek ortak görevleri gerçekleştirmede uygulama geliştiricilere büyük kolaylık sağlamaktadır. Örneğin uygulamanız içerisinde görev listesi oluşturmaya ihtiyacınız olduğunda Task List Opa ile bunu hızlıca uygulamanıza ekleyebilir ve görev yönetimini müşterinize yaptırabilirsiniz.

## Broker

## Store