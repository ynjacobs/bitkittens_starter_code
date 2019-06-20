document.addEventListener("DOMContentLoaded", function() {
    let summonBtn = document.querySelector('.summon-cats');
    summonBtn.addEventListener('click', function(event){
        console.log('code works');
        let pageMain = document.querySelector('main');


        // axios.get('http://bitkittens.herokuapp.com/cats.json')
        //     .then(response => {
        //         let cats = response.data.cats;
        //         console.log(cats);
        //         cats.forEach(function(cat, index){
        //             let name = cat.name;
        //             let imgSrc = cat.photo;
        //             let imgAlt = `Photo of ${name}`;
        //             let image = document.createElement('img');
        //             image.src = imgSrc;
        //             image.alt = imgAlt;
        //             catDivs[index].innerHTML = '';
        //             catDivs[index].appendChild(image);



        //         });

        //     })
        
        axios.get('http://bitkittens.herokuapp.com/cats.json?number=5')
            .then(response => {
                let cats = response.data.cats;

                console.log(cats);
                if(cats.length > 3)
                {
                    let x = '200px';
                    let y = '100px';
                    for(var i=3; i < cats.length; i++)
                    {
                        let aDiv = document.createElement('div');
                        aDiv.classList.add('cat-box');
                        aDiv.style.display = 'absolute';
                        aDiv.style.left = x;
                        aDiv.style.top = y;
                        x = (parseInt(x, 10) + 50) + 'px';
                        y = (parseInt(y, 10) + 300) + 'px';

                        console.log({x});
                        // x += 20;
                        // y += 20;
                        pageMain.append(aDiv);

                    }
                }
        let catDivs = document.querySelectorAll('.cat-box');

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
