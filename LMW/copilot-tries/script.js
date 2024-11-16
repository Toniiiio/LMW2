document.addEventListener('DOMContentLoaded', function() {
    const datepicker = document.getElementById('datepicker');
    const calendar = document.getElementById('calendar');

    datepicker.addEventListener('focus', function() {
        calendar.style.display = 'block';
    });

    document.addEventListener('click', function(event) {
        if (!datepicker.contains(event.target) && !calendar.contains(event.target)) {
            calendar.style.display = 'none';
        }
    });

    // Generate calendar
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarTable = document.createElement('table');
    const headerRow = document.createElement('tr');

    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });

    calendarTable.appendChild(headerRow);

    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let dateCount = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDay) {
                cell.textContent = '';
            } else if (dateCount > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = dateCount;
                cell.addEventListener('click', function() {
                    datepicker.value = `${year}-${month + 1}-${dateCount}`;
                    calendar.style.display = 'none';
                });
                dateCount++;
            }
            row.appendChild(cell);
        }
        calendarTable.appendChild(row);
    }

    calendar.appendChild(calendarTable);
});
