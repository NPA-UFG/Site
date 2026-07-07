// Mobile nav toggle
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    toggle.closest('.nav').classList.toggle('open');
  }
});

// Projects area tabs
const AREAS = {
  1: { title: 'Área 1', text: 'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
  2: { title: 'Área 2', text: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
  3: { title: 'Área 3', text: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
  4: { title: 'Área 4', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
  5: { title: 'Área 5', text: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
  6: { title: 'Área 6', text: 'Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' }
};

const tabs = document.querySelectorAll('.tab');
if (tabs.length) {
  const titleEl = document.getElementById('area-title');
  const textEl = document.getElementById('area-text');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const n = tab.dataset.area;
      if (AREAS[n]) {
        titleEl.textContent = AREAS[n].title;
        textEl.textContent = AREAS[n].text;
      }
    });
  });
}
