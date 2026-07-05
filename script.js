document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Переключение вкладок
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) {
                    content.classList.add('active');
                }
            });

            updateSidebar(targetTab);
        });
    });

    // Инициализация
    updateSidebar('overview');

    // Кнопки копирования
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('copy-btn')) {
            const text = e.target.getAttribute('data-copy');
            if (text) {
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = e.target.textContent;
                    e.target.textContent = '✓ Скопировано!';
                    setTimeout(() => {
                        e.target.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Ошибка копирования:', err);
                });
            }
        }
    });

    // Чек-лист
    initChecklist();
});

function updateSidebar(tab) {
    const sidebar = document.getElementById('sidebar');
    const links = {
        overview: [{ id: 'basics', label: 'Основные положения' }],
        tier3: [
            { id: 'everything', label: 'Everything' },
            { id: 'journal', label: 'JournalTrace' }
        ],
        tier2: [
            { id: 'sysinf', label: 'System Informer' }
        ],
        tools: [
            { id: 'sysinf', label: 'System Informer' }
        ],
        methods: [],
        checklist: [],
        important: []
    };

    const items = links[tab] || [];
    let html = `<h3>📑 Содержание</h3><ul class="sidebar-list">`;
    if (items.length === 0) {
        html += `<li style="color:#888;font-size:0.9em;">Нет разделов</li>`;
    } else {
        items.forEach(item => {
            html += `<li><a onclick="scrollToSection('${item.id}')">${item.label}</a></li>`;
        });
    }
    html += `</ul>`;
    sidebar.innerHTML = html;
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Чек-лист
function initChecklist() {
    const container = document.getElementById('checklistContainer');
    if (!container) return;

    const items = [
        { id: 'cl1', label: '✅ Подключение к ПК через AnyDesk/RustDesk' },
        { id: 'cl2', label: '✅ Скачаны все инструменты с официальных сайтов' },
        { id: 'cl3', label: '✅ Проверка папок: Загрузки, C:\, %AppData%, %LocalAppData%' },
        { id: 'cl4', label: '✅ Проверка папки CS2 (Lua, DLL, .exe)' },
        { id: 'cl5', label: '✅ Поиск через Everything (ext:.exe|ext:.dll)' },
        { id: 'cl6', label: '✅ Анализ JournalTrace (удаления, переименования)' },
        { id: 'cl7', label: '✅ Проверка $Recycle.Bin' },
        { id: 'cl8', label: '✅ Проверка Prefetch (C:\\Windows\\Prefetch)' },
        { id: 'cl9', label: '✅ Проверка реестра (подозрительные ключи)' },
        { id: 'cl10', label: '✅ Проверка автозагрузки (shell:startup)' },
        { id: 'cl11', label: '✅ Анализ памяти через System Informer (TIER 2)' },
        { id: 'cl12', label: '✅ Фиксация доказательств (скриншоты, логи)' }
    ];

    // Загрузка сохранённого состояния
    let saved = {};
    try {
        const data = localStorage.getItem('cs2_checklist');
        if (data) saved = JSON.parse(data);
    } catch {}

    let checkedCount = 0;
    let html = '';
    items.forEach(item => {
        const checked = saved[item.id] || false;
        if (checked) checkedCount++;
        html += `
            <div class="checklist-item ${checked ? 'done' : ''}" data-id="${item.id}">
                <input type="checkbox" ${checked ? 'checked' : ''}>
                <span>${item.label}</span>
            </div>
        `;
    });

    container.innerHTML = html;
    updateChecklistStats(checkedCount, items.length);

    // События
    container.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox') {
            const itemDiv = e.target.closest('.checklist-item');
            const id = itemDiv.dataset.id;
            const checked = e.target.checked;

            // Сохранение
            saved[id] = checked;
            localStorage.setItem('cs2_checklist', JSON.stringify(saved));

            // Обновление UI
            itemDiv.classList.toggle('done', checked);

            // Пересчёт
            const allItems = container.querySelectorAll('.checklist-item');
            let newCount = 0;
            allItems.forEach(el => {
                if (el.querySelector('input').checked) newCount++;
            });
            updateChecklistStats(newCount, items.length);
        }
    });
}

function updateChecklistStats(done, total) {
    const progress = document.getElementById('checklistProgress');
    const stats = document.getElementById('checklistStats');
    if (progress) {
        const pct = total > 0 ? (done / total) * 100 : 0;
        progress.style.width = pct + '%';
    }
    if (stats) {
        stats.textContent = `${done} из ${total} выполнено`;
    }
}