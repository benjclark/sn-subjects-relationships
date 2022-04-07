import fetch from 'node-fetch';

const journalResponse = await fetch('https://contenthub-api.springernature.app/api/v1/journals?pageSize=10000');
const journalData = await journalResponse.json();

const journals = [];

journalData.journals.forEach(journal => {
    journals.push(journal.id);
})

journals.forEach(async journalId => {
    let subjectsResponse = await fetch(`https://contenthub-api.springernature.app/api/v1/subjects?hasJournal=nplants&pageSize=1000`);
    let subjectsForJournalData = await subjectsResponse.json();
    if (subjectsForJournalData.subjects.length > 0) {
        subjectsForJournalData.subjects.forEach(subject => {
            console.log(`journal id: ${journalId} is related to subject: ${subject.prefLabel}`);
        });
    }
});
