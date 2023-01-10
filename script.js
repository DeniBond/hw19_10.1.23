(()=>{
    const pgDiv = document.querySelector('#playground');
    const btnShow = document.querySelector('#btn_show');
    const width = document.querySelector('#input_width');
    const height = document.querySelector('#input_height');
    const radius = document.querySelector('#input_radius');
    const color = document.querySelector('#input_color');
    const count = document.querySelector('#input_count');
    const margin = document.querySelector('#input_margin');

// Show content with input variables
    btnShow.addEventListener('click', ()=>{
        pgDiv.innerHTML = '';
       for (let i = 0; i<count.value; i++){
           const element = document.createElement('div')
           element.style.width = (`${width.value}px`);
           element.style.height = (`${height.value}px`);
           element.style.borderRadius = (`${radius.value}px`);
           element.style.backgroundColor = (`${color.value}`);
           element.style.margin = (`${margin.value}px`)
           pgDiv.appendChild(element)
       }
    })
}
)()