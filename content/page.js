// Новые тексты и настройки страницы. Общие тексты остаются в texts.js.
// Не добавляйте сюда реальные подписи или непубличные сведения.
Object.assign(window.SITE_CONTENT, {
  campaignStoryTitle: 'О ребятах и кампании',
  facultyLabel: 'Факультет',
  facultyPlaceholder: 'Название факультета',
  statusLabel: 'Статус',
  statusOptions: [
    {value: '', label: 'Выберите статус'},
    {value: 'student', label: 'Студент'},
    {value: 'postgraduate', label: 'Аспирант'},
    {value: 'graduate', label: 'Выпускник'},
    {value: 'lecturer', label: 'Преподаватель'},
    {value: 'professor', label: 'Профессор'},
    {value: 'employee', label: 'Сотрудник'},
    {value: 'other', label: 'Другое'}
  ],
  commentLabel: 'Комментарий — необязательно',
  commentPlaceholder: 'При желании добавьте несколько слов',
  commentPrivacy: 'Комментарий не будет автоматически публиковаться в списке поддержки.',
  aboutEyebrow: 'Организаторы инициативы',
  aboutTitle: 'О нас',
  aboutBody: '[Здесь расскажем, кто организует кампанию, что нас объединяет и как мы работаем.]',
  emailContactLabel: 'Связаться с организаторами:',
  organizersEmail: 'msusolidarity@gmail.com',
  aboutNote: 'По вопросам кампании и материалов для распространения напишите организаторам. Сбор подписей пока не запущен.',
  heroImage: './assets/images/IMG_3875.jpg'
});
