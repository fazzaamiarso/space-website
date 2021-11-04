import{s as i,j as f,r as l,N as k,u as C,C as S,d as E,S as T,R as p,a as $,W as A,b as j,c as N,B as H}from"./vendor.efe182ae.js";const I=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};I();const v=i.h3`
  text-transform: uppercase;
  color: white;
  font-family: var(--fontHeading);
  font-weight: 400;
  font-size: clamp(
    1.5rem,
    calc(1.5rem + ((1vw - 0.234375rem) * 3.0047)),
    3.5rem
  );
  padding-top: 0.5rem;
  padding-bottom: 1rem;
`,O=i.h4`
  text-transform: uppercase;
  color: var(--lightBlue);
  font-family: var(--fontHeading);
  font-weight: 400;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.234375rem) * 1.5023)), 2rem);
`,e=f.exports.jsx,o=f.exports.jsxs,L=f.exports.Fragment,D=({name:t,desc:a,role:n})=>o(M,{children:[e(O,{children:n}),e(v,{children:t}),e("p",{children:a})]}),M=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    max-width: 55ch;
    padding-bottom: 3rem;
  }
  @media screen and (min-width: 1025px) {
    text-align: left;
    align-items: flex-start;
    p {
      padding-bottom: 0;
    }
  }
`,z=[{name:"Moon",images:{png:"./assets/destination/image-moon.png",webp:"./assets/destination/image-moon.webp"},description:"See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"./assets/destination/image-mars.png",webp:"./assets/destination/image-mars.webp"},description:"Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"./assets/destination/image-europa.png",webp:"./assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"./assets/destination/image-titan.png",webp:"./assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}],B=[{name:"Douglas Hurley",images:{png:"./assets/crew/image-douglas-hurley.png",webp:"./assets/crew/image-douglas-hurley.webp"},role:"Commander",bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{name:"Mark Shuttleworth",images:{png:"./assets/crew/image-mark-shuttleworth.png",webp:"./assets/crew/image-mark-shuttleworth.webp"},role:"Mission Specialist",bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{name:"Victor Glover",images:{png:"./assets/crew/image-victor-glover.png",webp:"./assets/crew/image-victor-glover.webp"},role:"Pilot",bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{name:"Anousheh Ansari",images:{png:"./assets/crew/image-anousheh-ansari.png",webp:"./assets/crew/image-anousheh-ansari.webp"},role:"Flight Engineer",bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}],R=[{name:"Launch vehicle",images:{portrait:"./assets/technology/image-launch-vehicle-portrait.jpg",landscape:"./assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"Spaceport",images:{portrait:"./assets/technology/image-spaceport-portrait.jpg",landscape:"./assets/technology/image-spaceport-landscape.jpg"},description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth\u2019s rotation for launch."},{name:"Space capsule",images:{portrait:"./assets/technology/image-space-capsule-portrait.jpg",landscape:"./assets/technology/image-space-capsule-landscape.jpg"},description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}];var m={destinations:z,crew:B,technology:R};const b=({pageNum:t,title:a})=>o(P,{children:[e("span",{children:t}),a]}),P=i.div`
  color: white;
  font-size: clamp(1rem, calc(1rem + ((1vw - 0.234375rem) * 1.1268)), 1.75rem);
  letter-spacing: 2.7px;
  span {
    margin-right: 1rem;
    color: rgba(255, 255, 255, 0.25);
  }
  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;var W="/assets/crew/background-crew-mobile.jpg",G="/assets/crew/background-crew-tablet.jpg",U="/assets/crew/background-crew-desktop.jpg";const Y=({onSelect:t,selectedTab:a})=>{const n=d=>{d.target instanceof HTMLDivElement&&t(Number(d.target.dataset.tabIndex))};return o(F,{children:[e(g,{"data-tab-index":0,tabActive:a===0,onClick:n}),e(g,{"data-tab-index":1,tabActive:a===1,onClick:n}),e(g,{"data-tab-index":2,tabActive:a===2,onClick:n}),e(g,{"data-tab-index":3,tabActive:a===3,onClick:n})]})},F=i.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100px;
  @media screen and (min-width: 1025px) {
    width: 150px;
  }
`,g=i.div`
  cursor: pointer;
  aspect-ratio: 1;
  width: 10px;
  border-radius: 50%;
  background-color: ${({tabActive:t})=>t?"white":"rgba(255, 255, 255, 0.17)"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 1025px) {
    width: 15px;
  }
`,X=()=>{const[t,a]=l.exports.useState(0),n=m.crew[t],d=r=>{a(r)};return l.exports.useEffect(()=>{const r=setInterval(()=>{t===3&&a(0),t<3&&a(s=>s+1)},1e4);return()=>{clearInterval(r)}},[t]),o(V,{children:[e(b,{pageNum:"02",title:"MEET YOUR CREW"}),e(q,{children:e("img",{src:n.images.png})}),o(K,{children:[e(Y,{onSelect:d,selectedTab:t}),e(D,{name:n.name,role:n.role,desc:n.bio})]})]})},V=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100vw;
  min-height: 100vh;
  padding-top: 12vh;
  padding-inline: var(--paddingInline, 1.5rem);

  background: url(${W}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${G}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${U}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-top: 8rem;
    gap: 3rem;
  }
  @media screen and (min-width: 1025px) {
    --paddingInline: 10rem;
    gap: 8rem;
    padding-top: 13rem;
    align-items: flex-start;
    padding-bottom: 4rem;
  }
`,q=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #383b4b;
  img {
    width: 175px;
  }
  @media screen and (min-width: 768px) {
    order: 1;
    border: none;
    img {
      width: 400px;
    }
  }
  @media screen and (min-width: 1025px) {
    justify-content: flex-end;
    position: absolute;
    right: calc(var(--paddingInline) - 1rem);
  }
`,K=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
  @media screen and (min-width: 1025px) {
    position: relative;
    z-index: 2;
    gap: 5rem;
    align-items: flex-start;
  }
`;var _="/assets/destination/background-destination-mobile.jpg",J="/assets/destination/background-destination-tablet.jpg",Q="/assets/destination/background-destination-desktop.jpg";const Z=({children:t,name:a,desc:n,travel:d,distance:r})=>o(ee,{children:[t,o(te,{children:[e("h2",{children:a}),e("p",{children:n})]}),o(ne,{children:[o(y,{children:[e("h6",{children:"AVG. DISTANCE"}),e("h5",{children:r})]}),o(y,{children:[e("h6",{children:"EST. TRAVEL TIME"}),e("h5",{children:d})]})]})]}),ee=i.div`
  padding-inline: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,te=i.div`
  text-align: center;
  padding-bottom: 2rem;
  h2 {
    font-weight: 400;
    font-family: var(--fontHeading);
    color: white;
    font-size: clamp(56px, calc(3.5rem + ((1vw - 3.75px) * 4.1315)), 100px);
  }
  p {
    max-width: 60ch;
    font-size: clamp(
      0.9375rem,
      calc(0.9375rem + ((1vw - 0.234375rem) * 0.2817)),
      1.125rem
    );
    line-height: 25px;
  }
  @media screen and (min-width: 1025px) {
    text-align: left;
    padding-bottom: 3.3rem;
  }
`,ne=i.div`
  width: 100%;
  padding-block: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-top: 1px solid #383b4b;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1025px) {
    justify-content: flex-start;
    gap: 5.5rem;
  }
`,y=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  h5 {
    font-weight: 400;
    color: white;
    font-family: var(--fontHeading);
    font-size: 1.75rem;
    text-transform: uppercase;
  }
  h6 {
    font-size: 0.875rem;
    font-weight: 400;
    color: var(--lightBlue);
    letter-spacing: 2.75px;
  }
  @media screen and (min-width: 1025px) {
    align-items: flex-start;
  }
`,ie=({onSelect:t,selectedTab:a,destinationsList:n})=>{const d=r=>{if(r.target instanceof HTMLLIElement)t(Number(r.target.dataset.id));else return};return e(ae,{children:n.map((r,s)=>e(re,{"data-id":s,isActive:s===a,onClick:d,children:r},s))})},ae=i.ul`
  display: flex;
  align-items: flex-start;
  gap: 1.625rem;
  margin-bottom: 1.25rem;
  @media screen and (min-width: 1025px) {
    align-self: flex-start;
  }
`,re=i.li`
  cursor: pointer;
  color: var(--lightBlue);
  text-transform: uppercase;
  letter-spacing: 2.3px;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid
    ${({isActive:t})=>t?"white":"transparent"};
  &:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
  }
`,oe=m.destinations,se=()=>{const[t,a]=l.exports.useState(0),n=m.destinations[t],d=r=>{a(r)};return o(de,{children:[e(b,{pageNum:"01",title:"PICK YOUR DESTINATION"}),o(le,{children:[e(ce,{children:e("img",{src:n.images.png})}),e(pe,{name:n.name,desc:n.description,distance:n.distance,travel:n.travel,children:e(ie,{destinationsList:oe.map(r=>r.name),onSelect:d,selectedTab:t})})]})]})},de=i.section`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100vw;
  min-height: 100vh;

  background: url(${_}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${J}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${Q}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-top: 8.5rem;
    padding-bottom: 5rem;
    padding-inline: 2.5rem;
  }
  @media screen and (min-width: 1025px) {
    padding-top: 15rem;
    padding-inline: 8rem;
  }
`,ce=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1.75rem;
  img {
    width: 170px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1025px) {
    padding-top: 4rem;
    img {
      width: 445px;
    }
  }
`,le=i.main`
  @media screen and (min-width: 1025px) {
    display: flex;
    align-items: center;
    gap: 10rem;
  }
`,pe=i(Z)``;var me="/assets/shared/logo.svg",ge="/assets/shared/icon-hamburger.svg",he="/assets/shared/icon-close.svg";const ue=({isOpen:t,onOpen:a})=>{const n=()=>{a()};return o(fe,{isOpen:t,children:[e(we,{src:he,onClick:n}),o(be,{onClick:n,children:[e("li",{children:o(h,{activeClassName:"active",to:"/home",children:[e("span",{children:"00"})," HOME"]})}),e("li",{children:o(h,{activeClassName:"active",to:"/destination",children:[e("span",{children:"01"})," DESTINATION"]})}),e("li",{children:o(h,{activeClassName:"active",to:"/crew",children:[e("span",{children:"02"})," CREW"]})}),e("li",{children:o(h,{activeClassName:"active",to:"/technology",children:[e("span",{children:"03"})," TECHNOLOGY"]})})]})]})},fe=i.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;

  padding-block: 2.1rem;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);

  transform: ${({isOpen:t})=>t?"translateX(0)":"translateX(100%)"};
  transition: 0.3s;

  @media screen and (min-width: 768px) {
    all: revert;
  }
  @media screen and (min-width: 1025px) {
    &::after {
      position: absolute;
      right: 725px;
      top: 88px;
      content: "";
      height: 1px;
      width: 20%;
      background-color: rgba(255, 255, 255, 0.25);
    }
  }
`,be=i.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding-left: 2rem;
  li {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 768px) {
    --paddingBackground: 2.5rem;
    padding-inline: var(--paddingBackground);
    flex-direction: row;
    gap: 2.5rem;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.5485px);
  }
  @media screen and (min-width: 1025px) {
    padding-left: 8rem;
    padding-right: 10.5rem;
  }
`,we=i.img`
  margin-left: auto;
  margin-bottom: 4rem;
  padding-right: 1.75rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
`,h=i(k)`
  display: flex;
  width: 100%;
  letter-spacing: 0.27ch;
  color: white;

  @media screen and (min-width: 768px) {
    padding-block: var(--paddingBackground);
  }

  &:hover {
    --borderColor: rgba(255, 255, 255, 0.5);
    border-right: 4px solid var(--borderColor);
    @media screen and (min-width: 768px) {
      border-right: none;
      border-bottom: 4px solid var(--borderColor);
    }
  }

  &.active {
    --borderColor: white;

    border-right: 4px solid var(--borderColor);
    @media screen and (min-width: 768px) {
      border-right: none;
      border-bottom: 4px solid var(--borderColor);
    }
  }
  span {
    margin-right: 1ch;
    font-weight: 700;
    color: white;
    @media screen and (min-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 1025px) {
      display: inline;
    }
  }
`,xe=()=>{const[t,a]=l.exports.useState(!1),n=()=>{a(!t)};return o(ve,{children:[e(ye,{src:me}),e(ke,{src:ge,onClick:n}),e(ue,{onOpen:n,isOpen:t})]})},ve=i.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  @media screen and (min-width: 768px) {
    padding: 0;
    padding-left: 2.5rem;
  }
  @media screen and (min-width: 1025px) {
    padding: 2.5rem 3.5rem;
    padding-right: 0;
  }
`,ye=i.img``,ke=i.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;var Ce="/assets/home/background-home-mobile.jpg",Se="/assets/home/background-home-tablet.jpg",Ee="/assets/home/background-home-desktop.jpg";const Te=()=>{let t=C();return o($e,{children:[o(Ae,{children:[e("span",{children:"SO, YOU WANT TO TRAVEL TO"}),e("h1",{children:"SPACE"}),e("p",{children:"Let\u2019s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we\u2019ll give you a truly out of this world experience!"})]}),e(je,{onClick:()=>{t.push("/destination")},children:"EXPLORE"})]})},$e=i.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  padding-top: 15vh;
  padding-inline: 1.5rem;

  width: 100vw;
  height: 100vh;
  background: url(${Ce}) center no-repeat;
  @media screen and (min-width: 375px) {
    background: url(${Se}) center no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${Ee}) no-repeat right;
    flex-direction: row;
    justify-content: space-around;
  }
`,Ae=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  span {
    font-size: clamp(16px, calc(1rem + ((1vw - 3.75px) * 1.1268)), 28px);
    letter-spacing: 0.3rem;
    color: var(--lightBlue);
  }
  h1 {
    padding-block: 1rem;
    font-family: var(--fontHeading);
    font-weight: 400;
    font-size: clamp(
      6.25rem,
      calc(6.25rem + ((1vw - 0.234375rem) * 12.7226)),
      9.375rem
    );
    color: white;
  }
  p {
    font-size: clamp(
      0.9375rem,
      calc(0.9375rem + ((1vw - 0.234375rem) * 0.2817)),
      1.125rem
    );
    max-width: 50ch;
  }
  @media screen and (min-width: 769px) {
    text-align: left;
    align-items: flex-start;
  }
`,je=i.div`
  font-family: var(--fontHeading);
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 50%;
  width: 150px;
  aspect-ratio: 1;
  transition: box-shadow 0.21s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1);
  }
  @media screen and (min-width: 769px) {
    font-size: 2rem;
    width: 274px;
  }
`;var Ne="/assets/technology/background-technology-mobile.jpg",He="/assets/technology/background-technology-tablet.jpg",Ie="/assets/technology/background-technology-desktop.jpg";const Oe=({onSelect:t,selectedTab:a})=>{const n=d=>{d.target instanceof HTMLDivElement&&t(Number(d.target.dataset.id))};return o(Le,{children:[e(w,{"data-id":0,tabActive:a===0,onClick:n,children:"1"}),e(w,{"data-id":1,tabActive:a===1,onClick:n,children:"2"}),e(w,{"data-id":2,tabActive:a===2,onClick:n,children:"3"})]})},Le=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding-top: 2.0625rem;
  padding-bottom: 1.0625rem;
  @media screen and (min-width: 769px) {
    flex-direction: column;
    gap: 2rem;
  }
`,w=i.div`
  cursor: pointer;
  font-family: var(--bellefair);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  border-radius: 50%;
  line-height: 0;

  background-color: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    background-color: rgba(255, 255, 255, 0.17);
  }

  ${({tabActive:t})=>t&&S`
      background-color: white;
      color: black;
    `}
  @media screen and (min-width: 768px) {
    width: 60px;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1025px) {
    width: 80px;
    font-size: 2rem;
  }
`,De=()=>{const[t,a]=l.exports.useState(0),n=m.technology[t],d=c=>a(c),[r,s]=l.exports.useState("");return l.exports.useEffect(()=>{const c=E(()=>{window.innerWidth<769&&s(n.images.landscape),window.innerWidth>=769&&s(n.images.portrait)},100),x=["load","resize"];return x.forEach(u=>{window.addEventListener(u,c)}),c(),()=>x.forEach(u=>{window.removeEventListener(u,c)})},[window.innerWidth,t]),o(Me,{children:[e(b,{pageNum:"03",title:"SPACE LAUNCH 101"}),o(Be,{children:[e(ze,{children:e("img",{src:r})}),o(Re,{children:[e(Oe,{onSelect:d,selectedTab:t}),o(We,{children:[e(Pe,{children:"THE TERMINOLOGY..."}),e(v,{children:n.name}),e("p",{children:n.description})]})]})]})]})},Me=i.section`
  padding-top: 5.5rem;
  padding-bottom: 3rem;
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background: url(${Ne}) center top no-repeat;

  @media screen and (min-width: 376px) {
    background: url(${He}) center top no-repeat;
  }
  @media screen and (min-width: 769px) {
    background: url(${Ie}) center top no-repeat;
  }
  @media screen and (min-width: 768px) {
    padding-left: 2.3rem;
  }
  @media screen and (min-width: 1025px) {
    padding-top: 13rem;
    padding-left: 5rem;
    & > :first-child {
      padding-inline: 0;
    }
  }
`,ze=i.div`
  @media screen and (min-width: 769px) {
    position: relative;
    right: -5%;
  }
`,Be=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
  }
`,Re=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 3rem;
  }
`,Pe=i.div`
  color: var(--lightBlue);
  letter-spacing: 2.7px;
`,We=i.div`
  text-align: center;
  padding-inline: 1.5rem;
  p {
    max-width: 60ch;
  }
  @media screen and (min-width: 768px) {
    text-align: left;
    p {
      max-width: 50ch;
    }
  }
`,Ge=()=>o(L,{children:[e(xe,{}),o(T,{children:[e(p,{path:"/home",children:e(Te,{})}),e(p,{path:"/destination",children:e(se,{})}),e(p,{path:"/crew",children:e(X,{})}),e(p,{path:"/technology",children:e(De,{})}),e($,{to:"/home"})]})]}),Ue=A`
    :root{
    --background : hsl(230, 35%, 7%);
    --lightBlue : hsl(231, 77%, 90%);
    --fontHeading :  'Bellefair', serif;
    --fontBody : 'Barlow Condensed', sans-serif;

      }

    * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *:before, 
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--fontBody);
    background-color : var(--background);
    overflow-x: hidden;
  }
  
  
  img {
    max-width: 100%;
    display: block;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }  
p{
  line-height: 25px;
  color: var(--lightBlue);
}

button {
  font-family: var(---fontStack);
    border : none;
    &:hover{
        cursor: pointer;
    }
}
`;j.render(e(N.StrictMode,{children:o(H,{children:[e(Ue,{}),e(Ge,{})]})}),document.getElementById("root"));
