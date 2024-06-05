const myKey = `4zYfAHQ%2Bxd9VHwGpOHJ94w9GtY7b9QSyfS6P8utonBCXN%2BjTsrgkaPR9EGAbukX5f7fAuLBjtGxaZYSet8JJVQ%3D%3D`;

const eg = `http://apis.data.go.kr/6300000/eventDataService/eventDataListJson?serviceKey=${myKey}&numOfRows=10&pageNo=1`;

const getPokemonAJAX = () => {
  const xhr = new XMLHttpRequest();
  console.log(`데이터 받기 전 xhr 객체 조회: `);
  console.dir(xhr);
  xhr.open(`GET`, eg, true);
  xhr.addEventListener(`load`, () => {
    if (xhr.status === 200) {
      console.log(`데이터 받은 후 xhr 객체 조회:`);
      console.dir(xhr);
      const result = JSON.parse(xhr.responseText);
      console.dir(result);
      console.dir(result.msgBody);

      const createdTitleLiArr = [];

      const root = document.getElementById(`root`);
      result.msgBody.forEach((item) => {
        createdTitleLiArr.push(`<li>${item.title}</li>`);
      });

      root.innerHTML = `<ul>${createdTitleLiArr.join("")}</ul>`;

      //   const pokemon = result.results;
      //   console.dir(pokemon);

      //   const root = document.getElementById(`root`);
      //   const ul = document.createElement(`ul`);
      //   pokemon.forEach((pokemon) => {
      //     const li = document.createElement(`li`);
      //     li.textContent = pokemon.name;
      //     ul.appendChild(li);
      //   });
      //   root.appendChild(ul);
    }
  });

  xhr.send();
};

getPokemonAJAX();
