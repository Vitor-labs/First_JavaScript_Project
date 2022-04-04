const count = document.getElementById('counted');

updateVisitCount();

function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/counter_of_views/12345/?amount=1')
        .then(res => res.json())
        .then(res => {
            count.innerHTML = res.value;
        })
}