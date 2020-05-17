(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(37)},21:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),o=t(9),r=t.n(o),l=(t(21),t(2)),s=t(3),c=t(5),m=t(4),p=t(6),g=t(7),u=function(e,a,t){g.a.event({category:e,action:a,label:t})},f=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about",onClick:function(){return u("ABOUT","Clicked on About navigation option","ABOUT_SECTION")}},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume",onClick:function(){return u("SKILLS","Clicked on Paintings & Skills navigation option","SKILLS_SECTION")}},"Paintings & Skills")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio",onClick:function(){return u("WORKS","Clicked on Works navigation option","WORKS_SECTION")}},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#testimonials",onClick:function(){return u("TESTIMONIALS","Clicked on Testimonials navigation option","TESTIMONIALS_SECTION")}},"Testimonials")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contact",onClick:function(){return u("CONTACT","Clicked on Contact navigation option","CONTACT_SECTION")}},"Contact")))),n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},e.name),n.a.createElement("h3",{style:{color:"#7A7A7A",fontFamily:"sans-serif "}},"I am the local ",e.role,n.a.createElement("br",null),e.roleDescription),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank",onClick:function(){return u("HEADER","Clicked on "+e.name+" icon","HEADER_SECTION")}},n.a.createElement("i",{className:e.className})))})))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",title:"Go Down",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(i.Component),d=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("div",{className:"widget"},n.a.createElement("p",null,n.a.createElement("a",{href:"tel:".concat(e.cellPhone),title:"Call for painting quote",onClick:function(){return u("CONTACT","Clicked on cellphone icon","CONTACT_SECTION")}},n.a.createElement("i",{className:"fa fa-mobile-phone fa-2x"})),e.cellPhone),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:".concat(e.eMail,"?subject=Painting quote"),target:"_blank",title:"Mail for painting quote",onClick:function(){return u("CONTACT","Clicked on e-mail icon","CONTACT_SECTION")}},n.a.createElement("i",{className:"fa fa-envelope-o fa-lg"})),e.eMail))}}]),a}(i.Component),h=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/profilepic.jpg",alt:""})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,e.aboutme),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e.name),n.a.createElement("br",null),n.a.createElement(d,{resumeData:e}),n.a.createElement("span",null,e.address),n.a.createElement("br",null),n.a.createElement("span",null,e.website)))))))}}]),a}(i.Component),E=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row paintings"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Paintings"))),n.a.createElement("div",{className:"nine columns main-col"},e.paintings&&e.paintings.map(function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.PaintingType),n.a.createElement("p",{className:"info"},e.description),n.a.createElement("p",null,e.Achievements)))}))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,e.skillsDescription),n.a.createElement("div",{className:"bars"},n.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return n.a.createElement("li",null,n.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),n.a.createElement("em",null,e.skilldisplay))}))))))}}]),a}(i.Component),b=t(14),v=(t(35),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={photoIndex:0,isOpen:!1},t}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.item,t=this.state,i=t.photoIndex,o=t.isOpen;return n.a.createElement("div",{className:"columns portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{onClick:function(){return e.setState({isOpen:!0})}},n.a.createElement("img",{src:"".concat(a.images[0].imgUrl),className:"item-img"}),o&&n.a.createElement(b.a,{imageTitle:a.images[i].imgDescription,animationDuration:500,mainSrc:a.images[i].imgUrl,nextSrc:a.images[(i+1)%a.images.length].imgUrl,prevSrc:a.images[(i+a.images.length-1)%a.images.length].imgUrl,onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(i+a.images.length-1)%a.images.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(i+1)%a.images.length})}}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,a.name),n.a.createElement("p",null,a.description))))))}}]),a}(i.Component)),j=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns collapsed"},n.a.createElement("h1",null,"Check Out Some of My Recent Work."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return n.a.createElement(v,{item:e})})))))}}]),a}(i.Component),k=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"testimonials"},n.a.createElement("div",{className:"text-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"two columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Testimonials"))),n.a.createElement("div",{className:"ten columns flex-container"},n.a.createElement("div",{className:"flexslider"},n.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return n.a.createElement("li",null,n.a.createElement("blockquote",null,n.a.createElement("p",null,e.description),n.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(i.Component),N=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"contact"},n.a.createElement("div",{className:"row section-head"},n.a.createElement("div",{className:"ten columns"},n.a.createElement("p",{className:"lead"},'"Always available at your service for any painting job and free estimates!"'))),n.a.createElement("div",{className:"row"},n.a.createElement("aside",{className:"eigth columns footer-widgets"},n.a.createElement(d,{resumeData:e}))))}}]),a}(i.Component),w=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("footer",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return n.a.createElement("li",null,n.a.createElement("a",{href:e.url,target:"_blank",onClick:function(){return u("FOOTER","Clicked on "+e.name+" icon","FOOTER_SECTION")}},n.a.createElement("i",{className:e.className})))}))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(i.Component),y={imagebaseurl:"https://rcribeiro.github.io/",name:"Danny's Painting",role:"painter you are looking for!",linkedinId:" ",cellPhone:" (647) 529 7376",eMail:" rotheram123@yahoo.ca",skypeid:" ",roleDescription:"Professional and personalized painting services at very reasonable and negotiable rates.",socialLinks:[{name:"linkedin",url:" ",className:"fa fa-linkedin"},{name:"twitter",url:" ",className:"fa fa-twitter"},{name:"instagram",url:" ",className:"fa fa-instagram"}],aboutme:"I am a local painter with years of experience in both interior and exterior painting. I ensure cleanliness in my work and sourrounding workspace. I am very professional in my work with guaranteed customer satisfaction. I work with all brands of paints, but highly recommend Benjamin Moore, Sherwin Williams or Dulux Paints.",address:"Mississauga - Canada",website:"https://www.dannyspainting.ca",paintings:[{PaintingType:"Interior and Exterior House Paint",description:"Most paint tins are labeled interior or exterior. This is a guide as to where to paint is best used."},{PaintingType:"Enamel Paint",description:"Enamel paints can be found in a variety of finishes, including gloss and semi-gloss, and are often used on trims around windows and doors."}],skillsDescription:" ",skills:[{skillname:"aestheticsense",skilldisplay:"Aesthetic Sense"},{skillname:"detailoriented",skilldisplay:"Detail-Oriented"},{skillname:"familiaritywithrequiredtools",skilldisplay:"Familiarity With Required Tools"},{skillname:"familiaritywithrequiredmaterials",skilldisplay:"Familiarity With Required Materials"},{skillname:"physicaldexteritystrengthbalance",skilldisplay:"Physical Dexterity, Strength, and Balance"}],portfolio:[{name:"VS townhouse - Oakville",description:"Interior painting - Winter 2020",images:[{imgUrl:"images/portfolio/portfolio1-a.jpg",imgDescription:"After Danny's work..."},{imgUrl:"images/portfolio/portfolio1-b.jpg",imgDescription:"...everything perfectly done!"},{imgUrl:"images/portfolio/portfolio1-c.jpg",imgDescription:"Before Danny's work..."},{imgUrl:"images/portfolio/portfolio1-d.jpg",imgDescription:"...He had to get rid off all the wallpaper!"}]},{name:"Summit Ridge Dr Oakville House",description:"Exterior and Interior painting - Summer & Fall 2020",images:[{imgUrl:"images/portfolio/portfolio3-a.jpg",imgDescription:"House entrance"},{imgUrl:"images/portfolio/portfolio3-b.jpg",imgDescription:"Garage doors"},{imgUrl:"images/portfolio/portfolio3-c.jpg",imgDescription:"Front door"},{imgUrl:"images/portfolio/portfolio3-d.jpg",imgDescription:"Front door"},{imgUrl:"images/portfolio/portfolio3-e.jpg",imgDescription:"Front door"},{imgUrl:"images/portfolio/portfolio3-f.jpg",imgDescription:"Basement"},{imgUrl:"images/portfolio/portfolio3-g.jpg",imgDescription:"Basement"},{imgUrl:"images/portfolio/portfolio3-h.jpg",imgDescription:"Basement kitchen"},{imgUrl:"images/portfolio/portfolio3-i.jpg",imgDescription:"Basement acess door"},{imgUrl:"images/portfolio/portfolio3-j.jpg",imgDescription:"Basement laundry room"},{imgUrl:"images/portfolio/portfolio3-k.jpg",imgDescription:"Basement room"},{imgUrl:"images/portfolio/portfolio3-l.jpg",imgDescription:"Basement main room"},{imgUrl:"images/portfolio/portfolio3-m.jpg",imgDescription:"Basement closet"},{imgUrl:"images/portfolio/portfolio3-n.jpg",imgDescription:"Basement toilet and bath"},{imgUrl:"images/portfolio/portfolio3-o.jpg",imgDescription:"Basement toilet and bath"},{imgUrl:"images/portfolio/portfolio3-p.jpg",imgDescription:"Basement overview"},{imgUrl:"images/portfolio/portfolio3-q.jpg",imgDescription:"Basement overview"},{imgUrl:"images/portfolio/portfolio3-r.jpg",imgDescription:"Laundry room - main floor"},{imgUrl:"images/portfolio/portfolio3-s.jpg",imgDescription:"Toilet and bath - main floor"},{imgUrl:"images/portfolio/portfolio3-t.jpg",imgDescription:"Stairway to basement"},{imgUrl:"images/portfolio/portfolio3-u.jpg",imgDescription:"Toilet and bath - main floor"},{imgUrl:"images/portfolio/portfolio3-v.jpg",imgDescription:"Stairway - main floor"},{imgUrl:"images/portfolio/portfolio3-x.jpg",imgDescription:"Hallway - main floor"},{imgUrl:"images/portfolio/portfolio3-y.jpg",imgDescription:"Kitchen - main floor"}]},{name:"Other Painting Jobs - Mississauga, Burlington, Brampton",description:"Interior Painting and Deck Staining",images:[{imgUrl:"images/portfolio/portfolio4-a.jpg",imgDescription:"Deck staining"},{imgUrl:"images/portfolio/portfolio4-b.jpg",imgDescription:"Hallway and starway staining"},{imgUrl:"images/portfolio/portfolio4-c.jpg",imgDescription:"Son's bedroom"},{imgUrl:"images/portfolio/portfolio4-d.jpg",imgDescription:"Son's doors and closet"},{imgUrl:"images/portfolio/portfolio4-e.jpg",imgDescription:"Son's bedroom 2"},{imgUrl:"images/portfolio/portfolio4-f.jpg",imgDescription:"Dining room"},{imgUrl:"images/portfolio/portfolio4-g.jpg",imgDescription:"Doors and frames"},{imgUrl:"images/portfolio/portfolio4-h.jpg",imgDescription:"Closet"}]},{name:"Apartment building - St Catharines Ontario",description:"Exterior painting three floors",images:[{imgUrl:"images/portfolio/portfolio5-a.jpg",imgDescription:"Apartment build exterior"},{imgUrl:"images/portfolio/portfolio5-b.jpg",imgDescription:"Balcony exterior"}]}],testimonials:[{description:"Finally we repainted our house. We knew that Danny was available immediately. He did a fantastic job but the best surprise was the perfect cost. As compared to other estimators, Danny's painting was the best. Price, quality and service was excellent! Definitely I'll recommend Danny to you and all my friends.",name:"VS townhouse, Oakville"},{description:"Professionally done with cleanliness and quality. Highly recommended!",name:"Msgr Vid Vlasic, Msgr Owen, Fr James Cherickal (pastors of Merciful Redeemer and St. Francis Xavier Parish, Mississauga)"},{description:"Apartment exterior - Very satisfied with the way the balconies and railings were painted! We'll call Danny again for next jobs to come!",name:"Gino, Remax Realtor (GTA, Burlington and Niagara region)"}]},O=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;e="UA-165395508-1",g.a.initialize(e),g.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(f,{resumeData:y}),n.a.createElement(h,{resumeData:y}),n.a.createElement(E,{resumeData:y}),n.a.createElement(j,{resumeData:y}),n.a.createElement(k,{resumeData:y}),n.a.createElement(N,{resumeData:y}),n.a.createElement(w,{resumeData:y}))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.7e076c65.chunk.js.map