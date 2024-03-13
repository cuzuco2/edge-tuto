
function buildMenu(urlMenu) {
  fetch(`/${urlMenu}`)
    .then((res) => res.json())
    .then((out) => {
      let links = out.data.map((item) => `<a href="${item.path}">${item.title}</a><br>`);


      // Join the array of HTML <a> elements into a single string
      links = links.join(' ');

      // Log or use the constructed HTML string
      console.log(links);
      const simpleMenuDiv = document.querySelector('.simplemenu');
      if (simpleMenuDiv) {
        simpleMenuDiv.innerHTML += links;
      } else {
        console.error('Element with class "simplemenu" not found.');
      }
    }).catch((err) => console.error(err));
}

function buildMenuOrig(urlMenu) {
  // URL from which JSON data will be fetched
  const url = `/${urlMenu}`;

  // Fetching JSON data from the URL
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((jsonData) => {
      console.log(jsonData);
      // Extracting path and title from each data object
      console.log(jsonData.data);
      const extractedData = jsonData.data.map((item) => ({ path: item.path, title: item.title }));
      console.log(extractedData);

      // Generating HTML links
      const linksHTML = extractedData.map((item) => `<a href="${item.path}">${item.title}</a><br>`);
      console.log(JSON.stringify(linksHTML));

      // Joining the HTML links into a single string
      const linksString = linksHTML.join('');

      // Appending the HTML links to an existing HTML element with id 'linksContainer'

      const simpleMenuDiv = document.querySelector('.simplemenu');
      if (simpleMenuDiv) {
        simpleMenuDiv.innerHTML += linksString;
      } else {
        console.error('Element with class "simplemenu" not found.');
      }
    })
    .catch((error) => {
      console.error('There was a problem fetching the data:', error);
    });
}

export default async function decorate(block) {
  const divBelowFirstChild = document.querySelector('.simplemenu.block div div');
  //const divBelowFirstChild = document.querySelector('.simplemenu.block > div:first-child div');
  console.log(divBelowFirstChild.innerHTML);
  buildMenu(divBelowFirstChild.innerHTML);
}
