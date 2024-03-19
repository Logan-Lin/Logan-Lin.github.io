var lan_code = 'eng';
if ((navigator.language || navigator.userLanguage).indexOf('zh') === 0) {
    lan_code = 'chn';
}
var saved_lan_code = get_cookie('lan_code');
if (saved_lan_code !== "" && saved_lan_code !== undefined) {
    lan_code = saved_lan_code;
}

var lan_switch_btn = $('#lan-switch-btn');
lan_switch_btn.find('span').text(lan_code === 'chn' ? 'English' : "中文")
lan_switch_btn.on('click', () => {
    lan_code = (lan_code === 'chn') ? 'eng' : 'chn';
    set_cookie('lan_code', lan_code, 30);
    location.reload();
})


fetch(`./contents_${lan_code}.json`).then((response) => response.json())
    .then(({ titles, profile, projects, publications, services, awards, references, copyright, footer }) => {
        for (var key in titles) {
            $(`.${key}-text`).text(titles[key]);
        }

        $('#html-title,#page-title').text(`${profile['name']}${lan_code === 'chn' ? "的学术首页" : "'s Scholar Page"}`);
        $('#photo').attr('src', `assets/${profile['photo']}`);

        profile['topics'].forEach((item) => {
            var badge = $(`<span class="badge text-bg-info me-1">${item}</span>`);
            $('#research-topics').append(badge);
        })

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

        projects.forEach(({ img, text, urls, note }) => {
            var col = $('<div class="col project-col">');
            var card = $('<div class="card shadow-sm">')
            if (img) {
                card.append($(`<img src="assets/projects/${img}" width="100%" height="100%" class="card-img-top">`));
            }
            var link_row = $('<span>');
            for (url_name in urls) {
                link_row.append($(`
                    <a class="btn badge btn-light text-info me-1" href="${urls[url_name]}" target="_blank">
                        <i class="bi bi-link-45deg"></i>${url_name}</a>
                `));
            }
            card.append($(`<div class="card-body">`).append(
                $(`<div class="card-text">`).append([
                    $(`<span class="me-2">${text}</span>`),
                    link_row,
                    $(`<div class="small text-secondary mt-2">${note}</div>`)
                ])
            ));
            col.append(card);
            $('#project-cards').append(col);
        })

        publications.forEach(({ img, title, urls, received, authors }) => {
            var col = $('<div class="col publication-col">');
            var card = $('<div class="card shadow-sm">')
            if (img) {
                card.append($(`<img src="assets/publications/${img}" width="100%" height="100%" class="card-img-top">`));
            }
            var link_row = $('<span>');
            for (url_name in urls) {
                link_row.append($(`
                    <a class="btn badge btn-light text-info me-1" href="${urls[url_name]}" target="_blank">
                        <i class="bi bi-link-45deg"></i>${url_name}</a>
                `));
            }
            card.append($('<div class="card-body">').append($('<div class="card-text">').append([
                `<span class="badge rounded-pill text-bg-success">${received}</span>`,
                `<span class="mx-2">${title}</span>`,
                link_row,
                `<div class="small text-secondary mt-2">${authors}</div>`
            ])));
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

        awards.forEach(({ text, time }) => {
            $('#award-list').append($(`
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

        references.forEach((list) => {
            var list_group = $('<div class="list-group shadow-sm">');
            list.forEach(({ name, note, link }) => {
                var list_item = $(`
                    <a class="list-group-item list-group-item-action" href="${link}" target="_blank">
                        <div class="d-flex w-100 justify-content-between">
                            <p class="my-1">${name}</p>
                            <small class="text-body-secondary my-1">${note}</small>
                        </div>
                    </a>
                `);
                list_group.append(list_item);
            });
            $('#reference-row').append($('<div class="col">').append(list_group));
        })

        $('#copyright').text(`© ${copyright}`);

        footer.forEach(({ text, url }) => {
            $('#footer-links').append(`
                <li class="nav-item">
                    <a href="${url}" target="_blank" class="nav-link px-2 text-body-secondary">${text}</a>
                </li>`);
        })

        masonry_reload($('#project-cards'), '.project-col');
        masonry_reload($('#publication-cards'), '.publication-col');
        masonry_reload_on_images($('#project-cards'), '.project-col');
        masonry_reload_on_images($('#publication-cards'), '.publication-col');
    })


function masonry_reload(parent_dom, item_selector) {
    parent_dom.masonry({
        itemSelector: item_selector,
        columnWidth: item_selector,
        transitionDuration: 0,
        percentPosition: true
    }).masonry('reloadItems').masonry('layout');

    parent_dom.masonry({
        itemSelector: item_selector,
        columnWidth: item_selector,
        transitionDuration: 500,
        percentPosition: true
    });
}

function masonry_reload_on_images(parent_dom, item_selector) {
    var images = parent_dom.find('img');
    images.each(() => {
        if (this.complete) {
            $(this).trigger('load');
        }
    })
    images.on('load', () => {
        parent_dom.masonry({
            itemSelector: item_selector,
            columnWidth: item_selector,
            transitionDuration: 500,
            percentPosition: true
        }).masonry('reloadItems').masonry('layout');
    })
}

function set_cookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function get_cookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}