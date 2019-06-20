document.addEventListener("DOMContentLoaded", function() {
    let summonBtn = document.querySelector('.summon-cats');
    summonBtn.addEventListener('click', function(event){
        console.log('code works');
        let catDivs = document.querySelectorAll('.cat-box');

        axios.get('http://bitkittens.herokuapp.com/cats.json')
            .then(response => {
                let cats = response.data.cats;
                console.log(cats);
                cats.forEach(function(cat, index){
                    let name = cat.name;
                    let imgSrc = cat.photo;
                    let imgAlt = `Photo of ${name}`;
                    let image = document.createElement('img');
                    image.src = imgSrc;
                    image.alt = imgAlt;
                    catDivs[index].innerHTML = '';
                    catDivs[index].appendChild(image);



                });

            })
            .catch(error =>{
                console.log('error', error);
                
            });

        
    });
});
