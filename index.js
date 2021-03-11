"use strict";
const turkish = document.querySelector(".turkish");
const english = document.querySelector(".english");
const navSkills = document.querySelector(".nav-skills");
const navProject = document.querySelector(".nav-project");
const navContact = document.querySelector(".nav-contact");
const tagLine = document.querySelector(".tagline");
const btnLets = document.querySelector(".btn-lets");
const skillsHeader = document.querySelector(".skillsh1");
const onway = document.querySelector(".onway");
const enough = document.querySelector(".enough");
const projectsHeader = document.querySelector(".projectsh1");
const quiz = document.querySelector(".quiz");
const calculator = document.querySelector(".calculator");
const decisionMaker = document.querySelector(".decision");
const englishSlang = document.querySelector(".english-slang");
const btnLive = [...document.querySelectorAll(".btn-live")];
const btnSource = [...document.querySelectorAll(".btn-source")];
const contactHeader = document.querySelector(".contacth1");
const meerkast = document.querySelector(".meerkast");
const solarSystem = document.querySelector(".solar-system");
turkish.addEventListener("click", () => {
  english.style.display = "initial";
  turkish.style.display = "none";

  navSkills.innerHTML = "Beceriler";
  navProject.innerHTML = "Projeler";
  navContact.innerHTML = "İletişim";
  tagLine.innerHTML =
    "Merhaba, ben İlker. Yazılım geliştiricisiyim. Buradan üzerinde çalışmakta olduğum bazı projelere, iletişim bilgilerime ve bazı becerilerime göz atılabilir.";
  btnLets.innerHTML = "Hadi başlayalım";
  skillsHeader.innerHTML = "Beceriler";
  onway.innerHTML = "Sırada ne var?";
  enough.innerHTML = "Bu kadar ikon yeter. Şimdi projelere göz atalım.";
  projectsHeader.innerHTML = "Projeler";
  quiz.innerHTML =
    "Javascript'in temelleriyle ilgili sorular içeren bir quiz uygulaması. Framework veya library kullanılmamıştır. <br/> Tamamen responsive ve tek sayfaya sahip. Ayrıca sorular da benim tarafımdan yazılmıştır. Uygulama dinamik bir yapıya sahip, yani soru ekleyip çıkarmak durumunda herhangi bir fonksiyona dokunmaya gerek yok. <br/> Javascript konusunda kendine güveniyorsan siteye giderek test edebilirsin.";
  calculator.innerHTML =
    "React'ın temelleri üzerinde çalışmak için geliştirilen, basit bir hesap makinesi uygulaması.";
  decisionMaker.innerHTML =
    "Eğer kaderinizi Math.random() fonksiyonunun ellerine bırakmak istiyorsanız, bu uygulama sizin için üretildi. <br/> Decision maker react ile yazıldı. <br/> Yazdığınız seçenekler arasından bir tanesi sizin için seçip, sizin için bir karara varıyor. Ayrıca seçenekleriniz yerel olarak depolanıyor ki hayattaki ikilemlerinizi unutmayasınız.";
  englishSlang.innerHTML =
    "English Slang, İngilizce argo kelimelerin anlamlarını bulmanıza yarayan bir Api ile yazılmıştır. <br/> Ama sadece bu kadarla kalmıyor. İstediğiniz kelimeyi, hatta isminizi de yazabilirsiniz. Sonuçlar sizi şaşırtabilir.";
  meerkast.innerHTML =
    "Meerkast bir streaming servis için demo niteliğinde bir uygulamadır. React ve Typescript kombinasyonu kullanılmıştır. State management için Redux kullanılmakla birlikte, kullanıcı kimlik doğrulaması ve kontakt ile iletilen mesajların depolanması için Firebase'ten yararlanılmıştır.";
  solarSystem.innerHTML =
    "Güneş sistemi'ndeki gezegenler ve bu gezegenlerin yörünge zamanlarını orantılı olarak yansıttığım bu uygulamayı React ve Typescript ile kodladım. State management için ise Context API'dan yararlandım. Bu evrende 10 saniye bir yıla eşit ve ayrıca input alanından bu oran değiştirilebilir.";
  btnLive.forEach((e) => (e.innerHTML = "Canlı Site"));
  btnSource.forEach((e) => (e.innerHTML = "Kaynak Kod"));
  contactHeader.innerHTML =
    "Aşağıda bana ulaşabileceğiniz platformlardan birine tıklayabilirsiniz.";
});

english.addEventListener("click", (e) => {
  e.preventDefault();
  english.style.display = "none";
  turkish.style.display = "initial";
  location.reload();
});
