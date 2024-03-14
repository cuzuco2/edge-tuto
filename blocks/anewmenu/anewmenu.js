function buildMyMenu(urlMenu) {
    fetch(`/${urlMenu}`)
      .then((res) => res.json())
      .then((out) => {
        let links=out.data.map((item)=>`<a href="${item.path}">${item.title}</a><br>`);
        let linksHtml=links.join(' ');
        const divToChange=document.querySelector('.anewmenu');
        divToChange.innerHTML += linksHtml;

      }).catch((err) => console.error(err));
  }
  
  export default async function decorate(block) {
    const divBelowFirstChild = document.querySelector('.anewmenu.block div div');
    //const divBelowFirstChild = document.querySelector('.simplemenu.block > div:first-child div');
    buildMyMenu(divBelowFirstChild.innerHTML);
  }
  