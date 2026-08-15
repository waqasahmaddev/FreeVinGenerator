// Client-side search (Fuse.js, lazy-loaded) with an Algolia-style Ctrl+K modal.
(function () {
    var FUSE_URL = 'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js';
    var fuse = null, data = null, results = [], active = 0;
    var modal, input, resultsEl;

    var TYPE_ICON = {
        Tool: '<svg viewBox="0 0 24 24"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
        Article: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>',
        Page: '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z" fill="none"/><path d="M14 2v6h6"/></svg>'
    };

    function esc(s) {
        return (s || '').replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function loadFuse(cb) {
        if (window.Fuse) return cb();
        var s = document.createElement('script');
        s.src = FUSE_URL;
        s.onload = cb;
        s.onerror = function () { resultsEl.innerHTML = '<div class="search-empty">Search failed to load. Please check your connection.</div>'; };
        document.head.appendChild(s);
    }

    function loadData(cb) {
        if (data) return cb();
        fetch('/search.json')
            .then(function (r) { return r.json(); })
            .then(function (d) { data = d; cb(); })
            .catch(function () { resultsEl.innerHTML = '<div class="search-empty">Could not load the search index.</div>'; });
    }

    function initFuse() {
        fuse = new Fuse(data, {
            keys: [
                { name: 'title', weight: 0.6 },
                { name: 'desc', weight: 0.3 },
                { name: 'category', weight: 0.15 },
                { name: 'body', weight: 0.2 }
            ],
            threshold: 0.3,
            ignoreLocation: true,
            minMatchCharLength: 2
        });
    }

    function openSearch() {
        if (!modal) return;
        modal.hidden = false;
        document.body.classList.add('search-open');
        setTimeout(function () { input.focus(); }, 20);
        loadFuse(function () {
            loadData(function () {
                if (!fuse) initFuse();
                doSearch();
            });
        });
    }

    function closeSearch() {
        if (!modal) return;
        modal.hidden = true;
        document.body.classList.remove('search-open');
        input.value = '';
    }

    function doSearch() {
        if (!data) return;
        var q = input.value.trim();
        if (!q) {
            // Empty state: recommend the tools + a few recent articles
            var tools = data.filter(function (d) { return d.type === 'Tool'; });
            var arts = data.filter(function (d) { return d.type === 'Article'; }).slice(0, 4);
            results = tools.concat(arts).map(function (d) { return { item: d }; });
        } else if (fuse) {
            results = fuse.search(q).slice(0, 12);
        }
        active = 0;
        render();
    }

    function render() {
        if (!results.length) {
            resultsEl.innerHTML = '<div class="search-empty">No results for "' + esc(input.value) + '"</div>';
            return;
        }
        var order = ['Tool', 'Article', 'Page'];
        var labels = { Tool: 'Tools', Article: 'Articles', Page: 'Pages' };
        var groups = {};
        results.forEach(function (r) {
            var t = r.item.type || 'Page';
            (groups[t] = groups[t] || []).push(r.item);
        });
        var html = '';
        var idx = 0;
        order.forEach(function (t) {
            if (!groups[t]) return;
            html += '<div class="search-group-label">' + labels[t] + '</div>';
            groups[t].forEach(function (it) {
                html += '<a class="search-item" data-idx="' + idx + '" href="' + esc(it.url) + '">' +
                    '<span class="search-item-icon">' + (TYPE_ICON[t] || '') + '</span>' +
                    '<span class="search-item-text"><span class="search-item-title">' + esc(it.title) + '</span>' +
                    '<span class="search-item-desc">' + esc(it.desc) + '</span></span>' +
                    '<span class="search-item-enter">↵</span></a>';
                idx++;
            });
        });
        resultsEl.innerHTML = html;
        highlight();
    }

    function items() { return resultsEl.querySelectorAll('.search-item'); }

    function highlight() {
        var els = items();
        els.forEach(function (el, i) {
            el.classList.toggle('active', i === active);
        });
        if (els[active]) els[active].scrollIntoView({ block: 'nearest' });
    }

    function move(delta) {
        var n = items().length;
        if (!n) return;
        active = (active + delta + n) % n;
        highlight();
    }

    function go() {
        var el = items()[active];
        if (el) window.location.href = el.getAttribute('href');
    }

    function bind() {
        modal = document.getElementById('searchModal');
        input = document.getElementById('searchInput');
        resultsEl = document.getElementById('searchResults');
        if (!modal) return;

        // Triggers
        var triggers = document.querySelectorAll('.search-trigger');
        triggers.forEach(function (t) { t.addEventListener('click', openSearch); });

        // Ctrl/Cmd + K, and "/" to open; Esc to close
        document.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                modal.hidden ? openSearch() : closeSearch();
            } else if (e.key === 'Escape' && !modal.hidden) {
                closeSearch();
            }
        });

        input.addEventListener('input', doSearch);
        input.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
            else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
            else if (e.key === 'Enter') { e.preventDefault(); go(); }
        });

        // Click outside the box closes it
        modal.addEventListener('mousedown', function (e) {
            if (e.target === modal) closeSearch();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bind);
    } else {
        bind();
    }
})();
