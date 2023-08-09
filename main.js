 // add os links de redes sociais/profissionais
 const links = {
    instagram: "",
    twitter: "",
    linkedin: "",
    facebook: "",
    
  };

  function changelink() {
    for (let li of linksAtt.children) {
      const social = li.getAttribute("class");

      li.children[0].href = `https://${social}.com/${links[social]}`;
      alert(li.children[0].href);
    }
  }

  

  