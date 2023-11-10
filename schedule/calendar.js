console.log('calendar');

const workbook = new ExcelJS.Workbook();

workbook.creator = 'Aleksey';
workbook.lastModifiedBy = 'bot';
workbook.created = new Date(2023, 10, 18);
workbook.modified = new Date();
workbook.lastPrinted = new Date();

const worksheet = workbook.addWorksheet('Calendar');

worksheet.columns = [
 { header: 'Date', key: 'date' },
 { header: 'Time', key: 'time' }, 
 { header: 'Name', key: 'name' },
 { header: 'Email', key: 'email' },
 { header: 'Subject', key: 'subject' },
 { header: 'Tutor', key: 'tutor' }
];

const dateCol = worksheet.getColumn('date');
const timeCol = worksheet.getColumn('time');
const nameCol = worksheet.getColumn('name');
const emailCol = worksheet.getColumn('email');
const subjectCol = worksheet.getColumn('subject');
const tutorCol = worksheet.getColumn('tutor');

function schedule(date, time, name, email, subject, tutor) {
    worksheet.addRow({ date, time, name, email, subject, tutor });
}

const fileList = document.getElementById('fileItem').files;

async function write() {
    const blob = new Blob(fileList[0], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
    const buffer = await blob.arrayBuffer();

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);
}

write();
console.log('ayo');
