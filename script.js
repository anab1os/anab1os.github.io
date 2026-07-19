// ============================================================
// ДАННЫЕ ДЛЯ МОДАЛЬНЫХ ОКОН
// ============================================================
const toolDetails = {
    sstool: {
        title: 'SSTool',
        body: `
            <p><strong>SSTool</strong> — инструмент для анализа и парсинга данных.</p>
            <p>Можем юзать сборку очень хороших утилит для проверки (изначально предназначенной для майнкрафта, но для проверки на серваке в КС2 тоже вполне подойдёт).</p>
            <p><a href="https://github.com/Orbdiff/SSTool/releases" target="_blank" rel="noopener noreferrer">Релизы SSTool на GitHub</a></p>
        `
    },
    bam: {
        title: 'BAM Parser',
        body: `
            <p><strong>BAM Parser</strong> — извлекает пути и время последнего запуска из артефакта BAM.</p>
            <p><strong>Что он делает?</strong></p>
            <ul>
                <li>Анализирует пути исполняемых файлов из ключа реестра BAM.</li>
                <li>Преобразует путь из формата <code>\\Device\\HarddiskVolume&lt;номер&gt;\\</code> в букву диска.</li>
                <li>Получает время последнего запуска файла.</li>
                <li>Определяет, был ли файл запущен в последней сессии пользователя.</li>
                <li>Проверяет цифровую подпись для каждого найденного файла.</li>
                <li>Сообщает <strong>«Удален»</strong>, если файл не найден.</li>
                <li>Определяет <strong>конкретные цифровые подписи</strong> (например, Slinky и Vape).</li>
                <li>Применяет <strong>общие проверки</strong> к каждому найденному файлу.</li>
            </ul>
            <p><strong>Примечание:</strong> Проверки <code>A2</code> и <code>F</code> могут иногда давать «ложные срабатывания».</p>
            <p><strong>ВАЖНО:</strong></p>
            <ul>
                <li>Скопируйте путь из ячейки: <strong>Ctrl + ЛКМ</strong>.</li>
                <li>Если путь подсвечен красным — нажмите для деталей.</li>
                <li>Фильтры: только неподписанные / только с общими проверками / только текущая сессия.</li>
            </ul>
            <p><a href="https://github.com/spokwn/BAM-parser" target="_blank" rel="noopener noreferrer">Репозиторий BAM Parser</a></p>
        `
    },
    sysinformer: {
        title: 'System Informer',
        body: `
            <p><strong>System Informer</strong> (ранее Process Hacker) — используйте Canary-сборку.</p>
            <p><strong>Инструкция:</strong></p>
            <ul>
                <li>Запустите с правами администратора</li>
                <li>Options → Enable Kernel-Mode Driver</li>
                <li>Дважды кликните по процессу → Memory → Options → Strings</li>
                <li>Установите минимум 4 символа, включите <code>Extend Unicode</code> и <code>Mapped</code></li>
            </ul>
            <p><a href="https://systeminformer.sourceforge.io/canary" target="_blank" rel="noopener noreferrer">Скачать Canary</a></p>
        `
    },
    prefetchview: {
        title: 'PrefetchView++',
        body: `
            <p><strong>PrefetchView++</strong> — парсит префетч и позволяет сортировать по сигнатурам, находить ненайденные файлы, просматривать модули.</p>
            <p>Проверяет базовые байпасы: поток sechost.dll, SysMain, логгирование префетча.</p>
            <p><a href="https://github.com/Orbdiff/PrefetchView/releases/tag/v1.5.3" target="_blank" rel="noopener noreferrer">Релиз v1.5.3</a></p>
        `
    },
    userassist: {
        title: 'UserAssistsView',
        body: `
            <p><strong>UserAssistsView</strong> (NirSoft) — парсер артефакта UserAssist.</p>
            <ul>
                <li>Анализирует USNJrnl на Hex Replace</li>
                <li>Включает правила YARA для обнаружения читов</li>
                <li>Классифицирует подписи: <code>Signed, Unsigned, Cheat, Fake Signature, Not Found</code></li>
            </ul>
            <p><a href="https://www.nirsoft.net/utils/userassist_view.html" target="_blank" rel="noopener noreferrer">Официальная страница</a></p>
        `
    },
    winprefetch: {
        title: 'WinPrefetchView',
        body: `
            <p><strong>WinPrefetchView</strong> — анализ Prefetch-файлов (.pf).</p>
            <p>Извлекает: имя процесса, путь, количество запусков, дату, список зависимостей.</p>
            <p>Анализирует <code>cmd.exe</code>, <code>conhost.exe</code>, <code>consent.exe</code> (UAC).</p>
            <p><a href="https://www.nirsoft.net/utils/win_prefetch_view.html" target="_blank" rel="noopener noreferrer">Официальная страница</a></p>
        `
    },
    journaltrace: {
        title: 'Journal Trace',
        body: `
            <p><strong>JournalTrace</strong> — инструмент для анализа <code>$J</code> (журнала изменений NTFS), который позволяет отслеживать создание, изменение, переименование и удаление файлов.</p>
            <p>В отличие от стандартных логов Windows, USN Journal работает на уровне файловой системы и фиксирует почти каждое изменение, включая действия с уже удалёнными файлами.</p>
            <p><strong>Начало работы</strong></p>
            <ul>
                <li><strong>Drive → Select</strong> — выбор диска</li>
                <li><strong>Drive → Scan</strong> — сканирование</li>
                <li><strong>Layout → Data Grid</strong> или <strong>Directory Tree</strong> — выбор режима отображения</li>
            </ul>
            <p><strong>Data Grid</strong></p>
            <p>В режиме <strong>Data Grid</strong> доступна фильтрация по параметрам <code>Directory</code>, <code>Name</code>, <code>Date</code> и <code>Reason</code>. Это позволяет искать файлы по названию и расширению, а также видеть события открытия, изменения, удаления и переименования.</p>
            <p><em>Пример:</em> ищем <code>.exe</code> и сортируем по <code>Date</code>. Обнаружение событий <code>File Deleted</code> или <code>File Deleted | Close</code>.</p>
            <p>Также возможны события переименования: <code>Rename: Old name → Rename: New name</code>. Нажав ПКМ по записи, можно просмотреть подробную информацию.</p>
            <p><strong>Directory Tree</strong></p>
            <p>В режиме <strong>Directory Tree</strong> выбираем диск <code>C:</code> и нужную папку, чтобы просмотреть историю взаимодействий с файлами внутри неё. Здесь можно проверить <code>$Recycle.Bin</code> (корзина) на наличие удалённых файлов, а также проанализировать очистку других папок в <code>C:/</code>.</p>
            <p>Отдельное внимание стоит уделить папке <strong>Prefetch</strong> — удаление файлов <code>.pf</code> может указывать на попытку скрыть факт выполнения (execution) приложения.</p>
            <p><strong>Итог</strong></p>
            <p>JournalTrace позволяет восстановить полную историю любого файла, даже если он был окончательно удалён. Это делает инструмент незаменимым для глубокого анализа и проведения расследований.</p>
            <p><a href="https://github.com/spokwn/JournalTrace/releases/tag/1.2" target="_blank" rel="noopener noreferrer">Релиз 1.2</a></p>
        `
    },
    shellbag: {
        title: 'ShellBagAnalyzer',
        body: `
            <p><strong>ShellBagAnalyzer</strong> — извлекает и анализирует ShellBags (история открытых папок).</p>
            <p>Показывает посещённые и удалённые папки. При чистке создаётся <code>shellbag_analyzer_cleaner.ini</code>.</p>
            <p><a href="https://privazer.com/en/download-shellbag-analyzer-shellbag-cleaner.php" target="_blank" rel="noopener noreferrer">Скачать</a></p>
        `
    },
    everything: {
        title: 'Everything',
        body: `
            <p><strong>Everything</strong> — мгновенный поиск файлов в Windows.</p>
            <ul>
                <li>Логические операторы: AND (пробел), OR (|), NOT (!)</li>
                <li>Фильтры по типу, регулярные выражения</li>
                <li>Поиск по размеру <code>size:>10mb</code>, дате <code>dm:>2026-06-04</code>, атрибутам <code>attrib:h</code></li>
            </ul>
            <p><a href="https://www.voidtools.com/everything-1.5a/" target="_blank" rel="noopener noreferrer">Скачать Everything 1.5a</a></p>
            <p><a href="https://www.voidtools.com/ru-ru/support/everything/searching/" target="_blank" rel="noopener noreferrer">Полная справка по поиску</a></p>
        `
    },
    lastactivity: {
        title: 'LastActivityView',
        body: `
            <p><strong>LastActivityView</strong> (NirSoft) — сводная таблица последних действий пользователя.</p>
            <ul>
                <li>Собирает данные из Prefetch, UserAssist, BAM, реестра</li>
                <li>Фильтрация по типу события, имени файла и др.</li>
            </ul>
            <p><a href="https://www.nirsoft.net/utils/last_activity_view.html" target="_blank" rel="noopener noreferrer">Официальная страница</a></p>
        `
    }
};

// ============================================================
// СОСТОЯНИЕ
// ============================================================
let currentTab = 'overview';
let searchQuery = '';

// ============================================================
// DOM-Ссылки
// ============================================================
const themeToggle = document.getElementById('themeToggle');
const goTopBtn = document.getElementById('goTopBtn');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const searchCount = document.getElementById('searchCount');
const modalOverlay = document.getElementById('toolModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');
const readProgress = document.getElementById('readProgress');
const sidebarList = document.getElementById('sidebarList');
const checklistContainer = document.getElementById('checklistContainer');
const checklistProgress = document.getElementById('checklistProgress');
const checklistStats = document.getElementById('checklistStats');

// ============================================================
// ТЕМА
// ============================================================
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '🌙' : '☀️';
});

// ============================================================
// КНОПКА "НАВЕРХ"
// ============================================================
window.addEventListener('scroll', () => {
    goTopBtn.classList.toggle('visible', window.scrollY > 300);
}, { passive: true });

goTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
// ПРОГРЕСС ЧТЕНИЯ
// ============================================================
function updateReadProgress() {
    const h = document.documentElement;
    const scrollable = h.scrollHeight - h.clientHeight;
    const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;
    readProgress.style.width = pct + '%';
}
window.addEventListener('scroll', updateReadProgress, { passive: true });
window.addEventListener('resize', updateReadProgress);
updateReadProgress();

// ============================================================
// ВКЛАДКИ
// ============================================================
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabId) {
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    tabContents.forEach(c => c.classList.toggle('active', c.id === tabId));
    currentTab = tabId;
    buildToc();
    if (searchQuery) performSearch(searchQuery);
    setTimeout(updateScrollSpy, 50);
}

// ИСПРАВЛЕНИЕ: пропускаем кнопки внутри выпадающего меню
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (btn.closest('.dropdown-menu')) return;
        switchTab(btn.dataset.tab);
    });
});

// ============================================================
// ОГЛАВЛЕНИЕ (TOC) – динамическое на основе заголовков
// ============================================================
function buildToc() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) {
        sidebarList.innerHTML = '<li style="opacity:0.6;">Нет разделов</li>';
        return;
    }
    const headings = activeTab.querySelectorAll('h3[id], h4[id]');
    if (!headings.length) {
        sidebarList.innerHTML = '<li style="opacity:0.6;">Нет разделов</li>';
        return;
    }
    let html = '';
    headings.forEach(h => {
        const level = h.tagName.toLowerCase();
        const cls = level === 'h4' ? 'sub-item' : '';
        const label = h.textContent.trim();
        html += `<li class="${cls}"><a onclick="scrollToSection('${h.id}')">${label}</a></li>`;
    });
    sidebarList.innerHTML = html;
}

// ============================================================
// SCROLL-TO-SECTION (глобальная)
// ============================================================
window.scrollToSection = function(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = 90;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

// ============================================================
// SCROLL-SPY
// ============================================================
function updateScrollSpy() {
    const activeTab = document.querySelector('.tab-content.active');
    if (!activeTab) return;
    const headings = [...activeTab.querySelectorAll('h3[id], h4[id]')];
    if (!headings.length) return;
    const offset = 110;
    let currentId = headings[0].id;
    for (const hd of headings) {
        const rect = hd.getBoundingClientRect();
        if (rect.top - offset <= 0) currentId = hd.id;
    }
    sidebarList.querySelectorAll('a').forEach(a => {
        const onclick = a.getAttribute('onclick') || '';
        a.classList.toggle('active', onclick.includes("'" + currentId + "'"));
    });
}

window.addEventListener('scroll', updateScrollSpy, { passive: true });

// ============================================================
// ПОИСК
// ============================================================
function clearHighlights() {
    document.querySelectorAll('mark.search-hl').forEach(m => {
        const parent = m.parentNode;
        parent.replaceChild(document.createTextNode(m.textContent), m);
        parent.normalize();
    });
}

function performSearch(query) {
    searchQuery = query;
    const q = query.trim().toLowerCase();

    document.querySelectorAll('.card').forEach(c => {
        c.classList.remove('hidden', 'highlight');
    });

    if (!q) {
        searchCount.textContent = '';
        searchClear.classList.remove('visible');
        clearHighlights();
        return;
    }

    let totalMatches = 0;
    let firstTabWithMatches = null;

    document.querySelectorAll('.tab-content').forEach(tab => {
        const cards = tab.querySelectorAll('.card');
        let tabMatches = 0;
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const match = text.includes(q);
            card.classList.toggle('hidden', !match);
            card.classList.toggle('highlight', match);
            if (match) {
                tabMatches++;
                totalMatches++;
            }
        });
        if (tabMatches > 0 && firstTabWithMatches === null) {
            firstTabWithMatches = tab.id;
        }
    });

    if (totalMatches > 0) {
        searchCount.textContent = `(${totalMatches})`;
        searchClear.classList.add('visible');

        const activeTab = document.querySelector('.tab-content.active');
        if (activeTab) {
            const visible = activeTab.querySelectorAll('.card:not(.hidden)');
            if (visible.length === 0 && firstTabWithMatches) {
                switchTab(firstTabWithMatches);
            }
        }
        highlightMatches(q);
    } else {
        searchCount.textContent = '(0)';
        searchClear.classList.add('visible');
        clearHighlights();
    }
}

function highlightMatches(query) {
    clearHighlights();
    const q = query.trim().toLowerCase();
    if (q.length < 2) return;

    const cards = document.querySelectorAll('.tab-content .card:not(.hidden)');
    cards.forEach(card => {
        const walker = document.createTreeWalker(card, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
                const parent = node.parentNode;
                if (!parent) return NodeFilter.FILTER_REJECT;
                const tag = parent.nodeName;
                if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'BUTTON' || tag === 'MARK') return NodeFilter.FILTER_REJECT;
                return node.nodeValue.toLowerCase().includes(q) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const targets = [];
        let node;
        while ((node = walker.nextNode())) targets.push(node);

        targets.forEach(textNode => {
            const text = textNode.nodeValue;
            const lower = text.toLowerCase();
            const frag = document.createDocumentFragment();
            let i = 0;
            let idx;
            while ((idx = lower.indexOf(q, i)) !== -1) {
                if (idx > i) frag.appendChild(document.createTextNode(text.slice(i, idx)));
                const mark = document.createElement('mark');
                mark.className = 'search-hl';
                mark.textContent = text.slice(idx, idx + q.length);
                frag.appendChild(mark);
                i = idx + q.length;
            }
            if (i < text.length) frag.appendChild(document.createTextNode(text.slice(i)));
            textNode.parentNode.replaceChild(frag, textNode);
        });
    });
}

searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    performSearch('');
    searchInput.focus();
});

// ============================================================
// ГОРЯЧИЕ КЛАВИШИ
// ============================================================
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
        const tag = (document.activeElement && document.activeElement.tagName) || '';
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
            e.preventDefault();
            searchInput.focus();
        }
    } else if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        performSearch('');
        searchInput.blur();
    }
});

// ============================================================
// МОДАЛЬНЫЕ ОКНА
// ============================================================
function openModal(toolKey) {
    const data = toolDetails[toolKey];
    if (!data) return;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.tool-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(btn.dataset.tool);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================================
// КОПИРОВАНИЕ
// ============================================================
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
        const orig = btn.textContent;
        btn.textContent = '✓';
        setTimeout(() => { btn.textContent = orig; }, 1400);
    }).catch(() => {
        const orig = btn.textContent;
        btn.textContent = 'Ошибка';
        setTimeout(() => { btn.textContent = orig; }, 1400);
    });
});

// ============================================================
// ЧЕК-ЛИСТ (единый ключ cs2_checklist_v3)
// ============================================================
const checklistItems = [
    'Проверена CS2 по фасту (инвентарь, оверлей и т.д.)',
    'Скачаны инструменты с официальных сайтов',
    'Проверка папок: Загрузки, C:\, AppData, LocalAppData, Program Files',
    'Проверка папки CS2 (на наличие Lua, DLL, .exe)',
    'Поиск через Everything (ext:.exe|ext:.dll + тексты)',
    'Анализ JournalTrace (удаления, переименования)',
    'Проверка $Recycle.Bin',
    'Проверка Prefetch (C:\Windows\Prefetch + программы-анализаторы)',
    'Проверка реестра (подозрительные ключи)',
    'Проверка автозагрузки (shell:startup)',
    'Анализ памяти через System Informer (TIER 2)',
    'Фиксация доказательств (скриншоты, логи)'
];

let checklistState = {};
try {
    const saved = localStorage.getItem('cs2_checklist_v3');
    if (saved) checklistState = JSON.parse(saved);
} catch { }

function renderChecklist() {
    let html = '';
    let doneCount = 0;
    checklistItems.forEach((label, idx) => {
        const id = 'cl_' + idx;
        const checked = !!checklistState[id];
        if (checked) doneCount++;
        html += `
            <div class="checklist-item ${checked ? 'done' : ''}" data-id="${id}">
                <input type="checkbox" ${checked ? 'checked' : ''} />
                <span>${label}</span>
            </div>
        `;
    });
    checklistContainer.innerHTML = html;
    updateChecklistStats(doneCount);
}

function updateChecklistStats(doneCount) {
    const total = checklistItems.length;
    const pct = total > 0 ? (doneCount / total) * 100 : 0;
    checklistProgress.style.width = pct + '%';
    checklistStats.textContent = `${doneCount} из ${total} выполнено`;
}

checklistContainer.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const div = e.target.closest('.checklist-item');
        const id = div.dataset.id;
        checklistState[id] = e.target.checked;
        localStorage.setItem('cs2_checklist_v3', JSON.stringify(checklistState));
        div.classList.toggle('done', e.target.checked);
        let done = 0;
        checklistContainer.querySelectorAll('.checklist-item').forEach(el => {
            if (el.querySelector('input').checked) done++;
        });
        updateChecklistStats(done);
    }
});

document.getElementById('exportChecklistBtn').addEventListener('click', () => {
    const now = new Date().toLocaleString('ru-RU');
    let text = `Чек-лист проверки CS2 — ${now}\n${'='.repeat(44)}\n\n`;
    let done = 0;
    checklistContainer.querySelectorAll('.checklist-item').forEach(el => {
        const checked = el.querySelector('input').checked;
        const label = el.querySelector('span').textContent;
        text += `${checked ? '[✓]' : '[ ]'} ${label}\n`;
        if (checked) done++;
    });
    text += `\n${'='.repeat(44)}\nВыполнено: ${done} из ${checklistItems.length}`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `checklist_${new Date().toISOString().slice(0,10)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
});

document.getElementById('resetChecklistBtn').addEventListener('click', () => {
    if (confirm('Сбросить все пункты чек-листа?')) {
        checklistState = {};
        localStorage.setItem('cs2_checklist_v3', JSON.stringify(checklistState));
        renderChecklist();
    }
});

// ============================================================
// ДРОПДАУН "РАЗДЕЛЫ" (исправлен: добавлен Escape)
// ============================================================
const sectionsToggle = document.getElementById('sectionsToggle');
const sectionsMenu = document.getElementById('sectionsMenu');

sectionsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sectionsMenu.classList.toggle('open');
});

// Закрываем при клике вне
document.addEventListener('click', () => {
    sectionsMenu.classList.remove('open');
});

// Закрываем по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        sectionsMenu.classList.remove('open');
    }
});

// При клике на пункт меню — переключаем вкладку и закрываем
sectionsMenu.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const tabId = btn.dataset.tab;
        if (tabId) switchTab(tabId);
        sectionsMenu.classList.remove('open');
    });
});

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================
buildToc();
renderChecklist();
updateScrollSpy();
setTimeout(updateScrollSpy, 100);

document.addEventListener('click', (e) => {
    if (e.target.matches('#sidebarList a')) {
        sidebarList.querySelectorAll('a').forEach(a => a.classList.remove('active'));
        e.target.classList.add('active');
    }
});

console.log('✅ CS2 Check — полностью загружен (v2, улучшенный)'); 
