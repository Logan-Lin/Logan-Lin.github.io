$('#page-title, #html-title').text(basic['title']);

profile['bio'].forEach((item) => {
    var p = $('<p class="card-text">');
    p.text(item);
    $('#bio').append(p);
})

profile['footnote'].forEach(({ icon, text }, i) => {
    var div = $('<div class="card-text text-body-secondary small">');
    div.append($(`<i class="bi bi-${icon} me-1">`));
    div.append($(`<span>${text}</span>`));
    $('#footnote').append(div);
})

profile['link'].forEach(({ icon, text, url, tip }) => {
    var a = $(`<a href="${url}" class="btn btn-light mt-2 me-2" target="_blank" data-bs-toggle="tooltip" data-bs-title="${tip}">`);
    a.append($(`<i class="bi bi-${icon} me-1">`));
    a.append($(`<span>${text}</span>`));
    var tip = new bootstrap.Tooltip(a);
    $('#link').append(a);
})

projects.forEach(({ img, text, url, note }) => {
    var col = $('<div class="col project-col">');
    if (url) {
        var card = $(`<a class="card" href="${url}" target="_blank" style="text-decoration:none">`);
    } else {
        var card = $('<div class="card">')
    }
    if (img) {
        card.append($(`<img src="assets/projects/${img}" width="100%" height="100%" class="card-img-top">`));
    }
    card.append($(`<div class="card-body"><div class="card-text">${text} <div class="small text-secondary">${note}</div></div></div>`));
    col.append(card);
    $('#project-cards').append(col);
})

publications.forEach(({ img, title, url, received, authors }) => {
    var col = $('<div class="col publication-col">');
    if (url) {
        var card = $(`<a class="card" href="${url}" target="_blank" style="text-decoration:none">`);
    } else {
        var card = $('<div class="card">')
    }
    if (img) {
        card.append($(`<img src="assets/publications/${img}" width="100%" height="100%" class="card-img-top">`));
    }
    card.append($(`<div class="card-body"><div class="card-text"> 
        <span class="badge rounded-pill text-bg-success me-1">${received}</span>
        ${title}
        <div class="small text-secondary">${authors}</div>
        </div></div>`));
    col.append(card);
    $('#publication-cards').append(col);
})

services.forEach(({ text, time }) => {
    $('#service-list').append($(`
        <a class="list-group-item">
            <div class="d-flex w-100 justify-content-between">
                <div>
                    <p class="my-1">${text}</p>
                </div>
                <small class="text-body-secondary my-1">${time}</small>
            </div>
        </a>
    `));
})